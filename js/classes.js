//1. Реалізувати клас Phone(таска з заняття).
//	Властивості: марка, модель, колір, ціна, рік випуску.
//		Метод: розрахунок віку телефона.

//Створити екземпляр класу, викликати для нього метод.
//Реалізувати сеттер для року виробництва з валідацією
//та відповідний геттер. * Для перевірки, чи належить рік
//виробництва певному діапазону, можна використати клас нижче.
class Phone {
	constructor(mark, model, color, price, year) {
		this.mark = mark;
		this.model = model;
		this.color = color;
		this.price = price;
		this.year = year;
	}


	set year(value) {
		if (typeof value !== 'number') {
			throw new TypeError('year must be number');
		}
		if (value < 1970 || value > 2022 || !Number.isInteger(value)) {
			throw new RangeError('year must be 1970-2022 integer');
		}
		this._year = value;
	}
	get year() {
		return this._year;
	}
	getAge() {
		return 2022 - this.year;
	}
}
const phone1 = new Phone(
	'XIAOMI',
	'Redmi Note 11 ',
	'black',
	10000,
	2021,
);

console.log(phone1.getAge());

//2. * Реалізувати клас RangeValidator.
//Клас призначений для валідації потрапляння числового значення в діапазон.
//Границі діапазона є властивостями:
//■ from(типу number);
//■ to(типу number);
//(from <= to)
//Реалізувати getter'и та setter'и для обох властивостей.
// Реалізувати getter range, який повертатиме масив із
//двома числами діапазону(тобто геттер повертає не властивість,
//	 а масив із двома елементами, які є властивостями)
//Реалізувати метод isValid, який прийматиме число і
//перевірятиме, чи входить число у вказаний діапазон(повертає boolean).
class RangeValidator {
	constructor(from, to) {
		this.from = from;
		this.to = to;
	}
	set from(value) {
		if (value > this._to) {
			throw new RangeValidator('value < to');
		}
		this._from = value;
	}

	set to(value) {
		if (value > this._from) {
			throw new RangeValidator('value > from');
		}
		this._to = value;
	}
	get from() {
		return this_from;
	}
	get to() {
		return this_to;
	}
	get rande() {
		return this_from, this_to;
	}
	isValid(value) {
		if (value >= this_from && value <= this_to) {
			return true;
		}
		return false;
	}
}
//Приклади роботи:
try {
	// Конструктор (+сеттери)
	const range1 = new RangeValidator(1, 5.5) // Відпрацьовує
	const range2 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)

	// Робота сетерів
	range1.from = 5; // Відпрацьовує
	range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)

	range1.to = 80; // Відпрацьовує
	range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from

	// Робота гетерів
	console.log(range1.from) // => 5
	console.log(range1.to) // => 80

	// Робота геттера range
	console.log(range1.range) // => [5, 80]

	// Робота validate
	console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
	console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])
} catch (erro) {
	console.log('erro', erro)
}
