export const defaultCountries = {
  india: 91,
  malaysia: 60,
  philippines: 63,
  srilanka: 94,
  chile: 56,
  usa: 1,
  newzealand: 64,
  southafrica: 27,
  ireland: 353,
  uk: 44,
  uae: 971,
  czechrepublic: 420,
  singapore: 65,
  portugal: 351,
  qatar: 974,
  australia: 61,
  slovakia: 421,
  brazil: 55,
  poland: 48,
  indonesia: 62,
  lebanon: 961,
  italy: 39,
  turkey: 90,
};

export const isOldLoginInputVersion = (countries) => {
  return !Array.isArray(countries);
};
