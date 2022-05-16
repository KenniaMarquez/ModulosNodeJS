class Color {
    constructor(name) {
      this.name = name;
      
    }
  }
  
  const allColors = [
    new Color('Azul'),
    new Color('Amarillo'),
    new Color('Rosado'),
    new Color('Morado'),
    new Color('Anaranjado'),
    new Color('Gris'),
    new Color('Blanco'),
    new Color('Negro'),
    new Color('Rojo'),
    new Color('Verde'),
  ];
  
  exports.getRandomColor = () => {
    return allColors[Math.floor(Math.random() * allColors.length)];
  }
  
  exports.allColors = allColors;

  
exports.getBlue = () => {
  return allColors[2];
}