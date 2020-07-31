const express = require("express");
const path = require("path");
const app = express();
let port = 8080;

let file_path = "/files/test.txt";
if (process.argv.length > 2) {
  file_path = process.argv[2];
}

if (process.argv.length > 3) {
  port = parseInt(process.argv[3]);
}

app.get("/", (req: any, res: any) =>
  res.sendFile(path.join(__dirname, file_path))
);

app.listen(port, () =>
  console.log(`Serving up ` + file_path + ` to http://LOCAL_IP:${port}`)
);
