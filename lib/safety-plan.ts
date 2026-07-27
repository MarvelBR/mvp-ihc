// Dados das etapas do plano de segurança, dicas e contatos de emergência.

import {
  CircleUserRound,
  HandHeart,
  Hospital,
  Phone,
  ShieldCheck,
  TriangleAlert,
  Wrench,
} from "lucide-react";

export const safetyTips = [
  "Revise seu plano regularmente com seu terapeuta",
  "Compartilhe este plano com pessoas de confiança",
  "Mantenha os contatos sempre atualizados",
  "Lembre-se: pedir ajuda é um sinal de força",
];

export type SuggestionCategory = {
  category: string;
  items: string[];
};

export const warningSignalCategories: SuggestionCategory[] = [
  {
    category: "Emocionais / Cognitivos",
    items: [
      "Humor negativo / irritabilidade",
      "Expectativa frustrada",
      "Antecipação de fatos / pensamento repetitivo",
      "Desesperança",
      "Insatisfação com a imagem corporal",
    ],
  },
  {
    category: "Comportamentais",
    items: [
      "Uso de substância",
      "Ação impulsiva / autolesiva",
    ],
  },
  {
    category: "Clínicos",
    items: [
      "Instabilidade de um transtorno mental",
      "Sinais físicos ou clínicos",
      "Alteração do sono",
    ],
  },
  {
    category: "Relacionais e Sociais",
    items: [
      "Conflito em relacionamento",
      "Convivência familiar conflitante",
      "Exposição ao comportamento suicida de pessoas próximas",
      "Solidão",
      "Questões relacionadas à sexualidade",
    ],
  },
  {
    category: "Contextuais / Biográficos",
    items: [
      "Fatos passados",
      "Mudanças de vida / questões profissionais e/ou financeiras",
    ],
  },
];

export const safetySteps = [
  {
    slug: "plano",
    number: 1,
    progress: 16,
    title: "Sinais de Alerta",
    label: "Identifique os sinais do início da crise",
    name: "warningSignals",
    placeholder: "Descreva outros sinais de alerta que você observa...",
    icon: TriangleAlert,
    next: "/plano/2",
    warningSignals: true,
  },
  {
    slug: "2",
    number: 2,
    progress: 32,
    title: "Estratégias de Enfrentamento",
    label: "Incentive estratégias pessoais e imediatas de enfrentamento para aliviar o sofrimento e atravessar o momento de crise.",
    name: "copingStrategies",
    placeholder: "Ex: respirar fundo, ouvir música, fazer exercícios, meditar...",
    suggestions: [
      "Oração",
      "Atividade de relaxamento",
      "Pensar em atividades prazerosas",
      "Fazer tarefas pendentes",
      "Ler um cartão lembrete (escreva algo positivo)",
      "Jogar um jogo",
      "Ouvir um podcast",
    ],
    icon: Wrench,
    next: "/plano/3",
  },
  {
    slug: "3",
    number: 3,
    progress: 48,
    title: "Lugares e Pessoas",
    label: "Quais lugares te ajudam a se conectar com você e quem poderia te fazer companhia nesse momento?",
    name: "placesAndPeople",
    placeholder: "Ex: ir a um parque com um amigo, visitar um familiar, passear com um pet...",
    suggestions: [
      "Igreja e/ou local de prática religiosa",
      "Ir a um parque",
      "Procurar um lugar com natureza",
      "Atividade física",
      "Passeio com animal de estimação",
      "Fazer algo fácil pendente (ir ao banco, buscar algo, etc...)",
      "Conversar com colegas de trabalho / estudo",
      "Mensagem ou visita a um amigo ou familiar",
      "Ligação a alguém importante",
      "Grupos de interesse em comum: time, jogo, esporte, comunidades que participo",
    ],
    icon: CircleUserRound,
    next: "/plano/4",
  },
  {
    slug: "4",
    number: 4,
    progress: 64,
    title: "Contatos de segurança",
    label: "Com quem posso contar para me ajudar quando preciso?",
    name: "safetyContacts",
    placeholder: "Ex: familiares, amigos, terapeuta, entre outros.",
    icon: Phone,
    next: "/plano/5",
  },
  {
    slug: "5",
    number: 5,
    progress: 80,
    title: "Ajuda profissional",
    label: "Preciso recorrer à ajuda profissional?",
    name: "professionalHelp",
    icon: HandHeart,
    next: "/plano/6",
    emergency: true,
  },
  {
    slug: "6",
    number: 6,
    progress: 95,
    title: "Seu ambiente",
    label: "Identifique os riscos e planeje formas de tornar o ambiente seguro (o que restringir, como e com o apoio de quem)",
    name: "safeEnvironment",
    placeholder: "Ex: contar com a ajuda de amigos, familiares, entre outros.",
    icon: ShieldCheck,
    next: "/plano/sucesso",
    final: true,
  },
];

export const emergencyContacts = [
  {
    title: "Meu local de tratamento",
    description: "Nome e telefone (preencher)",
    icon: Hospital,
  },
  {
    title: "CAPS",
    description: "Rua Pioneiro João José Queiroz, 650 - Bloco 1 (Jardim Panema)",
    number: "(44) 3309-4493",
    icon: HandHeart,
  },
  {
    title: "SAMU",
    number: "192",
    description: "Emergências médicas",
    icon: Phone,
  },
];

/**
 * Busca os dados de uma etapa do plano de seguranca pelo slug da URL.
 *
 * Entrada:
 * - slug: identificador da etapa, por exemplo "2" ou "plano".
 *
 * Variaveis usadas:
 * - safetySteps: lista com todas as etapas disponiveis.
 *
 * Saida:
 * - objeto da etapa encontrada ou undefined quando o slug nao existe.
 */
export function getSafetyStep(slug: string) {
  return safetySteps.find((step) => step.slug === slug);
}