import fs from 'fs';
import path from 'path';

const projectDir = '/Users/ramzan/Pictures/savclip';
const dictsDir = path.join(projectDir, 'src', 'dictionaries');

const seoPagesTranslations = {
  pt: {
    "instagram_video_download_hd": "Baixar Vídeo do Instagram em HD",
    "instagram_reels_download_hd": "Baixar Reels do Instagram em HD",
    "instagram_photo_download_hd": "Baixar Fotos do Instagram em HD",
    "instagram_story_download_hd": "Baixar Stories do Instagram em HD",
    "instagram_reels_download_without_watermark": "Baixar Reels do Instagram Sem Marca D'água",
    "instagram_video_without_watermark": "Baixar Vídeos do Instagram Sem Marca D'água",
    "instagram_dp_download_hd": "Baixar Foto de Perfil do Instagram em HD",
    "instagram_carousel_download": "Baixar Carrossel do Instagram",
    "instagram_reel_converter": "Conversor de Reels do Instagram",
    "save_instagram_reels": "Salvar Reels do Instagram",
    "instagram_story_saver": "Salvador de Stories do Instagram",
    "instagram_reels_download": "Download de Reels do Instagram",
    "instagram_video_download": "Download de Vídeo do Instagram",
    "instagram_story_download": "Download de Stories do Instagram",
    "instagram_reels_downloader": "Baixador de Reels do Instagram",
    "instagram_video_downloader": "Baixador de Vídeos do Instagram",
    "tiktok_video_download_without_watermark": "Baixar Vídeo do TikTok Sem Marca D'água",
    "tiktok_mp3_download": "Baixar Música MP3 do TikTok",
    "tiktok_reels_download": "Baixar Reels do TikTok",
    "tiktok_story_download": "Baixar Stories do TikTok",
    "tiktok_video_saver": "Salvador de Vídeos do TikTok",
    "download_tiktok_video_online": "Baixar Vídeos do TikTok Online",
    "tiktok_downloader": "Baixador do TikTok",
    "tiktok_video_downloader": "Baixador de Vídeos do TikTok",
    "tiktok_download": "Download do TikTok",
    "facebook_video_download_hd": "Baixar Vídeo do Facebook em HD",
    "facebook_reels_download": "Baixar Reels do Facebook",
    "facebook_private_video_downloader": "Baixador de Vídeos Privados do Facebook",
    "facebook_story_download": "Baixar Stories do Facebook",
    "fb_video_saver": "Salvador de Vídeos do Facebook",
    "save_fb_reels": "Salvar Reels do Facebook",
    "facebook_video_download": "Download de Vídeo do Facebook",
    "facebook_video_downloader": "Baixador de Vídeos do Facebook",
    "facebook_reels_downloader": "Baixador de Reels do Facebook",
    "youtube_shorts_download": "Baixar Shorts do YouTube",
    "youtube_video_download_hd": "Baixar Vídeo do YouTube em HD",
    "youtube_to_mp4": "YouTube para MP4",
    "youtube_thumbnail_download": "Baixar Miniatura do YouTube",
    "yt_shorts_saver": "Salvador de Shorts do YouTube",
    "download_yt_video": "Baixar Vídeos do YouTube",
    "youtube_video_download": "Download de Vídeo do YouTube",
    "youtube_downloader": "Baixador do YouTube",
    "youtube_shorts_downloader": "Baixador de Shorts do YouTube"
  },
  es: {
    "instagram_video_download_hd": "Descargar Video de Instagram en HD",
    "instagram_reels_download_hd": "Descargar Reels de Instagram en HD",
    "instagram_photo_download_hd": "Descargar Fotos de Instagram en HD",
    "instagram_story_download_hd": "Descargar Stories de Instagram en HD",
    "instagram_reels_download_without_watermark": "Descargar Reels de Instagram sin Marca de Agua",
    "instagram_video_without_watermark": "Descargar Video de Instagram sin Marca de Agua",
    "instagram_dp_download_hd": "Descargar Foto de Perfil de Instagram en HD",
    "instagram_carousel_download": "Descargar Carrusel de Instagram",
    "instagram_reel_converter": "Conversor de Reels de Instagram",
    "save_instagram_reels": "Guardar Reels de Instagram",
    "instagram_story_saver": "Guardador de Historias de Instagram",
    "instagram_reels_download": "Descarga de Reels de Instagram",
    "instagram_video_download": "Descarga de Video de Instagram",
    "instagram_story_download": "Descarga de Stories de Instagram",
    "instagram_reels_downloader": "Descargador de Reels de Instagram",
    "instagram_video_downloader": "Descargador de Videos de Instagram",
    "tiktok_video_download_without_watermark": "Descargar Video de TikTok sin Marca de Agua",
    "tiktok_mp3_download": "Descargar MP3 de TikTok",
    "tiktok_reels_download": "Descargar Reels de TikTok",
    "tiktok_story_download": "Descargar Historias de TikTok",
    "tiktok_video_saver": "Guardador de Videos de TikTok",
    "download_tiktok_video_online": "Descargar Videos de TikTok en Línea",
    "tiktok_downloader": "Descargador de TikTok",
    "tiktok_video_downloader": "Descargador de Videos de TikTok",
    "tiktok_download": "Descarga de TikTok",
    "facebook_video_download_hd": "Descargar Video de Facebook en HD",
    "facebook_reels_download": "Descargar Reels de Facebook",
    "facebook_private_video_downloader": "Descargador de Videos Privados de Facebook",
    "facebook_story_download": "Descargar Historias de Facebook",
    "fb_video_saver": "Guardador de Videos de Facebook",
    "save_fb_reels": "Guardar Reels de Facebook",
    "facebook_video_download": "Descarga de Video de Facebook",
    "facebook_video_downloader": "Descargador de Videos de Facebook",
    "facebook_reels_downloader": "Descargador de Reels de Facebook",
    "youtube_shorts_download": "Descargar Shorts de YouTube",
    "youtube_video_download_hd": "Descargar Video de YouTube en HD",
    "youtube_to_mp4": "YouTube a MP4",
    "youtube_thumbnail_download": "Descargar Miniatura de YouTube",
    "yt_shorts_saver": "Guardador de Shorts de YouTube",
    "download_yt_video": "Descargar Video de YouTube",
    "youtube_video_download": "Descarga de Video de YouTube",
    "youtube_downloader": "Descargador de YouTube",
    "youtube_shorts_downloader": "Descargador de Shorts de YouTube"
  },
  id: {
    "instagram_video_download_hd": "Unduh Video Instagram HD",
    "instagram_reels_download_hd": "Unduh Reels Instagram HD",
    "instagram_photo_download_hd": "Unduh Foto Instagram HD",
    "instagram_story_download_hd": "Unduh Story Instagram HD",
    "instagram_reels_download_without_watermark": "Unduh Reels Instagram Tanpa Watermark",
    "instagram_video_without_watermark": "Unduh Video Instagram Tanpa Watermark",
    "instagram_dp_download_hd": "Unduh Foto Profil Instagram HD",
    "instagram_carousel_download": "Unduh Korsel Instagram",
    "instagram_reel_converter": "Konverter Reel Instagram",
    "save_instagram_reels": "Simpan Reels Instagram",
    "instagram_story_saver": "Penyimpan Story Instagram",
    "instagram_reels_download": "Unduhan Reels Instagram",
    "instagram_video_download": "Unduhan Video Instagram",
    "instagram_story_download": "Unduhan Story Instagram",
    "instagram_reels_downloader": "Pengunduh Reels Instagram",
    "instagram_video_downloader": "Pengunduh Video Instagram",
    "tiktok_video_download_without_watermark": "Unduh Video TikTok Tanpa Watermark",
    "tiktok_mp3_download": "Unduh MP3 TikTok",
    "tiktok_reels_download": "Unduh Reels TikTok",
    "tiktok_story_download": "Unduh Story TikTok",
    "tiktok_video_saver": "Penyimpan Video TikTok",
    "download_tiktok_video_online": "Unduh Video TikTok Online",
    "tiktok_downloader": "Pengunduh TikTok",
    "tiktok_video_downloader": "Pengunduh Video TikTok",
    "tiktok_download": "Unduh TikTok",
    "facebook_video_download_hd": "Unduh Video Facebook HD",
    "facebook_reels_download": "Unduh Reels Facebook",
    "facebook_private_video_downloader": "Pengunduh Video Privat Facebook",
    "facebook_story_download": "Unduh Story Facebook",
    "fb_video_saver": "Penyimpan Video FB",
    "save_fb_reels": "Simpan Reels FB",
    "facebook_video_download": "Unduhan Video Facebook",
    "facebook_video_downloader": "Pengunduh Video Facebook",
    "facebook_reels_downloader": "Pengunduh Reels Facebook",
    "youtube_shorts_download": "Unduh Shorts YouTube",
    "youtube_video_download_hd": "Unduh Video YouTube HD",
    "youtube_to_mp4": "YouTube ke MP4",
    "youtube_thumbnail_download": "Unduh Thumbnail YouTube",
    "yt_shorts_saver": "Penyimpan Shorts YT",
    "download_yt_video": "Unduh Video YT",
    "youtube_video_download": "Unduhan Video YouTube",
    "youtube_downloader": "Pengunduh YouTube",
    "youtube_shorts_downloader": "Pengunduh Shorts YouTube"
  },
  ar: {
    "instagram_video_download_hd": "تحميل فيديو إنستغرام HD",
    "instagram_reels_download_hd": "تحميل ريلز إنستغرام HD",
    "instagram_photo_download_hd": "تحميل صور إنستغرام HD",
    "instagram_story_download_hd": "تحميل قصص إنستغرام HD",
    "instagram_reels_download_without_watermark": "تحميل ريلز إنستغرام بدون علامة مائية",
    "instagram_video_without_watermark": "تحميل فيديو إنستغرام بدون علامة مائية",
    "instagram_dp_download_hd": "تحميل صورة الحساب إنستغرام HD",
    "instagram_carousel_download": "تحميل ألبوم كاروسيل إنستغرام",
    "instagram_reel_converter": "تحويل مقاطع ريلز إنستغرام",
    "save_instagram_reels": "حفظ مقاطع ريلز إنستغرام",
    "instagram_story_saver": "حفظ قصص إنستغرام",
    "instagram_reels_download": "تحميل ريلز إنستغرام",
    "instagram_video_download": "تحميل فيديو إنستغرام",
    "instagram_story_download": "تحميل قصص إنستغرام",
    "instagram_reels_downloader": "برنامج تحميل ريلز إنستغرام",
    "instagram_video_downloader": "برنامج تحميل فيديو إنستغرام",
    "tiktok_video_download_without_watermark": "تحميل فيديو تيك توك بدون علامة مائية",
    "tiktok_mp3_download": "تحميل صوت MP3 تيك توك",
    "tiktok_reels_download": "تحميل ريلز تيك توك",
    "tiktok_story_download": "تحميل قصص تيك توك",
    "tiktok_video_saver": "برنامج حفظ فيديو تيك توك",
    "download_tiktok_video_online": "تحميل فيديوهات تيك توك أون لاين",
    "tiktok_downloader": "برنامج تحميل تيك توك",
    "tiktok_video_downloader": "برنامج تحميل فيديو تيك توك",
    "tiktok_download": "تحميل تيك توك",
    "facebook_video_download_hd": "تحميل فيديو فيسبوك HD",
    "facebook_reels_download": "تحميل ريلز فيسبوك",
    "facebook_private_video_downloader": "تحميل فيديوهات فيسبوك الخاصة",
    "facebook_story_download": "تحميل قصص فيسبوك",
    "fb_video_saver": "برنامج حفظ فيديو فيسبوك",
    "save_fb_reels": "حفظ مقاطع ريلز فيسبوك",
    "facebook_video_download": "تحميل فيديو فيسبوك",
    "facebook_video_downloader": "برنامج تحميل فيديو فيسبوك",
    "facebook_reels_downloader": "برنامج تحميل ريلز فيسبوك",
    "youtube_shorts_download": "تحميل يوتيوب شورتس",
    "youtube_video_download_hd": "تحميل فيديو يوتيوب HD",
    "youtube_to_mp4": "يوتيوب إلى MP4",
    "youtube_thumbnail_download": "تحميل صورة مصغرة يوتيوب",
    "yt_shorts_saver": "برنامج حفظ يوتيوب شورتس",
    "download_yt_video": "تحميل فيديو يوتيوب",
    "youtube_video_download": "تحميل فيديو يوتيوب",
    "youtube_downloader": "برنامج تحميل يوتيوب",
    "youtube_shorts_downloader": "برنامج تحميل يوتيوب شورتس"
  }
};

