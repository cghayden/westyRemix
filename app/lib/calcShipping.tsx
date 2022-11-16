export default function calcShipping(verifiedTotal: number) {
  if (verifiedTotal < 4999) {
    return 1000;
  } else return 0;
}
