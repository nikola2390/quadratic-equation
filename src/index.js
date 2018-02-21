module.exports = function solveEquation(equation) {
  // ax^2 + bx + c

  let a = equation.slice(0,equation.indexOf('*'));
  let b = equation.slice(equation.indexOf('*')+5,equation.lastIndexOf('*')).trim();

  if (b[0] == '-') {
    b = +b.slice(2)*(-1);
  } else {
    b = +b.slice(2);
  }

  let c = equation.slice(equation.lastIndexOf('*') + 4);

  if (c[0] == '-') {
    c = +c.slice(2)*(-1);
  } else {
    c = +c.slice(2);
  }

  let d = b * b - 4 * a * c;

  let x1 = Math.round(((-1) * b + Math.sqrt(d))/ (2 * a));
  let x2 = Math.round(((-1) * b - Math.sqrt(d))/ (2 * a));

  return [x1,x2].sort( function(a, b) {return a - b})
}
