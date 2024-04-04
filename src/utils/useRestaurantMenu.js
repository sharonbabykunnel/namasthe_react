import { useEffect, useState } from 'react';

const useRestaurantMenu = (resid) => {
    const [res,setRes] = useState([])
    useEffect(
        fetchData()
    )

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json()
        setRes(json.data);
    }
    return res
}

export default useRestaurantMenu;