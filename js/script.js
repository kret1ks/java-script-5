// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch

// let cofe = "кава";
// let tea = "чай";
// let juice = "сік";
// const full = Number(prompt("що ви будете 1 - кава, 2 - чай, 3 - сік"));
// let result = ""

// switch (full) {
//     case 1:
//         result = cofe;
//         break;
//     case 2:
//         result = tea;
//         break
//     case 3:
//         result = juice;
//         break
//     default:
//         alert("такого напою немає в списку")
//         break;
// }
// console.log(result);

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
