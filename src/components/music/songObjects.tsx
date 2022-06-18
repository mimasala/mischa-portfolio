import "../../../public/audios/LampGodSong.mp3";

export interface songObject {
  id: number;
  title: string;
  artist: string;
  src: string;
  image: { src: string; alt: string };
}

const songs: songObject[] = [
  {
    id: 1,
    title: "空想夜間飛行",
    artist: "Lamp",
    src: "../../../public/audios/LampGodSong.mp3",
    image: {
      src: "../images/songs/Lamp_Yume_Utsutsu.jpg",
      alt: "Lamp_Yume_Utsutsu",
    },
  },
];

export default songs;
