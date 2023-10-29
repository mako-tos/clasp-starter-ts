import { doGet, doPost, getUrl, include } from "./server";
import { formatDate } from "./utils/dateUtils";

function main() {
  console.log(formatDate(new Date(), "YYYY/MM/DD HH:mm"));
}
declare let global: any;
global.main = main;
global.doGet = doGet;
global.doPost = doPost;
global.include = include;
global.getUrl = getUrl;
