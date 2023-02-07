import chalk from "chalk";
import { getCategory,displayProductInfo, getProduct } from "./utils.js";

console.log(chalk.bgGreen("Welcome to shopping app"));

const SelectedCategory = getCategory();
if (SelectedCategory) {
    const product = getProduct(SelectedCategory);
    displayProductInfo(product);
}
