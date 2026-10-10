const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "../client");
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8" };
const server = http.createServer((req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;
  if (pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    return res.end(JSON.stringify({ status: "ok", service: "accessible-dashboard-demo" }));
  }
  const requested = pathname === "/" ? "index.html" : decodeURIComponent(pathname).replace(/^\/+/, "");
  const filePath = path.resolve(root, requested);
  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    res.writeHead(403); return res.end("Forbidden");
  }
  fs.readFile(filePath, (error, data) => {
    if (error) { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); return res.end("Not found"); }
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream", "X-Content-Type-Options": "nosniff" });
    res.end(data);
  });
});
const port = Number(process.env.PORT) || 3000;
server.listen(port, () => console.log(`Dashboard available at http://localhost:${port}`));
