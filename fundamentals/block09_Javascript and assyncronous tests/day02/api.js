
const fetchCrypto = async () => {
    const API_URL = 'https://api.coincap.io/v2/assets';

    const coinsArray = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data.data )
        .catch((error) => error.toString());
    
    return coinsArray;
}

const settingArray = async () => {
    const coinsArray = await fetchCrypto();
    const coinUlId = document.getElementById('coinUl');

    coinsArray
        .filter((coin) => Number(coin.rank) <= 10)
        .forEach((coin) => {
            const li = document.createElement('li');
            const priceInUsd = Number(coin.priceUsd);

            li.innerText = `${coin.name}(${coin.symbol}): ${priceInUsd.toFixed(2)}`;
            coinUlId.appendChild(li);
        });
}

window.onload = () => settingArray();

