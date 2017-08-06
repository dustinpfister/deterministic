/*
 *    fw.js
 *    A simple custom framework for my deterministic systems demos
 *
 */

let fw = (function () {

    let canvas,
    ctx,
    system = {

        forFrame : function () {
            console.log('system does not have a forFrame method');
        }

    },
    state = {

        frame : 0,
        per : 0,
        bias : 0,
        maxFrame : 50

    },

    // setup the canvas
    setupCanvas = function (w, h) {

        canvas = api.get('ds_canvas');
        ctx = canvas.getContext('2d');

        canvas.width = w;
        canvas.height = h;

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    },

    // inject a range control interface for a value
    injectControl = function (val) {

        if (val) {

            let html = '<span>' + val + ': <input id=\"ds_slide_' + val + '\" type=\"range\" value=\"0\"></span><br>',
            el = document.createElement('div');

            el.innerHTML = html;

            api.get('ds_control').appendChild(el);

        }

    },

    setupControls = function (controls) {

        for (con in controls) {

            injectControl(con);

            (function (method) {

                api.get('ds_slide_' + con).addEventListener('input', function (e) {

                    method(e, system, state);

                    system.forFrame(state);
                    system.draw(canvas, ctx);

                });

            }
                (controls[con]));

        }

    },

    // the pubic api
    api = {

        // simple get element method
        get : function (id) {

            return document.getElementById(id);

        },

        // clear screen
        cls : function () {

            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

        },

        // setup the framework with the given system
        setup : function (sys) {

            system = sys;

            state.maxFrame = sys.maxFrame || 50;

            console.log(state.maxFrame);

            setupCanvas(sys.canvasWidth || 320, sys.canvasHeight || 240);

            // inject build in time control slider
            setupControls({

                time : function (e) {

                    let per = e.target.value / 100;

                    state.frame = Math.floor(per * state.maxFrame);

                    state.per = state.frame / state.maxFrame;
                    state.bias = 1 - Math.abs(.5 - state.per) / .5;

                }

            });

            setupControls(system.controls);

            system.forFrame(state);
            system.draw(canvas, ctx);

        }

    };

    return api;

}
    ());
