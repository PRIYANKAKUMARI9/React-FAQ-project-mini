import logo from './logo.svg';
import './App.css';
import {questions} from './dataq&a/FaqQandA';
import { useState } from 'react';

function App() {
  let [showans,setshowans]=useState(questions[0].id);
  return (
    //friquently asked question
    <div className="App">
      <div>
        <h1>Benefits of having FAQ pages</h1>
        <div className='faqouter'>
          {questions.map((faqitems,i)=>{
          return(
            <div className='faqitems'>
            <h2 onClick={()=>setshowans(faqitems.id)}>{faqitems.question}</h2>
            <p className={showans==faqitems.id ? 'activeans' : ''}>{faqitems.answer}</p>
          </div>  
          )
          }
          )
          } 
         
        </div>
      </div>
    </div>
  );
}

export default App;
