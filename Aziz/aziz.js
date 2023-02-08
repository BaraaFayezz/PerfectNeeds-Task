$(document).ready(function () {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    $("#visit-website").remove();
    $("#arrow-id").remove();
    $("#rec1").attr("src", "./photos/Rectangle 974 (Stroke).png");
    $("#rec1").removeClass("rectangle-left");
    $("#rec1").addClass("rec1-sm");
    $("#rec2").attr("src", "./photos/Rectangle 973 (Stroke).png");
    $("#rec2").removeClass("rectangle-right");
    $("#rec2").addClass("rec2-sm");
    $("#rec-img2").attr("src", "./photos/Group 3960.png");
    $("#rec-img2").removeClass("rectangle-img2");
    $("#rec-img2").addClass("rec-img2-sm");
    $("#rec-img1").removeClass("rectangle-img1");
    $("#rec-img1").addClass("rec-img1-sm");
    $("#aziz-img").remove();
    $("#aziz-element1").append(
      '<div class="w-100 mx-4"> <b class="d-inline-block text-warning mx-5 my-4">AZIZ<span class="d-inline-block text-body-secondary mx-2">WHO ARE WE?</span></b><p class="d-block text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,delectus! <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div>'
    );
    $("#aziz-text").empty();
    $("#aziz-text").append(
      '<img src="./photos/Frame.png" class="aziz-img-style"/>'
    );
    $("#aligns-img").empty();
    $("#aligns-text").empty();
    $("#aligns-img").append(
      '<div class="w-100 mx-4"><b class="d-inline-block text-warning mx-5 mt-5">HOMEPAGE</b><p class="d-block text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt placeat eius facere magnam, beatae facilis enim explicabo! Cumque, voluptas. <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div>'
    );
    $("#aligns-text").append(
      '<img src="./photos/image 171.png" class="align-img-style"/>'
    );
    $("#products-content").empty();
    $("#products-content").append(
      '<div class="w-100"><div class="col-12"><h6 class="text-warning text-end mx-5">PRODUCTS CREATIONS</h6><P class="text-secondary-emphasis text-end mx-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, quae quos repellat minima, laudantium aliquid hic laboriosam vero quaerat reiciendis aut tenetur corporis ab earum?</P></div><div class="col-12"><img src="./photos/image 209.png" class="product-img1"></div><div class="col-12 mt-5"><h6 class="text-warning text-end mx-5">DETAILS</h6><P class="d-block text-secondary-emphasis text-end mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat officia quis eaque illum minus dicta!</P></div><div><img src="./photos/image 210.png" class="product-img2"></div></div></div>'
    );
    $("#language-text").empty();
    $("#language-img").empty();
    $("#language-img").append(
      '<div class="w-100 mx-4"><b class="text-warning mx-5 mt-5">POPUP STYLE</b><p class="text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,delectus!</p></div>'
    );
    $("#language-text").append(
      '<img src="./photos/image 173.png" class="language-img1-jq mt-5"/><img src="./photos/image 174.png" class="language-img2-jq mt-5">'
    );
    $("#menu-id").append(
      '<div class="w-100 text-end"><div class="col-12"><b class="text-warning mx-5 mt-5">MENU</b><p class="d-block text-secondary-emphasis mx-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt placeat eius facere magnam, beatae facilis enim explicabo! Cumque, voluptas. <br><p class="text-secondary-emphasis mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ea non, qui porro culpa cum.</p></p></div><div class="col-12"><img src="./photos/image 172.png" class="menu-img"></div></div>'
    );
  }
});
