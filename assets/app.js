const dimensions = [
  {
    id: "information",
    label: "Information et communication",
    criterion: "Formalisation",
    action: "Vérifier que les informations attendues sont accessibles, compréhensibles et rappelées au bon moment."
  },
  {
    id: "alignement",
    label: "Alignement pédagogique",
    criterion: "Cohérence objectifs, activités, évaluation",
    action: "Comparer objectifs, activités, consignes, évaluations et critères avant de conclure."
  },
  {
    id: "supports",
    label: "Supports et ressources",
    criterion: "Efficacité perçue des ressources",
    action: "Analyser le rôle des supports : information, entraînement, approfondissement, révision ou autonomie."
  },
  {
    id: "organisation",
    label: "Organisation de l'enseignement",
    criterion: "Lisibilité du déroulement",
    action: "Examiner le calendrier, le rythme, les consignes et les conditions matérielles."
  },
  {
    id: "evaluation",
    label: "Évaluation des apprentissages",
    criterion: "Clarté et cohérence des modalités",
    action: "Comparer modalités annoncées, critères de correction, exercices préparatoires et épreuves."
  },
  {
    id: "formation",
    label: "Place dans la formation",
    criterion: "Cohérence de parcours",
    action: "Mettre en discussion les résultats avec l'équipe pédagogique pour comprendre la place de l'enseignement."
  },
  {
    id: "engagement",
    label: "Engagement et apprentissage",
    criterion: "Activité et progression déclarées",
    action: "Compléter les tendances par un recueil qualitatif lorsque l'engagement ou la progression posent question."
  }
];

