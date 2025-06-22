import { Box, Typography, Link } from "@mui/material";

export default function Agenda() {
  const agenda = [
    {
      cidade: "Paris",
      local: "Palácio do Eliseu",
      dia: "Segunda-feira",
      hora: "09:00 - 11:00",
    },
    {
      cidade: "Lyon",
      local: "Praça Bellecour",
      dia: "Terça-feira",
      hora: "10:00 - 12:00",
    },
    {
      cidade: "Marselha",
      local: "Prefeitura de Marselha",
      dia: "Quarta-feira",
      hora: "14:00 - 16:00",
    },
    {
      cidade: "Bordeaux",
      local: "Place de la Bourse",
      dia: "Quinta-feira",
      hora: "11:00 - 13:00",
    },
    {
      cidade: "Nanterre",
      local: "Praça central",
      dia: "Segunda",
      hora: "15:00 - 17:00",
    },
    {
      cidade: "Nice",
      local: "Promenade des Anglais",
      dia: "Sexta-feira",
      hora: "15:00 - 17:00",
    },
    {
      cidade: "Nice",
      local: "Promenade des Anglais",
      dia: "Sabado",
      hora: "11:00 - 14:00",
    },
  ];

  return (
    <Box className="agenda" sx={{ padding: "20px", color: "steelblue" }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px", textAlign: "center" }}
      >
        Agenda da Semana
      </Typography>

      <Box className="agendaLista">
        {agenda.map((item, index) => (
          <Box key={index} className="agendaCard">
            <Typography variant="h6">{item.cidade}</Typography>
            <Typography>📍 {item.local}</Typography>
            <Typography>📅 {item.dia}</Typography>
            <Typography>🕒 {item.hora}</Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <Link
          href="https://www.elysee.fr/en/diary"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="primary"
        >
          Agenda completa →
        </Link>
      </Box>
    </Box>
  );
}
