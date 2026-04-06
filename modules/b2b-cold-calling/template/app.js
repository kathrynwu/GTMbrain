const BUYER_PRESETS = {
  "Head of Sales": {
    personaLabel: "sales leaders",
    teamLabel: "sales team",
    challenge:
      "need more pipeline, but reps are buried in prospecting and admin instead of live selling",
    discoveryFocus: "rep bandwidth",
    opsImpact: "leaks productivity and slows pipeline creation",
  },
  CRO: {
    personaLabel: "revenue leaders",
    teamLabel: "revenue org",
    challenge:
      "are under pressure to create pipeline efficiently without solving everything with more headcount",
    discoveryFocus: "pipeline coverage",
    opsImpact: "adds cost without improving consistency",
  },
  RevOps: {
    personaLabel: "RevOps leaders",
    teamLabel: "RevOps team",
    challenge:
      "are being asked to support more outbound, but execution is fragmented across reps, tools, and manual work",
    discoveryFocus: "operational cleanup",
    opsImpact: "creates more process sprawl and cleanup for Ops",
  },
  "Sales Ops": {
    personaLabel: "Sales Ops leaders",
    teamLabel: "Sales Ops team",
    challenge:
      "need cleaner outbound execution, but the team still spends too much time fixing list quality and follow-up gaps",
    discoveryFocus: "workflow consistency",
    opsImpact: "creates handoff friction between reps and systems",
  },
  "Head of GTM Engineering": {
    personaLabel: "GTM engineering leaders",
    teamLabel: "GTM systems team",
    challenge:
      "are expected to automate growth motions while keeping the stack sane and handoffs reliable",
    discoveryFocus: "system orchestration",
    opsImpact: "creates brittle workflows and more system maintenance",
  },
};

const URGENCY_OPTIONS = [
  {
    value: "high",
    label: "High",
    motion: "A",
    reason: "the segment is specific, the pain is urgent, and a short phone conversation can create fast relevance.",
  },
  {
    value: "medium",
    label: "Medium",
    motion: "B",
    reason: "the segment is promising, but you should tighten the list and pressure-test the pain before scaling calls.",
  },
  {
    value: "low",
    label: "Low",
    motion: "C",
    reason: "the offer likely needs more context, so email-first is safer before spending call volume.",
  },
];

const PHONE_QUALITY_OPTIONS = [
  {
    value: "verified",
    label: "Phone-verified",
  },
  {
    value: "mixed",
    label: "Mixed quality",
  },
  {
    value: "unknown",
    label: "Unknown",
  },
];

const METRICS = [
  "Connection rate",
  "Qualified conversation rate",
  "Meeting-booked rate",
  "Show rate",
  "Close rate",
];

const DEFAULT_STATE = {
  company: "Openmart",
  product: "AI SDR for SaaS outbound teams",
  companyType: "B2B SaaS",
  buyerTitle: "RevOps",
  pain:
    "Outbound execution is fragmented across reps, tools, and manual work.",
  offer:
    "Create more consistent outbound coverage without piling more operational overhead onto RevOps.",
  proof:
    "Standardize a chunk of outbound work so reps spend less time prospecting manually and Ops spends less time cleaning it up.",
  urgency: "high",
  phoneQuality: "verified",
  cta: "Worth 15 minutes tomorrow at 10:00 PT or Thursday at 2:00 PT?",
  context:
    "The team is being asked to support more outbound without adding headcount.",
};

const elements = {};
let latestOutput = "";

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheElements();
  populateSelect(elements.buyerTitleInput, Object.keys(BUYER_PRESETS));
  populateSelect(elements.urgencyInput, URGENCY_OPTIONS.map((option) => option.label), URGENCY_OPTIONS.map((option) => option.value));
  populateSelect(elements.phoneQualityInput, PHONE_QUALITY_OPTIONS.map((option) => option.label), PHONE_QUALITY_OPTIONS.map((option) => option.value));
  bindEvents();
  applyDefaults();
  render(buildScript(getFormValues()));
}

function cacheElements() {
  elements.form = document.querySelector("#generator-form");
  elements.resetButton = document.querySelector("#reset-button");
  elements.copyButton = document.querySelector("#copy-button");

  elements.companyInput = document.querySelector("#company-input");
  elements.productInput = document.querySelector("#product-input");
  elements.companyTypeInput = document.querySelector("#company-type-input");
  elements.buyerTitleInput = document.querySelector("#buyer-title-input");
  elements.painInput = document.querySelector("#pain-input");
  elements.offerInput = document.querySelector("#offer-input");
  elements.proofInput = document.querySelector("#proof-input");
  elements.urgencyInput = document.querySelector("#urgency-input");
  elements.phoneQualityInput = document.querySelector("#phone-quality-input");
  elements.ctaInput = document.querySelector("#cta-input");
  elements.contextInput = document.querySelector("#context-input");

  elements.segmentHeading = document.querySelector("#segment-heading");
  elements.segmentCopy = document.querySelector("#segment-copy");
  elements.motionHeading = document.querySelector("#motion-heading");
  elements.motionCopy = document.querySelector("#motion-copy");
  elements.deliveryHeading = document.querySelector("#delivery-heading");
  elements.deliveryCopy = document.querySelector("#delivery-copy");
  elements.openerShort = document.querySelector("#opener-short");
  elements.openerLong = document.querySelector("#opener-long");
  elements.valueBridge = document.querySelector("#value-bridge");
  elements.meetingClose = document.querySelector("#meeting-close");
  elements.qualificationList = document.querySelector("#qualification-list");
  elements.objectionList = document.querySelector("#objection-list");
  elements.metricsList = document.querySelector("#metrics-list");
}

