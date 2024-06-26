import "./App.css";
import { Application } from "./components";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./components/providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
