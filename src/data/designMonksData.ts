export type RoutePath =
  | '/'
  | '/projects'
  | '/services'
  | '/services/ui-ux'
  | '/services/web-design'
  | '/services/logo-branding'
  | '/services/webflow-design'
  | '/services/framer-design'
  | '/services/saas-design'
  | '/pricing'
  | '/about'
  | '/teams'
  | '/blog'
  | '/career'
  | '/contact'
  | '/ai-excellency';

export const BRAND_ASSETS = {
  logoWhite:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a08604def1d26213e6133_designmonks%20(1).svg',
  heroBgPattern:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/69ca30aa7176f823e816838f_Hero%20(1).svg',
  heroTexture:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/69ca30bcd624ff132ecf6c42_9931928039c2b9614fcf61170716ce8c_texture%20%281%29.svg',
  reviewPlatforms:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799fee94ce8588c2c639fd5_Frame%204.svg',
  fiveStarsGold:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ae340747e7ad9d1fc783d9_Star%20(2).svg',
  fiveStarsFooter:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d6a6b6b8d7df0ad84c278_Star.svg',
  aiChipBadge:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6ac889dc1c0b0d0c5d30aae1_AI%20Chip.svg',
  headingLogoPill:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ae33e17c6cb8b3eba599db_07ea1d97d57853529a481694a1eeddd8_Home%20heading%20logo.svg',
  ctaArrowWhite:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a33c1af2ad8ac5a41ca55f5_CTA%20Arrow.svg',
  ctaArrowCurvedWhite:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67adba6a3ab018a0349e2bc2_CTA%20Arrow%20(2).svg',
  ctaArrowPurple:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6aabc078235bbee30e645387_CTA%20Arrow%20(2).svg',
  ctaArrowCirclePurple:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a901ec8a125a68a5366907b_CTA%20Arrow%20(1).svg',
  faintStar:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star%206.avif',
  arrowCircleUp:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67d50ac2864d635c959051ac_ArrowCircleUp.svg',
  muteIcon:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67bde79a3b8724a2bd6f0357_mute%20icon.svg',
  showreelPlayBadge:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ae30449566892a169fa179_Video%20Play%5D%20(2).svg',
  showreelVideo: 'https://designmonks.b-cdn.net/DM%20Others/DM%20Showreel%202026.mp4',
  navServicesVideo: 'https://designmonks.b-cdn.net/DM%20Others/DM%20Showreel%202025%20Vertical.mp4',
  navMoreVideo: 'https://designmonks.b-cdn.net/DM%20Others/DM%20Intro%20Vertical.mp4',
  footerGlobeVideo: 'https://designmonks.b-cdn.net/Website%20Design%20Videos/footer_globe.mp4',
  footerWordmarkBanner:
    'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67cb19c5fc7cea1c4b1fc709_9e07db1ecae6aafdfe7fe0fa6c077ee6_FOOTER.avif',
};

export interface HeroThumb {
  src: string;
  alt: string;
  aspect: string;
}

export const HERO_ROW_1: HeroThumb[] = [
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14cf98e3e8a8c98249bf6c_fitmate_herothumb%20(1).avif',
    alt: 'Fitmate fitness app project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14cfba337a7ac4b7bda74e_affine_herothumb.avif',
    alt: 'Affine fintech dashboard project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14cfdaf1b2ab1647c63d52_gummiz_herothumb.avif',
    alt: 'Gummiz candy brand campaign project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d03210755a7b2e19ee3d_the%20gridline_herothumb.avif',
    alt: 'The Gridline furniture brand project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d0503b8ee0bca37216f4_Oter_herothumb.avif',
    alt: 'Oter reading app project hero thumbnail',
    aspect: '197 / 219',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d06b761beb02fb40c065_e87bdf03bbdd04e13f1ed1c9f957c048_Plentypay_herothumb.avif',
    alt: 'Plentypay fintech app project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d0a88aaa7747c7051544_Oh%20My%20Coffee_herothumb.avif',
    alt: 'Oh My Coffee cafe branding project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d0c98622c0a06901ba7c_Norae_herothumb.avif',
    alt: 'Norae perfume brand project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d0e306f15efd235c9939_Triply_herothumb.avif',
    alt: 'Triply travel booking app project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d10a6c07459cace62a82_Carnesia_herothumb.avif',
    alt: 'Carnesia shopping app project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d1285292ca8fe00edbdc_Dar%20Al%20Noor_herothumb.avif',
    alt: 'Dar Al Noor packaging design project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d13f47a78a2038120034_Skillophy_herothumb.avif',
    alt: 'Skillophy e-learning dashboard project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d180b87a439721cffdad_Froo_herothumb.avif',
    alt: 'Froo beverage brand campaign project hero thumbnail',
    aspect: '394 / 329',
  },
];

