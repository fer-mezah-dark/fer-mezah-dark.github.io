// =====================================================================
//  LISTA DE PROYECTOS
//  Cada proyecto es un bloque { ... }. Para editarlo, cambia solo lo que
//  está entre comillas. Campos:
//    featured: true  -> aparece en "Proyectos destacados" (tarjeta grande)
//    cats            -> filtros: "3d", "games", "video", "uiux", "graphic", "web"
//    cover           -> imagen de portada, ej. "assets/img/hibe-cover.jpg"
//    images          -> galería, ej. ["assets/img/hibe-01.jpg", "assets/img/hibe-02.jpg"]
//    videos          -> IDs de YouTube, ej. ["dQw4w9WgXcQ"]
//    links           -> botones, ej. [{ en: "Live site", es: "Ver sitio", url: "https://..." }]
//    note            -> nota pequeña al final (créditos, fecha de entrega...)
// =====================================================================

const PROJECTS = [

  // ===================== DESTACADOS =====================
  {
    id: "hri",
    featured: true,
    cats: ["web", "graphic", "uiux"],
    year: "2026",
    title: "HRIntelligence",
    role: { en: "Graphic Designer · Design Coordination", es: "Diseñador Gráfico · Coordinación de Diseño" },
    tools: "WordPress · Elementor · HTML / CSS / JS · Photoshop · Illustrator",
    desc: {
      en: "I led the design area of an HR consulting firm: two company websites built in WordPress / Elementor with custom-coded widgets, landing pages for HRI and its brand MIMO-MAT, and around 12 LinkedIn posts per month.",
      es: "Llevé el área de diseño de una consultora de Recursos Humanos: dos sitios web de la empresa en WordPress / Elementor con widgets de código propio, landing pages para HRI y su marca MIMO-MAT, y alrededor de 12 publicaciones de LinkedIn al mes."
    },
    cover: "", images: [], videos: [], links: [],
    note: { en: "Design delivered in 2026. The live sites may have changed since then.", es: "Diseño entregado en 2026. Los sitios en vivo pueden haber cambiado desde entonces." }
  },
  {
    id: "hibe",
    featured: true,
    cats: ["3d", "games", "uiux", "video"],
    year: "2022",
    title: "Hibe Metaverse",
    role: { en: "Creative Director · Lead 3D Artist", es: "Director Creativo · Artista 3D principal" },
    tools: "Maya · Substance Painter · Unity · Premiere",
    desc: {
      en: "Creative direction for a metaverse project: I conceptualized and built its worlds, designed and modeled the characters, the in-world currency and the start screen, and edited the presentation trailer.",
      es: "Dirección creativa de un proyecto de metaverso: conceptualicé y construí sus mundos, diseñé y modelé los personajes, la moneda y la pantalla de inicio, y edité el tráiler de presentación."
    },
    cover: "assets/img/hibe-cover.jpg",
    images: [
      "assets/img/hibe-01.jpg",
      "assets/img/hibe-02.jpg",
      "assets/img/hibe-03.jpg",
      "assets/img/hibe-04.jpg",
      "assets/img/hibe-05.jpg",
      "assets/img/hibe-06.jpg",
      "assets/img/hibe-07.jpg",
      "assets/img/hibe-08.jpg",
      "assets/img/hibe-09.jpg",
      "assets/img/hibe-10.jpg",
      "assets/img/hibe-11.jpg",
      "assets/img/hibe-12.jpg"
    ],
    videos: ["qXPlidl938U", "X7ITsQ-jwp0"],
    links: [],
    note: { en: "The avatar selection screen shown is a functional prototype.", es: "La pantalla de selección de avatar es un prototipo funcional." }
  },
  {
    id: "nereida",
    featured: true,
    cats: ["3d", "games"],
    year: "2020",
    title: "Nereida",
    role: { en: "Character Designer · 3D Artist", es: "Diseñador de personajes · Artista 3D" },
    tools: "Photoshop · Maya · Substance Painter",
    desc: {
      en: "An original character taken from the first sketch to a finished 3D model: color palette, turnaround, sculpting, texturing and animation. Includes Atlante, an enemy and props from the same universe.",
      es: "Un personaje original llevado del primer boceto a un modelo 3D terminado: paleta de color, turnaround, escultura, texturizado y animación. Incluye a Atlante, un enemigo y props del mismo universo."
    },
    cover: "assets/img/nereida-cover.jpg",
    // Orden de la galería: imágenes, videos (yt) y visor 3D (sketchfab)
    media: [
      "assets/img/nereida-01.jpg",
      "assets/img/nereida-02.jpg",
      "assets/img/nereida-03.jpg",
      "assets/img/nereida-04.jpg",
      "assets/img/nereida-05.jpg",
      { sketchfab: "0fe3bb819f79443c88e999f2d2d385cc" },
      { yt: "E1cBdqNq3uU" },
      "assets/img/nereida-06.jpg",
      { yt: "a0yTa96HO_E" },
      "assets/img/nereida-07.jpg",
      "assets/img/nereida-08.jpg"
    ],
    images: [], videos: [],
    links: [
      { en: "View on Sketchfab", es: "Ver en Sketchfab", url: "https://sketchfab.com/3d-models/nereida-0fe3bb819f79443c88e999f2d2d385cc" }
    ]
  },
  {
    id: "xturbo",
    featured: true,
    cats: ["games", "uiux", "video"],
    year: "2021",
    title: "X-Turbo Ball: Extreme",
    role: { en: "Game Designer · Developer · UI Designer", es: "Diseñador y desarrollador del juego · Diseñador UI" },
    tools: "Unity · Maya · Photoshop · Premiere",
    desc: {
      en: "My own video game, from concept to launch: gameplay design, development, a synthwave visual style, the user interface (animated main menu, credits and navigation flow) and the launch trailer.",
      es: "Mi propio videojuego, del concepto al lanzamiento: diseño de juego, desarrollo, un estilo visual synthwave, la interfaz de usuario (menú principal animado, créditos y flujo de navegación) y el tráiler de lanzamiento."
    },
    cover: "assets/img/xturbo-cover.jpg",
    // Orden de la galería: imágenes, videos (yt) y visor 3D (sketchfab)
    media: [
      { yt: "SR2JiLkokGo" },
      "assets/img/xturbo-01.jpg",
      "assets/img/xturbo-02.jpg",
      "assets/img/xturbo-03.jpg",
      "assets/img/xturbo-04.jpg",
      "assets/img/xturbo-05.jpg",
      { yt: "8Pt7Th7b3dg" },
      "assets/img/xturbo-06.jpg",
      { yt: "vThw0sJC2x4" },
      { yt: "JttG54ShaUQ" }
    ],
    images: [], videos: [],
    links: [
      { en: "Download on Game Jolt", es: "Descargar en Game Jolt", url: "https://gamejolt.com/games/x-turbogamextreme/606490" }
    ],
    note: { en: "Co-programming: Marcos Samuel Valle León.", es: "Coprogramación: Marcos Samuel Valle León." }
  },
  {
    id: "singer",
    featured: true,
    cats: ["3d"],
    year: "",
    title: "Singer 29-4",
    role: { en: "3D Artist", es: "Artista 3D" },
    tools: "Maya · Substance Painter",
    desc: {
      en: "Realistic 3D model of a classic Singer 29-4 sewing machine, with detailed modeling and PBR texturing.",
      es: "Modelo 3D realista de una máquina de coser Singer 29-4 clásica, con modelado detallado y texturizado PBR."
    },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "quarx",
    featured: true,
    cats: ["3d", "graphic"],
    year: "2023",
    title: "Quarx / Synnex",
    role: { en: "Freelance 3D Designer", es: "Diseñador 3D Freelance" },
    tools: "Maya · Substance Painter · Photoshop",
    desc: {
      en: "I laid the foundations of the company's new corporate image, including a 3D brand concept based on the figure of Janus.",
      es: "Establecí las bases de la nueva imagen corporativa de la empresa, con un concepto de marca en 3D basado en la figura de Jano."
    },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "espectro",
    featured: true,
    cats: ["3d", "games"],
    year: "",
    title: "Espectro",
    role: { en: "Concept Artist · 3D Artist (team project)", es: "Artista conceptual · Artista 3D (proyecto en equipo)" },
    tools: "Photoshop · Maya · Substance Painter · Unity",
    desc: {
      en: "A creature game inspired by Mexican culture. I worked on concept art, 3D modeling, texturing and animation.",
      es: "Un juego de criaturas inspirado en la cultura mexicana. Trabajé en arte conceptual, modelado 3D, texturizado y animación."
    },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "peo",
    featured: true,
    cats: ["graphic", "video"],
    year: "2025",
    title: "PEO · Punta del Este Operadora",
    role: { en: "Freelance Designer", es: "Diseñador Freelance" },
    tools: "Photoshop · Illustrator · Premiere · Canva",
    desc: {
      en: "A consistent visual system for a tour operator: travel package flyers, custom pieces, an infographic, a promotional cinematic and social media videos.",
      es: "Un sistema visual consistente para una operadora de viajes: flyers de paquetes, diseños a la medida, una infografía, una cinemática promocional y videos para redes."
    },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "cimbramex",
    featured: true,
    cats: ["graphic", "video", "uiux"],
    year: "2024",
    title: "Cimbramex",
    role: { en: "Graphic Designer", es: "Diseñador Gráfico" },
    tools: "Illustrator · Photoshop · After Effects · Premiere · SharePoint",
    desc: {
      en: "Corporate identity in print and digital: 23 product catalogs (CMYK), business cards, email signatures, infographics, commemorative logo variants, an internal video series and intranet microsites.",
      es: "Identidad corporativa impresa y digital: 23 catálogos de producto (CMYK), tarjetas de presentación, firmas de correo, infografías, variantes conmemorativas del logo, una serie de videos internos y micrositios para la intranet."
    },
    cover: "", images: [], videos: [], links: []
  },

  // ===================== MÁS PROYECTOS =====================
  // --- 3D y animación ---
  {
    id: "blaster", cats: ["3d"], year: "", title: "DL-44 Blaster",
    role: { en: "3D Artist", es: "Artista 3D" }, tools: "Maya · Substance Painter",
    desc: { en: "Realistic hard-surface model of a sci-fi prop, with a turntable video.", es: "Modelo hard-surface realista de un prop de ciencia ficción, con video de exhibición." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "fearful", cats: ["3d"], year: "", title: "Fearful Tales",
    role: { en: "3D Artist", es: "Artista 3D" }, tools: "Maya · Substance Painter",
    desc: { en: "3D recreation of a concept art piece, focused on modeling and lighting.", es: "Recreación en 3D de un concept art, enfocada en modelado e iluminación." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "naturalbalance", cats: ["3d", "video"], year: "2022", title: "Natural Balance",
    role: { en: "Freelance Animator", es: "Animador Freelance" }, tools: "Unity · After Effects",
    desc: { en: "Animated promotional video for the brand's product catalog.", es: "Video promocional animado del catálogo de productos de la marca." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "cescijuc", cats: ["3d", "video"], year: "2022", title: "CESCIJUC",
    role: { en: "Freelance Animator", es: "Animador Freelance" }, tools: "Maya · Premiere",
    desc: { en: "Christmas promotional video in 3D animation.", es: "Promocional navideño en animación 3D." },
    cover: "", images: [], videos: [], links: []
  },

  // --- Videojuegos y prototipos ---
  {
    id: "rhythmic", cats: ["games", "uiux"], year: "2021", title: "Rhythmic DJ",
    role: { en: "Lead Artist · Art & VFX", es: "Artista principal · Arte y VFX" }, tools: "Unity · Photoshop",
    desc: { en: "Rhythm game made in a SAE game jam. I created the art, visual effects and interface.", es: "Juego de ritmo creado en una game jam de SAE. Hice el arte, los efectos visuales y la interfaz." },
    cover: "", images: [], videos: [], links: [],
    note: { en: "Game design & programming: César Arnaldo Sánchez Hurtado.", es: "Diseño de juego y programación: César Arnaldo Sánchez Hurtado." }
  },
  {
    id: "deeperwords", cats: ["games", "uiux"], year: "", title: "Deeper Words",
    role: { en: "Game Designer · Developer", es: "Diseñador y desarrollador del juego" }, tools: "Unity",
    desc: { en: "Educational game for learning English, from design to development.", es: "Videojuego educativo para aprender inglés, del diseño al desarrollo." },
    cover: "", images: [], videos: [], links: [],
    note: { en: "Music & sound: Oscar Xavier Escobedo.", es: "Música y sonido: Oscar Xavier Escobedo." }
  },
  {
    id: "junkiedrag", cats: ["games", "uiux", "3d"], year: "", title: "Junkie Drag",
    role: { en: "UI Designer · 3D Artist", es: "Diseñador UI · Artista 3D" }, tools: "Unity · Photoshop · Maya",
    desc: { en: "Game interface design: battle screen, menus and state hierarchy, plus 3D characters.", es: "Diseño de interfaz de videojuego: pantalla de batalla, menús y jerarquía de estados, además de personajes 3D." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "babylon", cats: ["games", "graphic"], year: "", title: "Rise of Babylon",
    role: { en: "Pixel Artist (collaboration)", es: "Artista pixel art (colaboración)" }, tools: "Photoshop",
    desc: { en: "Pixel art scenes for an action-adventure visual novel set in ancient Babylon.", es: "Escenas en pixel art para una novela visual de acción y aventura ambientada en la antigua Babilonia." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "saebrawl", cats: ["games", "graphic", "video"], year: "", title: "SAE Brawl",
    role: { en: "Art Direction · Advertising", es: "Dirección de arte · Publicidad" }, tools: "Photoshop · Premiere",
    desc: { en: "Fighting game with rotoscoped characters: visual style, fight scenarios, green screen backgrounds and the tournament campaign.", es: "Juego de pelea con personajes en rotoscopia: estilo visual, escenarios de pelea, fondos de chroma y la campaña del torneo." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "lumina", cats: ["games", "3d"], year: "", title: "Lumina",
    role: { en: "Lighting Artist", es: "Artista de iluminación" }, tools: "Unity",
    desc: { en: "Interior lighting study in Unity.", es: "Estudio de iluminación de interiores en Unity." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "mentalshock", cats: ["games"], year: "", title: "Mental Shock",
    role: { en: "Level Designer", es: "Diseñador de niveles" }, tools: "Unity",
    desc: { en: "Prototype of a semi-open level, with its design documentation.", es: "Prototipo de un nivel semiabierto, con su documentación de diseño." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "whiteout", cats: ["games"], year: "", title: "Whiteout_F",
    role: { en: "Level & Mechanics Designer", es: "Diseñador de nivel y mecánicas" }, tools: "Unity",
    desc: { en: "3D platforming prototype built on a base character controller; I designed the level and its mechanics.", es: "Prototipo de plataformas 3D construido sobre un controlador de personaje base; diseñé el nivel y sus mecánicas." },
    cover: "", images: [], videos: [], links: []
  },

  // --- Video, cine y audio ---
  {
    id: "twilight", cats: ["video"], year: "", title: "This Twilight Garden",
    role: { en: "Storyboard · Illustration", es: "Storyboard · Ilustración" }, tools: "Photoshop · Premiere",
    desc: { en: "Animatic built from my own storyboard and illustrations.", es: "Animatic hecho a partir de mi storyboard e ilustraciones." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "beamracers", cats: ["video", "3d"], year: "", title: "Beam Racers",
    role: { en: "Sets · Vehicles · Editing (team)", es: "Sets · Vehículos · Edición (en equipo)" }, tools: "Stop motion · Premiere",
    desc: { en: "Stop motion short made as a team: I built sets and vehicles and edited the film.", es: "Cortometraje en stop motion hecho en equipo: construí sets y vehículos y edité el corto." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "skyrim", cats: ["video"], year: "", title: "Skyrim Exploration",
    role: { en: "Director · Editor", es: "Dirección · Edición" }, tools: "Premiere",
    desc: { en: "Tribute short film captured in-game.", es: "Cortometraje tributo grabado dentro del juego." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "auditory", cats: ["video", "games"], year: "", title: "Auditory Immersion",
    role: { en: "Sound Designer", es: "Diseñador sonoro" }, tools: "Unity · Audition",
    desc: { en: "Spatial sound design in 3D environments.", es: "Diseño de sonido espacial en entornos 3D." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "botbattle", cats: ["video"], year: "", title: "Mystical Cosmic Bot Battle",
    role: { en: "Composer · Producer", es: "Compositor · Productor" }, tools: "Ableton · Audition",
    desc: { en: "Original music composed and produced from a concept art piece.", es: "Música original compuesta y producida a partir de un concept art." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "slo", cats: ["video"], year: "", title: "Slö",
    role: { en: "Collaborator · Lead actor", es: "Colaborador · Protagonista" }, tools: "",
    desc: { en: "A visual and sound journey that contrasts a grey routine with a dreamlike world connected to nature.", es: "Un viaje visual y sonoro que contrasta la rutina gris con un mundo onírico conectado con la naturaleza." },
    cover: "", images: [], videos: [], links: []
  },

  // --- Diseño gráfico y marca ---
  {
    id: "multibrand", cats: ["graphic", "video"], year: "2025", title: "Multi-brand car dealership",
    role: { en: "Freelance Designer", es: "Diseñador Freelance" }, tools: "Photoshop · Premiere",
    desc: { en: "Seasonal promotions and social media videos for a multi-brand car dealership.", es: "Promociones de temporada y videos para redes de una agencia automotriz multimarca." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "dinamic", cats: ["graphic"], year: "2023", title: "Dinamic Company",
    role: { en: "Freelance Designer", es: "Diseñador Freelance" }, tools: "Photoshop · Illustrator",
    desc: { en: "Social media campaigns, internal templates, vector portrait illustration and survey data visualization.", es: "Campañas para redes, plantillas internas, ilustración vectorial de retrato y visualización de datos de encuestas." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "99designs", cats: ["graphic"], year: "", title: "Logo exploration · 99designs",
    role: { en: "Logo Designer", es: "Diseñador de logotipos" }, tools: "Illustrator",
    desc: { en: "Typographic exploration exercise with logo proposals for the 99designs platform.", es: "Ejercicio de exploración tipográfica con propuestas de logo para la plataforma 99designs." },
    cover: "", images: [], videos: [], links: []
  },
  {
    id: "ungamermas", cats: ["graphic"], year: "", title: "Un Gamer Más",
    role: { en: "Logo & Identity", es: "Logo e identidad" }, tools: "Illustrator",
    desc: { en: "Logo and visual identity for a video game review community on Facebook.", es: "Logo e identidad visual para una comunidad de reseñas de videojuegos en Facebook." },
    cover: "", images: [], videos: [], links: [],
    note: { en: "Fan community logo, inspired by Halo.", es: "Logo para una comunidad de fans, inspirado en Halo." }
  },
  {
    id: "freelance", cats: ["graphic"], year: "", title: "Freelance compilation",
    role: { en: "Designer · Illustrator", es: "Diseñador · Ilustrador" }, tools: "Photoshop · Illustrator",
    desc: { en: "A selection of logos, illustrations and brand pieces for independent clients.", es: "Una selección de logos, ilustraciones y piezas de marca para clientes independientes." },
    cover: "", images: [], videos: [], links: []
  }
];
