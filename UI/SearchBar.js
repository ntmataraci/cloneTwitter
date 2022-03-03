import style from "./SearchBar.module.css"
import { useEffect, useState } from "react"
import SearchingFunction from "../components/SearchingFunction"
import messages from "../datas/messages"
const SearchBar = () =>{
const [isFocused,setIsFocused]=useState(false)
const [query,setQuery]=useState()
const changeColor = ()=>{
setIsFocused(true)

}


const searching = (e) =>{
setQuery(e.target.value)
}

    return(
        <>
        <div className={style.main} style={isFocused?{backgroundColor:"white",outline:"1px solid blue"}:{backgroundColor:"rgba(204, 204, 204, 0.24)"}}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon} style={isFocused?{fill:"blue"}:{fill:"rgba(66, 66, 66, 0.479)"}}><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input type="text" placeholder="Search Twitter" className={isFocused?style.input__focused:style.input} onFocus={changeColor} onBlur={()=>{setIsFocused(false)}} onKeyUp={searching}></input>
        </div>
        <SearchingFunction data={messages} query={query} condition={isFocused}/>
        </>
    )
}

export default SearchBar