import location from "/images/location.svg";

export default function List(props) {
  return (
    <div>
      <div className="travel-list">
        <div className="travel-list__img">
          <img
            src={`/images/${props.imageUrl}`}
            alt=""
            className="travel-img"
          />
          <div className="travel-location">
            <img src={location} alt="" className="location-logo" />
            <span className="location-name">{props.location} </span>
          </div>
        </div>
        <div className="travel-info">
          <h1 className="travel-info__heading">{props.title}</h1>
          <div>
            <span className="travel-time">
              <small>{props.startDate} - </small>{" "}
            </span>
            <span className="travel-time">
              <small>{props.endDate}</small>
            </span>
          </div>
          <p className="travel-desc">{props.description}</p>
          <a href={props.googleMapsUrl} className="gmap-link">
            View on Google Maps ↗
          </a>
        </div>
      </div>
      <div className="hr-holder">
        <hr className="hr" />
      </div>
    </div>
  );
}
