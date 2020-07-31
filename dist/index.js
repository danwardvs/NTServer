const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
let file_path = "/files/test.txt";
if (process.argv.length > 2) {
    file_path = process.argv[2];
}
app.get("/", (req, res) => res.sendFile(path.join(__dirname, file_path)));
app.listen(port, () => console.log(`Serving up ` + file_path + ` to http://LOCAL_IP:${port}`));
//# sourceMappingURL=index.js.map