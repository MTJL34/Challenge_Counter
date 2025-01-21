import './App.css'
import Counter from "./assets/components/Counter";

function App() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Multi-compteurs</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
                {/* Compteur 1 avec incrément de +1 */}
                <Counter incrementValue={1} />

                {/* Compteur 2 avec incrément de +2 */}
                <Counter incrementValue={2} />
            </div>
        </div>
    );
}

export default App;

