namespace Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }

    class React extends Subject {
        getRequirements(): string {
            const requirements = "Here is the list of requirements for React";
            return (requirements);
        }
        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingReact) {
                const noTeacher = "No available teacher";
                return (noTeacher);
            } else {
                const available = `Available Teacher: ${this.teacher.firstName}`;
                return (available)
            }
        }
    }
}
