// TODO: Add code to check answers to questions
document.addEventListener("DOMContentLoaded", function () {
  let score = 0;
  let score_el = document.getElementById("socre_counter");

  // select all the buttons that have the id of correct
  const correct_answers = document.querySelectorAll("#correct");

  // select all the buttons that have the id of incorrect
  const incorrect_answers = document.querySelectorAll("#incorrect");

  // check if the user picks the correct answer
  correct_answers.forEach((answer) => {
    answer.addEventListener("click", function () {
      // change backColor to green and foreColor to white
      answer.style.backgroundColor = "#199781";
      answer.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Correct";

      // add the msg bellow the button selected
      answer.insertAdjacentElement("afterend", msg);
      answer.disabled = true;

      // update score
      score++;
      score_el.innerHTML = "Score: " + score;
    });
  });

  // check if the user picks the incorrect answer
  incorrect_answers.forEach((answer) => {
    answer.addEventListener("click", function () {
      // change backColor to green and foreColor to white
      answer.style.backgroundColor = "#c43432";
      answer.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Incorrect";

      // add the msg bellow the button selected
      answer.insertAdjacentElement("afterend", msg);
      answer.disabled = true;

      // update the socre
      if (score > 0) {
        score--;
        score_el.innerHTML = "Score: " + score;
      }
    });
  });
  //---------------------------- first response question-----------------------------
  const btn1 = document.getElementById("btn1");
  btn1.addEventListener("click", function () {
    const ans1 = document.getElementById("input1").value;
    if (ans1 === "march") {
      btn1.style.backgroundColor = "#199781";
      btn1.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Correct";
      btn1.insertAdjacentElement("afterend", msg);
      btn1.disabled = true;

      // update the score
      score++;
      score_el.innerHTML = "Score: " + score;
    } else if (ans1 === "") {
      alert("Input is empty!");
    } else {
      btn1.style.backgroundColor = "#c43432";
      btn1.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Incorrect";
      btn1.insertAdjacentElement("afterend", msg);
      btn1.disabled = true;

      // update the socre
      if (score > 0) {
        score--;
        score_el.innerHTML = "Score: " + score;
      }
    }
  });
  //---------------------------- second response question-----------------------------
  const btn2 = document.getElementById("btn2");
  btn2.addEventListener("click", function () {
    const ans2 = document.getElementById("input2").value;
    if (ans2 === "50") {
      btn2.style.backgroundColor = "#199781";
      btn2.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Correct";
      btn2.insertAdjacentElement("afterend", msg);
      btn2.disabled = true;

      // update the score
      score++;
      score_el.innerHTML = "Score: " + score;
    } else if (ans2 === "") {
      alert("Input is empty!");
    } else {
      btn2.style.backgroundColor = "#c43432";
      btn2.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Incorrect";
      btn2.insertAdjacentElement("afterend", msg);
      btn2.disabled = true;

      // update the socre
      if (score > 0) {
        score--;
        score_el.innerHTML = "Score: " + score;
      }
    }
  });
  //---------------------------- third response question-----------------------------
  const btn3 = document.getElementById("btn3");
  btn3.addEventListener("click", function () {
    const ans3 = document.getElementById("input3").value;
    if (ans3 === "50") {
      btn3.style.backgroundColor = "#199781";
      btn3.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Correct";
      btn3.insertAdjacentElement("afterend", msg);
      btn3.disabled = true;

      // update the score
      score++;
      score_el.innerHTML = "Score: " + score;
    } else if (ans3 === "") {
      alert("Input is empty!");
    } else {
      btn3.style.backgroundColor = "#c43432";
      btn3.style.color = "#fff";

      // create a new p to add bellow the buttons
      const msg = document.createElement("p");

      // specify the message
      msg.textContent = "Incorrect";
      btn3.insertAdjacentElement("afterend", msg);
      btn3.disabled = true;

      // update the socre
      if (score > 0) {
        score--;
        score_el.innerHTML = "Score: " + score;
      }
    }
  });

  /* sorry i did not know how to automate the response questions*/
});
