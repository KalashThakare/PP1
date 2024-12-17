import axios from 'axios';

export const options = {
    method: 'POST',
    url: 'https://google-api31.p.rapidapi.com/map',
    headers: {
      'x-rapidapi-key':process.env.GOOGLE_MAPS_API,
      'x-rapidapi-host': 'google-api31.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      text: '',
      place: '',
      street: '',
      city: '',
      country: '',
      state: '',
      postalcode: '',
      latitude: '',
      longitude: '',
      radius: ''
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }