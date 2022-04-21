import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";

function AddInfo({appointment}){
  return (
    <li>
      <dl>
        <dt>
          {appointment.petName}
        </dt>
        <dd className="owner">
          <dfn>예약자명 : </dfn>
          {appointment.ownerName}
        </dd>
        <dd className="desc">
          {appointment.aptNotes}
        </dd>
        <dd className="date">
          {appointment.aptDate}
        </dd>
      </dl>

      <p>
        <button><BsFillTrashFill /></button>
      </p>
    </li>
  )
}

export default AddInfo