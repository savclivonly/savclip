import fs from 'fs';
import path from 'path';

const projectDir = '/Users/ramzan/Pictures/savclip';
const baseSeoDir = path.join(projectDir, 'src', 'data', 'seo');
const enSeoDir = path.join(baseSeoDir, 'en');
const ptSeoDir = path.join(baseSeoDir, 'pt');

if (!fs.existsSync(ptSeoDir)) {
  fs.mkdirSync(ptSeoDir, { recursive: true });
}

const platformNames = {
  instagram: "Instagram",
  facebook: "Facebook",
  tiktok: "TikTok",
  youtube: "YouTube",
  snapchat: "Snapchat",
  telegram: "Telegram",
  x: "X (Twitter)",
  general: "Redes Sociais"
};

const toolNames = {
  "album-downloader": "Baixador de Álbuns",
  "audio-downloader": "Baixador de Áudio",
  "mp3-downloader": "Baixador de MP3",
  "video-downloader": "Baixador de Vídeos",
  "reels-downloader": "Baixador de Reels",
  "photo-downloader": "Baixador de Fotos",
  "story-saver": "Salvador de Stories",
  "story-viewer": "Visualizador de Stories",
  "stories-downloader": "Baixador de Stories",
  "private-downloader": "Baixador de Mídia Privada",
  "highlights-downloader": "Baixador de Destaques",
  "carousel-downloader": "Baixador de Carrossel",
  "dp-downloader": "Baixador de Foto de Perfil",
  "profile-picture-downloader": "Baixador de Foto de Perfil",
  "video-compressor": "Compressor de Vídeos",
  "profile-viewer": "Visualizador de Perfis",
  "anonymous-viewer": "Visualizador Anônimo",
  "anonymous-tiktok-viewer": "Visualizador Anônimo do TikTok",
  "playlist-downloader": "Baixador de Playlists",
  "shorts-downloader": "Baixador de Shorts",
  "to-mp3-converter": "Conversor de Vídeo para MP3",
  "thumbnail-downloader": "Baixador de Miniaturas",
  "subtitle-downloader": "Baixador de Legendas",
  "tag-generator": "Gerador de Tags",
  "title-generator": "Gerador de Títulos",
  "description-generator": "Gerador de Descrições",
  "comment-picker": "Selecionador de Comentários",
  "channel-audit-tool": "Ferramenta de Auditoria de Canais",
  "region-restriction-checker": "Verificador de Restrição Regional",
  "video-cutter": "Cortador de Vídeo",
  "group-video-downloader": "Baixador de Vídeos de Grupos",
  "live-video-downloader": "Baixador de Vídeos ao Vivo",
  "page-audit-tool": "Ferramenta de Auditoria de Páginas",
  "lens-saver": "Salvador de Lentes",
  "map-downloader": "Baixador de Mapas",
  "memories-downloader": "Baixador de Memórias",
  "private-story-downloader": "Baixador de Stories Privados",
  "spotlight-downloader": "Baixador de Spotlight",
  "bio-generator": "Gerador de Bios",
  "channel-link-generator": "Gerador de Links de Canais",
  "file-downloader": "Baixador de Arquivos",
  "gif-downloader": "Baixador de GIFs",
  "restricted-content-downloader": "Baixador de Conteúdo Restrito",
  "restricted-content": "Baixador de Conteúdo Restrito",
  "trending-channel-finder": "Localizador de Canais Populares",
  "caption-generator": "Gerador de Legendas",
  "trending-hashtag-generator": "Gerador de Hashtags Populares",
  "trending-hashtag-finder": "Localizador de Hashtags Populares",
  "song-finder": "Localizador de Músicas",
  "analytics-viewer": "Visualizador de Estatísticas",
  "banner-downloader": "Baixador de Banners",
  "media-downloader": "Baixador de Mídia",
  "space-downloader": "Baixador de Spaces",
  "thread-downloader": "Baixador de Threads"
};

