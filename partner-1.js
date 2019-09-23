//Name:Frankie 
console.log ("Script Loaded!");

const MiKil = (num1) => {
  return   num1 * 1.609;
};

const PouKil = (num2) => {
    return num2 * 0.45;
};

const SloFor = (x1, y1, x2, y2) => {
  return (y2 -y1)/(x2 -x1);
};

const DisForm = (x1, y1, x2, y2) => {
  return (x2-x1)*2 + (y2-y1)*2;
};