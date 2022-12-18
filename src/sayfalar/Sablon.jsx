import { Link, Outlet } from "react-router-dom";

function Sablon() {



    return (
        <>
            <nav>
                <Link to="/">Ana sayfa</Link>
                <Link to="/hakkimizda">Hakkımızda</Link>
                <Link to="/iletisim">İletişim</Link>
                <Link to="/kampanyalar">Kampanyalar</Link>
            </nav>

            <Outlet />
        </>
    )
}

export default Sablon;