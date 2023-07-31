import { useState } from "react";

interface Props{
    question: string;
    answer: string;
}

const QA = ({question, answer}: Props) => {
  const [toggleFq, setToggleFq] = useState(false);

  return (
    <li className="qa_list">
        <div className="question" onClick={()=>setToggleFq(!toggleFq)}>{question}<span>{toggleFq? "-":"+"}</span> </div>
        <div className={toggleFq? "answer answer-active":"answer"}>{answer}</div>
    </li>
  )
}

export default QA;