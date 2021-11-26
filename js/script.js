function verificarRespuestas(){
    var total = 30;
    var puntos = 0;

    var myForm = document.forms["quizform"];
    var respuestas = ["c","b","d","b","b","b","b","b","c","c","a","c","d","d","d","d","b","d","c","b","a","a","a","d","b","c","a","c","a","d"];
    
    for(var i = 1; i <= total; i++){
     if(myForm["p" + i].value === null || myForm["p" +  i].value === ""){
        alert("Por favor responde la pregunta " + i);
        return false;
     }   else{
         if(myForm["p" + i].value === respuestas[i - 1]){
            puntos++;
     }
   }
 }   
 var resultado = document.getElementById("resultado");   
 resultado.innerHTML = '<h3> Obtuviste <span> '+ puntos +' </span> de <span>'+ total +' puntos</span></h3>';
    return false;
}