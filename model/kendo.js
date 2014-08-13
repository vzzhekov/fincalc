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
        popupNotification.show(d, "success");
    });

});