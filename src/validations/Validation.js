function validateEmail(email) {
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
function validatePhoneNumber(mobile) {
  var numberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return numberRegex.test(mobile.toString());
}
function countWords(str) {
  const arr = str.split(" ");

  return arr.filter((word) => word !== "").length;
}

export { validateEmail,  validatePhoneNumber, countWords };
