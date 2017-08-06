fw.setup({

    maxFrame : 50,

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
    draw : function (canvas,ctx) {

	    fw.cls();
	
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.w, this.h);

    },

    // controls
    controls : {

	/*
        // change time
        time : function (e) {
			
			console.log('time');

            //box.set(e.target.value / 100);

        },
		*/

        // change start size
        size : function (e, sys, state) {

            let size = e.target.value / 100 * 64 + 32;

            sys.sw = size;
            sys.sh = size;

        }

    }

});

/*
(function () {

// create and inject a canvas
let canvas = fw.get('ds_canvas'),
ctx = canvas.getContext('2d'),

change = function (e) {

let key = e.target.id.replace(/ds_slide_/, '');

box.change[key](e);

cls();
draw();


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
*/
