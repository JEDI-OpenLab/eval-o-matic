# Studio IA CIM - POC privé pour Eval-o-matic

## Statut du document

Ce document prépare un futur projet séparé.

Il ne décrit pas une fonctionnalité publique d'Eval-o-matic. Il cadre un **démonstrateur privé**, destiné à concevoir et présenter une IA d'aide à la construction de questions d'évaluation des enseignements par les étudiants.

Le projet doit rester distinct du site public tant que les choix techniques, juridiques, pédagogiques et institutionnels ne sont pas stabilisés.

## Résumé court

Le **Studio IA CIM** est un futur module privé d'Eval-o-matic. Il aidera un enseignant, un ingénieur pédagogique ou une équipe formation à construire des items d'EEE en suivant explicitement la méthode :

```text
Critère -> Indicateur -> Modalité d'observation -> Item -> Echelle -> Usage du résultat
```

L'objectif n'est pas de générer automatiquement des questionnaires génériques. L'objectif est de guider la pensée pédagogique : clarifier ce que l'on veut observer, transformer cette intention en critère, identifier des indicateurs observables, choisir une modalité de recueil pertinente, rédiger une question de qualité, puis vérifier ce que la réponse permettra réellement d'interpréter.

## Intention du projet

Les questionnaires d'évaluation des enseignements par les étudiants souffrent souvent de plusieurs fragilités :

- questions trop générales ;
- confusion entre satisfaction, apprentissage, perception, qualité et appréciation personnelle ;
- formulations doubles ou orientées ;
- indicateurs absents ou implicites ;
- questions dont le résultat ne permet aucune action concrète ;
- empilement d'items sans architecture critériée ;
- difficulté à relier les réponses à un diagnostic pédagogique exploitable.

Le Studio IA CIM veut transformer l'IA en **assistant de méthode**. L'IA ne doit pas seulement produire une question : elle doit rendre visible la logique de construction qui mène à cette question.

Le projet s'inscrit dans l'esprit de JEDI-OpenLab : pédagogie ouverte, ingénierie pédagogique sobre, usages raisonnés de l'IA, documentation des choix de conception et production de ressources réutilisables.

## Pourquoi faire ce POC ?

### Raison pédagogique

La construction d'un questionnaire EEE est un acte d'ingénierie pédagogique. Elle oblige à définir ce que l'on veut observer, à distinguer les niveaux d'analyse et à anticiper l'usage des résultats.

Un générateur généraliste peut produire des items plausibles, mais il risque de masquer la méthode. Le POC doit au contraire montrer que l'IA peut soutenir une démarche rigoureuse, explicite et discutable.

### Raison institutionnelle

On peut voir dans ce démonstrateur un exemple concret d'IA utile, maîtrisée et alignée avec une démarche qualité :

- l'IA ne remplace pas le jugement pédagogique ;
- elle structure une tâche complexe ;
- elle documente ses choix ;
- elle réduit les formulations faibles ;
- elle aide à produire des instruments plus actionnables ;
- elle peut nourrir une réflexion plus large sur les usages responsables de l'IA en formation.

### Raison technique

Learnix démontre l'intérêt d'un assistant documentaire câblé sur un corpus via AnythingLLM. Le Studio IA CIM explore autre chose : un **studio métier guidé**, où la logique de travail est codée dans le parcours, les prompts, les schémas de sortie et les règles d'audit.

Le POC doit donc être construit plutôt comme une application Python contrôlée que comme un chatbot libre.

### Raison démonstrateur

Le POC doit être montrable rapidement, sans publication publique, avec une expérience claire :

1. saisir un contexte d'enseignement ;
2. formuler une intention vague ;
3. voir l'IA reconstruire critère, indicateur et modalité ;
4. obtenir plusieurs items ;
5. auditer les items ;
6. exporter une version utilisable.

## Cadre ADDIE

Le projet sera pensé comme un objet d'ingénierie pédagogique selon le modèle ADDIE : Analyse, Design, Développement, Implémentation, Evaluation.

### A - Analyse

