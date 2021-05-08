export class Std {
  studentId: number;
  firstName: string;
  lastName: string;
  fees: number;
  course: string;

  constructor(
    studentId: number,
    firstName: string,
    lastName: string,
    fees: number,
    course: string
  ) {
      this.studentId = studentId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.fees = fees;
      this.course = course;
  }
}
