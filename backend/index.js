import express from "express";
import session from "express-session";
import db from "./utils/connect-mysql.js";
import cors from "cors";
import jwt from "jsonwebtoken";

// import 各分支的 router
import aRouter from "./routes/articles/article-book.js";
import lessonRouter from "./routes/lessons/lesson.js";
import coachRouter from "./routes/coaches/coach.js";
import productRouter from "./routes/product/product-traning-list.js";
import usersRouter from "./routes/users/users.js";

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
  res.locals.title = "Express Practice";
  res.locals.session = req.session;

  //後端驗證token
  //在top-level middleware處理jwt token
  const auth = req.get("Authorization"); // 先拿到檔頭的 Authorization 項目值
  if (auth && auth.indexOf("Bearer ") === 0) {
    const token = auth.slice(7);//去掉"Bearer "
    try {
      req.my_jwt = jwt.verify(token, process.env.JWT_KEY);
    } catch (ex) { }
  }

  next();
});

// set routes
// app.use('/articles', aRouter);
app.use("/lessons", lessonRouter);
app.use("/coaches", coachRouter);
app.use("/product", productRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.locals.title = "首頁 | " + res.locals.title;
  res.render("home", { name: "homepage" });
});

//後端驗證的token測試路由
app.get("/jwt-data", (req, res) => {
  res.json(req.my_jwt);
});

app.use(express.static("public"));
app.use("/bootstrap", express.static("node_modules/bootstrap/dist"));

app.use((req, res) => {
  res.type("text/plain");
  res.status(404);
  res.send("wrong path");
});

const port = process.env.WEB_PORT || 3002;
app.listen(port, () => {
  console.log(`Server start, listen port ${port}`);
});