#### Besoin principal

Les équipes pédagogiques ont besoin de concevoir des questionnaires EEE plus courts, plus clairs et plus actionnables.

#### Problème à résoudre

Le problème n'est pas le manque d'idées de questions. Le problème est l'absence fréquente d'un raisonnement explicite entre :

- ce que l'on veut apprécier ;
- ce que l'on peut réellement observer ;
- la manière dont on recueille cette observation ;
- ce que l'on peut inférer des réponses ;
- l'action pédagogique possible ensuite.

#### Publics visés

- Ingénieurs pédagogiques.
- Enseignants et enseignants-chercheurs.
- Responsables de formation.
- Equipes qualité et amélioration continue.
- Direction ou équipes de pilotage souhaitant observer un démonstrateur IA responsable.

#### Contraintes

- POC privé, non publié.
- Clé API stockée côté serveur uniquement.
- Aucune donnée personnelle étudiante.
- Corpus documentaire local ou maîtrisé.
- Traçabilité des prompts et des sorties.
- Possibilité d'expliquer le fonctionnement sans entrer dans une complexité technique excessive.

#### Risques

- Génération d'items trop génériques.
- Effet d'autorité de l'IA.
- Confusion entre item de satisfaction et item d'évaluation pédagogique.
- Utilisation publique prématurée.
- Dépôt accidentel de clé API.
- Données sensibles saisies dans le démonstrateur.
- Sur-promesse sur la capacité de l'IA à évaluer la qualité d'un enseignement.

### D - Design

#### Principe pédagogique

L'application doit faire apprendre la méthode en faisant produire. Elle doit guider l'utilisateur dans une progression :

```text
Intention vague -> Clarification -> Critère -> Indicateur -> Modalité -> Item -> Audit -> Usage
```

#### Principe d'interaction

L'interface doit être un studio guidé, pas une fenêtre de chat libre.

Le chat peut exister comme aide secondaire, mais le coeur de l'expérience doit être composé de formulaires, cartes, étapes, validations, variantes et exports.

#### Principe IA

L'IA doit répondre sous forme structurée, idéalement JSON validé par schéma. Les sorties doivent être relues par l'application avant affichage.

#### Principe de prudence

Le Studio IA CIM ne doit jamais affirmer qu'un item mesure directement la qualité d'un enseignement. Il doit parler d'observations, de perceptions, d'indices, de signaux et d'actions possibles.

### D - Développement

Le développement doit commencer par un POC local simple, puis évoluer vers une intégration éventuelle dans Eval-o-matic.

Pile recommandée pour le POC :

- Python ;
- Streamlit pour une première interface rapide ;
- client OpenAI ou API compatible OpenAI ;
- Pydantic pour valider les sorties structurées ;
- fichier `.env` local pour la clé API ;
- fichiers Markdown/texte pour le corpus méthode ;
- JSON ou SQLite pour sauvegarder des sessions de test ;
- moteur RAG optionnel dans une deuxième phase.

### I - Implémentation

Le POC doit être utilisable localement par une seule personne.

Il doit permettre une démonstration maîtrisée :

- corpus préparé ;
- exemples de départ ;
- cas d'usage scénarisés ;
- données fictives ;
- export propre ;
- logs de test anonymes.

### E - Evaluation

Le POC devra être évalué sur deux plans.

Evaluation pédagogique :

- les items sont-ils construits selon la méthode CIM ?
- les critères sont-ils explicites ?
- les indicateurs sont-ils observables ?
- les modalités de recueil sont-elles adaptées ?
- les questions sont-elles claires, neutres, courtes et actionnables ?
- les limites d'interprétation sont-elles visibles ?

Evaluation technique :

- la clé API reste-t-elle côté serveur ?
- les sorties respectent-elles le schéma attendu ?
- les erreurs sont-elles compréhensibles ?
- les coûts d'appel sont-ils maîtrisés ?
- les prompts sont-ils versionnés ?
- le corpus est-il traçable ?

## Objectifs du projet

### Objectif général

