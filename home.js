// 1

// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this.balance = balance;
//     }

//     deposit(number) {
//         return this.balance += number;
//     }

//     withdraw(number) {
//         return this.balance -= number;
//     }
// }

// class PayrollAccount extends BankAccount {
//     constructor(accountNumber, balance, employmentYears, salary) {
//         super(accountNumber, balance);
//         this.employmentYears = employmentYears;
//         this.salary = salary
//     }

//     calculateSalary() {
//         if (this.employmentYears <= 1) {
//             return this.salary
//         }
//         else if (this.employmentYears > 1 && this.employmentYears <= 5) {
//             return this.salary * 10
//         }
//         else {
//             return this.salary * 100
//         }
//     }
// }

// let payrollAccount = new PayrollAccount(6868428624, 10, 90, 50);
// console.log(payrollAccount.deposit(1));
// console.log(payrollAccount.withdraw(2));
// console.log(payrollAccount.calculateSalary());




// 2

// class Shape {
//     constructor(color) {
//         this.color = color
//     }

//     setColor(userColor) {
//         return this.color = userColor
//     }

//     getColor() {
//         return this.color
//     }

//     calculateArea() {
//         return ''
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }

//     calculateArea() {
//         return this.width * this.height
//     }
// }

// let rectangle = new Rectangle('', 10, 56)
// console.log(rectangle.setColor('green'))
// console.log(rectangle.getColor())
// console.log(rectangle.calculateArea())




// 3

// class Product {
//     constructor(name, price, quantity) {
//         this.name = name
//         this.price = price
//         this.quantity = quantity
//     }

//     calculateTotalPrice() {
//         return this.quantity * this.price
//     }

//     changePrice(number) {
//         return this.price = Number(number)
//     }

//     changeQuantity(number) {
//         return this.quantity = number
//     }
// }

// let product = new Product('fwfre', 32, 5000)
// console.log(product.calculateTotalPrice())
// console.log(product.changePrice(900000))
// console.log(product.changeQuantity(1))