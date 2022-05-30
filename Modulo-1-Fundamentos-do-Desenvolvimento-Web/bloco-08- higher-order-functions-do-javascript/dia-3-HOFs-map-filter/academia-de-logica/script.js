const techProducts = [
	{
		id: 1, // numérico
		name: 'computer', // string
		price: 2100, // number
	},
	{
		id: 2,
		name: 'mouse',
		price: 56,
	},
	{
		id: 3,
		name: 'monitor',
		price: 589,
	},
	{
		id: 4,
		name: 'keyboard',
		price: 78,
	},
	{
		id: 5,
		name: 'HD',
		price: 350,
	},
	{
		id: 6,
		name: 'webcam',
		price: 187,
	},
	{
		id: 7,
		name: 'mic',
		price: 69,
	},
	{
		id: 8,
		name: 'headset',
		price: 216,
	},
];

// Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

const returnArray = () => {
	let array = [];
	techProducts.forEach((item) => {
		if(item.id % 2 === 0) {
			array.push(item.name);
		} 
	})
	return array
}

returnArray();

// Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
const price300 = () => {
	return techProducts.some( (item) => item.price > 300);
}

price300();

// Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total

const priceTotal = (id, qnt) => {
	let total = 0;
	techProducts.find((item) => {
		if (item.id === id) {
			total = item.price * qnt;
		}
	});
	return total;
}

priceTotal(8, 2);
