(this.webpackJsonpdelivery_app=this.webpackJsonpdelivery_app||[]).push([[0],{35:function(e,t,a){e.exports=a(59)},40:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},42:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(20),o=a.n(l),c=(a(40),a(41),a(42),a(18)),s=a(2),m=a(34),i="Order Received",d="Order in Process",u="Order Delivered",p="Order Completed",E=a(15),v=a.n(E),N=a(4),h=a.n(N),b=[{id:v()(),personName:"Ramakrishnan",personMobile:"8605429395",personAddress:"Pune",itemName:"Mac Pro",orderDate:h()(),itemPrice:150000.75,itemQty:2,itemStatus:p},{id:v()(),personName:"Kumar",personMobile:"2423424",personAddress:"Salem",itemName:"PC",orderDate:h()(),itemPrice:75000.25,itemQty:1,itemStatus:d},{id:v()(),personName:"Rajesh",personMobile:"2423424",personAddress:"Salem",itemName:"Unix",orderDate:h()(),itemPrice:50000.25,itemQty:1,itemStatus:u},{id:v()(),personName:"Anil",personMobile:"2423424",personAddress:"Salem",itemName:"Linux",orderDate:h()(),itemPrice:40000.25,itemQty:1,itemStatus:i}],f={personName:"",personMobile:"",personAddress:"",orderDate:"",itemName:"",sortBy:"orderDate"},g=a(30),y=a.n(g),O=Object(c.d)(Object(c.c)({orders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ORDER":return[].concat(Object(m.a)(e),[t.order]);case"REMOVE_ORDER":return e.filter((function(e){return e.id!==t.id}));case"EDIT_ORDER":return e.map((function(e){return e.id==t.id?Object(s.a)(Object(s.a)({},e),t.updates):e}));default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PERSON_NAME_FILTER":return Object(s.a)(Object(s.a)({},e),{},{personName:t.personName});case"SET_PERSON_MOBILE_FILTER":return Object(s.a)(Object(s.a)({},e),{},{personMobile:t.personMobile});case"SET_PERSON_ADDRESS_FILTER":return Object(s.a)(Object(s.a)({},e),{},{personAddress:t.personAddress});case"SET_ORDER_DATE_FILTER":return Object(s.a)(Object(s.a)({},e),{},{orderDate:t.orderDate});case"SET_ITEM_NAME_FILTER":return console.log("item_name :",t.itemName),Object(s.a)(Object(s.a)({},e),{},{itemName:t.itemName});case"SORT_BY_ORDER_DATE":return Object(s.a)(Object(s.a)({},e),{},{sortBy:"orderDate"});case"SORT_BY_ITEM_PRICE":return Object(s.a)(Object(s.a)({},e),{},{sortBy:"itemPrice"});case"SORT_BY_PERSON_NAME":return Object(s.a)(Object(s.a)({},e),{},{sortBy:"personName"});case"SORT_BY_ITEM_NAME":return Object(s.a)(Object(s.a)({},e),{},{sortBy:"itemName"});default:return e}}}),Object(c.a)(y.a)),S=function(e,t){var a=t.personName,r=t.personMobile,n=t.personAddress,l=t.orderDate,o=t.itemName,c=t.sortBy;return e.filter((function(e){var t=e.personName.toLowerCase().includes(a.toLowerCase()),c=e.personMobile.includes(r),s=e.personAddress.toLowerCase().includes(n.toLowerCase()),m=e.itemName.toLowerCase().includes(o.toLowerCase()),i="number"!==typeof l||e.orderDate>=l;return t&&c&&s&&m&&i})).sort((function(e,t){return"orderDate"===c?e.orderDate<t.orderDate?1:-1:"itemPrice"===c?e.itemPrice<t.itemPrice?1:-1:"personName"===c?e.personName>t.personName?1:-1:"itemName"===c?e.itemName>t.itemName?1:-1:void 0}))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.personName,a=void 0===t?"":t,r=e.personMobile,n=void 0===r?"":r,l=e.personAddress,o=void 0===l?"":l,c=e.itemName,s=void 0===c?"":c,m=e.orderDate,d=void 0===m?h()():m,u=e.itemPrice,p=void 0===u?0:u,E=e.itemQty,N=void 0===E?0:E,b=e.itemStatus,f=void 0===b?i:b;return{type:"ADD_ORDER",order:{id:v()(),personName:a,personMobile:n,personAddress:o,itemName:s,orderDate:d,itemPrice:p,itemQty:N,itemStatus:f}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_PERSON_NAME_FILTER",personName:e}},R=function(e){return{type:"SET_PERSON_MOBILE_FILTER",personMobile:e}};O.subscribe((function(){var e=O.getState(),t=S(e.orders,e.filters);console.log(t)}));var _=a(5),C=a(9),I=a(3),j=function(){return n.a.createElement("div",{className:"container mt-4"},n.a.createElement("nav",{className:"mb-4 navbar navbar-expand-lg navbar-dark cyan"},n.a.createElement(C.c,{className:"navbar-brand font-bold",to:"/",activeClassName:"is-active",exact:!0},"Delivery App "),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-4","aria-controls":"navbarSupportedContent-4","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent-4"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement(C.c,{className:"nav-link",to:"/",activeClassName:"is-active",exact:!0},n.a.createElement("i",{className:"fa fa-home"})," Dashboard ",n.a.createElement("span",{className:"sr-only"},"(current)")," ")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(C.c,{className:"nav-link",to:"/create",activeClassName:"is-active"},n.a.createElement("i",{className:"fa fa-shopping-cart"})," Orders ")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(C.c,{className:"nav-link",to:"/help",activeClassName:"is-active"},n.a.createElement("i",{className:"fa fa-info-circle"})," Help "))))))},M=a(11),A=a(12),T=a(14),w=a(13),x=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(e){var r;return Object(M.a)(this,a),(r=t.call(this,e)).onPersonNameChange=function(e){var t=e.target.value;r.setState((function(){return{personName:t}}))},r.onPersonMobileChange=function(e){var t=e.target.value;r.setState((function(){return{personMobile:t}}))},r.onPersonAddressChange=function(e){var t=e.target.value;r.setState((function(){return{personAddress:t}}))},r.onItemNameChange=function(e){var t=e.target.value;r.setState((function(){return{itemName:t}}))},r.onItemPriceChange=function(e){var t=e.target.value;r.setState((function(){return{itemPrice:t}}))},r.onItemQtyChange=function(e){var t=e.target.value;r.setState((function(){return{itemQty:t}}))},r.onFocusChange=function(e){var t=e.focused;r.setState((function(){return{calendarFocused:t}}))},r.onSubmit=function(e){e.preventDefault(),r.state.personName&&r.state.personMobile&&r.state.itemPrice&&r.state.itemQty?(r.setState((function(){return{error:""}})),r.props.onSubmit({personName:r.state.personName,personMobile:r.state.personMobile,personAddress:r.state.personAddress,itemName:r.state.itemName,orderDate:h()(),itemPrice:parseFloat(r.state.itemPrice),itemQty:r.state.itemQty,itemStatus:i})):r.setState((function(){return{error:"Person Name, mobile and Item price, quantity are mandatory"}}))},r.state={personName:e.order?e.order.personName:"",personMobile:e.order?e.order.personMobile:"",personAddress:e.order?e.order.personAddress:"",itemName:e.order?e.order.itemName:"",orderDate:e.order?h()(e.order.orderDate):"",itemPrice:e.order?e.order.itemPrice:"",itemQty:e.order?e.order.itemQty:"",error:"",calendarFocused:!1},r}return Object(A.a)(a,[{key:"render",value:function(){var e=this.props.title?this.props.title:"Add Delivery Order",t=this.props.title?n.a.createElement("button",{onClick:this.props.onRemove,className:"btn btn-danger text-right"},"Remove Order"):"",a=this.props.title?"Update the Order":"Add Delivery Order";return n.a.createElement("div",{className:"container",style:{width:"60%"}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("i",{className:"fa fa-plus-circle"})," ",e),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"alert alert-danger"},this.state.error&&n.a.createElement("p",null,this.state.error)),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the Person Name",autoFocus:!0,value:this.state.personName,onChange:this.onPersonNameChange,required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Mobile"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the Person Mobile",value:this.state.personMobile,onChange:this.onPersonMobileChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"message"},"Address"),n.a.createElement("textarea",{className:"form-control",id:"message",rows:"3",value:this.state.personAddress,onChange:this.onPersonAddressChange,placeholder:"Enter the Address",required:!0})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Item Name"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the Item Name",value:this.state.itemName,onChange:this.onItemNameChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Item Price"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the Item Price",value:this.state.itemPrice,onChange:this.onItemPriceChange})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Item Quantity"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter the Item Quantity",value:this.state.itemQty,onChange:this.onItemQtyChange})),n.a.createElement("div",{className:"mx-auto"},n.a.createElement("button",{type:"submit",className:"btn btn-primary text-right"},a),t)))))))}}]),a}(r.Component),k=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(M.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).onSubmit=function(t){e.props.addOrder(t),e.props.history.push("/")},e}return Object(A.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x,{onSubmit:this.onSubmit}))}}]),a}(r.Component),B=Object(_.b)(void 0,(function(e){return{addOrder:function(t){return e(D(t))}}}))(k),L=a(17),Q=(a(51),a(52),a(32)),F=a.n(Q),U=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(e){var r;return Object(M.a)(this,a),(r=t.call(this,e)).renderIcon=r.renderIcon.bind(Object(L.a)(r)),r}return Object(A.a)(a,[{key:"renderIcon",value:function(e){return e.data===i?n.a.createElement("span",{className:"label label-success"},e.data):e.data===p?n.a.createElement("span",{className:"label label-info"},e.data):e.data===u?n.a.createElement("span",{className:"label label-warning"},e.data):e.data===d?n.a.createElement("span",{className:"label label-important"},e.data):void 0}},{key:"render",value:function(){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement(C.b,{to:"/edit/".concat(this.props.id)},this.props.personName)," "),n.a.createElement("td",null,this.props.itemName),n.a.createElement("td",null,h()(this.props.orderDate).format("MMM Do, YYYY")),n.a.createElement("td",null,"\u20b9 ",F.a.format(this.props.itemPrice)),n.a.createElement("td",null,this.props.itemQty),n.a.createElement("td",null,this.renderIcon({data:this.props.itemStatus})),n.a.createElement("td",null,n.a.createElement(C.b,{to:"/summary/".concat(this.props.id)},n.a.createElement("i",{class:"fa fa-print","aria-hidden":"true"}))," "))}}]),a}(r.Component),Y=Object(_.b)()(U),W=Object(_.b)((function(e){return{orders:S(e.orders,e.filters)}}))((function(e){return n.a.createElement("div",{className:"row",style:{marginBottom:"20px"}},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("i",{className:"fa fa-cart-plus"})," Order Details"),n.a.createElement("div",{className:"card-body"},n.a.createElement("table",{className:"table table-striped table-condensed"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Person Name"),n.a.createElement("th",null,"Item"),n.a.createElement("th",null,"Order date"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Status"),n.a.createElement("th",null,"Summary"))),n.a.createElement("tbody",null,e.orders.map((function(e){return n.a.createElement(Y,Object.assign({key:e.id},e))}))))))))})),q=Object(_.b)((function(e){return{filters:e.filters}}))((function(e){return n.a.createElement("div",{className:"row",style:{marginBottom:"20px"}},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header bg-primary text-white"},n.a.createElement("i",{className:"fa fa-cart-plus"})," Search Orders"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{marginBottom:"5px"}},n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Person Name ")," \xa0\xa0",n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){e.dispatch(P(t.target.value))}}))),n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Order Date ")," \xa0\xa0",n.a.createElement("input",{className:"form-control",type:"date",placeholder:"Search","aria-label":"Search",onChange:function(t){console.log(h()(t.target.value)),e.dispatch({type:"SET_ORDER_DATE_FILTER",orderDate:h()(t.target.value)})}})))),n.a.createElement("div",{className:"row",style:{marginBottom:"5px"}},n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Item Name ")," \xa0\xa0",n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){console.log(t.target.value),e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"SET_ITEM_NAME_FILTER",itemName:e}}(t.target.value))}}))),n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Mobile ")," \xa0\xa0",n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){console.log(t.target.value),e.dispatch(R(t.target.value))}})))),n.a.createElement("div",{className:"row",style:{marginBottom:"5px"}},n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Address ")," \xa0\xa0",n.a.createElement("input",{className:"form-control",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){console.log(t.target.value),e.dispatch({type:"SET_PERSON_ADDRESS_FILTER",personAddress:t.target.value})}}))),n.a.createElement("div",{className:"col"},n.a.createElement("form",{className:"form-inline"},n.a.createElement("label",null," Sort By ")," \xa0\xa0",n.a.createElement("select",{className:"browser-default custom-select",value:e.filters.sortBy,onChange:function(t){"OrderDate"===t.target.value?e.dispatch({type:"SORT_BY_ORDER_DATE"}):"Price"===t.target.value?e.dispatch({type:"SORT_BY_ITEM_PRICE"}):"Person Name"===t.target.value?e.dispatch({type:"SORT_BY_PERSON_NAME"}):"Item Name"===t.target.value&&e.dispatch({type:"SORT_BY_ITEM_NAME"})}},n.a.createElement("option",{selected:!0},"Choose Sort By"),n.a.createElement("option",{value:"OrderDate"},"OrderDate"),n.a.createElement("option",{value:"Price"},"Price"),n.a.createElement("option",{value:"Person Name"},"Person Name"),n.a.createElement("option",{value:"Item Name"},"Item Name"))))))))))}));var H=function(){return n.a.createElement("div",{className:"container",style:{width:"80%"}},n.a.createElement(q,null),n.a.createElement(W,null))},V=function(){return n.a.createElement("div",{className:"bottom section-padding"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("div",{className:"copyright"},n.a.createElement("p",null,"\xa9 ",n.a.createElement("span",null,"2020")," ",n.a.createElement("a",{href:"#",className:"transition"},"Ramakrishnan")," All rights reserved."))))))},J=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Help Page"))},K=function(){return n.a.createElement("div",{class:"page-wrap d-flex flex-row align-items-center"},n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"row justify-content-center"},n.a.createElement("div",{class:"col-md-12 text-center"},n.a.createElement("span",{class:"display-1 d-block"},"404"),n.a.createElement("div",{class:"mb-4 lead"},"The page you are looking for was not found."),n.a.createElement(C.c,{className:"nav-link",to:"/",activeClassName:"is-active"},n.a.createElement("i",{className:"fa fa-home"})," Back to Home ")))))},$=function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(){var e;Object(M.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).onSubmit=function(t){e.props.editOrder(e.props.order.id,t),e.props.history.push("/")},e.onRemoveOrder=function(){e.props.removeOrder(e.props.order.id),e.props.history.push("/")},e}return Object(A.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(x,{title:"Edit Delivery Order",order:this.props.order,onSubmit:this.onSubmit,onRemove:this.onRemoveOrder}))}}]),a}(n.a.Component),z=Object(_.b)((function(e,t){return{order:e.orders.find((function(e){return e.id===t.match.params.id}))}}),(function(e,t){return{editOrder:function(t,a){return e(function(e,t){return{type:"EDIT_ORDER",id:e,updates:t}}(t,a))},removeOrder:function(t){return e(function(e){return{type:"REMOVE_ORDER",id:e}}(t))}}}))($),G=a(33),X=a.n(G);var Z=Object(_.b)((function(e,t){return{order:e.orders.find((function(e){return e.id===t.match.params.id}))}}))((function(e){if(!e.order)return e.history.push("/"),null;console.log(" order : ",e.order);var t=Math.floor(e.order.itemPrice*e.order.itemQty);return console.log(t),n.a.createElement("section",{className:"content content_content",style:{width:"70%",margin:"auto"}},n.a.createElement("section",{className:"invoice"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12"},n.a.createElement("h2",{className:"page-header"},n.a.createElement("i",{className:"fa fa-globe"})," Delivery App.",n.a.createElement("small",{className:"pull-right"},"   ")))),n.a.createElement("div",{className:"row invoice-info"},n.a.createElement("div",{className:"col-sm-4 invoice-col"},"From",n.a.createElement("address",null,n.a.createElement("strong",null," "))),n.a.createElement("div",{className:"col-sm-4 invoice-col"},"To",n.a.createElement("address",null,n.a.createElement("strong",null,e.order.personName),n.a.createElement("br",null),"Address:",e.order.personAddress)),n.a.createElement("div",{className:"col-sm-4 invoice-col"},n.a.createElement("b",null,"Invoice "),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("b",null,"Order ID:")," ",e.order.id,n.a.createElement("br",null))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 table-responsive"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Item Name"),n.a.createElement("th",null,"Qty"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Item Total"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,e.order.itemName),n.a.createElement("td",null,e.order.itemQty),n.a.createElement("td",null,e.order.itemPrice),n.a.createElement("td",null,e.order.itemPrice*e.order.itemQty)))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"table-responsive"},n.a.createElement("table",{className:"table"},n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Total:"),n.a.createElement("td",null,n.a.createElement("blink",null," ",n.a.createElement("b",null,X()(t).toUpperCase()," RUPEES")))))))))))})),ee=function(){return n.a.createElement(C.a,null,n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement(I.c,null,n.a.createElement(I.a,{path:"/",component:H,exact:!0}),n.a.createElement(I.a,{path:"/create",component:B}),n.a.createElement(I.a,{path:"/edit/:id",component:z}),n.a.createElement(I.a,{path:"/summary/:id",component:Z}),n.a.createElement(I.a,{path:"/help",component:J}),n.a.createElement(I.a,{component:K})),n.a.createElement(V,null)))},te=(n.a.Component,function(e){Object(T.a)(a,e);var t=Object(w.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"componentWillMount",value:function(){console.log("Component WILL MOUNT!")}},{key:"componentDidMount",value:function(){console.log("Component DID MOUNT!")}},{key:"componentWillReceiveProps",value:function(e){console.log("Component WILL RECIEVE PROPS!")}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"componentWillUpdate",value:function(e,t){console.log("Component WILL UPDATE!")}},{key:"componentDidUpdate",value:function(e,t){console.log("Component DID UPDATE!")}},{key:"componentWillUnmount",value:function(){console.log("Component WILL UNMOUNT!")}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,this.props.myNumber))}}]),a}(n.a.Component));var ae=function(){return n.a.createElement(_.a,{store:O},n.a.createElement("div",null,n.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.761ceefc.chunk.js.map