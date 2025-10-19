
import { init_graphics, enable_kaleidoscope, reset_kaleidoscope } from "../graflib.js";

init_graphics("myCanvas");
enable_kaleidoscope();
window.addEventListener("keydown", (e) => {
  if (e.key === "r") reset_kaleidoscope();
});

