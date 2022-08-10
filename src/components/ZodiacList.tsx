import * as React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
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
import Modal from "@mui/material/Modal";

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "grey.200",
  borderColor: "common.black",
  border: "2px solid",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function ZodiacList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let date = Number(
    new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
    }).format(Date.now())
  );
  const index = date % 10;

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
            onClick={handleOpen}
            sx={{
              width: 200,
              height: 200,
              pt: 2,
              bgcolor: (theme) => theme.palette.grey[200],
              borderColor: (theme) => theme.palette.common.black,
              "&:hover": {
                backgroundColor: (theme) => theme.palette.common.white,
                cursor: "pointer",
              },
            }}
          >
            <img src={`${item.img}`} alt={item.title} loading="eager" />
            <Tooltip title={item.date} placement="top">
              <Typography
                textAlign={"center"}
                variant="h4"
                component="div"
                gutterBottom
              >
                {item.title}
              </Typography>
            </Tooltip>
          </Item>
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus={true}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {horoscopes[index]}
          </Typography>
        </Box>
      </Modal>
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

const horoscopes = [
  "Your appearance provides amusement to hundreds every day. Your number-one grudge is about never having been abducted by aliens, or being the victim of a government conspiracy. It's not a tumor. Failure is certainly an option. Normally you shine like a star, but a situation has dimmed your glow. Don’t worry; your problems will resolve themselves and you’ll be back to your sunscreen-inducing wattage in no time.",
  "The receptionist is reading your mail. You're not a cannibal, you're just curious. Your next Career: Park Security. Your lucky number is a bakers dozen. Step away from stress and spend some time in your happy place. You don’t have to stay long, but you should change out the chocolate fountain and vacuum up the candy sprinkles. That’s how you get ants.",
  "Disappointment will be yours this week when you realize that the caged bird isn't so much singing as pleading desperately for its life to end. You are loud, have cleft upper lips and a slimy nose, and s**t under trees as You walk. Your next Career: Sketch Artist. There are bodies in your trunk. Truth travels with strange company, and there’s no one stranger than your in-laws after a few rounds of Bloody Marys. Either mix their drinks weak, or excuse yourself from the room when they start reminiscing about their wild swinging days in the 70s. You can’t scrub those images out of your head with a steel brush.",
  "Put yourself out there. You usually do the wrong thing and don’t discuss it. Your next Career: Salad Bar Security. Something will slip out of your hand and break your foot tomorrow. Normally you shine like a star, but a situation has dimmed your glow. Don’t worry; your problems will resolve themselves and you’ll be back to your sunscreen-inducing wattage in no time.",
  "You need something new in your life this week! Add something that will increase your health like a pet, kidnap a guy that teaches tai-chi, or buy a sack of blood to keep the mosquitoes away! Or you could buy something that your home needs, like a cactus and/or Tupperware in the shapes of body parts, or a stuffed poodle. It could be a decoration or mop! Improve your love life and get new sheets! No, really. Get new sheets. It is hard for you to accept that Star Trek is fiction, and you are not a Borg leader. You will become illiterate as soon as you finish this sentence. Your every fleeting thought is a pearl. The grass is always greener on the other side, unless your dog has been sneaking over there and peeing on it. You may owe someone some fertilizer, but don’t ask Fido to volunteer. He’s done his duty.",
  "People say you're a control freak, but if you had your way, they'd say it a little slower and maybe even a touch louder. You are so dead. Your next Career: Foxy Boxer. Repent! Just because an old situation is water under the bridge doesn’t mean you should grab an innertube and go for a swim. Leave it alone and find a new puddle to play in.",
  "Do it! Quit your job. Who needs that crap? Your next Career: Serial Temp. You're not the only one depressed by your failures. Lately, life has been a box of cereal: all bran, no marshmallows. That changes on Saturday, when someone new shows up and excites all your fruity bits. You’ll even feel like licking the spoon.",
  "Think twice. Every time you lay your head on the pillow, a luminous red dot appears on your forehead. Your favorite aunt is actually your favorite uncle. An argument over a parking ticket will lead to romantic entanglement. There’s a difference between looking on the bright side and realizing it’s actually just the dark side on fire. If you learn how to tell them apart, your hair won’t smell like smoke on Friday. Hopefully you’ll still have eyebrows.",
  "You will contract an illness that's more irritating than dangerous. You have no sense of direction. Your next Career: Skeptic. Your every fleeting thought is a pearl. Forget hiding behind the scenes. This week you stand out more than a werewolf at a home waxing party. Part your back hair on the left and let them all stare in wonder.",
  "Your answering machine is full. The bump on your back is actually the head of your unformed twin. Your fun side comes out in obscene ways. Your lucky number is 37. You think the world is all about you. Here’s the deal; it is. You’re the only one who can change it, so quit pouting behind Pluto and fix your own orbit.",
];
