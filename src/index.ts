import { formatDate } from "./utils/dateUtils";

function main() {
  console.log(formatDate(new Date(), "YYYY/MM/DD HH:mm"));
}
declare let global: any;
global.main = main;
