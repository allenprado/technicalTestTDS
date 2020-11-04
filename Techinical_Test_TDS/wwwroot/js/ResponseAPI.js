$(document).ready(function () {
    
    $("#request").on("click", function (e) {
        var args = verifyArgs();
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "https://cors-anywhere.herokuapp.com/https://postman-echo.com/get",
            data: args,
            success: function (data) {
                createTableResponse(data);
            },
            error: function () {
                alert("Error");
            }
        });
    });
});

function createTableResponse(data) {

    var htmlresponse = "<div class='table-responsive-sm'>";
    htmlresponse += "<table class='table' width='100%' cellspacing='0'>";
    htmlresponse += "<tr class='table-dark'>";
    htmlresponse += "<th colspan=2 style='text-align: center;'>Args</th>";
    htmlresponse += "</tr>";
    $.each(data.args, function (index, obj) {
        htmlresponse += "<tr>";
        htmlresponse += "<th style='text-align: center;'>" + index + "</th>";
        htmlresponse += "<td>" + obj + "</td>";
        htmlresponse += "</tr>";
    });
    htmlresponse += "<tr><th colspan=2 style='text-align: center;'>&nbsp</th></tr>";
    htmlresponse += "<tr class='table-dark'><th colspan=2 style='text-align: center;'>Headers</th></tr>";
    $.each(data.headers, function (index, obj) {
        htmlresponse += "<tr>";
        htmlresponse += "<th style='text-align: center;'>" + index + "</th>";
        htmlresponse += "<td>" + obj + "</td>";
        htmlresponse += "</tr>";
    });
    htmlresponse += "<tr><th colspan=2 style='text-align: center;'>&nbsp</th></tr>";
    htmlresponse += "<tr class='table-dark'><th colspan=2 style='text-align: center;'>Url</th></tr>";
    htmlresponse += "<tr>";
    htmlresponse += "<th style='text-align: center;'>Url</th>";
    htmlresponse += "<td>" + data.url + "</td>";
    htmlresponse += "</tr>";
    htmlresponse += "</table>";

    
    $("#div-response").html(htmlresponse);
}

function verifyArgs() {
    var datax;
    if ($("#arg1").val() == "" && $("#arg2").val() == "") {
        datax = {};
    } else if ($("#arg1").val() == "") {
        datax = { foo2: $("#arg2").val() };
    } else if ($("#arg2").val() == "") {
        datax = { foo1: $("#arg1").val() };
    } else {
        datax = { foo1: $("#arg1").val(), foo2: $("#arg2").val()};
    }

    return datax;
}