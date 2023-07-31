import iptv from "../../../assets/products/iptv.png";
import forever from "../../../assets/products/forever pack.png";
import smartBox from "../../../assets/products/smart box.png";

import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
        <h2 className="sections_title">Pricing</h2>
        <div className="pricing_cards">
            <div className="pricing_card">
                <div className="title">TV BOX</div>
                <img src={smartBox} alt="" />
                <div className="price">
                    <span>$49.99</span>
                    <button>buy</button>
                </div>
            </div>
            <div className="pricing_card">
                <div className="title">IPTV</div>
                <img src={iptv} alt="" />
                <div className="price">
                    <span>$29.99</span>
                    <button>buy</button>
                </div>
            </div>
            <div className="pricing_card">
                <div className="title">Server Satellite</div>
                    <img src={forever} alt="" />
                    <div className="price">
                        <span>$19.99</span>
                    <button>buy</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing