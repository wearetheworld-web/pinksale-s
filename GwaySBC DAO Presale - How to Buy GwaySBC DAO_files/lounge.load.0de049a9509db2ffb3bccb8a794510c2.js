!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.08824c6819d1c8e30fdb03dffdefaf5d.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.9aaf09fd70e8a0b6af5053255cbb6fc2.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.f7dacc05570e8c8545b0ccf279f4e396.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.6719fe9dbe70a5a047052a905ea1cbc5.js",a.body.appendChild(c);var d=["astarostin-test","hovseptestrealm","disqus-pse-stock-v2"],e=!1;if(d.forEach(function(a){(window.location.hostname===a||window.location.search.includes(a))&&(e=!0)}),e){var f=a.createElement("script");f.src="https://c.disquscdn.com/embedv2/latest/embedv2.js",a.body.appendChild(f)}}();