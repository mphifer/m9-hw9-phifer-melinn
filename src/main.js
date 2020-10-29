//create class and pass it through 2 properties
class Desserts {
  constructor(type, calories) {
    this.type = type;
    this.calories = calories;
  }
}

class IceCream extends Desserts {
  constructor(type, calories, flavor, scoops) {
    super(type, calories);
    this.flavor = flavor;
    this.scoops = scoops;
  }

  //create method
  includeSpoon() {
    console.log('Here is your spoon!');
  }
}

const vanillaIceCream = new IceCream('Ice Cream', 340, 'Vanilla', 3);

//log the new object
console.log(vanillaIceCream);

//call the includeSpoon method on vanillaIceCream
vanillaIceCream.includeSpoon();
