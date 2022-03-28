<script lang="ts">
  import { url } from "@roxi/routify";

  const isDev = process.env.isDev;
  // const settings: object = dumpsterfireSettings;
</script>

<h1>Bello.</h1>
<a href={$url("/")}>home</a>
<p>isDev: {isDev}</p>
<div>
  <p class="bar">bar</p>
  <p class="foo">foo</p>
  <p class="baz">baz</p>
  <p class="foz">foz</p>
  <h2>sadlfjl;sdflsjdl;flskdfj;askjdf;asldfj;alsdfj;ls</h2>
  <h3>sadlfjl;sdflsjdl;flskdfj;askjdf;asldfj;alsdfj;ls</h3>
  <h4>asdlkkljklajsldfjlasjdflkasjdflasdjflksdjflsjdfl</h4>
</div>

<!-- <p>isTest: {settings.test}</p> -->
<style>
  /* This is a comment  */

  @import "./test.css";

  @alias {
    fs: font-size;
    bg: background;
  }

  h1 {
    fs: 16px;
    bg: blue;
    overflow: hidden auto;
  }
  h1 {
    font-size: 16px;
    width: 0em;
  }

  a::before {
    content: "©";
    background-position: bottom left;

    display: inline flow-root;
  }
  p:after {
    content: "\\"string\\" is intact";
    width: calc(10px - (100px / var(--test)));
  }
  @font-face {
    font-family: test;
    unicode-range: u+2b00-2bff;
  }

  div {
    animate: fade 3s cubic-bezier(0.42, 0, 1, 1);
    background: url("http://site.com:80/src/../pics/image.jpg");
  }

  @font-face;
  h1 {
  }
   {
    color: blue;
  }
  h2 {
    color: ;
  }
  h3 {
    color: red;
  }

  h4 {
    border: red solid 0.5em;
    border: rgba(0, 30, 105, 0.8) solid 1px;
    border: solid 1px red;
    background: url('data:image/svg+xml;charset=utf-8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>');
    transform: rotate3d(0, 0, 1, 20deg);
    min-width: initial;
  }

  h3 {
    font: bold 2.2rem/0.9 "Open Sans Condensed", sans-serif;
  }

  p {
    font-family: "Helvetica Neue", Arial, sans-serif, Helvetica;
    font-weight: normal;
  }

  h2 {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
    margin-left: 20px;
    background: linear-gradient(
      to bottom,
      #ffe500 0%,
      #ffe500 50%,
      #121 50%,
      #121 100%
    );
  }

  p {
    display: grid;
    transition: all 0.5s;
    user-select: none;
    width: calc(100vw - calc(20% - 10px));
    background: linear-gradient(to bottom, white, black);
  }

  a {
    z-index: 5000;
  }
  a {
    width: calc(2 * 100px);
    background-color: burlywood;
    color: rgba(255, 0, 0, 1);
  }
  a:hover {
    background-color: greenyellow;
    z-index: 5500;
  }

  .foo {
    flex: 1;
  }
  .bar {
    flex: 1 1;
  }
  .foz {
    flex: 1 1 0;
  }
  .baz {
    flex: 1 1 0px;
  }
</style>
