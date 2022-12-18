

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Sablon from './sayfalar/Sablon'
import Anasayfa from './sayfalar/Anasayfa'
import Hakkimizda from './sayfalar/Hakkimizda'
import Iletisim from './sayfalar/Iletisim'
import Sayfayok from './sayfalar/Sayfayok'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sablon />}>
          <Route index element={<Anasayfa />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="iletisim" element={<Iletisim />} />
          <Route path="*" element={<Sayfayok />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
