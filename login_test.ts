import { readExcelData } from './readExcel'; // Adjust the path as needed

Feature('Login');

// Read data from the Excel file
const credentials = readExcelData('path/to/your/credentials.xlsx'); // Update with the actual path

Data(credentials).Scenario('User tries to log in with multiple credentials', ({ I, current }) => {
    I.amOnPage('https://www.utest.com/');
    I.click('Log In');
    I.fillField('Email', current.email); // Use 'email' as the key from the Excel data
    I.fillField('Password', current.password); // Use 'password' as the key from the Excel data
    I.click('button[type="submit"]');
    I.waitForNavigation(10);
    I.see('Dashboard');
});
