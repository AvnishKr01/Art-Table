import ArtTable from "./components/ArtTable";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Showig All Details in Art Table</h2>
      <ArtTable />
    </div>
  );
}

export default App;
