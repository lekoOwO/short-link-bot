async function shorten(url) {
    const body = {
        originalURL: url,
        domain: DOMAIN
    };
    
    const options = {
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: SHORT_IO_API_KEY
      },
      method: 'POST',
      body: JSON.stringify(body)
    };

    const resp = await fetch('https://api.short.io/links/public', options)
    const data = await resp.json();
    const result = data.secureShortURL;

    return result;
}

module.exports = {
    shorten
}