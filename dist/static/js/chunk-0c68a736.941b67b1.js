(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c68a736"],{"11bc":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("h3",[e._v("\n\t\tWorkspace Information\n\t\t"),e.showTopBtn?s("span",[e.show_edit?s("el-button",{staticClass:"btn-style",attrs:{type:"primary",size:"mini"},on:{click:function(t){e.show_edit=!1}}},[e._v("Cancel")]):s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.show_edit=!0}}},[e._v("Editor")])],1):e._e()]),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"item"},[s("label",[e._v("Workspace Name")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.name,callback:function(t){e.$set(e.workspace,"name",t)},expression:"workspace.name"}}):s("p",[e._v(e._s(e.workspace.name))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Pricing")]),e._v(" "),e._l(e.workspace.pricing,(function(t,a){return s("div",{key:a,staticClass:"item-row"},[e.show_edit?s("el-select",{staticClass:"input-style",attrs:{placeholder:"空间类型"},model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"item.name"}},[s("el-option",{attrs:{label:"Virtual Office",value:"Virtual Office"}}),e._v(" "),s("el-option",{attrs:{label:"Hotdesk",value:"Hotdesk"}}),e._v(" "),s("el-option",{attrs:{label:"Private Office",value:"Private Office"}})],1):s("p",[e._v(e._s(t.name))]),e._v(" "),e.show_edit?s("el-input",{staticClass:"input-style",staticStyle:{width:"300px"},attrs:{type:"number",placeholder:"",name:"name"},model:{value:t.price,callback:function(s){e.$set(t,"price",s)},expression:"item.price"}},[s("template",{slot:"prepend"},[e._v("¥")])],2):s("p",{staticStyle:{"margin-left":"30px"}},[e._v("¥ "+e._s(t.price))])],1)})),e._v(" "),e.show_edit?s("p",[s("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:e.onAddPrice}},[e._v("Add Pricing")])],1):e._e()],2),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Area")]),e._v(" "),s("div",[e.show_edit?s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.workspace.area,callback:function(t){e.$set(e.workspace,"area",t)},expression:"workspace.area"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):s("p",[e._v(e._s(e.workspace.area))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Address En")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.address_en,callback:function(t){e.$set(e.workspace,"address_en",t)},expression:"workspace.address_en"}}):s("p",[e._v(e._s(e.workspace.address_en))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Address Cn")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.address_zh,callback:function(t){e.$set(e.workspace,"address_zh",t)},expression:"workspace.address_zh"}}):s("p",[e._v(e._s(e.workspace.address_zh))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Building En")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.addresses_en,callback:function(t){e.$set(e.workspace,"addresses_en",t)},expression:"workspace.addresses_en"}}):s("p",[e._v(e._s(e.workspace.addresses_en))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Building Cn")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.addresses_zh,callback:function(t){e.$set(e.workspace,"addresses_zh",t)},expression:"workspace.addresses_zh"}}):s("p",[e._v(e._s(e.workspace.addresses_zh))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Description En")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.desc_en,callback:function(t){e.$set(e.workspace,"desc_en",t)},expression:"workspace.desc_en"}}):s("p",[e._v(e._s(e.workspace.desc_en))])],1)]),e._v(" "),s("div",{staticClass:"item"},[s("label",[e._v("Description Cn")]),e._v(" "),s("div",[e.show_edit?s("el-input",{staticClass:"input-style",attrs:{placeholder:"",name:"name"},model:{value:e.workspace.desc_zh,callback:function(t){e.$set(e.workspace,"desc_zh",t)},expression:"workspace.desc_zh"}}):s("p",[e._v(e._s(e.workspace.desc_zh))])],1)]),e._v(" "),s("el-radio-group",{staticStyle:{"margin-bottom":"30px"},model:{value:e.tabPosition,callback:function(t){e.tabPosition=t},expression:"tabPosition"}},[s("el-radio-button",{attrs:{label:"Picture"}}),e._v(" "),s("el-radio-button",{attrs:{label:"Video"}},[e._v("Video")])],1),e._v(" "),"Picture"==e.tabPosition?s("div",{staticClass:"item"},[e.show_edit?s("label",[s("el-button",{staticClass:"btn-style",attrs:{type:"primary",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),function(){return e.onShow("Image")}()}}},[e._v("Upload Pictures"),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1):e._e(),e._v(" "),s("p",e._l(e.workspace.photos,(function(e,t){return s("span",{key:t},[s("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:e,fit:"cover"}})],1)})),0)]):s("div",{staticClass:"item"},[e.show_edit?s("v-video",{attrs:{onSuccess:e.onSuccessVideo},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}}):e._e(),e._v(" "),s("p",[s("span",[s("el-link",{attrs:{href:e.workspace.video,target:"_blank",type:"info"}},[e._v("Video Url Path : "+e._s(e.workspace.video))])],1)])],1),e._v(" "),s("el-dialog",{staticClass:"dialog-box",attrs:{title:"Upload File",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.show_edit?s("v-upload",{attrs:{fileList:e.workspace.photos,onSuccess:e.onSuccess},model:{value:e.disabled,callback:function(t){e.disabled=t},expression:"disabled"}}):e._e(),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{disabled:e.disabled},on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")]),e._v(" "),s("el-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.onOk}},[e._v("Submit")])],1)],1)],1),e._v(" "),e.show_edit?s("div",{staticClass:"footer"},[s("el-button",{attrs:{type:"primary",loading:e.loading,disabled:e.disabled},on:{click:e.onUpdate}},[e._v("Confirm Submission")])],1):e._e()])},i=[],n=s("db72"),o=(s("2f62"),s("c7f0")),l=s("16ab"),c=s("8d62"),r={name:"",area:"",addresses_en:"",addresses_zh:"",address_zh:"",address_en:"",desc_en:"",desc_zh:"",logo:"",pricing:[{name:"",price:0}],video:"",photos:[]},u={data:function(){var e=!this.$route.query._id;return{loading:!1,disabled:!1,tabPosition:"Picture",showTopBtn:!e,workspace:Object(n["a"])({},r),show_edit:e,dialogVisible:!1,uploadType:"Image",cacheList:[],options:[{label:"黄浦区",value:"黄浦区"},{label:"徐汇区",value:"徐汇区"},{label:"长宁区",value:"长宁区"},{label:"静安区",value:"静安区"},{label:"普陀区",value:"普陀区"},{label:"虹口区",value:"虹口区"},{label:"杨浦区",value:"杨浦区"},{label:"闵行区",value:"闵行区"},{label:"宝山区",value:"宝山区"},{label:"嘉定区",value:"嘉定区"},{label:"浦东新区",value:"浦东新区"},{label:"金山区",value:"金山区"},{label:"松江区",value:"松江区"},{label:"青浦区",value:"青浦区"},{label:"奉贤区",value:"奉贤区"},{label:"崇明县",value:"崇明县"}]}},computed:{},components:{"v-upload":o["a"],"v-video":l["a"]},methods:{onShow:function(e){this.uploadType=e,this.dialogVisible=!0},onAddPrice:function(){this.workspace.pricing.push({name:"",price:0})},handleClose:function(e){this.$confirm("确认关闭？").then((function(t){e()})).catch((function(e){}))},onSuccess:function(e){this.cacheList=e},onOk:function(){this.workspace.photos=this.cacheList,this.dialogVisible=!1},onSuccessVideo:function(e){this.workspace.video=e},onUpdate:function(){var e=this;this.loading=!0,Object(c["f"])(this.workspace).then((function(t){e.$message({message:"提交成功，请等待管理员审核！",type:"success"})})).catch((function(t){e.$message.error("提交失败")})).finally((function(){e.show_edit=!1,setTimeout((function(){e.loading=!1}),500)}))},onDelete:function(){var e=this;this.loading=!0,onDel(this.workspace._id).then((function(t){e.$message({message:"删除成功！",type:"success"}),setTimeout((function(){e.$router.go(-1)}),2e3)})).catch((function(t){e.$message.error("提交失败")})).finally((function(){setTimeout((function(){e.loading=!1}),500)}))},getData:function(e){var t=this;this.loading=!0,Object(c["c"])(e).then((function(e){t.workspace=Object(n["a"])({},e)})).catch((function(e){t.$message.error("提交失败")})).finally((function(){setTimeout((function(){t.loading=!1}),500)}))}},created:function(){console.log("_id",this.$route.query);var e=this.$route.query._id;e&&this.getData(e)}},d=u,p=(s("5bfb"),s("2877")),v=Object(p["a"])(d,a,i,!1,null,"4fea3255",null);t["default"]=v.exports},"16ab":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-upload",{ref:"uploadvideo",attrs:{action:e.url,"on-success":e.handleSuccess,"on-remove":e.handleRemove,multiple:!1,"show-file-list":!0}},[s("label",[s("el-button",{staticClass:"btn-style",attrs:{type:"primary",size:"mini"}},[e._v("Upload Videos"),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1)])},i=[],n=s("2b0e"),o={data:function(){return{url:n["default"].uploadUrl}},props:{onSuccess:{type:Function,default:function(){}}},methods:{handleRemove:function(e,t){console.log(e,t)},handleSuccess:function(e,t,s){var a=this;console.log("handleSuccess",t),setTimeout((function(){a.$refs.uploadvideo.clearFiles()}),3e3),this.onSuccess(t.response.msg),this.$emit("input",!1),this.$message({message:"上传成功！",type:"success"})}},handleBefore:function(){console.log("文件开始上传"),this.$emit("input",!0)}},l=o,c=s("2877"),r=Object(c["a"])(l,a,i,!1,null,null,null);t["a"]=r.exports},"5bfb":function(e,t,s){"use strict";var a=s("bfb6"),i=s.n(a);i.a},"8d62":function(e,t,s){"use strict";s.d(t,"d",(function(){return n})),s.d(t,"b",(function(){return o})),s.d(t,"c",(function(){return l})),s.d(t,"f",(function(){return c})),s.d(t,"i",(function(){return r})),s.d(t,"h",(function(){return u})),s.d(t,"g",(function(){return d})),s.d(t,"a",(function(){return p})),s.d(t,"e",(function(){return v}));var a=s("b775"),i="workspace";function n(e){return Object(a["a"])({url:"/".concat(i),method:"put",data:e})}function o(){return Object(a["a"])({url:"/".concat(i),method:"get"})}function l(e){return Object(a["a"])({url:"/".concat(i,"/select/").concat(e),method:"get"})}function c(e){return Object(a["a"])({url:"/".concat(i,"/update"),method:"post",data:e})}function r(e){return Object(a["a"])({url:"/".concat(i,"/validation"),method:"post",data:e})}function u(){return Object(a["a"])({url:"/".concat(i,"/update"),method:"get"})}function d(e){return Object(a["a"])({url:"/".concat(i,"/update"),method:"put",data:e})}function p(e){return Object(a["a"])({url:"/".concat(i,"/update"),method:"delete",params:e})}function v(e){return Object(a["a"])({url:"/".concat(i,"/comment"),method:"put",data:e})}},bfb6:function(e,t,s){},c7f0:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-upload",{attrs:{action:e.url,"list-type":"picture-card","file-list":e.fileListData,"on-success":e.handleSuccess,"on-remove":e.handleRemove,limit:24}},[s("i",{staticClass:"el-icon-plus"})])},i=[],n=s("2b0e"),o={data:function(){return{dialogImageUrl:"",url:n["default"].uploadUrl}},props:{fileList:{type:Array,default:function(){return[]}},onSuccess:{type:Function,default:function(){}}},computed:{fileListData:function(){return console.log("this.fileList",this.fileList),this.fileList.map((function(e){return{name:"",url:e}}))}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleSuccess:function(e,t,s){console.log("handleSuccess",s);var a=s.map((function(e){return e.response?e.response.msg:e.url}));this.onSuccess(a),this.$emit("input",!1),this.$message({message:"上传成功！",type:"success"})},handleBefore:function(){console.log("文件开始上传"),this.$emit("input",!0)}}},l=o,c=s("2877"),r=Object(c["a"])(l,a,i,!1,null,null,null);t["a"]=r.exports}}]);