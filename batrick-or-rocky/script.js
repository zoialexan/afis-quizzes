const questions = [
    {
      question: "Την μπανανόφλουδα την πετάς:",
      image: "images/2.png",
      answers: [
        { text: "Στον καφέ κάδο", type: "rocky" },
        { text: "Στο πεζοδρόμιο (Κατά λάθος πάντα!)", type: "batrick" }
      ]
    },
    {
      question: "Τα οργανικά απόβλητα τα ρίχνεις:",
      image: "images/garden.png",
      answers: [
        { text: "Στον κήπο του γείτονα (Ουπς!)", type: "batrick" },
        { text: "Στον κομποστοποιητή σου", type: "rocky" }
      ]
    },
    {
      question: "Tα παλιά μπλουζάκια:",
      image: "images/field.png",
      answers: [
        { text: "Τα βάζεις στον μωβ κάδο", type: "rocky" },
        { text: "Τα κάνεις σκιάχτρα", type: "batrick" }
      ]
    },
    {
      question: "Το μαγειρεμένο λάδι:",
      image: "images/kitchen.png",
      answers: [
        { text: "Το χρησιμοποιείς για ξεμάτιασμα", type: "batrick" },
        { text: "Το αποθηκεύεις σωστά για επαναχρησιμοποίηση", type: "rocky" }
      ]
    },
    {
      question: "Το βάζο της γιαγιάς έσπασε:",
      image: "images/livingroom.png",
      answers: [
        { text: "Δίνεις δεύτερη ζωή με εποξική ρητίνη", type: "rocky" },
        { text: "Επιτέλους να πεταχτεί μαζί με το σεμεδάκι", type: "batrick" }
      ]
    },
    {
      question: "Η κλεμμένη ζακέτα του αδελφού σου τρύπησε:",
      image: "images/bedroom.png",
      answers: [
        { text: "Την μπαλώνεις κρυφά", type: "batrick" },
        { text: "Του την δίνεις να την πάει για ανακύκλωση", type: "rocky" }
      ]
    },
    {
      question: "Οι μπαταρίες από το τηλεκοντρόλ του air condition στη δουλειά τελείωσαν... τι λες στο αφεντικό σου;",
      image: "images/office.png",
      answers: [
        { text: "Βάλ’ τες εκεί που ξέρεις", type: "batrick" },
        { text: "Να αιτηθούμε έναν κάδο ΑΦΗΣ", type: "rocky" }
      ]
    },
    {
      question: "Βρίσκεις τη συλλογή με τα αγαπημένα σου κόμικ στο παιδικό σου δωμάτιο:",
      image: "images/yardsale.png",
      answers: [
        { text: "Τα πουλάς σαν σπάνια συλλογή στο διαδίκτυο", type: "batrick" },
        { text: "Τα πας στην ανακύκλωση", type: "rocky" }
      ]
    },
    {
      question: "Το κεσεδάκι από το γιαούρτι:",
      image: "images/kitchen2.png",
      answers: [
        { text: "Φυτεύεις μέσα φακές και τις καμαρώνεις που μεγαλώνουν", type: "rocky" },
        { text: "Σκέφτεσαι να το ρίξεις σε κάποιον… αφού το γιαούρτι χρησιμοποιείται σαν μάσκα προσώπου", type: "batrick" }
      ]
    }
  ];
  
  const resultTitles = {
    batrick: "Η Batrick!",
    rocky: "Ο Ρόκι!"
  };
  
  const resultDescriptions = {
  batrick:
    "Έχεις πολλή φαντασία! Η δεύτερη ζωή που δίνεις στα απόβλητα αποτελεί μέρος του upcycling, αλλά" +
    " δεν ξέρουμε κατά πόσο συμφωνεί… ο γείτονας και το αφεντικό! Αν βρεθείς ποτέ σε δίλημμα για την τύχη των" +
    " αποβλήτων, ένας φίλος σαν τον Ρόκι είναι εκεί για να σε καθοδηγήσει για τον σωστό δρόμο της ανακύκλωσης!",
  rocky:
    "Η αγάπη σου για το περιβάλλον είναι τόσο μεγάλη, που ξεπερνάει οποιαδήποτε προσωπική διαφορά! Ξέρεις" +
    " πως ο σωστός δρόμος για τα απόβλητα είναι η ανακύκλωση, αλλά αν ποτέ θελήσεις να τους δώσεις δεύτερη ζωή," +
    " τότε μία φίλη σαν την Batrick χρειάζεται για να δώσει… ενδιαφέρουσες συμβουλές!"
  };
  
  let currentQuestionIndex = 0;
  let selectedTypes = [];
  
  const introContainer = document.getElementById("intro-container");
  const quizContainer = document.getElementById("quiz-container");
  const resultContainer = document.getElementById("result-container");
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-button");
  const resultTitle = document.getElementById("result-title");
  const resultDescription = document.getElementById("result-description");
  const resultPrompt = document.getElementById("result-prompt");
  const questionImage = document.getElementById("question-image");
  const resultImage = document.getElementById("result-image");
  
  
  document.getElementById("start-button").addEventListener("click", () => {
    introContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    startQuiz();
  });
  
  function startQuiz() {
    currentQuestionIndex = 0;
    selectedTypes = [];
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionImage.src = currentQuestion.image; 
    questionImage.alt = `Εικόνα για την ερώτηση ${currentQuestionIndex + 1}`;
    answerButtons.innerHTML = "";
    nextButton.classList.add("hidden");
  
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
  
    document.querySelectorAll("#answer-buttons button").forEach(btn =>
      btn.classList.remove("selected")
    );
    buttonElement.classList.add("selected");
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
  
    const tally = {};
    selectedTypes.forEach(type => {
      tally[type] = (tally[type] || 0) + 1;
    });
  
    const keys = Object.keys(tally);
    const resultType = keys.reduce((a, b) => (tally[a] > tally[b] ? a : b), keys[0]);
  
    resultContainer.className = `result-${resultType}`;
    resultTitle.textContent = resultTitles[resultType];
    resultDescription.textContent = resultDescriptions[resultType];
    resultPrompt.textContent = "Θέλεις να ξαναπαίξεις για να δεις αν θα βγάλεις άλλο αποτέλεσμα;";
  
    // Set image based on result
    if (resultType === "batrick") {
        resultImage.src = "images/batrick.png";
        resultImage.alt = "Εικόνα Μπάτρικ";
    } else if (resultType === "rocky") {
        resultImage.src = "images/rocky.png";
        resultImage.alt = "Εικόνα Ρόκι";
    }
}
  
  function restartQuiz() {
    resultContainer.classList.add("hidden");
    introContainer.classList.remove("hidden");
  }