export const formatUnit: (unit: number) => string = (unit) => {
  return unit < 10 ? `0${unit}` : String(unit);
};
