import fs from 'fs';
import path from 'path';

const baseSeoDir = path.join(process.cwd(), 'src', 'data', 'seo');

const ptReels = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Por que o SavClip é o Melhor Baixador de Reels do Instagram"
  },
  {
    type: "paragraph",
    content: "Bem-vindo ao SavClip, a plataforma definitiva para baixar Reels do Instagram com facilidade profissional. No mundo das redes sociais, os Reels se tornaram o centro das atenções. Se você deseja salvar um vídeo de viagem incrível ou um tutorial útil, nosso baixador de Reels garante que você salve tudo com qualidade máxima. Oferecemos uma solução rápida, segura e totalmente gratuita para salvar qualquer Reel diretamente no seu celular ou computador."
  },
  {
    type: "heading",
    level: 2,
    content: "Como Baixar Reels do Instagram"
  },
  {
    type: "list",
    items: [
      "Copiar Link: Abra o Instagram e copie o link do Reel que deseja baixar.",
      "Colar URL: Acesse o SavClip e cole o link no campo de entrada no topo desta página.",
      "Baixar: Clique no botão de Download para salvar o vídeo do Reels em HD instantaneamente."
    ]
  },
  {
    type: "heading",
    level: 2,
    content: "Baixar Reels do Instagram Sem Marca D'água"
  },
  {
    type: "paragraph",
    content: "Uma das maiores vantagens do SavClip é a remoção automática de marcas d'água. Nosso sistema extrai diretamente o arquivo original dos servidores do Instagram, garantindo que você tenha um vídeo limpo e sem logotipos para assistir offline ou compartilhar com amigos."
  }
];

export const faqs = [
  {
    q: "O download de Reels pelo SavClip é gratuito?",
    a: "Sim, nosso serviço é 100% gratuito e você pode fazer quantos downloads quiser sem nenhuma cobrança."
  },
  {
    q: "Preciso fazer login na minha conta do Instagram?",
    a: "Não, o SavClip funciona de forma totalmente anônima e segura, sem precisar de senhas ou logins."
  }
];

export const meta = {
  title: "Baixar Reels do Instagram Grátis em HD (Sem Marca D'água) – SavClip",
  description: "O melhor baixador de Reels do Instagram online. Salve vídeos do Reels em MP4 com áudio de alta qualidade e sem marca d'água no celular ou PC."
};

export const header = {
  title: "Baixar Reels do Instagram",
  title1: "Baixar",
  title2: "Reels Instagram",
  title3: "Qualidade HD",
  subtitle: "Salve vídeos do Reels do Instagram sem marca d'água de forma rápida e segura."
};
`;

const ptTikTok = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Como Baixar Vídeos do TikTok Sem Marca d'Água"
  },
  {
    type: "paragraph",
    content: "O SavClip permite que você salve vídeos do TikTok de maneira simples e rápida. Copie o link de qualquer vídeo do TikTok, cole no campo de pesquisa e salve em qualidade original em poucos segundos. O processo é totalmente online, direto no navegador."
  },
  {
    type: "heading",
    level: 2,
    content: "Remoção de Logotipo Grátis"
  },
  {
    type: "paragraph",
    content: "Nosso conversor de TikTok para MP4 remove o logo do aplicativo para fornecer um vídeo limpo. Aproveite a máxima qualidade visual de seus criadores favoritos sem interrupções."
  }
];

export const faqs = [
  {
    q: "Como remover a marca d'água do TikTok?",
    a: "Basta colar a URL do vídeo do TikTok no SavClip e clicar em baixar. A marca d'água será removida automaticamente."
  }
];

export const meta = {
  title: "Baixar Vídeo do TikTok Sem Marca d'Água Online – SavClip",
  description: "Baixe vídeos do TikTok em HD sem marca d'água (watermark). Conversor de TikTok para MP4 e MP3 gratuito, rápido e ilimitado."
};

export const header = {
  title: "Baixar Vídeo do TikTok",
  title1: "Download",
  title2: "Vídeos do TikTok",
  title3: "Sem Marca d'Água",
  subtitle: "Baixe vídeos do TikTok em formato MP4 de forma limpa e com alta qualidade."
};
`;

const ptSnapchat = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Baixar Vídeos do Snapchat Online"
  },
  {
    type: "paragraph",
    content: "O Snapchat é cheio de momentos incríveis na plataforma Spotlight e Stories. O SavClip ajuda você a baixar esses vídeos diretamente para a galeria do seu celular de forma simples e rápida."
  }
];

