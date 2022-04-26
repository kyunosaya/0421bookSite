import { useState } from 'react'
import { AiFillCarryOut } from "react-icons/ai";

function AddWrite({toggleForm,formData,setFormData,formDataPublish}){
  if(!toggleForm){
    return null
  }
  return (
    <>
    <ul>
      <li>
        <label htmlFor="userName">집사명</label>
        <input 
          id="userName"
          onChange={(event) => {
            setFormData({...formData,ownerName:event.target.value})
          }}
        />
      </li>
      <li>
        <label htmlFor="userChildren">애기명</label>
        <input 
          id="userChildren"
          onChange={(event) => {
            setFormData({...formData,petName:event.target.value})
          }}
        />
      </li>
      <li>
        <label htmlFor="userDate">예약일</label>
        <input 
          type="date" id="userDate"
          onChange={(event) => {
            setFormData({...formData,aptDate:event.target.value})
          }}
        />
      </li>
      <li>
        <label htmlFor="userTime">예약 시간</label>
        <input 
          type="time" id="userTime" 
          onChange={(event) => {
            setFormData({...formData,aptTime:event.target.value})
          }}
        />
      </li>
      <li>
        <label htmlFor="userDes">기타설명</label>
        <textarea 
          col="30" rows="10" placeholder="기타설명" id="userDes"
          onChange={(event) => {
            setFormData({...formData,aptNotes:event.target.value})
          }}
        ></textarea>
      </li>
    </ul>
    <p>
        {/* <button type="submit">예약하기</button> */}
        <input type="submit" value="예약하기" />
    </p>
    </>
  )
}

function AddAppointment(){
  const clearData = {
    petName : '',
    ownerName : '',
    aptNotes : '',
    aptDate : ''
  }

  let [toggleForm,settoggleForm] = useState(false)

  //form 데이터 생성
  let {formData,setFormData} = useState({clearData})
  function formDataPublish(){
    const formDataInfo ={
      // id : lastId + 1,
      petName : formData.petname,
      ownerName : formData.ownerName,
      aptNotes : formData.aptNotes,
      aptDate : formData.aptDate + ' ' + formData.aptTime
    }

    onSendAppointment(formDataInfo)
    setFormData(clearData)
    settoggleForm(!toggleForm)
  }

  return (
    <div id="appoint">
    <h4
      onClick={
        () => {settoggleForm(!toggleForm)}
      }
    >
      <AiFillCarryOut />
      예약하기
    </h4>

    <AddWrite 
      toggleForm = {toggleForm}
      formData = {formData}
      formDataPublish = {formDataPublish}
      setFormData = {setFormData}
    />
  </div>

  )
}

export default AddAppointment

    // toggleForm && <AddWrite />