const templates = {
  mp3: {
    titleSuffix: "Baixador de MP3 e Áudio HD",
    desc: "Baixe e extraia o áudio de vídeos do {platform} instantaneamente. Nosso conversor de MP3 conserva a qualidade original de som sem nenhuma compressão.",
    subtitle: "Salve músicas e faixas de áudio de vídeos do {platform} em formato MP3 de alta qualidade.",
    articleSections: [
      {
        type: "heading",
        level: 2,
        content: "Por que o SavClip é o Melhor {platform} {tool}"
      },
      {
        type: "paragraph",
        content: "O áudio de alta qualidade é essencial para qualquer produção digital hoje em dia. Nosso extrator de áudio do {platform} foi desenvolvido para entregar o som mais limpo possível. Esqueça conversores ruins que distorcem a música; garantimos a melhor qualidade para seus arquivos."
      },
      {
        type: "heading",
        level: 3,
        content: "Som Limpo e Qualidade de Áudio Original"
      },
      {
        type: "paragraph",
        content: "Muitos conversores online reduzem a qualidade do som ao reprocessar o arquivo. O SavClip faz uma extração direta do servidor do {platform}, mantendo a faixa original em até 320kbps. Seja para salvar uma música em alta definição ou um efeito sonoro especial, o resultado é profissional."
      },
      {
        type: "heading",
        level: 3,
        content: "Compatibilidade Total Sem Instalar Nada"
      },
      {
        type: "paragraph",
        content: "Nossa ferramenta é compatível com todos os seus aparelhos. Você pode baixar áudios do {platform} no celular (Android e iPhone) ou no computador de forma rápida. O site roda direto no navegador, o que dispensa a instalação de aplicativos ou extensões e mantém seu aparelho seguro."
      },
      {
        type: "heading",
        level: 3,
        content: "Privacidade e Segurança em Primeiro Lugar"
      },
      {
        type: "paragraph",
        content: "Sua privacidade é nossa prioridade. Não solicitamos nenhuma informação pessoal ou login de conta. A conversão de vídeo para áudio é feita de forma 100% segura em nossos servidores. Use à vontade: o serviço é totalmente gratuito, rápido e ilimitado."
      }
    ],
    faqs: [
      {
        q: "Como extrair áudio de vídeos do {platform} em alta qualidade?",
        a: "Copie o link do vídeo do {platform}, cole na barra de pesquisa no topo da página e selecione a opção MP3 para baixar."
      },
      {
        q: "É gratuito converter vídeos do {platform} para MP3 com o SavClip?",
        a: "Sim, o SavClip é grátis e ilimitado. Você pode converter quantos arquivos quiser sem pagar nada e sem precisar se cadastrar."
      },
      {
        q: "Preciso instalar algum software ou extensão de navegador?",
        a: "Não, nossa ferramenta funciona 100% online. Você só precisa de um navegador com internet no celular ou computador."
      },
      {
        q: "Qual é a qualidade de áudio que vou receber?",
        a: "Buscamos sempre extrair a melhor qualidade disponível no {platform}, geralmente em formato MP3 de alta definição de até 320kbps."
      }
    ]
  },
  story: {
    titleSuffix: "Visualizador e Baixador de Stories Anônimo",
    desc: "Baixe stories e destaques do {platform} de forma anônima. Nosso sistema garante que o criador do conteúdo nunca saiba que você salvou os vídeos.",
    subtitle: "Salve stories, fotos e destaques do {platform} de forma rápida e anônima.",
    articleSections: [
      {
        type: "heading",
        level: 2,
        content: "Baixador de Stories do {platform} com Total Anonimato"
      },
      {
        type: "paragraph",
        content: "Os stories desaparecem após 24 horas, mas muitos momentos valem a pena ser guardados. Nosso baixador de stories do {platform} oferece uma maneira fácil de salvar fotos e vídeos temporários sem deixar rastros."
      },
      {
        type: "heading",
        level: 3,
        content: "Como Funciona o Download Anônimo"
      },
      {
        type: "paragraph",
        content: "Ao visualizar stories pelo aplicativo, o criador é notificado. O SavClip serve como uma ponte segura: nosso sistema acessa a mídia e a exibe para você sem revelar seu perfil. Assim, você pode salvar e visualizar stories com total discrição."
      },
      {
        type: "heading",
        level: 3,
        content: "Salve Fotos e Vídeos na Resolução Original"
      },
      {
        type: "paragraph",
        content: "Evite capturas ou gravações de tela que estragam a qualidade visual das imagens. Nossa ferramenta acessa o arquivo original dos servidores do {platform}, permitindo salvar fotos em JPG e vídeos em MP4 com alta definição."
      },
      {
        type: "heading",
        level: 3,
        content: "Perfeito para Criadores e Profissionais"
      },
      {
        type: "paragraph",
        content: "Produtores de conteúdo e agências de redes sociais usam o SavClip para analisar a concorrência e salvar inspirações de forma segura. Com o download em um clique, você monta sua pasta de referências em segundos."
      }
    ],
    faqs: [
      {
        q: "O dono do perfil saberá que eu baixei o story do {platform}?",
        a: "Não. O processo é totalmente anônimo. O dono da conta nunca será notificado de que você visualizou ou salvou o story."
      },
      {
        q: "Consigo baixar stories de contas privadas no {platform}?",
        a: "Não, respeitamos as diretrizes de privacidade e apenas baixamos mídias de perfis públicos."
      },
      {
        q: "Existe limite de downloads para stories?",
        a: "De forma alguma. O nosso serviço de download de stories é gratuito, ilimitado e pode ser usado sempre que você precisar."
      },
      {
        q: "Em quais formatos os stories são salvos?",
        a: "Stories de foto são baixados no formato padrão JPG, enquanto stories de vídeo são salvos no formato de alta qualidade MP4."
      }
    ]
  },
  hd: {
    titleSuffix: "Baixador de Vídeos em Alta Resolução (HD/4K)",
    desc: "Baixe vídeos HD e 4K do {platform} com nosso mecanismo de elite. Preservamos a qualidade original e bitrates elevados sem nenhuma compressão.",
    subtitle: "Baixe vídeos, reels e mídias do {platform} na resolução original máxima em alta velocidade.",
    articleSections: [
      {
        type: "heading",
        level: 2,
        content: "Por que usar o {tool} do {platform} da SavClip"
      },
      {
        type: "paragraph",
        content: "Para quem valoriza cada detalhe, a resolução é o fator mais importante. Nosso baixador de vídeos em alta definição do {platform} é a melhor opção para salvar mídias em qualidade original e assistir offline em qualquer tela."
      },
      {
        type: "heading",
        level: 3,
        content: "Download Direto Sem Perda de Qualidade"
      },
      {
        type: "paragraph",
        content: "Ao contrário de outros sites que compactam os vídeos para reduzir custos de banda, o SavClip mantém a imagem original. Nosso sistema busca a mídia em sua fonte bruta, preservando a resolução original e cores fiéis — ideal para editores de vídeo e cinéfilos."
      },
      {
        type: "heading",
        level: 3,
        content: "Processamento e Velocidade Surpreendentes"
      },
      {
        type: "paragraph",
        content: "Chega de esperar minutos para finalizar uma transferência. Nossa infraestrutura de alta performance processa os arquivos de forma instantânea do nosso lado e os entrega prontos para salvar no seu navegador, no celular ou no PC."
      },
      {
        type: "heading",
        level: 3,
        content: "Segurança e Proteção SSL de Ponta"
      },
      {
        type: "paragraph",
        content: "Valorizamos a segurança dos seus dados. O site usa criptografia SSL para garantir uma navegação segura. Não pedimos senhas, cadastros ou dados bancários. Você pode fazer seus downloads em alta definição com total tranquilidade."
      }
    ],
    faqs: [
      {
        q: "Como baixar vídeos do {platform} na resolução máxima?",
        a: "Cole o link do vídeo no campo de pesquisa acima, escolha a resolução de sua preferência (como Full HD ou 4K) e clique no botão de download."
      },
      {
        q: "Existe alguma taxa para baixar arquivos grandes ou pesados?",
        a: "Não. O site é gratuito para qualquer tamanho de arquivo, sem limites de transferência ou velocidade de download."
      },
      {
        q: "É possível baixar vídeos em alta definição no celular?",
        a: "Com certeza. O site é compatível com os principais navegadores móveis (Safari no iOS e Chrome no Android), permitindo baixar direto no aparelho."
      },
      {
        q: "Qual é a maior resolução suportada para downloads?",
        a: "Isso depende do arquivo original enviado para o {platform}. Conseguimos extrair em Full HD (1080p), 2K ou até 4K se disponível."
      }
    ]
  },
  watermark: {
    titleSuffix: "Baixador de Vídeos Sem Marca d'Água",
    desc: "Baixe vídeos do {platform} sem marca d'água ou logotipos. Nossa ferramenta inteligente remove as marcas para fornecer um arquivo de vídeo limpo.",
    subtitle: "Salve vídeos do {platform} de forma limpa, sem logotipos e com áudio integrado.",
    articleSections: [
      {
        type: "heading",
        level: 2,
        content: "Baixador de Vídeos do {platform} Sem Marca d'Água"
      },
      {
        type: "paragraph",
        content: "Vídeos limpos e sem logos são indispensáveis para criadores de conteúdo e profissionais de edição. Nosso baixador do {platform} oferece a melhor solução para salvar mídias na qualidade original e sem marca d'água."
      },
      {
        type: "heading",
        level: 3,
        content: "Remoção Inteligente e Limpeza de Logotipos"
      },
      {
        type: "paragraph",
        content: "Muitos sites apenas borram os cantos dos vídeos para esconder as marcas, o que estraga a imagem. O SavClip acessa o fluxo bruto original antes da aplicação do logotipo, entregando um arquivo de vídeo MP4 100% limpo e de qualidade profissional."
      },
      {
        type: "heading",
        level: 3,
        content: "Ideal para Repostagens e Edições Rápidas"
      },
      {
        type: "paragraph",
        content: "No marketing digital e criação de conteúdo, compartilhar vídeos em várias redes é fundamental. Ter arquivos sem marcas d'água de concorrentes melhora o alcance orgânico dos seus posts. O site garante cores vivas e som perfeito."
      },
      {
        type: "heading",
        level: 3,
        content: "Download Direto e Sem Programas no Navegador"
      },
      {
        type: "paragraph",
        content: "O SavClip funciona 100% no navegador. Você não precisa baixar programas ou instalar extensões suspeitas no seu aparelho. O processo é seguro, anônimo e protegido com criptografia SSL do começo ao fim."
      }
    ],
    faqs: [
      {
        q: "Como salvar vídeos do {platform} sem marca d'água?",
        a: "Copie a URL do vídeo, cole no campo de pesquisa acima e clique em 'Download'. Nosso sistema removerá a marca d'água de forma automática."
      },
      {
        q: "Remover a marca d'água afeta a qualidade do som ou imagem?",
        a: "Não. A qualidade original em alta definição e o áudio estéreo integrado são mantidos exatamente como foram enviados para o {platform}."
      },
      {
        q: "O serviço de remoção de marca d'água tem custos?",
        a: "Não, a remoção de logotipos e o download de mídias no SavClip são totalmente gratuitos e ilimitados."
      },
      {
        q: "Consigo salvar vídeos sem marca d'água no iPhone?",
        a: "Sim. Abra o Safari no iPhone, acesse o SavClip, cole o link e faça o download. O arquivo será salvo diretamente na pasta de downloads."
      }
    ]
  },
  default: {
    titleSuffix: "Baixador Profissional de Mídias",
    desc: "O principal destino grátis para baixar mídias do {platform} em alta qualidade. Nosso serviço é rápido, estável e com total privacidade.",
    subtitle: "Baixe conteúdos do {platform} em qualidade HD original de forma simples e segura.",
    articleSections: [
      {
        type: "heading",
        level: 2,
        content: "Como o SavClip Simplifica os Downloads do {platform}"
      },
      {
        type: "paragraph",
        content: "Salvar fotos ou vídeos do {platform} não precisa ser difícil. O SavClip oferece uma página simples e rápida, focada em entregar sua mídia no melhor formato disponível em poucos segundos."
      },
      {
        type: "heading",
        level: 3,
        content: "Extração Avançada de Metadados"
      },
      {
        type: "paragraph",
        content: "Em vez de apenas gravar a tela ou tirar capturas, nosso sistema lê as informações brutas do post do {platform}. Isso significa que você baixa a mídia original com máxima fidelidade de cores e som estéreo integrado."
      },
      {
        type: "heading",
        level: 3,
        content: "Acesso em Qualquer Celular, Tablet ou Computador"
      },
      {
        type: "paragraph",
        content: "O site é responsivo e otimizado para rodar em qualquer sistema (iOS, Android, Windows e Mac) e navegador (Chrome, Safari, Firefox e Edge). Você terá a mesma velocidade de download em qualquer tela."
      },
      {
        type: "heading",
        level: 3,
        content: "Navegação Segura e Totalmente Anônima"
      },
      {
        type: "paragraph",
        content: "A privacidade dos usuários é o nosso foco. Criptografamos todas as conexões via SSL e não salvamos históricos de downloads ou pedimos cadastros de contas. Salve mídias de forma segura e ética sempre."
      }
    ],
    faqs: [
      {
        q: "Como baixar conteúdos do {platform} online?",
        a: "Copie o link do post do {platform}, cole no campo de pesquisa acima e clique em 'Download' para gerar os links de download direto."
      },
      {
        q: "Existe limite de velocidade ou arquivos para baixar?",
        a: "Nenhum. Nossa ferramenta oferece velocidade máxima do servidor e você pode salvar quantas mídias desejar por dia."
      },
      {
        q: "É seguro usar o SavClip para salvar arquivos?",
        a: "Sim. Como o SavClip roda direto na web, seu aparelho fica livre de vírus, sem a necessidade de baixar ou instalar aplicativos."
      },
      {
        q: "Qual é o formato de arquivo gerado pelo site?",
        a: "Geralmente, os vídeos são salvos no formato universal MP4 e as imagens são baixadas em JPG de alta resolução."
      }
    ]
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

function getIntentKey(filename) {
  if (filename.includes('mp3') || filename.includes('audio')) return 'mp3';
  if (filename.includes('story') || filename.includes('highlight') || filename.includes('saver')) return 'story';
  if (filename.includes('hd') || filename.includes('8k') || filename.includes('4k') || filename.includes('compressor')) return 'hd';
  if (filename.includes('watermark') || filename.includes('shorts') || filename.includes('reels-downloader') || filename.includes('video-downloader')) return 'watermark';
  return 'default';
}

const files = fs.readdirSync(enSeoDir).filter(f => f.endsWith('.ts'));

let updated = 0;

for (const filename of files) {
  const platformKey = getPlatformKey(filename);
  const toolKey = getToolKey(filename);
  
  const platformName = platformNames[platformKey] || platformNames.general;
  const toolName = toolNames[toolKey] || toolNames[filename.replace('.ts', '')] || "Baixador de Mídia";
  
  const intentKey = getIntentKey(filename);
  const template = templates[intentKey];
  
  // Format elements substituting {platform} and {tool}
  const formattedArticle = template.articleSections.map(section => {
    return {
      ...section,
      content: section.content
        .replace(/{platform}/g, platformName)
        .replace(/{tool}/g, toolName)
    };
  });
  
  const formattedFaqs = template.faqs.map(faq => {
    return {
      q: faq.q.replace(/{platform}/g, platformName).replace(/{tool}/g, toolName),
      a: faq.a.replace(/{platform}/g, platformName).replace(/{tool}/g, toolName)
    };
  });
  
  const metaTitle = `${toolName} ${platformName} Sem Marca d'Água - SavClip`;
  const metaDesc = template.desc.replace(/{platform}/g, platformName).replace(/{tool}/g, toolName);
  
  const headerTitle = toolName;
  const headerSubtitle = template.subtitle.replace(/{platform}/g, platformName).replace(/{tool}/g, toolName);
  
  const fileContent = `export const articleSections = ${JSON.stringify(formattedArticle, null, 2)};

export const faqs = ${JSON.stringify(formattedFaqs, null, 2)};

export const meta = {
  title: "${metaTitle}",
  description: "${metaDesc}"
};

export const header = {
  title: "${headerTitle}",
  title1: "Download",
  title2: "${platformName} ${toolName.split(' ').slice(2).join(' ') || 'Mídia'}",
  title3: "Online Grátis",
  subtitle: "${headerSubtitle}"
};
`;

  const targetPath = path.join(ptSeoDir, filename);
  fs.writeFileSync(targetPath, fileContent, 'utf8');
  updated++;
}

console.log(`Successfully generated ${updated} Portuguese SEO files from templates!`);
