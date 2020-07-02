import axios from 'axios';


export class PersonaService {

    BASE_URL = 'http://localhost:8080/api/v1/';

    getAll() {
        return axios.get(this.BASE_URL + "all");
    }

}
