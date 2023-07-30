import review from "../../../assets/client-review.png";

import "./clients.css";

const Clients = () => {
  return (
    <div className="clients">
      <h2 className="sections_title">Our clients</h2>
      <div className="clients-reviews">
        <img src={review} alt="client review" />
        <img src={review} alt="client review" />
        <img src={review} alt="client review" />
        <img src={review} alt="client review" />
      </div>
    </div>
  )
}

export default Clients;