Créer un démonstrateur privé d'IA capable d'accompagner la conception d'items EEE selon la méthode Critère -> Indicateur -> Modalité d'observation.

### Objectifs pédagogiques

- Aider à distinguer critère, indicateur, modalité d'observation, question et usage des résultats.
- Former implicitement l'utilisateur à une construction critériée.
- Réduire les formulations floues, doubles, orientées ou non actionnables.
- Relier chaque item à une possibilité de diagnostic ou d'amélioration.
- Favoriser des questionnaires plus courts, plus cohérents et mieux justifiés.

### Objectifs fonctionnels

- Générer des items à partir d'une intention ou d'un contexte.
- Auditer un item existant.
- Proposer plusieurs reformulations.
- Expliquer la logique CIM retenue.
- Recommander une échelle ou une modalité de réponse.
- Construire une mini-banque d'items validés.
- Exporter des items en texte, JSON et, à terme, XML Moodle Feedback.

### Objectifs techniques

- Utiliser une clé API sans l'exposer dans le navigateur.
- Produire des réponses structurées et validables.
- Séparer clairement interface, logique métier, prompts, corpus et exports.
- Préparer l'intégration future avec Eval-o-matic.
- Documenter les choix d'architecture.

### Objectifs de démonstration

- Montrer un usage responsable et concret de l'IA en ingénierie pédagogique.
- Montrer que l'IA peut soutenir une méthode plutôt que remplacer l'expertise.
- Fournir un support de discussion à la Direction de Centrale Lille.
- Tester l'acceptabilité d'un studio IA privé avant toute réflexion de déploiement.

## Périmètre

### Inclus dans le POC

- Interface locale privée.
- Génération guidée d'items.
- Audit d'items existants.
- Utilisation d'un corpus méthode.
- Prompts spécialisés EEE.
- Sorties structurées.
- Export texte et JSON.
- Scénarios de démonstration.
- Documentation complète.

### Hors périmètre dans un premier temps

- Publication publique.
- Authentification multi-utilisateurs.
- Analyse de données étudiantes réelles.
- Notation d'enseignants.
- Connexion directe à Moodle en production.
- Envoi automatique de questionnaires.
- Tableau de bord institutionnel complet.
- Hébergement serveur.
- Ouverture à des utilisateurs non accompagnés.

## Utilisateurs et rôles

### Utilisateur concepteur

Personne qui construit un questionnaire ou un item.

Besoins :

- aller vite sans perdre la rigueur ;
- comprendre les choix proposés ;
- obtenir une formulation exploitable ;
- garder la main sur la validation finale.

### Ingénieur pédagogique

Personne qui accompagne une équipe.

Besoins :

- expliquer la méthode ;
- comparer plusieurs formulations ;
- transformer une intention vague en item robuste ;
- produire une trace pour discussion.

### Démonstrateur

Personne qui présente l'outil à une direction ou à des collègues.

Besoins :

- scénario court ;
- exemples propres ;
- résultats lisibles ;
- limites explicitement affichées.

## Méthode CIM

### Critère

Le critère désigne la dimension de qualité que l'on veut apprécier.

Exemples :

- clarté des attendus ;
- cohérence entre objectifs et évaluations ;
- accessibilité des ressources ;
- lisibilité de l'organisation ;
- perception de la charge de travail ;
- soutien à l'autonomie ;
- utilité des feedbacks ;
- engagement dans les activités.

### Indicateur

L'indicateur précise ce qui rend le critère observable dans l'expérience étudiante.

Exemple :

```text
Critère : clarté des attendus
Indicateur : les étudiants identifient ce qui est attendu dans les travaux à rendre.
```

### Modalité d'observation

La modalité précise comment l'information sera recueillie.

Exemples :

- échelle d'accord ;
- échelle de fréquence ;
- échelle de difficulté ;
- choix multiple ;
- question ouverte ;
- commentaire facultatif ;
- auto-positionnement ;
- sélection de priorités.

### Item

L'item est la formulation proposée à l'étudiant.

