import fs from 'fs';
import path from 'path';
import vm from 'vm';

const projectDir = '/Users/ramzan/Pictures/savclip';
const baseSeoDir = path.join(projectDir, 'src', 'data', 'seo');
const enSeoDir = path.join(projectDir, 'src', 'data', 'seo', 'en');

const locales = ['pt', 'es', 'id', 'ar'];

const platformDict = {
  en: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube", snapchat: "Snapchat", telegram: "Telegram", x: "X (Twitter)" },
  pt: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube", snapchat: "Snapchat", telegram: "Telegram", x: "X (Twitter)" },
  es: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube", snapchat: "Snapchat", telegram: "Telegram", x: "X (Twitter)" },
  id: { instagram: "Instagram", facebook: "Facebook", tiktok: "TikTok", youtube: "YouTube", snapchat: "Snapchat", telegram: "Telegram", x: "X (Twitter)" },
  ar: { instagram: "إنستغرام", facebook: "فيسبوك", tiktok: "تيك توك", youtube: "يوتيوب", snapchat: "سناب شات", telegram: "تليجرام", x: "إكس (تويتر)" }
};

const toolDict = {
  pt: {
    "video-downloader": "Baixador de Vídeo", "reels-downloader": "Baixador de Reels", "audio-downloader": "Baixador de Áudio", "mp3-downloader": "Baixador de MP3",
    "photo-downloader": "Baixador de Fotos", "story-saver": "Salvador de Story", "story-viewer": "Visualizador de Story", "private-downloader": "Baixador Privado",
    "highlights-downloader": "Baixador de Destaques", "carousel-downloader": "Baixador de Carrossel", "dp-downloader": "Baixador de Foto de Perfil",
    "video-compressor": "Compressor de Vídeo", "profile-viewer": "Visualizador de Perfil", "anonymous-viewer": "Visualizador Anônimo",
    "playlist-downloader": "Baixador de Playlist", "shorts-downloader": "Baixador de Shorts", "to-mp3-converter": "Conversor para MP3",
    "thumbnail-downloader": "Baixador de Miniaturas", "subtitle-downloader": "Baixador de Legendas", "tag-generator": "Gerador de Tags",
    "title-generator": "Gerador de Títulos", "description-generator": "Gerador de Descrições", "comment-picker": "Selecionador de Comentários",
    "channel-audit-tool": "Ferramenta de Auditoria de Canal", "region-restriction-checker": "Verificador de Restrição de Região",
    "video-cutter": "Cortador de Vídeo", "group-video-downloader": "Baixador de Vídeos de Grupo", "live-video-downloader": "Baixador de Vídeos ao Vivo",
    "album-downloader": "Baixador de Álbum", "page-audit-tool": "Ferramenta de Auditoria de Página", "lens-saver": "Salvador de Lentes",
    "map-downloader": "Baixador de Mapa", "memories-downloader": "Baixador de Memórias", "private-story-downloader": "Baixador de Stories Privados",
    "spotlight-downloader": "Baixador de Spotlight", "stories-downloader": "Baixador de Stories", "bio-generator": "Gerador de Bio",
    "channel-link-generator": "Gerador de Link de Canal", "file-downloader": "Baixador de Arquivos", "gif-downloader": "Baixador de GIFs",
    "restricted-content-downloader": "Baixador de Conteúdo Restrito", "trending-channel-finder": "Localizador de Canais Populares",
    "caption-generator": "Gerador de Legendas", "trending-hashtag-generator": "Gerador de Hashtags Populares", "song-finder": "Localizador de Músicas",
    "analytics-viewer": "Visualizador de Estatísticas", "banner-downloader": "Baixador de Banner", "media-downloader": "Baixador de Mídia",
    "profile-picture-downloader": "Baixador de Foto de Perfil", "space-downloader": "Baixador de Spaces", "thread-downloader": "Baixador de Threads",
    "trending-hashtag-finder": "Localizador de Hashtags Populares"
  },
  es: {
    "video-downloader": "Descargador de Video", "reels-downloader": "Descargador de Reels", "audio-downloader": "Descargador de Audio", "mp3-downloader": "Descargador de MP3",
    "photo-downloader": "Descargador de Fotos", "story-saver": "Guardador de Historias", "story-viewer": "Visor de Historias", "private-downloader": "Descargador Privado",
    "highlights-downloader": "Descargador de Destacados", "carousel-downloader": "Descargador de Carruseles", "dp-downloader": "Descargador de Foto de Perfil",
    "video-compressor": "Compresor de Video", "profile-viewer": "Visor de Perfiles", "anonymous-viewer": "Visor Anónimo",
    "playlist-downloader": "Descargador de Listas de Reproducción", "shorts-downloader": "Descargador de Shorts", "to-mp3-converter": "Conversor a MP3",
    "thumbnail-downloader": "Descargador de Miniaturas", "subtitle-downloader": "Descargador de Subtítulos", "tag-generator": "Generador de Etiquetas",
    "title-generator": "Generador de Títulos", "description-generator": "Generador de Descripciones", "comment-picker": "Selector de Comentarios",
    "channel-audit-tool": "Herramienta de Auditoría de Canal", "region-restriction-checker": "Verificador de Restricciones Regionales",
    "video-cutter": "Cortador de Video", "group-video-downloader": "Descargador de Videos de Grupo", "live-video-downloader": "Descargador de Videos en Vivo",
    "album-downloader": "Descargador de Álbumes", "page-audit-tool": "Herramienta de Auditoría de Páginas", "lens-saver": "Guardador de Lentes",
    "map-downloader": "Descargador de Mapas", "memories-downloader": "Descargador de Recuerdos", "private-story-downloader": "Descargador de Historias Privadas",
    "spotlight-downloader": "Descargador de Spotlight", "stories-downloader": "Descargador de Historias", "bio-generator": "Generador de Biografías",
    "channel-link-generator": "Generador de Enlaces de Canal", "file-downloader": "Descargador de Archivos", "gif-downloader": "Descargador de GIFs",
    "restricted-content-downloader": "Descargador de Contenido Restringido", "trending-channel-finder": "Buscador de Canales de Tendencia",
    "caption-generator": "Generador de Subtítulos", "trending-hashtag-generator": "Generador de Hashtags de Tendencia", "song-finder": "Buscador de Canciones",
    "analytics-viewer": "Visor de Estadísticas", "banner-downloader": "Descargador de Banners", "media-downloader": "Descargador de Medios",
    "profile-picture-downloader": "Descargador de Fotos de Perfil", "space-downloader": "Descargador de Spaces", "thread-downloader": "Descargador de Hilos",
    "trending-hashtag-finder": "Buscador de Hashtags de Tendencia"
  },
  id: {
    "video-downloader": "Pengunduh Video", "reels-downloader": "Pengunduh Reels", "audio-downloader": "Pengunduh Audio", "mp3-downloader": "Pengunduh MP3",
    "photo-downloader": "Pengunduh Foto", "story-saver": "Penyimpan Cerita", "story-viewer": "Penonton Cerita", "private-downloader": "Pengunduh Privat",
    "highlights-downloader": "Pengunduh Sorotan", "carousel-downloader": "Pengunduh Korsel", "dp-downloader": "Pengunduh Foto Profil",
    "video-compressor": "Kompresor Video", "profile-viewer": "Penonton Profil", "anonymous-viewer": "Penonton Anonim",
    "playlist-downloader": "Pengunduh Daftar Putar", "shorts-downloader": "Pengunduh Shorts", "to-mp3-converter": "Konverter ke MP3",
    "thumbnail-downloader": "Pengunduh Thumbnail", "subtitle-downloader": "Pengunduh Subtitel", "tag-generator": "Pembuat Tag",
    "title-generator": "Pembuat Judul", "description-generator": "Pembuat Deskripsi", "comment-picker": "Pemilih Komentar",
    "channel-audit-tool": "Alat Audit Saluran", "region-restriction-checker": "Pemeriksa Pembatasan Wilayah",
    "video-cutter": "Pemotong Video", "group-video-downloader": "Pengunduh Video Grup", "live-video-downloader": "Pengunduh Video Langsung",
    "album-downloader": "Pengunduh Album", "page-audit-tool": "Alat Audit Halaman", "lens-saver": "Penyimpan Lensa",
    "map-downloader": "Pengunduh Peta", "memories-downloader": "Pengunduh Kenangan", "private-story-downloader": "Pengunduh Cerita Privat",
    "spotlight-downloader": "Pengunduh Spotlight", "stories-downloader": "Pengunduh Cerita", "bio-generator": "Pembuat Bio",
    "channel-link-generator": "Pembuat Tautan Saluran", "file-downloader": "Pengunduh File", "gif-downloader": "Pengunduh GIF",
    "restricted-content-downloader": "Pengunduh Konten Terbatas", "trending-channel-finder": "Pencari Saluran Populer",
    "caption-generator": "Pembuat Keterangan", "trending-hashtag-generator": "Pembuat Hashtag Populer", "song-finder": "Pencari Lagu",
    "analytics-viewer": "Penonton Analisis", "banner-downloader": "Pengunduh Banner", "media-downloader": "Pengunduh Media",
    "profile-picture-downloader": "Pengunduh Foto Profil", "space-downloader": "Pengunduh Spaces", "thread-downloader": "Pengunduh Thread",
    "trending-hashtag-finder": "Pencari Hashtag Populer"
  },
  ar: {
    "video-downloader": "تحميل فيديو", "reels-downloader": "تحميل ريلز", "audio-downloader": "تحميل صوت", "mp3-downloader": "تحميل MP3",
    "photo-downloader": "تحميل صور", "story-saver": "حفظ القصص", "story-viewer": "مشاهدة القصص", "private-downloader": "التحميل الخاص",
    "highlights-downloader": "تحميل الهايلايت", "carousel-downloader": "تحميل الكاروسيل", "dp-downloader": "تحميل صورة الحساب",
    "video-compressor": "ضغط الفيديو", "profile-viewer": "عارض الحسابات", "anonymous-viewer": "عارض مجهول",
    "playlist-downloader": "تحميل قوائم التشغيل", "shorts-downloader": "تحميل شورتس", "to-mp3-converter": "تحويل إلى MP3",
    "thumbnail-downloader": "تحميل الصور المصغرة", "subtitle-downloader": "تحميل الترجمة", "tag-generator": "مولد الكلمات الدلالية",
    "title-generator": "مولد العناوين", "description-generator": "مولد الوصف", "comment-picker": "أداة اختيار التعليقات",
    "channel-audit-tool": "أداة تدقيق القنوات", "region-restriction-checker": "أداة فحص القيود الجغرافية",
    "video-cutter": "قص الفيديو", "group-video-downloader": "تحميل فيديوهات المجموعات", "live-video-downloader": "تحميل البث المباشر",
    "album-downloader": "تحميل الألبومات", "page-audit-tool": "أداة تدقيق الصفحات", "lens-saver": "حفظ عدسات سناب",
    "map-downloader": "تحميل خرائط سناب", "memories-downloader": "تحميل ذكريات سناب", "private-story-downloader": "تحميل القصص الخاصة",
    "spotlight-downloader": "تحميل أضواء سناب", "stories-downloader": "تحميل قصص سناب", "bio-generator": "مولد السيرة الذاتية",
    "channel-link-generator": "مولد روابط القنوات", "file-downloader": "تنزيل الملفات", "gif-downloader": "تحميل صور GIF",
    "restricted-content-downloader": "تحميل المحتوى المقيد", "trending-channel-finder": "مكتشف القنوات الرائجة",
    "caption-generator": "مولد النصوص التوضيحية", "trending-hashtag-generator": "مولد الهاشتاقات الرائجة", "song-finder": "مكتشف الأغاني",
    "analytics-viewer": "عارض إحصائيات الحساب", "banner-downloader": "تحميل البانر", "media-downloader": "تحميل الوسائط",
    "profile-picture-downloader": "تحميل صورة الحساب", "space-downloader": "تنزيل مساحات تويتر", "thread-downloader": "تحميل ثريدز",
    "trending-hashtag-finder": "مكتشف الهاشتاقات الرائجة"
  }
};