const libraryItems = [
  {
    id: "syllabus-connu",
    source: "Socle EEE",
    dimension: "information",
    text: "J'ai pris connaissance du syllabus de cet enseignement.",
    indicator: "Le syllabus est connu.",
    response: "Likert 1 à 5",
    diagnostic: "Si la tendance est faible, vérifier l'accessibilité, le moment de diffusion et la présentation du syllabus.",
    action: "Améliorer la communication et accompagner la rédaction du syllabus.",
    observable: "Nombre de rappels, ateliers, syllabus mis à jour."
  },
  {
    id: "objectifs-presentes",
    source: "Socle EEE",
    dimension: "information",
    text: "Les objectifs de cet enseignement ont été présentés.",
    indicator: "Les objectifs sont connus.",
    response: "Likert 1 à 5",
    diagnostic: "Vérifier si les objectifs sont formulés, visibles et explicités en début de séquence.",
    action: "Clarifier les objectifs dans les supports et les temps d'introduction.",
    observable: "Objectifs reformulés, supports mis à jour, retours étudiants."
  },
  {
    id: "contenus-syllabus",
    source: "Socle EEE",
    dimension: "information",
    text: "Les contenus de cet enseignement correspondent à ce qui a été présenté dans le syllabus.",
    indicator: "Le programme est cohérent avec ce qui a été annoncé.",
    response: "Likert 1 à 5",
    diagnostic: "Comparer le déroulé réel, les contenus annoncés et les ajustements communiqués.",
    action: "Mettre à jour le syllabus ou expliciter les écarts lorsqu'ils sont justifiés.",
    observable: "Syllabus rectifié, message de cadrage, cohérence perçue au semestre suivant."
  },
  {
    id: "modalites-evaluation",
    source: "Socle EEE",
    dimension: "evaluation",
    text: "Les modalités d'évaluation de cet enseignement ont été présentées.",
    indicator: "Les modalités d'évaluation sont connues.",
    response: "Likert 1 à 5",
    diagnostic: "Vérifier la présence des modalités, critères, échéances et attendus dans les supports.",
    action: "Clarifier les consignes et les critères avant les évaluations.",
    observable: "Consignes mises à jour, critères explicités, questions récurrentes en baisse."
  },
  {
    id: "ressources-apprentissage",
    source: "Socle EEE",
    dimension: "supports",
    text: "Les références ou les ressources documentaires de cet enseignement ont facilité mon apprentissage.",
    indicator: "Les ressources facilitent l'apprentissage.",
    response: "Likert 1 à 5",
    diagnostic: "Identifier la fonction des ressources : comprendre, s'entraîner, approfondir, réviser.",
    action: "Ajuster la médiatisation des contenus et les consignes d'usage des ressources.",
    observable: "Ressources restructurées, guidage ajouté, usages observés."
  },
  {
    id: "activites-objectifs",
    source: "Socle EEE",
    dimension: "alignement",
    text: "Les activités durant cet enseignement me permettent d'atteindre les objectifs.",
    indicator: "Les activités sont cohérentes avec les objectifs.",
    response: "Likert 1 à 5",
    diagnostic: "Vérifier l'alignement constructif entre objectifs, activités, entraînements et productions attendues.",
    action: "Ajuster les activités ou expliciter le lien entre activité et apprentissage visé.",
    observable: "Activités modifiées, atelier d'alignement, focus group si besoin."
  },
  {
    id: "evaluation-enseigne",
    source: "Socle EEE",
    dimension: "alignement",
    text: "J'ai été évalué sur ce qui a été enseigné dans cet enseignement.",
    indicator: "L'évaluation est cohérente avec les activités et les contenus travaillés.",
    response: "Likert 1 à 5",
    diagnostic: "Comparer évaluations, séances, consignes, exercices et critères.",
    action: "Réviser l'évaluation ou renforcer les temps d'entraînement et de préparation.",
    observable: "Épreuves ajustées, critères clarifiés, réclamations ou incompréhensions suivies."
  },
  {
    id: "acteur-apprentissage",
    source: "Socle EEE",
    dimension: "engagement",
    text: "Je suis acteur de mon apprentissage dans cet enseignement.",
    indicator: "L'étudiant se déclare actif dans son apprentissage.",
    response: "Likert 1 à 5",
    diagnostic: "Identifier les moments où les étudiants produisent, s'entraînent, décident, coopèrent ou s'autoévaluent.",
    action: "Introduire ou mieux guider des activités actives lorsque c'est pertinent.",
    observable: "Activités actives recensées, traces d'apprentissage, retours qualitatifs."
  },
  {
    id: "progression-formation",
    source: "Socle EEE",
    dimension: "formation",
    text: "Je trouve que cet enseignement me permet de progresser dans ma formation.",
    indicator: "L'enseignement est perçu comme utile dans le parcours.",
    response: "Likert 1 à 5",
    diagnostic: "Vérifier la lisibilité des liens avec les compétences, les autres enseignements et les attendus du parcours.",
    action: "Expliciter la place de l'enseignement dans la progression globale.",
    observable: "Liens de parcours explicités, retours en conseil pédagogique."
  },
  {
    id: "approfondir-thematique",
    source: "Socle EEE",
    dimension: "formation",
    text: "J'aimerais approfondir la thématique de cet enseignement.",
    indicator: "La thématique suscite un intérêt d'approfondissement.",
    response: "Likert 1 à 5",
    diagnostic: "Interpréter avec prudence : intérêt, frustration, difficulté ou envie d'orientation peuvent produire le même signal.",
    action: "Proposer des pistes d'approfondissement ou clarifier les suites possibles dans le parcours.",
    observable: "Ressources complémentaires, choix de parcours, demandes de suivi."
  },
  {
    id: "feedback-constructif",
    source: "Complément",
    dimension: "evaluation",
    text: "Les retours reçus pendant cet enseignement m'aident à identifier mes pistes de progrès.",
    indicator: "Le feedback soutient la progression.",
    response: "Likert 1 à 5",
    diagnostic: "Vérifier les moments, formes et délais de feedback.",
    action: "Renforcer les feedbacks formatifs et les occasions de remédiation.",
    observable: "Feedbacks planifiés, corrections commentées, amélioration des productions."
  },
  {
    id: "question-ouverte-amelioration",
    source: "Complément",
    dimension: "engagement",
    text: "Quel changement concret aiderait le plus les étudiants à apprendre dans cet enseignement ?",
    indicator: "Des pistes d'amélioration sont formulées.",
    response: "Question ouverte",
    diagnostic: "Coder les réponses par thèmes et distinguer irritants, besoins, propositions et cas isolés.",
    action: "Prioriser une action réalisable et communiquer la suite donnée.",
    observable: "Catégories de réponses, action retenue, retour aux étudiants."
  }
];

