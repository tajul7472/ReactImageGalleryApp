import Images from './Image' 
import React,{useState} from 'react'
import './Style.css'


function App() {
  const [selectImg,setSelectedImg]=useState(Images[0])
  return (
    <div className="App">
     <div className="container">
       <img src={selectImg}alt="Selected" className="selected"/>
       <div className="imgContainer">
         {Images.map((img,index)=>(
           <img style={{border:selectImg === img ? "4px solid purple":""}} key={index} src={img} alt="Natural Picture"
           onClick={()=>setSelectedImg(img)}
           onMouseEnter={()=>setSelectedImg(img)}/>
         ))}
       </div>
     </div>
    </div>
  );
}

export default App;
