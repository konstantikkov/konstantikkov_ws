(this.webpackJsonpinteractive_map=this.webpackJsonpinteractive_map||[]).push([[0],[,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(7),i=n.n(s),u=(n(13),n(2)),o=c.a.createContext(),l=function(){return Object(r.useContext)(o)},j=function(e){var t=e.children,n=Object(r.useState)(0),c=Object(u.a)(n,2),s=c[0],i=c[1];return Object(a.jsx)(o.Provider,{value:{value:s,toggle:function(e){return i((function(t){return e}))}},children:t})},d=["\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a","\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a","\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a","\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439","\u0438\u044e\u043d","\u0438\u044e\u043b","\u0430\u0432\u0433","\u0441\u0435\u043d","\u043e\u043a\u0442","\u043d\u043e\u044f","\u0434\u0435\u043a","\u044f\u043d\u0432","\u0444\u0435\u0432","\u043c\u0430\u0440","\u0430\u043f\u0440","\u043c\u0430\u0439"],x=function(){var e=l().value/100,t=-1,n=0;return Object(a.jsx)("ul",{className:"MonthList",children:d.map((function(r){return++t>=e&&t<e+1?Object(a.jsx)("li",{className:"Month",style:{color:"red"},children:r},n++):Object(a.jsx)("li",{className:"Month",children:r},n++)}))})},v=["1941","1942","1943","1944","1945"],b=function(){var e=l().value,t=0;var n=function(e){return e<600?0:e<1800?1:e<3e3?2:e<4200?3:e<=4700?4:void 0}(e),r=-1;return Object(a.jsx)("ul",{className:"YearList",children:v.map((function(e){return r++,n===r?Object(a.jsx)("li",{className:"Year",style:{color:"red"},children:e},t++):Object(a.jsx)("li",{className:"Year",children:e},t++)}))})},p=(n(14),function(){var e=l();return Object(a.jsxs)("div",{className:"SliderContainer",children:[Object(a.jsx)("input",{type:"range",min:"0",max:"4700",className:"slider",value:e.value,onChange:function(t){return e.toggle(t.target.value)}}),Object(a.jsx)(x,{}),Object(a.jsx)(b,{})]})}),f=n(3),O=(n(15),function(e){var t,n=e.descriptionMap,r=l().value,c=0,s=0,i={},u=Object(f.a)(n.entries());try{for(u.s();!(t=u.n()).done;){var o=t.value;if(s++,r>=c&&r<=o[0]){i=o[1];break}s===n.size?i=o[1]:c=o[0]}}catch(j){u.e(j)}finally{u.f()}return Object(a.jsxs)("div",{className:"Description",children:[Object(a.jsx)("div",{className:"Header",children:i.header}),Object(a.jsx)("div",{className:"Text",children:i.text})]})}),m=c.a.createContext(),h=function(){return Object(r.useContext)(m)},y=function(e){var t=e.children,n=Object(r.useState)((function(){return!1})),c=Object(u.a)(n,2),s=c[0],i=c[1];return Object(a.jsx)(m.Provider,{value:{visible:s,toggle:function(){return i((function(e){return!e}))}},children:t})},M=(n(6),c.a.createContext()),N=function(){return Object(r.useContext)(M)},g=function(e){var t=e.children,n=Object(r.useState)((function(){return 20})),c=Object(u.a)(n,2),s=c[0],i=c[1];return Object(a.jsx)(M.Provider,{value:{zIndex:s,upIndex:function(){return i((function(e){return e+1}))},downIndex:function(){return i((function(e){return e-1}))}},children:t})},w=function(e){var t=e.value,n=Object(r.useState)((function(){return 0})),c=Object(u.a)(n,2),s=c[0],i=c[1],o=N().upIndex,l=h(),j=l.visible,d=l.toggle;return s!==t&&i(t),Object(a.jsx)("div",{className:"Point",style:{transform:"scale(".concat(s,")")},onClick:function(e){d(),j||o()}})},C=function(e){var t=e.name,n=e.value,c=h(),s=c.visible,i=c.toggle,u=N().zIndex,o=Object(r.useRef)(u),l=Object(r.useRef)(s);return console.log(o.current+"before"+t),s?(l.current||(l.current=!0,o.current=u),console.log(s),Object(a.jsxs)("div",{className:"PointStats",style:{zIndex:"".concat(o.current)},onClick:function(e){return i()},children:[Object(a.jsx)("div",{className:"PointName",children:t}),Object(a.jsxs)("div",{className:"PointText",children:[n," \u0447\u0435\u043b\u043e\u0432\u0435\u043a"]})]})):(l.current=!1,null)},P=function(e){var t=e.value,n=e.info;return Object(a.jsx)(y,{children:Object(a.jsxs)("div",{className:"Dot",style:{left:"".concat(n.pos.x,"%"),top:"".concat(n.pos.y,"%")},children:[Object(a.jsx)(w,{value:t}),Object(a.jsx)(C,{value:t,name:n.name})]})})},k=function(e){var t,n=e.posMap,r=e.pointsDateMap,c=l().value,s=0,i=[],u=Object(f.a)(r.entries());try{for(u.s();!(t=u.n()).done;){var o,j=t.value,d=0,x=0,v=Object(f.a)(j[1].entries());try{for(v.s();!(o=v.n()).done;){var b=o.value;if(x++,c>=d&&c<=b[0]){i.push({name:j[0],value:b[1]});break}if(x===j[1].size){i.push({name:j[0],value:b[1]});break}d=b[0]}}catch(p){v.e(p)}finally{v.f()}}}catch(p){u.e(p)}finally{u.f()}return Object(a.jsx)(g,{children:Object(a.jsx)("div",{className:"MapPlane",children:i.map((function(e){return Object(a.jsx)(P,{value:e.value,info:n.get(e.name)},s++)}))})})};var I=function(){var e=new Map;e.set(700,{header:"1941 \u0433\u043e\u0434",text:"\u0422\u0435\u043a\u0441\u0442 \u043e 1941 \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."}),e.set(1700,{header:"1942 \u0433\u043e\u0434",text:"\u0422\u0435\u043a\u0441\u0442 \u043e 1942 \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."}),e.set(2700,{header:"1943 \u0433\u043e\u0434",text:"\u0422\u0435\u043a\u0441\u0442 \u043e 1943 \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."}),e.set(3700,{header:"1944 \u0433\u043e\u0434",text:"\u0422\u0435\u043a\u0441\u0442 \u043e 1944 \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."}),e.set(4e3,{header:"1945 \u0433\u043e\u0434",text:"\u0422\u0435\u043a\u0441\u0442 \u043e 1945 \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u043c \u0433\u043e\u0434\u0443 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0438."});var t=new Map;t.set(1,{pos:{x:50,y:40},name:"1 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(2,{pos:{x:7,y:8},name:"2 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(3,{pos:{x:1,y:9},name:"3 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(4,{pos:{x:49,y:31},name:"4 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(5,{pos:{x:60,y:31},name:"5 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(6,{pos:{x:39,y:81},name:"6 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(7,{pos:{x:29,y:31},name:"7 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(8,{pos:{x:39,y:31},name:"8 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(9,{pos:{x:49,y:51},name:"9 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"}),t.set(10,{pos:{x:89,y:69},name:"10 \u0433\u043e\u0441\u043f\u0438\u0442\u0430\u043b\u044c"});var n=new Map;return n.set(1,new Map([[700,21],[1700,7],[2700,33]])),n.set(2,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(3,new Map([[700,20],[2700,15]])),n.set(4,new Map([[1700,7],[2700,18],[3700,11],[4e3,30]])),n.set(5,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(6,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(7,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(8,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(9,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),n.set(10,new Map([[700,30],[1700,15],[3700,21],[4e3,30]])),Object(a.jsx)(j,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{}),Object(a.jsx)(k,{posMap:t,pointsDateMap:n}),Object(a.jsx)(O,{descriptionMap:e})]})})};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.24ca5efb.chunk.js.map