Il doit être clair, univoque, neutre, compréhensible, relié à un indicateur et exploitable.

### Echelle

L'échelle doit correspondre à la nature de l'information cherchée.

Exemples :

- accord : "Pas du tout d'accord" à "Tout à fait d'accord" ;
- fréquence : "Jamais" à "Toujours" ;
- difficulté : "Très difficile" à "Très facile" ;
- charge : estimation de temps ou niveau perçu ;
- question ouverte : réponse libre courte ou commentaire contextualisé.

### Usage du résultat

Chaque item doit indiquer ce que le résultat pourra aider à faire :

- améliorer une consigne ;
- clarifier un syllabus ;
- ajuster une activité ;
- revoir une modalité d'évaluation ;
- déclencher un focus group ;
- analyser un support ;
- organiser un retour aux étudiants.

## Parcours utilisateur cible

### Etape 1 - Décrire le contexte

L'utilisateur renseigne :

- type d'enseignement ;
- niveau ;
- effectif ;
- modalité : présentiel, hybride, distance ;
- durée ;
- type d'évaluation ;
- enjeu principal ;
- moment de passation ;
- usage prévu des résultats.

### Etape 2 - Formuler l'intention

L'utilisateur décrit ce qu'il veut comprendre.

Exemples :

- "Je veux savoir si mon cours est clair."
- "Je veux savoir si les étudiants comprennent l'utilité des activités."
- "Je veux vérifier que l'évaluation est perçue comme cohérente."
- "Je veux savoir si la charge de travail est tenable."

### Etape 3 - Clarifier la finalité

Le système demande ou infère :

- s'agit-il d'une perception ?
- d'un niveau de satisfaction ?
- d'un indice de compréhension ?
- d'un retour sur l'organisation ?
- d'une piste d'amélioration ?

### Etape 4 - Construire la chaîne CIM

L'IA propose :

- un critère ;
- un indicateur ;
- une modalité d'observation ;
- une justification ;
- les limites d'interprétation.

### Etape 5 - Générer des items

L'IA propose plusieurs formulations :

- version courte ;
- version institutionnelle ;
- version orientée étudiant ;
- version ouverte ;
- version à échelle.

### Etape 6 - Auditer les items

Chaque item est évalué selon :

- clarté ;
- unicité de l'objet ;
- neutralité ;
- longueur ;
- vocabulaire ;
- actionnabilité ;
- correspondance critère-indicateur-modalité ;
- risque de biais.

### Etape 7 - Valider ou améliorer

L'utilisateur peut :

- accepter ;
- modifier ;
- demander une reformulation ;
- changer la modalité ;
- sauvegarder dans une banque locale.

### Etape 8 - Exporter

Exports attendus :

- texte simple ;
- Markdown ;
- JSON structuré ;
- XML Moodle Feedback dans une phase ultérieure.

## Spécifications fonctionnelles

### F01 - Tableau de bord du studio

Le tableau de bord présente :

- l'état du projet ;
- la session en cours ;
- les items créés ;
- les items à auditer ;
- les exports disponibles ;
- les limites d'utilisation.

### F02 - Formulaire de contexte

Le formulaire collecte les informations utiles à la génération.

Champs recommandés :

- titre de l'enseignement ;
- niveau ;
- nombre approximatif d'étudiants ;
- format ;
- durée ;
- type d'activités ;
- type d'évaluation ;
- objectif de l'EEE ;
- contrainte de longueur ;
- langue de sortie.

### F03 - Assistant de clarification

L'assistant transforme une intention vague en intention exploitable.

Il peut poser des questions de clarification, mais doit aussi être capable de proposer une première interprétation.

### F04 - Générateur CIM

Le générateur produit une chaîne complète :

- critère ;
- indicateur ;
- modalité d'observation ;
- item ;
- échelle ;
- usage du résultat ;
- limites d'interprétation.

### F05 - Générateur de variantes

Le système propose plusieurs versions d'un même item :

- neutre ;
- plus courte ;
- plus explicite ;
- plus accessible ;
- plus adaptée à une enquête institutionnelle ;
- ouverte ou fermée.

