class BottleMaker2 {
    public name;
    public price;
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }

    // Method
    printDetails() {
      console.log(`Name: ${this.name}, Price: ${this.price}`);
    }
  }