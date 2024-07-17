import express from 'express'
import * as crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'; 

const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  const amount = req.query.amount
  const lessonId = req.query.lessonId // 新增：從查詢參數獲取課程ID
  const orderNumber = 'ORD-' + uuidv4().slice(0, 8).toUpperCase();
  //綠界全方位金流技術文件：
  // https://developers.ecpay.com.tw/?p=2856
  // 信用卡測試卡號：4311-9522-2222-2222 安全碼 222

  ////////////////////////改以下參數即可////////////////////////
  //一、選擇帳號，是否為測試環境
  const MerchantID = '3002607' //必填
  const HashKey = 'pwFHCqoQZGmho4w6' //3002607
  const HashIV = 'EkRm7iFT261dpevs' //3002607
  let isStage = true // 測試環境： true；正式環境：false

  //二、輸入參數
  const TotalAmount = amount
  const TradeDesc = '商店線上付款'
  const ItemName = '活力啟點課程'
  const ReturnURL = `http://localhost:3001/lessons/payment-result?lessonId=${lessonId}`
  const OrderResultURL = `http://localhost:3000/lessons/success?lessonId=${lessonId}` //前端成功頁面
  const ChoosePayment = 'ALL'

  ////////////////////////以下參數不用改////////////////////////
  const stage = isStage ? '-stage' : ''
  const algorithm = 'sha256'
  const digest = 'hex'
  const APIURL = `https://payment${stage}.ecpay.com.tw//Cashier/AioCheckOut/V5`
  const MerchantTradeNo = `od${new Date().getFullYear()}${(
    new Date().getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}${new Date()
    .getDate()
    .toString()
    .padStart(2, '0')}${new Date()
    .getHours()
    .toString()
    .padStart(2, '0')}${new Date()
    .getMinutes()
    .toString()
    .padStart(2, '0')}${new Date()
    .getSeconds()
    .toString()
    .padStart(2, '0')}${new Date().getMilliseconds().toString().padStart(2)}`

  const MerchantTradeDate = new Date().toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  //三、計算 CheckMacValue 之前
  let ParamsBeforeCMV = {
    MerchantID: MerchantID,
    MerchantTradeNo: MerchantTradeNo,
    MerchantTradeDate: MerchantTradeDate.toString(),
    PaymentType: 'aio',
    EncryptType: 1,
    TotalAmount: TotalAmount,
    TradeDesc: TradeDesc,
    ItemName: ItemName,
    ReturnURL: ReturnURL,
    ChoosePayment: ChoosePayment,
    OrderResultURL,
  }

  //四、計算 CheckMacValue
  function CheckMacValueGen(parameters, algorithm, digest) {
    let Step0

    Step0 = Object.entries(parameters)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')

    function DotNETURLEncode(string) {
      const list = {
        '%2D': '-',
        '%5F': '_',
        '%2E': '.',
        '%21': '!',
        '%2A': '*',
        '%28': '(',
        '%29': ')',
        '%20': '+',
      }

      Object.entries(list).forEach(([encoded, decoded]) => {
        const regex = new RegExp(encoded, 'g')
        string = string.replace(regex, decoded)
      })

      return string
    }

    const Step1 = Step0.split('&')
      .sort((a, b) => {
        const keyA = a.split('=')[0]
        const keyB = b.split('=')[0]
        return keyA.localeCompare(keyB)
      })
      .join('&')
    const Step2 = `HashKey=${HashKey}&${Step1}&HashIV=${HashIV}`
    const Step3 = DotNETURLEncode(encodeURIComponent(Step2))
    const Step4 = Step3.toLowerCase()
    const Step5 = crypto.createHash(algorithm).update(Step4).digest(digest)
    const Step6 = Step5.toUpperCase()
    return Step6
  }
  const CheckMacValue = CheckMacValueGen(ParamsBeforeCMV, algorithm, digest)

  //五、將所有的參數製作成 payload
  const AllParams = { ...ParamsBeforeCMV, CheckMacValue }
  const inputs = Object.entries(AllParams)
    .map(function (param) {
      return `<input name=${param[0]} value="${param[1].toString()}">`
    })
    .join('')

  //六、製作送出畫面
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>全方位金流-測試</title>
  </head>
  <body>
      <form method="post" action="${APIURL}">
  ${inputs}
  <input type="submit" value="送出參數" style="display:none">
      </form>
  <script>
    document.forms[0].submit();
  </script>
  </body>
  </html>
  `

  router.post('/payment-result', async (req, body) => {
    // 處理綠界的回調
    const { RtnCode, TradeNo, TradeAmt, PaymentDate } = req.body
    const lessonId = req.query.lessonId
  
    if (RtnCode === '1') {
      // 支付成功
      try {
        // 生成隨機訂單編號
        const orderNumber = generateOrderNumber()
  
        // 將訂單資訊保存到數據庫
        await db.query(
          'INSERT INTO Orders (order_number, lesson_id, trade_no, amount, payment_date) VALUES (?, ?, ?, ?, ?)',
          [orderNumber, lessonId, TradeNo, TradeAmt, PaymentDate]
        )
  
        // 重定向到成功頁面，並傳遞訂單編號和課程ID
        res.redirect(`http://localhost:3000/lessons/success?orderNumber=${orderNumber}&lessonId=${lessonId}`)
      } catch (error) {
        console.error('保存訂單失敗:', error)
        res.status(500).send('訂單處理失敗')
      }
    } else {
      // 支付失敗
      res.redirect('http://localhost:3000/lessons/failure')
    }
  })
  
  function generateOrderNumber() {
    // 生成隨機訂單編號的邏輯
    return 'ORD' + Date.now() + Math.floor(Math.random() * 1000)
  }

  // 修改：返回 JSON 格式的回應
  res.json({ htmlContent })
})

export default router