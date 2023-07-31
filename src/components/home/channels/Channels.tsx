import {
  bein,
  canal,
  hbo,
  disney,
  netflix,
  espn,
} from "../../../assets/channels";
import "./Channels.css";

const Channels = () => {
  return (
    <div className="channels">
      {[hbo, bein, canal, netflix, espn, disney].map(
        (channel, index) => (
          <img key={index} src={channel} alt="channel" />
        )
      )}
    </div>
  );
};

export default Channels;
