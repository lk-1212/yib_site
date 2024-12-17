export const getGridStyles = (gridLength: number): string => {
  if (gridLength % 4 === 0) return 'md:grid-cols-4';

  return 'md:grid-cols-3';
};
