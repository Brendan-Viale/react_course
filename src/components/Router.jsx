import {Route, Routes} from "react-router-dom"
import { Home } from "./Home";
import { Tp1 } from "./tp1/Tp1"
import { Tp2 } from "./tp2/Tp2";
import { Tp3 } from "./tp3/Tp3";
import { Tp4 } from "./tp4/Tp4";
import { Tp5 } from "./tp5/Tp5";
import { Tp6 } from "./tp6/Tp6";
import { Tp7 } from "./tp7/Tp7";
import { Tp8 } from "./tp8/Tp8";

export const Router = () => {
    return(
        // Le routage utilise react-router-dom qui est une dépendance à installer, ne pas oublier d'importer les composants dont vous vous servez
        // On détermine toutes nos routes, ne pas oublier qu'il s'agit d'une SPA (Single Page Application), il n'y aucun rechargement de page, uniquement des changements de composants
        // Le parent de mes routes BrowserRouter se trouve dans index.js
        <>
            <Routes>
                {/* On affecte un composant à chaque route et le tour est joué ! */}
                <Route path="/" element={<Home />} />
                <Route path="/tp1" element={<Tp1 />} />
                <Route path="/tp2" element={<Tp2 />} />
                <Route path="/tp3" element={<Tp3 />} />
                <Route path="/tp4" element={<Tp4 />} />
                <Route path="/tp5" element={<Tp5 />} />
                <Route path="/tp6" element={<Tp6 />} />
                <Route path="/tp7" element={<Tp7 />} />
                <Route path="/tp8" element={<Tp8 />} />
            </Routes>
        </>
    )
}