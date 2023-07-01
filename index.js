/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */





//const allWagesFor = function () {
  //  const eligibleDates = this.timeInEvents.map(function (e) {
   //     return e.date
  //  })

  //  const payable = eligibleDates.reduce(function (memo, d) {
  //      return memo + wagesEarnedOnDate.call(this, d)
   // }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  //  return payable
//}

// Creates an employee record object
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  
  // Processes an array of arrays into an array of employee records
  function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
  }
  
  // Adds a timeIn event object to an employee's record
  function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return this;
  }
  
  // Adds a timeOut event object to an employee's record
  function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ');
  
    this.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    });
  
    return this;
  }
  
  // Calculates the hours worked by an employee on a specific date
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  
  // Calculates the wages earned by an employee on a specific date
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    const wage = this.payPerHour;
  
    return hoursWorked * wage;
  }
  
  // Calculates the total wages earned by an employee
  function allWagesFor() {
    const datesWorked = this.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate.call(this, date), 0);
  
    return totalWages;
  }
  
  // Calculates the total payroll for all employees in an array of employee records
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
  }
  
  // Finds an employee record by the first name
  function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
  }
  
  module.exports = {
    createEmployeeRecord,
    createEmployeeRecords,
    createTimeInEvent,
    createTimeOutEvent,
    hoursWorkedOnDate,
    wagesEarnedOnDate,
    allWagesFor,
    calculatePayroll,
    findEmployeeByFirstName
  };
  