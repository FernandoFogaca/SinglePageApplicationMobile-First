import { BrowserRouter, Routes, Route } from "react-router-dom";
import Biografia from "./components/Biografia";
import "./styles.css";
import Header from "./components/Header";
import Propostas from "./components/Propostas";
import Footer from "./components/Footer";
import Agenda from "./components/Agenda";
import AgendaPage from "./components/PaginaAgenda";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        

        <Routes>
          <Route path="/" element={<Biografia />} />
          <Route path="/agenda" element={<AgendaPage />} /> 
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}