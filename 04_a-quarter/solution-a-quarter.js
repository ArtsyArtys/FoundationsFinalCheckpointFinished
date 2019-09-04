function aQuarter(func)
{
  let counter = 0;
  return (...args) =>
  {
    counter++;
    if (counter !== 4) { return "something went wrong :/"; }
    counter = 0;
    return func(...args);
  };

}
