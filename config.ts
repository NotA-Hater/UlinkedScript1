import { Config } from "./types/config";

const config: Config = {
  options: {
    blog: false,
    gallery: true, // this will only hide the gallery page, you can still access it by going to its respective routes.
  },
  nickname: "Pedro Nogueira",
  lanyard: {
    active: false, /* if you don't wish to expose your Discord activities with lanyard, set to false */
    discordId: "",
  },
  accentColor: "#283252",
  avatarImgSrc: "/assets/profile.png",
  buttons: [
    {
      title: "Youtube",
      link: "https://www.youtube.com/@PedroNogueiraEdits",
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/pedronogueira_edit/",
    },
    {
      title: "Fivver",
      link: "https://www.fiverr.com/alergic",
    },
    {
      title: "More of my work (Playlist)",
      link: "https://www.youtube.com/watch?v=KDHkpFStjFw&list=PLD8sRHWRNhnlFvKmlS53Dqu3GAORDsPsR",
    },
  ],
  instagramLink: "https://www.instagram.com/luna.ustav/",
  whatsappLink: "https://wa.me/5511954445403",
  gmailLink: "mailto:ahaternot@gmail.com.br",
  ytMusicLink: "", /* if you don't wish the button to appear, you can either leave it blank or omit it */
  youtubeLink: "https://www.youtube.com/@ustav_o",
  footer: "Editing since 2018",
};

export default config;
