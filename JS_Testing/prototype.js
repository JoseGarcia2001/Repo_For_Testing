function myHeros(name) {
  this.name = name;
}

myHeros.prototype.saludar = function () {
  console.log(`Hola! Yo soy ${this.name}`);
};

const hulk = new myHeros("Hulk");

console.log(hulk.name);
