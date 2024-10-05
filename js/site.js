 /* search JQuery */

// (function () {
//  $("#myInput").on("keyup", function() {
//    var value = $(this).val().toLowerCase();
//    $("#myList li").filter(function() {
//      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//    });
//  });
//});

 /* search JQuery  */

  /* Cookie scribt */
  const cookieBox = document.querySelector(".wrapper"),
        blockbox = document.querySelector(".blockpage"),
        acceptBtn = cookieBox.querySelector("button");
    acceptBtn.onclick = () => {
        //setting cookie for 1 month, after one month it'll be expired automatically
        document.cookie = "CookieBy=AlmtmyzExpress; path=/;max-age=" + 60 * 60 * 24 * 30;
        if (document.cookie) { //if cookie is set
            cookieBox.classList.add("hide"); //hide cookie box
            blockbox.classList.add("hide");
        } else { //if cookie not set then alert an error
            alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
        }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=AlmtmyzExpress"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
    checkCookie != -1 ? blockbox.classList.add("hide") : blockbox.classList.remove("hide");

  
/* Cookie script end  */




/* SUBSCRIBE SCRIBT */


function ValidateEmail(inputText)

{
  let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return res.test(inputText);
}
// Submit post on submit
function SubscribeJs() {
    event.preventDefault();

    console.log("form submitted!")  // sanity check
    valid = ValidateEmail($("#post-text").val());
    if(valid)
    {
    create_post();
    }
    else
    {
      var text = gettext('Entered e-mail is invalid');
            $('#post-text').val(''); // remove the value from the input
            $("#subscribe-msg").prepend(text);
            $("#subscribe-msg").addClass("cmt-btn text-white");
            $("#subscribe-msg").addClass("bgalmtmyzred");
            setTimeout(function() {
            $('#subscribe-msg').fadeOut('fast');
            $("#subscribe-msg").removeClass("cmt-btn text-white");
            $("#subscribe-msg").removeClass("bgalmtmyzred");
        }, 5000);
    }
};

function create_post() {
     var formData = new FormData();
    var csrftoken = $("[name=csrfmiddlewaretoken]").val();
    formData.append('csrfmiddlewaretoken', csrftoken);
    var Email = $("#post-text").val();
    formData.append('post-text', Email);
    console.log(formData);
    $.ajax({
        url : "ajax/create_post", // the endpoint
        type : "POST", // http method
        processData: false,
        contentType: false,
        data : formData, // data sent with the post request

        // handle a successful response
        success : function(json) {
          var text = gettext('Subscription Added');
            $('#post-text').val(''); // remove the value from the input
            $("#subscribe-msg").prepend(text);
            $("#subscribe-msg").addClass("cmt-btn text-white");
            $("#subscribe-msg").addClass(" bgalmtmyzred");
            setTimeout(function() {
            $('#subscribe-msg').fadeOut('fast');
            $("#subscribe-msg").removeClass("cmt-btn text-white");
            $("#subscribe-msg").removeClass("bgalmtmyzred");
        }, 5000);

        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
          var text = gettext('You are Already Subscribed');
            $('#post-text').val(''); // remove the value from the input
            $("#subscribe-msg").prepend(text);
            $("#subscribe-msg").addClass("cmt-btn text-white");
            $("#subscribe-msg").addClass("bgalmtmyzred");
            setTimeout(function() {
            $('#subscribe-msg').fadeOut('fast');
            $("#subscribe-msg").removeClass("cmt-btn text-white");
            $("#subscribe-msg").removeClass("bgalmtmyzred");
        }, 5000);
        }
    });
};


/* SUBSCRIBE SCRIBT END */


/* Chatbot Script *//* 
var eventMethod = window.addEventListener
    ? "addEventListener"
    : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod === "attachEvent"
    ? "onmessage"
    : "message";

eventer(messageEvent, function (e) {
    console.log(e);
    if (e.origin !== "https://d2ka5v04lnst0s.cloudfront.net") return;

    if (e.data.open == true) {
    // add class to show the full the cotainer
    document.getElementById("frameContainer").classList.add('chatbot-container');
    document.getElementById("").classList.remove('ar_lang_height');
    document.getElementById("frameContainer").classList.remove('en_lang_height');
    } 
    else if (e.data.close_welcome == true) {
      document.getElementById("frameContainer").classList.remove('ar_lang_height');
      document.getElementById("frameContainer").classList.remove('en_lang_height');
      document.getElementById("frameContainer").classList.add('normal-height');
    }
    else if (e.data.open == false) {
      // remove this class
      document.getElementById("frameContainer").classList.remove('chatbot-container');   
      document.getElementById("frameContainer").classList.add('normal-height');
    }
});

// please set the url of the iframe chatbot url
var url_string = document.getElementById("frameContainer").src; 
var url = new URL(url_string);
var show_welcome = url.searchParams.get("show_welcome");
var langauge = url.searchParams.get("lang");

if (show_welcome == "false") {
  document.getElementById("frameContainer").classList.add('normal-height');
} else { 
  if (langauge == "ar") {
    document.getElementById("frameContainer").classList.add('ar_lang_height');
  } else { document.getElementById("frameContainer").classList.add('en_lang_height'); }
}
 */
/* Charbot Script end */


 /* dropdown Ajax for cities */

	 $("#id_shipping_from_country").change(function () {
    var url = $("#pickupform").attr("data-cities-url");  // get the url of the `load_cities` view
    var countryId = $(this).val();  // get the selected country ID from the HTML input
    $.ajax({                       // initialize an AJAX request
      url: url,                    // set the url of the request (= localhost:8000/hr/ajax/load-cities/)
      data: {
        'country': countryId       // add the country id to the GET parameters
      },
      success: function (data) {   // `data` is the return of the `load_cities` view function
        $("#id_pickup_city").html(data);  // replace the contents of the city input with the data that came from the server
      }
    });
  });


  $("#id_shipping_to_country").change(function () {
    var url = $("#pickupform").attr("data-cities-url");  // get the url of the `load_cities` view
    var countryId = $(this).val();  // get the selected country ID from the HTML input
    $.ajax({                       // initialize an AJAX request
      url: url,                    // set the url of the request (= localhost:8000/hr/ajax/load-cities/)
      data: {
        'country': countryId       // add the country id to the GET parameters
      },
      success: function (data) {   // `data` is the return of the `load_cities` view function
        $("#id_shipping_to_city").html(data);  // replace the contents of the city input with the data that came from the server
      }
    });
  });

 /* dropdown Ajax for cities */


 /* more details tracking but */


 function myFunction(divid) {
  var spanx= document.getElementById(divid+"span");
  var spanless= document.getElementById(divid+"spanless");

  var x = document.getElementById(divid);
  $(x).toggle('slow');
  $(spanx).toggle('slow');
  $(spanless).toggle('slow');
}


 /* more details tracling */

 /* country code dropdown */

 	// Vanilla Javascript
//   var input = document.querySelector("#phone");
//   window.intlTelInput(input,({
//       // options here
//   }));
 
  $(document).ready(function() {
     $('.iti__flag-container').click(function() { 
       var countryCode = $('.iti__selected-flag').attr('title');
       var countryCode = countryCode.replace(/[^0-9]/g,'')
       $('#phone').val("");
       $('#phone').val("+"+countryCode+""+ $('#phone').val());
    });
 });

 /* country code dropdown */


	
// Reset button start
// Reset button start
function clearvalue(){
   document.getElementById('id_waybills').value = "";
}
function Profileclearvalue()
{
    document.getElementById('id_mobile_phone2').value = "";
    document.getElementById('id_Bank_Name').value = "";
    document.getElementById('id_Address').value = "";
    document.getElementById('id_email').value = "";
    document.getElementById('id_Site').value = "";
    document.getElementById('id_Beneficiary_Name').value = "";
    document.getElementById('id_IBAN_number').value = "";
    document.getElementById('id_Suburb').value = "";
    document.getElementById('id_City').value = "";
    document.getElementById('id_State').value = "";
}
//Reset Button End
$(document).ready(function() {
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    console.log('show')
    $('#mobilemodal').modal('show');
} else {
    //alert("NO MOBILE DEVICE DETECTED");
}
});


