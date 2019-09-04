function complement(func)
{
  return (a) => !func(a);
}

function remove(arr, func)
{
  let newArr = [];
  func = complement(func);
  arr.forEach(item => { if (func(item)) { newArr.push(item); } });
  return newArr;
}
