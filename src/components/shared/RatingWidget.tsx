/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { toast } from "react-hot-toast";

interface RatingWidgetProps {
  toolKey: string;
  defaultRating: number;
  defaultReviewCount: number;
  locale?: string;
}

const translationDict: Record<string, Record<string, string>> = {
  pt: {
    "ratings": "avaliações",
    "Thank you for your rating!": "Obrigado pela sua avaliação!",
    "You have already rated this tool.": "Você já avaliou esta ferramenta.",
    "Rating:": "Avaliação:"
  },
  es: {
    "ratings": "calificaciones",
    "Thank you for your rating!": "¡Gracias por tu calificación!",
    "You have already rated this tool.": "Ya has calificado esta herramienta.",
    "Rating:": "Calificación:"
  },
  id: {
    "ratings": "penilaian",
    "Thank you for your rating!": "Terima kasih atas penilaian Anda!",
    "You have already rated this tool.": "Anda sudah menilai alat ini.",
    "Rating:": "Penilaian:"
  },
  ar: {
    "ratings": "تقييمات",
    "Thank you for your rating!": "شكراً لتقييمك!",
    "You have already rated this tool.": "لقد قمت بتقييم هذه الأداة بالفعل.",
    "Rating:": "التقييم:"
  }
};

export function RatingWidget({ toolKey, defaultRating, defaultReviewCount, locale = "en" }: RatingWidgetProps) {
  const [rating, setRating] = useState<number>(defaultRating);
  const [reviewCount, setReviewCount] = useState<number>(defaultReviewCount);
  const [userVote, setUserVote] = useState<number | null>(null);
  const [hoverVote, setHoverVote] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedVote = localStorage.getItem(`savclip_vote_${toolKey}`);
      if (savedVote) {
        const voteVal = parseInt(savedVote, 10);
        setUserVote(voteVal);
        setReviewCount(defaultReviewCount + 1);
        const newRating = (defaultRating * defaultReviewCount + voteVal) / (defaultReviewCount + 1);
        setRating(parseFloat(newRating.toFixed(1)));
      } else {
        setRating(defaultRating);
        setReviewCount(defaultReviewCount);
      }
    }
  }, [toolKey, defaultRating, defaultReviewCount]);

  const handleVote = (voteValue: number) => {
    if (userVote !== null) {
      const msg = translationDict[locale]?.[ "You have already rated this tool." ] || "You have already rated this tool.";
      toast.error(msg);
      return;
    }

    localStorage.setItem(`savclip_vote_${toolKey}`, String(voteValue));
    setUserVote(voteValue);

    const newCount = defaultReviewCount + 1;
    const newRating = (defaultRating * defaultReviewCount + voteValue) / newCount;
    
    setReviewCount(newCount);
    setRating(parseFloat(newRating.toFixed(1)));

    const successMsg = translationDict[locale]?.["Thank you for your rating!"] || "Thank you for your rating!";
    toast.success(successMsg);
  };

  const currentLang = locale || "en";

  return (
    <div className="flex flex-col items-center gap-1.5 mt-5 bg-white/10 dark:bg-black/20 backdrop-blur-md py-2.5 px-5 rounded-2xl border border-white/15 w-fit select-none shadow-md">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const isFilled = hoverVote ? starIndex <= hoverVote : starIndex <= Math.round(rating);
          return (
            <button
              key={starIndex}
              type="button"
              onClick={() => handleVote(starIndex)}
              onMouseEnter={() => userVote === null && setHoverVote(starIndex)}
              onMouseLeave={() => setHoverVote(null)}
              className={`p-0.5 transition-all duration-200 ${userVote === null ? "hover:scale-125 cursor-pointer" : "cursor-default"}`}
              title={`Rate ${starIndex} stars`}
            >
              <Star
                className={`w-5 h-5 transition-colors ${
                  isFilled
                    ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.5)]"
                    : "text-white/40 fill-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="text-white font-semibold text-xs sm:text-sm tracking-wider flex items-center gap-1 uppercase">
        <span>{rating}</span>
        <span className="opacity-70">/ 5</span>
        <span className="opacity-40 font-black px-1">•</span>
        <span className="opacity-80">
          {reviewCount.toLocaleString(currentLang === "ar" ? "ar-EG" : "en-US")}{" "}
          {translationDict[currentLang]?.[ "ratings" ] || "ratings"}
        </span>
      </div>
    </div>
  );
}
