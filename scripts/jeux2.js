function completer(num, el, couleur) {
    const ligne = document.querySelector(`.line.c${num}`);
    if (ligne && !ligne.classList.contains("completed")) {
      ligne.style.stroke = couleur;
      ligne.classList.add("completed");
    }
    if (!el.classList.contains("etape-complete")) {
      el.classList.add("etape-complete");
    }
  }
  
  // === Info-panel dynamique ===
  function afficherInfoJeu(topPx, leftPx, data) {
    const infoPanel = document.getElementById("info-panel");
    infoPanel.style.top = `${topPx}px`;
    infoPanel.style.left = `${leftPx}px`; 
  
    document.getElementById("info-theme").textContent = data.theme;
    document.getElementById("info-duree").textContent = data.duree;
    document.getElementById("info-type").textContent = data.type;
    document.getElementById("info-score").textContent = data.score;
  
    infoPanel.style.display = "block";
  }
  
  
  function cacherInfoJeu() {
    document.getElementById("info-panel").style.display = "none";
  }

  // === Étape 1 : Jeu de Liaison (rein3.html) ===
  const bestScoreJeu1 = localStorage.getItem("bestScoreJeu1"); 
  const etape1 = document.querySelector(".image-jeu[href*='rein3.html']");
  const ligne1 = document.querySelector(".line.c1");
  
  if (bestScoreJeu1 && etape1 && ligne1 && !ligne1.classList.contains("completed")) {
    completer(1, etape1, "#66bb6a"); 
  }
  
  etape1.addEventListener("mouseenter", () => {
    afficherInfoJeu(300, 50, {
      theme: "Fonction rénale",
      duree: "5 min",
      type: "Association visuelle",
      score: bestScoreJeu1 ? `${bestScoreJeu1} / 10` : "Non joué"
    });
  });
  
  etape1.addEventListener("mouseleave", cacherInfoJeu);
  
// === Étape 2 : Jeu d'Alimentation (sans score) ===
const etape2 = document.querySelector(".image-jeu[href*='assiette.html']"); 
const ligne2 = document.querySelector(".line.c2");

// Marque comme complété si le jeu a été visité (utilisation d'un flag simple)
const jeu2Complete = localStorage.getItem("jeu2Complete");
if (jeu2Complete && etape2 && ligne2 && !ligne2.classList.contains("completed")) {
  completer(2, etape2, "#66bb6a");
}

etape2.addEventListener("mouseenter", () => {
  afficherInfoJeu(60, 750, {  
    theme: "Alimentation et Santé",
    duree: "5 min",
    type: "Composition d'un repas",
    score: jeu2Complete ? "Terminé" : "Non joué" // Pas de score numérique
  });
});

etape2.addEventListener("mouseleave", cacherInfoJeu);
  
  // === Étape 3 : Quiz (quiz.html) ===
  const bestScoreQuiz = localStorage.getItem("bestScoreQuiz"); 
  const maxScoreQuiz = 10;
  const etape3 = document.getElementById("etape3");            
  const ligne3 = document.querySelector(".line.c3");           
  
  if (bestScoreQuiz && maxScoreQuiz && etape3 && ligne3 && !ligne3.classList.contains("completed")) {
    completer(3, etape3, "#66bb6a"); 
  }
  
  etape3.addEventListener("mouseenter", () => {
    afficherInfoJeu(60, 750, {  
      theme: "Causes et Symptômes",
      duree: "5 min",
      type: "Quiz",
      score: bestScoreQuiz ? `${bestScoreQuiz} / ${maxScoreQuiz}` : "Non joué"
    });
  });
  
  
  etape3.addEventListener("mouseleave", cacherInfoJeu);

  // === Étape 4 : Jeu de Conseils (conseils.html) ===
const scoreConseils = localStorage.getItem("scoreConseils"); 
const etape4 = document.querySelector(".image-jeu[href*='conseils.html']");
const ligne4 = document.querySelector(".line.c4");

if (scoreConseils && etape4 && ligne4 && !ligne4.classList.contains("completed")) {
  completer(4, etape4, "#66bb6a"); 
}

etape4.addEventListener("mouseenter", () => {
  afficherInfoJeu(600, 710, {
    theme: "Hygiène de vie",
    duree: "5 min",
    type: "Mémoire & Tri",
    score: scoreConseils ? `${scoreConseils} / 20` : "Non joué"
  });
});

etape4.addEventListener("mouseleave", cacherInfoJeu);

  // === Étape 5 : Jeu de Mémoire (rein1.html) ===
const bestScoreJeu5 = localStorage.getItem("bestScoreJeu5"); 
const etape5 = document.querySelector(".image-jeu[href*='rein1.html']");
const ligne5 = document.querySelector(".line.c5");

if (bestScoreJeu5 && etape5 && ligne5 && !ligne5.classList.contains("completed")) {
  completer(5, etape5, "#66bb6a");
}

etape5.addEventListener("mouseenter", () => {
  afficherInfoJeu(300,50, {
    theme: "Système urinaire",
    duree: "5 min",
    type: "Mémoire & Association",
    score: bestScoreJeu5 ? `${bestScoreJeu5} / 12` : "Non joué"
  });
});

etape5.addEventListener("mouseleave", cacherInfoJeu);

// === Étape 6 : Mini-jeu des menus ===
const bestScoreMiniJeu6 = localStorage.getItem("bestScoreMiniJeu6"); 
const etape6 = document.querySelector(".image-jeu[href*='menu.html']");
const ligne6 = document.querySelector(".line.c6");

// On vérifie le bestScore pour compléter l'étape
if (bestScoreMiniJeu6 && etape6 && ligne6 && !ligne6.classList.contains("completed")) {
  completer(6, etape6, "#66bb6a");
}

etape6.addEventListener("mouseenter", () => {
  afficherInfoJeu(600, 710, { 
    theme: "Menus et Alimentation",
    duree: "5 min",
    type: "Sélection alimentaire",
    score: bestScoreMiniJeu6 ? ` ${bestScoreMiniJeu6} / 10` : "Non joué"
  });
});

etape6.addEventListener("mouseleave", cacherInfoJeu);