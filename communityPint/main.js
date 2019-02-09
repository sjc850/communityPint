$("#view-room").on("click", function() {
  const taproom = $("#taproom").position().top;

  $("html, body").animate(
    {
      scrollTop: taproom
    },
    900
  );
});

$("#view-beer").on("click", function() {
  const beer = $("#beer").position().top;

  $("html, body").animate(
    {
      scrollTop: beer
    },
    900
  );
});

$("#view-com").on("click", function() {
  const community = $("#community").position().top;

  $("html, body").animate(
    {
      scrollTop: community
    },
    900
  );
});

$("#view-contact").on("click", function() {
  const contact = $("#contact").position().top;

  $("html, body").animate(
    {
      scrollTop: contact
    },
    900
  );
});
