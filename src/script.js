const questionContainer = document.querySelectorAll(
    ".first-question-container",
);

const questionArr = [
    "What is roadmap.sh?",
    "What are the plans for roadmap.sh?",
    "How is roadmap.sh built?",
    "Can I use roadmap.sh in my team?",
    "How can I create custom roadmaps?",
    "Is roadmap.sh really 7th most starred project on GitHub?",
];

const answerArr = [
    "roadmap.sh is a community-powered platform providing visual, step-by-step learning paths, guides, resources, and career tracking to help developers pick a path and grow in their tech careers.",

    "The long-term plan is to make it the ultimate go-to place for developers when learning new things, expanding beyond roadmaps into best practices, quiz assessments, project ideas, and interactive public learning profiles.",

    "The modern front-end of the website is built using Astro and Tailwind CSS, while the back-end runs on a Node.js API with a mix of MongoDB, PostgreSQL, and Redis databases, hosted on AWS.",

    "Yes, companies and engineering teams can use roadmap.sh as a tool to assess developer knowledge gaps, plan skill growth, track employee progress, and structure onboarding across different technical stacks.",

    "You can create custom roadmaps by signing into your roadmap.sh account to map out your own learning goals, or leverage their built-in AI Tutor to generate a personalized roadmap tailored to your specific role.",

    "It is actually even higher! roadmap.sh is currently ranked as the 6th most starred open-source project across all of GitHub, boasting over 369,000 community stars.",
];

questionContainer.forEach((questionAnswer, key) => {
    questionAnswer.innerHTML = `
        <button class="question-btn">
            ${questionArr[key]}
            <span>V</span>
        </button>
        <div class="answer-container hide">
            <p>
                ${answerArr[key]}
            </p>
        </div>
    `;
});

const questionBtn = document.querySelectorAll("button");
const answerContainer = document.querySelectorAll(".answer-container");

questionBtn.forEach((question, key) => {
    let toggle = true;
    question.addEventListener("click", () => {
        if (toggle) {
            answerContainer[key].classList.remove("hide");
            answerContainer[key].classList.add("show");
            toggle = !toggle;
        } else {
            answerContainer[key].classList.remove("show");
            answerContainer[key].classList.add("hide");
            toggle = !toggle;
        }
    });
});
