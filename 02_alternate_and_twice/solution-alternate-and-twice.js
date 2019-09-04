function alternate(func)
{
  let io = false;
  return () =>
  {
    io = !io;
    if (io) { func(); }
  };
}

function twice(func)
{
  let counter = 0;
  return () =>
  {
    if (counter < 2)
    {
      counter++;
      return func();
    }
    else  { return 0; }
  };
}
