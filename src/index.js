import React from 'react';
import ReactDOM from 'react-dom'

//component
import AddAppointment from './component/AddAppointment'

//source
import { AiOutlineHeart } from "react-icons/ai";
import './index.css'


function App(){
  return (
    <article>

      <h3>
      <AiOutlineHeart style={{color:'pink'}}/>
      예약 시스템
      <AiOutlineHeart style={{color:'pink'}}/>
      </h3>

      <AddAppointment />

      <div id="list">
      <ul>
        <li>반복문</li>
      </ul>
      </div>


    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>

)