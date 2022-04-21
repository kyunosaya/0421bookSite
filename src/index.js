import React from 'react';
import ReactDOM from 'react-dom';

//component
import AddAppointment from './component/AddAppointment'
import Search from './component/Search'
import AddInfo from './component/AddInfo'

//source
import { AiOutlineHeart } from "react-icons/ai";
import './index.css'
import appointData from './data.json'


function App(){
  return (
    <article>

      <h3>
      <AiOutlineHeart style={{color:'rgb(68,149,247)'}}/>
      예약 시스템
      <AiOutlineHeart style={{color:'rgb(68,149,247)'}}/>
      </h3>

      <AddAppointment />

      <Search />

      <div id="list">
        <ul>
          {
            appointData.map( item => (
              <AddInfo 
                key={item.id} 
                appointment = {item}
              />
            ) )
          }
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