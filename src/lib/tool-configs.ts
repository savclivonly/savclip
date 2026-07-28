export interface ToolConfig {
  mockup: string | null;
  mockupType: string | null;
  platform: string | null;
  ratingValue: string;
  reviewCount: string;
  relatedTools: { label: string; href: string }[];
  ctaColor: string;
  ctaTitleKey: string;
  ctaDescKey: string;
  ctaButtonLabel: string;
}

export const TOOL_CONFIGS: Record<string, ToolConfig> = {
  "anonymous-tiktok-viewer": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "anonymous",
    "platform": "TikTok Video",
    "ratingValue": "4.9",
    "reviewCount": "5200",
    "relatedTools": [
      {
        "label": "Story Saver",
        "href": "/tiktok-story-saver"
      },
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "DP Downloader",
        "href": "/tiktok-dp-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-album-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "photo",
    "platform": "Facebook Album",
    "ratingValue": "4.9",
    "reviewCount": "3200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-audio-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "audio",
    "platform": "Facebook Audio",
    "ratingValue": "4.8",
    "reviewCount": "6200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600",
    "ctaTitleKey": "Extract High-Quality FB Audio",
    "ctaDescKey": "Join millions of users and start converting Facebook videos to high-quality MP3 for free.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-dp-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "profile",
    "platform": "Facebook DP",
    "ratingValue": "4.9",
    "reviewCount": "1800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-group-video-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "group",
    "platform": "Facebook Group",
    "ratingValue": "4.8",
    "reviewCount": "2900",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Private Downloader",
        "href": "/facebook-private-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-live-video-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "live",
    "platform": "Facebook Live",
    "ratingValue": "4.8",
    "reviewCount": "2100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-page-audit-tool": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "profile",
    "platform": "Facebook Page",
    "ratingValue": "4.8",
    "reviewCount": "1100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "DP Downloader",
        "href": "/facebook-dp-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-photo-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "photo",
    "platform": "Facebook Photo",
    "ratingValue": "4.9",
    "reviewCount": "5800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Private Downloader",
        "href": "/facebook-private-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600",
    "ctaTitleKey": "Save High-Res FB Photos",
    "ctaDescKey": "Join millions of users and start downloading high-quality Facebook Photos and Albums in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-private-video-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "private",
    "platform": "Facebook Private Video",
    "ratingValue": "4.9",
    "reviewCount": "4100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-slate-700 via-slate-800 to-slate-900",
    "ctaTitleKey": "Securely Save Private FB Videos",
    "ctaDescKey": "Join millions of users and start downloading private Facebook videos in HD quality securely.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-profile-viewer": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "profile",
    "platform": "Facebook Profile",
    "ratingValue": "4.8",
    "reviewCount": "2100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "DP Downloader",
        "href": "/facebook-dp-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-reels-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "reels",
    "platform": "Facebook Reels",
    "ratingValue": "4.9",
    "reviewCount": "8400",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      },
      {
        "label": "Private Downloader",
        "href": "/facebook-private-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-blue-800",
    "ctaTitleKey": "Download Viral FB Reels Instantly",
    "ctaDescKey": "Join millions of users and start downloading high-quality Facebook Reels without watermarks for free.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-story-saver": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "story",
    "platform": "Facebook Story",
    "ratingValue": "4.9",
    "reviewCount": "7300",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      },
      {
        "label": "Private Downloader",
        "href": "/facebook-private-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600",
    "ctaTitleKey": "View & Save FB Stories Anonymously",
    "ctaDescKey": "Join millions of users and start downloading high-quality Facebook Stories in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-video-compressor": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "video",
    "platform": "Facebook Compressor",
    "ratingValue": "4.8",
    "reviewCount": "1900",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/facebook-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/facebook-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "facebook-video-downloader": {
    "mockup": "FacebookPreviewMockup",
    "mockupType": "video",
    "platform": "Facebook Video",
    "ratingValue": "4.9",
    "reviewCount": "15800",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/facebook-reels-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/facebook-story-saver"
      },
      {
        "label": "Photo Downloader",
        "href": "/facebook-photo-downloader"
      },
      {
        "label": "Private Downloader",
        "href": "/facebook-private-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-700 via-blue-800 to-blue-900",
    "ctaTitleKey": "Ready to Save Your Favorite FB Videos?",
    "ctaDescKey": "Join millions of users and start downloading high-quality Facebook videos and reels without watermarks today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-audio-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "audio",
    "platform": "Instagram Audio",
    "ratingValue": "4.9",
    "reviewCount": "6400",
    "relatedTools": [],
    "ctaColor": "bg-linear-to-r from-amber-500 via-orange-600 to-red-600",
    "ctaTitleKey": "Ready to Save Your Favorite Sounds?",
    "ctaDescKey": "Join millions of users and start downloading high-quality Instagram audio and music in MP3 today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-carousel-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "carousel",
    "platform": "Instagram Carousel",
    "ratingValue": "4.9",
    "reviewCount": "4200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-dp-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "profile",
    "platform": "Instagram Profile",
    "ratingValue": "4.9",
    "reviewCount": "4800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-highlights-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "story",
    "platform": "Instagram Highlights",
    "ratingValue": "4.9",
    "reviewCount": "5200",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-amber-600 via-yellow-600 to-orange-600",
    "ctaTitleKey": "Archive Your Best Moments",
    "ctaDescKey": "Join millions of users and start downloading high-quality Instagram Highlights in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-photo-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "photo",
    "platform": "Instagram Photo",
    "ratingValue": "4.9",
    "reviewCount": "7800",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Profile Viewer",
        "href": "/instagram-profile-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-sky-600 via-blue-600 to-indigo-600",
    "ctaTitleKey": "Ready to Save High-Quality Photos?",
    "ctaDescKey": "Join millions of users and start downloading high-resolution Instagram photos and galleries today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-private-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "private",
    "platform": "Instagram Private",
    "ratingValue": "4.9",
    "reviewCount": "4800",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      },
      {
        "label": "Highlights Downloader",
        "href": "/instagram-highlights-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-slate-700 via-slate-800 to-slate-900",
    "ctaTitleKey": "Securely Save Private Content",
    "ctaDescKey": "Join millions of users and start downloading private Instagram videos and photos in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-profile-viewer": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "profile",
    "platform": "Instagram Profile",
    "ratingValue": "4.8",
    "reviewCount": "3500",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-reels-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "reels",
    "platform": "Instagram Reels",
    "ratingValue": "4.9",
    "reviewCount": "8500",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      },
      {
        "label": "Profile Viewer",
        "href": "/instagram-profile-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-pink-600 via-rose-600 to-purple-600",
    "ctaTitleKey": "Ready to Save Your Favorite Reels?",
    "ctaDescKey": "Join millions of users and start downloading high-quality Instagram Reels without watermarks today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-story-viewer": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "story",
    "platform": "Instagram Story",
    "ratingValue": "4.9",
    "reviewCount": "5800",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-video-compressor": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "private",
    "platform": "Instagram Video",
    "ratingValue": "4.9",
    "reviewCount": "3800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/instagram-video-downloader"
      },
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "instagram-video-downloader": {
    "mockup": "InstagramPreviewMockup",
    "mockupType": "video",
    "platform": "Instagram Video",
    "ratingValue": "4.9",
    "reviewCount": "12400",
    "relatedTools": [
      {
        "label": "Reels Downloader",
        "href": "/instagram-reels-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/instagram-photo-downloader"
      },
      {
        "label": "Profile Viewer",
        "href": "/instagram-profile-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Videos?",
    "ctaDescKey": "Join millions of users and start downloading high-quality Instagram Videos without watermarks today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-audio-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "audio",
    "platform": "Snapchat Audio",
    "ratingValue": "4.9",
    "reviewCount": "6500",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Spotlight Downloader",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/snapchat-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-dp-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "dp",
    "platform": "Snapchat Photo",
    "ratingValue": "4.9",
    "reviewCount": "4200",
    "relatedTools": [
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Spotlight Downloader",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-lens-saver": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "lens",
    "platform": "Snapchat Video",
    "ratingValue": "4.7",
    "reviewCount": "1800",
    "relatedTools": [
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Spotlight Saver",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Map Downloader",
        "href": "/snapchat-map-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-map-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "map",
    "platform": "Snapchat Video",
    "ratingValue": "4.8",
    "reviewCount": "2900",
    "relatedTools": [
      {
        "label": "Spotlight Saver",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "DP Downloader",
        "href": "/snapchat-dp-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-memories-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "memories",
    "platform": "Snapchat Video",
    "ratingValue": "4.8",
    "reviewCount": "1700",
    "relatedTools": [
      {
        "label": "Private Downloader",
        "href": "/snapchat-private-story-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Video Compressor",
        "href": "/snapchat-video-compressor"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-photo-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "photo",
    "platform": "Snapchat Photo",
    "ratingValue": "4.7",
    "reviewCount": "7800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Spotlight Downloader",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/snapchat-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-private-story-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "private",
    "platform": "Snapchat Video",
    "ratingValue": "4.8",
    "reviewCount": "3100",
    "relatedTools": [
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Photo Saver",
        "href": "/snapchat-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-profile-viewer": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "profile",
    "platform": "Snapchat Video",
    "ratingValue": "4.9",
    "reviewCount": "6300",
    "relatedTools": [
      {
        "label": "DP Downloader",
        "href": "/snapchat-dp-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-spotlight-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "spotlight",
    "platform": "Snapchat Spotlight",
    "ratingValue": "4.9",
    "reviewCount": "9200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/snapchat-photo-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/snapchat-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-stories-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "story",
    "platform": "Snapchat Story",
    "ratingValue": "4.8",
    "reviewCount": "10500",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Spotlight Downloader",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/snapchat-photo-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/snapchat-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-video-compressor": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "compressor",
    "platform": "Snapchat Video",
    "ratingValue": "4.8",
    "reviewCount": "2100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/snapchat-video-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/snapchat-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "snapchat-video-downloader": {
    "mockup": "SnapchatPreviewMockup",
    "mockupType": "video",
    "platform": "Snapchat Video",
    "ratingValue": "4.8",
    "reviewCount": "8500",
    "relatedTools": [
      {
        "label": "Spotlight Downloader",
        "href": "/snapchat-spotlight-downloader"
      },
      {
        "label": "Story Downloader",
        "href": "/snapchat-stories-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/snapchat-photo-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/snapchat-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-600",
    "ctaTitleKey": "Ready to Save Your Favorite Snaps?",
    "ctaDescKey": "Join millions of users and start downloading high-quality Snapchat Videos, Spotlight clips, and Stories today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-audio-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "audio",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "5200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "File Downloader",
        "href": "/telegram-file-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-bio-generator": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "bio",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "2900",
    "relatedTools": [
      {
        "label": "Analytics Viewer",
        "href": "/telegram-channel-link-generator"
      },
      {
        "label": "Channel Finder",
        "href": "/telegram-trending-channel-finder"
      },
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-channel-link-generator": {
    "mockup": null,
    "mockupType": null,
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "10000",
    "relatedTools": [],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-dp-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "dp",
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "5800",
    "relatedTools": [
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      },
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-file-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "file",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "4800",
    "relatedTools": [
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/telegram-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-gif-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "gif",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "3900",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-photo-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "photo",
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "7500",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      },
      {
        "label": "DP Downloader",
        "href": "/telegram-dp-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-private-video-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "private",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "4100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "File Downloader",
        "href": "/telegram-file-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-restricted-content-downloader": {
    "mockup": null,
    "mockupType": null,
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "10000",
    "relatedTools": [],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-story-saver": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "story",
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "6200",
    "relatedTools": [
      {
        "label": "DP Downloader",
        "href": "/telegram-dp-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-trending-channel-finder": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "channels",
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "6400",
    "relatedTools": [
      {
        "label": "Analytics Viewer",
        "href": "/telegram-channel-link-generator"
      },
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      },
      {
        "label": "Bio Generator",
        "href": "/telegram-bio-generator"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-video-compressor": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "compressor",
    "platform": "Telegram",
    "ratingValue": "4.8",
    "reviewCount": "3100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/telegram-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "telegram-video-downloader": {
    "mockup": "TelegramPreviewMockup",
    "mockupType": "video",
    "platform": "Telegram",
    "ratingValue": "4.9",
    "reviewCount": "11200",
    "relatedTools": [
      {
        "label": "Photo Downloader",
        "href": "/telegram-photo-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/telegram-video-downloader"
      },
      {
        "label": "File Downloader",
        "href": "/telegram-file-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/telegram-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-caption-generator": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "caption",
    "platform": "TikTok Copy",
    "ratingValue": "4.8",
    "reviewCount": "3500",
    "relatedTools": [
      {
        "label": "Hashtag Generator",
        "href": "/tiktok-trending-hashtag-generator"
      },
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/tiktok-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-dp-downloader": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "dp",
    "platform": "TikTok Photo",
    "ratingValue": "4.8",
    "reviewCount": "4100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/tiktok-story-saver"
      },
      {
        "label": "Anonymous Viewer",
        "href": "/anonymous-tiktok-viewer"
      },
      {
        "label": "Photo Downloader",
        "href": "/tiktok-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-mp3-downloader": {
    "mockup": null,
    "mockupType": null,
    "platform": "TikTok Audio",
    "ratingValue": "4.8",
    "reviewCount": "12500",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/tiktok-shorts-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/tiktok-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600",
    "ctaTitleKey": "Extract High-Quality TT MP3",
    "ctaDescKey": "Join millions of users and start converting TikTok videos to high-quality MP3 for free.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-photo-downloader": {
    "mockup": null,
    "mockupType": null,
    "platform": "TikTok Photo",
    "ratingValue": "4.9",
    "reviewCount": "4600",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/tiktok-shorts-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-sky-500 via-blue-500 to-indigo-600",
    "ctaTitleKey": "Save High-Res TT Photos",
    "ctaDescKey": "Join millions of users and start downloading high-quality TikTok Photos and Slideshows in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-private-video-downloader": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "private",
    "platform": "TikTok Video",
    "ratingValue": "4.8",
    "reviewCount": "2900",
    "relatedTools": [
      {
        "label": "Anonymous Viewer",
        "href": "/anonymous-tiktok-viewer"
      },
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "Story Saver",
        "href": "/tiktok-story-saver"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-shorts-downloader": {
    "mockup": null,
    "mockupType": null,
    "platform": "TikTok Shorts",
    "ratingValue": "4.9",
    "reviewCount": "9200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/tiktok-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-teal-500 via-emerald-500 to-green-600",
    "ctaTitleKey": "Save Viral TT Shorts & Reels",
    "ctaDescKey": "Join millions of users and start downloading high-quality TikTok Shorts and Reels without watermarks for free.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-song-finder": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "song",
    "platform": "TikTok Audio",
    "ratingValue": "4.9",
    "reviewCount": "5100",
    "relatedTools": [
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      },
      {
        "label": "Trending Hashtags",
        "href": "/tiktok-trending-hashtag-generator"
      },
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-story-saver": {
    "mockup": null,
    "mockupType": null,
    "platform": "TikTok Story",
    "ratingValue": "4.9",
    "reviewCount": "6800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/tiktok-shorts-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-pink-500 via-indigo-500 to-purple-600",
    "ctaTitleKey": "View & Save TT Stories Anonymously",
    "ctaDescKey": "Join millions of users and start downloading high-quality TikTok Stories in HD today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-trending-hashtag-generator": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "hashtag",
    "platform": "TikTok Tags",
    "ratingValue": "4.9",
    "reviewCount": "4800",
    "relatedTools": [
      {
        "label": "Caption Generator",
        "href": "/tiktok-caption-generator"
      },
      {
        "label": "Song Finder",
        "href": "/tiktok-song-finder"
      },
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-video-compressor": {
    "mockup": "TiktokPreviewMockup",
    "mockupType": "compressor",
    "platform": "TikTok Video",
    "ratingValue": "4.8",
    "reviewCount": "3400",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/tiktok-video-downloader"
      },
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "tiktok-video-downloader": {
    "mockup": null,
    "mockupType": null,
    "platform": "TikTok Video",
    "ratingValue": "4.9",
    "reviewCount": "18400",
    "relatedTools": [
      {
        "label": "MP3 Downloader",
        "href": "/tiktok-mp3-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/tiktok-shorts-downloader"
      },
      {
        "label": "Photo Downloader",
        "href": "/tiktok-photo-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-neutral-800 via-neutral-900 to-black",
    "ctaTitleKey": "Download High-Quality TT Videos",
    "ctaDescKey": "Join millions of users and start downloading TikTok videos in HD without watermarks for free.",
    "ctaButtonLabel": "Download Now"
  },
  "x-analytics-viewer": {
    "mockup": "XPreviewMockup",
    "mockupType": "analytics",
    "platform": "X Media",
    "ratingValue": "4.9",
    "reviewCount": "5800",
    "relatedTools": [
      {
        "label": "Trending Hashtags",
        "href": "/x-trending-hashtag-finder"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      },
      {
        "label": "Bio Generator",
        "href": "/x-bio-generator"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-audio-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "audio",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "5300",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Space Downloader",
        "href": "/x-space-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-banner-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "banner",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "5100",
    "relatedTools": [
      {
        "label": "DP Downloader",
        "href": "/x-profile-picture-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      },
      {
        "label": "Trending Hashtags",
        "href": "/x-trending-hashtag-finder"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-bio-generator": {
    "mockup": "XPreviewMockup",
    "mockupType": "bio",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "3400",
    "relatedTools": [
      {
        "label": "Analytics Viewer",
        "href": "/x-analytics-viewer"
      },
      {
        "label": "Trending Hashtags",
        "href": "/x-trending-hashtag-finder"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-gif-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "gif",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "9100",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      },
      {
        "label": "DP Downloader",
        "href": "/x-profile-picture-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-media-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "media",
    "platform": "X Media",
    "ratingValue": "4.9",
    "reviewCount": "8800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "GIF Downloader",
        "href": "/x-gif-downloader"
      },
      {
        "label": "DP Downloader",
        "href": "/x-profile-picture-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/x-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-private-video-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "private",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "4400",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "GIF Downloader",
        "href": "/x-gif-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      },
      {
        "label": "Analytics Viewer",
        "href": "/x-analytics-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-profile-picture-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "dp",
    "platform": "X Media",
    "ratingValue": "4.9",
    "reviewCount": "6500",
    "relatedTools": [
      {
        "label": "Banner Downloader",
        "href": "/x-banner-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      },
      {
        "label": "Analytics Viewer",
        "href": "/x-analytics-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-space-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "space",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "3900",
    "relatedTools": [
      {
        "label": "Audio Downloader",
        "href": "/x-audio-downloader"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      },
      {
        "label": "Analytics Viewer",
        "href": "/x-analytics-viewer"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-thread-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "thread",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "4200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      },
      {
        "label": "Space Downloader",
        "href": "/x-space-downloader"
      },
      {
        "label": "Bio Generator",
        "href": "/x-bio-generator"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-trending-hashtag-finder": {
    "mockup": "XPreviewMockup",
    "mockupType": "hashtag",
    "platform": "X Media",
    "ratingValue": "4.9",
    "reviewCount": "7200",
    "relatedTools": [
      {
        "label": "Analytics Viewer",
        "href": "/x-analytics-viewer"
      },
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      },
      {
        "label": "Bio Generator",
        "href": "/x-bio-generator"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-video-compressor": {
    "mockup": "XPreviewMockup",
    "mockupType": "compressor",
    "platform": "X Media",
    "ratingValue": "4.8",
    "reviewCount": "3200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/x-video-downloader"
      },
      {
        "label": "Media Downloader",
        "href": "/x-media-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/x-audio-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "x-video-downloader": {
    "mockup": "XPreviewMockup",
    "mockupType": "video",
    "platform": "X Video",
    "ratingValue": "4.9",
    "reviewCount": "12400",
    "relatedTools": [
      {
        "label": "GIF Downloader",
        "href": "/x-gif-downloader"
      },
      {
        "label": "Thread Saver",
        "href": "/x-thread-downloader"
      },
      {
        "label": "Audio Downloader",
        "href": "/x-audio-downloader"
      },
      {
        "label": "Space Downloader",
        "href": "/x-space-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-channel-audit-tool": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "audit",
    "platform": "YouTube Audit",
    "ratingValue": "4.8",
    "reviewCount": "2100",
    "relatedTools": [
      {
        "label": "Tag Generator",
        "href": "/youtube-tag-generator"
      },
      {
        "label": "Title Generator",
        "href": "/youtube-title-generator"
      },
      {
        "label": "Description Gen",
        "href": "/youtube-description-generator"
      },
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-comment-picker": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "comment",
    "platform": "YouTube Audit",
    "ratingValue": "4.9",
    "reviewCount": "5100",
    "relatedTools": [
      {
        "label": "Channel Audit",
        "href": "/youtube-channel-audit-tool"
      },
      {
        "label": "Tag Generator",
        "href": "/youtube-tag-generator"
      },
      {
        "label": "Title Generator",
        "href": "/youtube-title-generator"
      },
      {
        "label": "Desc Generator",
        "href": "/youtube-description-generator"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-description-generator": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "description",
    "platform": "YouTube Description",
    "ratingValue": "4.9",
    "reviewCount": "3800",
    "relatedTools": [
      {
        "label": "Title Generator",
        "href": "/youtube-title-generator"
      },
      {
        "label": "Tag Generator",
        "href": "/youtube-tag-generator"
      },
      {
        "label": "Channel Audit",
        "href": "/youtube-channel-audit-tool"
      },
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-playlist-downloader": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "playlist",
    "platform": "YouTube Playlist",
    "ratingValue": "4.8",
    "reviewCount": "9400",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/youtube-shorts-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-region-restriction-checker": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "region",
    "platform": "YouTube Audit",
    "ratingValue": "4.8",
    "reviewCount": "1850",
    "relatedTools": [
      {
        "label": "Channel Audit",
        "href": "/youtube-channel-audit-tool"
      },
      {
        "label": "Tag Generator",
        "href": "/youtube-tag-generator"
      },
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-shorts-downloader": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "shorts",
    "platform": "YouTube Shorts",
    "ratingValue": "4.9",
    "reviewCount": "15800",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      },
      {
        "label": "Playlist Downloader",
        "href": "/youtube-playlist-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-red-500 via-orange-500 to-amber-500",
    "ctaTitleKey": "Save Viral YT Shorts in HD",
    "ctaDescKey": "Join millions of users and start downloading high-quality YouTube Shorts without watermarks for free.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-subtitle-downloader": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "subtitle",
    "platform": "YouTube Subtitle",
    "ratingValue": "4.8",
    "reviewCount": "4300",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      },
      {
        "label": "Playlist Downloader",
        "href": "/youtube-playlist-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-tag-generator": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "tag",
    "platform": "YouTube Tag",
    "ratingValue": "4.9",
    "reviewCount": "5400",
    "relatedTools": [
      {
        "label": "Title Generator",
        "href": "/youtube-title-generator"
      },
      {
        "label": "Description Gen",
        "href": "/youtube-description-generator"
      },
      {
        "label": "Channel Audit",
        "href": "/youtube-channel-audit-tool"
      },
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-thumbnail-downloader": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "thumbnail",
    "platform": "YouTube Thumbnail",
    "ratingValue": "4.9",
    "reviewCount": "8600",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/youtube-shorts-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      },
      {
        "label": "Playlist Downloader",
        "href": "/youtube-playlist-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-red-500 via-orange-500 to-red-600",
    "ctaTitleKey": "Save High-Res YT Thumbnails",
    "ctaDescKey": "Join millions of users and start downloading high-quality YouTube Thumbnails and covers in HD for free.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-title-generator": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "title",
    "platform": "YouTube Title",
    "ratingValue": "4.9",
    "reviewCount": "4100",
    "relatedTools": [
      {
        "label": "Description Gen",
        "href": "/youtube-description-generator"
      },
      {
        "label": "Tag Generator",
        "href": "/youtube-tag-generator"
      },
      {
        "label": "Channel Audit",
        "href": "/youtube-channel-audit-tool"
      },
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-to-mp3-converter": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "audio",
    "platform": "YouTube MP3",
    "ratingValue": "4.8",
    "reviewCount": "31200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "Shorts Downloader",
        "href": "/youtube-shorts-downloader"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      },
      {
        "label": "Playlist Downloader",
        "href": "/youtube-playlist-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-red-600 via-rose-600 to-pink-600",
    "ctaTitleKey": "Convert YT Videos to 320kbps MP3",
    "ctaDescKey": "Join millions of users and start converting YouTube videos to high-quality MP3 for free.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-video-cutter": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "cutter",
    "platform": "YouTube Cutter",
    "ratingValue": "4.8",
    "reviewCount": "6200",
    "relatedTools": [
      {
        "label": "Video Downloader",
        "href": "/youtube-video-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      },
      {
        "label": "Shorts Downloader",
        "href": "/youtube-shorts-downloader"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600",
    "ctaTitleKey": "Ready to Save Your Favorite Content?",
    "ctaDescKey": "Join millions of users and start downloading high-quality social media content for free today.",
    "ctaButtonLabel": "Download Now"
  },
  "youtube-video-downloader": {
    "mockup": "YoutubePreviewMockup",
    "mockupType": "video",
    "platform": "YouTube Video",
    "ratingValue": "4.9",
    "reviewCount": "25400",
    "relatedTools": [
      {
        "label": "Shorts Downloader",
        "href": "/youtube-shorts-downloader"
      },
      {
        "label": "MP3 Converter",
        "href": "/youtube-to-mp3-converter"
      },
      {
        "label": "Thumbnail Saver",
        "href": "/youtube-thumbnail-downloader"
      },
      {
        "label": "Playlist Downloader",
        "href": "/youtube-playlist-downloader"
      }
    ],
    "ctaColor": "bg-linear-to-r from-red-600 via-red-700 to-red-800",
    "ctaTitleKey": "Download Your Favorite YT Videos",
    "ctaDescKey": "Join millions of users and start downloading high-quality YouTube videos in HD and 4K for free.",
    "ctaButtonLabel": "Download Now"
  }
};
