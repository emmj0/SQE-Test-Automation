import { readExcelData } from './readExcel'; // Adjust the path as needed

Feature('Login');

// Read data from the Excel file (adjust the path to your file)
const credentials = readExcelData('E:\\SQE Assignment\\credentials.xlsx'); // Correct file path

Data(credentials).Scenario('User tries to log in with multiple credentials', ({ I, current }) => {
    I.amOnPage('https://www.utest.com/');
    I.click('Log In');
    I.fillField('Email', current.email); // Ensure the Excel data has 'email' and 'password' fields
    I.fillField('Password', current.password);
    I.click('button[type="submit"]');
    I.waitForNavigation(10);
    I.see('Dashboard');
});
