/**
 * Created by vzhekov on 8/13/2014.
 */
$(document).ready(function () {
    $("#primarybutton").kendoButton({
        icon: "pencil"
    });
});

$(document).ready(function() {
    var popupNotification = $("#popupNotification").kendoNotification({

        position: {
            pinned: true,
            top: 40,
            left: 20,
            bottom: null,
            right: null

    }}).data("kendoNotification");

    $("#primarybutton").click(function(){
        var d = 'Success!';
        var f = 'Fail';
        var fv = document.getElementById('future_value').value;
        var ir = document.getElementById('interest_rate').value;
        var ny = document.getElementById('number_of_years').value;
        if(fv == "" || ir == "" || ny == "") {
            popupNotification.show(f, "error");
        }
        else {
            popupNotification.show(d,"success");
        }
    });

});

$(document).ready(function() {
    // create NumericTextBox from input HTML element
//    $("#numeric").kendoNumericTextBox();

    // create Curerncy NumericTextBox from input HTML element
    $("#future_value").kendoNumericTextBox({
        format: "c",
        decimals: 2
    });

    // create Percentage NumericTextBox from input HTML element
    $("#interest_rate").kendoNumericTextBox({
        format: "p0",
        min: 0,
        max: 0.1,
        step: 0.01
    });

    // create NumericTextBox from input HTML element using custom format
    $("#number_of_years").kendoNumericTextBox({
        format: "a",
        decimals: 2
    });
});