const commonSentences = {
  pt: {
    "Why SavClip is the Best": "Por que o SavClip é o Melhor",
    "Welcome to SavClip, the": "Bem-vindo ao SavClip, a plataforma definitiva para",
    "Get your": "Obtenha seus arquivos em",
    "in seconds with our high-speed servers.": "segundos com nossos servidores de alta velocidade.",
    "Our advanced downloading engine ensures that": "Nosso mecanismo de download avançado garante que",
    "is delivered in the highest resolution available": "seja entregue na resolução mais alta disponível",
    "We take pride in providing a clean": "Temos orgulho de fornecer uma experiência limpa",
    "experience, allowing you to enjoy your content": "e profissional, permitindo que você aproveite seu conteúdo",
    "How to Download": "Como Baixar",
    "SavClip is designed for maximum efficiency. You can save any public": "O SavClip foi projetado para máxima eficiência. Você pode salvar qualquer conteúdo público",
    "in just three quick steps:": "em apenas três passos rápidos:",
    "Copy Link: Navigate to the content you want to save and click copy link.": "Copiar Link: Navegue até o conteúdo que deseja salvar e copie a URL.",
    "Paste URL: Head over to SavClip and paste the link into the box at the top of this page.": "Colar URL: Acesse o SavClip e cole o link no campo no topo desta página.",
    "Download Now: Click the Download button to save the media to your device.": "Baixar: Clique no botão de Download para salvar a mídia no seu dispositivo.",
    "Security is our highest priority.": "A segurança é nossa maior prioridade.",
    "Everything happens online in your browser, ensuring a fast": "Tudo acontece online no seu navegador, garantindo rapidez e privacidade.",
    "Is it free to download": "É gratuito para baixar",
    "Do I need to install any apps or software?": "Preciso instalar algum aplicativo ou software?",
    "No, SavClip is a browser-based tool. You don't need to install any apps": "Não, o SavClip é uma ferramenta online. Você não precisa instalar nenhum app ou extensão.",
    "Is it safe to use SavClip?": "É seguro usar o SavClip?",
    "Yes, SavClip is a secure and private tool. We don't require account logins": "Sim, o SavClip é uma ferramenta segura e privada. Não exigimos login de conta.",
    "Works on Any Device": "Funciona em Qualquer Dispositivo",
    "Whether you're on the go using our downloader for iPhone and Android": "Quer você esteja no celular com iPhone e Android, ou no computador.",
    "No app installations are ever required": "Nenhuma instalação de aplicativo é necessária."
  },
  es: {
    "Why SavClip is the Best": "Por qué SavClip es el Mejor",
    "Welcome to SavClip, the": "Bienvenido a SavClip, la plataforma definitiva para",
    "Get your": "Obtén tus archivos en",
    "in seconds with our high-speed servers.": "segundos con nuestros servidores de alta velocidad.",
    "Our advanced downloading engine ensures that": "Nuestro avanzado motor de descarga garantiza que",
    "is delivered in the highest resolution available": "se entregue en la resolución más alta disponible",
    "We take pride in providing a clean": "Nos enorgullece ofrecer una experiencia limpia",
    "experience, allowing you to enjoy your content": "y profesional, permitiéndote disfrutar de tu contenido",
    "How to Download": "Cómo Descargar",
    "SavClip is designed for maximum efficiency. You can save any public": "SavClip está diseñado para una máxima eficiencia. Puedes guardar cualquier contenido público",
    "in just three quick steps:": "en solo tres rápidos pasos:",
    "Copy Link: Navigate to the content you want to save and click copy link.": "Copiar Enlace: Navega al contenido que deseas guardar y copia el enlace.",
    "Paste URL: Head over to SavClip and paste the link into the box at the top of this page.": "Pegar URL: Ve a SavClip y pega el enlace en la barra de búsqueda superior.",
    "Download Now: Click the Download button to save the media to your device.": "Descargar: Haz clic en el botón de Descargar para guardar el archivo en tu dispositivo.",
    "Security is our highest priority.": "La seguridad es nuestra mayor prioridad.",
    "Everything happens online in your browser, ensuring a fast": "Todo sucede en línea en tu navegador, garantizando un servicio rápido y seguro.",
    "Is it free to download": "¿Es gratis descargar",
    "Do I need to install any apps or software?": "¿Necesito instalar alguna aplicación o software?",
    "No, SavClip is a browser-based tool. You don't need to install any apps": "No, SavClip es una herramienta basada en navegador. No necesitas instalar apps o extensiones.",
    "Is it safe to use SavClip?": "¿Es seguro usar SavClip?",
    "Yes, SavClip is a secure and private tool. We don't require account logins": "Sí, SavClip es una herramienta segura y privada. No requerimos inicios de sesión.",
    "Works on Any Device": "Funciona en cualquier dispositivo",
    "Whether you're on the go using our downloader for iPhone and Android": "Ya sea que estés en movimiento usando tu celular o en tu computadora.",
    "No app installations are ever required": "No se requiere ninguna instalación de aplicaciones."
  },
  id: {
    "Why SavClip is the Best": "Mengapa SavClip adalah yang Terbaik",
    "Welcome to SavClip, the": "Selamat datang di SavClip, platform terbaik untuk",
    "Get your": "Dapatkan file Anda dalam",
    "in seconds with our high-speed servers.": "detik dengan server berkecepatan tinggi kami.",
    "Our advanced downloading engine ensures that": "Mesin pengunduhan canggih kami memastikan bahwa",
    "is delivered in the highest resolution available": "dikirimkan dalam resolusi tertinggi yang tersedia",
    "We take pride in providing a clean": "Kami bangga menyediakan pengalaman bersih",
    "experience, allowing you to enjoy your content": "dan profesional, memungkinkan Anda menikmati konten Anda",
    "How to Download": "Cara Mengunduh",
    "SavClip is designed for maximum efficiency. You can save any public": "SavClip dirancang untuk efisiensi maksimum. Anda dapat menyimpan konten publik apa pun",
    "in just three quick steps:": "hanya dalam tiga langkah cepat:",
    "Copy Link: Navigate to the content you want to save and click copy link.": "Salin Tautan: Buka konten yang ingin Anda simpan dan salin tautannya.",
    "Paste URL: Head over to SavClip and paste the link into the box at the top of this page.": "Tempel URL: Kunjungi SavClip dan tempel tautan ke kotak di atas halaman ini.",
    "Download Now: Click the Download button to save the media to your device.": "Unduh: Klik tombol Unduh untuk menyimpan media ke perangkat Anda.",
    "Security is our highest priority.": "Keamanan adalah prioritas tertinggi kami.",
    "Everything happens online in your browser, ensuring a fast": "Semuanya terjadi secara online di browser Anda, memastikan layanan cepat dan aman.",
    "Is it free to download": "Apakah gratis untuk mengunduh",
    "Do I need to install any apps or software?": "Apakah saya perlu menginstal aplikasi atau perangkat lunak apa pun?",
    "No, SavClip is a browser-based tool. You don't need to install any apps": "Tidak, SavClip adalah alat berbasis browser. Anda tidak perlu menginstal aplikasi apa pun.",
    "Is it safe to use SavClip?": "Apakah aman menggunakan SavClip?",
    "Yes, SavClip is a secure and private tool. We don't require account logins": "Ya, SavClip adalah alat yang aman dan pribadi. Kami tidak memerlukan login akun.",
    "Works on Any Device": "Bekerja di Perangkat Apa Pun",
    "Whether you're on the go using our downloader for iPhone and Android": "Apakah Anda sedang bepergian menggunakan HP Android/iPhone atau komputer desktop.",
    "No app installations are ever required": "Tidak diperlukan instalasi aplikasi sama sekali."
  },
  ar: {
    "Why SavClip is the Best": "لماذا يعد SavClip الأفضل",
    "Welcome to SavClip, the": "مرحبًا بك في SavClip، الوجهة المثالية لـ",
    "Get your": "احصل على ملفاتك في",
    "in seconds with our high-speed servers.": "ثوانٍ معدودة عبر خوادمنا فائقة السرعة.",
    "Our advanced downloading engine ensures that": "يضمن محرك التنزيل المتقدم لدينا أن يتم تنزيل",
    "is delivered in the highest resolution available": "بأعلى دقة متاحة على الإنترنت",
    "We take pride in providing a clean": "نحن نفخر بتقديم تجربة تحميل نظيفة",
    "experience, allowing you to enjoy your content": "واحترافية، مما يتيح لك الاستمتاع بالمحتوى الخاص بك",
    "How to Download": "كيفية التنزيل",
    "SavClip is designed for maximum efficiency. You can save any public": "تم تصميم SavClip لتحقيق أقصى قدر من الكفاءة. يمكنك حفظ أي محتوى عام",
    "in just three quick steps:": "في ثلاث خطوات سريعة فقط:",
    "Copy Link: Navigate to the content you want to save and click copy link.": "نسخ الرابط: انتقل إلى المحتوى الذي تريد حفظه وقم بنسخ الرابط.",
    "Paste URL: Head over to SavClip and paste the link into the box at the top of this page.": "لصق الرابط: انتقل إلى SavClip والصق الرابط في المربع أعلى هذه الصفحة.",
    "Download Now: Click the Download button to save the media to your device.": "تحميل: انقر فوق زر التحميل لحفظ الوسائط مباشرة إلى جهازك.",
    "Security is our highest priority.": "الأمان والخصوصية هما أولويتنا القصوى.",
    "Everything happens online in your browser, ensuring a fast": "تتم العملية بالكامل أونلاين عبر متصفحك، مما يضمن السرعة وحماية الخصوصية.",
    "Is it free to download": "هل تنزيل مقاطع",
    "Do I need to install any apps or software?": "هل أحتاج إلى تثبيت أي برامج أو تطبيقات؟",
    "No, SavClip is a browser-based tool. You don't need to install any apps": "لا، موقع SavClip يعمل مباشرة من المتصفح ولا يتطلب تثبيت أي تطبيقات أو إضافات.",
    "Is it safe to use SavClip?": "هل استخدام موقع SavClip آمن؟",
    "Yes, SavClip is a secure and private tool. We don't require account logins": "نعم، موقعنا آمن وسري تماماً، ولا يتطلب أي معلومات تسجيل دخول أو كلمات مرور.",
    "Works on Any Device": "يعمل على أي جهاز",
    "Whether you're on the go using our downloader for iPhone and Android": "سواء كنت تستخدم الهاتف المحمول (آيفون وأندرويد) أو جهاز الكمبيوتر.",
    "No app installations are ever required": "لا يلزم تثبيت أي برامج على الإطلاق."
  }
};

