const regions = [
  {
    nom: "Dakar",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Dakar-Ind%C3%A9pendance.jpg",
    description: "Dakar est la capitale du Sénégal, en Afrique occidentale."
  },
  {
    nom: "Saint-Louis",
    image: "https://media.routard.com/image/84/3/photo.1551843.jpg",
    description: "Saint-Louis est une ville située sur la côte nord-ouest du Sénégal."
  },
  {
    nom: "Casamance",
    image: "https://www.maisonsduvoyage.com/media/catalog/product/cache/102/image/1010x670/17f82f742ffe127f42dca9de82fb58b1/c/h/chobe_river_in_botswana_dmitry_pichugin_fotolia_1.jpg",
    description: "La Casamance est une région historique et naturelle du Sénégal située au sud du pays et bordant le fleuve Casamance."
  }
]

!function(doc){
  regions.forEach((region) => {
    const markup = `
      <div class="col-12 col-md-6 mb-4">
        <div class="card w-100">
          <img class="card-img-top" src="${region.image}" alt="Card image cap" height="250px">
          <div class="card-body">
            <h5 class="card-title">${region.nom}</h5>
            <p class="card-text">${region.description}</p>
            <a href="#" class="btn btn-primary choose-btn">Choisir</a>
          </div>
        </div>
      </div>
    `
    doc.getElementById('region-wrapper').insertAdjacentHTML("beforeend",markup)
  })
  doc.querySelectorAll('.choose-btn').forEach(function(node){
      node.addEventListener('click',function(){
        mountToDOM(node)
      })
  })


  function mountToDOM(node){
    const title = node.parentNode.querySelector('.card-title').textContent
    const desc  = node.parentNode.querySelector('.card-text').textContent
    const image = node.closest('.card').querySelector('.card-img-top').src
    const markup = `
      <div class="col-12 col-md-4 col-lg-3 mb-3">
        <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${desc}</p>
          </div>
        </div>
      </div>
    `
    doc.getElementById('content').insertAdjacentHTML("beforeend",markup)
    alert('Ajouté')
  }
}(document)