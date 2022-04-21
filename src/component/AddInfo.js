import React from 'react'
import { BsFillTrashFill } from "react-icons/bs";

function AddInfo(){
  return (
    <li>
      <dl>
        <dt>
          {/* appointment.petName */}
        </dt>
        <dd className="owner">
          <dfn>예약자명 : </dfn>
          {/* appoint.ownerName */}
        </dd>
        <dd className="desc">
          {/* appoint.aptNotes */}
        </dd>
        <dd className="date">
          {/* appoint.aptDate */}
        </dd>
      </dl>

      <p>
        <button><BsFillTrashFill /></button>
      </p>
    </li>
  )
}

export default AddInfo