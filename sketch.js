function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(roadImage);
  showActor();
  showCar();
  movingCar();
  movingActor();
  checkCarPosition();
  collisionCheck();
  incluiPontos();
  marcaPontos();
}
