import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const rota = useLocation();
  const paginaInicial = rota.pathname === "/";

  return (
    <header id="topo" style={{ background: "#fdfdfd", padding: "10px" }}>
      {/* TItulo e bandeira */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "steelblue", margin: 0 }}>Emmanuel Macron</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"
          alt="Bandeira da França"
          style={{ width: "40px", height: "auto" }}
        />
      </div>

      
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        {/* mostra Biografia se NÃO estiver nela */}
        {!paginaInicial && (
          <Link to="/" style={{ textDecoration: "none", color: "steelblue" }}>
            Biografia
          </Link>
        )}

        {/* Propostas só aparece na página principal */}
        {paginaInicial && (
          <a
            href="#propostas"
            style={{ textDecoration: "none", color: "steelblue" }}
          >
            Propostas
          </a>
        )}

        {/* Agenda só aparece principal */}
        {paginaInicial && (
          <Link
            to="/agenda"
            style={{ textDecoration: "none", color: "steelblue" }}
          >
            Agenda
          </Link>
        )}

       
        <a
          href="https://www.elysee.fr/en/contact/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "steelblue" }}
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
