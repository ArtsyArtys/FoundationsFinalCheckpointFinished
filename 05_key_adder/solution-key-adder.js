function keyAdder()
{
  let total = 0;

  for (let i in this)
  {
    if (typeof this[i] === 'number' && this.hasOwnProperty(i)) { total += this[i]; }
    // alternate way:
    // if (Object.keys(this).includes(i) && typeof this[i] === 'number') { total += this[i]; }
  }

  return total;
}
