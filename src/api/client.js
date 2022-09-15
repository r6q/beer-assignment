export async function getBeers() {
  const response = await fetch('https://api.punkapi.com/v2/beers');
  return await response.json()
}

export async function getBeerById(id) {
  const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  return await response.json()
}

