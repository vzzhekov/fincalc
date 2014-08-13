/**
 * Created by vzhekov on 8/12/2014.
 */
function present_value() {
    var fv = document.getElementById('future_value').value;
    var ir = document.getElementById('interest_rate').value;
    var realir = parseFloat(ir);
    var ny = document.getElementById('number_of_years').value;
    var ans = 1;
    realir += 1.00;



    for(var i = 1; i <= ny; i++) {


        ans = realir * ans;
    }

    console.log(ans);
    var PV = fv/ans;
    document.getElementById('result').innerHTML = PV.toFixed(2) + " $";
}

