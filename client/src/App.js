import "./App.css";
import { useViewPort } from "./hooks";
import { HorizontalLayout, VerticalLayout } from "./layouts";

function App() {
  const viewPort = useViewPort();
  const isMobile = viewPort.width <= 1024;
  if (isMobile) {
    return <VerticalLayout />;
  }
  return <HorizontalLayout />;
}

export default App;
