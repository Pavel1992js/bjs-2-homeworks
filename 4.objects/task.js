//Задача 1. Инкапсуляция студента

function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

	this.setSubject = function(subjectName) {
		this.subject = subjectName;
	};

	this.addMarks = function(...marksToAdd) {
		if (!this.excluded) {
			this.marks.push(...marksToAdd);
		}
	};

	this.getAverage = function() {
		if (this.marks && this.marks.length > 0) {
			const sumOfMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
			return sumOfMarks / this.marks.length;
		} else {
			return 0;
		}
	};

	this.exclude = function(reason) {
		delete this.subject;
		delete this.marks;
		this.excluded = reason;
	};
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage());
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage());
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)