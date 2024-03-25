import { CDN_URL } from "../utils/constants";
const ResCard = ({ resData }) => {
    const {info} = resData
  console.log(resData);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-log"
        src={CDN_URL + info.cloudinaryImageId}
      />
      <h3>{info.name}</h3>
      <h4>{info.locality}</h4>
      <h4>{info.avgRating}</h4>
    </div>
  );
};

export default ResCard;
