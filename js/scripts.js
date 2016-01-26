function BankAccount(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

BankAccount.prototype.withdraw = function(amount) {
  return this.balance -= amount;
}
