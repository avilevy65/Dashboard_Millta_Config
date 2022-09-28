this,s=t.a,n=t.b;if(t.dragging&&u.onDragEnd){u.onDragEnd()}t.dragging=false;e[i]("mouseup",t.stop);e[i]("touchend",t.stop);e[i]("touchcancel",t.stop);t.parent[i]("mousemove",t.move);t.parent[i]("touchmove",t.move);delete t.stop;delete t.move;s[i]("selectstart",U);s[i]("dragstart",U);n[i]("selectstart",U);n[i]("dragstart",U);s.style.userSelect="";s.style.webkitUserSelect="";s.style.MozUserSelect="";s.style.pointerEvents="";n.style.userSelect="";n.style.webkitUserSelect="";n.style.MozUserSelect="";n.style.pointerEvents="";t.gutter.style.cursor="";t.parent.style.cursor=""},b=function(e){var t;if(!this.dragging)return;if("touches"in e){t=e.touches[0][g]-this.start}else{t=e[g]-this.start}if(t<=this.aMin+u.snapOffset){t=this.aMin}else if(t>=this.size-this.bMin-u.snapOffset){t=this.size-this.bMin}x.call(this,t);if(u.onDrag){u.onDrag()}},M=function(){var t=e.getComputedStyle(this.parent),i=this.parent[p]-parseFloat(t[z])-parseFloat(t[S]);this.size=this.a[s]()[c]+this.b[s]()[c]+this.aGutterSize+this.bGutterSize;this.percentage=Math.min(this.size/i*100,100);this.start=this.a[s]()[h]},x=function(e){this.a.style[c]=o+"("+e/this.size*this.percentage+"% - "+this.aGutterSize+"px)";this.b.style[c]=o+"("+(this.percentage-e/this.size*this.percentage)+"% - "+this.bGutterSize+"px)"},G=function(){var e=this,t=e.a,i=e.b;if(t[s]()[c]<e.aMin){t.style[c]=e.aMin-e.aGutterSize+"px";i.style[c]=e.size-e.aMin-e.aGutterSize+"px"}else if(i[s]()[c]<e.bMin){t.style[c]=e.size-e.bMin-e.bGutterSize+"px";i.style[c]=e.bMin-e.bGutterSize+"px"}},w=function(){var e=this,t=e.a,i=e.b;if(i[s]()[c]<e.bMin){t.style[c]=e.size-e.bMin-e.bGutterSize+"px";i.style[c]=e.bMin-e.bGutterSize+"px"}else if(t[s]()[c]<e.aMin){t.style[c]=e.aMin-e.aGutterSize+"px";i.style[c]=e.size-e.aMin-e.aGutterSize+"px"}},E=function(e){for(var t=0;t<e.length;t++){M.call(e[t]);G.call(e[t])}for(t=e.length-1;t>=0;t--){M.call(e[t]);w.call(e[t])}},U=function(){return false},D=a(l[0]).parentNode;if(!u.sizes){var k=100/l.length;u.sizes=[];for(f=0;f<l.length;f++){u.sizes.push(k)}}if(!Array.isArray(u.minSize)){var L=[];for(f=0;f<l.length;f++){L.push(u.minSize)}u.minSize=L}for(f=0;f<l.length;f++){var O=a(l[f]),B=f==1,F=f==l.length-1,A,C=u.gutterSize,N;if(f>0){N={a:a(l[f-1]),b:O,aMin:u.minSize[f-1],bMin:u.minSize[f],dragging:false,parent:D,isFirst:B,isLast:F,direction:u.direction};N.aGutterSize=u.gutterSize;N.bGutterSize=u.gutterSize;if(B){N.aGutterSize=u.gutterSize/2}if(F){N.bGutterSize=u.gutterSize/2}}if(!n){if(f>0){var R=r.createElement("div");R.className=d;R.style[c]=u.gutterSize+"px";R[t]("mousedown",v.bind(N));R[t]("touchstart",v.bind(N));D.insertBefore(R,O);N.gutter=R}if(f===0||f==l.length-1){C=u.gutterSize/2}if(typeof u.sizes[f]==="string"||u.sizes[f]instanceof String){A=u.sizes[f]}else{A=o+"("+u.sizes[f]+"% - "+C+"px)"}}else{if(typeof u.sizes[f]==="string"||u.sizes[f]instanceof String){A=u.sizes[f]}else{A=u.sizes[f]+"%"}}O.style[c]=A;if(f>0){y.push(N)}}E(y)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=l}exports.Split=l}else{e.Split=l}}).call(window);


    Split(['#a', '#b'], {
      gutterSize: 8,
      cursor: 'col-resize'
    })
    Split(['#c', '#d'], {
      direction: 'vertical',
      sizes: [25, 75],
      gutterSize: 8,
      cursor: 'row-resize'
    })
    Split(['#e', '#f'], {
      direction: 'vertical',
      sizes: [25, 75],
      gutterSize: 8,
      cursor: 'row-resize'
    })
