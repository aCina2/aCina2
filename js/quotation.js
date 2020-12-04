function sendView(dataSection) {

  let intSection = dataSection + 1;
  if (intSection == 1) {
    document.getElementById("section_0").classList.remove('section-active');
    document.getElementById("section_0").classList.add('section-hide');
    document.getElementById("section_1").classList.remove('section-hide');
    document.getElementById("section_1").classList.add('section-active');
  }
  if (intSection == 2) {
    document.getElementById("section_1").classList.remove('section-active');
    document.getElementById("section_1").classList.add('section-hide');
    document.getElementById("section_2").classList.remove('section-hide');
    document.getElementById("section_2").classList.add('section-active');
  
  }
  if (intSection == 3) {
    document.getElementById("section_2").classList.remove('section-active');
    document.getElementById("section_2").classList.add('section-hide');
    document.getElementById("section_3").classList.remove('section-hide');
    document.getElementById("section_3").classList.add('section-active');


  }
}

function backView(dataSection) {

  let intSection = dataSection - 1;
  if (intSection == 2) {
    document.getElementById("section_3").classList.remove('section-active');
    document.getElementById("section_3").classList.add('section-hide');
    document.getElementById("section_2").classList.remove('section-hide');
    document.getElementById("section_2").classList.add('section-active');
  }
  if (intSection == 1) {
    document.getElementById("section_2").classList.remove('section-active');
    document.getElementById("section_2").classList.add('section-hide');
    document.getElementById("section_1").classList.remove('section-hide');
    document.getElementById("section_1").classList.add('section-active');
  }

  if (intSection == 0) {

    document.getElementById("section_0").classList.remove('section-hide');
    document.getElementById("section_0").classList.add('section-active');
    document.getElementById("section_2").classList.remove('section-active');
    document.getElementById("section_2").classList.add('section-hide');
    document.getElementById("section_1").classList.remove('section-active');
    document.getElementById("section_1").classList.add('section-hide');
  }

}

function animationQuotatio(dataSelect) {

  let imgSparkly = document.getElementById("imgSparkly");
  let imgRotateBook = document.getElementById("imgRotateBook");
  let imgTop = document.getElementById("imgTop");
  let imgCover = document.getElementById("imgCover");


  if (dataSelect == 0) {
    imgSparkly.setAttribute("src", "assets/img/icons/notebook.png");
  } else if (dataSelect == 1) {
    imgSparkly.setAttribute("src", "assets/img/icons/notebookSparkly.png");

  } else if (dataSelect == 2) {
    imgRotateBook.setAttribute("src", "assets/img/icons/rotate.png");

  } else if (dataSelect == 3) {
    imgRotateBook.setAttribute("src", "assets/img/icons/rotateH.png");

  } else if (dataSelect == 4) {
    imgTop.setAttribute("src", "assets/img/icons/notebookHard.png");

  } else if (dataSelect == 5) {
    imgTop.setAttribute("src", "assets/img/icons/notebookRustic.png");

  } else if (dataSelect == 6) {
    imgCover.setAttribute("src", "assets/img/icons/bookDie.png");

  } else if (dataSelect == 7) {
    imgCover.setAttribute("src", "assets/img/icons/bookVu.png");

  } else if (dataSelect == 8) {
    imgCover.setAttribute("src", "assets/img/icons/bookNin.png");

  }

}

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
var Pre_quo_bw, Pre_quo_color, total = 0;

