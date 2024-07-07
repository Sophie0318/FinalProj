import express from "express";
import session from "express-session";
import db from "./utils/connect-mysql.js";
import cors from "cors";
import mysql_session from "express-mysql-session";

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

const MysqlStore = mysql_session(session);
const sessionStore = new MysqlStore({}, db);

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: "加密用的字串",
    store: sessionStore,
    // cookie:{
    //   maxAge: 1800_000,
    // }
  })
);

// define top level middleware
app.use((req, res, next) => {
  res.locals.title = "Express Practice";
  res.locals.session = req.session;
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
