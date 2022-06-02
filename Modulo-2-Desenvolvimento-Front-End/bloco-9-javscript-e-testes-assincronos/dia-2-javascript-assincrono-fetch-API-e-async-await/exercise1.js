const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => showCoins(data.data))
    .catch((error) => error.toString());
}

const showCoins = (coins) => {
  const listCoins = document.getElementById('coins');
  coins.forEach((coin) => {
    const itemList = document.createElement('li');
    itemList.innerHTML = `${coin.name} ${coin.priceUsd}`;
    listCoins.appendChild(itemList);
  });
}

fetchCoins();