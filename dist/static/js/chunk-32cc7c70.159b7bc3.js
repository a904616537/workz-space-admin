(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32cc7c70"],{"070f":function(t,e,a){},"16ab":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-upload",{ref:"uploadvideo",attrs:{action:t.url,"on-success":t.handleSuccess,"on-remove":t.handleRemove,multiple:!1,"show-file-list":!0}},[a("label",[a("el-button",{staticClass:"btn-style",attrs:{type:"primary",size:"mini"}},[t._v("Upload Videos"),a("i",{staticClass:"el-icon-upload el-icon--right"})])],1)])},n=[],o=a("2b0e"),i={data:function(){return{url:o["default"].uploadUrl}},props:{onSuccess:{type:Function,default:function(){}}},methods:{handleRemove:function(t,e){console.log(t,e)},handleSuccess:function(t,e,a){var s=this;console.log("handleSuccess",e),setTimeout((function(){s.$refs.uploadvideo.clearFiles()}),3e3),this.onSuccess(e.response.msg),this.$emit("input",!1),this.$message({message:"上传成功！",type:"success"})}},handleBefore:function(){console.log("文件开始上传"),this.$emit("input",!0)}},l=i,c=a("2877"),r=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=r.exports},"97f8":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"provider"},[a("div",{staticClass:"title"},[a("el-row",{attrs:{gutter:20,type:"flex",align:"middle"}},[a("el-col",{attrs:{span:6}},[t._v("Company Name")]),t._v(" "),a("el-col",{attrs:{span:3}},[t._v("Contact Name")]),t._v(" "),a("el-col",{attrs:{span:6}},[t._v("Email")]),t._v(" "),a("el-col",{attrs:{span:3}},[t._v("Phone")]),t._v(" "),a("el-col",{attrs:{span:3}},[t._v("Status")]),t._v(" "),a("el-col",{attrs:{span:3}},[t._v("More")])],1)],1),t._v(" "),a("el-divider"),t._v(" "),t._l(t.listData,(function(e,s){return a("el-card",{key:s,staticClass:"card-style"},[a("el-row",{attrs:{gutter:20,align:"middle",type:"flex"}},[a("el-col",{attrs:{span:6}},[a("strong",[t._v(t._s(e.company))])]),t._v(" "),a("el-col",{attrs:{span:3}},[a("strong",[t._v(t._s(e.first_name)+" "+t._s(e.last_name))])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("strong",[t._v(t._s(e.email))])]),t._v(" "),a("el-col",{attrs:{span:3}},[a("strong",[t._v(t._s(e.phone))])]),t._v(" "),a("el-col",{attrs:{span:3}},[e.status?a("el-tag",{attrs:{type:"success"}},[t._v("Certified")]):a("el-tag",{attrs:{type:"danger"}},[t._v("Unauthorized")])],1),t._v(" "),a("el-col",{attrs:{span:3}},[a("el-button",{staticClass:"btn-style",attrs:{type:"text"},on:{click:function(){return t.onShow(e)}}},[t._v("More Information")])],1)],1)],1)})),t._v(" "),a("el-dialog",{attrs:{title:"More Information",visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"inner"},[a("div",{staticClass:"item"},[a("label",[t._v("Company Name")]),t._v(" "),a("p",{on:{click:function(){return t.open("Please enter the Company Name","company")}}},[t._v(t._s(t.showData.company))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("Contact Name")]),t._v(" "),a("p",[a("span",{on:{click:function(){return t.open("Please enter the First Name","first_name")}}},[t._v(t._s(t.showData.first_name))]),t._v(" "),a("span",{on:{click:function(){return t.open("Please enter the Last Name","last_name")}}},[t._v(t._s(t.showData.last_name))])])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("Email")]),t._v(" "),a("p",{on:{click:function(){return t.open("Please enter the email","email")}}},[t._v(t._s(t.showData.email))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("Phone")]),t._v(" "),a("p",{on:{click:function(){return t.open("Please enter the phone","phone")}}},[t._v(t._s(t.showData.phone))])]),t._v(" "),a("div",{staticClass:"item"},[a("label",[t._v("Logo")]),t._v(" "),a("p",[a("span",[a("el-upload",{ref:"uploadavatar",attrs:{action:t.url,"on-success":t.handleSuccess,"on-remove":t.handleRemove,multiple:!1,"show-file-list":!0}},[a("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:t.showData.avatar,fit:"contain"}})],1)],1)])])]),t._v(" "),t.showData.status?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},on:{click:t.onDelete}},[t._v("Delete")]),t._v(" "),a("el-button",{attrs:{type:"warning"},on:{click:function(){return t.onDeal(!0)}}},[t._v("Reset Password")])],1):a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger"},on:{click:t.onDelete}},[t._v("Delete")]),t._v(" "),a("el-button",{on:{click:function(){return t.onDeal(!1)}}},[t._v("Refused")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(){return t.onDeal(!0)}}},[t._v("Accept")])],1)])],2)])},n=[],o=a("2b0e"),i=(a("2f62"),a("b775")),l="provider";function c(t){return Object(i["a"])({url:"/".concat(l),method:"get"})}function r(t){return Object(i["a"])({url:"/".concat(l),method:"put",data:t})}function u(t){return Object(i["a"])({url:"/".concat(l),method:"delete",params:t})}function d(t){return Object(i["a"])({url:"/".concat(l,"/validation"),method:"post",data:t})}var p=a("c7f0"),f=a("16ab"),h={data:function(){var t=!this.$route.query._id;return{url:o["default"].uploadUrl,loading:!1,dialogVisible:!1,listData:[],showData:{},tabPosition:"Picture",show_edit:t,video:[]}},methods:{open:function(t,e){var a=this;this.$prompt(t,"prompt",{confirmButtonText:"ok",cancelButtonText:"cancel"}).then((function(t){var s=t.value;a.showData[e]=s,console.log("value",s),a.putData()})).catch((function(){a.$message({type:"info",message:"取消输入"})}))},putData:function(){var t=this;r(this.showData).then((function(t){})).catch((function(e){t.$message.error("Execution Failure")}))},handleRemove:function(t,e){},handleSuccess:function(t,e,a){this.showData.avatar=e.response.msg,this.putData(),this.$message({message:"上传成功！",type:"success"})},handleClose:function(t){t()},onDeal:function(t){var e=this;this.dialogVisible=!1,d({_id:this.showData._id,status:t}).then((function(t){e.$message({message:"Email Sent to Client!",type:"success"}),e.getData()})).catch((function(t){e.$message.error("Execution Failure")}))},onShow:function(t){this.dialogVisible=!0,this.showData=t},getData:function(){var t=this;this.loading=!0,c().then((function(e){t.listData=e,console.log("doc",e)})).catch((function(e){t.$message.error("Error Retrieving Data")})).finally((function(){setTimeout((function(){t.loading=!1}),500)}))},onDelete:function(){var t=this;this.dialogVisible=!1,u({_id:this.showData._id}).then((function(e){t.$message({message:"Has been deleted!",type:"success"}),t.getData()})).catch((function(e){t.$message.error("Execution Failure")}))},onSuccessVideo:function(t){}},components:{"v-upload":p["a"],"v-video":f["a"]},created:function(){this.getData()}},v=h,m=(a("fad7"),a("2877")),_=Object(m["a"])(v,s,n,!1,null,null,null);e["default"]=_.exports},c7f0:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-upload",{attrs:{action:t.url,"list-type":"picture-card","file-list":t.fileListData,"on-success":t.handleSuccess,"on-remove":t.handleRemove,limit:24}},[a("i",{staticClass:"el-icon-plus"})])},n=[],o=a("2b0e"),i={data:function(){return{dialogImageUrl:"",url:o["default"].uploadUrl}},props:{fileList:{type:Array,default:function(){return[]}},onSuccess:{type:Function,default:function(){}}},computed:{fileListData:function(){return console.log("this.fileList",this.fileList),this.fileList.map((function(t){return{name:"",url:t}}))}},methods:{handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleSuccess:function(t,e,a){console.log("handleSuccess",a);var s=a.map((function(t){return t.response?t.response.msg:t.url}));this.onSuccess(s),this.$emit("input",!1),this.$message({message:"上传成功！",type:"success"})},handleBefore:function(){console.log("文件开始上传"),this.$emit("input",!0)}}},l=i,c=a("2877"),r=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=r.exports},fad7:function(t,e,a){"use strict";var s=a("070f"),n=a.n(s);n.a}}]);