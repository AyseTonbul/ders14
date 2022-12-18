import React from "react";

function App() {
let eleman1=React.useRef()

React.useEffect(()=>{

  setTimeout(()=>{
    eleman1.current.textContent = "ikinci yazı"

  },3000)
  
})


  return (
    <div >
    <p ref={eleman1}>İlk yazı</p>
    </div>
  );
}

export default App;
