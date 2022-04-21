import React from 'react'
import { AiOutlineSearch,AiOutlineCaretDown } from "react-icons/ai";
// import { AiOutlineCaretDown } from "react-icons/ai";

//소스 컴포런트
function DropDown(){
  return (
    <ul>
      <li>애기명</li>
      <li>예약자명</li>
      <li>날짜</li>
    </ul>
  )
}

//본부 컴포넌트
function Search(){
  return (
    <div id="search">
      <p>
      <AiOutlineSearch />
      <input placeholder="search"/>
      <button type="submit">
        정렬하기<AiOutlineCaretDown />
      </button>
      </p>
      <DropDown />
    </div>
  )
}


export default Search