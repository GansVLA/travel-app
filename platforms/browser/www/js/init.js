
// Initialize your app
var myApp = new Framework7({
    animatePages: true,
    swipePanel: 'left',
    animatePages: true
});



// Export selectors engine
var $$ = Dom7;

$$('.create-popup').on('click', function () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                        '<img src="./images/portada.jpg" width="100%"'+
                      '<p align="justify"><b>Turismo Izúcar</b>, es una aplicación móvil en la cual se pretende promover los atractivos turísticos de nuestro municipio y al rededores, mostrando desde sitios culturales hasta lugares de diversión y convivencia familiar.</p>'+
                      '<h3>Contáctanos</h3><br><center><a href="mailto:itzocantur@gmail.com?Subject=Mensaje%20Aplicacion%20Turismo%20Izucar" target="_blank" class="external"><img src="./images/message.svg" width="19%"></a>  <a href="fb://profile/1437194336587982" target="_blank" class="external facebook"><img src="./images/facebook.svg" width="19%"></a></center>'+
                      '<p>Comparte a tus amigos en WhatsApp!</p><br><center><a href="whatsapp://send?text=Descarga%20Turismo%20Izucar%20en:%20https://play.google.com/store/apps/details?id=com.turismoizucar.app%20,Es%20Gratis!" target="_blank" class="external"><img src="./images/whatsapp.svg" width="19%"></a></center>'+
                      '<br>'+
                      '<p class="color-red" align="center">Es necesaria una conexión a internet para un mejor funcionamiento</p><br>'+
                      '<p align="center"><a href="#" class="mod close-popup">Cerrar</a></p>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
});          
 
 $$('.popup-weather').on('click', function () {
  var popupHTML = '<div class="popup theme-new">'+
                    '<div class="content-block">'+
                        '<iframe src="./weather.html" width="100%" height="520px" frameborder="none" scrolling="no">' +
                        '</iframe>' +
                       '<br><br><br><br><br><br><p align="center"><a href="#" class="close-popup mod-01">Cerrar</a></p>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
}); 

$$('.leer-articulo').on('click', function () {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                        '<h3 align="center">Santo Domingo de Guzmán e Izúcar: una historia compartida</h3>'+
                            '<img src="http://4.bp.blogspot.com/-t-bQKu2XxiM/VcL8g5A91yI/AAAAAAAAAhM/sJZv5H1V4P4/s320/foto%2Bc.jpg" width="100%"'+
                                '<p align="justify">El antiguo Itzocan, hoy Izúcar, fue un importante asentamiento que a la llegada de los españoles se encontraba bajo el dominio de los aztecas; el mismo Hernán Cortes destaca dos cosas de Izúcar: sus muchos templos y su sistema de canales, que todavía subsiste. Como principal ciudad de la región e importante nodo comercial, no es de sorprenderse que los dominicos eligieran Itzocan para fundar su convento y de allí trabajar en la evangelización de los indígenas.<br><br>La mención más antigua de un dominico en Izúcar data de 1533, se llamaba Francisco de Mayorga y fue el primer evangelizador de los izucarenses; en 1541 el convento ya aparece enlistado en los documentos de la orden dominica siendo su primer vicario fray Luis Rengifo. En 1550 el virrey concede un repartimiento de indígenas para construir el edificio que actualmente vemos y cuya iglesia se concluyó hasta 1612 como reza la inscripción de la fachada del templo...<br><ins><a href="https://goo.gl/AU9lD2" class="external link" target="_blank">Seguir leyendo</a></ins></p>'+
                     
                      '<br><p align="center"><a href="#" class="mod close-popup">Cerrar</a></p>'+
                    '</div>'+
                  '</div>'
  myApp.popup(popupHTML);
});          

/*$$('.create-picker').on('click', function () {
  // Check first, if we already have opened picker
  if ($$('.picker-modal.modal-in').length > 0) {
    myApp.closeModal('.picker-modal.modal-in');
  }
  myApp.pickerModal(
    '<div class="picker-modal">' +
      '<div class="toolbar theme-new">' +
        '<div class="toolbar-inner">' +
          '<div class="left"></div>' +
          '<div class="right"><a href="#" class="close-picker button color-red">Close</a></div>' +
        '</div>' +
      '</div>' +
      '<div class="picker-modal-inner">' +
        '<iframe src="./weather.html" width="100%" height="100%" frameborder="none">' +
        '</iframe>' +
      '</div>' +
    '</div>'
  )
});   */                



// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});



// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}