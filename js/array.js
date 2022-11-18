function User(name, surname, age, isMale, email, isSubscribed) {
	this.firstName = name;
	this.lastName = surname;
	this.age = age;
	this.isMale = isMale;
	this.email = email;
	this.isSubscribed = isSubscribed;
	this.getFullName = () => `${this.firstName} ${this.lastName}`;
}

const users = [];

for (let i = 0; i < 100; i++) {
	const user = new User(
		`Username${i}`,
		`Usersurname${i}`,
		Math.floor(Math.random() * 90),
		Math.random() > 0.5,
		`Useremail${i}@gmail.com`,
		Math.random() > 0.5,
	)
	users.push(user);
}

console.log('users', users);

console.log('users[0].getFullName()', users[0].getFullName());

const schoolGirls = users.filter(user => !user.isMale && user.age >= 6 && user.age <= 18);

console.log('schoolGirls', schoolGirls);

const indexForDelete = users.findIndex(user => user.email === 'Useremail5@gmail.com');
users.splice(indexForDelete, 1);

const isUserExists = users.some(user => user.email === 'Useremail99@gmail.com');
console.log('isUserExists', isUserExists);

const isAllSubscribed = users.every(user => user.isSubscribed);
console.log('isAllSubscribed', isAllSubscribed);



