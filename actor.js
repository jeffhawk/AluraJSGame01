//Actor Variables
let yActor = 368;
let xActor = 100;
let hit = false;
let compCarro = 50;
let altuCarro = 40;
let pontos = 0;

function showActor(){
  image(actorImage, xActor, yActor, 28, 28);
}

function movingActor(){
  if (keyIsDown(UP_ARROW)){
    yActor -= 3;
  }else if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yActor += 3;
    }
  }/*else if(keyIsDown(LEFT_ARROW)){
    xActor -= 3;
  }else if(keyIsDown(RIGHT_ARROW)){
    xActor += 3;
  }*/
}

function collisionCheck(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < carImages.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], compCarro, altuCarro, xActor, yActor, 15);
    if (hit){
      voltaAtorParaPosicaoIncial();
      somDaColisao.play();
      if(meusPontosMaiorQueZero()){
        //
        pontos -= 1;
      }
      
    }
    
  }
}

function voltaAtorParaPosicaoIncial(){
  yActor = 368;
}

function incluiPontos(){
  //
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(pontos, width / 5, 27); 
}

function marcaPontos(){
  //
  if(yActor < 15){
    somDoPonto.play();
    pontos += 1;
    voltaAtorParaPosicaoIncial();
  }
}

function meusPontosMaiorQueZero(){
  //
  return pontos > 0;
}

function podeSeMover(){
  return yActor < 366;
}