/* ── Projects ──────────────────────────────────────────────────────────────
   The /work page is grouped by CATEGORY_ORDER below, and inside each
   category the projects appear in the order they are listed here.

   PICTURES
   Each project's photos live in:
       src/assets/images/projects/<slug>/01.jpg, 02.jpg, 03.jpg …
   They load automatically in filename order — no code change needed.
   To add a picture: drop it in the folder with the next number.
   `cover` is the index of the photo used on the cards (0 = 01.jpg).

   ADDING A NEW PROJECT
   1. Create src/assets/images/projects/<your-slug>/ and put photos in it
   2. Add a `const x = load("<your-slug>")` line in the IMAGES block
   3. Add an entry below with the matching category
   ────────────────────────────────────────────────────────────────────────── */

/* Vite needs one static glob covering every project folder.
   The "!" lines exclude folders that are not live projects. */
const ALL = import.meta.glob(
  [
    "../assets/images/projects/*/*.jpg",
    "!../assets/images/projects/Project reference/**",
  ],
  { eager: true, import: "default" },
);

const load = (slug) => {
  const prefix = `../assets/images/projects/${slug}/`;
  return Object.keys(ALL)
    .filter((path) => path.startsWith(prefix))
    .sort()
    .map((path) => ALL[path]);
};

/* ── Category order on the /work page ── */
export const CATEGORY_ORDER = [
  "Residential",
  "Workplace",
  "Hospital",
  "Hospitality",
  "Retail",
  "Education",
];

/* ── IMAGES ── */
const theCrest = load("the-crest-yangon");
const yangon = load("yangon-condominium");
const mizumi = load("mizumi");
const decharin = load("decharin");
const mookdahan = load("mookdahan-inter");
const drHann = load("dr-hann-yasothorn-hospital");
const mmtClinic = load("mmt-clinic");
const shama = load("shama");
const ozo = load("ozo");
const bmw = load("bmw-amorn-prestique");
const mini = load("mini");
const zeekr = load("zeekr-chaengwattana");
const patana = load("bangkok-patana-canteen");

