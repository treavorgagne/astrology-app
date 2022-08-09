import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 1000, height: 1000 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img src={`${item.img}`} alt={item.title} loading="lazy" />
          <ImageListItemBar title={item.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "./aquarius.png",
    title: "Aries",
  },
  //   {
  //     img: "./images/aquarius.png",
  //     title: "Taurus",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Gemini",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Cancer",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Leo",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Virgo",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Libra",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Scorpio",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Sagittarius",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Capricorn",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Aquarius",
  //   },
  //   {
  //     img: "../images/aquarius.png",
  //     title: "Pisces",
  //   },
];
