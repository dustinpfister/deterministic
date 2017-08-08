ds.setup({

    maxFrame : 75,

    spacing : 0,
    bx : [],

    init : function () {

        this.bx = [];

        let i = 0;
        while (i < 3) {

            let box = {};
            box.x = i * 32 + this.spacing * i;
            box.y = 0;
            box.w = 32;
            box.h = 32;

            this.bx.push(box);
            i += 1;

        }

        console.log('init');
    },

    // what to find an a for frame basis
    forFrame : function (state) {

        console.log('frame');

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();

        this.bx.forEach(function (bx) {

            ctx.fillStyle = '#ff00ff';
            ctx.fillRect(bx.x, bx.y, bx.w, bx.h)

        });

    },

    // controls
    controls : {

        // change start size
        spacing : function (e, sys, state) {

            sys.spacing = e.target.value / 100 * 32;

        }

    }

});
