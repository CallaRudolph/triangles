$(document).ready(function(){
  $("#everything").submit(function(event){
    event.preventDefault();
console.log("test")

    var triside1 = parseInt($("input#side1").val());
    var triside2 = parseInt($("input#side2").val());
    var triside3 = parseInt($("input#side3").val());
    console.log(triside1)
    console.log(triside2)
    console.log(triside3)

    var equilateral = "Your triangle is equilateral"
    var isosceles = "Your triangle is isosceles"

    if (triside1 === triside2 && triside1 === triside3) {
      $("#answer").text(equilateral);
      $("#answer").show();
    } else if (triside1 === triside2 && triside1 !== triside3) {
      $("#answer").text(isosceles);
      $("#answer").show();
    } else if (triside1 === triside3 && triside1 !== triside2) {
      $("#answer").text(isosceles);
      $("#answer").show();
    } else if (triside2 === triside3 && triside1 !== triside2) {
      $("#answer").text(isosceles);
      $("#answer").show();
    }


  });
});
