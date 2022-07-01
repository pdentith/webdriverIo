# QADevExcercise
> Welcome to the The Block Product QA Engineer exercise! This exercise is here to get you acquainted with a small sample of what we do and for us to get acquainted with your skills. It should take no more than two hours of your time.


## Some guidance

1) Fork this repository to your personal GitHub account and clone the fork to your computer.
2) Save and commit your answers to your fork of the repository, and push them back to your personal GitHub account.
3) Use the Internet as a resource to help you complete your work. We do it all the time.
4) We like to use [Web Driver IO](http://webdriver.io) for end to end testing, so please feel free to use. However, you may use any testing framework in order to accomplish your task.
5) Have fun and don't overthink it!

## The Task

1) Create an END-2-END test for this url:
   1) [https://the-flock.vercel.app/](https://the-flock.vercel.app/)
2) The app will have 3 components:
   1) A simple todo component
   1) A simple calculator component
   1) A simple counter component
3) Write a test that succesfully tests both successes and failures for each component
4) When done, commit your work to your clone of this repository. Add any instructions we need to build your work. Send us a link to your clone.

## Instructions Cypress

1) To run cypress suite in ui 
   1) npm install cypress --save-dev -> to instll if needed
   2) npx cypress open -> will open the test runner v1 is new so you may need to click e2e 
   3) test file is the-flock-app.cy.js -> clicking the file should run the tests
2) to run in command line
   1) npx cypress run -> params --headed or --browser chrome, chromium, edge, electron, firefox

## Instructions Webdriver IO

1) npx wdio run wdio.conf.js  will run tests and launch chrome browser
 NOTE: tested with chrome and spec reporter.

## Issues
1) Checkbox alignment in list and bullet points
2) Checking a todo to remove it middle list, keeps the box below it checked
3) Counter is text not int, 2 digits not handled in display
4) Calculator not exponent support ^
5) Todos passing in "     "returns ""
6) Couldn't get unicode characters going in webdriver