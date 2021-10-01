import React, { useState } from 'react';
import Screen from './components/screen';
import GlobalStyles from "./components/GlobalStyles"

function App() {

  let [screenNum, setScreenNum] = useState([0,1,3])

  return (
    <div>
      
      <GlobalStyles/>
      <Screen number={screenNum}/>

    </div>
  );
}

export default App;
