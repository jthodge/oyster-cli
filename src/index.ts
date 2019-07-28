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
