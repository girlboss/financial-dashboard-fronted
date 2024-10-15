import Dashboard from "./components/Dashboard"
import { DataProvider } from "./contexts/DataProvider"

function App() {
  return (
    <DataProvider>
      <Dashboard />
    </DataProvider>
  )
}

export default App
