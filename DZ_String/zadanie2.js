const myName = 'Егор';
let programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу изменить свою жизнь в лучшую сторону и реализовать свои мечты и цели в жизнь';
const numberOfMonth = 3;

const text = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком,
потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
//console.log(text);

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком,
потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;
//console.log(myInfoText);

//console.log(myInfoText.replaceAll('JavaScript', 'javascript'));

//   myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');
  //console.log(myInfoText.replaceAll('курс', 'КУРС'));

//   myInfoText = myInfoText.replaceAll('курс', 'КУРС');
//   console.log(myInfoText);

//   console.log(myInfoText.length);
//   myInfoText = myInfoText.length;

//   console.log(myInfoText[0]);

myInfoText = 
myInfoText = myInfoText.replaceAll('JavaScript', 'javascript');  
myInfoText = myInfoText.replaceAll('курс', 'КУРС');
console.log(myInfoText);
console.log(myInfoText.length);  
console.log(myInfoText[0]);
console.log(myInfoText[myInfoText.length - 1]);