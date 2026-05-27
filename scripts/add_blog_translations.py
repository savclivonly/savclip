import re

file_path = "/Users/ramzan/Pictures/savclip/src/utils/translate-tool.ts"

new_translations = {
    "pt": {
        "Instagram Tips": "Dicas do Instagram",
        "TikTok Tips": "Dicas do TikTok",
        "YouTube Shorts": "YouTube Shorts",
        "Viral Reels": "Reels Virais",
        "Creator Growth": "Crescimento do Criador",
        "How to Download Instagram Reels in 2026: The Ultimate Guide": "Como baixar Reels do Instagram em 2026: O guia definitivo",
        "Download TikTok Videos Without Watermark: A Step-by-Step Tutorial": "Baixar vídeos do TikTok sem marca d'água: Tutorial passo a passo",
        "The Best Viral Reels Hashtags to Boost Your Reach in 2026": "Os melhores hashtags de Reels virais para aumentar seu alcance em 2026",
        "YouTube Shorts Algorithm Secrets: How to Get Millions of Views": "Segredos do algoritmo do YouTube Shorts: Como obter milhões de visualizações",
        "How to Make Viral Reels in Under 10 Minutes": "Como fazer Reels virais em menos de 10 minutos",
        "50+ Best Instagram Bio Ideas to Convert Profile Views into Followers": "Mais de 50 melhores ideias de biografia do Instagram para converter visualizações em seguidores",
        "Learn the fastest and safest methods to save Instagram Reels to your gallery without watermark.": "Aprenda os métodos mais rápidos e seguros para salvar Reels do Instagram na sua galeria sem marca d'água.",
        "Tired of the TikTok logo bouncing around? Here is how to get clean MP4 files for your collection.": "Cansado do logotipo do TikTok pulando? Veja como obter arquivos MP4 limpos para sua coleção.",
        "Stop guessing! Use these AI-researched hashtags to get more views and followers on Instagram.": "Pare de adivinhar! Use estes hashtags pesquisados por IA para obter mais visualizações e seguidores no Instagram.",
        "Unlock the hidden mechanics of YouTube Shorts and understand how the recommendation algorithm actually works.": "Desbloqueie a mecânica oculta do YouTube Shorts e entenda como o algoritmo de recomendação realmente funciona.",
        "A step-by-step framework to conceptualize, shoot, and edit highly engaging Instagram Reels without burning out.": "Um roteiro passo a passo para planejar, gravar e editar Reels do Instagram altamente engajantes sem se cansar.",
        "Your bio is your digital billboard. Learn how to write compelling bios that command attention and drive clicks.": "Sua biografia é seu outdoor digital. Aprenda a escrever biografias atraentes que chamem a atenção e gerem cliques.",
        "Related Downloading Tools": "Ferramentas de Download Relacionadas",
        "Mastering the Art of Content Extraction": "Dominando a arte da extração de conteúdo",
        "Using tools like SavClip allows you to preserve the high-quality resolution of the original post without compromises. In today's social media landscape, archiving your favorite moments or business assets is crucial.": "O uso de ferramentas como SavClip permite preservar a resolução de alta qualidade do post original sem compromissos. No cenário atual das mídias sociais, arquivar seus momentos favoritos ou ativos de negócios é crucial."
    },
    "es": {
        "Instagram Tips": "Consejos de Instagram",
        "TikTok Tips": "Consejos de TikTok",
        "YouTube Shorts": "YouTube Shorts",
        "Viral Reels": "Reels Virales",
        "Creator Growth": "Crecimiento del Creador",
        "How to Download Instagram Reels in 2026: The Ultimate Guide": "Cómo descargar Instagram Reels en 2026: La guía definitiva",
        "Download TikTok Videos Without Watermark: A Step-by-Step Tutorial": "Descargar videos de TikTok sin marca de agua: Tutorial paso a paso",
        "The Best Viral Reels Hashtags to Boost Your Reach in 2026": "Los mejores hashtags de Reels virales para aumentar tu alcance en 2026",
        "YouTube Shorts Algorithm Secrets: How to Get Millions of Views": "Secretos del algoritmo de YouTube Shorts: Cómo obtener millones de visitas",
        "How to Make Viral Reels in Under 10 Minutes": "Cómo hacer Reels virales en menos de 10 minutos",
        "50+ Best Instagram Bio Ideas to Convert Profile Views into Followers": "Más de 50 mejores ideas de biografía de Instagram para convertir visitas en seguidores",
        "Learn the fastest and safest methods to save Instagram Reels to your gallery without watermark.": "Aprenda los métodos más rápidos y seguros para guardar Reels de Instagram en su galería sin marca de agua.",
        "Tired of the TikTok logo bouncing around? Here is how to get clean MP4 files for your collection.": "¿Cansado de que el logo de TikTok rebote? Aquí le mostramos cómo obtener archivos MP4 limpios para su colección.",
        "Stop guessing! Use these AI-researched hashtags to get more views and followers on Instagram.": "¡Deje de adivinar! Use estos hashtags investigados por IA para obtener más visitas y seguidores en Instagram.",
        "Unlock the hidden mechanics of YouTube Shorts and understand how the recommendation algorithm actually works.": "Desbloquee la mecánica oculta de YouTube Shorts y comprenda cómo funciona realmente el algoritmo de recomendación.",
        "A step-by-step framework to conceptualize, shoot, and edit highly engaging Instagram Reels without burning out.": "Un marco paso a paso para conceptualizar, filmar y editar Reels de Instagram muy atractivos sin agotarse.",
        "Your bio is your digital billboard. Learn how to write compelling bios that command attention and drive clicks.": "Su biografía es su valla publicitaria digital. Aprenda a escribir biografías convincentes que llamen la atención y atraigan clics.",
        "Related Downloading Tools": "Herramientas de Descarga Relacionadas",
        "Mastering the Art of Content Extraction": "Dominar el arte de la extracción de contenido",
        "Using tools like SavClip allows you to preserve the high-quality resolution of the original post without compromises. In today's social media landscape, archiving your favorite moments or business assets is crucial.": "El uso de herramientas como SavClip le permite preservar la resolución de alta calidad de la publicación original sin concesiones. En el panorama actual de las redes sociales, archivar sus momentos favoritos o activos comerciales es crucial."
    },
    "id": {
        "Instagram Tips": "Tips Instagram",
        "TikTok Tips": "Tips TikTok",
        "YouTube Shorts": "YouTube Shorts",
        "Viral Reels": "Reels Viral",
        "Creator Growth": "Pertumbuhan Kreator",
        "How to Download Instagram Reels in 2026: The Ultimate Guide": "Cara Mengunduh Reels Instagram di 2026: Panduan Utama",
        "Download TikTok Videos Without Watermark: A Step-by-Step Tutorial": "Unduh Video TikTok Tanpa Watermark: Tutorial Langkah demi Langkah",
        "The Best Viral Reels Hashtags to Boost Your Reach in 2026": "Hashtag Reels Viral Terbaik untuk Meningkatkan Jangkauan Anda di 2026",
        "YouTube Shorts Algorithm Secrets: How to Get Millions of Views": "Rahasia Algoritma YouTube Shorts: Cara Mendapatkan Jutaan Penonton",
        "How to Make Viral Reels in Under 10 Minutes": "Cara Membuat Reels Viral dalam Waktu Kurang dari 10 Menit",
        "50+ Best Instagram Bio Ideas to Convert Profile Views into Followers": "50+ Ide Bio Instagram Terbaik untuk Mengonversi Kunjungan Profil Menjadi Pengikut",
        "Learn the fastest and safest methods to save Instagram Reels to your gallery without watermark.": "Pelajari metode tercepat dan teraman untuk menyimpan Reels Instagram ke galeri Anda tanpa watermark.",
        "Tired of the TikTok logo bouncing around? Here is how to get clean MP4 files for your collection.": "Bosan dengan logo TikTok yang memantul? Berikut cara mendapatkan file MP4 bersih untuk koleksi Anda.",
        "Stop guessing! Use these AI-researched hashtags to get more views and followers on Instagram.": "Berhenti menebak! Gunakan hashtag hasil riset AI ini untuk mendapatkan lebih banyak penonton dan pengikut di Instagram.",
        "Unlock the hidden mechanics of YouTube Shorts and understand how the recommendation algorithm actually works.": "Buka rahasia mekanis YouTube Shorts dan pahami bagaimana algoritma rekomendasi sebenarnya bekerja.",
        "A step-by-step framework to conceptualize, shoot, and edit highly engaging Instagram Reels without burning out.": "Kerangka kerja langkah demi langkah untuk membuat konsep, merekam, dan mengedit Reels Instagram yang sangat menarik tanpa kelelahan.",
        "Your bio is your digital billboard. Learn how to write compelling bios that command attention and drive clicks.": "Bio Anda adalah papan reklame digital Anda. Pelajari cara menulis bio menarik yang menarik perhatian dan mendorong klik.",
        "Related Downloading Tools": "Alat Pengunduh Terkait",
        "Mastering the Art of Content Extraction": "Menguasai Seni Ekstraksi Konten",
        "Using tools like SavClip allows you to preserve the high-quality resolution of the original post without compromises. In today's social media landscape, archiving your favorite moments or business assets is crucial.": "Menggunakan alat seperti SavClip memungkinkan Anda untuk mempertahankan resolusi berkualitas tinggi dari postingan asli tanpa kompromi. Dalam lanskap media sosial saat ini, mengarsipkan momen favorit atau aset bisnis Anda sangatlah penting."
    },
    "ar": {
        "Instagram Tips": "نصائح إنستغرام",
        "TikTok Tips": "نصائح تيك توك",
        "YouTube Shorts": "يوتيوب شورتس",
        "Viral Reels": "ريلز فريدة",
        "Creator Growth": "نمو صناع المحتوى",
        "How to Download Instagram Reels in 2026: The Ultimate Guide": "كيفية تنزيل ريلز إنستغرام في 2026: الدليل الشامل",
        "Download TikTok Videos Without Watermark: A Step-by-Step Tutorial": "تنزيل فيديوهات تيك توك بدون علامة مائية: دليل خطوة بخطوة",
        "The Best Viral Reels Hashtags to Boost Your Reach in 2026": "أفضل هاشتاقات ريلز لزيادة تفاعل حسابك في 2026",
        "YouTube Shorts Algorithm Secrets: How to Get Millions of Views": "أسرار خوارزمية يوتيوب شورتس: كيف تحصل على ملايين المشاهدات",
        "How to Make Viral Reels in Under 10 Minutes": "كيفية إنشاء ريلز فيروسية في أقل من 10 دقائق",
        "50+ Best Instagram Bio Ideas to Convert Profile Views into Followers": "أكثر من 50 فكرة مميزة للبايو لإنستغرام لزيادة المتابعين",
        "Learn the fastest and safest methods to save Instagram Reels to your gallery without watermark.": "تعرف على أسرع وأأمن الطرق لحفظ ريلز إنستغرام في معرض الصور الخاص بك بدون علامة مائية.",
        "Tired of the TikTok logo bouncing around? Here is how to get clean MP4 files for your collection.": "هل سئمت من شعار تيك توك العائم؟ إليك كيفية الحصول على ملفات MP4 نظيفة لمجموعتك.",
        "Stop guessing! Use these AI-researched hashtags to get more views and followers on Instagram.": "توقف عن التخمين! استخدم هذه الهاشتاقات المختارة بالذكاء الاصطناعي للحصول على المزيد من المشاهدات والمتابعين على إنستغرام.",
        "Unlock the hidden mechanics of YouTube Shorts and understand how the recommendation algorithm actually works.": "اكتشف أسرار خوارزمية يوتيوب شورتس وتعرف على كيفية عمل خوارزمية التوصية بالكامل.",
        "A step-by-step framework to conceptualize, shoot, and edit highly engaging Instagram Reels without burning out.": "دليل خطوة بخطوة لتصوير ومونتاج مقاطع ريلز مميزة لإنستغرام دون أي عناء.",
        "Your bio is your digital billboard. Learn how to write compelling bios that command attention and drive clicks.": "حسابك هو لوحة إعلاناتك الرقمية. تعلم كيفية كتابة بايو جذاب يلفت الانتباه ويحفز على الضغط.",
        "Related Downloading Tools": "أدوات التحميل ذات الصلة",
        "Mastering the Art of Content Extraction": "احتراف فن استخراج المحتوى",
        "Using tools like SavClip allows you to preserve the high-quality resolution of the original post without compromises. In today's social media landscape, archiving your favorite moments or business assets is crucial.": "يسمح لك استخدام أدوات مثل ساف كليب بالحفاظ على الدقة العالية للمنشور الأصلي دون أي تنازلات. في عالم وسائل التواصل الاجتماعي اليوم، يعد حفظ لحظاتك المفضلة أو ملفات عملك أمراً بالغ الأهمية."
    }
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's insert keys at the end of each language block
# We can find each block closing e.g.
# pt: { ...
#   }
# es: { ...
#   }
# id: { ...
#   }
# ar: { ...
#   }

for locale, trans in new_translations.items():
    # Build the block of translations to insert
    lines = []
    for k, v in trans.items():
        # Escape double quotes
        k_escaped = k.replace('"', '\\"')
        v_escaped = v.replace('"', '\\"')
        lines.append(f'    "{k_escaped}": "{v_escaped}",')
    
    insert_str = "\n" + "\n".join(lines) + "\n"
    
    # We find the specific language block. 
    # For pt, it's followed by "es: {"
    # For es, it's followed by "id: {"
    # For id, it's followed by "ar: {"
    # For ar, it's followed by "}" (end of TRANSLATIONS)
    
    if locale == "pt":
        pattern = r"(\n\s*},\s*\n\s*es:\s*\{)"
    elif locale == "es":
        pattern = r"(\n\s*},\s*\n\s*id:\s*\{)"
    elif locale == "id":
        pattern = r"(\n\s*},\s*\n\s*ar:\s*\{)"
    elif locale == "ar":
        # Matches the end of the TRANSLATIONS object before export function
        pattern = r"(\n\s*}\s*;\s*\n\s*export\s+function\s+translateToolName)"
        
    match = re.search(pattern, content)
    if match:
        matched_str = match.group(1)
        # Insert our translations right before the closing bracket of the block
        if locale == "ar":
            # For ar: it closes with };, so insert before the closing };
            content = content.replace(matched_str, f"\n{insert_str}  }};\n\nexport function translateToolName")
        else:
            content = content.replace(matched_str, f"\n{insert_str}  }},\n  {pattern.split(' ')[-1].split(':')[-2].strip() if ':' in pattern else ''}" if locale != 'ar' else '')
            # Wait, let's make it simpler and safer:
            if locale == "pt":
                content = content.replace(matched_str, f"\n{insert_str}  }},\n  es: {{")
            elif locale == "es":
                content = content.replace(matched_str, f"\n{insert_str}  }},\n  id: {{")
            elif locale == "id":
                content = content.replace(matched_str, f"\n{insert_str}  }},\n  ar: {{")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Successfully merged all blog translations into translate-tool.ts!")