function populateSelect(selectElement, labels, values = labels) {
  selectElement.innerHTML = labels
    .map((label, index) => {
      return `<option value="${values[index]}">${label}</option>`;
    })
    .join("");
}

function bindEvents() {
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    render(buildScript(getFormValues()));
  });

  elements.resetButton.addEventListener("click", () => {
    applyDefaults();
    render(buildScript(getFormValues()));
  });

  elements.copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(latestOutput);
      elements.copyButton.textContent = "Copied";
      window.setTimeout(() => {
        elements.copyButton.textContent = "Copy Full Sheet";
      }, 1400);
    } catch (error) {
      window.alert("Copy failed. You can still select the text manually.");
    }
  });
}

function applyDefaults() {
  elements.companyInput.value = DEFAULT_STATE.company;
  elements.productInput.value = DEFAULT_STATE.product;
  elements.companyTypeInput.value = DEFAULT_STATE.companyType;
  elements.buyerTitleInput.value = DEFAULT_STATE.buyerTitle;
  elements.painInput.value = DEFAULT_STATE.pain;
  elements.offerInput.value = DEFAULT_STATE.offer;
  elements.proofInput.value = DEFAULT_STATE.proof;
  elements.urgencyInput.value = DEFAULT_STATE.urgency;
  elements.phoneQualityInput.value = DEFAULT_STATE.phoneQuality;
  elements.ctaInput.value = DEFAULT_STATE.cta;
  elements.contextInput.value = DEFAULT_STATE.context;
}

function getFormValues() {
  return {
    company: elements.companyInput.value.trim() || "Your company",
    product: elements.productInput.value.trim(),
    companyType: elements.companyTypeInput.value.trim(),
    buyerTitle: elements.buyerTitleInput.value,
    pain: elements.painInput.value.trim(),
    offer: elements.offerInput.value.trim(),
    proof: elements.proofInput.value.trim(),
    urgency: elements.urgencyInput.value,
    phoneQuality: elements.phoneQualityInput.value,
    cta: elements.ctaInput.value.trim(),
    context: elements.contextInput.value.trim(),
  };
}

function buildScript(input) {
  const preset = BUYER_PRESETS[input.buyerTitle] || BUYER_PRESETS.RevOps;
  const urgencyOption =
    URGENCY_OPTIONS.find((option) => option.value === input.urgency) ||
    URGENCY_OPTIONS[0];

  const motion = resolveMotion(urgencyOption.motion, input.phoneQuality);
  const phoneQualityLabel = describePhoneQuality(input.phoneQuality);
  const segmentHeading = `${input.buyerTitle} at ${input.companyType} teams`;
  const segmentCopy = `Target ${preset.personaLabel} at ${input.companyType} companies where ${input.pain.toLowerCase()}`;
  const motionCopy = `Choose ${motion} because ${buildMotionReason(motion, urgencyOption.reason, phoneQualityLabel)}.`;

  const shortOpener = `Hi {{FirstName}}, {{YourName}} here with ${input.company}. Quick 30 seconds?\n\nI talk with ${preset.personaLabel} at ${input.companyType} teams who ${preset.challenge}. We built ${withArticle(input.product)} to ${normalizeFragment(input.offer)}.\n\nHow are you handling that today?`;

  const longOpener = `Hi {{FirstName}}, {{YourName}} here with ${input.company}. Mind if I take 30 seconds?\n\nA lot of ${preset.personaLabel} I talk to are being asked to do more, but ${sentenceCase(input.pain)} ${input.context ? `${sentenceCase(input.context)} ` : ""}We built ${withArticle(input.product)} to ${normalizeFragment(input.offer)}.${input.proof ? ` ${sentenceCase(input.proof)}` : ""}\n\nHow are you managing that on your side today?`;

  const valueBridge = `From what you are seeing, it sounds like ${preset.discoveryFocus} is the real friction point. The reason teams look at ${input.product} is to ${normalizeFragment(input.offer)}.${input.proof ? ` ${sentenceCase(input.proof)}` : ""}`;

  const questions = [
    `How are you managing outbound coverage today across the ${preset.teamLabel}?`,
    `Where does it tend to break down most, list building, follow-up consistency, or ${preset.discoveryFocus}?`,
    `When that happens, does ${input.buyerTitle} usually end up owning the cleanup, or is it sitting with Sales?`,
    `If you fixed that this quarter, what would it change for pipeline or team efficiency?`,
  ];

  const objections = [
    {
      title: "Send me an email",
      response: `Happy to. Just so I send something useful, which piece is more of the issue for you right now, ${preset.discoveryFocus}, follow-up consistency, or the cleanup behind it?`,
    },
    {
      title: "We already have reps or SDRs",
      response: `Makes sense. Most teams we talk to are not trying to replace reps, they are trying to remove the manual work that keeps reps from spending time in real selling conversations.`,
    },
    {
      title: "Not interested",
      response: `Fair enough. If I could show you a way to ${normalizeFragment(input.offer)} without adding more process sprawl, would a short look next quarter be unreasonable?`,
    },
  ];

  const meetingClose =
    input.cta ||
    `The next step is a short walkthrough so we can show exactly how this would work for your current motion. Are you free later today, or would tomorrow morning be better?`;

  const deliveryCopy =
    "Sound direct, mention the problem before the product, and ask short questions that make the buyer do the talking.";

  latestOutput = buildCopySheet({
    segmentHeading,
    segmentCopy,
    motion,
    motionCopy,
    shortOpener,
    longOpener,
    valueBridge,
    questions,
    objections,
    meetingClose,
  });

  return {
    segmentHeading,
    segmentCopy,
    motionHeading: `Choose ${motion}`,
    motionCopy,
    deliveryHeading: "First 6 seconds matter",
    deliveryCopy,
    shortOpener,
    longOpener,
    valueBridge,
    questions,
    objections,
    meetingClose,
    metrics: METRICS,
  };
}

