export{}
class Patient {
  constructor(
    public patientId: number,
    public name: string,
    public age: number
  ) {}

  showInfo(): string {
    return `Patient ID: ${this.patientId}, Name: ${this.name}, Age: ${this.age}`;
  }
}
class Doctor {
  constructor(
    public doctorId: number,
    public name: string,
    public specialty: string
  ) {}

  showInfo(): string {
    return `Doctor: Dr. ${this.name} Speciality: ${this.specialty}`;
  }

  examine(patient: Patient): void {
    console.log(`Doctor: Dr. ${this.name} Speciality: ${this.specialty} is examining`);
    console.log(patient.showInfo());
  }
  diagnose(pt: Patient, dis: string): void {
    console.log(`Doctor: Dr. ${this.name} has diagnosed ${pt.showInfo()} with ${dis}.`);
  }

  prescribeMedicine(pt: Patient, med: string): void {
    console.log(`Doctor: Dr. ${this.name} has prescribed ${med} to ${pt.showInfo()}.`);
  }

  calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
    const total = fee + medFee;
    console.log(`Doctor: Dr. ${this.name} has calculated the treatment cost for ${pt.showInfo()}.`);
    console.log(`Total cost: ${total}`);
  }
}

const doc1 = new Doctor(1, "John", "Cardiology");
const doc2 = new Doctor(2, "Smith", "Neurology");
const pat1 = new Patient(101, "Alice", 30);
const pat2 = new Patient(102, "Bob", 25);
doc1.examine(pat1);
doc1.examine(pat2);
doc2.examine(pat1);
console.log("--------------------------------------------------");
doc1.diagnose(pat1, "หัวใจ");
doc2.diagnose(pat2, "ข้อเท้าแพลง");
console.log("--------------------------------------------------");
doc1.prescribeMedicine(pat1, "ยาลดความดัน");
doc2.prescribeMedicine(pat2, "ยาคลายเครียด");
console.log("--------------------------------------------------");
doc1.calculateTreatmentCost(pat1, 500, 200);
doc2.calculateTreatmentCost(pat2, 300, 150);