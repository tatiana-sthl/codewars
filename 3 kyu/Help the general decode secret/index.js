device.decode = function (w) {
  let key = 'abdhpF,82QsLirJejtNmzZKgnB3SwTyXG ?.6YIcflxVC5WE94UA1OoD70MkvRuPqH'.split("")
  return w.split("").map( (c,i) => key.indexOf(c) > -1 ? key[(key.indexOf(c) + 65 - i) % 66 ] : c).join("")
}

/*
var chrs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.0123456789? '

function build_alphabets_table () {
    return chrs.split('').map(function(c) {
        return device.encode(new Array(67).join(c));
    });
}

device.decode = function (w) {
  var tbl = build_alphabets_table();
  return w.replace(/./g, function(c, i) {
     return chrs[tbl.map(function(a) { return a[i%66]; }).indexOf(c)] || c;
  });
}
*/