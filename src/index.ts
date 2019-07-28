#!/usr/bin/env node

import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import path from "path";
import program from "commander";

clear();
console.log(
  chalk.blue(figlet.textSync("oyster-cli", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("An example CLI for ordering oysters")
  .option("-a, --amethyst", "Amethyst Oysters")
  .option("-b, --blue-point", "Blue Point Oysters")
  .option("-c, --chelsea-gem", "Chelsea Gem Oysters")
  .parse(process.argv);

console.log("You've ordered:");

if (program.amethyst) console.log("Amethyst Oysters");
if (program.bluePoint) console.log("Blue Point Oysters");
if (program.chelseaGem) console.log("Chelsea Gem Oysters");

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
