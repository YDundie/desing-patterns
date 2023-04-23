class Burger {
  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  print() {
    console.log(this.ingredients);
  }
}

class BurgerFactory {
  createCheeseBurger() {
    return new Burger(["cheese", "patty", "buns"]);
  }

  createVeggieBurger() {
    return new Burger(["veggie", "buns"]);
  }

  createChickenBurger() {
    return new Burger(["chicken", "buns"]);
  }

  createFishBurger() {
    return new Burger(["fish", "buns"]);
  }
}

const burgerFactory = new BurgerFactory();

const cheeseBurger = burgerFactory.createCheeseBurger().print();
const veggieBurger = burgerFactory.createVeggieBurger().print();
const chickenBurger = burgerFactory.createChickenBurger().print();
const fishBurger = burgerFactory.createFishBurger().print();
