export{}
class Course {
  constructor(
    public code: string,
    public name: string,
    public credit: number
  ) {}
}
class Student {
  constructor(
    public studentId: string,
    public name: string
  ) {}
}
class Teacher {
  constructor(public name: string) {}

  private calculateGrade(score: number): string {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  }
  evaluate(student: Student, course: Course, score: number): void {
    const grade = this.calculateGrade(score);
    console.log(`Teacher: ${this.name}`);
    console.log(`Student: ${student.studentId} ${student.name}`);
    console.log(`Course: ${course.code} - ${course.name}`);
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
    console.log("-----------------------------------");
  }
}

const teacher = new Teacher("Dr. Smith");
const student = new Student("651001", "Alice");
const course = new Course("CS101", "Introduction to Computer Science", 3);
teacher.evaluate(student, course, 85);