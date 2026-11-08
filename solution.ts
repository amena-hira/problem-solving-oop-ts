const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

type TCoordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (coordinate: TCoordinate): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const resultArray: T[] = [];
  for (const array of arrays) {
    resultArray.push(...array);
  }
  return resultArray;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses: Course[] = [];
  for (const course of courses) {
    if (course.isPublished && course.students >= minStudents) {
      popularCourses.push(course);
    }
  }
  return popularCourses;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const result:T[K][] = []
  for (const item of items) {
    result.push(item[key])
  }
  return result;
};

