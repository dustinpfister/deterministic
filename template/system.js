fw.setup({

    maxFrame : 50,
    canvasWidth : 320,
    canvasHeight : 240,

    sw : 32,
    sh : 32,

    // what to find an a for frame basis
    forFrame : function (state) {

        this.w = this.sw;
        this.h = this.sh;

        // what will change for each frame
        this.x = (320 - this.w) * state.bias;
        this.y = 20;

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        fw.cls();

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.w, this.h);

    },

    // controls
    controls : {

        // change start size
        size : function (e, sys, state) {

            let size = e.target.value / 100 * 64 + 32;

            sys.sw = size;
            sys.sh = size;

        }

    }

});
