
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="m-0 bg-main">
      <div className="w-full">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
