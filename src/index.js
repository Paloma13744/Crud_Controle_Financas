import{ createRoot} from "react-dom/client"
import App from "./App"

const root = createRoot(document.querySelector("#root"))  // Passa o root como parâmetro(id)

root.render(<App></App>)  // Renderiza