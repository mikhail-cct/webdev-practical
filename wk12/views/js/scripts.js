/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function draw(){

    $('#results').empty();

    $.getHTML = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
            }
        });

    };

    $.getHTML("/get");

};

function send_name(){

    alert($("#input").val());
    
    $.ajax({
        type: 'POST',
        url: '/post',
        dataType: 'json',
        contenType: 'application/json',
        data: {
            value: $("#input").val()
        },
        cache: false,
        success: setTimeout(draw(), 2000)
    });

};

$(document).ready(function(){
    draw();
})