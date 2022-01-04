import { marked } from "marked";
import TerminalRenderer from "marked-terminal";
import { readFile } from "fs/promises";

marked.setOptions({
  renderer: new TerminalRenderer(),
});

try {
  const allTips = [
    ...JSON.parse(
      await readFile(
        new URL("./../tips/json/airbnb-general.json", import.meta.url)
      )
    ),
    ...JSON.parse(
      await readFile(
        new URL("./../tips/json/airbnb-react.json", import.meta.url)
      )
    ),
    ,
    ...JSON.parse(
      await readFile(new URL("./../tips/json/clean-code.json", import.meta.url))
    ),
  ];
  console.log(
    marked(`
#   DEV TIP 
${allTips[Math.floor(Math.random() * (allTips.length - 1))]}
_________________

`)
  );
} catch (e) {
  console.error("Something went wrong in dev tips");
}
