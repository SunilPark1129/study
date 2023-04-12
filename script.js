const btn = document.querySelectorAll("#btns > button");
const text = document.querySelector("#text > p");
const page = document.querySelector("#page");

function useState(init) {
  let value = init;
  const setState = (newValue) => {
    value = newValue;
  };
  const state = () => {
    return value;
  };
  return [state, setState];
}

const [currentPosition, setCurrentPosition] = useState(0);
const [question, setQuestion] = useState(datas[0]);

categoryClickHandler("code", 0);

function categoryClickHandler(idx, id) {
  setCurrentPosition(0);
  setQuestion(datas[idx]);
  locatedIdx();

  for (let n of btn) {
    n.classList.remove("actived");
  }
  btn[id].classList.add("actived");
}

function nextClickHandler(id) {
  if (id === "prev") {
    if (currentPosition() === 0) {
      setCurrentPosition(question().length - 1);
    } else {
      setCurrentPosition(currentPosition() - 1);
    }
  } else {
    if (currentPosition() === question().length - 1) {
      setCurrentPosition(0);
    } else {
      setCurrentPosition(currentPosition() + 1);
    }
  }
  locatedIdx();
}

function locatedIdx() {
  text.innerHTML = question()[currentPosition()];
  page.innerHTML = `${currentPosition() + 1} / ${question().length}`;
}
