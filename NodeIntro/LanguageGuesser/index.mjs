import { franc } from "franc";
import langs from "langs";

let input = process.argv[2];
let langCode = franc(input);
const language = langs.where("3", langCode);
console.log(language.name);
