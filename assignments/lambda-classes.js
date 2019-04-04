// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`; 
    }
    PRAssignment(subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }
    springChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Person {
    constructor(pmAttributes){
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode() {
        `${name} dubugs ${student.name}'s code on ${subject}`;
    }
}

const jane = new Instructor ({
    name: 'Jane',
    age: 45,
    location: 'Spain',
    gender: 'female',
    specialty: 'HTML',
    favLanguage: 'Java',
    catchPhrase: 'Talk is cheap. Show me the code'
});

console.log(jane.speak());
console.log(jane.catchPhrase);
console.log(jane.demo('How to create classes'));
console.log(jane.grade('Josh', 'Sprint-Challenge'))