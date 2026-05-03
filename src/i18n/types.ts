export interface Dict {
  meta: { title: string; description: string };
  nav: {
    exercises: string;
    how: string;
    privacy: string;
    faq: string;
    cta: string;
    home: string;
  };
  hero: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    body: string;
    primary: string;
    secondary: string;
    note: string;
    watch: { exercise: string; meta: string; chip: string };
  };
  exercises: {
    eyebrow: string;
    title: string;
    lede: string;
    names: Record<string, string>;
    manualLabel: string;
    note: string;
  };
  how: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: { title: string; body: string }[];
    chips: { slider: string; diagnostics: string; transparency: string };
  };
  privacy: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    lede: string;
    points: { title: string; body: string }[];
    cta: string;
  };
  shots: {
    eyebrow: string;
    title: string;
    lede: string;
    coming: string;
    items: { label: string; blurb: string }[];
  };
  built: {
    eyebrow: string;
    title: string;
    body: string;
    gh: string;
    email: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lede: string;
    items: { q: string; a: string }[];
    outroLead: string;
    outroEmail: string;
    outroOr: string;
    outroJoin: string;
    outroTrail: string;
  };
  footer: {
    privacy: string;
    contact: string;
    github: string;
    copyright: string;
  };
  notFound: { eyebrow: string; title: string; body: string; cta: string };
  langSwitcher: { label: string };
  privacyPage: {
    eyebrow: string;
    title: string;
    lastUpdated: string;
    notice?: string;
    intro: string;
    sections: {
      collect: { title: string; columns: { data: string; source: string; why: string; where: string }; rows: { data: string; source: string; why: string; where: string }[] };
      donot: { title: string; items: string[] };
      health: { title: string; bodyA: string; revoke: string };
      music: { title: string; body: string };
      sync: { title: string; body: string };
      children: { title: string; body: string };
      changes: { title: string; body: string };
      contact: { title: string; body: string };
    };
  };
}