const otherTranslations = {
  pt: {
    "guide": {
      "steps": [
        null,
        null,
        null,
        {
          "title": "Salvar vídeo",
          "desc": "Escolha a qualidade e salve o vídeo no seu dispositivo."
        }
      ]
    },
    "ai_tools": {
      "hashtags": {
        "title": "Gerador de Hashtags Virais",
        "subtitle": "Gere as melhores hashtags para o seu nicho",
        "desc": "Aumente seu alcance com a geração de hashtags por IA."
      },
      "captions": {
        "title": "Gerador de Legendas por IA",
        "subtitle": "Legendas que impulsionam o engajamento",
        "desc": "Crie legendas perfeitas para seus reels e posts."
      },
      "bio": {
        "title": "Link de Bio Inteligente",
        "subtitle": "Biografia profissional para seu perfil",
        "desc": "Crie uma página de link na bio de alta conversão."
      }
    },
    "hashtag_seo": {
      "title": "Hashtags Populares para Redes Sociais",
      "desc": "Encontre as hashtags mais populares para viralizar."
    },
    "footer_branding": {
      "title": "SavClip – Rápido & Seguro",
      "desc": "Uma plataforma confiável para salvar e gerenciar conteúdo de redes sociais.",
      "platforms_title": "Plataformas Suportadas",
      "features_title": "Recursos",
      "features": ["Sem Login", "Rápido", "HD", "Multiplataforma"]
    }
  },
  es: {
    "guide": {
      "steps": [
        null,
        null,
        null,
        {
          "title": "Guardar video",
          "desc": "Elige la calidad y guarda el video en tu dispositivo."
        }
      ]
    },
    "ai_tools": {
      "hashtags": {
        "title": "Generador de Hashtags Virales",
        "subtitle": "Genera los mejores hashtags para tu nicho",
        "desc": "Aumenta tu alcance con la generación de hashtags por IA."
      },
      "captions": {
        "title": "Generador de Subtítulos por IA",
        "subtitle": "Subtítulos que impulsan el compromiso",
        "desc": "Crea subtítulos perfectos para tus reels y publicaciones."
      },
      "bio": {
        "title": "Enlace de Bio Inteligente",
        "subtitle": "Biografía profesional para tu perfil",
        "desc": "Crea una página de enlace en bio de alta conversión."
      }
    },
    "hashtag_seo": {
      "title": "Hashtags de Tendencia para Redes Sociales",
      "desc": "Encuentra los hashtags más populares para viralizarte."
    },
    "footer_branding": {
      "title": "SavClip – Rápido & Seguro",
      "desc": "Una plataforma confiable para guardar y gestionar contenido de redes sociales.",
      "platforms_title": "Plataformas Soportadas",
      "features_title": "Características",
      "features": ["Sin Registro", "Rápido", "HD", "Multiplataforma"]
    }
  },
  id: {
    "guide": {
      "steps": [
        null,
        null,
        null,
        {
          "title": "Simpan video",
          "desc": "Pilih kualitas Anda dan simpan video ke perangkat Anda."
        }
      ]
    },
    "ai_tools": {
      "hashtags": {
        "title": "Pembuat Hashtag Viral",
        "subtitle": "Hasilkan hashtag terbaik untuk niche Anda",
        "desc": "Tingkatkan jangkauan Anda dengan pembuatan hashtag bertenaga AI."
      },
      "captions": {
        "title": "Pembuat Keterangan AI",
        "subtitle": "Keterangan yang mendorong keterlibatan",
        "desc": "Buat keterangan sempurna untuk reels dan postingan Anda."
      },
      "bio": {
        "title": "Tautan Bio Pintar",
        "subtitle": "Bio profesional untuk profil Anda",
        "desc": "Buat halaman tautan-di-bio konversi tinggi."
      }
    },
    "hashtag_seo": {
      "title": "Hashtag Tren untuk Media Sosial",
      "desc": "Temukan hashtag terpopuler untuk menjadi viral."
    },
    "footer_branding": {
      "title": "SavClip – Cepat & Aman",
      "desc": "Platform tepercaya untuk menyimpan dan mengelola konten media sosial.",
      "platforms_title": "Platform yang Didukung",
      "features_title": "Fitur",
      "features": ["Tanpa Login", "Cepat", "HD", "Multi-Platform"]
    }
  },
  ar: {
    "guide": {
      "steps": [
        null,
        null,
        null,
        {
          "title": "حفظ الفيديو",
          "desc": "اختر الجودة المناسبة واحفظ الفيديو على جهازك."
        }
      ]
    },
    "ai_tools": {
      "hashtags": {
        "title": "مولد الهاشتاقات الرائجة",
        "subtitle": "أنشئ أفضل الهاشتاقات لمجالك الخاص",
        "desc": "زد من وصولك باستخدام الهاشتاقات المولدة بالذكاء الاصطناعي."
      },
      "captions": {
        "title": "مولد كابشن ذكاء اصطناعي",
        "subtitle": "نصوص توضيحية تزيد من التفاعل",
        "desc": "أنشئ كابشن مثالي لمنشوراتك ومقاطع ريلز الخاصة بك."
      },
      "bio": {
        "title": "رابط البيو الذكي",
        "subtitle": "سيرة ذاتية احترافية لملفك الشخصي",
        "desc": "أنشئ صفحة رابط في البيو عالية التحويل."
      }
    },
    "hashtag_seo": {
      "title": "الهاشتاقات الشائعة لوسائل التواصل الاجتماعي",
      "desc": "اعثر على الهاشتاقات الأكثر شعبية لانتشار محتواك."
    },
    "footer_branding": {
      "title": "SavClip – سريع وآمن",
      "desc": "منصة موثوقة لحفظ وإدارة محتوى وسائل التواصل الاجتماعي.",
      "platforms_title": "المنصات المدعومة",
      "features_title": "المميزات",
      "features": ["بدون تسجيل دخول", "سريع", "HD", "متعدد المنصات"]
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
    } else if (Array.isArray(source[key])) {
      if (!Array.isArray(target[key])) {
        target[key] = [];
      }
      for (let i = 0; i < source[key].length; i++) {
        if (source[key][i] !== null && source[key][i] !== undefined) {
          if (typeof source[key][i] === 'object') {
            if (!target[key][i] || typeof target[key][i] !== 'object') {
              target[key][i] = {};
            }
            deepMerge(target[key][i], source[key][i]);
          } else {
            target[key][i] = source[key][i];
          }
        }
      }
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

  // Ensure platforms and platforms.seo_pages structure exists
  if (!dict.platforms) dict.platforms = {};
  if (!dict.platforms.seo_pages) dict.platforms.seo_pages = {};

  // Merge seo_pages titles
  const langSeoPages = seoPagesTranslations[lang];
  for (const toolKey in langSeoPages) {
    if (!dict.platforms.seo_pages[toolKey]) {
      dict.platforms.seo_pages[toolKey] = {};
    }
    dict.platforms.seo_pages[toolKey].title = langSeoPages[toolKey];
  }

  // Merge other translations
  deepMerge(dict, otherTranslations[lang]);

  // Save back
  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Successfully updated and saved translations for: ${lang}`);
}

console.log('All dictionaries successfully updated!');
