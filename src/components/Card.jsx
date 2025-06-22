import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function Card({ titulo, propostPT, propostFR }) {
  return (
    <MuiCard sx={{ maxWidth: 345, margin: "10px auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="2"
          image="  https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/2560px-Flag_of_France.svg.png"
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{ color: "steelblue" }}
          >
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {propostPT}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            {propostFR}
          </Typography>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}
