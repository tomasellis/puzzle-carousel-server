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
        "https://amordeimagenes.com/wp-content/uploads/2018/04/fondo-para-celular-de-paisaje.jpg",
        "https://scontent.fepa6-1.fna.fbcdn.net/v/t1.18169-9/10395858_741931525897337_3679903556792072086_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=VlTEOwXytKUAX9kAxXZ&tn=oAERc59CPgo4pxMT&_nc_ht=scontent.fepa6-1.fna&oh=c1b3ade592067436177117d68e23d55b&oe=614EFF42",
        "https://scontent.fepa6-1.fna.fbcdn.net/v/t1.18169-9/10888407_741931562564000_3183665675970186954_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=SHzWPavCnq8AX9UfR0a&tn=oAERc59CPgo4pxMT&_nc_ht=scontent.fepa6-1.fna&oh=607d81277682a82410c7a0110505f51b&oe=614FB1D2",
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
        "https://archzine.es/wp-content/uploads/2019/07/cielo-monta%C3%B1a-cumbre-cesped-verde-paisajes-de-america-del-sur-luna-estrellas-fondos-de-pantalla-ordenador-telefono-descargables.jpeg",
      ],
    },
    {
      title: "Fourth Block",
      images: [
        "https://amordeimagenes.com/wp-content/uploads/2018/04/fondo-para-celular-de-paisaje.jpg",
        "https://scontent.fepa6-1.fna.fbcdn.net/v/t1.18169-9/10395858_741931525897337_3679903556792072086_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=VlTEOwXytKUAX9kAxXZ&tn=oAERc59CPgo4pxMT&_nc_ht=scontent.fepa6-1.fna&oh=c1b3ade592067436177117d68e23d55b&oe=614EFF42",
        "https://scontent.fepa6-1.fna.fbcdn.net/v/t1.18169-9/10888407_741931562564000_3183665675970186954_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=SHzWPavCnq8AX9UfR0a&tn=oAERc59CPgo4pxMT&_nc_ht=scontent.fepa6-1.fna&oh=607d81277682a82410c7a0110505f51b&oe=614FB1D2",
      ],
    },
    {
      title: "Fifth Block",
      images: [
        "https://i.imgur.com/d45dJdx.jpeg",
        "https://i.imgur.com/d45dJdx.jpeg",
        "https://i.imgur.com/d45dJdx.jpeg",
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
