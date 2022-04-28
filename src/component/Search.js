import {useState} from 'react'
import { AiOutlineSearch,AiOutlineCaretDown,AiOutlineCheck } from "react-icons/ai";
// import { AiOutlineCaretDown } from "react-icons/ai";

//소스 컴포런트
function DropDown({toggleSort,sortBy,onSortByChange,orderBy,onOrderByChange}){
  if(!toggleSort){
    return null
  }
  return (
    <ul>
      <li onClick = {() => {onSortByChange('petName')}}>
        애기명
        { (sortBy === 'petName') && <AiOutlineCheck />}
      </li>

      <li onClick = {() => {onSortByChange('ownerName')}}>
        예약자명
        { (sortBy === 'ownerName') && <AiOutlineCheck />}
      </li>

      <li onClick = {() => {onSortByChange('aptDate')}}>
        날짜
        { (sortBy === 'aptDate') && <AiOutlineCheck />}
      </li>

      <li onClick = {() => {onOrderByChange('asc')}}>
        올림차순
        { (orderBy === 'asc') && <AiOutlineCheck />}
      </li>
      
      <li onClick = {() => {onOrderByChange('desc')}}>
        내림차순
        { (orderBy === 'desc') && <AiOutlineCheck />}
      </li>
    </ul>
  )
}

//본부 컴포넌트
function Search({query,onQueryChange,sortBy,onSortByChange,orderBy,onOrderByChange}){
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
        sortBy = {sortBy}
        orderBy = {orderBy}
        onSortByChange = {mySort => onSortByChange(mySort)}
        onOrderByChange = {myOrder => onOrderByChange(myOrder)}
      />
    </div>
  )
}


export default Search