//Реалізувати ієрархію:
//ПасажирськийТранспорт(PassengerTransport) => ТранспортнийЗасіб(Vehicle)
//Вантажний Транспорт(FreightTransport) => ТранспортнийЗасіб(Vehicle).


//Для базового класу Vehicle реалізувати:
//- властивості:
//--- dimensions - габарити(об'єкт із довжиною, шириною, висотою),
//--- brand - марка,
//	--- model - модель,
//	--- manufactureDate - дата виробництва(використовувати вбудований об'єкт Date).
class Vehicle {
	constructor(dimensions, brand, model, manufactureDate) {
		this.dimensions = dimensions;
		this.brand = brand;
		this.model = model;
		this.manufactureDate = manufactureDate;
	}
	getFullInfo() {
		return `${this.brand} ${this.model} ${this.manufactureDate}`;
	}
	getAge() {
		return new Date().getFullYear() - this.year;
	}
}
//Дочірній клас PassengerTransport 
class PassengerTransport extends Vehicle {
	constructor(dimensions, brand, model, manufactureDate, passengerLimit, passengerCount) {
		super(dimensions, brand, model, manufactureDate);
		this.passengerLimit = passengerLimit;
		this.passengerCount = passengerCount;
	}
	//		- методом addPassenger() для додавання ще одного пасажира з
	//		перевіркою можливості додавання(чи ще незайняті місця) -
	//		повертає true(якщо пасажир доданий) або false(якщо не доданий).
	//addPassenger(user) {
	//	user.ispassengerCount = passengerLimit >= passengerCount
	//}
	getFullInfo() {
		return `${this.brand} ${this.model} ${this.manufactureDate} ${this.passengerLimit}`;
	}

	addPassenger(a) {
		if (this.passengerLimit <= this.passengerCount) {
			return { done: false };
		} else {
			return { done: true };
		}
	}
}



const addPassenger = {};
const PassengerTransport1 = new PassengerTransport(
	'Довжина 4370,Висота 1420,Ширина 1802',
	'Volvo ',
	'V-40',
	2019,
	6,
	10,
);
console.log('PassengerTransport1:>> ', PassengerTransport1);
console.log('PassengerTransport1.getFullInfo() :>> ', PassengerTransport1.getFullInfo());


//Дочірній клас FreightTransport розширюється:
//- властивістю:
//--- capacity - вантажопідйомність,
//	- методом checkLoadingPossibility(weight) - для перевірки
//	можливості завантаження маси weight.Повертає булеан.
//Перевизначити метод getFullInfo:
//бренд,
//	модель,
//	вік,
//	вантажопідйомність.
class FreightTransport extends Vehicle {
	constructor(dimensions, brand, model, manufactureDate, capacity) {
		super(dimensions, brand, model, manufactureDate,);
		this.capacity = capacity;
	}
	getFullInfo() {
		return `${this.brand} ${this.model} ${this.manufactureDate} ${this.capacity}`;
	}
}
const checkLoadingPossibility = {};
const FreightTransport1 = new FreightTransport(
	'Довжина 10370,Висота 3420,Ширина 1802',
	'Man',
	'V-400',
	2000,
	6000,
);
console.log('FreightTransport1 :>> ', FreightTransport1);
console.log('FreightTransport1.getFullInfo() :>> ', FreightTransport1.getFullInfo());


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
// Конструктор (+сеттери)
try {
	const range1 = new RangeValidator(1, 5.5)
	range1.to = 80; // Відпрацьовує
	console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
	console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])


} catch (erro) {
	console.log('erro', erro)
}