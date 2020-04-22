
function carouselAnimation() {
var objContainer = document.querySelector("#gridCarousel");
var objImg = objContainer.querySelectorAll("img[src]");
var objAlt = objContainer.querySelectorAll("img[alt]");
var objA = objContainer.querySelectorAll("a[href]");
var objH4 = objContainer.querySelectorAll("h4[id]");
var cont = 0;
var arraySrc=new Array();
var arrayhref=new Array();
var arrayAlt=new Array();
var arrayH4=new Array();

    for (var i = 0; i < objImg.length; i++) {
    arraySrc[i] = objImg[i].getAttribute("src");
    arrayhref[i]=objA[i].getAttribute("href");
    arrayAlt[i]=objAlt[i].getAttribute("alt");
   arrayH4[i]=objH4[i].getAttribute("id");
    //console.log(objH4[i].getAttribute("id"));
    }

    setInterval(function () {
    let img = shuffle(arraySrc,arrayAlt,arrayH4);

    for(var i=0;i<objImg.length;i++){
    objImg[i].setAttribute("src", img[0][i]);
    objA[i].setAttribute("href", img[0][i]);
    objAlt[i].setAttribute("alt", img[1][i]);
    document.getElementById(img[2][i]).innerHTML="";
    document.getElementById(img[2][i]).innerHTML=""+img[1][i];
  
    }

    }, 1300);
    }
  
function shuffle(arra1,arra2,arra3) {
var ctr = arra1.length, temp, tem2,tem3, index;

// While there are elements in the array
while (ctr > 0) {
// Pick a random index
index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
ctr--;
// And swap the last element with it
temp = arra1[ctr];
arra1[ctr] = arra1[index];
arra1[index] = temp;
temp2 = arra2[ctr];
arra2[ctr] = arra2[index];
arra2[index] = temp2;
temp3 = arra3[ctr];
arra3[ctr] = arra3[index];
arra3[index] = temp3;
}
var array=new Array();
array[0]=arra1;
array[1]=arra2;
array[2]=arra3;
return array;
}

//var arrayBody=new Array("<p> Diseñamos tu anuario a tu medida. <b>CO-CREANDO</b> y acompañándote a desarrollar cada idea en un proceso de aprendizaje INNOVADOR con tu imaginación y coherencia institucional.<br>Para llevar a cabo un libro IMPECABLE, en su desarrollo, es necesario que todas las actividades estén trabajando en la misma dirección.<br>Un proceso IMPECABLE empieza por un continuo acompañamiento al comité de anuario a partir de reuniones periódicas que le dan continuidad e identidad al proyecto.<br>En CUATRO etapas Preparación: “Nos sentamos a Co-crear” Desarrollamos la idea con expertos y procesos de creación. Asesoría en diseño y fotografía: “Manos a la obra” Plasmamos todo el proceso de creación en un diseño y fotografía innovadoras. Asesoría editorial: “Déjate guiar por la voz la de la experiencia” logrando una publicación con coherencia editorial sin olvidar lo innovador de tu publicación. Producción: “Tic tac como las manecillas del reloj” Así va ser nuestro proyecto en cada etapa para cumplir al 100% los tiempos de producción. </p>","<p>Realizamos fotografía especializada es:<br><b>Fotografía INSTITUCIONAL</b><br><b>Retrato de SENIORS</b><br><b>Fotografía INFANTIL</b><br><b>Cubrimiento de EVENTOS</b><br>Contamos con un grupo de expertos en fotografía junto a equipos de alta calidad que logran con la fotografía institucional y de eventos retratar lo que tienes en mente, siguiendo la coherencia gráfica que se ha desarrollado en el proyecto.<br>Retratar a cada alumno de la promoción es un desafío que tomamos con todo el gusto e ingenio alcanzando tomas impecables que crean una página especial e inolvidable.</p>","<p>Hacemos de los momentos algo <b>“más que un instante”</b> con un grupo de fotógrafos especializados en manejo infantil logramos magnificas tomas que logran plasmar la felicidad de cada etapa de los más peques.<br>Tenemos la combinación ideal al armonizar las tomas fotográficas y junto con nuestro otro grupo de expertos en diseño industrial innovamos en un recuerdo único para cada familia.<br>Trabajamos a través de los colegios los cuáles en alianza se vuelven el canal para hacer llegar este recuerdo único a cada familia y lo puedan disfrutar por siempre.<br>También ayudamos a financiar tu anuario.</p>"); 
var arrayTitle=new Array("ANUARIOS","TRIVIA FOTOGRAFÍA","ORANGE FOTOGRAFÍA");
var arrayBody=new Array("InfAnuarios_01.jpg","Inffotografia_01.jpg","InfOrange_01.jpg");
function changeModal(idServices){

    let objModalTitle=document.getElementById("servicesModalLabel");
    let objModalBody=document.getElementById("modal-body");

    objModalTitle.innerHTML=arrayTitle[idServices];
    let img='<img src="assets/img/services/'+arrayBody[idServices]+'">';

    objModalBody.innerHTML=img;

}