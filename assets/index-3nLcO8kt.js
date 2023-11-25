var me=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var v=(n,t,e)=>(me(n,t,"read from private field"),e?e.call(n):t.get(n)),y=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},d=(n,t,e,r)=>(me(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();function Et(n){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(n)}function T(n){if(n===null||n===!0||n===!1)return NaN;var t=Number(n);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function _(n,t){if(t.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+t.length+" present")}function S(n){_(1,arguments);var t=Object.prototype.toString.call(n);return n instanceof Date||Et(n)==="object"&&t==="[object Date]"?new Date(n.getTime()):typeof n=="number"||t==="[object Number]"?new Date(n):((typeof n=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ke(n,t){_(2,arguments);var e=S(n).getTime(),r=T(t);return new Date(e+r)}var Be={};function Gt(){return Be}function ze(n){var t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),n.getTime()-t.getTime()}function It(n,t){_(2,arguments);var e=T(t);return ke(n,e*1e3)}function Qe(n){return _(1,arguments),n instanceof Date||Et(n)==="object"&&Object.prototype.toString.call(n)==="[object Date]"}function Xe(n){if(_(1,arguments),!Qe(n)&&typeof n!="number")return!1;var t=S(n);return!isNaN(Number(t))}function Ge(n,t){_(2,arguments);var e=T(t);return ke(n,-e)}var Ve=864e5;function Je(n){_(1,arguments);var t=S(n),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),i=e-r;return Math.floor(i/Ve)+1}function Bt(n){_(1,arguments);var t=1,e=S(n),r=e.getUTCDay(),i=(r<t?7:0)+r-t;return e.setUTCDate(e.getUTCDate()-i),e.setUTCHours(0,0,0,0),e}function Ue(n){_(1,arguments);var t=S(n),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var i=Bt(r),a=new Date(0);a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0);var s=Bt(a);return t.getTime()>=i.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function Ke(n){_(1,arguments);var t=Ue(n),e=new Date(0);e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0);var r=Bt(e);return r}var Ze=6048e5;function tr(n){_(1,arguments);var t=S(n),e=Bt(t).getTime()-Ke(t).getTime();return Math.round(e/Ze)+1}function zt(n,t){var e,r,i,a,s,l,o,c;_(1,arguments);var m=Gt(),u=T((e=(r=(i=(a=t==null?void 0:t.weekStartsOn)!==null&&a!==void 0?a:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&i!==void 0?i:m.weekStartsOn)!==null&&r!==void 0?r:(o=m.locale)===null||o===void 0||(c=o.options)===null||c===void 0?void 0:c.weekStartsOn)!==null&&e!==void 0?e:0);if(!(u>=0&&u<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=S(n),p=f.getUTCDay(),x=(p<u?7:0)+p-u;return f.setUTCDate(f.getUTCDate()-x),f.setUTCHours(0,0,0,0),f}function Ne(n,t){var e,r,i,a,s,l,o,c;_(1,arguments);var m=S(n),u=m.getUTCFullYear(),f=Gt(),p=T((e=(r=(i=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:f.firstWeekContainsDate)!==null&&r!==void 0?r:(o=f.locale)===null||o===void 0||(c=o.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=new Date(0);x.setUTCFullYear(u+1,0,p),x.setUTCHours(0,0,0,0);var M=zt(x,t),A=new Date(0);A.setUTCFullYear(u,0,p),A.setUTCHours(0,0,0,0);var W=zt(A,t);return m.getTime()>=M.getTime()?u+1:m.getTime()>=W.getTime()?u:u-1}function er(n,t){var e,r,i,a,s,l,o,c;_(1,arguments);var m=Gt(),u=T((e=(r=(i=(a=t==null?void 0:t.firstWeekContainsDate)!==null&&a!==void 0?a:t==null||(s=t.locale)===null||s===void 0||(l=s.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&i!==void 0?i:m.firstWeekContainsDate)!==null&&r!==void 0?r:(o=m.locale)===null||o===void 0||(c=o.options)===null||c===void 0?void 0:c.firstWeekContainsDate)!==null&&e!==void 0?e:1),f=Ne(n,t),p=new Date(0);p.setUTCFullYear(f,0,u),p.setUTCHours(0,0,0,0);var x=zt(p,t);return x}var rr=6048e5;function ir(n,t){_(1,arguments);var e=S(n),r=zt(e,t).getTime()-er(e,t).getTime();return Math.round(r/rr)+1}function g(n,t){for(var e=n<0?"-":"",r=Math.abs(n).toString();r.length<t;)r="0"+r;return e+r}var nr={y:function(t,e){var r=t.getUTCFullYear(),i=r>0?r:1-r;return g(e==="yy"?i%100:i,e.length)},M:function(t,e){var r=t.getUTCMonth();return e==="M"?String(r+1):g(r+1,2)},d:function(t,e){return g(t.getUTCDate(),e.length)},a:function(t,e){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,e){return g(t.getUTCHours()%12||12,e.length)},H:function(t,e){return g(t.getUTCHours(),e.length)},m:function(t,e){return g(t.getUTCMinutes(),e.length)},s:function(t,e){return g(t.getUTCSeconds(),e.length)},S:function(t,e){var r=e.length,i=t.getUTCMilliseconds(),a=Math.floor(i*Math.pow(10,r-3));return g(a,e.length)}};const k=nr;var Q={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ar={G:function(t,e,r){var i=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return r.era(i,{width:"abbreviated"});case"GGGGG":return r.era(i,{width:"narrow"});case"GGGG":default:return r.era(i,{width:"wide"})}},y:function(t,e,r){if(e==="yo"){var i=t.getUTCFullYear(),a=i>0?i:1-i;return r.ordinalNumber(a,{unit:"year"})}return k.y(t,e)},Y:function(t,e,r,i){var a=Ne(t,i),s=a>0?a:1-a;if(e==="YY"){var l=s%100;return g(l,2)}return e==="Yo"?r.ordinalNumber(s,{unit:"year"}):g(s,e.length)},R:function(t,e){var r=Ue(t);return g(r,e.length)},u:function(t,e){var r=t.getUTCFullYear();return g(r,e.length)},Q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(i);case"QQ":return g(i,2);case"Qo":return r.ordinalNumber(i,{unit:"quarter"});case"QQQ":return r.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(i,{width:"wide",context:"formatting"})}},q:function(t,e,r){var i=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(i);case"qq":return g(i,2);case"qo":return r.ordinalNumber(i,{unit:"quarter"});case"qqq":return r.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(i,{width:"wide",context:"standalone"})}},M:function(t,e,r){var i=t.getUTCMonth();switch(e){case"M":case"MM":return k.M(t,e);case"Mo":return r.ordinalNumber(i+1,{unit:"month"});case"MMM":return r.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(i,{width:"wide",context:"formatting"})}},L:function(t,e,r){var i=t.getUTCMonth();switch(e){case"L":return String(i+1);case"LL":return g(i+1,2);case"Lo":return r.ordinalNumber(i+1,{unit:"month"});case"LLL":return r.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(i,{width:"wide",context:"standalone"})}},w:function(t,e,r,i){var a=ir(t,i);return e==="wo"?r.ordinalNumber(a,{unit:"week"}):g(a,e.length)},I:function(t,e,r){var i=tr(t);return e==="Io"?r.ordinalNumber(i,{unit:"week"}):g(i,e.length)},d:function(t,e,r){return e==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):k.d(t,e)},D:function(t,e,r){var i=Je(t);return e==="Do"?r.ordinalNumber(i,{unit:"dayOfYear"}):g(i,e.length)},E:function(t,e,r){var i=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return r.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(i,{width:"short",context:"formatting"});case"EEEE":default:return r.day(i,{width:"wide",context:"formatting"})}},e:function(t,e,r,i){var a=t.getUTCDay(),s=(a-i.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return g(s,2);case"eo":return r.ordinalNumber(s,{unit:"day"});case"eee":return r.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(a,{width:"short",context:"formatting"});case"eeee":default:return r.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,r,i){var a=t.getUTCDay(),s=(a-i.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return g(s,e.length);case"co":return r.ordinalNumber(s,{unit:"day"});case"ccc":return r.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(a,{width:"narrow",context:"standalone"});case"cccccc":return r.day(a,{width:"short",context:"standalone"});case"cccc":default:return r.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,r){var i=t.getUTCDay(),a=i===0?7:i;switch(e){case"i":return String(a);case"ii":return g(a,e.length);case"io":return r.ordinalNumber(a,{unit:"day"});case"iii":return r.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(i,{width:"short",context:"formatting"});case"iiii":default:return r.day(i,{width:"wide",context:"formatting"})}},a:function(t,e,r){var i=t.getUTCHours(),a=i/12>=1?"pm":"am";switch(e){case"a":case"aa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,r){var i=t.getUTCHours(),a;switch(i===12?a=Q.noon:i===0?a=Q.midnight:a=i/12>=1?"pm":"am",e){case"b":case"bb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,r){var i=t.getUTCHours(),a;switch(i>=17?a=Q.evening:i>=12?a=Q.afternoon:i>=4?a=Q.morning:a=Q.night,e){case"B":case"BB":case"BBB":return r.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,r){if(e==="ho"){var i=t.getUTCHours()%12;return i===0&&(i=12),r.ordinalNumber(i,{unit:"hour"})}return k.h(t,e)},H:function(t,e,r){return e==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):k.H(t,e)},K:function(t,e,r){var i=t.getUTCHours()%12;return e==="Ko"?r.ordinalNumber(i,{unit:"hour"}):g(i,e.length)},k:function(t,e,r){var i=t.getUTCHours();return i===0&&(i=24),e==="ko"?r.ordinalNumber(i,{unit:"hour"}):g(i,e.length)},m:function(t,e,r){return e==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):k.m(t,e)},s:function(t,e,r){return e==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):k.s(t,e)},S:function(t,e){return k.S(t,e)},X:function(t,e,r,i){var a=i._originalDate||t,s=a.getTimezoneOffset();if(s===0)return"Z";switch(e){case"X":return pe(s);case"XXXX":case"XX":return H(s);case"XXXXX":case"XXX":default:return H(s,":")}},x:function(t,e,r,i){var a=i._originalDate||t,s=a.getTimezoneOffset();switch(e){case"x":return pe(s);case"xxxx":case"xx":return H(s);case"xxxxx":case"xxx":default:return H(s,":")}},O:function(t,e,r,i){var a=i._originalDate||t,s=a.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+fe(s,":");case"OOOO":default:return"GMT"+H(s,":")}},z:function(t,e,r,i){var a=i._originalDate||t,s=a.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+fe(s,":");case"zzzz":default:return"GMT"+H(s,":")}},t:function(t,e,r,i){var a=i._originalDate||t,s=Math.floor(a.getTime()/1e3);return g(s,e.length)},T:function(t,e,r,i){var a=i._originalDate||t,s=a.getTime();return g(s,e.length)}};function fe(n,t){var e=n>0?"-":"+",r=Math.abs(n),i=Math.floor(r/60),a=r%60;if(a===0)return e+String(i);var s=t||"";return e+String(i)+s+g(a,2)}function pe(n,t){if(n%60===0){var e=n>0?"-":"+";return e+g(Math.abs(n)/60,2)}return H(n,t)}function H(n,t){var e=t||"",r=n>0?"-":"+",i=Math.abs(n),a=g(Math.floor(i/60),2),s=g(i%60,2);return r+a+e+s}const sr=ar;var ge=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},We=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},or=function(t,e){var r=t.match(/(P+)(p+)?/)||[],i=r[1],a=r[2];if(!a)return ge(t,e);var s;switch(i){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",ge(i,e)).replace("{{time}}",We(a,e))},lr={p:We,P:or};const cr=lr;var dr=["D","DD"],ur=["YY","YYYY"];function hr(n){return dr.indexOf(n)!==-1}function mr(n){return ur.indexOf(n)!==-1}function ve(n,t,e){if(n==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(n==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var fr={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},pr=function(t,e,r){var i,a=fr[t];return typeof a=="string"?i=a:e===1?i=a.one:i=a.other.replace("{{count}}",e.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+i:i+" ago":i};const gr=pr;function ee(n){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.width?String(t.width):n.defaultWidth,r=n.formats[e]||n.formats[n.defaultWidth];return r}}var vr={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},yr={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wr={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},br={date:ee({formats:vr,defaultWidth:"full"}),time:ee({formats:yr,defaultWidth:"full"}),dateTime:ee({formats:wr,defaultWidth:"full"})};const $r=br;var _r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},xr=function(t,e,r,i){return _r[t]};const Sr=xr;function Mt(n){return function(t,e){var r=e!=null&&e.context?String(e.context):"standalone",i;if(r==="formatting"&&n.formattingValues){var a=n.defaultFormattingWidth||n.defaultWidth,s=e!=null&&e.width?String(e.width):a;i=n.formattingValues[s]||n.formattingValues[a]}else{var l=n.defaultWidth,o=e!=null&&e.width?String(e.width):n.defaultWidth;i=n.values[o]||n.values[l]}var c=n.argumentCallback?n.argumentCallback(t):t;return i[c]}}var Tr={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Mr={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Dr={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Cr={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Pr={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ar={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Or=function(t,e){var r=Number(t),i=r%100;if(i>20||i<10)switch(i%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Er={ordinalNumber:Or,era:Mt({values:Tr,defaultWidth:"wide"}),quarter:Mt({values:Mr,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Mt({values:Dr,defaultWidth:"wide"}),day:Mt({values:Cr,defaultWidth:"wide"}),dayPeriod:Mt({values:Pr,defaultWidth:"wide",formattingValues:Ar,defaultFormattingWidth:"wide"})};const Fr=Er;function Dt(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.width,i=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],a=t.match(i);if(!a)return null;var s=a[0],l=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],o=Array.isArray(l)?Ur(l,function(u){return u.test(s)}):kr(l,function(u){return u.test(s)}),c;c=n.valueCallback?n.valueCallback(o):o,c=e.valueCallback?e.valueCallback(c):c;var m=t.slice(s.length);return{value:c,rest:m}}}function kr(n,t){for(var e in n)if(n.hasOwnProperty(e)&&t(n[e]))return e}function Ur(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e}function Nr(n){return function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(n.matchPattern);if(!r)return null;var i=r[0],a=t.match(n.parsePattern);if(!a)return null;var s=n.valueCallback?n.valueCallback(a[0]):a[0];s=e.valueCallback?e.valueCallback(s):s;var l=t.slice(i.length);return{value:s,rest:l}}}var Wr=/^(\d+)(th|st|nd|rd)?/i,Lr=/\d+/i,Hr={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Yr={any:[/^b/i,/^(a|c)/i]},Rr={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},jr={any:[/1/i,/2/i,/3/i,/4/i]},Ir={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qr={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Br={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zr={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qr={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xr={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gr={ordinalNumber:Nr({matchPattern:Wr,parsePattern:Lr,valueCallback:function(t){return parseInt(t,10)}}),era:Dt({matchPatterns:Hr,defaultMatchWidth:"wide",parsePatterns:Yr,defaultParseWidth:"any"}),quarter:Dt({matchPatterns:Rr,defaultMatchWidth:"wide",parsePatterns:jr,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Dt({matchPatterns:Ir,defaultMatchWidth:"wide",parsePatterns:qr,defaultParseWidth:"any"}),day:Dt({matchPatterns:Br,defaultMatchWidth:"wide",parsePatterns:zr,defaultParseWidth:"any"}),dayPeriod:Dt({matchPatterns:Qr,defaultMatchWidth:"any",parsePatterns:Xr,defaultParseWidth:"any"})};const Vr=Gr;var Jr={code:"en-US",formatDistance:gr,formatLong:$r,formatRelative:Sr,localize:Fr,match:Vr,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Kr=Jr;var Zr=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ti=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ei=/^'([^]*?)'?$/,ri=/''/g,ii=/[a-zA-Z]/;function Ct(n,t,e){var r,i,a,s,l,o,c,m,u,f,p,x,M,A,W,I,q,B;_(2,arguments);var Rt=String(t),D=Gt(),O=(r=(i=e==null?void 0:e.locale)!==null&&i!==void 0?i:D.locale)!==null&&r!==void 0?r:Kr,St=T((a=(s=(l=(o=e==null?void 0:e.firstWeekContainsDate)!==null&&o!==void 0?o:e==null||(c=e.locale)===null||c===void 0||(m=c.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&l!==void 0?l:D.firstWeekContainsDate)!==null&&s!==void 0?s:(u=D.locale)===null||u===void 0||(f=u.options)===null||f===void 0?void 0:f.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(St>=1&&St<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var Tt=T((p=(x=(M=(A=e==null?void 0:e.weekStartsOn)!==null&&A!==void 0?A:e==null||(W=e.locale)===null||W===void 0||(I=W.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&M!==void 0?M:D.weekStartsOn)!==null&&x!==void 0?x:(q=D.locale)===null||q===void 0||(B=q.options)===null||B===void 0?void 0:B.weekStartsOn)!==null&&p!==void 0?p:0);if(!(Tt>=0&&Tt<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!O.localize)throw new RangeError("locale must contain localize property");if(!O.formatLong)throw new RangeError("locale must contain formatLong property");var z=S(n);if(!Xe(z))throw new RangeError("Invalid time value");var Kt=ze(z),Zt=Ge(z,Kt),te={firstWeekContainsDate:St,weekStartsOn:Tt,locale:O,_originalDate:z},qe=Rt.match(ti).map(function(C){var F=C[0];if(F==="p"||F==="P"){var jt=cr[F];return jt(C,O.formatLong)}return C}).join("").match(Zr).map(function(C){if(C==="''")return"'";var F=C[0];if(F==="'")return ni(C);var jt=sr[F];if(jt)return!(e!=null&&e.useAdditionalWeekYearTokens)&&mr(C)&&ve(C,t,String(n)),!(e!=null&&e.useAdditionalDayOfYearTokens)&&hr(C)&&ve(C,t,String(n)),jt(Zt,C,O.localize,te);if(F.match(ii))throw new RangeError("Format string contains an unescaped latin alphabet character `"+F+"`");return C}).join("");return qe}function ni(n){var t=n.match(ei);return t?t[1].replace(ri,"'"):n}function re(n){_(1,arguments);var t=T(n);return S(t*1e3)}function ai(n){_(1,arguments);var t=S(n),e=t.getFullYear(),r=t.getMonth(),i=new Date(0);return i.setFullYear(e,r+1,0),i.setHours(0,0,0,0),i.getDate()}function si(n,t){_(2,arguments);var e=S(n),r=S(t);return e.getTime()>r.getTime()}function oi(n,t){_(2,arguments);var e=S(n),r=S(t);return e.getTime()<r.getTime()}function li(n,t){_(2,arguments);var e=S(n),r=T(t),i=e.getFullYear(),a=e.getDate(),s=new Date(0);s.setFullYear(i,r,15),s.setHours(0,0,0,0);var l=ai(s);return e.setMonth(r,Math.min(a,l)),e}function ye(n,t){if(_(2,arguments),Et(t)!=="object"||t===null)throw new RangeError("values parameter must be an object");var e=S(n);return isNaN(e.getTime())?new Date(NaN):(t.year!=null&&e.setFullYear(t.year),t.month!=null&&(e=li(e,t.month)),t.date!=null&&e.setDate(T(t.date)),t.hours!=null&&e.setHours(T(t.hours)),t.minutes!=null&&e.setMinutes(T(t.minutes)),t.seconds!=null&&e.setSeconds(T(t.seconds)),t.milliseconds!=null&&e.setMilliseconds(T(t.milliseconds)),e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis,de=qt.ShadowRoot&&(qt.ShadyCSS===void 0||qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),we=new WeakMap;let Le=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(de&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=we.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&we.set(e,t))}return t}toString(){return this.cssText}};const ci=n=>new Le(typeof n=="string"?n:n+"",void 0,ue),Nt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((r,i,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[a+1],n[0]);return new Le(e,n,ue)},di=(n,t)=>{if(de)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=qt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,n.appendChild(r)}},be=de?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ci(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ui,defineProperty:hi,getOwnPropertyDescriptor:mi,getOwnPropertyNames:fi,getOwnPropertySymbols:pi,getPrototypeOf:gi}=Object,N=globalThis,$e=N.trustedTypes,vi=$e?$e.emptyScript:"",ie=N.reactiveElementPolyfillSupport,At=(n,t)=>n,Qt={toAttribute(n,t){switch(t){case Boolean:n=n?vi:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},he=(n,t)=>!ui(n,t),_e={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);class X extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_e){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&hi(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:a}=mi(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const l=i==null?void 0:i.call(this);a.call(this,s),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_e}static _$Ei(){if(this.hasOwnProperty(At("elementProperties")))return;const t=gi(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(At("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(At("properties"))){const e=this.properties,r=[...fi(e),...pi(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(be(i))}else t!==void 0&&e.push(be(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return di(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var a;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:Qt).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var a;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:Qt;this._$Em=i,this[i]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,a){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??he)(i?a:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[a,s]of i)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$E_)==null||r.forEach(i=>{var a;return(a=i.hostUpdate)==null?void 0:a.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[At("elementProperties")]=new Map,X[At("finalized")]=new Map,ie==null||ie({ReactiveElement:X}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,Xt=Ot.trustedTypes,xe=Xt?Xt.createPolicy("lit-html",{createHTML:n=>n}):void 0,He="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,Ye="?"+U,yi=`<${Ye}>`,R=document,Ft=()=>R.createComment(""),kt=n=>n===null||typeof n!="object"&&typeof n!="function",Re=Array.isArray,wi=n=>Re(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Te=/>/g,L=RegExp(`>|${ne}(?:([^\\s"'>=/]+)(${ne}*=${ne}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Me=/'/g,De=/"/g,je=/^(?:script|style|textarea|title)$/i,bi=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),P=bi(1),_t=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),Ce=new WeakMap,Y=R.createTreeWalker(R,129);function Ie(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(t):t}const $i=(n,t)=>{const e=n.length-1,r=[];let i,a=t===2?"<svg>":"",s=Pt;for(let l=0;l<e;l++){const o=n[l];let c,m,u=-1,f=0;for(;f<o.length&&(s.lastIndex=f,m=s.exec(o),m!==null);)f=s.lastIndex,s===Pt?m[1]==="!--"?s=Se:m[1]!==void 0?s=Te:m[2]!==void 0?(je.test(m[2])&&(i=RegExp("</"+m[2],"g")),s=L):m[3]!==void 0&&(s=L):s===L?m[0]===">"?(s=i??Pt,u=-1):m[1]===void 0?u=-2:(u=s.lastIndex-m[2].length,c=m[1],s=m[3]===void 0?L:m[3]==='"'?De:Me):s===De||s===Me?s=L:s===Se||s===Te?s=Pt:(s=L,i=void 0);const p=s===L&&n[l+1].startsWith("/>")?" ":"";a+=s===Pt?o+yi:u>=0?(r.push(c),o.slice(0,u)+He+o.slice(u)+U+p):o+U+(u===-2?l:p)}return[Ie(n,a+(n[e]||"<?>")+(t===2?"</svg>":"")),r]};class Ut{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let a=0,s=0;const l=t.length-1,o=this.parts,[c,m]=$i(t,e);if(this.el=Ut.createElement(c,r),Y.currentNode=this.el.content,e===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Y.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(He)){const f=m[s++],p=i.getAttribute(u).split(U),x=/([.?@])?(.*)/.exec(f);o.push({type:1,index:a,name:x[2],strings:p,ctor:x[1]==="."?xi:x[1]==="?"?Si:x[1]==="@"?Ti:Vt}),i.removeAttribute(u)}else u.startsWith(U)&&(o.push({type:6,index:a}),i.removeAttribute(u));if(je.test(i.tagName)){const u=i.textContent.split(U),f=u.length-1;if(f>0){i.textContent=Xt?Xt.emptyScript:"";for(let p=0;p<f;p++)i.append(u[p],Ft()),Y.nextNode(),o.push({type:2,index:++a});i.append(u[f],Ft())}}}else if(i.nodeType===8)if(i.data===Ye)o.push({type:2,index:a});else{let u=-1;for(;(u=i.data.indexOf(U,u+1))!==-1;)o.push({type:7,index:a}),u+=U.length-1}a++}}static createElement(t,e){const r=R.createElement("template");return r.innerHTML=t,r}}function xt(n,t,e=n,r){var s,l;if(t===_t)return t;let i=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const a=kt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==a&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),a===void 0?i=void 0:(i=new a(n),i._$AT(n,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=xt(n,i._$AS(n,t.values),i,r)),t}class _i{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??R).importNode(e,!0);Y.currentNode=i;let a=Y.nextNode(),s=0,l=0,o=r[0];for(;o!==void 0;){if(s===o.index){let c;o.type===2?c=new Wt(a,a.nextSibling,this,t):o.type===1?c=new o.ctor(a,o.name,o.strings,this,t):o.type===6&&(c=new Mi(a,this,t)),this._$AV.push(c),o=r[++l]}s!==(o==null?void 0:o.index)&&(a=Y.nextNode(),s++)}return Y.currentNode=R,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Wt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),kt(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==_t&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):wi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==h&&kt(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var a;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ut.createElement(Ie(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===i)this._$AH.p(e);else{const s=new _i(i,this),l=s.u(this.options);s.p(e),this.$(l),this._$AH=s}}_$AC(t){let e=Ce.get(t.strings);return e===void 0&&Ce.set(t.strings,e=new Ut(t)),e}T(t){Re(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const a of t)i===e.length?e.push(r=new Wt(this.k(Ft()),this.k(Ft()),this,this.options)):r=e[i],r._$AI(a),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Vt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,a){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(t,e=this,r,i){const a=this.strings;let s=!1;if(a===void 0)t=xt(this,t,e,0),s=!kt(t)||t!==this._$AH&&t!==_t,s&&(this._$AH=t);else{const l=t;let o,c;for(t=a[0],o=0;o<a.length-1;o++)c=xt(this,l[r+o],e,o),c===_t&&(c=this._$AH[o]),s||(s=!kt(c)||c!==this._$AH[o]),c===h?t=h:t!==h&&(t+=(c??"")+a[o+1]),this._$AH[o]=c}s&&!i&&this.O(t)}O(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xi extends Vt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===h?void 0:t}}class Si extends Vt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Ti extends Vt{constructor(t,e,r,i,a){super(t,e,r,i,a),this.type=5}_$AI(t,e=this){if((t=xt(this,t,e,0)??h)===_t)return;const r=this._$AH,i=t===h&&r!==h||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==h&&(r===h||i);i&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Mi{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const ae=Ot.litHtmlPolyfillSupport;ae==null||ae(Ut,Wt),(Ot.litHtmlVersions??(Ot.litHtmlVersions=[])).push("3.1.0");const Di=(n,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const a=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new Wt(t.insertBefore(Ft(),a),a,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class E extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Di(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _t}}var Oe;E._$litElement$=!0,E.finalized=!0,(Oe=globalThis.litElementHydrateSupport)==null||Oe.call(globalThis,{LitElement:E});const se=globalThis.litElementPolyfillSupport;se==null||se({LitElement:E});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:he},Pi=(n=Ci,t,e)=>{const{kind:r,metadata:i}=e;let a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(e.name,n),r==="accessor"){const{name:s}=e;return{set(l){const o=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,o,n)},init(l){return l!==void 0&&this.C(s,void 0,n),l}}}if(r==="setter"){const{name:s}=e;return function(l){const o=this[s];t.call(this,l),this.requestUpdate(s,o,n)}}throw Error("Unsupported decorator location: "+r)};function b(n){return(t,e)=>typeof e=="object"?Pi(n,t,e):((r,i,a)=>{const s=i.hasOwnProperty(a);return i.constructor.createProperty(a,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,a):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ai(n,t){return(e,r,i)=>{const a=s=>{var l;return((l=s.renderRoot)==null?void 0:l.querySelector(n))??null};if(t){const{get:s,set:l}=typeof r=="object"?e:i??(()=>{const o=Symbol();return{get(){return this[o]},set(c){this[o]=c}}})();return Pe(e,r,{get(){let o=s.call(this);return o===void 0&&(o=a(this),(o!==null||this.hasUpdated)&&l.call(this,o)),o}})}return Pe(e,r,{get(){return a(this)}})}}const Ht=P`
  <link
    rel="stylesheet"
    type="text/css"
    href="https://w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
`;var Oi=Object.defineProperty,Ei=Object.getOwnPropertyDescriptor,Yt=(n,t,e,r)=>{for(var i=r>1?void 0:r?Ei(t,e):t,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Oi(t,e,i),i},G,V,J,Ee;let j=(Ee=class extends E{constructor(){super(...arguments);y(this,G,void 0);y(this,V,void 0);y(this,J,void 0);d(this,G,""),d(this,V,void 0),d(this,J,localStorage.isMetric!=="false")}get locationData(){return v(this,G)}set locationData(t){d(this,G,t)}get prevLocationData(){return v(this,V)}set prevLocationData(t){d(this,V,t)}get isMetricActive(){return v(this,J)}set isMetricActive(t){d(this,J,t)}render(){return P`
      ${Ht}
      <header class="w3-text-white w3-padding-16">
        <slot></slot>
        <form method="get">
          <input
            title=""
            type="text"
            name="search"
            minlength="1"
            @input=${t=>this.locationData=t.target.value}
            value=${this.locationData}
            placeholder="Search"
            class="w3-text-white" />
          ${this.locationData?P`<button
                id="clear"
                type="button"
                title="Clear"
                tabindex="-1"
                @click=${()=>{this.locationData="",this._input.value=""}}
                class="w3-text-white">
                <i class="fa-solid fa-x"></i>
              </button>`:h}

          <button
            id="submit"
            type="submit"
            title="Search"
            @click=${t=>{if(t.preventDefault(),this.locationData!==""&&this.locationData!==this.prevLocationData)return this.prevLocationData=this.locationData,this.apiCall(this.locationData)}}
            class="w3-text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div>
          <button
            type="button"
            title="Metric system"
            class="w3-text-white ${this.isMetricActive?"active-btn":""}"
            @click=${()=>{this.isMetric=!0,this.isMetricActive=this.isMetric,this.switchSystem(this.isMetric)}}>
            °C, m/s
          </button>
          <button
            type="button"
            title="Imperial system"
            class="w3-text-white ${this.isMetricActive?"":"active-btn"}"
            @click=${()=>{this.isMetric=!1,this.isMetricActive=this.isMetric,this.switchSystem(this.isMetric)}}>
            °F, mph
          </button>
        </div>
      </header>
    `}},G=new WeakMap,V=new WeakMap,J=new WeakMap,Ee);j.styles=Nt`
    ::selection {
      background-color: var(--bg-primary);
    }

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-weight: 400;
      margin-top: 0.25rem;
      gap: 1rem;

      & form {
        display: flex;
        gap: 0.25rem;
        border-radius: 2rem;

        & i {
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
            drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        }

        &:hover #clear,
        &:focus-within #clear {
          visibility: visible;
        }

        & input {
          border: 0;
          border-radius: 2rem 0 0 2rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          outline-offset: -1px;
          transition: outline-color var(--transition);
          padding: 0.5rem 2rem 0.5rem 1rem;
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }

          &::placeholder {
            color: white;
            opacity: 0.5;
          }
        }

        & #clear {
          visibility: hidden;
          position: relative;
          border: 0;
          user-select: none;
          border-radius: 2rem;
          padding: 0.25rem;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          margin-left: -1.5rem;
          right: 6px;
        }

        & #submit {
          -webkit-tap-highlight-color: transparent;
          border: 0;
          user-select: none;
          border-radius: 0 2rem 2rem 0;
          padding: 0.5rem 0.75rem;
          margin-left: -2px;
          background-color: var(--bg-accent);
          outline: 2px solid var(--bg-accent);
          outline-offset: -1px;
          transition: outline-color var(--transition);
          cursor: pointer;
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }
      }

      & div {
        display: flex;
        gap: 0.75rem;

        & button {
          -webkit-tap-highlight-color: transparent;
          border: 0;
          user-select: none;
          border-radius: 2rem;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          outline-offset: -1px;
          transition: outline-color var(--transition);
          cursor: pointer;
          box-shadow:
            0 1px 3px 0 rgb(0 0 0 / 0.1),
            0 1px 2px -1px rgb(0 0 0 / 0.1);

          &:hover,
          &:focus-visible {
            outline: 2px solid white !important;
          }
        }

        .active-btn {
          outline: 2px solid white !important;
        }
      }
    }
  `;Yt([b({type:String})],j.prototype,"locationData",1);Yt([b({type:String})],j.prototype,"prevLocationData",1);Yt([b({type:Boolean})],j.prototype,"isMetricActive",1);Yt([Ai("input")],j.prototype,"_input",2);j=Yt([Lt("lit-controls")],j);var Fi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Ui=(n,t,e,r)=>{for(var i=r>1?void 0:r?ki(t,e):t,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Fi(t,e,i),i};let oe=class extends E{render(){return P`
      ${Ht}
      <main class="w3-text-white w3-container w3-padding-16">
        <slot></slot>
      </main>
    `}};oe.styles=Nt`
    :host {
      width: 100%;
    }

    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;oe=Ui([Lt("lit-current")],oe);var Ni=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Li=(n,t,e,r)=>{for(var i=r>1?void 0:r?Wi(t,e):t,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Ni(t,e,i),i};let le=class extends E{render(){return P`
      ${Ht}
      <section class="w3-text-white w3-container w3-padding-24">
        <div>
          <slot></slot>
        </div>
      </section>
    `}};le.styles=Nt`
    :host {
      width: 100%;
    }

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    section > div {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-rows: repeat(5, 1fr);
      grid-template-columns: 1fr;
      width: fit-content;
      place-self: center;
      gap: 0.5rem;
    }
  `;le=Li([Lt("lit-forecast")],le);var Hi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,Ri=(n,t,e,r)=>{for(var i=r>1?void 0:r?Yi(t,e):t,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Hi(t,e,i),i};let ce=class extends E{render(){return P`
      ${Ht}
      <footer class="w3-text-white w3-large w3-padding-32">
        © 2023
        <a
          title="Go to the Source"
          target="_blank"
          type="text/html"
          rel="noopener noreferrer nofollow external author"
          href="https://github.com/eldarlrd/weather-app">
          <i class="fa-brands fa-github"></i>
          eldarlrd
        </a>
      </footer>
    `}};ce.styles=Nt`
    :focus-visible {
      outline: 2px solid white;
    }

    :host {
      min-width: 100%;
      text-align: center;
      user-select: none;
      font-weight: 400;
    }

    footer {
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    }

    footer > a {
      display: inline-block;
      border-radius: 2rem;
      text-decoration: none;
      margin-left: 0.25rem;
      transition: transform var(--transition);

      &:hover {
        transform: scale(1.05);
      }
    }
  `;ce=Ri([Lt("lit-footer")],ce);const Jt="3e46a93e740c1dc28aa9780a8d8db785",ji=async(n,t)=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${t}&appid=${Jt}`,{mode:"cors"})).json()}catch(e){e instanceof Error&&console.log({name:e.name,message:e.message})}},Ii=async(n,t)=>{try{return await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${t}&appid=${Jt}`,{mode:"cors"})).json()}catch(e){e instanceof Error&&console.log({name:e.name,message:e.message})}},qi=async n=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&appid=${Jt}`,{mode:"cors"});if(!t.ok)throw new Error(t.status.toString());return await t.json()}catch(t){t instanceof Error&&console.log({name:t.name,message:t.message})}},Bi=async n=>{try{const t=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${n}&appid=${Jt}`,{mode:"cors"});if(!t.ok)throw new Error(t.status.toString());return await t.json()}catch(t){t instanceof Error&&console.log({name:t.name,message:t.message})}},zi="/weather-app/assets/dayTime-o1m3P47A.avif",Qi="/weather-app/assets/moonCloud-dOLuxLLq.png",Xi="/weather-app/assets/nightTime-v_laJ73R.avif";var Gi=Object.defineProperty,Vi=Object.getOwnPropertyDescriptor,$=(n,t,e,r)=>{for(var i=r>1?void 0:r?Vi(t,e):t,a=n.length-1,s;a>=0;a--)(s=n[a])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Gi(t,e,i),i};const Ae={"01d":"fa-sun","01n":"fa-moon","02d":"fa-cloud-sun","02n":"fa-cloud-moon","03d":"fa-cloud","03n":"fa-cloud","04d":"fa-cloud","04n":"fa-cloud","09d":"fa-cloud-showers-heavy","09n":"fa-cloud-showers-heavy","10d":"fa-cloud-sun-rain","10n":"fa-cloud-moon-rain","11d":"fa-cloud-bolt","11n":"fa-cloud-bolt","13d":"fa-snowflake","13n":"fa-snowflake","50d":"fa-smog","50n":"fa-smog"},Ji=[{maxSpeed:.3,description:"Calm"},{maxSpeed:1.7,description:"Light winds"},{maxSpeed:3.3,description:"Light breeze"},{maxSpeed:5.6,description:"Gentle breeze"},{maxSpeed:8.1,description:"Moderate breeze"},{maxSpeed:10.8,description:"Fresh breeze"},{maxSpeed:13.9,description:"Strong breeze"},{maxSpeed:17.2,description:"Moderate gale"},{maxSpeed:20.8,description:"Fresh gale"},{maxSpeed:24.7,description:"Strong gale"},{maxSpeed:28.6,description:"Whole gale"},{maxSpeed:33.1,description:"Storm"},{maxSpeed:1/0,description:"Hurricane"}];var K,Z,tt,et,rt,it,nt,at,st,ot,lt,ct,dt,ut,ht,mt,ft,pt,gt,vt,yt,wt,bt,$t,Fe;let w=(Fe=class extends E{constructor(){super(...arguments);y(this,K,void 0);y(this,Z,void 0);y(this,tt,void 0);y(this,et,void 0);y(this,rt,void 0);y(this,it,void 0);y(this,nt,void 0);y(this,at,void 0);y(this,st,void 0);y(this,ot,void 0);y(this,lt,void 0);y(this,ct,void 0);y(this,dt,void 0);y(this,ut,void 0);y(this,ht,void 0);y(this,mt,void 0);y(this,ft,void 0);y(this,pt,void 0);y(this,gt,void 0);y(this,vt,void 0);y(this,yt,void 0);y(this,wt,void 0);y(this,bt,void 0);y(this,$t,void 0);d(this,K,void 0),d(this,Z,void 0),d(this,tt,void 0),d(this,et,void 0),d(this,rt,void 0),d(this,it,void 0),d(this,nt,void 0),d(this,at,void 0),d(this,st,void 0),d(this,ot,void 0),d(this,lt,void 0),d(this,ct,void 0),d(this,dt,void 0),d(this,ut,void 0),d(this,ht,void 0),d(this,mt,localStorage.isMetric!=="false"),d(this,ft,void 0),d(this,pt,void 0),d(this,gt,[]),d(this,vt,void 0),d(this,yt,void 0),d(this,wt,void 0),d(this,bt,void 0),d(this,$t,!0),this.apiCall=async(t,e,r)=>{var I,q,B,Rt;const i=new Intl.DisplayNames(["en"],{type:"region"});this.clouds=void 0,this.mainTemp=void 0,this.mainFeel=void 0,this.mainHumidity=void 0,this.visibility=void 0,this.windSpeed=void 0,this.windDeg=void 0,this.weatherDesc=void 0,this.weatherIcon=void 0,this.city=void 0,this.country=void 0,this.windFeelText=void 0,this.sunrise=void 0,this.sunset=void 0,this.currTime=void 0,this.forecastData&&(this.forecastData.length=0),this.isLoading=!0,this.isFound=!0;let a,s;if(e&&r?(a=await ji(e,r),s=await Ii(e,r)):t&&(a=await qi(t),s=await Bi(t)),!a||!s){this.isFound=!1;return}const{clouds:l,weather:o,main:c,visibility:m,wind:u,sys:f,timezone:p,name:x}=a;this.clouds=l==null?void 0:l.all,this.mainTemp=Math.round(c==null?void 0:c.temp),this.mainFeel=Math.round(c==null?void 0:c.feels_like),this.mainHumidity=c==null?void 0:c.humidity,this.visibility=m/1e3,this.windSpeed=u==null?void 0:u.speed,this.windDeg=u==null?void 0:u.deg,o&&(this.weatherDesc=o[0].description,this.weatherIcon=o[0].icon),this.city=x;let M;f&&(M=i.of(f.country)),M&&(this.country=M),p!==void 0&&(this.sunrise=It(re(f==null?void 0:f.sunrise),p+new Date().getTimezoneOffset()*60),this.sunset=It(re(f==null?void 0:f.sunset),p+new Date().getTimezoneOffset()*60),this.currTime=It(new Date,p+new Date().getTimezoneOffset()*60));const{list:A}=s,W=A.filter((D,O)=>(O+1)%8===0);for(const D of W){const O=It(re(D.dt),new Date().getTimezoneOffset()*60),St=Math.round((I=D.main)==null?void 0:I.temp),Tt=Math.round((q=D.main)==null?void 0:q.feels_like),z=(B=D.wind)==null?void 0:B.speed,Kt=(Rt=D.wind)==null?void 0:Rt.deg,Zt=D.weather[0].icon,te={dayOfWeek:O,forecastTemp:St,forecastFeel:Tt,forecastWindSpeed:z,forecastWindDeg:Kt,forecastIcon:Zt};this.forecastData.push(te)}this.checkMode(),this.windFeel(),this.isLoading=!1},this.windFeel=()=>{for(const t of Ji)if(this.windSpeed<t.maxSpeed){this.windFeelText=t.description;return}}}get clouds(){return v(this,K)}set clouds(t){d(this,K,t)}get mainTemp(){return v(this,Z)}set mainTemp(t){d(this,Z,t)}get mainFeel(){return v(this,tt)}set mainFeel(t){d(this,tt,t)}get mainHumidity(){return v(this,et)}set mainHumidity(t){d(this,et,t)}get visibility(){return v(this,rt)}set visibility(t){d(this,rt,t)}get windSpeed(){return v(this,it)}set windSpeed(t){d(this,it,t)}get windDeg(){return v(this,nt)}set windDeg(t){d(this,nt,t)}get weatherDesc(){return v(this,at)}set weatherDesc(t){d(this,at,t)}get weatherIcon(){return v(this,st)}set weatherIcon(t){d(this,st,t)}get city(){return v(this,ot)}set city(t){d(this,ot,t)}get country(){return v(this,lt)}set country(t){d(this,lt,t)}get windFeelText(){return v(this,ct)}set windFeelText(t){d(this,ct,t)}get sunrise(){return v(this,dt)}set sunrise(t){d(this,dt,t)}get sunset(){return v(this,ut)}set sunset(t){d(this,ut,t)}get currTime(){return v(this,ht)}set currTime(t){d(this,ht,t)}get isMetric(){return v(this,mt)}set isMetric(t){d(this,mt,t)}get isLoading(){return v(this,ft)}set isLoading(t){d(this,ft,t)}get isFound(){return v(this,pt)}set isFound(t){d(this,pt,t)}get forecastData(){return v(this,gt)}set forecastData(t){d(this,gt,t)}get hourFormat(){return v(this,vt)}set hourFormat(t){d(this,vt,t)}get temperatureFormat(){return v(this,yt)}set temperatureFormat(t){d(this,yt,t)}get speedFormat(){return v(this,wt)}set speedFormat(t){d(this,wt,t)}get distanceFormat(){return v(this,bt)}set distanceFormat(t){d(this,bt,t)}get isDaytime(){return v(this,$t)}set isDaytime(t){d(this,$t,t)}render(){return P`
      ${Ht}
      <lit-controls
        .apiCall=${this.apiCall}
        .isMetric=${this.isMetric}
        .switchSystem=${t=>{this.switchSystem(t)}}>
        <img
          src="${this.isDaytime?"favicon.png":Qi}"
          alt="A ${this.isDaytime?"sun":"moon"} behind a cloud by kosonicon"
          width="128"
          height="128"
          style="${this.isDaytime?"":"scale: 1.15"}"
          class="w3-center w3-xlarge" />
      </lit-controls>

      ${this.isLoading&&this.isFound?P`<svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <style>
              .circle {
                transform-origin: center;
                animation: loading 0.75s infinite linear;
              }
              @keyframes loading {
                100% {
                  transform: rotate(360deg);
                }
              }
            </style>
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
              class="circle"
              fill="white" />
          </svg>`:this.isFound?h:P`<h2 class="w3-center w3-text-white">Location not found</h2>`}

      <lit-current>
        <h1 class="w3-xxlarge w3-center">
          ${this.city}${this.country?", "+this.country:h}
        </h1>
        <h2 class="w3-xlarge w3-center w3-text-light-gray">
          ${this.city?Ct(this.currTime,"eee., d MMM. y | 'at' ")+Ct(this.currTime,this.hourFormat):h}
        </h2>

        <span id="weather-container">
          <div id="current-weather">
            <span>
              <i class="fa-solid ${Ae[this.weatherIcon]}"></i>
              <p>
                ${this.mainTemp!==void 0&&!isNaN(this.mainTemp)?Math.round(this.isMetric?this.mainTemp-273:(this.mainTemp-273)*1.8+32)+this.temperatureFormat:h}
              </p>
            </span>
            <div>
              <h3>
                ${this.weatherDesc?this.weatherDesc.charAt(0).toUpperCase()+this.weatherDesc.slice(1):h}
              </h3>
              <h4 class="w3-text-light-gray">
                ${this.mainFeel!==void 0&&!isNaN(this.mainFeel)?"Feels like "+Math.round(this.isMetric?this.mainFeel-273:(this.mainFeel-273)*1.8+32)+this.temperatureFormat:h}
              </h4>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed!==void 0?this.windFeelText:h}
              </h4>
            </div>
          </div>

          <div id="detailed-weather">
            <span>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed!==void 0?"Wind":h}
              </h4>
              <h3>
                ${this.windDeg!==void 0?P`<i
                      style="rotate: ${this.windDeg.toString()+"deg"}"
                      class="fa-solid fa-arrow-down"></i>`:h}
                ${this.windSpeed!==void 0?Math.round(this.isMetric?this.windSpeed:this.windSpeed*2.24)+this.speedFormat:h}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.mainHumidity!==void 0?"Humidity":h}
              </h4>
              <h3>
                ${this.mainHumidity!==void 0?this.mainHumidity+"%":h}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.visibility!==void 0&&!isNaN(this.visibility)?"Visibility":h}
              </h4>
              <h3>
                ${this.visibility!==void 0&&!isNaN(this.visibility)?Math.round(this.isMetric?this.visibility:this.visibility*.62)+this.distanceFormat:h}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.clouds!==void 0?"Cloudiness":h}
              </h4>
              <h3>
                ${this.clouds!==void 0?this.clouds+"%":h}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunrise?"Sunrise":h}
              </h4>
              <h3>
                ${this.sunrise?Ct(this.sunrise,this.hourFormat):h}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunset?"Sunset":h}
              </h4>
              <h3>
                ${this.sunset?Ct(this.sunset,this.hourFormat):h}
              </h3>
            </span>
          </div>
        </span>
      </lit-current>

      <lit-forecast>
        ${this.forecastData.length>0?this.forecastData.map(t=>P`<div class="forecast-list-elem">
                  <h4 class="forecast-day">${Ct(t.dayOfWeek,"EEEE")}</h4>

                  <span class="forecast-temp" title="Temperature">
                    <i class="fa-solid ${Ae[t.forecastIcon]}"></i>
                    <h4>
                      ${t.forecastTemp!==void 0&&!isNaN(t.forecastTemp)?Math.round(this.isMetric?t.forecastTemp-273:(t.forecastTemp-273)*1.8+32)+this.temperatureFormat:h}
                    </h4>
                  </span>

                  <h4
                    title="Feels like"
                    class="forecast-feel w3-text-light-gray">
                    ${t.forecastFeel!==void 0&&!isNaN(t.forecastFeel)?Math.round(this.isMetric?t.forecastFeel-273:(t.forecastFeel-273)*1.8+32)+this.temperatureFormat:h}
                  </h4>

                  <h4 class="forecast-wind" title="Wind speed">
                    ${t.forecastWindDeg!==void 0?P`<i
                          style="rotate: ${t.forecastWindDeg.toString()+"deg"}"
                          class="fa-solid fa-arrow-down"></i>`:h}
                    ${t.forecastWindSpeed!==void 0?Math.round(this.isMetric?t.forecastWindSpeed:t.forecastWindSpeed*2.24)+this.speedFormat:h}
                  </h4>
                </div>`):h}
      </lit-forecast>

      <lit-footer></lit-footer>
    `}checkMode(){const t=ye(this.currTime,{hours:6}),e=ye(this.currTime,{hours:18}),r=si(this.currTime,t),i=oi(this.currTime,e);this.isDaytime=!!(r&&i);const a="#0ea5e9",s="#7dd3fc",l="#f59e0b",o=`url(${zi})`,c="#0ea5e980",m="#1e293b",u="#475569",f="#eab308",p=`url(${Xi})`,x="#1e293b80",M=document.documentElement.style;M.setProperty("--bg-primary",this.isDaytime?a:m),M.setProperty("--bg-secondary",this.isDaytime?s:u),M.setProperty("--bg-accent",this.isDaytime?l:f),M.setProperty("background-image",this.isDaytime?o:p),document.body.style.setProperty("background-color",this.isDaytime?c:x)}firstUpdated(){if(localStorage.isMetric){const t=localStorage.getItem("isMetric");this.isMetric=t?JSON.parse(t):!0}this.switchFormat(this.isMetric),navigator.geolocation&&this.getCurrentPosition().then(t=>{const e=t.coords.latitude,r=t.coords.longitude;return this.apiCall("",e,r)}).catch(t=>(console.log(`${t.message} -> Setting a default location.`),this.apiCall("Baku, Azerbaijan")))}getCurrentPosition(){return new Promise((t,e)=>{navigator.geolocation.getCurrentPosition(t,e)})}switchSystem(t){localStorage.setItem("isMetric",JSON.stringify(t)),this.switchFormat(t)}switchFormat(t){t?(this.isMetric=t,this.hourFormat="H:MM",this.temperatureFormat=" °C",this.speedFormat=" m/s",this.distanceFormat=" km",this.requestUpdate("isMetric",!0)):(this.isMetric=t,this.hourFormat="h:mm a",this.temperatureFormat=" °F",this.speedFormat=" mph",this.distanceFormat=" mi",this.requestUpdate("isMetric",!0))}},K=new WeakMap,Z=new WeakMap,tt=new WeakMap,et=new WeakMap,rt=new WeakMap,it=new WeakMap,nt=new WeakMap,at=new WeakMap,st=new WeakMap,ot=new WeakMap,lt=new WeakMap,ct=new WeakMap,dt=new WeakMap,ut=new WeakMap,ht=new WeakMap,mt=new WeakMap,ft=new WeakMap,pt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=new WeakMap,wt=new WeakMap,bt=new WeakMap,$t=new WeakMap,Fe);w.styles=Nt`
    ::selection {
      background-color: var(--bg-primary);
    }

    :host {
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-family: 'Signika', sans-serif;
      font-weight: 300;
    }

    img {
      filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    }

    h1,
    h2,
    h3,
    h4,
    p,
    i {
      font-family: 'Signika', sans-serif;
      word-break: break-word;
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    }

    svg {
      padding-top: 1.25rem;
      z-index: -1;
      scale: 4;
    }

    #weather-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    #current-weather {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: -1rem;

      & span {
        display: inherit;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        font-size: 4rem;
        line-height: 1rem;
        margin-bottom: -1.5rem;
      }

      & div {
        display: inherit;
        flex-direction: column;
        justify-content: center;
        width: fit-content;

        & h4 {
          margin-top: -0.5rem;
        }
      }
    }

    #detailed-weather {
      margin-top: 0.5rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);
      width: fit-content;
      gap: 1rem 4rem;

      & span {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h3 {
          margin-top: -2px;
          display: inherit;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }

    .forecast-list-elem {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      gap: 0 4rem;
      place-items: center;
      grid-template-areas:
        'item1 item4'
        'item2 item3';

      .forecast-day {
        grid-area: item1;
        font-weight: 600;
      }

      .forecast-temp {
        grid-area: item2;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & i {
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
            drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        }
      }

      .forecast-feel {
        grid-area: item3;
      }

      .forecast-wind {
        grid-area: item4;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & i {
          filter: drop-shadow(0 0 0 rgb(0 0 0)) !important;
        }
      }
    }

    .forecast-list-elem:not(:last-child) {
      border-bottom: 2px solid white;
    }

    @media (min-width: 48rem) {
      #weather-container {
        flex-direction: row;
        gap: 2rem;
      }

      .forecast-list-elem {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 'item1 item2 item3 item4';
        place-items: normal;
        gap: 0 4rem;

        & > * {
          flex-basis: auto;
        }
      }
    }
  `;$([b({type:Number})],w.prototype,"clouds",1);$([b({type:Number})],w.prototype,"mainTemp",1);$([b({type:Number})],w.prototype,"mainFeel",1);$([b({type:Number})],w.prototype,"mainHumidity",1);$([b({type:Number})],w.prototype,"visibility",1);$([b({type:Number})],w.prototype,"windSpeed",1);$([b({type:Number})],w.prototype,"windDeg",1);$([b({type:String})],w.prototype,"weatherDesc",1);$([b({type:String})],w.prototype,"weatherIcon",1);$([b({type:String})],w.prototype,"city",1);$([b({type:String})],w.prototype,"country",1);$([b({type:String})],w.prototype,"windFeelText",1);$([b({attribute:!1})],w.prototype,"sunrise",1);$([b({attribute:!1})],w.prototype,"sunset",1);$([b({attribute:!1})],w.prototype,"currTime",1);$([b({type:Boolean})],w.prototype,"isMetric",1);$([b({type:Boolean})],w.prototype,"isLoading",1);$([b({type:Boolean})],w.prototype,"isFound",1);$([b({type:Array})],w.prototype,"forecastData",1);$([b({type:String})],w.prototype,"hourFormat",1);$([b({type:String})],w.prototype,"temperatureFormat",1);$([b({type:String})],w.prototype,"speedFormat",1);$([b({type:String})],w.prototype,"distanceFormat",1);$([b({type:Boolean})],w.prototype,"isDaytime",1);w=$([Lt("lit-main")],w);console.log("Patrolling the Mojave almost makes you wish for a nuclear winter.");
