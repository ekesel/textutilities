(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),l=(a(22),a(10)),o=a(8),i=a(0);function b(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," Mode"]})]})]})]})})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",placeholder:"Enter Text Here!",style:{backgroundColor:"dark"===e.mode?"#28375b":"white",color:"dark"===e.mode?"white":"black"},value:n,onChange:function(e){s(e.target.value)},id:"mybox",rows:"8"})}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toUpperCase()),e.showAlert("Converted to Upper Case","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){s(n.toLowerCase()),e.showAlert("Converted to Lower Case","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","primary")},children:"Copy Text"}),Object(i.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extra Spaces"}),Object(i.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){s(""),e.showAlert("Text Box Cleared","danger")},children:"Clear Text"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h1",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[n.length>0?n.trim().replace(/  +/g," ").split(" ").length:0," words and ",n.length," characters"]}),Object(i.jsxs)("p",{children:[.008*n.split(" ").length," Minutes Read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:n.length>0?n:"Enter something to Preview here!"})]})]})}b.defaultProps={title:"Set Title",aboutText:"Set About Here"};var h=function(e){return e.alert&&Object(i.jsx)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:Object(i.jsx)("strong",{children:e.alert.msg})})};function j(e){return Object(i.jsx)("div",{className:"container my-2 p-2",style:{color:"dark"===e.mode?"white":"black"},children:Object(i.jsxs)("div",{class:"jumbotron my-2",children:[Object(i.jsx)("h1",{children:"About Me!"}),Object(i.jsx)("p",{children:'You can google him as \u201cekesel\u201d. Developing strong relationships is the foundation of everything he does, both professionally and personally. I am Ekaansh Sahni, You can google me as "ekesel". I have advanced in Django Website Development. Apart from that, I have rich experience in Java and Python Programming!'}),Object(i.jsx)("a",{href:"https://ekesel.me",children:Object(i.jsx)("button",{className:"btn btn-primary",children:"Click Here"})})]})})}var m=a(2);var x=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),x=r[0],u=r[1],g=function(e,t){u({msg:e,type:t}),setTimeout((function(){u(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#28375b",g("Dark Mode Enabled","success")):(n("light"),document.body.style.backgroundColor="white",g("Light Mode Enabled","success"))},aboutText:"About Me"}),Object(i.jsx)(h,{alert:x}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(j,{mode:a})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(d,{showAlert:g,heading:"Enter the Text To Analyze below",mode:a})})]})})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),u()}},[[29,1,2]]]);
//# sourceMappingURL=main.4d114e52.chunk.js.map