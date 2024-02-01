import axios from 'axios';

export const getItems = () =>{
   return  axios.get('https://nc-marketplace-sem-2.onrender.com/api/items')
  .then(function (response) {
    // handle success
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
//   .finally(function () {
//     // always executed
//   });
}

