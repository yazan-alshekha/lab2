'use strict';
// var everyObj = [];
let keywordArr = [];
let sortedItem = [];
let a = [];
HornsImages.all = [];

$.ajax('./data/page-1.json').then((getting) => {

    getting.forEach((val, idx) => {

        let image = new HornsImages(val);
        image.addFilter();

        image.BodyrRender();

    });
});




function HornsImages(banana) {

    this.path = banana.image_url;
    this.title = banana.title;
    this.description = banana.description;
    this.keyword = banana.keyword;
    this.horns = banana.horns;
    HornsImages.all.push(this);
    // everyObj.push(this);

}

HornsImages.prototype.BodyrRender = function() {

    let getTemplate = $('#template').html();

    let newObj = Mustache.render(getTemplate, this);

    $('container').append(newObj);

    /////
    sortedItem.push(this);

};



HornsImages.prototype.addFilter = function() {

    // clear keywordArr array for  the include  condition to compare value
    keywordArr = [];

    // if the keyword is not in the keywordArr array append it to select and push it to keywordArr array
    if (!keywordArr.includes(this.keyword)) {
        let option = `<option class='${this.keyword}'>${this.keyword}</option>`;
        $('select').append(option);

        keywordArr.push(this.keyword);
    }

    // to show all of images

    // let section = document.createElement('section');
    // $('container').append(section);

    // let h2 = `<h2>${this.title}</h2>`;
    // $('section:last').append(h2);


    // let img = `<img src='${this.path}'alt="">`;
    // $('section:last').append(img);

    // let p = `<p value='${this.keyword}'>${this.description}</p>`;
    // $('section:last').append(p);

};




$('select').change(function() {
    //print selected option 
    console.log($(this).children('option:selected').val());
    let selected_option = $(this).children('option:selected').val();
    // $('container').empty();
    $("container").find(`section`).css("display", "none");
    $("container").find(`section.${selected_option}`).css("display", "block");

});



$('#page2').on('click', function() {

    // clear container befor adding new items (images)
    $('container').empty();

    // clear select list 
    $('select').empty();

    // get data from page 2 and create objects  
    $.ajax('./data/page-2.json').then((getting) => {

        getting.forEach((val, idx) => {

            HornsImages.all = [];

            let image = new HornsImages(val);
            image.addFilter();
            image.BodyrRender();

        });

    });

}); ///end on click event

// $( "li.item-ii" ).find( "li" ).css( "background-color", "red" );

$('#page1').on('click', function() {

    // clear container befor adding new items (images)
    $('container').empty();

    // clear select list 
    $('select').empty();
    console.log(keywordArr);

    // get data from page 2 and create objects  
    $.ajax('./data/page-1.json').then((getting) => {

        getting.forEach((val, idx) => {

            HornsImages.all = [];

            let image = new HornsImages(val);
            image.addFilter();
            image.BodyrRender();

        });

    });

}); ///end on click event

$('#SortByTitle').on('click', function() {

}); ///end on click event