function getPlatformKey(filename) {
  if (filename.startsWith('instagram-')) return 'instagram';
  if (filename.startsWith('facebook-')) return 'facebook';
  if (filename.startsWith('tiktok-')) return 'tiktok';
  if (filename.startsWith('youtube-')) return 'youtube';
  if (filename.startsWith('snapchat-')) return 'snapchat';
  if (filename.startsWith('telegram-')) return 'telegram';
  if (filename.startsWith('x-')) return 'x';
  return 'general';
}

function getToolKey(filename) {
  const parts = filename.replace('.ts', '').split('-');
  parts.shift(); // remove platform
  return parts.join('-');
}

function translateString(str, lang, platform, tool) {
  if (!str) return '';
  let result = str;

  // Replace common templates and sentences
  for (const [enKey, langVal] of Object.entries(commonSentences[lang])) {
    const regex = new RegExp(enKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    result = result.replace(regex, langVal);
  }

  // Replace platform names
  const enPlatforms = platformDict['en'];
  const langPlatforms = platformDict[lang];
  for (const [key, pName] of Object.entries(enPlatforms)) {
    const regex = new RegExp('\\b' + pName + '\\b', 'gi');
    result = result.replace(regex, langPlatforms[key]);
  }

  // Handle specific tool replacements
  const toolEn = tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const toolLang = toolDict[lang][tool] || toolEn;
  result = result.replace(new RegExp(toolEn, 'gi'), toolLang);

  return result;
}

function translateObject(obj, lang, platform, tool) {
  if (typeof obj === 'string') {
    return translateString(obj, lang, platform, tool);
  } else if (Array.isArray(obj)) {
    return obj.map(item => translateObject(item, lang, platform, tool));
  } else if (typeof obj === 'object' && obj !== null) {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = translateObject(obj[key], lang, platform, tool);
    }
    return newObj;
  }
  return obj;
}

