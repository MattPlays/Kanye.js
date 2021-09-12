const axios = require("axios").default;
/**
 * @returns {Promise<{quote: string}>}
 */
module.exports = async () => {
    return axios({
        method: "GET",
        url: "https://api.kanye.rest/",
        headers: {
            "Accept": "application/json"
        }
    }).then(({data}) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}