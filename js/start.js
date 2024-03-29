const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

//
function addAnswer(answerText, qIdx) {
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("Button");
  answer.classList.add("answerList");
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener(
    "click",
    () => {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        //qnaList에서 a row의 key, value
        children[i].disabled = true;
        children[i].style.display = "none";
      }
      goNext(++qIdx);
    },
    false
  );
}

//Q&A 페이지에서 qnaList에 있는 배열이 순차적으로 뜨도록 설정
function goNext(qIdx) {
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

//Main 페이지에서 '시작하기' 버튼 눌렀을 때 화면이 천천히 전환되게
function begin() {
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display = "block";
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
