import React from 'react'
import './checkbox.css'

// TODO: yet to finish checkbox component
export default function Checkbox({children}) {
  return (
    <>
      <div class="custom-radio">
        <p class="select">請選擇類別　｜</p>
        <input type="checkbox" id="male" name="sex"/>
        <label for="male">男性</label>

        <input type="checkbox" id="female" name="sex"/>
        <label for="female">女性</label>

        <input type="checkbox" id="other" name="sex"/>
        <label for="other">其它</label>
    </div>
    </>
  )
}
