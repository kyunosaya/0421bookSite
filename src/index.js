import React from 'react';
import {useState,useCallback,useEffect} from 'react';
import ReactDOM from 'react-dom/client';

//component
import AddAppointment from './component/AddAppointment'
import Search from './component/Search'
import AddInfo from './component/AddInfo'

//source
import { AiOutlineHeart } from "react-icons/ai";
import './index.css'
// import appointData from './data.json'


function App(){

  //state설정
  let [appointmentList,setAppointmentList] = useState([])
    //search
  let [query,setQuery] = useState('')

  //검색 필터 -> 배열 -> addInfo
  const filterAppointment = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase())
      )
    }
  )

  //callback
  const fetchData = useCallback( () => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointmentList(data))
  } , [] )

  //effect 작동
  useEffect( () => {fetchData()} , [fetchData] )

  return (
    <article>

      <h3>
      <AiOutlineHeart style={{color:'rgb(68,149,247)'}}/>
      예약 시스템
      <AiOutlineHeart style={{color:'rgb(68,149,247)'}}/>
      </h3>

      <AddAppointment />

      <Search 
        query = {query}
        onQueryChange = {myQuery => setQuery(myQuery)}
      />

      <div id="list">
        <ul>
          {
            filterAppointment.map( appointment => (
              <AddInfo 
                key={appointment.id} 
                appointment = {appointment}
                onDelecAppointment = {
                  appointmentId => 
                  setAppointmentList(appointmentList.filter(
                    appointment => appointment.id !== appointmentId
                  ))
                }
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