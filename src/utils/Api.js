import axios from "axios";

/*const BASE_URL = 'https://pixabay.com/api/';*/

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '36691482-84c9306078cd4b2d6bb1013dd';

export const perPage = 12;

export const getImages = async (query, page) => {
    const response = await axios.get(
        `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
};

export const normalizedImages = imagesArray =>
    imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
        return { id, tags, webformatURL, largeImageURL };
    });

/*export default class Api {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.totalHits = 0;
    }

    async fetchImage() {
        const PARAMETERS = new URLSearchParams({
            q: this.searchQuery,
            page: this.page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        });

        try {
            const response = await axios.get(`${BASE_URL}?${PARAMETERS.toString()}`);
            this.addPage();
            return response.data;
        } catch (error) {
            console.error(error.toJSON());
        }
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

    get hits() {
        return this.totalHits;
    }

    set hits(newTotalHits) {
        this.totalHits = newTotalHits;
    }

    addPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}*/


