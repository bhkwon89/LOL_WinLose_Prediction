require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const cookieParser = require("cookie-parser");
const app = express();

const controllers = require("./controllers");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/", (req, res) => {
    res.status(200).send("Welcome! everything is AllForYou");
  });

app.use('/', controllers);

const HTTPS_PORT = process.env.HTTPS_PORT || 8080

let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
    // https 프로토콜 사용 시
    const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8")
    const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8")
    const credentials = { key: privateKey, cert: certificate }
    server = https.createServer(credentials, app)
    server.listen(HTTPS_PORT, () => console.log("🚀 https server runnning"))
} else {
    server = app.listen(HTTPS_PORT, () => console.log("🚀 http server runnning"))
}
module.exports = server