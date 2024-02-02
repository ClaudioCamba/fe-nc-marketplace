import axios from "axios";

export const getItems = (searchParams) => {
  const category_name = searchParams.get("category_name");
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");
  const limit = searchParams.get("limit");
  const p = searchParams.get("p");
  const min_price = searchParams.get("min_price");
  const max_price = searchParams.get("max_price");
  const search = searchParams.get("search");
  console.log(search);

  let UrlString = "https://nc-marketplace-sem-2.onrender.com/api/items?";
  UrlString += category_name ? `category_name=${category_name}&` : "";
  UrlString += sort_by ? `sort_by=${sort_by}&` : "";
  UrlString += order ? `order=${order}&` : "";
  UrlString += limit ? `limit=${limit}&` : "";
  UrlString += p ? `p=${p}&` : "";
  UrlString += min_price ? `min_price=${min_price}&` : "";
  UrlString += max_price ? `max_price=${max_price}&` : "";
  UrlString += search ? `search=${search}&` : "";

  return axios
    .get(UrlString)
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getCategories = () => {
  return axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/categories")
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const postItems = (item) => {
  return axios
    .post("https://nc-marketplace-sem-2.onrender.com/api/items", item)
    .then((response) => {
      // handle success
      return response.data;
    });
};

export const deleteItem = (id) => {
  return axios
    .delete(`https://nc-marketplace-sem-2.onrender.com/api/items/${id}`)
    .then((response) => {
      // handle success
      return response;
    }).catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getUsers = () => {
  return axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/users")
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};