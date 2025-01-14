(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Wr=6048e5,on=864e5,fr=Symbol.for("constructDateFrom");function Y(r,e){return typeof r=="function"?r(e):r&&typeof r=="object"&&fr in r?r[fr](e):r instanceof Date?new r.constructor(e):new Date(e)}function D(r,e){return Y(e||r,r)}function cn(r,e,t){return Y(r,+D(r)+e)}let dn={};function Nt(){return dn}function Pe(r,e){var o,c,d,l;const t=Nt(),n=(e==null?void 0:e.weekStartsOn)??((c=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:c.weekStartsOn)??t.weekStartsOn??((l=(d=t.locale)==null?void 0:d.options)==null?void 0:l.weekStartsOn)??0,s=D(r,e==null?void 0:e.in),a=s.getDay(),i=(a<n?7:0)+a-n;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}function _t(r,e){return Pe(r,{...e,weekStartsOn:1})}function jr(r,e){const t=D(r,e==null?void 0:e.in),n=t.getFullYear(),s=Y(t,0);s.setFullYear(n+1,0,4),s.setHours(0,0,0,0);const a=_t(s),i=Y(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=_t(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function mr(r){const e=D(r),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+r-+t}function un(r,...e){const t=Y.bind(null,e.find(n=>typeof n=="object"));return e.map(t)}function pr(r,e){const t=D(r,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function ln(r,e,t){const[n,s]=un(t==null?void 0:t.in,r,e),a=pr(n),i=pr(s),o=+a-mr(a),c=+i-mr(i);return Math.round((o-c)/on)}function hn(r,e){const t=jr(r,e),n=Y(r,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),_t(n)}function Ve(r,e,t){return cn(r,e*1e3)}function fn(r){return r instanceof Date||typeof r=="object"&&Object.prototype.toString.call(r)==="[object Date]"}function mn(r){return!(!fn(r)&&typeof r!="number"||isNaN(+D(r)))}function pn(r,e){const t=D(r,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const gn={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},yn=(r,e,t)=>{let n;const s=gn[r];return typeof s=="string"?n=s:e===1?n=s.one:n=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};function Lt(r){return(e={})=>{const t=e.width?String(e.width):r.defaultWidth;return r.formats[t]||r.formats[r.defaultWidth]}}const _n={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},vn={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wn={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},bn={date:Lt({formats:_n,defaultWidth:"full"}),time:Lt({formats:vn,defaultWidth:"full"}),dateTime:Lt({formats:wn,defaultWidth:"full"})},xn={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},kn=(r,e,t,n)=>xn[r];function xe(r){return(e,t)=>{const n=t!=null&&t.context?String(t.context):"standalone";let s;if(n==="formatting"&&r.formattingValues){const i=r.defaultFormattingWidth||r.defaultWidth,o=t!=null&&t.width?String(t.width):i;s=r.formattingValues[o]||r.formattingValues[i]}else{const i=r.defaultWidth,o=t!=null&&t.width?String(t.width):r.defaultWidth;s=r.values[o]||r.values[i]}const a=r.argumentCallback?r.argumentCallback(e):e;return s[a]}}const $n={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Sn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},An={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},On={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Mn={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Cn=(r,e)=>{const t=Number(r),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},En={ordinalNumber:Cn,era:xe({values:$n,defaultWidth:"wide"}),quarter:xe({values:Sn,defaultWidth:"wide",argumentCallback:r=>r-1}),month:xe({values:An,defaultWidth:"wide"}),day:xe({values:On,defaultWidth:"wide"}),dayPeriod:xe({values:Tn,defaultWidth:"wide",formattingValues:Mn,defaultFormattingWidth:"wide"})};function ke(r){return(e,t={})=>{const n=t.width,s=n&&r.matchPatterns[n]||r.matchPatterns[r.defaultMatchWidth],a=e.match(s);if(!a)return null;const i=a[0],o=n&&r.parsePatterns[n]||r.parsePatterns[r.defaultParseWidth],c=Array.isArray(o)?Dn(o,p=>p.test(i)):Pn(o,p=>p.test(i));let d;d=r.valueCallback?r.valueCallback(c):c,d=t.valueCallback?t.valueCallback(d):d;const l=e.slice(i.length);return{value:d,rest:l}}}function Pn(r,e){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t)&&e(r[t]))return t}function Dn(r,e){for(let t=0;t<r.length;t++)if(e(r[t]))return t}function Nn(r){return(e,t={})=>{const n=e.match(r.matchPattern);if(!n)return null;const s=n[0],a=e.match(r.parsePattern);if(!a)return null;let i=r.valueCallback?r.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;const o=e.slice(s.length);return{value:i,rest:o}}}const Rn=/^(\d+)(th|st|nd|rd)?/i,Wn=/\d+/i,jn={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Fn={any:[/^b/i,/^(a|c)/i]},In={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ln={any:[/1/i,/2/i,/3/i,/4/i]},Zn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Un={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vn={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},zn={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Hn={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Bn={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Yn={ordinalNumber:Nn({matchPattern:Rn,parsePattern:Wn,valueCallback:r=>parseInt(r,10)}),era:ke({matchPatterns:jn,defaultMatchWidth:"wide",parsePatterns:Fn,defaultParseWidth:"any"}),quarter:ke({matchPatterns:In,defaultMatchWidth:"wide",parsePatterns:Ln,defaultParseWidth:"any",valueCallback:r=>r+1}),month:ke({matchPatterns:Zn,defaultMatchWidth:"wide",parsePatterns:Un,defaultParseWidth:"any"}),day:ke({matchPatterns:Vn,defaultMatchWidth:"wide",parsePatterns:zn,defaultParseWidth:"any"}),dayPeriod:ke({matchPatterns:Hn,defaultMatchWidth:"any",parsePatterns:Bn,defaultParseWidth:"any"})},qn={code:"en-US",formatDistance:yn,formatLong:bn,formatRelative:kn,localize:En,match:Yn,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Gn(r,e){const t=D(r,e==null?void 0:e.in);return ln(t,pn(t))+1}function Qn(r,e){const t=D(r,e==null?void 0:e.in),n=+_t(t)-+hn(t);return Math.round(n/Wr)+1}function Fr(r,e){var l,p,k,E;const t=D(r,e==null?void 0:e.in),n=t.getFullYear(),s=Nt(),a=(e==null?void 0:e.firstWeekContainsDate)??((p=(l=e==null?void 0:e.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??s.firstWeekContainsDate??((E=(k=s.locale)==null?void 0:k.options)==null?void 0:E.firstWeekContainsDate)??1,i=Y((e==null?void 0:e.in)||r,0);i.setFullYear(n+1,0,a),i.setHours(0,0,0,0);const o=Pe(i,e),c=Y((e==null?void 0:e.in)||r,0);c.setFullYear(n,0,a),c.setHours(0,0,0,0);const d=Pe(c,e);return+t>=+o?n+1:+t>=+d?n:n-1}function Xn(r,e){var o,c,d,l;const t=Nt(),n=(e==null?void 0:e.firstWeekContainsDate)??((c=(o=e==null?void 0:e.locale)==null?void 0:o.options)==null?void 0:c.firstWeekContainsDate)??t.firstWeekContainsDate??((l=(d=t.locale)==null?void 0:d.options)==null?void 0:l.firstWeekContainsDate)??1,s=Fr(r,e),a=Y((e==null?void 0:e.in)||r,0);return a.setFullYear(s,0,n),a.setHours(0,0,0,0),Pe(a,e)}function Jn(r,e){const t=D(r,e==null?void 0:e.in),n=+Pe(t,e)-+Xn(t,e);return Math.round(n/Wr)+1}function x(r,e){const t=r<0?"-":"",n=Math.abs(r).toString().padStart(e,"0");return t+n}const Q={y(r,e){const t=r.getFullYear(),n=t>0?t:1-t;return x(e==="yy"?n%100:n,e.length)},M(r,e){const t=r.getMonth();return e==="M"?String(t+1):x(t+1,2)},d(r,e){return x(r.getDate(),e.length)},a(r,e){const t=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(r,e){return x(r.getHours()%12||12,e.length)},H(r,e){return x(r.getHours(),e.length)},m(r,e){return x(r.getMinutes(),e.length)},s(r,e){return x(r.getSeconds(),e.length)},S(r,e){const t=e.length,n=r.getMilliseconds(),s=Math.trunc(n*Math.pow(10,t-3));return x(s,e.length)}},de={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},gr={G:function(r,e,t){const n=r.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(r,e,t){if(e==="yo"){const n=r.getFullYear(),s=n>0?n:1-n;return t.ordinalNumber(s,{unit:"year"})}return Q.y(r,e)},Y:function(r,e,t,n){const s=Fr(r,n),a=s>0?s:1-s;if(e==="YY"){const i=a%100;return x(i,2)}return e==="Yo"?t.ordinalNumber(a,{unit:"year"}):x(a,e.length)},R:function(r,e){const t=jr(r);return x(t,e.length)},u:function(r,e){const t=r.getFullYear();return x(t,e.length)},Q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return x(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(r,e,t){const n=Math.ceil((r.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return x(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(r,e,t){const n=r.getMonth();switch(e){case"M":case"MM":return Q.M(r,e);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(r,e,t){const n=r.getMonth();switch(e){case"L":return String(n+1);case"LL":return x(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(r,e,t,n){const s=Jn(r,n);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):x(s,e.length)},I:function(r,e,t){const n=Qn(r);return e==="Io"?t.ordinalNumber(n,{unit:"week"}):x(n,e.length)},d:function(r,e,t){return e==="do"?t.ordinalNumber(r.getDate(),{unit:"date"}):Q.d(r,e)},D:function(r,e,t){const n=Gn(r);return e==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):x(n,e.length)},E:function(r,e,t){const n=r.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(r,e,t,n){const s=r.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return x(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(r,e,t,n){const s=r.getDay(),a=(s-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return x(a,e.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(r,e,t){const n=r.getDay(),s=n===0?7:n;switch(e){case"i":return String(s);case"ii":return x(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(r,e,t){const s=r.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(r,e,t){const n=r.getHours();let s;switch(n===12?s=de.noon:n===0?s=de.midnight:s=n/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(r,e,t){const n=r.getHours();let s;switch(n>=17?s=de.evening:n>=12?s=de.afternoon:n>=4?s=de.morning:s=de.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(r,e,t){if(e==="ho"){let n=r.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return Q.h(r,e)},H:function(r,e,t){return e==="Ho"?t.ordinalNumber(r.getHours(),{unit:"hour"}):Q.H(r,e)},K:function(r,e,t){const n=r.getHours()%12;return e==="Ko"?t.ordinalNumber(n,{unit:"hour"}):x(n,e.length)},k:function(r,e,t){let n=r.getHours();return n===0&&(n=24),e==="ko"?t.ordinalNumber(n,{unit:"hour"}):x(n,e.length)},m:function(r,e,t){return e==="mo"?t.ordinalNumber(r.getMinutes(),{unit:"minute"}):Q.m(r,e)},s:function(r,e,t){return e==="so"?t.ordinalNumber(r.getSeconds(),{unit:"second"}):Q.s(r,e)},S:function(r,e){return Q.S(r,e)},X:function(r,e,t){const n=r.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return _r(n);case"XXXX":case"XX":return se(n);case"XXXXX":case"XXX":default:return se(n,":")}},x:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"x":return _r(n);case"xxxx":case"xx":return se(n);case"xxxxx":case"xxx":default:return se(n,":")}},O:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+yr(n,":");case"OOOO":default:return"GMT"+se(n,":")}},z:function(r,e,t){const n=r.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+yr(n,":");case"zzzz":default:return"GMT"+se(n,":")}},t:function(r,e,t){const n=Math.trunc(+r/1e3);return x(n,e.length)},T:function(r,e,t){return x(+r,e.length)}};function yr(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),s=Math.trunc(n/60),a=n%60;return a===0?t+String(s):t+String(s)+e+x(a,2)}function _r(r,e){return r%60===0?(r>0?"-":"+")+x(Math.abs(r)/60,2):se(r,e)}function se(r,e=""){const t=r>0?"-":"+",n=Math.abs(r),s=x(Math.trunc(n/60),2),a=x(n%60,2);return t+s+e+a}const vr=(r,e)=>{switch(r){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ir=(r,e)=>{switch(r){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},Kn=(r,e)=>{const t=r.match(/(P+)(p+)?/)||[],n=t[1],s=t[2];if(!s)return vr(r,e);let a;switch(n){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;case"PPPP":default:a=e.dateTime({width:"full"});break}return a.replace("{{date}}",vr(n,e)).replace("{{time}}",Ir(s,e))},es={p:Ir,P:Kn},ts=/^D+$/,rs=/^Y+$/,ns=["D","DD","YY","YYYY"];function ss(r){return ts.test(r)}function as(r){return rs.test(r)}function is(r,e,t){const n=os(r,e,t);if(console.warn(n),ns.includes(r))throw new RangeError(n)}function os(r,e,t){const n=r[0]==="Y"?"years":"days of the month";return`Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${e}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const cs=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ds=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,us=/^'([^]*?)'?$/,ls=/''/g,hs=/[a-zA-Z]/;function $e(r,e,t){var l,p,k,E;const n=Nt(),s=n.locale??qn,a=n.firstWeekContainsDate??((p=(l=n.locale)==null?void 0:l.options)==null?void 0:p.firstWeekContainsDate)??1,i=n.weekStartsOn??((E=(k=n.locale)==null?void 0:k.options)==null?void 0:E.weekStartsOn)??0,o=D(r,t==null?void 0:t.in);if(!mn(o))throw new RangeError("Invalid time value");let c=e.match(ds).map(P=>{const N=P[0];if(N==="p"||N==="P"){const be=es[N];return be(P,s.formatLong)}return P}).join("").match(cs).map(P=>{if(P==="''")return{isToken:!1,value:"'"};const N=P[0];if(N==="'")return{isToken:!1,value:fs(P)};if(gr[N])return{isToken:!0,value:P};if(N.match(hs))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:P}});s.localize.preprocessor&&(c=s.localize.preprocessor(o,c));const d={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return c.map(P=>{if(!P.isToken)return P.value;const N=P.value;(as(N)||ss(N))&&is(N,e,String(r));const be=gr[N[0]];return be(o,N,s.localize,d)}).join("")}function fs(r){const e=r.match(us);return e?e[1].replace(ls,"'"):r}function Zt(r,e){return D(r*1e3,e==null?void 0:e.in)}function ms(r,e){return+D(r)>+D(e)}function ps(r,e){return+D(r)<+D(e)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=globalThis,cr=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dr=Symbol(),wr=new WeakMap;let Lr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==dr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(cr&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=wr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&wr.set(t,e))}return e}toString(){return this.cssText}};const gs=r=>new Lr(typeof r=="string"?r:r+"",void 0,dr),Ie=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,s,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Lr(t,r,dr)},ys=(r,e)=>{if(cr)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=ze.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},br=cr?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return gs(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_s,defineProperty:vs,getOwnPropertyDescriptor:ws,getOwnPropertyNames:bs,getOwnPropertySymbols:xs,getPrototypeOf:ks}=Object,K=globalThis,xr=K.trustedTypes,$s=xr?xr.emptyScript:"",Ut=K.reactiveElementPolyfillSupport,Me=(r,e)=>r,vt={toAttribute(r,e){switch(e){case Boolean:r=r?$s:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ur=(r,e)=>!_s(r,e),kr={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:ur};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),K.litPropertyMetadata??(K.litPropertyMetadata=new WeakMap);class ue extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=kr){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&vs(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:a}=ws(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get(){return s==null?void 0:s.call(this)},set(i){const o=s==null?void 0:s.call(this);a.call(this,i),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kr}static _$Ei(){if(this.hasOwnProperty(Me("elementProperties")))return;const e=ks(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me("properties"))){const t=this.properties,n=[...bs(t),...xs(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(br(s))}else e!==void 0&&t.push(br(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ys(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var a;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:vt).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){var a;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=n.getPropertyOptions(s),o=typeof i.converter=="function"?{fromAttribute:i.converter}:((a=i.converter)==null?void 0:a.fromAttribute)!==void 0?i.converter:vt;this._$Em=s,this[s]=o.fromAttribute(t,i.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??ur)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[a,i]of s)i.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.P(a,this[a],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var a;return(a=s.hostUpdate)==null?void 0:a.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[Me("elementProperties")]=new Map,ue[Me("finalized")]=new Map,Ut==null||Ut({ReactiveElement:ue}),(K.reactiveElementVersions??(K.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=globalThis,wt=Ce.trustedTypes,$r=wt?wt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Zr="$lit$",J=`lit$${Math.random().toFixed(9).slice(2)}$`,Ur="?"+J,Ss=`<${Ur}>`,ie=document,De=()=>ie.createComment(""),Ne=r=>r===null||typeof r!="object"&&typeof r!="function",lr=Array.isArray,As=r=>lr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Vt=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sr=/-->/g,Ar=/>/g,ne=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Or=/'/g,Tr=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Os=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),I=Os(1),me=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),Mr=new WeakMap,ae=ie.createTreeWalker(ie,129);function zr(r,e){if(!lr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $r!==void 0?$r.createHTML(e):e}const Ts=(r,e)=>{const t=r.length-1,n=[];let s,a=e===2?"<svg>":e===3?"<math>":"",i=Se;for(let o=0;o<t;o++){const c=r[o];let d,l,p=-1,k=0;for(;k<c.length&&(i.lastIndex=k,l=i.exec(c),l!==null);)k=i.lastIndex,i===Se?l[1]==="!--"?i=Sr:l[1]!==void 0?i=Ar:l[2]!==void 0?(Vr.test(l[2])&&(s=RegExp("</"+l[2],"g")),i=ne):l[3]!==void 0&&(i=ne):i===ne?l[0]===">"?(i=s??Se,p=-1):l[1]===void 0?p=-2:(p=i.lastIndex-l[2].length,d=l[1],i=l[3]===void 0?ne:l[3]==='"'?Tr:Or):i===Tr||i===Or?i=ne:i===Sr||i===Ar?i=Se:(i=ne,s=void 0);const E=i===ne&&r[o+1].startsWith("/>")?" ":"";a+=i===Se?c+Ss:p>=0?(n.push(d),c.slice(0,p)+Zr+c.slice(p)+J+E):c+J+(p===-2?o:E)}return[zr(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Re{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let a=0,i=0;const o=e.length-1,c=this.parts,[d,l]=Ts(e,t);if(this.el=Re.createElement(d,n),ae.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=ae.nextNode())!==null&&c.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Zr)){const k=l[i++],E=s.getAttribute(p).split(J),P=/([.?@])?(.*)/.exec(k);c.push({type:1,index:a,name:P[2],strings:E,ctor:P[1]==="."?Cs:P[1]==="?"?Es:P[1]==="@"?Ps:Rt}),s.removeAttribute(p)}else p.startsWith(J)&&(c.push({type:6,index:a}),s.removeAttribute(p));if(Vr.test(s.tagName)){const p=s.textContent.split(J),k=p.length-1;if(k>0){s.textContent=wt?wt.emptyScript:"";for(let E=0;E<k;E++)s.append(p[E],De()),ae.nextNode(),c.push({type:2,index:++a});s.append(p[k],De())}}}else if(s.nodeType===8)if(s.data===Ur)c.push({type:2,index:a});else{let p=-1;for(;(p=s.data.indexOf(J,p+1))!==-1;)c.push({type:7,index:a}),p+=J.length-1}a++}}static createElement(e,t){const n=ie.createElement("template");return n.innerHTML=e,n}}function pe(r,e,t=r,n){var i,o;if(e===me)return e;let s=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl;const a=Ne(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==a&&((o=s==null?void 0:s._$AO)==null||o.call(s,!1),a===void 0?s=void 0:(s=new a(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=pe(r,s._$AS(r,e.values),s,n)),e}class Ms{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??ie).importNode(t,!0);ae.currentNode=s;let a=ae.nextNode(),i=0,o=0,c=n[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new Le(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new Ds(a,this,e)),this._$AV.push(d),c=n[++o]}i!==(c==null?void 0:c.index)&&(a=ae.nextNode(),i++)}return ae.currentNode=ie,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Le{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),Ne(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):As(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&Ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){var a;const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(zr(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===s)this._$AH.p(t);else{const i=new Ms(s,this),o=i.u(this.options);i.p(t),this.T(o),this._$AH=i}}_$AC(e){let t=Mr.get(e.strings);return t===void 0&&Mr.set(e.strings,t=new Re(e)),t}k(e){lr(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const a of e)s===t.length?t.push(n=new Le(this.O(De()),this.O(De()),this,this.options)):n=t[s],n._$AI(a),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Rt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,a){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,s){const a=this.strings;let i=!1;if(a===void 0)e=pe(this,e,t,0),i=!Ne(e)||e!==this._$AH&&e!==me,i&&(this._$AH=e);else{const o=e;let c,d;for(e=a[0],c=0;c<a.length-1;c++)d=pe(this,o[n+c],t,c),d===me&&(d=this._$AH[c]),i||(i=!Ne(d)||d!==this._$AH[c]),d===_?e=_:e!==_&&(e+=(d??"")+a[c+1]),this._$AH[c]=d}i&&!s&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Cs extends Rt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}}class Es extends Rt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}}class Ps extends Rt{constructor(e,t,n,s,a){super(e,t,n,s,a),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??_)===me)return;const n=this._$AH,s=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==_&&(n===_||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ds{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const zt=Ce.litHtmlPolyfillSupport;zt==null||zt(Re,Le),(Ce.litHtmlVersions??(Ce.litHtmlVersions=[])).push("3.2.1");const Ns=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=s=new Le(e.insertBefore(De(),a),a,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let H=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ns(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return me}};var Rr;H._$litElement$=!0,H.finalized=!0,(Rr=globalThis.litElementHydrateSupport)==null||Rr.call(globalThis,{LitElement:H});const Ht=globalThis.litElementPolyfillSupport;Ht==null||Ht({LitElement:H});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ze=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs={attribute:!0,type:String,converter:vt,reflect:!1,hasChanged:ur},Ws=(r=Rs,e,t)=>{const{kind:n,metadata:s}=t;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),a.set(t.name,r),n==="accessor"){const{name:i}=t;return{set(o){const c=e.get.call(this);e.set.call(this,o),this.requestUpdate(i,c,r)},init(o){return o!==void 0&&this.P(i,void 0,r),o}}}if(n==="setter"){const{name:i}=t;return function(o){const c=this[i];e.call(this,o),this.requestUpdate(i,c,r)}}throw Error("Unsupported decorator location: "+n)};function $(r){return(e,t)=>typeof t=="object"?Ws(r,e,t):((n,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,i?{...n,wrapped:!0}:n),i?Object.getOwnPropertyDescriptor(s,a):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fs(r,e){return(t,n,s)=>{const a=i=>{var o;return((o=i.renderRoot)==null?void 0:o.querySelector(r))??null};return js(t,n,{get(){return a(this)}})}}const Ue=I`
  <link
    rel="stylesheet"
    type="text/css"
    href="https://w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
`;var Is=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,Hr=r=>{throw TypeError(r)},we=(r,e,t,n)=>{for(var s=n>1?void 0:n?Ls(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&Is(e,t,s),s},Br=(r,e,t)=>e.has(r)||Hr("Cannot "+t),Bt=(r,e,t)=>(Br(r,e,"read from private field"),t?t.call(r):e.get(r)),Yt=(r,e,t)=>e.has(r)?Hr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),qt=(r,e,t,n)=>(Br(r,e,"write to private field"),e.set(r,t),t),He,Be,Ye;let ee=class extends H{constructor(){super(...arguments),this._urlParams=new URLSearchParams(window.location.search),Yt(this,He,this._urlParams.get("search")??""),Yt(this,Be,this.locationData),Yt(this,Ye,localStorage.isMetric!=="false")}get locationData(){return Bt(this,He)}set locationData(r){qt(this,He,r)}get prevLocationData(){return Bt(this,Be)}set prevLocationData(r){qt(this,Be,r)}get isMetricActive(){return Bt(this,Ye)}set isMetricActive(r){qt(this,Ye,r)}render(){return I`
      ${Ue}
      <header class="w3-text-white w3-padding-16">
        <slot></slot>
        <form method="get">
          <input
            title=""
            type="text"
            name="search"
            minlength="1"
            @input=${r=>(this.locationData=r.target.value,this.locationData?this._urlParams.set("search",this.locationData):this._urlParams.delete("search"),window.history.replaceState({},"",`${window.location.pathname}?${this._urlParams}`),this.locationData)}
            value=${this.locationData}
            placeholder="Search"
            class="w3-text-white" />
          ${this.locationData?I`<button
                id="clear"
                type="button"
                title="Clear"
                tabindex="-1"
                @click=${()=>{this.locationData="",this._input.value="",this._urlParams.delete("search"),window.history.replaceState({},"",`${window.location.pathname}?${this._urlParams}`)}}
                class="w3-text-white">
                <i class="fa-solid fa-x"></i>
              </button>`:_}

          <button
            id="submit"
            type="submit"
            title="Search"
            @click=${r=>{if(r.preventDefault(),this.locationData&&this.locationData!==this.prevLocationData)return this.prevLocationData=this.locationData,this.apiCall(this.locationData)}}
            class="w3-text-white">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        <div>
          <button
            type="button"
            title="Metric"
            class="w3-text-white ${this.isMetricActive?"active-btn":""}"
            @click=${()=>{this.isMetric=!0,this.isMetricActive=this.isMetric,this.switchSystem(this.isMetric)}}>
            °C, m/s
          </button>
          <button
            type="button"
            title="Imperial"
            class="w3-text-white ${this.isMetricActive?"":"active-btn"}"
            @click=${()=>{this.isMetric=!1,this.isMetricActive=this.isMetric,this.switchSystem(this.isMetric)}}>
            °F, mph
          </button>
        </div>
      </header>
    `}};He=new WeakMap;Be=new WeakMap;Ye=new WeakMap;ee.styles=Ie`
    ::selection {
      background-color: var(--bg-primary);
    }

    header {
      gap: 1rem;
      display: flex;
      font-weight: 400;
      align-items: center;
      margin-top: 0.25rem;
      flex-direction: column;
      justify-content: flex-start;

      & form {
        gap: 0.25rem;
        display: flex;
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
          outline-offset: -1px;
          border-radius: 2rem 0 0 2rem;
          padding: 0.5rem 2rem 0.5rem 1rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          transition: outline-color var(--transition);
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
          border: 0;
          right: 6px;
          outline: none;
          cursor: pointer;
          padding: 0.25rem;
          user-select: none;
          visibility: hidden;
          position: relative;
          border-radius: 2rem;
          margin-left: -1.5rem;
          background-color: transparent;
          -webkit-tap-highlight-color: transparent;
        }

        & #submit {
          border: 0;
          cursor: pointer;
          margin-left: -2px;
          user-select: none;
          outline-offset: -1px;
          padding: 0.5rem 0.75rem;
          border-radius: 0 2rem 2rem 0;
          background-color: var(--bg-accent);
          outline: 2px solid var(--bg-accent);
          -webkit-tap-highlight-color: transparent;
          transition: outline-color var(--transition);
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
        gap: 0.75rem;
        display: flex;

        & button {
          border: 0;
          user-select: none;
          border-radius: 2rem;
          outline-offset: -1px;
          padding: 0.5rem 0.75rem;
          background-color: var(--bg-secondary);
          outline: 2px solid var(--bg-secondary);
          -webkit-tap-highlight-color: transparent;
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
  `;we([$({type:String})],ee.prototype,"_urlParams",2);we([$({type:String})],ee.prototype,"locationData",1);we([$({type:String})],ee.prototype,"prevLocationData",1);we([$({type:Boolean})],ee.prototype,"isMetricActive",1);we([Fs("input")],ee.prototype,"_input",2);ee=we([Ze("lit-controls")],ee);var Zs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Vs=(r,e,t,n)=>{for(var s=n>1?void 0:n?Us(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&Zs(e,t,s),s};let Qt=class extends H{render(){return I`
      ${Ue}
      <main class="w3-text-white w3-container w3-padding-16">
        <slot></slot>
      </main>
    `}};Qt.styles=Ie`
    :host {
      width: 100%;
    }

    main {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }
  `;Qt=Vs([Ze("lit-current")],Qt);var zs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Bs=(r,e,t,n)=>{for(var s=n>1?void 0:n?Hs(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&zs(e,t,s),s};let Xt=class extends H{render(){return I`
      ${Ue}
      <section class="w3-text-white w3-container w3-padding-24">
        <div>
          <slot></slot>
        </div>
      </section>
    `}};Xt.styles=Ie`
    :host {
      width: 100%;
    }

    section {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    section > div {
      gap: 0.5rem;
      display: grid;
      width: fit-content;
      place-self: center;
      align-items: center;
      justify-content: center;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
    }
  `;Xt=Bs([Ze("lit-forecast")],Xt);var Ys=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,Gs=(r,e,t,n)=>{for(var s=n>1?void 0:n?qs(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&Ys(e,t,s),s};let Jt=class extends H{render(){return I`
      ${Ue}
      <footer class="w3-text-white w3-large w3-padding-32">
        © 2023 - 2025
        <a
          title="Source"
          target="_blank"
          type="text/html"
          rel="noreferrer external author"
          href="https://github.com/eldarlrd/weather-app">
          <i class="fa-brands fa-github"></i>
          eldarlrd
        </a>
      </footer>
    `}};Jt.styles=Ie`
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
  `;Jt=Gs([Ze("lit-footer")],Jt);const Qs="/weather-app/assets/day-CjWbc_js.avif",Xs="/weather-app/assets/moon-B04u7Esu.png",Js="/weather-app/assets/night-C_-Vonvd.avif";var b;(function(r){r.assertEqual=s=>s;function e(s){}r.assertIs=e;function t(s){throw new Error}r.assertNever=t,r.arrayToEnum=s=>{const a={};for(const i of s)a[i]=i;return a},r.getValidEnumValues=s=>{const a=r.objectKeys(s).filter(o=>typeof s[s[o]]!="number"),i={};for(const o of a)i[o]=s[o];return r.objectValues(i)},r.objectValues=s=>r.objectKeys(s).map(function(a){return s[a]}),r.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const a=[];for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&a.push(i);return a},r.find=(s,a)=>{for(const i of s)if(a(i))return i},r.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function n(s,a=" | "){return s.map(i=>typeof i=="string"?`'${i}'`:i).join(a)}r.joinValues=n,r.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})(b||(b={}));var Cr;(function(r){r.mergeShapes=(e,t)=>({...e,...t})})(Cr||(Cr={}));const f=b.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),X=r=>{switch(typeof r){case"undefined":return f.undefined;case"string":return f.string;case"number":return isNaN(r)?f.nan:f.number;case"boolean":return f.boolean;case"function":return f.function;case"bigint":return f.bigint;case"symbol":return f.symbol;case"object":return Array.isArray(r)?f.array:r===null?f.null:r.then&&typeof r.then=="function"&&r.catch&&typeof r.catch=="function"?f.promise:typeof Map<"u"&&r instanceof Map?f.map:typeof Set<"u"&&r instanceof Set?f.set:typeof Date<"u"&&r instanceof Date?f.date:f.object;default:return f.unknown}},u=b.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class W extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=n=>{this.issues=[...this.issues,n]},this.addIssues=(n=[])=>{this.issues=[...this.issues,...n]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(a){return a.message},n={_errors:[]},s=a=>{for(const i of a.issues)if(i.code==="invalid_union")i.unionErrors.map(s);else if(i.code==="invalid_return_type")s(i.returnTypeError);else if(i.code==="invalid_arguments")s(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let o=n,c=0;for(;c<i.path.length;){const d=i.path[c];c===i.path.length-1?(o[d]=o[d]||{_errors:[]},o[d]._errors.push(t(i))):o[d]=o[d]||{_errors:[]},o=o[d],c++}}};return s(this),n}static assert(e){if(!(e instanceof W))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,b.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},n=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):n.push(e(s));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}W.create=r=>new W(r);const We=(r,e)=>{let t;switch(r.code){case u.invalid_type:r.received===f.undefined?t="Required":t=`Expected ${r.expected}, received ${r.received}`;break;case u.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(r.expected,b.jsonStringifyReplacer)}`;break;case u.unrecognized_keys:t=`Unrecognized key(s) in object: ${b.joinValues(r.keys,", ")}`;break;case u.invalid_union:t="Invalid input";break;case u.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${b.joinValues(r.options)}`;break;case u.invalid_enum_value:t=`Invalid enum value. Expected ${b.joinValues(r.options)}, received '${r.received}'`;break;case u.invalid_arguments:t="Invalid function arguments";break;case u.invalid_return_type:t="Invalid function return type";break;case u.invalid_date:t="Invalid date";break;case u.invalid_string:typeof r.validation=="object"?"includes"in r.validation?(t=`Invalid input: must include "${r.validation.includes}"`,typeof r.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${r.validation.position}`)):"startsWith"in r.validation?t=`Invalid input: must start with "${r.validation.startsWith}"`:"endsWith"in r.validation?t=`Invalid input: must end with "${r.validation.endsWith}"`:b.assertNever(r.validation):r.validation!=="regex"?t=`Invalid ${r.validation}`:t="Invalid";break;case u.too_small:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at least":"more than"} ${r.minimum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at least":"over"} ${r.minimum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${r.minimum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly equal to ":r.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(r.minimum))}`:t="Invalid input";break;case u.too_big:r.type==="array"?t=`Array must contain ${r.exact?"exactly":r.inclusive?"at most":"less than"} ${r.maximum} element(s)`:r.type==="string"?t=`String must contain ${r.exact?"exactly":r.inclusive?"at most":"under"} ${r.maximum} character(s)`:r.type==="number"?t=`Number must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="bigint"?t=`BigInt must be ${r.exact?"exactly":r.inclusive?"less than or equal to":"less than"} ${r.maximum}`:r.type==="date"?t=`Date must be ${r.exact?"exactly":r.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(r.maximum))}`:t="Invalid input";break;case u.custom:t="Invalid input";break;case u.invalid_intersection_types:t="Intersection results could not be merged";break;case u.not_multiple_of:t=`Number must be a multiple of ${r.multipleOf}`;break;case u.not_finite:t="Number must be finite";break;default:t=e.defaultError,b.assertNever(r)}return{message:t}};let Ks=We;function Kt(){return Ks}const er=r=>{const{data:e,path:t,errorMaps:n,issueData:s}=r,a=[...t,...s.path||[]],i={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let o="";const c=n.filter(d=>!!d).slice().reverse();for(const d of c)o=d(i,{data:e,defaultError:o}).message;return{...s,path:a,message:o}};function h(r,e){const t=Kt(),n=er({issueData:e,data:r.data,path:r.path,errorMaps:[r.common.contextualErrorMap,r.schemaErrorMap,t,t===We?void 0:We].filter(s=>!!s)});r.common.issues.push(n)}class j{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const s of t){if(s.status==="aborted")return y;s.status==="dirty"&&e.dirty(),n.push(s.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const s of t){const a=await s.key,i=await s.value;n.push({key:a,value:i})}return j.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const s of t){const{key:a,value:i}=s;if(a.status==="aborted"||i.status==="aborted")return y;a.status==="dirty"&&e.dirty(),i.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof i.value<"u"||s.alwaysSet)&&(n[a.value]=i.value)}return{status:e.value,value:n}}}const y=Object.freeze({status:"aborted"}),Ae=r=>({status:"dirty",value:r}),F=r=>({status:"valid",value:r}),Er=r=>r.status==="aborted",Pr=r=>r.status==="dirty",ge=r=>r.status==="valid",bt=r=>typeof Promise<"u"&&r instanceof Promise;function xt(r,e,t,n){if(typeof e=="function"?r!==e||!0:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(r)}function Yr(r,e,t,n,s){if(typeof e=="function"?r!==e||!0:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(r,t),t}var m;(function(r){r.errToObj=e=>typeof e=="string"?{message:e}:e||{},r.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(m||(m={}));var Oe,Te;class U{constructor(e,t,n,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Dr=(r,e)=>{if(ge(e))return{success:!0,data:e.value};if(!r.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new W(r.common.issues);return this._error=t,this._error}}};function v(r){if(!r)return{};const{errorMap:e,invalid_type_error:t,required_error:n,description:s}=r;if(e&&(t||n))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(i,o)=>{var c,d;const{message:l}=r;return i.code==="invalid_enum_value"?{message:l??o.defaultError}:typeof o.data>"u"?{message:(c=l??n)!==null&&c!==void 0?c:o.defaultError}:i.code!=="invalid_type"?{message:o.defaultError}:{message:(d=l??t)!==null&&d!==void 0?d:o.defaultError}},description:s}}class w{get description(){return this._def.description}_getType(e){return X(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:X(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new j,ctx:{common:e.parent.common,data:e.data,parsedType:X(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(bt(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const s={common:{issues:[],async:(n=t==null?void 0:t.async)!==null&&n!==void 0?n:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:X(e)},a=this._parseSync({data:e,path:s.path,parent:s});return Dr(s,a)}"~validate"(e){var t,n;const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:X(e)};if(!this["~standard"].async)try{const a=this._parseSync({data:e,path:[],parent:s});return ge(a)?{value:a.value}:{issues:s.common.issues}}catch(a){!((n=(t=a==null?void 0:a.message)===null||t===void 0?void 0:t.toLowerCase())===null||n===void 0)&&n.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:s}).then(a=>ge(a)?{value:a.value}:{issues:s.common.issues})}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:X(e)},s=this._parse({data:e,path:n.path,parent:n}),a=await(bt(s)?s:Promise.resolve(s));return Dr(n,a)}refine(e,t){const n=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,a)=>{const i=e(s),o=()=>a.addIssue({code:u.custom,...n(s)});return typeof Promise<"u"&&i instanceof Promise?i.then(c=>c?!0:(o(),!1)):i?!0:(o(),!1)})}refinement(e,t){return this._refinement((n,s)=>e(n)?!0:(s.addIssue(typeof t=="function"?t(n,s):t),!1))}_refinement(e){return new G({schema:this,typeName:g.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return B.create(this,this._def)}nullable(){return ce.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Z.create(this)}promise(){return Fe.create(this,this._def)}or(e){return St.create([this,e],this._def)}and(e){return At.create(this,e,this._def)}transform(e){return new G({...v(this._def),schema:this,typeName:g.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Et({...v(this._def),innerType:this,defaultValue:t,typeName:g.ZodDefault})}brand(){return new Xr({typeName:g.ZodBranded,type:this,...v(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Pt({...v(this._def),innerType:this,catchValue:t,typeName:g.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Wt.create(this,e)}readonly(){return Dt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ea=/^c[^\s-]{8,}$/i,ta=/^[0-9a-z]+$/,ra=/^[0-9A-HJKMNP-TV-Z]{26}$/i,na=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,sa=/^[a-z0-9_-]{21}$/i,aa=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,ia=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,oa=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ca="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Gt;const da=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,ua=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,la=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,ha=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,fa=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,ma=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,qr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",pa=new RegExp(`^${qr}$`);function Gr(r){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return r.precision?e=`${e}\\.\\d{${r.precision}}`:r.precision==null&&(e=`${e}(\\.\\d+)?`),e}function ga(r){return new RegExp(`^${Gr(r)}$`)}function ya(r){let e=`${qr}T${Gr(r)}`;const t=[];return t.push(r.local?"Z?":"Z"),r.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function _a(r,e){return!!((e==="v4"||!e)&&da.test(r)||(e==="v6"||!e)&&la.test(r))}function va(r,e){if(!aa.test(r))return!1;try{const[t]=r.split("."),n=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(n));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function wa(r,e){return!!((e==="v4"||!e)&&ua.test(r)||(e==="v6"||!e)&&ha.test(r))}class z extends w{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==f.string){const a=this._getOrReturnCtx(e);return h(a,{code:u.invalid_type,expected:f.string,received:a.parsedType}),y}const n=new j;let s;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(s=this._getOrReturnCtx(e,s),h(s,{code:u.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="max")e.data.length>a.value&&(s=this._getOrReturnCtx(e,s),h(s,{code:u.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),n.dirty());else if(a.kind==="length"){const i=e.data.length>a.value,o=e.data.length<a.value;(i||o)&&(s=this._getOrReturnCtx(e,s),i?h(s,{code:u.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):o&&h(s,{code:u.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),n.dirty())}else if(a.kind==="email")oa.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"email",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="emoji")Gt||(Gt=new RegExp(ca,"u")),Gt.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"emoji",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="uuid")na.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"uuid",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="nanoid")sa.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"nanoid",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid")ea.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"cuid",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="cuid2")ta.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"cuid2",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="ulid")ra.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"ulid",code:u.invalid_string,message:a.message}),n.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),h(s,{validation:"url",code:u.invalid_string,message:a.message}),n.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"regex",code:u.invalid_string,message:a.message}),n.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),n.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:{startsWith:a.value},message:a.message}),n.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:{endsWith:a.value},message:a.message}),n.dirty()):a.kind==="datetime"?ya(a).test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:"datetime",message:a.message}),n.dirty()):a.kind==="date"?pa.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:"date",message:a.message}),n.dirty()):a.kind==="time"?ga(a).test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{code:u.invalid_string,validation:"time",message:a.message}),n.dirty()):a.kind==="duration"?ia.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"duration",code:u.invalid_string,message:a.message}),n.dirty()):a.kind==="ip"?_a(e.data,a.version)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"ip",code:u.invalid_string,message:a.message}),n.dirty()):a.kind==="jwt"?va(e.data,a.alg)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"jwt",code:u.invalid_string,message:a.message}),n.dirty()):a.kind==="cidr"?wa(e.data,a.version)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"cidr",code:u.invalid_string,message:a.message}),n.dirty()):a.kind==="base64"?fa.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"base64",code:u.invalid_string,message:a.message}),n.dirty()):a.kind==="base64url"?ma.test(e.data)||(s=this._getOrReturnCtx(e,s),h(s,{validation:"base64url",code:u.invalid_string,message:a.message}),n.dirty()):b.assertNever(a);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement(s=>e.test(s),{validation:t,code:u.invalid_string,...m.errToObj(n)})}_addCheck(e){return new z({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...m.errToObj(e)})}url(e){return this._addCheck({kind:"url",...m.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...m.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...m.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...m.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...m.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...m.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...m.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...m.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...m.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...m.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...m.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...m.errToObj(e)})}datetime(e){var t,n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(n=e==null?void 0:e.local)!==null&&n!==void 0?n:!1,...m.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...m.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...m.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...m.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...m.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...m.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...m.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...m.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...m.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...m.errToObj(t)})}nonempty(e){return this.min(1,m.errToObj(e))}trim(){return new z({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new z({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new z({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}z.create=r=>{var e;return new z({checks:[],typeName:g.ZodString,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...v(r)})};function ba(r,e){const t=(r.toString().split(".")[1]||"").length,n=(e.toString().split(".")[1]||"").length,s=t>n?t:n,a=parseInt(r.toFixed(s).replace(".","")),i=parseInt(e.toFixed(s).replace(".",""));return a%i/Math.pow(10,s)}class ye extends w{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==f.number){const a=this._getOrReturnCtx(e);return h(a,{code:u.invalid_type,expected:f.number,received:a.parsedType}),y}let n;const s=new j;for(const a of this._def.checks)a.kind==="int"?b.isInteger(e.data)||(n=this._getOrReturnCtx(e,n),h(n,{code:u.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?ba(e.data,a.value)!==0&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(n=this._getOrReturnCtx(e,n),h(n,{code:u.not_finite,message:a.message}),s.dirty()):b.assertNever(a);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,m.toString(t))}gt(e,t){return this.setLimit("min",e,!1,m.toString(t))}lte(e,t){return this.setLimit("max",e,!0,m.toString(t))}lt(e,t){return this.setLimit("max",e,!1,m.toString(t))}setLimit(e,t,n,s){return new ye({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:m.toString(s)}]})}_addCheck(e){return new ye({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:m.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:m.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:m.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:m.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:m.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:m.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:m.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:m.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:m.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&b.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return!0;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ye.create=r=>new ye({checks:[],typeName:g.ZodNumber,coerce:(r==null?void 0:r.coerce)||!1,...v(r)});class _e extends w{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==f.bigint)return this._getInvalidInput(e);let n;const s=new j;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(n=this._getOrReturnCtx(e,n),h(n,{code:u.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):b.assertNever(a);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return h(t,{code:u.invalid_type,expected:f.bigint,received:t.parsedType}),y}gte(e,t){return this.setLimit("min",e,!0,m.toString(t))}gt(e,t){return this.setLimit("min",e,!1,m.toString(t))}lte(e,t){return this.setLimit("max",e,!0,m.toString(t))}lt(e,t){return this.setLimit("max",e,!1,m.toString(t))}setLimit(e,t,n,s){return new _e({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:m.toString(s)}]})}_addCheck(e){return new _e({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:m.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:m.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:m.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:m.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:m.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}_e.create=r=>{var e;return new _e({checks:[],typeName:g.ZodBigInt,coerce:(e=r==null?void 0:r.coerce)!==null&&e!==void 0?e:!1,...v(r)})};class tr extends w{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==f.boolean){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.boolean,received:n.parsedType}),y}return F(e.data)}}tr.create=r=>new tr({typeName:g.ZodBoolean,coerce:(r==null?void 0:r.coerce)||!1,...v(r)});class je extends w{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==f.date){const a=this._getOrReturnCtx(e);return h(a,{code:u.invalid_type,expected:f.date,received:a.parsedType}),y}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return h(a,{code:u.invalid_date}),y}const n=new j;let s;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(s=this._getOrReturnCtx(e,s),h(s,{code:u.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),n.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(s=this._getOrReturnCtx(e,s),h(s,{code:u.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),n.dirty()):b.assertNever(a);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new je({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:m.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:m.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}je.create=r=>new je({checks:[],coerce:(r==null?void 0:r.coerce)||!1,typeName:g.ZodDate,...v(r)});class rr extends w{_parse(e){if(this._getType(e)!==f.symbol){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.symbol,received:n.parsedType}),y}return F(e.data)}}rr.create=r=>new rr({typeName:g.ZodSymbol,...v(r)});class kt extends w{_parse(e){if(this._getType(e)!==f.undefined){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.undefined,received:n.parsedType}),y}return F(e.data)}}kt.create=r=>new kt({typeName:g.ZodUndefined,...v(r)});class $t extends w{_parse(e){if(this._getType(e)!==f.null){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.null,received:n.parsedType}),y}return F(e.data)}}$t.create=r=>new $t({typeName:g.ZodNull,...v(r)});class nr extends w{constructor(){super(...arguments),this._any=!0}_parse(e){return F(e.data)}}nr.create=r=>new nr({typeName:g.ZodAny,...v(r)});class fe extends w{constructor(){super(...arguments),this._unknown=!0}_parse(e){return F(e.data)}}fe.create=r=>new fe({typeName:g.ZodUnknown,...v(r)});class te extends w{_parse(e){const t=this._getOrReturnCtx(e);return h(t,{code:u.invalid_type,expected:f.never,received:t.parsedType}),y}}te.create=r=>new te({typeName:g.ZodNever,...v(r)});class sr extends w{_parse(e){if(this._getType(e)!==f.undefined){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.void,received:n.parsedType}),y}return F(e.data)}}sr.create=r=>new sr({typeName:g.ZodVoid,...v(r)});class Z extends w{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),s=this._def;if(t.parsedType!==f.array)return h(t,{code:u.invalid_type,expected:f.array,received:t.parsedType}),y;if(s.exactLength!==null){const i=t.data.length>s.exactLength.value,o=t.data.length<s.exactLength.value;(i||o)&&(h(t,{code:i?u.too_big:u.too_small,minimum:o?s.exactLength.value:void 0,maximum:i?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),n.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(h(t,{code:u.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),n.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(h(t,{code:u.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((i,o)=>s.type._parseAsync(new U(t,i,t.path,o)))).then(i=>j.mergeArray(n,i));const a=[...t.data].map((i,o)=>s.type._parseSync(new U(t,i,t.path,o)));return j.mergeArray(n,a)}get element(){return this._def.type}min(e,t){return new Z({...this._def,minLength:{value:e,message:m.toString(t)}})}max(e,t){return new Z({...this._def,maxLength:{value:e,message:m.toString(t)}})}length(e,t){return new Z({...this._def,exactLength:{value:e,message:m.toString(t)}})}nonempty(e){return this.min(1,e)}}Z.create=(r,e)=>new Z({type:r,minLength:null,maxLength:null,exactLength:null,typeName:g.ZodArray,...v(e)});function le(r){if(r instanceof C){const e={};for(const t in r.shape){const n=r.shape[t];e[t]=B.create(le(n))}return new C({...r._def,shape:()=>e})}else return r instanceof Z?new Z({...r._def,type:le(r.element)}):r instanceof B?B.create(le(r.unwrap())):r instanceof ce?ce.create(le(r.unwrap())):r instanceof q?q.create(r.items.map(e=>le(e))):r}class C extends w{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=b.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==f.object){const d=this._getOrReturnCtx(e);return h(d,{code:u.invalid_type,expected:f.object,received:d.parsedType}),y}const{status:n,ctx:s}=this._processInputParams(e),{shape:a,keys:i}=this._getCached(),o=[];if(!(this._def.catchall instanceof te&&this._def.unknownKeys==="strip"))for(const d in s.data)i.includes(d)||o.push(d);const c=[];for(const d of i){const l=a[d],p=s.data[d];c.push({key:{status:"valid",value:d},value:l._parse(new U(s,p,s.path,d)),alwaysSet:d in s.data})}if(this._def.catchall instanceof te){const d=this._def.unknownKeys;if(d==="passthrough")for(const l of o)c.push({key:{status:"valid",value:l},value:{status:"valid",value:s.data[l]}});else if(d==="strict")o.length>0&&(h(s,{code:u.unrecognized_keys,keys:o}),n.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const d=this._def.catchall;for(const l of o){const p=s.data[l];c.push({key:{status:"valid",value:l},value:d._parse(new U(s,p,s.path,l)),alwaysSet:l in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const d=[];for(const l of c){const p=await l.key,k=await l.value;d.push({key:p,value:k,alwaysSet:l.alwaysSet})}return d}).then(d=>j.mergeObjectSync(n,d)):j.mergeObjectSync(n,c)}get shape(){return this._def.shape()}strict(e){return m.errToObj,new C({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{var s,a,i,o;const c=(i=(a=(s=this._def).errorMap)===null||a===void 0?void 0:a.call(s,t,n).message)!==null&&i!==void 0?i:n.defaultError;return t.code==="unrecognized_keys"?{message:(o=m.errToObj(e).message)!==null&&o!==void 0?o:c}:{message:c}}}:{}})}strip(){return new C({...this._def,unknownKeys:"strip"})}passthrough(){return new C({...this._def,unknownKeys:"passthrough"})}extend(e){return new C({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new C({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:g.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new C({...this._def,catchall:e})}pick(e){const t={};return b.objectKeys(e).forEach(n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])}),new C({...this._def,shape:()=>t})}omit(e){const t={};return b.objectKeys(this.shape).forEach(n=>{e[n]||(t[n]=this.shape[n])}),new C({...this._def,shape:()=>t})}deepPartial(){return le(this)}partial(e){const t={};return b.objectKeys(this.shape).forEach(n=>{const s=this.shape[n];e&&!e[n]?t[n]=s:t[n]=s.optional()}),new C({...this._def,shape:()=>t})}required(e){const t={};return b.objectKeys(this.shape).forEach(n=>{if(e&&!e[n])t[n]=this.shape[n];else{let a=this.shape[n];for(;a instanceof B;)a=a._def.innerType;t[n]=a}}),new C({...this._def,shape:()=>t})}keyof(){return Qr(b.objectKeys(this.shape))}}C.create=(r,e)=>new C({shape:()=>r,unknownKeys:"strip",catchall:te.create(),typeName:g.ZodObject,...v(e)});C.strictCreate=(r,e)=>new C({shape:()=>r,unknownKeys:"strict",catchall:te.create(),typeName:g.ZodObject,...v(e)});C.lazycreate=(r,e)=>new C({shape:r,unknownKeys:"strip",catchall:te.create(),typeName:g.ZodObject,...v(e)});class St extends w{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;function s(a){for(const o of a)if(o.result.status==="valid")return o.result;for(const o of a)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const i=a.map(o=>new W(o.ctx.common.issues));return h(t,{code:u.invalid_union,unionErrors:i}),y}if(t.common.async)return Promise.all(n.map(async a=>{const i={...t,common:{...t.common,issues:[]},parent:null};return{result:await a._parseAsync({data:t.data,path:t.path,parent:i}),ctx:i}})).then(s);{let a;const i=[];for(const c of n){const d={...t,common:{...t.common,issues:[]},parent:null},l=c._parseSync({data:t.data,path:t.path,parent:d});if(l.status==="valid")return l;l.status==="dirty"&&!a&&(a={result:l,ctx:d}),d.common.issues.length&&i.push(d.common.issues)}if(a)return t.common.issues.push(...a.ctx.common.issues),a.result;const o=i.map(c=>new W(c));return h(t,{code:u.invalid_union,unionErrors:o}),y}}get options(){return this._def.options}}St.create=(r,e)=>new St({options:r,typeName:g.ZodUnion,...v(e)});const V=r=>r instanceof Tt?V(r.schema):r instanceof G?V(r.innerType()):r instanceof Mt?[r.value]:r instanceof oe?r.options:r instanceof Ct?b.objectValues(r.enum):r instanceof Et?V(r._def.innerType):r instanceof kt?[void 0]:r instanceof $t?[null]:r instanceof B?[void 0,...V(r.unwrap())]:r instanceof ce?[null,...V(r.unwrap())]:r instanceof Xr||r instanceof Dt?V(r.unwrap()):r instanceof Pt?V(r._def.innerType):[];class hr extends w{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.object)return h(t,{code:u.invalid_type,expected:f.object,received:t.parsedType}),y;const n=this.discriminator,s=t.data[n],a=this.optionsMap.get(s);return a?t.common.async?a._parseAsync({data:t.data,path:t.path,parent:t}):a._parseSync({data:t.data,path:t.path,parent:t}):(h(t,{code:u.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),y)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const s=new Map;for(const a of t){const i=V(a.shape[e]);if(!i.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of i){if(s.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);s.set(o,a)}}return new hr({typeName:g.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...v(n)})}}function ar(r,e){const t=X(r),n=X(e);if(r===e)return{valid:!0,data:r};if(t===f.object&&n===f.object){const s=b.objectKeys(e),a=b.objectKeys(r).filter(o=>s.indexOf(o)!==-1),i={...r,...e};for(const o of a){const c=ar(r[o],e[o]);if(!c.valid)return{valid:!1};i[o]=c.data}return{valid:!0,data:i}}else if(t===f.array&&n===f.array){if(r.length!==e.length)return{valid:!1};const s=[];for(let a=0;a<r.length;a++){const i=r[a],o=e[a],c=ar(i,o);if(!c.valid)return{valid:!1};s.push(c.data)}return{valid:!0,data:s}}else return t===f.date&&n===f.date&&+r==+e?{valid:!0,data:r}:{valid:!1}}class At extends w{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=(a,i)=>{if(Er(a)||Er(i))return y;const o=ar(a.value,i.value);return o.valid?((Pr(a)||Pr(i))&&t.dirty(),{status:t.value,value:o.data}):(h(n,{code:u.invalid_intersection_types}),y)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([a,i])=>s(a,i)):s(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}At.create=(r,e,t)=>new At({left:r,right:e,typeName:g.ZodIntersection,...v(t)});class q extends w{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==f.array)return h(n,{code:u.invalid_type,expected:f.array,received:n.parsedType}),y;if(n.data.length<this._def.items.length)return h(n,{code:u.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),y;!this._def.rest&&n.data.length>this._def.items.length&&(h(n,{code:u.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const a=[...n.data].map((i,o)=>{const c=this._def.items[o]||this._def.rest;return c?c._parse(new U(n,i,n.path,o)):null}).filter(i=>!!i);return n.common.async?Promise.all(a).then(i=>j.mergeArray(t,i)):j.mergeArray(t,a)}get items(){return this._def.items}rest(e){return new q({...this._def,rest:e})}}q.create=(r,e)=>{if(!Array.isArray(r))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new q({items:r,typeName:g.ZodTuple,rest:null,...v(e)})};class Ot extends w{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==f.object)return h(n,{code:u.invalid_type,expected:f.object,received:n.parsedType}),y;const s=[],a=this._def.keyType,i=this._def.valueType;for(const o in n.data)s.push({key:a._parse(new U(n,o,n.path,o)),value:i._parse(new U(n,n.data[o],n.path,o)),alwaysSet:o in n.data});return n.common.async?j.mergeObjectAsync(t,s):j.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,n){return t instanceof w?new Ot({keyType:e,valueType:t,typeName:g.ZodRecord,...v(n)}):new Ot({keyType:z.create(),valueType:e,typeName:g.ZodRecord,...v(t)})}}class ir extends w{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==f.map)return h(n,{code:u.invalid_type,expected:f.map,received:n.parsedType}),y;const s=this._def.keyType,a=this._def.valueType,i=[...n.data.entries()].map(([o,c],d)=>({key:s._parse(new U(n,o,n.path,[d,"key"])),value:a._parse(new U(n,c,n.path,[d,"value"]))}));if(n.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const c of i){const d=await c.key,l=await c.value;if(d.status==="aborted"||l.status==="aborted")return y;(d.status==="dirty"||l.status==="dirty")&&t.dirty(),o.set(d.value,l.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const c of i){const d=c.key,l=c.value;if(d.status==="aborted"||l.status==="aborted")return y;(d.status==="dirty"||l.status==="dirty")&&t.dirty(),o.set(d.value,l.value)}return{status:t.value,value:o}}}}ir.create=(r,e,t)=>new ir({valueType:e,keyType:r,typeName:g.ZodMap,...v(t)});class ve extends w{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==f.set)return h(n,{code:u.invalid_type,expected:f.set,received:n.parsedType}),y;const s=this._def;s.minSize!==null&&n.data.size<s.minSize.value&&(h(n,{code:u.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&n.data.size>s.maxSize.value&&(h(n,{code:u.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const a=this._def.valueType;function i(c){const d=new Set;for(const l of c){if(l.status==="aborted")return y;l.status==="dirty"&&t.dirty(),d.add(l.value)}return{status:t.value,value:d}}const o=[...n.data.values()].map((c,d)=>a._parse(new U(n,c,n.path,d)));return n.common.async?Promise.all(o).then(c=>i(c)):i(o)}min(e,t){return new ve({...this._def,minSize:{value:e,message:m.toString(t)}})}max(e,t){return new ve({...this._def,maxSize:{value:e,message:m.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ve.create=(r,e)=>new ve({valueType:r,minSize:null,maxSize:null,typeName:g.ZodSet,...v(e)});class Ee extends w{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.function)return h(t,{code:u.invalid_type,expected:f.function,received:t.parsedType}),y;function n(o,c){return er({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Kt(),We].filter(d=>!!d),issueData:{code:u.invalid_arguments,argumentsError:c}})}function s(o,c){return er({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Kt(),We].filter(d=>!!d),issueData:{code:u.invalid_return_type,returnTypeError:c}})}const a={errorMap:t.common.contextualErrorMap},i=t.data;if(this._def.returns instanceof Fe){const o=this;return F(async function(...c){const d=new W([]),l=await o._def.args.parseAsync(c,a).catch(E=>{throw d.addIssue(n(c,E)),d}),p=await Reflect.apply(i,this,l);return await o._def.returns._def.type.parseAsync(p,a).catch(E=>{throw d.addIssue(s(p,E)),d})})}else{const o=this;return F(function(...c){const d=o._def.args.safeParse(c,a);if(!d.success)throw new W([n(c,d.error)]);const l=Reflect.apply(i,this,d.data),p=o._def.returns.safeParse(l,a);if(!p.success)throw new W([s(l,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ee({...this._def,args:q.create(e).rest(fe.create())})}returns(e){return new Ee({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new Ee({args:e||q.create([]).rest(fe.create()),returns:t||fe.create(),typeName:g.ZodFunction,...v(n)})}}class Tt extends w{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Tt.create=(r,e)=>new Tt({getter:r,typeName:g.ZodLazy,...v(e)});class Mt extends w{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return h(t,{received:t.data,code:u.invalid_literal,expected:this._def.value}),y}return{status:"valid",value:e.data}}get value(){return this._def.value}}Mt.create=(r,e)=>new Mt({value:r,typeName:g.ZodLiteral,...v(e)});function Qr(r,e){return new oe({values:r,typeName:g.ZodEnum,...v(e)})}class oe extends w{constructor(){super(...arguments),Oe.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),n=this._def.values;return h(t,{expected:b.joinValues(n),received:t.parsedType,code:u.invalid_type}),y}if(xt(this,Oe)||Yr(this,Oe,new Set(this._def.values)),!xt(this,Oe).has(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return h(t,{received:t.data,code:u.invalid_enum_value,options:n}),y}return F(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return oe.create(e,{...this._def,...t})}exclude(e,t=this._def){return oe.create(this.options.filter(n=>!e.includes(n)),{...this._def,...t})}}Oe=new WeakMap;oe.create=Qr;class Ct extends w{constructor(){super(...arguments),Te.set(this,void 0)}_parse(e){const t=b.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==f.string&&n.parsedType!==f.number){const s=b.objectValues(t);return h(n,{expected:b.joinValues(s),received:n.parsedType,code:u.invalid_type}),y}if(xt(this,Te)||Yr(this,Te,new Set(b.getValidEnumValues(this._def.values))),!xt(this,Te).has(e.data)){const s=b.objectValues(t);return h(n,{received:n.data,code:u.invalid_enum_value,options:s}),y}return F(e.data)}get enum(){return this._def.values}}Te=new WeakMap;Ct.create=(r,e)=>new Ct({values:r,typeName:g.ZodNativeEnum,...v(e)});class Fe extends w{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==f.promise&&t.common.async===!1)return h(t,{code:u.invalid_type,expected:f.promise,received:t.parsedType}),y;const n=t.parsedType===f.promise?t.data:Promise.resolve(t.data);return F(n.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Fe.create=(r,e)=>new Fe({type:r,typeName:g.ZodPromise,...v(e)});class G extends w{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===g.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),s=this._def.effect||null,a={addIssue:i=>{h(n,i),i.fatal?t.abort():t.dirty()},get path(){return n.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){const i=s.transform(n.data,a);if(n.common.async)return Promise.resolve(i).then(async o=>{if(t.value==="aborted")return y;const c=await this._def.schema._parseAsync({data:o,path:n.path,parent:n});return c.status==="aborted"?y:c.status==="dirty"||t.value==="dirty"?Ae(c.value):c});{if(t.value==="aborted")return y;const o=this._def.schema._parseSync({data:i,path:n.path,parent:n});return o.status==="aborted"?y:o.status==="dirty"||t.value==="dirty"?Ae(o.value):o}}if(s.type==="refinement"){const i=o=>{const c=s.refinement(o,a);if(n.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(n.common.async===!1){const o=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return o.status==="aborted"?y:(o.status==="dirty"&&t.dirty(),i(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(o=>o.status==="aborted"?y:(o.status==="dirty"&&t.dirty(),i(o.value).then(()=>({status:t.value,value:o.value}))))}if(s.type==="transform")if(n.common.async===!1){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!ge(i))return i;const o=s.transform(i.value,a);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(i=>ge(i)?Promise.resolve(s.transform(i.value,a)).then(o=>({status:t.value,value:o})):i);b.assertNever(s)}}G.create=(r,e,t)=>new G({schema:r,typeName:g.ZodEffects,effect:e,...v(t)});G.createWithPreprocess=(r,e,t)=>new G({schema:e,effect:{type:"preprocess",transform:r},typeName:g.ZodEffects,...v(t)});class B extends w{_parse(e){return this._getType(e)===f.undefined?F(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}B.create=(r,e)=>new B({innerType:r,typeName:g.ZodOptional,...v(e)});class ce extends w{_parse(e){return this._getType(e)===f.null?F(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ce.create=(r,e)=>new ce({innerType:r,typeName:g.ZodNullable,...v(e)});class Et extends w{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===f.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Et.create=(r,e)=>new Et({innerType:r,typeName:g.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...v(e)});class Pt extends w{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return bt(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new W(n.common.issues)},input:n.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new W(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Pt.create=(r,e)=>new Pt({innerType:r,typeName:g.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...v(e)});class or extends w{_parse(e){if(this._getType(e)!==f.nan){const n=this._getOrReturnCtx(e);return h(n,{code:u.invalid_type,expected:f.nan,received:n.parsedType}),y}return{status:"valid",value:e.data}}}or.create=r=>new or({typeName:g.ZodNaN,...v(r)});class Xr extends w{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class Wt extends w{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return a.status==="aborted"?y:a.status==="dirty"?(t.dirty(),Ae(a.value)):this._def.out._parseAsync({data:a.value,path:n.path,parent:n})})();{const s=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return s.status==="aborted"?y:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:n.path,parent:n})}}static create(e,t){return new Wt({in:e,out:t,typeName:g.ZodPipeline})}}class Dt extends w{_parse(e){const t=this._def.innerType._parse(e),n=s=>(ge(s)&&(s.value=Object.freeze(s.value)),s);return bt(t)?t.then(s=>n(s)):n(t)}unwrap(){return this._def.innerType}}Dt.create=(r,e)=>new Dt({innerType:r,typeName:g.ZodReadonly,...v(e)});C.lazycreate;var g;(function(r){r.ZodString="ZodString",r.ZodNumber="ZodNumber",r.ZodNaN="ZodNaN",r.ZodBigInt="ZodBigInt",r.ZodBoolean="ZodBoolean",r.ZodDate="ZodDate",r.ZodSymbol="ZodSymbol",r.ZodUndefined="ZodUndefined",r.ZodNull="ZodNull",r.ZodAny="ZodAny",r.ZodUnknown="ZodUnknown",r.ZodNever="ZodNever",r.ZodVoid="ZodVoid",r.ZodArray="ZodArray",r.ZodObject="ZodObject",r.ZodUnion="ZodUnion",r.ZodDiscriminatedUnion="ZodDiscriminatedUnion",r.ZodIntersection="ZodIntersection",r.ZodTuple="ZodTuple",r.ZodRecord="ZodRecord",r.ZodMap="ZodMap",r.ZodSet="ZodSet",r.ZodFunction="ZodFunction",r.ZodLazy="ZodLazy",r.ZodLiteral="ZodLiteral",r.ZodEnum="ZodEnum",r.ZodEffects="ZodEffects",r.ZodNativeEnum="ZodNativeEnum",r.ZodOptional="ZodOptional",r.ZodNullable="ZodNullable",r.ZodDefault="ZodDefault",r.ZodCatch="ZodCatch",r.ZodPromise="ZodPromise",r.ZodBranded="ZodBranded",r.ZodPipeline="ZodPipeline",r.ZodReadonly="ZodReadonly"})(g||(g={}));const he=z.create,R=ye.create;or.create;_e.create;tr.create;je.create;rr.create;kt.create;$t.create;nr.create;fe.create;te.create;sr.create;Z.create;const L=C.create;C.strictCreate;St.create;hr.create;At.create;q.create;Ot.create;ir.create;ve.create;Ee.create;Tt.create;Mt.create;oe.create;Ct.create;Fe.create;G.create;B.create;ce.create;G.createWithPreprocess;Wt.create;const xa=L({clouds:L({all:R()}),main:L({temp:R(),feels_like:R(),humidity:R()}),visibility:R(),wind:L({speed:R(),deg:R()}),weather:L({description:he(),icon:he()}).array(),sys:L({country:he(),sunrise:R(),sunset:R()}),name:he(),timezone:R()}),ka=L({dt:R(),main:L({temp:R(),feels_like:R(),humidity:R()}),wind:L({speed:R(),deg:R()}),weather:L({description:he(),icon:he()}).array()}).array(),$a=L({list:ka}),jt={currentWeatherAPI:xa,forecastWeatherList:$a},Ft="65397ac3c85271c8d5c5230db0bf2d7e",Sa=async(r,e)=>{try{const n=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${r.toString()}&lon=${e.toString()}&appid=${Ft}`,{mode:"cors"})).json(),s=jt.currentWeatherAPI.safeParse(n);if(!s.success)throw console.error(s.error),new W(s.error.errors);return s.data}catch(t){t instanceof Error&&console.error(t)}},Aa=async(r,e)=>{try{const n=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${r.toString()}&lon=${e.toString()}&appid=${Ft}`,{mode:"cors"})).json(),s=jt.forecastWeatherList.safeParse(n);if(!s.success)throw console.error(s.error),new W(s.error.errors);return s.data}catch(t){t instanceof Error&&console.error(t)}},Oa=async r=>{try{const t=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&appid=${Ft}`,{mode:"cors"})).json(),n=jt.currentWeatherAPI.safeParse(t);if(!n.success)throw console.error(n.error),new W(n.error.errors);return n.data}catch(e){e instanceof Error&&console.error(e)}},Ta=async r=>{try{const t=await(await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${r}&appid=${Ft}`,{mode:"cors"})).json(),n=jt.forecastWeatherList.safeParse(t);if(!n.success)throw console.error(n.error),new W(n.error.errors);return n.data}catch(e){e instanceof Error&&console.error(e)}};var Ma=Object.defineProperty,Ca=Object.getOwnPropertyDescriptor,Jr=r=>{throw TypeError(r)},A=(r,e,t,n)=>{for(var s=n>1?void 0:n?Ca(e,t):e,a=r.length-1,i;a>=0;a--)(i=r[a])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&Ma(e,t,s),s},Kr=(r,e,t)=>e.has(r)||Jr("Cannot "+t),O=(r,e,t)=>(Kr(r,e,"read from private field"),t?t.call(r):e.get(r)),T=(r,e,t)=>e.has(r)?Jr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),M=(r,e,t,n)=>(Kr(r,e,"write to private field"),e.set(r,t),t);/**
 * @license AGPL-3.0-only
 * Weather App - A Weather app
 * Copyright (C) 2023-2025 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Weather App.
 *
 * Weather App is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Weather App is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Weather App. If not, see <https://www.gnu.org/licenses/>.
 */var qe,Ge,Qe,Xe,Je,Ke,et,tt,rt,nt,st,at,it,ot,ct,dt,ut,lt,ht,ft,mt,pt,gt,yt;const Nr={"01d":"fa-sun","01n":"fa-moon","02d":"fa-cloud-sun","02n":"fa-cloud-moon","03d":"fa-cloud","03n":"fa-cloud","04d":"fa-cloud","04n":"fa-cloud","09d":"fa-cloud-showers-heavy","09n":"fa-cloud-showers-heavy","10d":"fa-cloud-sun-rain","10n":"fa-cloud-moon-rain","11d":"fa-cloud-bolt","11n":"fa-cloud-bolt","13d":"fa-snowflake","13n":"fa-snowflake","50d":"fa-smog","50n":"fa-smog"},Ea=[{maxSpeed:.3,description:"Calm"},{maxSpeed:1.7,description:"Light winds"},{maxSpeed:3.3,description:"Light breeze"},{maxSpeed:5.6,description:"Gentle breeze"},{maxSpeed:8.1,description:"Moderate breeze"},{maxSpeed:10.8,description:"Fresh breeze"},{maxSpeed:13.9,description:"Strong breeze"},{maxSpeed:17.2,description:"Moderate gale"},{maxSpeed:20.8,description:"Fresh gale"},{maxSpeed:24.7,description:"Strong gale"},{maxSpeed:28.6,description:"Whole gale"},{maxSpeed:33.1,description:"Storm"},{maxSpeed:1/0,description:"Hurricane"}];let S=class extends H{constructor(){super(...arguments),T(this,qe),T(this,Ge),T(this,Qe),T(this,Xe),T(this,Je),T(this,Ke),T(this,et),T(this,tt),T(this,rt),T(this,nt),T(this,st),T(this,at),T(this,it),T(this,ot),T(this,ct),T(this,dt,localStorage.isMetric!=="false"),T(this,ut),T(this,lt),T(this,ht,[]),T(this,ft),T(this,mt),T(this,pt),T(this,gt),T(this,yt,!0),this.apiCall=async(r,e,t)=>{const n=new Intl.DisplayNames(["en"],{type:"region"});this.clouds=void 0,this.mainTemp=void 0,this.mainFeel=void 0,this.mainHumidity=void 0,this.visibility=void 0,this.windSpeed=void 0,this.windDeg=void 0,this.weatherDesc=void 0,this.weatherIcon=void 0,this.city=void 0,this.country=void 0,this.windFeelText=void 0,this.sunrise=void 0,this.sunset=void 0,this.currTime=void 0,this.forecastData.length=0,this.isLoading=!0,this.isFound=!0;let s,a;if(e&&t?(s=await Sa(e,t),a=await Aa(e,t)):r&&(s=await Oa(r),a=await Ta(r)),!s||!a){this.isFound=!1;return}const{clouds:i,weather:o,main:c,visibility:d,wind:l,sys:p,timezone:k,name:E}=s;this.clouds=i.all,this.mainTemp=Math.round(c.temp),this.mainFeel=Math.round(c.feels_like),this.mainHumidity=c.humidity,this.visibility=d/1e3,this.windSpeed=l.speed,this.windDeg=l.deg,this.weatherDesc=o[0].description,this.weatherIcon=o[0].icon,this.city=E;const P=n.of(p.country);P&&(this.country=P),k&&(this.sunrise=Ve(Zt(p.sunrise),k+new Date().getTimezoneOffset()*60),this.sunset=Ve(Zt(p.sunset),k+new Date().getTimezoneOffset()*60),this.currTime=Ve(new Date,k+new Date().getTimezoneOffset()*60));const{list:N}=a,be=N.filter((re,It)=>(It+1)%8===0);for(const re of be){const It=Ve(Zt(re.dt),new Date().getTimezoneOffset()*60),en=Math.round(re.main.temp),tn=Math.round(re.main.feels_like),rn=re.wind.speed,nn=re.wind.deg,sn=re.weather[0].icon,an={dayOfWeek:It,forecastTemp:en,forecastFeel:tn,forecastWindSpeed:rn,forecastWindDeg:nn,forecastIcon:sn};this.forecastData.push(an)}this.checkMode(),this.windFeel(),this.isLoading=!1},this.windFeel=()=>{for(const r of Ea)if(this.windSpeed<r.maxSpeed){this.windFeelText=r.description;return}}}get clouds(){return O(this,qe)}set clouds(r){M(this,qe,r)}get mainTemp(){return O(this,Ge)}set mainTemp(r){M(this,Ge,r)}get mainFeel(){return O(this,Qe)}set mainFeel(r){M(this,Qe,r)}get mainHumidity(){return O(this,Xe)}set mainHumidity(r){M(this,Xe,r)}get visibility(){return O(this,Je)}set visibility(r){M(this,Je,r)}get windSpeed(){return O(this,Ke)}set windSpeed(r){M(this,Ke,r)}get windDeg(){return O(this,et)}set windDeg(r){M(this,et,r)}get weatherDesc(){return O(this,tt)}set weatherDesc(r){M(this,tt,r)}get weatherIcon(){return O(this,rt)}set weatherIcon(r){M(this,rt,r)}get city(){return O(this,nt)}set city(r){M(this,nt,r)}get country(){return O(this,st)}set country(r){M(this,st,r)}get windFeelText(){return O(this,at)}set windFeelText(r){M(this,at,r)}get sunrise(){return O(this,it)}set sunrise(r){M(this,it,r)}get sunset(){return O(this,ot)}set sunset(r){M(this,ot,r)}get currTime(){return O(this,ct)}set currTime(r){M(this,ct,r)}get isMetric(){return O(this,dt)}set isMetric(r){M(this,dt,r)}get isLoading(){return O(this,ut)}set isLoading(r){M(this,ut,r)}get isFound(){return O(this,lt)}set isFound(r){M(this,lt,r)}get forecastData(){return O(this,ht)}set forecastData(r){M(this,ht,r)}get hourFormat(){return O(this,ft)}set hourFormat(r){M(this,ft,r)}get temperatureFormat(){return O(this,mt)}set temperatureFormat(r){M(this,mt,r)}get speedFormat(){return O(this,pt)}set speedFormat(r){M(this,pt,r)}get distanceFormat(){return O(this,gt)}set distanceFormat(r){M(this,gt,r)}get isDaytime(){return O(this,yt)}set isDaytime(r){M(this,yt,r)}render(){return I`
      ${Ue}
      <lit-controls
        .apiCall=${this.apiCall}
        .isMetric=${this.isMetric}
        .switchSystem=${r=>{this.switchSystem(r)}}>
        <img
          src="${this.isDaytime?"favicon.png":Xs}"
          alt="A ${this.isDaytime?"sun":"moon"} behind a cloud by kosonicon"
          width="128"
          height="128"
          style="${this.isDaytime?"":"scale: 1.15"}"
          class="w3-center w3-xlarge" />
      </lit-controls>

      ${this.isLoading&&this.isFound?I`<svg
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
          </svg>`:this.isFound?_:I`<h2 id="error" class="w3-center w3-text-white">
              Location not found
            </h2>`}

      <lit-current>
        <h1 class="w3-xxlarge w3-center">
          ${this.city}${this.country?", "+this.country:_}
        </h1>
        <h2 class="w3-xlarge w3-center w3-text-light-gray">
          ${this.city?$e(this.currTime,"eee., d MMM. y | 'at' ")+$e(this.currTime,this.hourFormat):_}
        </h2>

        <span id="weather-container">
          <div id="current-weather">
            <span>
              <i class="fa-solid ${Nr[this.weatherIcon]}"></i>
              <p>
                ${this.mainTemp?Math.round(this.isMetric?this.mainTemp-273:(this.mainTemp-273)*1.8+32).toString()+this.temperatureFormat:_}
              </p>
            </span>
            <div>
              <h3>
                ${this.weatherDesc?this.weatherDesc.charAt(0).toUpperCase()+this.weatherDesc.slice(1):_}
              </h3>
              <h4 class="w3-text-light-gray">
                ${this.mainFeel?"Feels like "+Math.round(this.isMetric?this.mainFeel-273:(this.mainFeel-273)*1.8+32).toString()+this.temperatureFormat:_}
              </h4>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed?this.windFeelText:_}
              </h4>
            </div>
          </div>

          <div id="detailed-weather">
            <span>
              <h4 class="w3-text-light-gray">
                ${this.windSpeed?"Wind":_}
              </h4>
              <h3>
                ${this.windDeg?I`<i
                      style="rotate: ${this.windDeg.toString()+"deg"}"
                      class="fa-solid fa-arrow-down"></i>`:_}
                ${this.windSpeed?Math.round(this.isMetric?this.windSpeed:this.windSpeed*2.24).toString()+this.speedFormat:_}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.mainHumidity?"Humidity":_}
              </h4>
              <h3>
                ${this.mainHumidity?this.mainHumidity.toString()+"%":_}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.visibility?"Visibility":_}
              </h4>
              <h3>
                ${this.visibility?Math.round(this.isMetric?this.visibility:this.visibility*.62).toString()+this.distanceFormat:_}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.clouds?"Cloudiness":_}
              </h4>
              <h3>${this.clouds?this.clouds.toString()+"%":_}</h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunrise?"Sunrise":_}
              </h4>
              <h3>
                ${this.sunrise?$e(this.sunrise,this.hourFormat):_}
              </h3>
            </span>

            <span>
              <h4 class="w3-text-light-gray">
                ${this.sunset?"Sunset":_}
              </h4>
              <h3>
                ${this.sunset?$e(this.sunset,this.hourFormat):_}
              </h3>
            </span>
          </div>
        </span>
      </lit-current>

      <lit-forecast>
        ${this.forecastData.length>0?this.forecastData.map(r=>I`<div class="forecast-list-elem">
                  <h4 class="forecast-day">${$e(r.dayOfWeek,"EEEE")}</h4>

                  <span class="forecast-temp" title="Temperature">
                    <i class="fa-solid ${Nr[r.forecastIcon]}"></i>
                    <h4>
                      ${r.forecastTemp?Math.round(this.isMetric?r.forecastTemp-273:(r.forecastTemp-273)*1.8+32).toString()+this.temperatureFormat:_}
                    </h4>
                  </span>

                  <h4
                    title="Feels like"
                    class="forecast-feel w3-text-light-gray">
                    ${r.forecastFeel?Math.round(this.isMetric?r.forecastFeel-273:(r.forecastFeel-273)*1.8+32).toString()+this.temperatureFormat:_}
                  </h4>

                  <h4 class="forecast-wind" title="Wind speed">
                    ${r.forecastWindDeg?I`<i
                          style="rotate: ${r.forecastWindDeg.toString()+"deg"}"
                          class="fa-solid fa-arrow-down"></i>`:_}
                    ${r.forecastWindSpeed?Math.round(this.isMetric?r.forecastWindSpeed:r.forecastWindSpeed*2.24).toString()+this.speedFormat:_}
                  </h4>
                </div>`):_}
      </lit-forecast>

      <lit-footer></lit-footer>
    `}checkMode(){const r=ms(this.currTime,this.sunrise),e=ps(this.currTime,this.sunset);this.isDaytime=!!(r&&e);const t="#0ea5e9",n="#7dd3fc",s="#f59e0b",a=`url(${Qs})`,i="#0ea5e980",o="#1e293b",c="#475569",d="#eab308",l=`url(${Js})`,p="#1e293b80",k=document.documentElement.style;k.setProperty("--bg-primary",this.isDaytime?t:o),k.setProperty("--bg-secondary",this.isDaytime?n:c),k.setProperty("--bg-accent",this.isDaytime?s:d),k.setProperty("background-image",this.isDaytime?a:l),document.body.style.setProperty("background-color",this.isDaytime?i:p)}firstUpdated(){if(localStorage.isMetric){const e=localStorage.getItem("isMetric");this.isMetric=e?JSON.parse(e):!0}this.switchFormat(this.isMetric);const r=new URLSearchParams(window.location.search).get("search");r?this.apiCall(r):this.getCurrentPosition().then(e=>{const t=e.coords.latitude,n=e.coords.longitude;return this.apiCall("",t,n)}).catch(e=>(e instanceof GeolocationPositionError&&console.log(`${e.message} -> Setting a default location...`),this.apiCall("Baku, Azerbaijan")))}getCurrentPosition(){return new Promise((r,e)=>{navigator.geolocation.getCurrentPosition(r,e)})}switchSystem(r){localStorage.setItem("isMetric",JSON.stringify(r)),this.switchFormat(r)}switchFormat(r){r?(this.isMetric=r,this.hourFormat="H:mm",this.temperatureFormat=" °C",this.speedFormat=" m/s",this.distanceFormat=" km",this.requestUpdate("isMetric",!0)):(this.isMetric=r,this.hourFormat="h:mm a",this.temperatureFormat=" °F",this.speedFormat=" mph",this.distanceFormat=" mi",this.requestUpdate("isMetric",!0))}};qe=new WeakMap;Ge=new WeakMap;Qe=new WeakMap;Xe=new WeakMap;Je=new WeakMap;Ke=new WeakMap;et=new WeakMap;tt=new WeakMap;rt=new WeakMap;nt=new WeakMap;st=new WeakMap;at=new WeakMap;it=new WeakMap;ot=new WeakMap;ct=new WeakMap;dt=new WeakMap;ut=new WeakMap;lt=new WeakMap;ht=new WeakMap;ft=new WeakMap;mt=new WeakMap;pt=new WeakMap;gt=new WeakMap;yt=new WeakMap;S.styles=Ie`
    ::selection {
      background-color: var(--bg-primary);
    }

    :host {
      display: flex;
      font-weight: 300;
      min-height: 100dvh;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      font-family: 'Signika', sans-serif;
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
      word-break: break-word;
      font-family: 'Signika', sans-serif;
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
        drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
    }

    svg {
      scale: 4;
      z-index: -1;
      padding-top: 1.25rem;
    }

    #error {
      user-select: none;
    }

    #weather-container {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    #current-weather {
      display: flex;
      margin-top: -1rem;
      align-items: center;
      flex-direction: column;

      & span {
        gap: 1rem;
        font-size: 4rem;
        display: inherit;
        line-height: 1rem;
        align-items: center;
        justify-content: center;
        margin-bottom: -1.5rem;
      }

      & div {
        display: inherit;
        width: fit-content;
        flex-direction: column;
        justify-content: center;

        & h4 {
          margin-top: -0.5rem;
        }
      }
    }

    #detailed-weather {
      display: grid;
      gap: 1rem 4rem;
      width: fit-content;
      margin-top: 0.5rem;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, auto);

      & span {
        display: flex;
        align-items: center;
        flex-direction: column;

        & h3 {
          gap: 0.5rem;
          margin-top: -2px;
          display: inherit;
          align-items: center;
        }
      }
    }

    .forecast-list-elem {
      gap: 0 4rem;
      display: grid;
      place-items: center;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      grid-template-areas:
        'item1 item4'
        'item2 item3';

      .forecast-day {
        grid-area: item1;
        font-weight: 600;
      }

      .forecast-temp {
        gap: 0.5rem;
        display: flex;
        grid-area: item2;
        align-items: center;

        & i {
          filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
            drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
        }
      }

      .forecast-feel {
        grid-area: item3;
      }

      .forecast-wind {
        gap: 0.5rem;
        display: flex;
        grid-area: item4;
        align-items: center;

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
        gap: 0 4rem;
        place-items: normal;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas: 'item1 item2 item3 item4';

        & > * {
          flex-basis: auto;
        }
      }
    }
  `;A([$({type:Number})],S.prototype,"clouds",1);A([$({type:Number})],S.prototype,"mainTemp",1);A([$({type:Number})],S.prototype,"mainFeel",1);A([$({type:Number})],S.prototype,"mainHumidity",1);A([$({type:Number})],S.prototype,"visibility",1);A([$({type:Number})],S.prototype,"windSpeed",1);A([$({type:Number})],S.prototype,"windDeg",1);A([$({type:String})],S.prototype,"weatherDesc",1);A([$({type:String})],S.prototype,"weatherIcon",1);A([$({type:String})],S.prototype,"city",1);A([$({type:String})],S.prototype,"country",1);A([$({type:String})],S.prototype,"windFeelText",1);A([$({attribute:!1})],S.prototype,"sunrise",1);A([$({attribute:!1})],S.prototype,"sunset",1);A([$({attribute:!1})],S.prototype,"currTime",1);A([$({type:Boolean})],S.prototype,"isMetric",1);A([$({type:Boolean})],S.prototype,"isLoading",1);A([$({type:Boolean})],S.prototype,"isFound",1);A([$({type:Array})],S.prototype,"forecastData",1);A([$({type:String})],S.prototype,"hourFormat",1);A([$({type:String})],S.prototype,"temperatureFormat",1);A([$({type:String})],S.prototype,"speedFormat",1);A([$({type:String})],S.prototype,"distanceFormat",1);A([$({type:Boolean})],S.prototype,"isDaytime",1);S=A([Ze("lit-main")],S);const Pa=()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/weather-app/sw.js",{scope:"/weather-app/"}).catch(r=>{r instanceof Error&&console.error(r)})})};Pa();console.log("Patrolling the Mojave almost makes you wish for a nuclear winter.");
