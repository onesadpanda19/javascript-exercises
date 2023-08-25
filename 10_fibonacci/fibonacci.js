const fibonacci = function(p) {
    if (p < 0 )
    return "OOPS"
const n = p
let n1 = 0, n2 = 1, next
for (let i = 1; i <= p; i++) {
   next = n1 + n2;
    n1 = n2;
    n2 = next;
}
return n1
};

// Do not edit below this line
module.exports = fibonacci;
