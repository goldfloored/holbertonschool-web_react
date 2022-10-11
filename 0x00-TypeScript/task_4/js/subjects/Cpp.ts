namespace Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }
    
    class Cpp extends Subject {
        getRequirements(): string {
            const requirements = "Here is the list of requirements for Cpp";
            return (requirements);
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                const available = `Available Teacher: ${this.teacher.firstName}`
                return (available);
            } else {
                const notAvailable = "No available teacher";
                return (notAvailable);
            }
        }
    }
}
