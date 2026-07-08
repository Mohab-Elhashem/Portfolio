import React, { Suspense } from "react";
import { Container } from "./components/shared/Container";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";

const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div>
      <Container>
        <ScrollToTop />
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
      </Container>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;