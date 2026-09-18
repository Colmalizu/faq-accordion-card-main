const faqsArray = [
  {
    question: "How many team members can I invite?",
    response:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },

  {
    question: "What is the maximum file upload size?",
    response:
      "No more than 2GB. All files in your account must fit your allotted storage space."
  },

  {
    question: "How do I reset my password?",
    response:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },

  {
    question: "Can I cancel my subscription?",
    response:
      "Yes! Send us a message and we’ll process your request no questions asked."
  },

  {
    question: "Do you provide additional support?",
    response:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
];

const faqsDiv = document.querySelector(".faqs");

faqsArray.forEach((faq) => {
  const faqContainer = document.createElement("div");
  faqContainer.classList.add("faq-container");

  const faqQuestion = document.createElement("div");
  faqQuestion.classList.add("faq-question");

  faqQuestion.innerHTML = `
    <span class="faq-question-text">${faq.question}</span>

    <span class="faq-question-icon">
      <img
        src="./images/icon-arrow-down.svg"
        alt="arrow down icon"
        class="flechita"
      >
    </span>
  `;

  const faqResponse = document.createElement("div");
  faqResponse.classList.add("faq-response");
  faqResponse.textContent = faq.response;

  faqContainer.appendChild(faqQuestion);
  faqContainer.appendChild(faqResponse);

  faqsDiv.appendChild(faqContainer);

  faqQuestion.addEventListener("click", () => {
    faqContainer.classList.contains("active")
      ? faqContainer.classList.remove("active")
      : (
          document.querySelectorAll(".faq-container").forEach((container) => {
            container.classList.remove("active");
          }),
          faqContainer.classList.add("active")
        );
  });
});
