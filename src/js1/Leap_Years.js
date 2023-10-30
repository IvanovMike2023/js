function isLeapYear(year) {
    // TODOlog
    if(year%4===0 && year%100!=0){
        console.log(true)
    }
    else if (year%4===0 && year%400===0){
        console.log(true)
    }
    else
    {
        console.log(false)
    }
}
//isLeapYear(2020)
isLeapYear(2100)