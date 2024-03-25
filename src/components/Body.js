import ResCard from "./ResCard";
import { useState,useEffect } from 'react';
const Body = () => {
    const [list, setList] = useState([]);

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
        setList(
          json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
        );
    }
    if (list.length === 0) {
        return <h1>loading..</h1>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{setList(list.filter((res)=>res.age>29))}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {list.map((res,ind) => <ResCard key={res.info.id} resData={res} />)}
            </div>
        </div>
    )
}; 
export default Body;