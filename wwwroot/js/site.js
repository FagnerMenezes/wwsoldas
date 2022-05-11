// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function ocultaDiv() {

     let div = document.getElementById('div-privacidade_');
     div.style.display = 'none';

}


$(document).ready(function () {
     $(function () {       
          document.querySelector("link[rel='shortcut icon']").href = "/wwwroot/images/favicon_io (1)/favicon.ico";
         // document.querySelector("link[rel='shortcut icon']").href = "/wwwroot/images/logo.wwsoldas.png";
     });
});