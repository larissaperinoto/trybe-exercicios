const fetchCoins = async () => {
  const coins = await fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const converge = async () => {
  const money = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json')
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());

    return money.brl;
}

const showCoins = async () => {
  const coins = await fetchCoins();
  const convertCoins = await converge();
  const listCoins = document.getElementById('coins');
  coins.filter((coin) => coin.rank <= 10)
  .forEach((coin) => {
    const itemList = document.createElement('li');
    itemList.innerHTML = `${coin.name}:  ${(Number(coin.priceUsd * convertCoins)).toFixed(2)} BRL`;
    listCoins.appendChild(itemList);
  });
}

showCoins();