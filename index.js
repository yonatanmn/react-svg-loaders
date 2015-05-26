/**
 * react-svg-loaders
 * https://github.com/yonatanmn/react-svg-loaders
 *
 * Copyright (c) 2015 Y.Schreiber https://github.com/yonatanmn
 * Licensed under the MIT license.
 *
 * SVG Sources:
 *
 *  1-8  source: http://codepen.io/aurer/pen/jEGbA
 */

'use strict';

var React = require('react');




/**
 *  props:
 *  className {string}
 *  type (1-11 {int}),
 *  dur (duration {int})
 */
var SvgSpinners = React.createClass({
    getDefaultProps: function() {
        return {
            type: 1,
            dur: 0.6,
            className:''
        };
    },

    componentWillMount: function () {
        var svg;
        var dur = this.props.dur;
        switch (parseInt(this.props.type)){
            default :
            case 1:
                svg =
                  '<svg  x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">  ' +
                  ' <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 ' +
                  '   s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 ' +
                  '   c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>    ' +
                  ' <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0' +
                  '         C22.32,8.481,24.301,9.057,26.013,10.047z">        ' +
                  ' <animateTransform attributeType="xml"    ' +
                  '            attributeName="transform"' +
                  '                type="rotate"' +
                  '                from="0 20 20"' +
                  '                to="360 20 20"' +
                  '                dur=' + dur + 's'+
                  '                repeatCount="indefinite"/>' +
                  ' </path>' +
                  '</svg>';
                break;

            case 2:
                svg=
                  ' <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '      width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '   <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">'+
                  '     <animateTransform attributeType="xml"'+
                  '       attributeName="transform"'+
                  '       type="rotate"'+
                  '       from="0 25 25"'+
                  '       to="360 25 25"'+
                  '       dur=' + dur + 's'+
                  '       repeatCount="indefinite"/>'+
                  '     </path>'+
                  '   </svg>';
                break;

            case 3:
                svg=
                  ' <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '     width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '     <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">'+
                  '         <animateTransform attributeType="xml"'+
                  '             attributeName="transform"'+
                  '             type="rotate"'+
                  '             from="0 25 25"'+
                  '             to="360 25 25"'+
                  '             dur=' + dur + 's'+
                  '             repeatCount="indefinite"/>'+
                  '     </path>'+
                  ' </svg>';
                break;

            case 4:
                svg =
                  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '    width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '    <rect x="0" y="0" width="4" height="7" fill="#333">'+
                  '        <animateTransform  attributeType="xml"'+
                  '            attributeName="transform" type="scale"'+
                  '            values="1,1; 1,3; 1,1"'+
                  '            begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+

                  '    <rect x="10" y="0" width="4" height="7" fill="#333">'+
                  '        <animateTransform  attributeType="xml"'+
                  '            attributeName="transform" type="scale"'+
                  '            values="1,1; 1,3; 1,1"'+
                  '            begin=' + dur/3 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="20" y="0" width="4" height="7" fill="#333">'+
                  '        <animateTransform  attributeType="xml"'+
                  '            attributeName="transform" type="scale"'+
                  '            values="1,1; 1,3; 1,1"'+
                  '            begin=' + dur/3*2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '</svg>';
                break;

            case 5:
                svg =
                  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '    <rect x="0" y="0" width="4" height="10" fill="#333">'+
                  '        <animateTransform attributeType="xml"'+
                  '            attributeName="transform" type="translate"'+
                  '            values="0 0; 0 20; 0 0"'+
                  '            begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="10" y="0" width="4" height="10" fill="#333">'+
                  '        <animateTransform attributeType="xml"'+
                  '            attributeName="transform" type="translate"'+
                  '            values="0 0; 0 20; 0 0"'+
                  '            begin=' + dur/3 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="20" y="0" width="4" height="10" fill="#333">'+
                  '        <animateTransform attributeType="xml"'+
                  '            attributeName="transform" type="translate"'+
                  '            values="0 0; 0 20; 0 0"'+
                  '            begin=' + dur/3*2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '</svg>';
                break;
            case 6:
                svg =
                  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '    <rect x="0" y="13" width="4" height="5" fill="#333">'+
                  '        <animate attributeName="height" attributeType="XML"'+
                  '            values="5;21;5"'+
                  '            begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML"'+
                  '            values="13; 5; 13"'+
                  '            begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="10" y="13" width="4" height="5" fill="#333">'+
                  '        <animate attributeName="height" attributeType="XML"'+
                  '            values="5;21;5"'+
                  '            begin=' + dur/4 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML"'+
                  '            values="13; 5; 13"'+
                  '            begin=' + dur/4 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="20" y="13" width="4" height="5" fill="#333">'+
                  '        <animate attributeName="height" attributeType="XML"'+
                  '            values="5;21;5"'+
                  '            begin=' + dur/2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML"'+
                  '            values="13; 5; 13"'+
                  '            begin=' + dur/2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '</svg>';
                break;
            case 7:
                svg =
                  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '    <rect x="0" y="0" width="4" height="20" fill="#333">'+
                  '        <animate attributeName="opacity" attributeType="XML"'+
                  '            values="1; .2; 1"'+
                  '            begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="7" y="0" width="4" height="20" fill="#333">'+
                  '        <animate attributeName="opacity" attributeType="XML"'+
                  '            values="1; .2; 1"'+
                  '            begin=' + dur/3 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="14" y="0" width="4" height="20" fill="#333">'+
                  '        <animate attributeName="opacity" attributeType="XML"'+
                  '            values="1; .2; 1"'+
                  '            begin=' + dur/3*2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '</svg>';
                break;
            case 8:
                svg =
                  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
                  '    width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">'+
                  '    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">'+
                  '        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">'+
                  '        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin=' + dur/4 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin=' + dur/4 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin=' + dur/4 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">'+
                  '        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin=' + dur/2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin=' + dur/2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin=' + dur/2 + 's dur=' + dur + 's repeatCount="indefinite" />'+
                  '    </rect>'+
                  '</svg>';
                break;
            case 9:
                svg =
                  '<svg version="1.1"' +
                  '    xmlns="http://www.w3.org/2000/svg"' +
                  '    xmlns:xlink="http://www.w3.org/1999/xlink"' +
                  '    x="0px"' +
                  '    y="0px"' +
                  '    width="30px" height="30px" ' +
                  '    viewBox="0 0 80 80"' +
                  '    xml:space="preserve">' +
                  '    <path' +
                  '        d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1' +
                  '        c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1' +
                  '        c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1' +
                  '        l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5' +
                  '        c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1' +
                  '        c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9' +
                  '        c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9' +
                  '        c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2' +
                  '        c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9' +
                  '        c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1' +
                  '        c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7' +
                  '        c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1' +
                  '        c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z"' +
                  '    >' +
                  '        <animateTransform' +
                  '            attributeType="xml"' +
                  '            attributeName="transform"' +
                  '            type="rotate"' +
                  '            from="0 40 40"' +
                  '            to="360 40 40"' +
                  '            dur=' + dur + 's'+
                  '            repeatCount="indefinite"' +
                  '        />' +
                  '    </path>' +
                  '</svg>'
                break;

            case 10:
                svg =

                  ' <svg version="1.1" ' +
                  '     class="svg-loader" ' +
                  '     xmlns="http://www.w3.org/2000/svg" ' +
                  '     xmlns:xlink="http://www.w3.org/1999/xlink" ' +
                  '     x="0px" ' +
                  '     y="0px" ' +
                  '     width="30px" height="30px" ' +
                  '     viewBox="0 0 80 80" ' +
                  '     xml:space="preserve" ' +
                  ' > ' +
                  '     <path ' +
                  '         d="M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1 ' +
                  '         c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1 ' +
                  '         c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1 ' +
                  '         l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5 ' +
                  '         c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1 ' +
                  '         c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9 ' +
                  '         c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9 ' +
                  '         c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2 ' +
                  '         c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9 ' +
                  '         c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1 ' +
                  '         c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7 ' +
                  '         c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1 ' +
                  '         c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z" ' +
                  '     > ' +
                  '         <animateTransform ' +
                  '             attributeType="xml" ' +
                  '             attributeName="transform" ' +
                  '             type="rotate" ' +
                  '             from="0 40 40" ' +
                  '             to="360 40 40" ' +
                  '             dur=' + dur + 's'+
                  '             repeatCount="indefinite" ' +
                  '         /> ' +
                  '     </path> ' +
                  '     <path ' +
                  '         d="M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7 ' +
                  '         c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1 ' +
                  '         c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1 ' +
                  '         c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2 ' +
                  '         c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7 ' +
                  '         s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8 ' +
                  '         c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1 ' +
                  '         c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8 ' +
                  '         c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2 ' +
                  '         c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z" ' +
                  '     > ' +
                  '         <animateTransform ' +
                  '             attributeType="xml" ' +
                  '             attributeName="transform" ' +
                  '             type="rotate" ' +
                  '             from="0 40 40" ' +
                  '             to="-360 40 40" ' +
                  '             dur=' + dur + 's'+
                  '             repeatCount="indefinite" ' +
                  '         /> ' +
                  '     </path> ' +
                  ' </svg> '
                break;

            case 11:
                svg=
                  '<svg width="70" height="20">' +
                  '    <rect width="20" height="20" x="0" y="0" rx="3" ry="3">' +
                  '        <animate attributeName="width" values="0;20;20;20;0" dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="height" values="0;20;20;20;0" dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="x" values="10;0;0;0;10" dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="y" values="10;0;0;0;10" dur=' + dur + 's repeatCount="indefinite"/>' +
                  '    </rect>' +
                  '    <rect width="20" height="20" x="25" y="0" rx="3" ry="3">' +
                  '        <animate attributeName="width" values="0;20;20;20;0" begin=' + dur/5 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="height" values="0;20;20;20;0" begin=' + dur/5 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="x" values="35;25;25;25;35" begin=' + dur/5 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="y" values="10;0;0;0;10" begin=' + dur/5 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '    </rect>' +
                  '    <rect width="20" height="20" x="50" y="0" rx="3" ry="3">' +
                  '        <animate attributeName="width" values="0;20;20;20;0" begin=' + dur/5*2 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="height" values="0;20;20;20;0" begin=' + dur/5*2 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="x" values="60;50;50;50;60" begin=' + dur/5*2 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '        <animate attributeName="y" values="10;0;0;0;10" begin=' + dur/5*2 +'s  dur=' + dur + 's repeatCount="indefinite"/>' +
                  '    </rect>' +
                  '</svg>'
                break;



        }
        var classes = 'loader loader_type_' + this.props.type + ' ' + this.props.className;
        this.svgSpinner = '<div class="' + classes + '">' +String(svg)+ '</div>'

    },

    render: function () {
        return React.createElement(
          'span',
          {dangerouslySetInnerHTML:{__html: this.svgSpinner}}
        )
    }
});

module.exports = SvgSpinners;
