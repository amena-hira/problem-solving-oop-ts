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

