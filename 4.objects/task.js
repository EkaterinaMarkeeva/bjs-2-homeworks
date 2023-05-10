function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks !== undefined) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    }
    
    let averageValue = this.marks.reduce((acc, item, index, marks) => {
        acc += item;
        let marksLength = marks.length;
        
        if (index === marksLength - 1) {
            return acc / marksLength;
        }

        return acc
    }, 0);

    return averageValue;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks
    this.excluded = reason;
}
