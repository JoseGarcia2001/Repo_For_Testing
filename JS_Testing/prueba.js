function makeCounter(n) {
  let count = n;

  return {
    increase: function () {
      n++;
    },
    decrease: function () {
      n--;
    },
    print: function () {
      console.log(n);
    },
  };
}

let miCuenta = makeCounter(10);

miCuenta.increase();
miCuenta.print();
miCuenta.increase();
miCuenta.increase();
miCuenta.increase();
miCuenta.print();
miCuenta.decrease();
miCuenta.print();

console.log(miCuenta);
