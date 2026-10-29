import { TriviaQuestion } from '../types';

export const TRIVIA_BANK: TriviaQuestion[] = [
  // ==========================================
  // DÍA DE LOS MUERTOS - MULTIPLE CHOICE (16 questions)
  // ==========================================
  {
    id: 'dlm-mc-1',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Mesoamerican Cosmology',
    badgeIcon: 'flower',
    question: 'In Aztec/Nahua belief, what was the primary name of the nine-level underworld through which departed souls journeyed?',
    options: ['Mictlán', 'Aztlán', 'Tenochtitlan', 'Xibalba'],
    correctAnswer: 'Mictlán',
    explanation: 'Mictlán is the Aztec underworld governed by Mictlantecuhtli and his consort Mictecacihuatl. The soul had to navigate nine hazardous trials over four years to reach peaceful rest.',
    sourceOrContext: 'Florentine Codex, Book III'
  },
  {
    id: 'dlm-mc-2',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Ofrenda Elements',
    badgeIcon: 'flame',
    question: 'Why is a shallow dish of salt always placed on a traditional Día de los Muertos ofrenda (altar)?',
    options: [
      'To season the pan de muerto',
      'To purify the soul and prevent spiritual corruption',
      'To repel insects and pests',
      'To symbolize the salty waters of the ocean'
    ],
    correctAnswer: 'To purify the soul and prevent spiritual corruption',
    explanation: 'Salt is an elemental purifier. In traditional altar design, it purifies the soul during its long travel between realms so that the spirit remains intact for its return the following year.',
    sourceOrContext: 'National Museum of the American Indian'
  },
  {
    id: 'dlm-mc-3',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Botanical Heritage',
    badgeIcon: 'flower',
    question: 'What is the Nahuatl botanical name and literal translation of the cempasúchil (marigold)?',
    options: [
      'Cempohualxochitl ("twenty flowers")',
      'Xochimilco ("field of blossoms")',
      'Ahuehuete ("old tree of water")',
      'Copalli ("sacred resin")'
    ],
    correctAnswer: 'Cempohualxochitl ("twenty flowers")',
    explanation: 'In Nahuatl, "cempoalli" means twenty and "xochitl" means flower ("twenty flowers" or "flower of many petals"). Its intense orange hue and pungent aroma are believed to guide visiting souls home.',
    sourceOrContext: 'CONACULTA & Indigenous Mexican Ethnobotany'
  },
  {
    id: 'dlm-mc-4',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Art & Satire',
    badgeIcon: 'palette',
    question: 'Who created the original zinc etching of the elegant skeleton "La Calavera Garbancera" around 1910?',
    options: [
      'José Guadalupe Posada',
      'Diego Rivera',
      'Frida Kahlo',
      'David Alfaro Siqueiros'
    ],
    correctAnswer: 'José Guadalupe Posada',
    explanation: 'Printmaker José Guadalupe Posada created "La Calavera Garbancera" as a satirical cartoon mocking indigenous Mexicans who abandoned their roots to dress in lavish French-style European hats. Diego Rivera later painted her full body and named her "La Catrina".',
    sourceOrContext: 'Museo José Guadalupe Posada, Aguascalientes'
  },
  {
    id: 'dlm-mc-5',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Culinary Traditions',
    badgeIcon: 'sparkles',
    question: 'What do the four raised dough strips across the dome of traditional Pan de Muerto represent?',
    options: [
      'Human bones (canillas) pointing in the 4 cardinal directions',
      'Four seasons of the agricultural year',
      'The four tiers of the Aztec empire',
      'Four ancestral family generations'
    ],
    correctAnswer: 'Human bones (canillas) pointing in the 4 cardinal directions',
    explanation: 'The crossed strips of dough are called "canillas" (bones), and the small central sphere represents the skull or teardrops shed for the deceased. The cross pattern also aligns with the 4 sacred cardinal directions.',
    sourceOrContext: 'Larousse Gastronomía Mexicana'
  },
  {
    id: 'dlm-mc-6',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Fauna & Spirit Guides',
    badgeIcon: 'paw',
    question: 'Which ancient canine breed was believed to guide deceased souls safely across the underworld river Apanohuacalhuia?',
    options: ['Xoloitzcuintli', 'Chihuahua', 'Perro Pastoreador', 'Coyote'],
    correctAnswer: 'Xoloitzcuintli',
    explanation: 'The sacred hairless Xoloitzcuintli was considered the companion of the god Xolotl. Legend stated you had to be kind to dogs in life, or no Xolo would agree to ferry your spirit across the deep underworld waters on its back.',
    sourceOrContext: 'Mesoamerican Zooarchaeology & Nahua Lore'
  },
  {
    id: 'dlm-mc-7',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Poetry & Literature',
    badgeIcon: 'book-open',
    question: 'What are "Calaveritas Literarias" written during the holiday season?',
    options: [
      'Playful, satirical rhyming verses teasing living people about death',
      'Solemn funeral elegies recited exclusively at graveyards',
      'Ancient Nahuatl prayers carved on gravestones',
      'Ingredient lists written inside bakeries for sugar skull molds'
    ],
    correctAnswer: 'Playful, satirical rhyming verses teasing living people about death',
    explanation: 'Calaveritas literarias are witty, humorous mock-epitaphs written in 4-line stanzas (redondillas). They affectionately roast politicians, friends, and family by imagining how "La Muerte" playfully steals them away from daily habits.',
    sourceOrContext: 'Mexican Folk Literature Archives'
  },
  {
    id: 'dlm-mc-8',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Altar Architecture',
    badgeIcon: 'layers',
    question: 'In a complete seven-tiered ofrenda, what does the seven-step structure symbolically represent?',
    options: [
      'The steps required for a soul to traverse the underworld to eternal peace',
      'The seven days of the week',
      'The seven archangels of the Spanish renaissance',
      'The seven mountains surrounding the Valley of Mexico'
    ],
    correctAnswer: 'The steps required for a soul to traverse the underworld to eternal peace',
    explanation: 'Seven-tier altars are the most elaborate type, representing the seven spiritual levels the soul must cross to reach Mictlán or heaven, as well as the 7 deadly sins in post-contact Catholic syncretism.',
    sourceOrContext: 'INAH (Instituto Nacional de Antropología e Historia)'
  },
  {
    id: 'dlm-mc-9',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Sensory Rituals',
    badgeIcon: 'wind',
    question: 'What natural tree resin is burned in censers on ofrendas to cleanse the space and elevate prayers?',
    options: ['Copal resin', 'Pine sap', 'Frankincense', 'Eucalyptus gum'],
    correctAnswer: 'Copal resin',
    explanation: 'Copal resin (from the Bursera tree) has been burned in Mesoamerica since pre-Columbian times. Its aromatic white smoke is believed to purify the physical surroundings and carry petitions up to the spirit realm.',
    sourceOrContext: 'INAH Ethnobotanical Records'
  },
  {
    id: 'dlm-mc-10',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Decorative Arts',
    badgeIcon: 'sparkles',
    question: 'Which of the four classical elements of nature is symbolized on the altar by delicate, perforated Papel Picado?',
    options: ['Wind (Air)', 'Fire', 'Water', 'Earth'],
    correctAnswer: 'Wind (Air)',
    explanation: 'The four classical elements are present on every altar: Earth (bread and crops), Water (a full cup), Fire (candles), and Wind (lightweight papel picado whose fluttering signals the presence of arriving spirits).',
    sourceOrContext: 'Smithsonian Center for Folklife and Cultural Heritage'
  },
  {
    id: 'dlm-mc-11',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Altar Architecture',
    badgeIcon: 'flower',
    question: 'What is the symbolic meaning of the flower arch (arco de flores) erected at the top of an ofrenda?',
    options: [
      'The portal and gateway between the realm of the dead and the living',
      'The rainbow following summer rains in the mountains',
      'The architectural dome of Spanish colonial churches',
      'The circular cycle of the agricultural maize harvest'
    ],
    correctAnswer: 'The portal and gateway between the realm of the dead and the living',
    explanation: 'The floral arch placed at the top tier represents the celestial doorway welcoming visiting ancestors into the home. It is traditionally crafted from reed cane, cempasúchil flowers, and cypress greenery.',
    sourceOrContext: 'Mexican Cultural Heritage Institute'
  },
  {
    id: 'dlm-mc-12',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Nahua Cosmology',
    badgeIcon: 'sun',
    question: 'In Aztec belief, fallen warriors and women who died in childbirth journeyed to which radiant afterlife rather than Mictlán?',
    options: [
      'Ilhuicatl-Tonatiuh (The Sun’s Domain)',
      'Tlalocan (Domain of the Rain God)',
      'Chichihuacuauhco (Domain of the Nurse Tree)',
      'Aztlán (The Ancestral Homeland)'
    ],
    correctAnswer: 'Ilhuicatl-Tonatiuh (The Sun’s Domain)',
    explanation: 'In Nahua cosmology, your destination depended on how you died rather than how you lived. Fallen warriors accompanied the sun from dawn to zenith, and revered women (Cihuateteo) accompanied the sun from noon to sunset before transforming into hummingbirds.',
    sourceOrContext: 'Bernardino de Sahagún, General History of the Things of New Spain'
  },
  {
    id: 'dlm-mc-13',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Culinary Heritage',
    badgeIcon: 'coffee',
    question: 'What thick, warm indigenous beverage prepared with toasted corn masa, chocolate, and spices is traditionally served alongside Pan de Muerto?',
    options: ['Champurrado', 'Horchata', 'Tepache', 'Agua de Jamaica'],
    correctAnswer: 'Champurrado',
    explanation: 'Champurrado is an ancient Mesoamerican chocolate atole thickened with nixtamalized corn dough (masa), cinnamon, and piloncillo. Its comforting warmth sustains families during chilly graveyard vigils.',
    sourceOrContext: 'Traditional Mexican Culinary Institute'
  },
  {
    id: 'dlm-mc-14',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Regional Traditions',
    badgeIcon: 'map-pin',
    question: 'Which Mexican state is globally famous for the nocturnal candlelit cemetery vigil on the island of Janitzio in Lake Pátzcuaro?',
    options: ['Michoacán', 'Jalisco', 'Sonora', 'Yucatán'],
    correctAnswer: 'Michoacán',
    explanation: 'The Purepecha community of Lake Pátzcuaro in Michoacán celebrates one of the world\'s most breathtaking vigils. Families cross the dark water in canoes adorned with torches to tend candlelit graves throughout the night.',
    sourceOrContext: 'Michoacán Secretariat of Tourism'
  },
  {
    id: 'dlm-mc-15',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Ceremonial Utensils',
    badgeIcon: 'flame',
    question: 'What is the traditional Nahuatl term for the pedestal clay incense burner used to burn copal on altars?',
    options: ['Popochcomitl', 'Metate', 'Molcajete', 'Comal'],
    correctAnswer: 'Popochcomitl',
    explanation: 'Popochcomitl ("smoking pot") is the ceremonial clay burner with an open cup and handle used since pre-Columbian times to smudge copal smoke toward the four cardinal directions.',
    sourceOrContext: 'National Institute of Anthropology and History (INAH)'
  },
  {
    id: 'dlm-mc-16',
    realm: 'dia_de_los_muertos',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Ritual Traditions',
    badgeIcon: 'flower',
    question: 'What is the purpose of laying a golden path of cempasúchil petals (camino de flores) from the home entrance to the altar?',
    options: [
      'To guide visiting spirits directly to their offerings with scent and color',
      'To prevent wandering evil spirits from crossing the threshold',
      'To catch wax drippings from ceremonial torches',
      'To serve as a soft carpet for visiting relatives'
    ],
    correctAnswer: 'To guide visiting spirits directly to their offerings with scent and color',
    explanation: 'The trail of orange petals provides a fragrant, vibrant runway ensuring the visiting souls do not lose their way between the spirit realm and the family ofrenda.',
    sourceOrContext: 'Smithsonian Folklife Studies'
  },

  // ==========================================
  // DÍA DE LOS MUERTOS - MYTH VS FACT (10 questions)
  // ==========================================
  {
    id: 'dlm-mf-1',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Cultural Identity',
    badgeIcon: 'shield-alert',
    question: 'Día de los Muertos is simply "the Mexican version of Halloween" that originated from Celtic traditions.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Día de los Muertos has profound indigenous Mesoamerican roots dating back over 3,000 years to Aztec, Maya, and Purepecha harvest rites honoring ancestors, entirely separate from Celtic Samhain.',
    sourceOrContext: 'UNESCO Intangible Cultural Heritage Designation'
  },
  {
    id: 'dlm-mf-2',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Symbolism & Philosophy',
    badgeIcon: 'smile',
    question: 'In Mexican tradition, decorative skulls (calaveras) are intended to evoke terror, fright, and dark doom.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Calaveras are colorful, smiling, and whimsical! In Mexican cosmology, they represent the eternal cycle of existence and remind us to celebrate life rather than fear mortality.',
    sourceOrContext: 'Museo Nacional de las Culturas del Mundo'
  },
  {
    id: 'dlm-mf-3',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Craft Origins',
    badgeIcon: 'sparkles',
    question: 'Decorative sugar skulls (calaveritas de azúcar) originated because Italian missionaries introduced sugar-paste art (alfeñique) in the 17th century.',
    correctAnswer: true, // FACT
    explanation: 'FACT: While Mesoamericans used amaranth and honey sculptures for altars, European missionaries brought sugar cane art. Mexican artisans adapted this into affordable, vibrantly iced skulls bearing the names of departed loved ones.',
    sourceOrContext: 'History of Alfeñique in Toluca'
  },
  {
    id: 'dlm-mf-4',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Festive Calendar',
    badgeIcon: 'calendar',
    question: 'November 1st is traditionally dedicated to remembering deceased children (Día de los Angelitos), while November 2nd honors adult souls.',
    correctAnswer: true, // FACT
    explanation: 'FACT: November 1st (All Saints Day) is known as "Día de los Inocentes" or "Día de los Angelitos" for infants and children, welcomed with sweets and milk. November 2nd (All Souls Day) welcomes departed adult relatives.',
    sourceOrContext: 'National Geographic Heritage Archives'
  },
  {
    id: 'dlm-mf-5',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Altar Practice',
    badgeIcon: 'coffee',
    question: 'It is considered taboo or offensive to place favorite alcoholic drinks, cigars, or pungent spicy foods on an ofrenda.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Families specifically place the departed person\'s absolute favorite dishes, tequila, mezcal, coffee, or even hobbies (guitars, dominoes) on the altar so their spirit feels uniquely welcomed and cherished.',
    sourceOrContext: 'Oaxaca Cultural Traditions Survey'
  },
  {
    id: 'dlm-mf-6',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'spooky',
    category: 'Global Recognition',
    badgeIcon: 'globe',
    question: 'UNESCO inscribed the Indigenous Festivity dedicated to the Dead on the Representative List of the Intangible Cultural Heritage of Humanity in 2008.',
    correctAnswer: true, // FACT
    explanation: 'FACT: UNESCO recognized this celebration as a profound human cultural masterpiece that unites living community members with the collective memory of their forebears.',
    sourceOrContext: 'UNESCO Inscription 00054'
  },
  {
    id: 'dlm-mf-7',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Altar Symbolism',
    badgeIcon: 'eye',
    question: 'A small mirror is often placed on an ofrenda so the departed spirits can see themselves in the world of the living.',
    correctAnswer: true, // FACT
    explanation: 'FACT: In traditional syncretic altar craft, a mirror is placed near the top tier reflecting both the memory of the dead and deflecting ill intent, allowing spirits to see their continuing presence.',
    sourceOrContext: 'Cultural Anthropology of Mexican Altars'
  },
  {
    id: 'dlm-mf-8',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Art History',
    badgeIcon: 'palette',
    question: 'Diego Rivera gave Posada’s Calavera Garbancera her famous full body and feathered serpent boa, christening her "La Catrina" in 1947.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Posada only ever etched her as a bust wearing a fancy hat. Diego Rivera depicted her in full Victorian finery with a Quetzalcoatl feather boa in his masterwork mural "Dream of a Sunday Afternoon in the Alameda Central".',
    sourceOrContext: 'Museo Mural Diego Rivera, Mexico City'
  },
  {
    id: 'dlm-mf-9',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'spooky',
    category: 'Archaeology & Burial Rites',
    badgeIcon: 'sparkles',
    question: 'Pre-Columbian Mesoamericans frequently placed a jade bead in the mouth of the deceased to represent their eternal soul.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Aztec and Mayan burials placed a green jade bead (chalchihuitl) in the mouth. It stood as a symbolic heart and provided the soul with spiritual currency to purchase safe passage across Mictlán.',
    sourceOrContext: 'Archaeological Excavations of the Templo Mayor'
  },
  {
    id: 'dlm-mf-10',
    realm: 'dia_de_los_muertos',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Cemetery Culture',
    badgeIcon: 'heart-pulse',
    question: 'Cleaning and decorating ancestral graves in Mexico is traditionally a sorrowful, silent mourning ritual with strict prohibition against laughter.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Graveyard vigils (velaciones) are lively, communal celebrations! Mariachi bands play, families share warm food and mezcal, children run playfully among marigolds, and fond stories are told well past midnight.',
    sourceOrContext: 'INAH Ethnographic Survey'
  },

  // ==========================================
  // HALLOWEEN SCIENCE & GOTHIC LORE - MULTIPLE CHOICE (16 questions)
  // ==========================================
  {
    id: 'hw-mc-1',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Celtic History',
    badgeIcon: 'calendar',
    question: 'What was the ancient Celtic festival held on November 1st that marked the end of harvest and the onset of winter?',
    options: ['Samhain', 'Beltane', 'Imbolc', 'Lughnasadh'],
    correctAnswer: 'Samhain',
    explanation: 'Samhain (pronounced "SAH-win" or "SOW-in") marked the transition from the light half to the dark half of the year. Celts believed the boundary between the living and spirit worlds was thinnest on this night.',
    sourceOrContext: 'Celtic Folklore & Irish Archaeological Record'
  },
  {
    id: 'hw-mc-2',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Jack-o\'-Lantern Lore',
    badgeIcon: 'sparkles',
    question: 'Before pumpkins became popular in North America, what root vegetables did people in Ireland and the Scottish Highlands carve with faces?',
    options: ['Turnips and rutabagas', 'Potatoes and yams', 'Carrots and parsnips', 'Beets and radishes'],
    correctAnswer: 'Turnips and rutabagas',
    explanation: 'Irish folklore tells of "Stingy Jack," who wandered with a hollowed-out turnip containing an ember. European immigrants to the Americas discovered native pumpkins were far larger, softer, and much easier to carve.',
    sourceOrContext: 'National Museum of Ireland - Country Life'
  },
  {
    id: 'hw-mc-3',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Optical Physics',
    badgeIcon: 'zap',
    question: 'What classic 1862 optical illusion technique uses a hidden room, bright lights, and a sheet of glass angled at 45 degrees to project ghosts?',
    options: ['Pepper\'s Ghost', 'Camera Obscura', 'Thaumatrope', 'Phantasmagoria Magic Lantern'],
    correctAnswer: 'Pepper\'s Ghost',
    explanation: 'Popularized by scientist John Henry Pepper, this technique relies on partial reflection and transmission. A hidden actor in a recessed pit is brightly lit; their specular reflection is mirrored on angled glass, looking like a see-through floating phantom.',
    sourceOrContext: 'Royal Polytechnic Institution Lectures (1863)'
  },
  {
    id: 'hw-mc-4',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Nocturnal Biology',
    badgeIcon: 'feather',
    question: 'What is the reflective layer of tissue located directly behind the retina in cats, owls, and nocturnal predators called?',
    options: ['Tapetum lucidum', 'Fovea centralis', 'Cornea reflexa', 'Choroid specularis'],
    correctAnswer: 'Tapetum lucidum',
    explanation: 'The tapetum lucidum ("shining carpet" in Latin) acts like a biological mirror behind the retina. It bounces unabsorbed photons back through the photoreceptors a second time, giving nocturnal hunters acute night vision and glowing "eyeshine".',
    sourceOrContext: 'Comparative Ocular Physiology'
  },
  {
    id: 'hw-mc-5',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Medical History',
    badgeIcon: 'flask-conical',
    question: 'Which genetic and biochemical blood disorder causes severe sunlight sensitivity, pale skin, and gum recession that historically contributed to vampire myths?',
    options: ['Porphyria', 'Hemophilia', 'Anemia perniciosa', 'Scurvy'],
    correctAnswer: 'Porphyria',
    explanation: 'Cutaneous porphyrias cause buildup of porphyrins that react destructively with UV light, causing disfiguring skin blisters in sunlight, pale complexions, and tightened facial skin that exposes teeth, inspiring medieval vampire folklore.',
    sourceOrContext: 'British Medical Journal Historical Review'
  },
  {
    id: 'hw-mc-6',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Toxicology & Hysteria',
    badgeIcon: 'wheat',
    question: 'Which rye crop fungus containing ergotamine (a natural lysergic compound) is hypothesized by historians to have caused hallucinations in the 1692 Salem Witch Trials?',
    options: ['Claviceps purpurea (Ergot)', 'Aspergillus flavus', 'Amanita muscaria', 'Botrytis cinerea'],
    correctAnswer: 'Claviceps purpurea (Ergot)',
    explanation: 'In wet springs, the fungus Claviceps purpurea infects rye crops. Ingesting ergot-tainted flour causes ergotism ("St. Anthony\'s Fire"), characterized by violent tremors, phantom sensations of being pinched, delirium, and visual hallucinations.',
    sourceOrContext: 'Linnda Caporael, Science (1976)'
  },
  {
    id: 'hw-mc-7',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Bat Conservation',
    badgeIcon: 'heart-pulse',
    question: 'Out of roughly 1,400 bat species known worldwide, how many feed exclusively on blood?',
    options: ['Only 3 species', 'Around 150 species', 'Over 400 species', 'None; it is completely fictitious'],
    correctAnswer: 'Only 3 species',
    explanation: 'Only three species (the Common, Hairy-legged, and White-winged vampire bats) feed on blood, primarily targeting sleeping birds and livestock in Central and South America. The remaining 99.8% eat insects, fruit, and nectar—pollinating essential crops like agave and bananas!',
    sourceOrContext: 'Bat Conservation International'
  },
  {
    id: 'hw-mc-8',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Food Chemistry',
    badgeIcon: 'sparkles',
    question: 'What yellow-orange carotenoid pigment gives pumpkins their bright autumn color and acts as a powerful provitamin antioxidant?',
    options: ['Beta-carotene', 'Chlorophyll-B', 'Anthocyanin', 'Lycopene'],
    correctAnswer: 'Beta-carotene',
    explanation: 'Pumpkins are packed with beta-carotene, which the human body converts into Vitamin A for eye health and immune support. Once carved, oxygen exposure breaks down this protective matrix, accelerating fungal mold growth.',
    sourceOrContext: 'USDA Agricultural Research Service'
  },
  {
    id: 'hw-mc-9',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Natural Wonders',
    badgeIcon: 'sun',
    question: 'What is the biochemical process that causes Jack-o\'-Lantern mushrooms (Omphalotus illudens) to glow eerie green in dark woods?',
    options: [
      'Bioluminescence via luciferin and luciferase',
      'Reflected moonlight stored in spores',
      'Radioactive decay of isotopes in the soil',
      'Phosphorescent dust from nocturnal beetles'
    ],
    correctAnswer: 'Bioluminescence via luciferin and luciferase',
    explanation: 'Jack-o\'-Lantern mushrooms produce an enzymatic chemical reaction between luciferin and the enzyme luciferase in their gills, creating an eerie greenish bioluminescent glow (known historically as foxfire) to attract spore-dispersing insects at night.',
    sourceOrContext: 'Mycological Society of America'
  },
  {
    id: 'hw-mc-10',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Acoustics & Fear',
    badgeIcon: 'volume-2',
    question: 'What acoustic phenomenon creates the auditory illusion of a sound pitch that seems to descend (or ascend) infinitely, frequently used in horror soundtracks?',
    options: ['Shepard Tone', 'Doppler Effect', 'Helmholtz Resonance', 'Binaural Beat'],
    correctAnswer: 'Shepard Tone',
    explanation: 'A Shepard tone layers multiple sine waves an octave apart that fade in and out as they slide in pitch. This tricks the human brain into perceiving perpetual descent or rising tension, triggering instinctive suspense and anxiety in scary films.',
    sourceOrContext: 'Journal of the Acoustical Society of America'
  },
  {
    id: 'hw-mc-11',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Etymology & History',
    badgeIcon: 'book-open',
    question: 'What is the linguistic origin of the word "Halloween"?',
    options: [
      'A contraction of "All Hallows\' Eve" (the evening before All Saints\' Day)',
      'The "Hollow Winds" described in Scottish border ballads',
      'An ancient Roman harvest deity named Hallowa',
      'The Old Norse greeting for returning winter fishermen'
    ],
    correctAnswer: 'A contraction of "All Hallows\' Eve" (the evening before All Saints\' Day)',
    explanation: 'In Middle English, "Hallow" meant saint or holy person. November 1st was All Hallows\' Day (All Saints), making October 31st "All Hallows\' Even," which was eventually shortened to "Halloween".',
    sourceOrContext: 'Oxford English Dictionary Etymology'
  },
  {
    id: 'hw-mc-12',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Nocturnal Biology',
    badgeIcon: 'feather',
    question: 'How do the unique facial disc feathers of barn owls assist them in hunting mice in total darkness?',
    options: [
      'They act as a parabolic acoustic reflector funneling faint rustles to their ears',
      'They emit faint ultrasonic clicks to disorient prey',
      'They act as thermal sensors detecting body heat',
      'They glow with invisible UV light to reveal rodent urine trails'
    ],
    correctAnswer: 'They act as a parabolic acoustic reflector funneling faint rustles to their ears',
    explanation: 'The stiff, dense feathers of a barn owl\'s heart-shaped facial disc function exactly like a satellite dish, focusing sound waves into the ears so precisely that they can capture voles beneath two feet of snow by sound alone.',
    sourceOrContext: 'Cornell Lab of Ornithology'
  },
  {
    id: 'hw-mc-13',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Victorian Forensic Science',
    badgeIcon: 'flask-conical',
    question: 'Which toxic compound in Victorian emerald-green wallpapers produced deadly arsenic vapors that made homes feel sickly and "haunted"?',
    options: ['Copper acetoarsenite (Paris Green)', 'Lead carbonate', 'Mercury fulminate', 'White phosphorus'],
    correctAnswer: 'Copper acetoarsenite (Paris Green)',
    explanation: 'Vibrant Victorian green wallpapers were colored with copper acetoarsenite. In damp rooms, molds metabolized the dye into deadly trimethylarsine gas, causing headaches, delusions, nausea, and deaths attributed to ghostly curses.',
    sourceOrContext: 'Bitten by Witch Fever: Arsenic in the Victorian Home (National Archives UK)'
  },
  {
    id: 'hw-mc-14',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Atmospheric Chemistry',
    badgeIcon: 'zap',
    question: 'What causes the eerie flickering marsh lights known historically as "Will-o\'-the-Wisp" (Ignis Fatuus)?',
    options: [
      'Spontaneous combustion of phosphine and methane from decaying plant matter',
      'Massed clouds of bioluminescent marsh fireflies',
      'Static discharges created by wind blowing across peat moss',
      'Phosphorescent radon gas seeping through bog water'
    ],
    correctAnswer: 'Spontaneous combustion of phosphine and methane from decaying plant matter',
    explanation: 'Anaerobic bacteria decomposing organic matter at the bottom of bogs produce methane and small amounts of diphosphane (P2H4) and phosphine (PH3), which spontaneously ignite upon contact with air, creating ghostly dancing flames.',
    sourceOrContext: 'Geochemical Journal on Wetland Combustion'
  },
  {
    id: 'hw-mc-15',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Historical Psychiatry',
    badgeIcon: 'shield-alert',
    question: 'What is the clinical psychiatric term for the rare psychological condition where an individual genuinely believes they have physically transformed into an animal?',
    options: ['Clinical lycanthropy', 'Cotard\'s syndrome', 'Capgras delusion', 'Dissociative fugue'],
    correctAnswer: 'Clinical lycanthropy',
    explanation: 'Clinical lycanthropy is a documented psychiatric syndrome where a patient suffers from the delusional belief that they are transforming into a wolf or wild beast, historically explaining many accused werewolf cases.',
    sourceOrContext: 'Journal of the History of the Neurosciences'
  },
  {
    id: 'hw-mc-16',
    realm: 'halloween_science',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Plant Biochemistry',
    badgeIcon: 'leaf',
    question: 'Why do deciduous tree leaves turn vibrant red, yellow, and orange in the autumn?',
    options: [
      'Chlorophyll breaks down as daylight wanes, revealing carotenoids and anthocyanins',
      'Autumn frosts stain the exterior waxy cuticle of the leaf',
      'Trees pump excess iron and copper salts into dying foliage',
      'Leaves absorb extra ultraviolet rays during harvest full moons'
    ],
    correctAnswer: 'Chlorophyll breaks down as daylight wanes, revealing carotenoids and anthocyanins',
    explanation: 'As days grow shorter, trees cease producing green chlorophyll. As existing chlorophyll degrades, yellow and orange carotenoids already present are unveiled, and sunny autumn days trigger production of red anthocyanins.',
    sourceOrContext: 'Harvard Forest Ecological Research'
  },

  // ==========================================
  // HALLOWEEN SCIENCE & GOTHIC LORE - MYTH VS FACT (10 questions)
  // ==========================================
  {
    id: 'hw-mf-1',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Sensory Ecology',
    badgeIcon: 'eye-off',
    question: 'Bats are completely blind and rely entirely on sound echolocation to fly in pitch-black caves.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Bats have functional eyes with rod and cone receptors! While insect-hunting bats use high-frequency ultrasound echolocation for precision hunting, many fruit bats rely primarily on vision and sense of smell to forage at twilight.',
    sourceOrContext: 'Smithsonian Tropical Research Institute'
  },
  {
    id: 'hw-mf-2',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Animal Folklore',
    badgeIcon: 'cat',
    question: 'In ancient Celtic folklore, black cats were seen as supernatural familiars of evil witches who brought bad luck.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: In ancient Celtic and Norse traditions, cats were revered protectors who hunted rodents in grain stores. Freya\'s chariot was pulled by cats, and in Scotland, a strange black cat arriving at the porch was believed to herald prosperity.',
    sourceOrContext: 'Oxford Companion to World Mythology'
  },
  {
    id: 'hw-mf-3',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Spooky Botany',
    badgeIcon: 'leaf',
    question: 'The famous "Bleeding Tooth Fungus" (Hydnellum peckii) oozes bright red droplets that contain the natural anticoagulant compound atromentin.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Through a biological process called guttation, this bizarre mushroom exudes thick, scarlet droplets containing atromentin, an anticoagulant chemically similar to pharmaceutical heparin.',
    sourceOrContext: 'Biochemical Systematics and Ecology'
  },
  {
    id: 'hw-mf-4',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Gothic Literature',
    badgeIcon: 'book-open',
    question: 'Mary Shelley conceived the idea for "Frankenstein" during the cold, stormy 1816 "Year Without a Summer" caused by the Mount Tambora volcanic eruption.',
    correctAnswer: true, // FACT
    explanation: 'FACT: In 1816, the massive volcanic eruption of Indonesia\'s Mount Tambora blocked sunlight worldwide, creating catastrophic cold and non-stop storms in Lake Geneva, where Mary Shelley was challenged to write a ghost story by Lord Byron.',
    sourceOrContext: 'Shelley\'s 1831 Introduction to Frankenstein'
  },
  {
    id: 'hw-mf-5',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Arachnid Biology',
    badgeIcon: 'shield-alert',
    question: 'Daddy longlegs (Harvestmen) possess the deadliest and most venomous bite on Earth, but their fangs are too small to pierce human skin.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Harvestmen (Opiliones) don\'t even have venom glands or fangs! They are harmless scavengers that feed on decomposing plant matter and tiny aphids, completely devoid of toxic venom.',
    sourceOrContext: 'University of California Riverside Department of Entomology'
  },
  {
    id: 'hw-mf-6',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Kitchen Preservation',
    badgeIcon: 'flask-conical',
    question: 'Soaking a freshly carved pumpkin in a diluted vinegar or peppermint bath inhibits mold formation and prolongs its structural life.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Dilute acetic acid (vinegar) or peppermint oil creates an antifungal surface environment that inhibits the spores of Botrytis mold from devouring the pumpkin\'s moist flesh.',
    sourceOrContext: 'Cornell University Cooperative Extension'
  },
  {
    id: 'hw-mf-7',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Folklore & Games',
    badgeIcon: 'apple',
    question: 'The traditional party game of bobbing for apples originated as an ancient Roman festival honoring Pomona, goddess of orchards and fruit trees.',
    correctAnswer: true, // FACT
    explanation: 'FACT: When Romans conquered Britain, they blended their harvest festival for Pomona with Celtic Samhain. Apples were regarded as sacred symbols of fertility and romance, used in autumn matchmaking games.',
    sourceOrContext: 'Encyclopedia of Religion and Nature'
  },
  {
    id: 'hw-mf-8',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Arachnid Biology',
    badgeIcon: 'shield-alert',
    question: 'Female black widow spiders always eat their male partners immediately after mating.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Sexual cannibalism is actually rare in wild black widow populations. It was originally documented in cramped laboratory enclosures where males were physically trapped with nowhere to escape.',
    sourceOrContext: 'Animal Behaviour Journal & Arachnological Society'
  },
  {
    id: 'hw-mf-9',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'spooky',
    category: 'Environmental Toxicology',
    badgeIcon: 'wind',
    question: 'Slow, low-level carbon monoxide leaks from old furnaces can trigger auditory hallucinations, paranoia, and the eerie feeling of being watched.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Mild carbon monoxide poisoning induces hypoxia in brain tissue, creating profound dread, visual anomalies, and unexplained sounds. A famous 1921 medical paper by ophthalmologist Dr. William Wilmer proved a "haunted" manor was simply leaking furnace gas.',
    sourceOrContext: 'American Journal of Ophthalmology (1921)'
  },
  {
    id: 'hw-mf-10',
    realm: 'halloween_science',
    format: 'myth_vs_fact',
    difficulty: 'spooky',
    category: 'Medical Pharmacology',
    badgeIcon: 'heart-pulse',
    question: 'Vampire bat saliva contains a unique anticoagulant enzyme named "Draculin" that scientists are studying to treat human strokes.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Draculin is a protein in common vampire bat saliva that inhibits coagulation factors IXa and X without causing sudden hemorrhaging, making it a promising candidate for breaking up blood clots in stroke and heart attack patients.',
    sourceOrContext: 'Haemostasis Journal & Stroke Pharmacology Studies'
  },

  // ==========================================
  // HYBRID / CROSS-TRADITION (8 questions)
  // ==========================================
  {
    id: 'hyb-mc-1',
    realm: 'hybrid',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Seasonal Transitions',
    badgeIcon: 'compass',
    question: 'Both Celtic Samhain and Mesoamerican harvest festivals occur around late October/early November because they align with which astronomical event?',
    options: [
      'The astronomical cross-quarter day midway between autumnal equinox and winter solstice',
      'The annual perihelion of the Earth',
      'The highest conjunction of Jupiter and Mars',
      'The lunar apogee during harvest'
    ],
    correctAnswer: 'The astronomical cross-quarter day midway between autumnal equinox and winter solstice',
    explanation: 'Both cultures recognized this threshold as a "cross-quarter day" (approx. 45 days after the equinox), marking the decisive tilt into winter shadows and the end of agricultural abundance.',
    sourceOrContext: 'Archaeoastronomy of Northern and Mesoamerican Cultures'
  },
  {
    id: 'hyb-mc-2',
    realm: 'hybrid',
    format: 'multiple_choice',
    difficulty: 'light',
    category: 'Sacred Insects',
    badgeIcon: 'sparkles',
    question: 'In Michoacán, Mexico, the millions of migrating Monarch butterflies that arrive each November are traditionally believed to be what?',
    options: [
      'The returning souls of departed ancestors visiting their families',
      'Messengers sent by rain deities',
      'Protectors warding off nocturnal frost',
      'Forest spirits guiding hummingbirds south'
    ],
    correctAnswer: 'The returning souls of departed ancestors visiting their families',
    explanation: 'The arrival of Monarch butterflies (*Danaus plexippus*) in the oyamel fir forests of Central Mexico coincides precisely with November 1st and 2nd. Mazahua and Purepecha folklore celebrates them as the spirits of ancestors returning for their annual feast.',
    sourceOrContext: 'World Wildlife Fund & Michoacán Cultural Heritage'
  },
  {
    id: 'hyb-mc-3',
    realm: 'hybrid',
    format: 'multiple_choice',
    difficulty: 'spooky',
    category: 'Pre-Columbian Lore',
    badgeIcon: 'shield-alert',
    question: 'In the Mayan epic Popol Vuh, the Hero Twins Hunahpu and Xbalanque must survive a night in which lethal underground chamber filled with predatory bats?',
    options: ['The Bat House (Zotzilaha / Camotz)', 'The Razor House', 'The Cold House', 'The Dark House'],
    correctAnswer: 'The Bat House (Zotzilaha / Camotz)',
    explanation: 'In the Popol Vuh, the lords of Xibalba test the twins in the Bat House, filled with snatching bats ruled by Camazotz (the bat deity). Hunahpu momentarily pokes his head out of his blowgun and is decapitated, setting up a thrilling mythic trick to win it back.',
    sourceOrContext: 'Popol Vuh: The Sacred Book of the Maya'
  },
  {
    id: 'hyb-mc-4',
    realm: 'hybrid',
    format: 'multiple_choice',
    difficulty: 'dark',
    category: 'Evolutionary Biology',
    badgeIcon: 'zap',
    question: 'What nocturnal sensory duel has evolved between hunting insectivorous bats and tiger moths over millions of years?',
    options: [
      'Tiger moths emit ultrasonic jamming clicks that disrupt bat echolocation',
      'Moths flash bright bioluminescent signals that blind bat eyes',
      'Bats detect moth body heat using infrared facial pits',
      'Moths release clouding aerosol spores that clog bat ears'
    ],
    correctAnswer: 'Tiger moths emit ultrasonic jamming clicks that disrupt bat echolocation',
    explanation: 'In an astonishing evolutionary arms race, tiger moths possess tymbal organs that fire high-frequency acoustic clicks. These clicks jam the bat\'s echolocation range-finding or warn them of the moth\'s unpalatable chemical toxins.',
    sourceOrContext: 'Science: Sonic Jamming in Bat-Moth Warfare'
  },
  {
    id: 'hyb-mf-1',
    realm: 'hybrid',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Global Memorials',
    badgeIcon: 'globe',
    question: 'Día de los Muertos and Celtic Samhain are the only two world traditions that feature ceremonial meals shared between the living and the dead.',
    correctAnswer: false, // MYTH
    explanation: 'MYTH: Ancestor banquets are universal! Japan celebrates Obon with lanterns and family feasts, China celebrates Qingming with tomb sweeping and food offerings, and ancient Romans celebrated Parentalia by dining at ancestral tombs.',
    sourceOrContext: 'Comparative Anthropology of Memorial Rites'
  },
  {
    id: 'hyb-mf-2',
    realm: 'hybrid',
    format: 'myth_vs_fact',
    difficulty: 'dark',
    category: 'Plant Ecology',
    badgeIcon: 'flower',
    question: 'Cempasúchil (Mexican marigold) roots naturally secrete compounds that repel parasitic nematodes and fungal pests from garden soil.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Tagetes erecta (marigold) roots exude alpha-terthienyl, a natural nematicide that protects companion crops like maize and squash from soil-borne parasites, proving their agricultural brilliance for centuries.',
    sourceOrContext: 'Journal of Chemical Ecology'
  },
  {
    id: 'hyb-mf-3',
    realm: 'hybrid',
    format: 'myth_vs_fact',
    difficulty: 'light',
    category: 'Comparative Rituals',
    badgeIcon: 'flame',
    question: 'Both Celtic Samhain and Mexican Día de los Muertos historically adopted hollowed-out gourds or candle lanterns to help guide wandering spirits through late autumn darkness.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Both traditions recognize fire and lanterns as elemental guides for souls traveling across the threshold between worlds during the turning of the agricultural seasons.',
    sourceOrContext: 'Oxford Comparative Folklore Studies'
  },
  {
    id: 'hyb-mf-4',
    realm: 'hybrid',
    format: 'myth_vs_fact',
    difficulty: 'spooky',
    category: 'Genetics & Zoology',
    badgeIcon: 'paw',
    question: 'The sacred Mesoamerican Xoloitzcuintli dog’s hairlessness is caused by a genetic mutation that also causes them to naturally lack certain premolar teeth.',
    correctAnswer: true, // FACT
    explanation: 'FACT: Canine ectodermal dysplasia in the FOXI3 gene causes both the characteristic absence of body hair and missing premolar teeth in Xoloitzcuintli, proving their ancient, distinct genetic lineage.',
    sourceOrContext: 'Science: Genome Sequencing of Ancient American Dog Breeds'
  }
];
