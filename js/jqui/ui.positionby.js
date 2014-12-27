/*
 * positionBy 1.0.7 (2008-01-29)
 *
 * Copyright (c) 2006,2007 Jonathan Sharp (http://jdsharp.us)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://jdsharp.us/
 *
 * Built upon jQuery 1.2.2 (http://jquery.com)
 * This also requires the jQuery dimensions plugin
 */
(function($){var A=function(a,b,c,d){this.x1=a;this.x2=c;this.y1=b;this.y2=d};A.prototype.contains=function(a){return(this.x1<=a.x1&&a.x2<=this.x2)&&(this.y1<=a.y1&&a.y2<=this.y2)};A.prototype.transform=function(x,y){return new A(this.x1+x,this.y1+y,this.x2+x,this.y2+y)};$.fn.positionBy=function(q){var r=new Date();if(this.length==0){return this}var q=$.extend({target:null,targetPos:null,elementPos:null,x:null,y:null,positions:null,addClass:false,force:false,container:window},q);if(q.x!=null){var s=q.x;var t=q.y;var u=0;var v=0}else{var w=$($(q.target)[0]);var u=w.outerWidth();var v=w.outerHeight();var x=w.offset();var s=x.left;var t=x.top}var y=s+u;var z=t+v;return this.each(function(){var c=$(this);if(!c.is(':visible')){c.css({left:-3000,top:-3000}).show()}var d=c.outerWidth();var e=c.outerHeight();var f=[];var g=[];f[0]=new A(y,t,y+d,t+e);g[0]=[1,7,4];f[1]=new A(y,z-e,y+d,z);g[1]=[0,6,4];f[2]=new A(y,z,y+d,z+e);g[2]=[1,3,10];f[3]=new A(y-d,z,y,z+e);g[3]=[1,6,10];f[4]=new A(s,z,s+d,z+e);g[4]=[1,6,9];f[5]=new A(s-d,z,s,z+e);g[5]=[6,4,9];f[6]=new A(s-d,z-e,s,z);g[6]=[7,1,4];f[7]=new A(s-d,t,s,t+e);g[7]=[6,0,4];f[8]=new A(s-d,t-e,s,t);g[8]=[7,9,4];f[9]=new A(s,t-e,s+d,t);g[9]=[0,7,4];f[10]=new A(y-d,t-e,y,t);g[10]=[0,7,3];f[11]=new A(y,t-e,y+d,t);g[11]=[0,10,3];f[12]=new A(y-d,t,y,t+e);g[12]=[13,7,10];f[13]=new A(y-d,z-e,y,z);g[13]=[12,6,3];f[14]=new A(s,z-e,s+d,z);g[14]=[15,1,4];f[15]=new A(s,t,s+d,t+e);g[15]=[14,0,9];if(q.positions!==null){var h=q.positions[0]}else if(q.targetPos!=null&&q.elementPos!=null){var h=[];h[0]=[];h[0][0]=15;h[0][1]=7;h[0][2]=8;h[0][3]=9;h[1]=[];h[1][0]=0;h[1][1]=12;h[1][2]=10;h[1][3]=11;h[2]=[];h[2][0]=2;h[2][1]=3;h[2][2]=13;h[2][3]=1;h[3]=[];h[3][0]=4;h[3][1]=5;h[3][2]=6;h[3][3]=14;var h=h[q.targetPos][q.elementPos]}var i=f[h];var j=h;if(!q.force){$window=$(window);var k=$window.scrollLeft();var l=$window.scrollTop();var m=new A(k,l,k+$window.width(),l+$window.height());var n;if(q.positions){n=q.positions}else{n=[h]}var o=[];while(n.length>0){var p=n.shift();if(o[p]){continue}o[p]=true;if(!m.contains(f[p])){if(q.positions===null){n=jQuery.merge(n,g[p])}}else{i=f[p];break}}}c.parents().each(function(){var a=$(this);if(a.css('position')!='static'){var b=a.offset();i=i.transform(-b.left,-b.top);return false}});c.css({left:i.x1,top:i.y1});if(q.addClass){c.removeClass('positionBy0 positionBy1 positionBy2 positionBy3 positionBy4 positionBy5 '+'positionBy6 positionBy7 positionBy8 positionBy9 positionBy10 positionBy11 '+'positionBy12 positionBy13 positionBy14 positionBy15').addClass('positionBy'+p)}})}})(jQuery);

