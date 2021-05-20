const garageName = 'meep';
const baseUrl = `https://wagon-garage-api.herokuapp.com/${garageName}/cars`
const list = document.querySelector('.cars-list')

const addCar = (car) => {
  const carDiv = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>
    `;

    list.insertAdjacentHTML('beforeend', carDiv)
}

const retrieveCars = () => {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      list.innerHTML = '';
      data.forEach(addCar)
    })
}

const postCar = (event) => {
  event.preventDefault();

  const body = {
    brand: brand.value,
    model: model.value,
    plate: plate.value,
    owner: owner.value,
  }

  fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  .then(response => response.json())
  .then(addCar)

  event.currentTarget.reset();
  brand.focus();
}

document.getElementById('new-car').addEventListener('submit', postCar)

retrieveCars();