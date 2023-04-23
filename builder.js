class Burger {
  constructor() {
    this.buns = "";
    this.patty = "";
    this.cheese = "";
  }

  setBuns(bunStyle) {
    this.buns = bunStyle;
  }

  setPatty(pattyStyle) {
    this.patty = pattyStyle;
  }

  setCheese(cheeseStyle) {
    this.cheese = cheeseStyle;
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addBuns(bunStyle) {
    this.burger.setBuns(bunStyle);
    return this;
  }

  addPatty(pattyStyle) {
    this.burger.setPatty(pattyStyle);
    return this;
  }

  addCheese(cheeseStyle) {
    this.burger.setCheese(cheeseStyle);
    return this;
  }

  build() {
    return this.burger;
  }
}

const customBurger = new BurgerBuilder()
  .addBuns("Sweet")
  .addCheese("Mozzarella")
  .addPatty("Mayonese")
  .build();

console.log(JSON.stringify(customBurger));
