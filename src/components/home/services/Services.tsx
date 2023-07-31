import { Sports, Movies, Devices } from "../../../assets/services";

import "./services.css";

const Services = () => {
  return (
    <div className='services'>
        <h2 className="sections_title">Services</h2>
        <div className="service">
            <img src={Sports} alt="sports" />
            <div className="service_description">
                <h3>Follow all sports you like</h3>
                <p>Enjoy the Best IPTV Service at affordable prices! Sign up now & get access to over 18,500+ Worldwide Live TV Channels + VODs EPG, that work on all of your favorite devices.</p>
            </div>
        </div>
        <div className="service">
            <img src={Movies} alt="movies" />
            <div className="service_description">
                <h3>Follow all sports you like</h3>
                <p>Enjoy the Best IPTV Service at affordable prices! Sign up now & get access to over 18,500+ Worldwide Live TV Channels + VODs EPG, that work on all of your favorite devices.</p>
            </div>
        </div>
        <div className="service">
            <img src={Devices} alt="devices" />
            <div className="service_description">
                <h3>Follow all sports you like</h3>
                <p>Enjoy the Best IPTV Service at affordable prices! Sign up now & get access to over 18,500+ Worldwide Live TV Channels + VODs EPG, that work on all of your favorite devices.</p>
            </div>
        </div>
    </div>
  )
}

export default Services