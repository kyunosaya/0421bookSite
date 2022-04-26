import {useState} from 'react'
import { AiOutlineSearch,AiOutlineCaretDown } from "react-icons/ai";
// import { AiOutlineCaretDown } from "react-icons/ai";

//소스 컴포런트
function DropDown({toggleSort}){
  if(!toggleSort){
    return null
  }
  return (
    <ul>
      <li>애기명</li>
      <li>예약자명</li>
      <li>날짜</li>
    </ul>
  )
}

//본부 컴포넌트
function Search({query,onQueryChange}){
  let [toggleSort,setToggleSort] = useState(false);
  return (
    <div id="search">
      <p>
      <AiOutlineSearch />
      <input 
        placeholder="search"
        value={query}
        onChange={
          (event) => {onQueryChange(event.target.value)}
        }
      />
      <button 
        type="submit"
        onClick={
          () => {setToggleSort(!toggleSort)}
        }
      >
        정렬하기<AiOutlineCaretDown />
      </button>
      </p>

      <DropDown 
        toggleSort = {toggleSort}
      />
    </div>
  )
}


export default Search