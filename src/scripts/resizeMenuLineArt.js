import fs from "fs";

let file = fs.readFileSync("../components/ui/MenuLineArt.tsx", "utf8");

file = file.replace(/(width|height)="(\d+)"/g, (_, attr, val) => {
  return `${attr}="${Math.round(Number(val) / 2)}"`;
});

fs.writeFileSync("MenuLineArt.half.tsx", file);

console.log("Done!");
