import "./app.css";

class Alert {
  constructor(config) {
    this.validateValue(config);
  }

  validateValue(config) {
    let {
      text = "this is test text",
      textColor = "#f1f1f1",

      bgColor = "#474E68",
      buttonText = "OK",
      buttonTextColor = "#f1f1f1",
      buttonBgColor = "#6a73a1",
    } = config;

    this.makeElement(
      text,
      textColor,
      bgColor,
      buttonText,
      buttonTextColor,
      buttonBgColor
    );
  }

  makeElement(
    text,
    textColor,
    bgColor,
    buttonText,
    buttonTextColor,
    buttonBgColor
  ) {
    const element = ` <div id="alert" class="hide">
        <div class="alert-box">
            <h4 class="alert-text">${text}</h4>
            <button class="alert-button">${buttonText}</button>
        </div>
    </div>`;

    document.body.insertAdjacentHTML("afterbegin", element);

    const alertBox = document.querySelector(".alert-box");
    const alertText = document.querySelector(".alert-text");
    const btn = document.querySelector(".alert-button");

    alertBox.style.backgroundColor = bgColor;
    alertText.style.color = textColor;
    btn.style.color = buttonTextColor;
    btn.style.backgroundColor = buttonBgColor;

    btn.addEventListener("click", () => {
      this.hide();
    });
  }

  show(
    duration = {
      enabled: false,
      time: 1000,
    }
  ) {
    const alert = document.querySelector("#alert");
    alert.classList.remove("hide");
    if (duration.enabled) {
      setTimeout(this.hide, duration.time);
    } else {
    }
  }
  hide() {
    const alert = document.querySelector("#alert");
    alert.classList.add("hide");
  }
}

module.exports = Alert;
