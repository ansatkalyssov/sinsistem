/*
formbuilder-site - http://kevinchappell.github.io/formBuilder/
Version: 1.24.5
Author: Kevin Chappell <kevin.b.chappell@gmail.com>
*/
"use strict";var isSite=-1!==window.location.href.indexOf("formbuilder.online");function injectScript(t){var i=t.src,e=t.id,o=document.getElementsByTagName("script")[0];if(!document.getElementById(e)){var r=document.createElement("script");r.id=e,r.src=i,o.parentNode.insertBefore(r,o)}}if(window.hljs.initHighlightingOnLoad(),document.addEventListener("viewData",function(){return window.hljs.highlightBlock(document.querySelector(".data-dialog code"))},!1),isSite){"https:"!==window.location.protocol&&(window.location.protocol="https:"),((window.gitter={}).chat={}).options={room:"kevinchappell/formBuilder",activationElement:".toggle-gitter"};var scripts=[{src:"//sidecar.gitter.im/dist/sidecar.v1.js",id:"gitter-sidecar"},{src:"//platform.twitter.com/widgets.js",id:"twitter-script"},{src:"//buttons.github.io/buttons.js",id:"github-script"}];scripts.forEach(injectScript)}
"use strict";var toast=function(e){e=Object.assign({type:"success",msg:""},e);var t=document.createElement("div"),o=document.createTextNode(e.msg);t.classList.add("toast"),t.classList.add(e.type),t.appendChild(o),document.body.appendChild(t),setTimeout(function(){document.body.removeChild(t)},2500)},buildForm=document.querySelector(".build-form"),renderedForm=document.getElementById("rendered-form"),langSelect=document.getElementById("setLanguage"),copyDataButton=document.createElement("button");copyDataButton.classList.add("btn-default"),copyDataButton.classList.add("btn"),copyDataButton.id="copyDataBtn",copyDataButton.innerHTML="Copy Data",jQuery(function(o){var e=o(buildForm),t=o(document.getElementById("render-form-button")),n={fieldRemoveWarn:!0,onSave:function(e,t){c(),o(renderedForm).formRender({formData:t})},stickyControls:{enable:!0},i18n:{location:"assets/lang/"}},a=window.sessionStorage.getItem("formBuilder-locale")||"en-US";langSelect.value=a,n.i18n.locale=a;var d=!0,r=e.formBuilder(n);new window.ClipboardJS(copyDataButton,{text:function(){return r.formData}}).on("success",function(e){toast({msg:"formData copied to clipboard."}),e.clearSelection()}),langSelect.addEventListener("change",function(e){window.sessionStorage.setItem("formBuilder-locale",e.target.value),r.actions.setLang(e.target.value)});var c=function(){document.body.classList.toggle("form-rendered",d),d=!d};t.click(c),new window.SmoothScroll('a[href*="#"]',{speed:666,clip:!0,easing:"easeOutQuad",updateURL:!0,popstate:!0}),document.addEventListener("modalOpened",function(){document.querySelector(".form-builder-dialog").appendChild(copyDataButton)},!1),new window.ClipboardJS(document.getElementById("copy-html"),{text:function(){return toast({msg:"Form HTML successfully copied to clipboard."}),renderedForm.outerHTML}})});