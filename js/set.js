//Створіть колекцію Set із початковими значеннями 1, 2, 3.
//За допомогою методу has перевірте наявність елемента зі значенням 3,
// а потім елемента зі значенням 4.
//Додати ще кілька елементів.
//За допомогою циклу for-of переберіть колекцію та виведіть у консоль.
//Знайдіть суму цих значень.
//Видаліть елемент 2.
//Очистіть усю колекцію.

const set1 = new Set([1, 2, 3]);

console.log('set1.has(3) :>> ', set1.has(3));
console.log('set1.has(4) :>> ', set1.has(4));

set1.add(4).add(5).add(6).add(7);

for (const item of set1) {
	console.log('item :>> ', item);
}
console.log([...set1]);

const map1 = new Map([...set1.entries()]);
const set1Keys = [...set1.keys()];
const set1Values = [...set1.values()];
let result = set1Values.reduce((sum, current) => sum + current, 0);

//alert(result);


set1.delete(2);
set1.clear();

//З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.
const arr = [1, 6, 9, 4, 9, 1, 5, 6];
const uniqArr = [...new Set(arr)];
console.log('uniqArr', uniqArr)

//З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.
const arr2 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr3 = [5, 10, 11];
const uniqArr1 = [...new Set([...arr2, ...arr3])];
console.log('uniqArr1', uniqArr1)




// З масиву
const messages = [
	{ id: 1, name: 'Ivo', message: 'hello', date: new Date() },
	{ id: 2, name: 'Ivo', message: 'how are you', date: new Date() },
	{ id: 3, name: 'Wally', message: 'hi)', date: new Date() },
	{ id: 4, name: 'Wally', message: 'fine)', date: new Date() },
];
//створити1) масив імен користувачів

const users = [...new Set(messages.map(user => user.name))];
messages.forEach(um => {
	if (!users.find(u => um.name === u.name)) {
		users.push({ name: um.name, name: um.name });
	}
});


const messages1 = messages.map(m => ({
	message: m.message,
	date: m.date,
}));
const userMessages1 = new Map()


users.forEach(u =>
	userMessages1.set(
		u,
		messages
			.filter(um => um.name === u.name)
			.map(um => ({ name: um.name, message: um.message, date: um.date }))
	)
);

console.log('userMessages1', userMessages1)

