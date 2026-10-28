const readline = require('readline-sync');

const hours = Number(readline.question('Enter hours: '));

const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_HOUR = 3600;

const totalSeconds = Math.floor(hours * SECONDS_PER_HOUR);
const wholeHours = Math.floor(totalSeconds / SECONDS_PER_HOUR);
const minutes = Math.floor((totalSeconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
const seconds = totalSeconds % SECONDS_PER_MINUTE;

const hoursUnit = wholeHours === 1 ? 'hour' : 'hours';
const minuteUnit = minutes === 1 ? 'minute' : 'minutes';
const secondUnit = seconds === 1 ? 'second' : 'seconds';

console.log(`\n${hours} ${hoursUnit} is ${wholeHours} ${hoursUnit}, ${minutes} ${minuteUnit}, and ${seconds} ${secondUnit}`);