import React, { useState, useEffect } from "react";
import Screen from "./components/screen";
import Key from "./components/key";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  let [remNum, setRemNum] = useState(0)
  let [screenNum, setScreenNum] = useState([0]);

  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function handleClick(num){
    
    if (screenNum[0] === 0 ){
      setScreenNum([])
    }
    setScreenNum([...screenNum, num])
  }

  function handleClear(){

    setScreenNum([0])
    setRemNum(0)
  }

  useEffect(() => {

 function remIt(){

    let tempArr =  (parseFloat(screenNum.join(""))) / 16

    setRemNum(tempArr)
  }
    remIt();

  },[screenNum])
  
  return (
    <div>
      <GlobalStyles />
      <Screen.Secondary number={remNum}/>
      <Screen number={screenNum} />
      <Key.Container>
      {numbers.map((item, i) => {
        return <Key key={i} number={item} onClick={()=> handleClick(item)}/>;
      })}
      <Key number={"clear"} onClick={handleClear}/>
      </Key.Container>
    </div>
  );
}



export default App;
