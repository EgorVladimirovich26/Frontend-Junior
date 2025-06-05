userName = prompt('Как вас зовут?');
//console.log(userName.toLowerCase());
userName = userName.toLowerCase();
// console.log(userName.trim());
userName = userName.trim();
alert(userName);
// console.log(userName);

userAge = prompt('Сколько вам лет?');
// console.log(userAge.trim());
userAge = userAge.trim();
// console.log(Number(userAge));
userAge = Number(userAge);      
alert(`Вас зовут ${userName} и вам ${userAge} лет`);  