/**
 * 
 * @param func 関数
 * @returns 関数の実行結果
 * @throws 3回試して全部失敗した場合
 */
function tryGet(func: Function) {
  let error = null
  for (let i = 0; i < 3; i++) {
    try {
      return func()
    } catch (e) {
      error = e
      Utilities.sleep(100)
    }
  }
  throw error
}

/**
 * 
 * @param id スプレッドシートID
 * @returns 
 */
function getSpreadsheet(id: string): GoogleAppsScript.Spreadsheet.Spreadsheet {
  return tryGet(() => SpreadsheetApp.openById(id));
}

/**
 * 
 * @param spreadsheet スプレッドシート
 * @param name シート名
 * @returns 
 */
function getSheet(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet, name: string): GoogleAppsScript.Spreadsheet.Sheet | null {
  return tryGet(() => spreadsheet.getSheetByName(name));
}
