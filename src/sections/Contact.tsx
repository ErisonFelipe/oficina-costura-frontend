import React, { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal } from '../components/ui/Reveal';
import { contactInfo } from '../data/contact';
import { api, type QuotePayload } from '../lib/api';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuotePayload>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await api.createQuote(formData);
      setStatus('success');
      setFeedback(response.message);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });

      // Volta ao estado inicial após 6 segundos
      setTimeout(() => {
        setStatus('idle');
        setFeedback('');
      }, 6000);
    } catch (err) {
      setStatus('error');
      setFeedback(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
    }
  };

  const inputClasses =
    'w-full px-4 py-3.5 border-2 border-[#E8E0D8] rounded-lg font-body text-sm text-[#2C2825] bg-white transition-all duration-300 outline-none focus:border-[#C67B5C] focus:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed';

  return (
    <section id="contato" className="py-24 bg-[#F5EDE6] relative">
      <div className="absolute top-0 left-0 right-0 stitch-horizontal" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <Reveal direction="right">
            <SectionLabel>Contato</SectionLabel>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-4 text-[#2C2825]">
              Vamos conversar sobre sua peça?
            </h2>
            <p className="text-[#6B6560] leading-relaxed mb-8">
              Envie uma mensagem, ligue ou passe na oficina. Será um prazer entender o que
              você precisa e oferecer a melhor solução em costura.
            </p>

            <div className="space-y-6 mb-8 text-[#2C2825]">
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C] mt-2.5 flex-shrink-0" />
                <div>
                  <strong className="block text-sm font-semibold">Telefone</strong>
                  <span className="text-sm text-[#6B6560]">{contactInfo.phone}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C] mt-2.5 flex-shrink-0" />
                <div>
                  <strong className="block text-sm font-semibold">WhatsApp</strong>
                  <span className="text-sm text-[#6B6560]">{contactInfo.whatsapp}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C] mt-2.5 flex-shrink-0" />
                <div>
                  <strong className="block text-sm font-semibold">Endereço</strong>
                  <span className="text-sm text-[#6B6560]">{contactInfo.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C] mt-2.5 flex-shrink-0" />
                <div>
                  <strong className="block text-sm font-semibold">Horário</strong>
                  <span className="text-sm text-[#6B6560]">{contactInfo.hours}</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-[#1eb958] hover:transform hover:-translate-y-0.5"
            >
              Chamar no WhatsApp
            </a>
          </Reveal>

          {/* Formulário */}
          <Reveal direction="left">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E0D8] shadow-md">
              <h3 className="font-serif text-2xl font-semibold mb-2 text-[#2C2825]">
                Solicite seu orçamento
              </h3>
              <p className="text-sm text-[#6B6560] mb-8">
                Preencha o formulário e retornaremos em breve.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-[#2C2825]">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                      disabled={status === 'loading'}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-[#2C2825]">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      disabled={status === 'loading'}
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-[#2C2825]">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 90000-0000"
                      disabled={status === 'loading'}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-[#2C2825]">
                      Serviço
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className={inputClasses}
                    >
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
                  <label className="block text-xs font-semibold tracking-wider uppercase mb-2 text-[#2C2825]">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o que você precisa..."
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    className={`${inputClasses} resize-y`}
                  />
                </div>

                {/* Feedback */}
                {status === 'success' && (
                  <div className="flex items-start gap-2 bg-green-50 border border-green-200 text-green-800 text-sm p-4 rounded-lg">
                    <FiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{feedback}</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-800 text-sm p-4 rounded-lg">
                    <FiAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{feedback}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C67B5C] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#A85E42] hover:transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  {status === 'loading' ? (
                    <>
                      <FiLoader className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Solicitação'
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
