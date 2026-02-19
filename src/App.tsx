import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-[#010104]">
      <Header />
      <Hero />
      <SocialProof />
      <Features />
      <Footer />
    </main>
  );
}
