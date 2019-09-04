class VM
{
  constructor(obj)
  {
    this.inventory = obj;
  }

  sale(itemID)
  {
    this.inventory[itemID].stock -= 1;
    return `1 ${this.inventory[itemID].name} - Thank you and come again!`;
  }

  stockTotal()
  {
    let total = 0;
    let objArr = [];
    for (let i in this.inventory)
    {
      objArr.push(this.inventory[i]);
    }
    objArr.reduce((acc, curr) =>
    {
      total += curr.stock;
      return total;
    }, total);
    return total === 0 ? 'Out of Stock' : `${total} item(s)`;
  }
}
