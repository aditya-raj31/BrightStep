const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://numbersapi.p.rapidapi.com/6/21/date',
  params: {
    fragment: 'true',
    json: 'true'
  },
  headers: {
    'X-RapidAPI-Key': 'c03bad8a6cmsh5d8e9014a1131d7p1e7e64jsn1342e3888f16',
    'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}