
export class Weekday {
  
  constructor(dateString) {
    this.dateString = dateString;
    this.parsedDate;

    this.parseDate();
    this.isValidDate = this.validateDate();
    
    this.month;
    this.day;
    this.year;

    this.dayOfWeek;
  }

  parseDate() {
    const dateStringArray = this.dateString.split("/");
    this.parsedDate = dateStringArray.map (function(num) {
      return parseInt(num);
    });

    this.month = this.parsedDate[0];
    this.day = this.parsedDate[1];
    this.year = this.parsedDate[2];
  }

  validateDate() {
    if (this.parsedDate.length != 3) {
      return false;
    }

    for (const num of this.parsedDate) {
      if (typeof(num) != 'number' || num  === NaN) {
        return false;
      }
    }

    if (this.month >= 1 && this.month <= 12) {
      if (this.day >= 1 && this.day <= 31) {
          return true;
      }
    } else {
      return false;
    }
  }

  dayOfWeek() {
    let dayOfWeek = new Date (this.year, this.month, this.day, 14, 40, 32);
    let day = dayOfWeek.getDay();
    
    switch (day) {
      case (2):
        return "Sunday";        
      case (3):
        return "Monday";
      case (4):
        return "Tuesday";
      case (5):
        return "Wednesday";
      case (6):
        return "Thursday";
      case (0):
        return "Friday";
      case (1):
        return "Saturday";
    }    
  }
};