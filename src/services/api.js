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
    },

    activateTournament(code) {
        return axios.put("/tournaments/" + code)
            .then((res) => {
                return res.data.data;
            });
    },

    getGames(tournamentId) {
        return axios.get("/games/tournaments/" + tournamentId)
            .then((res) => {
                return res.data.data;
            });
    },

    createTournament(payload) {
        return axios.post("/tournaments", payload, {headers: {'content-type': 'application/json'}})
        .then((res) => {
            return res.data.data;
        });
    }
}