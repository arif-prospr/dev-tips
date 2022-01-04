import { marked } from "marked";
import TerminalRenderer from "marked-terminal";
import { readFile } from "fs/promises";

const allTips = [
  ...JSON.parse(
    await readFile(new URL("./../tips/airbnb-general.json", import.meta.url))
  ),
  ...JSON.parse(
    await readFile(new URL("./../tips/airbnb-react.json", import.meta.url))
  ),
];

marked.setOptions({
  renderer: new TerminalRenderer(),
});


console.log(
  marked(`
#   DEV TIP 
${allTips[Math.floor(Math.random() * (allTips.length - 1))]}
_________________

`)
);
