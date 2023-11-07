function humanReadable (seconds) {
   let hourss = Math.floor(seconds/60/60)
    minutess =Math.floor(seconds/60-hourss*60)
let secondss = seconds%60
    let formatted = [
        hourss.toString().padStart(2, '0'),
        minutess.toString().padStart(2, '0'),
        secondss.toString().padStart(2, '0')
    ].join(':');
    return formatted;
}
humanReadable(9462)
    //humanReadable(3600)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//'00:00:00