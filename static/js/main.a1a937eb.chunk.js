(this["webpackJsonpdesain-doang"]=this["webpackJsonpdesain-doang"]||[]).push([[0],{25:function(e,s,c){},49:function(e,s,c){"use strict";c.r(s);var i=c(1),a=c(9),t=c.n(a),n=(c(25),c(5)),r=c.p+"static/media/LogoDesainDoang.a9d9a399.svg",l=c.p+"static/media/Menu.cfc4efaf.svg",o=c.p+"static/media/Close.85176ce5.svg",d=c(2),j=c(4),m=function(){var e=Object(i.useState)({x_left:0,x_right:0,y_top:0,y_bottom:0}),s=Object(n.a)(e,2),c=s[0],a=s[1],t=function(){a({x_left:window.pageXOffset,x_right:window.pageXOffset+window.innerWidth,y_top:window.pageYOffset,y_bottom:window.pageYOffset+window.innerHeight})};return Object(i.useEffect)((function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),c},b=function(e){var s=e.targetId,c=e.duration,i=document.querySelector("#"+s).getBoundingClientRect().top,a=window.pageYOffset,t=null,n=function(e,s,c,i){return(e/=i/2)<1?c/2*e*e+s:-c/2*(--e*(e-2)-1)+s};requestAnimationFrame((function e(s){null===t&&(t=s);var r=s-t,l=n(r,a,i,c);window.scrollTo(0,l),r<c&&requestAnimationFrame(e)}))},h=c(18),u=c(0);var O=function(){var e=Object(i.useState)(!1),s=Object(n.a)(e,2),c=s[0],a=s[1],t=Object(i.useState)(!1),O=Object(n.a)(t,2),v=O[0],p=O[1];window.addEventListener("scroll",(function(){window.scrollY>=50?(a(!0),p(!1)):a(!1)}));var x=m().y_top,g=Object(d.c)().pathname,N=0;Object(i.useEffect)((function(){var e=document.querySelectorAll(".link-con .navi-link");"/"!==g&&(N=100),e.forEach((function(e,s){e.addEventListener("click",(function(){var s=e.getAttribute("name");setTimeout((function(){b({targetId:s,duration:1e3}),N=0}),N)}))}))}),[]),Object(i.useEffect)((function(){var e=document.querySelector("nav");x>0?e.classList.add("active"):e.classList.remove("active")}),[x]);var k=function(){p(!1)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{className:c?"nav active":"nav",children:[Object(u.jsx)("div",{className:"link-con logo-gambar",children:Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"main",children:Object(u.jsx)("img",{className:"logo",src:r,alt:""})})}),Object(u.jsxs)("div",{className:"link-con menu",children:[Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"aboutus",children:"About"}),Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"service",children:"Service"}),Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"porto",children:"Portofolio"}),Object(u.jsx)("a",{href:"https://wa.me/6285790428078",rel:"noopener noreferrer",className:"navi-link",target:"_self",children:"Contact"})]}),Object(u.jsx)("button",{className:"btn-subs",onClick:function(){window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link","_blank")},children:"Subscribe"})]}),Object(u.jsx)(h.bubble,{customBurgerIcon:Object(u.jsx)("img",{className:"menu-icon",src:l,alt:""}),customCrossIcon:Object(u.jsx)("img",{className:"close-icon",src:o,alt:""}),width:"80%",isOpen:v,onOpen:function(){p(!v)},disableAutoFocus:!0,children:Object(u.jsx)("nav",{className:"navi",children:Object(u.jsxs)("div",{className:"link-con menu",children:[Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"main",onClick:k,children:Object(u.jsx)("img",{className:"logo",src:r,alt:""})}),Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"aboutus",onClick:k,children:"About"}),Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"service",onClick:k,children:"Service"}),Object(u.jsx)(j.b,{to:"/",className:"navi-link",name:"porto",onClick:k,children:"Portofolio"}),Object(u.jsx)("a",{href:"https://wa.me/6285790428078",rel:"noopener noreferrer",className:"navi-link",target:"_self",children:"Contact"}),Object(u.jsx)("button",{className:"btn-subs",onClick:function(){window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link","_blank")},children:"Subscribe"})]})})})]})},v=c.p+"static/media/gambarHeader.ce960713.png";var p=function(){var e=m().y_top,s=Object(d.c)().pathname,c=0;return Object(i.useEffect)((function(){var e=document.querySelectorAll(".container .teks-button-gts");"/"!==s&&(c=100),e.forEach((function(e,s){e.addEventListener("click",(function(){var s=e.getAttribute("name");setTimeout((function(){b({targetId:s,duration:1e3}),c=0}),c)}))}))}),[]),Object(i.useEffect)((function(){var s=document.querySelector("nav");e>0?s.classList.add("active"):s.classList.remove("active")}),[e]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"main",children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{className:"hero",children:[Object(u.jsxs)("div",{className:"kiri",children:[Object(u.jsxs)("p",{className:"dark-teks",children:["Unlimited ",Object(u.jsx)("span",{className:"ungu-teks",children:"Creativity"})]}),Object(u.jsxs)("p",{className:"dark-teks",children:["With The ",Object(u.jsx)("span",{className:"ungu-teks",children:"Best Quality"})]}),Object(u.jsx)("p",{className:"teks-definisi",children:"Create a design to make it easier to promote your product"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)(j.b,{to:"/",className:"teks-button-gts",name:"gimmick",children:"Get Started"})})]}),Object(u.jsxs)("div",{className:"aksen",children:[Object(u.jsx)("img",{src:v,alt:"",className:"gambar-header"}),Object(u.jsx)("div",{className:"kotak-bawah"}),Object(u.jsx)("div",{className:"circle-putus"}),Object(u.jsx)("div",{className:"kotak-atas"}),Object(u.jsx)("div",{className:"circle-full"})]})]})]})})},x=c.p+"static/media/profesional.40b4b1d0.svg",g=c.p+"static/media/best.2a42a0d7.svg",N=c.p+"static/media/achieve.796f048e.svg",k=c.p+"static/media/price.7f2df36a.svg",f=c(7);c(16);var w=function(){return Object(u.jsxs)("div",{id:"gimmick",children:[Object(u.jsx)("div",{className:"aksen-atas"}),Object(u.jsxs)("div",{className:"container-gimmick",children:[Object(u.jsxs)("div",{className:"teks-container",children:[Object(u.jsx)("p",{className:"dark-teks",children:"Why Choose Us"}),Object(u.jsx)("p",{className:"teks-penjelas-gimmick",children:"You will get the best service from us"})]}),Object(u.jsxs)("div",{className:"icon-container",children:[Object(u.jsxs)("div",{className:"profesional-container",children:[Object(u.jsx)(f.a,{zoomMargin:40,overlayBgColorStart:"rgba(206, 143, 236, 0.8)",overlayBgColorEnd:"rgba(141, 103, 205, 0.5)",children:Object(u.jsx)("div",{className:"bulat-icon",children:Object(u.jsx)("img",{src:x,alt:"",className:"icon-gimmick"})})}),Object(u.jsxs)("div",{className:"definisi-gimmick",children:[Object(u.jsx)("p",{className:"judul-gimmick",children:"Profesional"}),Object(u.jsx)("p",{className:"teks-definisi-gimmick",children:"the project is carried out by professionals"})]})]}),Object(u.jsxs)("div",{className:"profesional-container",children:[Object(u.jsx)(f.a,{zoomMargin:40,overlayBgColorStart:"rgba(206, 143, 236, 0.8)",overlayBgColorEnd:"rgba(141, 103, 205, 0.5)",children:Object(u.jsx)("div",{className:"bulat-icon",children:Object(u.jsx)("img",{src:g,alt:"",className:"icon-gimmick"})})}),Object(u.jsxs)("div",{className:"definisi-gimmick",children:[Object(u.jsx)("p",{className:"judul-gimmick",children:"Best Results"}),Object(u.jsx)("p",{className:"teks-definisi-gimmick",children:"has many awards in his field"})]})]}),Object(u.jsxs)("div",{className:"profesional-container",children:[Object(u.jsx)(f.a,{zoomMargin:40,overlayBgColorStart:"rgba(206, 143, 236, 0.8)",overlayBgColorEnd:"rgba(141, 103, 205, 0.5)",children:Object(u.jsx)("div",{className:"bulat-icon",children:Object(u.jsx)("img",{src:N,alt:"",className:"icon-gimmick"})})}),Object(u.jsxs)("div",{className:"definisi-gimmick",children:[Object(u.jsx)("p",{className:"judul-gimmick",children:"Achievement"}),Object(u.jsx)("p",{className:"teks-definisi-gimmick",children:"the best results according to what you want"})]})]}),Object(u.jsxs)("div",{className:"profesional-container",children:[Object(u.jsx)(f.a,{zoomMargin:40,overlayBgColorStart:"rgba(206, 143, 236, 0.8)",overlayBgColorEnd:"rgba(141, 103, 205, 0.5)",children:Object(u.jsx)("div",{className:"bulat-icon",children:Object(u.jsx)("img",{src:k,alt:"",className:"icon-gimmick"})})}),Object(u.jsxs)("div",{className:"definisi-gimmick",children:[Object(u.jsx)("p",{className:"judul-gimmick",children:"Best Price"}),Object(u.jsx)("p",{className:"teks-definisi-gimmick",children:"offer the best and satisfying price"})]})]})]})]}),Object(u.jsx)("div",{className:"aksen-bawah"})]})},y=c.p+"static/media/gambarAbout.ac530393.png";var _=function(){return Object(u.jsx)("div",{id:"aboutus",children:Object(u.jsxs)("div",{className:"hero-kanan",children:[Object(u.jsxs)("div",{className:"aksen-about",children:[Object(u.jsx)("div",{className:"kotak-bawah-about"}),Object(u.jsx)("div",{className:"circle-putus-about"}),Object(u.jsx)("div",{className:"kotak-atas-about"}),Object(u.jsx)("div",{className:"circle-full-about"}),Object(u.jsx)("img",{src:y,alt:"",className:"gambar-about"})]}),Object(u.jsxs)("div",{className:"kanan",children:[Object(u.jsx)("p",{className:"dark-teks",children:"About Us"}),Object(u.jsx)("p",{className:"teks-definisi-about",children:"Desain Doang is a design service business that was established in 2021, Desain Doang provides several design services. Ordering designs is quite easy, just make contact through the information on this website. Orders will be processed by experts and completed within the deadline desired by the customer. "}),Object(u.jsx)("button",{className:"button-gts",onClick:function(){window.open("https://www.instagram.com/p/CMeU4HJH3LW/?utm_medium=copy_link")},children:"More Info"})]})]})})},C=c.p+"static/media/Snapgram.3b2e9205.svg",S=c.p+"static/media/Character.eb4636cd.svg",L=c.p+"static/media/Feed.a1b9d60f.svg",M=c.p+"static/media/LogoDesain.d050de99.svg",E=c.p+"static/media/Poster.d5a185dd.svg",B=c.p+"static/media/UI.f42a6865.svg";var D=function(){return Object(u.jsxs)("div",{id:"service",children:[Object(u.jsxs)("div",{className:"teks-container",children:[Object(u.jsx)("p",{className:"dark-teks-service",children:"Our Service"}),Object(u.jsx)("p",{className:"teks-penjelas-service",children:"The service we provide"})]}),Object(u.jsxs)("div",{className:"container-col",children:[Object(u.jsx)("div",{className:"kolom",children:Object(u.jsxs)("div",{className:"baris",children:[Object(u.jsxs)("a",{href:"https://www.instagram.com/p/COJoyAmnS1L/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:B,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"UI & UX Design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]}),Object(u.jsxs)("a",{href:"https://www.instagram.com/p/CM1IpW8HsD2/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:E,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"Poster Design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]}),Object(u.jsxs)("a",{href:"https://www.instagram.com/p/CMqg_c8nMXn/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:L,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"Feed design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]})]})}),Object(u.jsx)("div",{className:"kolom",children:Object(u.jsxs)("div",{className:"baris",children:[Object(u.jsxs)("a",{href:"https://www.instagram.com/p/CNCXeqXn3cq/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:C,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"InstaStory Design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]}),Object(u.jsxs)("a",{href:"https://www.instagram.com/p/CMgFP1bHwBb/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:M,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"Logo Design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]}),Object(u.jsxs)("a",{href:"https://www.instagram.com/p/CSL4MnCHXiD/?utm_medium=copy_link",rel:"noopener noreferrer",target:"_blank",className:"container-pilihan",children:[Object(u.jsx)("div",{className:"container-icon",children:Object(u.jsx)("img",{src:S,alt:"",className:"icon-service"})}),Object(u.jsxs)("div",{className:"container-teks-pilihan",children:[Object(u.jsx)("p",{className:"judul-service",children:"Character Design"}),Object(u.jsx)("p",{className:"teks-definisi-service",children:"the project is carried out by professionals"})]})]})]})})]})]})},A=c.p+"static/media/desainAnime.15b0d876.png",H=c.p+"static/media/desainKanan.5dd240c7.png",q=c.p+"static/media/desainKiri.02c61a32.png",I=c.p+"static/media/desainVector.5931c57d.png";var F=function(){return Object(u.jsx)("div",{id:"porto",children:Object(u.jsxs)("div",{className:"container-porto",children:[Object(u.jsxs)("div",{className:"teks-porto",children:[Object(u.jsx)("p",{className:"dark-teks",children:"Our Portofolio"}),Object(u.jsx)("p",{className:"teks-definisi",children:"Handpicked Product Latest Work"})]}),Object(u.jsxs)("div",{className:"container-desain",children:[Object(u.jsxs)("div",{className:"desain-satu",children:[Object(u.jsx)(f.a,{zoomMargin:40,children:Object(u.jsx)("img",{src:A,alt:"",className:"desain-kiri"})}),Object(u.jsx)(f.a,{zoomMargin:40,children:Object(u.jsx)("img",{src:H,alt:"",className:"desain-kanan"})})]}),Object(u.jsxs)("div",{className:"desain-dua",children:[Object(u.jsx)(f.a,{zoomMargin:40,children:Object(u.jsx)("img",{src:I,alt:"",className:"desain-kiri"})}),Object(u.jsx)(f.a,{zoomMargin:40,children:Object(u.jsx)("img",{src:q,alt:"",className:"desain-kanan"})})]})]})]})})},P=c.p+"static/media/logo.6ce24c58.svg";var U=function(){return Object(u.jsxs)("div",{id:"footer",children:[Object(u.jsx)("p",{className:"teks-footer",children:"Copyright 2021 - DesainDoang - Build with"}),Object(u.jsx)("img",{src:P,alt:"",className:"logo-react"})]})};var z=function(){return Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{}),Object(u.jsx)(w,{}),Object(u.jsx)(_,{}),Object(u.jsx)(D,{}),Object(u.jsx)(F,{}),Object(u.jsx)(U,{})]})})};t.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(z,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.a1a937eb.chunk.js.map