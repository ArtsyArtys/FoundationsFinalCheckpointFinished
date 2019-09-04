class Character
{
  constructor(char, name, size)
  {
    this.character = char;
    this.fontName = name;
    this.fontSize = size;
  }

  drawCharacter()
  {
    return this.character;
  }
}


class Letter extends Character
{
  constructor(char, name, size, charCase)
  {
    super(char, name, size);
    this.charCase = charCase;
  }

  toUpperCase()
  {
    this.charCase = 'upperCase';
    this.character = this.character.toUpperCase();
  }

  toLowerCase()
  {
    this.charCase = 'lowerCase';
    this.character = this.character.toLowerCase();
  }

  getCase() { return this.charCase; }
}


class Digit extends Character
{
  constructor(name, font, size)
  {
    super(name, font, size);
    this.isDigit = true;
  }

  integerValue()
  {
    this.character = parseInt(this.character, 10);
    // or without parseInt:
    // if (typeof this.character !== 'number') { this.character = Number(this.character); }
  }
}
