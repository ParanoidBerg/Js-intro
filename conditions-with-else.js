// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
// тут твой код
let result
if (userAge < 35) {
    result = "ты пацан"
} else {
    result = "не по-пацански"
}
console.log(result)


//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
// тут твой код
let result1
if (isUser === true) {
    result1 = "привет, юзер"
} else {
    result1 = "не пользователь ты мне"
} console.log(result1)


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
// тут твой код
let result2 
if (password === realPassword) {
    result2 = "правильный пароль"
} else {
   result2 = "неверный пароль"
}
console.log(result2)


// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/
// тут твой код
let result3
if (email.indexOf("@") != -1) {
    result3 = "ты зареган"

}else {
    result3 = "неверный эмайл"
}
console.log(result3)


// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
// тут твой код
let result4 
if (x > y) {
    result4 = x
} else {
    result4 = y
}
console.log(result4)