const faqsDiv = document.querySelector(".faqs");

faqsArray.forEach((faq) => {
  const faqContainer = document.createElement("div");
  faqContainer.classList.add("faq-container");

    const faqQuestion = document.createElement("div");
    faqQuestion.classList.add("faq-question");
    faqQuestion.innerHTML =` 
    <span class="faq-question-text">${faq.question}</span>
    <span class="faq-question-icon">
      <img src="./images/icon-arrow-down.svg" alt="arrow down icon" />
    </span>
  `;