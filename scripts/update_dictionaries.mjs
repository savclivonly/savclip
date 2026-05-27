import fs from 'fs';
import path from 'path';

const dictsDir = path.join(process.cwd(), 'src', 'dictionaries');

const updates = {
  pt: {
    instagram: {
      reels: {
        title: "Baixar Reels do Instagram",
        subtitle: "Baixe Reels do Instagram em alta definição (HD) gratuitamente",
        seo: {
          title: "Baixar Reels do Instagram Grátis em HD (Sem Marca D'água) – SavClip",
          desc: "O melhor baixador de Reels do Instagram online. Salve vídeos do Reels em MP4 com áudio de alta qualidade e sem marca d'água no celular ou PC."
        },
        faq: {
          items: [
            {
              q: "Como baixar Reels do Instagram no celular?",
              a: "Abra o Instagram, copie o link do Reel, cole no campo de busca do SavClip e clique em baixar."
            },
            {
              q: "O download de Reels é gratuito?",
              a: "Sim, o SavClip é 100% gratuito e não exige cadastro ou login."
            }
          ]
        }
      }
    },
    tiktok: {
      title: "Baixar Vídeos do TikTok",
      subtitle: "Baixe vídeos do TikTok sem marca d'água em alta qualidade.",
      seo: {
        title: "Baixar Vídeo do TikTok Sem Marca d'Água Online – SavClip",
        desc: "Baixe vídeos do TikTok em HD sem marca d'água (watermark). Conversor de TikTok para MP4 e MP3 gratuito, rápido e ilimitado."
      },
      faq: {
        items: [
          {
            q: "Como tirar a marca d'água do TikTok?",
            a: "Basta colar o link do vídeo do TikTok no SavClip e clicar em baixar. Nosso sistema remove o logotipo automaticamente."
          }
        ]
      }
    },
    snapchat: {
      title: "Baixar Vídeos do Snapchat",
      subtitle: "Salve vídeos do Spotlight e Stories do Snapchat em qualidade original",
      seo: {
        title: "Baixar Vídeos do Snapchat: Salve Stories e Spotlight – SavClip",
        desc: "Baixe fotos e vídeos do Snapchat online. Salve conteúdos públicos do Spotlight e Stories em alta qualidade diretamente no seu dispositivo."
      }
    }
  },
  es: {
    instagram: {
      reels: {
        title: "Descargar Reels de Instagram",
        subtitle: "Guarda Reels de Instagram en alta definición (HD) y con audio",
        seo: {
          title: "Descargar Reels de Instagram Gratis en HD sin Marca de Agua – SavClip",
          desc: "La mejor herramienta para descargar Reels de Instagram online. Guarda videos de Reels en formato MP4 de alta calidad sin registrarte."
        },
        faq: {
          items: [
            {
              q: "¿Cómo descargar Reels de Instagram en mi teléfono?",
              a: "Copia el enlace del Reel desde Instagram, pégalo en el cuadro de búsqueda de SavClip y presiona Descargar."
            }
          ]
        }
      }
    },
    tiktok: {
      title: "Descargar Videos de TikTok",
      subtitle: "Descargar Videos de TikTok sin Marca de Agua en HD",
      seo: {
        title: "Descargar Videos de TikTok sin Marca de Agua en HD – SavClip",
        desc: "Descarga videos de TikTok gratis en HD sin marca de agua. Convierte TikTok a MP4 o MP3 al instante desde tu celular o computadora."
      },
      faq: {
        items: [
          {
            q: "¿Cómo descargar videos de TikTok sin marca de agua?",
            a: "Pega el enlace del video en la barra de búsqueda superior y presiona descargar. Nuestro sistema quitará el logo automáticamente."
          }
        ]
      }
    },
    snapchat: {
      title: "Descargar Videos de Snapchat",
      subtitle: "Guarda Spotlights y Stories de Snapchat en resolución original",
      seo: {
        title: "Descargar Videos de Snapchat Online: Spotlights y Stories – SavClip",
        desc: "Guarda videos de Snapchat en tu galería. Descarga contenido público de Spotlight y Stories en alta calidad sin aplicaciones adicionales."
      }
    }
  },
  id: {
    instagram: {
      reels: {
        title: "Unduh Reels Instagram",
        subtitle: "Download Reels Instagram kualitas HD tanpa watermark gratis",
        seo: {
          title: "Unduh Reels Instagram HD Tanpa Watermark Gratis – SavClip",
          desc: "Cara termudah untuk download Reels Instagram online dengan audio. Unduh video Reels dalam format MP4 HD secara gratis tanpa login."
        },
        faq: {
          items: [
            {
              q: "Bagaimana cara download Reels Instagram di HP?",
              a: "Salin tautan Reels dari aplikasi Instagram, tempel ke kolom pencarian SavClip, lalu klik tombol Unduh."
            }
          ]
        }
      }
    },
    tiktok: {
      title: "Download Video TikTok",
      subtitle: "Unduh video TikTok kualitas HD tanpa logo gratis",
      seo: {
        title: "Download Video TikTok Tanpa Watermark HD Online – SavClip",
        desc: "Unduh video TikTok tanpa watermark secara online dan gratis. Simpan video TikTok ke format MP4 HD atau audio MP3 dengan cepat."
      },
      faq: {
        items: [
          {
            q: "Bagaimana cara menghilangkan watermark TikTok?",
            a: "Tempel tautan video TikTok ke kotak di atas dan klik Unduh. Watermark akan dihapus secara otomatis."
          }
        ]
      }
    },
    snapchat: {
      title: "Download Video Snapchat",
      subtitle: "Simpan video Spotlight dan Story Snapchat kualitas asli",
      seo: {
        title: "Download Video Snapchat Online: Simpan Story & Spotlight – SavClip",
        desc: "Unduh video Snapchat ke galeri HP Anda. Simpan konten publik dari Spotlight dan Story Snapchat dalam resolusi tinggi dengan aman."
      }
    }
  },
  ar: {
    instagram: {
      reels: {
        title: "تحميل ريلز انستقرام",
        subtitle: "قم بتحميل مقاطع ريلز انستقرام بجودة عالية HD مجاناً",
        seo: {
          title: "تحميل ريلز انستقرام بدون علامة مائية بجودة عالية HD – SavClip",
          desc: "أدخل رابط ريلز انستقرام لحفظ الفيديو بدون علامة مائية أونلاين وبسرعة فائقة."
        },
        faq: {
          items: [
            {
              q: "كيف يمكنني تحميل ريلز انستقرام على الهاتف؟",
              a: "انسخ رابط مقطع الريلز من انستقرام، ثم الصقه في مربع البحث على موقعنا واضغط على زر تحميل."
            }
          ]
        }
      }
    },
    tiktok: {
      title: "تحميل فيديوهات تيك توك",
      subtitle: "حمل مقاطع تيك توك بجودة عالية HD وبدون شعار",
      seo: {
        title: "تحميل فيديو تيك توك بدون علامة مائية بجودة عالية HD – SavClip",
        desc: "أسرع موقع لتحميل فيديوهات تيك توك بدون علامة مائية أون لاين. قم بتحويل مقاطع تيك توك إلى MP4 أو MP3 بجودة أصلية مجاناً."
      },
      faq: {
        items: [
          {
            q: "كيف أحمل فيديو تيك توك بدون حقوق؟",
            a: "الصق رابط الفيديو في موقعنا واضغط تحميل، سيقوم النظام بحفظ الفيديو بدون العلامة المائية للتيك توك."
          }
        ]
      }
    },
    snapchat: {
      title: "تحميل فيديوهات سناب شات",
      subtitle: "حفظ قصص ومنصة أضواء سناب شات بالجودة الأصلية",
      seo: {
        title: "تحميل مقاطع سناب شات أونلاين: حفظ القصص ومنصة أضواء – SavClip",
        desc: "حفظ مقاطع فيديو وصور سناب شات بسهولة. حمل محتوى منصة أضواء وقصص سناب شات العامة بجودة عالية مباشرة إلى جهازك."
      }
    }
  }
};

