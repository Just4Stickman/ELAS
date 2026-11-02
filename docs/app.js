"use strict";

const translations = {
    en: {
        skipLink: "Skip to content",
        navAbout: "About",
        navCapabilities: "Capabilities",
        navMethodology: "Methodology",
        navDocumentation: "Documentation",
        heroEyebrow: "A structured approach to legal reasoning",
        heroTitle: 'Understand the law. <span>Analyze with clarity.</span>',
        heroDescription: "ELAS is a comprehensive legal analysis framework designed to examine legal questions, evaluate evidence, identify applicable law and communicate conclusions with clarity, transparency and methodological consistency.",
        heroPrimary: "Explore the documentation",
        heroSecondary: "View on GitHub",
        heroMetaOne: "Structured methodology",
        heroMetaTwo: "Jurisdiction-aware analysis",
        heroMetaThree: "Transparent conclusions",
        aboutLabel: "Introduction",
        aboutTitle: "A systematic approach to legal analysis",
        aboutDescription: "Legal questions often involve multiple jurisdictions, incomplete information, conflicting sources and complex interpretations. ELAS provides a structured methodology for examining these elements without presenting uncertainty as certainty.",
        aboutCardOneTitle: "Structured reasoning",
        aboutCardOneText: "Break complex legal questions into clearly defined analytical steps, relevant facts and legal issues.",
        aboutCardTwoTitle: "Evidence-based conclusions",
        aboutCardTwoText: "Distinguish established facts, assumptions, interpretations and unresolved uncertainties.",
        aboutCardThreeTitle: "Transparent assessment",
        aboutCardThreeText: "Explain the reasoning behind conclusions and identify the limitations of available information.",
        capabilitiesLabel: "Core capabilities",
        capabilitiesTitle: "What ELAS is designed to examine",
        capabilitiesDescription: "The framework organizes legal analysis into distinct areas to support consistent, understandable and carefully qualified assessments.",
        featureOneTitle: "Legal classification",
        featureOneText: "Assess whether a described action appears lawful, unlawful or legally uncertain under the identified legal framework.",
        featureTwoTitle: "Jurisdiction identification",
        featureTwoText: "Identify the relevant country, legal system, territorial scope and potentially applicable international rules.",
        featureThreeTitle: "Legal basis",
        featureThreeText: "Identify relevant statutes, regulations, principles and authoritative legal sources where available.",
        featureFourTitle: "Evidence assessment",
        featureFourText: "Examine the reliability, relevance and completeness of the information supporting a legal assessment.",
        featureFiveTitle: "Risk identification",
        featureFiveText: "Highlight possible legal consequences, procedural concerns and relevant risk factors.",
        featureSixTitle: "Uncertainty analysis",
        featureSixText: "Identify missing facts, disputed interpretations and areas where a definitive conclusion cannot responsibly be reached.",
        methodologyLabel: "Analytical methodology",
        methodologyTitle: "From question to reasoned conclusion",
        methodologyDescription: "ELAS follows a logical analytical structure that separates factual examination from legal interpretation and final assessment.",
        methodOneTitle: "Define the question",
        methodOneText: "Establish the relevant facts, legal question, parties and jurisdiction.",
        methodTwoTitle: "Examine the law",
        methodTwoText: "Identify applicable rules, legal principles and relevant authorities.",
        methodThreeTitle: "Apply and evaluate",
        methodThreeText: "Compare the facts with the legal requirements and assess competing interpretations.",
        methodFourTitle: "Present the result",
        methodFourText: "Explain the conclusion, legal basis, risks and remaining uncertainties.",
        documentationLabel: "Project documentation",
        documentationTitle: "Explore the ELAS project",
        documentationDescription: "Access the source code, project documentation, usage information and development resources through the official GitHub repository.",
        documentationButton: "Open GitHub repository",
        disclaimerLabel: "Important information",
        disclaimerTitle: "Legal information and limitations",
        disclaimerHeading: "Informational purposes only",
        disclaimerText: "ELAS is an analytical framework and informational resource. It does not constitute legal advice, establish an attorney-client relationship or replace consultation with a qualified legal professional. Legal outcomes depend on the specific facts, applicable jurisdiction, current law and competent authorities. Always independently verify legal sources and seek qualified legal assistance when necessary.",
        footerDisclaimer: "Disclaimer",
        footerBackToTop: "Back to top"
    },

    de: {
        skipLink: "Zum Inhalt springen",
        navAbout: "Über ELAS",
        navCapabilities: "Funktionen",
        navMethodology: "Methodik",
        navDocumentation: "Dokumentation",
        heroEyebrow: "Ein strukturierter Ansatz für juristische Analysen",
        heroTitle: 'Recht verstehen. <span>Klarheit schaffen.</span>',
        heroDescription: "ELAS ist ein umfassendes Framework für juristische Analysen. Es untersucht Rechtsfragen, bewertet Beweismittel, identifiziert anwendbares Recht und formuliert nachvollziehbare Ergebnisse auf Grundlage einer transparenten und strukturierten Methodik.",
        heroPrimary: "Dokumentation ansehen",
        heroSecondary: "Auf GitHub ansehen",
        heroMetaOne: "Strukturierte Methodik",
        heroMetaTwo: "Berücksichtigung der Rechtsordnung",
        heroMetaThree: "Nachvollziehbare Ergebnisse",
        aboutLabel: "Einführung",
        aboutTitle: "Ein systematischer Ansatz für juristische Analysen",
        aboutDescription: "Rechtsfragen können verschiedene Rechtsordnungen, unvollständige Informationen, widersprüchliche Quellen und komplexe Auslegungen betreffen. ELAS bietet eine strukturierte Methode zur Untersuchung dieser Aspekte, ohne Unsicherheit als Gewissheit darzustellen.",
        aboutCardOneTitle: "Strukturiertes Denken",
        aboutCardOneText: "Komplexe Rechtsfragen werden in klar definierte Analyseschritte, relevante Tatsachen und Rechtsprobleme unterteilt.",
        aboutCardTwoTitle: "Begründete Ergebnisse",
        aboutCardTwoText: "Gesicherte Tatsachen, Annahmen, Auslegungen und ungeklärte Unsicherheiten werden voneinander getrennt.",
        aboutCardThreeTitle: "Transparente Bewertung",
        aboutCardThreeText: "Die Begründung von Ergebnissen wird erläutert und die Grenzen der verfügbaren Informationen werden aufgezeigt.",
        capabilitiesLabel: "Kernfunktionen",
        capabilitiesTitle: "Was ELAS untersucht",
        capabilitiesDescription: "Das Framework gliedert juristische Analysen in einzelne Bereiche und unterstützt dadurch nachvollziehbare und sorgfältig eingeordnete Bewertungen.",
        featureOneTitle: "Rechtliche Einordnung",
        featureOneText: "Bewertung, ob eine beschriebene Handlung nach dem identifizierten Rechtsrahmen rechtmäßig, rechtswidrig oder rechtlich unklar erscheint.",
        featureTwoTitle: "Bestimmung der Rechtsordnung",
        featureTwoText: "Identifikation des relevanten Staates, Rechtssystems, räumlichen Geltungsbereichs und möglicher internationaler Vorschriften.",
        featureThreeTitle: "Rechtliche Grundlagen",
        featureThreeText: "Identifikation relevanter Gesetze, Verordnungen, Rechtsgrundsätze und verfügbarer maßgeblicher Quellen.",
        featureFourTitle: "Beweisbewertung",
        featureFourText: "Untersuchung der Zuverlässigkeit, Relevanz und Vollständigkeit der Informationen, die eine rechtliche Bewertung stützen.",
        featureFiveTitle: "Risikoidentifikation",
        featureFiveText: "Aufzeigen möglicher rechtlicher Folgen, verfahrensrechtlicher Probleme und relevanter Risikofaktoren.",
        featureSixTitle: "Unsicherheitsanalyse",
        featureSixText: "Erkennung fehlender Tatsachen, strittiger Auslegungen und Bereiche, in denen keine verantwortbare eindeutige Schlussfolgerung möglich ist.",
        methodologyLabel: "Analytische Methodik",
        methodologyTitle: "Von der Frage zur begründeten Schlussfolgerung",
        methodologyDescription: "ELAS verwendet eine logische Analysestruktur, die die Untersuchung von Tatsachen von der rechtlichen Auslegung und abschließenden Bewertung trennt.",
        methodOneTitle: "Fragestellung definieren",
        methodOneText: "Relevante Tatsachen, Rechtsfrage, Beteiligte und Rechtsordnung bestimmen.",
        methodTwoTitle: "Rechtslage untersuchen",
        methodTwoText: "Anwendbare Vorschriften, Rechtsgrundsätze und maßgebliche Entscheidungen identifizieren.",
        methodThreeTitle: "Anwenden und bewerten",
        methodThreeText: "Tatsachen mit den rechtlichen Voraussetzungen vergleichen und unterschiedliche Auslegungen prüfen.",
        methodFourTitle: "Ergebnis darstellen",
        methodFourText: "Schlussfolgerung, rechtliche Grundlage, Risiken und verbleibende Unsicherheiten erläutern.",
        documentationLabel: "Projektdokumentation",
        documentationTitle: "Das ELAS-Projekt entdecken",
        documentationDescription: "Quellcode, Projektdokumentation, Nutzungshinweise und Entwicklungsressourcen sind über das offizielle GitHub-Repository verfügbar.",
        documentationButton: "GitHub-Repository öffnen",
        disclaimerLabel: "Wichtige Informationen",
        disclaimerTitle: "Rechtliche Hinweise und Einschränkungen",
        disclaimerHeading: "Ausschließlich zu Informationszwecken",
        disclaimerText: "ELAS ist ein analytisches Framework und eine Informationsressource. Es stellt keine Rechtsberatung dar, begründet kein Mandatsverhältnis und ersetzt nicht die Beratung durch qualifizierte juristische Fachkräfte. Rechtliche Ergebnisse hängen von den konkreten Tatsachen, der anwendbaren Rechtsordnung, der aktuellen Rechtslage und den zuständigen Behörden ab. Überprüfe rechtliche Quellen eigenständig und hole bei Bedarf qualifizierte rechtliche Unterstützung ein.",
        footerDisclaimer: "Haftungshinweis",
        footerBackToTop: "Nach oben"
    },

    es: {
        skipLink: "Saltar al contenido",
        navAbout: "Acerca de",
        navCapabilities: "Funciones",
        navMethodology: "Metodología",
        navDocumentation: "Documentación",
        heroEyebrow: "Un enfoque estructurado del razonamiento jurídico",
        heroTitle: 'Comprender el derecho. <span>Analizar con claridad.</span>',
        heroDescription: "ELAS es un marco integral de análisis jurídico diseñado para examinar cuestiones legales, evaluar pruebas, identificar la legislación aplicable y comunicar conclusiones de forma clara y transparente.",
        heroPrimary: "Explorar la documentación",
        heroSecondary: "Ver en GitHub",
        heroMetaOne: "Metodología estructurada",
        heroMetaTwo: "Análisis según jurisdicción",
        heroMetaThree: "Conclusiones transparentes",
        aboutLabel: "Introducción",
        aboutTitle: "Un enfoque sistemático del análisis jurídico",
        aboutDescription: "Las cuestiones jurídicas pueden implicar distintas jurisdicciones, información incompleta, fuentes contradictorias e interpretaciones complejas. ELAS proporciona una metodología estructurada para examinar estos elementos.",
        aboutCardOneTitle: "Razonamiento estructurado",
        aboutCardOneText: "Dividir cuestiones jurídicas complejas en pasos analíticos claramente definidos.",
        aboutCardTwoTitle: "Conclusiones fundamentadas",
        aboutCardTwoText: "Distinguir hechos establecidos, suposiciones, interpretaciones e incertidumbres.",
        aboutCardThreeTitle: "Evaluación transparente",
        aboutCardThreeText: "Explicar el razonamiento y señalar las limitaciones de la información disponible.",
        capabilitiesLabel: "Funciones principales",
        capabilitiesTitle: "Qué está diseñado para examinar ELAS",
        capabilitiesDescription: "El marco organiza el análisis jurídico en áreas diferenciadas para facilitar evaluaciones coherentes y comprensibles.",
        featureOneTitle: "Clasificación jurídica",
        featureOneText: "Evaluar si una acción parece lícita, ilícita o jurídicamente incierta.",
        featureTwoTitle: "Identificación de jurisdicción",
        featureTwoText: "Identificar el país, sistema jurídico, ámbito territorial y normas internacionales aplicables.",
        featureThreeTitle: "Fundamento jurídico",
        featureThreeText: "Identificar leyes, reglamentos, principios y fuentes jurídicas relevantes.",
        featureFourTitle: "Evaluación de pruebas",
        featureFourText: "Examinar la fiabilidad, relevancia e integridad de la información.",
        featureFiveTitle: "Identificación de riesgos",
        featureFiveText: "Señalar posibles consecuencias jurídicas y factores de riesgo.",
        featureSixTitle: "Análisis de incertidumbre",
        featureSixText: "Identificar hechos ausentes e interpretaciones controvertidas.",
        methodologyLabel: "Metodología analítica",
        methodologyTitle: "De la pregunta a una conclusión fundamentada",
        methodologyDescription: "ELAS sigue una estructura lógica que separa los hechos de la interpretación jurídica.",
        methodOneTitle: "Definir la pregunta",
        methodOneText: "Establecer los hechos, la cuestión jurídica y la jurisdicción.",
        methodTwoTitle: "Examinar la ley",
        methodTwoText: "Identificar normas, principios jurídicos y autoridades relevantes.",
        methodThreeTitle: "Aplicar y evaluar",
        methodThreeText: "Comparar los hechos con los requisitos jurídicos.",
        methodFourTitle: "Presentar el resultado",
        methodFourText: "Explicar la conclusión, su fundamento y las incertidumbres.",
        documentationLabel: "Documentación del proyecto",
        documentationTitle: "Explorar el proyecto ELAS",
        documentationDescription: "Consulta el código fuente, la documentación y los recursos de desarrollo en el repositorio oficial de GitHub.",
        documentationButton: "Abrir repositorio de GitHub",
        disclaimerLabel: "Información importante",
        disclaimerTitle: "Información y limitaciones jurídicas",
        disclaimerHeading: "Solo con fines informativos",
        disclaimerText: "ELAS es un marco analítico y un recurso informativo. No constituye asesoramiento jurídico ni sustituye la consulta con un profesional cualificado. Los resultados dependen de los hechos, la jurisdicción y la legislación vigente. Verifica siempre las fuentes jurídicas y solicita asistencia profesional cuando sea necesario.",
        footerDisclaimer: "Aviso legal",
        footerBackToTop: "Volver arriba"
    },

    fr: {
        skipLink: "Aller au contenu",
        navAbout: "Présentation",
        navCapabilities: "Fonctionnalités",
        navMethodology: "Méthodologie",
        navDocumentation: "Documentation",
        heroEyebrow: "Une approche structurée du raisonnement juridique",
        heroTitle: 'Comprendre le droit. <span>Analyser avec clarté.</span>',
        heroDescription: "ELAS est un cadre complet d'analyse juridique conçu pour examiner les questions de droit, évaluer les preuves, identifier le droit applicable et présenter des conclusions de manière claire et transparente.",
        heroPrimary: "Consulter la documentation",
        heroSecondary: "Voir sur GitHub",
        heroMetaOne: "Méthodologie structurée",
        heroMetaTwo: "Analyse selon la juridiction",
        heroMetaThree: "Conclusions transparentes",
        aboutLabel: "Introduction",
        aboutTitle: "Une approche systématique de l'analyse juridique",
        aboutDescription: "Les questions juridiques peuvent impliquer plusieurs juridictions, des informations incomplètes et des interprétations complexes. ELAS propose une méthode structurée pour examiner ces éléments.",
        aboutCardOneTitle: "Raisonnement structuré",
        aboutCardOneText: "Décomposer les questions juridiques complexes en étapes analytiques clairement définies.",
        aboutCardTwoTitle: "Conclusions fondées",
        aboutCardTwoText: "Distinguer les faits établis, les hypothèses, les interprétations et les incertitudes.",
        aboutCardThreeTitle: "Évaluation transparente",
        aboutCardThreeText: "Expliquer le raisonnement et identifier les limites des informations disponibles.",
        capabilitiesLabel: "Fonctionnalités principales",
        capabilitiesTitle: "Ce qu'ELAS est conçu pour examiner",
        capabilitiesDescription: "Le cadre organise l'analyse juridique en domaines distincts afin de favoriser des évaluations cohérentes et compréhensibles.",
        featureOneTitle: "Classification juridique",
        featureOneText: "Évaluer si une action semble licite, illicite ou juridiquement incertaine.",
        featureTwoTitle: "Identification de la juridiction",
        featureTwoText: "Identifier le pays, le système juridique et les règles internationales potentiellement applicables.",
        featureThreeTitle: "Fondement juridique",
        featureThreeText: "Identifier les lois, règlements, principes et sources juridiques pertinents.",
        featureFourTitle: "Évaluation des preuves",
        featureFourText: "Examiner la fiabilité, la pertinence et l'exhaustivité des informations.",
        featureFiveTitle: "Identification des risques",
        featureFiveText: "Mettre en évidence les conséquences juridiques possibles et les facteurs de risque.",
        featureSixTitle: "Analyse des incertitudes",
        featureSixText: "Identifier les faits manquants et les interprétations contestées.",
        methodologyLabel: "Méthodologie analytique",
        methodologyTitle: "De la question à une conclusion raisonnée",
        methodologyDescription: "ELAS suit une structure logique qui distingue l'examen des faits de l'interprétation juridique.",
        methodOneTitle: "Définir la question",
        methodOneText: "Établir les faits pertinents, la question juridique et la juridiction.",
        methodTwoTitle: "Examiner le droit",
        methodTwoText: "Identifier les règles, principes et autorités pertinents.",
        methodThreeTitle: "Appliquer et évaluer",
        methodThreeText: "Comparer les faits aux exigences juridiques.",
        methodFourTitle: "Présenter le résultat",
        methodFourText: "Expliquer la conclusion, son fondement et les incertitudes restantes.",
        documentationLabel: "Documentation du projet",
        documentationTitle: "Découvrir le projet ELAS",
        documentationDescription: "Accédez au code source, à la documentation et aux ressources de développement dans le dépôt GitHub officiel.",
        documentationButton: "Ouvrir le dépôt GitHub",
        disclaimerLabel: "Informations importantes",
        disclaimerTitle: "Informations et limites juridiques",
        disclaimerHeading: "À titre informatif uniquement",
        disclaimerText: "ELAS est un cadre analytique et une ressource d'information. Il ne constitue pas un conseil juridique et ne remplace pas la consultation d'un professionnel qualifié. Les résultats dépendent des faits, de la juridiction et du droit applicable. Vérifiez les sources juridiques et demandez une assistance professionnelle si nécessaire.",
        footerDisclaimer: "Avertissement",
        footerBackToTop: "Retour en haut"
    },

    it: {
        skipLink: "Vai al contenuto",
        navAbout: "Informazioni",
        navCapabilities: "Funzionalità",
        navMethodology: "Metodologia",
        navDocumentation: "Documentazione",
        heroEyebrow: "Un approccio strutturato al ragionamento giuridico",
        heroTitle: 'Comprendere il diritto. <span>Analizzare con chiarezza.</span>',
        heroDescription: "ELAS è un framework completo di analisi giuridica progettato per esaminare questioni legali, valutare prove, identificare il diritto applicabile e comunicare conclusioni in modo chiaro e trasparente.",
        heroPrimary: "Esplora la documentazione",
        heroSecondary: "Visualizza su GitHub",
        heroMetaOne: "Metodologia strutturata",
        heroMetaTwo: "Analisi basata sulla giurisdizione",
        heroMetaThree: "Conclusioni trasparenti",
        aboutLabel: "Introduzione",
        aboutTitle: "Un approccio sistematico all'analisi giuridica",
        aboutDescription: "Le questioni giuridiche possono coinvolgere diverse giurisdizioni, informazioni incomplete e interpretazioni complesse. ELAS offre una metodologia strutturata per esaminare questi elementi.",
        aboutCardOneTitle: "Ragionamento strutturato",
        aboutCardOneText: "Suddividere questioni giuridiche complesse in fasi analitiche chiaramente definite.",
        aboutCardTwoTitle: "Conclusioni basate sulle prove",
        aboutCardTwoText: "Distinguere fatti accertati, ipotesi, interpretazioni e incertezze.",
        aboutCardThreeTitle: "Valutazione trasparente",
        aboutCardThreeText: "Spiegare il ragionamento e identificare i limiti delle informazioni disponibili.",
        capabilitiesLabel: "Funzionalità principali",
        capabilitiesTitle: "Cosa è progettato per esaminare ELAS",
        capabilitiesDescription: "Il framework organizza l'analisi giuridica in aree distinte per supportare valutazioni coerenti e comprensibili.",
        featureOneTitle: "Classificazione giuridica",
        featureOneText: "Valutare se un'azione appare lecita, illecita o giuridicamente incerta.",
        featureTwoTitle: "Identificazione della giurisdizione",
        featureTwoText: "Identificare il paese, il sistema giuridico e le norme internazionali applicabili.",
        featureThreeTitle: "Fondamento giuridico",
        featureThreeText: "Identificare leggi, regolamenti, principi e fonti giuridiche pertinenti.",
        featureFourTitle: "Valutazione delle prove",
        featureFourText: "Esaminare affidabilità, pertinenza e completezza delle informazioni.",
        featureFiveTitle: "Identificazione dei rischi",
        featureFiveText: "Evidenziare possibili conseguenze giuridiche e fattori di rischio.",
        featureSixTitle: "Analisi dell'incertezza",
        featureSixText: "Identificare fatti mancanti e interpretazioni controverse.",
        methodologyLabel: "Metodologia analitica",
        methodologyTitle: "Dalla domanda a una conclusione motivata",
        methodologyDescription: "ELAS segue una struttura logica che distingue l'esame dei fatti dall'interpretazione giuridica.",
        methodOneTitle: "Definire la domanda",
        methodOneText: "Stabilire i fatti rilevanti, la questione giuridica e la giurisdizione.",
        methodTwoTitle: "Esaminare il diritto",
        methodTwoText: "Identificare norme, principi e autorità pertinenti.",
        methodThreeTitle: "Applicare e valutare",
        methodThreeText: "Confrontare i fatti con i requisiti giuridici.",
        methodFourTitle: "Presentare il risultato",
        methodFourText: "Spiegare la conclusione, il fondamento giuridico e le incertezze.",
        documentationLabel: "Documentazione del progetto",
        documentationTitle: "Esplora il progetto ELAS",
        documentationDescription: "Accedi al codice sorgente, alla documentazione e alle risorse di sviluppo tramite il repository ufficiale GitHub.",
        documentationButton: "Apri il repository GitHub",
        disclaimerLabel: "Informazioni importanti",
        disclaimerTitle: "Informazioni e limiti giuridici",
        disclaimerHeading: "Solo a fini informativi",
        disclaimerText: "ELAS è un framework analitico e una risorsa informativa. Non costituisce consulenza legale e non sostituisce il parere di un professionista qualificato. I risultati dipendono dai fatti, dalla giurisdizione e dalla normativa vigente. Verifica autonomamente le fonti giuridiche e richiedi assistenza professionale quando necessario.",
        footerDisclaimer: "Avvertenza",
        footerBackToTop: "Torna all'inizio"
    },

    pt: {
        skipLink: "Ir para o conteúdo",
        navAbout: "Sobre",
        navCapabilities: "Funcionalidades",
        navMethodology: "Metodologia",
        navDocumentation: "Documentação",
        heroEyebrow: "Uma abordagem estruturada ao raciocínio jurídico",
        heroTitle: 'Compreender o direito. <span>Analisar com clareza.</span>',
        heroDescription: "ELAS é uma estrutura abrangente de análise jurídica concebida para examinar questões legais, avaliar provas, identificar a legislação aplicável e comunicar conclusões com clareza e transparência.",
        heroPrimary: "Explorar a documentação",
        heroSecondary: "Ver no GitHub",
        heroMetaOne: "Metodologia estruturada",
        heroMetaTwo: "Análise baseada na jurisdição",
        heroMetaThree: "Conclusões transparentes",
        aboutLabel: "Introdução",
        aboutTitle: "Uma abordagem sistemática à análise jurídica",
        aboutDescription: "As questões jurídicas podem envolver várias jurisdições, informações incompletas e interpretações complexas. ELAS fornece uma metodologia estruturada para examinar esses elementos.",
        aboutCardOneTitle: "Raciocínio estruturado",
        aboutCardOneText: "Dividir questões jurídicas complexas em etapas analíticas claramente definidas.",
        aboutCardTwoTitle: "Conclusões fundamentadas",
        aboutCardTwoText: "Distinguir factos estabelecidos, pressupostos, interpretações e incertezas.",
        aboutCardThreeTitle: "Avaliação transparente",
        aboutCardThreeText: "Explicar o raciocínio e identificar as limitações das informações disponíveis.",
        capabilitiesLabel: "Funcionalidades principais",
        capabilitiesTitle: "O que o ELAS foi concebido para analisar",
        capabilitiesDescription: "A estrutura organiza a análise jurídica em áreas distintas para apoiar avaliações coerentes e compreensíveis.",
        featureOneTitle: "Classificação jurídica",
        featureOneText: "Avaliar se uma ação parece lícita, ilícita ou juridicamente incerta.",
        featureTwoTitle: "Identificação da jurisdição",
        featureTwoText: "Identificar o país, o sistema jurídico e as regras internacionais potencialmente aplicáveis.",
        featureThreeTitle: "Fundamento jurídico",
        featureThreeText: "Identificar leis, regulamentos, princípios e fontes jurídicas relevantes.",
        featureFourTitle: "Avaliação de provas",
        featureFourText: "Examinar a fiabilidade, relevância e integridade das informações.",
        featureFiveTitle: "Identificação de riscos",
        featureFiveText: "Destacar possíveis consequências jurídicas e fatores de risco.",
        featureSixTitle: "Análise de incerteza",
        featureSixText: "Identificar factos em falta e interpretações controversas.",
        methodologyLabel: "Metodologia analítica",
        methodologyTitle: "Da questão à conclusão fundamentada",
        methodologyDescription: "ELAS segue uma estrutura lógica que separa a análise dos factos da interpretação jurídica.",
        methodOneTitle: "Definir a questão",
        methodOneText: "Estabelecer os factos relevantes, a questão jurídica e a jurisdição.",
        methodTwoTitle: "Examinar a lei",
        methodTwoText: "Identificar regras, princípios jurídicos e autoridades relevantes.",
        methodThreeTitle: "Aplicar e avaliar",
        methodThreeText: "Comparar os factos com os requisitos jurídicos.",
        methodFourTitle: "Apresentar o resultado",
        methodFourText: "Explicar a conclusão, o fundamento jurídico e as incertezas restantes.",
        documentationLabel: "Documentação do projeto",
        documentationTitle: "Explorar o projeto ELAS",
        documentationDescription: "Aceda ao código-fonte, à documentação e aos recursos de desenvolvimento através do repositório oficial do GitHub.",
        documentationButton: "Abrir repositório GitHub",
        disclaimerLabel: "Informações importantes",
        disclaimerTitle: "Informações e limitações jurídicas",
        disclaimerHeading: "Apenas para fins informativos",
        disclaimerText: "ELAS é uma estrutura analítica e um recurso informativo. Não constitui aconselhamento jurídico nem substitui a consulta de um profissional qualificado. Os resultados dependem dos factos, da jurisdição e da legislação em vigor. Verifique sempre as fontes jurídicas e procure assistência profissional quando necessário.",
        footerDisclaimer: "Aviso legal",
        footerBackToTop: "Voltar ao topo"
    }
};

