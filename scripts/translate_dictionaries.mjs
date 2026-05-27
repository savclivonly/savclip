import fs from 'fs';
import path from 'path';

const projectDir = '/Users/ramzan/Pictures/savclip';
const dictsDir = path.join(projectDir, 'src', 'dictionaries');

const translations = {
  pt: {
    "home": {
      "hero": {
        "title_1": "Tudo em Um",
        "title_2": "Redes Sociais",
        "title_3": "Baixador de Vídeo (HD)",
        "subtitle": "Baixador profissional para Instagram, TikTok, YouTube e Facebook — anônimo, rápido e gratuito"
      },
      "trust": {
        "users": "Confiado por mais de 1.200.000 usuários",
        "no_login": "Sem Login",
        "free": "100% Grátis",
        "unlimited": "Ilimitado",
        "safe": "Seguro",
        "fast": "Rápido",
        "watermark": "Sem Marca D'água"
      },
      "intro": "O SavClip é um poderoso baixador de vídeo gratuito que permite aos usuários baixar vídeos, reels, shorts, stories e fotos sem marca d'água em qualidade HD. Com suporte para Instagram, TikTok, YouTube, Facebook, Snapchat, Twitter (X) e muito mais, o SavClip torna o download de vídeos online rápido, simples e seguro.\n\nNosso baixador de vídeo online funciona em todos os dispositivos, incluindo Android, iPhone, tablets e computadores, sem exigir login ou instalação de software. Basta colar o link do vídeo no campo de entrada acima e baixar conteúdo de alta qualidade instantaneamente.\n\nSeja para salvar reels do Instagram, vídeos do TikTok, shorts do YouTube ou vídeos do Facebook, o SavClip oferece downloads ilimitados com servidores rápidos e uma experiência de usuário limpa. Baixe vídeos online gratuitamente a qualquer hora, em qualquer lugar, com uma das melhores ferramentas de download de vídeo disponíveis hoje.",
      "stats": {
        "downloads": "1.2M+",
        "users": "100k+",
        "uptime": "99.9%"
      }
    },
    "tabs": {
      "video": "Vídeo",
      "reels": "Reels",
      "story": "Stories",
      "audio": "Áudio",
      "photo": "Foto",
      "music": "Música",
      "shorts": "Shorts",
      "movies": "Filmes",
      "gif": "GIFs",
      "spotlight": "Spotlight",
      "private": "Privado",
      "hd": "HD"
    },
    "features": {
      "title": "Recursos Premium para Todos",
      "items": [
        {
          "title": "Velocidade Supersônica ⚡",
          "desc": "Obtenha seu conteúdo de alta qualidade em segundos com nossos servidores de elite."
        },
        {
          "title": "100% Anônimo 🔒",
          "desc": "Seus downloads são privados, seguros e não exigem login."
        },
        {
          "title": "Resolução Cristalina 4K 💎",
          "desc": "Qualidade do arquivo original preservada em resoluções incríveis de até 4K."
        }
      ]
    },
    "faq": {
      "title": "Perguntas Frequentes",
      "items": [
        {
          "q": "O uso é gratuito?",
          "a": "Com certeza! O SavClip é 100% gratuito.\n• Sem taxas ocultas\n• Sem necessidade de registro\n• Downloads diários ilimitados"
        },
        {
          "q": "Preciso fazer login?",
          "a": "De jeito nenhum.\n• Sem credenciais necessárias\n• Sua privacidade está 100% segura\n• Uso totalmente anônimo"
        },
        {
          "q": "Posso baixar stories privados?",
          "a": "Atualmente, oferecemos suporte apenas para conteúdos públicos.\n• O perfil deve ser público\n• Links de contas privadas não funcionarão\n• Respeitar a privacidade dos usuários é nossa prioridade"
        }
      ]
    },
    "common": {
      "loading": "Processando Mídia...",
      "analyzing": "Analisando Link...",
      "recent": "Buscas Recentes",
      "clear": "Limpar Histórico",
      "go_home": "Voltar à Página Inicial",
      "history": "Histórico de Downloads",
      "under_development": "Nossa ferramenta especializada está em desenvolvimento. Fique ligado!",
      "pwa": {
        "title": "App SavClip",
        "subtitle": "Experiência nativa para desktop e celular",
        "install": "Instalar",
        "dismiss": "Fechar"
      },
      "boilerplates": {
        "instagram": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao Instagram.",
        "facebook": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao Facebook.",
        "youtube": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao YouTube.",
        "tiktok": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao TikTok.",
        "snapchat": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao Snapchat.",
        "telegram": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao Telegram.",
        "twitter": "Certifique-se de que você tem o direito de baixar e usar esta mídia. O SavClip é uma ferramenta independente e não é afiliado ao Twitter."
      }
    },
    "trust": {
      "safe": "Seguro & Privado",
      "fast": "Ultra Rápido",
      "watermark": "Sem Marca D'água"
    },
    "banner": {
      "badge": "Em Breve",
      "title": "Nossa Extensão para o Google Chrome",
      "desc": "Baixe qualquer vídeo ou story com apenas um clique diretamente do seu navegador. Fique ligado para o lançamento!"
    },
    "categories": {
      "insta": "Instagram",
      "fb": "Facebook",
      "snap": "Snapchat",
      "tele": "Telegram",
      "tiktok": "TikTok",
      "yt": "YouTube",
      "tw": "Twitter",
      "insta_desc": "Baixe Reels, Stories e Vídeos do Instagram em alta resolução.",
      "fb_desc": "Salve vídeos e Reels do Facebook diretamente na galeria do seu dispositivo.",
      "tiktok_desc": "Baixe vídeos do TikTok sem marca d'água na qualidade HD original.",
      "yt_desc": "Baixe YouTube Shorts e Músicas em formatos MP3 ou MP4 de alta qualidade.",
      "tw_desc": "Baixe vídeos e GIFs do X (Twitter) de forma rápida e segura.",
      "snap_desc": "Salve Snapchat Spotlights e Stories na qualidade original de origem.",
      "tele_desc": "Baixe arquivos e vídeos de qualquer canal público do Telegram.",
      "music_desc": "Extraia áudio e MP3 de alta qualidade do TikTok e do YouTube.",
      "private_desc": "Baixe com segurança conteúdos de suas próprias postagens salvas e curtidas.",
      "music": "Música & MP3",
      "private": "Baixador Privado",
      "bulk": "Downloads em Lote",
      "bulk_desc": "Baixe múltiplas mídias de uma só vez.",
      "regional": "Recursos Regionais",
      "regional_desc": "Ferramentas adaptadas para as mídias sociais mais populares de cada região.",
      "features": "Principais Recursos",
      "features_desc": "Explore nossas principais capacidades de download."
    },
    "navbar": {
      "ai_engagement_tools": "Ferramentas de IA",
      "top_locations": "Principais Locais",
      "global_reach": "Alcance Global",
      "advanced_tools": "Ferramentas Avançadas",
      "pro_features": "Recursos Pro",
      "profile_dp": "Fotos de Perfil",
      "hd_downloads": "Downloads em HD",
      "online_savers": "Salvadores Online",
      "converters_pro": "Conversores Pro",
      "reels_pro": "Reels Pro",
      "video_expert": "Vídeos Pro",
      "story_archive": "Arquivador de Stories",
      "photo_gallery": "Galeria de Fotos"
    },
    "trending": {
      "label": "Bombando Agora",
      "template": "⚡ Alguém de {country} salvou um {type} {time}"
    },
    "about_page": {
      "title": "Sobre o SavClip",
      "intro": "O padrão profissional em extração de mídias de redes sociais, feito para criadores e entusiastas digitais que valorizam velocidade e confiabilidade.",
      "founder_story": "Fundado por Ramzan Ahmad, desenvolvedor web profissional com mais de 3 anos de experiência, o SavClip nasceu da visão de criar as ferramentas de download mais rápidas e seguras da web. A experiência de Ramzan em desenvolvimento Next.js garante que cada byte de dado processado siga altos padrões de desempenho.",
      "differentiator": "Diferente de baixadores genéricos, o SavClip prioriza o ecossistema dos criadores, integrando diretrizes de 'Segurança e Ética' em todas as ferramentas que desenvolvemos.",
      "offerings": {
        "title": "Nossos Serviços Especializados",
        "items": [
          "Extração de Mídia em Alta Velocidade",
          "Desempenho Otimizado em Next.js",
          "Arquitetura de Privacidade em Primeiro Lugar",
          "Ferramentas Multiplataforma Integradas"
        ]
      },
      "mission": {
        "title": "Nossa Missão",
        "desc": "Fornecer à comunidade global acesso gratuito, rápido e seguro a ferramentas de arquivamento de mídias sociais, promovendo o uso ético do conteúdo."
      },
      "theme": "Tema",
      "vision": {
        "title": "Nossa Visão",
        "desc": "Tornar-se a autoridade global definitiva em processamento de mídias sociais, reconhecida pela qualidade intransigente e confiança."
      }
    },
    "niches": {
      "lifestyle": "Estilo de Vida",
      "photography": "Fotografia",
      "travel": "Viagem",
      "fitness": "Fitness",
      "food": "Culinária",
      "business": "Negócios",
      "tech": "Tecnologia",
      "fashion": "Moda",
      "nature": "Natureza",
      "music": "Música",
      "art": "Arte",
      "viral": "Viral",
      "gaming": "Games",
      "coffee": "Café",
      "beauty": "Beleza"
    }
  },
  es: {
    "home": {
      "hero": {
        "title_1": "Todo en Uno",
        "title_2": "Redes Sociales",
        "title_3": "Descargador de Video (HD)",
        "subtitle": "Descargador profesional para Instagram, TikTok, YouTube y Facebook: anónimo, rápido y gratuito"
      },
      "trust": {
        "users": "Confiado por más de 1,200,000 usuarios",
        "no_login": "Sin Registro",
        "free": "100% Gratis",
        "unlimited": "Ilimitado",
        "safe": "Seguro",
        "fast": "Rápido",
        "watermark": "Sin Marca de Agua"
      },
      "intro": "SavClip es un potente descargador de videos gratuito que permite a los usuarios descargar videos, reels, shorts, stories y fotos sin marca de agua en calidad HD. Con soporte para Instagram, TikTok, YouTube, Facebook, Snapchat, Twitter (X) y más, SavClip hace que descargar videos en línea sea rápido, simple y seguro.\n\nNuestro descargador de videos en línea funciona en todos los dispositivos, incluidos Android, iPhone, tabletas y computadoras, sin requerir inicio de sesión ni instalación de software. Simplemente pegue el enlace del video en el cuadro de entrada arriba y descargue contenido de alta calidad al instante.\n\nYa sea que desee guardar reels de Instagram, videos de TikTok, shorts de YouTube o videos de Facebook, SavClip ofrece descargas ilimitadas con servidores rápidos y una experiencia de usuario limpia. Descargue videos en línea gratis en cualquier momento y en cualquier lugar con una de las mejores herramientas de descarga de videos disponibles hoy.",
      "stats": {
        "downloads": "1.2M+",
        "users": "100k+",
        "uptime": "99.9%"
      }
    },
    "tabs": {
      "video": "Video",
      "reels": "Reels",
      "story": "Stories",
      "audio": "Audio",
      "photo": "Foto",
      "music": "Música",
      "shorts": "Shorts",
      "movies": "Películas",
      "gif": "GIFs",
      "spotlight": "Spotlight",
      "private": "Privado",
      "hd": "HD"
    },
    "features": {
      "title": "Funciones Premium para Todos",
      "items": [
        {
          "title": "Velocidad Supersónica ⚡",
          "desc": "Obtén tu contenido de alta calidad en segundos con nuestros servidores de élite."
        },
        {
          "title": "100% Anónimo 🔒",
          "desc": "Tus descargas son privadas, seguras y no requieren inicio de sesión."
        },
        {
          "title": "Resolución Cristalina 4K 💎",
          "desc": "Calidad de archivo original conservada en impresionantes resoluciones de hasta 4K."
        }
      ]
    },
    "faq": {
      "title": "Preguntas Frecuentes",
      "items": [
        {
          "q": "¿Es gratis de usar?",
          "a": "¡Absolutamente! SavClip es 100% gratuito.\n• Sin cargos ocultos\n• Sin necesidad de registro\n• Descargas diarias ilimitadas"
        },
        {
          "q": "¿Necesito iniciar sesión?",
          "a": "Para nada.\n• Sin credenciales necesarias\n• Tu privacidad está 100% a salvo\n• Uso completamente anónimo"
        },
        {
          "q": "¿Puedo descargar historias privadas?",
          "a": "Actualmente, solo admitimos contenido público.\n• El perfil debe ser público\n• Los enlaces de cuentas privadas no funcionarán\n• Respetar la privacidad de los usuarios es nuestra prioridad"
        }
      ]
    },
    "common": {
      "loading": "Procesando Medios...",
      "analyzing": "Analizando Enlace...",
      "recent": "Búsquedas Recientes",
      "clear": "Limpiar Historial",
      "go_home": "Volver a Inicio",
      "history": "Historial de Descargas",
      "under_development": "Nuestra herramienta especializada está actualmente en desarrollo. ¡Mantente atento!",
      "pwa": {
        "title": "App SavClip",
        "subtitle": "Experiencia nativa para escritorio y móvil",
        "install": "Instalar",
        "dismiss": "Cerrar"
      },
      "boilerplates": {
        "instagram": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a Instagram.",
        "facebook": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a Facebook.",
        "youtube": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip is una herramienta independiente y no está afiliada a YouTube.",
        "tiktok": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a TikTok.",
        "snapchat": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a Snapchat.",
        "telegram": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a Telegram.",
        "twitter": "Asegúrese de tener el derecho de descargar y usar este contenido. SavClip es una herramienta independiente y no está afiliada a Twitter."
      }
    },
    "trust": {
      "safe": "Seguro & Privado",
      "fast": "Superrápido",
      "watermark": "Sin Marca de Agua"
    },
    "banner": {
      "badge": "Próximamente",
      "title": "Nuestra Extensión de Google Chrome",
      "desc": "Descarga cualquier video o historia con un solo clic directamente desde tu navegador. ¡Mantente al tanto del lanzamiento!"
    },
    "categories": {
      "insta": "Instagram",
      "fb": "Facebook",
      "snap": "Snapchat",
      "tele": "Telegram",
      "tiktok": "TikTok",
      "yt": "YouTube",
      "tw": "Twitter",
      "insta_desc": "Descarga Reels, Stories y Videos de Instagram en alta resolución.",
      "fb_desc": "Guarda videos y Reels de Facebook directamente en la galería de tu dispositivo.",
      "tiktok_desc": "Descarga videos de TikTok sin marca de agua en la calidad HD original.",
      "yt_desc": "Descarga YouTube Shorts y Música en formatos de alta calidad MP3 o MP4.",
      "tw_desc": "Descarga videos y GIFs de X (Twitter) de forma rápida y segura.",
      "snap_desc": "Guarda Snapchat Spotlights y Stories en la calidad original de origen.",
      "tele_desc": "Descarga archivos y videos de cualquier canal público de Telegram.",
      "music_desc": "Extrae audio y MP3 de alta calidad de TikTok y YouTube.",
      "private_desc": "Descarga de forma segura contenido de tus propias publicaciones guardadas y gustadas.",
      "music": "Música & MP3",
      "private": "Descargador Privado",
      "bulk": "Descargas masivas",
      "bulk_desc": "Descarga múltiples archivos de una vez.",
      "regional": "Características regionales",
      "regional_desc": "Herramientas adaptadas a las redes sociales más populares de cada región.",
      "features": "Características principales",
      "features_desc": "Explora nuestras capacidades de descarga clave."
    },
    "navbar": {
      "ai_engagement_tools": "Herramientas de IA",
      "top_locations": "Ubicaciones Top",
      "global_reach": "Alcance Global",
      "advanced_tools": "Herramientas Avanzadas",
      "pro_features": "Funciones Pro",
      "profile_dp": "Fotos de Perfil",
      "hd_downloads": "Descargas en HD",
      "online_savers": "Guardadores Online",
      "converters_pro": "Conversores Pro",
      "reels_pro": "Reels Pro",
      "video_expert": "Videos Pro",
      "story_archive": "Archivo de Historias",
      "photo_gallery": "Galería de Fotos"
    },
    "trending": {
      "label": "Tendencia Ahora",
      "template": "⚡ Alguien de {country} guardó un {type} {time}"
    },
    "about_page": {
      "title": "Sobre SavClip",
      "intro": "El estándar profesional en extracción de medios de redes sociales, creado para creadores y entusiastas digitales que valoran la velocidad y la confiabilidad.",
      "founder_story": "Fundado por Ramzan Ahmad, un desarrollador web profesional con más de 3 años de experiencia, SavClip nació de la visión de crear las herramientas de descarga más rápidas y seguras de la web. La experiencia de Ramzan en el desarrollo de Next.js garantiza que cada byte de datos procesado siga altos estándares de rendimiento.",
      "differentiator": "A diferencia de los descargadores genéricos, SavClip prioriza el ecosistema de creadores integrando pautas de 'Seguridad y Ética' en cada herramienta que construimos.",
      "offerings": {
        "title": "Nuestros Servicios Expertos",
        "items": [
          "Extracción de medios a alta velocidad",
          "Rendimiento optimizado en Next.js",
          "Arquitectura de privacidad primero",
          "Herramientas multiplataforma integradas"
        ]
      },
      "mission": {
        "title": "Nuestra Misión",
        "desc": "Brindar a la comunidad global acceso gratuito, de alta velocidad y seguro a herramientas de archivo de redes sociales al tiempo que se promueve el uso ético del contenido."
      },
      "theme": "Tema",
      "vision": {
        "title": "Nuestra Visión",
        "desc": "Convertirse en la autoridad global definitiva en el procesamiento de medios de redes sociales, conocida por su calidad inquebrantable y confianza."
      }
    },
    "niches": {
      "lifestyle": "Estilo de Vida",
      "photography": "Fotografía",
      "travel": "Viajes",
      "fitness": "Fitness",
      "food": "Comida",
      "business": "Negocios",
      "tech": "Tecnología",
      "fashion": "Moda",
      "nature": "Naturaleza",
      "music": "Música",
      "art": "Arte",
      "viral": "Viral",
      "gaming": "Juegos",
      "coffee": "Café",
      "beauty": "Belleza"
    }
  },
  id: {
    "home": {
      "hero": {
        "title_1": "Semua-dalam-Satu",
        "title_2": "Media Sosial",
        "title_3": "Pengunduh Video (HD)",
        "subtitle": "Pengunduh tingkat profesional untuk Instagram, TikTok, YouTube & Facebook — anonim, cepat, dan gratis"
      },
      "trust": {
        "users": "Dipercaya oleh 1.200.000+ pengguna",
        "no_login": "Tanpa Login",
        "free": "100% Gratis",
        "unlimited": "Tanpa Batas",
        "safe": "Aman",
        "fast": "Cepat",
        "watermark": "Tanpa Watermark"
      },
      "intro": "SavClip adalah pengunduh video gratis yang kuat yang memungkinkan pengguna mengunduh video, reels, shorts, story, dan foto tanpa watermark dalam kualitas HD. Dengan dukungan untuk Instagram, TikTok, YouTube, Facebook, Snapchat, Twitter (X) dan banyak lagi, SavClip membuat pengunduhan video online menjadi cepat, sederhana, dan aman.\n\nPengunduh video online kami bekerja di semua perangkat termasuk Android, iPhone, tablet, dan desktop tanpa memerlukan login atau instalasi perangkat lunak. Cukup tempel tautan video Anda ke kotak input di atas dan unduh konten berkualitas tinggi secara instan.\n\nApakah Anda ingin menyimpan reels Instagram, video TikTok, shorts YouTube, atau video Facebook, SavClip menyediakan unduhan tanpa batas dengan server cepat dan pengalaman pengguna yang bersih. Unduh video online gratis kapan saja, di mana saja dengan salah satu alat pengunduh video terbaik yang tersedia saat ini.",
      "stats": {
        "downloads": "1.2M+",
        "users": "100k+",
        "uptime": "99.9%"
      }
    },
    "tabs": {
      "video": "Video",
      "reels": "Reels",
      "story": "Cerita",
      "audio": "Audio",
      "photo": "Foto",
      "music": "Musik",
      "shorts": "Shorts",
      "movies": "Film",
      "gif": "GIF",
      "spotlight": "Spotlight",
      "private": "Privat",
      "hd": "HD"
    },
    "features": {
      "title": "Fitur Premium untuk Semua Orang",
      "items": [
        {
          "title": "Kecepatan Super Sonic ⚡",
          "desc": "Dapatkan konten berkualitas tinggi Anda dalam hitungan detik dengan server elit kami."
        },
        {
          "title": "100% Anonim 🔒",
          "desc": "Unduhan Anda bersifat pribadi, aman, dan tidak memerlukan login."
        },
        {
          "title": "Resolusi Kristal 4K 💎",
          "desc": "Kualitas sumber asli dipertahankan hingga resolusi 4K yang menakjubkan."
        }
      ]
    },
    "faq": {
      "title": "Pertanyaan yang Sering Diajukan",
      "items": [
        {
          "q": "Apakah gratis untuk digunakan?",
          "a": "Tentu saja! SavClip 100% gratis.\n• Tanpa biaya tersembunyi\n• Tanpa registrasi\n• Unduhan harian tanpa batas"
        },
        {
          "q": "Apakah saya perlu login?",
          "a": "Sama sekali tidak.\n• Tanpa kredensial\n• Privasi Anda 100% aman\n• Penggunaan sepenuhnya anonim"
        },
        {
          "q": "Bisakah saya mengunduh cerita privat?",
          "a": "Saat ini, kami hanya mendukung konten publik.\n• Profil harus publik\n• Tautan akun privat tidak akan berfungsi\n• Menghormati privasi pengguna adalah prioritas kami"
        }
      ]
    },
    "common": {
      "loading": "Memproses Media...",
      "analyzing": "Menganalisis Tautan...",
      "recent": "Pencarian Terkini",
      "clear": "Hapus Riwayat",
      "go_home": "Kembali ke Beranda",
      "history": "Riwayat Unduhan",
      "under_development": "Alat khusus kami saat ini sedang dalam pengembangan. Tetap disini!",
      "pwa": {
        "title": "Aplikasi SavClip",
        "subtitle": "Pengalaman asli untuk desktop & seluler",
        "install": "Instal",
        "dismiss": "Tutup"
      },
      "boilerplates": {
        "instagram": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan Instagram.",
        "facebook": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan Facebook.",
        "youtube": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan YouTube.",
        "tiktok": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan TikTok.",
        "snapchat": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan Snapchat.",
        "telegram": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan Telegram.",
        "twitter": "Pastikan Anda memiliki hak untuk mengunduh dan menggunakan media ini. SavClip adalah alat independen dan tidak berafiliasi dengan Twitter."
      }
    },
    "trust": {
      "safe": "Aman & Privat",
      "fast": "Sangat Cepat",
      "watermark": "Tanpa Watermark"
    },
    "banner": {
      "badge": "Segera Hadir",
      "title": "Ekstensi Google Chrome Kami",
      "desc": "Unduh video atau cerita apa pun hanya dengan satu klik langsung dari browser Anda. Nantikan peluncurannya!"
    },
    "categories": {
      "insta": "Instagram",
      "fb": "Facebook",
      "snap": "Snapchat",
      "tele": "Telegram",
      "tiktok": "TikTok",
      "yt": "YouTube",
      "tw": "Twitter",
      "insta_desc": "Unduh Reels, Story, dan Video Instagram dalam resolusi tinggi.",
      "fb_desc": "Simpan video dan Reels Facebook langsung ke galeri perangkat Anda.",
      "tiktok_desc": "Unduh video TikTok tanpa watermark dalam kualitas HD asli.",
      "yt_desc": "Unduh YouTube Shorts dan Musik dalam format MP3 atau MP4 berkualitas tinggi.",
      "tw_desc": "Unduh video dan GIF dari X (Twitter) dengan aman dan cepat.",
      "snap_desc": "Simpan Snapchat Spotlights dan Story dalam kualitas sumber asli.",
      "tele_desc": "Unduh file dan video dari saluran publik Telegram mana pun.",
      "music_desc": "Ekstrak audio dan MP3 berkualitas tinggi dari TikTok dan YouTube.",
      "private_desc": "Unduh konten dengan aman dari postingan yang Anda simpan dan sukai sendiri.",
      "music": "Musik & MP3",
      "private": "Pengunduh Privat",
      "bulk": "Unduhan Massal",
      "bulk_desc": "Unduh beberapa media sekaligus.",
      "regional": "Fitur Regional",
      "regional_desc": "Alat yang disesuaikan dengan media sosial terpopuler di setiap wilayah.",
      "features": "Fitur Utama",
      "features_desc": "Jelajahi kemampuan pengunduhan inti kami."
    },
    "navbar": {
      "ai_engagement_tools": "Alat Asisten IA",
      "top_locations": "Lokasi Teratas",
      "global_reach": "Jangkauan Global",
      "advanced_tools": "Alat Canggih",
      "pro_features": "Fitur Pro",
      "profile_dp": "Foto Profil",
      "hd_downloads": "Unduhan HD",
      "online_savers": "Penyimpan Online",
      "converters_pro": "Konverter Pro",
      "reels_pro": "Reels Pro",
      "video_expert": "Video Pro",
      "story_archive": "Arsip Cerita",
      "photo_gallery": "Galeri Foto"
    },
    "trending": {
      "label": "Tren Sekarang",
      "template": "⚡ Seseorang dari {country} menyimpan {type} {time}"
    },
    "about_page": {
      "title": "Tentang SavClip",
      "intro": "Standar profesional dalam ekstraksi media media sosial, dibuat untuk kreator dan penggemar digital yang menghargai kecepatan dan keandalan.",
      "founder_story": "Didirikan oleh Ramzan Ahmad, seorang Pengembang Web profesional dengan pengalaman 3+ tahun, SavClip lahir dari visi untuk membuat alat pengunduh tercepat dan teraman yang tersedia di web. Latar belakang Ramzan dalam pengembangan Next.js memastikan bahwa setiap bita data yang diproses di situs ini mengikuti standar kinerja tinggi.",
      "differentiator": "Tidak seperti pengunduh generik, SavClip memprioritaskan ekosistem kreator dengan mengintegrasikan pedoman 'Keamanan & Etika' ke dalam setiap alat yang kami buat.",
      "offerings": {
        "title": "Layanan Ahli Kami",
        "items": [
          "Ekstraksi Media Berkecepatan Tinggi",
          "Kinerja yang Dioptimalkan Next.js",
          "Arsitektur Pertama-Privasi",
          "Alat Terintegrasi Multi-Platform"
        ]
      },
      "mission": {
        "title": "Misi Kami",
        "desc": "Untuk menyediakan akses gratis, berkecepatan tinggi, dan aman ke alat pengarsipan media sosial bagi komunitas global sambil mempromosikan penggunaan konten yang etis."
      },
      "theme": "Tema",
      "vision": {
        "title": "Visi Kami",
        "desc": "Menjadi otoritas global utama dalam pemrosesan media media sosial, yang dikenal dengan kualitas dan kepercayaan yang tanpa kompromi."
      }
    },
    "niches": {
      "lifestyle": "Gaya Hidup",
      "photography": "Fotografi",
      "travel": "Perjalanan",
      "fitness": "Kebugaran",
      "food": "Makanan",
      "business": "Bisnis",
      "tech": "Teknologi",
      "fashion": "Mode",
      "nature": "Alam",
      "music": "Musik",
      "art": "Seni",
      "viral": "Viral",
      "gaming": "Game",
      "coffee": "Kopi",
      "beauty": "Kecantikan"
    }
  },
  ar: {
    "home": {
      "hero": {
        "title_1": "الكل في واحد",
        "title_2": "وسائل التواصل",
        "title_3": "تحميل مقاطع الفيديو (HD)",
        "subtitle": "برنامج تنزيل احترافي لإنستغرام، وتيك توك، ويوتيوب، وفيسبوك — آمن وسريع ومجاني بالكامل"
      },
      "trust": {
        "users": "موضع ثقة أكثر من 1,200,000 مستخدم",
        "no_login": "بدون تسجيل دخول",
        "free": "مجاني 100%",
        "unlimited": "غير محدود",
        "safe": "آمن",
        "fast": "سريع",
        "watermark": "بدون علامة مائية"
      },
      "intro": "موقع SavClip هو أداة قوية ومجانية لتنزيل مقاطع الفيديو، والريلز، والستوري، والصور بدون علامة مائية وبجودة عالية HD. مع دعم منصات إنستغرام، وتيك توك، ويوتيوب، وفيسبوك، وسناب شات، وتويتر (X) والمزيد، يسهل SavClip عملية تحميل الفيديوهات بسرعة وأمان.\n\nيعمل برنامج التحميل عبر الإنترنت الخاص بنا على جميع الأجهزة بما في ذلك أندرويد وآيفون والأجهزة اللوحية وأجهزة الكمبيوتر بدون الحاجة إلى تسجيل دخول أو تثبيت أي برنامج. ما عليك سوى لصق رابط الفيديو في المربع أعلاه وبدء تنزيل المحتوى عالي الجودة فوراً.\n\nسواء كنت تريد حفظ مقاطع ريلز إنستغرام، أو فيديوهات تيك توك، أو يوتيوب شورتس، أو مقاطع فيديو فيسبوك، يوفر SavClip تنزيلات غير محدودة مع خوادم فائقة السرعة وتجربة مستخدم خالية من التعقيدات. حمل مقاطع الفيديو أونلاين مجاناً في أي وقت ومن أي مكان.",
      "stats": {
        "downloads": "1.2M+",
        "users": "100k+",
        "uptime": "99.9%"
      }
    },
    "tabs": {
      "video": "فيديو",
      "reels": "ريلز",
      "story": "قصص",
      "audio": "صوت",
      "photo": "صور",
      "music": "موسيقى",
      "shorts": "شورتس",
      "movies": "أفلام",
      "gif": "GIF",
      "spotlight": "أضواء",
      "private": "خاص",
      "hd": "HD"
    },
    "features": {
      "title": "ميزات احترافية للجميع",
      "items": [
        {
          "title": "سرعة فائقة ⚡",
          "desc": "احصل على محتواك المفضل بجودة عالية خلال ثوانٍ معدودة عبر خوادمنا السريعة."
        },
        {
          "title": "آمن وسري 100% 🔒",
          "desc": "تنزيلاتك آمنة وسرية تماماً ولا تتطلب تسجيل حساب أو إدخال كلمات مرور."
        },
        {
          "title": "دقة وضوح 4K 💎",
          "desc": "احفظ جودة الملف الأصلي دون ضغط وبدقة تصل إلى 4K فائقة الوضوح."
        }
      ]
    },
    "faq": {
      "title": "الأسئلة الشائعة",
      "items": [
        {
          "q": "هل الموقع مجاني للاستخدام؟",
          "a": "بالتأكيد! موقع SavClip مجاني 100%.\n• لا توجد رسوم خفية\n• لا يتطلب تسجيل حساب\n• تنزيلات يومية غير محدودة"
        },
        {
          "q": "هل أحتاج إلى تسجيل الدخول؟",
          "a": "كلا، على الإطلاق.\n• لا يلزم إدخال بيانات حسابك\n• خصوصيتك محمية 100%\n• استخدام مجهول وآمن تماماً"
        },
        {
          "q": "هل يمكن تحميل القصص الخاصة؟",
          "a": "حالياً، ندعم المحتوى العام فقط.\n• يجب أن يكون الحساب عاماً\n• لن تعمل روابط الحسابات الخاصة\n• احترام خصوصية المستخدمين على رأس أولوياتنا"
        }
      ]
    },
    "common": {
      "loading": "جاري معالجة الوسائط...",
      "analyzing": "جاري تحليل الرابط...",
      "recent": "عمليات البحث الأخيرة",
      "clear": "مسح السجل",
      "go_home": "العودة للرئيسية",
      "history": "سجل التنزيلات",
      "under_development": "أداتنا المتخصصة قيد التطوير حالياً. ترقبوا الإطلاق!",
      "pwa": {
        "title": "تطبيق SavClip",
        "subtitle": "تجربة تصفح سريعة للجوال والكمبيوتر",
        "install": "تثبيت",
        "dismiss": "إغلاق"
      },
      "boilerplates": {
        "instagram": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لإنستغرام.",
        "facebook": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لفيسبوك.",
        "youtube": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة ليوتيوب.",
        "tiktok": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لتيك توك.",
        "snapchat": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لسناب شات.",
        "telegram": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لتليجرام.",
        "twitter": "يرجى التأكد من امتلاكك لحقوق تنزيل واستخدام هذه الوسائط. موقع SavClip أداة مستقلة وغير تابعة لتويتر (X)."
      }
    },
    "trust": {
      "safe": "آمن وخاص",
      "fast": "سريع جداً",
      "watermark": "بدون علامة مائية"
    },
    "banner": {
      "badge": "قريباً",
      "title": "إضافة متصفح جوجل كروم الخاصة بنا",
      "desc": "حمل أي فيديو أو قصة بضغطة زر واحدة مباشرة من متصفحك. ترقبوا الإطلاق قريباً!"
    },
    "categories": {
      "insta": "انستغرام",
      "fb": "فيسبوك",
      "snap": "سناب شات",
      "tele": "تليجرام",
      "tiktok": "تيك توك",
      "yt": "يوتيوب",
      "tw": "تويتر",
      "insta_desc": "تحميل مقاطع ريلز، وقصص، وفيديوهات إنستغرام بجودة عالية.",
      "fb_desc": "حفظ فيديوهات ومقاطع ريلز فيسبوك مباشرة إلى معرض جهازك.",
      "tiktok_desc": "تنزيل فيديوهات تيك توك بدون علامة مائية وبجودة HD الأصلية.",
      "yt_desc": "تحميل مقاطع شورتس وموسيقى يوتيوب بصيغة MP3 أو MP4 بجودة عالية.",
      "tw_desc": "تنزيل مقاطع فيديو وصور متحركة GIF من منصة إكس (تويتر) بسرعة وأمان.",
      "snap_desc": "حفظ فيديوهات منصة أضواء وقصص سناب شات بجودتها الأصلية.",
      "tele_desc": "تحميل الملفات والفيديوهات من أي قناة عامة على تليجرام بسهولة.",
      "music_desc": "استخراج الصوت وتحميل ملفات MP3 عالية الجودة من تيك توك ويوتيوب.",
      "private_desc": "تنزيل المحتوى بأمان من منشوراتك الخاصة التي قمت بحفظها أو الإعجاب بها.",
      "music": "موسيقى و MP3",
      "private": "التحميل الخاص",
      "bulk": "التحميل الجماعي",
      "bulk_desc": "تنزيل ملفات وسائط متعددة دفعة واحدة.",
      "regional": "الميزات الإقليمية",
      "regional_desc": "أدوات مخصصة لأكثر وسائل التواصل الاجتماعي شعبية في كل منطقة.",
      "features": "الميزات الأساسية",
      "features_desc": "اكتشف قدرات التحميل الأساسية التي نقدمها."
    },
    "navbar": {
      "ai_engagement_tools": "أدوات الذكاء الاصطناعي",
      "top_locations": "أبرز المواقع",
      "global_reach": "الانتشار العالمي",
      "advanced_tools": "أدوات متقدمة",
      "pro_features": "ميزات احترافية",
      "profile_dp": "صور الحساب",
      "hd_downloads": "تنزيل بجودة HD",
      "online_savers": "أدوات الحفظ أونلاين",
      "converters_pro": "محولات احترافية",
      "reels_pro": "ريلز برو",
      "video_expert": "فيديو احترافي",
      "story_archive": "أرشيف القصص",
      "photo_gallery": "معرض الصور"
    },
    "trending": {
      "label": "شائع الآن",
      "template": "⚡ قام شخص من {country} بحفظ {type} منذ {time}"
    },
    "about_page": {
      "title": "حول SavClip",
      "intro": "المعيار الاحترافي لاستخراج وسائط التواصل الاجتماعي، والمصمم للمبدعين وعشاق الرقمية الذين يقدرون السرعة والموثوقية.",
      "founder_story": "تأسس موقع SavClip بواسطة رمضان أحمد، وهو مطور ويب محترف يتمتع بخبرة تزيد عن 3 سنوات، ولدت الفكرة لتوفير أسرع وأكثر أدوات التنزيل أماناً على الويب. تضمن خلفية رمضان في تطوير Next.js أن كل بايت يتم معالجته يتبع معايير أداء عالية.",
      "differentiator": "على عكس برامج التنزيل التقليدية، يضع SavClip سلامة وأخلاقيات المحتوى في مقدمة أولوياته في كل أداة نقوم ببنائها.",
      "offerings": {
        "title": "خدماتنا المتخصصة",
        "items": [
          "استخراج وسائط فائق السرعة",
          "أداء محسن بالكامل بتقنيات Next.js",
          "بنية تحتية تحمي خصوصية المستخدم أولاً",
          "أدوات متكاملة تدعم منصات متعددة"
        ]
      },
      "mission": {
        "title": "مهمتنا",
        "desc": "تزويد المجتمع العالمي بوصول مجاني وسريع وآمن إلى أدوات أرشفة وسائل التواصل الاجتماعي مع تعزيز الاستخدام الأخلاقي للمحتوى."
      },
      "theme": "المظهر",
      "vision": {
        "title": "رؤيتنا",
        "desc": "أن نصبح المرجع العالمي الأول في معالجة وسائط التواصل الاجتماعي، والمعروف بالجودة والأمان المطلقين."
      }
    },
    "niches": {
      "lifestyle": "أسلوب حياة",
      "photography": "تصوير",
      "travel": "سفر",
      "fitness": "لياقة بدنية",
      "food": "طعام",
      "business": "أعمال",
      "tech": "تكنولوجيا",
      "fashion": "موضة",
      "nature": "طبيعة",
      "music": "موسيقى",
      "art": "فن",
      "viral": "شائع",
      "gaming": "ألعاب",
      "coffee": "قهوة",
      "beauty": "جمال"
    }
  }
};

