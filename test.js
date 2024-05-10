const { exec } = require("child_process");
const twelveHour = (hour) => (hour > 12 ? hour - 12 : hour > 0 ? hour : 12);
const ampm = (hour) => (hour < 12 ? "AM" : "PM");
const dateString = (date) => `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${twelveHour(date.getHours())}:${date.getMinutes().toString().padStart(2, "0")}${ampm(date.getHours())}`;
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(dateString(date));
exec(`git commit -m "Production Build ${dateString(date)}"`, (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

// const date1 = new Date("December 17, 1995 00:24:00");
// console.log(dateString(date1));
