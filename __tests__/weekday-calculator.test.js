import { Weekday } from './../src/weekday.js';

describe('Weekday', () => {
  let reusableDate;

  beforeEach(() => {
    reusableDate = new Weekday("3/14/2020");
  });

  test('should accept and store a user input date', () => {
    expect(reusableDate.dateString).toBe("3/14/2020");
  });


});