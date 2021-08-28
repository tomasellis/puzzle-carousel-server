require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json([
    {
      title: "First Block",
      images: [
        "https://i.imgur.com/1l1Qce5.jpeg",
        "https://i.imgur.com/YsEWQNs.jpeg",
        "https://i.imgur.com/oFo4k8v.jpeg",
      ],
    },
    {
      title: "Second Block",
      images: [
        "https://pm1.narvii.com/6501/23b45bccfef453375c3e9c8acf6251ee5a228f6a_hq.jpg",
        "https://i.pinimg.com/originals/31/93/e3/3193e38fdc210eff44bc1f6c125c9536.jpg",
        "https://i.pinimg.com/originals/dd/d1/ea/ddd1eacddd83a80d787e811f414a32b6.jpg",
      ],
    },
    {
      title: "Third Block",
      images: [
        "https://www.xtrafondos.com/wallpapers/vertical/paisaje-digital-en-atardecer-5846.jpg",
        "https://i.pinimg.com/originals/34/1d/40/341d40aac32a9a9ddc6e9550690efceb.png",
        "https://i.imgur.com/TlEE4vf.jpeg",
      ],
    },
    {
      title: "Fourth Block",
      images: [
        "https://i.imgur.com/ssurGSJ.jpeg",
        "https://i.imgur.com/snnXPfI.jpeg",
        "https://i.imgur.com/wTyPAvV.jpeg ",
      ],
    },
    {
      title: "Fifth Block",
      images: [
        "https://i.imgur.com/d45dJdx.jpeg",
        "https://i.imgur.com/Rfj76TM.jpeg",
        "https://i.imgur.com/Imbmcky.jpeg",
      ],
    },
    {
      title: "Sixth Block",
      images: [
        "https://pm1.narvii.com/6501/23b45bccfef453375c3e9c8acf6251ee5a228f6a_hq.jpg",
        "https://i.pinimg.com/originals/31/93/e3/3193e38fdc210eff44bc1f6c125c9536.jpg",
        "https://i.pinimg.com/originals/dd/d1/ea/ddd1eacddd83a80d787e811f414a32b6.jpg",
      ],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
