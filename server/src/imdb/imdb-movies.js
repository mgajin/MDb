export default function makeImdbApi({ axios }) {
    return Object.freeze({
        searchMovie,
        fetchMovie,
    })

    async function searchMovie(search) {
        const params = { r: 'json', s: search }
        const response = await fetch(params)

        if (response) return response.Search

        return null
    }

    async function fetchMovie(id) {
        const params = { i: id, r: 'json' }
        const response = await fetch(params)

        return response
    }

    async function fetch(params) {
        let res = null

        const url = `https://${process.env.API_URL}`
        const headers = {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': `${process.env.API_URL}`,
            'x-rapidapi-key': `${process.env.API_KEY}`,
        }

        await axios
            .get(url, { headers, params })
            .then((response) => (res = response.data))
            .catch((err) => console.log(err))

        return res
    }
}
