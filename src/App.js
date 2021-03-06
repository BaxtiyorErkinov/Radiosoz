import Header from "./components/Home/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import RouterApp from "./components/RouterApp";

function App() {
  return (
    <div>
      <>
        <Header />
        <RouterApp />
        <Footer />
      </>
    </div>
  );
}

export default App;
