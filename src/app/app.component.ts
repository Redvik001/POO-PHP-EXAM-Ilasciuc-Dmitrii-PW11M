import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    users: User[] = [
        new User("Миша", 19),
        new User("Вася", 15),
        new User("Коля", 81)
    ];
    workers: Worker[] = [
        new Worker("Соня", 18),
        new Worker("Петросян", 3)
    ];
    students: Student[] = [
        new Student("Иванов", 17),
        new Student("Иванов2", 30)
    ];
    drivers: Driver[] = [
        new Driver("Иванов3", 66)
    ];

    addedUser: User;
    changedUserOld: User;
    changedUserNew: User;

    addedWorker: Worker;
    changedWorkerOld: Worker;
    changedWorkerNew: Worker;

    addedStudent: Student;
    changedStudentOld: Student;
    changedStudentNew: Student;

    addedDriver: Driver;
    changedDriverOld: Driver;
    changedDriverNew: Driver;

    showAddUserDialog() {
        this.addedUser = new User("Новый пользователь", 1);
    }

    showChangeUserDialog(user: User) {
        this.changedUserOld = user;
        this.changedUserNew = new User(user.getName(), user.getAge());
    }

    addUser() {
        this.users.push(this.addedUser);
        this.closeDialog();
    }

    changeUser() {
        this.users = this.users.map((item) => item === this.changedUserOld ? this.changedUserNew : item);
        this.closeDialog();
    }

    showAddWorkerDialog() {
        this.addedWorker = new Worker("Новый работник", 1);
    }

    showChangeWorkerDialog(worker: Worker) {
        this.changedWorkerOld = worker;
        this.changedWorkerNew = new Worker(worker.getName(), worker.getAge());
        this.changedWorkerNew.setSalary(this.changedWorkerOld.getSalary());
    }

    addWorker() {
        this.workers.push(this.addedWorker);
        this.closeDialog();
    }

    changeWorker() {
        this.workers = this.workers.map((item) => item === this.changedWorkerOld ? this.changedWorkerNew : item);
        this.closeDialog();
    }

    showAddStudentDialog() {
        this.addedStudent = new Student("Новый студент", 1);
    }

    showChangeStudentDialog(student: Student) {
        this.changedStudentOld = student;
        this.changedStudentNew = new Student(student.getName(), student.getAge());
        this.changedStudentNew.course = this.changedStudentOld.course;
        this.changedStudentNew.scholarship = this.changedStudentOld.scholarship;
    }

    addStudent() {
        this.students.push(this.addedStudent);
        this.closeDialog();
    }

    changeStudent() {
        this.students = this.students.map((item) => item === this.changedStudentOld ? this.changedStudentNew : item);
        this.closeDialog();
    }

    showAddDriverDialog() {
        this.addedDriver = new Driver("Новый водитель", 1);
    }

    showChangeDriverDialog(driver: Driver) {
        this.changedDriverOld = driver;
        this.changedDriverNew = new Driver(driver.getName(), driver.getAge());
        this.changedDriverNew.setSalary(this.changedDriverOld.getSalary());
        this.changedDriverNew.drivingCategory = this.changedDriverOld.drivingCategory;
        this.changedDriverNew.drivingExperience = this.changedDriverOld.drivingExperience;
    }

    addDriver() {
        this.drivers.push(this.addedDriver);
        this.closeDialog();
    }

    changeDriver() {
        this.drivers = this.drivers.map((item) => item === this.changedDriverOld ? this.changedDriverNew : item);
        this.closeDialog();
    }


    closeDialog() {
        this.addedUser = null;
        this.changedUserOld = null;
        this.changedUserNew = null;
        this.addedWorker = null;
        this.changedWorkerOld = null;
        this.changedWorkerNew = null;
        this.addedStudent = null;
        this.changedStudentOld = null;
        this.changedStudentNew = null;
        this.addedDriver = null;
        this.changedDriverOld = null;
        this.changedDriverNew = null;
    }
}


class User {
    protected name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.setName(name);
        this.setAge(age);
    }

    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getAge() {
        return this.age;
    }
    public setAge(age: number) {
        this.age = age;
    }
}

class Worker extends User {
    private salary: number = 0;

    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
    public getAge() {
        return this.age;
    }
    public setAge(age: number) {
        if (this.checkAge(age)) this.age = age;
    }

    public getSalary() {
        return this.salary;
    }
    public setSalary(salary: number) {
        this.salary = salary;
    }

    private checkAge(age: number) {
        return age >= 1 && age <= 100;
    }

    constructor(name: string, age: number) {
        super(name, age);
        this.__construct(name, age);  // такое было требование
    }

    __construct(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends User {
    private _scholarship: number = 750;
    private _course: string = "PW11M";

    get scholarship() {
        return this._scholarship;
    }

    set scholarship(value: number) {
        this._scholarship = value;
    }

    get course() {
        return this._course;
    }

    set course(value: string) {
        this._course = value;
    }
}

class Driver extends Worker {
    private _drivingExperience: number = 0;
    private _drivingCategory: DrivingCategory = "A";

    get drivingExperience() {
        return this._drivingExperience;
    }

    set drivingExperience(value: number) {
        this._drivingExperience = value;
    }

    get drivingCategory() {
        return this._drivingCategory;
    }

    set drivingCategory(value: DrivingCategory) {
        this._drivingCategory = value;
    }
}

type DrivingCategory = "A" | "B" | "C";