function solve(a, b){
  // from the start (a), check each month to see if first day is a friday
  // store the first month that meets criteria and set extendedWeekendCounter = 1
  // every month after that meets criteria add to stored months, and extendedWeekendCounter++
  // if stored months.length == 2 and a new month meets criteria
    // pop last month and push new month
  // return the first and the last month, and the number of times criteria met
  // to meet criteria -> month needs to start on friday, month needs to have 31 days
  const findDay = (dateString) => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  const possibleMonths = ['01', '03', '05', '07', "08", "10", "12"];
  let extendedWeekendCounter = 0;
  let results = [];
  
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  for(let year = a; year <= b; year++) {
    for(let m = 0; m < possibleMonths.length; m++) {
        if(findDay(year + '-' + possibleMonths[m] + '-01') === "Friday") {
          extendedWeekendCounter++;
          let monthAsNumber = parseInt(possibleMonths[m]) - 1;
          let monthAsText = months[monthAsNumber];
          
          if(results.length === 2) {
            results.pop()
            results.push(monthAsText)
          } else {
            results.push(monthAsText)
          }
        }
    }
  }
  results.push(extendedWeekendCounter);
  return results;
}
