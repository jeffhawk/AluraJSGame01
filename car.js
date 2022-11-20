//car variables
let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 265, 318];
let veloCars = [2, 5, 3, 3.6, 4, 1.8];

function showCar(){
  for (let i = 0; i < carImages.length; i++){
    image(carImages[i], xCars[i], yCars[i], 50, 40);
  }
}

function movingCar(){
  for(let i = 0; i < carImages.length; i++){
    xCars[i] -= veloCars[i];
  }
}

function checkCarPosition(){
  for (let i = 0; i < carImages.length; i++){
    if(passedWindow(xCars[i])){
      xCars[i] = 600;
    }

  }
}

function passedWindow(x){
  return x < -50;
}