(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{172:function(e,t,n){e.exports={root:"styles_root__BDjbF"}},192:function(e,t,n){},193:function(e,t,n){},323:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),c=n(15),o=n.n(c),s=(n(192),n(13)),l=n(10),j=n(25),d=n(26),p=(n(193),n(9)),b=n(14),h=n(356),m=n(357),x=n(358),u=n(163),O=n.n(u),f=n(103),g=n(2),v=i.a.createContext({open:!1,toggleOpen:function(e){}}),w=function(e){return Object(g.jsx)(v.Provider,{value:e.drawerToggle,children:e.children})},y=function(){return Object(a.useContext)(v)},N=n(31),C=n.n(N),S=n(4),k=240,_=C()((function(e){return{menuButton:{marginRight:e.spacing(2),color:"#000000"},hide:{display:"none"},appBar:{backgroundColor:"#ffffff",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(k,"px)"),marginLeft:k,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},headerTitle:{marginLeft:"auto",marginRight:"auto",fontWeight:900,color:"#000000"}}})),T=function(e){var t=y(),n=_();return Object(g.jsx)(h.a,{position:"fixed",className:Object(S.a)(n.appBar,Object(p.a)({},n.appBarShift,t.open)),children:Object(g.jsxs)(m.a,{children:[Object(g.jsx)(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){console.log("onCLick",t.open),console.log("function",t.toggleOpen),t.toggleOpen(!t.open)},edge:"start",className:Object(S.a)(n.menuButton,t.open&&n.hide),children:Object(g.jsx)(O.a,{})}),Object(g.jsx)(f.a,{variant:"h5",noWrap:!0,className:n.headerTitle,children:"Lieng The Phy"})]})})},W={hashName:""},B=i.a.createContext(W),D=function(e){return Object(g.jsx)(B.Provider,{value:e.hashValue,children:e.children})},P=n(369),A=n(55),R=n(395),I=n(390),z=n(391),E=n(371),F=n(71),L=n.n(F),M={navBar:{backgroundColor:"#fff",color:"#000",transition:"all 0.25s linear",fontSize:"30rem"},content:{fontSize:"16px",backgroundColor:"#fff",color:"#000",transition:"all 0.25s linear",fontFamily:"Roboto, sans-serif"},toggleButton:{toggleBorder:"black",gradient:"#fff",switchColor:"#000",transformLight:"translateY(0)",transformDark:"translateY(-100px)"},title:{}},H=i.a.createContext(M),V=function(){return Object(a.useContext)(H)},q=n(398),G=["a software engineer","a writer","a knowledge seeker","a fitness freak","a manga lover"],J=n(34),U=Object(J.f)((function(){var e=V(),t=[];Object(a.useEffect)((function(){o(G[0],G);return function(){c(""),t.forEach((function(e){return clearTimeout(e)}))}}),[]);var n=Object(a.useState)(""),r=Object(b.a)(n,2),i=r[0],c=r[1],o=function e(n,r){if(0===n.length)c(""),0===(r=r.slice(1)).length&&(r=G),e(r[0],r);else{c((function(e){return e+n[0]}));var a=setTimeout((function(){return e(n.slice(1),r)}),150);t.push(a)}};return Object(g.jsxs)(q.a,{style:e.content,children:[Object(g.jsx)("div",{className:L.a.my_img}),Object(g.jsx)("div",{className:L.a.title_content,children:Object(g.jsxs)("div",{className:L.a.layout_content,children:[Object(g.jsx)("h4",{children:"Hi, I am"}),Object(g.jsx)("h2",{className:L.a.page_title,children:"Lieng The Phy"}),Object(g.jsxs)("h4",{children:["I am "," ",Object(g.jsx)("strong",{className:L.a.typewriter2,children:i})]})]})})]})})),Y=n(366),Z=n(367),X=n(6),$=n(365),K=n(368),Q=n(176),ee=n(121),te=n.n(ee),ne=n(359),re=n(360),ae=n(361),ie=n(362),ce=n(363),oe=n(364),se=Object(X.a)({missingOppositeContent:{"&:before":{display:"none"}}})(ne.a),le=C()((function(e){return{contentWrapper:{padding:"80px"},titleWrapper:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&:not(:first-child)":{marginBottom:"12px",padding:"5px 8px"}}},title:{fontWeight:"bold",textTransform:"uppercase",marginBottom:"12px",padding:"5px 8px"},content:{alignItems:"center",display:"flex",flexDirection:"row"},paper:{padding:e.spacing(1)},timelineDot:{color:"white",background:"white"},timelineDotCurrent:{background:"#0057D9"},timelineConnector:{color:"white",background:"white"},timelineContent:{marginLeft:"10px"},event:{position:"relative","& h3":{color:"#fff",padding:"3px 8px",marginBottom:"1.5em",background:"#0057D9",width:"max-content",fontSize:"14px",marginLeft:"30px",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)","&::before":{content:'""',bottom:"0",position:"absolute",border:"11px solid #0057D9!important",borderLeftColor:"transparent !important",display:"block",marginLeft:"-35px"}}},projectSubTitle:{fontWeight:700,color:"#0057D9",opacity:.8,fontSize:"14px",marginBottom:"5px"},paperContent:{padding:"8px 12px",marginBottom:"8px",marginTop:"8px",fontSize:"14px","& div":{"&$projectTitle":{fontSize:"15px",fontWeight:700,color:"#0057D9","&:not(:first-child)":{marginTop:"10px"}}}},projectTitle:{},iconSection:{backgroundColor:"#0057D9"},roleTitle:{textTransform:"uppercase",fontWeight:"bold"},rightContent:{marginTop:"1rem"},inputWrapper:{width:"100px","&$scrollWrapper":{height:"200px",overflowY:"scroll"}},scrollWrapper:{},downloadWrapper:{marginTop:"3rem",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}})),je=Object(J.f)((function(){var e=le();return Object(g.jsxs)("div",{className:e.contentWrapper,children:[Object(g.jsxs)("div",{className:e.titleWrapper,children:[Object(g.jsx)("div",{children:Object(g.jsx)(Z.a,{fontSize:"large"})}),Object(g.jsx)("h1",{children:"RESUME"})]}),Object(g.jsx)("div",{className:e.content,children:Object(g.jsxs)(K.a,{container:!0,children:[Object(g.jsxs)(K.a,{item:!0,xs:6,children:[Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(re.a,{children:[Object(g.jsxs)(se,{children:[Object(g.jsx)(ae.a,{children:Object(g.jsx)(ie.a,{className:e.iconSection,children:Object(g.jsx)(te.a,{fontSize:"large"})})}),Object(g.jsx)(ce.a,{children:Object(g.jsx)(f.a,{className:e.title,variant:"h5",component:"h1",children:"CODE HISTORY"})})]}),Object(g.jsxs)("div",{className:e.timelineContent,children:[Object(g.jsxs)(se,{children:[Object(g.jsxs)(ae.a,{children:[Object(g.jsx)(ie.a,{className:e.timelineDotCurrent}),Object(g.jsx)(oe.a,{className:e.timelineConnector})]}),Object(g.jsxs)(ce.a,{children:[Object(g.jsx)("div",{className:e.event,children:Object(g.jsx)("h3",{children:"Nov 2020 - current"})}),Object(g.jsx)(f.a,{className:e.roleTitle,children:"software engineer"}),Object(g.jsx)("div",{children:" ZMP VN Inc."}),Object(g.jsxs)(Q.a,{elevation:4,className:e.paperContent,children:[Object(g.jsx)("div",{className:e.projectTitle,children:" ForkApp - 95%"}),Object(g.jsx)("p",{children:" - A flutter app communicates with Redis Server to command fork lift robots."}),Object(g.jsx)("div",{className:e.projectTitle,children:" Deep learning project - 70%"}),Object(g.jsx)("div",{children:" - 3D Object Detection using point clouds."}),Object(g.jsx)("div",{children:" - Modify existing repository for the project's use case and provide a solution for real time processing."}),Object(g.jsx)("div",{className:e.projectTitle,children:" Zimulator - 30%"}),Object(g.jsx)("p",{children:"- A Reactjs project to simulate XML structure as a config for Gazebo simulator, written in Typescript."}),Object(g.jsx)("div",{className:e.projectTitle,children:" Other side projects"}),Object(g.jsx)("div",{className:e.projectSubTitle,children:"ZMapEditor - Reactjs - 5%"}),Object(g.jsx)("span",{children:" - Using Geojson and Nebula.gl to implement some custom features to draw traffic map."}),Object(g.jsx)("div",{className:e.projectSubTitle,children:"Taisei project - Reactjs - 1%"}),Object(g.jsx)("span",{children:" - Create a chat room for different company roles to communicate with each other to register robot."})]})]})]}),Object(g.jsxs)(se,{children:[Object(g.jsxs)(ae.a,{children:[Object(g.jsx)(ie.a,{className:e.timelineDot}),Object(g.jsx)(oe.a,{className:e.timelineConnector})]}),Object(g.jsxs)(ce.a,{children:[Object(g.jsx)("div",{className:e.event,children:Object(g.jsx)("h3",{children:"June 2018 - April 2019"})}),Object(g.jsx)(f.a,{className:e.roleTitle,children:" R&D DEVELOPER "}),Object(g.jsx)("div",{children:" BeeSight Soft Inc."}),Object(g.jsxs)(Q.a,{elevation:4,className:e.paperContent,children:[Object(g.jsx)("div",{className:e.projectTitle,children:"Projects about face detections and recognitions - 95%"}),Object(g.jsx)("div",{children:"- Create a machine learning game by merging jsTensorflow and Unity Game 2D using WebSocket."}),Object(g.jsx)("div",{children:"- Implement face recognition on a Raspberry Pi 3.0."}),Object(g.jsx)("div",{children:"- Work with Unity and Android to create a Snapchat-lookalike project."})]})]})]})]})]})}),Object(g.jsxs)(re.a,{children:[Object(g.jsxs)(se,{children:[Object(g.jsx)(ae.a,{children:Object(g.jsx)(ie.a,{className:e.iconSection,children:Object(g.jsx)(te.a,{fontSize:"large"})})}),Object(g.jsx)(ce.a,{children:Object(g.jsx)(f.a,{className:e.title,variant:"h5",component:"h1",children:"Education history"})})]}),Object(g.jsx)("div",{className:e.timelineContent,children:Object(g.jsxs)(se,{children:[Object(g.jsxs)(ae.a,{children:[Object(g.jsx)(ie.a,{className:e.timelineDot}),Object(g.jsx)(oe.a,{className:e.timelineConnector})]}),Object(g.jsxs)(ce.a,{children:[Object(g.jsx)("div",{className:e.event,children:Object(g.jsx)("h3",{children:"June 2018 - April 2019"})}),Object(g.jsx)(f.a,{className:e.roleTitle,children:" Computer science student"}),Object(g.jsx)("div",{children:"HCMUS-University of science"}),Object(g.jsxs)(Q.a,{className:e.paperContent,children:[Object(g.jsx)("div",{className:e.projectTitle,children:" Bachelor of Computer Science, 2019"}),Object(g.jsx)("div",{children:" - Graduated with GPA 8.89"}),Object(g.jsx)("div",{children:" - Student of Advanced Program in Computer Science"}),Object(g.jsx)("div",{children:" - IELTS band 6.5"})]})]})]})})]})]}),Object(g.jsx)(K.a,{item:!0,xs:6,children:Object(g.jsxs)("div",{className:e.rightContent,children:[Object(g.jsx)(f.a,{variant:"h5",component:"h1",gutterBottom:!0,className:e.title,style:{marginTop:"5.3em"},children:"Areas of Expertise"}),Object(g.jsx)(Q.a,{className:e.paperContent,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:" Flutter"}),Object(g.jsx)("li",{children:" ReactJS written in TypeScript"}),Object(g.jsx)("li",{children:" Javascript, C++, and Python experience"}),Object(g.jsx)("li",{children:" NodeJS back-end (Auth and Restfull API)"}),Object(g.jsx)("li",{children:" HTML, CSS"})]})}),Object(g.jsx)(f.a,{variant:"h5",component:"h1",gutterBottom:!0,className:e.title,style:{marginTop:"2.5em"},children:"WORK SKILLS"}),Object(g.jsx)(Q.a,{className:e.paperContent,children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:" Have fundamental knowledge of Data Structures and Algorithms."}),Object(g.jsx)("li",{children:" Detail oriented, team player"}),Object(g.jsx)("li",{children:" Problem solver by presenting and understanding the flow of code."}),Object(g.jsx)("li",{children:" Tasks breakdown, product mindset"}),Object(g.jsx)("li",{children:" Strong self-learning ability but always eager to ask."})]})}),Object(g.jsx)("div",{className:e.downloadWrapper,children:Object(g.jsx)($.a,{href:"https://drive.google.com/uc?id=1_W-ZpzuJs2pVv9q8rfEX8SqVjhy-tSlM&export=download",download:"cv",variant:"contained",color:"primary",startIcon:Object(g.jsx)(Y.a,{}),children:"Download CV"})})]})})]})})]})})),de=n(386),pe=n(385),be=n(379),he=n(16),me=n.n(he),xe=n(29),ue=n(80),Oe=n(33),fe=n(173),ge=function(e){var t=e.sendEmail,n=Object(a.useMemo)((function(){return ue.a({name:ue.b().required("Name is required").default(""),email:ue.b().email().required("Email is required").default(""),message:ue.b().required("Message is required").default("")})}),[]),r=Object(Oe.e)({resolver:Object(fe.a)(n),defaultValues:n.cast({})}),i=r.handleSubmit,c=r.formState;return{control:r.control,onSubmit:i(Object(a.useCallback)(function(){var e=Object(xe.a)(me.a.mark((function e(n){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[])),formState:c}},ve=n(374),we=n(396),ye=n(19),Ne=n(392),Ce=n(170),Se=n(372),ke=Object(P.a)((function(e){return{root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"#fcfcfc",transition:e.transitions.create(["border-color","box-shadow"]),marginBottom:e.spacing(1),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat(Object(ye.c)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},error_message:{color:"#F20505"}}})),_e=function(e){var t=ke();return Object(g.jsxs)("div",{children:[Object(g.jsx)(Oe.a,{name:e.name,control:e.control,defaultValue:e.defaultValue||"",render:function(n){var r=n.field,a=r.onChange,i=r.onBlur,c=r.value;return Object(g.jsx)(Ne.a,{onChange:a,onBlur:i,value:c,label:e.label,multiline:e.multiline,fullWidth:!0,variant:"filled",rows:e.rows,InputProps:{classes:{root:t.root},disableUnderline:!0}})}}),Object(g.jsx)("div",{className:t.error_message,children:null!=e.errors[e.name]?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Se.a,{fontSize:"small"}),Object(g.jsx)(Ce.a,{errors:e.errors,name:e.name})]}):Object(g.jsx)(g.Fragment,{})})]})},Te=n(373),We=n(102),Be=n(123),De=n.n(Be),Pe=n(393),Ae=function(e){return Object(g.jsx)(Pe.a,Object(A.a)({elevation:6,variant:"filled"},e))},Re=Object(P.a)((function(e){return{buttonWrapper:{margin:e.spacing(1),display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",position:"relative"},sendButton:{boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",color:"white"},paper:{padding:e.spacing(1)},buttonProgress:{color:We.a[500],position:"absolute",top:"50%",right:"50%",marginTop:-12,marginLeft:-12}}})),Ie=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useRef)(),c=Object(a.useState)(!1),o=Object(b.a)(c,2),s=o[0],l=o[1],j=Object(a.useState)(!1),d=Object(b.a)(j,2),p=d[0],h=d[1];Object(a.useEffect)((function(){return function(){i.current&&clearTimeout(i.current)}}),[]);var m=ge({sendEmail:function(){var e=Object(xe.a)(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),r(!0),De.a.init("user_Tyqvr5ZSCefJW9q69Y1SO"),e.prev=3,e.next=6,De.a.send("service_jjcha0p","template_eco4z1r",t);case 6:e.sent,l(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),h(!0),console.log(e.t0.text);case 14:r(!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}),x=m.control,u=m.onSubmit,O=m.formState,f=Re(),v=function(){s&&l(!1),p&&h(!1)};return Object(g.jsxs)("div",{children:[Object(g.jsx)("form",{onSubmit:u,name:"send",children:Object(g.jsxs)(Q.a,{elevation:4,className:f.paper,children:[Object(g.jsx)(_e,{control:x,name:"name",label:"Name",errors:O.errors}),Object(g.jsx)(_e,{control:x,name:"email",label:"Email",errors:O.errors}),Object(g.jsx)(_e,{control:x,name:"message",label:"Message",multiline:!0,errors:O.errors,rows:5}),Object(g.jsxs)("div",{className:f.buttonWrapper,children:[Object(g.jsx)($.a,{className:f.sendButton,type:"submit",size:"large",name:"send",variant:"contained",disabled:n,endIcon:Object(g.jsx)(Te.a,{}),children:"Send"}),n&&Object(g.jsx)(ve.a,{size:20,className:f.buttonProgress})]})]})}),Object(g.jsx)(we.a,{open:s,autoHideDuration:6e3,onClose:v,children:Object(g.jsx)(Ae,{severity:"success",onClose:v,children:"Email sent successfully!"})}),Object(g.jsx)(we.a,{open:p,autoHideDuration:6e3,onClose:v,children:Object(g.jsx)(Ae,{severity:"error",onClose:v,children:"Failed to send email!"})})]})},ze=n(375),Ee=n(376),Fe=n(377),Le=n(378),Me=C()((function(e){return{link_wrapper:{display:"contents"},links_container:{height:"20vh",marginTop:e.spacing(3),display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},icon:{marginRight:e.spacing(2)}}})),He=function(){var e=Me();return Object(g.jsx)("div",{className:e.link_wrapper,children:Object(g.jsxs)(Q.a,{className:e.links_container,elevation:4,children:[Object(g.jsx)("a",{href:"https://github.com/ltphy",target:"_blank",children:Object(g.jsx)(x.a,{size:"medium",className:e.icon,children:Object(g.jsx)(ze.a,{})})}),Object(g.jsx)("a",{href:"https://www.facebook.com/the.phy.9",target:"_blank",children:Object(g.jsx)(x.a,{size:"medium",className:e.icon,children:Object(g.jsx)(Ee.a,{})})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/phy-lieng-7872a910b/",target:"_blank",children:Object(g.jsx)(x.a,{size:"medium",className:e.icon,children:Object(g.jsx)(Fe.a,{})})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/phy-lieng-7872a910b/",target:"_blank",children:Object(g.jsx)(x.a,{size:"medium",className:e.icon,children:Object(g.jsx)(Le.a,{})})}),Object(g.jsx)("a",{href:"https://medium.com/@phylieng97",target:"_blank",children:Object(g.jsx)(x.a,{children:Object(g.jsx)("i",{className:"fab fa-medium"})})})]})})},Ve=C()((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"& b":{color:e.palette.text.primary}},contactForm:{marginTop:"2rem"},contentWrapper:{padding:"80px"},title:{fontWeight:"bold"},titleWrapper:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&:not(:first-child)":{marginBottom:"12px",padding:"5px 8px"}}}}})),qe=Object(J.f)((function(){V();var e=Ve();return Object(g.jsxs)("div",{className:e.contentWrapper,children:[Object(g.jsxs)("div",{className:e.titleWrapper,children:[Object(g.jsx)("div",{children:Object(g.jsx)(be.a,{fontSize:"large"})}),Object(g.jsx)("h1",{className:e.title,children:" Get in Touch"})]}),Object(g.jsx)("h3",{className:e.title,children:"Contact me"}),Object(g.jsxs)(K.a,{container:!0,spacing:4,children:[Object(g.jsx)(K.a,{item:!0,xs:4,children:Object(g.jsxs)(Q.a,{className:e.paper,children:[Object(g.jsx)("b",{children:"Email"}),Object(g.jsx)("div",{children:"phylieng97@gmail.com"})]})}),Object(g.jsx)(K.a,{item:!0,xs:4,children:Object(g.jsxs)(Q.a,{className:e.paper,children:[Object(g.jsx)("b",{children:"Phone"}),Object(g.jsx)("div",{children:"Not available"})]})}),Object(g.jsx)(K.a,{item:!0,xs:4,children:Object(g.jsxs)(Q.a,{className:e.paper,children:[Object(g.jsx)("b",{children:" Freelance"}),Object(g.jsx)("div",{children:"Not available"})]})})]}),Object(g.jsxs)("div",{className:e.contactForm,children:[Object(g.jsx)("h3",{className:e.title,children:"Send me message"}),Object(g.jsx)(Ie,{})]}),Object(g.jsx)(He,{}),Object(g.jsx)("div",{})]})}));!function(e){e.All="All",e.Mobile="Mobile App",e.Web="Web App",e.DeepLearning="Deep Learning"}(r||(r={}));var Ge=n.p+"static/media/portfolio.c997a45a.gif",Je=n.p+"static/media/deeplearning_contribute.73e4cc8b.png",Ue=n.p+"static/media/game.2416bb55.gif",Ye=[{title:"My Portfolio",subTitle:"Portfolio website to track my working progress.",image:Ge,category:r.Web,url:"https://ltphy.github.io/my-portfolio"},{title:"OpenPCDet",subTitle:"Contribute to an open-source research project.",image:Je,category:r.DeepLearning,url:"https://github.com/open-mmlab/OpenPCDet"},{title:"Garbage Collector",subTitle:"A AI Game using Teachable Machine and Unity.",image:Ue,category:r.All,url:"https://medium.com/@phylieng97/create-machine-learning-game-by-joining-jstensorflow-and-unity-together-using-websocket-ca00982bca46"}],Ze=n(380),Xe=n(381),$e=n(382),Ke=n(383),Qe=n(59),et=Object(P.a)({card:{width:"400px"},imageContent:{height:"300px"}}),tt=function(e){var t=e.portfolio,n=t.title,r=t.subTitle,a=t.image,i=(t.category,t.url),c=et();return Object(g.jsx)(Qe.b,{to:{pathname:i},target:"_blank",children:Object(g.jsx)(Ze.a,{className:c.card,onMouseOver:function(e){},elevation:3,children:Object(g.jsxs)(Xe.a,{children:[Object(g.jsx)($e.a,{className:c.imageContent,title:n,image:a}),Object(g.jsxs)(Ke.a,{children:[Object(g.jsx)(f.a,{gutterBottom:!0,variant:"h5",component:"h5",children:n}),Object(g.jsx)(f.a,{variant:"body1",color:"textSecondary",component:"p",children:r})]})]})})})},nt=n(384),rt=n(397),at=(n(323),C()((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"& b":{color:e.palette.text.primary}},contactForm:{marginTop:"2rem"},contentWrapper:{padding:"80px"},title:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&:not(:first-child)":{marginBottom:"12px",padding:"5px 8px"}}},filterPortfolio:{margin:"20px 10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},portfolioContainer:{width:"80%",margin:"8em auto",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",flexWrap:"wrap","&.empty":{height:"100vh",alignItems:"flex-start"}},itemWrapper:{padding:"1%"},buttonFilter:{"&:focus":{borderColor:"transparent"}}}}))),it=function(){var e=at(),t=Object(a.useState)(Ye),n=Object(b.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(r.All),s=Object(b.a)(o,2),l=s[0],j=s[1];return Object(g.jsxs)("div",{className:e.contentWrapper,children:[Object(g.jsxs)("div",{className:e.title,children:[Object(g.jsx)("div",{children:Object(g.jsx)(pe.a,{fontSize:"large"})}),Object(g.jsx)("h1",{children:"Portfolio"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:e.filterPortfolio,children:Object.values(r).map((function(t){return Object(g.jsx)($.a,{variant:l===t?"contained":"text",color:"primary",className:e.buttonFilter,onClick:function(){return function(e){if(j(e),e!==r.All){var t=Ye.filter((function(t){return t.category===e}));c(t)}else c(Ye)}(t)},children:t},t)}))}),Object(g.jsx)(rt.a,{className:"".concat(e.portfolioContainer," ").concat(0===i.length?"empty":""),children:i.map((function(t,n){return Object(g.jsx)(nt.a,{classNames:"portfolio",timeout:300,children:Object(g.jsx)("div",{className:e.itemWrapper,children:Object(g.jsx)(tt,{portfolio:t})})},t.title)}))})]})]})},ct="/my-portfolio",ot=[{component:U,iconRender:function(){return Object(g.jsx)(de.a,{})},isPrivate:!1,title:"HOME",showHeaderNavBar:!0,path:"".concat(ct,"/"),exact:!0},{component:je,iconRender:function(){return Object(g.jsx)(Z.a,{})},isPrivate:!1,title:"ABOUT",showHeaderNavBar:!0,path:"".concat(ct,"/about"),exact:!0},{component:it,iconRender:function(){return Object(g.jsx)(pe.a,{})},isPrivate:!1,title:"PORTFOLIO",showHeaderNavBar:!0,path:"".concat(ct,"/portfolio"),exact:!0},{component:qe,iconRender:function(){return Object(g.jsx)(be.a,{})},isPrivate:!1,title:"CONTACT",showHeaderNavBar:!0,path:"".concat(ct,"/contact"),exact:!0}],st=n(388),lt=n(389),jt=n(387),dt=function(e){var t=e.route,n=t.path,r=t.iconRender,i=t.title,c=Object(a.useMemo)((function(){return Object(a.forwardRef)((function(e,t){return Object(g.jsx)(Qe.b,Object(A.a)({to:{pathname:n},ref:t},e))}))}),[n]);return Object(g.jsxs)(jt.a,{button:!0,component:c,children:[Object(g.jsxs)(st.a,{children:[" ",r()]}),Object(g.jsx)(lt.a,{primary:i})]})},pt=C()((function(e){var t;return{drawer:{width:k,flexShrink:0,whiteSpace:"nowrap"},drawerPaper:{width:k},drawerHeader:Object(A.a)(Object(A.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerOpen:{width:k,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:(t={transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)+1},Object(p.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)+1}),Object(p.a)(t,"overflowX","hidden"),t),toolbar:Object(A.a)({display:"flex",justifyContent:"flex-end",alignContent:"center",padding:e.spacing(1,1)},e.mixins.toolbar)}})),bt=function(){var e,t,n=pt(),r=y();return Object(g.jsxs)(R.a,{className:Object(S.a)(n.drawer,(e={},Object(p.a)(e,n.drawerOpen,r.open),Object(p.a)(e,n.drawerClose,!r.open),e)),classes:{paper:Object(S.a)((t={},Object(p.a)(t,n.drawerOpen,r.open),Object(p.a)(t,n.drawerClose,!r.open),t))},open:r.open,variant:"permanent",anchor:"left",children:[Object(g.jsx)("div",{className:n.toolbar,children:Object(g.jsx)(x.a,{onClick:function(){r.toggleOpen(!1)},children:Object(g.jsx)(I.a,{})})}),Object(g.jsx)(E.a,{children:ot.map((function(e,t){return Object(g.jsxs)(g.Fragment,{children:[" ",Object(g.jsx)(dt,{route:e},e.title),Object(g.jsx)(z.a,{})]})}))})]})},ht=n(172),mt=n.n(ht),xt=Object(P.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",color:"white",height:"100%"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),ut=function(e){var t=Object(a.useState)({hashName:""}),n=Object(b.a)(t,2),r=n[0],i=(n[1],y()),c=xt();return Object(g.jsxs)("div",{className:mt.a.root,children:[Object(g.jsx)(T,{}),Object(g.jsx)(bt,{}),Object(g.jsx)(D,{hashValue:r,children:Object(g.jsx)("main",{className:Object(S.a)(c.content,Object(p.a)({},c.contentShift,i.open)),children:e.children})})]})},Ot=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(s.a)(this,n),(r=t.call(this,e)).RenderMainRoute=function(){return Object(g.jsx)(J.c,{children:ot.map((function(e,t){return Object(g.jsx)(J.a,{path:e.path,exact:e.exact,render:function(){return Object(g.jsx)(e.component,{})}},e.title)}))})};return r.state={open:!1,toggleOpen:function(e){r.setState({open:e})}},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)(Qe.a,{children:Object(g.jsx)(w,{drawerToggle:this.state,children:Object(g.jsx)(ut,{children:Object(g.jsx)(this.RenderMainRoute,{})})})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(324);o.a.render(Object(g.jsx)(Ot,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},71:function(e,t,n){e.exports={my_img:"styles_my_img__2IK6f",title_content:"styles_title_content__1VrjM",layout_content:"styles_layout_content__2CmHI",typewrapper:"styles_typewrapper__2CFXV",page_title:"styles_page_title__1fZpc",typewriter2:"styles_typewriter2__2gB0V",blink:"styles_blink__2l_rI",typewriter:"styles_typewriter__FEhP2",typing:"styles_typing__AeMIY","blink-caret":"styles_blink-caret__O1hsh"}}},[[325,1,2]]]);
//# sourceMappingURL=main.a4fd7232.chunk.js.map