/* slides in tracking page */


$(function() {
    $('#myCarousel').carousel({interval: 2000});
    $('#myCarousel').on('slid', function() {
        var to_slide = $('.carousel-item.active').attr('data-slide-no');
        $('.myCarousel-target.active').removeClass('active');
        $('.carousel-indicators [data-slide-to=' + to_slide + ']').addClass('active');
    });
    $('.myCarousel-target').on('click', function() {
        $('#myCarousel').carousel(parseInt($(this).attr('data-slide-to')));
        $('.myCarousel-target.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* slides in tracking page end */


/* Complaint page Ajax  */
function Complaint_Ajax () {
Hidelist();

$('#id_waybillNo').on('change', function() {
	var inputValue = $('#id_waybillNo').val();
	$('.AWBerrormsg').hide();
  $('#errormsg').hide();

	if (inputValue == null || inputValue == "" )
	{
    Hidelist();
		$('.AWBerrormsg').hide();
	

	}
	else if  (inputValue.length < 8 ){
    $('.AWBerrormsg').show();
		Hidelist();
	}
	else{
		Showlist();
    $('#errormsg').hide();
		doneTyping();
	}
		
});


$('#id_email').on('change', function() {
	var inputValue = $('#id_email').val();
	$(".Emailerrormsg").hide();
	if (!IsEmail(inputValue) || inputValue == "") {
		$(".Emailerrormsg").show();
}
  else if(IsEmail(inputValue)){
    $(".Emailerrormsg").hide();
  }
  
});


$('#id_mobile_phone').on('change', function() {
	var inputValue = $('#id_mobile_phone').val();
	$(".phoneerrormsg").hide();
  $('#errormsg').hide();
  doneTyping();
	if (!IsVlaidPhone(inputValue) || inputValue == "") {
		$(".phoneerrormsg").show();
  }
  
  else if(IsVlaidPhone(inputValue)){
      $(".phoneerrormsg").hide();
      $('#errormsg').hide();
      doneTyping();
      
    }

});


	
$('#id_firstName').blur(function()
{
    if( !$(this).val() ) {
		$(".nameerrormsg1").show();
    }
	else{
		$(".nameerrormsg1").hide();
	}
	
});

$('#id_lastName').blur(function()
{
    if( !$(this).val() ) {
		$(".nameerrormsg2").show();
    }
	else{
		$(".nameerrormsg2").hide();
	}
	
});


$('#id_description').blur(function()
{
    if( !$(this).val() ) {
		$(".descerrormsg").show();
    }
	else{
		$(".descerrormsg").hide();
	}
	
});

$('#id_description').keyup(function() {
    
	var characterCount = $(this).val().length,
		current = $('#current'),
		maximum = $('#maximum'),
		theCount = $('#the-count');
	  
	current.text(characterCount);
   
	
	/*This isn't entirely necessary, just playin around*/
	if (characterCount < 70) {
	  current.css('color', '#666');
	}
	if (characterCount > 70 && characterCount < 90) {
	  current.css('color', '#6d5555');
	}
	if (characterCount > 90 && characterCount < 100) {
	  current.css('color', '#793535');
	}
	if (characterCount > 100 && characterCount < 120) {
	  current.css('color', '#841c1c');
	}
	if (characterCount > 120 && characterCount < 139) {
	  current.css('color', '#8f0001');
	}
	
	if (characterCount >= 140) {
	  maximum.css('color', '#8f0001');
	  current.css('color', '#8f0001');
	  theCount.css('font-weight','bold');
	} else {
	  maximum.css('color','#666');
	  theCount.css('font-weight','normal');
	}
	
		
  });


}

function IsVlaidPhone(phone){
	var regex = /^\+(?:[0-9]●?){9,14}[0-9]$/;
  if (!regex.test(phone)) {
    return false;
  } else {
    return true;
  }
}

function doneTyping () {
  //do something
  var inputValue = $('#id_waybillNo').val();
  var Mobilevalue = $('#id_mobile_phone').val();
  console.log("check1",inputValue);
  console.log("check2",Mobilevalue);
  if (inputValue != ""){

    var url = 'https://customerappapi.almtmyzksa.com/api/Api/Track/GetWaybillPhoneNumber?Waybillno=' + inputValue

  $.ajax({
            url: url,
            method: "GET",
			      processData: false,
        	  contentType: false,
            success: function(d) {

            if(d == null || d.HasError==true ){
                //console.log("ibside if");
                $('.AWBerrormsg').show();
                // $('.phoneerrormsg').show();
                // console.log(d)
                Hidelist();
            }
            else if (Mobilevalue == ""){
              // console.log("Nouf");
              $('.phoneerrormsg').hide();
              $('#errormsg').hide();

              }
            else if ( d.HasError==false ){
              const last9Str = String(Mobilevalue).slice(-9);
              const last9Consigneembile = String(d.ConsigneePhoneNumber).slice(-9);
              // console.log("last9Str",last9Str);
              // console.log("last9Consigneembile",last9Consigneembile);
  
              if ( last9Consigneembile != last9Str ){
  
                //document.getElementById("#phoneerrormsg").innerHTML = "Please provide correct mobile No matcheng with waybill NO!";
                $('.phoneerrormsg').show();
                //console.log("check");
                Hidelist();
              }
            
            
        
            else{
              console.log(" correct")
             // $('.phoneerrormsg').hide();
              $('.AWBerrormsg').hide();
              $('#errormsg').hide();

              Showlist();
            }}
      },
            error() {
              console.log('Error');
            }
        });
  }
  
 }

function Showlist () {
	  $("#id_complaint_reason option[value=1]").show();
		$("#id_complaint_reason option[value=2]").show();
		$("#id_complaint_reason option[value=3]").show();
		$("#id_complaint_reason option[value=4]").show();
		$("#id_complaint_reason option[value=5]").show();

}

function Hidelist () {

	$("#id_complaint_reason option[value=1]").hide();
	$("#id_complaint_reason option[value=2]").hide();
	$("#id_complaint_reason option[value=3]").hide();
	$("#id_complaint_reason option[value=4]").hide();
	$("#id_complaint_reason option[value=5]").hide();
}


function IsEmail(email) {
  //var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //More advanced regex to valid 99.99% of most emails in use, see https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
  var regex = /^[a-zA-Z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}




/* Complaint page Ajax  end */



/* ShipmentNotMine_Ajax JQuiry */
function ShipmentNotMine_Ajax () {
  $("#id_name , #id_Address , #id_email ,#id_mobile_phone ,#id_waybillNo ,#id_Receiver_name ,#id_Receiver_PhoneNumber,#id_description").on("change", function(){
    if($(this).val() != "" && $("#id_name").val() != "" && $("#id_Address").val() != "" && $("#id_email").val() != ""
                 && $("#id_mobile_phone").val() != ""&& $("#id_waybillNo").val() != "" && $("#id_description").val() != "" && $("#id_Receiver_name").val() != "" && $("#id_Receiver_PhoneNumber").val() != "") {
        $("#Submitbutt").removeAttr("disabled");
    }})}
/* ShipmentNotMine_Ajax JQuiry End */


/* Contactus JQuiry */
function Contactus_Ajax () {

  $("#id_name , #id_Company_name , #id_email ,#id_mobile_phone ,#id_service_type ,#id_description ,#id_Country ,#id_City").on("change", function(){
    if($(this).val() != "" && $("#id_name").val() != "" && $("#id_Company_name").val() != "" && $("#id_email").val() != ""
		 && $("#id_mobile_phone").val() != ""&& $("#id_service_type").val() != "" && $("#id_description").val() != "" && $("#id_Country").val() != ""  && $("#id_City").val() != ""){
        $("#Submitbutt").removeAttr("disabled");

    }})}

/* Contactus JQuiry End */


/* Complaint Chatbot script */

function setComplaint(compalint, lang) {
  jQuery("#frameContainer").attr(
    "src",
    `https://d2ka5v04lnst0s.cloudfront.net/?complaint=${compalint}&lang=${lang}`
  );
} 
/* Complaint Chatbot script end */


/* Cliam page Ajax */

function IsVlaidPhoneClaim(phone){
	var regex =  /^\+(?:[0-9]●?){6,14}[0-9]$/;
  if (!regex.test(phone)) {
    return false;
  } else {
    return true;
  }
}
function Cliam_Ajax () {

  if( !$('.claimReasonerrormsg').val() ) {
      console.log("not selected")    }
  
  $('#id_waybillNo').on('change', function() {
    var inputValue = $('#id_waybillNo').val();
    $('.AWBerrormsg').hide();
    if (inputValue == null || inputValue == "" )
    {
      $('.AWBerrormsg').hide();
    }
    else if  (inputValue.length < 8 ){
      $('.AWBerrormsg').show();
    }
    else{
      doneTypingCliam();
    }
      
  });
  
  
  $('#id_email').on('change', function() {
    var inputValue = $('#id_email').val();
    $(".Emailerrormsg").hide();
    if (!IsEmail(inputValue) || inputValue == "") {
      $(".Emailerrormsg").show();
  }
    else if(IsEmail(inputValue)){
      $(".Emailerrormsg").hide();
    }
    
  });
  
  
  $('#id_mobile_phone').on('change', function() {
    var inputValue = $('#id_mobile_phone').val();
    doneTypingCliam();
    $(".phoneerrormsg").hide();
    if (!IsVlaidPhoneClaim(inputValue) || inputValue == "") {
      $(".phoneerrormsg").show();
    }
    
    else if(IsVlaidPhoneClaim(inputValue)){
        $(".phoneerrormsg").hide();
        
      }

      else{
        doneTypingCliam();
      }
  
  });

  $('#id_IBAN').on('change', function() {
    var inputValue = $('#id_IBAN').val();
    $(".IBANerrormsg").hide();
    if (!IsVlaidIBAN(inputValue) || inputValue == "") {
      $(".IBANerrormsg").show();
    }
    
    else if(IsVlaidIBAN(inputValue)){
        $(".IBANerrormsg").hide();
        
      }
  
  });
    
  $('#id_ShipperName').blur(function()
  {
      if( !$(this).val() ) {
      $(".nameerrormsg1").show();
      }
    else{
      $(".nameerrormsg1").hide();
    }
    
  });
 
  $('#id_claim_reason').blur(function()
  {
      if( !$(this).val() ) {
      $(".claimReasonerrormsg").show();
      }
    else{
      $(".claimReasonerrormsg").hide();
    }
    
  });
  
  
  $('#id_description').blur(function()
  {
    $(".descerrormsg").hide();
    $(".descerrormsg2").hide();
    var characterCount = $(this).val().length
      if( !$(this).val() || characterCount < 10 ) {
      $(".descerrormsg").show();
      }
      else if(characterCount >= 1000){
        $(".descerrormsg2").show();
      }
      else{
      $(".descerrormsg").hide();
      $(".descerrormsg2").hide();
    }
    
  });
  
  $('#id_description').keyup(function() {
      
    var characterCount = $(this).val().length,
      current = $('#current'),
      maximum = $('#maximum'),
      theCount = $('#the-count');
      
    current.text(characterCount);
     
    
    /*This isn't entirely necessary, just playin around*/
    if (characterCount < 70) {
      current.css('color', '#666');
    }
    if (characterCount > 70 && characterCount < 90) {
      current.css('color', '#6d5555');
    }
    if (characterCount > 90 && characterCount < 100) {
      current.css('color', '#793535');
    }
    if (characterCount > 100 && characterCount < 120) {
      current.css('color', '#841c1c');
    }
    if (characterCount > 120 && characterCount < 139) {
      current.css('color', '#8f0001');
    }
    
    if (characterCount >= 1000) {
      maximum.css('color', '#8f0001');
      current.css('color', '#8f0001');
      theCount.css('font-weight','bold');

    } else {
      maximum.css('color','#666');
      theCount.css('font-weight','normal');
    }
  
    });
  
  }

  function TrackCliam_Ajax () {

    $('#id_waybillNo').on('change', function() {
      var inputValue = $('#id_waybillNo').val();
      $('.AWBerrormsg').hide();
      if (inputValue == null || inputValue == "" )
      {
        $('.AWBerrormsg').hide();
      }
      else if  (inputValue.length < 8 ){
        $('.AWBerrormsg').show();
      }
      else{
          TrackCliam();
      }
    });

    $('#id_mobile_phone').on('change', function() {
      var inputValue = $('#id_mobile_phone').val();
      $(".phoneerrormsg").hide();
      if (!IsVlaidPhoneClaim(inputValue) || inputValue == "") {
        $(".phoneerrormsg").show();
      }
      
      else if(IsVlaidPhoneClaim(inputValue)){
          $(".phoneerrormsg").hide();
          
        }
    
    });
  }
  
  function IsVlaidIBAN(Iban){
    var regex = /^[SA]{2}([0-9]\s?){22}$/;
    if (!regex.test(Iban)) {
      return false;
    } else {
      return true;
    }
  }
  function doneTypingCliam () {
    //do something
    var inputValue = $('#id_waybillNo').val();
    var Mobilevalue = $('#id_mobile_phone').val();
    console.log(inputValue);
    console.log(Mobilevalue);
    if (inputValue != ""){
  
      var url = 'https://customerappapi.almtmyzksa.com/api/Api/Track/GetWaybillShipperPhoneNumber?Waybillno=' + inputValue
  
    $.ajax({
              url: url,
              method: "GET",
              processData: false,
              contentType: false,
              success: function(d) {
              
              //console.log("last9Str",last9Str);
              console.log(d);
              if(d == null || d.HasError==true ){
                //console.log("ibside if");
                $('.AWBerrormsg').show();
                $('.phoneerrormsgvalid').hide();
              }
              else if (Mobilevalue == ""){
              //console.log("Nouf");

              $('.phoneerrormsg').hide();
              }
              else if (Mobilevalue != ""){
              const last9Str = String(Mobilevalue).slice(-9);
              var shipperphone = String(d.ShipperPhoneNumber).replace(/\s/g, "");
              //console.log(shipperphone ,"after remove space")
              const last9Consigneembile = shipperphone.slice(-9);
              //console.log(last9Consigneembile ,"from API");
              //console.log(last9Str ,"form user");
              if ( last9Consigneembile != last9Str ){
                $('.phoneerrormsgvalid').show();
                console.log("check");}
              else{
                $('.phoneerrormsgvalid').hide();
                console.log("check else");
              }
              }

              else{
                console.log(" correct")
                $('.phoneerrormsgvalid').hide();
                $('.AWBerrormsg').hide();
              }
        },
              error() {
                console.log('Error');
              }
          });
    }
    
   }


 function TrackCliam () {
    //do something
    var inputValue = $('#id_waybillNo').val();
    console.log(inputValue);
    if (inputValue != ""){
  
      var url = 'https://customerappapi.almtmyzksa.com/api/Api/Track/GetWaybillPhoneNumber?Waybillno=' + inputValue
  
    $.ajax({
              url: url,
              method: "GET",
              processData: false,
              contentType: false,
              success: function(d) {
              if(d == null || d.HasError==true ){
                //console.log("ibside if");
                $('.AWBerrormsg').show();
              }
          
              else{
                $('.AWBerrormsg').hide();
              }
        },
              error() {
                console.log('Error');
              }
          });
    }
    
   }
/* Claim page Ajax end */
