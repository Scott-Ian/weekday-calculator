# _Weekday Calculator_

#### _This application will take a date from the user and let them know what day of the week it is, 6/24/2020_

#### By _**Ian Scott, Ben Russell**_

## Description

_This project takes in a date in the format of month/day/year, and returns the day of the week of the date submitted._

## Specification

1. Behavior: The program will accept a user input and store it in a date object.
  * Input: 3/14/1990
  * Output: Date: 3/14/1990
  * isComplete: _True_

2. Behavior: The program will be able to identify and return the day of the month.
  * Input: 2/23/2020
  * Output: Day: 23
  * isComplete: _True_

3. Behavior: The program will be able to identify and return the month.
  * Input: 2/23/2020
  * Output: Month: February
  * isComplete: _True_

4. Behavior: The program will be able to identify and return the year.
  * Input: 2/23/2020
  * Output: Year: 2020
  * isComplete: _True_

5. Behavior: The program will check if a date is valid.
  * Input: 3/14/1990
  * Output: Valid Date
  * isComplete: _True_

6. Behavior: The program will identify invalid dates.
  * Input: 300/45/-19
  * Output: Invalid Date
  * isComplete: _True_

7. Behavior: The program will return the day of the week.
  * Input: 3/14/1990
  * Output: Wednesday
  * isComplete: _True_

## Setup/Installation Requirements

### Open via Bash/Gitbash

1. _Download this repository onto your computer:_
2. _Navigate into the weekday-calculator directory in VS Code or text editor of choice._
3. _Run npm install in terminal._
4. _Run npm run build and npm run start to launch a live server._

## Known Bugs

_This program has an error with the day returned due to the JS's Date.prototype.getDay(); returning unexpected values. We believe this to be due to how JS's Date object handles timezones upon instantiation. Due to time constraints this project has not been fully refactored, cleaned, or styled._

## Support and contact details

_If you would like to reach out regarding potential improvements, other bugs, or just to chat, please contact the authors through GitHub_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _Javascript_
* _NPM_
* _Web Pack_ 

### License

Copyright (c) 2020 **_Ian Scott, Ben Russell, Michael Petersen_** under the MIT licensce.