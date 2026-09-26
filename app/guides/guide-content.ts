export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  afterList?: string[];
  bullets?: string[];
  steps?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  heroLine: string;
  heroCopy: string;
  cta: string;
  sections: GuideSection[];
  related: string[];
  faq: { question: string; answer: string }[];
};

export const guides: Record<string, Guide> = {
  "conduit-offset-calculator": {
    slug: "conduit-offset-calculator",
    title: "Conduit Offset Calculator for Electricians | BendLogic",
    description: "Get offset bend marks, travel, and shrink for EMT and other conduit before you put pipe on the bender. Field layout on iPhone and Android.",
    h1: "Conduit offset calculator for electricians",
    heroLine: "Need an offset around an obstacle — without guessing the marks.",
    heroCopy: "Punch in rise and run the way they read on your tape. BendLogic returns travel, shrink, and labeled bend marks with a layout you can check against the stick in front of you. Works offline on the jobsite.",
    cta: "Download BendLogic",
    sections: [
      {
        heading: "What an offset solves",
        paragraphs: ["An offset moves a conduit run up, down, or around an obstruction and brings it back parallel. On the job that means knowing:"],
        bullets: ["How far the pipe travels along the run", "How much shrink to allow so the end lands where you want", "Where to place bend marks on the stick before the first bend"],
        afterList: ["Doing that from memory or a chart is fine when you have time. On a busy rack, marks you can verify on a layout screen save re-bends."],
      },
      {
        heading: "How BendLogic helps",
        steps: ["Choose Simple Offset (or Parallel Offset when runs must stay spaced).", "Enter measurements in tape-measure fractions — no decimal conversion.", "Read travel, shrink, and bend marks with a visual layout and field steps.", "Confirm against the pipe and your bender before you bend."],
        afterList: ["Bender profiles (Milwaukee, Klein, IDEAL where published values are available) keep take-up and deduct in the calculation instead of one generic number."],
      },
      {
        heading: "Field checklist",
        bullets: ["Measure the obstruction and the clearance you need", "Confirm conduit type and size", "Check bender shoe and published take-up for that size", "Mark the stick from the layout, then verify distances with your tape", "Follow AHJ / jobsite safe work practices"],
        afterList: ["BendLogic assists layout. You confirm every mark before bending."],
      },
    ],
    related: ["3-point-saddle-bend", "4-point-saddle-bend", "rolling-offset-conduit"],
    faq: [
      { question: "Does BendLogic work offline?", answer: "Yes — calculations run on-device." },
      { question: "Does it support parallel offsets?", answer: "Yes — for keeping parallel runs spaced through obstacles." },
      { question: "Is this a guarantee the bend will land perfect?", answer: "No. Always verify measurements, bender settings, and field conditions." },
    ],
  },
  "3-point-saddle-bend": {
    slug: "3-point-saddle-bend",
    title: "3-Point Saddle Bend Marks | Conduit Calculator | BendLogic",
    description: "Plan 3-point saddle bend marks around an obstruction with a clear field layout. EMT-friendly calculator for electricians — iPhone and Android.",
    h1: "3-point saddle bend marks for conduit",
    heroLine: "Obstacle in the way? Lay out the saddle before you bend.",
    heroCopy: "A 3-point saddle clears a pipe, strut, or other obstruction and returns to the original plane. BendLogic shows mark positions, bend order, and a visual layout so you can check the stick before the first bend.",
    cta: "Get BendLogic",
    sections: [
      {
        heading: "When electricians use a 3-point saddle",
        paragraphs: ["Use a 3-point saddle when you need to clear a single obstruction and come back flat — common on EMT runs where a pipe or conduit crosses your path. The hard part is not the idea; it is getting three marks and bend order right so the rise clears and the ends line up."],
      },
      {
        heading: "How BendLogic helps",
        steps: ["Open 3-Point Saddle.", "Enter obstruction and conduit inputs using the tradesman fraction keypad.", "Choose field-reference or center-reference mode as supported in-app.", "Read the full mark layout, bend order, and field steps on one screen.", "Verify on the pipe before you bend."],
      },
      {
        heading: "Field checklist",
        bullets: ["Confirm obstruction height and available approach", "Confirm conduit size and bender", "Mark in the order the app shows", "Dry-fit mental check: rise clears, ends parallel to original plane", "Verify every measurement — app assists; you own the bend"],
      },
    ],
    related: ["conduit-offset-calculator", "4-point-saddle-bend", "rolling-offset-conduit"],
    faq: [
      { question: "3-point vs 4-point?", answer: "3-point clears a single bump and returns flat. 4-point is for longer obstacles or when you need a flat top over a wider obstruction — see the 4-point guide." },
      { question: "Offline?", answer: "Yes." },
    ],
  },
  "4-point-saddle-bend": {
    slug: "4-point-saddle-bend",
    title: "4-Point Saddle Bend Layout | Conduit Calculator | BendLogic",
    description: "Lay out 4-point saddle marks for longer obstacles with bend order and a clear visual. Built for electricians on iPhone and Android.",
    h1: "4-point saddle bend layout for conduit",
    heroLine: "Wider obstacle? Get all four marks before you commit pipe.",
    heroCopy: "A 4-point saddle gives you a flat section over a longer obstruction. BendLogic returns labeled marks, bend order, and a CAD-style layout so you can check spacing on the stick first.",
    cta: "Download BendLogic",
    sections: [
      {
        heading: "Why 4-point saddles go wrong in the field",
        paragraphs: ["Miss one mark spacing and the flat top is short, the ends do not land, or you eat pipe on a re-bend. Charts help — a labeled layout with bend order helps more when gloves are on and the rack is waiting."],
      },
      {
        heading: "How BendLogic helps",
        steps: ["Open 4-Point Saddle.", "Enter measurements in fractions the way they read on your tape.", "Review mark cards, bend order, and the visual layout together.", "Confirm against the pipe and your bender’s published take-up before bending."],
      },
      {
        heading: "Field checklist",
        bullets: ["Measure obstacle length and required clearance", "Confirm conduit size and shoe", "Follow in-app bend order (do not shuffle marks)", "Verify flat-top length against the obstacle", "You own final verification — BendLogic assists layout"],
      },
    ],
    related: ["3-point-saddle-bend", "conduit-offset-calculator", "rolling-offset-conduit"],
    faq: [
      { question: "When 4-point instead of 3-point?", answer: "Longer obstacles or when you need a defined flat over the obstruction." },
      { question: "Parallel runs?", answer: "Use parallel tools in-app when spacing must stay consistent across a rack." },
    ],
  },
  "rolling-offset-conduit": {
    slug: "rolling-offset-conduit",
    title: "Rolling Offset Conduit Calculator | BendLogic",
    description: "Calculate rolling offset true offset, travel, and roll for offset-and-roll conduit runs. Field layout for electricians — iPhone and Android.",
    h1: "Rolling offset calculator for conduit",
    heroLine: "Offset and roll in one run — without doing the triangle in your head.",
    heroCopy: "A rolling offset combines an offset with a roll so the pipe lands where the rack or box needs it. BendLogic gives true offset, travel, and roll with a visual layout you can check before marks go on the stick.",
    cta: "Get BendLogic",
    sections: [
      {
        heading: "What “rolling offset” means on the job",
        paragraphs: ["You need to move the run in two directions at once (for example up and over). That is more than a simple offset: you need the combined distance and the roll so both bends land. Mistakes show up as twisted racks and wasted pipe."],
      },
      {
        heading: "How BendLogic helps",
        steps: ["Open Rolling Offset.", "Enter the two offset components using tape fractions.", "Read true offset, travel, and roll plus the labeled layout.", "Mark the stick, verify with your tape, then bend."],
      },
      {
        heading: "Field checklist",
        bullets: ["Confirm both offset directions and clearances", "Confirm conduit size and bender", "Keep roll orientation consistent with how the pipe will sit in the rack", "Verify marks before the first bend", "Follow jobsite standards — app assists; you confirm"],
      },
    ],
    related: ["conduit-offset-calculator", "3-point-saddle-bend", "4-point-saddle-bend"],
    faq: [
      { question: "Offline?", answer: "Yes." },
      { question: "Does it replace knowing the trade?", answer: "No — it speeds layout and reduces conversion errors. You still own field verification." },
    ],
  },
};
