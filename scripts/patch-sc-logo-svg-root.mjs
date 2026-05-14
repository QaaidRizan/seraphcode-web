import fs from "node:fs";

const p = new URL("../public/svgs/sc_logo.svg", import.meta.url);
let s = fs.readFileSync(p, "utf8");

const from =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0">';
const to =
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="375" height="375" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" shape-rendering="geometricPrecision">';

if (!s.startsWith(from)) {
  console.error("Unexpected SVG prefix — file may have changed. First 320 chars:\n", s.slice(0, 320));
  process.exit(1);
}

s = to + s.slice(from.length);
fs.writeFileSync(p, s);
console.log("Updated root <svg>: intrinsic size matches viewBox; removed zoomAndPan; added shape-rendering.");