export const HERO_ROW_2: HeroThumb[] = [
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3228aaa7747c7059c01_Alpine%20Empower_herothumb.avif',
    alt: 'Alpine Empower banking website project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d33609f547dea24d2e10_Yenex_herothumb.avif',
    alt: 'Yenex solar energy website project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d346b9819279de6daf46_Zinngo_herothumb.avif',
    alt: 'Zinngo burger brand campaign project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d371b7b7d9eba5b498be_Ramen%20Riot_herothumb.avif',
    alt: 'Ramen Riot restaurant branding project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d383779c502714d037fa_Scentora_herothumb.avif',
    alt: 'Scentora perfume brand project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d394b87a439721d07b4f_Akij%20Cement_herothumb%20(1).avif',
    alt: 'Akij Cement mobile app project hero thumbnail',
    aspect: '296 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3a16027b26943e69518_Ways%20%26%20Villas_herothumb.avif',
    alt: 'Ways & Villas Maldives travel website project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3b473a852b1ef4fbbbe_Aike_herothumb.avif',
    alt: 'Aike mobile app design project hero thumbnail',
    aspect: '657 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3c26c07459cace6d19e_Aevon_herothumb.avif',
    alt: 'Aevon watch brand identity project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3eb0c8902d2f2222d5d_Zantrik_herothumb.avif',
    alt: 'Zantrik car service app project hero thumbnail',
    aspect: '394 / 329',
  },
  {
    src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3f97f2b64fcbf126da3_The%20great%20golf%20club_herothumb%20(1).avif',
    alt: 'The Great Golf Club brand project hero thumbnail',
    aspect: '394 / 329',
  },
];

