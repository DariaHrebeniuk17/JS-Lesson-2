//Оператори//


//Введення//
/*const message = "Java Script is simple";

alert(message);

console.log(message);*/

//Отримання//
/*const isConfirm = confirm("Please confirm the reservation");
console.log(isConfirm);*/

/*const test = confirm("Yes or no");
console.log(test);*/

/*const userName = prompt('Please enter your name:');
console.log(userName);*/

/*const number = prompt("Enter your number");
console.log(number);*/

/*const value = prompt("Please enter a number");
console.log(typeof value);
console.log(value);*/


/*value = false;
console.log(typeof value);

const newValue = String(value);
console.log(typeof newValue);*/

/*value = "123";
console.log(typeof value);

const newValue = Number(value);
console.log(typeof newValue);*/

/*const test = Number("jhfkfkem");
console.log(test);*/

/*console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Вітаю"));
console.log(Boolean(""));*/

/*console.log(Boolean(NaN));

console.log(Boolean(null));*/

/*console.log( 2 + 2);
console.log( 10 - 6);
console.log(4 * 4);
console.log(16 / 2);*/

/*console.log(8 % 3);
console.log(10 % 3);
console.log(10 % 2);*/

/*console.log(5 ** 2);
console.log(4 ** 5);*/

/*console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 5);
console.log(7 <= 3);*/

/*let value = "0";
console.log(value ==  0);*/

/*console.log(5 !== 5);
console.log( 5 === 5);
console.log(4 !== 3);*/

/*console.log(5 === 5 && 3 > 1);
console.log(6 + 3 >= 9 && 8 + 1 === 9);*/

//console.log(5 * 5 == 28 || 6 <= 5);//

/*console.log(5 !== 4);
console.log(!true);*/

/*if (5 * 5 === 25) {
    console.log("1");
} else {
    console.log("2");
}*/

/*if (6 * 6 === 38) {
    console.log("36");
} else {
    console.log("try again");
}*/

/*2 + 2 === 4 ?  console.log("1") : console.log("2");

6 - 1 == 2 ? console.log("True") : console.log ("False");*/

/*if (5 + 5 == 7) {
    console.log ("5 + 5 == 7");
} else if ( 2 + 4 == 6) {
    console.log("2 + 2 == 4");
 }  else {
        console.log("No");
    }*/


/*let leng = "ru";

if (leng === "ua") {
    console.log("Понеділок");

    } else if (leng == "en") {
        console.log("Monday");
        } else {
            console.log("reset");
        }
*/

/*let city = "Poltava"

if (city == "Poltava") {
    console.log("Poltava");
    } else {
        console.log("Not Poltava");
    } else If (city == "Kyiv") {
        console.log("Kyiv");
    }*/




/*let num = 10; 


switch (num) {
  case 0 :
    console.log(0);
break

    case 5 :
    console.log(5);
    break;

    case 10:
    console.log(10);
    break;
}
*/


/*let cost;
const sub = "pl";

switch (sub) {
  case "free":
    cost = 0;
    break;
  
  case "pro":
    cost = 100;
    break;

  case "premium" :
    cost = 500;
    break;

    default : console.log ("Invalid sub");
}

console.log(cost);
*/

/*const min = prompt("Введіть хвилину");

if (min >= 0 && min <= 14) {
    console.log("Перша чверть");
} else if (min >= 15 && min <= 29) {
    console.log("Друга чверть");
} else if (min >= 30 && min <= 44) {
    console.log("Третя чверть");
} else if (min >= 45 && min <=59) {
    console.log("Чутверта чверть");
}*/

/*const value = prompt("Введіть назву товару").toLowerCase();
let cost;

switch (value) {
    case "яблуко" :
        cost = 10;
        alert (`${value} коштує ${cost} гривень`);
        break;
        case "вишня" :
        cost = 50;
        alert (`${value} коштує ${cost} гривень`);
        break;case "грушка" :
        cost = 45;
        alert (`${value} коштує ${cost} гривень`);
        break;case "чорниця" :
        cost = 110;
        alert (`${value} коштує ${cost} гривень`);
        break;case "кавун" :
        cost = 70;
        alert (`${value} коштує ${cost} гривень`);
        break;

        default : alert(`${value}, немає в наявності`);
}*/










//Homework//

/*let number = "0";

if (number > 0) {
    console.log(true);
} else {
    console.log(false);
}*/

//Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true//


/*var variable ="test";

if (variable == "test") {
    console.log(true);
} else if (variable == "qwerty") {
    console.log(true);
} else if (variable == "true") {
    console.log(true);
} else {
    console.log(false);
}
*/

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

/*var num = 11;

if (num > 10) {
    num = num - 5;
} else {
    num = num + 5;
}
console.log(num);*/

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/*function inputMonth(numbermonth) {
    switch (numbermonth) {
        case 1:
            return "January";
        case 2 :
            return "February";
        case 3 : 
            return "March";
        case 4 : 
            return "April";
        case 5 :
            return "May";
        case 6 :
            return "June";
        case 7 :
            return "Jule";
        case 8 :
            return "August";
        case 9 :
            return "September";
         case 10 :
            return "October";
        case 11 :
            return "Nowember";
        case 12 :
            return "December";

        default :
            return  "Неправильний номер місяця";
    }
}

var numbermonth = 3;
var month = inputMonth(numbermonth);
console.log(month); */


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*function getsumnumber(number) {
    var rownumber  = number.toString();

    var figure = figure.split('');

    var sum = figure.reduce(function(previousvalue, currentvalue) {
        return parseInt(previousvalue) + parseInt(currentvalue);
    }, 0);

    return sum;
}

var three = 333;

var sumnumber = getsumnumber(three);
console.log("the sum of the digits in the number", three, "=", sum);*/
