function getRate(badge = 'USD'){
    return fetch(`https://api.exchangerate-api.com/v4/latest/${badge}`)
    .then(response => response.json());
}

export default getRate;