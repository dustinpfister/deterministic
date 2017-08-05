let box = {

    frame : 0,
    maxFrame : 50,

    sw : 32,
    sh : 32,

    // what to find an a for frame basis
    forFrame : function () {

        // percent done (0 to 1)
        this.per = this.frame / this.maxFrame;

        // what I have been calling bias (0 to 1 back to 0)
        this.bias = 1 - Math.abs(.5 - this.per) / .5;

        this.w = this.sw;
        this.h = this.sh;

        // what will change for each frame
        this.x = (320 - this.w) * this.bias;
        this.y = 20;

    },

    // set state by value of 0 to 1
    set : function (per) {

        this.frame = Math.floor(per * this.maxFrame);
        this.forFrame();

    },

    // tick forward state frame, by frame on each call
    tick : function () {

        this.frame += 1;
        if (this.frame >= this.maxFrame) {

            this.frame = this.frame % this.maxFrame;

        }

        this.forFrame();

    },

    // draw the state of the box to the canvas
    draw : function (ctx) {

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.w, this.h);

    },

    // controls
    change : {

        // change time
        time : function (e) {

            box.set(e.target.value / 100);

        },

        // change start size
        size : function (e) {

            let size = e.target.value / 100 * 64 + 32;

            box.sw = size;
            box.sh = size;
            box.forFrame();
        }

    }

};

box.set(0);

(function () {

    // create and inject a canvas
    let canvas = fw.get('ds_canvas'),
    ctx = canvas.getContext('2d'),

    change = function (e) {

        let key = e.target.id.replace(/ds_slide_/, '');

        box.change[key](e);

        //box.set(e.target.value / 100);
        cls();
        draw();

        console.log(key);

    },

    setup = function () {

        // set actual matrix size of the canvas
        canvas.width = 320;
        canvas.height = 240;

        // event handlers
        fw.injectControl('time');
        fw.injectControl('size');
        fw.get('ds_slide_time').addEventListener('input', change);
        fw.get('ds_slide_size').addEventListener('input', change);

        cls();
        draw();

        //loop();
    },

    // the single draw function
    draw = function () {

        // draw a cirlce
        //ctx.strokeStyle = '#ffffff';

        box.draw(ctx);

    },

    // clear screen
    cls = function () {

        // default the canvas to a solid back background
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    },

    // the loop
    loop = function () {

        requestAnimationFrame(loop);

        box.draw(ctx);
        //box.tick();

        cls();
        draw();

    };

    setup();

}
    ());
