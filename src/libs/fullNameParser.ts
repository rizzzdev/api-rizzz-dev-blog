export const fullNameParser = (fullName: string) => {
  const split = fullName.toLowerCase().split(" ");
  const capitalize = split.map((el) => el[0].toUpperCase() + el.slice(1));
  return capitalize.join(" ");
};
