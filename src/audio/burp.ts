import { audio } from "../obxia";
import { type AudioPlay, type AudioPlayOpt, play } from "./play";

// core obxia logic
export function burp(opt?: AudioPlayOpt): AudioPlay {
    return play(audio.burpSnd, opt);
}
