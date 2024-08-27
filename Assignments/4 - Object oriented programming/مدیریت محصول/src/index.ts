
class Product {
  manufactureDate: Date;
  price: number;
  readonly id: string;
  quantity: number;
  expireDate?: Date;
  isPrime?: boolean;

  constructor(
    manufactureDate: Date,
    price: number,
    id: string,
    quantity: number,
    expireDate?: Date,
    isPrime?: boolean
  ) {
    (this.manufactureDate = manufactureDate),
      (this.price = price),
      (this.id = id),
      (this.quantity = quantity),
      (this.expireDate = expireDate),
      (this.isPrime = isPrime);
  }

  buy(quantity: number = 5) {
    this.quantity += quantity;
  }
  sell(quantity: number = 5) {
    if (quantity < this.quantity) {
      this.quantity -= quantity;
    } else {
      throw new Error("amount is grater than product quantity");
    }
  }
}

export default Product;