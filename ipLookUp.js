const axios = require('axios');

module.exports = async function ipLookUp() {
        try {
            const response = await axios.get('http://ip-api.com/json')
                .then(function (responseData) {
                    return responseData;
                });
            console.log('User\'s Country:', response.data.country);
            console.log('User\'s Postal Zip Code is', response.data.zip);
            console.log('User\'s IP location requests left', response.headers['x-rl']);
            return response.data.zip;

        } catch (error) {
            console.error(error);
        };
   
};