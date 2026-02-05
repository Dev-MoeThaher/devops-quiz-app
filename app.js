let questions = [];
let currentQuestion = null;

fetch("data/questions.json")
  .then(response => response.json())
  .then(data => {
    questions = data;
    populateTopics();
  });

function populateTopics() {
  const topicSelect = document.getElementById("topicSelect");
  const topics = [...new Set(questions.map(q => q.topic))];

  topics.forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });
}
document.getElementById("topicSelect").addEventListener("change", function () {
    const selectedTopic = this.value;
    const topicQuestions = questions.filter(q => q.topic === selectedTopic);
    currentQuestion = topicQuestions[0];
    displayQuestion();
  });
  
  function displayQuestion() {
    document.getElementById("question").textContent = currentQuestion.question;
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      li.appendChild(button);
      optionsList.appendChild(li);
    });
  }
  