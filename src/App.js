import './App.css';
import { WeatherProvider } from "./context/WeatherContext"
import Container from "./components/Container.js"

function App() {
  return (
    <WeatherProvider>
      <Container />
    </WeatherProvider>
  )
}

export default App;
