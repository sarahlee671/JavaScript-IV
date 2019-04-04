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
        console.log(this.favSubjects.split(',').join("\r\n")); 
        
    }  
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManagers extends Person {
    constructor(pmAttributes){
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
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

const charles = new Instructor ({
    name: 'Charles',
    age: 35,
    location: 'Berkley, CA',
    gender: 'male',
    specialty: 'JS Node',
    favLanguage: 'JavaScript',
    catchPhrase: "If what you've done is stupid but it works, then it really isn't that stupid at all"
});

const james = new Student ({
    name: 'James',
    age: 20,
    location: 'Hawaii',
    gender: 'male',
    previousBackground: "Went to college for two years and dropped out",
    className: 'Web19',
    favSubjects: 'JavaScript, HTML, CSS',
});

const brian = new Student ({
    name: 'Brian',
    age: 22,
    location: 'Florida',
    gender: 'male',
    previousBackground: 'Professional Handler for a Chihuahua who is a two time winner of the American Kennel Club',
    className: 'CS12',
    favSubjects: 'Java, Python'
});

const emily = new ProjectManagers ({
    name: 'Emily',
    age: 32,
    location: 'New York City',
    gender: 'female',
    gradClassName: 'Web2',
    favInstructor: 'Josh'
});

const kimberly = new ProjectManagers ({
    name: 'Kimberly',
    age: 48,
    location: 'Austin, Texas',
    gender: 'female',
    gradClassName: 'CS10',
    favInstructor: 'John Doe'
});

console.log(jane.speak());
console.log(jane.catchPhrase);
console.log(jane.demo('How to create classes'));
console.log(jane.grade(james, 'Sprint-Challenge'));

console.log(charles.catchPhrase);
console.log(charles.favLanguage);

console.log(james.listsSubjects());
console.log(james.PRAssignment('web design'));
console.log(james.sprintChallenge('redux'));

console.log(brian.previousBackground);
console.log(brian.PRAssignment('prototype'));

console.log(emily.standUp('@web19'));
console.log(emily.debugsCode(brian, 'classes'));

console.log(kimberly.location);
console.log(kimberly.debugsCode(james, 'CSS'))