export const faqs = [
  {
    q: "É seguro baixar vídeos do Snapchat?",
    a: "Sim, o SavClip usa conexões seguras e não armazena nenhuma informação sobre seus downloads."
  }
];

export const meta = {
  title: "Baixar Vídeos do Snapchat: Salve Stories e Spotlight – SavClip",
  description: "Baixe fotos e vídeos do Snapchat online. Salve conteúdos públicos do Spotlight e Stories em alta qualidade diretamente no seu dispositivo."
};

export const header = {
  title: "Baixar Vídeos do Snapchat",
  title1: "Salvar",
  title2: "Snapchat Vídeos",
  title3: "Grátis Online",
  subtitle: "Baixe vídeos do Spotlight e Stories do Snapchat em qualidade original."
};
`;

// es translations
const esReels = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Por qué usar nuestro Descargador de Reels de Instagram"
  },
  {
    type: "paragraph",
    content: "SavClip es el mejor descargador de Reels de Instagram online. Guarda videos de Reels en alta definición de forma rápida y sin límites. No necesitas instalar ninguna aplicación, funciona directo en tu navegador en Android, iPhone o computadora."
  },
  {
    type: "heading",
    level: 2,
    content: "Pasos para Descargar Reels"
  },
  {
    type: "list",
    items: [
      "Copiar Enlace: Abre Instagram y copia la URL del Reel que deseas guardar.",
      "Pegar Enlace: Visita SavClip y pega el enlace en el buscador de la página.",
      "Descargar: Haz clic en el botón para procesar y guardar el Reel en formato MP4 HD."
    ]
  }
];

export const faqs = [
  {
    q: "¿Cómo descargar Reels de Instagram sin marca de agua?",
    a: "Simplemente copia el enlace del video, pégalo en SavClip y haz clic en Descargar. Nuestra herramienta elimina el logo automáticamente."
  }
];

export const meta = {
  title: "Descargar Reels de Instagram Gratis en HD sin Marca de Agua – SavClip",
  description: "La mejor herramienta para descargar Reels de Instagram online. Guarda videos de Reels en formato MP4 de alta calidad sin registrarte."
};

export const header = {
  title: "Descargar Reels de Instagram",
  title1: "Descargar",
  title2: "Reels de Instagram",
  title3: "Sin Marca de Agua",
  subtitle: "Guarda Reels de Instagram en tu teléfono o PC en resolución HD con audio."
};
`;

const esTikTok = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Descargar Videos de TikTok Gratis sin Marca de Agua"
  },
  {
    type: "paragraph",
    content: "Baja cualquier video de TikTok sin logotipos molestos en tu celular o PC. Con SavClip, el proceso es sumamente rápido: solo pegas el enlace y descargas el video limpio en Full HD de inmediato."
  }
];

export const faqs = [
  {
    q: "¿Es gratis descargar videos de TikTok?",
    a: "Sí, SavClip es completamente gratuito y no tiene límites diarios de descarga."
  }
];

export const meta = {
  title: "Descargar Videos de TikTok sin Marca de Agua en HD – SavClip",
  description: "Descarga videos de TikTok gratis en HD sin marca de agua. Convierte TikTok a MP4 o MP3 al instante desde tu celular o computadora."
};

export const header = {
  title: "Descargar Videos de TikTok",
  title1: "Descargar",
  title2: "TikTok Videos",
  title3: "Sin Logo",
  subtitle: "Guarda videos de TikTok en formato MP4 sin marca de agua al instante."
};
`;

const esSnapchat = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Descargar Videos de Snapchat de forma Segura"
  },
  {
    type: "paragraph",
    content: "Nuestra herramienta te permite descargar videos de Snapchat de la sección Spotlight o historias públicas en alta resolución. Salva tus mejores momentos sin comprometer tu privacidad."
  }
];

export const faqs = [
  {
    q: "¿Necesito una cuenta para descargar videos de Snapchat?",
    a: "No, no necesitas iniciar sesión ni ingresar tus datos de Snapchat para usar SavClip."
  }
];

export const meta = {
  title: "Descargar Videos de Snapchat Online: Spotlights y Stories – SavClip",
  description: "Guarda videos de Snapchat en tu galería. Descarga contenido público de Spotlight y Stories en alta calidad sin aplicaciones adicionales."
};

export const header = {
  title: "Descargar Videos de Snapchat",
  title1: "Guardar",
  title2: "Snapchat Videos",
  title3: "Online en HD",
  subtitle: "Descarga videos de historias públicas y Spotlight de Snapchat en formato MP4."
};
`;

