import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'consertos',
    title: 'Consertos e Ajustes',
    description: 'Pequenos reparos e ajustes precisos para manter suas peças favoritas em perfeito estado.',
    icon: 'scissors',
    tag: 'Atendimento em até 48h'
  },
  {
    id: 'reformas',
    title: 'Reformas de Roupas',
    description: 'Transformamos peças que já não servem em roupas renovadas com acabamento profissional.',
    icon: 'refresh',
    tag: 'Renovação completa'
  },
  {
    id: 'costura-personalizada',
    title: 'Costura Personalizada',
    description: 'Criamos peças sob medida com modelagem exclusiva e tecidos selecionados.',
    icon: 'machine',
    tag: 'Sob medida'
  },
  {
    id: 'bainhas',
    title: 'Bainhas',
    description: 'Bainhas perfeitas para calças, saias, vestidos e cortinas com acabamento invisível.',
    icon: 'ruler',
    tag: 'Acabamento impecável'
  },
  {
    id: 'ajustes-vestidos',
    title: 'Ajustes de Vestidos e Ternos',
    description: 'Ajustes precisos em trajes formais com foco no caimento perfeito.',
    icon: 'tuxedo',
    tag: 'Elegância garantida'
  },
  {
    id: 'customizacao',
    title: 'Customização de Peças',
    description: 'Bordados, aplicações e detalhes criativos para dar vida nova à sua peça.',
    icon: 'sparkles',
    tag: 'Criatividade sem limites'
  }
];
