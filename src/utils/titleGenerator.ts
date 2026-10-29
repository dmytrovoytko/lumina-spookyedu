import { RealmType } from '../types';

export interface TitleDetails {
  title: string;
  rank: string;
  realmBadge: string;
  sealColor: string;
  loreQuote: string;
}

export function computeEarnedTitle(
  realm: RealmType,
  accuracy: number,
  maxStreak: number,
  score: number
): TitleDetails {
  if (realm === 'dia_de_los_muertos') {
    if (accuracy >= 90 && maxStreak >= 6) {
      return {
        title: 'Guardián Supremo de Mictlán',
        rank: 'Legendary Chronicler',
        realmBadge: '🏵️',
        sealColor: '#F59E0B',
        loreQuote: 'The scent of cempasúchil illuminates the nine underworld realms before your memory.'
      };
    }
    if (accuracy >= 75 || maxStreak >= 4) {
      return {
        title: 'Maestro de la Ofrenda Sagrada',
        rank: 'Master Altarist',
        realmBadge: '🕯️',
        sealColor: '#E11D48',
        loreQuote: 'Every offering of water, salt, and cempasúchil has been respectfully remembered.'
      };
    }
    if (accuracy >= 50) {
      return {
        title: 'Portador del Cempasúchil Dorado',
        rank: 'Honored Pilgrim',
        realmBadge: '✨',
        sealColor: '#D97706',
        loreQuote: 'Your steps bridge the world of the living and the ancestors with earnest warmth.'
      };
    }
    return {
      title: 'Caminante de las Ánimas',
      rank: 'Initiate of Memory',
      realmBadge: '🌸',
      sealColor: '#CA8A04',
      loreQuote: 'A humble traveler just beginning to uncover the eternal beauty of Mesoamerican roots.'
    };
  }

  if (realm === 'halloween_science') {
    if (accuracy >= 90 && maxStreak >= 6) {
      return {
        title: 'Master of Light, Optics & Nocturnal Lore',
        rank: 'Grand Alchemical Investigator',
        realmBadge: '🔬',
        sealColor: '#10B981',
        loreQuote: 'You pierce through ghostly illusions with ray-tracing optics and ecological mastery.'
      };
    }
    if (accuracy >= 75 || maxStreak >= 4) {
      return {
        title: 'Curator of Ancient Samhain & Science',
        rank: 'Senior Myth-Debunker',
        realmBadge: '🧪',
        sealColor: '#8B5CF6',
        loreQuote: 'From Celtic harvest fires to bat echolocation, no supernatural superstition stands unexamined.'
      };
    }
    if (accuracy >= 50) {
      return {
        title: 'Adept of the Gothic Laboratory',
        rank: 'Folklore Analyst',
        realmBadge: '🦇',
        sealColor: '#06B6D4',
        loreQuote: 'You understand that every legendary monster has roots in natural biology and chemistry.'
      };
    }
    return {
      title: 'Apprentice Cryptid Sleuth',
      rank: 'Lantern Bearer',
      realmBadge: '🏮',
      sealColor: '#64748B',
      loreQuote: 'The first candle has been lit in the dark halls of medieval and Victorian history.'
    };
  }

  // Hybrid Mode
  if (accuracy >= 85 && maxStreak >= 5) {
    return {
      title: 'Keeper of the Dual Gates',
      rank: 'Sovereign of Remembrance & Truth',
      realmBadge: '⚖️',
      sealColor: '#F59E0B',
      loreQuote: 'You harmoniously honor the memory of ancestors while wielding the sharp light of natural science.'
    };
  }
  if (accuracy >= 65) {
    return {
      title: 'Bridgewalker of Shadows & Petals',
      rank: 'Dual-World Scholar',
      realmBadge: '🌓',
      sealColor: '#A855F7',
      loreQuote: 'Equally versed in the solemn warmth of the ofrenda and the nocturnal riddles of Samhain.'
    };
  }
  return {
    title: 'Liminal Wanderer',
    rank: 'Seeker of Dual Traditions',
    realmBadge: '🍂',
    sealColor: '#EA580C',
    loreQuote: 'Walking the misty threshold between autumn harvest folklore and ancestral reverence.'
  };
}
