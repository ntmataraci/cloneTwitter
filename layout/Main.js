
import style from "./Main.module.css"
const Main = ({children})=>{
    return (
        <>
       <div className={style.main}>
        
{children}
</div>
        </>
    )
}
export default Main