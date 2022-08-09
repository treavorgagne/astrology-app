import * as React from "react";
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

import Box, { BoxProps } from "@mui/material/Box";

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        border: "1px solid",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

export default function FlexDirection() {
  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 1,
          m: 1,
          borderRadius: 1,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {itemData.map((item) => (
          <Item
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            key={item.img}
            sx={{ width: 200, height: 200, pt: 2 }}
          >
            <img src={`${item.img}`} alt={item.title} loading="eager" />
            <Typography
              textAlign={"center"}
              variant="h5"
              component="div"
              gutterBottom
            >
              {item.title}
            </Typography>
          </Item>
        ))}
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: Aries,
    title: "Aries",
    date: "March 21 – April 19",
  },
  {
    img: Taurus,
    title: "Taurus",
    date: "April 20 – May 20",
  },
  {
    img: Gemini,
    title: "Gemini",
    date: "May 21 – June 20",
  },
  {
    img: Cancer,
    title: "Cancer",
    date: "June 21 – July 22",
  },
  {
    img: Leo,
    title: "Leo",
    date: "July 23 – August 22",
  },
  {
    img: Virgo,
    title: "Virgo",
    date: "August 23 – September 22",
  },
  {
    img: Libra,
    title: "Libra",
    date: "September 23 – October 22",
  },
  {
    img: Scorpio,
    title: "Scorpio",
    date: "October 23 – November 21",
  },
  {
    img: Sagittarius,
    title: "Sagittarius",
    date: "November 22 – December 21",
  },
  {
    img: Capricorn,
    title: "Capricorn",
    date: "December 22 – January 19",
  },
  {
    img: Aquarius,
    title: "Aquarius",
    date: "January 20 – February 18",
  },
  {
    img: Pisces,
    title: "Pisces",
    date: "February 19 – March 20",
  },
];
