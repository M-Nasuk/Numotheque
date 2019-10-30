$(document).ready(function () {

    $.getJSON('src/src.php', function (data) {
        let array_1 = [...data];
        let array_3 = [...data];
        let array_4 = [...data];
        
        for (let i = 0; i < 4; i++) {
            let x = randomize(array_1);
            let z = randomize(array_3);
            let w = randomize(array_4);

            $('.main-view-column-long:first-child').prepend(array_1[x]);
            $('.main-view-column-long:nth-child(3)').prepend(array_3[z]);
            $('.main-view-column-long:last-child').prepend(array_4[w]);

            array_1.splice(x, 1);
            array_3.splice(z, 1);
            array_4.splice(w, 1);
        }

    });

    $.getJSON('src/src_2.php', function (data) {
        let array = [...data];

        for (let i = 0; i < 4; i++) {
            let x = randomize(array);
            $('.main-view-column-large').prepend(array[x]);

            array.splice(x, 1);
        }

    });

    function randomize(data) {
       return Math.floor(Math.random() * data.length);
    }

})