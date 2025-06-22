import Card from "./Card";
import Link from "@mui/material/Link";
import { Box, Typography } from "@mui/material";

export default function Propostas() {
  return (
    <Box sx={{ padding: "20px" }} id="propostas">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", marginBottom: "30px", color: "steelblue" }}
      >
        Propostas - Propositions
      </Typography>

      <Box
        sx={{
          display: "flex", // mantem o foco do Mobile First..
          flexDirection: "column",
          gap: 2,

          // TElas grandes
          "@media (min-width:768px)": {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          },
        }}
      >
        <Card
          titulo="Startups – Start-ups"
          propostPT="Macron quer apoiar jovens empreendedores com crédito e menos burocracia. Quer fazer da França um país forte para startups."
          propostFR="Il veut aider les jeunes à créer des start-ups avec moins de règles et plus de financements."
        />

        <Card
          titulo="Aposentadoria – Retraite"
          propostPT="Ele defende aumentar a idade mínima de aposentadoria para 64 anos. Diz que é necessário para garantir o futuro do sistema."
          propostFR="Il propose de passer l'âge de départ à 64 ans pour maintenir un système solide."
        />

        <Card
          titulo="Energia limpa – Énergie propre"
          propostPT="Macron quer investir em energia verde e reduzir emissões até 2050. Fala muito sobre energia nuclear e hidrogênio."
          propostFR="Il mise sur le nucléaire et l’hydrogène pour atteindre la neutralité carbone."
        />

        <Card
          titulo="Educação – Éducation"
          propostPT="Quer reforçar ensino técnico e modernizar escolas. Também apoia o ensino digital e novos métodos de aprendizagem."
          propostFR="Il veut moderniser l’éducation avec plus de numérique et de formation professionnelle."
        />

        <Card
          titulo="Habitação Acessível – Logement abordable"
          propostPT="Macron propõe aumentar a oferta de moradias acessíveis, especialmente para jovens e famílias de baixa renda."
          propostFR="Macron souhaite développer le logement abordable, notamment pour les jeunes et les familles modestes. ."
        />
        <Card
          titulo="Europa unida – Europe unie"
          propostPT="Macron defende uma Europa mais integrada, com mais cooperação econômica e militar."
          propostFR="Il défend une Europe plus forte et souveraine, surtout après la crise."
        />
      </Box>
      <Box sx={{ textAlign: "center", marginTop: "30px" }}>
        <Link href="#topo" underline="hover" color="primary">
          ↑ Voltar ao topo
        </Link>
      </Box>
    </Box>
  );
}
