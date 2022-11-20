let roadImage, 
    actorImage, 
    carImage, 
    carImage2, 
    carImage3, 
    carImages;
let somDaTrilha, 
    somDaColisao, 
    somDoPonto;

function preload(){
  roadImage = loadImage("images/estrada.png");
  actorImage = loadImage("images/ator-1.png");
  carImage = loadImage("images/carro-1.png");
  carImage2 = loadImage("images/carro-2.png");
  carImage3 = loadImage("images/carro-3.png");
  carImages = [carImage, carImage2, carImage3, carImage2, carImage, carImage3];
  somDaTrilha = loadSound("sounds/trilha.mp3");
  somDaColisao = loadSound("sounds/colidiu.mp3");
  somDoPonto = loadSound("sounds/pontos.wav");
}
