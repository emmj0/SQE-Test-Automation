import * as xlsx from 'xlsx';

// Function to read Excel file and return data as an array of objects
export function readExcelData(filePath: string) {
  try {
    const workbook = xlsx.readFile(filePath); // Read the Excel file
    const sheetName = workbook.SheetNames[0]; // Get the first sheet
    const worksheet = workbook.Sheets[sheetName]; // Get the sheet
    const data = xlsx.utils.sheet_to_json(worksheet); // Convert sheet to JSON
    return data; // Return the data as an array of objects
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw error;
  }
}
