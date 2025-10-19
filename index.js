import { init_graphics, draw_dot, drawFlower, drawMistletoe, draw_circle, draw_circle_anotway, draw_elips, obatNyamuk, finish_drawing, flod_fill ,dda_line,fillMatrix,draw_polygon,translasi,skala} from "./graflib.js";

init_graphics("myCanvas"); 
const canvas = document.getElementById("myCanvas");

const segitiga = [
    { x: 100, y: 100 },
    { x: 200, y: 100 },
    { x: 150, y: 200 }
];

draw_polygon(segitiga, { r: 255, g: 0, b: 0 });

let T = { x: 500, y: 100 };
let segitiga_baru = translasi(segitiga, T);

draw_polygon(segitiga_baru, { r: 0, g: 255, b: 0 });

let S = { x: 3, y:3 };
let segitiga2 = skala(segitiga, S );
draw_polygon(segitiga2, { r: 0, g: 0, b: 255 });



finish_drawing();



