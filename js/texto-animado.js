var el = document.querySelector("#text");
var text = "Mostra-me, senhor, os teus caminhos, ensina-me as tuas veredas; guia-me com a tua verdade e ensina-me, pois tu és Deus, meu salvador, e a minha esperança está em ti o tempo todo. (Salmos 25:4-5)!"
var interval = 200;
function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}
showtext(el, text, interval);