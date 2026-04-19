import data from "../data/content.json";

export const fetchHeroContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data.hero), 1200);
  });
};

export const fetchFeaturesContent = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data.features), 1200);
  });
};