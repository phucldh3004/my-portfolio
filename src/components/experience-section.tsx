"use client";

import { motion, Variants } from "framer-motion";
import { profileData, Experience } from "@/config/profile";
import { ExperienceCard } from "@/components/experience-card";

/* ─── helpers ───────────────────────────────────────────────────── */

/** Parse "Month YYYY" or "Month-YYYY" → Date (uses 1st of month) */
function parseDate(token: string): Date {
  // normalise dash-separator → space  e.g. "July-2020" → "July 2020"
  const clean = token.replace(/-/g, " ").trim();
  const d = new Date(clean);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

function parsePeriod(period: string): { start: Date; end: Date } {
  const parts = period.split(" - ").map((s) => s.trim());
  const start = parseDate(parts[0]);
  const end =
    parts[1] && parts[1].toLowerCase() !== "present"
      ? parseDate(parts[1])
      : new Date(); // treat "Present" as today
  return { start, end };
}

function periodsOverlap(a: Experience, b: Experience): boolean {
  const pa = parsePeriod(a.period);
  const pb = parsePeriod(b.period);
  return pa.start < pb.end && pb.start < pa.end;
}

/**
 * Build timeline rows.
 * - Single jobs occupy the full row (both cols null-ed).
 * - A pair of overlapping jobs shares one row (left / right).
 */
type TimelineRow =
  | { kind: "single"; exp: Experience; index: number }
  | { kind: "pair"; left: Experience; leftIdx: number; right: Experience; rightIdx: number };

function buildRows(exps: Experience[]): TimelineRow[] {
  const used = new Set<number>();
  const rows: TimelineRow[] = [];

  for (let i = 0; i < exps.length; i++) {
    if (used.has(i)) continue;

    // Look ahead for first overlapping un-used sibling
    let paired = -1;
    for (let j = i + 1; j < exps.length; j++) {
      if (!used.has(j) && periodsOverlap(exps[i], exps[j])) {
        paired = j;
        break;
      }
    }

    if (paired !== -1) {
      used.add(i);
      used.add(paired);
      rows.push({
        kind: "pair",
        left: exps[i],
        leftIdx: i,
        right: exps[paired],
        rightIdx: paired,
      });
    } else {
      used.add(i);
      rows.push({ kind: "single", exp: exps[i], index: i });
    }
  }

  return rows;
}

/* ─── dot label on the centre spine ─────────────────────────────── */
function TimelineDot({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center shrink-0 w-28 select-none">
      <div className="relative flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)]" />
        <p className="text-[11px] text-muted-foreground font-medium mt-1 whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── animation variants ─────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
  },
};

const connectorVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── main section ───────────────────────────────────────────────── */
export function ExperienceSection() {
  const rows = buildRows(profileData.experiences);

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Career Timeline
          </h2>
          <p className="text-2xl font-bold text-foreground">Experience</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative flex flex-col items-center gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Vertical spine */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent pointer-events-none" />

          {rows.map((row, rowIdx) => {
            /* ── PAIR row ─────────────────────────────────────── */
            if (row.kind === "pair") {
              const dotLabel = parsePeriod(row.left.period).start.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
              return (
                <div key={rowIdx} className="w-full">
                  {/* Dot with date */}
                  <div className="flex justify-center mb-4">
                    <TimelineDot label={dotLabel} />
                  </div>

                  {/* Left card — connector — Right card */}
                  <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-0 mb-10 md:mb-14">
                    {/* Left */}
                    <div className="pr-6 flex justify-end">
                      <div className="w-full max-w-sm">
                        <ExperienceCard
                          exp={row.left}
                          index={row.leftIdx}
                          cardVariants={cardVariants}
                          side="left"
                        />
                      </div>
                    </div>

                    {/* Centre spine placeholder */}
                    <div className="w-28 flex flex-col items-center pt-6">
                      {/* Left connector */}
                      <motion.div
                        className="h-px w-full bg-border origin-right"
                        variants={connectorVariants}
                      />
                      {/* Right connector */}
                      <motion.div
                        className="h-px w-full bg-border origin-left mt-0"
                        variants={connectorVariants}
                      />
                    </div>

                    {/* Right */}
                    <div className="pl-6 flex justify-start">
                      <div className="w-full max-w-sm">
                        <ExperienceCard
                          exp={row.right}
                          index={row.rightIdx}
                          cardVariants={cardVariants}
                          side="right"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            /* ── SINGLE row ───────────────────────────────────── */
            const dotLabel = parsePeriod(row.exp.period).start.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            });
            // Alternate single jobs left / right for visual rhythm
            const side: "left" | "right" = rowIdx % 2 === 0 ? "left" : "right";

            return (
              <div key={rowIdx} className="w-full">
                {/* Dot */}
                <div className="flex justify-center mb-4">
                  <TimelineDot label={dotLabel} />
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-0 mb-10 md:mb-14">
                  {side === "left" ? (
                    <>
                      <div className="pr-6 flex justify-end">
                        <div className="w-full max-w-sm">
                          <ExperienceCard
                            exp={row.exp}
                            index={row.index}
                            cardVariants={cardVariants}
                            side="left"
                          />
                        </div>
                      </div>
                      <div className="w-28 flex items-center justify-start pt-6">
                        <motion.div
                          className="h-px w-full bg-border origin-right"
                          variants={connectorVariants}
                        />
                      </div>
                      <div className="pl-6" />
                    </>
                  ) : (
                    <>
                      <div className="pr-6" />
                      <div className="w-28 flex items-center justify-end pt-6">
                        <motion.div
                          className="h-px w-full bg-border origin-left"
                          variants={connectorVariants}
                        />
                      </div>
                      <div className="pl-6 flex justify-start">
                        <div className="w-full max-w-sm">
                          <ExperienceCard
                            exp={row.exp}
                            index={row.index}
                            cardVariants={cardVariants}
                            side="right"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* End cap */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <p className="text-xs text-muted-foreground">Jul 2020</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
