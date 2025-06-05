let userStrig = prompt('Введите текс для обрезки').trim();
let startSliceIndex = Number(prompt('Введите индекс, которым нужно начать обрезку строки').trim());
let endSliceIndex = Number(prompt('Введите индекс, которым нужно закончить обрезку строки').trim());
let sting = userStrig.slice(startSliceIndex, endSliceIndex);
alert('Результат:' + sting);