// id translations
const idReels = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Unduh Reels Instagram Tanpa Watermark"
  },
  {
    type: "paragraph",
    content: "Selamat datang di SavClip, alat terbaik untuk mengunduh Reels Instagram secara gratis. Simpan video Reels dengan resolusi HD paling jernih ke galeri ponsel Anda. Nikmati menonton video favorit secara offline kapan saja dan di mana saja."
  }
];

export const faqs = [
  {
    q: "Apakah download Reels Instagram di SavClip aman?",
    a: "Sangat aman. Kami tidak meminta data login atau menyimpan riwayat unduhan Anda."
  }
];

export const meta = {
  title: "Unduh Reels Instagram HD Tanpa Watermark Gratis – SavClip",
  description: "Cara termudah untuk download Reels Instagram online dengan audio. Unduh video Reels dalam format MP4 HD secara gratis tanpa login."
};

export const header = {
  title: "Unduh Reels Instagram",
  title1: "Unduh",
  title2: "Reels Instagram",
  title3: "Tanpa Watermark",
  subtitle: "Simpan video Reels Instagram favorit Anda dengan kualitas HD dan suara asli."
};
`;

const idTikTok = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Download Video TikTok Tanpa Watermark HD"
  },
  {
    type: "paragraph",
    content: "SavClip memungkinkan Anda untuk mengunduh video TikTok tanpa logo dengan kualitas tinggi secara instan. Cukup salin tautan video, tempel ke kolom di atas, dan unduh sebagai file MP4 bersih."
  }
];

export const faqs = [
  {
    q: "Bagaimana cara download video TikTok tanpa watermark?",
    a: "Salin tautan video di aplikasi TikTok, tempelkan ke kolom pencarian SavClip, dan klik tombol download."
  }
];

export const meta = {
  title: "Download Video TikTok Tanpa Watermark HD Online – SavClip",
  description: "Unduh video TikTok tanpa watermark secara online dan gratis. Simpan video TikTok ke format MP4 HD atau audio MP3 dengan cepat."
};

export const header = {
  title: "Download Video TikTok",
  title1: "Unduh",
  title2: "Video TikTok",
  title3: "Tanpa Logo",
  subtitle: "Simpan video TikTok tanpa watermark dengan kualitas HD secara gratis."
};
`;

const idSnapchat = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "Download Video Snapchat Secara Online"
  },
  {
    type: "paragraph",
    content: "Unduh video cerita publik dan konten Spotlight Snapchat dengan resolusi asli. SavClip mempermudah penyimpanan Snap video tanpa batasan."
  }
];

export const faqs = [
  {
    q: "Apakah video Snapchat diunduh dengan kualitas tinggi?",
    a: "Ya, kami selalu mengambil file media asli dalam resolusi tertinggi yang tersedia di server."
  }
];

export const meta = {
  title: "Download Video Snapchat Online: Simpan Story & Spotlight – SavClip",
  description: "Unduh video Snapchat ke galeri HP Anda. Simpan konten publik dari Spotlight dan Story Snapchat dalam resolusi tinggi dengan aman."
};

export const header = {
  title: "Download Video Snapchat",
  title1: "Simpan",
  title2: "Video Snapchat",
  title3: "HD Online",
  subtitle: "Unduh video cerita publik dan sorotan Spotlight Snapchat langsung ke perangkat Anda."
};
`;

// ar translations
const arReels = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "لماذا يعد SavClip أفضل موقع تحميل ريلز انستقرام"
  },
  {
    type: "paragraph",
    content: "مرحباً بك في موقعنا لتحميل مقاطع الريلز من انستقرام مجاناً وبجودة عالية. نحرص على تقديم أفضل تجربة للمستخدم من خلال توفير تنزيل سريع لملفات الفيديو بصيغة MP4 وبدون أي علامة مائية أو شعار مزعج."
  }
];

export const faqs = [
  {
    q: "هل تنزيل مقاطع الريلز مجاني بالكامل؟",
    a: "نعم، موقع SavClip مجاني تماماً ولا يتطلب أي رسوم أو تسجيل حساب."
  }
];

export const meta = {
  title: "تحميل ريلز انستقرام بدون علامة مائية بجودة عالية HD – SavClip",
  description: "أدخل رابط ريلز انستقرام لحفظ الفيديو بدون علامة مائية أونلاين وبسرعة فائقة."
};

export const header = {
  title: "تحميل ريلز انستقرام",
  title1: "تنزيل",
  title2: "ريلز انستقرام",
  title3: "بدون علامة مائية",
  subtitle: "قم بتحميل مقاطع ريلز انستجرام المفضلة لديك بجودة عالية وبشكل آمن."
};
`;

