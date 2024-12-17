import "./App.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./components/ui/provider";

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
