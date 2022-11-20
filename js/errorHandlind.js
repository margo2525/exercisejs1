//Для рекурсивної функції піднесення числа до 
//степеня pow(base, exponent) реалізувати валідацію
// значень, що передаються, і генерацію помилок
//  відповідних типів.
//Виклик функції вкласти в блок try з відловом
// виняткових ситуацій (помилок) різних типів з 
// оповіщенням користувача про тип помилки.

//Для спрощення замість рекурсивного алгоритму можна
// реалізувати повернення значення base**exponent,
//  основу вважайте цілим числом, показник -- додатнім.
function pow(x, n) {
	if (typeof n !== 'number') {
		throw new TypeError('n must be number value');
	}
	if (n < 0 || !Number.isSafeInteger(n)) {
		throw new RangeError('n must be positive integer value'); // на catch
	}
	else {
		return x * pow(x, n - 1);
	}
}
try {
	const pow = pow(2, -1);
} catch (err) {
	console.dir(err);
	if (err instanceof TypeError) {
		console.log('Input incorrect type');
	} else if (err instanceof RangeError) {
		console.log('Value must be pisitive integer');
	} else {
		console.log('Something went wrong');
	}
}