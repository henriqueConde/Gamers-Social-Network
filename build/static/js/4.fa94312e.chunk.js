(this.webpackJsonpGamer=this.webpackJsonpGamer||[]).push([[4],{148:function(t,a,e){t.exports={graph:"UserStatsGraphs_graph__3zKtr",graphItem:"UserStatsGraphs_graphItem__3SRjL",total:"UserStatsGraphs_total__eiXzN"}},259:function(t,a,e){"use strict";e.r(a);var r=e(6),n=e(0),s=e.n(n),c=e(148),o=e.n(c),i=e(260);a.default=function(t){var a=t.data,e=s.a.useState([]),n=Object(r.a)(e,2),c=n[0],l=n[1],u=s.a.useState(0),p=Object(r.a)(u,2),m=p[0],f=p[1];return s.a.useEffect((function(){if(console.log(a),a.length){var t=a.map((function(t){return{x:t.title,y:Number(t.access_count)}}));f(a.map((function(t){var a=t.access_count;return Number(a)})).reduce((function(t,a){return t+a}))),l(t)}}),[a]),s.a.createElement("section",{className:"".concat(o.a.graph," animeLeft")},s.a.createElement("div",{className:"".concat(o.a.total," ").concat(o.a.graphItem)},s.a.createElement("p",null,"Views: ",m)),s.a.createElement("div",{className:o.a.graphItem},s.a.createElement(i.a,{data:c,innerRadius:50,padding:{top:20,bottom:20,left:80,right:80},style:{data:{fillOpacity:.9,stroke:"#fff",strokeWidth:2},labels:{fontSize:16,fill:"#C5CBD9"}}})))}}}]);
//# sourceMappingURL=4.fa94312e.chunk.js.map