const enFiles = fs.readdirSync(enSeoDir).filter(f => f.endsWith('.ts'));

for (const filename of enFiles) {
  const filePath = path.join(enSeoDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse using VM sandbox.
  // DO NOT use regex replacements that strip number values of keys like 'level: 2'
  const jsContent = content
    .replace(/export const/g, 'global.')
    .replace(/import type .*/g, '');

  const context = { global: {} };
  vm.createContext(context);
  try {
    vm.runInContext(jsContent, context);
  } catch (err) {
    console.error(`Error parsing ${filename}:`, err);
    continue;
  }

  const { articleSections, faqs, meta, header } = context.global;
  const platform = getPlatformKey(filename);
  const tool = getToolKey(filename);

  for (const lang of locales) {
    const targetDir = path.join(baseSeoDir, lang);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const targetPath = path.join(targetDir, filename);
    
    // Skip if it's one of the 3 already customized files in Portuguese (we don't want to overwrite them)
    if (lang === 'pt' && ['instagram-reels-downloader.ts', 'tiktok-video-downloader.ts', 'snapchat-video-downloader.ts'].includes(filename)) {
      continue;
    }

    const transArticle = translateObject(articleSections, lang, platform, tool);
    const transFaqs = translateObject(faqs, lang, platform, tool);
    const transMeta = translateObject(meta, lang, platform, tool);
    const transHeader = translateObject(header, lang, platform, tool);

    const fileContent = `export const articleSections = ${JSON.stringify(transArticle, null, 2)};

export const faqs = ${JSON.stringify(transFaqs, null, 2)};

export const meta = ${JSON.stringify(transMeta, null, 2)};

export const header = ${JSON.stringify(transHeader, null, 2)};
`;

    fs.writeFileSync(targetPath, fileContent, 'utf8');
  }
}

console.log('Successfully generated all translated SEO files for pt, es, id, and ar!');
