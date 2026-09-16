class Student{
    constructor(private name:string,private major: string){}
    getStudentInfo(){
        return `Student Name: ${this.name} Major: ${this.major}`;
    }
}

class Teacher{
    constructor(private name: string,private faculty: string){}
    getTeacherInfo(){
        return `Teacher Name: ${this.name} Faculty: ${this.faculty}`;
    }
    teach(student: Student){
        console.log(`Teacher: ${this.name} Teach Student: ${student.getStudentInfo()}`)
    }
}
const s1 = new Student("John","Computer Scine");
const s2 = new Student("Samat","Computer Scine");
const t1 = new Teacher("Mane","Sciense");

t1.teach(s1);
t1.teach(s2);