import axios from "axios";

const API_KEY = '36691482-84c9306078cd4b2d6bb1013dd';
const BASE_URL = 'https://pixabay.com/api/';

export default class Api {
    constructor() {
        this.query = '';
        this.page = 1;
        this.totalHits = 0;
    }

    async fetchImage() {
        const PARAMETERS = new SearchURL({
            q: this.query,
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
        return this.query;
    }

    set query(newQuery) {
        this.query = newQuery;
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
}


