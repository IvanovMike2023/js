const sales = [
    { product: 'Laptop', quantity: 2,price:1000,date:'2024-01-15' },
    { product: 'Phone', quantity: 5,price:500,date:'2024-01-18' },
    { product: 'Tablet', quantity: 1,price:700,date:'2024-01-21' },
    { product: 'Laptop', quantity: 1,price:1000,date:'2024-02-01' },
    { product: 'Phone', quantity: 3,price:500,date:'2024-02-03' },
    { product: 'Tablet', quantity: 4,price:700,date:'2024-02-10' },
    { product: 'Laptop', quantity: 1,price:1000,date:'2024-02-15' },
];
const result=sales.reduce((acc,elem)=>{
    if(elem.product==='Laptop'){
        acc.sums.sumOfLaptop+=elem.price*elem.quantity
 }
 if(elem.product==='Phone'){
     acc.sums.sumOfPhone+=elem.price*elem.quantity
 }
 if(elem.product==='Tablet'){
      acc.sums.sumOfTablet+=elem.price*elem.quantity
 }
acc.basePrise=acc.sums.sumOfTablet>acc.sums.sumOfPhone && acc.sums.sumOfTablet>acc.sums.sumOfLaptop ?
    acc.sums.sumOfTablet
    :acc.sums.sumOfPhone>acc.sums.sumOfTablet && acc.sums.sumOfPhone>acc.sums.sumOfLaptop ?
        acc.sums.sumOfPhone
        :acc.sums.sumOfLaptop>acc.sums.sumOfTablet&&acc.sums.sumOfLaptop>acc.sums.sumOfPhone?
    acc.sums.sumOfLaptop
            : null
    //console.log(acc.sums.sumOfTablet)
 return acc
}   ,{sums:{sumOfTablet:0,sumOfPhone:0,sumOfLaptop:0},basePrise:0})
//console.log(result)
const monthlySales = sales.reduce((accumulator, current) => {
    const date = new Date(current.date);
    const monthYear = date.toISOString().slice(0, 7); // Получаем "YYYY-MM"

    const revenue = current.quantity * current.price; // Вычисляем выручку для текущей продажи

    if (accumulator[monthYear]) {
        accumulator[monthYear] += revenue; // Увеличиваем выручку для существующего месяца
    } else {
        accumulator[monthYear] = revenue; // Инициализируем новую запись для месяца
    }

    return accumulator; // Возвращаем аккумулятор для следующей итерации
}, {});

// Теперь определим месяц с наибольшей продажей
let maxRevenueMonth = '';
let maxRevenue = 0;

for (const [month, revenue] of Object.entries(monthlySales)) {
    if (revenue > maxRevenue) {
        maxRevenue = revenue;
        maxRevenueMonth = month;
    }
}
function curry(f) { // curry(f) выполняет каррирование
    console.log(f)
    return function(a) {
        console.log(a)
        return function(b) {
            console.log(b)
            return f(a, b);
        };
    };
}

// использование
const s=()=>{}
function s2(){

}
console.log(typeof s)
console.log(typeof s2)

