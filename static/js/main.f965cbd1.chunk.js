(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{121:function(e,t,n){e.exports={project_title:"styles_project_title__34mpZ",project_sub_title:"styles_project_sub_title__1wYTx"}},170:function(e,t,n){e.exports={root:"styles_root__BDjbF"}},189:function(e,t,n){},190:function(e,t,n){},321:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),c=n(15),o=n.n(c),s=(n(189),n(13)),l=n(10),j=n(25),d=n(26),p=(n(190),n(9)),b=n(14),u=n(351),h=n(352),m=n(353),x=n(164),f=n.n(x),g=n(103),O=n(2),v=i.a.createContext({open:!1,toggleOpen:function(e){}}),w=function(e){return Object(O.jsx)(v.Provider,{value:e.drawerToggle,children:e.children})},y=function(){return Object(a.useContext)(v)},C=n(31),N=n.n(C),_=n(4),S=240,k=N()((function(e){return{menuButton:{marginRight:e.spacing(2),color:"#000000"},hide:{display:"none"},appBar:{backgroundColor:"#ffffff",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(S,"px)"),marginLeft:S,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},headerTitle:{marginLeft:"auto",marginRight:"auto",fontWeight:900,color:"#000000"}}})),T=function(e){var t=y(),n=k();return Object(O.jsx)(u.a,{position:"fixed",className:Object(_.a)(n.appBar,Object(p.a)({},n.appBarShift,t.open)),children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){console.log("onCLick",t.open),console.log("function",t.toggleOpen),t.toggleOpen(!t.open)},edge:"start",className:Object(_.a)(n.menuButton,t.open&&n.hide),children:Object(O.jsx)(f.a,{})}),Object(O.jsx)(g.a,{variant:"h5",noWrap:!0,className:n.headerTitle,children:"Lieng The Phy"})]})})},W={hashName:""},D=i.a.createContext(W),B=function(e){return Object(O.jsx)(D.Provider,{value:e.hashValue,children:e.children})},I=n(364),R=n(55),P=n(390),A=n(384),E=n(385),z=n(366),F={navBar:{backgroundColor:"#fff",color:"#000",transition:"all 0.25s linear",fontSize:"30rem"},content:{fontSize:"16px",backgroundColor:"#fff",color:"#000",fontFamily:"Roboto, sans-serif"},toggleButton:{toggleBorder:"black",gradient:"#fff",switchColor:"#000",transformLight:"translateY(0)",transformDark:"translateY(-100px)"},title:{}},M=i.a.createContext(F),L=["a software engineer","a writer","a knowledge seeker","a fitness freak","a manga lover"],H=n(34),U=n(62),G=n.n(U),V=n.p+"static/media/deeplearning_contribute.73e4cc8b.png",q=n.p+"static/media/game.2416bb55.gif",J=n.p+"static/media/phy.4a466dcc.jpg",K=n.p+"static/media/portfolio.c997a45a.gif",Y=[n.p+"static/media/phy_3.eb07d8b5.jpg",J,n.p+"static/media/IMG_20220724_203126.6be16951.jpg",n.p+"static/media/IMG_1658483535767_1658496775967.a661ca65.jpg"],Z=Object(H.f)((function(){var e=Object(a.useState)(0),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useContext)(M),c=[],o=Object(a.useRef)(null);Object(a.useEffect)((function(){return o.current&&(clearTimeout(o.current),o.current=null),o.current=setTimeout((function(){r((n+1)%Y.length)}),5e3),function(){o.current&&clearTimeout(o.current)}}),[n]),Object(a.useEffect)((function(){return p(L[0],L),function(){d(""),c.forEach((function(e){return clearTimeout(e)})),o.current&&(clearTimeout(o.current),o.current=null)}}),[]);var s=Object(a.useState)(""),l=Object(b.a)(s,2),j=l[0],d=l[1],p=function e(t,n){if(0===t.length)d(""),0===(n=n.slice(1)).length&&(n=L),e(n[0],n);else{d((function(e){return e+t[0]}));var r=setTimeout((function(){return e(t.slice(1),n)}),150);c.push(r)}};return Object(O.jsx)("div",{style:i.content,children:Object(O.jsxs)("div",{className:G.a.container,children:[Object(O.jsx)("img",{src:Y[n],className:G.a.my_img}),Object(O.jsx)("div",{className:G.a.title_content,children:Object(O.jsxs)("div",{className:G.a.layout_content,children:[Object(O.jsx)("h4",{children:"Hi, I am"}),Object(O.jsx)("h2",{className:G.a.page_title,children:"Lieng The Phy"}),Object(O.jsxs)("h4",{children:["I am "," ",Object(O.jsx)("strong",{className:G.a.typewriter2,children:j})]})]})})]})})})),$=n(360),X=n(363),Q=n(6),ee=n(361),te=n(362),ne=n(173),re=n(122),ae=n.n(re),ie=n(354),ce=n(355),oe=n(356),se=n(357),le=n(358),je=n(359),de=n(121),pe=n.n(de),be=function(e){var t=e.projectContent,n=e.projectSubContents,r=function(e){return"string"===typeof e?Object(O.jsx)("p",{children:e}):Object(O.jsx)("div",{children:e.map((function(e){return Object(O.jsxs)("div",{children:["- ",e]},e)}))})};return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:pe.a.project_title,children:t.title}),r(t.content),n&&n.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:pe.a.project_sub_title,children:e.title}),r(e.content)]},e.title)}))]})},ue=Object(Q.a)({missingOppositeContent:{"&:before":{display:"none"}}})(ie.a),he=N()((function(e){return{contentWrapper:{padding:"80px"},titleWrapper:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&:not(:first-child)":{marginBottom:"12px",padding:"5px 8px",width:"20%",margin:"auto"}}},title:{fontWeight:"bold",textTransform:"uppercase",marginBottom:"12px"},content:{alignItems:"center",display:"flex",flexDirection:"row"},paper:{padding:e.spacing(1)},timelineDot:{color:"white",background:"white"},timelineDotCurrent:{background:"#0057D9"},timelineConnector:{color:"white",background:"white"},timelineContent:{marginLeft:"10px"},event:{position:"relative","& h3":{color:"#fff",padding:"3px 8px",marginBottom:"1.5em",background:"#0057D9",width:"max-content",fontSize:"14px",marginLeft:"30px",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)","&::before":{content:'""',bottom:"0",position:"absolute",border:"11px solid #0057D9!important",borderLeftColor:"transparent !important",display:"block",marginLeft:"-35px"}}},centerText:{display:"flex",justifyContent:"center"},projectSubTitle:{fontWeight:700,color:"#0057D9",opacity:.8,fontSize:"14px",marginBottom:"5px"},paperContent:{padding:"8px 12px",margin:"8px 0",fontSize:"14px","& div":{"&$projectTitle":{fontSize:"15px",fontWeight:700,color:"#0057D9"}}},projectTitle:{},iconSection:{backgroundColor:"#0057D9"},roleTitle:{textTransform:"uppercase",fontWeight:"bold"},rightContent:{marginTop:"1rem"},inputWrapper:{width:"100px","&$scrollWrapper":{height:"200px",overflowY:"scroll"}},scrollWrapper:{},downloadWrapper:{position:"fixed",bottom:10,left:"50%",transform:"translate(-50%, 0)"},faceCenter:{borderRadius:"15px",width:"100%",height:"100px",border:"1rem #ffff00 thick"}}})),me=Object(H.f)((function(){var e=he();return Object(O.jsxs)("div",{className:e.contentWrapper,children:[Object(O.jsxs)("div",{className:e.titleWrapper,children:[Object(O.jsx)("div",{children:Object(O.jsx)($.a,{fontSize:"large"})}),Object(O.jsx)("h1",{children:"RESUME"})]}),Object(O.jsx)("div",{className:e.content,children:Object(O.jsxs)(ee.a,{container:!0,children:[Object(O.jsxs)(ee.a,{item:!0,xs:6,children:[Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(ce.a,{children:[Object(O.jsxs)(ue,{children:[Object(O.jsx)(oe.a,{children:Object(O.jsx)(se.a,{className:e.iconSection,children:Object(O.jsx)(ae.a,{fontSize:"large"})})}),Object(O.jsx)(le.a,{children:Object(O.jsx)(g.a,{className:e.title,variant:"h5",component:"h1",children:"CODE HISTORY"})})]}),Object(O.jsxs)("div",{className:e.timelineContent,children:[Object(O.jsxs)(ue,{children:[Object(O.jsxs)(oe.a,{children:[Object(O.jsx)(se.a,{className:e.timelineDotCurrent}),Object(O.jsx)(je.a,{className:e.timelineConnector})]}),Object(O.jsxs)(le.a,{children:[Object(O.jsx)("div",{className:e.event,children:Object(O.jsx)("h3",{children:"Nov 2020 - current"})}),Object(O.jsx)(g.a,{className:e.roleTitle,children:"software engineer"}),Object(O.jsx)("div",{children:" ZMP VN Inc."}),Object(O.jsxs)(ne.a,{elevation:4,className:e.paperContent,children:[Object(O.jsx)(be,{projectContent:{title:"Rakuro - 80%",content:"- Work as a full stack developer to create a booking robot application"},projectSubContents:[{title:"Frontend: ReactJS",content:["Easy-peasy store state management","Antd form design with search, and filtering features"]},{title:"Mobile: React Native",content:["React navigation","Implement UI for both Android and iOS","Handle state with Observable store"]},{title:"Backend: Restful API, PostgreSQL",content:["Server using Nodejs with Express","Implement UI for both Android and iOS","Handle state with Observable store"]}]}),Object(O.jsx)(be,{projectContent:{title:"ForkApp - 100%",content:["A flutter app communicates with Redis Server to command fork lift robots."]}}),Object(O.jsx)(be,{projectContent:{title:"Deep learning project - 70%",content:["3D Object Detection using point clouds.","Modify existing repository for the project's use case and provide a solution\n                                    for real time processing."]}}),Object(O.jsx)(be,{projectContent:{title:"Other side projects",content:""},projectSubContents:[{title:"ZMapEditor - Reactjs - 5%",content:" - Using Geojson and Nebula.gl to implement some custom features to draw traffic map."},{title:"Taisei project - Reactjs - 1%",content:" - Create a chat room for different company roles to communicate with each other to register robot."}]})]})]})]}),Object(O.jsxs)(ue,{children:[Object(O.jsxs)(oe.a,{children:[Object(O.jsx)(se.a,{className:e.timelineDot}),Object(O.jsx)(je.a,{className:e.timelineConnector})]}),Object(O.jsxs)(le.a,{children:[Object(O.jsx)("div",{className:e.event,children:Object(O.jsx)("h3",{children:"June 2018 - April 2019"})}),Object(O.jsx)(g.a,{className:e.roleTitle,children:" R&D DEVELOPER "}),Object(O.jsx)("div",{children:" BeeSight Soft Inc."}),Object(O.jsx)(ne.a,{elevation:4,className:e.paperContent,children:Object(O.jsx)(be,{projectContent:{title:"Projects about face detections and recognitions - 95%",content:["3D Object Detection using point clouds.","Modify existing repository for the project's use case and provide a solution for real time processing.","Create a machine learning game by merging jsTensorflow and Unity Game 2D using WebSocket.","Work with Unity and Android to create a Snapchat-lookalike project."]}})})]})]})]})]})}),Object(O.jsxs)(ce.a,{children:[Object(O.jsxs)(ue,{children:[Object(O.jsx)(oe.a,{children:Object(O.jsx)(se.a,{className:e.iconSection,children:Object(O.jsx)(ae.a,{fontSize:"large"})})}),Object(O.jsx)(le.a,{children:Object(O.jsx)(g.a,{className:e.title,variant:"h5",component:"h1",children:"Education history"})})]}),Object(O.jsx)("div",{className:e.timelineContent,children:Object(O.jsxs)(ue,{children:[Object(O.jsxs)(oe.a,{children:[Object(O.jsx)(se.a,{className:e.timelineDot}),Object(O.jsx)(je.a,{className:e.timelineConnector})]}),Object(O.jsxs)(le.a,{children:[Object(O.jsx)("div",{className:e.event,children:Object(O.jsx)("h3",{children:"June 2018 - April 2019"})}),Object(O.jsx)(g.a,{className:e.roleTitle,children:" Computer science student"}),Object(O.jsx)("div",{children:"HCMUS-University of science"}),Object(O.jsx)(ne.a,{className:e.paperContent,children:Object(O.jsx)(be,{projectContent:{title:"Bachelor of Computer Science, 2019",content:["Graduated with GPA 8.89"," Student of Advanced Program in Computer Science","IELTS band 6.5"]}})})]})]})})]})]}),Object(O.jsx)(ee.a,{item:!0,xs:6,children:Object(O.jsxs)("div",{className:e.rightContent,children:[Object(O.jsx)(g.a,{variant:"h5",component:"h1",gutterBottom:!0,className:e.title,style:{marginTop:"5.3em"},children:"Areas of Expertise"}),Object(O.jsx)(ne.a,{className:e.paperContent,children:Object(O.jsx)(be,{projectContent:{title:"",content:["Knowledge of Dart, Javascript, Typescript, CSS, HTML","knowledge of React.js","Knowledge of Flutter","Knowledge of React Native","C++, and Python experience","NodeJs - Express and Restful API"]}})}),Object(O.jsx)(g.a,{variant:"h5",component:"h1",gutterBottom:!0,className:e.title,style:{marginTop:"2.5em"},children:"WORK SKILLS"}),Object(O.jsx)(ne.a,{className:e.paperContent,children:Object(O.jsx)(be,{projectContent:{title:"",content:["Have knowledge of Data Structures and Algorithms.","Detail oriented, team player","Problem solver by presenting and understanding the flow of code.","Strong self-learning ability but always eager to ask."]}})})]})})]})}),Object(O.jsx)("div",{className:e.downloadWrapper,children:Object(O.jsx)(te.a,{href:"https://drive.google.com/uc?export=download&id=1yN512PI398ibuKf2xx_b3wgFKcGUEiIp",download:"cv",variant:"contained",color:"primary",size:"large",startIcon:Object(O.jsx)(X.a,{}),children:"Download CV"})})]})})),xe=n(380),fe=n(379),ge=n(374),Oe=n(16),ve=n.n(Oe),we=n(29),ye=n(80),Ce=n(33),Ne=n(171),_e=function(e){var t=e.sendEmail,n=Object(a.useMemo)((function(){return ye.a({name:ye.b().required("Name is required").default(""),email:ye.b().email().required("Email is required").default(""),message:ye.b().required("Message is required").default("")})}),[]),r=Object(Ce.e)({resolver:Object(Ne.a)(n),defaultValues:n.cast({})}),i=r.handleSubmit,c=r.formState;return{control:r.control,onSubmit:i(Object(a.useCallback)(function(){var e=Object(we.a)(ve.a.mark((function e(n){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[])),formState:c}},Se=n(369),ke=n(391),Te=n(19),We=n(386),De=n(169),Be=n(367),Ie=Object(I.a)((function(e){return{root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"#fcfcfc",transition:e.transitions.create(["border-color","box-shadow"]),marginBottom:e.spacing(1),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat(Object(Te.c)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},error_message:{color:"#F20505"}}})),Re=function(e){var t=Ie();return Object(O.jsxs)("div",{children:[Object(O.jsx)(Ce.a,{name:e.name,control:e.control,defaultValue:e.defaultValue||"",render:function(n){var r=n.field,a=r.onChange,i=r.onBlur,c=r.value;return Object(O.jsx)(We.a,{onChange:a,onBlur:i,value:c,label:e.label,multiline:e.multiline,fullWidth:!0,variant:"filled",rows:e.rows,InputProps:{classes:{root:t.root},disableUnderline:!0}})}}),Object(O.jsx)("div",{className:t.error_message,children:null!=e.errors[e.name]?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Be.a,{fontSize:"small"}),Object(O.jsx)(De.a,{errors:e.errors,name:e.name})]}):Object(O.jsx)(O.Fragment,{})})]})},Pe=n(368),Ae=n(102),Ee=n(124),ze=n.n(Ee),Fe=n(387),Me=function(e){return Object(O.jsx)(Fe.a,Object(R.a)({elevation:6,variant:"filled"},e))},Le=Object(I.a)((function(e){return{buttonWrapper:{margin:e.spacing(1),display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"center",position:"relative"},sendButton:{boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",color:"white"},paper:{padding:e.spacing(1)},buttonProgress:{color:Ae.a[500],position:"absolute",top:"50%",right:"50%",marginTop:-12,marginLeft:-12}}})),He=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(a.useRef)(),c=Object(a.useState)(!1),o=Object(b.a)(c,2),s=o[0],l=o[1],j=Object(a.useState)(!1),d=Object(b.a)(j,2),p=d[0],u=d[1];Object(a.useEffect)((function(){return function(){i.current&&clearTimeout(i.current)}}),[]);var h=_e({sendEmail:function(){var e=Object(we.a)(ve.a.mark((function e(t){return ve.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),r(!0),ze.a.init("user_Tyqvr5ZSCefJW9q69Y1SO"),e.prev=3,e.next=6,ze.a.send("service_jjcha0p","template_eco4z1r",t);case 6:e.sent,l(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),u(!0),console.log(e.t0.text);case 14:r(!1);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}),m=h.control,x=h.onSubmit,f=h.formState,g=Le(),v=function(){s&&l(!1),p&&u(!1)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("form",{onSubmit:x,name:"send",children:Object(O.jsxs)(ne.a,{elevation:4,className:g.paper,children:[Object(O.jsx)(Re,{control:m,name:"name",label:"Name",errors:f.errors}),Object(O.jsx)(Re,{control:m,name:"email",label:"Email",errors:f.errors}),Object(O.jsx)(Re,{control:m,name:"message",label:"Message",multiline:!0,errors:f.errors,rows:5}),Object(O.jsxs)("div",{className:g.buttonWrapper,children:[Object(O.jsx)(te.a,{className:g.sendButton,type:"submit",size:"large",name:"send",variant:"contained",disabled:n,endIcon:Object(O.jsx)(Pe.a,{}),children:"Send"}),n&&Object(O.jsx)(Se.a,{size:20,className:g.buttonProgress})]})]})}),Object(O.jsx)(ke.a,{open:s,autoHideDuration:6e3,onClose:v,children:Object(O.jsx)(Me,{severity:"success",onClose:v,children:"Email sent successfully!"})}),Object(O.jsx)(ke.a,{open:p,autoHideDuration:6e3,onClose:v,children:Object(O.jsx)(Me,{severity:"error",onClose:v,children:"Failed to send email!"})})]})},Ue=n(370),Ge=n(371),Ve=n(372),qe=n(373),Je=N()((function(e){return{link_wrapper:{display:"contents"},links_container:{height:"20vh",marginTop:e.spacing(3),display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},icon:{marginRight:e.spacing(2)}}})),Ke=function(){var e=Je();return Object(O.jsx)("div",{className:e.link_wrapper,children:Object(O.jsxs)(ne.a,{className:e.links_container,elevation:4,children:[Object(O.jsx)("a",{href:"https://github.com/ltphy",target:"_blank",children:Object(O.jsx)(m.a,{size:"medium",className:e.icon,children:Object(O.jsx)(Ue.a,{})})}),Object(O.jsx)("a",{href:"https://www.facebook.com/the.phy.9",target:"_blank",children:Object(O.jsx)(m.a,{size:"medium",className:e.icon,children:Object(O.jsx)(Ge.a,{})})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/phy-lieng-7872a910b/",target:"_blank",children:Object(O.jsx)(m.a,{size:"medium",className:e.icon,children:Object(O.jsx)(Ve.a,{})})}),Object(O.jsx)("a",{href:"https://www.linkedin.com/in/phy-lieng-7872a910b/",target:"_blank",children:Object(O.jsx)(m.a,{size:"medium",className:e.icon,children:Object(O.jsx)(qe.a,{})})}),Object(O.jsx)("a",{href:"https://medium.com/@phylieng97",target:"_blank",children:Object(O.jsx)(m.a,{children:Object(O.jsx)("i",{className:"fab fa-medium"})})})]})})},Ye=N()((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"& b":{color:e.palette.text.primary}},contactForm:{marginTop:"2rem"},contentWrapper:{padding:"80px"},title:{fontWeight:"bold"},titleWrapper:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&:not(:first-child)":{marginBottom:"12px",padding:"5px 8px"}}}}})),Ze=Object(H.f)((function(){var e=Ye();return Object(O.jsxs)("div",{className:e.contentWrapper,children:[Object(O.jsxs)("div",{className:e.titleWrapper,children:[Object(O.jsx)("div",{children:Object(O.jsx)(ge.a,{fontSize:"large"})}),Object(O.jsx)("h1",{className:e.title,children:" Get in Touch"})]}),Object(O.jsx)("h3",{className:e.title,children:"Contact me"}),Object(O.jsxs)(ee.a,{container:!0,spacing:4,children:[Object(O.jsx)(ee.a,{item:!0,xs:4,children:Object(O.jsxs)(ne.a,{className:e.paper,children:[Object(O.jsx)("b",{children:"Email"}),Object(O.jsx)("div",{children:"phylieng97@gmail.com"})]})}),Object(O.jsx)(ee.a,{item:!0,xs:4,children:Object(O.jsxs)(ne.a,{className:e.paper,children:[Object(O.jsx)("b",{children:"Phone"}),Object(O.jsx)("div",{children:"Not available"})]})}),Object(O.jsx)(ee.a,{item:!0,xs:4,children:Object(O.jsxs)(ne.a,{className:e.paper,children:[Object(O.jsx)("b",{children:" Freelance"}),Object(O.jsx)("div",{children:"Not available"})]})})]}),Object(O.jsxs)("div",{className:e.contactForm,children:[Object(O.jsx)("h3",{className:e.title,children:"Send me message"}),Object(O.jsx)(He,{})]}),Object(O.jsx)(Ke,{}),Object(O.jsx)("div",{})]})}));!function(e){e.All="All",e.Mobile="Mobile App",e.Web="Web App",e.DeepLearning="Deep Learning"}(r||(r={}));var $e=[{title:"My Portfolio",subTitle:"Portfolio website to track my working progress.",image:K,category:r.Web,url:"https://ltphy.github.io/my-portfolio"},{title:"OpenPCDet",subTitle:"Contribute to an open-source research project.",image:V,category:r.DeepLearning,url:"https://github.com/open-mmlab/OpenPCDet"},{title:"Garbage Collector",subTitle:"A AI Game using Teachable Machine and Unity.",image:q,category:r.All,url:"https://medium.com/@phylieng97/create-machine-learning-game-by-joining-jstensorflow-and-unity-together-using-websocket-ca00982bca46"}],Xe=n(375),Qe=n(376),et=n(377),tt=n(378),nt=n(59),rt=Object(I.a)({card:{width:"400px"},imageContent:{height:"300px"}}),at=function(e){var t=e.portfolio,n=t.title,r=t.subTitle,a=t.image,i=(t.category,t.url),c=rt();return Object(O.jsx)(nt.b,{to:{pathname:i},target:"_blank",children:Object(O.jsx)(Xe.a,{className:c.card,onMouseOver:function(e){},elevation:3,children:Object(O.jsxs)(Qe.a,{children:[Object(O.jsx)(et.a,{className:c.imageContent,title:n,image:a}),Object(O.jsxs)(tt.a,{children:[Object(O.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h5",children:n}),Object(O.jsx)(g.a,{variant:"body1",color:"textSecondary",component:"p",children:r})]})]})})})},it=n(389),ct=n(392),ot=N()((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,"& b":{color:e.palette.text.primary}},contactForm:{marginTop:"2rem"},contentWrapper:{padding:"80px"},title:{textAlign:"center","& > *":{fontWeight:"bold",textTransform:"uppercase","&:first-child":{fontSize:"3rem"},"&$portfolioTitle":{}}},portfolioTitle:{marginBottom:"12px",padding:"5px 8px"},filterPortfolio:{margin:"20px 10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},portfolioContainer:{width:"80%",margin:"8em auto",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",flexWrap:"wrap","&.empty":{height:"100vh",alignItems:"flex-start"}},itemWrapper:{padding:"1%"},buttonFilter:{"&:focus":{borderColor:"transparent"}},centerPadding:{backgroundColor:"red",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}})),st=function(){var e=ot(),t=Object(a.useState)($e),n=Object(b.a)(t,2),i=n[0],c=n[1],o=Object(a.useState)(r.All),s=Object(b.a)(o,2),l=s[0],j=s[1];return Object(O.jsxs)("div",{className:e.contentWrapper,children:[Object(O.jsxs)("div",{className:e.title,children:[Object(O.jsx)("div",{children:Object(O.jsx)(fe.a,{fontSize:"large"})}),Object(O.jsx)("h1",{className:e.portfolioTitle,children:"Portfolio"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:e.filterPortfolio,children:Object.values(r).map((function(t){return Object(O.jsx)(te.a,{variant:l===t?"contained":"text",color:"primary",className:e.buttonFilter,onClick:function(){return function(e){if(j(e),e!==r.All){var t=$e.filter((function(t){return t.category===e}));c(t)}else c($e)}(t)},children:t},t)}))}),Object(O.jsx)(ct.a,{className:"".concat(e.portfolioContainer," ").concat(0===i.length?"empty":""),children:i.map((function(t,n){return Object(O.jsx)(it.a,{classNames:"portfolio",timeout:300,children:Object(O.jsx)("div",{className:e.itemWrapper,children:Object(O.jsx)(at,{portfolio:t})})},t.title)}))})]})]})},lt="/my-portfolio",jt=[{component:Z,iconRender:function(){return Object(O.jsx)(xe.a,{})},isPrivate:!1,title:"HOME",showHeaderNavBar:!0,path:"".concat(lt,"/"),exact:!0},{component:me,iconRender:function(){return Object(O.jsx)($.a,{})},isPrivate:!1,title:"ABOUT",showHeaderNavBar:!0,path:"".concat(lt,"/about"),exact:!0},{component:st,iconRender:function(){return Object(O.jsx)(fe.a,{})},isPrivate:!1,title:"PORTFOLIO",showHeaderNavBar:!0,path:"".concat(lt,"/portfolio"),exact:!0},{component:Ze,iconRender:function(){return Object(O.jsx)(ge.a,{})},isPrivate:!1,title:"CONTACT",showHeaderNavBar:!0,path:"".concat(lt,"/contact"),exact:!0}],dt=n(382),pt=n(383),bt=n(381),ut=function(e){var t=e.route,n=t.path,r=t.iconRender,i=t.title,c=Object(a.useMemo)((function(){return Object(a.forwardRef)((function(e,t){return Object(O.jsx)(nt.b,Object(R.a)({to:{pathname:n},ref:t},e))}))}),[n]);return Object(O.jsxs)(bt.a,{button:!0,component:c,children:[Object(O.jsxs)(dt.a,{children:[" ",r()]}),Object(O.jsx)(pt.a,{primary:i})]})},ht=N()((function(e){var t;return{drawer:{width:S,flexShrink:0,whiteSpace:"nowrap"},drawerPaper:{width:S},drawerHeader:Object(R.a)(Object(R.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),drawerOpen:{width:S,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:(t={transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)+1},Object(p.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)+1}),Object(p.a)(t,"overflowX","hidden"),t),toolbar:Object(R.a)({display:"flex",justifyContent:"flex-end",alignContent:"center",padding:e.spacing(1,1)},e.mixins.toolbar)}})),mt=function(){var e,t,n=ht(),r=y();return Object(O.jsxs)(P.a,{className:Object(_.a)(n.drawer,(e={},Object(p.a)(e,n.drawerOpen,r.open),Object(p.a)(e,n.drawerClose,!r.open),e)),classes:{paper:Object(_.a)((t={},Object(p.a)(t,n.drawerOpen,r.open),Object(p.a)(t,n.drawerClose,!r.open),t))},open:r.open,variant:"permanent",anchor:"left",children:[Object(O.jsx)("div",{className:n.toolbar,children:Object(O.jsx)(m.a,{onClick:function(){r.toggleOpen(!1)},children:Object(O.jsx)(A.a,{})})}),Object(O.jsx)(z.a,{children:jt.map((function(e,t){return Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(ut,{route:e}),Object(O.jsx)(E.a,{})]},e.title)}))})]})},xt=n(170),ft=n.n(xt),gt=Object(I.a)((function(e){return{content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),boxShadow:"0 3px 5px 2px rgba(33, 203, 243, .3)",background:"linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",color:"white",height:"100%"},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),Ot=function(e){var t=Object(a.useState)({hashName:""}),n=Object(b.a)(t,2),r=n[0],i=(n[1],y()),c=gt();return Object(O.jsxs)("div",{className:ft.a.root,children:[Object(O.jsx)(T,{}),Object(O.jsx)(mt,{}),Object(O.jsx)(B,{hashValue:r,children:Object(O.jsx)("main",{className:Object(_.a)(c.content,Object(p.a)({},c.contentShift,i.open)),children:e.children})})]})},vt=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(s.a)(this,n),(r=t.call(this,e)).RenderMainRoute=function(){return Object(O.jsx)(H.c,{children:jt.map((function(e,t){return Object(O.jsx)(H.a,{path:e.path,exact:e.exact,render:function(){return Object(O.jsx)(e.component,{})}},e.title)}))})};return r.state={open:!1,toggleOpen:function(e){r.setState({open:e})}},r}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)(nt.a,{children:Object(O.jsx)(w,{drawerToggle:this.state,children:Object(O.jsx)(Ot,{children:Object(O.jsx)(this.RenderMainRoute,{})})})})}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(320);o.a.render(Object(O.jsx)(vt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,n){e.exports={container:"styles_container__2LSWS",my_img:"styles_my_img__2IK6f",title_content:"styles_title_content__1VrjM",layout_content:"styles_layout_content__2CmHI",typewrapper:"styles_typewrapper__2CFXV",page_title:"styles_page_title__1fZpc",typewriter2:"styles_typewriter2__2gB0V",blink:"styles_blink__2l_rI",typewriter:"styles_typewriter__FEhP2",typing:"styles_typing__AeMIY","blink-caret":"styles_blink-caret__O1hsh"}}},[[321,1,2]]]);
//# sourceMappingURL=main.f965cbd1.chunk.js.map