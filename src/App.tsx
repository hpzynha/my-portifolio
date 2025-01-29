import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profileImage from "./assets/profile.jpg";

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/*Header*/}
      <header
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5)), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <nav className="absolute top-0 w-full p-6">
          <ul className="flex justify-center space-x-8 text-white">
            <li>
              <a
                href="#sobre"
                className="hover:text-amber-400 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-amber-400 transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="hover:text-amber-400 transition-colors"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-amber-400 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Larissa Nogueira da Rocha</h1>
          <p className="text-xl mb-8">Desenvolvedora Mobile</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/hpzynha"
              className="text-white hover:text-amber-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/larissanrocha/"
              className="text-white hover:text-amber-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/dav.lari"
              className="text-white hover:text-amber-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </header>
      {/*Sobre*/}
      <section id="sobre" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full"
            />
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-gray-700">
                Sou um desenvolvedor mobile apaixonado por criar aplicativos
                bonitos e funcionais. Adoro trabalhar com Flutter e Swift, e
                estou sempre em busca de novos desafios. Quando não estou
                codando, você pode me encontrar em cafeterias locais, explorando
                novos lugares ou contribuindo para projetos open source.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default App;
