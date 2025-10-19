import { init_graphics, draw_dot, drawFlower, drawMistletoe, draw_circle, draw_circle_anotway, draw_elips, obatNyamuk, finish_drawing, flod_fill, dda_line, fillMatrix ,draw_square,draw_triangle} from "../graflib.js";
init_graphics("myCanvas");

draw_circle_anotway({ x: 400, y: 400 }, 50, { r: 255, g: 0, b: 0 });
fillMatrix(400, 400, { r: 0, g: 0, b: 0 }, { r: 255, g: 0, b: 0 },);

draw_triangle({ x: 300, y: 400 },{ x: 100, y: 250 },{ x: 500, y: 250 },{ r: 0, g: 255, b: 0 } );
fillMatrix(300, 350, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 0 }); 

draw_square({ x: 150, y: 550 }, 80, { r: 0, g: 0, b: 255 }); 
fillMatrix(160, 560, { r: 0, g: 0, b: 0 }, { r: 0, g: 0, b: 255 });

drawFlower({ x: 500, y: 600 }, 100, 4, { r: 0, g: 255, b: 0 });
fillMatrix(510, 600, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 0 });
fillMatrix(490, 600, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 0 });
fillMatrix(500, 610, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 0 });
fillMatrix(500, 590, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 0 });
fillMatrix(510, 610, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 255 });
fillMatrix(490, 590, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 255 });
fillMatrix(490, 610, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 255 });
fillMatrix(510, 590, { r: 0, g: 0, b: 0 }, { r: 0, g: 255, b: 255 });

finish_drawing();