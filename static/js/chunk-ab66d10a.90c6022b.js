(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab66d10a"],{"2eb3":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"l",(function(){return i})),n.d(t,"k",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"j",(function(){return f}));var a=n("b775");function l(e){var t={id:e.id};return Object(a["a"])({url:"/admin/system/admin/delete",method:"GET",params:t})}function o(e){return Object(a["a"])({url:"/admin/system/admin/list",method:"GET",params:e})}function s(e){var t={account:e.account,level:e.level,pwd:e.pwd,realName:e.realName,roles:e.roles.join(","),status:e.status,phone:e.phone};return Object(a["a"])({url:"/admin/system/admin/save",method:"POST",data:t})}function r(e){var t={account:e.account,level:e.level,pwd:e.pwd,roles:e.roles,realName:e.realName,status:e.status,id:e.id,isDel:e.isDel};return Object(a["a"])({url:"/admin/system/admin/update",method:"POST",data:t})}function i(e){return Object(a["a"])({url:"/admin/system/admin/updateStatus",method:"get",params:e})}function u(e){return Object(a["a"])({url:"/admin/system/admin/update/isSms",method:"get",params:e})}function m(e){var t={menuType:e.menuType,name:e.name};return Object(a["a"])({url:"/admin/system/menu/list",method:"get",params:t})}function c(e){var t=e;return Object(a["a"])({url:"/admin/system/menu/add",method:"post",data:t})}function d(e){return Object(a["a"])({url:"/admin/system/menu/delete/".concat(e),method:"post"})}function p(e){return Object(a["a"])({url:"/admin/system/menu/info/".concat(e),method:"get"})}function f(e){var t=e;return Object(a["a"])({url:"/admin/system/menu/update",method:"post",data:t})}},"54f4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入菜单名称",clearable:"",size:"small"},model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态",prop:"menuType"}},[n("el-select",{attrs:{placeholder:"菜单状态",clearable:"",size:"small"},model:{value:e.queryParams.menuType,callback:function(t){e.$set(e.queryParams,"menuType",t)},expression:"queryParams.menuType"}},e._l(e.statusOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"info",plain:"",icon:"el-icon-sort",size:"mini"},on:{click:e.toggleExpandAll}},[e._v("展开/折叠")])],1)],1),e._v(" "),e.refreshTable?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.menuList,"row-key":"id","default-expand-all":e.isExpandAll,"tree-props":{children:"children",hasChildren:"hasChildren"},"header-cell-style":{fontWeight:"bold"}}},[n("el-table-column",{attrs:{prop:"name",label:"菜单名称","show-overflow-tooltip":!0,width:"160"}}),e._v(" "),n("el-table-column",{attrs:{prop:"icon",label:"图标",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("i",{class:"el-icon-"+e.row.icon,staticStyle:{"font-size":"20px"}})]}}],null,!1,244404100)}),e._v(" "),n("el-table-column",{attrs:{prop:"sort",label:"排序",width:"60"}}),e._v(" "),n("el-table-column",{attrs:{prop:"perms",label:"权限标识","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{prop:"component",label:"组件路径","show-overflow-tooltip":!0}}),e._v(" "),n("el-table-column",{attrs:{prop:"isShow",label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tag",{attrs:{type:t.row.isShow?"":"danger"}},[e._v(e._s(t.row.isShow?"显示":"隐藏"))])]}}],null,!1,2038216616)}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}],null,!1,3078210614)}),e._v(" "),n("el-table-column",{attrs:{prop:"menuType",label:"类型",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return["M"==t.row.menuType?n("span",{staticClass:"type_tag one"},[e._v("目录")]):"C"==t.row.menuType?n("span",{staticClass:"type_tag two"},[e._v("菜单")]):n("span",{staticClass:"type_tag three",attrs:{type:"info"}},[e._v("按钮")])]}}],null,!1,4965977)}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:system:menu:info"],expression:"['admin:system:menu:info']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:system:menu:add"],expression:"['admin:system:menu:add']"}],attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(n){return e.handleAdd(t.row)}}},[e._v("新增")]),e._v(" "),n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:system:menu:delete"],expression:"['admin:system:menu:delete']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDelete(t.row)}}},[e._v("删除")])]}}],null,!1,1405516454)})],1):e._e(),e._v(" "),n("el-dialog",{attrs:{title:e.title,visible:e.open,width:"680px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"100px"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"上级菜单"}},[n("treeselect",{attrs:{options:e.menuOptions,normalizer:e.normalizer,"show-count":!0,placeholder:"选择上级菜单"},model:{value:e.form.pid,callback:function(t){e.$set(e.form,"pid",t)},expression:"form.pid"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},[n("el-form-item",{attrs:{label:"菜单类型",prop:"menuType"}},[n("el-radio-group",{model:{value:e.form.menuType,callback:function(t){e.$set(e.form,"menuType",t)},expression:"form.menuType"}},[n("el-radio",{attrs:{label:"M"}},[e._v("目录")]),e._v(" "),n("el-radio",{attrs:{label:"C"}},[e._v("菜单")]),e._v(" "),n("el-radio",{attrs:{label:"A"}},[e._v("按钮")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:24}},["A"!=e.form.menuType?n("el-form-item",{attrs:{label:"菜单图标"}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请选择菜单图标"},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-circle-plus-outline"},on:{click:e.addIcon},slot:"append"})],1)],1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"菜单名称",prop:"menuName"}},[n("el-input",{attrs:{placeholder:"请输入菜单名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"显示排序",prop:"sort"}},[n("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),e._v(" "),"A"!==e.form.menuType?n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{prop:"component"}},[n("span",{attrs:{slot:"label"},slot:"label"},[n("el-tooltip",{attrs:{content:"访问的组件路径，如：`system/user/index`，默认在`views`目录下",placement:"top"}},[n("i",{staticClass:"el-icon-question"})]),e._v("\n              组件路径\n            ")],1),e._v(" "),n("el-input",{attrs:{placeholder:"请输入组件路径"},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1):e._e(),e._v(" "),n("el-col",{attrs:{span:12}},["M"!=e.form.menuType?n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入权限标识",maxlength:"100"},model:{value:e.form.perms,callback:function(t){e.$set(e.form,"perms",t)},expression:"form.perms"}}),e._v(" "),n("span",{attrs:{slot:"label"},slot:"label"},[n("el-tooltip",{attrs:{content:"控制器中定义的权限字符，如：@PreAuthorize(`@ss.hasPermi('system:user:list')`)",placement:"top"}},[n("i",{staticClass:"el-icon-question"})]),e._v("\n              权限字符\n            ")],1)],1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",[n("span",{attrs:{slot:"label"},slot:"label"},[n("el-tooltip",{attrs:{content:"选择隐藏则路由将不会出现在侧边栏，但仍然可以访问",placement:"top"}},[n("i",{staticClass:"el-icon-question"})]),e._v("\n              显示状态\n            ")],1),e._v(" "),n("el-radio-group",{model:{value:e.form.isShow,callback:function(t){e.$set(e.form,"isShow",t)},expression:"form.isShow"}},e._l(e.showStatus,(function(t){return n("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["admin:system:menu:update"],expression:"['admin:system:menu:update']"}],attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),n("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)],1)},l=[],o=n("2eb3"),s=n("ca17"),r=n.n(s),i=(n("542c"),n("61f7")),u={name:"Menu",components:{Treeselect:r.a},data:function(){return{listLoading:!0,showSearch:!0,menuList:[],menuOptions:[],title:"",open:!1,isExpandAll:!1,refreshTable:!0,queryParams:{name:"",menuType:""},form:{},menuDataList:[],rules:{name:[{required:!0,message:"菜单名称不能为空",trigger:"blur"}],sort:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}]},statusOptions:[{value:"M",label:"目录"},{value:"C",label:"菜单"},{value:"A",label:"按钮"}],showStatus:[{label:"显示",value:!0},{label:"隐藏",value:!1}]}},created:function(){this.getList()},methods:{addIcon:function(){var e=this;e.$modalIcon((function(t){e.form.icon=t}))},getList:function(){var e=this;this.listLoading=!0,Object(o["i"])(this.queryParams).then((function(t){var n={},a=[];t.forEach((function(e){n=e,n.parentId=e.pid,n.children=[],a.push(n)})),e.menuDataList=a,e.menuList=e.handleTree(a,"menuId"),e.listLoading=!1}))},normalizer:function(e){return e.children&&!e.children.length&&delete e.children,{id:e.id?e.id:0,label:e.name?e.name:"主目录",children:e.children}},getTreeselect:function(){this.menuOptions=[];var e={menuId:0,menuName:"主类目",children:[]};e.children=this.handleTree(this.menuDataList,"menuId"),this.menuOptions.push(e)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={menuId:"",parentId:0,name:"",icon:"",menuType:"M",sort:0,isShow:!0,component:"",perms:""},this.resetForm("form")},handleQuery:function(){this.getList()},resetQuery:function(){this.queryParams={name:"",menuType:""},this.handleQuery()},handleAdd:function(e){this.reset(),null!=e&&e.id?this.form.pid=e.id:this.form.pid=0,this.open=!0,this.title="添加菜单"},toggleExpandAll:function(){var e=this;this.refreshTable=!1,this.isExpandAll=!this.isExpandAll,this.$nextTick((function(){e.refreshTable=!0}))},handleUpdate:function(e){var t=this,n=this.$loading({lock:!0,text:"Loading"});this.reset(),this.getTreeselect(),Object(o["h"])(e.id).then((function(e){t.form=e,t.open=!0,t.title="修改菜单",n.close()}))},submitForm:Object(i["a"])((function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.id?Object(o["j"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(o["f"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))})),handleDelete:function(e){var t=this;this.$modal.confirm('是否确认删除名称为"'+e.name+'"的数据项？').then((function(){return Object(o["g"])(e.id)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))}}},m=u,c=(n("addb"),n("2877")),d=Object(c["a"])(m,a,l,!1,null,null,null);t["default"]=d.exports},addb:function(e,t,n){"use strict";n("fb34")},fb34:function(e,t,n){}}]);