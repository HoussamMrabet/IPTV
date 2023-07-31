import "./frequence.css";
import QA from "./QA";

const Frequence = () => {
  return (
    <div className="frequence">
        <h1 className="sections_title">FAQ</h1>
        <div className="frequence_qa">
            <ul>
                <QA question="Working hours?" answer="Monday-Saturday (08:00 GMT - 22:00 GMT)"/>
                <QA question="Delivery delay" answer="15min - 2h"/>
                <QA question="How to setup the iptv on my device?" answer="We send you the full tutorial, you only need to install an application depends on the device type, and send the code that the app gives you. for more informations about the setup check our guide."/>
                <QA question="Does one subscription works in multiple devices?" answer="Yes, and it depends on the subscription you made, check hour store for more details."/>
                <QA question="Does the subscription works on all countries" answer="Yes, our services is worldwide."/>
                <QA question="Is the TV BOXES delivered worldwide?" answer="No, the material products is only available in a specific countries."/>
            </ul>
        </div>
    </div>
  )
}

export default Frequence