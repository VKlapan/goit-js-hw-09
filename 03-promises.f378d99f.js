!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i");function i(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var a=0,u=0,c=0;function l(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))}function f(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.delay,t=n.step,r=n.amount;a=Number(o.value),u=Number(t.value),c=Number(r.value),function(e,n,o){for(var t=0;t<o;t+=1)i(t+1,e+n*t).then(l).catch(f)}(a,u,c)}))}();
//# sourceMappingURL=03-promises.f378d99f.js.map