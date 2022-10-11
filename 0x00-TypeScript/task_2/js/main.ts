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

export class Director implements DirectorInterface {
	workFromHome() { 
        const home = 'Working from home';
        return (home); 
    }
	getCoffeeBreak() { 
        const coffee = 'Getting a coffee break';
        return (coffee); 
    }
	workDirectorTasks() { 
        const direct = 'Getting to director tasks';
        return (direct);
    }
}

export class Teacher implements TeacherInterface {
	workFromHome() { 
        const home = 'Cannot work from home';
        return (home);
    }
	getCoffeeBreak() { 
        const coffeBreak = 'Cannot have a break';
        return (coffeBreak);
    }
	workTeacherTasks() { 
        const work = 'Getting to work';
        return (work);
    }
}

export function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
        return (new Teacher());
    }
	else {
        return (new Director());
    }
}

export function isDirector(employee: Director | Teacher): employee is Director {
	return (employee instanceof Director);
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (isDirector(employee)) {
        return (employee.workDirectorTasks());
    }
	else {
        return (employee.workTeacherTasks());
    }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
        return ('Teaching Math');
    }
	if (todayClass === 'History') {
        return ('Teaching History');
    }
}
