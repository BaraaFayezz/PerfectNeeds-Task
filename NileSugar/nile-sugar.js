$(document).ready(function () {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    $("#rec1").attr("src", "./photos/Rectangle 974 (Stroke).png");
    $("#rec1").removeClass("rectangle-left");
    $("#rec1").addClass("rec1-sm");
    $("#rec2").attr("src", "./photos/Rectangle 973 (Stroke).png");
    $("#rec2").removeClass("rectangle-right");
    $("#rec2").addClass("rec2-sm");
    $("#rec-img2").attr("src", "./photos/Group 4116.png");
    $("#rec-img2").removeClass("rectangle-img2");
    $("#rec-img2").addClass("rec-img2-sm");
    $("#rec-img1").removeClass("rectangle-img1");
    $("#rec-img1").addClass("rec-img1-sm");
    $("#nile-sugar-img").remove();
    $("#nile-sugar-element1").append(
      '<div class="w-100 mx-4"><h6 class="d-inline-block text-warning mx-5 my-3">NILE SUGAR<p class="d-inline-block mx-3 text-body-secondary fw-bold ">WHO ARE WE?</p></h6><p class="d-bloc mx-3k text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,delectus! <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div>'
    );
    $("#nile-sugar-text").empty();
    $("#nile-sugar-text").append(
      '<img src="./photos/pngwing 1.png" class="nile-sugar-img-style"/>'
    );
    $("#aligns-img").empty();
    $("#aligns-text").empty();
    $("#aligns-img").append(
      '<div class="w-100 mx-4"><h6 class="d-inline-block text-warning mx-5 mt-5">ALINGS AND ORGANIZING TECHNIQUE</h6><p class="text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,delectus! <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div>'
    );
    $("#aligns-text").append(
      '<img src="./photos/image 207.png" class="align-img-style"/>'
    );
    $("#products-content").empty();
    $("#products-content").append(
      '<div class="w-100"><div class="col-12"><h6 class="text-warning text-end mx-5">PRODUCTS CREATIONS</h6><P class="text-secondary-emphasis text-end mx-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quae quos repellat minima, laudantium aliquid hic laboriosam vero quaerat reiciendis aut tenetur corporis ab earum?</P></div><div class="col-12"><img src="./photos/image 209.png" class="product-img1"></div><div class="col-12 mt-5"><h6 class="text-warning text-end mx-5">DETAILS</h6><P class="d-block text-secondary-emphasis text-end mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia quis eaque illum minus dicta!</P></div><div><img src="./photos/image 210.png" class="product-img2"></div></div></div>'
    );
    $("#language-text").empty();
    $("#language-img").empty();
    $("#language-img").append(
      '<div class="w-100 mx-5 text-left"><h6 class="text-warning mx-5">LANGUAGE</h6><p class="mx-5 text-secondary-emphasis">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,delectus! <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div>'
    );
    $("#language-text").append(
      '<img src="./photos/image 211.png" class="language-img1-jq mt-5"/><img src="./photos/image 212.png" class="language-img2-jq mt-5">'
    );
  }
});