### F06 - Audit d'item

L'utilisateur peut coller un item existant et obtenir :

- score qualitatif ;
- problèmes détectés ;
- reformulation proposée ;
- justification ;
- chaîne CIM reconstruite ;
- niveau de confiance ;
- recommandations d'usage.

### F07 - Banque locale d'items

Les items validés peuvent être ajoutés à une banque locale.

Chaque item conserve :

- son texte ;
- son critère ;
- son indicateur ;
- sa modalité ;
- son échelle ;
- ses tags ;
- son statut ;
- sa date de création ;
- la version du prompt utilisée.

### F08 - Comparateur d'items

Le système peut comparer deux formulations et expliquer laquelle est préférable selon la méthode.

### F09 - Export

Exports minimum :

- Markdown ;
- JSON ;
- presse-papiers.

Exports souhaités ensuite :

- CSV ;
- XML Moodle Feedback ;
- import vers Eval-o-matic public ;
- fiche PDF de synthèse.

### F10 - Journal de démonstration

Le POC doit pouvoir conserver un journal local de démonstration :

- intention initiale ;
- réponse IA ;
- item retenu ;
- modifications humaines ;
- décision finale.

Le journal ne doit pas contenir de données personnelles.

## Schéma de sortie attendu

Chaque génération doit idéalement produire un objet structuré.

```json
{
  "contexte": {
    "enseignement": "",
    "niveau": "",
    "format": "",
    "objectif_questionnaire": ""
  },
  "intention_initiale": "",
  "chaine_cim": {
    "critere": "",
    "indicateur": "",
    "modalite_observation": "",
    "justification": "",
    "limites_interpretation": ""
  },
  "item": {
    "texte": "",
    "type_reponse": "",
    "echelle": [],
    "commentaire_facultatif": false
  },
  "audit": {
    "clarte": 0,
    "unicite": 0,
    "neutralite": 0,
    "actionnabilite": 0,
    "risques": [],
    "ameliorations": []
  },
  "usage_resultat": {
    "interpretation_prudente": "",
    "actions_possibles": [],
    "diagnostics_complementaires": []
  },
  "tracabilite": {
    "sources_methode": [],
    "version_prompt": "",
    "date_generation": ""
  }
}
```

## Règles de qualité des items

Un item doit :

- porter sur un seul objet ;
- être compréhensible sans jargon inutile ;
- éviter les jugements sur la personne enseignante ;
- éviter les formulations culpabilisantes ;
- être formulé du point de vue de l'expérience étudiante ;
- correspondre à un indicateur observable ;
- utiliser une échelle adaptée ;
- déboucher sur une action possible ;
- éviter les termes vagues comme "bien", "intéressant", "adapté" sans précision ;
- éviter les doubles questions ;
- éviter les négations complexes ;
- ne pas faire promettre à l'étudiant ce qu'il ne peut pas savoir.

## Biais à détecter

Le studio doit signaler :

- double question ;
- formulation orientée ;
- formulation trop générale ;
- question non actionnable ;
- confusion entre satisfaction et apprentissage ;
- effet de halo ;
- désirabilité sociale ;
- acquiescement ;
- jargon pédagogique ;
- item trop long ;
- item portant sur une intention non observable ;
- échelle incohérente avec la question.

## Architecture technique recommandée

### Phase 1 - POC local rapide

```text
studio-ia-cim/
  SPECIFICATIONS.md
  app/
    main.py
    config.py
    llm_client.py
    schemas.py
    services/
      cim_generator.py
      item_auditor.py
      exporter.py
    prompts/
      system.md
      generation_cim.md
      audit_item.md
      reformulation.md
    data/
      sessions/
      item_bank.json
    corpus/
      sources/
      processed/
```

Interface :

- Streamlit pour le POC ;
- lancement local ;
- aucune clé dans le front ;
- sauvegarde locale.

### Phase 2 - POC renforcé

Ajouter :

