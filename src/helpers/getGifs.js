const  getGif = async ( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=wnzsNoA0er1NfL4znwh2pMAqRWa5BTi2`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        };
    });
    console.log(gifs);
    return gifs;
};

export default getGif;