function resolveMotion(initialMotion, phoneQuality) {
  if (phoneQuality === "verified") {
    return initialMotion;
  }
  if (phoneQuality === "mixed") {
    return initialMotion === "C" ? "C" : "B";
  }
  return "C";
}

function describePhoneQuality(phoneQuality) {
  const option = PHONE_QUALITY_OPTIONS.find((item) => item.value === phoneQuality);
  return option ? option.label.toLowerCase() : "unknown";
}

function buildMotionReason(motion, urgencyReason, phoneQualityLabel) {
  if (motion === "A") {
    return `${urgencyReason} Your phone data is ${phoneQualityLabel}, so call-first is realistic.`;
  }
  if (motion === "B") {
    return `${urgencyReason} Your phone data is ${phoneQualityLabel}, so enrich before pushing heavy call volume.`;
  }
  return `${urgencyReason} Your phone data is ${phoneQualityLabel}, so add context with email or enrichment before calling.`;
}

function render(output) {
  elements.segmentHeading.textContent = output.segmentHeading;
  elements.segmentCopy.textContent = output.segmentCopy;
  elements.motionHeading.textContent = output.motionHeading;
  elements.motionCopy.textContent = output.motionCopy;
  elements.deliveryHeading.textContent = output.deliveryHeading;
  elements.deliveryCopy.textContent = output.deliveryCopy;
  elements.openerShort.textContent = output.shortOpener;
  elements.openerLong.textContent = output.longOpener;
  elements.valueBridge.textContent = output.valueBridge;
  elements.meetingClose.textContent = output.meetingClose;

  elements.qualificationList.innerHTML = output.questions
    .map((question) => `<li>${question}</li>`)
    .join("");

  elements.objectionList.innerHTML = output.objections
    .map((item) => {
      return `<article class="objection-card"><h4>${item.title}</h4><p>${item.response}</p></article>`;
    })
    .join("");

  elements.metricsList.innerHTML = output.metrics
    .map((metric) => `<li>${metric}</li>`)
    .join("");
}

function buildCopySheet(output) {
  return [
    output.segmentHeading,
    "",
    output.segmentCopy,
    "",
    `RECOMMENDATION: Choose ${output.motion}`,
    output.motionCopy,
    "",
    "15-second opener",
    output.shortOpener,
    "",
    "30-second opener",
    output.longOpener,
    "",
    "Qualification questions",
    ...output.questions.map((question, index) => `${index + 1}. ${question}`),
    "",
    "Value bridge",
    output.valueBridge,
    "",
    "Objections",
    ...output.objections.map((item) => `${item.title}: ${item.response}`),
    "",
    "Meeting close",
    output.meetingClose,
    "",
    "Metrics to track",
    ...METRICS.map((metric) => `- ${metric}`),
  ].join("\n");
}

function withArticle(phrase) {
  const trimmed = phrase.trim();
  if (!trimmed) {
    return "a tool";
  }
  const first = trimmed.charAt(0).toLowerCase();
  const article = ["a", "e", "i", "o", "u"].includes(first) ? "an" : "a";
  return `${article} ${trimmed}`;
}

function normalizeFragment(text) {
  const trimmed = text.trim();
  if (!trimmed) {
    return "";
  }
  const clean = trimmed.replace(/[.?!]\s*$/, "");
  return clean.charAt(0).toLowerCase() + clean.slice(1);
}

function sentenceCase(text) {
  if (!text) {
    return "";
  }
  const clean = text.trim().replace(/\s+/g, " ");
  const normalized = clean.replace(/[.?!]\s*$/, "");
  return `${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}.`;
}
