//* Problem 1:
const multiplyValue = (a, b) => {
    if (b === undefined) {
        return a * 2;
    }
    return a * b;
};
console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));
//* Problem 2:
const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLocaleLowerCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return value ? "Active" : "Inactive";
    }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
//* Problem 3
const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} ${latitude} ${longitude}`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
//* Problem 4
//type Identity = string | number;
// const concatenateArrays = <T extends Identity>(...array: T[][]): T[] => {
const concatenateArrays = (...array) => {
    return array.flat();
};
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((courses) => {
        return courses.isPublished === true && courses.students >= minStudents;
    });
};
// Sample Input
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
export {};
