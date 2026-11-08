//* Problem 1:
const multiplyValue = (a: number, b?: number): number => {
  if (b === undefined) {
    return a * 2;
  }
  return a * b;
};

//* Problem 2:
const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};

//* Problem 3
const formatCoordinate = (
  coordinate: readonly [number, number, string],
): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude} ${longitude})`;
};

//* Problem 4
const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.flat();
};

//* Problem 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter((courses) => {
   return courses.isPublished === true && courses.students >= minStudents;
  });
};

//* Problem 6
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};