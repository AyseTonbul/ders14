  import C1 from "./C1";
  import React from "react";


function App() {
const[yazi,yaziGuncelle]=React.useState("")



  return (
    <div >
      Merhaba..
      <input type="text" value={yazi} onChange={(olay)=>{yaziGuncelle(olay.target.value)}} />
      <C1/>
    </div>
  );
}

export default App;
