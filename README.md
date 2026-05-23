# Eval-o-matic / EEE Studio

Eval-o-matic est une webapp JEDI-OpenLab pour concevoir, auditer et améliorer des questionnaires d'évaluation des enseignements par les étudiants.

Le projet part des documents de travail EEE, des guides de mise en oeuvre et des ressources sur critères, indicateurs, modalités d'observation et biais d'évaluation.

Le dépôt est maintenant séparé en deux espaces :

- `site/` : webapp statique publique Eval-o-matic ;
- `learnix-eee/` : POC privé d'IA guidée pour construire des items selon la méthode Critère -> Indicateur -> Modalité d'observation.

## Intention

L'application doit aider une équipe pédagogique à :

- clarifier l'objectif d'un questionnaire EEE avant de rédiger les items ;
- distinguer satisfaction, perception étudiante, qualité observable et action d'amélioration ;
- construire chaque question avec le triptyque critère, indicateur, observation ;
- repérer les biais de formulation, de longueur, de neutralité, de double question et de fatigue ;
- produire un socle court, actionnable et compatible avec une démarche qualité ;
- relier les résultats à des diagnostics et à des actions de régulation.

## Version actuelle

Version du site : `2026-05-23.9`

La version initiale contient :

- une structure graphique alignée avec les webapps JEDI existantes ;
- un header sticky, une navigation interne, un footer JEDI et une aide contextuelle ;
- un audit express d'item de questionnaire ;
- un studio de composition avec des items EEE génériques, des items créés par l'utilisateur, une matrice critériée et un audit de formulation ;
- un export XML compatible avec l'import de questions de l'activité Moodle Feedback ;
- une synthèse intégrée des principes de conception et de la méthode critère-indicateur-modalité ;
- une section `Projet en cours` présentant Learnix EEE, son état de POC local et ses spécifications.

## Structure

```text
eval-o-matic/
|-- LICENSE.md
|-- README.md
|-- index.html                 # redirection vers site/index.html
|-- site/
|   |-- index.html             # webapp statique publique
|   `-- assets/
|       |-- app.js
|       `-- styles.css
|-- learnix-eee/
|   |-- SPECIFICATIONS.md      # cadrage complet du POC IA privé
|   |-- README.md
|   |-- app/
|   |-- corpus/
|   |-- data/
|   `-- exports/
`-- docs/
    `-- plan-action.md
```

## Contenu pédagogique

- concepts et intentions d'une EEE : estimer, apprécier, comprendre, améliorer ;
- méthode critériée inspirée de De Ketele et Rogiers : critère, indicateur, modalité d'observation ;
- règles de qualité des questions : clarté, neutralité, unicité de l'objet, anonymat, action possible ;
- studio de conception : bibliothèque d'items, audit, sélection, export textuel et export Moodle Feedback XML ;
- présentation complète du projet Learnix EEE.

## Lancer l'application

L'application publique est statique. Elle peut être ouverte directement depuis `site/index.html`.

Le fichier `index.html` à la racine redirige vers `site/index.html` pour conserver un point d'entrée simple.

## Learnix EEE

Le dossier `learnix-eee/` contient le POC privé du démonstrateur IA :

- intention du projet ;
- justification par le modèle ADDIE ;
- objectifs pédagogiques, fonctionnels, techniques et institutionnels ;
- spécifications fonctionnelles ;
- spécifications techniques ;
- principes de sécurité, de corpus, de prompts, d'exports et d'évaluation.

Learnix EEE dispose maintenant d'un premier scaffold local : Streamlit, RAG documentaire minimal, schémas Pydantic, mode mock, audit heuristique et exports JSON/XML Moodle Feedback. Le projet doit rester privé tant que les questions de corpus, de clé API, de gouvernance et de démonstration ne sont pas stabilisées.

## Licence

Les contenus originaux de cette webapp sont placés sous licence CC0 1.0 Universal.
