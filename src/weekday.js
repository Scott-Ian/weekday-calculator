export class Weekday {
  
  constructor(dateString) {
    this.dateString = dateString;
    this.parseDate();
    
    this.month
    this.day;
    this.year;

    this.dayOfWeek;
  }

  parseDate() {
    const parsedDates = this.dateString.split("/");
    this.month = parseInt(parsedDates[0]);
  }
};