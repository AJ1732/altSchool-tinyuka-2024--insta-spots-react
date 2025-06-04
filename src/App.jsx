import { Footer, GallerySection, Header, ProfileSection } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="mx-auto flex size-full min-h-[calc(100dvh-2.875rem)] max-w-[79rem] flex-col px-4">
        <main className="flex-1">
          <ProfileSection />

          <hr className="border-primary/40" />

          <GallerySection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
