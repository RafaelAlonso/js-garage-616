const garageName = 'bolinho-616';
const list = document.querySelector('.cars-list')

const addCarToGarage = (event) => {
  event.preventDefault();

  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const plate = document.getElementById('plate').value;
  const owner = document.getElementById('owner').value;

  // - criar um Object (~ Hash) com as infos do carro que iremos guardar
  const car = {
    brand: brand, 
    model: model, 
    plate: plate, 
    owner: owner
  }

  // - mover ele para a garagem (fetch)
  fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
  .then(response => response.json())
  .then(addCarToHTML)
}

const addCarToHTML = (car) => {
  const carHtml = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>
  `

  list.insertAdjacentHTML('beforeend', carHtml)
}

// recuperar todos os carros da garagem e mostra-los no html
// - recuperar os dados da API (fetch)
const fetchCars = () => {
  fetch(`https://wagon-garage-api.herokuapp.com/${garageName}/cars`)
    .then(response => response.json())
    .then(data => {
      // - inserir os carros que recebemos da API no nosso HTML
      data.forEach(addCarToHTML)
    })
}

export { fetchCars, addCarToGarage };