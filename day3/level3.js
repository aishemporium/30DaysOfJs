const readableDate = new Date();
mins = readableDate.getMinutes();
mins < 10 ? '0' + mins.toString() : mins;
hours = readableDate.getHours()
hours < 10 ? '0' + hours.toString() : hours;

year = readableDate.getFullYear()
date = readableDate.getDate()
month = readableDate.getMonth()
console.log(`${year}-${month + 1}-${date} ${hours}:${mins}`);