function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key] || typeof target[key] !== 'object') {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

for (const lang of ['pt', 'es', 'id', 'ar']) {
  const filePath = path.join(dictsDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) {
    console.log(`Dictionary not found: ${filePath}`);
    continue;
  }
  
  const dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const newTranslations = translations[lang];
  
  deepMerge(dict, newTranslations);
  
  // Also scan for any other missing key from en.json that wasn't translated and translate/copy it.
  const enDict = JSON.parse(fs.readFileSync(path.join(dictsDir, 'en.json'), 'utf8'));
  
  function fillMissing(targetObj, enObj) {
    for (const key in enObj) {
      if (!(key in targetObj)) {
        if (typeof enObj[key] === 'object' && enObj[key] !== null) {
          targetObj[key] = Array.isArray(enObj[key]) ? [] : {};
          fillMissing(targetObj[key], enObj[key]);
        } else {
          targetObj[key] = enObj[key]; // fallback to English value if no translation defined
        }
      } else if (typeof enObj[key] === 'object' && enObj[key] !== null && typeof targetObj[key] === 'object' && targetObj[key] !== null) {
        fillMissing(targetObj[key], enObj[key]);
      }
    }
  }
  
  fillMissing(dict, enDict);

  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Successfully completed and wrote full dictionary for language: ${lang}`);
}

console.log('JSON Dictionaries translation completed!');
