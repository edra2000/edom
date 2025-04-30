async function fetchBinanceData() {
  try {
    const res = await fetch('/api/binance');
    const data = await res.json();

    const container = document.getElementById('cards-container');
    const loading = document.getElementById('loading');
    container.innerHTML = '';
    loading.style.display = 'none';

    data.slice(0, 50).forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const symbol = item.symbol.replace('USDT', '');
      const price = parseFloat(item.lastPrice).toFixed(3);
      const logoUrl = `https://cryptoicon-api.pages.dev/api/icon/${symbol.toLowerCase()}`;

      card.innerHTML = `
        <img src="${logoUrl}" alt="${symbol}" onerror="this.onerror=null;this.src='default-logo.png'" />
        <div>${symbol}</div>
        <div>${price} USDT</div>
      `;

      container.appendChild(card);
    });

  } catch (err) {
    document.getElementById('loading').textContent = 'فشل تحميل البيانات.';
    console.error(err);
  }
}

fetchBinanceData();
setInterval(fetchBinanceData, 10000);