function getDataSum(id) {

  if (id == "Pre_quo_color") {
    Pre_quo_color = document.getElementById(id).value;
  } else {
    Pre_quo_bw = document.getElementById(id).value;
  }

  if ((Pre_quo_color === undefined) || (Pre_quo_color == "")) {
    Pre_quo_color = 0;
  }


  if ((Pre_quo_bw === undefined) || (Pre_quo_bw == "")) {
    Pre_quo_bw = 0;
  }
  total = parseInt(Pre_quo_color) + parseInt(Pre_quo_bw);
  document.getElementById("labelTotal").innerHTML = "<b>Total Páginas: </b>" + total;
}
//************GET DATA FORM**************//
function getDataForm(idForm) {
  let objForm = document.getElementById(idForm);
  let jsonData = '';
  let selectForm = objForm.querySelectorAll('select');
  for (let i = 0; i < objForm.length; i++) {

    let input = false;
    if (objForm[i].type == "email") {
      input = true;
    }
    if (objForm[i].type == "password") {
      input = true;
    }
    if (objForm[i].type == "text") {
      input = true;
    }
    if (objForm[i].type == "number") {
      input = true;
    }
    if (input) {

      jsonData += '"' + objForm[i].id + '":' + '"' + objForm[i].value + '",';

    }
  }
  ///For select ///
  for (let j = 0; j < selectForm.length; j++) {
    let objSelect = document.getElementById(selectForm[j].id);
    jsonData += '"' + selectForm[j].id + '":' + '"' + objSelect.options[objSelect.selectedIndex].value + '",';
  }
  jsonData = jsonData.substring(0, jsonData.length - 1);
  return jsonData;
}
//************ VALIDATOR FORM**************//
function sendData(id, type) {

  if (validatorForm(id)) {
    let jSonData = getDataForm(id);
    let ArrayData = "";
    if (type == 0) {

      sendView(type);
    } else if (type == 1) {
      sendView(type);
      

    } else if (type == 2) {
      sendView(type); 
    }
     else if (type == 3) {
      //let confir = confirm("Desea la validar la información suministrada");
      //if (!confir) {
       
        let objBody = document.getElementById("content_secction");
        let objForm = objBody.querySelectorAll("input");

        ArrayData += '"NameContact":"' + document.getElementById("Client_contactName").value + '",';
        ArrayData += '"Name":"' + document.getElementById("Client_name").value + '",';
        ArrayData += '"Address":"' + document.getElementById("Client_address").value + '",';
        ArrayData += '"Email":"' + document.getElementById("Client_email").value + '",';
        ArrayData += '"Tel":"' + document.getElementById("Client_contactCel").value + '"';
        ArrayData += "}";

        SetNewClient(ArrayData, document.getElementById("Client_email").value);
      //}
      //console.log(ArrayData);
    }



  }

}

