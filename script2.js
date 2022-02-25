class Cars {
    constructor(model, year, color, engine) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.engine = engine;
}

showInfo() {
  return(
    `Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Engine type : ${this.engine}`
  )};
};

class Electrocars extends Cars {
    constructor(model, year, color, engine, batery) {
        super(model, year, color, engine);
        this.batery = batery;
    }

   promote() {
       return(`${this.model} is a new model of ${this.year}`);   
   };
    
};

const Mercedes = new Cars("Mercedes Benz", "2022", "blue", "diesel");      // Создаем объект класса Cars 
const Toyota = new Electrocars("Toyota",2022, "gold", "electro", "50");     // пример наследования

console.log(Mercedes.showInfo());
console.log(Toyota.showInfo());
console.log(Toyota.promote());