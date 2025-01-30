import profileImage from "./assets/profile.jpg";
import {
  FaReact,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPython,
  FaSwift,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "./ContactForm";


function App() {
  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Header */}
      <header
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <nav className="absolute top-0 w-full p-6">
          <ul className="flex justify-center space-x-8 text-white">
            <li>
              <a
                href="#sobre"
                className="hover:text-custom-blue-light transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-custom-blue-light transition-colors"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                className="hover:text-custom-blue-light transition-colors"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-custom-blue-light transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Larissa Rocha</h1>
          <p className="text-xl mb-8">
            Desenvolvedora Mobile | Flutter & Swift
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/hpzynha"
              target="_blank"
              className="text-white hover:text-custom-blue-light transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/larissanrocha/"
              target="_blank"
              className="text-white hover:text-custom-blue-light transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/dev.lari"
              target="_blank"
              className="text-white hover:text-custom-blue-light transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Sobre */}
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
                Sou uma desenvolvedora mobile apaixonada por criar aplicativos
                bonitos, performáticos e escaláveis com{" "}
                <strong>Flutter e Dart</strong>. Adoro explorar novas
                tecnologias, aprimorar arquiteturas como{" "}
                <strong>Clean Architecture e MVVM</strong> e otimizar a
                experiência do usuário com interfaces modernas e responsivas.
                Sempre em busca de novos desafios, também gosto de contribuir
                para projetos open source e compartilhar conhecimento com a
                comunidade Flutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-4 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Projeto Receitas"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">App de Receitas</h3>
                <p className="text-gray-600 mb-4">
                  Um app de receitas criado com Flutter, integrando API de
                  receitas e funcionalidades offline.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Flutter
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Projeto Finanças"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">App de Finanças</h3>
                <p className="text-gray-600 mb-4">
                  Um app de gerenciamento financeiro desenvolvido em Swift, com
                  sincronização em nuvem.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Swift
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    CloudKit
                  </span>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <FaFlutter className="w-8 h-8 text-custom-blue" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Flutter/Dart</span>
                  <span>90%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-custom-blue rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaReact className="w-8 h-8 text-custom-blue" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">React</span>
                  <span>60%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-custom-blue rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPython className="w-8 h-8 text-custom-blue" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Python</span>
                  <span>80%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-custom-blue rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaSwift className="w-8 h-8 text-custom-blue" />
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Swift iOS</span>
                  <span>65%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-custom-blue rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MdOutlineEmail className="text-custom-blue"size={24} />
                  <span>larissa.nogueira.rocha@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <LuMapPin className="text-custom-blue" size={24} />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <ContactForm />
            {/* <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-custom-blue transition-colors"
              >
                Enviar Mensagem
              </button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© 2024 Larissa Rocha. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/hpzynha"
                target="_blank"
                className="hover:text-custom-blue-light transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/larissanrocha/"
                target="_blank"
                className="hover:text-custom-blue-light transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/dev.lari"
                target="_blank"
                className="hover:text-custom-blue-light transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