export const CLIENT_LOGOS = [
  { name: 'Edvive', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885efb8de6485b41ef30512_Logo_edvive_mono.svg' },
  { name: 'LeKlub', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg' },
  { name: 'Lendiview', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0a19297eaa439b36a54_Logo_lendiview_mono.svg' },
  { name: 'Likely', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0d458e5a5df0fbf1790_Logo_likely_mono.svg' },
  { name: 'Memorybox', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f0e8feb06d3d996d79c3_Logo_Memorybox_mono.svg' },
  { name: 'Onethread', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f10530ade15b8f215893_Logo_onethread_mono.svg' },
  { name: 'Rabfy', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f12d87ea8f930b98389b_Logo_rabfy_mono.svg' },
  { name: 'Ontik', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg' },
  { name: 'Ostad', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f14fe135439678c205c4_Logo_ostad_mono.svg' },
  { name: 'Oter', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f15d6e8226dcdd42841f_Logo_oter_mono.svg' },
  { name: 'Sift', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f18ddddd13f9898fa4a1_Logo_Sift_mono.svg' },
  { name: 'Skillophy', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f19c8b03c8659ce41c98_Logo_skillophy_mono.svg' },
  { name: 'Tempo', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1b6efcab4b193f09f5c_Logo_tempo_mono.svg' },
  { name: 'Triply', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1c594a1ec8ca506cd37_Logo_triply_mono.svg' },
  { name: 'Ways', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1e4306e3894a1466064_Logo_ways_mono.svg' },
  { name: 'Y Combinator', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f1f680fdbf02fa0eae57_Logo_Y%20Combinator_mono.svg' },
  { name: 'Yenex', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f2004933c2b4d513d932_Logo_yenex_mono.svg' },
  { name: 'Zantrik', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091859ea0add1f56a3a99_Logo_zantrik_mono.svg' },
  { name: 'Addisoft', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6886538a81d84aaf47e5386d_Logo_Addisoft_mono.svg' },
  { name: 'Backpack', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091c01ddc2dc9b5c6004d_Logo_Backpack_mono.svg' },
  { name: 'Goldman Sachs', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68a091feeaa832d6e633b930_Logo_Goldman%20Sachs_mono.svg' },
  { name: 'Clarity', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg' },
  { name: 'Esdiac', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg' },
  { name: 'Plenty Pay', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dce06d6d2fe778ba755c28_Logo_Plentypay_mono.svg' },
  { name: 'Coinpulse', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_%20mono.svg' },
  { name: 'Salesgo', src: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69e8da7044354a424b483801_Logo_Salesgo_%20mono.svg' },
];

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  description: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  bgColor: string;
  stickyTop: string;
  deliverables: string[];
  outcome: string;
}

export const INDUSTRY_WINS: CaseStudy[] = [
  {
    id: 'gummiz',
    industry: 'FMCG',
    title: 'Brand Identity Design That Tells Stories',
    description:
      'A playful identity system gave every flavor its own lovable personality while keeping the entire candy family instantly recognizable together.',
    metric1Label: 'Scope',
    metric1Value: 'Branding',
    metric2Label: 'Duration',
    metric2Value: '3 Months',
    authorName: 'Sophie Lindqvist',
    authorRole: 'Gummiz CMO',
    authorAvatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a901e565e14fb6a562d910b_Photo.avif',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a901dcdf207807784c8e7a5_Frame%2010.avif',
    bgColor: '#bae5ff',
    stickyTop: '3.75rem',
    deliverables: ['Brand Strategy', 'Character Mascot System', 'Packaging Architecture', 'Retail Guidelines'],
    outcome: 'Increased shelf visibility across 1,400+ Nordic retail touchpoints and lifted repeat SKU discovery by 42%.',
  },
  {
    id: 'plenty-pay',
    industry: 'FinTech',
    title: 'The Friendlier Side of Finance',
    description:
      'Built to simplify personal finance, the finance app combines saving, investing, and global transfers into one clear and intuitive experience.',
    metric1Label: 'Scope',
    metric1Value: 'Mobile App Design',
    metric2Label: 'Duration',
    metric2Value: '6 Months',
    authorName: 'Kunle Adetayo',
    authorRole: 'Plenty Pay CEO',
    authorAvatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a901f8b10f1e6a383ad0492_Photo%20(2).avif',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a901f6f76f2856e0e1e75fc_Frame%2010%20(1).avif',
    bgColor: '#e1ffb9',
    stickyTop: '7.25rem',
    deliverables: ['User Research', 'iOS & Android UI/UX', 'Design System', 'Interactive Prototype'],
    outcome: 'Reduced onboarding drop-off by 38% and scaled past 120K+ active monthly transfers within launch quarter.',
  },
  {
    id: 'skillophy',
    industry: 'EdTech',
    title: 'Learning Platform That Never Feels Heavy',
    description:
      'A smarter learning platform brings live classes, recorded lessons, and personalized learning together in one engaging experience.',
    metric1Label: 'Scope',
    metric1Value: 'Web App Design',
    metric2Label: 'Duration',
    metric2Value: '4 Months',
    authorName: 'Golam Rabby',
    authorRole: 'Founder, Skillophy',
    authorAvatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a90200c23295da30745eb4d_Photo%20(3).avif',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a90203a4b741df3dceae3d7_Frame%2010%20(2).avif',
    bgColor: '#ffcd51',
    stickyTop: '10.75rem',
    deliverables: ['Multi-Role Portal UX', 'Course Builder', 'Student Dashboard', 'Component Library'],
    outcome: 'Boosted course completion rates by 54% across student and instructor portals.',
  },
  {
    id: 'triply',
    industry: 'Booking Platform',
    title: 'A Travel Platform That Books Smiles',
    description:
      'Everything travelers need comes together in one platform that simply makes trip planning, booking, & personalized recommendations feel effortless.',
    metric1Label: 'Scope',
    metric1Value: 'Web App Design',
    metric2Label: 'Duration',
    metric2Value: '3 Months',
    authorName: 'Shuvo Al Faruque',
    authorRole: 'Triply CEO',
    authorAvatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a9020d8a125a68a5367f9b2_Photo%20(4).avif',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a90219b76f2856e0e2041b2_Frame%2010%20(3).avif',
    bgColor: '#ffb4b3',
    stickyTop: '14.25rem',
    deliverables: ['Trip Planner Flow', 'Search & Filtering UX', 'Checkout Optimization', 'Mobile Responsive Web'],
    outcome: 'Cut average booking checkout time from 4.5 minutes to 75 seconds.',
  },
  {
    id: 'fitmate',
    industry: 'Fitness',
    title: 'A Smarter Way to Sweat',
    description:
      'Finding the right gym, booking classes, and tracking fitness goals now feel like one smooth journey instead of separate everyday tasks.',
    metric1Label: 'Revenue',
    metric1Value: 'Mobile App Design',
    metric2Label: 'Saving',
    metric2Value: '4 Months',
    authorName: 'Daniel Wight',
    authorRole: 'Fitmate CEO',
    authorAvatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a902263865301f536ea9c49_Photo%20(5).avif',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a902287bf1a23f011d8a81d_Frame%2010%20(4).avif',
    bgColor: '#a4dcff',
    stickyTop: '17.75rem',
    deliverables: ['Mobile Product Design', 'Class Booking Engine', 'Goal Tracking System', 'Brand Refresh'],
    outcome: 'Drove 2.6x higher weekly class reservations across partner gyms in Australia.',
  },
];

export interface VideoTestimonial {
  name: string;
  role: string;
  quote: string;
  thumb: string;
  logo: string;
  video: string;
}

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    name: 'Sebastian',
    role: 'Founder @ Salesgo',
    quote:
      'We started with an MVP and needed a polished product. Design Monks delivered with great communication, high-quality work, and quick iterations until everything felt right. Truly grateful and highly recommended.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69e9b8896a001cfc44243f83_Client_Sebastian%20Boord_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69e8da7044354a424b483801_Logo_Salesgo_%20mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Sebastian%20Boord_DM.mp4',
  },
  {
    name: 'David',
    role: 'Founder @ Externalize It',
    quote:
      "Working with Design Monks was a fantastic experience. Their team was incredibly responsive, patient, and easy to work with throughout the entire process. They took the time to understand my ideas and delivered great work at an affordable price.",
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2a86c9efedd3247205c08a_Client_David%20DeWitt%20916.png',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2a85c1739fe7aab067997f_Logo_Externalit_%20mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/David_DM.mp4',
  },
  {
    name: 'Tommy Lu',
    role: 'Founder @ GoodGenes',
    quote:
      'Design Monks did an amazing job bringing my brand to life. From the branding strategy to the logo, the team was professional, responsive, and kept me informed every step of the way.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2aabe664b5a33fa7a8eeec_Client_Thomas%20Luu%20916.png',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2a85e71b1908e75d278368_Logo_Goodgenes_%20mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Tommy%20Lu_DM.mp4',
  },
  {
    name: 'Ishraq Khan',
    role: 'Founder @ Kodezi & Nurvia',
    quote:
      'Design Monks delivered an exceptional redesign with strong product thinking, attention to detail, and a highly responsive team. They genuinely cared about our product and outperformed every agency we had worked with before.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a685e9b3270751311b6d952_Client_Ishraq%20khan_916.png',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a687e7c689a211b67f30e84_Logo_Nurvia_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Ishraq_DM.mp4',
  },
  {
    name: 'Chinho Gonzalez',
    role: 'Founder @ Tatlist',
    quote:
      'Design Monks has been professional, responsive, and truly committed to bringing our vision to life. They feel like an extension of our team, combining attention to detail, creativity, and thoughtful solutions.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a83527480f489e8f8bc8979_Client_Chinho_916.png',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a8412eab002f467b8ae3609_Logo_Tatlist_%20mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Chino_DM.mp4',
  },
  {
    name: 'Sofia Gouveia',
    role: 'Design Director @ Esdiac',
    quote:
      'Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d7e2ef5cee4c7c64ad_Client_Sofia%20Gouveia_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68dcdfc38248b93d8a3fe1ed_Logo_Esdiac_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Sofia_DM.mp4',
  },
  {
    name: 'Austin',
    role: 'CEO @ Clarity LLC',
    quote:
      "I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth.",
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d8ef94ad655fb9fd01_Client_Austin_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db9056e42ba9fd6c172833_Logo_Clarity_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Austin_DM.mp4',
  },
  {
    name: 'Anika',
    role: 'Founder @ Coinpulse',
    quote:
      "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development, they exceeded my expectations.",
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78b3798750901911bb75_Client_Anika%20_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697b6e3416493b65e726d165_Logo_Coinpulse_%20mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Anika_DM.mp4',
  },
  {
    name: 'Armen Avagyan',
    role: 'Founder @ Fraus',
    quote:
      'Design Monks delivered sharp SaaS workflows, cohesive branding, and responsive collaboration across every sprint.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69720678ee0f40386f6b4992_Logo_Fraus_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Armin_DM.mp4',
  },
  {
    name: 'Victor',
    role: 'Founder @ Dlicio',
    quote:
      'Their product intuition and visual craft elevated our entire user journey from concept to launch.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69e9b576664f405455f93fc9_Client_Dilicio_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ef94ab9e4ca1123be230_Logo_Dlicio_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Victor_DM.mp4',
  },
  {
    name: 'Neil',
    role: 'Founder @ LeKlub',
    quote:
      'Thanks to Design Monks for building a world-class product that captured our vision and helped us land customers from day one.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27038f25d2ac850921b7e_Client_LeKlub_reel.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f091d389d8df99129c17_Logo_leklub_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Neil_DM.mp4',
  },
  {
    name: 'Emran',
    role: 'Founder @ Klasio',
    quote:
      'Thanks to Design Monks for building a world-class website that captured our vision and helped us land customers from day one. They went beyond design, researching trends and bringing great ideas.',
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68c27001524a8683f8f0aff1_Client_Klasio_reel.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f07d9c093fad609a26bb_Logo_klasio_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Emran_DM.mp4',
  },
  {
    name: 'Moshiur Rahman Radif',
    role: 'COO @ Ontik Technologies',
    quote:
      "We've worked with Design Monks for over 2 years on 10+ projects, and the experience has been outstanding. They deliver with precision, provide clear documentation, and make the whole process smooth.",
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db8732b22da6b432112dce_Client_Moshiur%20Rahman%20Radif_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885f13ec2ad5470f81a0156_Logo_ontik_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Radif%20DM.mp4',
  },
  {
    name: 'Arvin',
    role: 'Co Founder @ Medease',
    quote:
      "We tried many designers before, but nothing really worked until we found Design Monks. For the last 2 years, they've been our go to. They turn simple ideas into clear, user friendly designs.",
    thumb:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69d33ab2027b36046bbcd671_Client_Anvir_916.avif',
    logo: 'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6885ee08f5f493b2bb9e7f1e_Logo_medease_mono.svg',
    video: 'https://designmonks.b-cdn.net/Client%20Testimonials/Arvin_DM.mp4',
  },
];

export const SMARTER_TOOLS_TOP = [
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b01e333acdbdd81e0c_Frame%202147238886%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b0565c4b54d0794a02_Frame%202147238887%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b0f4229c1b62bef50b_Frame%202147238888%20(2).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b06726ab23af129aaa_Frame%202147238889%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b0cadd6480ac1b6ed6_Frame%202147238890%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b0272c3fd2b206aed2_Frame%202147238891%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b02ec430ef255bc6dd_Frame%202147238892%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b1565c4b54d0794a0d_Frame%202147238893%20(1).avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a5b0661c3873477e0fc1_Frame%202147238894%20(1).avif',
];

export const SMARTER_TOOLS_BOTTOM = [
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a64cf7785b70a1541523_Frame%202085665741.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a645a10c36c6a575c707_Frame%202147238876.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a646d027100b1bba3ac6_Frame%202147238877.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a6456726ab23af13421d_Frame%202147238878.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a64631081c891f6f9df5_Frame%202147238879.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a6479764a1163884f85b_Frame%202147238880.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a64634804a67f3a877ee_Frame%202147238881.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a6455a9e7295d06d9cb5_Frame%202147238882.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a64542e40dfeaacb53d9_Frame%202147238883.avif',
  'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a68a645980305061c2870c1_Frame%202147238884.avif',
];

export const SMARTER_WORKFLOW_CARDS = [
  {
    title: 'Discover & Strategy',
    icons: [
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a5810149e88d3358ac95b41_Frame%202147238893.avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a6a2cb044ee3817c8f32_Frame%202147238892.avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a6cef218cc1b08c70c27_Frame%202147238888.avif',
    ],
    produces: ['Discovery Report', 'User Personas', 'Content Hierarchy'],
  },
  {
    title: 'Design',
    icons: [
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a73bd7b7e03d4a590269_Frame%202147238891.avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a75735e91d2a5c56f5ba_Frame%202147238892%20(1).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a76f75452fd285b8ab73_Frame%202147238888%20(1).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a6cef218cc1b08c70c27_Frame%202147238888.avif',
    ],
    produces: ['Visual Direction', 'UI Screens', 'Design System'],
  },
  {
    title: 'Build',
    icons: [
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a7e3f08415c83ca01858_Frame%202147238891%20(1).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a80e4ee26d41bf4dd8a6_Frame%202147238892%20(2).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a830d43297817ac79851_Frame%202147238888%20(2).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a8504ee26d41bf4e0834_Frame%202147238893%20(1).avif',
    ],
    produces: ['Codebase', 'CMS Integration', 'Component Docs'],
  },
  {
    title: 'Optimise',
    icons: [
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a8a3242b409075144410_Frame%202147238891%20(2).avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a5810149e88d3358ac95b41_Frame%202147238893.avif',
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a58a6cef218cc1b08c70c27_Frame%202147238888.avif',
    ],
    produces: ['CRO Recommendations', 'A/B Test Plan', 'Launch Report'],
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  route: RoutePath;
  images: { src: string; alt: string }[];
}

export const WHAT_WE_DO_SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description:
      'UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.',
    route: '/services/ui-ux',
    images: [
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/679a9c4888217669122eebaf_3d41798d228903d42862a148dd56aeb1_Project%20Cards%20%2810%29%20%281%29.avif',
        alt: 'MonksMeet scheduling website on laptop project card',
      },
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78087a5b72120cc3e5db_d1a5f14e5e5fc69f2dbac575600f06f4_Project%20Cards-6.avif',
        alt: 'Fintech card app on phone held in hand project card',
      },
    ],
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description:
      'Frontend Development, Backend Development, Full Stack Solutions, Mobile App Development, Custom Web Applications, API Integration.',
    route: '/services/web-design',
    images: [
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78084947770a14f1eb7c_d1cec41f22346c1c941376236623384b_Project%20Cards.avif',
        alt: 'Analytics dashboard overview on tablet held in hand project card',
      },
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78089c9a93e810fbfa6e_Project%20Cards-1.avif',
        alt: 'Klub restaurant deals website on tablet project card',
      },
    ],
  },
  {
    id: 'branding',
    title: 'Logo & Branding',
    description:
      'Logo Design, Full Branding, Business Branding, 3d logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.',
    route: '/services/logo-branding',
    images: [
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac7809638da68108df9847_Project%20Cards-4.avif',
        alt: 'Brand identity showcase project card',
      },
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78089a0d6cfed1675211_Project%20Cards-5.avif',
        alt: 'Packaging and visual identity project card',
      },
    ],
  },
  {
    id: 'webflow-framer',
    title: 'Webflow & Framer',
    description:
      'Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.',
    route: '/services/framer-design',
    images: [
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac780912dabe81710b65ed_8e70a34a4056237eca17e1209cecdebe_Project%20Cards-2.avif',
        alt: 'Webflow and Framer interactive showcase project card',
      },
      {
        src: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67ac78088c2757d4cdf75977_Project%20Cards-3.avif',
        alt: 'Responsive SaaS website build project card',
      },
    ],
  },
];

export const TEAM_PREVIEW = [
  {
    name: 'Sourov Dhali',
    role: 'Product Designer',
    tags: ['UX Specialist', 'Design System'],
    avatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a46051c0e8cdd3fcca07811_Ellipse%201%20(1).avif',
  },
  {
    name: 'Tanvir Ahmed',
    role: 'Creative Director',
    tags: ['Brand Design', 'Design Direction'],
    avatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a46051cd396d3d4a381b58c_Ellipse%202%20(4).avif',
  },
  {
    name: 'Azaz Ahamed',
    role: 'Sr Product Designer',
    tags: ['UX Consultant', 'SaaS Design'],
    avatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a46051cd396d3d4a381b588_Ellipse%202%20(5).avif',
  },
  {
    name: 'Sajib Ahmed',
    role: 'SEO Manager',
    tags: ['Growth Marketing', 'SEO Strategy'],
    avatar:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a46051caf667aadb18cdf94_Ellipse%202%20(6).avif',
  },
];

export const DEVICE_SHOWCASE_IMAGES = [
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32fc735e0d6f8dd8825_6887351745dc217b10a7ee3b_Triply_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e534b0cf0e0a6638bc8a2_Plate_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32f5eccd94db95f7f25_688732d76a3b290a1fe970b0_TravelGo_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e5375eba138b6b35bf0dd_MobileWallet2_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32eaa7f7ef370cd0eee_688732c3537d42e0f0d2a559_NextSpace_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e538c2d180a56d8378251_VPN_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32df7bde338734c613e_688735b5ad2c5c0d13c3ac39_Nekchat_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e53a412004b5e767aa0af_MobileWallet_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32df9b9ef636745adee_688732e9c4a168e60b8ef39f_MonksWizard2_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e53b66390bca6b8400e2d_TravelBooking_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32c5cc099bbe637cc18_688733cb740a71f629ac44a5_MonksWizard_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e53eee34f69fc21a0d728_Artstation_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32cf46f597d97b71f91_6887299a0ae551d0a4fc4fb3_MonkStitch_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e5410f2cd5f6e09452a63_Cosmetics_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32b2dbb746fe24aac8b_68872cec05b1f2db805370d2_MonksMart_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e5430c027699fc4062ad2_SmartAppliance_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32b262d38e1d211d7e3_68873420b18ab1756ce10e5a_MonksMeet_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e54481a75cebf5286572c_SmartHome_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df32a262d38e1d211d7bb_688729affdc70da3d74399f9_MonksHR2_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e5493b6bd8ca678dc391a_FileManager_iPhone.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695df326149a387cc25c7fc2_688729c8a76e2babd631ea33_InnovexAI_iPad.avif',
  'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/695e54c2aefe36c575625fac_Ebike_iPhone.avif',
];

export const DEVICE_MARQUEE_LABELS = [
  'Framer',
  'Branding',
  'Dashboard',
  'Logos',
  'Webflow',
  'Slide Decks',
  'Mobile Apps',
  'Figma',
  'Social Media',
];

export const COMPARISON_ROWS = [
  {
    platform: 'Design Monks',
    description:
      'Expert-driven & committed to higher quality. Get effective result & full support without hiring in-house employees',
    highlighted: true,
    scores: [true, true, true, true, true],
  },
  {
    platform: 'In House Team',
    description:
      'A full-time designer may ensure brand consistency, but there’s a risk of limited expertise even though you pay regularly',
    highlighted: false,
    scores: [false, false, false, true, false],
  },
  {
    platform: 'Creative Agencies',
    description:
      'Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility for your projects',
    highlighted: false,
    scores: [false, false, true, true, false],
  },
  {
    platform: 'Freelancers',
    description:
      'Freelancers may provide affordable design services but they mostly lack consistency, reliability, and collaboration',
    highlighted: false,
    scores: [false, true, false, false, true],
  },
  {
    platform: 'Self-Service Tools',
    description:
      'DIY tools like website builders are budget-friendly, but you can’t expect strategic thinking & originality',
    highlighted: false,
    scores: [false, false, true, true, false],
  },
];

export const WRITTEN_TESTIMONIALS = [
  {
    name: 'Sebastian',
    role: 'Founder @ Salesgo',
    quote:
      'We started with an MVP and needed a polished product. Design Monks delivered with great communication, high-quality work, and quick iterations until everything felt right. Truly grateful and highly recommended.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/69e9b885319c111f962b24f9_Client_Sebastian%20Boord.avif',
  },
  {
    name: 'David',
    role: 'Founder @ Externalize It',
    quote:
      "Working with Design Monks was a fantastic experience. Their team was incredibly responsive, patient, and easy to work with throughout the entire process. They took the time to understand my ideas and delivered great work at an affordable price.",
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2a86c5c0efdb864615dab5_Client_David%20DeWitt.png',
  },
  {
    name: 'Tommy Lu',
    role: 'Founder @ GoodGenes',
    quote:
      'Design Monks did an amazing job bringing my brand to life. From the branding strategy to the logo, the team was professional, responsive, and kept me informed every step of the way. The project was delivered on time.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a2aabe182192592659d9deb_Client_Thomas%20Luu.png',
  },
  {
    name: 'Ishraq Khan',
    role: 'Founder @ Kodezi & Nurvia',
    quote:
      'Design Monks delivered an exceptional redesign with strong product thinking, attention to detail, and a highly responsive team. They genuinely cared about our product and outperformed every agency we had worked with before.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a685e9833ed553a05224b79_Client_Ishraq%20khan.png',
  },
  {
    name: 'Chinho Gonzalez',
    role: 'Founder @ Tatlist',
    quote:
      'Design Monks has been professional, responsive, and truly committed to bringing our vision to life. They feel like an extension of our team, combining attention to detail, creativity, and thoughtful solutions.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a835271ac62c6baed53d9a0_Client_Chinho.png',
  },
  {
    name: 'Irfan Siraj Deen',
    role: 'Director at Beyon Cyber',
    quote:
      "We've worked with Design Monks on a few projects, and it's been a great experience. The work is consistently high-quality, and the team is professional, responsive, and always willing to go the extra mile.",
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6a8d9b52f9060f446fcc2b5e_WhatsApp_Image_2026-08-24_at_3.49.48_PM.webp',
  },
  {
    name: 'Jenna Carvalho',
    role: 'Principal @ Guardian Estate Company',
    quote:
      'Design Monks was a pleasure to work with. They were proactive, and efficient, and never hesitated to challenge me in my assumptions. The design they built for me was beautiful.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684befe7696e3ebd23c7a3f7_6841287f022320ba6d4df48a_Client_Jenna.avif',
  },
  {
    name: 'Ted Nash',
    role: 'Founder & CEO @ Yenex',
    quote:
      "I've had the pleasure of collaborating with Design Monks for a while now on my new project. They're lightning-quick in addressing any questions or feedback I have, and they consistently go the extra mile.",
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/684bef93fc8165be6c14ecbd_67b790a2c5539dbd6bb9aba7_Yenex%20(2).avif',
  },
  {
    name: 'Sofia Gouveia',
    role: 'Design Director @ Esdiac',
    quote:
      'Working with Design Monks on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db83d0788461a30fddc0f8_Client_Sofia%20Gouveia.avif',
  },
  {
    name: 'Austin',
    role: 'CEO @ Clarity LLC',
    quote:
      "I've worked with Design Monks on three websites, and they've been nothing but exceptional. Their design is top-notch, development is reliable, and communication is always smooth.",
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68db86d30e6ba269e3a20e68_Client_Austin.avif',
  },
  {
    name: 'Nora Peng',
    role: 'Marketing Manager @ Voc AI',
    quote:
      'Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work as per my requirements.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/68527ad3ec7d9727d6040292_Client_voc%20ai.avif',
  },
  {
    name: 'Anika',
    role: 'Founder @ Coinpulse',
    quote:
      'Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless development with Dev Monks, they exceeded my expectations.',
    avatar:
      'https://cdn.prod.website-files.com/674703d2af36853f65da67e0/697c78ae153f55d2e85ebf4a_Client_Anika.avif',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'How can I start a project with Design Monks?',
    a: 'Starting a project with us is simple. Just reach out through our contact form or email, and share a brief about your needs. We’ll schedule a call to understand your goals, discuss the scope, and recommend the right approach tailored to your product or brand.',
  },
  {
    q: 'Why is Design Monks different?',
    a: 'The team Design Monks prioritizes a perfect mix of creativity, client-focused strategy, and deep industry insights. We consistently deliver high-quality UI/UX design across branding, product design, and web design. Our collaborative process ensures designs align with your goals to help your brand grow and succeed. This is definitely a unique process that makes us different from others.',
  },
  {
    q: 'How Long Does a Design Project Take?',
    a: 'Most projects take 2 to 12 weeks. A focused MVP or landing page usually takes 2 to 4 weeks, while a full product design with research and usability testing takes 6 to 12 weeks. We share a clear timeline after a short call about your scope.',
  },
  {
    q: 'Is Design Monks a start-up-friendly agency?',
    a: 'Yes, Design Monks is a start-up-friendly agency. We understand the unique challenges start-ups face and offer affordable and flexible design solutions that fit your budget and needs. Our team is committed to helping your start-up build a strong brand and user-friendly digital presence from the ground up.',
  },
  {
    q: 'What design tools do you use?',
    a: "We use different industry-leading tools. For pixel-perfect UI/UX and Web designs, we swear by Figma and Figjam. When it comes to crafting visually stunning branding and product designs, our go-to is the Adobe suite, which includes Photoshop, Illustrator, and After Effects. And for seamless project documentation? Notion's got our back. All are aimed at delivering top-quality results.",
  },
  {
    q: 'Do you provide UX audits or redesigns for existing products?',
    a: 'Yes, we offer detailed UX audits as well as full redesign services. Whether your product needs usability improvements or a visual refresh, we analyze existing flows, identify issues, and create strategic design solutions. We manage everything to boost the user experience and performance of your platform.',
  },
];

export const OFFICE_LOCATIONS = [
  { country: 'United States', address: '16 Cove Road\nMount Arlington, NJ 07856' },
  { country: 'Australia', address: '155 Bennett Rd, St Clair NSW 2759' },
  { country: 'South Africa', address: '55 Mons Rd, Bellevue East, Johannesburg, 2198' },
  { country: 'Singapore', address: '6 Raffles Blvd, Marina Square' },
  { country: 'Italy', address: 'Via Bari, 9, 03043 Cassino, FR' },
  { country: 'Dubai', address: 'AlFattan Downtown - 32d St - Al Satwa' },
  { country: 'Cyprus', address: 'Estias 5, Strovolos 2001' },
  { country: 'Bangladesh', address: 'Ventura Iconia, Plot 37 Road No. 11, Banani, Dhaka 1213' },
];

export const SOCIAL_LINKS = [
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/design_monks',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bf69713c3b8f748765c_DribbbleLogo.svg',
  },
  {
    name: 'Behance',
    url: 'https://www.behance.net/designmonksux',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bddffa276ad56ceafaa_BehanceLogo.svg',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/designmonks.co/',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd74e5db4d2d79e93c_InstagramLogo.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/designmonks',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/676d686bcc487e32fc0ab3d3_LinkedinLogo.svg',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/designmonks.co',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd34c574ea949458a1_FacebookLogo.svg',
  },
  {
    name: 'X',
    url: 'https://twitter.com/design_monks',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67376bdd90129fe64264acde_XLogo.svg',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/designmonks',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/68a167212f8c8d775f4f9385_TelegramLogo.svg',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@designmonks',
    icon: 'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a0f9b36be371d35798319ae_YoutubeLogo.svg',
  },
];

export const PRICING_PLANS = [
  {
    name: 'UI/UX Sprint',
    badge: 'Startup Favorite',
    price: '$2,400',
    period: '/ 2 weeks',
    description: 'Ideal for early-stage teams needing a rapid MVP, landing page, or high-impact UX audit.',
    features: [
      'Dedicated Senior Product Designer',
      'User Flows & High-Fidelity Figma UI',
      'Design System Foundation',
      '48-Hour Async Turnaround',
      'Unlimited Revisions',
    ],
  },
  {
    name: 'Dedicated Design Retainer',
    badge: 'Most Popular',
    price: '$4,500',
    period: '/ month',
    description: 'Continuous product design, web design, and branding support as an extension of your team.',
    highlighted: true,
    features: [
      'Senior Product Designer + Creative Director',
      'Web, SaaS & Mobile App Design',
      'Weekly Strategy & Design Critiques',
      'Framer / Webflow Ready Components',
      'Unlimited Requests & Revisions',
      'Cancel or Pause Anytime',
    ],
  },
  {
    name: 'Full-Stack Design & Build',
    badge: 'End-to-End',
    price: 'Custom',
    period: '/ scoped',
    description: 'Complete brand identity, UI/UX product architecture, and production Webflow, Framer, or custom code.',
    features: [
      'Full Research & Discovery Workshop',
      'Brand Identity + Product UI/UX',
      'Production Webflow / Framer / React Build',
      'CRO & Post-Launch Analytics Setup',
      'Lifetime Priority Support',
    ],
  },
];

export const EXTRA_PROJECTS = [
  {
    id: 'purelix',
    title: 'Purelix: Wellness Brand Built on Proof',
    category: 'Branding',
    scope: 'Brand Identity & E-Commerce',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d0c98622c0a06901ba7c_Norae_herothumb.avif',
    summary: 'Plant-based skincare and supplement identity centered on clinical proof and tactile packaging.',
  },
  {
    id: 'olio',
    title: 'Olio: Design for Effortless AI Creativity',
    category: 'SaaS & AI',
    scope: 'Product Design',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14cfba337a7ac4b7bda74e_affine_herothumb.avif',
    summary: 'Streamlined creative canvas and prompt workflow turning complex generative models into intuitive tools.',
  },
  {
    id: 'yenex',
    title: 'Yenex: Clean Solar Energy Web Experience',
    category: 'Web Design',
    scope: 'Webflow & Branding',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d33609f547dea24d2e10_Yenex_herothumb.avif',
    summary: 'High-converting residential solar website with instant savings estimator and sleek editorial visuals.',
  },
  {
    id: 'aevon',
    title: 'Aevon: Precision Watch Brand Identity',
    category: 'Branding',
    scope: 'Logo & Visual Identity',
    image:
      'https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a14d3c26c07459cace6d19e_Aevon_herothumb.avif',
    summary: 'Architectural typography and luxury unboxing system crafted for modern mechanical timepieces.',
  },
];
