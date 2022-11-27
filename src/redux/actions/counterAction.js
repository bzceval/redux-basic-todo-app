import { ARTIR, AZALT, RESET } from "../types/counterTypes";

export const artır = () => {
  return { type: ARTIR };
};

export const azalt = () => {
  return {type: AZALT}
}

export const reset = () => {
    return {type: RESET}
}