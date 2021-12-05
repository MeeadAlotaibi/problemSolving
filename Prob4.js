
function solve(eq) {
  return eq
    .split(/([*\+\-\/])/)
    .reverse()
    .join("");
}
console.log((solve("100*b/y"), "y/b*100"));
