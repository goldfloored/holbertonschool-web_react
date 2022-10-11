namespace Subjects {
	interface TeacherInterface {
		experienceTeachingJava?: number;
	}

	class Java extends Subject {
		getRequirements(): string {
            const requirements = 'Here is the list of requirements for Java';
            return (requirements)
        }
		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingJava > 0) {
                const available = `Available Teacher: ${this.teacher.firstName}`;
                return (available);
            } else {
                const noTeacher = 'No available teacher';
                return (noTeacher);
            }
		}
	}
}
