// ==UserScript==
// @name        Trybe - Modo Noturno (WIP)
// @namespace   Violentmonkey Scripts
// @match       https://app.betrybe.com/*
// @grant       none
// @version     1.0
// @author      Wagner
// @description 11/17/2022, 6:46:12 PM
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(
  `:root, .t-hSuzJa {
    --colors-backgroundPrimary: #000000 !important;
    --colors-backgroundSecondary: #000000 !important;
    --colors-logoLight: #034422 !important;
    --colors-semanticsCriticalLighter: #e2e444 !important;
    --colors-semanticsCriticalMedium: #d3d60e !important;
    --colors-semanticsCriticalDarker: #686a05 !important;
    --colors-surfaceDefault: #000000 !important;
    --colors-surfaceDefaultHovered: #383636 !important;
    --colors-surfaceDefaultPressed: #131632 !important;
    --colors-surfaceOnSurface: #000000 !important;
    --colors-textColorPrimary: #f4f4f4 !important;
    --colors-textColorSecondary: #9594af !important;

  }`
);

addGlobalStyle(
  `.attraction-floating-banner {
    background-color: #000000 !important;
    color: #f4f4f4 !important;
  }`
)

addGlobalStyle(
  `.openings__search-bar {
    background-color: rgba(0,0,0,var(--bg-opacity))
  }`
)