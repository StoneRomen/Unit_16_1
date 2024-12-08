// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(null);
    }

    get age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    get averageGrade() {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    }

    present() {
        const nextEmptyIndex = this.attendance.indexOf(null);
        if (nextEmptyIndex !== -1) {
            this.attendance[nextEmptyIndex] = true;
        }
    }

    absent() {
        const nextEmptyIndex = this.attendance.indexOf(null);
        if (nextEmptyIndex !== -1) {
            this.attendance[nextEmptyIndex] = false;
        }
    }

    get averageAttendance() {
        const attendedClasses = this.attendance.filter(status => status !== null);
        const presentClasses = attendedClasses.filter(status => status === true).length;
        return attendedClasses.length > 0 ? presentClasses / attendedClasses.length : 0;
    }

    summary() {
        const avgGrade = this.averageGrade;
        const avgAttendance = this.averageAttendance;

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}


const student1 = new Student('Брюс', 'Уэйн', 2000);
const student2 = new Student('Клавдія', 'Петрівна', 1999);
const student3 = new Student('Леонід', 'Кучма', 2001);


student1.grades.push(92, 85, 100);
student2.grades.push(88, 92, 81);
student3.grades.push(71, 65, 40);

student1.present();
student1.present();
student1.absent();
student2.present();
student2.absent();
student3.absent();
student3.absent();
student3.present();


console.log(`${student1.firstName} ${student1.lastName}, Вік: ${student1.age}, Середній бал: ${student1.averageGrade}, Відвідуваність: ${student1.averageAttendance}`);
console.log(`${student2.firstName} ${student2.lastName}, Вік: ${student2.age}, Середній бал: ${student2.averageGrade}, Відвідуваність: ${student2.averageAttendance}`);
console.log(`${student3.firstName} ${student3.lastName}, Вік: ${student3.age}, Середній бал: ${student3.averageGrade}, Відвідуваність: ${student3.averageAttendance}`);

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());
