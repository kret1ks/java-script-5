// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

let cofe = "кава";
let tea = "чай";
let juice = "сік";
const full = Number(prompt("що ви будете 1 - кава, 2 - чай, 3 - сік"));
let result = ""

switch (full) {
    case 1:
        result = cofe;
        break;
    case 2:
        result = tea;
        break
    case 3:
        result = juice;
        break
    default:
        alert("такого напою немає в списку")
        break;
}
console.log(result);

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.


let userInput = Number(prompt("ведіть будь який текст який може бути днем тижня 1 - понедліок 2 - вівторок - 3 середа - 4 четвер -5 пятниця - 6 субота 7 неділя"));
let day1 = "понеділок робочий день"
let day2 = "вівторок робочий день"
let day3 = "середа робочий день"
let day4 = "четвер робочий день"
let day5 = "пятниця робочий день"
let day6 = "субота вихідний"
let day7 = "неділя вихідний"
let resultat = ""

switch (userInput) {
    case 1:
        resultat = day1;
        break;
    case 2:
        resultat = day2;
        break;
    case 3:
        resultat = day3;
        break;
    case 4:
        resultat = day4;
        break;
    case 5:
        resultat = day5;
        break;
    case 6:
        resultat = day6;
        break;
    case 7:
        resultat = day7;
        break;
    default:
        break;
}
console.log(resultat);

//Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.

let monthNumber = parseInt(prompt("ведіть число від 1-12"));

let season = "";


if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
    season = "зима";
}else if (monthNumber >=3 && monthNumber <=5) {
    season = "весна";
}else if (monthNumber >=6 && monthNumber <=8) {
    season = "літо";
}else if (monthNumber >=9 && monthNumber <=11) {
    season = "осінь";
}else {
    season = "невірний номер місяця";
}

alert(`Місяць ${monthNumber} відповідає порі року: ${season}`);


// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

let color = prompt("ведіть колір червоний жовтий або зелений").toLowerCase();

let message = "";


if (color === "червоний"){
    message = "СТОП";
}else if (color === "жовтий") {
    message = "ЧЕКАТИ";
}else if (color === "зелений") {
    message = "ЙТИ";
}else{
    message = "НЕВІДОМИЙ КОЛІР";
}
alert(message)


// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.


let num1 = Number(prompt("Введіть перше число:"));
let operator = prompt("Виберіть операцію (+, -, *, /):");
let num2 = Number(prompt("Введіть друге число:"));

let answer = "";

if (operator === "+") {
  answer = num1 + num2;
} else if (operator === "-") {
  answer = num1 - num2;
} else if (operator === "*") {
  answer = num1 * num2;
} else if (operator === "/") {
  if (num2 === 0) {
    answer = "Помилка: Ділення на нуль!";
  } else {
    answer = num1 / num2;
  }
} else {
  answer = "Невідома операція!";
}

alert(`Результат: ${answer}`);
