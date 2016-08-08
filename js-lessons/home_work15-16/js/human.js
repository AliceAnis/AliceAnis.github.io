function Human(name, age, gender, height, weight){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

	Worker.prototype = Object.create(Human.prototype);
    Worker.prototype.constructor = Worker;
    Student.prototype = Object.create(Human.prototype);
    Student.prototype.constructor = Student;

    // Human.prototype.does = function() {
    //     console.log('Занятие: ' + this.work);
    // }
    function Worker(name, age, gender, height, weight, job, salary) {
        Human.apply(this, arguments);
        this.job =job;
        this.salary = salary;
        this.work = function () {
        return 'I work';
		}
    }

    function Student(name, age, gender, height, weight, studyPlace, scholarship) {
        Human.apply(this, arguments);
        this.studyPlace = studyPlace;
        this.scholarship = scholarship;
        this.work = function () {
        return 'I watch films';
		}
    }

    var worker1 = new Worker('John', 32, 'male', 182, 85, 'manager', 500);
    console.log(worker1);
    worker1.work();

    var worker2 = new Worker('Dave', 38, 'male', 175, 80, 'driver', 300);
    console.log(worker2);
    worker2.work();

    var student1 = new Student('Alie', 18, 'female', 165, 55, 'NAU', 150);
    console.log(student1);
    student1.work();

    var worker3 = new Worker('Peter', 29, 'male', 186, 80, 'doctor', 300);
    console.log(worker3);
    worker3.work();



