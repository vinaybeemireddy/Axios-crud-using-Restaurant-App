 import axios from "axios";


export const getRestaurants = (params) => {
    return axios.get(import.meta.env.VITE_RESTAURANT_URL,{
        params:{
            _per_page:4,
            _page:params.page
        }
    });
  };

  export const postRestaurant=(restaurants)=>{
    return axios.post('http://localhost:3000/restaurants',{
        name: restaurants.name,
        type:restaurants.type,
        rating:restaurants.rating,
        number_of_votes:restaurants.number_of_votes,
        price_starts_from:restaurants.price_starts_from,
        image:restaurants.image
    })
  }

  export const deleteRestaurant=(id)=>{
    return axios({
        method:"delete",
        url:`http://localhost:3000/restaurants/${id}`
    })
  }