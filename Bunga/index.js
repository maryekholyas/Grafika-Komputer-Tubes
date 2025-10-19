import {
  init_graphics, draw_dot, drawFlower, drawMistletoe, draw_circle,
  draw_circle_anotway, draw_elips, obatNyamuk, finish_drawing,
  flod_fill, dda_line, fillMatrix, draw_square, draw_triangle,
  get_warna_titik
} from "../graflib.js";

init_graphics("myCanvas");
const canvas = document.getElementById("myCanvas");

drawFlower(
    { x: 400 + Math.floor(Math.random() * 101), y: 400 + Math.floor(Math.random() * 101) },
    80 + Math.floor(Math.random() * 81),
    3 + Math.floor(Math.random() * 6),
    { r: Math.floor(Math.random() * 256), g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) }
);

finish_drawing();


const paletteContainer = document.createElement("div");
paletteContainer.style.margin = "8px 0";
paletteContainer.style.display = "flex";
paletteContainer.style.gap = "8px";
document.body.insertBefore(paletteContainer, document.getElementById("myCanvas"));


const presets = [
  { name: "Merah", color: { r: 255, g: 0, b: 0 } },
  { name: "Hijau", color: { r: 0, g: 255, b: 0 } },
  { name: "Biru", color: { r: 0, g: 0, b: 255 } },
  { name: "Kuning", color: { r: 255, g: 255, b: 0 } },
  { name: "Magenta", color: { r: 255, g: 0, b: 255 } }
];


let chosenColor = presets[0].color;

function makePresetButton(p) {
  const btn = document.createElement("button");
  btn.textContent = p.name;
  btn.style.padding = "6px 10px";
  btn.style.border = "2px solid #333";
  btn.style.cursor = "pointer";
  btn.style.background = `rgb(${p.color.r}, ${p.color.g}, ${p.color.b})`;
  btn.style.color = (p.color.r + p.color.g + p.color.b) / 3 > 140 ? "#000" : "#fff";
  btn.dataset.r = p.color.r;
  btn.dataset.g = p.color.g;
  btn.dataset.b = p.color.b;
  btn.addEventListener("click", () => {
    chosenColor = { r: p.color.r, g: p.color.g, b: p.color.b };
    document.querySelectorAll("#palette button").forEach(b => b.style.outline = "");
    btn.style.outline = "3px solid #222";
  });
  return btn;
}


paletteContainer.id = "palette";
presets.forEach(p => paletteContainer.appendChild(makePresetButton(p)));
paletteContainer.querySelector("button").style.outline = "3px solid #222";

canvas.addEventListener("click", (ev) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(ev.clientX - rect.left);
  const y = Math.floor(ev.clientY - rect.top);
  const warna_target = get_warna_titik(x, y);

  console.log("Click:", x, y, "warna target:", warna_target, "pilihan:", chosenColor);

  const tolerance = 10;
  fillMatrix(x, y, warna_target, chosenColor, tolerance);

  finish_drawing();
});
