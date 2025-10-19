import {
  init_graphics, enable_kaleidoscope, reset_kaleidoscope,
  drawFlower, fillMatrix, finish_drawing
} from "../graflib.js";

init_graphics("myCanvas");
enable_kaleidoscope();
const canvas = document.getElementById("myCanvas");

const paletteContainer = document.createElement("div");
paletteContainer.style.margin = "8px 0";
paletteContainer.style.display = "flex";
paletteContainer.style.gap = "8px";
document.body.insertBefore(paletteContainer, canvas);

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
  btn.addEventListener("click", () => {
    chosenColor = { ...p.color };
    document.querySelectorAll("#palette button").forEach(b => b.style.outline = "");
    btn.style.outline = "3px solid #222";
  });
  return btn;
}

paletteContainer.id = "palette";
presets.forEach(p => paletteContainer.appendChild(makePresetButton(p)));
paletteContainer.querySelector("button").style.outline = "3px solid #222";

window.addEventListener("keydown", (e) => {
  if (e.key === "r") reset_kaleidoscope();
});

canvas.addEventListener("click", (ev) => {
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor(ev.clientX - rect.left);
  const y = Math.floor(ev.clientY - rect.top);

  drawFlower(
    { x, y },
    60 + Math.floor(Math.random() * 40),
    3 + Math.floor(Math.random() * 6),
    chosenColor
  );

  fillMatrix(x, y, { r: 0, g: 0, b: 0 }, chosenColor);
  finish_drawing();
});
