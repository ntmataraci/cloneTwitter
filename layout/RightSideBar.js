import Trends from "../components/Trends"
import WhoToFollow from "../components/WhoToFollow"
import SearchBar from "../UI/SearchBar"
const RightSideBar = () =>{
    return (
        <div style={{width:"250px"}}>
            <SearchBar/>
            <Trends/>
            <WhoToFollow/>
        </div>
    )
}

export default RightSideBar