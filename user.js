// ==UserScript==
// @name         Gitlab theme for Redmine
// @version      0.1
// @author       effus
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const style = '<style>'+
          'body {font-family:"Segoe UI", Roboto;color: rgb(46, 46, 46);}'+
          'h1, h2, h3, h4 {font-family:"Segoe UI", Roboto;color: rgb(46, 46, 46);font-size:14px;}'+
          'p, div {font-size:14px;}'+
          'a, a:link, a:visited {color: rgb(46, 46, 46);line-height: 1em;text-decoration:underline;}'+
          '#top-menu{background-color:#292961;line-height:3em;font-size:14px;padding:0 16px;height:3em;}'+
          '#top-menu li {line-height: 2.9em;}'+
          '#top-menu ul li a {color:rgb(209, 209, 240);padding: 0.5em;font-size:10px;line-height:3em;font-size: 12px;}'+
          '#top-menu ul li a:hover {background-color:rgba(209,209,240,0.2);border-radius: 4px;}'+
          '#header {background-color:#ffffff;min-height:3em;padding: 0;}'+
          '#header h1 {display:none;}'+
          'input[type=text] {border-radius: 2px;padding: 6px 10px;display: block;width: 100%;min-height: 30px;padding: 0 7px;color: #555;line-height: 30px;border: 1px solid rgba(0,0,0,0.1);border-radius: 2px;outline: 0;}'+
          'textarea {font-family: "Menlo", "DejaVu Sans Mono";font-size: 13px;padding: 10px 0;color: #2e2e2e;border-radius: 0;background: #fff;}'+
          '#quick-search {position: absolute;top: -39px;left: 43%;width:25em}'+
          '#quick-search #q {border-radius: 2px;padding: 6px 10px;height: 34px;border: 1px solid #e5e5e5;float:left;margin-right: 0.1em;}'+
          '#quick-search label {display:none;}'+
          '#project-jump {margin-top: 0.1em;line-height: 20px;}'+
          '#project-jump .drdn-trigger {border-radius: 2px;padding: 6px 10px;height: 34px;border: 1px solid #e5e5e5;}'+
          'li {line-height:1.5em;}'+
          '#main-menu {position: relative; background-color:#292961;left:0;padding-left:0.5em;height:3em;}'+
          '#main-menu ul li a {justify-content: center;padding: 6px 8px;margin: 4px 2px;font-size: 12px;border-radius: 4px;color:rgb(209, 209, 240);}'+
          '#main-menu ul li a.selected {color: #292961;background-color: #fff;}'+
          '#main-menu ul li a:hover {background-color:rgba(209,209,240,0.2);}'+
          '#main-menu li a.new-object {color: #292961;background-color: #fff;}'+
          'select {border-radius: 2px;padding: 6px 10px;height: 34px;border: 1px solid #e5e5e5;}'+
          'table tr {line-height:1.5em}'+
          'button, input[type=submit],input[type=button] {cursor: pointer;background-color: #1aaa55;color: #fff;border:1px solid #168f48;padding: 4px 10px; line-height: 18px;transition: background-color 100ms linear, border-color 100ms linear, color 100ms linear, box-shadow 100ms linear;}'+
          'button:hover, input[type=submit]:hover, input[type=button]:hover {background-color: #168f48;border-color: #12753a;color: #fff;}'+
          '#main {width: 100%;overflow: hidden;position: relative;}'+
          '#sidebar {padding-left: 50px;right: -90px;float: none;position: absolute;white-space: nowrap;box-shadow: inset 2px 0px 2px #9b9b9b;box-sizing: border-box;height: 100%;width: 100px;overflow: hidden;background: #f2f2f2;}'+
          '#sidebar:hover {right:0;width:400px;}'+
          '#content {width: 98%;}'+
          '</style>';
    jQuery('head').append(style);
})();
