import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // envia os dados para o backend
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setStatus(result.message); // exibe a mensagem de sucesso ou erro
    } catch (error) {
      console.log("Erro ao enviar a mensagem", error);
      setStatus("Erro ao enviar a mensagem");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
          required
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
          required
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
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-blue focus:border-transparent"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-custom-blue transition-colors"
      >
        Enviar Mensagem
      </button>
      {status && <p className="mt-4 text-center">{status}</p>} {/* Exibe a mensagem de status */}
    </form>
  );
}

export default ContactForm;