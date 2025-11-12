interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties
}

// Example usage
const teacher3: Teacher = {
  firstName: 'Jefter',
  lastName: 'Adinkrah',
  fullTimeEmployee: false,
  location: 'Ghana',
  contract: false,
};

"interface Director extends Teacher"
console.log(teacher3);

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'Jefter',
  lastName: 'Adinkrah',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

"function printTeacher("
// Define the interface for the input object
interface Teacher {
  firstName: string;
  lastName: string;
}

// Define the function interface
interface printTeacherFunction {
  (teacher: Teacher): string;
}

// Implement the function
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  "return `${firstName}. ${lastName}`";
};

// Example usage
console.log(printTeacher({ firstName: "Jefter", lastName: "Adinkrah" })); // Output: Jefter Adinkrah

// Interface describing the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Adinkrah", lastName: "Jefter" });
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName());    // Output: Adinkrah
