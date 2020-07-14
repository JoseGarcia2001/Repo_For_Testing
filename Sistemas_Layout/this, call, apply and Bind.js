const jose = {
  name: "Jose",
  Apellido: "Garcia",
};

function saludar() {
  console.log(`Hola! mi nombre es ${this.name} ${this.Apellido}`);
}

const saludarJose = saludar.bind(jose);

saludarJose();
