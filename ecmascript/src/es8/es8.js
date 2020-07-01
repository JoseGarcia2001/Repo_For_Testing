const data = {
  fronted: "Jose",
  backend: "Anibal",
  design: "SuTia",
};

const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(7, "hi"));

const saludarATodos = () => {
  return new Promise((resolve, reject) => {
    0 ? setTimeout(() => resolve("Hola a todos"), 2000) : reject("Error");
  });
};

const Saludo = async () => {
  const hola = await saludarATodos();
  console.log(hola);
};

Saludo();

const Saludo2 = async () => {
  try {
    const buenas = await saludarATodos();
    console.log(buenas);
  } catch (error) {
    console.log(error);
  }
};

Saludo2();
