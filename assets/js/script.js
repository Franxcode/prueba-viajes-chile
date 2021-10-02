// 1st JS functionality - Tooltip on Quienes Somos Columns Icons.
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
// 2nd JS functionality - Toggle Text On and Off by clicking the Title under Destacados section.
const h5_card_title_1_fx = document.getElementById("h5_card_title_1_fx");
const p_card_text_1_fx = document.getElementById("p_card_text_1_fx");

h5_card_title_1_fx.addEventListener("click", function(){
    p_card_text_1_fx.classList.toggle("d-none");
});

const h5_card_title_2_fx = document.getElementById("h5_card_title_2_fx");
const p_card_text_2_fx = document.getElementById("p_card_text_2_fx");

h5_card_title_2_fx.addEventListener("click", function(){
    p_card_text_2_fx.classList.toggle("d-none");
});

const h5_card_title_3_fx = document.getElementById("h5_card_title_3_fx");
const p_card_text_3_fx = document.getElementById("p_card_text_3_fx");

h5_card_title_3_fx.addEventListener("click", function(){
    p_card_text_3_fx.classList.toggle("d-none");
});

const h5_card_title_4_fx = document.getElementById("h5_card_title_4_fx");
const p_card_text_4_fx = document.getElementById("p_card_text_4_fx");

h5_card_title_4_fx.addEventListener("click", function(){
    p_card_text_4_fx.classList.toggle("d-none");
});