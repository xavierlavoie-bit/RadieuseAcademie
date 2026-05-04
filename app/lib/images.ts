/**
 * Centralized image catalog for the demo site.
 * All Unsplash photo IDs verified to return HTTP 200.
 * To swap a photo, replace the ID — keep the alt and the dimensions consistent.
 */

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const IMG = {
  hero: {
    src: u("1487412947147-5cebf100ffc2", 1400),
    alt: "Portrait éditorial — beauté radieuse",
  },
  catherineWorking: {
    src: u("1522337360788-8b13dee7a37e", 1200),
    alt: "Catherine appliquant un maquillage sur une cliente",
  },
  bridal: {
    src: u("1457972729786-0411a3b2b626", 1200),
    alt: "Maquillage de mariée signature",
  },
  evening: {
    src: u("1502323777036-f29e3972d82f", 1200),
    alt: "Maquillage glamour soirée",
  },
  coaching: {
    src: u("1560869713-7d0a29430803", 1200),
    alt: "Séance de coaching maquillage privée",
  },
  brushes: {
    src: u("1503236823255-94609f598e71", 1200),
    alt: "Pinceaux de maquillage professionnel",
  },
  cosmetics: {
    src: u("1596704017254-9b121068fb31", 1200),
    alt: "Cosmétiques haut de gamme",
  },
  flatlay: {
    src: u("1487530811176-3780de880c2d", 1200),
    alt: "Mise en place rose et or",
  },
  portrait1: {
    src: u("1522337094846-8a818192de1f", 900),
    alt: "Portrait éditorial doux",
  },
  portrait2: {
    src: u("1505944270255-72b8c68c6a70", 900),
    alt: "Portrait beauté naturelle",
  },
  portrait3: {
    src: u("1512496015851-a90fb38ba796", 900),
    alt: "Portrait glamour studio",
  },
  portrait4: {
    src: u("1606214174585-fe31582dc6ee", 900),
    alt: "Portrait look bohème",
  },
  portrait5: {
    src: u("1531746020798-e6953c6e8e04", 900),
    alt: "Portrait élégance moderne",
  },
  portrait6: {
    src: u("1620916566398-39f1143ab7be", 900),
    alt: "Portrait douceur signature",
  },
  // Additional thumbs for video lessons
  lesson1: {
    src: u("1556228720-195a672e8a03", 900),
    alt: "Leçon — yeux smoky",
  },
  lesson2: {
    src: u("1542838132-92c53300491e", 900),
    alt: "Leçon — teint lumineux",
  },
  lesson3: {
    src: u("1571781926291-c477ebfd024b", 900),
    alt: "Leçon — lèvres signature",
  },
  lesson4: {
    src: u("1567721913486-6585f069b332", 900),
    alt: "Leçon — sourcils architecturés",
  },
  lesson5: {
    src: u("1612817288484-6f916006741a", 900),
    alt: "Leçon — contouring",
  },
  lesson6: {
    src: u("1541101767792-f9b2b1c4f127", 900),
    alt: "Leçon — glamour soirée",
  },
  lesson7: {
    src: u("1594744803329-e58b31de8bf5", 900),
    alt: "Leçon — naturel",
  },
  lesson8: {
    src: u("1503342217505-b0a15ec3261c", 900),
    alt: "Leçon — éclat radieux",
  },
  lesson9: {
    src: u("1499952127939-9bbf5af6c51c", 900),
    alt: "Leçon — préparation peau",
  },
  lesson10: {
    src: u("1522335789203-aabd1fc54bc9", 900),
    alt: "Leçon — brossage technique",
  },
} as const;
