import { PROJECTS, getProject } from "./projects";

/* ── Site photos ──
   Background images for the home page and page banners, all pulled from
   your own project galleries.

   Each slot picks RANDOMLY from a pool, so the site looks a little
   different on every visit. To pin one down, replace pick([...]) with a
   single image, e.g.:   hero: shot("shama", 1),                          */

/* One picture: shot("mizumi", 0) = Mizumi's 01.jpg */
const shot = (slug, index = 0) => {
  const project = getProject(slug);
  if (!project) return undefined;
  return project.gallery[index] ?? project.gallery[0];
};

const pick = (options) => {
  const usable = options.filter(Boolean);
  return usable[Math.floor(Math.random() * usable.length)];
};

/* Any photo from any project — the true wildcard */
const anyShot = () => {
  const project = PROJECTS[Math.floor(Math.random() * PROJECTS.length)];
  return project.gallery[Math.floor(Math.random() * project.gallery.length)];
};

export const PHOTOS = {
  /* Full-screen hero — wide exteriors read best behind the headline */
  hero: pick([
    shot("yangon-condominium", 0),
    shot("shama", 1),
    shot("mookdahan-inter", 1),
    shot("mini", 0),
    shot("zeekr-chaengwattana", 1),
  ]),

  /* Studio section — an interior plus a smaller accent shot */
  about1: pick([
    shot("mizumi", 13),
    shot("bangkok-patana-canteen", 0),
    shot("bmw-amorn-prestique", 6),
  ]),
  about2: pick([
    shot("mizumi", 5),
    shot("mookdahan-inter", 6),
    shot("bangkok-patana-canteen", 3),
  ]),

  /* Full-bleed section backgrounds */
  cta: pick([
    shot("shama", 3),
    shot("yangon-condominium", 2),
    shot("ozo", 0),
    shot("mini", 1),
  ]),
  testimonial: pick([
    shot("bangkok-patana-canteen", 6),
    shot("mizumi", 0),
    shot("mookdahan-inter", 2),
  ]),

  /* Page banners: p2 = /work, p3 = /services, p1/p4/p5 spare */
  p1: shot("yangon-condominium", 0),
  p2: pick([shot("mizumi", 13), shot("bmw-amorn-prestique", 6), shot("mookdahan-inter", 1)]),
  p3: shot("bangkok-patana-canteen", 0),
  p4: anyShot(),
  p5: anyShot(),
};
