import React, { useState } from 'react'
import Icon from './Components/Icon'
import { Flip, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";


const tikArray=new Array(9).fill("");
function App() {

 const [isCross,setIsCross]=useState(true);
 const [winMessage,setWinMessage]=useState("");
//  play again
 function playAgain(){
  tikArray.fill("")
  setIsCross(true);
  setWinMessage("");
 }
//  find winner
 function findWinner(){
  // this is for first row:-0,1,2
  if(tikArray[0]!="" && tikArray[0]==tikArray[1] && tikArray[0]==tikArray[2]){
    setWinMessage(`winner is ${tikArray[0]}`);
  }
  // this is for first row:-3,4,5
  else if(tikArray[3]!="" && tikArray[3]==tikArray[4] && tikArray[3]==tikArray[5]){
    setWinMessage(`winner is ${tikArray[3]}`);
  }
  // this is for first row:-6,7,8
  else if(tikArray[6]!="" && tikArray[6]==tikArray[7] && tikArray[6]==tikArray[8]){
    setWinMessage(`winner is ${tikArray[6]}`);
  }
  //this is for columen 1:-0,3,6
  else if(tikArray[0]!="" && tikArray[0]==tikArray[3] && tikArray[0]==tikArray[6]){
    setWinMessage(`winner is ${tikArray[0]}`);
  }
  //this is for columen 1:-1,4,7
  else if(tikArray[1]!="" && tikArray[1]==tikArray[4] && tikArray[1]==tikArray[7]){
    setWinMessage(`winner is ${tikArray[1]}`);
  }
  //this is for columen 1:-2,5,8
  else if(tikArray[2]!="" && tikArray[2]==tikArray[5] && tikArray[2]==tikArray[8]){
    setWinMessage(`winner is ${tikArray[2]}`);
  }
  // this is for diagonal 1:-0,4,8
  else if(tikArray[0]!="" && tikArray[0]==tikArray[4] && tikArray[0]==tikArray[8]){
    setWinMessage(`winner is ${tikArray[0]}`);
  }
  // this is for diagonal 2:-2,4,6
  else if(tikArray[2]!="" && tikArray[2]==tikArray[4] && tikArray[2]==tikArray[6]){
    setWinMessage(`winner is ${tikArray[2]}`);
  }
  //draw condition
  else if(tikArray.indexOf("")== -1){
    setWinMessage(`it's a draw`)
  }

 }
//  change item
 function changeItem(index){
  if(winMessage){
    return toast("Game is finished now")
    
  }
  if(tikArray[index]!=""){
    return toast('not allowed,dangerous to health');
  }else if(tikArray[index]==""){
    tikArray[index]= isCross ? "cross":"circle";
    setIsCross(!isCross);
    findWinner();
  }
 }






  return (
    <div>
      <center>
        <ToastContainer 
        position="top-center"
        // position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        transition={Zoom}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {
          winMessage ? 
          (
            <div>
              <h1>{winMessage}</h1>
              <button onClick={playAgain}>Play Again</button>
            </div>
          )
          :
          (
            <div>
              <h1>{isCross?"cross chance":"circle chance"}</h1>
            </div>
          )
        }
        <div className='grid'>
          {
            tikArray.map((value,index)=>(
              <div onClick={()=> changeItem(index)}>
                <Icon user_icon={value}/>
              </div>
            ))
          }
        </div>
      </center>
    </div>
  )
}

export default App