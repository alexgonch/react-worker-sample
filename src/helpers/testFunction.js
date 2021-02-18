import { sleep } from "./sleep";

export const testFunction = async (uwi, color) => {
  console.log("testFunction: about to sleep");
  await sleep(1000);
  console.log("testFunction: the sleep is over");
  return { uwi, color };
};
