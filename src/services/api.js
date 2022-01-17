import axios from 'axios';

export default {
    getTournament(code) {
        return axios.get("/tournaments/" + code)
            .then(res => {
                return res.data.data;
            });
    },

    createPlayer(payload) {
        return axios.post("/players", payload, { headers: {'content-type': 'application/json'}})
            .then(res => {
                return res.data.data;
            });
    }
}