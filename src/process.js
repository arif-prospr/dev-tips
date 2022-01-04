import * as fs from "fs";
import * as path from "path";

async function processAirbnbGeneral() {
  const rulesString = fs.readFileSync(
    path.resolve("./tips/airbnb-general.md"),
    "utf8"
  );
  const list = rulesString
    .trim()
    .replaceAll(/^\#\#\#.*$/gm, "")
    .replaceAll(/^\#\#.*$/gm, "")
    .replaceAll(/^\#.*$/gm, "")
    .replaceAll(/\<a.*a\>/gm, "")
    .split(/^\ \ \-\ /gm);
  list.shift();

  fs.writeFileSync("./tips/airbnb-general.json", JSON.stringify(list));
}

async function processAirbnbReact() {
  const rulesString = fs.readFileSync(
    path.resolve("./tips/airbnb-react.md"),
    "utf8"
  );
  const list = rulesString
    .trim()
    .replaceAll(/\<a.*a\>/gm, "")
    .replaceAll(/^\#\#\#.*$/gm, "")
    .replaceAll(/^\#\#.*$/gm, "")
    .replaceAll(/^\#.*$/gm, "")
    .split(/^\ \ \-\ /gm);

  list.shift();

  fs.writeFileSync("./tips/airbnb-react.json", JSON.stringify(list));
}

async function process() {
  await processAirbnbGeneral();
  await processAirbnbReact();
}

await process();

console.log("Done!");
