import * as fs from "fs";
import * as path from "path";

async function processCleanCode() {
  const rulesString = fs.readFileSync(
    path.resolve("./tips/clean-code.md"),
    "utf8"
  );
  let list = rulesString.trim().split(/^\%\%\%/gm);

  list.shift();
  list = list.map(i=> i.trim()) 

  console.log("Clean code: ", list.length);

  fs.writeFileSync("./tips/json/clean-code.json", JSON.stringify(list, 0, 4));
}

async function processAirbnbGeneral() {
  const rulesString = fs.readFileSync(
    path.resolve("./tips/airbnb-general.md"),
    "utf8"
  );
  let list = rulesString
    .trim()
    .split("## Resources")[0]
    .split('## Types')[1]
    .trim()
    .replaceAll(/^\#\#\#.*$/gm, "")
    .replaceAll(/^\#\#.*$/gm, "")
    .replaceAll(/^\#.*$/gm, "")
    .replaceAll(/\<a.*a\>/gm, "")
    .replaceAll("**[⬆ back to top](#table-of-contents)**", "")
    .split(/^\ \ \-\ /gm);
  list.shift();
  list = list.map(i=> i.trim()) 

  console.log("Airbnb general: ", list.length);

  fs.writeFileSync(
    "./tips/json/airbnb-general.json",
    JSON.stringify(list, 0, 4)
  );
}

async function processAirbnbReact() {
  const rulesString = fs.readFileSync(
    path.resolve("./tips/airbnb-react.md"),
    "utf8"
  );
  let list = rulesString
    .trim()
    .split("## Translation")[0]
    .replaceAll(/\<a.*a\>/gm, "")
    .replaceAll(/^\#\#\#.*$/gm, "")
    .replaceAll(/^\#\#.*$/gm, "")
    .replaceAll(/^\#.*$/gm, "")
    .split(/^\ \ \-\ /gm);
  list.shift();
  list = list.map(i=> i.trim()) 
  console.log("Airbnb react: ", list.length);

  fs.writeFileSync("./tips/json/airbnb-react.json", JSON.stringify(list, 0, 4));
}

async function process() {
  await processAirbnbGeneral();
  await processAirbnbReact();
  await processCleanCode();
}

await process();

console.log("Done!");
