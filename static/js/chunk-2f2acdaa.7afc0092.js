(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f2acdaa"],{"5c89":function(t,e,a){},"86b3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"container"},[a("el-form",{attrs:{inline:"",size:"small"}},[a("el-form-item",{attrs:{label:"规格搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品规格",clearable:""},model:{value:t.tableFrom.keywords,callback:function(e){t.$set(t.tableFrom,"keywords",e)},expression:"tableFrom.keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.seachList},slot:"append"})],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"acea-row"},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:product:rule:save"],expression:"['admin:product:rule:save']"}],attrs:{size:"small",type:"primary"},on:{click:t.add}},[t._v("添加商品规格")]),t._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:product:rule:delete"],expression:"['admin:product:rule:delete']"}],attrs:{size:"small"},on:{click:t.handleDeleteAll}},[t._v("批量删除")])],1)]),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini","highlight-current-row":""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ruleName",label:"规格名称","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品规格","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.ruleValue,(function(e,i){return a("span",{key:i,staticClass:"mr10",domProps:{textContent:t._s(e.value)}})}))}}])}),t._v(" "),a("el-table-column",{attrs:{label:"商品属性","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.ruleValue,(function(e,i){return a("div",{key:i,domProps:{textContent:t._s(e.detail.join(","))}})}))}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:product:rule:update","admin:product:rule:info"],expression:"['admin:product:rule:update','admin:product:rule:info']"}],staticClass:"mr10",attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:product:rule:delete"],expression:"['admin:product:rule:delete']"}],attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},l=[],n=a("73f5"),s={name:"StoreAttr",data:function(){return{formDynamic:{ruleName:"",ruleValue:[]},tableFrom:{page:1,limit:20,keywords:""},tableData:{data:[],loading:!1,total:0},listLoading:!0,selectionList:[],multipleSelectionAll:[],idKey:"id",nextPageFlag:!1,keyNum:0}},mounted:function(){this.getList()},methods:{seachList:function(){this.tableFrom.page=1,this.getList()},handleSelectionChange:function(t){var e=this;this.selectionList=t,setTimeout((function(){e.changePageCoreRecordData()}),50)},setSelectRow:function(){if(this.multipleSelectionAll&&!(this.multipleSelectionAll.length<=0)){var t=this.idKey,e=[];this.multipleSelectionAll.forEach((function(a){e.push(a[t])})),this.$refs.table.clearSelection();for(var a=0;a<this.tableData.data.length;a++)e.indexOf(this.tableData.data[a][t])>=0&&this.$refs.table.toggleRowSelection(this.tableData.data[a],!0)}},changePageCoreRecordData:function(){var t=this.idKey,e=this;if(this.multipleSelectionAll.length<=0)this.multipleSelectionAll=this.selectionList;else{var a=[];this.multipleSelectionAll.forEach((function(e){a.push(e[t])}));var i=[];this.selectionList.forEach((function(l){i.push(l[t]),a.indexOf(l[t])<0&&e.multipleSelectionAll.push(l)}));var l=[];this.tableData.data.forEach((function(e){i.indexOf(e[t])<0&&l.push(e[t])})),l.forEach((function(i){if(a.indexOf(i)>=0)for(var l=0;l<e.multipleSelectionAll.length;l++)if(e.multipleSelectionAll[l][t]==i){e.multipleSelectionAll.splice(l,1);break}}))}},add:function(){var t=this;this.$modalAttr(Object.assign({},this.formDynamic),(function(){t.getList()}),this.keyNum+=1)},getList:function(){var t=this;this.listLoading=!0,Object(n["x"])(this.tableFrom).then((function(e){var a=e.list;t.tableData.data=a,t.tableData.total=e.total;for(var i=0;i<a.length;i++)a[i].ruleValue=JSON.parse(a[i].ruleValue);t.$nextTick((function(){this.setSelectRow()})),t.listLoading=!1})).catch((function(){t.listLoading=!1}))},pageChange:function(t){this.changePageCoreRecordData(),this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.changePageCoreRecordData(),this.tableFrom.limit=t,this.getList()},handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(n["b"])(t).then((function(){a.$message.success("删除成功"),a.tableData.data.splice(e,1)}))})).catch((function(){}))},handleDeleteAll:function(){var t=this;if(!this.multipleSelectionAll.length)return this.$message.warning("请选择商品规格");var e=[];this.multipleSelectionAll.map((function(t){e.push(t.id)})),this.ids=e.join(","),this.$modalSure().then((function(){Object(n["b"])(t.ids).then((function(){t.$message.success("删除成功"),t.getList()}))})).catch((function(){}))},onEdit:function(t){var e=this;this.$modalAttr(JSON.parse(JSON.stringify(t)),(function(){e.getList()}))}}},o=s,r=(a("a0e5"),a("2877")),c=Object(r["a"])(o,i,l,!1,null,"12aa1f30",null);e["default"]=c.exports},a0e5:function(t,e,a){"use strict";a("5c89")}}]);