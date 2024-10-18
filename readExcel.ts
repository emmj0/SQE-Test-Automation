// readExcel.ts
import * as xlsx from 'xlsx';

export function readExcelData(filePath: string): Array<{ email: string; password: string }> {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0]; // Assuming you're working with the first sheet
    const sheet = workbook.Sheets[sheetName];

    // Convert the sheet to JSON format
    const jsonData = xlsx.utils.sheet_to_json<{ email: string; password: string }>(sheet);
    return jsonData;
}
