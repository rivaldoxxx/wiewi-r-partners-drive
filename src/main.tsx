import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initTheme } from "./hooks/useTheme";
import "./index.css";

// Motyw ustawiamy przed pierwszym renderem, żeby nie mrugnął domyślną paletą.
initTheme();

createRoot(document.getElementById("root")!).render(<App />);
