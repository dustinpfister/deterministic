# Deterministic

This is a framework for making a [deterministic dynamical system](https://en.wikipedia.org/wiki/Dynamical_system).

## Getting started with making a new system

place the given index.html, deterministic.js, and system.js files into a new folder. After doing so open up the inde.html file in chrome. You should see a time slider, drag that around to change the time state of the demo system.

## system.js

system.js is the file that you will be hacking over to make a new system.

```js
ds.setup({

    maxFrame : 75,

    w : 32,
    h : 32,
    dy : 0,

    // what to find an a for frame basis
    forFrame : function (state) {

        // what will change for each frame
        this.x = (320 - this.w) * state.bias;
        this.y = 10 + this.dy * state.per;

    },

    // draw the state of the box to the canvas
    draw : function (canvas, ctx) {

        ds.cls();

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(this.x, this.y, this.w, this.h);

    },

    // controls
    controls : {

        // change start size
        dy : function (e, sys, state) {

            sys.dy = e.target.value / 100 * 190;

        }

    }

});
```

## forFrame and the state object

The forframe method is the method that changes the state of the system, you can use any of the values in the state object to change the values of your system.

### state.frame

The current frame from 0 to the maxFrame value

### state.per

A value that goes from 0 to 1 over time.

## state.bias

A value that goes from 0 to 1 and back to 0 over time

## state.maxframe

The maxFrame value set, defaults to 50.

## draw

Use the draw method to define how to draw the system to the canvas.

## controls

define your controls here.