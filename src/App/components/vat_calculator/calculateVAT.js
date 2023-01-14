export default function calculateVAT({
  activePercent = 20,
  withoutVAT = "",
  VAT = "",
  withVAT = "",
}) {
  let newWithoutVAT = "";
  let newVAT = "";
  let newWithVAT = "";

  if (withoutVAT > 0) {
    newWithoutVAT = withoutVAT;
    newVAT = ((withoutVAT * activePercent) / 100).toFixed(2);
    newWithVAT = (Number(newWithoutVAT) + Number(newVAT)).toFixed(2);
  }
  if (VAT > 0) {
    newVAT = VAT;
    newWithoutVAT = (VAT / (activePercent / 100)).toFixed(2);
    newWithVAT = (Number(newWithoutVAT) + Number(newVAT)).toFixed(2);
  }

  if (withVAT > 0) {
    newWithVAT = withVAT;
    newWithoutVAT = (newWithVAT / (activePercent / 100 + 1)).toFixed(2);
    newVAT = ((newWithoutVAT * activePercent) / 100).toFixed(2);
  }

  return { newWithoutVAT, newVAT, newWithVAT };
}
