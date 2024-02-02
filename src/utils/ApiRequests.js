import axios from 'axios';

export const getItems = () =>{
   return  axios.get('https://nc-marketplace-sem-2.onrender.com/api/items')
  .then((response)=> {
    // handle success
    return response.data;
  }).catch((error)=> {
    // handle error
    console.log(error);
  })
}

export const getCategories = () => {
    return  axios.get('https://nc-marketplace-sem-2.onrender.com/api/categories')
    .then((response)=> {
      // handle success
      return response.data;
    }).catch((error)=> {
        // handle error
        console.log(error);
    })
}

export const postItems = (item) => {
    return  axios.post('https://nc-marketplace-sem-2.onrender.com/api/items',item)
    .then((response)=> {
      // handle success
      return response.data;
    })
}