

//Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
//Створіть колекцію Map з цього масиву.
//Отримайте список ключів та значень окремо.
//Отримайте кількість елементів.
//Додати та видалити елемент
//Здійсніть пошук за ключом


const arr = ([
	[1, "first"],
	[3, "third"]
])
const myArr = new Map(Object.entries(arr));
for (const item of myArr) {
	console.log('item :>> ', item);
}
const myArrKeys = [...myArr.keys()];
const myArrValues = [...myArr.values()];
myArr.set(2, 'second');
console.log('map', myArr)
myArr.delete(2, 'second');
console.log('map.has(2) :>> ', myArr.has(2));