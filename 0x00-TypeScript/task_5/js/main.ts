interface MajorCredits {
	credits: number;
    brand: 'major';
}

interface MinorCredits {
	credits: number;
    brand: 'minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
	const majorSum = subject1.credits + subject2.credits
    return (majorSum);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
	const minorSum = subject1.credits + subject2.credits;
    return (minorSum);
}
