/*
 *    fw.js
 *    A simple custom framework for my deterministic systems demos
 *
 */

let fw = (function () {

    let api = {

        // simple get element method
        get : function (id) {

            return document.getElementById(id);

        },

        // inject a range control interface for a value
        injectControl : function (val) {

            if (val) {

                let html = '<span>'+ val+': <input id=\"ds_slide_' + val + '\" type=\"range\" value=\"0\"></span><br>',
                el = document.createElement('div');

                el.innerHTML = html;

                this.get('ds_control').appendChild(el);

            }

        }

    };

    return api;

}
    ());
