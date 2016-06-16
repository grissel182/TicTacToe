var con=1;
var b1="b1",b2="b2",b3="b3",b4="b4",b5="b5",b6="b6",b7="b7",b8="b8",b9="b9";
function actions(boton){
 if(boton.className=="buttons"){
  boton.className="clicked";
  var text;
  if(con%2==0){
   text="X";
  }else{
   text="O";
  }
  boton.value=text;
  boton.appendChild(document.createTextNode(text));
  con++;
  asignation(text,boton);
 }
}
var asignacion = 0;
function asignation(text,boton){
 if(b1==boton.name){
  b1=text;
  asignacion++; //sumamos el contador para generar empate
 }
 else if(b2==boton.name){
  b2=text;
  asignacion++;
 }
 else if(b3==boton.name){
  b3=text;
  asignacion++;
 }
 else if(b4==boton.name){
  b4=text;
  asignacion++;
 }
 else if(b5==boton.name){
  b5=text;
  asignacion++;
 }
 else if(b6==boton.name){
  b6=text;
  asignacion++;
 }
 else if(b7==boton.name){
  b7=text;
  asignacion++;
 }
 else if(b8==boton.name){
  b8=text;
  asignacion++;
 }
 else if(b9==boton.name){
  b9=text;
  asignacion++;
 }
 validation(text);
}
//funcion de ganador
function validation(text){
 if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)
 	||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)
 	||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)
 	||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
  var con=confirm("Gano el jugador "+ text +"\n¿Quieres jugar de nuevo?");
  if(con==true){
   window.location.reload();
  }
 }
 //muestra si hay empate
 else if(asignacion==9){
 	alert("Ha sido un EMPATE \n ¿Quieres volver a jugar?");
 	window.location.reload();
 }
 }
