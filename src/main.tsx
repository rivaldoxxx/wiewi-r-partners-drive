import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { initTheme } from "./hooks/useTheme";
import "./index.css";

// Motyw ustawiamy przed pierwszym renderem, żeby nie mrugnął domyślną paletą.
initTheme();

// Build produkcyjny ma już gotowy HTML z prerenderingu, więc React go tylko przejmuje.
// W trybie dev #root jest pusty i renderujemy od zera.
const container = document.getElementById("root")!;
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