function validatorForm(idForm) {
  let objForm = document.getElementById(idForm);

  ///For input ///
  for (let i = 0; i < objForm.length; i++) {

    if (objForm[i].required == true) {
      if (objForm[i].type == "email") {
        if (objForm[i].value == "" || objForm[i].value.length == 0) {
          return false;
        }
      }
      if (objForm[i].type == "password") {
        if (objForm[i].value == "" || objForm[i].value.length == 0) {
          return false;
        }
      }
      if (objForm[i].type == "text") {
        if (objForm[i].value == "" || objForm[i].value.length == 0) {
          return false;
        }
      }
      if (objForm[i].type == "number") {
        if (objForm[i].value == "" || objForm[i].value.length == 0) {
          return false;
        }
      }

    }
  }

  return true;
}
/********************LOAD GET CODE */
function getDataCode(json) {

  try {
    var xhttp = new XMLHttpRequest();
    let JsonData = "";

    xhttp.open("POST", "application/php/bo/bo_pre_quote.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var jsonObj = JSON.parse(xhttp.responseText);
        if (jsonObj[0]["Pre_quo_consec"] != "" || jsonObj.length != 0) {
          //console.log(xhttp.responseText);
          sendPreQuote(json, jsonObj);
        }

      }
    };

    JsonData = '{"GET":"GET_PRE_CODE"}';

    xhttp.send(JsonData);
  } catch (error) {
    console.error(error);
  }
}
/********************LOAD GET CODE */
function SetNewClient(data, email) {

  try {
    let JsonData = "";
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "application/php/bo/bo_pre_quote.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var jsonObj = JSON.parse(xhttp.responseText);
        if (jsonObj != "" || jsonObj.length != 0) {
          //console.log(jsonObj);
          getNewClient(email);
        }
      }
    };

    JsonData = '{"POST":"POST_PRE_CLIENT",' + data;

    xhttp.send(JsonData);
    //console.log(JsonData);
  } catch (error) {
    console.error(error);
  }
}
/********************LOAD GET EMAIL */
function getNewClient(email) {

  try {
    let JsonData = "";
    var jsonObj;
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "application/php/bo/bo_pre_quote.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        jsonObj = JSON.parse(xhttp.responseText);
        if (jsonObj[0]["Pre_client_id"] != "" || jsonObj.length != 0) {
          //console.log(xhttp.responseText);
          getDataCode(jsonObj);
        }

      }
    };

    JsonData = '{"GET":"GET_PRE_CLIENT","Email":"' + email + '"}';

    xhttp.send(JsonData);
    //console.log(JsonData);
  } catch (error) {
    console.error(error);
  }

}
function sendPreQuote(jsonClient, json) {
  let code = json[0]["Pre_quo_consec"];
  let ArrayData = "";
  var ele;
  ArrayData += '"Pre_client_id":"' + jsonClient[0]["Pre_client_id"] + '","Pre_quo_consec":"' + code + '",';
  ArrayData += '"Pre_quo_bw":"' + document.getElementById("Pre_quo_bw").value + '",';
  ArrayData += '"Pre_quo_color":"' + document.getElementById("Pre_quo_color").value + '",';
  ArrayData += '"Quo_observ":"' + document.getElementById("Quo_observ").value + '",';
  ele = document.getElementsByName('topBook');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      ArrayData += '"Pre_quo_top":"' + ele[i].value + '",';
    }
  }
  ele = document.getElementsByName('pre_quo_inserts');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      ArrayData += '"Pre_quo_inserts":"' + ele[i].value + '",';
    }
  }
  ele = document.getElementsByName('sparklyBook');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      ArrayData += '"Pre_quo_plast":"' + ele[i].value + '",';
    }
  }
  ele = document.getElementsByName('sizeBook');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      let getData = ele[i].value;      
      ArrayData += '"Pre_quo_width":"' + getData.split(",")[0] + '",';
      ArrayData += '"Pre_quo_height":"' + getData.split(",")[1] + '",';
      ArrayData += '"Pre_quo_format":"' + getData.split(",")[2] + '",';
    }

  }
  ele = document.getElementsByName('Quo_project');
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      ArrayData += '"Pre_quo_project":"' + ele[i].value + '",';
    }
  }
  ele = document.getElementsByName('coverBook');

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      ArrayData += '"Pre_quo_coverFinish":"' + ele[i].value + '",';
    }
  }
  ArrayData += '"Pre_quo_quantity":"' + document.getElementById("Quo_quantity").value + '",';
  ArrayData += '"Pre_quo_delivPlace":"' + document.getElementById("Client_address").value + '"}';
  try {
    let JsonData = "";

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "application/php/bo/bo_pre_quote.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        if (xhttp.responseText != 0) {
          alert("Información enviada con éxito");
          sendMail('{"POST":"POST_MAIL_WEB",' + ArrayData);
          window.location.assign("index.html");
        }
      }
    };

    JsonData = '{"POST":"POST_PRE_QUOTE",' + ArrayData;
    xhttp.send(JsonData);

  } catch (error) {
    console.error(error);
  }


}
function sendMail(json) {
  try {
    dataSetQuote = json;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "application/php/mail/notification.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(xhttp.responseText);
        if (xhttp.responseText != 0) {
          //createModalAlert("Correo enviado con éxito", 1, 3000);
          alert("Correo enviado con éxito");
        } else {
          //createModalAlert("Error al enviar el correo", 3, 4000);
          alert("Error al enviar el correo");
        }
      }
    };
    console.log(dataSetQuote);
  } catch (error) {
    console.error(error);
    alert("Se presentó un error en el registro");
  }
  xhttp.send(dataSetQuote);

}
