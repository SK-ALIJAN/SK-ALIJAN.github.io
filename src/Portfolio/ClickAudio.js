import clickmp3 from "./click.mp3";
import successmp3 from "./success.mp3";
import errormp3 from "./error.mp3";
import { Howl, Howler } from "howler";

export const ClickAudio = () => {
  const sound = new Howl({
    src: clickmp3,
    volume: 0.5,
  });

  sound.play();
};

export const SuccessAudio = () => {
  const sound = new Howl({
    src: successmp3,
    volume: 0.5,
  });

  sound.play();
};

export const ErrorAudio = () => {
  const sound = new Howl({
    src: errormp3,
    volume: 0.5,
  });

  sound.play();
};
