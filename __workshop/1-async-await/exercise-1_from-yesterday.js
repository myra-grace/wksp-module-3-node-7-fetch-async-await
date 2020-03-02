// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try {
        let response = await request('http://api.open-notify.org/iss-now.json');
        await JSON.parse(response);
        let data = await {
            lat: issLocation.iss_position.latitude,
            lng: issLocation.iss_position.longitude,
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getIssPosition();

// YESTERDAY'S

// function getIssPosition() {
//     return request('http://api.open-notify.org/iss-now.json')
//         .then(response => {
//             return JSON.parse(response);
//         })
//         .then(data => {
//             return {
//                 lng: data.iss_position.longitude,
//                 lat: data.iss_position.latitude
//             }
//         })
//         .then(data => console.log(data))
//         .catch (err => console.error(err));
// }