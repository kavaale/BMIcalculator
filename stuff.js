$(function (){

    function calcBMI(event) {
        event.preventDefault();
        var weight = parseFloat($("#weightIn").val());
        var height = parseFloat($("#heightIn").val());

        var bmi = weight*703/Math.pow(height, 2)
        if (bmi < 15) {
            var bmiclass = "Very severely underweight"
        }
        else if (bmi >= 15 && bmi < 16) {
            var bmiclass = "Severely underweight"
        }
        else if (bmi >= 16 && bmi < 18.5) {
            var bmiclass = "Underweight"
        }
        else if (bmi >= 18.5 && bmi < 25) {
            var bmiclass = "Normal (healthy weight)"
        }
        else if (bmi >= 25 && bmi < 30) {
            var bmiclass = "Overweight"
        }
        else if (bmi >= 30 && bmi < 35) {
            var bmiclass = "Obese Class I (Moderately obese)"
        }
        else if (bmi >= 35 && bmi < 40) {
            var bmiclass = "Obese Class II (Severely obese)"
        }
        else if (bmi >= 40) {
            var bmiclass = "Obese Class III (Very severely obese)"
        }
        $("#bmiout").text(bmiclass + " (BMI " + bmi.toFixed(1) + ") at " + weight + " lbs")
    }

    var valRules = {
            weightIn: {
                required: true,
                max: 353,
                min: 88
            },
            heightIn: {
                required: true,
                max: 79,
                min: 59
            }
        };

    var valMessages = {
            weightIn: {
                required: "Must input weight",
                max: "Weight too high",
                min: "Weight too low"
            },
            heightIn: {
                required: "Must input height",
                max: "Height too high",
                min: "Height too low"
            }
        };

    $("form").validate({
        rules: valRules,
        messages: valMessages,
        submitHandler: calcBMI
    });
});