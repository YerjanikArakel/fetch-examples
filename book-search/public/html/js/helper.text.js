export default function validator(text) {
  let validText = text;

  return validText.replace(/ /g, "+");
}
