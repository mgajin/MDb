export default function makeImdbApi({ axios }) {
    return Object.freeze({
        searchMovie,
        fetchMovie
    })

    async function searchMovie(search) {
        const response = await axios.get(`https://${process.env.API_URL}`, {
                headers: {
                    'content-type': 'application/octet-stream',
                    'x-rapidapi-host': `${process.env.API_URL}`,
                    'x-rapidapi-key': `${process.env.API_KEY}`
                },
                params: {
                    r: 'json',
                    s: search
                }
            })
            .catch(error => {
                console.log(error);
            });
    
        return response.data.Search;
    }

    async function fetchMovie(id) {
        const response = await axios
            .get(`https://${process.env.API_URL}`, {
                headers: {
                    'content-type': 'application/octet-stream',
                    'x-rapidapi-host': `${process.env.API_URL}`,
                    'x-rapidapi-key': `${process.env.API_KEY}`
                },
                params: {
                    i: id,
                    r: 'json'
                }
            })
            .catch(error => {
                console.log(error);
            });
    
        return response.data;
    }
        
}