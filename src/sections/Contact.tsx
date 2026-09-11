import React, { useState } from 'react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { contactInfo } from '../data/contact';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('Obrigado! Sua solicitação foi recebida.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 1000);
  };

  const inputClasses = "w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-body text-sm text-gray-900 bg-white transition-all duration-300 outline-none focus:border-orange-500 focus:shadow-sm";

  return (
    <section id="contato" className="py-24 bg-[#F5EDE6] relative">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionLabel>Contato</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-4 text-gray-900">
              Vamos conversar sobre sua peça?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Envie uma mensagem, ligue ou passe na oficina.
            </p>

            <div className="space-y-6 mb-8 text-gray-700">
              <div><strong>Telefone:</strong> {contactInfo.phone}</div>
              <div><strong>WhatsApp:</strong> {contactInfo.whatsapp}</div>
              <div><strong>Endereço:</strong> {contactInfo.address}</div>
              <div><strong>Horário:</strong> {contactInfo.hours}</div>
            </div>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#1eb958] hover:transform hover:-translate-y-0.5"
            >
              Chamar no WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-md">
            <h3 className="font-serif text-2xl font-semibold mb-2 text-gray-900">Solicite seu orçamento</h3>
            <p className="text-sm text-gray-600 mb-8">Preencha o formulário e retornaremos em breve.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-gray-700">Nome *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Seu nome" required className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-gray-700">E-mail *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required className={inputClasses} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-gray-700">Telefone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(11) 90000-0000" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-gray-700">Serviço</label>
                  <select name="service" value={formData.service} onChange={handleChange} className={inputClasses}>
                    <option value="">Selecione...</option>
                    <option value="consertos">Consertos e Ajustes</option>
                    <option value="reformas">Reformas de Roupas</option>
                    <option value="costura-personalizada">Costura Personalizada</option>
                    <option value="bainhas">Bainhas</option>
                    <option value="ajustes-vestidos-ternos">Ajustes de Vestidos e Ternos</option>
                    <option value="customizacao">Customização de Peças</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-gray-700">Mensagem *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Descreva o que você precisa..." required rows={5} className={`${inputClasses} resize-y`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-orange-600 hover:transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
