import Header from "./components/header";
import Container from "./components/container";
import Footer from "./components/footer";

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
