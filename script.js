// input email value // to local lower case
function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // error
  const errorEmail = document.getElementById("error-email");
  // check email
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = emailValue.match(regex);

  // claim information
  const info = document.querySelector(".info");

  // get element to control submit
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    info.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng Email";
  }
}
const viewMoreJob = document.querySelector("#view-more-job");
const viewMoreEdu = document.querySelector("#view-more-edu");
const viewMoreActiv = document.querySelector("#view-more-activ");
const viewMoreFavor = document.querySelector("#view-more-favor");
const viewMoreLang = document.querySelector("#view-more-lang");
const viewMoreSkill = document.querySelector("#view-more-skill");
const expContent = document.querySelector("#exp-content");
const eduContent = document.querySelector("#edu-content");
const activContent = document.querySelector("#activ-content");
const favorContent = document.querySelector("#favor-content");
const langContent = document.querySelector("#lang-content");
const skillContent = document.querySelector("#skill-content");

function handleOnMouseOver1() {
  viewMoreJob.style.display = "inline-block";
}
function handleOnMouseOut1() {
  viewMoreJob.style.display = "none";
}
function handleOnMouseOver2() {
  viewMoreEdu.style.display = "inline-block";
}
function handleOnMouseOut2() {
  viewMoreEdu.style.display = "none";
}
function handleOnMouseOver3() {
  viewMoreActiv.style.display = "inline-block";
}
function handleOnMouseOut3() {
  viewMoreActiv.style.display = "none";
}
function handleOnMouseOver4() {
  viewMoreFavor.style.display = "inline-block";
}
function handleOnMouseOut4() {
  viewMoreFavor.style.display = "none";
}
function handleOnMouseOver5() {
  viewMoreLang.style.display = "inline-block";
}
function handleOnMouseOut5() {
  viewMoreLang.style.display = "none";
}
function handleOnMouseOver6() {
  viewMoreSkill.style.display = "inline-block";
}
function handleOnMouseOut6() {
  viewMoreSkill.style.display = "none";
}

if ((viewMoreJob.textContent = "View more")) {
  viewMoreJob.addEventListener("click", function () {
    expContent.style.display = "inline-block";
    viewMoreJob.textContent = "View less";
    if ((viewMoreJob.textContent = "View less")) {
      viewMoreJob.addEventListener("click", function () {
        expContent.style.display = "none";
        viewMoreJob.textContent = "View more";
      });
    }
  });
}
if ((viewMoreEdu.textContent = "View more")) {
  viewMoreEdu.addEventListener("click", function () {
    eduContent.style.display = "inline-block";
    viewMoreEdu.textContent = "View less";
    if ((viewMoreEdu.textContent = "View less")) {
      viewMoreEdu.addEventListener("click", function () {
        eduContent.style.display = "none";
        viewMoreEdu.textContent = "View more";
      });
    }
  });
}
if ((viewMoreActiv.textContent = "View more")) {
  viewMoreActiv.addEventListener("click", function () {
    activContent.style.display = "inline-block";
    viewMoreActiv.textContent = "View less";
    if ((viewMoreActiv.textContent = "View less")) {
      viewMoreActiv.addEventListener("click", function () {
        activContent.style.display = "none";
        viewMoreActiv.textContent = "View more";
      });
    }
  });
}
if ((viewMoreFavor.textContent = "View more")) {
  viewMoreFavor.addEventListener("click", function () {
    favorContent.style.display = "flex";
    viewMoreFavor.textContent = "View less";
    if ((viewMoreFavor.textContent = "View less")) {
      viewMoreFavor.addEventListener("click", function () {
        favorContent.style.display = "none";
        viewMoreFavor.textContent = "View more";
      });
    }
  });
}
if ((viewMoreLang.textContent = "View more")) {
  viewMoreLang.addEventListener("click", function () {
    langContent.style.display = "inline-block";
    viewMoreLang.textContent = "View less";
    if ((viewMoreLang.textContent = "View less")) {
      viewMoreLang.addEventListener("click", function () {
        langContent.style.display = "none";
        viewMoreLang.textContent = "View more";
      });
    }
  });
}
if ((viewMoreSkill.textContent = "View more")) {
  viewMoreSkill.addEventListener("click", function () {
    skillContent.style.display = "inline-block";
    viewMoreSkill.textContent = "View less";
    if ((viewMoreSkill.textContent = "View less")) {
      viewMoreSkill.addEventListener("click", function () {
        skillContent.style.display = "none";
        viewMoreSkill.textContent = "View more";
      });
    }
  });
}
// viewLess.addEventListener("click", function () {
//   comList.style.display = "none";
//   viewMore.style.display = "inline-block";
//   viewLess.style.display = "none";
// });

// console.log(viewMore);
// function handleViewMore(element) {
//   const parentElement = element.closest(".parent");
//   const sectionContent = parentElement.querySelector(".com-lish");
//   console.log("check section", sectionContent);
// sectionContent.forEach((element) => {
//   element.style.display = "block";
// });
// }