for (const [lang, data] of Object.entries(updates)) {
  const filePath = path.join(dictsDir, `${lang}.json`);
  if (!fs.existsSync(filePath)) continue;
  
  const dict = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  // Merge updates
  if (!dict.platforms) dict.platforms = {};
  if (!dict.platforms.instagram) dict.platforms.instagram = {};
  
  // Instagram Reels
  dict.platforms.instagram.reels = {
    ...dict.platforms.instagram.reels,
    ...data.instagram.reels,
    seo: {
      ...(dict.platforms.instagram.reels?.seo || {}),
      ...data.instagram.reels.seo
    },
    faq: {
      ...(dict.platforms.instagram.reels?.faq || {}),
      ...data.instagram.reels.faq
    }
  };
  
  // TikTok
  dict.platforms.tiktok = {
    ...dict.platforms.tiktok,
    ...data.tiktok,
    seo: {
      ...(dict.platforms.tiktok?.seo || {}),
      ...data.tiktok.seo
    },
    faq: {
      ...(dict.platforms.tiktok?.faq || {}),
      ...data.tiktok.faq
    }
  };
  
  // Snapchat
  dict.platforms.snapchat = {
    ...dict.platforms.snapchat,
    ...data.snapchat,
    seo: {
      ...(dict.platforms.snapchat?.seo || {}),
      ...data.snapchat.seo
    }
  };
  
  fs.writeFileSync(filePath, JSON.stringify(dict, null, 2), 'utf8');
  console.log(`Successfully merged SEO translations into ${lang}.json`);
}
