/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Fuse",[],t):"object"==typeof exports?exports.Fuse=t():e.Fuse=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";e.exports=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(5),a=r(7),s=r(4),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,a=r.distance,c=void 0===a?100:a,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.isCaseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=f&&(this.patternAlphabet=s(this.pattern))}return o(e,[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,r=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>r)return i(e,this.pattern,n);var o=this.options,s=o.location,c=o.distance,h=o.threshold,l=o.findAllMatches,u=o.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(0),o=function e(t,r,o){if(r){var i=r.indexOf("."),a=r,s=null;-1!==i&&(a=r.slice(0,i),s=r.slice(i+1));var c=t[a];if(null!==c&&void 0!==c)if(s||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o};e.exports=function(e,t){return o(e,t,[])}},function(e,t,r){"use strict";e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[],n=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===n?n=i:s||-1===n||(o=i-1,o-n+1>=t&&r.push([n,o]),n=-1)}return e[i-1]&&i-n>=t&&r.push([n,i-1]),r}},function(e,t,r){"use strict";e.exports=function(e){for(var t={},r=e.length,n=0;n<r;n+=1)t[e.charAt(n)]=0;for(var o=0;o<r;o+=1)t[e.charAt(o)]|=1<<r-o-1;return t}},function(e,t,r){"use strict";e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,n=new RegExp(t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&").replace(r,"|")),o=e.match(n),i=!!o,a=[];if(i)for(var s=0,c=o.length;s<c;s+=1){var h=o[s];a.push([e.indexOf(h),h.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:a}}},function(e,t,r){"use strict";e.exports=function(e,t){var r=t.errors,n=void 0===r?0:r,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=n/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t,r){"use strict";var n=r(6),o=r(3);e.exports=function(e,t,r,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),x=t.length,S=[],M=0;M<y;M+=1)S[M]=0;if(-1!==k){var b=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(b,m),-1!==(k=e.lastIndexOf(t,g+x))){var _=n(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,C=x+y,A=1<<x-1,I=0;I<x;I+=1){for(var O=0,F=C;O<F;){n(t,{errors:I,currentLocation:g+F,expectedLocation:g,distance:h})<=m?O=F:C=F,F=Math.floor((C-O)/2+O)}C=F;var P=Math.max(1,g-F+1),j=d?y:Math.min(g+F,y)+x,z=Array(j+2);z[j+1]=(1<<I)-1;for(var T=j;T>=P;T-=1){var E=T-1,K=r[e.charAt(E)];if(K&&(S[E]=1),z[T]=(z[T+1]<<1|1)&K,0!==I&&(z[T]|=(L[T+1]|L[T])<<1|1|L[T+1]),z[T]&A&&(w=n(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(n(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=z}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(S,p)}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),a=r(2),s=r(0),c=function(){function e(t,r){var o=r.location,i=void 0===o?0:o,s=r.distance,c=void 0===s?100:s,h=r.threshold,l=void 0===h?.6:h,u=r.maxPatternLength,f=void 0===u?32:u,d=r.caseSensitive,v=void 0!==d&&d,p=r.tokenSeparator,g=void 0===p?/ +/g:p,y=r.findAllMatches,m=void 0!==y&&y,k=r.minMatchCharLength,x=void 0===k?1:k,S=r.id,M=void 0===S?null:S,b=r.keys,_=void 0===b?[]:b,L=r.shouldSort,w=void 0===L||L,C=r.getFn,A=void 0===C?a:C,I=r.sortFn,O=void 0===I?function(e,t){return e.score-t.score}:I,F=r.tokenize,P=void 0!==F&&F,j=r.matchAllTokens,z=void 0!==j&&j,T=r.includeMatches,E=void 0!==T&&T,K=r.includeScore,$=void 0!==K&&K,J=r.verbose,N=void 0!==J&&J;n(this,e),this.options={location:i,distance:c,threshold:l,maxPatternLength:f,isCaseSensitive:v,tokenSeparator:g,findAllMatches:m,minMatchCharLength:x,id:M,keys:_,includeMatches:E,includeScore:$,shouldSort:w,getFn:A,sortFn:O,verbose:N,tokenize:P,matchAllTokens:z},this.setCollection(t)}return o(e,[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){this._log('---------\nSearch pattern: "'+e+'"');var t=this._prepareSearchers(e),r=t.tokenSearchers,n=t.fullSearcher,o=this._search(r,n),i=o.weights,a=o.results;return this._computeScore(i,a),this.options.shouldSort&&this._sort(a),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var r=e.split(this.options.tokenSeparator),n=0,o=r.length;n<o;n+=1)t.push(new i(r[n],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],r=this.list,n={},o=[];if("string"==typeof r[0]){for(var i=0,a=r.length;i<a;i+=1)this._analyze({key:"",value:r[i],record:i,index:i},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=r.length;c<h;c+=1)for(var l=r[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:n,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var r=e.key,n=e.arrayIndex,o=void 0===n?-1:n,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(void 0!==i&&null!==i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: "+(""===r?"-":r));var x=f.search(i);if(this._log('Full text: "'+i+'", score: '+x.score),this.options.tokenize){for(var S=i.split(this.options.tokenSeparator),M=[],b=0;b<l.length;b+=1){var _=l[b];this._log('\nPattern: "'+_.pattern+'"');for(var L=!1,w=0;w<S.length;w+=1){var C=S[w],A=_.search(C),I={};A.isMatch?(I[C]=A.score,y=!0,L=!0,M.push(A.score)):(I[C]=1,this.options.matchAllTokens||M.push(1)),this._log('Token: "'+C+'", score: '+I[C])}L&&(k+=1)}m=M[0];for(var O=M.length,F=1;F<O;F+=1)m+=M[F];m/=O,this._log("Token score average:",m)}var P=x.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var j=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: "+j),(y||x.isMatch)&&j){var z=v[c];z?z.output.push({key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}):(v[c]={item:a,output:[{key:r,arrayIndex:o,value:i,score:P,matchedIndices:x.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var T=0,E=i.length;T<E;T+=1)this._analyze({key:r,arrayIndex:T,value:i[T],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var r=0,n=t.length;r<n;r+=1){for(var o=t[r].output,i=o.length,a=0,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=1===h?o[c].score:o[c].score||.001,u=l*h;1!==h?s=Math.min(s,u):(o[c].nScore=u,a+=u)}t[r].score=1===s?a/i:s,this._log(t[r])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];this._log("\n\nOutput:\n\n",JSON.stringify(e));var r=[];this.options.includeMatches&&r.push(function(e,t){var r=e.output;t.matches=[];for(var n=0,o=r.length;n<o;n+=1){var i=r[n];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&r.push(function(e,t){t.score=e.score});for(var n=0,o=e.length;n<o;n+=1){var i=e[n];if(this.options.id&&(i.item=this.options.getFn(i.item,this.options.id)[0]),r.length){for(var a={item:i.item},s=0,c=r.length;s<c;s+=1)r[s](i,a);t.push(a)}else t.push(i.item)}return t}},{key:"_log",value:function(){if(this.options.verbose){var e;(e=console).log.apply(e,arguments)}}}]),e}();e.exports=c}])});

$(document).ready(function () {
    // platform.js
    (function(){"use strict";function e(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function t(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=n(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function i(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=h)for(;++i<n;)t(e[i],i,e);else r(e,t)}function n(t){return t=b(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:e(t)}function r(e,t){for(var i in e)y.call(e,i)&&t(e[i],i,e)}function o(t){return null==t?e(t):M.call(t).slice(8,-1)}function a(e,t){var i=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(i)||"object"==i&&!e[t])}function l(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function s(e,t){var n=null;return i(e,function(i,r){n=t(n,i,r,e)}),n}function b(e){return String(e).replace(/^ +| +$/g,"")}function c(e){function i(t){return s(t,function(t,i){var r=i.pattern||l(i);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=n(t[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}var p=u,f=e&&"object"==typeof e&&"String"!=o(e);f&&(p=e,e=null);var S=p.navigator||{},x=S.userAgent||"";e||(e=x);var h,O,y=f||g==d,v=f?!!S.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(M.toString()),w=f?"Object":"ScriptBridgingProxyObject",P=f?"Object":"Environment",E=f&&p.java?"JavaPackage":o(p.java),k=f?"Object":"RuntimeObject",C=/\bJava/.test(E)&&p.java,W=C&&o(p.environment)==P,B=C?"a":"α",I=C?"b":"β",A=p.document||{},R=p.operamini||p.opera,T=m.test(T=f&&R?R["[[Class]]"]:o(R))?T:R=null,F=e,G=[],$=null,j=e==x,X=j&&R&&"function"==typeof R.version&&R.version(),N=function(t){return s(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),K=function(t){return s(t,function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)})}(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),V=i([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),z=function(t){return s(t,function(t,i,n){return t||(i[V]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(V)]||RegExp("\\b"+l(n)+"(?:\\b|\\w*\\d)","i").exec(e))&&n})}({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}}),L=function(i){return s(i,function(i,n){var r=n.pattern||l(n);return!i&&(i=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(i=t(i,r,n.label||n)),i})}(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(N&&(N=[N]),z&&!V&&(V=i([z])),(h=/\bGoogle TV\b/.exec(V))&&(V=h[0]),/\bSimulator\b/i.test(e)&&(V=(V?V+" ":"")+"Simulator"),"Opera Mini"==K&&/\bOPiOS\b/.test(e)&&G.push("running in Turbo/Uncompressed mode"),"IE"==K&&/\blike iPhone OS\b/.test(e)?(z=(h=c(e.replace(/like iPhone OS/,""))).manufacturer,V=h.product):/^iP/.test(V)?(K||(K="Safari"),L="iOS"+((h=/ OS ([\d_]+)/i.exec(e))?" "+h[1].replace(/_/g,"."):"")):"Konqueror"!=K||/buntu/i.test(L)?z&&"Google"!=z&&(/Chrome/.test(K)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(V))||/\bAndroid\b/.test(L)&&/^Chrome/.test(K)&&/\bVersion\//i.test(e)?(K="Android Browser",L=/\bAndroid\b/.test(L)?L:"Android"):"Silk"==K?(/\bMobi/i.test(e)||(L="Android",G.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&G.unshift("accelerated")):"PaleMoon"==K&&(h=/\bFirefox\/([\d.]+)\b/.exec(e))?G.push("identifying as Firefox "+h[1]):"Firefox"==K&&(h=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(L||(L="Firefox OS"),V||(V=h[1])):!K||(h=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(K))?(K&&!V&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(h+"/")+8))&&(K=null),(h=V||z||L)&&(V||z||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L))&&(K=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(L)?L:h)+" Browser")):"Electron"==K&&(h=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&G.push("Chromium "+h):L="Kubuntu",X||(X=function(t){return s(t,function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",l(K),"(?:Firefox|Minefield|NetFront)"])),(h="iCab"==N&&parseFloat(X)>3&&"WebKit"||/\bOpera\b/.test(K)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(N)&&"WebKit"||!N&&/\bMSIE\b/i.test(e)&&("Mac OS"==L?"Tasman":"Trident")||"WebKit"==N&&/\bPlayStation\b(?! Vita\b)/i.test(K)&&"NetFront")&&(N=[h]),"IE"==K&&(h=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(K+=" Mobile",L="Windows Phone "+(/\+$/.test(h)?h:h+".x"),G.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(K="IE Mobile",L="Windows Phone 8.x",G.unshift("desktop mode"),X||(X=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=K&&"Trident"==N&&(h=/\brv:([\d.]+)/.exec(e))&&(K&&G.push("identifying as "+K+(X?" "+X:"")),K="IE",X=h[1]),j){if(a(p,"global"))if(C&&(F=(h=C.lang.System).getProperty("os.arch"),L=L||h.getProperty("os.name")+" "+h.getProperty("os.version")),y&&a(p,"system")&&(h=[p.system])[0]){L||(L=h[0].os||null);try{h[1]=p.require("ringo/engine").version,X=h[1].join("."),K="RingoJS"}catch(e){h[0].global.system==p.system&&(K="Narwhal")}}else"object"==typeof p.process&&!p.process.browser&&(h=p.process)?("object"==typeof h.versions&&("string"==typeof h.versions.electron?(G.push("Node "+h.versions.node),K="Electron",X=h.versions.electron):"string"==typeof h.versions.nw&&(G.push("Chromium "+X,"Node "+h.versions.node),K="NW.js",X=h.versions.nw)),K||(K="Node.js",F=h.arch,L=h.platform,X=(X=/[\d.]+/.exec(h.version))?X[0]:"unknown")):W&&(K="Rhino");else o(h=p.runtime)==w?(K="Adobe AIR",L=h.flash.system.Capabilities.os):o(h=p.phantom)==k?(K="PhantomJS",X=(h=h.version||null)&&h.major+"."+h.minor+"."+h.patch):"number"==typeof A.documentMode&&(h=/\bTrident\/(\d+)/i.exec(e))?(X=[X,A.documentMode],(h=+h[1]+4)!=X[1]&&(G.push("IE "+X[1]+" mode"),N&&(N[1]=""),X[1]=h),X="IE"==K?String(X[1].toFixed(1)):X[0]):"number"==typeof A.documentMode&&/^(?:Chrome|Firefox)\b/.test(K)&&(G.push("masking as "+K+" "+X),K="IE",X="11.0",N=["Trident"],L="Windows");L=L&&n(L)}if(X&&(h=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(X)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(j&&S.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&($=/b/i.test(h)?"beta":"alpha",X=X.replace(RegExp(h+"\\+?$"),"")+("beta"==$?I:B)+(/\d+\+?/.exec(h)||"")),"Fennec"==K||"Firefox"==K&&/\b(?:Android|Firefox OS)\b/.test(L))K="Firefox Mobile";else if("Maxthon"==K&&X)X=X.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(V))"Xbox 360"==V&&(L=null),"Xbox 360"==V&&/\bIEMobile\b/.test(e)&&G.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(K)&&(!K||V||/Browser|Mobi/.test(K))||"Windows CE"!=L&&!/Mobi/i.test(e))if("IE"==K&&j)try{null===p.external&&G.unshift("platform preview")}catch(e){G.unshift("embedded")}else(/\bBlackBerry\b/.test(V)||/\bBB10\b/.test(e))&&(h=(RegExp(V.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||X)?(L=((h=[h,/BB10/.test(e)])[1]?(V=null,z="BlackBerry"):"Device Software")+" "+h[0],X=null):this!=r&&"Wii"!=V&&(j&&R||/Opera/.test(K)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==K&&/\bOS X (?:\d+\.){2,}/.test(L)||"IE"==K&&(L&&!/^Win/.test(L)&&X>5.5||/\bWindows XP\b/.test(L)&&X>8||8==X&&!/\bTrident\b/.test(e)))&&!m.test(h=c.call(r,e.replace(m,"")+";"))&&h.name&&(h="ing as "+h.name+((h=h.version)?" "+h:""),m.test(K)?(/\bIE\b/.test(h)&&"Mac OS"==L&&(L=null),h="identify"+h):(h="mask"+h,K=T?n(T.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(h)&&(L=null),j||(X=null)),N=["Presto"],G.push(h));else K+=" Mobile";(h=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(h=[parseFloat(h.replace(/\.(\d)$/,".0$1")),h],"Safari"==K&&"+"==h[1].slice(-1)?(K="WebKit Nightly",$="alpha",X=h[1].slice(0,-1)):X!=h[1]&&X!=(h[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(X=null),h[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==h[0]&&537.36==h[2]&&parseFloat(h[1])>=28&&"WebKit"==N&&(N=["Blink"]),j&&(v||h[1])?(N&&(N[1]="like Chrome"),h=h[1]||((h=h[0])<530?1:h<532?2:h<532.05?3:h<533?4:h<534.03?5:h<534.07?6:h<534.1?7:h<534.13?8:h<534.16?9:h<534.24?10:h<534.3?11:h<535.01?12:h<535.02?"13+":h<535.07?15:h<535.11?16:h<535.19?17:h<536.05?18:h<536.1?19:h<537.01?20:h<537.11?"21+":h<537.13?23:h<537.18?24:h<537.24?25:h<537.36?26:"Blink"!=N?"27":"28")):(N&&(N[1]="like Safari"),h=(h=h[0])<400?1:h<500?2:h<526?3:h<533?4:h<534?"4+":h<535?5:h<537?6:h<538?7:h<601?8:"8"),N&&(N[1]+=" "+(h+="number"==typeof h?".x":/[.+]/.test(h)?"":"+")),"Safari"==K&&(!X||parseInt(X)>45)&&(X=h)),"Opera"==K&&(h=/\bzbov|zvav$/.exec(L))?(K+=" ",G.unshift("desktop mode"),"zvav"==h?(K+="Mini",X=null):K+="Mobile",L=L.replace(RegExp(" *"+h+"$"),"")):"Safari"==K&&/\bChrome\b/.exec(N&&N[1])&&(G.unshift("desktop mode"),K="Chrome Mobile",X=null,/\bOS X\b/.test(L)?(z="Apple",L="iOS 4.3+"):L=null),X&&0==X.indexOf(h=/[\d.]+$/.exec(L))&&e.indexOf("/"+h+"-")>-1&&(L=b(L.replace(h,""))),N&&!/\b(?:Avant|Nook)\b/.test(K)&&(/Browser|Lunascape|Maxthon/.test(K)||"Safari"!=K&&/^iOS/.test(L)&&/\bSafari\b/.test(N[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(K)&&N[1])&&(h=N[N.length-1])&&G.push(h),G.length&&(G=["("+G.join("; ")+")"]),z&&V&&V.indexOf(z)<0&&G.push("on "+z),V&&G.push((/^on /.test(G[G.length-1])?"":"on ")+V),L&&(h=/ ([\d.+]+)$/.exec(L),O=h&&"/"==L.charAt(L.length-h[0].length-1),L={architecture:32,family:h&&!O?L.replace(h[0],""):L,version:h?h[1]:null,toString:function(){var e=this.version;return this.family+(e&&!O?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(h=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(F))&&!/\bi686\b/i.test(F)?(L&&(L.architecture=64,L.family=L.family.replace(RegExp(" *"+h),"")),K&&(/\bWOW64\b/i.test(e)||j&&/\w(?:86|32)$/.test(S.cpuClass||S.platform)&&!/\bWin64; x64\b/i.test(e))&&G.unshift("32-bit")):L&&/^OS X/.test(L.family)&&"Chrome"==K&&parseFloat(X)>=39&&(L.architecture=64),e||(e=null);var _={};return _.description=e,_.layout=N&&N[0],_.manufacturer=z,_.name=K,_.prerelease=$,_.product=V,_.ua=e,_.version=K&&X,_.os=L||{architecture:null,family:null,version:null,toString:function(){return"null"}},_.parse=c,_.toString=function(){return this.description||""},_.version&&G.unshift(X),_.name&&G.unshift(K),L&&K&&(L!=String(L).split(" ")[0]||L!=K.split(" ")[0]&&!V)&&G.push(V?"("+L+")":"on "+L),G.length&&(_.description=G.join(" ")),_}var p={function:!0,object:!0},u=p[typeof window]&&window||this,d=u,f=p[typeof exports]&&exports,S=p[typeof module]&&module&&!module.nodeType&&module,x=f&&S&&"object"==typeof global&&global;!x||x.global!==x&&x.window!==x&&x.self!==x||(u=x);var h=Math.pow(2,53)-1,m=/\bOpera/,g=this,O=Object.prototype,y=O.hasOwnProperty,M=O.toString,v=c();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(u.platform=v,define(function(){return v})):f&&S?r(v,function(e,t){f[t]=e}):u.platform=v}).call(this);


  var tb_link = 'https://satoshilabs.kayako.com/conversation/new/9';
  var steps = ' Troubleshooter steps: ';
  var tech = 'OS : ' + platform.os
    + ' browser: ' + platform.name
    + ' version: ' + platform.version
    + ' description: ' + platform.description;

  function getParameterByName() {
    return window.location.hash.split('#')[1];
  }

  function prepareSearch() {
    cats.forEach(function (cat) {
      var elem = shadow.querySelector("[id='" + cat + "']").content;
      var list = elem.querySelectorAll('div.content-wrapper > ul.option-list > li');
      list.forEach(function (child) {
        var id = child.textContent.toString();
        var el = shadow.querySelector("[id='" + id + "']").content;
        var title = el.querySelector("h4.header").textContent;
        var text = el.querySelector("span.text").innerText.trim() || el.querySelector("span.text").textContent.trim();
        searchContent.push({category: cat, id: id, title: title, text: text});
      });
    });
    fuse = new Fuse(searchContent, options);
  }

  function prepareLinks() {
    entries.forEach(function (entry) {
      var list = entry.content.querySelectorAll('div.content-wrapper > ul.option-list > li');
      list.forEach(function (child) {
        var id = child.textContent.toString();
        var elem = shadow.querySelector("[id='" + id + "']").content;
        var title = elem.querySelector("h4.header").textContent;
        child.innerHTML = '<a href="./#' + id + '">' + title + '</a>';
      });
    });
  }

  function setId() {
    try {
      var id = getParameterByName() || 0;
      var elem = shadow.querySelector("[id='" + id + "']").cloneNode(true);
      $(".back-btn").hide();
      $(".back-btn").detach().appendTo("#scene");
      $(".current").remove();
      $("#content").append(elem.content);
      setTimeout(function () {
        $("ul#content > .content-wrapper").addClass("current");
        $("html, body").animate({scrollTop: 0}, "fast");
        steps += ' > ' + $("ul#content > .content-wrapper > h4.header").html();
        if (id !== 0) {
          setTimeout(function () {
            $(".back-btn").detach().appendTo(".content-wrapper > span.text");
            $(".back-btn").slideDown();
          }, 900);
        }
      }, 10);
    } catch (e) {
      throw e;
    }
  }

  function hideSearch() {
    $('#search-shadow').hide();
    $('#search-results').hide();
    $('#js-search').removeClass('active');
  }

  function clearCats() {
    cats.forEach(function (cat) {
        $('#cat'+cat).html('');
    });
  }

  function showSearch() {
    $('#search-shadow').show();
    $('#js-search').addClass('active');
    recomputeResults(results);
  }

  function recomputeResults(res) {
    results = res;
    var valThis = $('#search').val();
    clearCats();
    if (valThis.length === 0) {
      $('.no-res').hide();
      $('#search-results').hide();
      return;
    }
    if (results.length === 0) {
      $('.category').hide();
      $('.no-res').show();
      $('#search-results').show();
    } else {
      $('.category').hide();
      $('#search-results').show();
      results.forEach(function (entry) {
        var item = entry.item;
        var ecat = item.category;
        var eid = item.id;
        var etitle = item.title;
        var etext = item.text;
        var prevCont = $('#cat'+ecat).html();
        $('#cat'+ecat).parent().parent().show();
        $('#cat'+ecat).html(prevCont + '<a href="./#' + eid + '"><div class="res"><h6>'+etitle+'</h6><p>'+etext+'</p></div></a>');
      });
    }
  }

  $('#js-search').on("keypress", function (e) {
    return e.keyCode !== 13;
  });

  $('#search').on('blur', function(){
    // very hacky way to prevent remove content before trigger redirect :( fix later please
    setTimeout(function() {
        hideSearch();
    }, 150);
  }).on('focus', function(){
    showSearch();
  });

  $('#search').keyup(function (e) {
    var valThis = $(this).val();
    if (valThis.length !== 0) {
      var res = fuse.search(valThis);
      recomputeResults(res);
    } else {
      recomputeResults([]);
      if (e.keyCode === 27) $('#search').blur();
    }
  });

  var results = [];
  var shadow = document.querySelector("#shadow");
  var entries = shadow.querySelectorAll("template.entry");
  // list of categories to search for - roots
  var cats = [1,2,17,57];
  var fuse = {};
  // will store results of categories here :)
  var searchContent = [];
  var options = {
    shouldSort: true,
    includeScore: true,
    tokenize: true,
    findAllMatches: true,
    threshold: 0.45,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      "title",
      "text"
    ]
  };
  prepareSearch();
  prepareLinks();
  setId();

  window.onhashchange = setId;
  window.gotoTroubleshooter = function () {
    location.href = tb_link + '?technical=' + tech + steps;
    return false;
  }
});