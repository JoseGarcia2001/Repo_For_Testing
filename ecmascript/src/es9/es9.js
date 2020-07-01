const obj = {
  nombre: "Jose",
  age: 18,
  countr: "Colombia",
};

let { nombre, ...all } = obj;

// console.log(all);

const obj2 = {
  name: "Fredo",
  age: 23,
};

const obj1 = {
  ...obj2,
  country: "Perú",
};

console.log(obj1);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    1
      ? setTimeout(() => {
          resolve("Resuelta la promesa");
        }, 3000)
      : reject("Algo salió mal");
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Que bueno ya finalizó mi promesa");
  });

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2020-06-30");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
