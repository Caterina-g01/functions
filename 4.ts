function calculateRectangleMetrics(length: number, width: number): void {
  if (length <= 0 || width <= 0) {
    alert("Длина и ширина прямоугольника должны быть положительными числами.");
  }

  const rectangleArea = length * width;
  const rectanglePerimeter = 2 * (length + width);

  console.log(
    `периметр прямоугольника: ${rectanglePerimeter} см,  площадь прямоугольника: ${rectangleArea} см.`
  );
}
calculateRectangleMetrics(5, 7);
