async function fetchBinanceData() {
  try {
    const response = await fetch('https://api2.binance.com/api/v3/ticker/24hr', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
