const marker = document.querySelector("#hiro-marker");
const status = document.querySelector("#tracking-status");

marker.addEventListener("markerFound", () => {
  status.textContent = "Marcador detectado: sigue la instrucción";
  status.style.color = "#5eead4";
  navigator.vibrate?.(80);
});

marker.addEventListener("markerLost", () => {
  status.textContent = "Marcador perdido: vuelve a enfocarlo";
  status.style.color = "#fbbf24";
});

window.addEventListener("camera-error", (event) => {
  status.textContent = `Error de cámara: ${event.error?.message ?? "sin detalle"}`;
  status.style.color = "#fca5a5";
});
