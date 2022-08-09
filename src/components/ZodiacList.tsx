import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Aries from "../images/aries.png";
import Taurus from "../images/taurus.png";
import Scorpio from "../images/scorpio.png";
import Gemini from "../images/gemini.png";
import Cancer from "../images/cancer.png";
import Leo from "../images/leo.png";
import Virgo from "../images/virgo.png";
import Libra from "../images/libra.png";
import Sagittarius from "../images/sagittarius.png";
import Capricorn from "../images/capricorn.png";
import Aquarius from "../images/aquarius.png";
import Pisces from "../images/pisces.png";

export default function TitlebarBelowImageList() {
  return (
    <ImageList>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ width: 200, height: 200 }}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
          <Typography
            textAlign={"center"}
            variant="h4"
            component="div"
            gutterBottom
          >
            {item.title}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: Aries,
    title: "Aries",
  },
  {
    img: Taurus,
    title: "Taurus",
  },
  {
    img: Gemini,
    title: "Gemini",
  },
  {
    img: Cancer,
    title: "Cancer",
  },
  {
    img: Leo,
    title: "Leo",
  },
  {
    img: Virgo,
    title: "Virgo",
  },
  {
    img: Libra,
    title: "Libra",
  },
  {
    img: Scorpio,
    title: "Scorpio",
  },
  {
    img: Sagittarius,
    title: "Sagittarius",
  },
  {
    img: Capricorn,
    title: "Capricorn",
  },
  {
    img: Aquarius,
    title: "Aquarius",
  },
  {
    img: Pisces,
    title: "Pisces",
  },
];
