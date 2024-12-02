// Отримання числа з модального вікна
const month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"), 10);

// Перевірка правильності введеного числа
if (isNaN(month) || month < 1 || month > 12) {
    alert("Будь ласка, введіть коректне число від 1 до 12.");
} else {
    let season;
    let monthName;

    // Визначення назви місяця і пори року
    switch (month) {
        case 1:
            monthName = "Січень";
            season = "Зима";
            break;
        case 2:
            monthName = "Лютий";
            season = "Зима";
            break;
        case 3:
            monthName = "Березень";
            season = "Весна";
            break;
        case 4:
            monthName = "Квітень";
            season = "Весна";
            break;
        case 5:
            monthName = "Травень";
            season = "Весна";
            break;
        case 6:
            monthName = "Червень";
            season = "Літо";
            break;
        case 7:
            monthName = "Липень";
            season = "Літо";
            break;
        case 8:
            monthName = "Серпень";
            season = "Літо";
            break;
        case 9:
            monthName = "Вересень";
            season = "Осінь";
            break;
        case 10:
            monthName = "Жовтень";
            season = "Осінь";
            break;
        case 11:
            monthName = "Листопад";
            season = "Осінь";
            break;
        case 12:
            monthName = "Грудень";
            season = "Зима";
            break;
    }

    // Виведення результату
    alert(`Місяць: ${monthName}, Пора року: ${season}`);
}
