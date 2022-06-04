(()=>{"use strict";var n={890:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([n.id,":root{\n  --ship-color: #34a3c2;\n  --bad-color: #e62c63;\n  --good-color: #63c291;\n  --gray: #2a2b2b;\n}\n\n\nhtml, body,p,h3{\n  margin: 0;\n  padding: 0;\n}\n\nbody{\n  height: 100vh;\n  font-family: 'Black Ops One',Roboto, sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader{\n  padding: 40px 0;\n  font-size: 80px;\n}\n\n#grids{\n  display: flex;\n  justify-content: center;\n  gap:100px;\n}\n\n#human,#ai{\n  display: grid;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n}\n\n.grid-ele{\n  border: 1px solid black;\n}\n\n.grid-ele:hover{\n  background-color: var(--good-color);\n}\n\n.flex-grow{\n  flex-grow: 1;\n}\n\nfooter{\n  padding: 15px 0;\n}\n\na{\n  text-decoration: none;\n  color: inherit;\n}\n\n/* OVERLAY */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: none;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.overlay.active {\n  display: block;\n}\n\n#input-ship{\n  display: flex;\n  flex-direction: column;\n  gap:20px;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  padding: 30px;\n  border-radius: 10px;\n  background-color: white;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 0.2s ease-in-out;\n}\n\n#input-ship.active{\n  transform: translate(-50%, -50%) scale(1);\n}\n\n#input-ship h3{\n  letter-spacing: 2px;\n  font-weight: normal;\n  font-size: 18px;\n\n}\n\n#input-grid{\n  display: grid;\n  border: 1px solid black;\n  grid-template-columns: repeat(10,1fr);\n  grid-template-rows: repeat(10,1fr);\n  width: 300px;\n  height: 300px;\n}\n\n#rotate{\n  display: inline-block;\n  border: none;\n  padding: 1rem 2rem;\n  margin: 0;\n  text-decoration: none;\n  background: var(--gray);\n  color: #ffffff;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: 1;\n  cursor: pointer;\n  text-align: center;\n  border-radius: 3px;\n  transition: transform 80ms ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n#rotate:hover{\n  transform: scale(1.05);\n}\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=a(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var s=t(o[i]);e[s].references--}for(var c=r(n,a),l=0;l<o.length;l++){var d=t(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(890),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;class h{static loadPage(){h.createGrids(),h.startInputField()}static createGrids(){const n=document.getElementById("human"),e=document.getElementById("ai");h.putGridEle(n),h.putGridEle(e)}static putGridEle(n){for(let e=0;e<10;e++)for(let t=0;t<10;t++){let r=document.createElement("div");r.classList.add("grid-ele"),r.dataset.y=t,r.dataset.x=e,n.appendChild(r)}}static startInputField(){const n=document.getElementById("input-ship");document.querySelector(".overlay").classList.add("active"),setTimeout((()=>{n.classList.add("active")}),400);const e=document.getElementById("input-grid");h.putGridEle(e),h.makeInputHover()}static endInputField(){const n=document.getElementById("input-ship"),e=document.querySelector(".overlay");n.classList.remove("active"),e.classList.remove("active")}static makeInputHover(){document.getElementById("input-grid").querySelectorAll(".grid-ele");const n=document.getElementById("rotate");n.value=!0,n.addEventListener("click",(()=>{n.value=!("true"===n.value)}))}}const g=()=>{const n=[],e=(()=>{let n=Array.from(Array(10),(n=>Array.from(Array(10),(n=>null)))),e=0,t=0;return{board:n,placeShip:(t,r,a=!1)=>{if(r[0]<0||r[0]>9||r[1]<0||r[1]>9||n[r[0]][r[1]])return null;for(let e=0;e<t.length;e++)a?n[r[0]][r[1]+e]=[t,e]:n[r[0]+e][r[1]]=[t,e];e+=1},recieveHit:e=>{let r=n[e[0]][e[1]];return-1===r?null:r?(r[0].hit(r[1]),r[0].issunk()&&(t+=1),!0):(n[e[0]][e[1]]=-1,!1)},allSunk:()=>e===t}})();return{ships:n,board:e,addShip:(t,r,a)=>{n.push(t),e.placeShip(t,r,a)},addShipRandom:t=>{let r=Math.random()<.5,a=[Math.floor(10*Math.random()),Math.floor(10*Math.random())];n.push(t),e.placeShip(t,a,r)}}},v=new class{constructor(){this.player=g(),this.ai=g(),this.currentInputLength=5,this.currentHorizontal=!0}start(){h.loadPage()}};document.addEventListener("DOMContentLoaded",v.start)})()})();