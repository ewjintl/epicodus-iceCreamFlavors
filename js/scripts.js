$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var array = [];
    $("input:checkbox[name=flavors]:checked").each(function()  {
      array.push(" " + $(this).val());
    });
    console.log(array);
    $('#output').append(array + "<br>");
    
    $('#formOne').hide();

  });
});

// $(document).ready(function() {
//   $("formOne").submit(function(event) {
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput);
//     });

//     $("#output").show();

//     event.preventDefault();
//   });
// });