window.addEventListener("load", start);

var range = null;
var i = null;
var a=0,b=0,c=0;
var circulo = document.getElementById("rgbCirculo");

function start() {
  controleRGB();
  controleRange();
}

function controleRange() {
  range = document.querySelectorAll(".barra");
  var value0 = document.getElementById("exibeCor1");
  range[0].addEventListener("input", function (e) {
    value0.value = this.value;
    controleRGB();
  });
  var value1 = document.getElementById("exibeCor2");
  range[1].addEventListener("input", function (e) {
    value1.value = this.value;
    controleRGB();
  });
  var value2 = document.getElementById("exibeCor3");
  range[2].addEventListener("input", function (e) {
    value2.value = this.value;
    controleRGB();
  });

}
function controleRGB() {
  var a = document.getElementById("exibeCor1");
  var b = document.getElementById("exibeCor2");
  var c = document.getElementById("exibeCor3");
  var rgbCirc = document.getElementById("rgbCirculo");
  rgbCirc.style.backgroundColor = 'rgb(' + a.value + ',' + b.value + ',' + c.value + ')';
}
