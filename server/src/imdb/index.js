import axios from 'axios'
import makeImdbApi from './imdb-movies'

const imdbApi = makeImdbApi({ axios })

export default imdbApi
