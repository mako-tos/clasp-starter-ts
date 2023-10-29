import { isTest, tryGet } from "./utils/utils";
const PAGE_TITLE = "sample";

export function doGet(
  e: GoogleAppsScript.Events.DoGet
): GoogleAppsScript.HTML.HtmlOutput {
  const param = e.parameter;
  for (const key in param) {
    console.log(key, param[key]);
  }
  const template = HtmlService.createTemplateFromFile("main");
  template.test = isTest();
  const html = template.evaluate();
  html.setTitle(PAGE_TITLE);
  return html;
}
export function doPost(
  e: GoogleAppsScript.Events.DoPost
): GoogleAppsScript.HTML.HtmlOutput {
  const json = JSON.parse(e.postData.contents);
  console.log(json);
  const template = HtmlService.createTemplateFromFile("main");
  template.test = isTest();
  const html = template.evaluate();
  html.setTitle(PAGE_TITLE);
  return html;
}

export function include(fileName: string, params: any) {
  const template = HtmlService.createTemplateFromFile(fileName);
  if (params) {
    for (const key in params) {
      template[key] = params[key];
    }
  }
  return template.evaluate().getContent();
}

export function getUrl() {
  return tryGet(() => ScriptApp.getService().getUrl());
}
