import logo from "../../assets/react.svg";

import "./footer.css";

interface Props {
    isHome: boolean;
}

const Footer = ({isHome}: Props) => {
    return (
    <>
        {isHome &&
            <div className="footer">
                <div className="footer_left">
                    <img src={logo} alt="logo" />
                    <span>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Aliquid autem totam, <br /> sed et hic quis,</span>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="footer_middle">
                    <span className="footer_small_title">Small Title</span>
                    <div className="footer_middle_list">
                        <ul>
                            <li>menu</li>
                            <li>menu</li>
                            <li>menu</li>
                            <li>menu</li>
                            <li>menu</li>
                        </ul>
                        <ul>
                            <li>menu</li>
                            <li>menu</li>
                            <li>menu</li>
                            <li>menu</li>
                        </ul>
                    </div>
                </div>
                <div className="footer_right">
                    <span className="footer_small_title">Small Title</span>
                    <span>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</span>
                </div>
            </div>
        }
        <div className="copyright">
            CREATED BY HOUBET 2023 &copy;
        </div>
    </>
  )
}

export default Footer