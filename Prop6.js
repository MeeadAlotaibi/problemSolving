
function isLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } //// السنه اللي تقبل القسمه على ٤٠٠ وخارج القسمه يساوي صفر ،، هي سنة كبيسه
  if (year % 100 == 0) {
    return false;
  } //// هنا السنه اللي تقبل القسمه على ١٠٠ وخارج القسمه يساوي صفر ،، ليست سنة كبيسه
  if (year % 4 == 0) {
    return true;
  } //// السنه اللي تقبل القسمه على ٤ وخارج القسمه يساوي صفر ،، هي سنة كبيسه
  return false;
}
console.log(isLeapYear(2021));
