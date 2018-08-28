$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var mobile = $("input#mobileNo").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            var response='';
            $.ajax({
                //url: "././mail/contact_me.php",
            	url: "https://control.msg91.com/api/sendhttp.php",
                type: "POST",
                data: {
                    authkey:'217997ALcI0bUDt5b0e7acb',
                    sender : 'arinda',
                	name: name,
                    mobiles: mobile,
                    message: message,
                    route:'4'                    
                },
                success: function(data){
                    alert('horray! 200 status code!');
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    //alert(jqXHR.status);
                    //alert(textStatus);
                    alert(errorThrown);
                },
            
                 })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
