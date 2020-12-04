
    function createProject(data) {
    
      $(".col-12").removeClass('start');
      if (data == 0 || data == 1) {
       
        $(".active_").addClass('btn-hide');
        document.getElementById("btnContinue").classList.remove('btn-hide');
        document.getElementById("btnContinue").classList.add('btn-active');

      } else {

        $(".active_").removeClass('btn-hide');
        $(".active_").addClass('btn-active');
        document.getElementById("btnContinue").classList.remove('btn-active');
        document.getElementById("btnContinue").classList.add('btn-hide');


      }
    }

    function sendData(id) {

      if (validatorForm(id)) {
        let jSonData = getDataForm(id);
        //$('#alert').alert("show");
        alert("Solicitud enviada con éxito");
        //console.log();
        sendMail('{"POST":"POST_MAIL_CONTACT",' + jSonData+'}');
        window.location.assign("index.html")
      } else {

      }
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
