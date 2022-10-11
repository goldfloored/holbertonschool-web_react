export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
// CREATING AND EXPORTING CONSTANT SUBJECTS 
export const cTeacher: Subjects.TeacherInterface = {
	firstName: 'Diego',
	lastName: 'Tardio',
	experienceTeachingC: 10
}
// UPDATING TASK FOR C++
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
// UPDATING TASK FOR JAVA 
console.log('Java');
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
// UPDATING TASK FOR REACT 
console.log('React');
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
