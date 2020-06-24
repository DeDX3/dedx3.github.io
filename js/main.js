$("#main-nav a, .btn, .btn-main, .btn-light").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 111,
      },
      800
    );
  }
});
