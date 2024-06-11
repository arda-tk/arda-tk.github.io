const studentName = "Arda Tanıl KERSÜ";
const studentNumber = 1154166;

const combinedInfo = `${studentName} - ${studentNumber}`;

console.log(combinedInfo);

const headerContent = document.querySelector("h1");

headerContent.innerHTML = combinedInfo;
headerContent.classList.add("heading1");