const auditRules = [
  {
    title: "Clarté",
    icon: "fa-align-left",
    body: "La question doit être claire, spécifique et reliée à un aspect pertinent de l'enseignement."
  },
  {
    title: "Un seul objet",
    icon: "fa-bullseye",
    body: "Un item doit éviter de mélanger plusieurs dimensions, sinon la réponse devient difficile à interpréter."
  },
  {
    title: "Neutralité",
    icon: "fa-scale-balanced",
    body: "La formulation ne doit pas orienter la réponse, suggérer un jugement ou installer une accusation implicite."
  },
  {
    title: "Focus apprentissage",
    icon: "fa-graduation-cap",
    body: "Les questions gagnent en utilité lorsqu'elles portent sur l'enseignement, l'apprentissage et leurs conditions."
  },
  {
    title: "Anonymat et transparence",
    icon: "fa-user-shield",
    body: "La qualité du retour dépend de la confiance : anonymat, usage annoncé des résultats et communication des suites."
  },
  {
    title: "Action possible",
    icon: "fa-screwdriver-wrench",
    body: "Un résultat faible doit ouvrir vers un diagnostic ou une amélioration concrète, pas seulement vers un score."
  },
  {
    title: "Acquiescement",
    icon: "fa-check-double",
    body: "Un item trop consensuel favorise l'accord automatique. Prévoir des objets précis, des choix nuancés et une option « je ne sais pas » quand elle est pertinente."
  },
  {
    title: "Lassitude",
    icon: "fa-battery-quarter",
    body: "Un questionnaire long dégrade la qualité des réponses. Mieux vaut un socle court, complété par un recueil qualitatif ciblé."
  },
  {
    title: "Effet de halo",
    icon: "fa-circle-half-stroke",
    body: "Une impression globale sur un enseignement ou une personne peut contaminer toutes les dimensions. Séparer les facettes et trianguler les résultats."
  },
  {
    title: "Alignement communautaire",
    icon: "fa-people-group",
    body: "En contexte collectif, les réponses peuvent s'aligner sur l'opinion dominante. Recueillir d'abord individuellement et garantir la légitimité des désaccords."
  }
];

