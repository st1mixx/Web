let tc = prompt("Введіть температуру в градусах Цельсія:");

let celsius = parseFloat(tc);

if (!isNaN(celsius)) {
  let fahrenheit = (9 / 5) * celsius + 32;

  alert(`Температура за Фаренгейтом: ${fahrenheit.toFixed(2)}`);
} else {
  alert("Будь ласка, введіть коректне числове значення.");
}
