(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todonear/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0104":function(t,e,n){},1:function(t,e){},2:function(t,e){},"25eb":function(t,e,n){"use strict";n("e526")},3:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"root"}},[n("SignedOut",{directives:[{name:"show",rawName:"v-show",value:!t.isSignedIn,expression:"!isSignedIn"}]}),n("SignedIn",{directives:[{name:"show",rawName:"v-show",value:t.isSignedIn,expression:"isSignedIn"}]})],1)},o=[],c=(n("99af"),n("0104"),n("db49")),i=n.n(c),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-container",{staticClass:"px-5 py-4",attrs:{align:"center"}},[n("v-card",[n("v-card-title",{staticClass:"d-flex justify-center"},[n("h2",[t._v("Welcome to NEAR!")])]),n("v-card-text",{staticClass:"py-5",attrs:{align:"center"}},[n("p",[t._v("\n          To make use of the NEAR blockchain, you need to sign in. The button\n          below will sign you in using NEAR Wallet.\n        ")]),n("p",[t._v('\n          By default, when your app runs in "development" mode, it connects to\n          a test network ("testnet") wallet. This works just like the main\n          network ("mainnet") wallet, but the NEAR Tokens on testnet aren\'t\n          convertible to other currencies - they\'re just for testing!\n        ')]),n("p",[t._v("Go ahead and click the button below to try it out:")]),n("p",{staticStyle:{"text-align":"center","margin-top":"2.5em"}},[n("v-btn",{on:{click:t.login}},[t._v("Sign in")])],1)])],1)],1)],1)},l=[],u=n("1da1"),d=(n("96cf"),n("ac1f"),n("5319"),n("d9eb")),p=i()("development");function w(){return h.apply(this,arguments)}function h(){return h=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["connect"])(Object.assign({deps:{keyStore:new d["keyStores"].BrowserLocalStorageKeyStore}},p));case 2:return e=t.sent,window.walletConnection=new d["WalletConnection"](e),window.accountId=window.walletConnection.getAccountId(),t.next=7,new d["Contract"](window.walletConnection.account(),p.contractName,{viewMethods:["getTasks"],changeMethods:["addTask","deleteTask"]});case 7:window.contract=t.sent;case 8:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function f(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}function v(){window.walletConnection.requestSignIn(p.contractName)}var g={name:"SignedOut",methods:{login:function(){console.log("calling utils.login"),v()}}},k=g,m=n("2877"),b=n("6544"),y=n.n(b),x=n("7496"),T=n("8336"),_=n("b0af"),S=n("99d9"),C=n("a523"),I=Object(m["a"])(k,s,l,!1,null,null,null),O=I.exports;y()(I,{VApp:x["a"],VBtn:T["a"],VCard:_["a"],VCardText:S["a"],VCardTitle:S["b"],VContainer:C["a"]});var V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-avatar",{attrs:{size:"70"}},[n("img",{attrs:{src:"https://near.org/wp-content/themes/near-19/assets/downloads/near_icon_wht.png"}})]),n("h2",[t._v("Todo App")]),n("v-spacer"),n("v-chip",{attrs:{color:"error"},on:{click:t.logout}},[t._v("\n      Sign Out\n    ")])],1),n("v-main",[n("v-container",{staticClass:"mt-6 px-8 "},[t._l(t.tasks,(function(e,r){return n("v-card",{directives:[{name:"touch",rawName:"v-touch",value:{left:function(){return t.deleteTask(r)}},expression:"{\n          left: () => deleteTask(id),\n        }"}],key:r,staticClass:"mb-1 ",attrs:{color:"secondary"},on:{dblclick:function(e){return t.deleteTask(r)}}},[n("v-card-title",{staticClass:"py-2 pl-6 animate__backOutLeft"},[n("span",{staticClass:"text-subtitle-1"},[t._v("\n            "+t._s(e)+"\n          ")]),n("v-spacer")],1)],1)})),0==t.tasks.length?n("v-card",{staticClass:"mx-auto"},[n("v-card-text",{attrs:{align:"center"}},[n("v-img",{attrs:{src:"https://i.pinimg.com/originals/31/36/cd/3136cd447c99783f59cd1a4c7d9ca9c1.png",width:"400"}}),n("h2",{staticClass:"mb-7"},[t._v("Your list is empty")])],1)],1):t._e()],2)],1),n("v-snackbar",{attrs:{align:"center",color:t.color,timeout:"3000"},model:{value:t.noti,callback:function(e){t.noti=e},expression:"noti"}},[n("span",[t._v(t._s(t.content))])]),n("v-footer",{attrs:{app:""}},[n("v-text-field",{attrs:{label:"Yours Task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask()}},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}}),n("v-btn",{staticClass:"ml-4",attrs:{color:"info"},on:{click:function(e){return t.addTask()}}},[t._v("Add")])],1)],1)},j=[],N=(n("a434"),{name:"SignedIn",beforeMount:function(){this.isSignedIn&&this.getTask()},data:function(){return{color:"",content:"",noti:!1,tasks:[],newTask:"",notificationVisible:!1}},computed:{isSignedIn:function(){return!!window.walletConnection&&window.walletConnection.isSignedIn()},accountId:function(){return window.accountId},contractId:function(){return window.contract?window.contract.contractId:null},networkId:function(){return window.networkId}},methods:{notiShow:function(t,e){this.noti=!1,this.content=t,this.color=e,this.noti=!0},getTask:function(){var t=this;window.contract.getTasks().then((function(e){t.tasks=e}))},addTask:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""==this.newTask){t.next=17;break}return e=this.newTask,this.tasks.unshift(this.newTask),this.newTask="",t.prev=4,t.next=7,window.contract.addTask({task:e});case 7:t.next=14;break;case 9:throw t.prev=9,t.t0=t["catch"](4),this.tasks=this.getTask(),this.notiShow("Add failed!!","error"),t.t0;case 14:this.notiShow("Add complete!!","success"),t.next=18;break;case 17:this.notiShow("You did not enter content!","warning");case 18:case"end":return t.stop()}}),t,this,[[4,9]])})));function e(){return t.apply(this,arguments)}return e}(),deleteTask:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.tasks.splice(e,1),t.prev=1,t.next=4,window.contract.deleteTask({task:e});case 4:t.next=11;break;case 6:throw t.prev=6,t.t0=t["catch"](1),this.tasks=this.getTask(),this.notiShow("Delete failed!!","error"),t.t0;case 11:this.notiShow("Delete Completed!!","success");case 12:case"end":return t.stop()}}),t,this,[[1,6]])})));function e(e){return t.apply(this,arguments)}return e}(),logout:f}}),A=N,U=(n("25eb"),n("40dc")),E=n("8212"),R=n("cc20"),M=n("553a"),P=n("adda"),B=n("f6c4"),D=n("2db4"),L=n("2fa4"),$=n("8654"),W=n("269a"),Y=n.n(W),F=n("c3f0"),J=Object(m["a"])(A,V,j,!1,null,"0414a1d3",null),q=J.exports;y()(J,{VApp:x["a"],VAppBar:U["a"],VAvatar:E["a"],VBtn:T["a"],VCard:_["a"],VCardText:S["a"],VCardTitle:S["b"],VChip:R["a"],VContainer:C["a"],VFooter:M["a"],VImg:P["a"],VMain:B["a"],VSnackbar:D["a"],VSpacer:L["a"],VTextField:$["a"]}),Y()(J,{Touch:F["a"]});var z=i()("development");console.log("networkId:".concat(z.networkId," CONTRACT_NAME:").concat(z.contractName)),window.networkId=z.networkId;var G={created:function(){document.title="vue"},name:"App",components:{SignedOut:O,SignedIn:q},computed:{isSignedIn:function(){return window.walletConnection.isSignedIn()}}},H=G,K=Object(m["a"])(H,a,o,!1,null,null,null),Q=K.exports,X=n("f309");r["a"].use(X["a"]);var Z=new X["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,window.nearInitPromise=w().then((function(){new r["a"]({vuetify:Z,render:function(t){return t(Q)}}).$mount("#app")}))},db49:function(t,e){var n=Object({NODE_ENV:"production",BASE_URL:"/todonear/"}).VUE_APP_CONTRACT_NAME||"vue.khanh30125.testnet";function r(t){switch(t){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",BASE_URL:"/todonear/"}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(t,"'. Can be configured in src/config.js."))}}t.exports=r},e526:function(t,e,n){}});
//# sourceMappingURL=app.73ef7c2d.js.map
