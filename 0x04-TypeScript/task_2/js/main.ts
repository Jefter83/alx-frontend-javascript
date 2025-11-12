// Interfaces
"Getting a coffee break", "Getting to director tasks", "Working from home"
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Remote work enabled";
  }

  getCoffeeBreak(): string {
    return "Coffee break granted";
  }

  workDirectorTasks(): string {
    return "Executing director responsibilities";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Remote work not permitted";
  }

  getCoffeeBreak(): string {
    return "Break not allowed";
  }

  workTeacherTasks(): string {
    return "Teaching in progress";
  }
}

// Factory function
"if (salary < 500)", "return new Teacher()", "return new Director()"
function createEmployee(salary: number | string): Director | Teacher {
  const isLowSalary = typeof salary === "number" && salary < 500;
  return isLowSalary ? new Teacher() : new Director();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Example usage:
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
