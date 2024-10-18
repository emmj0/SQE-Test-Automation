import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.utest.com/',
      show: true,
      windowSize: '1200x900'
    }
  },
  plugins: {
    mocha: {
      reporterOptions: {
        reportDir: './output', // Directory where the report will be saved
        reportFilename: 'report', // Name of the report
        quiet: true, // Option to remove logs from the output
        json: true, // Generate JSON report as well
        html: true, // Generate HTML report
        overwrite: true // Overwrite previous report files
      }
    },
  },
  
  include: {
    I: './steps_file'
  },
  name: 'SQE'
}