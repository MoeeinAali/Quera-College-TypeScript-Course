class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  withdraw(amount: number): void {
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }
  get balance(): number {
    return this._balance;
  }

  set balance(n: number) {
    if (n < 0) {
      throw new Error("Balance cannot be negative");
    } else {
      this._balance = n;
    }
  }

}

export default BankAccount;