// Масив днів тижня
const daysOfWeek = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя"
];

function getDayOfWeek() {
    const input = prompt("Введіть число від 1 до 7, щоб дізнатися день тижня:");
    const number = parseInt(input, 10);

    if (isNaN(number) || number < 1 || number > 7) {
        alert("Будь ласка, введіть коректне число від 1 до 7.");
    } else {
       
        document.body.innerHTML = `<h1>${daysOfWeek[number - 1]}</h1>`;
    }
}


getDayOfWeek();
