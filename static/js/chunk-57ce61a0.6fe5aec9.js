(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57ce61a0"],{"267e":function(t,e,a){},"5da5":function(t,e,a){"use strict";a("267e")},b428:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("div",{staticClass:"mt10"},[t.checkPermi(["admin:combination:statistics"])?a("cards-data",{attrs:{cardLists:t.cardLists}}):t._e()],1),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{size:"small","label-width":"100px"}},[a("el-form-item",{staticClass:"width100",attrs:{label:"时间选择："}},[a("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.dateLimit)}},model:{value:t.tableFrom.dateLimit,callback:function(e){t.$set(t.tableFrom,"dateLimit",e)},expression:"tableFrom.dateLimit"}},t._l(t.fromList.fromTxt,(function(e,i){return a("el-radio-button",{key:i,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),a("el-date-picker",{staticStyle:{width:"250px"},attrs:{"value-format":"yyyy-MM-dd",format:"yyyy-MM-dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"拼团状态："}},[a("el-select",{staticClass:"filter-item selWidth mr20",attrs:{placeholder:"请选择",clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.status,callback:function(e){t.$set(t.tableFrom,"status",e)},expression:"tableFrom.status"}},[a("el-option",{attrs:{label:"进行中",value:1}}),t._v(" "),a("el-option",{attrs:{label:"已成功",value:2}}),t._v(" "),a("el-option",{attrs:{label:"未完成",value:3}})],1)],1)],1)],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":"","header-cell-style":{fontWeight:"bold"}}},[a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"头像","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.avatar,"preview-src-list":[t.row.avatar]}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"开团团长",prop:"nickname","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"开团时间",prop:"addTime","min-width":"130"}}),t._v(" "),a("el-table-column",{attrs:{label:"拼团商品",prop:"title","min-width":"300","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"几人团",prop:"people","min-width":"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"几人参加",prop:"countPeople","min-width":"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stopTime",label:"结束时间","min-width":"130",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"拼团状态","min-width":"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("groupColorFilter")(e.row.status)}},[t._v(t._s(t._f("groupStatusFilter")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"150",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleLook(e.row.id)}}},[t._v("查看详情")])]}}])})],1),t._v(" "),a("div",{staticClass:"block mb20"},[a("el-pagination",{attrs:{"page-sizes":[10,20,30,40],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"查看详情",visible:t.dialogVisible,width:"650px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoadingPink,expression:"listLoadingPink"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableDataPink.data,size:"mini"}},[a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"头像","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.avatar,"preview-src-list":[t.row.avatar]}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"用户名称",prop:"nickname","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"订单编号",prop:"orderId","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{label:"金额",prop:"totalPrice","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"订单状态","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.refundStatus?a("span",[t._v(t._s(t._f("orderStatusFilter")(e.row.orderStatus)))]):a("span",[t._v(t._s(t._f("refundStatusFilter")(e.row.refundStatus)))])]}}])})],1)],1)],1)},l=[],n=a("b7be"),s=a("0f56"),o=a("e350"),r={name:"groupList",components:{cardsData:s["a"]},data:function(){return{listLoadingPink:!1,dialogVisible:!1,tableDataPink:{data:[]},tableData:{data:[],total:0},listLoading:!1,tableFrom:{dateLimit:"",status:"",page:1,limit:20},fromList:this.$constants.fromList,timeVal:[],cardLists:[]}},mounted:function(){this.getStatistics(),this.getList()},methods:{checkPermi:o["a"],handleClose:function(){this.dialogVisible=!1},handleLook:function(t){this.dialogVisible=!0,this.getPink(t)},getPink:function(t){var e=this;this.listLoadingPink=!0,Object(n["p"])(t).then((function(t){e.tableDataPink.data=t,e.listLoadingPink=!1})).catch((function(){e.listLoadingPink=!1}))},selectChange:function(t){this.tableFrom.dateLimit=t,this.tableFrom.page=1,this.timeVal=[],this.getList()},onchangeTime:function(t){this.timeVal=t,this.tableFrom.dateLimit=t?this.timeVal.join(","):"",this.tableFrom.page=1,this.getList()},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(n["o"])(this.tableFrom).then((function(t){e.tableData.data=t.list,e.tableData.total=t.total,e.listLoading=!1})).catch((function(){e.listLoading=!1}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},getStatistics:function(){var t=this;Object(n["q"])().then((function(e){t.cardLists=[{name:"参与人数(人)",count:e.countPeople,color:"#1890FF",class:"one",icon:"iconleijiyonghushu"},{name:"成团数量(个)",count:e.countTeam,color:"#A277FF",class:"two",icon:"iconxinzengyonghu"}]})).catch((function(){t.listLoading=!1}))}}},c=r,d=(a("5da5"),a("2877")),m=Object(d["a"])(c,i,l,!1,null,"50251cfe",null);e["default"]=m.exports}}]);