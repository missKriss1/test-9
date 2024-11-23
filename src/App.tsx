import TollBar from "./Components/TollBar/TollBar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Container/Home/Home.tsx";
import AddFormCategory from "./Container/AddFormCategory/AddFormCategory.tsx";
import Ctegories from "./Container/Categories/Ctegories.tsx";


const App = () => {
    return (
        <div className="container">
            <header>
                <TollBar onSubmit={() => console.log('Submit action')}/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/categories" element={<Ctegories />} />
                    <Route path="/categories/add-category" element={<AddFormCategory />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;