- indexation du corpus ;
- recherche documentaire locale ;
- citations de sources internes ;
- tests de non-régression ;
- export Moodle Feedback XML ;
- mode démonstration guidée.

### Phase 3 - Intégration Eval-o-matic

Deux options :

1. garder le studio IA comme app privée séparée ;
2. intégrer un onglet privé dans Eval-o-matic avec backend Python.

Architecture cible :

```text
Eval-o-matic public
  site/
    index.html
    assets/

Studio IA privé
  backend Python
  prompts
  corpus
  exports
  sessions locales
```

## Stack technique proposée

### Backend

- Python 3.11 ou supérieur.
- Streamlit pour la première version.
- FastAPI possible si l'on veut ensuite séparer front et backend.
- Pydantic pour les modèles de données.
- `python-dotenv` pour la configuration locale.
- Client API compatible OpenAI.

### Données

- JSON pour les premières sessions.
- SQLite si les sessions deviennent nombreuses.
- Dossier `corpus/` pour les sources préparées.
- Dossier `exports/` pour les sorties générées.

### Corpus

Le corpus peut commencer par des fichiers Markdown très contrôlés :

- méthode Critère -> Indicateur -> Modalité ;
- principes de formulation d'items ;
- biais fréquents ;
- exemples bons/faibles ;
- extraits méthodologiques EEE ;
- règles d'export Moodle Feedback.

Le RAG complet n'est pas obligatoire au démarrage. Pour un POC métier, il peut être plus robuste de commencer avec un **pack méthode court et stable** injecté dans les prompts.

### RAG éventuel

Si le corpus devient plus important :

- extraction des documents en texte/Markdown ;
- découpage par section ;
- métadonnées : source, type, thème, date, statut de diffusion ;
- embeddings ;
- base locale type Chroma, FAISS ou équivalent ;
- récupération des extraits utiles selon l'intention ;
- citation des extraits utilisés dans la sortie.

## Gestion de la clé API

Règles impératives :

- clé API uniquement dans un fichier `.env` local non versionné ;
- jamais de clé dans `index.html`, JavaScript ou fichier public ;
- jamais de clé dans un export ;
- prévoir un `.env.example` sans secret ;
- prévoir un contrôle au démarrage si la clé manque ;
- documenter le coût approximatif des appels.

Variables possibles :

```text
OPENAI_API_KEY=
OPENAI_BASE_URL=
OPENAI_MODEL=
OPENAI_EMBEDDING_MODEL=
APP_ENV=local
```

## Prompts

Les prompts doivent être versionnés et séparés du code.

### Prompt système

Rôle :

- assistant d'ingénierie pédagogique spécialisé EEE ;
- expert de la méthode CIM ;
- prudent sur l'interprétation ;
- orienté amélioration continue ;
- refus des données personnelles ;
- réponse structurée.

### Prompt de génération CIM

Entrées :

- contexte ;
- intention ;
- contraintes ;
- extrait méthode.

Sortie :

- chaîne CIM ;
- item ;
- variantes ;
- audit ;
- usage.

### Prompt d'audit

Entrée :

- item existant ;
- contexte éventuel.

Sortie :

- problèmes ;
- score ;
- reformulation ;
- justification.

### Prompt de reformulation

Entrée :

- item ;
- problème détecté ;
- style demandé.

Sortie :

- item amélioré ;
- ce qui a changé ;
- vigilance.

## Sécurité et éthique

### Données

Le POC ne doit pas manipuler de données étudiantes réelles.

Données autorisées :

- exemples fictifs ;
- intitulés de cours génériques ;
- intentions pédagogiques ;
- items anonymes ;
- corpus méthodologique.

Données interdites :

- noms d'étudiants ;
- verbatims identifiants ;
- résultats individuels ;
- données sensibles ;
- clés API ;
- documents internes non autorisés à l'usage.

### Positionnement

Le système doit rappeler :

- qu'il aide à concevoir ;
- qu'il ne valide pas institutionnellement un questionnaire ;
- qu'il ne mesure pas directement la qualité d'un enseignement ;
- que l'utilisateur reste responsable de la validation finale.

