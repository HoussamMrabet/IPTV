import "./frequence.css";
import QA from "./QA";

const Frequence = () => {
  return (
    <div className="frequence">
        <h1 className="sections_title">FAQ</h1>
        <div className="frequence_qa">
            <ul>
                <QA question="Lorem ipsum, dolor sit amet consectetur adipisicing elit." answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam fuga eveniet cupiditate cum non nesciunt accusantium ipsa delectus adipisci."/>
                <QA question="Lorem ipsum, dolor sit amet consectetur adipisicing elit." answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam fuga eveniet cupiditate cum non nesciunt accusantium ipsa delectus adipisci."/>
                <QA question="Lorem ipsum, dolor sit amet consectetur adipisicing elit." answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam fuga eveniet cupiditate cum non nesciunt accusantium ipsa delectus adipisci."/>
                <QA question="Lorem ipsum, dolor sit amet consectetur adipisicing elit." answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam fuga eveniet cupiditate cum non nesciunt accusantium ipsa delectus adipisci."/>
                <QA question="Lorem ipsum, dolor sit amet consectetur adipisicing elit." answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quam fuga eveniet cupiditate cum non nesciunt accusantium ipsa delectus adipisci."/>
            </ul>
        </div>
    </div>
  )
}

export default Frequence