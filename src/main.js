import requester from './requester.mjs'

requester.get('https://devlab-region.glitch.me/api/regions').then((regions) => {
  regions.forEach((region) => {
    document.getElementById('wrapper').insertAdjacentHTML('beforeend', getMarkup(region))
  })
})

function getMarkup(region) {
  const markup =  `
    <div class="region">
      <img class="region-img" src="${region.image}">
      <div class="region-desc">
        <div>
          <h1>${region.nom}</h1>
          <h3>Population : ${new Intl.NumberFormat('fr-FR', { style: 'decimal'}).format(region.population)}</h3>
        </div>
      </div>
    </div>
  `
  return markup
}