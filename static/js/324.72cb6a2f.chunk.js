"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[324],{324:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),u=n(87),c=n(689),o="Searchform_form__iydFE",i="Searchform_input__oXtlL",s="Searchform_button__ZlJoQ",f="Searchform_buttonLabel__W+F5Z",h=n(184),l=function(e){var t=e.onSubmit,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],l=u[1],p=(0,a.useState)(""),v=(0,r.Z)(p,2),m=v[0],d=v[1],g=function(){l(""),d(c)};return(0,h.jsxs)("form",{className:o,onSubmit:function(e){e.preventDefault(),""!==c.trim()?c!==m&&(t(c),g()):alert("Write a search query")},children:[(0,h.jsx)("input",{className:i,onChange:function(e){l(e.currentTarget.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c}),(0,h.jsx)("button",{className:s,type:"submit",children:(0,h.jsx)("span",{className:f,children:"Search"})})]})},p=n(897),v=function(){var e,t=(0,u.lr)(),n=(0,r.Z)(t,2),o=n[0],i=n[1],s=(0,a.useState)([]),f=(0,r.Z)(s,2),v=f[0],m=f[1],d=(0,a.useState)(!1),g=(0,r.Z)(d,2),x=g[0],j=g[1],b=(0,c.TH)(),w=null!==(e=o.get("movieId"))&&void 0!==e?e:"";return(0,a.useEffect)((function(){w&&(j(!0),(0,p.V0)(w).then((function(e){var t=e.results;t.length||alert('there is no movie with the "'.concat(w,'"')),m(t)})).catch((function(e){return alert("error:"+e)})).finally(j(!1)))}),[w]),(0,h.jsxs)("div",{children:[(0,h.jsx)(l,{onSubmit:function(e){if(!e)return i({});i({movieId:e})}}),x?(0,h.jsx)("p",{children:"Loading..."}):(0,h.jsx)("ul",{children:v.map((function(e){var t=e.id,n=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"/movies/".concat(t),state:{from:b},children:n})},t)}))})]})}},897:function(e,t,n){function r(e,t,n,r,a,u,c){try{var o=e[u](c),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,u){var c=e.apply(t,n);function o(e){r(c,a,u,o,i,"next",e)}function i(e){r(c,a,u,o,i,"throw",e)}o(void 0)}))}}n.d(t,{Yc:function(){return h},Pg:function(){return f},fI:function(){return l},V0:function(){return s},Df:function(){return i}});var u=n(757),c=n.n(u),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWE3MTViMjhiYzlhNTc2ZWQ2MzkzZjYzYjllMjlmOCIsInN1YiI6IjY0N2ZhYTRlY2E3ZWM2MDEzOTAwNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4uBK7cn8JGhy1huwgClr31nT-u15Nkxz-Rq5SsBaK6g"}},i=function(){var e=a(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",o);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=a(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),o);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=a(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),o);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=a(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),o);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=a(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),o);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=324.72cb6a2f.chunk.js.map