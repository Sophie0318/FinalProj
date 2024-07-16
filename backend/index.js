import express from "express";
import session from "express-session";
import cors from "cors";
import jwt from "jsonwebtoken";
import selectWhereRouter from "./routes/users/selectWhere.js";

// import 各分支的 router
import aRouter from "./routes/articles/articles.js";
import lessonRouter from "./routes/lessons/lesson.js";
import coachRouter from "./routes/coaches/coach.js";
import productRouter from "./routes/product/product-traning-list.js";
import usersRouter from "./routes/users/users.js";
// import updateProfileRouter from "./routes/users/updateProfile.js";
import shipmentRouter from "./routes/product/shipment.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOption = {
  credentails: true,
  origin: (origin, cb) => {
    // console.log({origin});
    cb(null, true);
  },
};
app.use(cors(corsOption));

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "加密用的字串",
    // cookie:{
    //   maxAge: 1800_000,
    // }
  })
);

// define top level middleware
app.use((req, res, next) => {
  //後端驗證token
  //在top-level middleware處理jwt token
  const auth = req.get("Authorization"); // 先拿到檔頭的 Authorization 項目值
  if (auth && auth.indexOf("Bearer ") === 0) {
    const token = auth.slice(7); //去掉"Bearer "
    try {
      req.my_jwt = jwt.verify(token, process.env.JWT_KEY);
    } catch (ex) {}
  }

  next();
});

// set routes
app.use("/articles", aRouter);
app.use("/lessons", lessonRouter);
app.use("/coaches", coachRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);
app.use("/shipment", shipmentRouter);

//會員個人資料頁的編輯
// app.use('/users/updateProfile', updateProfileRouter);

//會員個人資料表下拉選單
app.use("/users/selectWhere", selectWhereRouter);

//後端驗證的token測試路由
app.get("/jwt-data", (req, res) => {
  res.json(req.my_jwt);
});

app.use(express.static("public"));

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("wrong path");
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`Server start, listen port ${port}`);
});