const roadmap = [
  {
    title: "Cadrage",
    body: "Clarifier l'usage du recueil : satisfaction, diagnostic, amélioration continue, conformité ou dialogue pédagogique."
  },
  {
    title: "Modèle",
    body: "Structurer la base autour des dimensions, critères, indicateurs, modalités d'observation et biais associés."
  },
  {
    title: "Audit",
    body: "Renforcer les règles de repérage : clarté, neutralité, unicité, satisfaction trop globale, halo, lassitude et acquiescement."
  },
  {
    title: "Studio",
    body: "Composer un questionnaire court, équilibré, exportable et relié à des diagnostics pédagogiques."
  },
  {
    title: "Analyse",
    body: "Aider l'équipe à interpréter les signaux sans confondre satisfaction étudiante et preuve directe de qualité."
  },
  {
    title: "Qualitatif",
    body: "Prévoir des trames de focus group, d'entretien ou de concertation quand un score ne suffit pas à comprendre."
  },
  {
    title: "Suivi",
    body: "Relier les décisions à des actions observables et les suivre sur plusieurs semestres."
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const storage = {
  get(key) {
    try {
      return window.localStorage?.getItem(key) || null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage?.setItem(key, value);
    } catch {
      // Storage can be unavailable in restricted browser contexts.
    }
  }
};

const parseStoredArray = (key) => {
  try {
    const parsed = JSON.parse(storage.get(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[char]);

const helpButton = (title, body, label = "Aide contextuelle") => `
  <button class="help-button mini" type="button" aria-label="${escapeHtml(label)}" data-help-title="${escapeHtml(title)}" data-help-body="${escapeHtml(body)}">?</button>
`;

const state = {
  selection: parseStoredArray("evalomatic-selection"),
  customItems: parseStoredArray("evalomatic-custom-items"),
  exampleIndex: 0
};

const dimensionById = (id) => dimensions.find((dimension) => dimension.id === id) || dimensions[0];
const allItems = () => [...libraryItems, ...state.customItems];
const itemById = (id) => allItems().find((item) => item.id === id);
const safeId = (value) => String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "item";

const cdata = (value) => `<![CDATA[${String(value ?? "").replaceAll("]]>", "]]]]><![CDATA[>")}]]>`;

const scaleResponseLabel = (value) => ({
  likert5: "Likert 1 à 5",
  likert4: "Likert 4 niveaux sans point neutre",
  yesno: "Oui / plutôt oui / plutôt non / non",
  open: "Question ouverte",
  focus: "Question ouverte qualitative"
})[value] || "Likert 1 à 5";

const moodleFeedbackSpec = (item) => {
  const response = item.response.toLowerCase();
  if (response.includes("question ouverte") || response.includes("focus")) {
    return { type: "textarea", presentation: "60|5", options: "" };
  }
  if (response.includes("4 niveaux")) {
    return {
      type: "multichoicerated",
      presentation: "r>>>>>1####1 - Pas du tout d'accord\n|2####2\n|3####3\n|4####4 - Tout à fait d'accord",
      options: "h"
    };
  }
  if (response.includes("oui")) {
    return {
      type: "multichoice",
      presentation: "r>>>>>Oui\n|Plutôt oui\n|Plutôt non\n|Non",
      options: ""
    };
  }
  return {
    type: "multichoicerated",
    presentation: "r>>>>>1####1 - Pas du tout d'accord\n|2####2\n|3####3\n|4####4\n|5####5 - Tout à fait d'accord",
    options: "h"
  };
};

const buildMoodleFeedbackXml = (items) => {
  const rows = items.map((item, index) => {
    const spec = moodleFeedbackSpec(item);
    return `    <ITEM TYPE="${spec.type}" REQUIRED="1">
      <ITEMID>
        ${cdata(index + 1)}
      </ITEMID>
      <ITEMTEXT>
        ${cdata(item.text)}
      </ITEMTEXT>
      <ITEMLABEL>
        ${cdata(safeId(item.id || item.text))}
      </ITEMLABEL>
      <PRESENTATION>
        ${cdata(spec.presentation)}
      </PRESENTATION>
      <OPTIONS>
        ${cdata(spec.options)}
      </OPTIONS>
      <DEPENDITEM>
        ${cdata(0)}
      </DEPENDITEM>
      <DEPENDVALUE>
        ${cdata("")}
      </DEPENDVALUE>
    </ITEM>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<FEEDBACK VERSION="200701" COMMENT="XML-Importfile for mod/feedback">
  <ITEMS>
${rows}
  </ITEMS>
</FEEDBACK>
`;
};

const downloadText = (filename, text, type = "text/plain;charset=utf-8") => {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 500);
};

const renderDimensions = () => {
  const select = $("#dimensionSelect");
  select.innerHTML = dimensions.map((dimension) => `<option value="${dimension.id}">${dimension.label}</option>`).join("");

  const filter = $("#libraryFilter");
  filter.innerHTML = [
    `<option value="all">Tous les items</option>`,
    ...dimensions.map((dimension) => `<option value="${dimension.id}">${dimension.label}</option>`)
  ].join("");
};

const renderMethodMatrix = () => {
  const rows = libraryItems.slice(0, 10);
  $("#methodMatrix").innerHTML = rows.map((item) => {
    const dimension = dimensionById(item.dimension);
    return `
      <tr>
        <td>${dimension.label}</td>
        <td>${dimension.criterion}</td>
        <td>${item.indicator}</td>
        <td>${item.text}</td>
        <td>${item.diagnostic}</td>
        <td>${item.action}</td>
        <td>${item.observable}</td>
      </tr>
    `;
  }).join("");
};

const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;

const auditItem = (text, dimensionId, scale) => {
  const clean = text.trim();
  const lower = clean.toLowerCase();
  const issues = [];
  const strengths = [];
  let score = 100;

  if (!clean) {
    return { score: 0, issues: ["Aucun item à auditer."], strengths: [], suggestion: "Rédiger une affirmation courte du point de vue étudiant." };
  }

  if (clean.length > 150 || countWords(clean) > 24) {
    score -= 18;
    issues.push("L'item est long ; le risque de fatigue et d'ambiguïté augmente.");
  } else {
    strengths.push("Longueur compatible avec une réponse rapide.");
  }

  if (/\bet\b|\bou\b|,/.test(lower) && countWords(clean) > 12) {
    score -= 14;
    issues.push("L'item peut mélanger plusieurs objets ; une réponse unique deviendra difficile à interpréter.");
  } else {
    strengths.push("Objet principal relativement identifiable.");
  }

  if (/\bne\b|\bpas\b|\baucun\b|\bjamais\b|\bsans\b/.test(lower)) {
    score -= 12;
    issues.push("La formulation négative ou restrictive peut ralentir la compréhension.");
  }

  if (/\bcti\b|\bcpf\b|\bpapn\b|\beee\b|\blimesurvey\b|\bue\b|\bec\b/.test(lower)) {
    score -= 10;
    issues.push("Présence de sigle ou de jargon ; l'item doit rester compréhensible sans contexte institutionnel.");
  }

  if (/\bsatisfait\b|\bsatisfaction\b|\bintéressant\b|\bmotivant\b|\bdynamique\b|\butile\b/.test(lower)) {
    score -= 10;
    issues.push("Le vocabulaire de satisfaction ou d'appréciation globale doit être relié à une dimension actionnable.");
  }

  if (/\benseignant\b|\benseignante\b|\bprofesseur\b|\bintervenant\b/.test(lower) && /\bbon\b|\bmauvais\b|\bclair\b|\bdynamique\b|\bintéressant\b|\bsatisfait\b/.test(lower)) {
    score -= 10;
    issues.push("Risque d'effet de halo : l'impression sur une personne peut contaminer la réponse à l'item.");
  }

  if (/\bd'accord\b|\bêtes-vous d'accord\b|\bpensez-vous que\b|\btrouvez-vous que\b/.test(lower)) {
    score -= 8;
    issues.push("La formulation peut favoriser l'acquiescement ; une affirmation simple ou une question plus factuelle serait préférable.");
  }

  if (scale === "open") {
    strengths.push("La question ouverte peut produire un feedback constructif si une analyse thématique est prévue.");
  } else if (scale === "focus") {
    strengths.push("Le focus group est adapté pour comprendre les causes possibles derrière une tendance.");
  } else {
    strengths.push("Échelle fermée exploitable pour dégager une tendance.");
  }

  const dimension = dimensionById(dimensionId);
  strengths.push(`Dimension reliée à un critère : ${dimension.criterion}.`);

  const suggestion = suggestItem(clean, dimensionId, scale);
  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    strengths,
    suggestion,
    action: dimension.action
  };
};

const suggestItem = (text, dimensionId, scale) => {
  if (scale === "focus") {
    return "Qu'est-ce qui, dans cet enseignement, aide ou freine le plus l'atteinte des objectifs annoncés ?";
  }
  const examples = {
    information: "Les objectifs de cet enseignement ont été présentés dès le début du module.",
    alignement: "Les activités durant cet enseignement m'aident à atteindre les objectifs annoncés.",
    supports: "Les ressources proposées facilitent mon apprentissage dans cet enseignement.",
    organisation: "Le déroulement de cet enseignement est clair et prévisible.",
    evaluation: "Les modalités d'évaluation de cet enseignement sont claires.",
    formation: "Je perçois l'intérêt de cet enseignement dans ma formation.",
    engagement: "Les activités proposées me permettent de participer activement à mon apprentissage."
  };

  if (text.length < 40 && text.endsWith("?")) {
    return text.replace("?", ".").replace(/^Avez-vous /i, "J'ai ");
  }
  return examples[dimensionId] || examples.information;
};

const renderAudit = (result) => {
  $("#scorePill")?.replaceChildren(document.createTextNode(`${result.score}`));
  $("#auditResult").innerHTML = `
    <p><strong>Diagnostic</strong> ${helpButton("Diagnostic d'item", "Le diagnostic n'est pas une note de vérité. Il signale la robustesse probable d'une formulation et les points à examiner avant diffusion.", "Aide : diagnostic d'item")} · ${result.score >= 78 ? "item robuste" : result.score >= 58 ? "item à consolider" : "item fragile"}</p>
    ${result.strengths.length ? `<h3 class="card-title-help">Points d'appui ${helpButton("Points d'appui", "Ces éléments indiquent ce qui rend l'item exploitable : clarté, longueur, objet identifiable, échelle compatible ou lien avec une dimension.", "Aide : points d'appui")}</h3><ul>${result.strengths.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    ${result.issues.length ? `<h3 class="card-title-help">Vigilances ${helpButton("Vigilances", "Les vigilances signalent les risques de biais, d'ambiguïté ou d'interprétation fragile. Elles invitent à reformuler ou à compléter par un diagnostic.", "Aide : vigilances")}</h3><ul>${result.issues.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    <h3 class="card-title-help">Reformulation possible ${helpButton("Reformulation", "La reformulation proposée privilégie une phrase courte, affirmative, centrée sur un seul objet observable par l'étudiant.", "Aide : reformulation")}</h3>
    <p>${result.suggestion}</p>
    ${result.action ? `<h3 class="card-title-help">Action reliée ${helpButton("Action reliée", "Une question EEE utile doit pouvoir ouvrir vers une action, un diagnostic complémentaire ou une décision de suivi.", "Aide : action reliée")}</h3><p>${result.action}</p>` : ""}
  `;
};

const renderAuditCards = () => {
  $("#auditChecklist").innerHTML = auditRules.map((rule) => `
    <article class="check-card">
      <h3><i class="fa-solid ${rule.icon}" aria-hidden="true"></i>${rule.title}${helpButton(rule.title, rule.body, `Aide : ${rule.title}`)}</h3>
      <p>${rule.body}</p>
    </article>
  `).join("");
};

const renderLibrary = () => {
  const filter = $("#libraryFilter").value || "all";
  const items = filter === "all" ? libraryItems : libraryItems.filter((item) => item.dimension === filter);
  $("#itemLibrary").innerHTML = items.map((item) => {
    const dimension = dimensionById(item.dimension);
    const selected = state.selection.includes(item.id);
    return `
      <article class="item-card">
        <div class="meta-row">
          <span class="tag ${item.source === "Socle EEE" ? "core" : ""}">${item.source}</span>
          <span class="tag">${dimension.label}</span>
          <span class="tag">${item.response}</span>
          ${helpButton("Item de bibliothèque", `Cet item est relié au critère « ${dimension.criterion} ». Avant de le reprendre, vérifiez qu'il correspond bien à votre contexte, à l'action possible et à la modalité de recueil.`, "Aide : item de bibliothèque")}
        </div>
        <h4>${item.text}</h4>
        <p>${item.indicator}</p>
        <div class="item-actions">
          <button class="icon-button" type="button" data-audit-item="${item.id}" aria-label="Auditer cet item"><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i></button>
          <button class="icon-button" type="button" data-toggle-item="${item.id}" aria-label="${selected ? "Retirer" : "Ajouter"} cet item"><i class="fa-solid ${selected ? "fa-minus" : "fa-plus"}" aria-hidden="true"></i></button>
        </div>
      </article>
    `;
  }).join("");
};

const renderSelection = () => {
  state.selection = state.selection.filter((id) => itemById(id));
  const selectedItems = state.selection.map(itemById).filter(Boolean);
  const dimensionsUsed = new Set(selectedItems.map((item) => item.dimension));
  const hasOpen = selectedItems.some((item) => item.response === "Question ouverte");
  const onlyLikert = selectedItems.length > 0 && selectedItems.every((item) => item.response.includes("Likert"));
  const fatigue = selectedItems.length <= 10 ? "format court" : selectedItems.length <= 15 ? "format à surveiller" : "risque de fatigue";
  const biasNote = selectedItems.length === 0
    ? "Ajoutez des items pour obtenir une vigilance sur les biais du questionnaire."
    : selectedItems.length > 12
    ? "Risque de lassitude : réduire le socle ou déplacer certaines questions vers un recueil qualitatif."
    : onlyLikert
      ? "Surveiller l'acquiescement : diversifier si nécessaire avec une question ouverte ou un diagnostic complémentaire."
      : "La sélection combine des formes de recueil ou prévoit au moins un espace qualitatif.";

  $("#itemCount").textContent = `${selectedItems.length} item${selectedItems.length > 1 ? "s" : ""}`;
  $("#selectionSummary").innerHTML = `
    <strong>${fatigue}</strong>
    <ul>
      <li>${dimensionsUsed.size} dimension${dimensionsUsed.size > 1 ? "s" : ""} couverte${dimensionsUsed.size > 1 ? "s" : ""}.</li>
      <li>${selectedItems.length === 0 ? "Aucun volume à analyser pour l'instant." : hasOpen ? "Prévoir un temps d'analyse thématique pour les réponses ouvertes." : "Volume compatible avec une passation courte."}</li>
      <li>${biasNote}</li>
    </ul>
  `;

  $("#selectedList").innerHTML = selectedItems.length ? selectedItems.map((item, index) => `
    <article class="selected-item">
      <div class="meta-row">
        <span class="tag">${String(index + 1).padStart(2, "0")}</span>
        <span class="tag">${dimensionById(item.dimension).label}</span>
        <span class="tag ${item.source === "Créé dans le studio" ? "warn" : ""}">${item.source}</span>
        ${helpButton("Item sélectionné", "La sélection doit rester courte et équilibrée : trop d'items augmente la lassitude, trop peu de dimensions réduit l'utilité du diagnostic.", "Aide : item sélectionné")}
      </div>
      <h4>${item.text}</h4>
      <p>${item.indicator}</p>
      <div class="item-actions">
        <button class="icon-button" type="button" data-remove-item="${item.id}" aria-label="Retirer cet item"><i class="fa-solid fa-trash-can" aria-hidden="true"></i></button>
      </div>
    </article>
  `).join("") : `<p>Aucun item sélectionné.</p>`;

  $("#exportBox").value = selectedItems.map((item, index) => {
    const dimension = dimensionById(item.dimension);
    return [
      `${index + 1}. ${item.text}`,
      `Thème: ${dimension.label}`,
      `Critère: ${dimension.criterion}`,
      `Indicateur: ${item.indicator}`,
      `Code réponse: ${item.response}`,
      `Méthode de diagnostic: ${item.diagnostic}`,
      `Action à mener: ${item.action}`,
      `Observable: ${item.observable}`
    ].join("\n");
  }).join("\n\n");
  saveSelection();
};

const saveSelection = () => {
  storage.set("evalomatic-selection", JSON.stringify(state.selection));
  storage.set("evalomatic-custom-items", JSON.stringify(state.customItems));
};

const renderRoadmap = () => {
  $("#roadmap").innerHTML = roadmap.map((step) => `
    <li>
      <h3 class="card-title-help">${step.title}${helpButton(step.title, step.body, `Aide : ${step.title}`)}</h3>
      <p>${step.body}</p>
    </li>
  `).join("");
};

const initHelp = () => {
  const helpPanel = $("#contextHelp");
  const helpTitle = $("#contextHelpTitle");
  const helpBody = $("#contextHelpBody");
  const closeButton = helpPanel.querySelector(".context-help-close");
  let activeButton = null;

  const closeHelp = () => {
    const buttonToRestore = activeButton;
    helpPanel.hidden = true;
    if (buttonToRestore) buttonToRestore.setAttribute("aria-expanded", "false");
    activeButton = null;
    if (buttonToRestore) buttonToRestore.focus({ preventScroll: true });
  };

  const openHelp = (button) => {
    if (activeButton && activeButton !== button) activeButton.setAttribute("aria-expanded", "false");
    activeButton = button;
    helpTitle.textContent = button.dataset.helpTitle;
    helpBody.textContent = button.dataset.helpBody;
    helpPanel.hidden = false;
    button.setAttribute("aria-expanded", "true");
    closeButton.focus({ preventScroll: true });
  };

  $$(".help-button[data-help-title]").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    const helpTrigger = event.target.closest(".help-button[data-help-title]");
    if (!helpTrigger) return;
    event.preventDefault();
    event.stopPropagation();
    if (!helpTrigger.hasAttribute("aria-expanded")) helpTrigger.setAttribute("aria-expanded", "false");
    openHelp(helpTrigger);
  });

  closeButton.addEventListener("click", closeHelp);
  helpPanel.addEventListener("click", (event) => {
    if (event.target === helpPanel) closeHelp();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !helpPanel.hidden) closeHelp();
  });
};

const bindEvents = () => {
  $("#auditForm").addEventListener("submit", (event) => {
    event.preventDefault();
    renderAudit(auditItem($("#itemInput").value, $("#dimensionSelect").value, $("#scaleSelect").value));
  });

  $("#addCustomItem").addEventListener("click", () => {
    const text = $("#itemInput").value.trim();
    if (!text) {
      renderAudit(auditItem(text, $("#dimensionSelect").value, $("#scaleSelect").value));
      return;
    }
    const dimension = dimensionById($("#dimensionSelect").value);
    const scale = $("#scaleSelect").value;
    const item = {
      id: `custom-${Date.now()}`,
      source: "Créé dans le studio",
      dimension: dimension.id,
      text,
      indicator: `Un signal étudiant est recueilli sur : ${dimension.criterion}.`,
      response: scaleResponseLabel(scale),
      diagnostic: scale === "focus"
        ? "Utiliser ce prompt comme support de discussion qualitative et coder les thèmes récurrents."
        : "Interpréter le signal avec prudence et vérifier le contexte avant de conclure.",
      action: dimension.action,
      observable: "Action décidée, trace de suivi et évolution du signal au semestre suivant."
    };
    state.customItems.push(item);
    state.selection = [...state.selection, item.id];
    renderAudit(auditItem(text, dimension.id, scale));
    renderLibrary();
    renderSelection();
    $("#addCustomItem").innerHTML = `<i class="fa-solid fa-check" aria-hidden="true"></i> Ajouté`;
    window.setTimeout(() => {
      $("#addCustomItem").innerHTML = `<i class="fa-solid fa-circle-plus" aria-hidden="true"></i> Ajouter`;
    }, 1400);
  });

  $("#useCoreItem").addEventListener("click", () => {
    const item = libraryItems[state.exampleIndex % libraryItems.length];
    state.exampleIndex += 1;
    $("#itemInput").value = item.text;
    $("#dimensionSelect").value = item.dimension;
    renderAudit(auditItem(item.text, item.dimension, $("#scaleSelect").value));
  });

  $("#libraryFilter").addEventListener("change", renderLibrary);

  document.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-item]");
    if (toggleButton) {
      const id = toggleButton.dataset.toggleItem;
      state.selection = state.selection.includes(id) ? state.selection.filter((itemId) => itemId !== id) : [...state.selection, id];
      renderLibrary();
      renderSelection();
    }

    const removeButton = event.target.closest("[data-remove-item]");
    if (removeButton) {
      const removedId = removeButton.dataset.removeItem;
      state.selection = state.selection.filter((itemId) => itemId !== removedId);
      state.customItems = state.customItems.filter((item) => item.id !== removedId);
      renderLibrary();
      renderSelection();
    }

    const auditButton = event.target.closest("[data-audit-item]");
    if (auditButton) {
      const item = itemById(auditButton.dataset.auditItem);
      if (!item) return;
      $("#itemInput").value = item.text;
      $("#dimensionSelect").value = item.dimension;
      renderAudit(auditItem(item.text, item.dimension, $("#scaleSelect").value));
      document.querySelector("#studio").scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  $("#copyExport").addEventListener("click", async () => {
    const text = $("#exportBox").value;
    if (!text) return;
    await navigator.clipboard.writeText(text);
    $("#copyExport").innerHTML = `<i class="fa-solid fa-check" aria-hidden="true"></i> Copié`;
    window.setTimeout(() => {
      $("#copyExport").innerHTML = `<i class="fa-solid fa-copy" aria-hidden="true"></i> Copier`;
    }, 1400);
  });

  $("#clearSelection").addEventListener("click", () => {
    state.selection = [];
    state.customItems = [];
    renderLibrary();
    renderSelection();
  });

  $("#downloadSelectionXml").addEventListener("click", () => {
    const selectedItems = state.selection.map(itemById).filter(Boolean);
    if (!selectedItems.length) {
      window.alert("Ajoutez au moins un item au questionnaire avant de télécharger le XML Moodle Feedback.");
      return;
    }
    downloadText(`eval-o-matic-selection-${new Date().toISOString().slice(0, 10)}.xml`, buildMoodleFeedbackXml(selectedItems), "application/xml;charset=utf-8");
  });

  $("#downloadLibraryXml").addEventListener("click", () => {
    downloadText(`eval-o-matic-exemples-${new Date().toISOString().slice(0, 10)}.xml`, buildMoodleFeedbackXml(libraryItems), "application/xml;charset=utf-8");
  });
};

renderDimensions();
$("#dimensionSelect").value = "alignement";
renderMethodMatrix();
renderAuditCards();
renderRoadmap();
renderLibrary();
renderSelection();
renderAudit(auditItem($("#itemInput").value, $("#dimensionSelect").value, $("#scaleSelect").value));
bindEvents();
initHelp();
