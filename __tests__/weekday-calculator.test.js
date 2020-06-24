import { Weekday } from './../src/weekday.js';

describe('Weekday', () => {
  let reusableDate;
  let illegalDate1;
  let illegalDate2;
  let today;
  let sunday;

  beforeEach(() => {
    reusableDate = new Weekday("3/14/2020");
    illegalDate1 = new Weekday("13/40/2020");
    illegalDate2 = new Weekday("Juneteenth, 2020!");
    today = new Weekday("6/24/2020");
    sunday = new Weekday ("6/28/2020")
  });

  test('should accept and store a user input date', () => {
    expect(reusableDate.dateString).toBe("3/14/2020");
  });

  test('should identify the month number',  ()=> {
    expect(reusableDate.month).toBe(3)
  });

  test('should identify the day number', () => {
    expect(reusableDate.day).toBe(14);
  });

  test('should identify the year number', () => {
    expect(reusableDate.year).toBe(2020);
  });

  test('should correctly identify if a valid date is valid', () => {
    expect(reusableDate.isValidDate).toBe(true);
  });

  test('should correctly identify if an invalid date is invalid', () => {
    expect(illegalDate1.isValidDate).toBeFalsy();
    expect(illegalDate2.isValidDate).toBeFalsy();
  });

  test('should correctly return the day of the week for a given date', () => {
    expect(today.dayOfWeek()).toBe("Wednesday");
    expect(sunday.dayOfWeek()).toBe("Sunday");    
  });

});