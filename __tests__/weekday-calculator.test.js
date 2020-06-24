import { Weekday } from './../src/weekday.js';

describe('Weekday', () => {
  let reusableDate;

  beforeEach(() => {
    reusableDate = new Weekday("3/14/2020");
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
    expect(reusableDate.isValidDate).toBe(false);
  });
  
});