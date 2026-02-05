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
