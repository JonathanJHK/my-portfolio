import { ContactLink } from '../models/contact-link.model';

export const CONTACT_LINKS = [
  {
    label: 'E-mail',
    description: 'Envie uma mensagem diretamente para mim.',
    url: 'mailto:jonathanheidyjhk@gmail.com',
    openInNewTab: false,
  },
  {
    label: 'LinkedIn',
    description: 'Conheça minha trajetória e experiência profissional.',
    url: 'https://www.linkedin.com/in/jonathanhkinjo',
    openInNewTab: true,
  },
  {
    label: 'GitHub',
    description: 'Veja meus repositórios e projetos de desenvolvimento.',
    url: 'https://github.com/JonathanJHK',
    openInNewTab: true,
  },
  {
    label: 'Currículo',
    description: 'Veja ou baixe meu currículo profissional.',
    url: '/documents/jonathan-heidy-kinjo-curriculo.pdf',
    openInNewTab: true,
  },
] as const satisfies readonly ContactLink[];
