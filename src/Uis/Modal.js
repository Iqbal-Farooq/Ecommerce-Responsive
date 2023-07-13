import ReactDOM from "react-dom"
import "./modal.css"
const Backdrop=props=>{ return <div className="backdrop" onClick={props.onclick}/>}


const ModalOverlay=props=>{
    return<div className="container modal_container" 
    >
        <div className="">{props.children}</div>
    </div>
}
const p1=document.getElementById('overlay');


const Modal=(props)=>{
return <>
   {ReactDOM.createPortal(<Backdrop onclick={props.onclick}/>,p1)}
   {ReactDOM.createPortal(<ModalOverlay onclick={props.onclick}> {props.children}</ModalOverlay>,p1 )}
</>


}
export default Modal;