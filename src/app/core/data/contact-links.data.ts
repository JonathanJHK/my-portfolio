import { ContactLink } from '../models/contact-link.model';

export const CONTACT_LINKS = [
  {
    label: 'E-mail',
    description: 'Envie uma mensagem diretamente para mim.',
    url: 'mailto:jonathanheidyjhk@gmail.com',
  },
  {
    label: 'LinkedIn',
    description: 'Conheça minha trajetória e experiência profissional.',
    url: 'https://www.linkedin.com/in/jonathanhkinjo',
  },
  {
    label: 'GitHub',
    description: 'Veja meus repositórios e projetos de desenvolvimento.',
    url: 'https://github.com/JonathanJHK',
  },
] as const satisfies readonly ContactLink[];
