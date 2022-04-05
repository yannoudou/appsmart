export const SERVER_URL = process.env.SERVER_URL;
export const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const PUBLIC_KEY = process.env.PUBLIC_KEY;
const md5 = require("md5");
import dayjs from "dayjs";

export const serverEndPoints = {
  // getCharactersDetail: `${SERVER_URL}/public/characters?apikey=${PUBLIC_KEY}`,
  getAllCharacters: `${SERVER_URL}/public/characters`,

  getCharactersDetail: `${SERVER_URL}/public/characters/`,
};

// it gener
export const generateApiKeyParameter = () => {
  const timeStamp = dayjs().unix();
  const hash = md5(timeStamp + (PRIVATE_KEY ?? "") + (PUBLIC_KEY ?? ""));
  return `?apikey=${PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}`;
};