## Critères de réussite du POC

Le POC est considéré comme réussi si :

- une intention vague peut être transformée en chaîne CIM claire ;
- les items générés sont meilleurs que des formulations spontanées génériques ;
- l'utilisateur comprend pourquoi l'item est proposé ;
- l'audit détecte les défauts fréquents ;
- les sorties sont structurées et exportables ;
- la démonstration tient en moins de dix minutes ;
- la clé API reste protégée ;
- le projet peut être présenté comme un exemple d'IA responsable.

## Scénario de démonstration conseillé

### Démo 1 - Intention vague

Entrée :

```text
Je veux savoir si mon cours est clair.
```

Sortie attendue :

- critère : lisibilité de l'organisation pédagogique ;
- indicateur : les étudiants identifient les attendus, échéances et ressources ;
- modalité : échelle d'accord + commentaire facultatif ;
- item : "Les consignes et informations disponibles m'ont permis d'identifier clairement ce qui était attendu de moi dans cet enseignement."

### Démo 2 - Audit d'un mauvais item

Entrée :

```text
Le cours était-il intéressant et bien organisé ?
```

Sortie attendue :

- double objet ;
- termes vagues ;
- confusion intérêt/organisation ;
- proposition de deux items distincts ;
- explication de l'usage possible.

### Démo 3 - Export

L'utilisateur sélectionne trois items, les exporte en Markdown et JSON, puis montre comment ces items pourraient rejoindre Eval-o-matic.

## Feuille de route

### Phase 0 - Cadrage

- Valider le nom du POC.
- Choisir Streamlit ou FastAPI.
- Sélectionner cinq à dix documents méthode.
- Rédiger trois scénarios de démonstration.

### Phase 1 - Prototype minimal

- Interface locale.
- Formulaire contexte.
- Génération CIM.
- Audit simple.
- Export Markdown/JSON.

### Phase 2 - Qualité pédagogique

- Ajouter banque d'exemples.
- Ajouter scores d'audit.
- Ajouter règles de biais.
- Ajouter variantes d'items.
- Ajouter tests sur cas types.

### Phase 3 - Corpus

- Préparer corpus Markdown.
- Ajouter recherche documentaire.
- Citer les sources internes utilisées.
- Tester avec et sans RAG.

### Phase 4 - Démonstration Direction

- Préparer scénario de 10 minutes.
- Préparer cas fictifs.
- Préparer message sur limites et gouvernance.
- Préparer capture ou version locale stable.

### Phase 5 - Intégration éventuelle

- Brancher export vers Eval-o-matic.
- Ajouter XML Moodle Feedback.
- Prévoir un backend privé si l'intégration au site est souhaitée.

## Noms possibles

Noms orientés JEDI :

- **Item-o-matic** ;
- **CIM Studio** ;
- **EEE Copilot** ;
- **Questionnaire Studio IA** ;
- **Eval-o-matic Studio IA**.

Nom recommandé pour le dossier de travail :

```text
studio-ia-cim
```

Nom recommandé pour la démonstration :

```text
Eval-o-matic Studio IA
```

## Décisions ouvertes

- Choisir Streamlit ou FastAPI pour le premier POC.
- Définir la structure exacte du corpus.
- Choisir le modèle API.
- Définir les premiers prompts.
- Définir le schéma Pydantic.
- Définir les exports prioritaires.
- Décider si l'audit doit produire un score numérique ou une appréciation qualitative.
- Décider si les sessions doivent être sauvegardées par défaut.

## Definition of Done du premier POC

Le premier POC doit permettre de :

1. lancer une app locale ;
2. saisir un contexte et une intention ;
3. générer une chaîne CIM complète ;
4. obtenir au moins trois variantes d'item ;
5. auditer un item existant ;
6. exporter une sélection en Markdown et JSON ;
7. expliquer les limites de l'outil ;
8. fonctionner sans exposer la clé API ;
9. être compréhensible par une personne non technicienne ;
10. servir de base à une démonstration devant la Direction.
