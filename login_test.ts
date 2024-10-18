Feature('Login');

Data([
  { email: 'user1@example.com', password: 'password1' }
]).Scenario('User tries to log in with multiple credentials', ({ I, current }) => {
  I.amOnPage('https://www.utest.com/');
  I.click('Log In');
  I.fillField('Email', current.email);
  I.fillField('Password', current.password);
  I.click('button[type="submit"]');
  I.waitForNavigation(10);
  I.see('Dashboard');
});
