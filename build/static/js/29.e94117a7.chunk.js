(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[29],{3389:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=(t(338),t(670));t(89),t(458),t(457);function i(n,e,t,r,o,a,i){try{var c=n[a](i),u=c.value}catch(s){return void t(s)}c.done?e(u):Promise.resolve(u).then(r,o)}e.default=function(n){var e=n.apiKey,r=n.networkId,c=n.preferred,u=n.label,s=n.iconSrc;return{name:u||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:s,wallet:function(){var n,c=(n=o.a.mark((function n(i){var c,u,s,l,v;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(37).then(t.t.bind(null,3619,7));case 2:return c=n.sent,u=c.default,s=new u(e,1===r?void 0:Object(a.f)(r)),l=s.getProvider(),v=i.BigNumber,n.abrupt("return",{provider:l,instance:s,interface:{name:"Fortmatic",connect:s.user.login,disconnect:s.user.logout,address:{get:function(){return Promise.resolve(l.account)}},network:{get:function(){return Promise.resolve(r)}},balance:{get:function(){return l.account&&s.user.getBalances().then((function(n){return n[0]?v(n[0].crypto_amount).times(v("1000000000000000000")).toString(10):null}))}}}});case 8:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var a=n.apply(e,t);function c(n){i(a,r,o,c,u,"next",n)}function u(n){i(a,r,o,c,u,"throw",n)}c(void 0)}))});return function(n){return c.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:c}}}}]);
//# sourceMappingURL=29.e94117a7.chunk.js.map