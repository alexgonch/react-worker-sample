import { testFunction } from "../helpers/testFunction";

export async function processWorker(uwi, color) {
  let result = await testFunction(uwi, color);
  return result;
}
