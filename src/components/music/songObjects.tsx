import test from "../../../public/audios/bruhtest.mp3";
import LampGodSong from "../../../public/audios/LampGodSong.mp3";

export interface songObject {
  id: number;
  title: string;
  artist: string;
  src: string;
  duration: number;
  image: { src: string; alt: string };
}

export const songs: songObject[] = [
  {
    id: 1,
    title: "空想夜間飛行",
    artist: "Lamp",
    src: LampGodSong,
    duration: 264,
    image: {
      src: "../images/songs/lampBARABARABA.webp",
      alt: "LampSong1",
    },
  },
  {
    id: 1,
    title: "only test",
    artist: "none",
    src: test,
    duration: 26,
    image: {
      src: "../images/songs/Lamp_Yume_Utsutsu.jpg",
      alt: "test",
    },
  },
];

export default songs;
