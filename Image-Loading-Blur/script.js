window.addEventListener("load", function () {
  let lazy = document.getElementsByClassName("medium-img");
  for (let n = 0, len = lazy.length; n < len; n++) {
    console.log(lazy[n].children[0]);
    lazy[n].children[0].setAttribute("src", lazy[n].getAttribute("data-src"));
    lazy[n].children[0].addEventListener("load", function (e) {
      e.target.classList.add("no-blur");
    });
  }
});
