import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
