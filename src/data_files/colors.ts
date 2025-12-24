/**
 * Palette de couleurs Nutriwatt
 * 
 * 1️⃣ Bleu principal – Bleu confiance / tech: #3A73C1
 * 2️⃣ Bleu clair → Cyan: #6FAFD6 → #7ECBC2
 * 3️⃣ Vert doux: #8FD08A
 * 4️⃣ Jaune lumineux: #E8E84A
 * 5️⃣ Blanc cassé: #F4F4F4
 */

export const COLORS = {
  // Bleu principal – Titres, Logo, Boutons primaires, Liens actifs
  primary: {
    blue: '#3A73C1',
    blueDark: '#2D5A96',
    blueLight: '#4A8AD4',
  },
  // Bleu clair → Cyan – Dégradés, Hover, Backgrounds, Icônes secondaires
  secondary: {
    blue: '#6FAFD6',
    cyan: '#7ECBC2',
  },
  // Vert doux – Feedback positif, Indicateurs OK, Accents
  success: {
    green: '#8FD08A',
    greenDark: '#6FA868',
    greenLight: '#A8D8A3',
  },
  // Jaune lumineux – CTA importants, Highlights, Points clés
  accent: {
    yellow: '#E8E84A',
    yellowDark: '#D4D43A',
    yellowLight: '#F0F05A',
  },
  // Blanc cassé – Fond principal, Sections, UI premium
  neutral: {
    offWhite: '#F4F4F4',
    gray: '#E5E5E5',
    dark: '#1A1A1A',
  },
} as const;

// Classes Tailwind personnalisées pour les couleurs
export const COLOR_CLASSES = {
  primary: {
    text: 'text-[#3A73C1]',
    bg: 'bg-[#3A73C1]',
    border: 'border-[#3A73C1]',
    hover: 'hover:bg-[#2D5A96]',
  },
  secondary: {
    gradient: 'bg-gradient-to-r from-[#6FAFD6] to-[#7ECBC2]',
    text: 'text-[#6FAFD6]',
    bg: 'bg-[#6FAFD6]',
  },
  success: {
    text: 'text-[#8FD08A]',
    bg: 'bg-[#8FD08A]',
  },
  accent: {
    text: 'text-[#E8E84A]',
    bg: 'bg-[#E8E84A]',
  },
  neutral: {
    bg: 'bg-[#F4F4F4]',
  },
} as const;

