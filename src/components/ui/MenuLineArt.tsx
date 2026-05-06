import styles from "./MenuLineArt.module.scss";

/* ─────────────────────────────────────────────────────────────────
   Shared SVG props
───────────────────────────────────────────────────────────────── */
const S = {
  fill: "none",
  stroke: "currentColor" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ─────────────────────────────────────────────────────────────────
   Branch paths (reused with SVG-level transforms for all 4 corners)
───────────────────────────────────────────────────────────────── */
function BranchPaths() {
  return (
    <>
      <path d="M20,8 C26,65 50,130 75,183 C90,213 108,228 128,243" />
      {/* leaf pair 1 */}
      <path d="M21,25 Q2,18 6,4 Q16,8 21,25 Z" />
      <line x1="21" y1="25" x2="6" y2="4" />
      <path d="M21,25 Q38,15 33,2 Q22,6 21,25 Z" />
      <line x1="21" y1="25" x2="33" y2="2" />
      {/* leaf pair 2 */}
      <path d="M22,50 Q3,42 7,28 Q18,32 22,50 Z" />
      <line x1="22" y1="50" x2="7" y2="28" />
      <path d="M22,50 Q40,40 35,27 Q23,31 22,50 Z" />
      <line x1="22" y1="50" x2="35" y2="27" />
      {/* leaf pair 3 */}
      <path d="M27,76 Q8,68 11,54 Q23,58 27,76 Z" />
      <line x1="27" y1="76" x2="11" y2="54" />
      <path d="M27,76 Q45,66 40,52 Q28,56 27,76 Z" />
      <line x1="27" y1="76" x2="40" y2="52" />
      {/* leaf pair 4 */}
      <path d="M34,102 Q15,94 18,80 Q30,84 34,102 Z" />
      <line x1="34" y1="102" x2="18" y2="80" />
      <path d="M34,102 Q52,92 47,78 Q35,82 34,102 Z" />
      <line x1="34" y1="102" x2="47" y2="78" />
      {/* leaf pair 5 */}
      <path d="M46,130 Q27,122 30,108 Q42,112 46,130 Z" />
      <line x1="46" y1="130" x2="30" y2="108" />
      <path d="M46,130 Q64,120 59,106 Q47,110 46,130 Z" />
      <line x1="46" y1="130" x2="59" y2="106" />
      {/* leaf pair 6 */}
      <path d="M61,158 Q42,150 45,136 Q57,140 61,158 Z" />
      <line x1="61" y1="158" x2="45" y2="136" />
      <path d="M61,158 Q80,148 74,134 Q62,138 61,158 Z" />
      <line x1="61" y1="158" x2="74" y2="134" />
      {/* leaf pair 7 */}
      <path d="M80,185 Q60,177 64,162 Q76,166 80,185 Z" />
      <line x1="80" y1="185" x2="64" y2="162" />
      <path d="M80,185 Q99,175 94,160 Q82,164 80,185 Z" />
      <line x1="80" y1="185" x2="94" y2="160" />
      {/* leaf pair 8 */}
      <path d="M103,213 Q83,205 86,191 Q99,195 103,213 Z" />
      <line x1="103" y1="213" x2="86" y2="191" />
      <path d="M103,213 Q121,203 116,189 Q104,193 103,213 Z" />
      <line x1="103" y1="213" x2="116" y2="189" />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Main export
───────────────────────────────────────────────────────────────── */
export default function MenuLineArt() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {/* ══ CORNER BRANCHES ═════════════════════════════════════ */}

      {/* Bottom-left branch (vertical flip) */}
      <div
        className={`${styles.piece} ${styles.branchBL} ${styles.animNudge}`}
        style={{ animationDelay: "3.2s" }}
      >
        <svg
          {...S}
          width="233"
          height="368"
          viewBox="0 0 155 245"
          strokeWidth="1.5"
        >
          <g transform="scale(1,-1) translate(0,-245)">
            <BranchPaths />
          </g>
        </svg>
      </div>

      {/* Bottom-right branch (both flipped) */}
      <div
        className={`${styles.piece} ${styles.branchBR} ${styles.animNudge}`}
        style={{ animationDelay: "0.6s" }}
      >
        <svg
          {...S}
          width="233"
          height="368"
          viewBox="0 0 155 245"
          strokeWidth="1.5"
        >
          <g transform="scale(-1,-1) translate(-155,-245)">
            <BranchPaths />
          </g>
        </svg>
      </div>

      {/* ══ TOP AREA ════════════════════════════════════════════ */}

      {/* Martini glass – upper left */}
      <div className={`${styles.piece} ${styles.martini} ${styles.animFloat}`}>
        <svg
          {...S}
          width="93"
          height="120"
          viewBox="0 0 62 80"
          strokeWidth="1.5"
        >
          <line x1="5" y1="8" x2="57" y2="8" />
          <path d="M5,8 L31,52 L57,8" />
          <line x1="31" y1="52" x2="31" y2="70" />
          <line x1="16" y1="70" x2="46" y2="70" />
          <line x1="14" y1="14" x2="28" y2="22" />
          <circle cx="30" cy="23" r="5" />
        </svg>
      </div>

      {/* Champagne flute – upper right */}
      <div
        className={`${styles.piece} ${styles.flute} ${styles.animFloat}`}
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          {...S}
          width="66"
          height="138"
          viewBox="0 0 44 92"
          strokeWidth="1.5"
        >
          <path d="M12,5 Q10,28 10,55 L11,66 L33,66 L34,55 Q34,28 32,5 Z" />
          <line x1="12" y1="5" x2="32" y2="5" />
          <line x1="22" y1="66" x2="22" y2="78" />
          <line x1="12" y1="78" x2="32" y2="78" />
          <circle cx="17" cy="40" r="2" />
          <circle cx="26" cy="25" r="1.5" />
          <circle cx="20" cy="52" r="1.5" />
        </svg>
      </div>

      {/* Citrus wheel – left edge */}
      <div
        className={`${styles.piece} ${styles.citrus1} ${styles.animSpin}`}
        style={{ animationDelay: "0s" }}
      >
        <svg
          {...S}
          width="87"
          height="87"
          viewBox="0 0 58 58"
          strokeWidth="1.5"
        >
          <circle cx="29" cy="29" r="26" />
          <circle cx="29" cy="29" r="8" />
          <line x1="29" y1="3" x2="29" y2="17" />
          <line x1="29" y1="41" x2="29" y2="55" />
          <line x1="3" y1="29" x2="17" y2="29" />
          <line x1="41" y1="29" x2="55" y2="29" />
          <line x1="10" y1="10" x2="20" y2="20" />
          <line x1="48" y1="48" x2="38" y2="38" />
          <line x1="48" y1="10" x2="38" y2="20" />
          <line x1="10" y1="48" x2="20" y2="38" />
        </svg>
      </div>

      {/* Simple flower – right edge */}
      <div
        className={`${styles.piece} ${styles.flower1} ${styles.animPulse}`}
        style={{ animationDelay: "0.8s" }}
      >
        <svg
          {...S}
          width="84"
          height="84"
          viewBox="0 0 56 56"
          strokeWidth="1.5"
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 28, 28)`}>
              <ellipse cx="28" cy="11" rx="5" ry="10" />
            </g>
          ))}
          <circle cx="28" cy="28" r="7" />
        </svg>
      </div>

      {/* Asterisk – left side */}
      <div
        className={`${styles.piece} ${styles.asterisk1} ${styles.animSpin}`}
        style={{ animationDelay: "2.5s" }}
      >
        <svg
          {...S}
          width="57"
          height="57"
          viewBox="0 0 38 38"
          strokeWidth="1.8"
        >
          <line x1="19" y1="3" x2="19" y2="35" />
          <line x1="3" y1="19" x2="35" y2="19" />
          <line x1="8" y1="8" x2="30" y2="30" />
          <line x1="30" y1="8" x2="8" y2="30" />
          <circle cx="19" cy="19" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* ══ UPPER-MID AREA ══════════════════════════════════════ */}

      {/* Mint sprig – left */}
      <div
        className={`${styles.piece} ${styles.mint1} ${styles.animSway}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="78"
          height="123"
          viewBox="0 0 52 82"
          strokeWidth="1.5"
        >
          <path d="M26,80 C23,58 21,46 19,32 C17,20 21,9 26,5" />
          <ellipse
            cx="12"
            cy="34"
            rx="10"
            ry="5.5"
            transform="rotate(-30 12 34)"
          />
          <line x1="19" y1="34" x2="12" y2="34" />
          <ellipse
            cx="31"
            cy="32"
            rx="10"
            ry="5.5"
            transform="rotate(30 31 32)"
          />
          <line x1="21" y1="33" x2="31" y2="32" />
          <ellipse
            cx="10"
            cy="22"
            rx="9"
            ry="5"
            transform="rotate(-35 10 22)"
          />
          <line x1="18" y1="24" x2="10" y2="22" />
          <ellipse cx="29" cy="20" rx="9" ry="5" transform="rotate(35 29 20)" />
          <line x1="20" y1="22" x2="29" y2="20" />
          <ellipse
            cx="14"
            cy="11"
            rx="8"
            ry="4.5"
            transform="rotate(-40 14 11)"
          />
          <line x1="21" y1="14" x2="14" y2="11" />
          <ellipse cx="31" cy="9" rx="8" ry="4.5" transform="rotate(40 31 9)" />
          <line x1="23" y1="12" x2="31" y2="9" />
        </svg>
      </div>

      {/* Single leaf – right side */}
      <div
        className={`${styles.piece} ${styles.leaf1} ${styles.animSway}`}
        style={{ animationDelay: "1s" }}
      >
        <svg
          {...S}
          width="75"
          height="108"
          viewBox="0 0 50 72"
          strokeWidth="1.5"
        >
          <path d="M25,68 C5,58 3,36 10,20 C17,4 33,4 40,20 C47,36 45,58 25,68 Z" />
          <line x1="25" y1="68" x2="25" y2="10" />
          <line x1="25" y1="46" x2="12" y2="38" />
          <line x1="25" y1="46" x2="38" y2="38" />
          <line x1="25" y1="32" x2="14" y2="25" />
          <line x1="25" y1="32" x2="36" y2="25" />
        </svg>
      </div>

      {/* Coupe glass – left */}
      <div
        className={`${styles.piece} ${styles.coupe} ${styles.animFloat}`}
        style={{ animationDelay: "3s" }}
      >
        <svg
          {...S}
          width="96"
          height="120"
          viewBox="0 0 64 80"
          strokeWidth="1.5"
        >
          <path d="M10,10 Q10,54 32,56 Q54,54 54,10" />
          <line x1="10" y1="10" x2="54" y2="10" />
          <line x1="32" y1="56" x2="32" y2="70" />
          <line x1="18" y1="70" x2="46" y2="70" />
          <path d="M20,30 Q32,45 44,30" strokeWidth="1" />
        </svg>
      </div>

      {/* Hibiscus – right */}
      <div
        className={`${styles.piece} ${styles.hibiscus} ${styles.animPulse}`}
        style={{ animationDelay: "2.2s" }}
      >
        <svg
          {...S}
          width="105"
          height="105"
          viewBox="0 0 70 70"
          strokeWidth="1.5"
        >
          {[0, 72, 144, 216, 288].map((deg) => (
            <path
              key={deg}
              transform={`rotate(${deg}, 35, 35)`}
              d="M35,35 Q25,20 35,5 Q45,20 35,35 Z"
            />
          ))}
          <circle cx="35" cy="35" r="6" />
          <line x1="35" y1="29" x2="35" y2="16" />
          <circle cx="35" cy="14" r="2.5" fill="currentColor" />
        </svg>
      </div>

      {/* Decorative swirl – left edge */}
      <div
        className={`${styles.piece} ${styles.swirl1} ${styles.animSpin}`}
        style={{ animationDelay: "4s" }}
      >
        <svg
          {...S}
          width="78"
          height="78"
          viewBox="0 0 52 52"
          strokeWidth="1.5"
        >
          <path d="M26,26 C26,26 32,20 37,26 C42,32 36,42 28,38 C20,34 17,23 22,16 C27,9 38,9 43,18 C48,27 43,41 33,45 C23,49 12,42 10,32 C8,22 15,9 26,5" />
        </svg>
      </div>

      {/* Lemon wedge – right */}
      <div
        className={`${styles.piece} ${styles.lemon} ${styles.animSway}`}
        style={{ animationDelay: "3.5s" }}
      >
        <svg
          {...S}
          width="84"
          height="78"
          viewBox="0 0 56 52"
          strokeWidth="1.5"
        >
          <path d="M28,50 L4,5 Q28,-3 52,5 Z" />
          <path d="M28,50 Q18,32 8,10" />
          <path d="M28,50 Q38,32 48,10" />
          <line x1="28" y1="50" x2="28" y2="5" />
          <line x1="16" y1="27" x2="40" y2="27" />
        </svg>
      </div>

      {/* ══ MID AREA (percentage-based) ═════════════════════════ */}

      {/* Cherry – left */}
      <div
        className={`${styles.piece} ${styles.cherry} ${styles.animFloat}`}
        style={{ animationDelay: "1s" }}
      >
        <svg
          {...S}
          width="66"
          height="93"
          viewBox="0 0 44 62"
          strokeWidth="1.5"
        >
          <path d="M13,36 C13,26 22,15 22,5" />
          <path d="M30,34 C30,24 22,15 22,5" />
          <path d="M22,5 C17,-6 5,-1 9,8 C7,-4 24,-4 22,5 Z" />
          <circle cx="12" cy="46" r="11" />
          <circle cx="30" cy="44" r="11" />
        </svg>
      </div>

      {/* Leaf 2 – right side */}
      <div
        className={`${styles.piece} ${styles.leaf2} ${styles.animSway}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="69"
          height="102"
          viewBox="0 0 46 68"
          strokeWidth="1.5"
        >
          <path d="M23,64 C4,54 2,33 9,18 C16,3 30,3 37,18 C44,33 42,54 23,64 Z" />
          <line x1="23" y1="64" x2="23" y2="9" />
          <line x1="23" y1="43" x2="11" y2="35" />
          <line x1="23" y1="43" x2="35" y2="35" />
          <line x1="23" y1="29" x2="13" y2="22" />
          <line x1="23" y1="29" x2="33" y2="22" />
          <line x1="23" y1="16" x2="17" y2="11" />
          <line x1="23" y1="16" x2="29" y2="11" />
        </svg>
      </div>

      {/* Citrus wheel 2 – left */}
      <div
        className={`${styles.piece} ${styles.citrus2} ${styles.animSpin}`}
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          {...S}
          width="78"
          height="78"
          viewBox="0 0 52 52"
          strokeWidth="1.4"
        >
          <circle cx="26" cy="26" r="23" />
          <circle cx="26" cy="26" r="7" />
          <line x1="26" y1="3" x2="26" y2="15" />
          <line x1="26" y1="37" x2="26" y2="49" />
          <line x1="3" y1="26" x2="15" y2="26" />
          <line x1="37" y1="26" x2="49" y2="26" />
          <line x1="9" y1="9" x2="18" y2="18" />
          <line x1="43" y1="43" x2="34" y2="34" />
          <line x1="43" y1="9" x2="34" y2="18" />
          <line x1="9" y1="43" x2="18" y2="34" />
        </svg>
      </div>

      {/* Botanical sprig – right */}
      <div
        className={`${styles.piece} ${styles.sprig} ${styles.animSway}`}
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          {...S}
          width="90"
          height="135"
          viewBox="0 0 60 90"
          strokeWidth="1.5"
        >
          <path d="M30,88 C28,68 25,55 22,40 C19,26 23,12 30,7" />
          <path d="M22,42 Q5,35 8,20 Q22,24 22,42 Z" />
          <line x1="22" y1="42" x2="8" y2="20" />
          <path d="M22,42 Q40,35 37,20 Q23,24 22,42 Z" />
          <line x1="22" y1="42" x2="37" y2="20" />
          <path d="M25,62 Q8,55 11,40 Q26,44 25,62 Z" />
          <line x1="25" y1="62" x2="11" y2="40" />
          <path d="M25,62 Q43,55 40,40 Q26,44 25,62 Z" />
          <line x1="25" y1="62" x2="40" y2="40" />
        </svg>
      </div>

      {/* Ice diamond – left */}
      <div
        className={`${styles.piece} ${styles.iceDiamond} ${styles.animSpin}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="69"
          height="69"
          viewBox="0 0 46 46"
          strokeWidth="1.5"
        >
          <path d="M23,2 L44,23 L23,44 L2,23 Z" />
          <line x1="23" y1="2" x2="23" y2="44" />
          <line x1="2" y1="23" x2="44" y2="23" />
          <line x1="9" y1="9" x2="37" y2="37" />
          <line x1="37" y1="9" x2="9" y2="37" />
        </svg>
      </div>

      {/* Flower 2 – right */}
      <div
        className={`${styles.piece} ${styles.flower2} ${styles.animPulse}`}
        style={{ animationDelay: "3s" }}
      >
        <svg
          {...S}
          width="78"
          height="78"
          viewBox="0 0 52 52"
          strokeWidth="1.5"
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 26, 26)`}>
              <ellipse cx="26" cy="10" rx="4" ry="9" />
            </g>
          ))}
          <circle cx="26" cy="26" r="6" />
        </svg>
      </div>

      {/* Asterisk 2 – left */}
      <div
        className={`${styles.piece} ${styles.asterisk2} ${styles.animSpin}`}
        style={{ animationDelay: "1s" }}
      >
        <svg
          {...S}
          width="51"
          height="51"
          viewBox="0 0 34 34"
          strokeWidth="1.8"
        >
          <line x1="17" y1="2" x2="17" y2="32" />
          <line x1="2" y1="17" x2="32" y2="17" />
          <line x1="6" y1="6" x2="28" y2="28" />
          <line x1="28" y1="6" x2="6" y2="28" />
        </svg>
      </div>

      {/* Swirl 2 – right */}
      <div
        className={`${styles.piece} ${styles.swirl2} ${styles.animSpin}`}
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          {...S}
          width="72"
          height="72"
          viewBox="0 0 48 48"
          strokeWidth="1.5"
        >
          <path d="M24,24 C30,18 36,22 33,29 C30,36 21,35 18,28 C15,21 19,13 26,11 C33,9 41,14 43,22 C45,30 40,40 32,43 C24,46 14,41 11,33 C8,25 12,14 20,10 C28,6 39,9 44,17" />
        </svg>
      </div>

      {/* ══ LOWER AREA ══════════════════════════════════════════ */}

      {/* Mint sprig 2 – left */}
      <div
        className={`${styles.piece} ${styles.mint2} ${styles.animFloat}`}
        style={{ animationDelay: "2.5s" }}
      >
        <svg
          {...S}
          width="75"
          height="114"
          viewBox="0 0 50 76"
          strokeWidth="1.5"
        >
          <path d="M25,74 C22,54 20,43 18,30 C16,18 20,8 25,4" />
          <ellipse
            cx="11"
            cy="31"
            rx="9.5"
            ry="5"
            transform="rotate(-30 11 31)"
          />
          <line x1="18" y1="31" x2="11" y2="31" />
          <ellipse
            cx="30"
            cy="29"
            rx="9.5"
            ry="5"
            transform="rotate(30 30 29)"
          />
          <line x1="20" y1="30" x2="30" y2="29" />
          <ellipse
            cx="9"
            cy="20"
            rx="8.5"
            ry="4.5"
            transform="rotate(-35 9 20)"
          />
          <line x1="17" y1="22" x2="9" y2="20" />
          <ellipse
            cx="28"
            cy="18"
            rx="8.5"
            ry="4.5"
            transform="rotate(35 28 18)"
          />
          <line x1="19" y1="20" x2="28" y2="18" />
          <ellipse
            cx="13"
            cy="10"
            rx="7.5"
            ry="4"
            transform="rotate(-40 13 10)"
          />
          <line x1="20" y1="13" x2="13" y2="10" />
        </svg>
      </div>

      {/* Olive on pick – left */}
      <div
        className={`${styles.piece} ${styles.olive} ${styles.animFloat}`}
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          {...S}
          width="66"
          height="93"
          viewBox="0 0 44 62"
          strokeWidth="1.5"
        >
          <line x1="22" y1="5" x2="22" y2="57" />
          <ellipse cx="22" cy="35" rx="11" ry="8" />
          <line x1="22" y1="27" x2="22" y2="43" />
          <circle cx="22" cy="35" r="3" fill="currentColor" />
          <ellipse cx="22" cy="20" rx="7" ry="5" />
        </svg>
      </div>

      {/* Leaf 3 – right side */}
      <div
        className={`${styles.piece} ${styles.leaf3} ${styles.animSway}`}
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          {...S}
          width="66"
          height="98"
          viewBox="0 0 44 65"
          strokeWidth="1.5"
        >
          <path d="M22,61 C4,51 2,31 9,17 C16,3 28,3 35,17 C42,31 40,51 22,61 Z" />
          <line x1="22" y1="61" x2="22" y2="8" />
          <line x1="22" y1="40" x2="10" y2="33" />
          <line x1="22" y1="40" x2="34" y2="33" />
          <line x1="22" y1="27" x2="12" y2="20" />
          <line x1="22" y1="27" x2="32" y2="20" />
        </svg>
      </div>

      {/* Bubble cluster – left */}
      <div
        className={`${styles.piece} ${styles.bubbles} ${styles.animFloat}`}
        style={{ animationDelay: "3s" }}
      >
        <svg
          {...S}
          width="78"
          height="93"
          viewBox="0 0 52 62"
          strokeWidth="1.4"
        >
          <circle cx="26" cy="50" r="10" />
          <circle cx="14" cy="36" r="7" />
          <circle cx="36" cy="34" r="8" />
          <circle cx="22" cy="20" r="5" />
          <circle cx="38" cy="18" r="4" />
          <circle cx="14" cy="12" r="3" />
          <circle cx="32" cy="8" r="2.5" />
        </svg>
      </div>

      {/* Wavy grass line – right */}
      <div
        className={`${styles.piece} ${styles.wavy} ${styles.animDrift}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="105"
          height="83"
          viewBox="0 0 70 55"
          strokeWidth="1.5"
        >
          <path d="M5,50 Q12,30 20,20 Q24,14 22,5" />
          <path d="M20,50 Q27,28 35,18 Q40,11 38,3" />
          <path d="M35,50 Q42,30 50,20 Q55,12 52,4" />
          <path d="M50,52 Q57,34 65,24 Q68,18 66,9" />
        </svg>
      </div>

      {/* Rocks glass – right mid */}
      <div
        className={`${styles.piece} ${styles.rocks} ${styles.animFloat}`}
        style={{ animationDelay: "4s" }}
      >
        <svg
          {...S}
          width="84"
          height="93"
          viewBox="0 0 56 62"
          strokeWidth="1.5"
        >
          <path d="M8,8 L6,58 L50,58 L48,8 Z" />
          <line x1="8" y1="8" x2="48" y2="8" />
          <line x1="6" y1="58" x2="50" y2="58" />
          <path d="M12,20 Q28,14 44,20" strokeWidth="1" />
          <line x1="14" y1="28" x2="42" y2="28" strokeWidth="1" />
          <path d="M14,40 L22,32 L30,40 L38,32 L44,40" strokeWidth="1" />
        </svg>
      </div>

      {/* Small sprout – bottom left area */}
      <div
        className={`${styles.piece} ${styles.sprout} ${styles.animSway}`}
        style={{ animationDelay: "0.8s" }}
      >
        <svg
          {...S}
          width="72"
          height="84"
          viewBox="0 0 48 56"
          strokeWidth="1.5"
        >
          <line x1="24" y1="54" x2="24" y2="22" />
          <path d="M24,32 C24,32 10,28 8,16 C8,16 22,10 24,32 Z" />
          <path d="M24,32 C24,32 38,28 40,16 C40,16 26,10 24,32 Z" />
          <path d="M24,22 C24,22 14,16 14,6 C14,6 26,2 24,22 Z" />
          <path d="M24,22 C24,22 34,16 34,6 C34,6 22,2 24,22 Z" />
        </svg>
      </div>

      {/* Stars cluster – upper right */}
      <div
        className={`${styles.piece} ${styles.stars} ${styles.animPulse}`}
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          {...S}
          width="90"
          height="83"
          viewBox="0 0 60 55"
          strokeWidth="1.5"
        >
          <path d="M15,20 L17,14 L19,20 L25,20 L20,24 L22,30 L17,26 L12,30 L14,24 L9,20 Z" />
          <path d="M44,10 L46,5 L48,10 L53,10 L49,13 L51,18 L46,15 L41,18 L43,13 L38,10 Z" />
          <path d="M46,36 L47,32 L48,36 L52,36 L49,38 L50,42 L47,40 L44,42 L45,38 L42,36 Z" />
        </svg>
      </div>

      {/* ══ CENTER / MID-PAGE COCKTAIL SCATTER ══════════════════ */}

      {/* Cocktail shaker #1 */}
      <div className={`${styles.piece} ${styles.shaker} ${styles.animFloat}`}>
        <svg
          {...S}
          width="69"
          height="126"
          viewBox="0 0 46 84"
          strokeWidth="1.5"
        >
          <path d="M13,20 Q13,8 23,4 Q33,8 33,20" />
          <line x1="11" y1="20" x2="35" y2="20" />
          <path d="M11,20 L9,68 Q9,78 23,80 Q37,78 37,68 L35,20 Z" />
          <circle cx="17" cy="23" r="1.5" fill="currentColor" />
          <circle cx="23" cy="23" r="1.5" fill="currentColor" />
          <circle cx="29" cy="23" r="1.5" fill="currentColor" />
          <path d="M11,38 Q23,33 35,38" />
          <path d="M11,52 Q23,47 35,52" />
        </svg>
      </div>

      {/* Bar spoon #1 */}
      <div
        className={`${styles.piece} ${styles.barSpoon} ${styles.animSway}`}
        style={{ animationDelay: "1.2s" }}
      >
        <svg
          {...S}
          width="24"
          height="143"
          viewBox="0 0 16 95"
          strokeWidth="1.5"
        >
          <ellipse cx="8" cy="6" rx="6" ry="3.5" />
          <path d="M8,10 C6,28 10,46 7,65 C5,78 8,88 8,92" />
          <line x1="8" y1="28" x2="12" y2="24" />
          <line x1="8" y1="38" x2="4" y2="34" />
          <line x1="8" y1="48" x2="12" y2="44" />
          <line x1="8" y1="58" x2="4" y2="54" />
          <circle cx="8" cy="92" r="4" />
        </svg>
      </div>

      {/* Spirits bottle #1 */}
      <div
        className={`${styles.piece} ${styles.bottle} ${styles.animSway}`}
        style={{ animationDelay: "0.7s" }}
      >
        <svg
          {...S}
          width="51"
          height="138"
          viewBox="0 0 34 92"
          strokeWidth="1.5"
        >
          <rect x="13" y="2" width="4" height="4" rx="2" />
          <path d="M13,9 L11,20 L23,20 L21,9" />
          <path d="M11,20 Q7,32 7,42 L27,42 Q27,32 23,20" />
          <path d="M7,42 L7,82 L27,82 L27,42" />
          <line x1="5" y1="84" x2="29" y2="84" />
          <rect x="9" y="50" width="8" height="10" rx="2" />
          <line x1="12" y1="57" x2="22" y2="57" />
          <line x1="12" y1="63" x2="22" y2="63" />
        </svg>
      </div>

      {/* Star anise #1 */}
      <div
        className={`${styles.piece} ${styles.starAnise1} ${styles.animSpin}`}
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          {...S}
          width="78"
          height="78"
          viewBox="0 0 52 52"
          strokeWidth="1.5"
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 26, 26)`}>
              <line x1="26" y1="26" x2="26" y2="8" />
              <ellipse cx="26" cy="6" rx="2.5" ry="4" />
            </g>
          ))}
          <circle cx="26" cy="26" r="5" />
        </svg>
      </div>

      {/* Elderflower cluster #1 */}
      <div
        className={`${styles.piece} ${styles.elderflower} ${styles.animPulse}`}
        style={{ animationDelay: "1.8s" }}
      >
        <svg
          {...S}
          width="90"
          height="98"
          viewBox="0 0 60 65"
          strokeWidth="1.4"
        >
          <line x1="30" y1="63" x2="30" y2="46" />
          <line x1="30" y1="52" x2="16" y2="36" />
          <line x1="30" y1="52" x2="44" y2="36" />
          <line x1="30" y1="46" x2="30" y2="28" />
          <line x1="16" y1="36" x2="8" y2="20" />
          <line x1="16" y1="36" x2="20" y2="18" />
          <line x1="44" y1="36" x2="40" y2="18" />
          <line x1="44" y1="36" x2="52" y2="20" />
          <line x1="30" y1="28" x2="24" y2="13" />
          <line x1="30" y1="28" x2="36" y2="13" />
          {[
            { cx: 8, cy: 20 },
            { cx: 20, cy: 18 },
            { cx: 40, cy: 18 },
            { cx: 52, cy: 20 },
            { cx: 24, cy: 13 },
            { cx: 36, cy: 13 },
          ].flatMap(({ cx, cy }) =>
            [0, 72, 144, 216, 288].map((deg) => (
              <g
                key={`ef1-${cx}-${deg}`}
                transform={`rotate(${deg}, ${cx}, ${cy})`}
              >
                <ellipse cx={cx} cy={cy - 6} rx="1.5" ry="3.5" />
              </g>
            )),
          )}
          {[
            { cx: 8, cy: 20 },
            { cx: 20, cy: 18 },
            { cx: 40, cy: 18 },
            { cx: 52, cy: 20 },
            { cx: 24, cy: 13 },
            { cx: 36, cy: 13 },
          ].map(({ cx, cy }) => (
            <circle key={`ef1d-${cx}`} cx={cx} cy={cy} r="2" />
          ))}
        </svg>
      </div>

      {/* Strawberry #1 */}
      <div
        className={`${styles.piece} ${styles.strawberry} ${styles.animFloat}`}
        style={{ animationDelay: "2.5s" }}
      >
        <svg
          {...S}
          width="57"
          height="78"
          viewBox="0 0 38 52"
          strokeWidth="1.5"
        >
          <path d="M19,50 C4,42 3,26 8,14 Q13,5 19,5 Q25,5 30,14 C35,26 34,42 19,50 Z" />
          <path d="M19,5 Q16,-3 10,-1 Q14,8 19,5 Z" />
          <path d="M19,5 Q22,-3 28,-1 Q24,8 19,5 Z" />
          <line x1="19" y1="5" x2="19" y2="-2" />
          <circle cx="14" cy="22" r="1.5" fill="currentColor" />
          <circle cx="22" cy="18" r="1.5" fill="currentColor" />
          <circle cx="26" cy="28" r="1.5" fill="currentColor" />
          <circle cx="19" cy="32" r="1.5" fill="currentColor" />
          <circle cx="13" cy="34" r="1.5" fill="currentColor" />
          <circle cx="24" cy="38" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Lime cross-section #1 */}
      <div
        className={`${styles.piece} ${styles.limeHalf} ${styles.animSpin}`}
        style={{ animationDelay: "3s" }}
      >
        <svg
          {...S}
          width="75"
          height="75"
          viewBox="0 0 50 50"
          strokeWidth="1.5"
        >
          <circle cx="25" cy="25" r="22" />
          <circle cx="25" cy="25" r="7" />
          <line x1="25" y1="3" x2="25" y2="18" />
          <line x1="25" y1="32" x2="25" y2="47" />
          <line x1="6" y1="14" x2="17" y2="21" />
          <line x1="44" y1="36" x2="33" y2="29" />
          <line x1="6" y1="36" x2="17" y2="29" />
          <line x1="44" y1="14" x2="33" y2="21" />
        </svg>
      </div>

      {/* Rising bubbles #1 */}
      <div
        className={`${styles.piece} ${styles.bubbleTrail} ${styles.animFloat}`}
        style={{ animationDelay: "1s" }}
      >
        <svg
          {...S}
          width="39"
          height="129"
          viewBox="0 0 26 86"
          strokeWidth="1.4"
        >
          <circle cx="13" cy="76" r="8" />
          <circle cx="8" cy="60" r="6" />
          <circle cx="16" cy="48" r="5" />
          <circle cx="10" cy="36" r="4" />
          <circle cx="17" cy="26" r="3" />
          <circle cx="11" cy="18" r="2.5" />
          <circle cx="16" cy="11" r="2" />
          <circle cx="12" cy="5" r="1.5" />
        </svg>
      </div>

      {/* Cinnamon sticks */}
      <div
        className={`${styles.piece} ${styles.cinnamon} ${styles.animSway}`}
        style={{ animationDelay: "3s" }}
      >
        <svg
          {...S}
          width="84"
          height="60"
          viewBox="0 0 56 40"
          strokeWidth="1.5"
        >
          <path d="M6,8 Q28,3 50,10 Q50,20 28,25 Q6,18 6,8 Z" />
          <line x1="15" y1="9" x2="14" y2="22" />
          <line x1="28" y1="7" x2="27" y2="20" />
          <line x1="41" y1="9" x2="40" y2="22" />
          <path d="M6,22 Q28,17 50,24 Q50,34 28,39 Q6,32 6,22 Z" />
          <line x1="15" y1="23" x2="14" y2="36" />
          <line x1="28" y1="21" x2="27" y2="34" />
          <line x1="41" y1="23" x2="40" y2="36" />
        </svg>
      </div>

      {/* Muddler */}
      <div
        className={`${styles.piece} ${styles.muddler} ${styles.animSway}`}
        style={{ animationDelay: "2.2s" }}
      >
        <svg
          {...S}
          width="30"
          height="126"
          viewBox="0 0 20 84"
          strokeWidth="1.5"
        >
          <path d="M8,8 L6,66 L14,66 L12,8 Z" />
          <line x1="8" y1="8" x2="12" y2="8" />
          <line x1="7" y1="30" x2="13" y2="30" />
          <line x1="7" y1="40" x2="13" y2="40" />
          <line x1="7" y1="50" x2="13" y2="50" />
          <path d="M4,66 Q4,78 10,82 Q16,78 16,66 Z" />
          <line x1="4" y1="66" x2="16" y2="66" />
        </svg>
      </div>

      {/* Feather */}
      <div
        className={`${styles.piece} ${styles.feather} ${styles.animDrift}`}
        style={{ animationDelay: "2.8s" }}
      >
        <svg
          {...S}
          width="48"
          height="132"
          viewBox="0 0 32 88"
          strokeWidth="1.4"
        >
          <path d="M16,86 C8,74 2,54 3,34 C4,16 12,4 16,4 C20,4 28,16 29,34 C30,54 24,74 16,86 Z" />
          <line x1="16" y1="86" x2="16" y2="4" />
          <line x1="16" y1="74" x2="6" y2="66" />
          <line x1="16" y1="64" x2="5" y2="55" />
          <line x1="16" y1="54" x2="4" y2="44" />
          <line x1="16" y1="44" x2="4" y2="34" />
          <line x1="16" y1="34" x2="5" y2="25" />
          <line x1="16" y1="24" x2="8" y2="16" />
          <line x1="16" y1="14" x2="12" y2="7" />
          <line x1="16" y1="74" x2="26" y2="66" />
          <line x1="16" y1="64" x2="27" y2="55" />
          <line x1="16" y1="54" x2="28" y2="44" />
          <line x1="16" y1="44" x2="28" y2="34" />
          <line x1="16" y1="34" x2="27" y2="25" />
          <line x1="16" y1="24" x2="24" y2="16" />
          <line x1="16" y1="14" x2="20" y2="7" />
        </svg>
      </div>

      {/* Ginger root */}
      <div
        className={`${styles.piece} ${styles.ginger} ${styles.animSway}`}
        style={{ animationDelay: "1.5s" }}
      >
        <svg
          {...S}
          width="90"
          height="78"
          viewBox="0 0 60 52"
          strokeWidth="1.5"
        >
          <path d="M12,34 Q4,28 6,18 Q8,8 18,10 Q22,6 28,8 Q32,4 38,8 Q44,6 48,14 Q54,16 52,26 Q54,34 48,38 Q42,46 34,42 Q28,48 22,42 Q14,42 12,34 Z" />
          <line x1="20" y1="14" x2="18" y2="26" />
          <line x1="30" y1="10" x2="30" y2="24" />
          <line x1="40" y1="14" x2="42" y2="26" />
          <path d="M28,8 Q26,1 30,1 Q34,1 32,8" />
          <path d="M48,14 Q56,10 58,16 Q58,22 50,20" />
        </svg>
      </div>

      {/* Botanical compass / mandala */}
      <div
        className={`${styles.piece} ${styles.mandala} ${styles.animSpin}`}
        style={{ animationDelay: "5s" }}
      >
        <svg
          {...S}
          width="117"
          height="117"
          viewBox="0 0 78 78"
          strokeWidth="1.3"
        >
          <circle cx="39" cy="39" r="35" />
          <circle cx="39" cy="39" r="20" />
          <circle cx="39" cy="39" r="4" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 39, 39)`}>
              <path d="M37,4 L39,0 L41,4 L39,19 Z" />
            </g>
          ))}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 39, 39)`}>
              <line x1="39" y1="4" x2="39" y2="12" />
            </g>
          ))}
        </svg>
      </div>

      {/* Spirits bottle #2 */}
      <div
        className={`${styles.piece} ${styles.bottle2} ${styles.animFloat}`}
        style={{ animationDelay: "3.5s" }}
      >
        <svg
          {...S}
          width="51"
          height="138"
          viewBox="0 0 34 92"
          strokeWidth="1.5"
        >
          <rect x="13" y="2" width="4" height="4" rx="2" />
          <path d="M13,9 L11,20 L23,20 L21,9" />
          <path d="M11,20 Q7,32 7,42 L27,42 Q27,32 23,20" />
          <path d="M7,42 L7,82 L27,82 L27,42" />
          <line x1="5" y1="84" x2="29" y2="84" />
          <rect x="9" y="50" width="8" height="10" rx="2" />
          <line x1="12" y1="57" x2="22" y2="57" />
          <line x1="12" y1="63" x2="22" y2="63" />
        </svg>
      </div>

      {/* Star anise #2 */}
      <div
        className={`${styles.piece} ${styles.starAnise2} ${styles.animSpin}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="69"
          height="69"
          viewBox="0 0 46 46"
          strokeWidth="1.5"
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 23, 23)`}>
              <line x1="23" y1="23" x2="23" y2="6" />
              <ellipse cx="23" cy="4" rx="2.5" ry="4" />
            </g>
          ))}
          <circle cx="23" cy="23" r="4.5" />
        </svg>
      </div>

      {/* Elderflower cluster #2 */}
      <div
        className={`${styles.piece} ${styles.elderflower2} ${styles.animPulse}`}
        style={{ animationDelay: "0.5s" }}
      >
        <svg
          {...S}
          width="87"
          height="93"
          viewBox="0 0 58 62"
          strokeWidth="1.4"
        >
          <line x1="29" y1="60" x2="29" y2="44" />
          <line x1="29" y1="50" x2="15" y2="34" />
          <line x1="29" y1="50" x2="43" y2="34" />
          <line x1="29" y1="44" x2="29" y2="26" />
          <line x1="15" y1="34" x2="7" y2="18" />
          <line x1="15" y1="34" x2="19" y2="16" />
          <line x1="43" y1="34" x2="39" y2="16" />
          <line x1="43" y1="34" x2="51" y2="18" />
          <line x1="29" y1="26" x2="23" y2="11" />
          <line x1="29" y1="26" x2="35" y2="11" />
          {[
            { cx: 7, cy: 18 },
            { cx: 19, cy: 16 },
            { cx: 39, cy: 16 },
            { cx: 51, cy: 18 },
            { cx: 23, cy: 11 },
            { cx: 35, cy: 11 },
          ].flatMap(({ cx, cy }) =>
            [0, 72, 144, 216, 288].map((deg) => (
              <g
                key={`ef2-${cx}-${deg}`}
                transform={`rotate(${deg}, ${cx}, ${cy})`}
              >
                <ellipse cx={cx} cy={cy - 5} rx="1.5" ry="3" />
              </g>
            )),
          )}
          {[
            { cx: 7, cy: 18 },
            { cx: 19, cy: 16 },
            { cx: 39, cy: 16 },
            { cx: 51, cy: 18 },
            { cx: 23, cy: 11 },
            { cx: 35, cy: 11 },
          ].map(({ cx, cy }) => (
            <circle key={`ef2d-${cx}`} cx={cx} cy={cy} r="1.8" />
          ))}
        </svg>
      </div>

      {/* Rising bubbles #2 */}
      <div
        className={`${styles.piece} ${styles.bubbleTrail2} ${styles.animFloat}`}
        style={{ animationDelay: "2s" }}
      >
        <svg
          {...S}
          width="36"
          height="120"
          viewBox="0 0 24 80"
          strokeWidth="1.4"
        >
          <circle cx="12" cy="70" r="7" />
          <circle cx="7" cy="56" r="5.5" />
          <circle cx="15" cy="44" r="4.5" />
          <circle cx="9" cy="33" r="3.5" />
          <circle cx="15" cy="24" r="3" />
          <circle cx="10" cy="16" r="2.5" />
          <circle cx="14" cy="9" r="2" />
        </svg>
      </div>

      {/* Asterisk – right-of-center */}
      <div
        className={`${styles.piece} ${styles.asterisk3} ${styles.animSpin}`}
        style={{ animationDelay: "3.5s" }}
      >
        <svg
          {...S}
          width="48"
          height="48"
          viewBox="0 0 32 32"
          strokeWidth="1.8"
        >
          <line x1="16" y1="2" x2="16" y2="30" />
          <line x1="2" y1="16" x2="30" y2="16" />
          <line x1="6" y1="6" x2="26" y2="26" />
          <line x1="26" y1="6" x2="6" y2="26" />
        </svg>
      </div>

      {/* Extra leaf – inner left */}
      <div
        className={`${styles.piece} ${styles.leaf4} ${styles.animSway}`}
        style={{ animationDelay: "2.2s" }}
      >
        <svg
          {...S}
          width="72"
          height="102"
          viewBox="0 0 48 68"
          strokeWidth="1.5"
        >
          <path d="M24,64 C5,54 3,33 10,18 C17,3 31,3 38,18 C45,33 43,54 24,64 Z" />
          <line x1="24" y1="64" x2="24" y2="9" />
          <line x1="24" y1="42" x2="12" y2="35" />
          <line x1="24" y1="42" x2="36" y2="35" />
          <line x1="24" y1="28" x2="14" y2="21" />
          <line x1="24" y1="28" x2="34" y2="21" />
          <line x1="24" y1="15" x2="18" y2="10" />
          <line x1="24" y1="15" x2="30" y2="10" />
        </svg>
      </div>

      {/* 6-petal flower #3 */}
      <div
        className={`${styles.piece} ${styles.flower3} ${styles.animPulse}`}
        style={{ animationDelay: "1.6s" }}
      >
        <svg
          {...S}
          width="81"
          height="81"
          viewBox="0 0 54 54"
          strokeWidth="1.5"
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <g key={deg} transform={`rotate(${deg}, 27, 27)`}>
              <ellipse cx="27" cy="10" rx="5" ry="11" />
            </g>
          ))}
          <circle cx="27" cy="27" r="8" />
          <circle cx="27" cy="27" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Swirl #3 */}
      <div
        className={`${styles.piece} ${styles.swirl3} ${styles.animSpin}`}
        style={{ animationDelay: "6s" }}
      >
        <svg
          {...S}
          width="75"
          height="75"
          viewBox="0 0 50 50"
          strokeWidth="1.5"
        >
          <path d="M25,25 C31,19 38,23 35,31 C32,39 22,38 19,30 C16,22 20,14 28,12 C36,10 44,15 46,23 C48,31 44,41 36,45 C28,49 17,44 13,36 C9,28 12,16 20,11 C28,6 38,8 43,16" />
        </svg>
      </div>

      {/* Cocktail shaker #2 */}
      <div
        className={`${styles.piece} ${styles.shaker2} ${styles.animFloat}`}
        style={{ animationDelay: "0.3s" }}
      >
        <svg
          {...S}
          width="69"
          height="126"
          viewBox="0 0 46 84"
          strokeWidth="1.5"
        >
          <path d="M13,20 Q13,8 23,4 Q33,8 33,20" />
          <line x1="11" y1="20" x2="35" y2="20" />
          <path d="M11,20 L9,68 Q9,78 23,80 Q37,78 37,68 L35,20 Z" />
          <circle cx="17" cy="23" r="1.5" fill="currentColor" />
          <circle cx="23" cy="23" r="1.5" fill="currentColor" />
          <circle cx="29" cy="23" r="1.5" fill="currentColor" />
          <path d="M11,38 Q23,33 35,38" />
        </svg>
      </div>

      {/* Bar spoon #2 */}
      <div
        className={`${styles.piece} ${styles.barSpoon2} ${styles.animSway}`}
        style={{ animationDelay: "4s" }}
      >
        <svg
          {...S}
          width="24"
          height="143"
          viewBox="0 0 16 95"
          strokeWidth="1.5"
        >
          <ellipse cx="8" cy="6" rx="6" ry="3.5" />
          <path d="M8,10 C6,28 10,46 7,65 C5,78 8,88 8,92" />
          <line x1="8" y1="28" x2="12" y2="24" />
          <line x1="8" y1="38" x2="4" y2="34" />
          <line x1="8" y1="48" x2="12" y2="44" />
          <line x1="8" y1="58" x2="4" y2="54" />
          <circle cx="8" cy="92" r="4" />
        </svg>
      </div>

      {/* Lime cross-section #2 */}
      <div
        className={`${styles.piece} ${styles.limeHalf2} ${styles.animSpin}`}
        style={{ animationDelay: "4.5s" }}
      >
        <svg
          {...S}
          width="72"
          height="72"
          viewBox="0 0 48 48"
          strokeWidth="1.5"
        >
          <circle cx="24" cy="24" r="21" />
          <circle cx="24" cy="24" r="6.5" />
          <line x1="24" y1="3" x2="24" y2="17" />
          <line x1="24" y1="31" x2="24" y2="45" />
          <line x1="5" y1="13" x2="16" y2="20" />
          <line x1="43" y1="35" x2="32" y2="28" />
          <line x1="5" y1="35" x2="16" y2="28" />
          <line x1="43" y1="13" x2="32" y2="20" />
        </svg>
      </div>

      {/* Strawberry #2 */}
      <div
        className={`${styles.piece} ${styles.strawberry2} ${styles.animFloat}`}
        style={{ animationDelay: "1s" }}
      >
        <svg
          {...S}
          width="54"
          height="69"
          viewBox="0 0 36 46"
          strokeWidth="1.5"
        >
          <path d="M18,44 C4,36 3,21 8,11 Q13,3 18,3 Q23,3 28,11 C33,21 32,36 18,44 Z" />
          <path d="M18,3 Q15,-4 10,-2 Q14,6 18,3 Z" />
          <path d="M18,3 Q21,-4 26,-2 Q22,6 18,3 Z" />
          <line x1="18" y1="3" x2="18" y2="-3" />
          <circle cx="13" cy="18" r="1.5" fill="currentColor" />
          <circle cx="21" cy="14" r="1.5" fill="currentColor" />
          <circle cx="24" cy="24" r="1.5" fill="currentColor" />
          <circle cx="18" cy="28" r="1.5" fill="currentColor" />
          <circle cx="12" cy="30" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
