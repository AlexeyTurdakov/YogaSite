window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    let calc = require('./core/calc.js'),
    form = require('./core/form.js'),
    slider = require('./core/slider.js'),
    tabs = require('./core/tabs.js'),
    timer = require('./core/timer.js'),
    modal = require('./core/modal.js')

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();
});