import rocket from "../../../assets/icons/shuttle.png";
import monitor from "../../../assets/icons/monitor.png";
import headset from "../../../assets/icons/headset.png";

import "./about.css";

const About = () => {
  return (
    <div className="about">
        <div className="about_cards">
          <img src={rocket} alt="fast" />
          <h4>Fast servers</h4>
          <p>We provide the fastest IPTV service, our servers located in every country to ensure the best quality for you.</p>
        </div>
        <div className="about_cards">
          <img src={monitor} alt="quality" />
          <h4>High quality</h4>
          <p>We provide the best streaming in 4K/FHD/HD/SD to ensure you get the best playback experience on television.​</p>
        </div>
        <div className="about_cards">
          <img src={headset} alt="support" />
          <h4>24/24 support</h4>
          <p>We provide different contact method. So you can contact us any time. Join us via WhatsApp or email.</p>
        </div>
    </div>
  )
}

export default About