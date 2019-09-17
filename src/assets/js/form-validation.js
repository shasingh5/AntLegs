(function ($) {
  jQuery.validator.addMethod('selectcheck', function (value) {
    //console.log(value);
    return (value != '0');
  }, "Please select city");

  //commond character validation
  jQuery.validator.addMethod("alphabets", function (value, element) {
    return this.optional(element) || /^[a-zA-Z ]+$/i.test(value);
  }, "Please enter only alphabets.");

  //commond character and numeric validation
  jQuery.validator.addMethod("alphaNumeric", function (value, element) {
    return this.optional(element) || /^[a-zA-Z 0-9 .\-_,/\/]+$/i.test(value);
  }, "Please enter only alphanumeric characters.");

  //rupees and paise validation RegEx
  jQuery.validator.addMethod("rupeesPaise", function (value, element) {
    return this.optional(element) || /^\d{0,5}(\.\d{0,2})?$/i.test(value);
  }, "You must include two decimal places");

  //date validation RegEx
  jQuery.validator.addMethod("date", function (value, element) {
    return this.optional(element) || /^(0?[1-9]|1[012])[\/](0?[1-9]|[12][0-9]|3[01])[\/]\d{4}$/i.test(value);
  }, "Please enter date as format MM/DD/YYYY");

  //indian mobile validation RegEx
  jQuery.validator.addMethod("mobile", function (value, element) {
    return this.optional(element) || /^[6-9]\d{9}$/i.test(value);
  }, "Please enter validate mobile number");  


  /* Service Support form validation start here*/
  $("#serviceSupport").validate({
    errorElement: "label",
    errorPlacement: function (error, element) {
        if (element.is(":checkbox")) {
          error.insertAfter(element.parents('.group .checkbox'));
        } else { // This is the default behavior 
          error.insertAfter(element);
        }
    },

    ignore: [],
    rules: {
      fullName: {
        required: true,
        alphabets: true,
        maxlength: 75
      },      
      emailID: {
        required: true,
        email: true,
        maxlength: 50
      },
      phoneNumber: {
        required: true,
        number: true,
        minlength: 11,
        maxlength: 11
      },
      subject: {
        required: true,
        alphaNumeric: true,
        maxlength: 100
      }, 
      yourRecipient: {
        required: true
      },
      message: {
        required: true,
        maxlength: 300
      },
      OfferCheckboxText: {
        required: true        
      },
    },

    submitHandler: function (form) {
      form.submit();
    }
  });
  /* Service Support form validation ends here*/  

  $('.qa-option form [type="reset"]').on('click', function () {
    $('.group input').attr('value', '');
    $('.group select').attr('value', '');
    $('.group textarea').attr('value', '');
  });

  /* Common error message show to all contact us form of validation start here*/
  $('.qa-option input, .qa-option textarea, .qa-option select, .qa-option radio, .qa-option checkbox').each(function () {
    $(this).rules('add', {
      messages: {
        required: $(this).closest('.group').find('.required').text(),
        alphabets: $(this).closest('.group').find('.alphabets').text(),
        number: $(this).closest('.group').find('.number').text(),
        minlength: $(this).closest('.group').find('.minlength').text(),
        maxlength: $(this).closest('.group').find('.maxlength').text(),
        email: $(this).closest('.group').find('.emailOptional').text(),
        alphaNumeric: $(this).closest('.group').find('.alphaNumeric').text(),
        rupeesPaise: $(this).closest('.group').find('.rupeesPaise').text(),
        date: $(this).closest('.group').find('.date').text()
      }
    });
  });
  /* Common error message show to all contact us form of validation end here*/

})(jQuery);