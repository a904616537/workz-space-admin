(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c0b334a"],{3882:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"app-container"},[t("div",{staticClass:"space"},[t("div",[t("el-button",{staticClass:"apply-btn",attrs:{type:"primary",loading:s.loading,size:"medium"},nativeOn:{click:function(e){return e.preventDefault(),s.getData(e)}}},[s._v("刷新")])],1),s._v(" "),t("el-divider"),s._v(" "),t("div",{staticClass:"title"},[t("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[t("el-col",{attrs:{span:3}},[s._v("Workspace Name")]),s._v(" "),t("el-col",{attrs:{span:3}},[s._v("Provider Name")]),s._v(" "),t("el-col",{attrs:{span:4}},[s._v("Workspace Address")]),s._v(" "),t("el-col",{attrs:{span:5}},[s._v("Pricing")]),s._v(" "),t("el-col",{attrs:{span:3}},[s._v("Recommend")]),s._v(" "),t("el-col",{attrs:{span:3}},[s._v("Status")]),s._v(" "),t("el-col",{attrs:{span:3}},[s._v("More")])],1)],1),s._v(" "),s._l(s.listData,(function(e,a){return t("el-card",{key:a,staticClass:"card-style"},[t("el-row",{attrs:{gutter:20,align:"middle",type:"flex"}},[t("el-col",{attrs:{span:3}},[t("strong",[s._v(s._s(e.name))])]),s._v(" "),t("el-col",{attrs:{span:3}},[t("strong",[s._v(s._s(e.provider.first_name)+" "+s._s(e.provider.last_name))])]),s._v(" "),t("el-col",{attrs:{span:4}},[t("strong",[s._v(s._s(e.address_zh))])]),s._v(" "),t("el-col",{attrs:{span:5}},["number"==typeof e.pricing?t("div",[t("strong",[s._v("¥ "+s._s(e.pricing))])]):s._l(e.pricing,(function(e,a){return t("div",{key:a},[t("strong",[s._v("¥ "+s._s(e.price))])])}))],2),s._v(" "),t("el-col",{attrs:{span:3}},[e.recommend?t("el-link",{attrs:{type:"info",disabled:""}},[s._v("推荐")]):t("el-link",{attrs:{disabled:""}},[s._v("未推荐")])],1),s._v(" "),t("el-col",{attrs:{span:3}},[e.status?t("el-tag",{attrs:{type:"success"}},[s._v("Certified")]):t("el-tag",{attrs:{type:"danger"}},[s._v("Unauthorized")])],1),s._v(" "),t("el-col",{attrs:{span:3}},[t("el-button",{staticClass:"btn-style",attrs:{type:"text"},on:{click:function(){return s.onShow(e)}}},[s._v("More Information")])],1)],1)],1)})),s._v(" "),t("el-dialog",{attrs:{title:"More Information",visible:s.dialogVisible,width:"50%","before-close":s.handleClose},on:{"update:visible":function(e){s.dialogVisible=e}}},[t("div",{staticClass:"inner"},[t("div",{staticClass:"item"},[t("label",[s._v("Time")]),s._v(" "),t("p",[s._v(s._s(s.moment(s.showData.createTime)))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Workspace Name")]),s._v(" "),t("p",[s._v(s._s(s.showData.name))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Provider Name")]),s._v(" "),t("p",[s._v(s._s(s.showData.provider.first_name)+" "+s._s(s.showData.provider.last_name))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Workspace Address En")]),s._v(" "),t("p",[s._v(s._s(s.showData.address_en))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Workspace Address Cn")]),s._v(" "),t("p",[s._v(s._s(s.showData.address_zh))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Pricing")]),s._v(" "),"number"==typeof s.showData.pricing?t("div",[t("p",[s._v("¥ "+s._s(s.showData.pricing))])]):s._l(s.showData.pricing,(function(e,a){return t("div",{key:a},[t("p",[t("span",[s._v(s._s(e.name))]),s._v(" "),t("span",{staticStyle:{"margin-left":"30px"}},[s._v(s._s(e.price))])])])}))],2),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Likes Number")]),s._v(" "),t("p",[s._v(s._s(s.showData.likes))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Reviews Number")]),s._v(" "),t("p",[s._v(s._s(s.showData.reviews))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Description En")]),s._v(" "),t("p",[s._v(s._s(s.showData.desc_en))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Description Cn")]),s._v(" "),t("p",[s._v(s._s(s.showData.desc_zh))])]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Picture")]),s._v(" "),t("p",s._l(s.showData.photos,(function(s,e){return t("span",{key:e},[t("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:s,fit:"cover"}})],1)})),0)]),s._v(" "),t("div",{staticClass:"item"},[t("label",[s._v("Video")]),s._v(" "),t("p",[t("el-link",{attrs:{href:s.showData.video,target:"_blank",type:"info"}},[s._v("Video Url Path : "+s._s(s.showData.video))])],1)])]),s._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(){return s.onDeal(!1)}}},[s._v("Unauthorized")]),s._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(){return s.onDeal(!0)}}},[s._v("Certified")])],1)])],2)])},n=[],i=(t("2f62"),t("c1df")),c=t.n(i),r=t("b775"),l="workspace";function o(){return Object(r["a"])({url:"/".concat(l),method:"get"})}function d(s){return Object(r["a"])({url:"/".concat(l,"/validation"),method:"post",data:s})}var v={data:function(){return{loading:!1,value:!0,dialogVisible:!1,listData:[],imgs:[],showData:{provider:{}}}},methods:{handleClose:function(s){s()},moment:function(s){return c()(s).format("MM-DD h:mm")},onDeal:function(s){var e=this;this.dialogVisible=!1,d({_id:this.showData._id,status:s}).then((function(s){e.$message({message:"处理成功！！",type:"success"}),e.getData()})).catch((function(s){e.$message.error("处理失败！")}))},onShow:function(s){this.dialogVisible=!0,this.showData=s},getData:function(){var s=this;this.loading=!0,o().then((function(e){s.listData=e,console.log("doc",e)})).catch((function(e){s.$message.error("数据获取失败")})).finally((function(){setTimeout((function(){s.loading=!1}),500)}))}},created:function(){this.getData()}},f=v,b=(t("f394"),t("2877")),j=Object(b["a"])(f,a,n,!1,null,null,null);e["default"]=j.exports},4678:function(s,e,t){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(s){var e=i(s);return t(e)}function i(s){var e=a[s];if(!(e+1)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e}n.keys=function(){return Object.keys(a)},n.resolve=i,s.exports=n,n.id="4678"},"7c6b":function(s,e,t){},f394:function(s,e,t){"use strict";var a=t("7c6b"),n=t.n(a);n.a}}]);