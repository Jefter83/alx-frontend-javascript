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

console.log(teacher3);

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

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
  location: 'Ghana',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
