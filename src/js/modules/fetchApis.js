import { featuresURL, features, icons, numberOfFeatures } from "./globals";
import getFeatures from "./getFeatures";

const fetchApis = () => {
  fetch(featuresURL)
    .then(response => response.json())
    .then(data => {
      data.map(feature => {
        if (feature.id < numberOfFeatures) {
          features[feature.id] = {
            icon: icons[Math.floor(Math.random() * icons.length)],
            title: feature.title,
            subtitle: feature.body
          };
        }
      });
    })
    .then(() => {
      getFeatures(features);
    })
    .catch(error => console.log(error));
};

export default fetchApis;
