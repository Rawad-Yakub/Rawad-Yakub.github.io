(this["webpackJsonpbank-of-react"]=this["webpackJsonpbank-of-react"]||[]).push([[0],{41:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(33),r=n.n(s),i=(n(41),n(34)),o=n(24),d=n(18),u=n(9),b=n(10),j=n(11),l=n(12),h=n(21),p=n.n(h),O=n(4),m=n(2),x=n(22),f=n.n(x),v=n(0),D=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:["Balance: ",this.props.accountBalance]})}}]),n}(a.Component),g=D,y=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:"https://picsum.photos/200/200",alt:"bank"}),Object(v.jsx)("h1",{children:"Bank of React"}),Object(v.jsx)(O.b,{to:"/userProfile",children:"User Profile"}),Object(v.jsx)("br",{}),Object(v.jsx)(O.b,{to:"/login",children:"Login"}),Object(v.jsx)("br",{}),Object(v.jsx)(O.b,{to:"/credits",children:"Credits"}),Object(v.jsx)("br",{}),Object(v.jsx)(O.b,{to:"/debits",children:"Debits"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(g,{accountBalance:this.props.accountBalance})]})}}]),n}(a.Component),S=y,C=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"User Profile"}),Object(v.jsxs)("div",{children:["Username: ",this.props.userName]}),Object(v.jsxs)("div",{children:["Member Since: ",this.props.memberSince]}),Object(v.jsx)("br",{}),Object(v.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(a.Component),I=C,B=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=Object(d.a)({},a.state.user);e.userName=t.target.value,a.setState({user:e})},a.handleSubmit=function(t){t.preventDefault(),a.props.mockLogIn(a.state.user),a.setState({redirect:!0})},a.state={user:{userName:a.props.user.userName,password:""},redirect:!1},a}return Object(b.a)(n,[{key:"render",value:function(){return this.state.redirect?Object(v.jsx)(m.a,{to:"/userProfile"}):Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Login"}),Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"User Name"}),Object(v.jsx)("input",{type:"text",name:"userName",defaultValue:this.props.user.userName,onChange:this.handleChange})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("label",{children:"Password"}),Object(v.jsx)("input",{type:"password",name:"password"})]}),Object(v.jsx)("button",{children:"Log In"})]}),Object(v.jsx)("br",{}),Object(v.jsx)(O.b,{to:"/",children:"Return to Home"})]})}}]),n}(a.Component),k=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Credits"}),t.credits.map((function(t){var e=t.date.slice(0,10);return Object(v.jsxs)("li",{children:[t.amount," ",t.description," ",e]},"".concat(t.id,"-").concat(e))})),Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.addCredit(e)},children:[Object(v.jsx)("input",{type:"text",name:"description"}),Object(v.jsx)("input",{type:"number",name:"amount"}),Object(v.jsx)("button",{type:"submit",children:"Add Credit"})]}),Object(v.jsx)("br",{}),Object(v.jsx)(g,{accountBalance:t.accountBalance}),Object(v.jsx)(O.b,{to:"/",children:"Return to Home"})]})},L=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Debits"}),t.debits.map((function(t){var e=t.date.slice(0,10);return Object(v.jsxs)("li",{children:[t.amount," ",t.description," ",e]},t.id)})),Object(v.jsxs)("form",{onSubmit:t.addDebit,children:[Object(v.jsx)("input",{type:"text",name:"description"}),Object(v.jsx)("input",{type:"number",name:"amount"}),Object(v.jsx)("button",{type:"submit",children:"Add Debit"})]}),Object(v.jsx)("br",{}),Object(v.jsx)(g,{accountBalance:t.accountBalance}),Object(v.jsx)(O.b,{to:"/",children:"Return to Home"})]})},N=function(t){Object(j.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(u.a)(this,n),(t=e.call(this)).mockLogIn=function(e){var n=Object(d.a)({},t.state.currentUser);n.userName=e.userName,t.setState({currentUser:n})},t.addDebit=function(e){e.preventDefault();var n=(new Date).toJSON().slice(0,10),a=parseInt(e.target.elements.amount.value),c={id:t.state.debitID,description:e.target.elements.description.value,amount:a,date:n},s=[].concat(Object(o.a)(t.state.debitList),[c]),r=t.state.totalDebits+a,i=t.state.accountBalance-a;t.setState({debitList:s,totalDebits:r,accountBalance:i,debitID:t.state.debitID+1})},t.addCredit=function(e){e.preventDefault();var n=(new Date).toJSON().slice(0,10),a=parseInt(e.target.elements.amount.value),c={id:t.state.creditID,description:e.target.elements.description.value,amount:a,date:n},s=[].concat(Object(o.a)(t.state.creditList),[c]),r=t.state.totalCredits+a,i=t.state.accountBalance+a;t.setState({creditList:s,totalCredits:r,accountBalance:i,creditID:t.state.creditID+1})},t.state={debitID:1,creditID:1,accountBalance:3e3,totalCredits:0,totalDebits:0,creditList:[],debitList:[],currentUser:{userName:"Joe Smith",memberSince:"11/22/99"}},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(p.a.mark((function t(){var e,n,a,c,s,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://johnnylaicode.github.io/api/debits.json",e="https://johnnylaicode.github.io/api/credits.json",t.prev=2,t.next=5,f.a.get("https://johnnylaicode.github.io/api/debits.json");case 5:for(a in(n=t.sent).data)n.data.hasOwnProperty(a)&&(c={id:this.state.debitID,description:n.data[a].description,amount:n.data[a].amount,date:n.data[a].date},this.state.debitList.push(c),this.setState({totalDebits:this.state.totalDebits+n.data[a].amount}),this.setState({debitID:this.state.debitID+1}));t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),t.t0.response&&(console.log(t.t0.response.data),console.log(t.t0.response.status));case 12:return t.prev=12,t.next=15,f.a.get(e);case 15:for(a in(s=t.sent).data)s.data.hasOwnProperty(a)&&(r={id:this.state.creditID,description:s.data[a].description,amount:s.data[a].amount,date:s.data[a].date},this.state.creditList.push(r),this.setState({totalCredits:this.state.totalCredits+s.data[a].amount}),this.setState({creditID:this.state.creditID+1}));t.next=22;break;case 19:t.prev=19,t.t1=t.catch(12),t.t1.response&&(console.log(t.t1.response.data),console.log(t.t1.response.status));case 22:case"end":return t.stop()}}),t,this,[[2,9],[12,19]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(v.jsx)(O.a,{basename:"/my-react-app",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(v.jsx)(S,{accountBalance:t.state.accountBalance})}}),Object(v.jsx)(m.b,{exact:!0,path:"/userProfile",render:function(){return Object(v.jsx)(I,{userName:t.state.currentUser.userName,memberSince:t.state.currentUser.memberSince})}}),Object(v.jsx)(m.b,{exact:!0,path:"/login",render:function(){return Object(v.jsx)(B,{user:t.state.currentUser,mockLogIn:t.mockLogIn})}}),Object(v.jsx)(m.b,{exact:!0,path:"/credits",render:function(){return Object(v.jsx)(k,{credits:t.state.creditList,accountBalance:t.state.accountBalance,addCredit:t.addCredit})}}),Object(v.jsx)(m.b,{exact:!0,path:"/debits",render:function(){return Object(v.jsx)(L,{debits:t.state.debitList,accountBalance:t.state.accountBalance,addDebit:t.addDebit})}})]})})}}]),n}(a.Component),w=N,P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.a5e218c4.chunk.js.map