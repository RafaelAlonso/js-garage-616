import { addCarToGarage, fetchCars } from './garage';

// criar um carro e guardar na base de dados da API
// - pegar os dados preenchidos no formulario
const carForm = document.getElementById('new-car');
carForm.addEventListener('submit', addCarToGarage)

fetchCars();