const fetch = require("node-fetch");
module.exports = async function () {
    return fetch("https://api.kanye.rest/", {
        "method": "GET",
        "headers": {
            "Accept": "application/json"
        }
    }).then((data) => data.json()).then((data) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}