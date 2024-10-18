import { readExcelData } from './readExcel'; // Adjust the path as needed

Feature('Login');

// Read data from the Excel file (adjust the path to your file)
const filePath = 'E:\\SQE Assignment\\credentials.xlsx';
console.log('Reading Excel file from:', filePath); // Debugging the file path
const credentials = readExcelData(filePath);


Data(credentials).Scenario('User tries to log in with multiple credentials', ({ I, current }) => {
    console.log('Current user data:', current); // Log current credentials for each scenario
    I.amOnPage('https://www.utest.com/');
    I.click('Log In');
    I.fillField('Email', current.email); // Ensure the Excel data has 'email' and 'password' fields
    I.fillField('Password', current.password);
    I.click('button[type="submit"]');
    I.waitForNavigation(10);
    I.see('Dashboard');
});