/* ── PROJECTS ── */
const ALL_PROJECTS = [
  /* ═══ Residential ═══ */
  {
    slug: "the-crest-yangon",
    name: "The Crest Yangon",
    category: "Residential",
    year: "2025",
    location: "Yangon, Myanmar",
    gallery: theCrest,
    cover: 0,
    description:
      "A residential development in central Yangon, planned around shared gardens and generous daylight to every unit.",
  },
  {
    slug: "yangon-condominium",
    name: "Yangon Condominium",
    category: "Residential",
    year: "2025",
    location: "Yangon, Myanmar",
    gallery: yangon,
    cover: 0,
    description:
      "A high-rise residential development pairing twin towers with a generous podium of shops, gardens, and a rooftop pool terrace — bringing daylight, greenery, and street life together at every level.",
  },

  /* ═══ Workplace ═══ */
  {
    slug: "mizumi",
    name: "Mizumi",
    category: "Workplace",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: mizumi,
    cover: 0,
    description:
      "A headquarters office where soft curves, water-blue tones, and cloud-like ceiling forms carry the brand through every space — from the reception and meeting suites to open workstations and a central collaboration lounge.",
  },
  {
    slug: "decharin",
    name: "Decharin",
    category: "Workplace",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: decharin,
    cover: 0,
    description:
      "A workplace interior organised around flexible team zones and a clear, calm material palette.",
  },

  /* ═══ Hospital ═══ */
  {
    slug: "mookdahan-inter",
    name: "Mookdahan Inter Hospital",
    category: "Hospital",
    year: "2026",
    location: "Mukdahan, Thailand",
    gallery: mookdahan,
    cover: 1,
    description:
      "A full inter-hospital design — from the low-rise exterior and arrival court through OPD, nurse stations, pharmacy, ICU, and patient suites — using warm timber and daylight to soften the clinical environment.",
  },
  {
    slug: "dr-hann-yasothorn-hospital",
    name: "Dr.Hann Yasothorn Hospital",
    category: "Hospital",
    year: "2026",
    location: "Yasothon, Thailand",
    gallery: drHann,
    cover: 1,
    description:
      "A calm, white-clad clinic building with a glazed entrance pavilion — clear wayfinding, soft landscape, and a healing environment designed around patients and staff alike.",
  },
  {
    slug: "mmt-clinic",
    name: "MMT Clinic",
    category: "Hospital",
    year: "2026",
    location: "Thailand",
    gallery: mmtClinic,
    cover: 0,
    description:
      "A compact clinic interior focused on clear patient flow and a calm, welcoming waiting experience.",
  },

  /* ═══ Hospitality ═══ */
  {
    slug: "shama",
    name: "Shama",
    category: "Hospitality",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: shama,
    cover: 1,
    description:
      "A serviced-residence tower with a slender vertical facade of warm fins, rising above a landscaped podium and set within a dense city block.",
  },
  {
    slug: "ozo",
    name: "OZO Hotel",
    category: "Hospitality",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: ozo,
    cover: 0,
    description:
      "A city hotel massing study — a warm ribbed tower stepping down to meet the street with an open, planted arrival terrace.",
  },

  /* ═══ Retail ═══ */
  {
    slug: "bmw-amorn-prestique",
    name: "BMW Amorn Prestique Ratchada",
    category: "Retail",
    year: "2026",
    location: "Ratchada, Bangkok",
    gallery: bmw,
    cover: 6,
    description:
      "A BMW showroom and lounge where the display floor, café, and consultation areas flow into one another under a dark ceiling grid and sculpted lighting rings.",
  },
  {
    slug: "mini",
    name: "MINI",
    category: "Retail",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: mini,
    cover: 0,
    description:
      "A MINI showroom with a bold cantilevered roof and a playful interior — yellow ceiling battens, exposed structure, and accessory walls that echo the brand's character.",
  },
  {
    slug: "zeekr-chaengwattana",
    name: "Zeekr Chaengwattana",
    category: "Retail",
    year: "2026",
    location: "Chaengwattana, Bangkok",
    gallery: zeekr,
    cover: 1,
    description:
      "An EV brand showroom marked by a red signage pylon and a long glazed frontage, with a bright minimal interior built around the delivery and consultation experience.",
  },

  /* ═══ Education ═══ */
  {
    slug: "bangkok-patana-canteen",
    name: "Bangkok Patana School Canteen",
    category: "Education",
    year: "2026",
    location: "Bangkok, Thailand",
    gallery: patana,
    cover: 0,
    description:
      "A renovation of the school's dining hall into a bright, playful food court — timber grid ceilings, colorful light coves, and rounded serving islands that make lunch feel like the best part of the day.",
  },
];

/* Projects with no photos yet are hidden automatically.
   Drop images into their folder and they appear — no code change needed. */
export const PROJECTS = ALL_PROJECTS.filter((p) => p.gallery.length > 0).map(
  (p, i) => ({
    ...p,
    id: i + 1,
    photo: p.gallery[p.cover] ?? p.gallery[0],
    cat: `${p.category} · ${p.year}`,
  }),
);

/* Projects still waiting for photos — useful if you want to list them later */
export const PENDING_PROJECTS = ALL_PROJECTS.filter((p) => p.gallery.length === 0);

/* Grouped for the /work page, in CATEGORY_ORDER, skipping empty categories */
export const PROJECTS_BY_CATEGORY = CATEGORY_ORDER.map((category) => ({
  category,
  projects: PROJECTS.filter((p) => p.category === category),
})).filter((group) => group.projects.length > 0);

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug);

/* Random pick, used by the home page grid */
export const randomProjects = (count) =>
  [...PROJECTS].sort(() => Math.random() - 0.5).slice(0, count);
