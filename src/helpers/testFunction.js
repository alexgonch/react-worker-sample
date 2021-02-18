import { sleep } from "./sleep";
import { fittedParams } from "./lm";

export const testFunction = async (uwi, color) => {
  console.log("testFunction: about to sleep");
  await sleep(1000);
  console.log("testFunction: the sleep is over");

  console.log("fitted params from LM", fittedParams);

  return { uwi, color };
};