const arTikTok = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "تحميل مقاطع تيك توك بدون علامة مائية"
  },
  {
    type: "paragraph",
    content: "قم بحفظ مقاطع تيك توك بدون حقوق أو لوجو بجودة عالية HD. كل ما عليك فعله هو نسخ رابط الفيديو من التطبيق ولصقه هنا والضغط على زر تنزيل."
  }
];

export const faqs = [
  {
    q: "كيف يمكنني إزالة العلامة المائية للفيديو تيك توك؟",
    a: "فقط قم بلصق الرابط في موقعنا، وسيقوم النظام باستخراج الفيديو الأصلي بدون الشعار والتحميل مباشرة."
  }
];

export const meta = {
  title: "تحميل فيديو تيك توك بدون علامة مائية بجودة عالية HD – SavClip",
  description: "أسرع موقع لتحميل فيديوهات تيك توك بدون علامة مائية أون لاين. قم بتحويل مقاطع تيك توك إلى MP4 أو MP3 بجودة أصلية مجاناً."
};

export const header = {
  title: "تحميل فيديوهات تيك توك",
  title1: "تنزيل",
  title2: "فيديو تيك توك",
  title3: "بدون حقوق",
  subtitle: "حمل مقاطع فيديو تيك توك بدون علامة مائية وبجودة عالية مجاناً."
};
`;

const arSnapchat = `
export const articleSections = [
  {
    type: "heading",
    level: 2,
    content: "أداة تحميل مقاطع سناب شات العامة"
  },
  {
    type: "paragraph",
    content: "موقع تنزيل قصص سناب شات ومنصة أضواء مجاناً. احفظ الفيديوهات بجودتها الأصلية ودون الحاجة لتنزيل أي برامج أو تطبيقات إضافية."
  }
];

export const faqs = [
  {
    q: "هل يمكنني تنزيل منصة أضواء سناب شات؟",
    a: "نعم، يمكنك تحميل أي مقطع فيديو عام في منصة أضواء (Spotlight) بمجرد نسخ الرابط ولصقه هنا."
  }
];

export const meta = {
  title: "تحميل مقاطع سناب شات أونلاين: حفظ القصص ومنصة أضواء – SavClip",
  description: "حفظ مقاطع فيديو وصور سناب شات بسهولة. حمل محتوى منصة أضواء وقصص سناب شات العامة بجودة عالية مباشرة إلى جهازك."
};

export const header = {
  title: "تحميل فيديوهات سناب شات",
  title1: "تنزيل",
  title2: "سناب شات مقاطع",
  title3: "أونلاين مجاناً",
  subtitle: "احفظ قصص سناب شات ومنصة أضواء العامة بجودة عالية بصيغة MP4."
};
`;

const targets = {
  pt: {
    'instagram-reels-downloader.ts': ptReels,
    'tiktok-video-downloader.ts': ptTikTok,
    'snapchat-video-downloader.ts': ptSnapchat
  },
  es: {
    'instagram-reels-downloader.ts': esReels,
    'tiktok-video-downloader.ts': esTikTok,
    'snapchat-video-downloader.ts': esSnapchat
  },
  id: {
    'instagram-reels-downloader.ts': idReels,
    'tiktok-video-downloader.ts': idTikTok,
    'snapchat-video-downloader.ts': idSnapchat
  },
  ar: {
    'instagram-reels-downloader.ts': arReels,
    'tiktok-video-downloader.ts': arTikTok,
    'snapchat-video-downloader.ts': arSnapchat
  }
};

for (const [lang, files] of Object.entries(targets)) {
  const dirPath = path.join(baseSeoDir, lang);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
  
  for (const [filename, content] of Object.entries(files)) {
    const filePath = path.join(dirPath, filename);
    fs.writeFileSync(filePath, content.trim(), 'utf8');
    console.log(`Created SEO metadata file: ${filePath}`);
  }
}

console.log('All localized SEO TS files successfully generated!');
