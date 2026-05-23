# Plan d'action - Eval-o-matic / EEE Studio

## 1. Stabiliser le cadrage

Objectif : éviter de construire un simple générateur de questions.

- Formaliser les finalités possibles de l'EEE : conformité CTI, amélioration continue, diagnostic enseignant, dialogue étudiant-équipe pédagogique.
- Distinguer le questionnaire de satisfaction, le recueil qualitatif et l'évaluation plus robuste de la qualité.
- Rendre visible le principe du double dispositif repéré dans le projet EEE 2022-2023 : questionnaire court pour la démarche qualité, puis accompagnement qualitatif si une régulation est nécessaire.
- Transformer le cadrage en un formulaire de départ : périmètre, public, timing, niveau d'analyse, acteur responsable, usage prévu des résultats.

## 2. Construire le modèle documentaire

Objectif : faire reposer l'app sur une base pédagogique explicite, sans figer un modèle institutionnel unique.

- Indexer les ressources EEE par type : cadrage projet, procédure, banque de questions, retour d'expérience, article scientifique, ressource critériée.
- Extraire les dimensions récurrentes : objectifs, syllabus, organisation, supports, activités, évaluation, cohérence formation, apprentissage, engagement.
- Définir une fiche de principe pour chaque apport : idée utile, vigilance, réutilisation possible dans l'app.
- Garder la documentation détaillée séparée du studio tant qu'elle n'est pas stabilisée.

## 3. Concevoir l'audit d'item

Objectif : permettre à l'utilisateur de voir pourquoi une question est bonne, fragile ou inutilisable.

- Évaluer chaque item selon des critères simples : clarté, unicité de l'objet, neutralité, longueur, niveau de jargon, réponse actionnable, correspondance critère-indicateur-observation.
- Signaler les biais fréquents : acquiescement, double question, formulation négative, désirabilité sociale, effet de halo, fatigue liée au volume.
- Produire une recommandation de reformulation plutôt qu'un simple score.
- Associer chaque item à une échelle de réponse adaptée : Likert, oui/non nuancé, fréquence, difficulté, charge de travail, champ libre.

## 4. Développer le studio de questionnaire

Objectif : composer un questionnaire court et cohérent.

- Proposer un socle court d'items génériques couvrant les dimensions essentielles d'une EEE.
- Ajouter progressivement une banque d'items organisée par dimensions et par usages.
- Permettre la composition, la suppression et l'export d'un questionnaire.
- Calculer un diagnostic de longueur : nombre d'items, diversité des dimensions, risque de fatigue, présence éventuelle de questions ouvertes.
- Prévoir un mode "questionnaire établissement" et un mode "diagnostic enseignant".

## 5. Relier les résultats aux actions

Objectif : éviter l'impasse du questionnaire sans suite.

- Associer chaque item à une méthode de diagnostic : vérifier le syllabus, auditer l'alignement, conduire un focus group, analyser des ressources, interroger la cohérence du cursus.
- Associer chaque diagnostic à des actions observables : atelier syllabus, accompagnement alignement pédagogique, médiatisation des supports, focus group, retour aux étudiants.
- Afficher la boucle : mesure, interprétation prudente, diagnostic complémentaire, action, suivi.

## 6. Tester l'expérience

Objectif : vérifier que l'outil aide vraiment à mieux concevoir.

- Tester un questionnaire réel du projet EEE dans l'audit.
- Tester un questionnaire externe lorsque la future documentation de référence sera stabilisée.
- Vérifier la lisibilité mobile et desktop.
- Ajuster les règles d'audit avec des exemples de faux positifs.
- Documenter les limites : l'outil ne prouve pas la qualité d'un enseignement ; il aide à concevoir un recueil d'information plus rigoureux.

## 7. Livrables attendus

- Webapp statique JEDI, consultable hors serveur.
- `README.md` de maintenance.
- Documentation de maintenance et principes de conception.
- Studio d'audit et de composition.
- Export JSON/texte du questionnaire.
- Liste de prochaines évolutions : export CSV/LimeSurvey, grille d'analyse de résultats, tableau de bord d'actions.
