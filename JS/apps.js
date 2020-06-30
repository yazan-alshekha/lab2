'use strict';
var everyObj = [];
let keywordArr = [];

$.ajax('../data/page-1.json').then((getting) => {

    getting.forEach((val, idx) => {

        let image = new HornsImages(val);
        image.addFilter();

    });
});



function HornsImages(banana) {

    this.path = banana.image_url;
    this.title = banana.title;
    this.description = banana.description;
    this.keyword = banana.keyword;
    this.horns = banana.horns;

    everyObj.push(this);

}



HornsImages.prototype.addFilter = function() {

    // if the keyword is not in the keywordArr array append it to select and push it to keywordArr array
    if (!keywordArr.includes(this.keyword)) {
        let option = `<option>${this.keyword}</option>`;
        $('select').append(option);

        keywordArr.push(this.keyword);
    }

    // // to show all of images
    let section = document.createElement('section');
    $('continer').append(section);

    let h2 = `<h2>${this.title}</h2>`;
    $('section:last').append(h2);


    let img = `<img src='${this.path}'alt="">`;
    $('section:last').append(img);

    let p = `<p value='${this.keyword}'>${this.description}</p>`;
    $('section:last').append(p);
    // console.log(this.keyword);
};



$('select').change(function() {
    //print selected option 
    console.log($(this).children('option:selected').val());
});

// Amazing