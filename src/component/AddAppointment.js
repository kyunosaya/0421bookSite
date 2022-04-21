import React from 'react';
import { AiFillCarryOut } from "react-icons/ai";

function AddAppointment(){
  return (
    <div id="appoint">
    <h4>
      <AiFillCarryOut />
      예약하기
    </h4>
    <ul>
      <li>
        <label htmlFor="userName">집사명</label>
        <input id="userName"/>
      </li>
      <li>
        <label htmlFor="userChildren">애기명</label>
        <input id="userChildren"/>
      </li>
      <li>
        <label htmlFor="userDate">예약일</label>
        <input type="date" id="userDate"/>
      </li>
      <li>
        <label htmlFor="userTime">예약 시간</label>
        <input type="time" id="userTime" />
      </li>
      <li>
        <label htmlFor="userDes">기타설명</label>
        <textarea col="30" rows="10" placeholder="기타설명" id="userDes"></textarea>
      </li>
    </ul>
    <p>
        <button type="submit">예약하기</button>
    </p>
  </div>

  )
}

export default AddAppointment