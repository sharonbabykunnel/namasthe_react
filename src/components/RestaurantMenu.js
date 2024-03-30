import {useEffect} from "react"

const RestaurantMenu = () => {
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
    }
    return (
        <div className="menu">
            <h1></h1>
            <h2></h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;