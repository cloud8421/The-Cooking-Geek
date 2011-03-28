/* Author: Claudio Ortolina */
//http://net.tutsplus.com/tutorials/javascript-ajax/how-to-generate-noise-with-canvas/
function generateNoise(opacity) {  
   if ( !!!document.createElement('canvas').getContext ) {  
      return false;  
   }  
  
   var canvas = document.createElement("canvas"),  
   ctx = canvas.getContext('2d'),  
   x, y,  
   number,  
   opacityopacity = opacity || .2;  
  
   canvas.width = 45;  
   canvas.height = 45;  
  
   for ( x = 0; x < canvas.width; x++ ) {  
      for ( y = 0; y < canvas.height; y++ ) {  
         number = Math.floor( Math.random() * 120 );  
  
         ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";  
         ctx.fillRect(x, y, 1, 1);  
      }  
   }  
  
   document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";  
}  
generateNoise(.1); // default opacity is .2






















