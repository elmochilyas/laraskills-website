"use client";

import { useEffect, useState, useCallback } from "react";

type AnimatedHeaderLogoProps = {
  red?: string;
  white?: string;
};

export function AnimatedHeaderLogo({
  red = "#FF0814",
  white = "#FFFFFF",
}: AnimatedHeaderLogoProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", listener);
    };
  }, [handleScroll]);

  const transitionDuration = prefersReducedMotion ? "0ms" : "600ms";
  const transitionEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <div 
      className="flex items-center"
      aria-label="LaraSkills"
    >
      {/* Icon Wrapper */}
      <div 
        className="relative shrink-0"
        style={{ 
          transition: `transform ${transitionDuration} ${transitionEasing}`,
          transform: isScrolled && !prefersReducedMotion ? "rotate(360deg)" : "rotate(0deg)",
        }}
      >
        <svg
          viewBox="0 0 389 389"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-auto md:h-11"
        >
          <g transform="translate(12 0)">
            <path
              fill={red}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M281 141L279 141L279 146L290 152L279 158L279 164L297 154L297 150Z M250 141L232 150L232 155L249 164L250 158L239 152L250 146Z M272 135L268 135L266 138L256 169L261 169Z M166 0L63 57L62 169L24 169L23 163L20 161L2 161L0 163L1 183L21 183L23 181L24 175L61 175L63 177L63 196L61 205L24 205L22 197L0 198L1 218L22 218L24 210L61 210L63 212L62 239L24 240L23 234L21 232L1 232L0 252L22 253L24 245L61 245L63 247L62 292L101 314L222 314L276 282L237 261L115 260L115 85L166 57Z M6 238L16 237L17 247L6 248Z M6 203L16 202L17 212L7 213Z M6 167L16 167L17 177L7 178Z"
            />
            <path
              fill={white}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M259 47L253 49L143 111L143 189L145 191L312 278L312 281L307 285L229 331L131 331L227 388L240 382L365 309L365 245L197 160L197 137L200 134L254 104L258 103L328 143L365 162L365 110Z"
            />
          </g>
        </svg>
      </div>

      {/* Text Wrapper */}
      <div 
        className="overflow-hidden"
        style={{ 
          transition: `all ${transitionDuration} ${transitionEasing}`,
          width: isScrolled ? "0px" : "130px", 
          opacity: isScrolled ? 0 : 1,
          transform: isScrolled ? "translateX(-12px)" : "translateX(0)",
          marginLeft: isScrolled ? "0px" : "8px"
        }}
      >
        <svg
          viewBox="400 0 1076 389" 
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-auto md:h-11"
        >
          <path
            fill={red}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M830 175L830 195L905 196L911 202L910 215L849 215L840 217L830 223L823 235L822 252L826 265L834 273L844 277L936 277L936 201L931 186L925 180L914 175L904 174Z M847 243L851 237L857 235L910 235L911 255L853 256L848 252Z M807 174L758 175L750 178L741 186L736 199L736 277L761 277L762 201L769 196L807 196Z M604 175L605 196L679 196L683 199L685 203L684 215L623 215L614 217L604 223L598 232L596 252L599 263L605 271L617 277L710 277L710 201L708 192L701 182L693 177L678 174Z M621 243L625 237L630 235L684 235L685 255L627 256L622 252Z M457 134L456 249L459 259L464 267L470 272L483 277L578 277L578 253L492 253L484 248L482 243L482 134Z"
          />
          <path
            fill={white}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1391 180L1385 187L1381 199L1381 211L1386 225L1391 230L1401 235L1447 236L1452 242L1452 250L1446 256L1384 256L1383 277L1454 277L1466 271L1473 261L1475 252L1474 235L1469 225L1464 220L1455 216L1409 215L1405 212L1403 208L1403 203L1407 197L1412 195L1468 195L1468 175L1413 174L1402 175Z M1241 174L1240 277L1263 277L1263 175Z M1338 134L1337 277L1360 277L1360 134Z M1289 134L1289 277L1311 277L1311 134Z M1245 135L1240 142L1241 152L1248 157L1258 156L1263 150L1263 140L1261 137L1255 134Z M1124 134L1124 277L1146 277L1147 229L1194 277L1225 277L1173 225L1173 223L1222 174L1192 175L1147 220L1146 134Z M988 141L980 150L975 163L975 190L980 202L989 211L1005 217L1069 218L1076 225L1077 242L1075 247L1071 251L1066 253L975 253L975 277L1074 277L1090 270L1099 259L1103 245L1103 225L1100 213L1097 208L1089 200L1074 194L1009 193L1001 185L1001 167L1010 158L1099 158L1099 134L1008 134L998 136Z"
          />
        </svg>
      </div>
    </div>
  );
}
