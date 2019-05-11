
const getFeatures = (features) => {
  Object.keys(features).map(feature => {
    let output = `<article id="feature-${feature}" class="single-feature">
              <a href="#">
                <button class="cybersolution-link">
                  <img src="/assets/imgs/icons-more/${features[feature].icon}.png" class="icon-link" alt="icon" />
                </button>
                <h3 class="title">${features[feature].title}</h3>
                <p class="subtitle">${features[feature].subtitle}</span></p>
              </a>
          </article>`;
    $(".cybersolution-more__features-list").append(output);
  });
};

export default getFeatures;
