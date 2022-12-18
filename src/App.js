import React from "react";


function App() {
  const [yazi, yaziGuncelle] = React.useState("");
  const sayac = React.useRef(0);

  React.useEffect(() => {
    sayac.current = sayac.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={yazi}
        onChange={(e) => yaziGuncelle(e.target.value)}
      />
      <h1>Render Sayısı: {sayac.current}</h1>
    </>
  );
}



export default App;