const languageSelector = document.getElementById("language-selector");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const menuToggle = document.getElementById("menu-toggle");
const menuIcon = document.getElementById("menu-icon");
const navigation = document.getElementById("main-navigation");
const currentYear = document.getElementById("current-year");

function applyLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";
    const dictionary = translations[selectedLanguage];

    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
            element.innerHTML = dictionary[key];
        }
    });

document.title = selectedLanguage === "de"
    ? "ELAS — Expert Legal Analysis System"
    : "ELAS — Expert Legal Analysis System";

    if (languageSelector) {
        languageSelector.value = selectedLanguage;
    }

    try {
        localStorage.setItem("elas-language", selectedLanguage);
    } catch {
        return;
    }
}

function applyTheme(theme) {
    const isLight = theme === "light";

    document.body.classList.toggle("light", isLight);

    if (themeIcon) {
        themeIcon.textContent = isLight ? "☼" : "◐";
    }

    if (themeToggle) {
        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );

        themeToggle.setAttribute(
            "title",
            isLight ? "Switch to dark theme" : "Switch to light theme"
        );
    }

    try {
        localStorage.setItem("elas-theme", isLight ? "light" : "dark");
    } catch {
        return;
    }
}

function toggleTheme() {
    const nextTheme = document.body.classList.contains("light")
        ? "dark"
        : "light";

    applyTheme(nextTheme);
}

function closeNavigation() {
    if (!navigation || !menuToggle) {
        return;
    }

    navigation.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    if (menuIcon) {
        menuIcon.textContent = "☰";
    }
}

function toggleNavigation() {
    if (!navigation || !menuToggle) {
        return;
    }

    const isOpen = navigation.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

    if (menuIcon) {
        menuIcon.textContent = isOpen ? "✕" : "☰";
    }
}

function initializeELAS() {
    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    let savedLanguage = "en";
    let savedTheme = "dark";

    try {
        savedLanguage = localStorage.getItem("elas-language") || "en";
        savedTheme = localStorage.getItem("elas-theme") || "dark";
    } catch {
        savedLanguage = "en";
        savedTheme = "dark";
    }

    applyLanguage(savedLanguage);
    applyTheme(savedTheme);

    if (languageSelector) {
        languageSelector.addEventListener("change", (event) => {
            applyLanguage(event.target.value);
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    if (menuToggle) {
        menuToggle.addEventListener("click", toggleNavigation);
    }

    if (navigation) {
        navigation.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeNavigation);
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeNavigation();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            closeNavigation();
        }
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeELAS);
} else {
    initializeELAS();
}
