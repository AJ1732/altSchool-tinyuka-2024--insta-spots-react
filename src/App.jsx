import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-[79rem] size-full px-4 mx-auto min-h-[calc(100dvh-2.875rem)] flex flex-col">
        <main className="flex-1">Hello World</main>
        <Footer />
      </div>
    </>
  );
}

export default App;
