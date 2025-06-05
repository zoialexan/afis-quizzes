const questions = [
    {
        question: "Βλέπεις ένα πλαστικό μπουκάλι στο έδαφος. Τι κάνεις;",
        answers: [
          { text: "Το σηκώνεις και το ρίχνεις στον κάδο ανακύκλωσης", type: "protector" },
          { text: "Το παίρνεις για μια κατασκευή στο σχολείο", type: "artist" },
          { text: "Λες στους φίλους σου γιατί είναι σημαντική η ανακύκλωση", type: "educator" },
          { text: "Διαβάζεις την ετικέτα για να δεις από τι υλικό είναι", type: "observer" }
        ]
      },
      {
        question: "Το σχολείο σου συλλέγει παλιές μπαταρίες. Πώς βοηθάς;",
        answers: [
          { text: "Φέρνεις όσες περισσότερες μπορείς από το σπίτι", type: "protector" },
          { text: "Διακοσμείς ένα κουτί για τη συλλογή τους στην τάξη", type: "artist" },
          { text: "Φτιάχνεις αφίσα για την ανακύκλωση μπαταριών", type: "educator" },
          { text: "Ρωτάς πού πάνε οι μπαταρίες μετά", type: "observer" }
        ]
      },
      {
        question: "Ένα παιχνίδι σου χάλασε. Τι κάνεις;",
        answers: [
          { text: "Ανακυκλώνεις ό,τι μπορεί να ανακυκλωθεί", type: "protector" },
          { text: "Το μετατρέπεις σε διαστημόπλοιο ή τέρας", type: "artist" },
          { text: "Το φτιάχνεις και βοηθάς και άλλους να το φτιάξουν", type: "educator" },
          { text: "Το ανοίγεις για να δεις πώς λειτουργεί", type: "observer" }
        ]
      },
      {
        question: "Ένας φίλος σου πετάει σκουπίδια στο δρόμο. Τι κάνεις;",
        answers: [
          { text: "Τα μαζεύεις και τα πετάς στον κάδο", type: "protector" },
          { text: "Σκέφτεσαι “είναι τέλειο για την εφεύρεσή μου!” και το κάνεις αυτοκινητάκι", type: "artist" },
          { text: "Του λες γιατί είναι σημαντική η ανακύκλωση", type: "educator" },
          { text: "Το σπρώχνεις με ένα ξυλάκι για να δεις τι είναι", type: "observer" }
        ]
      },
      {
        question: "Είναι η Παγκόσμια Ημέρα Περιβάλλοντος (5 Ιουνίου)! Ποια δραστηριότητα σε ενθουσιάζει;",
        answers: [
          { text: "Καθαρίζεις το πάρκο με συμμαθητές", type: "protector" },
          { text: "Φτιάχνεις κάτι όμορφο από παλιά υλικά", type: "artist" },
          { text: "Μιλάς στην τάξη για τον πλανήτη μας", type: "educator" },
          { text: "Παρατηρείς έντομα και φυτά στη φύση", type: "observer" }
        ]
      },
      {
        question: "Τελειώνεις τον χυμό σου. Τι κάνεις;",
        answers: [
          { text: "Το πετάς στον σωστό κάδο ανακύκλωσης", type: "protector" },
          { text: "Φτιάχνεις μικρές φιγούρες από το καλαμάκι", type: "artist" },
          { text: "Λες στην οικογένειά σου πού πρέπει να το πετάξουν", type: "educator" },
          { text: "Διαβάζεις την ετικέτα και μαθαίνεις τι υλικό είναι", type: "observer" }
        ]
      },
      {
        question: "Έχεις παλιές μπαταρίες για ανακύκλωση στο σπίτι. Πού τις βάζεις;",
        answers: [
          { text: "Σε ένα μπολ δίπλα στα κλειδιά", type: "protector" },
          { text: "Σε ένα κουτί που έφτιαξες μόνος/η σου", type: "artist" },
          { text: "Στο κουτάκι AFIS που έχετε στο σπίτι", type: "educator" },
          { text: "Κοιτάς πώς τις βάζουν οι άλλοι και βρίσκεις τον σωστό τρόπο", type: "observer" }
        ]
      },
      {
        question: "Ποιο είναι το αγαπημένο σου πράγμα στη φύση;",
        answers: [
          { text: "Τα καθαρά πάρκα και μονοπάτια", type: "protector" },
          { text: "Πράγματα που μπορείς να ξαναχρησιμοποιήσεις", type: "artist" },
          { text: "Να λες ιστορίες και γεγονότα για τον πλανήτη", type: "educator" },
          { text: "Να παρατηρείς ζώα και έντομα που οι άλλοι δεν βλέπουν", type: "observer" }
        ]
      },
      {
        question: "Αν είχες μια υπερδύναμη, ποια θα ήταν;",
        answers: [
          { text: "Ασπίδα που προστατεύει ζώα και δέντρα", type: "protector" },
          { text: "Χέρια που μεταμορφώνουν σκουπίδια σε θησαυρούς", type: "artist" },
          { text: "Η φωνή σου κάνει όλους να ακούν και να μαθαίνουν", type: "educator" },
          { text: "Να βλέπεις πράγματα που οι άλλοι δεν μπορούν", type: "observer" }
        ]
      },
      {
        question: "Θέλεις να βοηθήσεις τον πλανήτη. Ποιο είναι το πρώτο σου βήμα;",
        answers: [
          { text: "Αρχίζεις να ξεχωρίζεις τα σκουπίδια στο σπίτι", type: "protector" },
          { text: "Χρησιμοποιείς παλιά πράγματα με δημιουργικό τρόπο", type: "artist" },
          { text: "Λες στους φίλους σου για τη ρύπανση και τις λύσεις", type: "educator" },
          { text: "Μαθαίνεις κάτι καινούργιο για τη Γη κάθε μέρα", type: "observer" }
        ]
      }
  ];

  const resultTitles = {
    protector: "Ο Προστάτης",
    artist: "Ο Καλλιτέχνης",
    educator: "Ο Εκπαιδευτής",
    observer: "Ο Ερευνητής"
  };
  
  const resultDescriptions = {
    protector: "Φροντίζεις τη φύση, κρατάς τα πάρκα καθαρά και είσαι πάντα έτοιμος/η να προστατέψεις τον πλανήτη μας.",
    artist: "Βλέπεις θησαυρούς εκεί που άλλοι βλέπουν σκουπίδια. Η φαντασία σου σώζει τον κόσμο με δημιουργία!",
    educator: "Σου αρέσει να μοιράζεσαι ιδέες, να ενημερώνεις τους άλλους και να εμπνέεις αλλαγή.",
    observer: "Έχεις μάτια αετού! Παρατηρείς τα πάντα και μαθαίνεις συνεχώς για τη φύση και το περιβάλλον."
  };
  
  let currentQuestionIndex = 0;
  let selectedTypes = [];
  
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");
  const resultUnlocked = document.getElementById("result-unlocked");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    selectedTypes = [];
    resultContainer.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.onclick = () => selectAnswer(answer.type, button);
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(type, buttonElement) {
    selectedTypes.push(type);
    nextButton.classList.remove("hidden");
  
    // Remove highlight from all buttons
    const allButtons = document.querySelectorAll("#answer-buttons button");
    allButtons.forEach(button => button.classList.remove("selected"));
  
    // Highlight the clicked one
    buttonElement.classList.add("selected");
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextButton.classList.add("hidden");
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
  
    const tally = {};
    selectedTypes.forEach(type => {
      tally[type] = (tally[type] || 0) + 1;
    });
  
    const keys = Object.keys(tally);
    const resultType = keys.reduce((a, b) => tally[a] > tally[b] ? a : b, keys[0]);
      
    // 🆕 Set the dynamic CSS class based on result
    document.getElementById("result-container").className = `result-${resultType}`;
  
    // 🏷 Show title and description
    resultText.textContent = resultTitles[resultType];
    resultUnlocked.insertAdjacentHTML("beforebegin", `<p>${resultDescriptions[resultType]}</p>`);
  
    // 🔐 Save to localStorage
    const unlocked = JSON.parse(localStorage.getItem("unlockedResults") || "[]");
    if (!unlocked.includes(resultType)) {
      unlocked.push(resultType);
      localStorage.setItem("unlockedResults", JSON.stringify(unlocked));
      resultUnlocked.textContent = `Ξεκλείδωσες καινούργιο τύπο ανακυκλωτή! (${resultTitles[resultType]})`;
    } else {
      resultUnlocked.textContent = `Έχεις ήδη βρει αυτόν τον τύπο. Παίξε ξανά για να τους βρεις όλους!`;
    }
  }
  
  function restartQuiz() {
    startQuiz();
  }

  startQuiz();