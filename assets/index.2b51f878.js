const _l=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}};_l();const vl=function(){let h,t=0,e=0,r=1e3/60,o,c;const d=g=>{h=window.requestAnimationFrame(d),t+=g-e,e=g;let v=!1;for(t>60&&(t=r);t>=r;)o.update(),v=!0,t-=r;v&&o.render()};return{setState:(g,v={})=>{if(!g)return;const f=c[g];f.set(v),o=f},setStates(g){c=g},start(){h=window.requestAnimationFrame(d)},stop(){window.cancelAnimationFrame(h)}}};var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ie={exports:{}};/**
 * Planck.js v1.0.0-alpha.4
 * @license The MIT license
 * @copyright Copyright (c) 2021 Erin Catto, Ali Shakiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */(function(h,t){(function(e,r){r(t)})(gl,function(e){/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var r=function(a,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u])},r(a,i)};function o(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(a,i);function n(){this.constructor=a}a.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}var c=function(){return c=Object.assign||function(i){for(var n,l=1,u=arguments.length;l<u;l++){n=arguments[l];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(i[_]=n[_])}return i},c.apply(this,arguments)};function d(a,i){(a===null||typeof a>"u")&&(a={});var n=c({},a);for(var l in i)i.hasOwnProperty(l)&&typeof a[l]>"u"&&(n[l]=i[l]);if(typeof Object.getOwnPropertySymbols=="function")for(var u=Object.getOwnPropertySymbols(i),_=0;_<u.length;_++){var p=u[_];i.propertyIsEnumerable(p)&&typeof a[p]>"u"&&(n[p]=i[p])}return n}var m=function(){},g=function(a,i,n){},v={assert:g,debug:m},f=Object.create(Math);f.EPSILON=1e-9,f.isFinite=function(a){return typeof a=="number"&&isFinite(a)&&!isNaN(a)},f.assert=function(a){},f.invSqrt=function(a){return 1/Math.sqrt(a)},f.nextPowerOfTwo=function(a){return a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a+1},f.isPowerOfTwo=function(a){return a>0&&(a&a-1)===0},f.mod=function(a,i,n){return typeof i>"u"?(n=1,i=0):typeof n>"u"&&(n=i,i=0),n>i?(a=(a-i)%(n-i),a+(a<0?n:i)):(a=(a-n)%(i-n),a+(a<=0?i:n))},f.clamp=function(a,i,n){return a<i?i:a>n?n:a},f.random=function(a,i){return typeof a>"u"?(i=1,a=0):typeof i>"u"&&(i=a,a=0),a===i?a:Math.random()*(i-a)+a};var s=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);typeof i>"u"?(this.x=0,this.y=0):typeof i=="object"?(this.x=i.x,this.y=i.y):(this.x=i,this.y=n)}return a.prototype._serialize=function(){return{x:this.x,y:this.y}},a._deserialize=function(i){var n=Object.create(a.prototype);return n.x=i.x,n.y=i.y,n},a.zero=function(){var i=Object.create(a.prototype);return i.x=0,i.y=0,i},a.neo=function(i,n){var l=Object.create(a.prototype);return l.x=i,l.y=n,l},a.clone=function(i){return a.neo(i.x,i.y)},a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:f.isFinite(i.x)&&f.isFinite(i.y)},a.assert=function(i){},a.prototype.clone=function(){return a.clone(this)},a.prototype.setZero=function(){return this.x=0,this.y=0,this},a.prototype.set=function(i,n){return typeof i=="object"?(this.x=i.x,this.y=i.y):(this.x=i,this.y=n),this},a.prototype.setNum=function(i,n){return this.x=i,this.y=n,this},a.prototype.setVec2=function(i){return this.x=i.x,this.y=i.y,this},a.prototype.wSet=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.setCombine(i,n,l,u):this.setMul(i,n)},a.prototype.setCombine=function(i,n,l,u){var _=i*n.x+l*u.x,p=i*n.y+l*u.y;return this.x=_,this.y=p,this},a.prototype.setMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x=l,this.y=u,this},a.prototype.add=function(i){return this.x+=i.x,this.y+=i.y,this},a.prototype.wAdd=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.addCombine(i,n,l,u):this.addMul(i,n)},a.prototype.addCombine=function(i,n,l,u){var _=i*n.x+l*u.x,p=i*n.y+l*u.y;return this.x+=_,this.y+=p,this},a.prototype.addMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x+=l,this.y+=u,this},a.prototype.wSub=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.subCombine(i,n,l,u):this.subMul(i,n)},a.prototype.subCombine=function(i,n,l,u){var _=i*n.x+l*u.x,p=i*n.y+l*u.y;return this.x-=_,this.y-=p,this},a.prototype.subMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x-=l,this.y-=u,this},a.prototype.sub=function(i){return this.x-=i.x,this.y-=i.y,this},a.prototype.mul=function(i){return this.x*=i,this.y*=i,this},a.prototype.length=function(){return a.lengthOf(this)},a.prototype.lengthSquared=function(){return a.lengthSquared(this)},a.prototype.normalize=function(){var i=this.length();if(i<f.EPSILON)return 0;var n=1/i;return this.x*=n,this.y*=n,i},a.lengthOf=function(i){return f.sqrt(i.x*i.x+i.y*i.y)},a.lengthSquared=function(i){return i.x*i.x+i.y*i.y},a.distance=function(i,n){var l=i.x-n.x,u=i.y-n.y;return f.sqrt(l*l+u*u)},a.distanceSquared=function(i,n){var l=i.x-n.x,u=i.y-n.y;return l*l+u*u},a.areEqual=function(i,n){return i===n||typeof n=="object"&&n!==null&&i.x===n.x&&i.y===n.y},a.skew=function(i){return a.neo(-i.y,i.x)},a.dot=function(i,n){return i.x*n.x+i.y*n.y},a.cross=function(i,n){return typeof n=="number"?a.neo(n*i.y,-n*i.x):typeof i=="number"?a.neo(-i*n.y,i*n.x):i.x*n.y-i.y*n.x},a.crossVec2Vec2=function(i,n){return i.x*n.y-i.y*n.x},a.crossVec2Num=function(i,n){return a.neo(n*i.y,-n*i.x)},a.crossNumVec2=function(i,n){return a.neo(-i*n.y,i*n.x)},a.addCross=function(i,n,l){if(typeof l=="number")return a.neo(l*n.y+i.x,-l*n.x+i.y);if(typeof n=="number")return a.neo(-n*l.y+i.x,n*l.x+i.y)},a.addCrossVec2Num=function(i,n,l){return a.neo(l*n.y+i.x,-l*n.x+i.y)},a.addCrossNumVec2=function(i,n,l){return a.neo(-n*l.y+i.x,n*l.x+i.y)},a.add=function(i,n){return a.neo(i.x+n.x,i.y+n.y)},a.wAdd=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?a.combine(i,n,l,u):a.mulNumVec2(i,n)},a.combine=function(i,n,l,u){return a.zero().setCombine(i,n,l,u)},a.sub=function(i,n){return a.neo(i.x-n.x,i.y-n.y)},a.mul=function(i,n){if(typeof i=="object")return a.neo(i.x*n,i.y*n);if(typeof n=="object")return a.neo(i*n.x,i*n.y)},a.mulVec2Num=function(i,n){return a.neo(i.x*n,i.y*n)},a.mulNumVec2=function(i,n){return a.neo(i*n.x,i*n.y)},a.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},a.neg=function(i){return a.neo(-i.x,-i.y)},a.abs=function(i){return a.neo(f.abs(i.x),f.abs(i.y))},a.mid=function(i,n){return a.neo((i.x+n.x)*.5,(i.y+n.y)*.5)},a.upper=function(i,n){return a.neo(f.max(i.x,n.x),f.max(i.y,n.y))},a.lower=function(i,n){return a.neo(f.min(i.x,n.x),f.min(i.y,n.y))},a.prototype.clamp=function(i){var n=this.x*this.x+this.y*this.y;if(n>i*i){var l=f.invSqrt(n);this.x*=l*i,this.y*=l*i}return this},a.clamp=function(i,n){return i=a.neo(i.x,i.y),i.clamp(n),i},a.scaleFn=function(i,n){return function(l){return a.neo(l.x*i,l.y*n)}},a.translateFn=function(i,n){return function(l){return a.neo(l.x+i,l.y+n)}},a}(),x=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);this.lowerBound=s.zero(),this.upperBound=s.zero(),typeof i=="object"&&this.lowerBound.setVec2(i),typeof n=="object"?this.upperBound.setVec2(n):typeof i=="object"&&this.upperBound.setVec2(i)}return a.prototype.isValid=function(){return a.isValid(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.lowerBound)&&s.isValid(i.upperBound)&&s.sub(i.upperBound,i.lowerBound).lengthSquared()>=0},a.assert=function(i){},a.prototype.getCenter=function(){return s.neo((this.lowerBound.x+this.upperBound.x)*.5,(this.lowerBound.y+this.upperBound.y)*.5)},a.prototype.getExtents=function(){return s.neo((this.upperBound.x-this.lowerBound.x)*.5,(this.upperBound.y-this.lowerBound.y)*.5)},a.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},a.prototype.combine=function(i,n){n=n||this;var l=i.lowerBound,u=i.upperBound,_=n.lowerBound,p=n.upperBound,y=f.min(l.x,_.x),w=f.min(l.y,_.y),I=f.max(p.x,u.x),B=f.max(p.y,u.y);this.lowerBound.setNum(y,w),this.upperBound.setNum(I,B)},a.prototype.combinePoints=function(i,n){this.lowerBound.setNum(f.min(i.x,n.x),f.min(i.y,n.y)),this.upperBound.setNum(f.max(i.x,n.x),f.max(i.y,n.y))},a.prototype.set=function(i){this.lowerBound.setNum(i.lowerBound.x,i.lowerBound.y),this.upperBound.setNum(i.upperBound.x,i.upperBound.y)},a.prototype.contains=function(i){var n=!0;return n=n&&this.lowerBound.x<=i.lowerBound.x,n=n&&this.lowerBound.y<=i.lowerBound.y,n=n&&i.upperBound.x<=this.upperBound.x,n=n&&i.upperBound.y<=this.upperBound.y,n},a.prototype.extend=function(i){return a.extend(this,i),this},a.extend=function(i,n){i.lowerBound.x-=n,i.lowerBound.y-=n,i.upperBound.x+=n,i.upperBound.y+=n},a.testOverlap=function(i,n){var l=n.lowerBound.x-i.upperBound.x,u=i.lowerBound.x-n.upperBound.x,_=n.lowerBound.y-i.upperBound.y,p=i.lowerBound.y-n.upperBound.y;return!(l>0||_>0||u>0||p>0)},a.areEqual=function(i,n){return s.areEqual(i.lowerBound,n.lowerBound)&&s.areEqual(i.upperBound,n.upperBound)},a.diff=function(i,n){var l=f.max(0,f.min(i.upperBound.x,n.upperBound.x)-f.max(n.lowerBound.x,i.lowerBound.x)),u=f.max(0,f.min(i.upperBound.y,n.upperBound.y)-f.max(n.lowerBound.y,i.lowerBound.y)),_=i.upperBound.x-i.lowerBound.x,p=i.upperBound.y-i.lowerBound.y,y=n.upperBound.x-n.lowerBound.x,w=n.upperBound.y-n.lowerBound.y;return _*p+y*w-l*u},a.prototype.rayCast=function(i,n){for(var l=-1/0,u=1/0,_=n.p1,p=s.sub(n.p2,n.p1),y=s.abs(p),w=s.zero(),I="x";I!==null;I=I==="x"?"y":null)if(y.x<f.EPSILON){if(_[I]<this.lowerBound[I]||this.upperBound[I]<_[I])return!1}else{var B=1/p[I],R=(this.lowerBound[I]-_[I])*B,E=(this.upperBound[I]-_[I])*B,C=-1;if(R>E){var T=R;R=E,E=T,C=1}if(R>l&&(w.setZero(),w[I]=C,l=R),u=f.min(u,E),l>u)return!1}return l<0||n.maxFraction<l?!1:(i.fraction=l,i.normal=w,!0)},a.prototype.toString=function(){return JSON.stringify(this)},a}(),A=function(){function a(){}return Object.defineProperty(a,"linearSlopSquared",{get:function(){return a.linearSlop*a.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(a,"polygonRadius",{get:function(){return 2*a.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(a,"maxTranslationSquared",{get:function(){return a.maxTranslation*a.maxTranslation},enumerable:!1,configurable:!0}),Object.defineProperty(a,"maxRotationSquared",{get:function(){return a.maxRotation*a.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(a,"linearSleepToleranceSqr",{get:function(){return Math.pow(a.linearSleepTolerance,2)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"angularSleepToleranceSqr",{get:function(){return Math.pow(a.angularSleepTolerance,2)},enumerable:!1,configurable:!0}),a.maxManifoldPoints=2,a.maxPolygonVertices=12,a.aabbExtension=.1,a.aabbMultiplier=2,a.linearSlop=.005,a.angularSlop=2/180*Math.PI,a.maxSubSteps=8,a.maxTOIContacts=32,a.maxTOIIterations=20,a.maxDistnceIterations=20,a.velocityThreshold=1,a.maxLinearCorrection=.2,a.maxAngularCorrection=8/180*Math.PI,a.maxTranslation=2,a.maxRotation=.5*Math.PI,a.baumgarte=.2,a.toiBaugarte=.75,a.timeToSleep=.5,a.linearSleepTolerance=.01,a.angularSleepTolerance=2/180*Math.PI,a}(),L=function(){function a(i){this._list=[],this._max=1/0,this._createCount=0,this._outCount=0,this._inCount=0,this._discardCount=0,this._list=[],this._max=i.max||this._max,this._createFn=i.create,this._outFn=i.allocate,this._inFn=i.release,this._discardFn=i.discard}return a.prototype.max=function(i){return typeof i=="number"?(this._max=i,this):this._max},a.prototype.size=function(){return this._list.length},a.prototype.allocate=function(){var i;return this._list.length>0?i=this._list.shift():(this._createCount++,typeof this._createFn=="function"?i=this._createFn():i={}),this._outCount++,typeof this._outFn=="function"&&this._outFn(i),i},a.prototype.release=function(i){this._list.length<this._max?(this._inCount++,typeof this._inFn=="function"&&this._inFn(i),this._list.push(i)):(this._discardCount++,typeof this._discardFn=="function"&&(i=this._discardFn(i)))},a.prototype.toString=function(){return" +"+this._createCount+" >"+this._outCount+" <"+this._inCount+" -"+this._discardCount+" ="+this._list.length+"/"+this._max},a}(),M=function(){function a(i){this.aabb=new x,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.id=i}return a.prototype.toString=function(){return this.id+": "+this.userData},a.prototype.isLeaf=function(){return this.child1==null},a}(),b=function(){function a(){this.inputPool=new L({create:function(){return{}},release:function(i){}}),this.stackPool=new L({create:function(){return[]},release:function(i){i.length=0}}),this.iteratorPool=new L({create:function(){return new D},release:function(i){i.close()}}),this.m_root=null,this.m_nodes={},this.m_lastProxyId=0,this.m_pool=new L({create:function(){return new M}})}return a.prototype.getUserData=function(i){var n=this.m_nodes[i];return n.userData},a.prototype.getFatAABB=function(i){var n=this.m_nodes[i];return n.aabb},a.prototype.allocateNode=function(){var i=this.m_pool.allocate();return i.id=++this.m_lastProxyId,i.userData=null,i.parent=null,i.child1=null,i.child2=null,i.height=-1,this.m_nodes[i.id]=i,i},a.prototype.freeNode=function(i){this.m_pool.release(i),i.height=-1,delete this.m_nodes[i.id]},a.prototype.createProxy=function(i,n){var l=this.allocateNode();return l.aabb.set(i),x.extend(l.aabb,A.aabbExtension),l.userData=n,l.height=0,this.insertLeaf(l),l.id},a.prototype.destroyProxy=function(i){var n=this.m_nodes[i];this.removeLeaf(n),this.freeNode(n)},a.prototype.moveProxy=function(i,n,l){var u=this.m_nodes[i];return u.aabb.contains(n)?!1:(this.removeLeaf(u),u.aabb.set(n),n=u.aabb,x.extend(n,A.aabbExtension),l.x<0?n.lowerBound.x+=l.x*A.aabbMultiplier:n.upperBound.x+=l.x*A.aabbMultiplier,l.y<0?n.lowerBound.y+=l.y*A.aabbMultiplier:n.upperBound.y+=l.y*A.aabbMultiplier,this.insertLeaf(u),!0)},a.prototype.insertLeaf=function(i){if(this.m_root==null){this.m_root=i,this.m_root.parent=null;return}for(var n=i.aabb,l=this.m_root;!l.isLeaf();){var u=l.child1,_=l.child2,p=l.aabb.getPerimeter(),y=new x;y.combine(l.aabb,n);var w=y.getPerimeter(),I=2*w,B=2*(w-p),R=void 0;if(u.isLeaf()){var E=new x;E.combine(n,u.aabb),R=E.getPerimeter()+B}else{var E=new x;E.combine(n,u.aabb);var C=u.aabb.getPerimeter(),T=E.getPerimeter();R=T-C+B}var N=void 0;if(_.isLeaf()){var E=new x;E.combine(n,_.aabb),N=E.getPerimeter()+B}else{var E=new x;E.combine(n,_.aabb);var C=_.aabb.getPerimeter(),T=E.getPerimeter();N=T-C+B}if(I<R&&I<N)break;R<N?l=u:l=_}var H=l,W=H.parent,Y=this.allocateNode();for(Y.parent=W,Y.userData=null,Y.aabb.combine(n,H.aabb),Y.height=H.height+1,W!=null?(W.child1===H?W.child1=Y:W.child2=Y,Y.child1=H,Y.child2=i,H.parent=Y,i.parent=Y):(Y.child1=H,Y.child2=i,H.parent=Y,i.parent=Y,this.m_root=Y),l=i.parent;l!=null;){l=this.balance(l);var u=l.child1,_=l.child2;l.height=1+f.max(u.height,_.height),l.aabb.combine(u.aabb,_.aabb),l=l.parent}},a.prototype.removeLeaf=function(i){if(i===this.m_root){this.m_root=null;return}var n=i.parent,l=n.parent,u;if(n.child1===i?u=n.child2:u=n.child1,l!=null){l.child1===n?l.child1=u:l.child2=u,u.parent=l,this.freeNode(n);for(var _=l;_!=null;){_=this.balance(_);var p=_.child1,y=_.child2;_.aabb.combine(p.aabb,y.aabb),_.height=1+f.max(p.height,y.height),_=_.parent}}else this.m_root=u,u.parent=null,this.freeNode(n)},a.prototype.balance=function(i){var n=i;if(n.isLeaf()||n.height<2)return i;var l=n.child1,u=n.child2,_=u.height-l.height;if(_>1){var p=u.child1,y=u.child2;return u.child1=n,u.parent=n.parent,n.parent=u,u.parent!=null?u.parent.child1===i?u.parent.child1=u:u.parent.child2=u:this.m_root=u,p.height>y.height?(u.child2=p,n.child2=y,y.parent=n,n.aabb.combine(l.aabb,y.aabb),u.aabb.combine(n.aabb,p.aabb),n.height=1+f.max(l.height,y.height),u.height=1+f.max(n.height,p.height)):(u.child2=y,n.child2=p,p.parent=n,n.aabb.combine(l.aabb,p.aabb),u.aabb.combine(n.aabb,y.aabb),n.height=1+f.max(l.height,p.height),u.height=1+f.max(n.height,y.height)),u}if(_<-1){var w=l.child1,I=l.child2;return l.child1=n,l.parent=n.parent,n.parent=l,l.parent!=null?l.parent.child1===n?l.parent.child1=l:l.parent.child2=l:this.m_root=l,w.height>I.height?(l.child2=w,n.child1=I,I.parent=n,n.aabb.combine(u.aabb,I.aabb),l.aabb.combine(n.aabb,w.aabb),n.height=1+f.max(u.height,I.height),l.height=1+f.max(n.height,w.height)):(l.child2=I,n.child1=w,w.parent=n,n.aabb.combine(u.aabb,w.aabb),l.aabb.combine(n.aabb,I.aabb),n.height=1+f.max(u.height,w.height),l.height=1+f.max(n.height,I.height)),l}return n},a.prototype.getHeight=function(){return this.m_root==null?0:this.m_root.height},a.prototype.getAreaRatio=function(){if(this.m_root==null)return 0;for(var i=this.m_root,n=i.aabb.getPerimeter(),l=0,u,_=this.iteratorPool.allocate().preorder(this.m_root);u=_.next();)u.height<0||(l+=u.aabb.getPerimeter());return this.iteratorPool.release(_),l/n},a.prototype.computeHeight=function(i){var n;if(typeof i<"u"?n=this.m_nodes[i]:n=this.m_root,n.isLeaf())return 0;var l=this.computeHeight(n.child1.id),u=this.computeHeight(n.child2.id);return 1+f.max(l,u)},a.prototype.validateStructure=function(i){if(i!=null){this.m_root;var n=i.child1,l=i.child2;i.isLeaf()||(this.validateStructure(n),this.validateStructure(l))}},a.prototype.validateMetrics=function(i){if(i!=null){var n=i.child1,l=i.child2;if(!i.isLeaf()){var u=n.height,_=l.height;1+f.max(u,_);var p=new x;p.combine(n.aabb,l.aabb),this.validateMetrics(n),this.validateMetrics(l)}}},a.prototype.validate=function(){this.validateStructure(this.m_root),this.validateMetrics(this.m_root)},a.prototype.getMaxBalance=function(){for(var i=0,n,l=this.iteratorPool.allocate().preorder(this.m_root);n=l.next();)if(!(n.height<=1)){var u=f.abs(n.child2.height-n.child1.height);i=f.max(i,u)}return this.iteratorPool.release(l),i},a.prototype.rebuildBottomUp=function(){for(var i=[],n=0,l,u=this.iteratorPool.allocate().preorder(this.m_root);l=u.next();)l.height<0||(l.isLeaf()?(l.parent=null,i[n]=l,++n):this.freeNode(l));for(this.iteratorPool.release(u);n>1;){for(var _=1/0,p=-1,y=-1,w=0;w<n;++w)for(var I=i[w].aabb,B=w+1;B<n;++B){var R=i[B].aabb,E=new x;E.combine(I,R);var C=E.getPerimeter();C<_&&(p=w,y=B,_=C)}var T=i[p],N=i[y],H=this.allocateNode();H.child1=T,H.child2=N,H.height=1+f.max(T.height,N.height),H.aabb.combine(T.aabb,N.aabb),H.parent=null,T.parent=H,N.parent=H,i[y]=i[n-1],i[p]=H,--n}this.m_root=i[0],this.validate()},a.prototype.shiftOrigin=function(i){for(var n,l=this.iteratorPool.allocate().preorder(this.m_root);n=l.next();){var u=n.aabb;u.lowerBound.x-=i.x,u.lowerBound.y-=i.y,u.upperBound.x-=i.x,u.upperBound.y-=i.y}this.iteratorPool.release(l)},a.prototype.query=function(i,n){var l=this.stackPool.allocate();for(l.push(this.m_root);l.length>0;){var u=l.pop();if(u!=null&&x.testOverlap(u.aabb,i))if(u.isLeaf()){var _=n(u.id);if(_===!1)return}else l.push(u.child1),l.push(u.child2)}this.stackPool.release(l)},a.prototype.rayCast=function(i,n){var l=i.p1,u=i.p2,_=s.sub(u,l);_.normalize();var p=s.crossNumVec2(1,_),y=s.abs(p),w=i.maxFraction,I=new x,B=s.combine(1-w,l,w,u);I.combinePoints(l,B);var R=this.stackPool.allocate(),E=this.inputPool.allocate();for(R.push(this.m_root);R.length>0;){var C=R.pop();if(C!=null&&x.testOverlap(C.aabb,I)!==!1){var T=C.aabb.getCenter(),N=C.aabb.getExtents(),H=f.abs(s.dot(p,s.sub(l,T)))-s.dot(y,N);if(!(H>0))if(C.isLeaf()){E.p1=s.clone(i.p1),E.p2=s.clone(i.p2),E.maxFraction=w;var W=n(E,C.id);if(W===0)return;W>0&&(w=W,B=s.combine(1-w,l,w,u),I.combinePoints(l,B))}else R.push(C.child1),R.push(C.child2)}}this.stackPool.release(R),this.inputPool.release(E)},a}(),D=function(){function a(){this.parents=[],this.states=[]}return a.prototype.preorder=function(i){return this.parents.length=0,this.parents.push(i),this.states.length=0,this.states.push(0),this},a.prototype.next=function(){for(;this.parents.length>0;){var i=this.parents.length-1,n=this.parents[i];if(this.states[i]===0)return this.states[i]=1,n;if(this.states[i]===1&&(this.states[i]=2,n.child1))return this.parents.push(n.child1),this.states.push(1),n.child1;if(this.states[i]===2&&(this.states[i]=3,n.child2))return this.parents.push(n.child2),this.states.push(1),n.child2;this.parents.pop(),this.states.pop()}},a.prototype.close=function(){this.parents.length=0},a}(),U=function(){function a(){var i=this;this.m_tree=new b,this.m_proxyCount=0,this.m_moveBuffer=[],this.query=function(n,l){i.m_tree.query(n,l)},this.queryCallback=function(n){if(n===i.m_queryProxyId)return!0;var l=f.min(n,i.m_queryProxyId),u=f.max(n,i.m_queryProxyId),_=i.m_tree.getUserData(l),p=i.m_tree.getUserData(u);return i.m_callback(_,p),!0}}return a.prototype.getUserData=function(i){return this.m_tree.getUserData(i)},a.prototype.testOverlap=function(i,n){var l=this.m_tree.getFatAABB(i),u=this.m_tree.getFatAABB(n);return x.testOverlap(l,u)},a.prototype.getFatAABB=function(i){return this.m_tree.getFatAABB(i)},a.prototype.getProxyCount=function(){return this.m_proxyCount},a.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},a.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},a.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},a.prototype.rayCast=function(i,n){this.m_tree.rayCast(i,n)},a.prototype.shiftOrigin=function(i){this.m_tree.shiftOrigin(i)},a.prototype.createProxy=function(i,n){var l=this.m_tree.createProxy(i,n);return this.m_proxyCount++,this.bufferMove(l),l},a.prototype.destroyProxy=function(i){this.unbufferMove(i),this.m_proxyCount--,this.m_tree.destroyProxy(i)},a.prototype.moveProxy=function(i,n,l){var u=this.m_tree.moveProxy(i,n,l);u&&this.bufferMove(i)},a.prototype.touchProxy=function(i){this.bufferMove(i)},a.prototype.bufferMove=function(i){this.m_moveBuffer.push(i)},a.prototype.unbufferMove=function(i){for(var n=0;n<this.m_moveBuffer.length;++n)this.m_moveBuffer[n]===i&&(this.m_moveBuffer[n]=null)},a.prototype.updatePairs=function(i){for(this.m_callback=i;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),this.m_queryProxyId!==null){var n=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(n,this.queryCallback)}},a}(),S=function(){function a(i){if(!(this instanceof a))return new a(i);typeof i=="number"?this.setAngle(i):typeof i=="object"?this.setRot(i):this.setIdentity()}return a.neo=function(i){var n=Object.create(a.prototype);return n.setAngle(i),n},a.clone=function(i){var n=Object.create(a.prototype);return n.s=i.s,n.c=i.c,n},a.identity=function(){var i=Object.create(a.prototype);return i.s=0,i.c=1,i},a.isValid=function(i){return i===null||typeof i>"u"?!1:f.isFinite(i.s)&&f.isFinite(i.c)},a.assert=function(i){},a.prototype.setIdentity=function(){this.s=0,this.c=1},a.prototype.set=function(i){typeof i=="object"?(this.s=i.s,this.c=i.c):(this.s=f.sin(i),this.c=f.cos(i))},a.prototype.setRot=function(i){this.s=i.s,this.c=i.c},a.prototype.setAngle=function(i){this.s=f.sin(i),this.c=f.cos(i)},a.prototype.getAngle=function(){return f.atan2(this.s,this.c)},a.prototype.getXAxis=function(){return s.neo(this.c,this.s)},a.prototype.getYAxis=function(){return s.neo(-this.s,this.c)},a.mul=function(i,n){if("c"in n&&"s"in n){var l=a.identity();return l.s=i.s*n.c+i.c*n.s,l.c=i.c*n.c-i.s*n.s,l}else if("x"in n&&"y"in n)return s.neo(i.c*n.x-i.s*n.y,i.s*n.x+i.c*n.y)},a.mulRot=function(i,n){var l=a.identity();return l.s=i.s*n.c+i.c*n.s,l.c=i.c*n.c-i.s*n.s,l},a.mulVec2=function(i,n){return s.neo(i.c*n.x-i.s*n.y,i.s*n.x+i.c*n.y)},a.mulSub=function(i,n,l){var u=i.c*(n.x-l.x)-i.s*(n.y-l.y),_=i.s*(n.x-l.x)+i.c*(n.y-l.y);return s.neo(u,_)},a.mulT=function(i,n){if("c"in n&&"s"in n){var l=a.identity();return l.s=i.c*n.s-i.s*n.c,l.c=i.c*n.c+i.s*n.s,l}else if("x"in n&&"y"in n)return s.neo(i.c*n.x+i.s*n.y,-i.s*n.x+i.c*n.y)},a.mulTRot=function(i,n){var l=a.identity();return l.s=i.c*n.s-i.s*n.c,l.c=i.c*n.c+i.s*n.s,l},a.mulTVec2=function(i,n){return s.neo(i.c*n.x+i.s*n.y,-i.s*n.x+i.c*n.y)},a}(),P=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);this.p=s.zero(),this.q=S.identity(),typeof i<"u"&&this.p.setVec2(i),typeof n<"u"&&this.q.setAngle(n)}return a.clone=function(i){var n=Object.create(a.prototype);return n.p=s.clone(i.p),n.q=S.clone(i.q),n},a.neo=function(i,n){var l=Object.create(a.prototype);return l.p=s.clone(i),l.q=S.clone(n),l},a.identity=function(){var i=Object.create(a.prototype);return i.p=s.zero(),i.q=S.identity(),i},a.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},a.prototype.set=function(i,n){typeof n>"u"?(this.p.set(i.p),this.q.set(i.q)):(this.p.set(i),this.q.set(n))},a.prototype.setNum=function(i,n){this.p.setVec2(i),this.q.setAngle(n)},a.prototype.setTransform=function(i){this.p.setVec2(i.p),this.q.setRot(i.q)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.p)&&S.isValid(i.q)},a.assert=function(i){},a.mul=function(i,n){if(Array.isArray(n)){for(var l=[],u=0;u<n.length;u++)l[u]=a.mul(i,n[u]);return l}else{if("x"in n&&"y"in n)return a.mulVec2(i,n);if("p"in n&&"q"in n)return a.mulXf(i,n)}},a.mulAll=function(i,n){for(var l=[],u=0;u<n.length;u++)l[u]=a.mul(i,n[u]);return l},a.mulFn=function(i){return function(n){return a.mul(i,n)}},a.mulVec2=function(i,n){var l=i.q.c*n.x-i.q.s*n.y+i.p.x,u=i.q.s*n.x+i.q.c*n.y+i.p.y;return s.neo(l,u)},a.mulXf=function(i,n){var l=a.identity();return l.q=S.mulRot(i.q,n.q),l.p=s.add(S.mulVec2(i.q,n.p),i.p),l},a.mulT=function(i,n){if("x"in n&&"y"in n)return a.mulTVec2(i,n);if("p"in n&&"q"in n)return a.mulTXf(i,n)},a.mulTVec2=function(i,n){var l=n.x-i.p.x,u=n.y-i.p.y,_=i.q.c*l+i.q.s*u,p=-i.q.s*l+i.q.c*u;return s.neo(_,p)},a.mulTXf=function(i,n){var l=a.identity();return l.q.setRot(S.mulTRot(i.q,n.q)),l.p.setVec2(S.mulTVec2(i.q,s.sub(n.p,i.p))),l},a}(),G=function(){function a(i,n){this.localCenter=s.zero(),this.c=s.zero(),this.a=0,this.alpha0=0,this.c0=s.zero(),this.a0=0}return a.prototype.setTransform=function(i){var n=P.mulVec2(i,this.localCenter);this.c.setVec2(n),this.c0.setVec2(n),this.a=i.q.getAngle(),this.a0=i.q.getAngle()},a.prototype.setLocalCenter=function(i,n){this.localCenter.setVec2(i);var l=P.mulVec2(n,this.localCenter);this.c.setVec2(l),this.c0.setVec2(l)},a.prototype.getTransform=function(i,n){n===void 0&&(n=0),i.q.setAngle((1-n)*this.a0+n*this.a),i.p.setCombine(1-n,this.c0,n,this.c),i.p.sub(S.mulVec2(i.q,this.localCenter))},a.prototype.advance=function(i){var n=(i-this.alpha0)/(1-this.alpha0);this.c0.setCombine(n,this.c,1-n,this.c0),this.a0=n*this.a+(1-n)*this.a0,this.alpha0=i},a.prototype.forward=function(){this.a0=this.a,this.c0.setVec2(this.c)},a.prototype.normalize=function(){var i=f.mod(this.a0,-f.PI,+f.PI);this.a-=this.a0-i,this.a0=i},a.prototype.clone=function(){var i=new a;return i.localCenter.setVec2(this.localCenter),i.alpha0=this.alpha0,i.a0=this.a0,i.a=this.a,i.c0.setVec2(this.c0),i.c.setVec2(this.c),i},a.prototype.set=function(i){this.localCenter.setVec2(i.localCenter),this.alpha0=i.alpha0,this.a0=i.a0,this.a=i.a,this.c0.setVec2(i.c0),this.c.setVec2(i.c)},a}(),J=function(){function a(){this.v=s.zero(),this.w=0}return a}(),tt=function(){function a(){this.c=s.zero(),this.a=0}return a.prototype.getTransform=function(i,n){return i.q.setAngle(this.a),i.p.setVec2(s.sub(this.c,S.mulVec2(i.q,n))),i},a}(),O=function(){function a(){}return a.prototype._reset=function(){},a.isValid=function(i){return i===null||typeof i>"u"?!1:typeof i.m_type=="string"&&typeof i.m_radius=="number"},a.prototype.getRadius=function(){return this.m_radius},a.prototype.getType=function(){return this.m_type},a}(),X={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535},lt=function(){function a(i,n){this.aabb=new x,this.fixture=i,this.childIndex=n,this.proxyId}return a}(),nt=function(){function a(i,n,l){n.shape?(l=n,n=n.shape):typeof l=="number"&&(l={density:l}),l=d(l,X),this.m_body=i,this.m_friction=l.friction,this.m_restitution=l.restitution,this.m_density=l.density,this.m_isSensor=l.isSensor,this.m_filterGroupIndex=l.filterGroupIndex,this.m_filterCategoryBits=l.filterCategoryBits,this.m_filterMaskBits=l.filterMaskBits,this.m_shape=n,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var u=this.m_shape.getChildCount(),_=0;_<u;++_)this.m_proxies[_]=new lt(this,_);this.m_userData=l.userData}return a.prototype._reset=function(){var i=this.getBody(),n=i.m_world.m_broadPhase;this.destroyProxies(n),this.m_shape._reset&&this.m_shape._reset();for(var l=this.m_shape.getChildCount(),u=0;u<l;++u)this.m_proxies[u]=new lt(this,u);this.createProxies(n,i.m_xf),i.resetMassData()},a.prototype._serialize=function(){return{friction:this.m_friction,restitution:this.m_restitution,density:this.m_density,isSensor:this.m_isSensor,filterGroupIndex:this.m_filterGroupIndex,filterCategoryBits:this.m_filterCategoryBits,filterMaskBits:this.m_filterMaskBits,shape:this.m_shape}},a._deserialize=function(i,n,l){var u=l(O,i.shape),_=u&&new a(n,u,i);return _},a.prototype.getType=function(){return this.m_shape.getType()},a.prototype.getShape=function(){return this.m_shape},a.prototype.isSensor=function(){return this.m_isSensor},a.prototype.setSensor=function(i){i!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=i)},a.prototype.getUserData=function(){return this.m_userData},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getBody=function(){return this.m_body},a.prototype.getNext=function(){return this.m_next},a.prototype.getDensity=function(){return this.m_density},a.prototype.setDensity=function(i){this.m_density=i},a.prototype.getFriction=function(){return this.m_friction},a.prototype.setFriction=function(i){this.m_friction=i},a.prototype.getRestitution=function(){return this.m_restitution},a.prototype.setRestitution=function(i){this.m_restitution=i},a.prototype.testPoint=function(i){return this.m_shape.testPoint(this.m_body.getTransform(),i)},a.prototype.rayCast=function(i,n,l){return this.m_shape.rayCast(i,n,this.m_body.getTransform(),l)},a.prototype.getMassData=function(i){this.m_shape.computeMass(i,this.m_density)},a.prototype.getAABB=function(i){return this.m_proxies[i].aabb},a.prototype.createProxies=function(i,n){this.m_proxyCount=this.m_shape.getChildCount();for(var l=0;l<this.m_proxyCount;++l){var u=this.m_proxies[l];this.m_shape.computeAABB(u.aabb,n,l),u.proxyId=i.createProxy(u.aabb,u)}},a.prototype.destroyProxies=function(i){for(var n=0;n<this.m_proxyCount;++n){var l=this.m_proxies[n];i.destroyProxy(l.proxyId),l.proxyId=null}this.m_proxyCount=0},a.prototype.synchronize=function(i,n,l){for(var u=0;u<this.m_proxyCount;++u){var _=this.m_proxies[u],p=new x,y=new x;this.m_shape.computeAABB(p,n,_.childIndex),this.m_shape.computeAABB(y,l,_.childIndex),_.aabb.combine(p,y);var w=s.sub(l.p,n.p);i.moveProxy(_.proxyId,_.aabb,w)}},a.prototype.setFilterData=function(i){this.m_filterGroupIndex=i.groupIndex,this.m_filterCategoryBits=i.categoryBits,this.m_filterMaskBits=i.maskBits,this.refilter()},a.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},a.prototype.setFilterGroupIndex=function(i){this.m_filterGroupIndex=i},a.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},a.prototype.setFilterCategoryBits=function(i){this.m_filterCategoryBits=i},a.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},a.prototype.setFilterMaskBits=function(i){this.m_filterMaskBits=i},a.prototype.refilter=function(){if(this.m_body!=null){for(var i=this.m_body.getContactList();i;){var n=i.contact,l=n.getFixtureA(),u=n.getFixtureB();(l==this||u==this)&&n.flagForFiltering(),i=i.next}var _=this.m_body.getWorld();if(_!=null)for(var p=_.m_broadPhase,y=0;y<this.m_proxyCount;++y)p.touchProxy(this.m_proxies[y].proxyId)}},a.prototype.shouldCollide=function(i){if(i.m_filterGroupIndex===this.m_filterGroupIndex&&i.m_filterGroupIndex!==0)return i.m_filterGroupIndex>0;var n=(i.m_filterMaskBits&this.m_filterCategoryBits)!==0,l=(i.m_filterCategoryBits&this.m_filterMaskBits)!==0,u=n&&l;return u},a}(),At="static",Pt="kinematic",Z="dynamic",ct={type:At,position:s.zero(),angle:0,linearVelocity:s.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null},ot=function(){function a(){this.mass=0,this.center=s.zero(),this.I=0}return a}(),rt=function(){function a(i,n){n=d(n,ct),this.m_world=i,this.m_awakeFlag=n.awake,this.m_autoSleepFlag=n.allowSleep,this.m_bulletFlag=n.bullet,this.m_fixedRotationFlag=n.fixedRotation,this.m_activeFlag=n.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=n.userData,this.m_type=n.type,this.m_type==Z?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=P.identity(),this.m_xf.p=s.clone(n.position),this.m_xf.q.setAngle(n.angle),this.m_sweep=new G,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new J,this.c_position=new tt,this.m_force=s.zero(),this.m_torque=0,this.m_linearVelocity=s.clone(n.linearVelocity),this.m_angularVelocity=n.angularVelocity,this.m_linearDamping=n.linearDamping,this.m_angularDamping=n.angularDamping,this.m_gravityScale=n.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null,this.m_destroyed=!1}return a.prototype._serialize=function(){for(var i=[],n=this.m_fixtureList;n;n=n.m_next)i.push(n);return{type:this.m_type,bullet:this.m_bulletFlag,position:this.m_xf.p,angle:this.m_xf.q.getAngle(),linearVelocity:this.m_linearVelocity,angularVelocity:this.m_angularVelocity,fixtures:i}},a._deserialize=function(i,n,l){var u=new a(n,i);if(i.fixtures)for(var _=i.fixtures.length-1;_>=0;_--){var p=l(nt,i.fixtures[_],u);u._addFixture(p)}return u},a.prototype.isWorldLocked=function(){return!!(this.m_world&&this.m_world.isLocked())},a.prototype.getWorld=function(){return this.m_world},a.prototype.getNext=function(){return this.m_next},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getUserData=function(){return this.m_userData},a.prototype.getFixtureList=function(){return this.m_fixtureList},a.prototype.getJointList=function(){return this.m_jointList},a.prototype.getContactList=function(){return this.m_contactList},a.prototype.isStatic=function(){return this.m_type==At},a.prototype.isDynamic=function(){return this.m_type==Z},a.prototype.isKinematic=function(){return this.m_type==Pt},a.prototype.setStatic=function(){return this.setType(At),this},a.prototype.setDynamic=function(){return this.setType(Z),this},a.prototype.setKinematic=function(){return this.setType(Pt),this},a.prototype.getType=function(){return this.m_type},a.prototype.setType=function(i){if(this.isWorldLocked()!=!0&&this.m_type!=i){this.m_type=i,this.resetMassData(),this.m_type==At&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var n=this.m_contactList;n;){var l=n;n=n.next,this.m_world.destroyContact(l.contact)}this.m_contactList=null;for(var u=this.m_world.m_broadPhase,_=this.m_fixtureList;_;_=_.m_next)for(var p=_.m_proxyCount,y=0;y<p;++y)u.touchProxy(_.m_proxies[y].proxyId)}},a.prototype.isBullet=function(){return this.m_bulletFlag},a.prototype.setBullet=function(i){this.m_bulletFlag=!!i},a.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},a.prototype.setSleepingAllowed=function(i){this.m_autoSleepFlag=!!i,this.m_autoSleepFlag==!1&&this.setAwake(!0)},a.prototype.isAwake=function(){return this.m_awakeFlag},a.prototype.setAwake=function(i){i?this.m_awakeFlag==!1&&(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},a.prototype.isActive=function(){return this.m_activeFlag},a.prototype.setActive=function(i){if(i!=this.m_activeFlag)if(this.m_activeFlag=!!i,this.m_activeFlag)for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.createProxies(n,this.m_xf);else{for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.destroyProxies(n);for(var u=this.m_contactList;u;){var _=u;u=u.next,this.m_world.destroyContact(_.contact)}this.m_contactList=null}},a.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},a.prototype.setFixedRotation=function(i){this.m_fixedRotationFlag!=i&&(this.m_fixedRotationFlag=!!i,this.m_angularVelocity=0,this.resetMassData())},a.prototype.getTransform=function(){return this.m_xf},a.prototype.setTransform=function(i,n){if(this.isWorldLocked()!=!0){this.m_xf.setNum(i,n),this.m_sweep.setTransform(this.m_xf);for(var l=this.m_world.m_broadPhase,u=this.m_fixtureList;u;u=u.m_next)u.synchronize(l,this.m_xf,this.m_xf)}},a.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},a.prototype.synchronizeFixtures=function(){var i=P.identity();this.m_sweep.getTransform(i,0);for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.synchronize(n,i,this.m_xf)},a.prototype.advance=function(i){this.m_sweep.advance(i),this.m_sweep.c.setVec2(this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},a.prototype.getPosition=function(){return this.m_xf.p},a.prototype.setPosition=function(i){this.setTransform(i,this.m_sweep.a)},a.prototype.getAngle=function(){return this.m_sweep.a},a.prototype.setAngle=function(i){this.setTransform(this.m_xf.p,i)},a.prototype.getWorldCenter=function(){return this.m_sweep.c},a.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},a.prototype.getLinearVelocity=function(){return this.m_linearVelocity},a.prototype.getLinearVelocityFromWorldPoint=function(i){var n=s.sub(i,this.m_sweep.c);return s.add(this.m_linearVelocity,s.crossNumVec2(this.m_angularVelocity,n))},a.prototype.getLinearVelocityFromLocalPoint=function(i){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(i))},a.prototype.setLinearVelocity=function(i){this.m_type!=At&&(s.dot(i,i)>0&&this.setAwake(!0),this.m_linearVelocity.setVec2(i))},a.prototype.getAngularVelocity=function(){return this.m_angularVelocity},a.prototype.setAngularVelocity=function(i){this.m_type!=At&&(i*i>0&&this.setAwake(!0),this.m_angularVelocity=i)},a.prototype.getLinearDamping=function(){return this.m_linearDamping},a.prototype.setLinearDamping=function(i){this.m_linearDamping=i},a.prototype.getAngularDamping=function(){return this.m_angularDamping},a.prototype.setAngularDamping=function(i){this.m_angularDamping=i},a.prototype.getGravityScale=function(){return this.m_gravityScale},a.prototype.setGravityScale=function(i){this.m_gravityScale=i},a.prototype.getMass=function(){return this.m_mass},a.prototype.getInertia=function(){return this.m_I+this.m_mass*s.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},a.prototype.getMassData=function(i){i.mass=this.m_mass,i.I=this.getInertia(),i.center.setVec2(this.m_sweep.localCenter)},a.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_sweep.localCenter.setZero(),this.isStatic()||this.isKinematic()){this.m_sweep.c0.setVec2(this.m_xf.p),this.m_sweep.c.setVec2(this.m_xf.p),this.m_sweep.a0=this.m_sweep.a;return}for(var i=s.zero(),n=this.m_fixtureList;n;n=n.m_next)if(n.m_density!=0){var l=new ot;n.getMassData(l),this.m_mass+=l.mass,i.addMul(l.mass,l.center),this.m_I+=l.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,i.mul(this.m_invMass)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&this.m_fixedRotationFlag==!1?(this.m_I-=this.m_mass*s.dot(i,i),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0);var u=s.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(i,this.m_xf),this.m_linearVelocity.add(s.crossNumVec2(this.m_angularVelocity,s.sub(this.m_sweep.c,u)))},a.prototype.setMassData=function(i){if(this.isWorldLocked()!=!0&&this.m_type==Z){this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=i.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,i.I>0&&this.m_fixedRotationFlag==!1&&(this.m_I=i.I-this.m_mass*s.dot(i.center,i.center),this.m_invI=1/this.m_I);var n=s.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(i.center,this.m_xf),this.m_linearVelocity.add(s.crossNumVec2(this.m_angularVelocity,s.sub(this.m_sweep.c,n)))}},a.prototype.applyForce=function(i,n,l){l===void 0&&(l=!0),this.m_type==Z&&(l&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(i),this.m_torque+=s.crossVec2Vec2(s.sub(n,this.m_sweep.c),i)))},a.prototype.applyForceToCenter=function(i,n){n===void 0&&(n=!0),this.m_type==Z&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(i))},a.prototype.applyTorque=function(i,n){n===void 0&&(n=!0),this.m_type==Z&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=i))},a.prototype.applyLinearImpulse=function(i,n,l){l===void 0&&(l=!0),this.m_type==Z&&(l&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.addMul(this.m_invMass,i),this.m_angularVelocity+=this.m_invI*s.crossVec2Vec2(s.sub(n,this.m_sweep.c),i)))},a.prototype.applyAngularImpulse=function(i,n){n===void 0&&(n=!0),this.m_type==Z&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*i))},a.prototype.shouldCollide=function(i){if(this.m_type!=Z&&i.m_type!=Z)return!1;for(var n=this.m_jointList;n;n=n.next)if(n.other==i&&n.joint.m_collideConnected==!1)return!1;return!0},a.prototype._addFixture=function(i){if(this.isWorldLocked()==!0)return null;if(this.m_activeFlag){var n=this.m_world.m_broadPhase;i.createProxies(n,this.m_xf)}return i.m_next=this.m_fixtureList,this.m_fixtureList=i,i.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,i},a.prototype.createFixture=function(i,n){if(this.isWorldLocked()==!0)return null;var l=new nt(this,i,n);return this._addFixture(l),l},a.prototype.destroyFixture=function(i){if(this.isWorldLocked()!=!0){if(this.m_fixtureList===i)this.m_fixtureList=i.m_next;else for(var n=this.m_fixtureList;n!=null;){if(n.m_next===i){n.m_next=i.m_next;break}n=n.m_next}for(var l=this.m_contactList;l;){var u=l.contact;l=l.next;var _=u.getFixtureA(),p=u.getFixtureB();(i==_||i==p)&&this.m_world.destroyContact(u)}if(this.m_activeFlag){var y=this.m_world.m_broadPhase;i.destroyProxies(y)}i.m_body=null,i.m_next=null,this.m_world.publish("remove-fixture",i),this.resetMassData()}},a.prototype.getWorldPoint=function(i){return P.mulVec2(this.m_xf,i)},a.prototype.getWorldVector=function(i){return S.mulVec2(this.m_xf.q,i)},a.prototype.getLocalPoint=function(i){return P.mulTVec2(this.m_xf,i)},a.prototype.getLocalVector=function(i){return S.mulTVec2(this.m_xf.q,i)},a.STATIC="static",a.KINEMATIC="kinematic",a.DYNAMIC="dynamic",a}(),mt=function(){function a(i,n,l,u){typeof i=="object"&&i!==null?(this.ex=s.clone(i),this.ey=s.clone(n)):typeof i=="number"?(this.ex=s.neo(i,l),this.ey=s.neo(n,u)):(this.ex=s.zero(),this.ey=s.zero())}return a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.ex)&&s.isValid(i.ey)},a.assert=function(i){},a.prototype.set=function(i,n,l,u){typeof i=="number"&&typeof n=="number"&&typeof l=="number"&&typeof u=="number"?(this.ex.setNum(i,l),this.ey.setNum(n,u)):typeof i=="object"&&typeof n=="object"?(this.ex.setVec2(i),this.ey.setVec2(n)):typeof i=="object"&&(this.ex.setVec2(i.ex),this.ey.setVec2(i.ey))},a.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},a.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},a.prototype.getInverse=function(){var i=this.ex.x,n=this.ey.x,l=this.ex.y,u=this.ey.y,_=i*u-n*l;_!==0&&(_=1/_);var p=new a;return p.ex.x=_*u,p.ey.x=-_*n,p.ex.y=-_*l,p.ey.y=_*i,p},a.prototype.solve=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,_=this.ey.y,p=n*_-l*u;p!==0&&(p=1/p);var y=s.zero();return y.x=p*(_*i.x-l*i.y),y.y=p*(n*i.y-u*i.x),y},a.mul=function(i,n){if(n&&"x"in n&&"y"in n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)}else if(n&&"ex"in n&&"ey"in n){var _=i.ex.x*n.ex.x+i.ey.x*n.ex.y,p=i.ex.x*n.ey.x+i.ey.x*n.ey.y,y=i.ex.y*n.ex.x+i.ey.y*n.ex.y,w=i.ex.y*n.ey.x+i.ey.y*n.ey.y;return new a(_,p,y,w)}},a.mulVec2=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)},a.mulMat22=function(i,n){var l=i.ex.x*n.ex.x+i.ey.x*n.ex.y,u=i.ex.x*n.ey.x+i.ey.x*n.ey.y,_=i.ex.y*n.ex.x+i.ey.y*n.ex.y,p=i.ex.y*n.ey.x+i.ey.y*n.ey.y;return new a(l,u,_,p)},a.mulT=function(i,n){if(n&&"x"in n&&"y"in n)return s.neo(s.dot(n,i.ex),s.dot(n,i.ey));if(n&&"ex"in n&&"ey"in n){var l=s.neo(s.dot(i.ex,n.ex),s.dot(i.ey,n.ex)),u=s.neo(s.dot(i.ex,n.ey),s.dot(i.ey,n.ey));return new a(l,u)}},a.mulTVec2=function(i,n){return s.neo(s.dot(n,i.ex),s.dot(n,i.ey))},a.mulTMat22=function(i,n){var l=s.neo(s.dot(i.ex,n.ex),s.dot(i.ey,n.ex)),u=s.neo(s.dot(i.ex,n.ey),s.dot(i.ey,n.ey));return new a(l,u)},a.abs=function(i){return new a(s.abs(i.ex),s.abs(i.ey))},a.add=function(i,n){return new a(s.add(i.ex,n.ex),s.add(i.ey,n.ey))},a}(),et;(function(a){a[a.e_circles=0]="e_circles",a[a.e_faceA=1]="e_faceA",a[a.e_faceB=2]="e_faceB"})(et||(et={}));var $;(function(a){a[a.e_vertex=0]="e_vertex",a[a.e_face=1]="e_face"})($||($={}));var Tt;(function(a){a[a.nullState=0]="nullState",a[a.addState=1]="addState",a[a.persistState=2]="persistState",a[a.removeState=3]="removeState"})(Tt||(Tt={}));var pt=function(){function a(){this.v=s.zero(),this.id=new kt}return a.prototype.set=function(i){this.v.setVec2(i.v),this.id.set(i.id)},a}(),Dt=function(){function a(){this.localNormal=s.zero(),this.localPoint=s.zero(),this.points=[new Ot,new Ot],this.pointCount=0}return a.prototype.getWorldManifold=function(i,n,l,u,_){if(this.pointCount!=0){i=i||new Ce;var p=i.normal,y=i.points,w=i.separations;switch(this.type){case et.e_circles:{p=s.neo(1,0);var I=P.mulVec2(n,this.localPoint),B=P.mulVec2(u,this.points[0].localPoint),R=s.sub(B,I);s.lengthSquared(R)>f.EPSILON*f.EPSILON&&(p.setVec2(R),p.normalize());var E=I.clone().addMul(l,p),C=B.clone().addMul(-_,p);y[0]=s.mid(E,C),w[0]=s.dot(s.sub(C,E),p),y.length=1,w.length=1;break}case et.e_faceA:{p=S.mulVec2(n.q,this.localNormal);for(var T=P.mulVec2(n,this.localPoint),N=0;N<this.pointCount;++N){var H=P.mulVec2(u,this.points[N].localPoint),E=s.clone(H).addMul(l-s.dot(s.sub(H,T),p),p),C=s.clone(H).subMul(_,p);y[N]=s.mid(E,C),w[N]=s.dot(s.sub(C,E),p)}y.length=this.pointCount,w.length=this.pointCount;break}case et.e_faceB:{p=S.mulVec2(u.q,this.localNormal);for(var T=P.mulVec2(u,this.localPoint),N=0;N<this.pointCount;++N){var H=P.mulVec2(n,this.points[N].localPoint),C=s.combine(1,H,_-s.dot(s.sub(H,T),p),p),E=s.combine(1,H,-l,p);y[N]=s.mid(E,C),w[N]=s.dot(s.sub(E,C),p)}y.length=this.pointCount,w.length=this.pointCount,p.mul(-1);break}}return i.normal=p,i.points=y,i.separations=w,i}},a.clipSegmentToLine=Zt,a.ClipVertex=pt,a.getPointStates=ae,a.PointState=Tt,a}(),Ot=function(){function a(){this.localPoint=s.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.id=new kt}return a}(),kt=function(){function a(){this.cf=new dt}return Object.defineProperty(a.prototype,"key",{get:function(){return this.cf.indexA+this.cf.indexB*4+this.cf.typeA*16+this.cf.typeB*64},enumerable:!1,configurable:!0}),a.prototype.set=function(i){this.cf.set(i.cf)},a}(),dt=function(){function a(){}return a.prototype.set=function(i){this.indexA=i.indexA,this.indexB=i.indexB,this.typeA=i.typeA,this.typeB=i.typeB},a}(),Ce=function(){function a(){this.points=[],this.separations=[]}return a}();function ae(a,i,n,l){for(var u=0;u<n.pointCount;++u){var _=n.points[u].id;a[u]=Tt.removeState;for(var p=0;p<l.pointCount;++p)if(l.points[p].id.key==_.key){a[u]=Tt.persistState;break}}for(var u=0;u<l.pointCount;++u){var _=l.points[u].id;i[u]=Tt.addState;for(var p=0;p<n.pointCount;++p)if(n.points[p].id.key==_.key){i[u]=Tt.persistState;break}}}function Zt(a,i,n,l,u){var _=0,p=s.dot(n,i[0].v)-l,y=s.dot(n,i[1].v)-l;if(p<=0&&a[_++].set(i[0]),y<=0&&a[_++].set(i[1]),p*y<0){var w=p/(p-y);a[_].v.setCombine(1-w,i[0].v,w,i[1].v),a[_].id.cf.indexA=u,a[_].id.cf.indexB=i[0].id.cf.indexB,a[_].id.cf.typeA=$.e_vertex,a[_].id.cf.typeB=$.e_face,++_}return _}var xt={gjkCalls:0,gjkIters:0,gjkMaxIters:0,toiTime:0,toiMaxTime:0,toiCalls:0,toiIters:0,toiMaxIters:0,toiRootIters:0,toiMaxRootIters:0,toString:function(a){a=typeof a=="string"?a:`
`;var i="";for(var n in this)typeof this[n]!="function"&&typeof this[n]!="object"&&(i+=n+": "+this[n]+a);return i}};xt.gjkCalls=0,xt.gjkIters=0,xt.gjkMaxIters=0;var ue=function(){function a(){this.proxyA=new Ae,this.proxyB=new Ae,this.transformA=null,this.transformB=null,this.useRadii=!1}return a}(),oe=function(){function a(){this.pointA=s.zero(),this.pointB=s.zero()}return a}(),Yt=function(){function a(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}return a}();function ye(a,i,n){++xt.gjkCalls;var l=n.proxyA,u=n.proxyB,_=n.transformA,p=n.transformB,y=new We;y.readCache(i,l,_,u,p);for(var w=y.m_v,I=A.maxDistnceIterations,B=[],R=[],E=0,C=0;C<I;){E=y.m_count;for(var T=0;T<E;++T)B[T]=w[T].indexA,R[T]=w[T].indexB;if(y.solve(),y.m_count===3)break;var N=y.getClosestPoint();N.lengthSquared();var H=y.getSearchDirection();if(H.lengthSquared()<f.EPSILON*f.EPSILON)break;var W=w[y.m_count];W.indexA=l.getSupport(S.mulTVec2(_.q,s.neg(H))),W.wA=P.mulVec2(_,l.getVertex(W.indexA)),W.indexB=u.getSupport(S.mulTVec2(p.q,H)),W.wB=P.mulVec2(p,u.getVertex(W.indexB)),W.w=s.sub(W.wB,W.wA),++C,++xt.gjkIters;for(var Y=!1,T=0;T<E;++T)if(W.indexA===B[T]&&W.indexB===R[T]){Y=!0;break}if(Y)break;++y.m_count}if(xt.gjkMaxIters=f.max(xt.gjkMaxIters,C),y.getWitnessPoints(a.pointA,a.pointB),a.distance=s.distance(a.pointA,a.pointB),a.iterations=C,y.writeCache(i),n.useRadii){var j=l.m_radius,ht=u.m_radius;if(a.distance>j+ht&&a.distance>f.EPSILON){a.distance-=j+ht;var ut=s.sub(a.pointB,a.pointA);ut.normalize(),a.pointA.addMul(j,ut),a.pointB.subMul(ht,ut)}else{var N=s.mid(a.pointA,a.pointB);a.pointA.setVec2(N),a.pointB.setVec2(N),a.distance=0}}}var Ae=function(){function a(){this.m_buffer=[],this.m_vertices=[],this.m_count=0,this.m_radius=0}return a.prototype.getVertexCount=function(){return this.m_count},a.prototype.getVertex=function(i){return this.m_vertices[i]},a.prototype.getSupport=function(i){for(var n=0,l=s.dot(this.m_vertices[0],i),u=0;u<this.m_count;++u){var _=s.dot(this.m_vertices[u],i);_>l&&(n=u,l=_)}return n},a.prototype.getSupportVertex=function(i){return this.m_vertices[this.getSupport(i)]},a.prototype.set=function(i,n){i.computeDistanceProxy(this,n)},a}(),Ee=function(){function a(){this.wA=s.zero(),this.wB=s.zero(),this.w=s.zero()}return a.prototype.set=function(i){this.indexA=i.indexA,this.indexB=i.indexB,this.wA=s.clone(i.wA),this.wB=s.clone(i.wB),this.w=s.clone(i.w),this.a=i.a},a}(),We=function(){function a(){this.m_v1=new Ee,this.m_v2=new Ee,this.m_v3=new Ee,this.m_v=[this.m_v1,this.m_v2,this.m_v3],this.m_count}return a.prototype.toString=function(){return this.m_count===3?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():this.m_count===2?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():this.m_count===1?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},a.prototype.readCache=function(i,n,l,u,_){this.m_count=i.count;for(var p=0;p<this.m_count;++p){var y=this.m_v[p];y.indexA=i.indexA[p],y.indexB=i.indexB[p];var w=n.getVertex(y.indexA),I=u.getVertex(y.indexB);y.wA=P.mulVec2(l,w),y.wB=P.mulVec2(_,I),y.w=s.sub(y.wB,y.wA),y.a=0}if(this.m_count>1){var B=i.metric,R=this.getMetric();(R<.5*B||2*B<R||R<f.EPSILON)&&(this.m_count=0)}if(this.m_count===0){var y=this.m_v[0];y.indexA=0,y.indexB=0;var w=n.getVertex(0),I=u.getVertex(0);y.wA=P.mulVec2(l,w),y.wB=P.mulVec2(_,I),y.w=s.sub(y.wB,y.wA),y.a=1,this.m_count=1}},a.prototype.writeCache=function(i){i.metric=this.getMetric(),i.count=this.m_count;for(var n=0;n<this.m_count;++n)i.indexA[n]=this.m_v[n].indexA,i.indexB[n]=this.m_v[n].indexB},a.prototype.getSearchDirection=function(){switch(this.m_count){case 1:return s.neg(this.m_v1.w);case 2:{var i=s.sub(this.m_v2.w,this.m_v1.w),n=s.crossVec2Vec2(i,s.neg(this.m_v1.w));return n>0?s.crossNumVec2(1,i):s.crossVec2Num(i,1)}default:return s.zero()}},a.prototype.getClosestPoint=function(){switch(this.m_count){case 0:return s.zero();case 1:return s.clone(this.m_v1.w);case 2:return s.combine(this.m_v1.a,this.m_v1.w,this.m_v2.a,this.m_v2.w);case 3:return s.zero();default:return s.zero()}},a.prototype.getWitnessPoints=function(i,n){switch(this.m_count){case 0:break;case 1:i.setVec2(this.m_v1.wA),n.setVec2(this.m_v1.wB);break;case 2:i.setCombine(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),n.setCombine(this.m_v1.a,this.m_v1.wB,this.m_v2.a,this.m_v2.wB);break;case 3:i.setCombine(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),i.addMul(this.m_v3.a,this.m_v3.wA),n.setVec2(i);break}},a.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return s.distance(this.m_v1.w,this.m_v2.w);case 3:return s.crossVec2Vec2(s.sub(this.m_v2.w,this.m_v1.w),s.sub(this.m_v3.w,this.m_v1.w));default:return 0}},a.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3();break}},a.prototype.solve2=function(){var i=this.m_v1.w,n=this.m_v2.w,l=s.sub(n,i),u=-s.dot(i,l);if(u<=0){this.m_v1.a=1,this.m_count=1;return}var _=s.dot(n,l);if(_<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}var p=1/(_+u);this.m_v1.a=_*p,this.m_v2.a=u*p,this.m_count=2},a.prototype.solve3=function(){var i=this.m_v1.w,n=this.m_v2.w,l=this.m_v3.w,u=s.sub(n,i),_=s.dot(i,u),p=s.dot(n,u),y=p,w=-_,I=s.sub(l,i),B=s.dot(i,I),R=s.dot(l,I),E=R,C=-B,T=s.sub(l,n),N=s.dot(n,T),H=s.dot(l,T),W=H,Y=-N,j=s.crossVec2Vec2(u,I),ht=j*s.crossVec2Vec2(n,l),ut=j*s.crossVec2Vec2(l,i),ft=j*s.crossVec2Vec2(i,n);if(w<=0&&C<=0){this.m_v1.a=1,this.m_count=1;return}if(y>0&&w>0&&ft<=0){var yt=1/(y+w);this.m_v1.a=y*yt,this.m_v2.a=w*yt,this.m_count=2;return}if(E>0&&C>0&&ut<=0){var Ct=1/(E+C);this.m_v1.a=E*Ct,this.m_v3.a=C*Ct,this.m_count=2,this.m_v2.set(this.m_v3);return}if(y<=0&&Y<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}if(E<=0&&W<=0){this.m_v3.a=1,this.m_count=1,this.m_v1.set(this.m_v3);return}if(W>0&&Y>0&&ht<=0){var Rt=1/(W+Y);this.m_v2.a=W*Rt,this.m_v3.a=Y*Rt,this.m_count=2,this.m_v1.set(this.m_v3);return}var Ut=1/(ht+ut+ft);this.m_v1.a=ht*Ut,this.m_v2.a=ut*Ut,this.m_v3.a=ft*Ut,this.m_count=3},a}();function Te(a,i,n,l,u,_){var p=new ue;p.proxyA.set(a,i),p.proxyB.set(n,l),p.transformA=u,p.transformB=_,p.useRadii=!0;var y=new Yt,w=new oe;return ye(w,y,p),w.distance<10*f.EPSILON}var pe=function(){function a(i){this.contact=i}return a}();function qe(a,i){return f.sqrt(a*i)}function Xe(a,i){return a>i?a:i}var k=[],V=function(){function a(){this.rA=s.zero(),this.rB=s.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}return a}(),at=function(){function a(i,n,l,u,_){this.m_manifold=new Dt,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse=new Gt(this),this.v_points=[],this.v_normal=s.zero(),this.v_normalMass=new mt,this.v_K=new mt,this.p_localPoints=[],this.p_localNormal=s.zero(),this.p_localPoint=s.zero(),this.p_localCenterA=s.zero(),this.p_localCenterB=s.zero(),this.m_nodeA=new pe(this),this.m_nodeB=new pe(this),this.m_fixtureA=i,this.m_fixtureB=l,this.m_indexA=n,this.m_indexB=u,this.m_evaluateFcn=_,this.m_friction=qe(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=Xe(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)}return a.prototype.initConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getShape(),_=l.getShape(),p=n.getBody(),y=l.getBody(),w=this.getManifold(),I=w.pointCount;this.v_invMassA=p.m_invMass,this.v_invMassB=y.m_invMass,this.v_invIA=p.m_invI,this.v_invIB=y.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=I,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=p.m_invMass,this.p_invMassB=y.m_invMass,this.p_invIA=p.m_invI,this.p_invIB=y.m_invI,this.p_localCenterA=s.clone(p.m_sweep.localCenter),this.p_localCenterB=s.clone(y.m_sweep.localCenter),this.p_radiusA=u.m_radius,this.p_radiusB=_.m_radius,this.p_type=w.type,this.p_localNormal=s.clone(w.localNormal),this.p_localPoint=s.clone(w.localPoint),this.p_pointCount=I;for(var B=0;B<I;++B){var R=w.points[B],E=this.v_points[B]=new V;i.warmStarting?(E.normalImpulse=i.dtRatio*R.normalImpulse,E.tangentImpulse=i.dtRatio*R.tangentImpulse):(E.normalImpulse=0,E.tangentImpulse=0),E.rA.setZero(),E.rB.setZero(),E.normalMass=0,E.tangentMass=0,E.velocityBias=0,this.p_localPoints[B]=s.clone(R.localPoint)}},a.prototype.getManifold=function(){return this.m_manifold},a.prototype.getWorldManifold=function(i){var n=this.m_fixtureA.getBody(),l=this.m_fixtureB.getBody(),u=this.m_fixtureA.getShape(),_=this.m_fixtureB.getShape();return this.m_manifold.getWorldManifold(i,n.getTransform(),u.m_radius,l.getTransform(),_.m_radius)},a.prototype.setEnabled=function(i){this.m_enabledFlag=!!i},a.prototype.isEnabled=function(){return this.m_enabledFlag},a.prototype.isTouching=function(){return this.m_touchingFlag},a.prototype.getNext=function(){return this.m_next},a.prototype.getFixtureA=function(){return this.m_fixtureA},a.prototype.getFixtureB=function(){return this.m_fixtureB},a.prototype.getChildIndexA=function(){return this.m_indexA},a.prototype.getChildIndexB=function(){return this.m_indexB},a.prototype.flagForFiltering=function(){this.m_filterFlag=!0},a.prototype.setFriction=function(i){this.m_friction=i},a.prototype.getFriction=function(){return this.m_friction},a.prototype.resetFriction=function(){this.m_friction=qe(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction)},a.prototype.setRestitution=function(i){this.m_restitution=i},a.prototype.getRestitution=function(){return this.m_restitution},a.prototype.resetRestitution=function(){this.m_restitution=Xe(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},a.prototype.setTangentSpeed=function(i){this.m_tangentSpeed=i},a.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},a.prototype.evaluate=function(i,n,l){this.m_evaluateFcn(i,n,this.m_fixtureA,this.m_indexA,l,this.m_fixtureB,this.m_indexB)},a.prototype.update=function(i){this.m_enabledFlag=!0;var n=!1,l=this.m_touchingFlag,u=this.m_fixtureA.isSensor(),_=this.m_fixtureB.isSensor(),p=u||_,y=this.m_fixtureA.getBody(),w=this.m_fixtureB.getBody(),I=y.getTransform(),B=w.getTransform(),R;if(p){var E=this.m_fixtureA.getShape(),C=this.m_fixtureB.getShape();n=Te(E,this.m_indexA,C,this.m_indexB,I,B),this.m_manifold.pointCount=0}else{R=this.m_manifold,this.m_manifold=new Dt,this.evaluate(this.m_manifold,I,B),n=this.m_manifold.pointCount>0;for(var T=0;T<this.m_manifold.pointCount;++T){var N=this.m_manifold.points[T];N.normalImpulse=0,N.tangentImpulse=0;for(var H=0;H<R.pointCount;++H){var W=R.points[H];if(W.id.key==N.id.key){N.normalImpulse=W.normalImpulse,N.tangentImpulse=W.tangentImpulse;break}}}n!=l&&(y.setAwake(!0),w.setAwake(!0))}this.m_touchingFlag=n,!l&&n&&i&&i.beginContact(this),l&&!n&&i&&i.endContact(this),!p&&n&&i&&i.preSolve(this,R)},a.prototype.solvePositionConstraint=function(i){return this._solvePositionConstraint(i)},a.prototype.solvePositionConstraintTOI=function(i,n,l){return this._solvePositionConstraint(i,n,l)},a.prototype._solvePositionConstraint=function(i,n,l){var u=!!n&&!!l,_=this.m_fixtureA,p=this.m_fixtureB,y=_.getBody(),w=p.getBody();y.c_velocity,w.c_velocity;var I=y.c_position,B=w.c_position,R=s.clone(this.p_localCenterA),E=s.clone(this.p_localCenterB),C=0,T=0;(!u||y==n||y==l)&&(C=this.p_invMassA,T=this.p_invIA);var N=0,H=0;(!u||w==n||w==l)&&(N=this.p_invMassB,H=this.p_invIB);for(var W=s.clone(I.c),Y=I.a,j=s.clone(B.c),ht=B.a,ut=0,ft=0;ft<this.p_pointCount;++ft){var yt=P.identity(),Ct=P.identity();yt.q.setAngle(Y),Ct.q.setAngle(ht),yt.p=s.sub(W,S.mulVec2(yt.q,R)),Ct.p=s.sub(j,S.mulVec2(Ct.q,E));var Rt=void 0,Ut=void 0,It=void 0;switch(this.p_type){case et.e_circles:{var bt=P.mulVec2(yt,this.p_localPoint),$t=P.mulVec2(Ct,this.p_localPoints[0]);Rt=s.sub($t,bt),Rt.normalize(),Ut=s.combine(.5,bt,.5,$t),It=s.dot(s.sub($t,bt),Rt)-this.p_radiusA-this.p_radiusB;break}case et.e_faceA:{Rt=S.mulVec2(yt.q,this.p_localNormal);var jt=P.mulVec2(yt,this.p_localPoint),ie=P.mulVec2(Ct,this.p_localPoints[ft]);It=s.dot(s.sub(ie,jt),Rt)-this.p_radiusA-this.p_radiusB,Ut=ie;break}case et.e_faceB:{Rt=S.mulVec2(Ct.q,this.p_localNormal);var jt=P.mulVec2(Ct,this.p_localPoint),ie=P.mulVec2(yt,this.p_localPoints[ft]);It=s.dot(s.sub(ie,jt),Rt)-this.p_radiusA-this.p_radiusB,Ut=ie,Rt.mul(-1);break}}var ge=s.sub(Ut,W),be=s.sub(Ut,j);ut=f.min(ut,It);var ve=u?A.toiBaugarte:A.baumgarte,qt=A.linearSlop,Jt=A.maxLinearCorrection,ee=f.clamp(ve*(It+qt),-Jt,0),Ht=s.crossVec2Vec2(ge,Rt),Le=s.crossVec2Vec2(be,Rt),Qe=C+N+T*Ht*Ht+H*Le*Le,di=Qe>0?-ee/Qe:0,Ne=s.mulNumVec2(di,Rt);W.subMul(C,Ne),Y-=T*s.crossVec2Vec2(ge,Ne),j.addMul(N,Ne),ht+=H*s.crossVec2Vec2(be,Ne)}return I.c.setVec2(W),I.a=Y,B.c.setVec2(j),B.a=ht,ut},a.prototype.initVelocityConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getBody(),_=l.getBody(),p=u.c_velocity,y=_.c_velocity,w=u.c_position,I=_.c_position,B=this.p_radiusA,R=this.p_radiusB,E=this.getManifold(),C=this.v_invMassA,T=this.v_invMassB,N=this.v_invIA,H=this.v_invIB,W=s.clone(this.p_localCenterA),Y=s.clone(this.p_localCenterB),j=s.clone(w.c),ht=w.a,ut=s.clone(p.v),ft=p.w,yt=s.clone(I.c),Ct=I.a,Rt=s.clone(y.v),Ut=y.w,It=P.identity(),bt=P.identity();It.q.setAngle(ht),bt.q.setAngle(Ct),It.p.setCombine(1,j,-1,S.mulVec2(It.q,W)),bt.p.setCombine(1,yt,-1,S.mulVec2(bt.q,Y));var $t=E.getWorldManifold(null,It,B,bt,R);this.v_normal.setVec2($t.normal);for(var jt=0;jt<this.v_pointCount;++jt){var ie=this.v_points[jt];ie.rA.setVec2(s.sub($t.points[jt],j)),ie.rB.setVec2(s.sub($t.points[jt],yt));var ge=s.crossVec2Vec2(ie.rA,this.v_normal),be=s.crossVec2Vec2(ie.rB,this.v_normal),ve=C+T+N*ge*ge+H*be*be;ie.normalMass=ve>0?1/ve:0;var qt=s.crossVec2Num(this.v_normal,1),Jt=s.crossVec2Vec2(ie.rA,qt),ee=s.crossVec2Vec2(ie.rB,qt),Ht=C+T+N*Jt*Jt+H*ee*ee;ie.tangentMass=Ht>0?1/Ht:0,ie.velocityBias=0;var Le=s.dot(this.v_normal,Rt)+s.dot(this.v_normal,s.crossNumVec2(Ut,ie.rB))-s.dot(this.v_normal,ut)-s.dot(this.v_normal,s.crossNumVec2(ft,ie.rA));Le<-A.velocityThreshold&&(ie.velocityBias=-this.v_restitution*Le)}if(this.v_pointCount==2&&i.blockSolve){var Qe=this.v_points[0],di=this.v_points[1],Ne=s.crossVec2Vec2(Qe.rA,this.v_normal),Xi=s.crossVec2Vec2(Qe.rB,this.v_normal),Tn=s.crossVec2Vec2(di.rA,this.v_normal),ti=s.crossVec2Vec2(di.rB,this.v_normal),Ii=C+T+N*Ne*Ne+H*Xi*Xi,Bn=C+T+N*Tn*Tn+H*ti*ti,En=C+T+N*Ne*Tn+H*Xi*ti,Di=1e3;Ii*Ii<Di*(Ii*Bn-En*En)?(this.v_K.ex.setNum(Ii,En),this.v_K.ey.setNum(En,Bn),this.v_normalMass.set(this.v_K.getInverse())):this.v_pointCount=1}w.c.setVec2(j),w.a=ht,p.v.setVec2(ut),p.w=ft,I.c.setVec2(yt),I.a=Ct,y.v.setVec2(Rt),y.w=Ut},a.prototype.warmStartConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getBody(),_=l.getBody(),p=u.c_velocity,y=_.c_velocity;u.c_position,_.c_position;for(var w=this.v_invMassA,I=this.v_invIA,B=this.v_invMassB,R=this.v_invIB,E=s.clone(p.v),C=p.w,T=s.clone(y.v),N=y.w,H=this.v_normal,W=s.crossVec2Num(H,1),Y=0;Y<this.v_pointCount;++Y){var j=this.v_points[Y],ht=s.combine(j.normalImpulse,H,j.tangentImpulse,W);C-=I*s.crossVec2Vec2(j.rA,ht),E.subMul(w,ht),N+=R*s.crossVec2Vec2(j.rB,ht),T.addMul(B,ht)}p.v.setVec2(E),p.w=C,y.v.setVec2(T),y.w=N},a.prototype.storeConstraintImpulses=function(i){for(var n=this.m_manifold,l=0;l<this.v_pointCount;++l)n.points[l].normalImpulse=this.v_points[l].normalImpulse,n.points[l].tangentImpulse=this.v_points[l].tangentImpulse},a.prototype.solveVelocityConstraint=function(i){var n=this.m_fixtureA.m_body,l=this.m_fixtureB.m_body,u=n.c_velocity;n.c_position;var _=l.c_velocity;l.c_position;for(var p=this.v_invMassA,y=this.v_invIA,w=this.v_invMassB,I=this.v_invIB,B=s.clone(u.v),R=u.w,E=s.clone(_.v),C=_.w,T=this.v_normal,N=s.crossVec2Num(T,1),H=this.v_friction,W=0;W<this.v_pointCount;++W){var Y=this.v_points[W],j=s.zero();j.addCombine(1,E,1,s.crossNumVec2(C,Y.rB)),j.subCombine(1,B,1,s.crossNumVec2(R,Y.rA));var ht=s.dot(j,N)-this.v_tangentSpeed,ut=Y.tangentMass*-ht,ft=H*Y.normalImpulse,yt=f.clamp(Y.tangentImpulse+ut,-ft,ft);ut=yt-Y.tangentImpulse,Y.tangentImpulse=yt;var Ct=s.mulNumVec2(ut,N);B.subMul(p,Ct),R-=y*s.crossVec2Vec2(Y.rA,Ct),E.addMul(w,Ct),C+=I*s.crossVec2Vec2(Y.rB,Ct)}if(this.v_pointCount==1||i.blockSolve==!1)for(var Rt=0;Rt<this.v_pointCount;++Rt){var Y=this.v_points[Rt],j=s.zero();j.addCombine(1,E,1,s.crossNumVec2(C,Y.rB)),j.subCombine(1,B,1,s.crossNumVec2(R,Y.rA));var Ut=s.dot(j,T),ut=-Y.normalMass*(Ut-Y.velocityBias),yt=f.max(Y.normalImpulse+ut,0);ut=yt-Y.normalImpulse,Y.normalImpulse=yt;var Ct=s.mulNumVec2(ut,T);B.subMul(p,Ct),R-=y*s.crossVec2Vec2(Y.rA,Ct),E.addMul(w,Ct),C+=I*s.crossVec2Vec2(Y.rB,Ct)}else{var It=this.v_points[0],bt=this.v_points[1],$t=s.neo(It.normalImpulse,bt.normalImpulse),jt=s.zero().add(E).add(s.crossNumVec2(C,It.rB)).sub(B).sub(s.crossNumVec2(R,It.rA)),ie=s.zero().add(E).add(s.crossNumVec2(C,bt.rB)).sub(B).sub(s.crossNumVec2(R,bt.rA)),ge=s.dot(jt,T),be=s.dot(ie,T),ve=s.neo(ge-It.velocityBias,be-bt.velocityBias);for(ve.sub(mt.mulVec2(this.v_K,$t));;){var qt=mt.mulVec2(this.v_normalMass,ve).neg();if(qt.x>=0&&qt.y>=0){var Jt=s.sub(qt,$t),ee=s.mulNumVec2(Jt.x,T),Ht=s.mulNumVec2(Jt.y,T);B.subCombine(p,ee,p,Ht),R-=y*(s.crossVec2Vec2(It.rA,ee)+s.crossVec2Vec2(bt.rA,Ht)),E.addCombine(w,ee,w,Ht),C+=I*(s.crossVec2Vec2(It.rB,ee)+s.crossVec2Vec2(bt.rB,Ht)),It.normalImpulse=qt.x,bt.normalImpulse=qt.y;break}if(qt.x=-It.normalMass*ve.x,qt.y=0,ge=0,be=this.v_K.ex.y*qt.x+ve.y,qt.x>=0&&be>=0){var Jt=s.sub(qt,$t),ee=s.mulNumVec2(Jt.x,T),Ht=s.mulNumVec2(Jt.y,T);B.subCombine(p,ee,p,Ht),R-=y*(s.crossVec2Vec2(It.rA,ee)+s.crossVec2Vec2(bt.rA,Ht)),E.addCombine(w,ee,w,Ht),C+=I*(s.crossVec2Vec2(It.rB,ee)+s.crossVec2Vec2(bt.rB,Ht)),It.normalImpulse=qt.x,bt.normalImpulse=qt.y;break}if(qt.x=0,qt.y=-bt.normalMass*ve.y,ge=this.v_K.ey.x*qt.y+ve.x,be=0,qt.y>=0&&ge>=0){var Jt=s.sub(qt,$t),ee=s.mulNumVec2(Jt.x,T),Ht=s.mulNumVec2(Jt.y,T);B.subCombine(p,ee,p,Ht),R-=y*(s.crossVec2Vec2(It.rA,ee)+s.crossVec2Vec2(bt.rA,Ht)),E.addCombine(w,ee,w,Ht),C+=I*(s.crossVec2Vec2(It.rB,ee)+s.crossVec2Vec2(bt.rB,Ht)),It.normalImpulse=qt.x,bt.normalImpulse=qt.y;break}if(qt.x=0,qt.y=0,ge=ve.x,be=ve.y,ge>=0&&be>=0){var Jt=s.sub(qt,$t),ee=s.mulNumVec2(Jt.x,T),Ht=s.mulNumVec2(Jt.y,T);B.subCombine(p,ee,p,Ht),R-=y*(s.crossVec2Vec2(It.rA,ee)+s.crossVec2Vec2(bt.rA,Ht)),E.addCombine(w,ee,w,Ht),C+=I*(s.crossVec2Vec2(It.rB,ee)+s.crossVec2Vec2(bt.rB,Ht)),It.normalImpulse=qt.x,bt.normalImpulse=qt.y;break}break}}u.v.setVec2(B),u.w=R,_.v.setVec2(E),_.w=C},a.addType=function(i,n,l){k[i]=k[i]||{},k[i][n]=l},a.create=function(i,n,l,u){var _=i.getType(),p=l.getType(),y,w;if(w=k[_]&&k[_][p])y=new a(i,n,l,u,w);else if(w=k[p]&&k[p][_])y=new a(l,u,i,n,w);else return null;i=y.getFixtureA(),l=y.getFixtureB(),n=y.getChildIndexA(),u=y.getChildIndexB();var I=i.getBody(),B=l.getBody();return y.m_nodeA.contact=y,y.m_nodeA.other=B,y.m_nodeA.prev=null,y.m_nodeA.next=I.m_contactList,I.m_contactList!=null&&(I.m_contactList.prev=y.m_nodeA),I.m_contactList=y.m_nodeA,y.m_nodeB.contact=y,y.m_nodeB.other=I,y.m_nodeB.prev=null,y.m_nodeB.next=B.m_contactList,B.m_contactList!=null&&(B.m_contactList.prev=y.m_nodeB),B.m_contactList=y.m_nodeB,i.isSensor()==!1&&l.isSensor()==!1&&(I.setAwake(!0),B.setAwake(!0)),y},a.destroy=function(i,n){var l=i.m_fixtureA,u=i.m_fixtureB,_=l.getBody(),p=u.getBody();i.isTouching()&&n.endContact(i),i.m_nodeA.prev&&(i.m_nodeA.prev.next=i.m_nodeA.next),i.m_nodeA.next&&(i.m_nodeA.next.prev=i.m_nodeA.prev),i.m_nodeA==_.m_contactList&&(_.m_contactList=i.m_nodeA.next),i.m_nodeB.prev&&(i.m_nodeB.prev.next=i.m_nodeB.next),i.m_nodeB.next&&(i.m_nodeB.next.prev=i.m_nodeB.prev),i.m_nodeB==p.m_contactList&&(p.m_contactList=i.m_nodeB.next),i.m_manifold.pointCount>0&&l.isSensor()==!1&&u.isSensor()==!1&&(_.setAwake(!0),p.setAwake(!0)),l.getType(),u.getType()},a}(),Mt=function(){function a(){this.other=null,this.joint=null,this.prev=null,this.next=null}return a}(),gt=function(){function a(i,n,l){this.m_type="unknown-joint",this.m_prev=null,this.m_next=null,this.m_edgeA=new Mt,this.m_edgeB=new Mt,this.m_islandFlag=!1,n="bodyA"in i?i.bodyA:n,l="bodyB"in i?i.bodyB:l,this.m_bodyA=n,this.m_bodyB=l,this.m_collideConnected=!!i.collideConnected,this.m_userData=i.userData}return a.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},a.prototype.getType=function(){return this.m_type},a.prototype.getBodyA=function(){return this.m_bodyA},a.prototype.getBodyB=function(){return this.m_bodyB},a.prototype.getNext=function(){return this.m_next},a.prototype.getUserData=function(){return this.m_userData},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getCollideConnected=function(){return this.m_collideConnected},a.prototype.shiftOrigin=function(i){},a}(),Nt=function(){return Date.now()},Kt=function(a){return Date.now()-a},z={now:Nt,diff:Kt},vt=function(){function a(){this.proxyA=new Ae,this.proxyB=new Ae,this.sweepA=new G,this.sweepB=new G}return a}(),St;(function(a){a[a.e_unknown=0]="e_unknown",a[a.e_failed=1]="e_failed",a[a.e_overlapped=2]="e_overlapped",a[a.e_touching=3]="e_touching",a[a.e_separated=4]="e_separated"})(St||(St={}));var Bt=function(){function a(){}return a}();xt.toiTime=0,xt.toiMaxTime=0,xt.toiCalls=0,xt.toiIters=0,xt.toiMaxIters=0,xt.toiRootIters=0,xt.toiMaxRootIters=0;function q(a,i){var n=z.now();++xt.toiCalls,a.state=St.e_unknown,a.t=i.tMax;var l=i.proxyA,u=i.proxyB,_=i.sweepA,p=i.sweepB;_.normalize(),p.normalize();var y=i.tMax,w=l.m_radius+u.m_radius,I=f.max(A.linearSlop,w-3*A.linearSlop),B=.25*A.linearSlop,R=0,E=A.maxTOIIterations,C=0,T=new Yt,N=new ue;for(N.proxyA=i.proxyA,N.proxyB=i.proxyB,N.useRadii=!1;;){var H=P.identity(),W=P.identity();_.getTransform(H,R),p.getTransform(W,R),N.transformA=H,N.transformB=W;var Y=new oe;if(ye(Y,T,N),Y.distance<=0){a.state=St.e_overlapped,a.t=0;break}if(Y.distance<I+B){a.state=St.e_touching,a.t=R;break}var j=new Et;j.initialize(T,l,_,u,p,R);for(var ht=!1,ut=y,ft=0;;){var yt=j.findMinSeparation(ut);if(yt>I+B){a.state=St.e_separated,a.t=y,ht=!0;break}if(yt>I-B){R=ut;break}var Ct=j.evaluate(R);if(Ct<I-B){a.state=St.e_failed,a.t=R,ht=!0;break}if(Ct<=I+B){a.state=St.e_touching,a.t=R,ht=!0;break}for(var Rt=0,Ut=R,It=ut;;){var bt=void 0;Rt&1?bt=Ut+(I-Ct)*(It-Ut)/(yt-Ct):bt=.5*(Ut+It),++Rt,++xt.toiRootIters;var $t=j.evaluate(bt);if(j.indexA,j.indexB,f.abs($t-I)<B){ut=bt;break}if($t>I?(Ut=bt,Ct=$t):(It=bt,yt=$t),Rt===50)break}if(xt.toiMaxRootIters=f.max(xt.toiMaxRootIters,Rt),++ft,ft===A.maxPolygonVertices)break}if(++C,++xt.toiIters,ht)break;if(C===E){a.state=St.e_failed,a.t=R;break}}xt.toiMaxIters=f.max(xt.toiMaxIters,C);var jt=z.diff(n);xt.toiMaxTime=f.max(xt.toiMaxTime,jt),xt.toiTime+=jt}var wt;(function(a){a[a.e_points=1]="e_points",a[a.e_faceA=2]="e_faceA",a[a.e_faceB=3]="e_faceB"})(wt||(wt={}));var Et=function(){function a(){this.m_proxyA=new Ae,this.m_proxyB=new Ae,this.m_localPoint=s.zero(),this.m_axis=s.zero()}return a.prototype.initialize=function(i,n,l,u,_,p){this.m_proxyA=n,this.m_proxyB=u;var y=i.count;this.m_sweepA=l,this.m_sweepB=_;var w=P.identity(),I=P.identity();if(this.m_sweepA.getTransform(w,p),this.m_sweepB.getTransform(I,p),y===1){this.m_type=wt.e_points;var B=this.m_proxyA.getVertex(i.indexA[0]),R=this.m_proxyB.getVertex(i.indexB[0]),E=P.mulVec2(w,B),C=P.mulVec2(I,R);this.m_axis.setCombine(1,C,-1,E);var T=this.m_axis.normalize();return T}else if(i.indexA[0]===i.indexA[1]){this.m_type=wt.e_faceB;var N=u.getVertex(i.indexB[0]),H=u.getVertex(i.indexB[1]);this.m_axis=s.crossVec2Num(s.sub(H,N),1),this.m_axis.normalize();var W=S.mulVec2(I.q,this.m_axis);this.m_localPoint=s.mid(N,H);var C=P.mulVec2(I,this.m_localPoint),B=n.getVertex(i.indexA[0]),E=P.mulVec2(w,B),T=s.dot(E,W)-s.dot(C,W);return T<0&&(this.m_axis=s.neg(this.m_axis),T=-T),T}else{this.m_type=wt.e_faceA;var Y=this.m_proxyA.getVertex(i.indexA[0]),j=this.m_proxyA.getVertex(i.indexA[1]);this.m_axis=s.crossVec2Num(s.sub(j,Y),1),this.m_axis.normalize();var W=S.mulVec2(w.q,this.m_axis);this.m_localPoint=s.mid(Y,j);var E=P.mulVec2(w,this.m_localPoint),R=this.m_proxyB.getVertex(i.indexB[0]),C=P.mulVec2(I,R),T=s.dot(C,W)-s.dot(E,W);return T<0&&(this.m_axis=s.neg(this.m_axis),T=-T),T}},a.prototype.compute=function(i,n){var l=P.identity(),u=P.identity();switch(this.m_sweepA.getTransform(l,n),this.m_sweepB.getTransform(u,n),this.m_type){case wt.e_points:{if(i){var _=S.mulTVec2(l.q,this.m_axis),p=S.mulTVec2(u.q,s.neg(this.m_axis));this.indexA=this.m_proxyA.getSupport(_),this.indexB=this.m_proxyB.getSupport(p)}var y=this.m_proxyA.getVertex(this.indexA),w=this.m_proxyB.getVertex(this.indexB),I=P.mulVec2(l,y),B=P.mulVec2(u,w),R=s.dot(B,this.m_axis)-s.dot(I,this.m_axis);return R}case wt.e_faceA:{var E=S.mulVec2(l.q,this.m_axis),I=P.mulVec2(l,this.m_localPoint);if(i){var p=S.mulTVec2(u.q,s.neg(E));this.indexA=-1,this.indexB=this.m_proxyB.getSupport(p)}var w=this.m_proxyB.getVertex(this.indexB),B=P.mulVec2(u,w),R=s.dot(B,E)-s.dot(I,E);return R}case wt.e_faceB:{var E=S.mulVec2(u.q,this.m_axis),B=P.mulVec2(u,this.m_localPoint);if(i){var _=S.mulTVec2(l.q,s.neg(E));this.indexB=-1,this.indexA=this.m_proxyA.getSupport(_)}var y=this.m_proxyA.getVertex(this.indexA),I=P.mulVec2(l,y),R=s.dot(I,E)-s.dot(B,E);return R}default:return i&&(this.indexA=-1,this.indexB=-1),0}},a.prototype.findMinSeparation=function(i){return this.compute(!0,i)},a.prototype.evaluate=function(i){return this.compute(!1,i)},a}(),Xt=function(){function a(){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}return a.prototype.reset=function(i){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=i,this.inv_dt=i==0?0:1/i,this.dtRatio=i*this.inv_dt0},a}(),Vt=new Xt,Gt=function(){function a(i){this.contact=i,this.normals=[],this.tangents=[]}return Object.defineProperty(a.prototype,"normalImpulses",{get:function(){var i=this.contact,n=this.normals;n.length=0;for(var l=0;l<i.v_points.length;++l)n.push(i.v_points[l].normalImpulse);return n},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"tangentImpulses",{get:function(){var i=this.contact,n=this.tangents;n.length=0;for(var l=0;l<i.v_points.length;++l)n.push(i.v_points[l].tangentImpulse);return n},enumerable:!1,configurable:!0}),a}(),Lt=function(){function a(i){this.m_world=i,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}return a.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},a.prototype.addBody=function(i){this.m_bodies.push(i)},a.prototype.addContact=function(i){this.m_contacts.push(i)},a.prototype.addJoint=function(i){this.m_joints.push(i)},a.prototype.solveWorld=function(i){for(var n=this.m_world,l=n.m_bodyList;l;l=l.m_next)l.m_islandFlag=!1;for(var u=n.m_contactList;u;u=u.m_next)u.m_islandFlag=!1;for(var _=n.m_jointList;_;_=_.m_next)_.m_islandFlag=!1;for(var p=this.m_stack,y=n.m_bodyList;y;y=y.m_next)if(!y.m_islandFlag&&!(y.isAwake()==!1||y.isActive()==!1)&&!y.isStatic()){for(this.clear(),p.push(y),y.m_islandFlag=!0;p.length>0;){var l=p.pop();if(this.addBody(l),l.setAwake(!0),!l.isStatic()){for(var w=l.m_contactList;w;w=w.next){var I=w.contact;if(!I.m_islandFlag&&!(I.isEnabled()==!1||I.isTouching()==!1)){var B=I.m_fixtureA.m_isSensor,R=I.m_fixtureB.m_isSensor;if(!(B||R)){this.addContact(I),I.m_islandFlag=!0;var E=w.other;E.m_islandFlag||(p.push(E),E.m_islandFlag=!0)}}}for(var C=l.m_jointList;C;C=C.next)if(C.joint.m_islandFlag!=!0){var E=C.other;E.isActive()!=!1&&(this.addJoint(C.joint),C.joint.m_islandFlag=!0,!E.m_islandFlag&&(p.push(E),E.m_islandFlag=!0))}}}this.solveIsland(i);for(var T=0;T<this.m_bodies.length;++T){var l=this.m_bodies[T];l.isStatic()&&(l.m_islandFlag=!1)}}},a.prototype.solveIsland=function(i){for(var n=this.m_world,l=n.m_gravity,u=n.m_allowSleep,_=i.dt,p=0;p<this.m_bodies.length;++p){var y=this.m_bodies[p],w=s.clone(y.m_sweep.c),I=y.m_sweep.a,B=s.clone(y.m_linearVelocity),R=y.m_angularVelocity;y.m_sweep.c0.setVec2(y.m_sweep.c),y.m_sweep.a0=y.m_sweep.a,y.isDynamic()&&(B.addMul(_*y.m_gravityScale,l),B.addMul(_*y.m_invMass,y.m_force),R+=_*y.m_invI*y.m_torque,B.mul(1/(1+_*y.m_linearDamping)),R*=1/(1+_*y.m_angularDamping)),y.c_position.c=w,y.c_position.a=I,y.c_velocity.v=B,y.c_velocity.w=R}for(var p=0;p<this.m_contacts.length;++p){var E=this.m_contacts[p];E.initConstraint(i)}for(var p=0;p<this.m_contacts.length;++p){var E=this.m_contacts[p];E.initVelocityConstraint(i)}if(i.warmStarting)for(var p=0;p<this.m_contacts.length;++p){var E=this.m_contacts[p];E.warmStartConstraint(i)}for(var p=0;p<this.m_joints.length;++p){var C=this.m_joints[p];C.initVelocityConstraints(i)}for(var p=0;p<i.velocityIterations;++p){for(var T=0;T<this.m_joints.length;++T){var C=this.m_joints[T];C.solveVelocityConstraints(i)}for(var T=0;T<this.m_contacts.length;++T){var E=this.m_contacts[T];E.solveVelocityConstraint(i)}}for(var p=0;p<this.m_contacts.length;++p){var E=this.m_contacts[p];E.storeConstraintImpulses(i)}for(var p=0;p<this.m_bodies.length;++p){var y=this.m_bodies[p],w=s.clone(y.c_position.c),I=y.c_position.a,B=s.clone(y.c_velocity.v),R=y.c_velocity.w,N=s.mulNumVec2(_,B);if(s.lengthSquared(N)>A.maxTranslationSquared){var H=A.maxTranslation/N.length();B.mul(H)}var W=_*R;if(W*W>A.maxRotationSquared){var H=A.maxRotation/f.abs(W);R*=H}w.addMul(_,B),I+=_*R,y.c_position.c.setVec2(w),y.c_position.a=I,y.c_velocity.v.setVec2(B),y.c_velocity.w=R}for(var Y=!1,p=0;p<i.positionIterations;++p){for(var j=0,T=0;T<this.m_contacts.length;++T){var E=this.m_contacts[T],ht=E.solvePositionConstraint(i);j=f.min(j,ht)}for(var ut=j>=-3*A.linearSlop,ft=!0,T=0;T<this.m_joints.length;++T){var C=this.m_joints[T],yt=C.solvePositionConstraints(i);ft=ft&&yt}if(ut&&ft){Y=!0;break}}for(var p=0;p<this.m_bodies.length;++p){var y=this.m_bodies[p];y.m_sweep.c.setVec2(y.c_position.c),y.m_sweep.a=y.c_position.a,y.m_linearVelocity.setVec2(y.c_velocity.v),y.m_angularVelocity=y.c_velocity.w,y.synchronizeTransform()}if(this.postSolveIsland(),u){for(var Ct=1/0,Rt=A.linearSleepToleranceSqr,Ut=A.angularSleepToleranceSqr,p=0;p<this.m_bodies.length;++p){var y=this.m_bodies[p];y.isStatic()||(y.m_autoSleepFlag==!1||y.m_angularVelocity*y.m_angularVelocity>Ut||s.lengthSquared(y.m_linearVelocity)>Rt?(y.m_sleepTime=0,Ct=0):(y.m_sleepTime+=_,Ct=f.min(Ct,y.m_sleepTime)))}if(Ct>=A.timeToSleep&&Y)for(var p=0;p<this.m_bodies.length;++p){var y=this.m_bodies[p];y.setAwake(!1)}}},a.prototype.printBodies=function(i){for(var n=0;n<this.m_bodies.length;++n){var l=this.m_bodies[n];v.debug(i,l.c_position.a,l.c_position.c.x,l.c_position.c.y,l.c_velocity.w,l.c_velocity.v.x,l.c_velocity.v.y)}},a.prototype.solveWorldTOI=function(i){var n=this.m_world;if(n.m_stepComplete){for(var qt=n.m_bodyList;qt;qt=qt.m_next)qt.m_islandFlag=!1,qt.m_sweep.alpha0=0;for(var Jt=n.m_contactList;Jt;Jt=Jt.m_next)Jt.m_toiFlag=!1,Jt.m_islandFlag=!1,Jt.m_toiCount=0,Jt.m_toi=1}for(;;){for(var l=null,u=1,Jt=n.m_contactList;Jt;Jt=Jt.m_next)if(Jt.isEnabled()!=!1&&!(Jt.m_toiCount>A.maxSubSteps)){var _=1;if(Jt.m_toiFlag)_=Jt.m_toi;else{var p=Jt.getFixtureA(),y=Jt.getFixtureB();if(p.isSensor()||y.isSensor())continue;var w=p.getBody(),I=y.getBody(),B=w.isAwake()&&!w.isStatic(),R=I.isAwake()&&!I.isStatic();if(B==!1&&R==!1)continue;var E=w.isBullet()||!w.isDynamic(),C=I.isBullet()||!I.isDynamic();if(E==!1&&C==!1)continue;var T=w.m_sweep.alpha0;w.m_sweep.alpha0<I.m_sweep.alpha0?(T=I.m_sweep.alpha0,w.m_sweep.advance(T)):I.m_sweep.alpha0<w.m_sweep.alpha0&&(T=w.m_sweep.alpha0,I.m_sweep.advance(T));var N=Jt.getChildIndexA(),H=Jt.getChildIndexB();w.m_sweep,I.m_sweep;var W=new vt;W.proxyA.set(p.getShape(),N),W.proxyB.set(y.getShape(),H),W.sweepA.set(w.m_sweep),W.sweepB.set(I.m_sweep),W.tMax=1;var Y=new Bt;q(Y,W);var j=Y.t;Y.state==St.e_touching?_=f.min(T+(1-T)*j,1):_=1,Jt.m_toi=_,Jt.m_toiFlag=!0}_<u&&(l=Jt,u=_)}if(l==null||1-10*f.EPSILON<u){n.m_stepComplete=!0;break}var ht=l.getFixtureA(),ut=l.getFixtureB(),ft=ht.getBody(),yt=ut.getBody(),Ct=ft.m_sweep.clone(),Rt=yt.m_sweep.clone();if(ft.advance(u),yt.advance(u),l.update(n),l.m_toiFlag=!1,++l.m_toiCount,l.isEnabled()==!1||l.isTouching()==!1){l.setEnabled(!1),ft.m_sweep.set(Ct),yt.m_sweep.set(Rt),ft.synchronizeTransform(),yt.synchronizeTransform();continue}ft.setAwake(!0),yt.setAwake(!0),this.clear(),this.addBody(ft),this.addBody(yt),this.addContact(l),ft.m_islandFlag=!0,yt.m_islandFlag=!0,l.m_islandFlag=!0;for(var Ut=[ft,yt],It=0;It<Ut.length;++It){var bt=Ut[It];if(bt.isDynamic())for(var $t=bt.m_contactList;$t;$t=$t.next){var jt=$t.contact;if(!jt.m_islandFlag){var ie=$t.other;if(!(ie.isDynamic()&&!bt.isBullet()&&!ie.isBullet())){var ge=jt.m_fixtureA.m_isSensor,be=jt.m_fixtureB.m_isSensor;if(!(ge||be)){var ve=ie.m_sweep.clone();if(ie.m_islandFlag==!1&&ie.advance(u),jt.update(n),jt.isEnabled()==!1||jt.isTouching()==!1){ie.m_sweep.set(ve),ie.synchronizeTransform();continue}jt.m_islandFlag=!0,this.addContact(jt),!ie.m_islandFlag&&(ie.m_islandFlag=!0,ie.isStatic()||ie.setAwake(!0),this.addBody(ie))}}}}}Vt.reset((1-u)*i.dt),Vt.dtRatio=1,Vt.positionIterations=20,Vt.velocityIterations=i.velocityIterations,Vt.warmStarting=!1,this.solveIslandTOI(Vt,ft,yt);for(var It=0;It<this.m_bodies.length;++It){var bt=this.m_bodies[It];if(bt.m_islandFlag=!1,!!bt.isDynamic()){bt.synchronizeFixtures();for(var $t=bt.m_contactList;$t;$t=$t.next)$t.contact.m_toiFlag=!1,$t.contact.m_islandFlag=!1}}if(n.findNewContacts(),n.m_subStepping){n.m_stepComplete=!1;break}}var qt,Jt},a.prototype.solveIslandTOI=function(i,n,l){this.m_world;for(var B=0;B<this.m_bodies.length;++B){var u=this.m_bodies[B];u.c_position.c.setVec2(u.m_sweep.c),u.c_position.a=u.m_sweep.a,u.c_velocity.v.setVec2(u.m_linearVelocity),u.c_velocity.w=u.m_angularVelocity}for(var B=0;B<this.m_contacts.length;++B){var _=this.m_contacts[B];_.initConstraint(i)}for(var B=0;B<i.positionIterations;++B){for(var p=0,y=0;y<this.m_contacts.length;++y){var _=this.m_contacts[y],w=_.solvePositionConstraintTOI(i,n,l);p=f.min(p,w)}var I=p>=-1.5*A.linearSlop;if(I)break}var B,R;n.m_sweep.c0.setVec2(n.c_position.c),n.m_sweep.a0=n.c_position.a,l.m_sweep.c0.setVec2(l.c_position.c),l.m_sweep.a0=l.c_position.a;for(var B=0;B<this.m_contacts.length;++B){var _=this.m_contacts[B];_.initVelocityConstraint(i)}for(var B=0;B<i.velocityIterations;++B)for(var y=0;y<this.m_contacts.length;++y){var _=this.m_contacts[y];_.solveVelocityConstraint(i)}for(var E=i.dt,B=0;B<this.m_bodies.length;++B){var u=this.m_bodies[B],R=s.clone(u.c_position.c),C=u.c_position.a,T=s.clone(u.c_velocity.v),N=u.c_velocity.w,H=s.mulNumVec2(E,T);if(s.dot(H,H)>A.maxTranslationSquared){var W=A.maxTranslation/H.length();T.mul(W)}var Y=E*N;if(Y*Y>A.maxRotationSquared){var W=A.maxRotation/f.abs(Y);N*=W}R.addMul(E,T),C+=E*N,u.c_position.c=R,u.c_position.a=C,u.c_velocity.v=T,u.c_velocity.w=N,u.m_sweep.c=R,u.m_sweep.a=C,u.m_linearVelocity=T,u.m_angularVelocity=N,u.synchronizeTransform()}this.postSolveIsland()},a.prototype.postSolveIsland=function(){for(var i=0;i<this.m_contacts.length;++i){var n=this.m_contacts[i];this.m_world.postSolve(n,n.m_impulse)}},a}(),Qt={gravity:s.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3},fe=function(){function a(i){var n=this;if(this.s_step=new Xt,this.createContact=function(l,u){var _=l.fixture,p=u.fixture,y=l.childIndex,w=u.childIndex,I=_.getBody(),B=p.getBody();if(I!=B){for(var R=B.getContactList();R;){if(R.other==I){var E=R.contact.getFixtureA(),C=R.contact.getFixtureB(),T=R.contact.getChildIndexA(),N=R.contact.getChildIndexB();if(E==_&&C==p&&T==y&&N==w||E==p&&C==_&&T==w&&N==y)return}R=R.next}if(B.shouldCollide(I)!=!1&&p.shouldCollide(_)!=!1){var H=at.create(_,y,p,w);H!=null&&(H.m_prev=null,n.m_contactList!=null&&(H.m_next=n.m_contactList,n.m_contactList.m_prev=H),n.m_contactList=H,++n.m_contactCount)}}},!(this instanceof a))return new a(i);i&&s.isValid(i)&&(i={gravity:i}),i=d(i,Qt),this.m_solver=new Lt(this),this.m_broadPhase=new U,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=i.allowSleep,this.m_gravity=s.clone(i.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=i.warmStarting,this.m_continuousPhysics=i.continuousPhysics,this.m_subStepping=i.subStepping,this.m_blockSolve=i.blockSolve,this.m_velocityIterations=i.velocityIterations,this.m_positionIterations=i.positionIterations,this.m_t=0}return a.prototype._serialize=function(){for(var i=[],n=[],l=this.getBodyList();l;l=l.getNext())i.push(l);for(var u=this.getJointList();u;u=u.getNext())typeof u._serialize=="function"&&n.push(u);return{gravity:this.m_gravity,bodies:i,joints:n}},a._deserialize=function(i,n,l){if(!i)return new a;var u=new a(i.gravity);if(i.bodies)for(var _=i.bodies.length-1;_>=0;_-=1)u._addBody(l(rt,i.bodies[_],u));if(i.joints)for(var _=i.joints.length-1;_>=0;_--)u.createJoint(l(gt,i.joints[_],u));return u},a.prototype.getBodyList=function(){return this.m_bodyList},a.prototype.getJointList=function(){return this.m_jointList},a.prototype.getContactList=function(){return this.m_contactList},a.prototype.getBodyCount=function(){return this.m_bodyCount},a.prototype.getJointCount=function(){return this.m_jointCount},a.prototype.getContactCount=function(){return this.m_contactCount},a.prototype.setGravity=function(i){this.m_gravity=i},a.prototype.getGravity=function(){return this.m_gravity},a.prototype.isLocked=function(){return this.m_locked},a.prototype.setAllowSleeping=function(i){if(i!=this.m_allowSleep&&(this.m_allowSleep=i,this.m_allowSleep==!1))for(var n=this.m_bodyList;n;n=n.m_next)n.setAwake(!0)},a.prototype.getAllowSleeping=function(){return this.m_allowSleep},a.prototype.setWarmStarting=function(i){this.m_warmStarting=i},a.prototype.getWarmStarting=function(){return this.m_warmStarting},a.prototype.setContinuousPhysics=function(i){this.m_continuousPhysics=i},a.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},a.prototype.setSubStepping=function(i){this.m_subStepping=i},a.prototype.getSubStepping=function(){return this.m_subStepping},a.prototype.setAutoClearForces=function(i){this.m_clearForces=i},a.prototype.getAutoClearForces=function(){return this.m_clearForces},a.prototype.clearForces=function(){for(var i=this.m_bodyList;i;i=i.getNext())i.m_force.setZero(),i.m_torque=0},a.prototype.queryAABB=function(i,n){var l=this.m_broadPhase;this.m_broadPhase.query(i,function(u){var _=l.getUserData(u);return n(_.fixture)})},a.prototype.rayCast=function(i,n,l){var u=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:i,p2:n},function(_,p){var y=u.getUserData(p),w=y.fixture,I=y.childIndex,B={},R=w.rayCast(B,_,I);if(R){var E=B.fraction,C=s.add(s.mulNumVec2(1-E,_.p1),s.mulNumVec2(E,_.p2));return l(w,C,B.normal,E)}return _.maxFraction})},a.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},a.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},a.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},a.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},a.prototype.shiftOrigin=function(i){if(!this.m_locked){for(var n=this.m_bodyList;n;n=n.m_next)n.m_xf.p.sub(i),n.m_sweep.c0.sub(i),n.m_sweep.c.sub(i);for(var l=this.m_jointList;l;l=l.m_next)l.shiftOrigin(i);this.m_broadPhase.shiftOrigin(i)}},a.prototype._addBody=function(i){this.isLocked()||(i.m_prev=null,i.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=i),this.m_bodyList=i,++this.m_bodyCount)},a.prototype.createBody=function(i,n){if(this.isLocked())return null;var l={};i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i));var u=new rt(this,l);return this._addBody(u),u},a.prototype.createDynamicBody=function(i,n){var l={};return i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i)),l.type="dynamic",this.createBody(l)},a.prototype.createKinematicBody=function(i,n){var l={};return i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i)),l.type="kinematic",this.createBody(l)},a.prototype.destroyBody=function(i){if(!this.isLocked()){if(i.m_destroyed)return!1;for(var n=i.m_jointList;n;){var l=n;n=n.next,this.publish("remove-joint",l.joint),this.destroyJoint(l.joint),i.m_jointList=n}i.m_jointList=null;for(var u=i.m_contactList;u;){var _=u;u=u.next,this.destroyContact(_.contact),i.m_contactList=u}i.m_contactList=null;for(var p=i.m_fixtureList;p;){var y=p;p=p.m_next,this.publish("remove-fixture",y),y.destroyProxies(this.m_broadPhase),i.m_fixtureList=p}return i.m_fixtureList=null,i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_bodyList&&(this.m_bodyList=i.m_next),i.m_destroyed=!0,--this.m_bodyCount,this.publish("remove-body",i),!0}},a.prototype.createJoint=function(i){if(this.isLocked())return null;if(i.m_prev=null,i.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=i),this.m_jointList=i,++this.m_jointCount,i.m_edgeA.joint=i,i.m_edgeA.other=i.m_bodyB,i.m_edgeA.prev=null,i.m_edgeA.next=i.m_bodyA.m_jointList,i.m_bodyA.m_jointList&&(i.m_bodyA.m_jointList.prev=i.m_edgeA),i.m_bodyA.m_jointList=i.m_edgeA,i.m_edgeB.joint=i,i.m_edgeB.other=i.m_bodyA,i.m_edgeB.prev=null,i.m_edgeB.next=i.m_bodyB.m_jointList,i.m_bodyB.m_jointList&&(i.m_bodyB.m_jointList.prev=i.m_edgeB),i.m_bodyB.m_jointList=i.m_edgeB,i.m_collideConnected==!1)for(var n=i.m_bodyB.getContactList();n;n=n.next)n.other==i.m_bodyA&&n.contact.flagForFiltering();return i},a.prototype.destroyJoint=function(i){if(!this.isLocked()){i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_jointList&&(this.m_jointList=i.m_next);var n=i.m_bodyA,l=i.m_bodyB;if(n.setAwake(!0),l.setAwake(!0),i.m_edgeA.prev&&(i.m_edgeA.prev.next=i.m_edgeA.next),i.m_edgeA.next&&(i.m_edgeA.next.prev=i.m_edgeA.prev),i.m_edgeA==n.m_jointList&&(n.m_jointList=i.m_edgeA.next),i.m_edgeA.prev=null,i.m_edgeA.next=null,i.m_edgeB.prev&&(i.m_edgeB.prev.next=i.m_edgeB.next),i.m_edgeB.next&&(i.m_edgeB.next.prev=i.m_edgeB.prev),i.m_edgeB==l.m_jointList&&(l.m_jointList=i.m_edgeB.next),i.m_edgeB.prev=null,i.m_edgeB.next=null,--this.m_jointCount,i.m_collideConnected==!1)for(var u=l.getContactList();u;)u.other==n&&u.contact.flagForFiltering(),u=u.next;this.publish("remove-joint",i)}},a.prototype.step=function(i,n,l){if(this.publish("pre-step",i),(n|0)!==n&&(n=0),n=n||this.m_velocityIterations,l=l||this.m_positionIterations,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,this.s_step.reset(i),this.s_step.velocityIterations=n,this.s_step.positionIterations=l,this.s_step.warmStarting=this.m_warmStarting,this.s_step.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&i>0){this.m_solver.solveWorld(this.s_step);for(var u=this.m_bodyList;u;u=u.getNext())u.m_islandFlag!=!1&&(u.isStatic()||u.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&i>0&&this.m_solver.solveWorldTOI(this.s_step),this.m_clearForces&&this.clearForces(),this.m_locked=!1,this.publish("post-step",i)},a.prototype.findNewContacts=function(){this.m_broadPhase.updatePairs(this.createContact)},a.prototype.updateContacts=function(){for(var i,n=this.m_contactList;i=n;){n=i.getNext();var l=i.getFixtureA(),u=i.getFixtureB(),_=i.getChildIndexA(),p=i.getChildIndexB(),y=l.getBody(),w=u.getBody();if(i.m_filterFlag){if(w.shouldCollide(y)==!1){this.destroyContact(i);continue}if(u.shouldCollide(l)==!1){this.destroyContact(i);continue}i.m_filterFlag=!1}var I=y.isAwake()&&!y.isStatic(),B=w.isAwake()&&!w.isStatic();if(!(I==!1&&B==!1)){var R=l.m_proxies[_].proxyId,E=u.m_proxies[p].proxyId,C=this.m_broadPhase.testOverlap(R,E);if(C==!1){this.destroyContact(i);continue}i.update(this)}}},a.prototype.destroyContact=function(i){at.destroy(i,this),i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_contactList&&(this.m_contactList=i.m_next),--this.m_contactCount},a.prototype.on=function(i,n){return typeof i!="string"||typeof n!="function"?this:(this._listeners||(this._listeners={}),this._listeners[i]||(this._listeners[i]=[]),this._listeners[i].push(n),this)},a.prototype.off=function(i,n){if(typeof i!="string"||typeof n!="function")return this;var l=this._listeners&&this._listeners[i];if(!l||!l.length)return this;var u=l.indexOf(n);return u>=0&&l.splice(u,1),this},a.prototype.publish=function(i,n,l,u){var _=this._listeners&&this._listeners[i];if(!_||!_.length)return 0;for(var p=0;p<_.length;p++)_[p].call(this,n,l,u);return _.length},a.prototype.beginContact=function(i){this.publish("begin-contact",i)},a.prototype.endContact=function(i){this.publish("end-contact",i)},a.prototype.preSolve=function(i,n){this.publish("pre-solve",i,n)},a.prototype.postSolve=function(i,n){this.publish("post-solve",i,n)},a}(),zt=function(){function a(i,n,l){if(!(this instanceof a))return new a(i,n,l);typeof i>"u"?(this.x=0,this.y=0,this.z=0):typeof i=="object"?(this.x=i.x,this.y=i.y,this.z=i.z):(this.x=i,this.y=n,this.z=l)}return a.prototype._serialize=function(){return{x:this.x,y:this.y,z:this.z}},a._deserialize=function(i){var n=Object.create(a.prototype);return n.x=i.x,n.y=i.y,n.z=i.z,n},a.neo=function(i,n,l){var u=Object.create(a.prototype);return u.x=i,u.y=n,u.z=l,u},a.zero=function(){var i=Object.create(a.prototype);return i.x=0,i.y=0,i.z=0,i},a.clone=function(i){return a.neo(i.x,i.y,i.z)},a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:f.isFinite(i.x)&&f.isFinite(i.y)&&f.isFinite(i.z)},a.assert=function(i){},a.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},a.prototype.set=function(i,n,l){return this.x=i,this.y=n,this.z=l,this},a.prototype.add=function(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this},a.prototype.sub=function(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this},a.prototype.mul=function(i){return this.x*=i,this.y*=i,this.z*=i,this},a.areEqual=function(i,n){return i===n||typeof i=="object"&&i!==null&&typeof n=="object"&&n!==null&&i.x===n.x&&i.y===n.y&&i.z===n.z},a.dot=function(i,n){return i.x*n.x+i.y*n.y+i.z*n.z},a.cross=function(i,n){return new a(i.y*n.z-i.z*n.y,i.z*n.x-i.x*n.z,i.x*n.y-i.y*n.x)},a.add=function(i,n){return new a(i.x+n.x,i.y+n.y,i.z+n.z)},a.sub=function(i,n){return new a(i.x-n.x,i.y-n.y,i.z-n.z)},a.mul=function(i,n){return new a(n*i.x,n*i.y,n*i.z)},a.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},a.neg=function(i){return new a(-i.x,-i.y,-i.z)},a}(),Me=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_radius=A.polygonRadius,u.m_vertex1=n?s.clone(n):s.zero(),u.m_vertex2=l?s.clone(l):s.zero(),u.m_vertex0=s.zero(),u.m_vertex3=s.zero(),u.m_hasVertex0=!1,u.m_hasVertex3=!1,u):new i(n,l)}return i.prototype._serialize=function(){return{type:this.m_type,vertex1:this.m_vertex1,vertex2:this.m_vertex2,vertex0:this.m_vertex0,vertex3:this.m_vertex3,hasVertex0:this.m_hasVertex0,hasVertex3:this.m_hasVertex3}},i._deserialize=function(n){var l=new i(n.vertex1,n.vertex2);return l.m_hasVertex0&&l.setPrevVertex(n.vertex0),l.m_hasVertex3&&l.setNextVertex(n.vertex3),l},i.prototype.setNext=function(n){return this.setNextVertex(n)},i.prototype.setNextVertex=function(n){return n?(this.m_vertex3.setVec2(n),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},i.prototype.getNextVertex=function(){return this.m_vertex3},i.prototype.setPrev=function(n){return this.setPrevVertex(n)},i.prototype.setPrevVertex=function(n){return n?(this.m_vertex0.setVec2(n),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},i.prototype.getPrevVertex=function(){return this.m_vertex0},i.prototype._set=function(n,l){return this.m_vertex1.setVec2(n),this.m_vertex2.setVec2(l),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},i.prototype._clone=function(){var n=new i;return n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_vertex1.setVec2(this.m_vertex1),n.m_vertex2.setVec2(this.m_vertex2),n.m_vertex0.setVec2(this.m_vertex0),n.m_vertex3.setVec2(this.m_vertex3),n.m_hasVertex0=this.m_hasVertex0,n.m_hasVertex3=this.m_hasVertex3,n},i.prototype.getChildCount=function(){return 1},i.prototype.testPoint=function(n,l){return!1},i.prototype.rayCast=function(n,l,u,_){var p=S.mulTVec2(u.q,s.sub(l.p1,u.p)),y=S.mulTVec2(u.q,s.sub(l.p2,u.p)),w=s.sub(y,p),I=this.m_vertex1,B=this.m_vertex2,R=s.sub(B,I),E=s.neo(R.y,-R.x);E.normalize();var C=s.dot(E,s.sub(I,p)),T=s.dot(E,w);if(T==0)return!1;var N=C/T;if(N<0||l.maxFraction<N)return!1;var H=s.add(p,s.mulNumVec2(N,w)),W=s.sub(B,I),Y=s.dot(W,W);if(Y==0)return!1;var j=s.dot(s.sub(H,I),W)/Y;return j<0||1<j?!1:(n.fraction=N,C>0?n.normal=S.mulVec2(u.q,E).neg():n.normal=S.mulVec2(u.q,E),!0)},i.prototype.computeAABB=function(n,l,u){var _=P.mulVec2(l,this.m_vertex1),p=P.mulVec2(l,this.m_vertex2);n.combinePoints(_,p),n.extend(this.m_radius)},i.prototype.computeMass=function(n,l){n.mass=0,n.center.setCombine(.5,this.m_vertex1,.5,this.m_vertex2),n.I=0},i.prototype.computeDistanceProxy=function(n){n.m_vertices.push(this.m_vertex1),n.m_vertices.push(this.m_vertex2),n.m_count=2,n.m_radius=this.m_radius},i.TYPE="edge",i}(O),Ue=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_radius=A.polygonRadius,u.m_vertices=[],u.m_count=0,u.m_prevVertex=null,u.m_nextVertex=null,u.m_hasPrevVertex=!1,u.m_hasNextVertex=!1,u.m_isLoop=!!l,n&&n.length&&(l?u._createLoop(n):u._createChain(n)),u):new i(n,l)}return i.prototype._serialize=function(){var n={type:this.m_type,vertices:this.m_vertices,isLoop:this.m_isLoop,hasPrevVertex:this.m_hasPrevVertex,hasNextVertex:this.m_hasNextVertex,prevVertex:null,nextVertex:null};return this.m_prevVertex&&(n.prevVertex=this.m_prevVertex),this.m_nextVertex&&(n.nextVertex=this.m_nextVertex),n},i._deserialize=function(n,l,u){var _=[];if(n.vertices)for(var p=0;p<n.vertices.length;p++)_.push(u(s,n.vertices[p]));var y=new i(_,n.isLoop);return n.prevVertex&&y.setPrevVertex(n.prevVertex),n.nextVertex&&y.setNextVertex(n.nextVertex),y},i.prototype._createLoop=function(n){for(var l=1;l<n.length;++l)n[l-1],n[l];this.m_vertices=[],this.m_count=n.length+1;for(var l=0;l<n.length;++l)this.m_vertices[l]=s.clone(n[l]);return this.m_vertices[n.length]=s.clone(n[0]),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this},i.prototype._createChain=function(n){for(var l=1;l<n.length;++l)n[l-1],n[l];this.m_count=n.length;for(var l=0;l<n.length;++l)this.m_vertices[l]=s.clone(n[l]);return this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this.m_prevVertex=null,this.m_nextVertex=null,this},i.prototype._reset=function(){this.m_isLoop?this._createLoop(this.m_vertices):this._createChain(this.m_vertices)},i.prototype.setPrevVertex=function(n){this.m_prevVertex=n,this.m_hasPrevVertex=!0},i.prototype.getPrevVertex=function(){return this.m_prevVertex},i.prototype.setNextVertex=function(n){this.m_nextVertex=n,this.m_hasNextVertex=!0},i.prototype.getNextVertex=function(){return this.m_nextVertex},i.prototype._clone=function(){var n=new i;return n._createChain(this.m_vertices),n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_prevVertex=this.m_prevVertex,n.m_nextVertex=this.m_nextVertex,n.m_hasPrevVertex=this.m_hasPrevVertex,n.m_hasNextVertex=this.m_hasNextVertex,n},i.prototype.getChildCount=function(){return this.m_count-1},i.prototype.getChildEdge=function(n,l){n.m_type=Me.TYPE,n.m_radius=this.m_radius,n.m_vertex1=this.m_vertices[l],n.m_vertex2=this.m_vertices[l+1],l>0?(n.m_vertex0=this.m_vertices[l-1],n.m_hasVertex0=!0):(n.m_vertex0=this.m_prevVertex,n.m_hasVertex0=this.m_hasPrevVertex),l<this.m_count-2?(n.m_vertex3=this.m_vertices[l+2],n.m_hasVertex3=!0):(n.m_vertex3=this.m_nextVertex,n.m_hasVertex3=this.m_hasNextVertex)},i.prototype.getVertex=function(n){return n<this.m_count?this.m_vertices[n]:this.m_vertices[0]},i.prototype.isLoop=function(){return this.m_isLoop},i.prototype.testPoint=function(n,l){return!1},i.prototype.rayCast=function(n,l,u,_){var p=new Me(this.getVertex(_),this.getVertex(_+1));return p.rayCast(n,l,u,0)},i.prototype.computeAABB=function(n,l,u){var _=P.mulVec2(l,this.getVertex(u)),p=P.mulVec2(l,this.getVertex(u+1));n.combinePoints(_,p)},i.prototype.computeMass=function(n,l){n.mass=0,n.center=s.zero(),n.I=0},i.prototype.computeDistanceProxy=function(n,l){n.m_buffer[0]=this.getVertex(l),n.m_buffer[1]=this.getVertex(l+1),n.m_vertices=n.m_buffer,n.m_count=2,n.m_radius=this.m_radius},i.TYPE="chain",i}(O),ni=function(a){o(i,a);function i(n){var l=this;return l instanceof i?(l=a.call(this)||this,l.m_type=i.TYPE,l.m_radius=A.polygonRadius,l.m_centroid=s.zero(),l.m_vertices=[],l.m_normals=[],l.m_count=0,n&&n.length&&l._set(n),l):new i(n)}return i.prototype._serialize=function(){return{type:this.m_type,vertices:this.m_vertices}},i._deserialize=function(n,l,u){var _=[];if(n.vertices)for(var p=0;p<n.vertices.length;p++)_.push(u(s,n.vertices[p]));var y=new i(_);return y},i.prototype.getVertex=function(n){return this.m_vertices[n]},i.prototype._clone=function(){var n=new i;n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_count=this.m_count,n.m_centroid.setVec2(this.m_centroid);for(var l=0;l<this.m_count;l++)n.m_vertices.push(this.m_vertices[l].clone());for(var l=0;l<this.m_normals.length;l++)n.m_normals.push(this.m_normals[l].clone());return n},i.prototype.getChildCount=function(){return 1},i.prototype._reset=function(){this._set(this.m_vertices)},i.prototype._set=function(n){if(n.length<3){this._setAsBox(1,1);return}for(var l=f.min(n.length,A.maxPolygonVertices),u=[],_=0;_<l;++_){for(var p=n[_],y=!0,w=0;w<u.length;++w)if(s.distanceSquared(p,u[w])<.25*A.linearSlopSquared){y=!1;break}y&&u.push(p)}if(l=u.length,l<3){this._setAsBox(1,1);return}for(var I=0,B=u[0].x,_=1;_<l;++_){var R=u[_].x;(R>B||R===B&&u[_].y<u[I].y)&&(I=_,B=R)}for(var E=[],C=0,T=I;;){E[C]=T;for(var N=0,w=1;w<l;++w){if(N===T){N=w;continue}var H=s.sub(u[N],u[E[C]]),p=s.sub(u[w],u[E[C]]),W=s.crossVec2Vec2(H,p);W<0&&(N=w),W===0&&p.lengthSquared()>H.lengthSquared()&&(N=w)}if(++C,T=N,N===I)break}if(C<3){this._setAsBox(1,1);return}this.m_count=C,this.m_vertices=[];for(var _=0;_<C;++_)this.m_vertices[_]=u[E[_]];for(var _=0;_<C;++_){var Y=_,j=_+1<C?_+1:0,ht=s.sub(this.m_vertices[j],this.m_vertices[Y]);this.m_normals[_]=s.crossVec2Num(ht,1),this.m_normals[_].normalize()}this.m_centroid=$r(this.m_vertices,C)},i.prototype._setAsBox=function(n,l,u,_){if(this.m_vertices[0]=s.neo(n,-l),this.m_vertices[1]=s.neo(n,l),this.m_vertices[2]=s.neo(-n,l),this.m_vertices[3]=s.neo(-n,-l),this.m_normals[0]=s.neo(1,0),this.m_normals[1]=s.neo(0,1),this.m_normals[2]=s.neo(-1,0),this.m_normals[3]=s.neo(0,-1),this.m_count=4,s.isValid(u)){_=_||0,this.m_centroid.setVec2(u);var p=P.identity();p.p.setVec2(u),p.q.setAngle(_);for(var y=0;y<this.m_count;++y)this.m_vertices[y]=P.mulVec2(p,this.m_vertices[y]),this.m_normals[y]=S.mulVec2(p.q,this.m_normals[y])}},i.prototype.testPoint=function(n,l){for(var u=S.mulTVec2(n.q,s.sub(l,n.p)),_=0;_<this.m_count;++_){var p=s.dot(this.m_normals[_],s.sub(u,this.m_vertices[_]));if(p>0)return!1}return!0},i.prototype.rayCast=function(n,l,u,_){for(var p=S.mulTVec2(u.q,s.sub(l.p1,u.p)),y=S.mulTVec2(u.q,s.sub(l.p2,u.p)),w=s.sub(y,p),I=0,B=l.maxFraction,R=-1,E=0;E<this.m_count;++E){var C=s.dot(this.m_normals[E],s.sub(this.m_vertices[E],p)),T=s.dot(this.m_normals[E],w);if(T==0){if(C<0)return!1}else T<0&&C<I*T?(I=C/T,R=E):T>0&&C<B*T&&(B=C/T);if(B<I)return!1}return R>=0?(n.fraction=I,n.normal=S.mulVec2(u.q,this.m_normals[R]),!0):!1},i.prototype.computeAABB=function(n,l,u){for(var _=1/0,p=1/0,y=-1/0,w=-1/0,I=0;I<this.m_count;++I){var B=P.mulVec2(l,this.m_vertices[I]);_=f.min(_,B.x),y=f.max(y,B.x),p=f.min(p,B.y),w=f.max(w,B.y)}n.lowerBound.setNum(_,p),n.upperBound.setNum(y,w),n.extend(this.m_radius)},i.prototype.computeMass=function(n,l){for(var u=s.zero(),_=0,p=0,y=s.zero(),w=0;w<this.m_count;++w)y.add(this.m_vertices[w]);y.mul(1/this.m_count);for(var I=1/3,w=0;w<this.m_count;++w){var B=s.sub(this.m_vertices[w],y),R=w+1<this.m_count?s.sub(this.m_vertices[w+1],y):s.sub(this.m_vertices[0],y),E=s.crossVec2Vec2(B,R),C=.5*E;_+=C,u.addCombine(C*I,B,C*I,R);var T=B.x,N=B.y,H=R.x,W=R.y,Y=T*T+H*T+H*H,j=N*N+W*N+W*W;p+=.25*I*E*(Y+j)}n.mass=l*_,u.mul(1/_),n.center.setCombine(1,u,1,y),n.I=l*p,n.I+=n.mass*(s.dot(n.center,n.center)-s.dot(u,u))},i.prototype.validate=function(){for(var n=0;n<this.m_count;++n)for(var l=n,u=n<this.m_count-1?l+1:0,_=this.m_vertices[l],p=s.sub(this.m_vertices[u],_),y=0;y<this.m_count;++y)if(!(y==l||y==u)){var w=s.sub(this.m_vertices[y],_),I=s.crossVec2Vec2(p,w);if(I<0)return!1}return!0},i.prototype.computeDistanceProxy=function(n){n.m_vertices=this.m_vertices,n.m_count=this.m_count,n.m_radius=this.m_radius},i.TYPE="polygon",i}(O);function $r(a,i){for(var n=s.zero(),l=0,u=s.zero(),_,p=1/3,_=0;_<i;++_){var y=u,w=a[_],I=_+1<i?a[_+1]:a[0],B=s.sub(w,y),R=s.sub(I,y),E=s.crossVec2Vec2(B,R),C=.5*E;l+=C,n.addMul(C*p,y),n.addMul(C*p,w),n.addMul(C*p,I)}return n.mul(1/l),n}var Hi=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(p=a.call(this)||this,p._setAsBox(n,l,u,_),p):new i(n,l,u,_)}return i.TYPE="polygon",i}(ni),Ai=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_p=s.zero(),u.m_radius=1,typeof n=="object"&&s.isValid(n)?(u.m_p.setVec2(n),typeof l=="number"&&(u.m_radius=l)):typeof n=="number"&&(u.m_radius=n),u):new i(n,l)}return i.prototype._serialize=function(){return{type:this.m_type,p:this.m_p,radius:this.m_radius}},i._deserialize=function(n){return new i(n.p,n.radius)},i.prototype.getRadius=function(){return this.m_radius},i.prototype.getCenter=function(){return this.m_p},i.prototype.getVertex=function(n){return this.m_p},i.prototype._clone=function(){var n=new i;return n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_p=this.m_p.clone(),n},i.prototype.getChildCount=function(){return 1},i.prototype.testPoint=function(n,l){var u=s.add(n.p,S.mulVec2(n.q,this.m_p)),_=s.sub(l,u);return s.dot(_,_)<=this.m_radius*this.m_radius},i.prototype.rayCast=function(n,l,u,_){var p=s.add(u.p,S.mulVec2(u.q,this.m_p)),y=s.sub(l.p1,p),w=s.dot(y,y)-this.m_radius*this.m_radius,I=s.sub(l.p2,l.p1),B=s.dot(y,I),R=s.dot(I,I),E=B*B-R*w;if(E<0||R<f.EPSILON)return!1;var C=-(B+f.sqrt(E));return 0<=C&&C<=l.maxFraction*R?(C/=R,n.fraction=C,n.normal=s.add(y,s.mulNumVec2(C,I)),n.normal.normalize(),!0):!1},i.prototype.computeAABB=function(n,l,u){var _=s.add(l.p,S.mulVec2(l.q,this.m_p));n.lowerBound.setNum(_.x-this.m_radius,_.y-this.m_radius),n.upperBound.setNum(_.x+this.m_radius,_.y+this.m_radius)},i.prototype.computeMass=function(n,l){n.mass=l*f.PI*this.m_radius*this.m_radius,n.center=this.m_p,n.I=n.mass*(.5*this.m_radius*this.m_radius+s.dot(this.m_p,this.m_p))},i.prototype.computeDistanceProxy=function(n){n.m_vertices.push(this.m_p),n.m_count=1,n.m_radius=this.m_radius},i.TYPE="circle",i}(O),rr={frequencyHz:0,dampingRatio:0},Sn=function(a){o(i,a);function i(n,l,u,_,p){var y=this;if(!(y instanceof i))return new i(n,l,u,_,p);if(u&&_&&"m_type"in _&&"x"in u&&"y"in u){var w=u;u=_,_=w}return n=d(n,rr),y=a.call(this,n,l,u)||this,l=y.m_bodyA,u=y.m_bodyB,y.m_type=i.TYPE,y.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),y.m_localAnchorB=s.clone(p?u.getLocalPoint(p):n.localAnchorB||s.zero()),y.m_length=f.isFinite(n.length)?n.length:s.distance(l.getWorldPoint(y.m_localAnchorA),u.getWorldPoint(y.m_localAnchorB)),y.m_frequencyHz=n.frequencyHz,y.m_dampingRatio=n.dampingRatio,y.m_impulse=0,y.m_gamma=0,y.m_bias=0,y}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,length:this.m_length,impulse:this.m_impulse,gamma:this.m_gamma,bias:this.m_bias}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.length>0?this.m_length=+n.length:n.length<0||(n.anchorA||n.anchorA||n.anchorA||n.anchorA)&&(this.m_length=s.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA),this.m_bodyB.getWorldPoint(this.m_localAnchorB)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setLength=function(n){this.m_length=n},i.prototype.getLength=function(){return this.m_length},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_u).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyA.c_velocity.v,p=this.m_bodyA.c_velocity.w,y=this.m_bodyB.c_position.c,w=this.m_bodyB.c_position.a,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w,R=S.neo(u),E=S.neo(w);this.m_rA=S.mulVec2(R,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=S.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=s.sub(s.add(y,this.m_rB),s.add(l,this.m_rA));var C=this.m_u.length();C>A.linearSlop?this.m_u.mul(1/C):this.m_u.setNum(0,0);var T=s.crossVec2Vec2(this.m_rA,this.m_u),N=s.crossVec2Vec2(this.m_rB,this.m_u),H=this.m_invMassA+this.m_invIA*T*T+this.m_invMassB+this.m_invIB*N*N;if(this.m_mass=H!=0?1/H:0,this.m_frequencyHz>0){var W=C-this.m_length,Y=2*f.PI*this.m_frequencyHz,j=2*this.m_mass*this.m_dampingRatio*Y,ht=this.m_mass*Y*Y,ut=n.dt;this.m_gamma=ut*(j+ut*ht),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=W*ut*ht*this.m_gamma,H+=this.m_gamma,this.m_mass=H!=0?1/H:0}else this.m_gamma=0,this.m_bias=0;if(n.warmStarting){this.m_impulse*=n.dtRatio;var ft=s.mulNumVec2(this.m_impulse,this.m_u);_.subMul(this.m_invMassA,ft),p-=this.m_invIA*s.crossVec2Vec2(this.m_rA,ft),I.addMul(this.m_invMassB,ft),B+=this.m_invIB*s.crossVec2Vec2(this.m_rB,ft)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(_),this.m_bodyA.c_velocity.w=p,this.m_bodyB.c_velocity.v.setVec2(I),this.m_bodyB.c_velocity.w=B},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=s.add(l,s.crossNumVec2(u,this.m_rA)),w=s.add(_,s.crossNumVec2(p,this.m_rB)),I=s.dot(this.m_u,w)-s.dot(this.m_u,y),B=-this.m_mass*(I+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=B;var R=s.mulNumVec2(B,this.m_u);l.subMul(this.m_invMassA,R),u-=this.m_invIA*s.crossVec2Vec2(this.m_rA,R),_.addMul(this.m_invMassB,R),p+=this.m_invIB*s.crossVec2Vec2(this.m_rB,R),this.m_bodyA.c_velocity.v.setVec2(l),this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v.setVec2(_),this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){if(this.m_frequencyHz>0)return!0;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=S.mulSub(y,this.m_localAnchorA,this.m_localCenterA),B=S.mulSub(w,this.m_localAnchorB,this.m_localCenterB),R=s.sub(s.add(_,B),s.add(l,I)),E=R.normalize(),C=E-this.m_length;C=f.clamp(C,-A.maxLinearCorrection,A.maxLinearCorrection);var T=-this.m_mass*C,N=s.mulNumVec2(T,R);return l.subMul(this.m_invMassA,N),u-=this.m_invIA*s.crossVec2Vec2(I,N),_.addMul(this.m_invMassB,N),p+=this.m_invIB*s.crossVec2Vec2(B,N),this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(_),this.m_bodyB.c_position.a=p,f.abs(C)<A.linearSlop},i.TYPE="distance-joint",i}(gt),Qr={maxForce:0,maxTorque:0},sr=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(n=d(n,Qr),p=a.call(this,n,l,u)||this,l=p.m_bodyA,u=p.m_bodyB,p.m_type=i.TYPE,p.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),p.m_localAnchorB=s.clone(_?u.getLocalPoint(_):n.localAnchorB||s.zero()),p.m_linearImpulse=s.zero(),p.m_angularImpulse=0,p.m_maxForce=n.maxForce,p.m_maxTorque=n.maxTorque,p):new i(n,l,u,_)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setMaxTorque=function(n){this.m_maxTorque=n},i.prototype.getMaxTorque=function(){return this.m_maxTorque},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_linearImpulse)},i.prototype.getReactionTorque=function(n){return n*this.m_angularImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,_=this.m_bodyA.c_velocity.w,p=this.m_bodyB.c_position.a,y=this.m_bodyB.c_velocity.v,w=this.m_bodyB.c_velocity.w,I=S.neo(l),B=S.neo(p);this.m_rA=S.mulVec2(I,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=S.mulVec2(B,s.sub(this.m_localAnchorB,this.m_localCenterB));var R=this.m_invMassA,E=this.m_invMassB,C=this.m_invIA,T=this.m_invIB,N=new mt;if(N.ex.x=R+E+C*this.m_rA.y*this.m_rA.y+T*this.m_rB.y*this.m_rB.y,N.ex.y=-C*this.m_rA.x*this.m_rA.y-T*this.m_rB.x*this.m_rB.y,N.ey.x=N.ex.y,N.ey.y=R+E+C*this.m_rA.x*this.m_rA.x+T*this.m_rB.x*this.m_rB.x,this.m_linearMass=N.getInverse(),this.m_angularMass=C+T,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),n.warmStarting){this.m_linearImpulse.mul(n.dtRatio),this.m_angularImpulse*=n.dtRatio;var H=s.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);u.subMul(R,H),_-=C*(s.crossVec2Vec2(this.m_rA,H)+this.m_angularImpulse),y.addMul(E,H),w+=T*(s.crossVec2Vec2(this.m_rB,H)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=_,this.m_bodyB.c_velocity.v=y,this.m_bodyB.c_velocity.w=w},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_invMassA,w=this.m_invMassB,I=this.m_invIA,B=this.m_invIB,R=n.dt;{var E=p-u,C=-this.m_angularMass*E,T=this.m_angularImpulse,N=R*this.m_maxTorque;this.m_angularImpulse=f.clamp(this.m_angularImpulse+C,-N,N),C=this.m_angularImpulse-T,u-=I*C,p+=B*C}{var E=s.sub(s.add(_,s.crossNumVec2(p,this.m_rB)),s.add(l,s.crossNumVec2(u,this.m_rA))),C=s.neg(mt.mulVec2(this.m_linearMass,E)),T=this.m_linearImpulse;this.m_linearImpulse.add(C);var N=R*this.m_maxForce;this.m_linearImpulse.lengthSquared()>N*N&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(N)),C=s.sub(this.m_linearImpulse,T),l.subMul(y,C),u-=I*s.crossVec2Vec2(this.m_rA,C),_.addMul(w,C),p+=B*s.crossVec2Vec2(this.m_rB,C)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="friction-joint",i}(gt),ui=function(){function a(i,n,l){typeof i=="object"&&i!==null?(this.ex=zt.clone(i),this.ey=zt.clone(n),this.ez=zt.clone(l)):(this.ex=zt.zero(),this.ey=zt.zero(),this.ez=zt.zero())}return a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:zt.isValid(i.ex)&&zt.isValid(i.ey)&&zt.isValid(i.ez)},a.assert=function(i){},a.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},a.prototype.solve33=function(i){var n=zt.dot(this.ex,zt.cross(this.ey,this.ez));n!==0&&(n=1/n);var l=new zt;return l.x=n*zt.dot(i,zt.cross(this.ey,this.ez)),l.y=n*zt.dot(this.ex,zt.cross(i,this.ez)),l.z=n*zt.dot(this.ex,zt.cross(this.ey,i)),l},a.prototype.solve22=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,_=this.ey.y,p=n*_-l*u;p!==0&&(p=1/p);var y=s.zero();return y.x=p*(_*i.x-l*i.y),y.y=p*(n*i.y-u*i.x),y},a.prototype.getInverse22=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,_=this.ey.y,p=n*_-l*u;p!==0&&(p=1/p),i.ex.x=p*_,i.ey.x=-p*l,i.ex.z=0,i.ex.y=-p*u,i.ey.y=p*n,i.ey.z=0,i.ez.x=0,i.ez.y=0,i.ez.z=0},a.prototype.getSymInverse33=function(i){var n=zt.dot(this.ex,zt.cross(this.ey,this.ez));n!==0&&(n=1/n);var l=this.ex.x,u=this.ey.x,_=this.ez.x,p=this.ey.y,y=this.ez.y,w=this.ez.z;i.ex.x=n*(p*w-y*y),i.ex.y=n*(_*y-u*w),i.ex.z=n*(u*y-_*p),i.ey.x=i.ex.y,i.ey.y=n*(l*w-_*_),i.ey.z=n*(_*u-l*y),i.ez.x=i.ex.z,i.ez.y=i.ey.z,i.ez.z=n*(l*p-u*u)},a.mul=function(i,n){if(n&&"z"in n&&"y"in n&&"x"in n){var l=i.ex.x*n.x+i.ey.x*n.y+i.ez.x*n.z,u=i.ex.y*n.x+i.ey.y*n.y+i.ez.y*n.z,_=i.ex.z*n.x+i.ey.z*n.y+i.ez.z*n.z;return new zt(l,u,_)}else if(n&&"y"in n&&"x"in n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)}},a.mulVec3=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y+i.ez.x*n.z,u=i.ex.y*n.x+i.ey.y*n.y+i.ez.y*n.z,_=i.ex.z*n.x+i.ey.z*n.y+i.ez.z*n.z;return new zt(l,u,_)},a.mulVec2=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)},a.add=function(i,n){return new a(zt.add(i.ex,n.ex),zt.add(i.ey,n.ey),zt.add(i.ez,n.ez))},a}(),F=0,Q=1,st=2,it=3,_t={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1},Wt=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(n=d(n,_t),p=a.call(this,n,l,u)||this,p.m_mass=new ui,p.m_limitState=F,l=p.m_bodyA,u=p.m_bodyB,p.m_type=i.TYPE,p.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),p.m_localAnchorB=s.clone(_?u.getLocalPoint(_):n.localAnchorB||s.zero()),p.m_referenceAngle=f.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),p.m_impulse=new zt,p.m_motorImpulse=0,p.m_lowerAngle=n.lowerAngle,p.m_upperAngle=n.upperAngle,p.m_maxMotorTorque=n.maxMotorTorque,p.m_motorSpeed=n.motorSpeed,p.m_enableLimit=n.enableLimit,p.m_enableMotor=n.enableMotor,p):new i(n,l,u,_)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerAngle:this.m_lowerAngle,upperAngle:this.m_upperAngle,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.getJointAngle=function(){var n=this.m_bodyA,l=this.m_bodyB;return l.m_sweep.a-n.m_sweep.a-this.m_referenceAngle},i.prototype.getJointSpeed=function(){var n=this.m_bodyA,l=this.m_bodyB;return l.m_angularVelocity-n.m_angularVelocity},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.getMotorTorque=function(n){return n*this.m_motorImpulse},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.setMaxMotorTorque=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=n},i.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},i.prototype.isLimitEnabled=function(){return this.m_enableLimit},i.prototype.enableLimit=function(n){n!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=n,this.m_impulse.z=0)},i.prototype.getLowerLimit=function(){return this.m_lowerAngle},i.prototype.getUpperLimit=function(){return this.m_upperAngle},i.prototype.setLimits=function(n,l){(n!=this.m_lowerAngle||l!=this.m_upperAngle)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=n,this.m_upperAngle=l)},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.neo(this.m_impulse.x,this.m_impulse.y).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.z},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,_=this.m_bodyA.c_velocity.w,p=this.m_bodyB.c_position.a,y=this.m_bodyB.c_velocity.v,w=this.m_bodyB.c_velocity.w,I=S.neo(l),B=S.neo(p);this.m_rA=S.mulVec2(I,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=S.mulVec2(B,s.sub(this.m_localAnchorB,this.m_localCenterB));var R=this.m_invMassA,E=this.m_invMassB,C=this.m_invIA,T=this.m_invIB,N=C+T===0;if(this.m_mass.ex.x=R+E+this.m_rA.y*this.m_rA.y*C+this.m_rB.y*this.m_rB.y*T,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*C-this.m_rB.y*this.m_rB.x*T,this.m_mass.ez.x=-this.m_rA.y*C-this.m_rB.y*T,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=R+E+this.m_rA.x*this.m_rA.x*C+this.m_rB.x*this.m_rB.x*T,this.m_mass.ez.y=this.m_rA.x*C+this.m_rB.x*T,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=C+T,this.m_motorMass=C+T,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(this.m_enableMotor==!1||N)&&(this.m_motorImpulse=0),this.m_enableLimit&&N==!1){var H=p-l-this.m_referenceAngle;f.abs(this.m_upperAngle-this.m_lowerAngle)<2*A.angularSlop?this.m_limitState=it:H<=this.m_lowerAngle?(this.m_limitState!=Q&&(this.m_impulse.z=0),this.m_limitState=Q):H>=this.m_upperAngle?(this.m_limitState!=st&&(this.m_impulse.z=0),this.m_limitState=st):(this.m_limitState=F,this.m_impulse.z=0)}else this.m_limitState=F;if(n.warmStarting){this.m_impulse.mul(n.dtRatio),this.m_motorImpulse*=n.dtRatio;var W=s.neo(this.m_impulse.x,this.m_impulse.y);u.subMul(R,W),_-=C*(s.crossVec2Vec2(this.m_rA,W)+this.m_motorImpulse+this.m_impulse.z),y.addMul(E,W),w+=T*(s.crossVec2Vec2(this.m_rB,W)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=_,this.m_bodyB.c_velocity.v=y,this.m_bodyB.c_velocity.w=w},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_invMassA,w=this.m_invMassB,I=this.m_invIA,B=this.m_invIB,R=I+B===0;if(this.m_enableMotor&&this.m_limitState!=it&&R==!1){var E=p-u-this.m_motorSpeed,C=-this.m_motorMass*E,T=this.m_motorImpulse,N=n.dt*this.m_maxMotorTorque;this.m_motorImpulse=f.clamp(this.m_motorImpulse+C,-N,N),C=this.m_motorImpulse-T,u-=I*C,p+=B*C}if(this.m_enableLimit&&this.m_limitState!=F&&R==!1){var H=s.zero();H.addCombine(1,_,1,s.crossNumVec2(p,this.m_rB)),H.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var W=p-u,E=new zt(H.x,H.y,W),C=zt.neg(this.m_mass.solve33(E));if(this.m_limitState==it)this.m_impulse.add(C);else if(this.m_limitState==Q){var Y=this.m_impulse.z+C.z;if(Y<0){var j=s.combine(-1,H,this.m_impulse.z,s.neo(this.m_mass.ez.x,this.m_mass.ez.y)),ht=this.m_mass.solve22(j);C.x=ht.x,C.y=ht.y,C.z=-this.m_impulse.z,this.m_impulse.x+=ht.x,this.m_impulse.y+=ht.y,this.m_impulse.z=0}else this.m_impulse.add(C)}else if(this.m_limitState==st){var Y=this.m_impulse.z+C.z;if(Y>0){var j=s.combine(-1,H,this.m_impulse.z,s.neo(this.m_mass.ez.x,this.m_mass.ez.y)),ht=this.m_mass.solve22(j);C.x=ht.x,C.y=ht.y,C.z=-this.m_impulse.z,this.m_impulse.x+=ht.x,this.m_impulse.y+=ht.y,this.m_impulse.z=0}else this.m_impulse.add(C)}var ut=s.neo(C.x,C.y);l.subMul(y,ut),u-=I*(s.crossVec2Vec2(this.m_rA,ut)+C.z),_.addMul(w,ut),p+=B*(s.crossVec2Vec2(this.m_rB,ut)+C.z)}else{var E=s.zero();E.addCombine(1,_,1,s.crossNumVec2(p,this.m_rB)),E.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var C=this.m_mass.solve22(s.neg(E));this.m_impulse.x+=C.x,this.m_impulse.y+=C.y,l.subMul(y,C),u-=I*s.crossVec2Vec2(this.m_rA,C),_.addMul(w,C),p+=B*s.crossVec2Vec2(this.m_rB,C)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=0,B=0,R=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=F&&R==!1){var E=p-u-this.m_referenceAngle,C=0;if(this.m_limitState==it){var T=f.clamp(E-this.m_lowerAngle,-A.maxAngularCorrection,A.maxAngularCorrection);C=-this.m_motorMass*T,I=f.abs(T)}else if(this.m_limitState==Q){var T=E-this.m_lowerAngle;I=-T,T=f.clamp(T+A.angularSlop,-A.maxAngularCorrection,0),C=-this.m_motorMass*T}else if(this.m_limitState==st){var T=E-this.m_upperAngle;I=T,T=f.clamp(T-A.angularSlop,0,A.maxAngularCorrection),C=-this.m_motorMass*T}u-=this.m_invIA*C,p+=this.m_invIB*C}{y.setAngle(u),w.setAngle(p);var N=S.mulVec2(y,s.sub(this.m_localAnchorA,this.m_localCenterA)),H=S.mulVec2(w,s.sub(this.m_localAnchorB,this.m_localCenterB)),T=s.zero();T.addCombine(1,_,1,H),T.subCombine(1,l,1,N),B=T.length();var W=this.m_invMassA,Y=this.m_invMassB,j=this.m_invIA,ht=this.m_invIB,ut=new mt;ut.ex.x=W+Y+j*N.y*N.y+ht*H.y*H.y,ut.ex.y=-j*N.x*N.y-ht*H.x*H.y,ut.ey.x=ut.ex.y,ut.ey.y=W+Y+j*N.x*N.x+ht*H.x*H.x;var ft=s.neg(ut.solve(T));l.subMul(W,ft),u-=j*s.crossVec2Vec2(N,ft),_.addMul(Y,ft),p+=ht*s.crossVec2Vec2(H,ft)}return this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(_),this.m_bodyB.c_position.a=p,B<=A.linearSlop&&I<=A.angularSlop},i.TYPE="revolute-joint",i}(gt),te=0,se=1,ne=2,_e=3,me={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0},he=function(a){o(i,a);function i(n,l,u,_,p){var y=this;return y instanceof i?(n=d(n,me),y=a.call(this,n,l,u)||this,l=y.m_bodyA,u=y.m_bodyB,y.m_type=i.TYPE,y.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),y.m_localAnchorB=s.clone(_?u.getLocalPoint(_):n.localAnchorB||s.zero()),y.m_localXAxisA=s.clone(p?l.getLocalVector(p):n.localAxisA||s.neo(1,0)),y.m_localXAxisA.normalize(),y.m_localYAxisA=s.crossNumVec2(1,y.m_localXAxisA),y.m_referenceAngle=f.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),y.m_impulse=new zt,y.m_motorMass=0,y.m_motorImpulse=0,y.m_lowerTranslation=n.lowerTranslation,y.m_upperTranslation=n.upperTranslation,y.m_maxMotorForce=n.maxMotorForce,y.m_motorSpeed=n.motorSpeed,y.m_enableLimit=n.enableLimit,y.m_enableMotor=n.enableMotor,y.m_limitState=te,y.m_axis=s.zero(),y.m_perp=s.zero(),y.m_K=new ui,y):new i(n,l,u,_,p)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerTranslation:this.m_lowerTranslation,upperTranslation:this.m_upperTranslation,maxMotorForce:this.m_maxMotorForce,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l),n.localAxisA=s.clone(n.localAxisA);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.localAxisA&&(this.m_localXAxisA.setVec2(n.localAxisA),this.m_localYAxisA.setVec2(s.crossNumVec2(1,n.localAxisA)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getLocalAxisA=function(){return this.m_localXAxisA},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.getJointTranslation=function(){var n=this.m_bodyA.getWorldPoint(this.m_localAnchorA),l=this.m_bodyB.getWorldPoint(this.m_localAnchorB),u=s.sub(l,n),_=this.m_bodyA.getWorldVector(this.m_localXAxisA),p=s.dot(u,_);return p},i.prototype.getJointSpeed=function(){var n=this.m_bodyA,l=this.m_bodyB,u=S.mulVec2(n.m_xf.q,s.sub(this.m_localAnchorA,n.m_sweep.localCenter)),_=S.mulVec2(l.m_xf.q,s.sub(this.m_localAnchorB,l.m_sweep.localCenter)),p=s.add(n.m_sweep.c,u),y=s.add(l.m_sweep.c,_),w=s.sub(y,p),I=S.mulVec2(n.m_xf.q,this.m_localXAxisA),B=n.m_linearVelocity,R=l.m_linearVelocity,E=n.m_angularVelocity,C=l.m_angularVelocity,T=s.dot(w,s.crossNumVec2(E,I))+s.dot(I,s.sub(s.addCrossNumVec2(R,C,_),s.addCrossNumVec2(B,E,u)));return T},i.prototype.isLimitEnabled=function(){return this.m_enableLimit},i.prototype.enableLimit=function(n){n!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=n,this.m_impulse.z=0)},i.prototype.getLowerLimit=function(){return this.m_lowerTranslation},i.prototype.getUpperLimit=function(){return this.m_upperTranslation},i.prototype.setLimits=function(n,l){(n!=this.m_lowerTranslation||l!=this.m_upperTranslation)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=n,this.m_upperTranslation=l,this.m_impulse.z=0)},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.setMaxMotorForce=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=n},i.prototype.getMaxMotorForce=function(){return this.m_maxMotorForce},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.getMotorForce=function(n){return n*this.m_motorImpulse},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.y},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyA.c_velocity.v,p=this.m_bodyA.c_velocity.w,y=this.m_bodyB.c_position.c,w=this.m_bodyB.c_position.a,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w,R=S.neo(u),E=S.neo(w),C=S.mulVec2(R,s.sub(this.m_localAnchorA,this.m_localCenterA)),T=S.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB)),N=s.zero();N.addCombine(1,y,1,T),N.subCombine(1,l,1,C);var H=this.m_invMassA,W=this.m_invMassB,Y=this.m_invIA,j=this.m_invIB;this.m_axis=S.mulVec2(R,this.m_localXAxisA),this.m_a1=s.crossVec2Vec2(s.add(N,C),this.m_axis),this.m_a2=s.crossVec2Vec2(T,this.m_axis),this.m_motorMass=H+W+Y*this.m_a1*this.m_a1+j*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass);{this.m_perp=S.mulVec2(R,this.m_localYAxisA),this.m_s1=s.crossVec2Vec2(s.add(N,C),this.m_perp),this.m_s2=s.crossVec2Vec2(T,this.m_perp),s.crossVec2Vec2(C,this.m_perp);var ht=H+W+Y*this.m_s1*this.m_s1+j*this.m_s2*this.m_s2,ut=Y*this.m_s1+j*this.m_s2,ft=Y*this.m_s1*this.m_a1+j*this.m_s2*this.m_a2,yt=Y+j;yt==0&&(yt=1);var Ct=Y*this.m_a1+j*this.m_a2,Rt=H+W+Y*this.m_a1*this.m_a1+j*this.m_a2*this.m_a2;this.m_K.ex.set(ht,ut,ft),this.m_K.ey.set(ut,yt,Ct),this.m_K.ez.set(ft,Ct,Rt)}if(this.m_enableLimit){var Ut=s.dot(this.m_axis,N);f.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*A.linearSlop?this.m_limitState=_e:Ut<=this.m_lowerTranslation?this.m_limitState!=se&&(this.m_limitState=se,this.m_impulse.z=0):Ut>=this.m_upperTranslation?this.m_limitState!=ne&&(this.m_limitState=ne,this.m_impulse.z=0):(this.m_limitState=te,this.m_impulse.z=0)}else this.m_limitState=te,this.m_impulse.z=0;if(this.m_enableMotor==!1&&(this.m_motorImpulse=0),n.warmStarting){this.m_impulse.mul(n.dtRatio),this.m_motorImpulse*=n.dtRatio;var It=s.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),bt=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,$t=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;_.subMul(H,It),p-=Y*bt,I.addMul(W,It),B+=j*$t}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(_),this.m_bodyA.c_velocity.w=p,this.m_bodyB.c_velocity.v.setVec2(I),this.m_bodyB.c_velocity.w=B},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_invMassA,w=this.m_invMassB,I=this.m_invIA,B=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=_e){var R=s.dot(this.m_axis,s.sub(_,l))+this.m_a2*p-this.m_a1*u,E=this.m_motorMass*(this.m_motorSpeed-R),C=this.m_motorImpulse,T=n.dt*this.m_maxMotorForce;this.m_motorImpulse=f.clamp(this.m_motorImpulse+E,-T,T),E=this.m_motorImpulse-C;var N=s.mulNumVec2(E,this.m_axis),H=E*this.m_a1,W=E*this.m_a2;l.subMul(y,N),u-=I*H,_.addMul(w,N),p+=B*W}var Y=s.zero();if(Y.x+=s.dot(this.m_perp,_)+this.m_s2*p,Y.x-=s.dot(this.m_perp,l)+this.m_s1*u,Y.y=p-u,this.m_enableLimit&&this.m_limitState!=te){var j=0;j+=s.dot(this.m_axis,_)+this.m_a2*p,j-=s.dot(this.m_axis,l)+this.m_a1*u;var R=new zt(Y.x,Y.y,j),ht=zt.clone(this.m_impulse),ut=this.m_K.solve33(zt.neg(R));this.m_impulse.add(ut),this.m_limitState==se?this.m_impulse.z=f.max(this.m_impulse.z,0):this.m_limitState==ne&&(this.m_impulse.z=f.min(this.m_impulse.z,0));var ft=s.combine(-1,Y,-(this.m_impulse.z-ht.z),s.neo(this.m_K.ez.x,this.m_K.ez.y)),yt=s.add(this.m_K.solve22(ft),s.neo(ht.x,ht.y));this.m_impulse.x=yt.x,this.m_impulse.y=yt.y,ut=zt.sub(this.m_impulse,ht);var N=s.combine(ut.x,this.m_perp,ut.z,this.m_axis),H=ut.x*this.m_s1+ut.y+ut.z*this.m_a1,W=ut.x*this.m_s2+ut.y+ut.z*this.m_a2;l.subMul(y,N),u-=I*H,_.addMul(w,N),p+=B*W}else{var ut=this.m_K.solve22(s.neg(Y));this.m_impulse.x+=ut.x,this.m_impulse.y+=ut.y;var N=s.mulNumVec2(ut.x,this.m_perp),H=ut.x*this.m_s1+ut.y,W=ut.x*this.m_s2+ut.y;l.subMul(y,N),u-=I*H,_.addMul(w,N),p+=B*W}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=this.m_invMassA,B=this.m_invMassB,R=this.m_invIA,E=this.m_invIB,C=S.mulVec2(y,s.sub(this.m_localAnchorA,this.m_localCenterA)),T=S.mulVec2(w,s.sub(this.m_localAnchorB,this.m_localCenterB)),N=s.sub(s.add(_,T),s.add(l,C)),H=S.mulVec2(y,this.m_localXAxisA),W=s.crossVec2Vec2(s.add(N,C),H),Y=s.crossVec2Vec2(T,H),j=S.mulVec2(y,this.m_localYAxisA),ht=s.crossVec2Vec2(s.add(N,C),j),ut=s.crossVec2Vec2(T,j),ft=new zt,yt=s.zero();yt.x=s.dot(j,N),yt.y=p-u-this.m_referenceAngle;var Ct=f.abs(yt.x),Rt=f.abs(yt.y),Ut=A.linearSlop,It=A.maxLinearCorrection,bt=!1,$t=0;if(this.m_enableLimit){var jt=s.dot(H,N);f.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*Ut?($t=f.clamp(jt,-It,It),Ct=f.max(Ct,f.abs(jt)),bt=!0):jt<=this.m_lowerTranslation?($t=f.clamp(jt-this.m_lowerTranslation+Ut,-It,0),Ct=f.max(Ct,this.m_lowerTranslation-jt),bt=!0):jt>=this.m_upperTranslation&&($t=f.clamp(jt-this.m_upperTranslation-Ut,0,It),Ct=f.max(Ct,jt-this.m_upperTranslation),bt=!0)}if(bt){var ie=I+B+R*ht*ht+E*ut*ut,ge=R*ht+E*ut,be=R*ht*W+E*ut*Y,ve=R+E;ve==0&&(ve=1);var qt=R*W+E*Y,Jt=I+B+R*W*W+E*Y*Y,ee=new ui;ee.ex.set(ie,ge,be),ee.ey.set(ge,ve,qt),ee.ez.set(be,qt,Jt);var Ht=new zt;Ht.x=yt.x,Ht.y=yt.y,Ht.z=$t,ft=ee.solve33(zt.neg(Ht))}else{var ie=I+B+R*ht*ht+E*ut*ut,ge=R*ht+E*ut,ve=R+E;ve==0&&(ve=1);var ee=new mt;ee.ex.setNum(ie,ge),ee.ey.setNum(ge,ve);var Le=ee.solve(s.neg(yt));ft.x=Le.x,ft.y=Le.y,ft.z=0}var Qe=s.combine(ft.x,j,ft.z,H),di=ft.x*ht+ft.y+ft.z*W,Ne=ft.x*ut+ft.y+ft.z*Y;return l.subMul(I,Qe),u-=R*di,_.addMul(B,Qe),p+=E*Ne,this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=_,this.m_bodyB.c_position.a=p,Ct<=A.linearSlop&&Rt<=A.angularSlop},i.TYPE="prismatic-joint",i}(gt),we={ratio:1},mi=function(a){o(i,a);function i(n,l,u,_,p,y){var w=this;if(!(w instanceof i))return new i(n,l,u,_,p,y);n=d(n,we),w=a.call(this,n,l,u)||this,l=w.m_bodyA,u=w.m_bodyB,w.m_type=i.TYPE,w.m_joint1=_||n.joint1,w.m_joint2=p||n.joint2,w.m_ratio=f.isFinite(y)?y:n.ratio,w.m_type1=w.m_joint1.getType(),w.m_type2=w.m_joint2.getType();var I,B;w.m_bodyC=w.m_joint1.getBodyA(),w.m_bodyA=w.m_joint1.getBodyB();var R=w.m_bodyA.m_xf,E=w.m_bodyA.m_sweep.a,C=w.m_bodyC.m_xf,T=w.m_bodyC.m_sweep.a;if(w.m_type1===Wt.TYPE){var N=w.m_joint1;w.m_localAnchorC=N.m_localAnchorA,w.m_localAnchorA=N.m_localAnchorB,w.m_referenceAngleA=N.m_referenceAngle,w.m_localAxisC=s.zero(),I=E-T-w.m_referenceAngleA}else{var H=w.m_joint1;w.m_localAnchorC=H.m_localAnchorA,w.m_localAnchorA=H.m_localAnchorB,w.m_referenceAngleA=H.m_referenceAngle,w.m_localAxisC=H.m_localXAxisA;var W=w.m_localAnchorC,Y=S.mulTVec2(C.q,s.add(S.mulVec2(R.q,w.m_localAnchorA),s.sub(R.p,C.p)));I=s.dot(Y,w.m_localAxisC)-s.dot(W,w.m_localAxisC)}w.m_bodyD=w.m_joint2.getBodyA(),w.m_bodyB=w.m_joint2.getBodyB();var j=w.m_bodyB.m_xf,ht=w.m_bodyB.m_sweep.a,ut=w.m_bodyD.m_xf,ft=w.m_bodyD.m_sweep.a;if(w.m_type2===Wt.TYPE){var N=w.m_joint2;w.m_localAnchorD=N.m_localAnchorA,w.m_localAnchorB=N.m_localAnchorB,w.m_referenceAngleB=N.m_referenceAngle,w.m_localAxisD=s.zero(),B=ht-ft-w.m_referenceAngleB}else{var H=w.m_joint2;w.m_localAnchorD=H.m_localAnchorA,w.m_localAnchorB=H.m_localAnchorB,w.m_referenceAngleB=H.m_referenceAngle,w.m_localAxisD=H.m_localXAxisA;var yt=w.m_localAnchorD,Ct=S.mulTVec2(ut.q,s.add(S.mulVec2(j.q,w.m_localAnchorB),s.sub(j.p,ut.p)));B=s.dot(Ct,w.m_localAxisD)-s.dot(yt,w.m_localAxisD)}return w.m_constant=I+w.m_ratio*B,w.m_impulse=0,w}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,joint1:this.m_joint1,joint2:this.m_joint2,ratio:this.m_ratio}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l),n.joint1=u(gt,n.joint1,l),n.joint2=u(gt,n.joint2,l);var _=new i(n);return _},i.prototype.getJoint1=function(){return this.m_joint1},i.prototype.getJoint2=function(){return this.m_joint2},i.prototype.setRatio=function(n){this.m_ratio=n},i.prototype.getRatio=function(){return this.m_ratio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_JvAC).mul(n)},i.prototype.getReactionTorque=function(n){var l=this.m_impulse*this.m_JwA;return n*l},i.prototype.initVelocityConstraints=function(n){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,_=this.m_bodyA.c_velocity.w,p=this.m_bodyB.c_position.a,y=this.m_bodyB.c_velocity.v,w=this.m_bodyB.c_velocity.w,I=this.m_bodyC.c_position.a,B=this.m_bodyC.c_velocity.v,R=this.m_bodyC.c_velocity.w,E=this.m_bodyD.c_position.a,C=this.m_bodyD.c_velocity.v,T=this.m_bodyD.c_velocity.w,N=S.neo(l),H=S.neo(p),W=S.neo(I),Y=S.neo(E);if(this.m_mass=0,this.m_type1==Wt.TYPE)this.m_JvAC=s.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var j=S.mulVec2(W,this.m_localAxisC),ht=S.mulSub(W,this.m_localAnchorC,this.m_lcC),ut=S.mulSub(N,this.m_localAnchorA,this.m_lcA);this.m_JvAC=j,this.m_JwC=s.crossVec2Vec2(ht,j),this.m_JwA=s.crossVec2Vec2(ut,j),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==Wt.TYPE)this.m_JvBD=s.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var j=S.mulVec2(Y,this.m_localAxisD),ft=S.mulSub(Y,this.m_localAnchorD,this.m_lcD),yt=S.mulSub(H,this.m_localAnchorB,this.m_lcB);this.m_JvBD=s.mulNumVec2(this.m_ratio,j),this.m_JwD=this.m_ratio*s.crossVec2Vec2(ft,j),this.m_JwB=this.m_ratio*s.crossVec2Vec2(yt,j),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,n.warmStarting?(u.addMul(this.m_mA*this.m_impulse,this.m_JvAC),_+=this.m_iA*this.m_impulse*this.m_JwA,y.addMul(this.m_mB*this.m_impulse,this.m_JvBD),w+=this.m_iB*this.m_impulse*this.m_JwB,B.subMul(this.m_mC*this.m_impulse,this.m_JvAC),R-=this.m_iC*this.m_impulse*this.m_JwC,C.subMul(this.m_mD*this.m_impulse,this.m_JvBD),T-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.setVec2(u),this.m_bodyA.c_velocity.w=_,this.m_bodyB.c_velocity.v.setVec2(y),this.m_bodyB.c_velocity.w=w,this.m_bodyC.c_velocity.v.setVec2(B),this.m_bodyC.c_velocity.w=R,this.m_bodyD.c_velocity.v.setVec2(C),this.m_bodyD.c_velocity.w=T},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_bodyC.c_velocity.v,w=this.m_bodyC.c_velocity.w,I=this.m_bodyD.c_velocity.v,B=this.m_bodyD.c_velocity.w,R=s.dot(this.m_JvAC,l)-s.dot(this.m_JvAC,y)+s.dot(this.m_JvBD,_)-s.dot(this.m_JvBD,I);R+=this.m_JwA*u-this.m_JwC*w+(this.m_JwB*p-this.m_JwD*B);var E=-this.m_mass*R;this.m_impulse+=E,l.addMul(this.m_mA*E,this.m_JvAC),u+=this.m_iA*E*this.m_JwA,_.addMul(this.m_mB*E,this.m_JvBD),p+=this.m_iB*E*this.m_JwB,y.subMul(this.m_mC*E,this.m_JvAC),w-=this.m_iC*E*this.m_JwC,I.subMul(this.m_mD*E,this.m_JvBD),B-=this.m_iD*E*this.m_JwD,this.m_bodyA.c_velocity.v.setVec2(l),this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v.setVec2(_),this.m_bodyB.c_velocity.w=p,this.m_bodyC.c_velocity.v.setVec2(y),this.m_bodyC.c_velocity.w=w,this.m_bodyD.c_velocity.v.setVec2(I),this.m_bodyD.c_velocity.w=B},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=this.m_bodyC.c_position.c,w=this.m_bodyC.c_position.a,I=this.m_bodyD.c_position.c,B=this.m_bodyD.c_position.a,R=S.neo(u),E=S.neo(p),C=S.neo(w),T=S.neo(B),N=0,H,W,Y,j,ht,ut,ft,yt,Ct=0;if(this.m_type1==Wt.TYPE)Y=s.zero(),ht=1,ft=1,Ct+=this.m_iA+this.m_iC,H=u-w-this.m_referenceAngleA;else{var Rt=S.mulVec2(C,this.m_localAxisC),Ut=S.mulSub(C,this.m_localAnchorC,this.m_lcC),It=S.mulSub(R,this.m_localAnchorA,this.m_lcA);Y=Rt,ft=s.crossVec2Vec2(Ut,Rt),ht=s.crossVec2Vec2(It,Rt),Ct+=this.m_mC+this.m_mA+this.m_iC*ft*ft+this.m_iA*ht*ht;var bt=s.sub(this.m_localAnchorC,this.m_lcC),$t=S.mulTVec2(C,s.add(It,s.sub(l,y)));H=s.dot(s.sub($t,bt),this.m_localAxisC)}if(this.m_type2==Wt.TYPE)j=s.zero(),ut=this.m_ratio,yt=this.m_ratio,Ct+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),W=p-B-this.m_referenceAngleB;else{var Rt=S.mulVec2(T,this.m_localAxisD),jt=S.mulSub(T,this.m_localAnchorD,this.m_lcD),ie=S.mulSub(E,this.m_localAnchorB,this.m_lcB);j=s.mulNumVec2(this.m_ratio,Rt),yt=this.m_ratio*s.crossVec2Vec2(jt,Rt),ut=this.m_ratio*s.crossVec2Vec2(ie,Rt),Ct+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*yt*yt+this.m_iB*ut*ut;var ge=s.sub(this.m_localAnchorD,this.m_lcD),be=S.mulTVec2(T,s.add(ie,s.sub(_,I)));W=s.dot(be,this.m_localAxisD)-s.dot(ge,this.m_localAxisD)}var ve=H+this.m_ratio*W-this.m_constant,qt=0;return Ct>0&&(qt=-ve/Ct),l.addMul(this.m_mA*qt,Y),u+=this.m_iA*qt*ht,_.addMul(this.m_mB*qt,j),p+=this.m_iB*qt*ut,y.subMul(this.m_mC*qt,Y),w-=this.m_iC*qt*ft,I.subMul(this.m_mD*qt,j),B-=this.m_iD*qt*yt,this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(_),this.m_bodyB.c_position.a=p,this.m_bodyC.c_position.c.setVec2(y),this.m_bodyC.c_position.a=w,this.m_bodyD.c_position.c.setVec2(I),this.m_bodyD.c_position.a=B,N<A.linearSlop},i.TYPE="gear-joint",i}(gt),Wi={maxForce:1,maxTorque:1,correctionFactor:.3},Mi=function(a){o(i,a);function i(n,l,u){var _=this;return _ instanceof i?(n=d(n,Wi),_=a.call(this,n,l,u)||this,l=_.m_bodyA,u=_.m_bodyB,_.m_type=i.TYPE,_.m_linearOffset=f.isFinite(n.linearOffset)?n.linearOffset:l.getLocalPoint(u.getPosition()),_.m_angularOffset=f.isFinite(n.angularOffset)?n.angularOffset:u.getAngle()-l.getAngle(),_.m_linearImpulse=s.zero(),_.m_angularImpulse=0,_.m_maxForce=n.maxForce,_.m_maxTorque=n.maxTorque,_.m_correctionFactor=n.correctionFactor,_):new i(n,l,u)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,correctionFactor:this.m_correctionFactor,linearOffset:this.m_linearOffset,angularOffset:this.m_angularOffset}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setMaxTorque=function(n){this.m_maxTorque=n},i.prototype.getMaxTorque=function(){return this.m_maxTorque},i.prototype.setCorrectionFactor=function(n){this.m_correctionFactor=n},i.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},i.prototype.setLinearOffset=function(n){(n.x!=this.m_linearOffset.x||n.y!=this.m_linearOffset.y)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset=n)},i.prototype.getLinearOffset=function(){return this.m_linearOffset},i.prototype.setAngularOffset=function(n){n!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=n)},i.prototype.getAngularOffset=function(){return this.m_angularOffset},i.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},i.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_linearImpulse)},i.prototype.getReactionTorque=function(n){return n*this.m_angularImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyA.c_velocity.v,p=this.m_bodyA.c_velocity.w,y=this.m_bodyB.c_position.c,w=this.m_bodyB.c_position.a,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w,R=S.neo(u),E=S.neo(w);this.m_rA=S.mulVec2(R,s.neg(this.m_localCenterA)),this.m_rB=S.mulVec2(E,s.neg(this.m_localCenterB));var C=this.m_invMassA,T=this.m_invMassB,N=this.m_invIA,H=this.m_invIB,W=new mt;if(W.ex.x=C+T+N*this.m_rA.y*this.m_rA.y+H*this.m_rB.y*this.m_rB.y,W.ex.y=-N*this.m_rA.x*this.m_rA.y-H*this.m_rB.x*this.m_rB.y,W.ey.x=W.ex.y,W.ey.y=C+T+N*this.m_rA.x*this.m_rA.x+H*this.m_rB.x*this.m_rB.x,this.m_linearMass=W.getInverse(),this.m_angularMass=N+H,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=s.zero(),this.m_linearError.addCombine(1,y,1,this.m_rB),this.m_linearError.subCombine(1,l,1,this.m_rA),this.m_linearError.sub(S.mulVec2(R,this.m_linearOffset)),this.m_angularError=w-u-this.m_angularOffset,n.warmStarting){this.m_linearImpulse.mul(n.dtRatio),this.m_angularImpulse*=n.dtRatio;var Y=s.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);_.subMul(C,Y),p-=N*(s.crossVec2Vec2(this.m_rA,Y)+this.m_angularImpulse),I.addMul(T,Y),B+=H*(s.crossVec2Vec2(this.m_rB,Y)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=_,this.m_bodyA.c_velocity.w=p,this.m_bodyB.c_velocity.v=I,this.m_bodyB.c_velocity.w=B},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_invMassA,w=this.m_invMassB,I=this.m_invIA,B=this.m_invIB,R=n.dt,E=n.inv_dt;{var C=p-u+E*this.m_correctionFactor*this.m_angularError,T=-this.m_angularMass*C,N=this.m_angularImpulse,H=R*this.m_maxTorque;this.m_angularImpulse=f.clamp(this.m_angularImpulse+T,-H,H),T=this.m_angularImpulse-N,u-=I*T,p+=B*T}{var C=s.zero();C.addCombine(1,_,1,s.crossNumVec2(p,this.m_rB)),C.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA)),C.addMul(E*this.m_correctionFactor,this.m_linearError);var T=s.neg(mt.mulVec2(this.m_linearMass,C)),N=s.clone(this.m_linearImpulse);this.m_linearImpulse.add(T);var H=R*this.m_maxForce;this.m_linearImpulse.clamp(H),T=s.sub(this.m_linearImpulse,N),l.subMul(y,T),u-=I*s.crossVec2Vec2(this.m_rA,T),_.addMul(w,T),p+=B*s.crossVec2Vec2(this.m_rB,T)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="motor-joint",i}(gt),ri={maxForce:0,frequencyHz:5,dampingRatio:.7},de=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(n=d(n,ri),p=a.call(this,n,l,u)||this,l=p.m_bodyA,u=p.m_bodyB,p.m_type=i.TYPE,p.m_targetA=_?s.clone(_):n.target||s.zero(),p.m_localAnchorB=P.mulTVec2(u.getTransform(),p.m_targetA),p.m_maxForce=n.maxForce,p.m_impulse=s.zero(),p.m_frequencyHz=n.frequencyHz,p.m_dampingRatio=n.dampingRatio,p.m_beta=0,p.m_gamma=0,p.m_rB=s.zero(),p.m_localCenterB=s.zero(),p.m_invMassB=0,p.m_invIB=0,p.m_mass=new mt,p.m_C=s.zero(),p):new i(n,l,u,_)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,target:this.m_targetA,maxForce:this.m_maxForce,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,_localAnchorB:this.m_localAnchorB}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l),n.target=s.clone(n.target);var _=new i(n);return n._localAnchorB&&(_.m_localAnchorB=n._localAnchorB),_},i.prototype.setTarget=function(n){this.m_bodyB.isAwake()==!1&&this.m_bodyB.setAwake(!0),this.m_targetA=s.clone(n)},i.prototype.getTarget=function(){return this.m_targetA},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return s.clone(this.m_targetA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_impulse)},i.prototype.getReactionTorque=function(n){return n*0},i.prototype.shiftOrigin=function(n){this.m_targetA.sub(n)},i.prototype.initVelocityConstraints=function(n){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyB.c_position,u=this.m_bodyB.c_velocity,_=l.c,p=l.a,y=u.v,w=u.w,I=S.neo(p),B=this.m_bodyB.getMass(),R=2*f.PI*this.m_frequencyHz,E=2*B*this.m_dampingRatio*R,C=B*(R*R),T=n.dt;this.m_gamma=T*(E+T*C),this.m_gamma!=0&&(this.m_gamma=1/this.m_gamma),this.m_beta=T*C*this.m_gamma,this.m_rB=S.mulVec2(I,s.sub(this.m_localAnchorB,this.m_localCenterB));var N=new mt;N.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,N.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,N.ey.x=N.ex.y,N.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=N.getInverse(),this.m_C.setVec2(_),this.m_C.addCombine(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),w*=.98,n.warmStarting?(this.m_impulse.mul(n.dtRatio),y.addMul(this.m_invMassB,this.m_impulse),w+=this.m_invIB*s.crossVec2Vec2(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),u.v.setVec2(y),u.w=w},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyB.c_velocity,u=s.clone(l.v),_=l.w,p=s.crossNumVec2(_,this.m_rB);p.add(u),p.addCombine(1,this.m_C,this.m_gamma,this.m_impulse),p.neg();var y=mt.mulVec2(this.m_mass,p),w=s.clone(this.m_impulse);this.m_impulse.add(y);var I=n.dt*this.m_maxForce;this.m_impulse.clamp(I),y=s.sub(this.m_impulse,w),u.addMul(this.m_invMassB,y),_+=this.m_invIB*s.crossVec2Vec2(this.m_rB,y),l.v.setVec2(u),l.w=_},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="mouse-joint",i}(gt),qi={collideConnected:!0},Se=function(a){o(i,a);function i(n,l,u,_,p,y,w,I){var B=this;return B instanceof i?(n=d(n,qi),B=a.call(this,n,l,u)||this,l=B.m_bodyA,u=B.m_bodyB,B.m_type=i.TYPE,B.m_groundAnchorA=_||n.groundAnchorA||s.neo(-1,1),B.m_groundAnchorB=p||n.groundAnchorB||s.neo(1,1),B.m_localAnchorA=y?l.getLocalPoint(y):n.localAnchorA||s.neo(-1,0),B.m_localAnchorB=w?u.getLocalPoint(w):n.localAnchorB||s.neo(1,0),B.m_lengthA=f.isFinite(n.lengthA)?n.lengthA:s.distance(y,_),B.m_lengthB=f.isFinite(n.lengthB)?n.lengthB:s.distance(w,p),B.m_ratio=f.isFinite(I)?I:n.ratio,B.m_constant=B.m_lengthA+B.m_ratio*B.m_lengthB,B.m_impulse=0,B):new i(n,l,u,_,p,y,w,I)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,groundAnchorA:this.m_groundAnchorA,groundAnchorB:this.m_groundAnchorB,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,lengthA:this.m_lengthA,lengthB:this.m_lengthB,ratio:this.m_ratio}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},i.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},i.prototype.getLengthA=function(){return this.m_lengthA},i.prototype.getLengthB=function(){return this.m_lengthB},i.prototype.getRatio=function(){return this.m_ratio},i.prototype.getCurrentLengthA=function(){var n=this.m_bodyA.getWorldPoint(this.m_localAnchorA),l=this.m_groundAnchorA;return s.distance(n,l)},i.prototype.getCurrentLengthB=function(){var n=this.m_bodyB.getWorldPoint(this.m_localAnchorB),l=this.m_groundAnchorB;return s.distance(n,l)},i.prototype.shiftOrigin=function(n){this.m_groundAnchorA.sub(n),this.m_groundAnchorB.sub(n)},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_uB).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyA.c_velocity.v,p=this.m_bodyA.c_velocity.w,y=this.m_bodyB.c_position.c,w=this.m_bodyB.c_position.a,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w,R=S.neo(u),E=S.neo(w);this.m_rA=S.mulVec2(R,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=S.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=s.sub(s.add(l,this.m_rA),this.m_groundAnchorA),this.m_uB=s.sub(s.add(y,this.m_rB),this.m_groundAnchorB);var C=this.m_uA.length(),T=this.m_uB.length();C>10*A.linearSlop?this.m_uA.mul(1/C):this.m_uA.setZero(),T>10*A.linearSlop?this.m_uB.mul(1/T):this.m_uB.setZero();var N=s.crossVec2Vec2(this.m_rA,this.m_uA),H=s.crossVec2Vec2(this.m_rB,this.m_uB),W=this.m_invMassA+this.m_invIA*N*N,Y=this.m_invMassB+this.m_invIB*H*H;if(this.m_mass=W+this.m_ratio*this.m_ratio*Y,this.m_mass>0&&(this.m_mass=1/this.m_mass),n.warmStarting){this.m_impulse*=n.dtRatio;var j=s.mulNumVec2(-this.m_impulse,this.m_uA),ht=s.mulNumVec2(-this.m_ratio*this.m_impulse,this.m_uB);_.addMul(this.m_invMassA,j),p+=this.m_invIA*s.crossVec2Vec2(this.m_rA,j),I.addMul(this.m_invMassB,ht),B+=this.m_invIB*s.crossVec2Vec2(this.m_rB,ht)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=_,this.m_bodyA.c_velocity.w=p,this.m_bodyB.c_velocity.v=I,this.m_bodyB.c_velocity.w=B},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=s.add(l,s.crossNumVec2(u,this.m_rA)),w=s.add(_,s.crossNumVec2(p,this.m_rB)),I=-s.dot(this.m_uA,y)-this.m_ratio*s.dot(this.m_uB,w),B=-this.m_mass*I;this.m_impulse+=B;var R=s.mulNumVec2(-B,this.m_uA),E=s.mulNumVec2(-this.m_ratio*B,this.m_uB);l.addMul(this.m_invMassA,R),u+=this.m_invIA*s.crossVec2Vec2(this.m_rA,R),_.addMul(this.m_invMassB,E),p+=this.m_invIB*s.crossVec2Vec2(this.m_rB,E),this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=S.mulVec2(y,s.sub(this.m_localAnchorA,this.m_localCenterA)),B=S.mulVec2(w,s.sub(this.m_localAnchorB,this.m_localCenterB)),R=s.sub(s.add(l,this.m_rA),this.m_groundAnchorA),E=s.sub(s.add(_,this.m_rB),this.m_groundAnchorB),C=R.length(),T=E.length();C>10*A.linearSlop?R.mul(1/C):R.setZero(),T>10*A.linearSlop?E.mul(1/T):E.setZero();var N=s.crossVec2Vec2(I,R),H=s.crossVec2Vec2(B,E),W=this.m_invMassA+this.m_invIA*N*N,Y=this.m_invMassB+this.m_invIB*H*H,j=W+this.m_ratio*this.m_ratio*Y;j>0&&(j=1/j);var ht=this.m_constant-C-this.m_ratio*T,ut=f.abs(ht),ft=-j*ht,yt=s.mulNumVec2(-ft,R),Ct=s.mulNumVec2(-this.m_ratio*ft,E);return l.addMul(this.m_invMassA,yt),u+=this.m_invIA*s.crossVec2Vec2(I,yt),_.addMul(this.m_invMassB,Ct),p+=this.m_invIB*s.crossVec2Vec2(B,Ct),this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=_,this.m_bodyB.c_position.a=p,ut<A.linearSlop},i.TYPE="pulley-joint",i}(gt),$e=0,wi=2,rn={maxLength:0},sn=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(n=d(n,rn),p=a.call(this,n,l,u)||this,l=p.m_bodyA,u=p.m_bodyB,p.m_type=i.TYPE,p.m_localAnchorA=_?l.getLocalPoint(_):n.localAnchorA||s.neo(-1,0),p.m_localAnchorB=_?u.getLocalPoint(_):n.localAnchorB||s.neo(1,0),p.m_maxLength=n.maxLength,p.m_mass=0,p.m_impulse=0,p.m_length=0,p.m_state=$e,p):new i(n,l,u,_)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,maxLength:this.m_maxLength}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setMaxLength=function(n){this.m_maxLength=n},i.prototype.getMaxLength=function(){return this.m_maxLength},i.prototype.getLimitState=function(){return this.m_state},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_u).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyA.c_velocity.v,p=this.m_bodyA.c_velocity.w,y=this.m_bodyB.c_position.c,w=this.m_bodyB.c_position.a,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w,R=S.neo(u),E=S.neo(w);this.m_rA=S.mulSub(R,this.m_localAnchorA,this.m_localCenterA),this.m_rB=S.mulSub(E,this.m_localAnchorB,this.m_localCenterB),this.m_u=s.zero(),this.m_u.addCombine(1,y,1,this.m_rB),this.m_u.subCombine(1,l,1,this.m_rA),this.m_length=this.m_u.length();var C=this.m_length-this.m_maxLength;if(C>0?this.m_state=wi:this.m_state=$e,this.m_length>A.linearSlop)this.m_u.mul(1/this.m_length);else{this.m_u.setZero(),this.m_mass=0,this.m_impulse=0;return}var T=s.crossVec2Vec2(this.m_rA,this.m_u),N=s.crossVec2Vec2(this.m_rB,this.m_u),H=this.m_invMassA+this.m_invIA*T*T+this.m_invMassB+this.m_invIB*N*N;if(this.m_mass=H!=0?1/H:0,n.warmStarting){this.m_impulse*=n.dtRatio;var W=s.mulNumVec2(this.m_impulse,this.m_u);_.subMul(this.m_invMassA,W),p-=this.m_invIA*s.crossVec2Vec2(this.m_rA,W),I.addMul(this.m_invMassB,W),B+=this.m_invIB*s.crossVec2Vec2(this.m_rB,W)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(_),this.m_bodyA.c_velocity.w=p,this.m_bodyB.c_velocity.v.setVec2(I),this.m_bodyB.c_velocity.w=B},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=s.addCrossNumVec2(l,u,this.m_rA),w=s.addCrossNumVec2(_,p,this.m_rB),I=this.m_length-this.m_maxLength,B=s.dot(this.m_u,s.sub(w,y));I<0&&(B+=n.inv_dt*I);var R=-this.m_mass*B,E=this.m_impulse;this.m_impulse=f.min(0,this.m_impulse+R),R=this.m_impulse-E;var C=s.mulNumVec2(R,this.m_u);l.subMul(this.m_invMassA,C),u-=this.m_invIA*s.crossVec2Vec2(this.m_rA,C),_.addMul(this.m_invMassB,C),p+=this.m_invIB*s.crossVec2Vec2(this.m_rB,C),this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=S.mulSub(y,this.m_localAnchorA,this.m_localCenterA),B=S.mulSub(w,this.m_localAnchorB,this.m_localCenterB),R=s.zero();R.addCombine(1,_,1,B),R.subCombine(1,l,1,I);var E=R.normalize(),C=E-this.m_maxLength;C=f.clamp(C,0,A.maxLinearCorrection);var T=-this.m_mass*C,N=s.mulNumVec2(T,R);return l.subMul(this.m_invMassA,N),u-=this.m_invIA*s.crossVec2Vec2(I,N),_.addMul(this.m_invMassB,N),p+=this.m_invIB*s.crossVec2Vec2(B,N),this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(_),this.m_bodyB.c_position.a=p,E-this.m_maxLength<A.linearSlop},i.TYPE="rope-joint",i}(gt),ze={frequencyHz:0,dampingRatio:0},Li=function(a){o(i,a);function i(n,l,u,_){var p=this;return p instanceof i?(n=d(n,ze),p=a.call(this,n,l,u)||this,l=p.m_bodyA,u=p.m_bodyB,p.m_type=i.TYPE,p.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),p.m_localAnchorB=s.clone(_?u.getLocalPoint(_):n.localAnchorB||s.zero()),p.m_referenceAngle=f.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),p.m_frequencyHz=n.frequencyHz,p.m_dampingRatio=n.dampingRatio,p.m_impulse=new zt,p.m_bias=0,p.m_gamma=0,p.m_rA,p.m_rB,p.m_localCenterA,p.m_localCenterB,p.m_invMassA,p.m_invMassB,p.m_invIA,p.m_invIB,p.m_mass=new ui,p):new i(n,l,u,_)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.neo(this.m_impulse.x,this.m_impulse.y).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.z},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,_=this.m_bodyA.c_velocity.w,p=this.m_bodyB.c_position.a,y=this.m_bodyB.c_velocity.v,w=this.m_bodyB.c_velocity.w,I=S.neo(l),B=S.neo(p);this.m_rA=S.mulVec2(I,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=S.mulVec2(B,s.sub(this.m_localAnchorB,this.m_localCenterB));var R=this.m_invMassA,E=this.m_invMassB,C=this.m_invIA,T=this.m_invIB,N=new ui;if(N.ex.x=R+E+this.m_rA.y*this.m_rA.y*C+this.m_rB.y*this.m_rB.y*T,N.ey.x=-this.m_rA.y*this.m_rA.x*C-this.m_rB.y*this.m_rB.x*T,N.ez.x=-this.m_rA.y*C-this.m_rB.y*T,N.ex.y=N.ey.x,N.ey.y=R+E+this.m_rA.x*this.m_rA.x*C+this.m_rB.x*this.m_rB.x*T,N.ez.y=this.m_rA.x*C+this.m_rB.x*T,N.ex.z=N.ez.x,N.ey.z=N.ez.y,N.ez.z=C+T,this.m_frequencyHz>0){N.getInverse22(this.m_mass);var H=C+T,W=H>0?1/H:0,Y=p-l-this.m_referenceAngle,j=2*f.PI*this.m_frequencyHz,ht=2*W*this.m_dampingRatio*j,ut=W*j*j,ft=n.dt;this.m_gamma=ft*(ht+ft*ut),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=Y*ft*ut*this.m_gamma,H+=this.m_gamma,this.m_mass.ez.z=H!=0?1/H:0}else N.ez.z==0?(N.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(N.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(n.warmStarting){this.m_impulse.mul(n.dtRatio);var yt=s.neo(this.m_impulse.x,this.m_impulse.y);u.subMul(R,yt),_-=C*(s.crossVec2Vec2(this.m_rA,yt)+this.m_impulse.z),y.addMul(E,yt),w+=T*(s.crossVec2Vec2(this.m_rB,yt)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=_,this.m_bodyB.c_velocity.v=y,this.m_bodyB.c_velocity.w=w},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,_=this.m_bodyB.c_velocity.v,p=this.m_bodyB.c_velocity.w,y=this.m_invMassA,w=this.m_invMassB,I=this.m_invIA,B=this.m_invIB;if(this.m_frequencyHz>0){var R=p-u,E=-this.m_mass.ez.z*(R+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=E,u-=I*E,p+=B*E;var C=s.zero();C.addCombine(1,_,1,s.crossNumVec2(p,this.m_rB)),C.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var T=s.neg(ui.mulVec2(this.m_mass,C));this.m_impulse.x+=T.x,this.m_impulse.y+=T.y;var N=s.clone(T);l.subMul(y,N),u-=I*s.crossVec2Vec2(this.m_rA,N),_.addMul(w,N),p+=B*s.crossVec2Vec2(this.m_rB,N)}else{var C=s.zero();C.addCombine(1,_,1,s.crossNumVec2(p,this.m_rB)),C.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var R=p-u,H=new zt(C.x,C.y,R),W=zt.neg(ui.mulVec3(this.m_mass,H));this.m_impulse.add(W);var N=s.neo(W.x,W.y);l.subMul(y,N),u-=I*(s.crossVec2Vec2(this.m_rA,N)+W.z),_.addMul(w,N),p+=B*(s.crossVec2Vec2(this.m_rB,N)+W.z)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=_,this.m_bodyB.c_velocity.w=p},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=this.m_invMassA,B=this.m_invMassB,R=this.m_invIA,E=this.m_invIB,C=S.mulVec2(y,s.sub(this.m_localAnchorA,this.m_localCenterA)),T=S.mulVec2(w,s.sub(this.m_localAnchorB,this.m_localCenterB)),N,H,W=new ui;if(W.ex.x=I+B+C.y*C.y*R+T.y*T.y*E,W.ey.x=-C.y*C.x*R-T.y*T.x*E,W.ez.x=-C.y*R-T.y*E,W.ex.y=W.ey.x,W.ey.y=I+B+C.x*C.x*R+T.x*T.x*E,W.ez.y=C.x*R+T.x*E,W.ex.z=W.ez.x,W.ey.z=W.ez.y,W.ez.z=R+E,this.m_frequencyHz>0){var Y=s.zero();Y.addCombine(1,_,1,T),Y.subCombine(1,l,1,C),N=Y.length(),H=0;var j=s.neg(W.solve22(Y));l.subMul(I,j),u-=R*s.crossVec2Vec2(C,j),_.addMul(B,j),p+=E*s.crossVec2Vec2(T,j)}else{var Y=s.zero();Y.addCombine(1,_,1,T),Y.subCombine(1,l,1,C);var ht=p-u-this.m_referenceAngle;N=Y.length(),H=f.abs(ht);var ut=new zt(Y.x,Y.y,ht),ft=new zt;if(W.ez.z>0)ft=zt.neg(W.solve33(ut));else{var yt=s.neg(W.solve22(Y));ft.set(yt.x,yt.y,0)}var j=s.neo(ft.x,ft.y);l.subMul(I,j),u-=R*(s.crossVec2Vec2(C,j)+ft.z),_.addMul(B,j),p+=E*(s.crossVec2Vec2(T,j)+ft.z)}return this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=_,this.m_bodyB.c_position.a=p,N<=A.linearSlop&&H<=A.angularSlop},i.TYPE="weld-joint",i}(gt),or={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7},Ze=function(a){o(i,a);function i(n,l,u,_,p){var y=this;return y instanceof i?(n=d(n,or),y=a.call(this,n,l,u)||this,y.m_ax=s.zero(),y.m_ay=s.zero(),l=y.m_bodyA,u=y.m_bodyB,y.m_type=i.TYPE,y.m_localAnchorA=s.clone(_?l.getLocalPoint(_):n.localAnchorA||s.zero()),y.m_localAnchorB=s.clone(_?u.getLocalPoint(_):n.localAnchorB||s.zero()),y.m_localXAxisA=s.clone(p?l.getLocalVector(p):n.localAxisA||n.localAxis||s.neo(1,0)),y.m_localYAxisA=s.crossNumVec2(1,y.m_localXAxisA),y.m_mass=0,y.m_impulse=0,y.m_motorMass=0,y.m_motorImpulse=0,y.m_springMass=0,y.m_springImpulse=0,y.m_maxMotorTorque=n.maxMotorTorque,y.m_motorSpeed=n.motorSpeed,y.m_enableMotor=n.enableMotor,y.m_frequencyHz=n.frequencyHz,y.m_dampingRatio=n.dampingRatio,y.m_bias=0,y.m_gamma=0,y):new i(n,l,u,_,p)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,enableMotor:this.m_enableMotor,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(rt,n.bodyA,l),n.bodyB=u(rt,n.bodyB,l);var _=new i(n);return _},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.localAxisA&&(this.m_localXAxisA.setVec2(n.localAxisA),this.m_localYAxisA.setVec2(s.crossNumVec2(1,n.localAxisA)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getLocalAxisA=function(){return this.m_localXAxisA},i.prototype.getJointTranslation=function(){var n=this.m_bodyA,l=this.m_bodyB,u=n.getWorldPoint(this.m_localAnchorA),_=l.getWorldPoint(this.m_localAnchorB),p=s.sub(_,u),y=n.getWorldVector(this.m_localXAxisA),w=s.dot(p,y);return w},i.prototype.getJointSpeed=function(){var n=this.m_bodyA.m_angularVelocity,l=this.m_bodyB.m_angularVelocity;return l-n},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.setMaxMotorTorque=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=n},i.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},i.prototype.getMotorTorque=function(n){return n*this.m_motorImpulse},i.prototype.setSpringFrequencyHz=function(n){this.m_frequencyHz=n},i.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},i.prototype.setSpringDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_motorImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_invMassA,u=this.m_invMassB,_=this.m_invIA,p=this.m_invIB,y=this.m_bodyA.c_position.c,w=this.m_bodyA.c_position.a,I=this.m_bodyA.c_velocity.v,B=this.m_bodyA.c_velocity.w,R=this.m_bodyB.c_position.c,E=this.m_bodyB.c_position.a,C=this.m_bodyB.c_velocity.v,T=this.m_bodyB.c_velocity.w,N=S.neo(w),H=S.neo(E),W=S.mulVec2(N,s.sub(this.m_localAnchorA,this.m_localCenterA)),Y=S.mulVec2(H,s.sub(this.m_localAnchorB,this.m_localCenterB)),j=s.zero();if(j.addCombine(1,R,1,Y),j.subCombine(1,y,1,W),this.m_ay=S.mulVec2(N,this.m_localYAxisA),this.m_sAy=s.crossVec2Vec2(s.add(j,W),this.m_ay),this.m_sBy=s.crossVec2Vec2(Y,this.m_ay),this.m_mass=l+u+_*this.m_sAy*this.m_sAy+p*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=S.mulVec2(N,this.m_localXAxisA),this.m_sAx=s.crossVec2Vec2(s.add(j,W),this.m_ax),this.m_sBx=s.crossVec2Vec2(Y,this.m_ax);var ht=l+u+_*this.m_sAx*this.m_sAx+p*this.m_sBx*this.m_sBx;if(ht>0){this.m_springMass=1/ht;var ut=s.dot(j,this.m_ax),ft=2*f.PI*this.m_frequencyHz,yt=2*this.m_springMass*this.m_dampingRatio*ft,Ct=this.m_springMass*ft*ft,Rt=n.dt;this.m_gamma=Rt*(yt+Rt*Ct),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=ut*Rt*Ct*this.m_gamma,this.m_springMass=ht+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=_+p,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),n.warmStarting){this.m_impulse*=n.dtRatio,this.m_springImpulse*=n.dtRatio,this.m_motorImpulse*=n.dtRatio;var Ut=s.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),It=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,bt=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;I.subMul(this.m_invMassA,Ut),B-=this.m_invIA*It,C.addMul(this.m_invMassB,Ut),T+=this.m_invIB*bt}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(I),this.m_bodyA.c_velocity.w=B,this.m_bodyB.c_velocity.v.setVec2(C),this.m_bodyB.c_velocity.w=T},i.prototype.solveVelocityConstraints=function(n){var l=this.m_invMassA,u=this.m_invMassB,_=this.m_invIA,p=this.m_invIB,y=this.m_bodyA.c_velocity.v,w=this.m_bodyA.c_velocity.w,I=this.m_bodyB.c_velocity.v,B=this.m_bodyB.c_velocity.w;{var R=s.dot(this.m_ax,I)-s.dot(this.m_ax,y)+this.m_sBx*B-this.m_sAx*w,E=-this.m_springMass*(R+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=E;var C=s.mulNumVec2(E,this.m_ax),T=E*this.m_sAx,N=E*this.m_sBx;y.subMul(l,C),w-=_*T,I.addMul(u,C),B+=p*N}{var R=B-w-this.m_motorSpeed,E=-this.m_motorMass*R,H=this.m_motorImpulse,W=n.dt*this.m_maxMotorTorque;this.m_motorImpulse=f.clamp(this.m_motorImpulse+E,-W,W),E=this.m_motorImpulse-H,w-=_*E,B+=p*E}{var R=s.dot(this.m_ay,I)-s.dot(this.m_ay,y)+this.m_sBy*B-this.m_sAy*w,E=-this.m_mass*R;this.m_impulse+=E;var C=s.mulNumVec2(E,this.m_ay),T=E*this.m_sAy,N=E*this.m_sBy;y.subMul(l,C),w-=_*T,I.addMul(u,C),B+=p*N}this.m_bodyA.c_velocity.v.setVec2(y),this.m_bodyA.c_velocity.w=w,this.m_bodyB.c_velocity.v.setVec2(I),this.m_bodyB.c_velocity.w=B},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,_=this.m_bodyB.c_position.c,p=this.m_bodyB.c_position.a,y=S.neo(u),w=S.neo(p),I=S.mulVec2(y,s.sub(this.m_localAnchorA,this.m_localCenterA)),B=S.mulVec2(w,s.sub(this.m_localAnchorB,this.m_localCenterB)),R=s.zero();R.addCombine(1,_,1,B),R.subCombine(1,l,1,I);var E=S.mulVec2(y,this.m_localYAxisA),C=s.crossVec2Vec2(s.add(R,I),E),T=s.crossVec2Vec2(B,E),N=s.dot(R,E),H=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy,W;H!=0?W=-N/H:W=0;var Y=s.mulNumVec2(W,E),j=W*C,ht=W*T;return l.subMul(this.m_invMassA,Y),u-=this.m_invIA*j,_.addMul(this.m_invMassB,Y),p+=this.m_invIB*ht,this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(_),this.m_bodyB.c_position.a=p,f.abs(N)<=A.linearSlop},i.TYPE="wheel-joint",i}(gt),sl=0;function Mr(a){var i;a=a||{};var n=a.rootClass||fe,l=a.preSerialize||function(B){return B},u=a.postSerialize||function(B,R){return B},_=a.preDeserialize||function(B){return B},p=a.postDeserialize||function(B,R){return B},y={World:fe,Body:rt,Joint:gt,Fixture:nt,Shape:O},w=c({Vec2:s,Vec3:zt},y),I=(i={},i[rt.STATIC]=rt,i[rt.DYNAMIC]=rt,i[rt.KINEMATIC]=rt,i[Ue.TYPE]=Ue,i[Hi.TYPE]=Hi,i[Me.TYPE]=Me,i[ni.TYPE]=ni,i[Ai.TYPE]=Ai,i[Sn.TYPE]=Sn,i[sr.TYPE]=sr,i[mi.TYPE]=mi,i[Mi.TYPE]=Mi,i[de.TYPE]=de,i[he.TYPE]=he,i[Se.TYPE]=Se,i[Wt.TYPE]=Wt,i[sn.TYPE]=sn,i[Li.TYPE]=Li,i[Ze.TYPE]=Ze,i);this.toJson=function(B){var R=[],E=[B],C={};function T(j,ht){if(j.__sid=j.__sid||++sl,!C[j.__sid]){E.push(j);var ut=R.length+E.length,ft={refIndex:ut,refType:ht};C[j.__sid]=ft}return C[j.__sid]}function N(j){j=l(j);var ht=j._serialize();return ht=u(ht,j),ht}function H(j,ht){if(typeof j!="object"||j===null)return j;if(typeof j._serialize=="function"){if(j!==ht){for(var ut in y)if(j instanceof y[ut])return T(j,ut)}j=N(j)}if(Array.isArray(j)){for(var ft=[],yt=0;yt<j.length;yt++)ft[yt]=H(j[yt]);j=ft}else{var ft={};for(var yt in j)j.hasOwnProperty(yt)&&(ft[yt]=H(j[yt]));j=ft}return j}for(;E.length;){var W=E.shift(),Y=H(W,W);R.push(Y)}return R},this.fromJson=function(B){var R={};function E(H,W){return(!W||!W._deserialize)&&(W=I[H.type]),W&&W._deserialize}function C(H,W,Y){var j=E(W,H);if(!!j){W=_(W);var ht=j(W,Y,T);return ht=p(ht,W),ht}}function T(H,W,Y){if(!W.refIndex)return H&&H._deserialize&&C(H,W,Y);H=w[W.refType]||H;var j=W.refIndex;if(!R[j]){var ht=B[j],ut=C(H,ht,Y);R[j]=ut}return R[j]}var N=n._deserialize(B[0],null,T);return N}}var eo=new Mr;Mr.toJson=eo.toJson,Mr.fromJson=eo.fromJson,at.addType(Ai.TYPE,Ai.TYPE,ol);function ol(a,i,n,l,u,_,p){io(a,n.getShape(),i,_.getShape(),u)}function io(a,i,n,l,u){a.pointCount=0;var _=P.mulVec2(n,i.m_p),p=P.mulVec2(u,l.m_p),y=s.distanceSquared(p,_),w=i.m_radius,I=l.m_radius,B=w+I;y>B*B||(a.type=et.e_circles,a.localPoint.setVec2(i.m_p),a.localNormal.setZero(),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex)}at.addType(Me.TYPE,Ai.TYPE,al),at.addType(Ue.TYPE,Ai.TYPE,ll);function al(a,i,n,l,u,_,p){var y=n.getShape(),w=_.getShape();ts(a,y,i,w,u)}function ll(a,i,n,l,u,_,p){var y=n.getShape(),w=new Me;y.getChildEdge(w,l);var I=w,B=_.getShape();ts(a,I,i,B,u)}function ts(a,i,n,l,u){a.pointCount=0;var _=P.mulTVec2(n,P.mulVec2(u,l.m_p)),p=i.m_vertex1,y=i.m_vertex2,w=s.sub(y,p),I=s.dot(w,s.sub(y,_)),B=s.dot(w,s.sub(_,p)),R=i.m_radius+l.m_radius;if(B<=0){var E=s.clone(p),C=s.sub(_,E),T=s.dot(C,C);if(T>R*R)return;if(i.m_hasVertex0){var N=i.m_vertex0,H=p,W=s.sub(H,N),Y=s.dot(W,s.sub(H,_));if(Y>0)return}a.type=et.e_circles,a.localNormal.setZero(),a.localPoint.setVec2(E),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex;return}if(I<=0){var j=s.clone(y),ht=s.sub(_,j),ut=s.dot(ht,ht);if(ut>R*R)return;if(i.m_hasVertex3){var ft=i.m_vertex3,yt=y,Ct=s.sub(ft,yt),Rt=s.dot(Ct,s.sub(_,yt));if(Rt>0)return}a.type=et.e_circles,a.localNormal.setZero(),a.localPoint.setVec2(j),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=1,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex;return}var Ut=s.dot(w,w),It=s.combine(I/Ut,p,B/Ut,y),bt=s.sub(_,It),$t=s.dot(bt,bt);if(!($t>R*R)){var jt=s.neo(-w.y,w.x);s.dot(jt,s.sub(_,p))<0&&jt.setNum(-jt.x,-jt.y),jt.normalize(),a.type=et.e_faceA,a.localNormal=jt,a.localPoint.setVec2(p),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_face,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex}}at.addType(ni.TYPE,ni.TYPE,cl);function cl(a,i,n,l,u,_,p){es(a,n.getShape(),i,_.getShape(),u)}function no(a,i,n,l,u){for(var _=a.m_count,p=n.m_count,y=a.m_normals,w=a.m_vertices,I=n.m_vertices,B=P.mulTXf(l,i),R=0,E=-1/0,C=0;C<_;++C){for(var T=S.mulVec2(B.q,y[C]),N=P.mulVec2(B,w[C]),H=1/0,W=0;W<p;++W){var Y=s.dot(T,I[W])-s.dot(T,N);Y<H&&(H=Y)}H>E&&(E=H,R=C)}u.maxSeparation=E,u.bestIndex=R}function hl(a,i,n,l,u,_){for(var p=i.m_normals,y=u.m_count,w=u.m_vertices,I=u.m_normals,B=S.mulTVec2(_.q,S.mulVec2(n.q,p[l])),R=0,E=1/0,C=0;C<y;++C){var T=s.dot(B,I[C]);T<E&&(E=T,R=C)}var N=R,H=N+1<y?N+1:0;a[0].v=P.mulVec2(_,w[N]),a[0].id.cf.indexA=l,a[0].id.cf.indexB=N,a[0].id.cf.typeA=$.e_face,a[0].id.cf.typeB=$.e_vertex,a[1].v=P.mulVec2(_,w[H]),a[1].id.cf.indexA=l,a[1].id.cf.indexB=H,a[1].id.cf.typeA=$.e_face,a[1].id.cf.typeB=$.e_vertex}var Cn={maxSeparation:0,bestIndex:0};function es(a,i,n,l,u){a.pointCount=0;var _=i.m_radius+l.m_radius;no(i,n,l,u,Cn);var p=Cn.bestIndex,y=Cn.maxSeparation;if(!(y>_)){no(l,u,i,n,Cn);var w=Cn.bestIndex,I=Cn.maxSeparation;if(!(I>_)){var B,R,E,C,T,N,H=.1*A.linearSlop;I>y+H?(B=l,R=i,E=u,C=n,T=w,a.type=et.e_faceB,N=1):(B=i,R=l,E=n,C=u,T=p,a.type=et.e_faceA,N=0);var W=[new pt,new pt];hl(W,B,E,T,R,C);var Y=B.m_count,j=B.m_vertices,ht=T,ut=T+1<Y?T+1:0,ft=j[ht],yt=j[ut],Ct=s.sub(yt,ft);Ct.normalize();var Rt=s.crossVec2Num(Ct,1),Ut=s.combine(.5,ft,.5,yt),It=S.mulVec2(E.q,Ct),bt=s.crossVec2Num(It,1);ft=P.mulVec2(E,ft),yt=P.mulVec2(E,yt);var $t=s.dot(bt,ft),jt=-s.dot(It,ft)+_,ie=s.dot(It,yt)+_,ge=[new pt,new pt],be=[new pt,new pt],ve;if(ve=Zt(ge,W,s.neg(It),jt,ht),!(ve<2)&&(ve=Zt(be,ge,It,ie,ut),!(ve<2))){a.localNormal=Rt,a.localPoint=Ut;for(var qt=0,Jt=0;Jt<be.length;++Jt){var ee=s.dot(bt,be[Jt].v)-$t;if(ee<=_){var Ht=a.points[qt];if(Ht.localPoint.setVec2(P.mulTVec2(C,be[Jt].v)),Ht.id=be[Jt].id,N){var Le=Ht.id.cf,Qe=Le.indexA,di=Le.indexB,Ne=Le.typeA,Xi=Le.typeB;Le.indexA=di,Le.indexB=Qe,Le.typeA=Xi,Le.typeB=Ne}++qt}}a.pointCount=qt}}}}at.addType(ni.TYPE,Ai.TYPE,ul);function ul(a,i,n,l,u,_,p){ro(a,n.getShape(),i,_.getShape(),u)}function ro(a,i,n,l,u){a.pointCount=0;for(var _=P.mulVec2(u,l.m_p),p=P.mulTVec2(n,_),y=0,w=-1/0,I=i.m_radius+l.m_radius,B=i.m_count,R=i.m_vertices,E=i.m_normals,C=0;C<B;++C){var T=s.dot(E[C],s.sub(p,R[C]));if(T>I)return;T>w&&(w=T,y=C)}var N=y,H=N+1<B?N+1:0,W=R[N],Y=R[H];if(w<f.EPSILON){a.pointCount=1,a.type=et.e_faceA,a.localNormal.setVec2(E[y]),a.localPoint.setCombine(.5,W,.5,Y),a.points[0].localPoint=l.m_p,a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex;return}var j=s.dot(s.sub(p,W),s.sub(Y,W)),ht=s.dot(s.sub(p,Y),s.sub(W,Y));if(j<=0){if(s.distanceSquared(p,W)>I*I)return;a.pointCount=1,a.type=et.e_faceA,a.localNormal.setCombine(1,p,-1,W),a.localNormal.normalize(),a.localPoint=W,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex}else if(ht<=0){if(s.distanceSquared(p,Y)>I*I)return;a.pointCount=1,a.type=et.e_faceA,a.localNormal.setCombine(1,p,-1,Y),a.localNormal.normalize(),a.localPoint.setVec2(Y),a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex}else{var ut=s.mid(W,Y),ft=s.dot(p,E[N])-s.dot(ut,E[N]);if(ft>I)return;a.pointCount=1,a.type=et.e_faceA,a.localNormal.setVec2(E[N]),a.localPoint.setVec2(ut),a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=$.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=$.e_vertex}}at.addType(Me.TYPE,ni.TYPE,ml),at.addType(Ue.TYPE,ni.TYPE,dl);function ml(a,i,n,l,u,_,p){is(a,n.getShape(),i,_.getShape(),u)}function dl(a,i,n,l,u,_,p){var y=n.getShape(),w=new Me;y.getChildEdge(w,l),is(a,w,i,_.getShape(),u)}var si;(function(a){a[a.e_unknown=-1]="e_unknown",a[a.e_edgeA=1]="e_edgeA",a[a.e_edgeB=2]="e_edgeB"})(si||(si={}));var so;(function(a){a[a.e_isolated=0]="e_isolated",a[a.e_concave=1]="e_concave",a[a.e_convex=2]="e_convex"})(so||(so={}));var oo=function(){function a(){}return a}(),fl=function(){function a(){this.vertices=[],this.normals=[],this.count=0}return a}(),pl=function(){function a(){this.normal=s.zero(),this.sideNormal1=s.zero(),this.sideNormal2=s.zero()}return a}(),Si=new oo,Ye=new oo,De=new fl,re=new pl;function is(a,i,n,l,u){var _=P.mulTXf(n,u),p=P.mulVec2(_,l.m_centroid),y=i.m_vertex0,w=i.m_vertex1,I=i.m_vertex2,B=i.m_vertex3,R=i.m_hasVertex0,E=i.m_hasVertex3,C=s.sub(I,w);C.normalize();var T=s.neo(C.y,-C.x),N=s.dot(T,s.sub(p,w)),H=0,W=0,Y=!1,j=!1,ht,ut;if(R){var ft=s.sub(w,y);ft.normalize(),ht=s.neo(ft.y,-ft.x),Y=s.crossVec2Vec2(ft,C)>=0,H=s.dot(ht,p)-s.dot(ht,y)}if(E){var yt=s.sub(B,I);yt.normalize(),ut=s.neo(yt.y,-yt.x),j=s.crossVec2Vec2(C,yt)>0,W=s.dot(ut,p)-s.dot(ut,I)}var Ct,Rt=s.zero(),Ut=s.zero(),It=s.zero();R&&E?Y&&j?(Ct=H>=0||N>=0||W>=0,Ct?(Rt.setVec2(T),Ut.setVec2(ht),It.setVec2(ut)):(Rt.setMul(-1,T),Ut.setMul(-1,T),It.setMul(-1,T))):Y?(Ct=H>=0||N>=0&&W>=0,Ct?(Rt.setVec2(T),Ut.setVec2(ht),It.setVec2(T)):(Rt.setMul(-1,T),Ut.setMul(-1,ut),It.setMul(-1,T))):j?(Ct=W>=0||H>=0&&N>=0,Ct?(Rt.setVec2(T),Ut.setVec2(T),It.setVec2(ut)):(Rt.setMul(-1,T),Ut.setMul(-1,T),It.setMul(-1,ht))):(Ct=H>=0&&N>=0&&W>=0,Ct?(Rt.setVec2(T),Ut.setVec2(T),It.setVec2(T)):(Rt.setMul(-1,T),Ut.setMul(-1,ut),It.setMul(-1,ht))):R?Y?(Ct=H>=0||N>=0,Ct?(Rt.setVec2(T),Ut.setVec2(ht),It.setMul(-1,T)):(Rt.setMul(-1,T),Ut.setVec2(T),It.setMul(-1,T))):(Ct=H>=0&&N>=0,Ct?(Rt.setVec2(T),Ut.setVec2(T),It.setMul(-1,T)):(Rt.setMul(-1,T),Ut.setVec2(T),It.setMul(-1,ht))):E?j?(Ct=N>=0||W>=0,Ct?(Rt.setVec2(T),Ut.setMul(-1,T),It.setVec2(ut)):(Rt.setMul(-1,T),Ut.setMul(-1,T),It.setVec2(T))):(Ct=N>=0&&W>=0,Ct?(Rt.setVec2(T),Ut.setMul(-1,T),It.setVec2(T)):(Rt.setMul(-1,T),Ut.setMul(-1,ut),It.setVec2(T))):(Ct=N>=0,Ct?(Rt.setVec2(T),Ut.setMul(-1,T),It.setMul(-1,T)):(Rt.setMul(-1,T),Ut.setVec2(T),It.setVec2(T))),De.count=l.m_count;for(var bt=0;bt<l.m_count;++bt)De.vertices[bt]=P.mulVec2(_,l.m_vertices[bt]),De.normals[bt]=S.mulVec2(_.q,l.m_normals[bt]);var $t=2*A.polygonRadius;a.pointCount=0;{Si.type=si.e_edgeA,Si.index=Ct?0:1,Si.separation=1/0;for(var bt=0;bt<De.count;++bt){var jt=s.dot(Rt,s.sub(De.vertices[bt],w));jt<Si.separation&&(Si.separation=jt)}}if(Si.type!=si.e_unknown&&!(Si.separation>$t)){{Ye.type=si.e_unknown,Ye.index=-1,Ye.separation=-1/0;for(var ie=s.neo(-Rt.y,Rt.x),bt=0;bt<De.count;++bt){var ge=s.neg(De.normals[bt]),be=s.dot(ge,s.sub(De.vertices[bt],w)),ve=s.dot(ge,s.sub(De.vertices[bt],I)),jt=f.min(be,ve);if(jt>$t){Ye.type=si.e_edgeB,Ye.index=bt,Ye.separation=jt;break}if(s.dot(ge,ie)>=0){if(s.dot(s.sub(ge,It),Rt)<-A.angularSlop)continue}else if(s.dot(s.sub(ge,Ut),Rt)<-A.angularSlop)continue;jt>Ye.separation&&(Ye.type=si.e_edgeB,Ye.index=bt,Ye.separation=jt)}}if(!(Ye.type!=si.e_unknown&&Ye.separation>$t)){var qt=.98,Jt=.001,ee;Ye.type==si.e_unknown?ee=Si:Ye.separation>qt*Si.separation+Jt?ee=Ye:ee=Si;var Ht=[new pt,new pt];if(ee.type==si.e_edgeA){a.type=et.e_faceA;for(var Le=0,Qe=s.dot(Rt,De.normals[0]),bt=1;bt<De.count;++bt){var di=s.dot(Rt,De.normals[bt]);di<Qe&&(Qe=di,Le=bt)}var Ne=Le,Xi=Ne+1<De.count?Ne+1:0;Ht[0].v=De.vertices[Ne],Ht[0].id.cf.indexA=0,Ht[0].id.cf.indexB=Ne,Ht[0].id.cf.typeA=$.e_face,Ht[0].id.cf.typeB=$.e_vertex,Ht[1].v=De.vertices[Xi],Ht[1].id.cf.indexA=0,Ht[1].id.cf.indexB=Xi,Ht[1].id.cf.typeA=$.e_face,Ht[1].id.cf.typeB=$.e_vertex,Ct?(re.i1=0,re.i2=1,re.v1=w,re.v2=I,re.normal.setVec2(T)):(re.i1=1,re.i2=0,re.v1=I,re.v2=w,re.normal.setMul(-1,T))}else a.type=et.e_faceB,Ht[0].v=w,Ht[0].id.cf.indexA=0,Ht[0].id.cf.indexB=ee.index,Ht[0].id.cf.typeA=$.e_vertex,Ht[0].id.cf.typeB=$.e_face,Ht[1].v=I,Ht[1].id.cf.indexA=0,Ht[1].id.cf.indexB=ee.index,Ht[1].id.cf.typeA=$.e_vertex,Ht[1].id.cf.typeB=$.e_face,re.i1=ee.index,re.i2=re.i1+1<De.count?re.i1+1:0,re.v1=De.vertices[re.i1],re.v2=De.vertices[re.i2],re.normal.setVec2(De.normals[re.i1]);re.sideNormal1.setNum(re.normal.y,-re.normal.x),re.sideNormal2.setMul(-1,re.sideNormal1),re.sideOffset1=s.dot(re.sideNormal1,re.v1),re.sideOffset2=s.dot(re.sideNormal2,re.v2);var Tn=[new pt,new pt],ti=[new pt,new pt],Ii;if(Ii=Zt(Tn,Ht,re.sideNormal1,re.sideOffset1,re.i1),!(Ii<A.maxManifoldPoints)&&(Ii=Zt(ti,Tn,re.sideNormal2,re.sideOffset2,re.i2),!(Ii<A.maxManifoldPoints))){ee.type==si.e_edgeA?(a.localNormal=s.clone(re.normal),a.localPoint=s.clone(re.v1)):(a.localNormal=s.clone(l.m_normals[re.i1]),a.localPoint=s.clone(l.m_vertices[re.i1]));for(var Bn=0,bt=0;bt<A.maxManifoldPoints;++bt){var En=s.dot(re.normal,s.sub(ti[bt].v,re.v1));if(En<=$t){var Di=a.points[Bn];ee.type==si.e_edgeA?(Di.localPoint=P.mulTVec2(_,ti[bt].v),Di.id=ti[bt].id):(Di.localPoint=ti[bt].v,Di.id.cf.typeA=ti[bt].id.cf.typeB,Di.id.cf.typeB=ti[bt].id.cf.typeA,Di.id.cf.indexA=ti[bt].id.cf.indexB,Di.id.cf.indexB=ti[bt].id.cf.indexA),++Bn}}a.pointCount=Bn}}}}var Pi={};Pi.CollidePolygons=es,Pi.Settings=A,Pi.Sweep=G,Pi.Manifold=Dt,Pi.Distance=ye,Pi.TimeOfImpact=q,Pi.DynamicTree=b,Pi.stats=xt,Lt.TimeStep=Xt,ye.testOverlap=Te,ye.Input=ue,ye.Output=oe,ye.Proxy=Ae,ye.Cache=Yt,q.Input=vt,q.Output=Bt,e.AABB=x,e.Body=rt,e.Box=Hi,e.Chain=Ue,e.Circle=Ai,e.CollideCircles=io,e.CollideEdgeCircle=ts,e.CollideEdgePolygon=is,e.CollidePolygonCircle=ro,e.CollidePolygons=es,e.Contact=at,e.Distance=ye,e.DistanceJoint=Sn,e.DynamicTree=b,e.Edge=Me,e.Fixture=nt,e.FrictionJoint=sr,e.GearJoint=mi,e.Joint=gt,e.Manifold=Dt,e.Mat22=mt,e.Mat33=ui,e.Math=f,e.MotorJoint=Mi,e.MouseJoint=de,e.Polygon=ni,e.PrismaticJoint=he,e.PulleyJoint=Se,e.RevoluteJoint=Wt,e.RopeJoint=sn,e.Rot=S,e.Serializer=Mr,e.Settings=A,e.Shape=O,e.Sweep=G,e.TimeOfImpact=q,e.Transform=P,e.Vec2=s,e.Vec3=zt,e.WeldJoint=Li,e.WheelJoint=Ze,e.World=fe,e.internal=Pi,Object.defineProperty(e,"__esModule",{value:!0})})})(Ie,Ie.exports);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const js="142",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yl=0,ao=1,xl=2,Ea=1,bl=2,ur=3,fr=0,xi=1,Kn=2,Al=1,en=0,jn=1,lo=2,co=3,ho=4,Ml=5,Xn=100,wl=101,Sl=102,uo=103,mo=104,Cl=200,Tl=201,Bl=202,El=203,La=204,Pa=205,Ll=206,Pl=207,Il=208,Dl=209,Vl=210,Rl=0,Fl=1,zl=2,Ns=3,Nl=4,Ol=5,Ul=6,kl=7,Ia=0,Gl=1,Hl=2,Gi=0,Wl=1,ql=2,Xl=3,Yl=4,jl=5,Da=300,$n=301,Qn=302,Os=303,Us=304,jr=306,ks=1e3,yi=1001,Gs=1002,He=1003,fo=1004,po=1005,ai=1006,Jl=1007,Jr=1008,gn=1009,Zl=1010,Kl=1011,Va=1012,$l=1013,mn=1014,dn=1015,pr=1016,Ql=1017,tc=1018,Jn=1020,ec=1021,ic=1022,Ti=1023,nc=1024,rc=1025,pn=1026,tr=1027,sc=1028,oc=1029,ac=1030,lc=1031,cc=1033,ns=33776,rs=33777,ss=33778,os=33779,_o=35840,vo=35841,go=35842,yo=35843,hc=36196,xo=37492,bo=37496,Ao=37808,Mo=37809,wo=37810,So=37811,Co=37812,To=37813,Bo=37814,Eo=37815,Lo=37816,Po=37817,Io=37818,Do=37819,Vo=37820,Ro=37821,Fo=36492,yn=3e3,Be=3001,uc=3200,mc=3201,Ra=0,dc=1,Oi="srgb",fn="srgb-linear",as=7680,fc=519,zo=35044,No="300 es",Hs=1035;class Mn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const c=o.indexOf(e);c!==-1&&o.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ls=Math.PI/180,Oo=180/Math.PI;function _r(){const h=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ke[h&255]+ke[h>>8&255]+ke[h>>16&255]+ke[h>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]).toLowerCase()}function Ke(h,t,e){return Math.max(t,Math.min(e,h))}function pc(h,t){return(h%t+t)%t}function cs(h,t,e){return(1-e)*h+e*t}function Uo(h){return(h&h-1)===0&&h!==0}function Ws(h){return Math.pow(2,Math.floor(Math.log(h)/Math.LN2))}class le{constructor(t=0,e=0){le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6],this.y=o[1]*e+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),o=Math.sin(e),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*o+t.x,this.y=c*o+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class li{constructor(){li.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,r,o,c,d,m,g,v){const f=this.elements;return f[0]=t,f[1]=o,f[2]=m,f[3]=e,f[4]=c,f[5]=g,f[6]=r,f[7]=d,f[8]=v,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,c=this.elements,d=r[0],m=r[3],g=r[6],v=r[1],f=r[4],s=r[7],x=r[2],A=r[5],L=r[8],M=o[0],b=o[3],D=o[6],U=o[1],S=o[4],P=o[7],G=o[2],J=o[5],tt=o[8];return c[0]=d*M+m*U+g*G,c[3]=d*b+m*S+g*J,c[6]=d*D+m*P+g*tt,c[1]=v*M+f*U+s*G,c[4]=v*b+f*S+s*J,c[7]=v*D+f*P+s*tt,c[2]=x*M+A*U+L*G,c[5]=x*b+A*S+L*J,c[8]=x*D+A*P+L*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],d=t[4],m=t[5],g=t[6],v=t[7],f=t[8];return e*d*f-e*m*v-r*c*f+r*m*g+o*c*v-o*d*g}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],d=t[4],m=t[5],g=t[6],v=t[7],f=t[8],s=f*d-m*v,x=m*g-f*c,A=v*c-d*g,L=e*s+r*x+o*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/L;return t[0]=s*M,t[1]=(o*v-f*r)*M,t[2]=(m*r-o*d)*M,t[3]=x*M,t[4]=(f*e-o*g)*M,t[5]=(o*c-m*e)*M,t[6]=A*M,t[7]=(r*g-v*e)*M,t[8]=(d*e-r*c)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,o,c,d,m){const g=Math.cos(c),v=Math.sin(c);return this.set(r*g,r*v,-r*(g*d+v*m)+d+t,-o*v,o*g,-o*(-v*d+g*m)+m+e,0,0,1),this}scale(t,e){const r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=e,r[4]*=e,r[7]*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),o=this.elements,c=o[0],d=o[3],m=o[6],g=o[1],v=o[4],f=o[7];return o[0]=e*c+r*g,o[3]=e*d+r*v,o[6]=e*m+r*f,o[1]=-r*c+e*g,o[4]=-r*d+e*v,o[7]=-r*m+e*f,this}translate(t,e){const r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=e*r[2],r[4]+=e*r[5],r[7]+=e*r[8],this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<9;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Fa(h){for(let t=h.length-1;t>=0;--t)if(h[t]>65535)return!0;return!1}function Xr(h){return document.createElementNS("http://www.w3.org/1999/xhtml",h)}function _n(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function Wr(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}const hs={[Oi]:{[fn]:_n},[fn]:{[Oi]:Wr}},fi={legacyMode:!0,get workingColorSpace(){return fn},set workingColorSpace(h){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(h,t,e){if(this.legacyMode||t===e||!t||!e)return h;if(hs[t]&&hs[t][e]!==void 0){const r=hs[t][e];return h.r=r(h.r),h.g=r(h.g),h.b=r(h.b),h}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(h,t){return this.convert(h,this.workingColorSpace,t)},toWorkingColorSpace:function(h,t){return this.convert(h,t,this.workingColorSpace)}},za={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ve={r:0,g:0,b:0},pi={h:0,s:0,l:0},wr={h:0,s:0,l:0};function us(h,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?h+(t-h)*6*e:e<1/2?t:e<2/3?h+(t-h)*6*(2/3-e):h}function Sr(h,t){return t.r=h.r,t.g=h.g,t.b=h.b,t}class xe{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&r===void 0?this.set(t):this.setRGB(t,e,r)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fi.toWorkingColorSpace(this,e),this}setRGB(t,e,r,o=fn){return this.r=t,this.g=e,this.b=r,fi.toWorkingColorSpace(this,o),this}setHSL(t,e,r,o=fn){if(t=pc(t,1),e=Ke(e,0,1),r=Ke(r,0,1),e===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+e):r+e-r*e,d=2*r-c;this.r=us(d,c,t+1/3),this.g=us(d,c,t),this.b=us(d,c,t-1/3)}return fi.toWorkingColorSpace(this,o),this}setStyle(t,e=Oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let c;const d=o[1],m=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,fi.toWorkingColorSpace(this,e),r(c[4]),this;if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,fi.toWorkingColorSpace(this,e),r(c[4]),this;break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m)){const g=parseFloat(c[1])/360,v=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;return r(c[4]),this.setHSL(g,v,f,e)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],d=c.length;if(d===3)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,fi.toWorkingColorSpace(this,e),this;if(d===6)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,fi.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Oi){const r=za[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oi){return fi.fromWorkingColorSpace(Sr(this,Ve),t),Ke(Ve.r*255,0,255)<<16^Ke(Ve.g*255,0,255)<<8^Ke(Ve.b*255,0,255)<<0}getHexString(t=Oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fn){fi.fromWorkingColorSpace(Sr(this,Ve),e);const r=Ve.r,o=Ve.g,c=Ve.b,d=Math.max(r,o,c),m=Math.min(r,o,c);let g,v;const f=(m+d)/2;if(m===d)g=0,v=0;else{const s=d-m;switch(v=f<=.5?s/(d+m):s/(2-d-m),d){case r:g=(o-c)/s+(o<c?6:0);break;case o:g=(c-r)/s+2;break;case c:g=(r-o)/s+4;break}g/=6}return t.h=g,t.s=v,t.l=f,t}getRGB(t,e=fn){return fi.fromWorkingColorSpace(Sr(this,Ve),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Oi){return fi.fromWorkingColorSpace(Sr(this,Ve),t),t!==Oi?`color(${t} ${Ve.r} ${Ve.g} ${Ve.b})`:`rgb(${Ve.r*255|0},${Ve.g*255|0},${Ve.b*255|0})`}offsetHSL(t,e,r){return this.getHSL(pi),pi.h+=t,pi.s+=e,pi.l+=r,this.setHSL(pi.h,pi.s,pi.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(wr);const r=cs(pi.h,wr.h,e),o=cs(pi.s,wr.s,e),c=cs(pi.l,wr.l,e);return this.setHSL(r,o,c),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}xe.NAMES=za;let In;class Na{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{In===void 0&&(In=Xr("canvas")),In.width=t.width,In.height=t.height;const r=In.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=In}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=_n(c[d]/255)*255;return r.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(_n(e[r]/255)*255):e[r]=_n(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Oa{constructor(t=null){this.isSource=!0,this.uuid=_r(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,m=o.length;d<m;d++)o[d].isDataTexture?c.push(ms(o[d].image)):c.push(ms(o[d]))}else c=ms(o);r.url=c}return e||(t.images[this.uuid]=r),r}}function ms(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap?Na.getDataURL(h):h.data?{data:Array.from(h.data),width:h.width,height:h.height,type:h.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _c=0;class ci extends Mn{constructor(t=ci.DEFAULT_IMAGE,e=ci.DEFAULT_MAPPING,r=yi,o=yi,c=ai,d=Jr,m=Ti,g=gn,v=1,f=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=_r(),this.name="",this.source=new Oa(t),this.mipmaps=[],this.mapping=e,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=v,this.format=m,this.internalFormat=null,this.type=g,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new li,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Da)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Gs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Gs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=Da;class Fe{constructor(t=0,e=0,r=0,o=1){Fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,o){return this.x=t,this.y=e,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,c=this.w,d=t.elements;return this.x=d[0]*e+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*e+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*e+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*e+d[7]*r+d[11]*o+d[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,o,c;const g=t.elements,v=g[0],f=g[4],s=g[8],x=g[1],A=g[5],L=g[9],M=g[2],b=g[6],D=g[10];if(Math.abs(f-x)<.01&&Math.abs(s-M)<.01&&Math.abs(L-b)<.01){if(Math.abs(f+x)<.1&&Math.abs(s+M)<.1&&Math.abs(L+b)<.1&&Math.abs(v+A+D-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(v+1)/2,P=(A+1)/2,G=(D+1)/2,J=(f+x)/4,tt=(s+M)/4,O=(L+b)/4;return S>P&&S>G?S<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(S),o=J/r,c=tt/r):P>G?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=J/o,c=O/o):G<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(G),r=tt/c,o=O/c),this.set(r,o,c,e),this}let U=Math.sqrt((b-L)*(b-L)+(s-M)*(s-M)+(x-f)*(x-f));return Math.abs(U)<.001&&(U=1),this.x=(b-L)/U,this.y=(s-M)/U,this.z=(x-f)/U,this.w=Math.acos((v+A+D-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xn extends Mn{constructor(t,e,r={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e);const o={width:t,height:e,depth:1};this.texture=new ci(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:ai,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(t,e,r=1){(this.width!==t||this.height!==e||this.depth!==r)&&(this.width=t,this.height=e,this.depth=r,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ua extends ci{constructor(t=null,e=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=He,this.minFilter=He,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends ci{constructor(t=null,e=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=He,this.minFilter=He,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(t=0,e=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=o}static slerp(t,e,r,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(t,e,o)}static slerpFlat(t,e,r,o,c,d,m){let g=r[o+0],v=r[o+1],f=r[o+2],s=r[o+3];const x=c[d+0],A=c[d+1],L=c[d+2],M=c[d+3];if(m===0){t[e+0]=g,t[e+1]=v,t[e+2]=f,t[e+3]=s;return}if(m===1){t[e+0]=x,t[e+1]=A,t[e+2]=L,t[e+3]=M;return}if(s!==M||g!==x||v!==A||f!==L){let b=1-m;const D=g*x+v*A+f*L+s*M,U=D>=0?1:-1,S=1-D*D;if(S>Number.EPSILON){const G=Math.sqrt(S),J=Math.atan2(G,D*U);b=Math.sin(b*J)/G,m=Math.sin(m*J)/G}const P=m*U;if(g=g*b+x*P,v=v*b+A*P,f=f*b+L*P,s=s*b+M*P,b===1-m){const G=1/Math.sqrt(g*g+v*v+f*f+s*s);g*=G,v*=G,f*=G,s*=G}}t[e]=g,t[e+1]=v,t[e+2]=f,t[e+3]=s}static multiplyQuaternionsFlat(t,e,r,o,c,d){const m=r[o],g=r[o+1],v=r[o+2],f=r[o+3],s=c[d],x=c[d+1],A=c[d+2],L=c[d+3];return t[e]=m*L+f*s+g*A-v*x,t[e+1]=g*L+f*x+v*s-m*A,t[e+2]=v*L+f*A+m*x-g*s,t[e+3]=f*L-m*s-g*x-v*A,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,o){return this._x=t,this._y=e,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=t._x,o=t._y,c=t._z,d=t._order,m=Math.cos,g=Math.sin,v=m(r/2),f=m(o/2),s=m(c/2),x=g(r/2),A=g(o/2),L=g(c/2);switch(d){case"XYZ":this._x=x*f*s+v*A*L,this._y=v*A*s-x*f*L,this._z=v*f*L+x*A*s,this._w=v*f*s-x*A*L;break;case"YXZ":this._x=x*f*s+v*A*L,this._y=v*A*s-x*f*L,this._z=v*f*L-x*A*s,this._w=v*f*s+x*A*L;break;case"ZXY":this._x=x*f*s-v*A*L,this._y=v*A*s+x*f*L,this._z=v*f*L+x*A*s,this._w=v*f*s-x*A*L;break;case"ZYX":this._x=x*f*s-v*A*L,this._y=v*A*s+x*f*L,this._z=v*f*L-x*A*s,this._w=v*f*s+x*A*L;break;case"YZX":this._x=x*f*s+v*A*L,this._y=v*A*s+x*f*L,this._z=v*f*L-x*A*s,this._w=v*f*s-x*A*L;break;case"XZY":this._x=x*f*s-v*A*L,this._y=v*A*s-x*f*L,this._z=v*f*L+x*A*s,this._w=v*f*s+x*A*L;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],o=e[4],c=e[8],d=e[1],m=e[5],g=e[9],v=e[2],f=e[6],s=e[10],x=r+m+s;if(x>0){const A=.5/Math.sqrt(x+1);this._w=.25/A,this._x=(f-g)*A,this._y=(c-v)*A,this._z=(d-o)*A}else if(r>m&&r>s){const A=2*Math.sqrt(1+r-m-s);this._w=(f-g)/A,this._x=.25*A,this._y=(o+d)/A,this._z=(c+v)/A}else if(m>s){const A=2*Math.sqrt(1+m-r-s);this._w=(c-v)/A,this._x=(o+d)/A,this._y=.25*A,this._z=(g+f)/A}else{const A=2*Math.sqrt(1+s-r-m);this._w=(d-o)/A,this._x=(c+v)/A,this._y=(g+f)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,e/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,o=t._y,c=t._z,d=t._w,m=e._x,g=e._y,v=e._z,f=e._w;return this._x=r*f+d*m+o*v-c*g,this._y=o*f+d*g+c*m-r*v,this._z=c*f+d*v+r*g-o*m,this._w=d*f-r*m-o*g-c*v,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,o=this._y,c=this._z,d=this._w;let m=d*t._w+r*t._x+o*t._y+c*t._z;if(m<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,m=-m):this.copy(t),m>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const g=1-m*m;if(g<=Number.EPSILON){const A=1-e;return this._w=A*d+e*this._w,this._x=A*r+e*this._x,this._y=A*o+e*this._y,this._z=A*c+e*this._z,this.normalize(),this._onChangeCallback(),this}const v=Math.sqrt(g),f=Math.atan2(v,m),s=Math.sin((1-e)*f)/v,x=Math.sin(e*f)/v;return this._w=d*s+this._w*x,this._x=r*s+this._x*x,this._y=o*s+this._y*x,this._z=c*s+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=Math.random(),e=Math.sqrt(1-t),r=Math.sqrt(t),o=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(e*Math.cos(o),r*Math.sin(c),r*Math.cos(c),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ko.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[3]*r+c[6]*o,this.y=c[1]*e+c[4]*r+c[7]*o,this.z=c[2]*e+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,c=t.elements,d=1/(c[3]*e+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*e+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*e+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*e+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(t){const e=this.x,r=this.y,o=this.z,c=t.x,d=t.y,m=t.z,g=t.w,v=g*e+d*o-m*r,f=g*r+m*e-c*o,s=g*o+c*r-d*e,x=-c*e-d*r-m*o;return this.x=v*g+x*-c+f*-m-s*-d,this.y=f*g+x*-d+s*-c-v*-m,this.z=s*g+x*-m+v*-d-f*-c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[4]*r+c[8]*o,this.y=c[1]*e+c[5]*r+c[9]*o,this.z=c[2]*e+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,o=t.y,c=t.z,d=e.x,m=e.y,g=e.z;return this.x=o*g-c*m,this.y=c*d-r*g,this.z=r*m-o*d,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ds.copy(this).projectOnVector(t),this.sub(ds)}reflect(t){return this.sub(ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Ke(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return e*e+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const o=Math.sin(e)*t;return this.x=o*Math.sin(r),this.y=Math.cos(e)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(e),this.y=r*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ds=new K,ko=new bn;class vr{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,r=1/0,o=1/0,c=-1/0,d=-1/0,m=-1/0;for(let g=0,v=t.length;g<v;g+=3){const f=t[g],s=t[g+1],x=t[g+2];f<e&&(e=f),s<r&&(r=s),x<o&&(o=x),f>c&&(c=f),s>d&&(d=s),x>m&&(m=x)}return this.min.set(e,r,o),this.max.set(c,d,m),this}setFromBufferAttribute(t){let e=1/0,r=1/0,o=1/0,c=-1/0,d=-1/0,m=-1/0;for(let g=0,v=t.count;g<v;g++){const f=t.getX(g),s=t.getY(g),x=t.getZ(g);f<e&&(e=f),s<r&&(r=s),x<o&&(o=x),f>c&&(c=f),s>d&&(d=s),x>m&&(m=x)}return this.min.set(e,r,o),this.max.set(c,d,m),this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0)if(e&&r.attributes!=null&&r.attributes.position!==void 0){const c=r.attributes.position;for(let d=0,m=c.count;d<m;d++)on.fromBufferAttribute(c,d).applyMatrix4(t.matrixWorld),this.expandByPoint(on)}else r.boundingBox===null&&r.computeBoundingBox(),fs.copy(r.boundingBox),fs.applyMatrix4(t.matrixWorld),this.union(fs);const o=t.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Cr.subVectors(this.max,ar),Dn.subVectors(t.a,ar),Vn.subVectors(t.b,ar),Rn.subVectors(t.c,ar),Yi.subVectors(Vn,Dn),ji.subVectors(Rn,Vn),an.subVectors(Dn,Rn);let e=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-an.z,an.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,an.z,0,-an.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-an.y,an.x,0];return!ps(e,Dn,Vn,Rn,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ps(e,Dn,Vn,Rn,Cr))?!1:(Tr.crossVectors(Yi,ji),e=[Tr.x,Tr.y,Tr.z],ps(e,Dn,Vn,Rn,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return on.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(on).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vi=[new K,new K,new K,new K,new K,new K,new K,new K],on=new K,fs=new vr,Dn=new K,Vn=new K,Rn=new K,Yi=new K,ji=new K,an=new K,ar=new K,Cr=new K,Tr=new K,ln=new K;function ps(h,t,e,r,o){for(let c=0,d=h.length-3;c<=d;c+=3){ln.fromArray(h,c);const m=o.x*Math.abs(ln.x)+o.y*Math.abs(ln.y)+o.z*Math.abs(ln.z),g=t.dot(ln),v=e.dot(ln),f=r.dot(ln);if(Math.max(-Math.max(g,v,f),Math.min(g,v,f))>m)return!1}return!0}const gc=new vr,Go=new K,Br=new K,_s=new K;class Js{constructor(t=new K,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):gc.setFromPoints(t).getCenter(r);let o=0;for(let c=0,d=t.length;c<d;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),o=(r-this.radius)*.5;this.center.add(_s.multiplyScalar(o/r)),this.radius+=o}return this}union(t){return this.center.equals(t.center)===!0?Br.set(0,0,1).multiplyScalar(t.radius):Br.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Go.copy(t.center).add(Br)),this.expandByPoint(Go.copy(t.center).sub(Br)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new K,vs=new K,Er=new K,Ji=new K,gs=new K,Lr=new K,ys=new K;class ka{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.direction).multiplyScalar(e).add(this.origin),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,r,o){vs.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),Ji.copy(this.origin).sub(vs);const c=t.distanceTo(e)*.5,d=-this.direction.dot(Er),m=Ji.dot(this.direction),g=-Ji.dot(Er),v=Ji.lengthSq(),f=Math.abs(1-d*d);let s,x,A,L;if(f>0)if(s=d*g-m,x=d*m-g,L=c*f,s>=0)if(x>=-L)if(x<=L){const M=1/f;s*=M,x*=M,A=s*(s+d*x+2*m)+x*(d*s+x+2*g)+v}else x=c,s=Math.max(0,-(d*x+m)),A=-s*s+x*(x+2*g)+v;else x=-c,s=Math.max(0,-(d*x+m)),A=-s*s+x*(x+2*g)+v;else x<=-L?(s=Math.max(0,-(-d*c+m)),x=s>0?-c:Math.min(Math.max(-c,-g),c),A=-s*s+x*(x+2*g)+v):x<=L?(s=0,x=Math.min(Math.max(-c,-g),c),A=x*(x+2*g)+v):(s=Math.max(0,-(d*c+m)),x=s>0?c:Math.min(Math.max(-c,-g),c),A=-s*s+x*(x+2*g)+v);else x=d>0?-c:c,s=Math.max(0,-(d*x+m)),A=-s*s+x*(x+2*g)+v;return r&&r.copy(this.direction).multiplyScalar(s).add(this.origin),o&&o.copy(Er).multiplyScalar(x).add(vs),A}intersectSphere(t,e){Ri.subVectors(t.center,this.origin);const r=Ri.dot(this.direction),o=Ri.dot(Ri)-r*r,c=t.radius*t.radius;if(o>c)return null;const d=Math.sqrt(c-o),m=r-d,g=r+d;return m<0&&g<0?null:m<0?this.at(g,e):this.at(m,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,o,c,d,m,g;const v=1/this.direction.x,f=1/this.direction.y,s=1/this.direction.z,x=this.origin;return v>=0?(r=(t.min.x-x.x)*v,o=(t.max.x-x.x)*v):(r=(t.max.x-x.x)*v,o=(t.min.x-x.x)*v),f>=0?(c=(t.min.y-x.y)*f,d=(t.max.y-x.y)*f):(c=(t.max.y-x.y)*f,d=(t.min.y-x.y)*f),r>d||c>o||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),s>=0?(m=(t.min.z-x.z)*s,g=(t.max.z-x.z)*s):(m=(t.max.z-x.z)*s,g=(t.min.z-x.z)*s),r>g||m>o)||((m>r||r!==r)&&(r=m),(g<o||o!==o)&&(o=g),o<0)?null:this.at(r>=0?r:o,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,r,o,c){gs.subVectors(e,t),Lr.subVectors(r,t),ys.crossVectors(gs,Lr);let d=this.direction.dot(ys),m;if(d>0){if(o)return null;m=1}else if(d<0)m=-1,d=-d;else return null;Ji.subVectors(this.origin,t);const g=m*this.direction.dot(Lr.crossVectors(Ji,Lr));if(g<0)return null;const v=m*this.direction.dot(gs.cross(Ji));if(v<0||g+v>d)return null;const f=-m*Ji.dot(ys);return f<0?null:this.at(f/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,r,o,c,d,m,g,v,f,s,x,A,L,M,b){const D=this.elements;return D[0]=t,D[4]=e,D[8]=r,D[12]=o,D[1]=c,D[5]=d,D[9]=m,D[13]=g,D[2]=v,D[6]=f,D[10]=s,D[14]=x,D[3]=A,D[7]=L,D[11]=M,D[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,o=1/Fn.setFromMatrixColumn(t,0).length(),c=1/Fn.setFromMatrixColumn(t,1).length(),d=1/Fn.setFromMatrixColumn(t,2).length();return e[0]=r[0]*o,e[1]=r[1]*o,e[2]=r[2]*o,e[3]=0,e[4]=r[4]*c,e[5]=r[5]*c,e[6]=r[6]*c,e[7]=0,e[8]=r[8]*d,e[9]=r[9]*d,e[10]=r[10]*d,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,r=t.x,o=t.y,c=t.z,d=Math.cos(r),m=Math.sin(r),g=Math.cos(o),v=Math.sin(o),f=Math.cos(c),s=Math.sin(c);if(t.order==="XYZ"){const x=d*f,A=d*s,L=m*f,M=m*s;e[0]=g*f,e[4]=-g*s,e[8]=v,e[1]=A+L*v,e[5]=x-M*v,e[9]=-m*g,e[2]=M-x*v,e[6]=L+A*v,e[10]=d*g}else if(t.order==="YXZ"){const x=g*f,A=g*s,L=v*f,M=v*s;e[0]=x+M*m,e[4]=L*m-A,e[8]=d*v,e[1]=d*s,e[5]=d*f,e[9]=-m,e[2]=A*m-L,e[6]=M+x*m,e[10]=d*g}else if(t.order==="ZXY"){const x=g*f,A=g*s,L=v*f,M=v*s;e[0]=x-M*m,e[4]=-d*s,e[8]=L+A*m,e[1]=A+L*m,e[5]=d*f,e[9]=M-x*m,e[2]=-d*v,e[6]=m,e[10]=d*g}else if(t.order==="ZYX"){const x=d*f,A=d*s,L=m*f,M=m*s;e[0]=g*f,e[4]=L*v-A,e[8]=x*v+M,e[1]=g*s,e[5]=M*v+x,e[9]=A*v-L,e[2]=-v,e[6]=m*g,e[10]=d*g}else if(t.order==="YZX"){const x=d*g,A=d*v,L=m*g,M=m*v;e[0]=g*f,e[4]=M-x*s,e[8]=L*s+A,e[1]=s,e[5]=d*f,e[9]=-m*f,e[2]=-v*f,e[6]=A*s+L,e[10]=x-M*s}else if(t.order==="XZY"){const x=d*g,A=d*v,L=m*g,M=m*v;e[0]=g*f,e[4]=-s,e[8]=v*f,e[1]=x*s+M,e[5]=d*f,e[9]=A*s-L,e[2]=L*s-A,e[6]=m*f,e[10]=M*s+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yc,t,xc)}lookAt(t,e,r){const o=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Zi.crossVectors(r,ei),Zi.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Zi.crossVectors(r,ei)),Zi.normalize(),Pr.crossVectors(ei,Zi),o[0]=Zi.x,o[4]=Pr.x,o[8]=ei.x,o[1]=Zi.y,o[5]=Pr.y,o[9]=ei.y,o[2]=Zi.z,o[6]=Pr.z,o[10]=ei.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,c=this.elements,d=r[0],m=r[4],g=r[8],v=r[12],f=r[1],s=r[5],x=r[9],A=r[13],L=r[2],M=r[6],b=r[10],D=r[14],U=r[3],S=r[7],P=r[11],G=r[15],J=o[0],tt=o[4],O=o[8],X=o[12],lt=o[1],nt=o[5],At=o[9],Pt=o[13],Z=o[2],ct=o[6],ot=o[10],rt=o[14],mt=o[3],et=o[7],$=o[11],Tt=o[15];return c[0]=d*J+m*lt+g*Z+v*mt,c[4]=d*tt+m*nt+g*ct+v*et,c[8]=d*O+m*At+g*ot+v*$,c[12]=d*X+m*Pt+g*rt+v*Tt,c[1]=f*J+s*lt+x*Z+A*mt,c[5]=f*tt+s*nt+x*ct+A*et,c[9]=f*O+s*At+x*ot+A*$,c[13]=f*X+s*Pt+x*rt+A*Tt,c[2]=L*J+M*lt+b*Z+D*mt,c[6]=L*tt+M*nt+b*ct+D*et,c[10]=L*O+M*At+b*ot+D*$,c[14]=L*X+M*Pt+b*rt+D*Tt,c[3]=U*J+S*lt+P*Z+G*mt,c[7]=U*tt+S*nt+P*ct+G*et,c[11]=U*O+S*At+P*ot+G*$,c[15]=U*X+S*Pt+P*rt+G*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],o=t[8],c=t[12],d=t[1],m=t[5],g=t[9],v=t[13],f=t[2],s=t[6],x=t[10],A=t[14],L=t[3],M=t[7],b=t[11],D=t[15];return L*(+c*g*s-o*v*s-c*m*x+r*v*x+o*m*A-r*g*A)+M*(+e*g*A-e*v*x+c*d*x-o*d*A+o*v*f-c*g*f)+b*(+e*v*s-e*m*A-c*d*s+r*d*A+c*m*f-r*v*f)+D*(-o*m*f-e*g*s+e*m*x+o*d*s-r*d*x+r*g*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],d=t[4],m=t[5],g=t[6],v=t[7],f=t[8],s=t[9],x=t[10],A=t[11],L=t[12],M=t[13],b=t[14],D=t[15],U=s*b*v-M*x*v+M*g*A-m*b*A-s*g*D+m*x*D,S=L*x*v-f*b*v-L*g*A+d*b*A+f*g*D-d*x*D,P=f*M*v-L*s*v+L*m*A-d*M*A-f*m*D+d*s*D,G=L*s*g-f*M*g-L*m*x+d*M*x+f*m*b-d*s*b,J=e*U+r*S+o*P+c*G;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/J;return t[0]=U*tt,t[1]=(M*x*c-s*b*c-M*o*A+r*b*A+s*o*D-r*x*D)*tt,t[2]=(m*b*c-M*g*c+M*o*v-r*b*v-m*o*D+r*g*D)*tt,t[3]=(s*g*c-m*x*c-s*o*v+r*x*v+m*o*A-r*g*A)*tt,t[4]=S*tt,t[5]=(f*b*c-L*x*c+L*o*A-e*b*A-f*o*D+e*x*D)*tt,t[6]=(L*g*c-d*b*c-L*o*v+e*b*v+d*o*D-e*g*D)*tt,t[7]=(d*x*c-f*g*c+f*o*v-e*x*v-d*o*A+e*g*A)*tt,t[8]=P*tt,t[9]=(L*s*c-f*M*c-L*r*A+e*M*A+f*r*D-e*s*D)*tt,t[10]=(d*M*c-L*m*c+L*r*v-e*M*v-d*r*D+e*m*D)*tt,t[11]=(f*m*c-d*s*c-f*r*v+e*s*v+d*r*A-e*m*A)*tt,t[12]=G*tt,t[13]=(f*M*o-L*s*o+L*r*x-e*M*x-f*r*b+e*s*b)*tt,t[14]=(L*m*o-d*M*o-L*r*g+e*M*g+d*r*b-e*m*b)*tt,t[15]=(d*s*o-f*m*o+f*r*g-e*s*g-d*r*x+e*m*x)*tt,this}scale(t){const e=this.elements,r=t.x,o=t.y,c=t.z;return e[0]*=r,e[4]*=o,e[8]*=c,e[1]*=r,e[5]*=o,e[9]*=c,e[2]*=r,e[6]*=o,e[10]*=c,e[3]*=r,e[7]*=o,e[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,o))}makeTranslation(t,e,r){return this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),o=Math.sin(e),c=1-r,d=t.x,m=t.y,g=t.z,v=c*d,f=c*m;return this.set(v*d+r,v*m-o*g,v*g+o*m,0,v*m+o*g,f*m+r,f*g-o*d,0,v*g-o*m,f*g+o*d,c*g*g+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,o,c,d){return this.set(1,r,c,0,t,1,d,0,e,o,1,0,0,0,0,1),this}compose(t,e,r){const o=this.elements,c=e._x,d=e._y,m=e._z,g=e._w,v=c+c,f=d+d,s=m+m,x=c*v,A=c*f,L=c*s,M=d*f,b=d*s,D=m*s,U=g*v,S=g*f,P=g*s,G=r.x,J=r.y,tt=r.z;return o[0]=(1-(M+D))*G,o[1]=(A+P)*G,o[2]=(L-S)*G,o[3]=0,o[4]=(A-P)*J,o[5]=(1-(x+D))*J,o[6]=(b+U)*J,o[7]=0,o[8]=(L+S)*tt,o[9]=(b-U)*tt,o[10]=(1-(x+M))*tt,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,r){const o=this.elements;let c=Fn.set(o[0],o[1],o[2]).length();const d=Fn.set(o[4],o[5],o[6]).length(),m=Fn.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],_i.copy(this);const v=1/c,f=1/d,s=1/m;return _i.elements[0]*=v,_i.elements[1]*=v,_i.elements[2]*=v,_i.elements[4]*=f,_i.elements[5]*=f,_i.elements[6]*=f,_i.elements[8]*=s,_i.elements[9]*=s,_i.elements[10]*=s,e.setFromRotationMatrix(_i),r.x=c,r.y=d,r.z=m,this}makePerspective(t,e,r,o,c,d){d===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const m=this.elements,g=2*c/(e-t),v=2*c/(r-o),f=(e+t)/(e-t),s=(r+o)/(r-o),x=-(d+c)/(d-c),A=-2*d*c/(d-c);return m[0]=g,m[4]=0,m[8]=f,m[12]=0,m[1]=0,m[5]=v,m[9]=s,m[13]=0,m[2]=0,m[6]=0,m[10]=x,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,e,r,o,c,d){const m=this.elements,g=1/(e-t),v=1/(r-o),f=1/(d-c),s=(e+t)*g,x=(r+o)*v,A=(d+c)*f;return m[0]=2*g,m[4]=0,m[8]=0,m[12]=-s,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-x,m[2]=0,m[6]=0,m[10]=-2*f,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<16;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const Fn=new K,_i=new Oe,yc=new K(0,0,0),xc=new K(1,1,1),Zi=new K,Pr=new K,ei=new K,Ho=new Oe,Wo=new bn;class gr{constructor(t=0,e=0,r=0,o=gr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,o=this._order){return this._x=t,this._y=e,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const o=t.elements,c=o[0],d=o[4],m=o[8],g=o[1],v=o[5],f=o[9],s=o[2],x=o[6],A=o[10];switch(e){case"XYZ":this._y=Math.asin(Ke(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-f,A),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,v),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(m,A),this._z=Math.atan2(g,v)):(this._y=Math.atan2(-s,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-s,A),this._z=Math.atan2(-d,v)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(x,A),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,v));break;case"YZX":this._z=Math.asin(Ke(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-f,v),this._y=Math.atan2(-s,c)):(this._x=0,this._y=Math.atan2(m,A));break;case"XZY":this._z=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,v),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-f,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Ho.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ho,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}gr.DefaultOrder="XYZ";gr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Zs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bc=0;const qo=new K,zn=new bn,Fi=new Oe,Ir=new K,lr=new K,Ac=new K,Mc=new bn,Xo=new K(1,0,0),Yo=new K(0,1,0),jo=new K(0,0,1),wc={type:"added"},Jo={type:"removed"};class hi extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hi.DefaultUp.clone();const t=new K,e=new gr,r=new bn,o=new K(1,1,1);function c(){r.setFromEuler(e,!1)}function d(){e.setFromQuaternion(r,void 0,!1)}e._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Oe},normalMatrix:{value:new li}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=hi.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.multiply(zn),this}rotateOnWorldAxis(t,e){return zn.setFromAxisAngle(t,e),this.quaternion.premultiply(zn),this}rotateX(t){return this.rotateOnAxis(Xo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(jo,t)}translateOnAxis(t,e){return qo.copy(t).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(jo,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?Ir.copy(t):Ir.set(t,e,r);const o=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(lr,Ir,this.up):Fi.lookAt(Ir,lr,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),zn.setFromRotationMatrix(Fi),this.quaternion.premultiply(zn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(wc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jo)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Jo)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(t,e);if(d!==void 0)return d}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Ac),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Mc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let v=0,f=g.length;v<f;v++){const s=g[v];c(t.shapes,s)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,v=this.material.length;g<v;g++)m.push(c(t.materials,this.material[g]));o.material=m}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let m=0;m<this.children.length;m++)o.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];o.animations.push(c(t.animations,g))}}if(e){const m=d(t.geometries),g=d(t.materials),v=d(t.textures),f=d(t.images),s=d(t.shapes),x=d(t.skeletons),A=d(t.animations),L=d(t.nodes);m.length>0&&(r.geometries=m),g.length>0&&(r.materials=g),v.length>0&&(r.textures=v),f.length>0&&(r.images=f),s.length>0&&(r.shapes=s),x.length>0&&(r.skeletons=x),A.length>0&&(r.animations=A),L.length>0&&(r.nodes=L)}return r.object=o,r;function d(m){const g=[];for(const v in m){const f=m[v];delete f.metadata,g.push(f)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}hi.DefaultUp=new K(0,1,0);hi.DefaultMatrixAutoUpdate=!0;const vi=new K,zi=new K,xs=new K,Ni=new K,Nn=new K,On=new K,Zo=new K,bs=new K,As=new K,Ms=new K;class Ui{constructor(t=new K,e=new K,r=new K){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,o){o.subVectors(r,e),vi.subVectors(t,e),o.cross(vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,e,r,o,c){vi.subVectors(o,e),zi.subVectors(r,e),xs.subVectors(t,e);const d=vi.dot(vi),m=vi.dot(zi),g=vi.dot(xs),v=zi.dot(zi),f=zi.dot(xs),s=d*v-m*m;if(s===0)return c.set(-2,-1,-1);const x=1/s,A=(v*g-m*f)*x,L=(d*f-m*g)*x;return c.set(1-A-L,L,A)}static containsPoint(t,e,r,o){return this.getBarycoord(t,e,r,o,Ni),Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(t,e,r,o,c,d,m,g){return this.getBarycoord(t,e,r,o,Ni),g.set(0,0),g.addScaledVector(c,Ni.x),g.addScaledVector(d,Ni.y),g.addScaledVector(m,Ni.z),g}static isFrontFacing(t,e,r,o){return vi.subVectors(r,e),zi.subVectors(t,e),vi.cross(zi).dot(o)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,o){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,r,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),vi.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ui.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,r,o,c){return Ui.getUV(t,this.a,this.b,this.c,e,r,o,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,o=this.b,c=this.c;let d,m;Nn.subVectors(o,r),On.subVectors(c,r),bs.subVectors(t,r);const g=Nn.dot(bs),v=On.dot(bs);if(g<=0&&v<=0)return e.copy(r);As.subVectors(t,o);const f=Nn.dot(As),s=On.dot(As);if(f>=0&&s<=f)return e.copy(o);const x=g*s-f*v;if(x<=0&&g>=0&&f<=0)return d=g/(g-f),e.copy(r).addScaledVector(Nn,d);Ms.subVectors(t,c);const A=Nn.dot(Ms),L=On.dot(Ms);if(L>=0&&A<=L)return e.copy(c);const M=A*v-g*L;if(M<=0&&v>=0&&L<=0)return m=v/(v-L),e.copy(r).addScaledVector(On,m);const b=f*L-A*s;if(b<=0&&s-f>=0&&A-L>=0)return Zo.subVectors(c,o),m=(s-f)/(s-f+(A-L)),e.copy(o).addScaledVector(Zo,m);const D=1/(b+M+x);return d=M*D,m=x*D,e.copy(r).addScaledVector(Nn,d).addScaledVector(On,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Sc=0;class yr extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=jn,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=La,this.blendDst=Pa,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Al;continue}const o=this[e];if(o===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==jn&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(c){const d=[];for(const m in c){const g=c[m];delete g.metadata,d.push(g)}return d}if(e){const c=o(t.textures),d=o(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const o=e.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=e[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xr extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new K,Dr=new le;class Bi{constructor(t,e,r){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r===!0,this.usage=zo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=e.array[r+o];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let d=t[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),d=new xe),e[r++]=d.r,e[r++]=d.g,e[r++]=d.b}return this}copyVector2sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let d=t[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),d=new le),e[r++]=d.x,e[r++]=d.y}return this}copyVector3sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let d=t[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),d=new K),e[r++]=d.x,e[r++]=d.y,e[r++]=d.z}return this}copyVector4sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let d=t[o];d===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),d=new Fe),e[r++]=d.x,e[r++]=d.y,e[r++]=d.z,e[r++]=d.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,o){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,e,r,o,c){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Ga extends Bi{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class Ha extends Bi{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class vn extends Bi{constructor(t,e,r){super(new Float32Array(t),e,r)}}let Cc=0;const oi=new Oe,ws=new hi,Un=new K,ii=new vr,cr=new vr,Re=new K;class wn extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fa(t)?Ha:Ga)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new li().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,r){return oi.makeTranslation(t,e,r),this.applyMatrix4(oi),this}scale(t,e,r){return oi.makeScale(t,e,r),this.applyMatrix4(oi),this}lookAt(t){return ws.lookAt(t),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Un).negate(),this.translate(Un.x,Un.y,Un.z),this}setFromPoints(t){const e=[];for(let r=0,o=t.length;r<o;r++){const c=t[r];e.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new vn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const c=e[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let c=0,d=e.length;c<d;c++){const m=e[c];cr.setFromBufferAttribute(m),this.morphTargetsRelative?(Re.addVectors(ii.min,cr.min),ii.expandByPoint(Re),Re.addVectors(ii.max,cr.max),ii.expandByPoint(Re)):(ii.expandByPoint(cr.min),ii.expandByPoint(cr.max))}ii.getCenter(r);let o=0;for(let c=0,d=t.count;c<d;c++)Re.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(Re));if(e)for(let c=0,d=e.length;c<d;c++){const m=e[c],g=this.morphTargetsRelative;for(let v=0,f=m.count;v<f;v++)Re.fromBufferAttribute(m,v),g&&(Un.fromBufferAttribute(t,v),Re.add(Un)),o=Math.max(o,r.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,o=e.position.array,c=e.normal.array,d=e.uv.array,m=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*m),4));const g=this.getAttribute("tangent").array,v=[],f=[];for(let lt=0;lt<m;lt++)v[lt]=new K,f[lt]=new K;const s=new K,x=new K,A=new K,L=new le,M=new le,b=new le,D=new K,U=new K;function S(lt,nt,At){s.fromArray(o,lt*3),x.fromArray(o,nt*3),A.fromArray(o,At*3),L.fromArray(d,lt*2),M.fromArray(d,nt*2),b.fromArray(d,At*2),x.sub(s),A.sub(s),M.sub(L),b.sub(L);const Pt=1/(M.x*b.y-b.x*M.y);!isFinite(Pt)||(D.copy(x).multiplyScalar(b.y).addScaledVector(A,-M.y).multiplyScalar(Pt),U.copy(A).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(Pt),v[lt].add(D),v[nt].add(D),v[At].add(D),f[lt].add(U),f[nt].add(U),f[At].add(U))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let lt=0,nt=P.length;lt<nt;++lt){const At=P[lt],Pt=At.start,Z=At.count;for(let ct=Pt,ot=Pt+Z;ct<ot;ct+=3)S(r[ct+0],r[ct+1],r[ct+2])}const G=new K,J=new K,tt=new K,O=new K;function X(lt){tt.fromArray(c,lt*3),O.copy(tt);const nt=v[lt];G.copy(nt),G.sub(tt.multiplyScalar(tt.dot(nt))).normalize(),J.crossVectors(O,nt);const Pt=J.dot(f[lt])<0?-1:1;g[lt*4]=G.x,g[lt*4+1]=G.y,g[lt*4+2]=G.z,g[lt*4+3]=Pt}for(let lt=0,nt=P.length;lt<nt;++lt){const At=P[lt],Pt=At.start,Z=At.count;for(let ct=Pt,ot=Pt+Z;ct<ot;ct+=3)X(r[ct+0]),X(r[ct+1]),X(r[ct+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Bi(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let x=0,A=r.count;x<A;x++)r.setXYZ(x,0,0,0);const o=new K,c=new K,d=new K,m=new K,g=new K,v=new K,f=new K,s=new K;if(t)for(let x=0,A=t.count;x<A;x+=3){const L=t.getX(x+0),M=t.getX(x+1),b=t.getX(x+2);o.fromBufferAttribute(e,L),c.fromBufferAttribute(e,M),d.fromBufferAttribute(e,b),f.subVectors(d,c),s.subVectors(o,c),f.cross(s),m.fromBufferAttribute(r,L),g.fromBufferAttribute(r,M),v.fromBufferAttribute(r,b),m.add(f),g.add(f),v.add(f),r.setXYZ(L,m.x,m.y,m.z),r.setXYZ(M,g.x,g.y,g.z),r.setXYZ(b,v.x,v.y,v.z)}else for(let x=0,A=e.count;x<A;x+=3)o.fromBufferAttribute(e,x+0),c.fromBufferAttribute(e,x+1),d.fromBufferAttribute(e,x+2),f.subVectors(d,c),s.subVectors(o,c),f.cross(s),r.setXYZ(x+0,f.x,f.y,f.z),r.setXYZ(x+1,f.x,f.y,f.z),r.setXYZ(x+2,f.x,f.y,f.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(t.attributes[o]===void 0)continue;const d=r[o].array,m=t.attributes[o],g=m.array,v=m.itemSize*e,f=Math.min(g.length,d.length-v);for(let s=0,x=v;s<f;s++,x++)d[x]=g[s]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(m,g){const v=m.array,f=m.itemSize,s=m.normalized,x=new v.constructor(g.length*f);let A=0,L=0;for(let M=0,b=g.length;M<b;M++){m.isInterleavedBufferAttribute?A=g[M]*m.data.stride+m.offset:A=g[M]*f;for(let D=0;D<f;D++)x[L++]=v[A++]}return new Bi(x,f,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wn,r=this.index.array,o=this.attributes;for(const m in o){const g=o[m],v=t(g,r);e.setAttribute(m,v)}const c=this.morphAttributes;for(const m in c){const g=[],v=c[m];for(let f=0,s=v.length;f<s;f++){const x=v[f],A=t(x,r);g.push(A)}e.morphAttributes[m]=g}e.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const v=d[m];e.addGroup(v.start,v.count,v.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const v in g)g[v]!==void 0&&(t[v]=g[v]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const g in r){const v=r[g];t.data.attributes[g]=v.toJSON(t.data)}const o={};let c=!1;for(const g in this.morphAttributes){const v=this.morphAttributes[g],f=[];for(let s=0,x=v.length;s<x;s++){const A=v[s];f.push(A.toJSON(t.data))}f.length>0&&(o[g]=f,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere={center:m.center.toArray(),radius:m.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(e));const o=t.attributes;for(const v in o){const f=o[v];this.setAttribute(v,f.clone(e))}const c=t.morphAttributes;for(const v in c){const f=[],s=c[v];for(let x=0,A=s.length;x<A;x++)f.push(s[x].clone(e));this.morphAttributes[v]=f}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let v=0,f=d.length;v<f;v++){const s=d[v];this.addGroup(s.start,s.count,s.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new Oe,kn=new ka,Ss=new Js,Ki=new K,$i=new K,Qi=new K,Cs=new K,Ts=new K,Bs=new K,Vr=new K,Rr=new K,Fr=new K,zr=new le,Nr=new le,Or=new le,Es=new K,Ur=new K;class ki extends hi{constructor(t=new wn,e=new xr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const o=e[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const m=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}raycast(t,e){const r=this.geometry,o=this.material,c=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Ss.copy(r.boundingSphere),Ss.applyMatrix4(c),t.ray.intersectsSphere(Ss)===!1)||(Ko.copy(c).invert(),kn.copy(t.ray).applyMatrix4(Ko),r.boundingBox!==null&&kn.intersectsBox(r.boundingBox)===!1))return;let d;const m=r.index,g=r.attributes.position,v=r.morphAttributes.position,f=r.morphTargetsRelative,s=r.attributes.uv,x=r.attributes.uv2,A=r.groups,L=r.drawRange;if(m!==null)if(Array.isArray(o))for(let M=0,b=A.length;M<b;M++){const D=A[M],U=o[D.materialIndex],S=Math.max(D.start,L.start),P=Math.min(m.count,Math.min(D.start+D.count,L.start+L.count));for(let G=S,J=P;G<J;G+=3){const tt=m.getX(G),O=m.getX(G+1),X=m.getX(G+2);d=kr(this,U,t,kn,g,v,f,s,x,tt,O,X),d&&(d.faceIndex=Math.floor(G/3),d.face.materialIndex=D.materialIndex,e.push(d))}}else{const M=Math.max(0,L.start),b=Math.min(m.count,L.start+L.count);for(let D=M,U=b;D<U;D+=3){const S=m.getX(D),P=m.getX(D+1),G=m.getX(D+2);d=kr(this,o,t,kn,g,v,f,s,x,S,P,G),d&&(d.faceIndex=Math.floor(D/3),e.push(d))}}else if(g!==void 0)if(Array.isArray(o))for(let M=0,b=A.length;M<b;M++){const D=A[M],U=o[D.materialIndex],S=Math.max(D.start,L.start),P=Math.min(g.count,Math.min(D.start+D.count,L.start+L.count));for(let G=S,J=P;G<J;G+=3){const tt=G,O=G+1,X=G+2;d=kr(this,U,t,kn,g,v,f,s,x,tt,O,X),d&&(d.faceIndex=Math.floor(G/3),d.face.materialIndex=D.materialIndex,e.push(d))}}else{const M=Math.max(0,L.start),b=Math.min(g.count,L.start+L.count);for(let D=M,U=b;D<U;D+=3){const S=D,P=D+1,G=D+2;d=kr(this,o,t,kn,g,v,f,s,x,S,P,G),d&&(d.faceIndex=Math.floor(D/3),e.push(d))}}}}function Tc(h,t,e,r,o,c,d,m){let g;if(t.side===xi?g=r.intersectTriangle(d,c,o,!0,m):g=r.intersectTriangle(o,c,d,t.side!==Kn,m),g===null)return null;Ur.copy(m),Ur.applyMatrix4(h.matrixWorld);const v=e.ray.origin.distanceTo(Ur);return v<e.near||v>e.far?null:{distance:v,point:Ur.clone(),object:h}}function kr(h,t,e,r,o,c,d,m,g,v,f,s){Ki.fromBufferAttribute(o,v),$i.fromBufferAttribute(o,f),Qi.fromBufferAttribute(o,s);const x=h.morphTargetInfluences;if(c&&x){Vr.set(0,0,0),Rr.set(0,0,0),Fr.set(0,0,0);for(let L=0,M=c.length;L<M;L++){const b=x[L],D=c[L];b!==0&&(Cs.fromBufferAttribute(D,v),Ts.fromBufferAttribute(D,f),Bs.fromBufferAttribute(D,s),d?(Vr.addScaledVector(Cs,b),Rr.addScaledVector(Ts,b),Fr.addScaledVector(Bs,b)):(Vr.addScaledVector(Cs.sub(Ki),b),Rr.addScaledVector(Ts.sub($i),b),Fr.addScaledVector(Bs.sub(Qi),b)))}Ki.add(Vr),$i.add(Rr),Qi.add(Fr)}h.isSkinnedMesh&&(h.boneTransform(v,Ki),h.boneTransform(f,$i),h.boneTransform(s,Qi));const A=Tc(h,t,e,r,Ki,$i,Qi,Es);if(A){m&&(zr.fromBufferAttribute(m,v),Nr.fromBufferAttribute(m,f),Or.fromBufferAttribute(m,s),A.uv=Ui.getUV(Es,Ki,$i,Qi,zr,Nr,Or,new le)),g&&(zr.fromBufferAttribute(g,v),Nr.fromBufferAttribute(g,f),Or.fromBufferAttribute(g,s),A.uv2=Ui.getUV(Es,Ki,$i,Qi,zr,Nr,Or,new le));const L={a:v,b:f,c:s,normal:new K,materialIndex:0};Ui.getNormal(Ki,$i,Qi,L.normal),A.face=L}return A}class br extends wn{constructor(t=1,e=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const m=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const g=[],v=[],f=[],s=[];let x=0,A=0;L("z","y","x",-1,-1,r,e,t,d,c,0),L("z","y","x",1,-1,r,e,-t,d,c,1),L("x","z","y",1,1,t,r,e,o,d,2),L("x","z","y",1,-1,t,r,-e,o,d,3),L("x","y","z",1,-1,t,e,r,o,c,4),L("x","y","z",-1,-1,t,e,-r,o,c,5),this.setIndex(g),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(f,3)),this.setAttribute("uv",new vn(s,2));function L(M,b,D,U,S,P,G,J,tt,O,X){const lt=P/tt,nt=G/O,At=P/2,Pt=G/2,Z=J/2,ct=tt+1,ot=O+1;let rt=0,mt=0;const et=new K;for(let $=0;$<ot;$++){const Tt=$*nt-Pt;for(let pt=0;pt<ct;pt++){const Dt=pt*lt-At;et[M]=Dt*U,et[b]=Tt*S,et[D]=Z,v.push(et.x,et.y,et.z),et[M]=0,et[b]=0,et[D]=J>0?1:-1,f.push(et.x,et.y,et.z),s.push(pt/tt),s.push(1-$/O),rt+=1}}for(let $=0;$<O;$++)for(let Tt=0;Tt<tt;Tt++){const pt=x+Tt+ct*$,Dt=x+Tt+ct*($+1),Ot=x+(Tt+1)+ct*($+1),kt=x+(Tt+1)+ct*$;g.push(pt,Dt,kt),g.push(Dt,Ot,kt),mt+=6}m.addGroup(A,mt,X),A+=mt,x+=rt}}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(h){const t={};for(const e in h){t[e]={};for(const r in h[e]){const o=h[e][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[e][r]=o.clone():Array.isArray(o)?t[e][r]=o.slice():t[e][r]=o}}return t}function Ge(h){const t={};for(let e=0;e<h.length;e++){const r=er(h[e]);for(const o in r)t[o]=r[o]}return t}const Bc={clone:er,merge:Ge};var Ec=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ec,this.fragmentShader=Lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?e.uniforms[o]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?e.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?e.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?e.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?e.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?e.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?e.uniforms[o]={type:"m4",value:d.toArray()}:e.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class Wa extends hi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class gi extends Wa{constructor(t=50,e=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,r,o,c,d){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,r=2*e,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,v=d.fullHeight;c+=d.offsetX*o/g,e-=d.offsetY*r/v,o*=d.width/g,r*=d.height/v}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,e,e-r,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gn=90,Hn=1;class Pc extends hi{constructor(t,e,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new gi(Gn,Hn,t,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new K(1,0,0)),this.add(o);const c=new gi(Gn,Hn,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new K(-1,0,0)),this.add(c);const d=new gi(Gn,Hn,t,e);d.layers=this.layers,d.up.set(0,0,1),d.lookAt(new K(0,1,0)),this.add(d);const m=new gi(Gn,Hn,t,e);m.layers=this.layers,m.up.set(0,0,-1),m.lookAt(new K(0,-1,0)),this.add(m);const g=new gi(Gn,Hn,t,e);g.layers=this.layers,g.up.set(0,-1,0),g.lookAt(new K(0,0,1)),this.add(g);const v=new gi(Gn,Hn,t,e);v.layers=this.layers,v.up.set(0,-1,0),v.lookAt(new K(0,0,-1)),this.add(v)}update(t,e){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,c,d,m,g,v]=this.children,f=t.getRenderTarget(),s=t.toneMapping,x=t.xr.enabled;t.toneMapping=Gi,t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0),t.render(e,o),t.setRenderTarget(r,1),t.render(e,c),t.setRenderTarget(r,2),t.render(e,d),t.setRenderTarget(r,3),t.render(e,m),t.setRenderTarget(r,4),t.render(e,g),r.texture.generateMipmaps=A,t.setRenderTarget(r,5),t.render(e,v),t.setRenderTarget(f),t.toneMapping=s,t.xr.enabled=x,r.texture.needsPMREMUpdate=!0}}class qa extends ci{constructor(t,e,r,o,c,d,m,g,v,f){t=t!==void 0?t:[],e=e!==void 0?e:$n,super(t,e,r,o,c,d,m,g,v,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ic extends xn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new qa(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ai}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new br(5,5,5),c=new An({name:"CubemapFromEquirect",uniforms:er(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xi,blending:en});c.uniforms.tEquirect.value=e;const d=new ki(o,c),m=e.minFilter;return e.minFilter===Jr&&(e.minFilter=ai),new Pc(1,10,this).update(t,d),e.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(t,e,r,o){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(e,r,o);t.setRenderTarget(c)}}const Ls=new K,Dc=new K,Vc=new li;class cn{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,o){return this.normal.set(t,e,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const o=Ls.subVectors(r,e).cross(Dc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const r=t.delta(Ls),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:e.copy(r).multiplyScalar(c).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||Vc.getNormalMatrix(t),o=this.coplanarPoint(Ls).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Js,Gr=new K;class Xa{constructor(t=new cn,e=new cn,r=new cn,o=new cn,c=new cn,d=new cn){this.planes=[t,e,r,o,c,d]}set(t,e,r,o,c,d){const m=this.planes;return m[0].copy(t),m[1].copy(e),m[2].copy(r),m[3].copy(o),m[4].copy(c),m[5].copy(d),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t){const e=this.planes,r=t.elements,o=r[0],c=r[1],d=r[2],m=r[3],g=r[4],v=r[5],f=r[6],s=r[7],x=r[8],A=r[9],L=r[10],M=r[11],b=r[12],D=r[13],U=r[14],S=r[15];return e[0].setComponents(m-o,s-g,M-x,S-b).normalize(),e[1].setComponents(m+o,s+g,M+x,S+b).normalize(),e[2].setComponents(m+c,s+v,M+A,S+D).normalize(),e[3].setComponents(m-c,s-v,M-A,S-D).normalize(),e[4].setComponents(m-d,s-f,M-L,S-U).normalize(),e[5].setComponents(m+d,s+f,M+L,S+U).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const o=e[r];if(Gr.x=o.normal.x>0?t.max.x:t.min.x,Gr.y=o.normal.y>0?t.max.y:t.min.y,Gr.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ya(){let h=null,t=!1,e=null,r=null;function o(c,d){e(c,d),r=h.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(r=h.requestAnimationFrame(o),t=!0)},stop:function(){h.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){h=c}}}function Rc(h,t){const e=t.isWebGL2,r=new WeakMap;function o(v,f){const s=v.array,x=v.usage,A=h.createBuffer();h.bindBuffer(f,A),h.bufferData(f,s,x),v.onUploadCallback();let L;if(s instanceof Float32Array)L=5126;else if(s instanceof Uint16Array)if(v.isFloat16BufferAttribute)if(e)L=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else L=5123;else if(s instanceof Int16Array)L=5122;else if(s instanceof Uint32Array)L=5125;else if(s instanceof Int32Array)L=5124;else if(s instanceof Int8Array)L=5120;else if(s instanceof Uint8Array)L=5121;else if(s instanceof Uint8ClampedArray)L=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:A,type:L,bytesPerElement:s.BYTES_PER_ELEMENT,version:v.version}}function c(v,f,s){const x=f.array,A=f.updateRange;h.bindBuffer(s,v),A.count===-1?h.bufferSubData(s,0,x):(e?h.bufferSubData(s,A.offset*x.BYTES_PER_ELEMENT,x,A.offset,A.count):h.bufferSubData(s,A.offset*x.BYTES_PER_ELEMENT,x.subarray(A.offset,A.offset+A.count)),A.count=-1)}function d(v){return v.isInterleavedBufferAttribute&&(v=v.data),r.get(v)}function m(v){v.isInterleavedBufferAttribute&&(v=v.data);const f=r.get(v);f&&(h.deleteBuffer(f.buffer),r.delete(v))}function g(v,f){if(v.isGLBufferAttribute){const x=r.get(v);(!x||x.version<v.version)&&r.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}v.isInterleavedBufferAttribute&&(v=v.data);const s=r.get(v);s===void 0?r.set(v,o(v,f)):s.version<v.version&&(c(s.buffer,v,f),s.version=v.version)}return{get:d,remove:m,update:g}}class Zr extends wn{constructor(t=1,e=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:o};const c=t/2,d=e/2,m=Math.floor(r),g=Math.floor(o),v=m+1,f=g+1,s=t/m,x=e/g,A=[],L=[],M=[],b=[];for(let D=0;D<f;D++){const U=D*x-d;for(let S=0;S<v;S++){const P=S*s-c;L.push(P,-U,0),M.push(0,0,1),b.push(S/m),b.push(1-D/g)}}for(let D=0;D<g;D++)for(let U=0;U<m;U++){const S=U+v*D,P=U+v*(D+1),G=U+1+v*(D+1),J=U+1+v*D;A.push(S,P,J),A.push(P,G,J)}this.setIndex(A),this.setAttribute("position",new vn(L,3)),this.setAttribute("normal",new vn(M,3)),this.setAttribute("uv",new vn(b,2))}static fromJSON(t){return new Zr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gc="vec3 transformed = vec3( position );",Hc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wc=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,qc=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Xc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,xh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,bh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ah=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Mh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ch=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Eh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Lh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ph=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jh=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,su=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,du=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,pu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_u=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,gu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Au=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wu=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Su=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Cu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Tu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Eu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pu=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Du=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zu=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Nu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ou=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Uu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Hu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ju=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ju=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$u=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ce={alphamap_fragment:Fc,alphamap_pars_fragment:zc,alphatest_fragment:Nc,alphatest_pars_fragment:Oc,aomap_fragment:Uc,aomap_pars_fragment:kc,begin_vertex:Gc,beginnormal_vertex:Hc,bsdfs:Wc,iridescence_fragment:qc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:jc,clipping_planes_pars_vertex:Jc,clipping_planes_vertex:Zc,color_fragment:Kc,color_pars_fragment:$c,color_pars_vertex:Qc,color_vertex:th,common:eh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:nh,displacementmap_pars_vertex:rh,displacementmap_vertex:sh,emissivemap_fragment:oh,emissivemap_pars_fragment:ah,encodings_fragment:lh,encodings_pars_fragment:ch,envmap_fragment:hh,envmap_common_pars_fragment:uh,envmap_pars_fragment:mh,envmap_pars_vertex:dh,envmap_physical_pars_fragment:wh,envmap_vertex:fh,fog_vertex:ph,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:gh,gradientmap_pars_fragment:yh,lightmap_fragment:xh,lightmap_pars_fragment:bh,lights_lambert_vertex:Ah,lights_pars_begin:Mh,lights_toon_fragment:Sh,lights_toon_pars_fragment:Ch,lights_phong_fragment:Th,lights_phong_pars_fragment:Bh,lights_physical_fragment:Eh,lights_physical_pars_fragment:Lh,lights_fragment_begin:Ph,lights_fragment_maps:Ih,lights_fragment_end:Dh,logdepthbuf_fragment:Vh,logdepthbuf_pars_fragment:Rh,logdepthbuf_pars_vertex:Fh,logdepthbuf_vertex:zh,map_fragment:Nh,map_pars_fragment:Oh,map_particle_fragment:Uh,map_particle_pars_fragment:kh,metalnessmap_fragment:Gh,metalnessmap_pars_fragment:Hh,morphcolor_vertex:Wh,morphnormal_vertex:qh,morphtarget_pars_vertex:Xh,morphtarget_vertex:Yh,normal_fragment_begin:jh,normal_fragment_maps:Jh,normal_pars_fragment:Zh,normal_pars_vertex:Kh,normal_vertex:$h,normalmap_pars_fragment:Qh,clearcoat_normal_fragment_begin:tu,clearcoat_normal_fragment_maps:eu,clearcoat_pars_fragment:iu,iridescence_pars_fragment:nu,output_fragment:ru,packing:su,premultiplied_alpha_fragment:ou,project_vertex:au,dithering_fragment:lu,dithering_pars_fragment:cu,roughnessmap_fragment:hu,roughnessmap_pars_fragment:uu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:du,shadowmap_vertex:fu,shadowmask_pars_fragment:pu,skinbase_vertex:_u,skinning_pars_vertex:vu,skinning_vertex:gu,skinnormal_vertex:yu,specularmap_fragment:xu,specularmap_pars_fragment:bu,tonemapping_fragment:Au,tonemapping_pars_fragment:Mu,transmission_fragment:wu,transmission_pars_fragment:Su,uv_pars_fragment:Cu,uv_pars_vertex:Tu,uv_vertex:Bu,uv2_pars_fragment:Eu,uv2_pars_vertex:Lu,uv2_vertex:Pu,worldpos_vertex:Iu,background_vert:Du,background_frag:Vu,cube_vert:Ru,cube_frag:Fu,depth_vert:zu,depth_frag:Nu,distanceRGBA_vert:Ou,distanceRGBA_frag:Uu,equirect_vert:ku,equirect_frag:Gu,linedashed_vert:Hu,linedashed_frag:Wu,meshbasic_vert:qu,meshbasic_frag:Xu,meshlambert_vert:Yu,meshlambert_frag:ju,meshmatcap_vert:Ju,meshmatcap_frag:Zu,meshnormal_vert:Ku,meshnormal_frag:$u,meshphong_vert:Qu,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:im,meshtoon_vert:nm,meshtoon_frag:rm,points_vert:sm,points_frag:om,shadow_vert:am,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},Ft={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new li},uv2Transform:{value:new li},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new li}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new li}}},Ci={basic:{uniforms:Ge([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Ge([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.fog,Ft.lights,{emissive:{value:new xe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Ge([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Ge([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Ge([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new xe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Ge([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Ge([Ft.points,Ft.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Ge([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Ge([Ft.common,Ft.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Ge([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Ge([Ft.sprite,Ft.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new li},t2D:{value:null}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},cube:{uniforms:Ge([Ft.envmap,{opacity:{value:1}}]),vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Ge([Ft.common,Ft.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Ge([Ft.lights,Ft.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ci.physical={uniforms:Ge([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};function um(h,t,e,r,o,c){const d=new xe(0);let m=o===!0?0:1,g,v,f=null,s=0,x=null;function A(M,b){let D=!1,U=b.isScene===!0?b.background:null;U&&U.isTexture&&(U=t.get(U));const S=h.xr,P=S.getSession&&S.getSession();P&&P.environmentBlendMode==="additive"&&(U=null),U===null?L(d,m):U&&U.isColor&&(L(U,1),D=!0),(h.autoClear||D)&&h.clear(h.autoClearColor,h.autoClearDepth,h.autoClearStencil),U&&(U.isCubeTexture||U.mapping===jr)?(v===void 0&&(v=new ki(new br(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:er(Ci.cube.uniforms),vertexShader:Ci.cube.vertexShader,fragmentShader:Ci.cube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,J,tt){this.matrixWorld.copyPosition(tt.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(v)),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,(f!==U||s!==U.version||x!==h.toneMapping)&&(v.material.needsUpdate=!0,f=U,s=U.version,x=h.toneMapping),v.layers.enableAll(),M.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(g===void 0&&(g=new ki(new Zr(2,2),new An({name:"BackgroundMaterial",uniforms:er(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=U,U.matrixAutoUpdate===!0&&U.updateMatrix(),g.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||s!==U.version||x!==h.toneMapping)&&(g.material.needsUpdate=!0,f=U,s=U.version,x=h.toneMapping),g.layers.enableAll(),M.unshift(g,g.geometry,g.material,0,0,null))}function L(M,b){e.buffers.color.setClear(M.r,M.g,M.b,b,c)}return{getClearColor:function(){return d},setClearColor:function(M,b=1){d.set(M),m=b,L(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(M){m=M,L(d,m)},render:A}}function mm(h,t,e,r){const o=h.getParameter(34921),c=r.isWebGL2?null:t.get("OES_vertex_array_object"),d=r.isWebGL2||c!==null,m={},g=b(null);let v=g,f=!1;function s(Z,ct,ot,rt,mt){let et=!1;if(d){const $=M(rt,ot,ct);v!==$&&(v=$,A(v.object)),et=D(Z,rt,ot,mt),et&&U(Z,rt,ot,mt)}else{const $=ct.wireframe===!0;(v.geometry!==rt.id||v.program!==ot.id||v.wireframe!==$)&&(v.geometry=rt.id,v.program=ot.id,v.wireframe=$,et=!0)}mt!==null&&e.update(mt,34963),(et||f)&&(f=!1,O(Z,ct,ot,rt),mt!==null&&h.bindBuffer(34963,e.get(mt).buffer))}function x(){return r.isWebGL2?h.createVertexArray():c.createVertexArrayOES()}function A(Z){return r.isWebGL2?h.bindVertexArray(Z):c.bindVertexArrayOES(Z)}function L(Z){return r.isWebGL2?h.deleteVertexArray(Z):c.deleteVertexArrayOES(Z)}function M(Z,ct,ot){const rt=ot.wireframe===!0;let mt=m[Z.id];mt===void 0&&(mt={},m[Z.id]=mt);let et=mt[ct.id];et===void 0&&(et={},mt[ct.id]=et);let $=et[rt];return $===void 0&&($=b(x()),et[rt]=$),$}function b(Z){const ct=[],ot=[],rt=[];for(let mt=0;mt<o;mt++)ct[mt]=0,ot[mt]=0,rt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ct,enabledAttributes:ot,attributeDivisors:rt,object:Z,attributes:{},index:null}}function D(Z,ct,ot,rt){const mt=v.attributes,et=ct.attributes;let $=0;const Tt=ot.getAttributes();for(const pt in Tt)if(Tt[pt].location>=0){const Ot=mt[pt];let kt=et[pt];if(kt===void 0&&(pt==="instanceMatrix"&&Z.instanceMatrix&&(kt=Z.instanceMatrix),pt==="instanceColor"&&Z.instanceColor&&(kt=Z.instanceColor)),Ot===void 0||Ot.attribute!==kt||kt&&Ot.data!==kt.data)return!0;$++}return v.attributesNum!==$||v.index!==rt}function U(Z,ct,ot,rt){const mt={},et=ct.attributes;let $=0;const Tt=ot.getAttributes();for(const pt in Tt)if(Tt[pt].location>=0){let Ot=et[pt];Ot===void 0&&(pt==="instanceMatrix"&&Z.instanceMatrix&&(Ot=Z.instanceMatrix),pt==="instanceColor"&&Z.instanceColor&&(Ot=Z.instanceColor));const kt={};kt.attribute=Ot,Ot&&Ot.data&&(kt.data=Ot.data),mt[pt]=kt,$++}v.attributes=mt,v.attributesNum=$,v.index=rt}function S(){const Z=v.newAttributes;for(let ct=0,ot=Z.length;ct<ot;ct++)Z[ct]=0}function P(Z){G(Z,0)}function G(Z,ct){const ot=v.newAttributes,rt=v.enabledAttributes,mt=v.attributeDivisors;ot[Z]=1,rt[Z]===0&&(h.enableVertexAttribArray(Z),rt[Z]=1),mt[Z]!==ct&&((r.isWebGL2?h:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Z,ct),mt[Z]=ct)}function J(){const Z=v.newAttributes,ct=v.enabledAttributes;for(let ot=0,rt=ct.length;ot<rt;ot++)ct[ot]!==Z[ot]&&(h.disableVertexAttribArray(ot),ct[ot]=0)}function tt(Z,ct,ot,rt,mt,et){r.isWebGL2===!0&&(ot===5124||ot===5125)?h.vertexAttribIPointer(Z,ct,ot,mt,et):h.vertexAttribPointer(Z,ct,ot,rt,mt,et)}function O(Z,ct,ot,rt){if(r.isWebGL2===!1&&(Z.isInstancedMesh||rt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;S();const mt=rt.attributes,et=ot.getAttributes(),$=ct.defaultAttributeValues;for(const Tt in et){const pt=et[Tt];if(pt.location>=0){let Dt=mt[Tt];if(Dt===void 0&&(Tt==="instanceMatrix"&&Z.instanceMatrix&&(Dt=Z.instanceMatrix),Tt==="instanceColor"&&Z.instanceColor&&(Dt=Z.instanceColor)),Dt!==void 0){const Ot=Dt.normalized,kt=Dt.itemSize,dt=e.get(Dt);if(dt===void 0)continue;const Ce=dt.buffer,ae=dt.type,Zt=dt.bytesPerElement;if(Dt.isInterleavedBufferAttribute){const xt=Dt.data,ue=xt.stride,oe=Dt.offset;if(xt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<pt.locationSize;Yt++)G(pt.location+Yt,xt.meshPerAttribute);Z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Yt=0;Yt<pt.locationSize;Yt++)P(pt.location+Yt);h.bindBuffer(34962,Ce);for(let Yt=0;Yt<pt.locationSize;Yt++)tt(pt.location+Yt,kt/pt.locationSize,ae,Ot,ue*Zt,(oe+kt/pt.locationSize*Yt)*Zt)}else{if(Dt.isInstancedBufferAttribute){for(let xt=0;xt<pt.locationSize;xt++)G(pt.location+xt,Dt.meshPerAttribute);Z.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let xt=0;xt<pt.locationSize;xt++)P(pt.location+xt);h.bindBuffer(34962,Ce);for(let xt=0;xt<pt.locationSize;xt++)tt(pt.location+xt,kt/pt.locationSize,ae,Ot,kt*Zt,kt/pt.locationSize*xt*Zt)}}else if($!==void 0){const Ot=$[Tt];if(Ot!==void 0)switch(Ot.length){case 2:h.vertexAttrib2fv(pt.location,Ot);break;case 3:h.vertexAttrib3fv(pt.location,Ot);break;case 4:h.vertexAttrib4fv(pt.location,Ot);break;default:h.vertexAttrib1fv(pt.location,Ot)}}}}J()}function X(){At();for(const Z in m){const ct=m[Z];for(const ot in ct){const rt=ct[ot];for(const mt in rt)L(rt[mt].object),delete rt[mt];delete ct[ot]}delete m[Z]}}function lt(Z){if(m[Z.id]===void 0)return;const ct=m[Z.id];for(const ot in ct){const rt=ct[ot];for(const mt in rt)L(rt[mt].object),delete rt[mt];delete ct[ot]}delete m[Z.id]}function nt(Z){for(const ct in m){const ot=m[ct];if(ot[Z.id]===void 0)continue;const rt=ot[Z.id];for(const mt in rt)L(rt[mt].object),delete rt[mt];delete ot[Z.id]}}function At(){Pt(),f=!0,v!==g&&(v=g,A(v.object))}function Pt(){g.geometry=null,g.program=null,g.wireframe=!1}return{setup:s,reset:At,resetDefaultState:Pt,dispose:X,releaseStatesOfGeometry:lt,releaseStatesOfProgram:nt,initAttributes:S,enableAttribute:P,disableUnusedAttributes:J}}function dm(h,t,e,r){const o=r.isWebGL2;let c;function d(v){c=v}function m(v,f){h.drawArrays(c,v,f),e.update(f,c,1)}function g(v,f,s){if(s===0)return;let x,A;if(o)x=h,A="drawArraysInstanced";else if(x=t.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[A](c,v,f,s),e.update(f,c,s)}this.setMode=d,this.render=m,this.renderInstances=g}function fm(h,t,e){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");r=h.getParameter(tt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(tt){if(tt==="highp"){if(h.getShaderPrecisionFormat(35633,36338).precision>0&&h.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";tt="mediump"}return tt==="mediump"&&h.getShaderPrecisionFormat(35633,36337).precision>0&&h.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&h instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&h instanceof WebGL2ComputeRenderingContext;let m=e.precision!==void 0?e.precision:"highp";const g=c(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=d||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,s=h.getParameter(34930),x=h.getParameter(35660),A=h.getParameter(3379),L=h.getParameter(34076),M=h.getParameter(34921),b=h.getParameter(36347),D=h.getParameter(36348),U=h.getParameter(36349),S=x>0,P=d||t.has("OES_texture_float"),G=S&&P,J=d?h.getParameter(36183):0;return{isWebGL2:d,drawBuffers:v,getMaxAnisotropy:o,getMaxPrecision:c,precision:m,logarithmicDepthBuffer:f,maxTextures:s,maxVertexTextures:x,maxTextureSize:A,maxCubemapSize:L,maxAttributes:M,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:S,floatFragmentTextures:P,floatVertexTextures:G,maxSamples:J}}function pm(h){const t=this;let e=null,r=0,o=!1,c=!1;const d=new cn,m=new li,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(s,x,A){const L=s.length!==0||x||r!==0||o;return o=x,e=f(s,A,0),r=s.length,L},this.beginShadows=function(){c=!0,f(null)},this.endShadows=function(){c=!1,v()},this.setState=function(s,x,A){const L=s.clippingPlanes,M=s.clipIntersection,b=s.clipShadows,D=h.get(s);if(!o||L===null||L.length===0||c&&!b)c?f(null):v();else{const U=c?0:r,S=U*4;let P=D.clippingState||null;g.value=P,P=f(L,x,S,A);for(let G=0;G!==S;++G)P[G]=e[G];D.clippingState=P,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function v(){g.value!==e&&(g.value=e,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function f(s,x,A,L){const M=s!==null?s.length:0;let b=null;if(M!==0){if(b=g.value,L!==!0||b===null){const D=A+M*4,U=x.matrixWorldInverse;m.getNormalMatrix(U),(b===null||b.length<D)&&(b=new Float32Array(D));for(let S=0,P=A;S!==M;++S,P+=4)d.copy(s[S]).applyMatrix4(U,m),d.normal.toArray(b,P),b[P+3]=d.constant}g.value=b,g.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,b}}function _m(h){let t=new WeakMap;function e(d,m){return m===Os?d.mapping=$n:m===Us&&(d.mapping=Qn),d}function r(d){if(d&&d.isTexture&&d.isRenderTargetTexture===!1){const m=d.mapping;if(m===Os||m===Us)if(t.has(d)){const g=t.get(d).texture;return e(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new Ic(g.height/2);return v.fromEquirectangularTexture(h,d),t.set(d,v),d.addEventListener("dispose",o),e(v.texture,d.mapping)}else return null}}return d}function o(d){const m=d.target;m.removeEventListener("dispose",o);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class ja extends Wa{constructor(t=-1,e=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,d=r+t,m=o+e,g=o-e;if(this.view!==null&&this.view.enabled){const v=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=v*this.view.offsetX,d=c+v*this.view.width,m-=f*this.view.offsetY,g=m-f*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,g,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yn=4,$o=[.125,.215,.35,.446,.526,.582],un=20,Ps=new ja,Qo=new xe;let Is=null;const hn=(1+Math.sqrt(5))/2,qn=1/hn,ta=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,hn,qn),new K(0,hn,-qn),new K(qn,0,hn),new K(-qn,0,hn),new K(hn,qn,0),new K(-hn,qn,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,o=100){Is=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,o,c),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Is),t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Is=this._renderer.getRenderTarget();const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:pr,format:Ti,encoding:yn,depthBuffer:!1},o=ia(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ia(t,e,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vm(c)),this._blurMaterial=gm(c,t,e)}return o}_compileMaterial(t){const e=new ki(this._lodPlanes[0],t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,r,o){const m=new gi(90,1,e,r),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],f=this._renderer,s=f.autoClear,x=f.toneMapping;f.getClearColor(Qo),f.toneMapping=Gi,f.autoClear=!1;const A=new xr({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1}),L=new ki(new br,A);let M=!1;const b=t.background;b?b.isColor&&(A.color.copy(b),t.background=null,M=!0):(A.color.copy(Qo),M=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(m.up.set(0,g[D],0),m.lookAt(v[D],0,0)):U===1?(m.up.set(0,0,g[D]),m.lookAt(0,v[D],0)):(m.up.set(0,g[D],0),m.lookAt(0,0,v[D]));const S=this._cubeSize;Hr(o,U*S,D>2?S:0,S,S),f.setRenderTarget(o),M&&f.render(L,m),f.render(t,m)}L.geometry.dispose(),L.material.dispose(),f.toneMapping=x,f.autoClear=s,t.background=b}_textureToCubeUV(t,e){const r=this._renderer,o=t.mapping===$n||t.mapping===Qn;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=na());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new ki(this._lodPlanes[0],c),m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Hr(e,0,0,3*g,2*g),r.setRenderTarget(e),r.render(d,Ps)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),d=ta[(o-1)%ta.length];this._blur(t,o-1,o,c,d)}e.autoClear=r}_blur(t,e,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,e,r,o,"latitudinal",c),this._halfBlur(d,t,r,r,o,"longitudinal",c)}_halfBlur(t,e,r,o,c,d,m){const g=this._renderer,v=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,s=new ki(this._lodPlanes[o],v),x=v.uniforms,A=this._sizeLods[r]-1,L=isFinite(c)?Math.PI/(2*A):2*Math.PI/(2*un-1),M=c/L,b=isFinite(c)?1+Math.floor(f*M):un;b>un&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${un}`);const D=[];let U=0;for(let tt=0;tt<un;++tt){const O=tt/M,X=Math.exp(-O*O/2);D.push(X),tt===0?U+=X:tt<b&&(U+=2*X)}for(let tt=0;tt<D.length;tt++)D[tt]=D[tt]/U;x.envMap.value=t.texture,x.samples.value=b,x.weights.value=D,x.latitudinal.value=d==="latitudinal",m&&(x.poleAxis.value=m);const{_lodMax:S}=this;x.dTheta.value=L,x.mipInt.value=S-r;const P=this._sizeLods[o],G=3*P*(o>S-Yn?o-S+Yn:0),J=4*(this._cubeSize-P);Hr(e,G,J,3*P,2*P),g.setRenderTarget(e),g.render(s,Ps)}}function vm(h){const t=[],e=[],r=[];let o=h;const c=h-Yn+1+$o.length;for(let d=0;d<c;d++){const m=Math.pow(2,o);e.push(m);let g=1/m;d>h-Yn?g=$o[d-h+Yn-1]:d===0&&(g=0),r.push(g);const v=1/(m-2),f=-v,s=1+v,x=[f,f,s,f,s,s,f,f,s,s,f,s],A=6,L=6,M=3,b=2,D=1,U=new Float32Array(M*L*A),S=new Float32Array(b*L*A),P=new Float32Array(D*L*A);for(let J=0;J<A;J++){const tt=J%3*2/3-1,O=J>2?0:-1,X=[tt,O,0,tt+2/3,O,0,tt+2/3,O+1,0,tt,O,0,tt+2/3,O+1,0,tt,O+1,0];U.set(X,M*L*J),S.set(x,b*L*J);const lt=[J,J,J,J,J,J];P.set(lt,D*L*J)}const G=new wn;G.setAttribute("position",new Bi(U,M)),G.setAttribute("uv",new Bi(S,b)),G.setAttribute("faceIndex",new Bi(P,D)),t.push(G),o>Yn&&o--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function ia(h,t,e){const r=new xn(h,t,e);return r.texture.mapping=jr,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hr(h,t,e,r,o){h.viewport.set(t,e,r,o),h.scissor.set(t,e,r,o)}function gm(h,t,e){const r=new Float32Array(un),o=new K(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${h}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function na(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function ra(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(h){let t=new WeakMap,e=null;function r(m){if(m&&m.isTexture){const g=m.mapping,v=g===Os||g===Us,f=g===$n||g===Qn;if(v||f)if(m.isRenderTargetTexture&&m.needsPMREMUpdate===!0){m.needsPMREMUpdate=!1;let s=t.get(m);return e===null&&(e=new ea(h)),s=v?e.fromEquirectangular(m,s):e.fromCubemap(m,s),t.set(m,s),s.texture}else{if(t.has(m))return t.get(m).texture;{const s=m.image;if(v&&s&&s.height>0||f&&s&&o(s)){e===null&&(e=new ea(h));const x=v?e.fromEquirectangular(m):e.fromCubemap(m);return t.set(m,x),m.addEventListener("dispose",c),x.texture}else return null}}}return m}function o(m){let g=0;const v=6;for(let f=0;f<v;f++)m[f]!==void 0&&g++;return g===v}function c(m){const g=m.target;g.removeEventListener("dispose",c);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function d(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:d}}function xm(h){const t={};function e(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=h.getExtension("WEBGL_depth_texture")||h.getExtension("MOZ_WEBGL_depth_texture")||h.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=h.getExtension("WEBGL_compressed_texture_s3tc")||h.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=h.getExtension("WEBGL_compressed_texture_pvrtc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=h.getExtension(r)}return t[r]=o,o}return{has:function(r){return e(r)!==null},init:function(r){r.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(r){const o=e(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function bm(h,t,e,r){const o={},c=new WeakMap;function d(s){const x=s.target;x.index!==null&&t.remove(x.index);for(const L in x.attributes)t.remove(x.attributes[L]);x.removeEventListener("dispose",d),delete o[x.id];const A=c.get(x);A&&(t.remove(A),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function m(s,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,e.memory.geometries++),x}function g(s){const x=s.attributes;for(const L in x)t.update(x[L],34962);const A=s.morphAttributes;for(const L in A){const M=A[L];for(let b=0,D=M.length;b<D;b++)t.update(M[b],34962)}}function v(s){const x=[],A=s.index,L=s.attributes.position;let M=0;if(A!==null){const U=A.array;M=A.version;for(let S=0,P=U.length;S<P;S+=3){const G=U[S+0],J=U[S+1],tt=U[S+2];x.push(G,J,J,tt,tt,G)}}else{const U=L.array;M=L.version;for(let S=0,P=U.length/3-1;S<P;S+=3){const G=S+0,J=S+1,tt=S+2;x.push(G,J,J,tt,tt,G)}}const b=new(Fa(x)?Ha:Ga)(x,1);b.version=M;const D=c.get(s);D&&t.remove(D),c.set(s,b)}function f(s){const x=c.get(s);if(x){const A=s.index;A!==null&&x.version<A.version&&v(s)}else v(s);return c.get(s)}return{get:m,update:g,getWireframeAttribute:f}}function Am(h,t,e,r){const o=r.isWebGL2;let c;function d(x){c=x}let m,g;function v(x){m=x.type,g=x.bytesPerElement}function f(x,A){h.drawElements(c,A,m,x*g),e.update(A,c,1)}function s(x,A,L){if(L===0)return;let M,b;if(o)M=h,b="drawElementsInstanced";else if(M=t.get("ANGLE_instanced_arrays"),b="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](c,A,m,x*g,L),e.update(A,c,L)}this.setMode=d,this.setIndex=v,this.render=f,this.renderInstances=s}function Mm(h){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,m){switch(e.calls++,d){case 4:e.triangles+=m*(c/3);break;case 1:e.lines+=m*(c/2);break;case 3:e.lines+=m*(c-1);break;case 2:e.lines+=m*c;break;case 0:e.points+=m*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:r}}function wm(h,t){return h[0]-t[0]}function Sm(h,t){return Math.abs(t[1])-Math.abs(h[1])}function Ds(h,t){let e=1;const r=t.isInterleavedBufferAttribute?t.data.array:t.array;r instanceof Int8Array?e=127:r instanceof Uint8Array?e=255:r instanceof Uint16Array?e=65535:r instanceof Int16Array?e=32767:r instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),h.divideScalar(e)}function Cm(h,t,e){const r={},o=new Float32Array(8),c=new WeakMap,d=new Fe,m=[];for(let v=0;v<8;v++)m[v]=[v,0];function g(v,f,s,x){const A=v.morphTargetInfluences;if(t.isWebGL2===!0){const L=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,M=L!==void 0?L.length:0;let b=c.get(f);if(b===void 0||b.count!==M){let ct=function(){Pt.dispose(),c.delete(f),f.removeEventListener("dispose",ct)};b!==void 0&&b.texture.dispose();const S=f.morphAttributes.position!==void 0,P=f.morphAttributes.normal!==void 0,G=f.morphAttributes.color!==void 0,J=f.morphAttributes.position||[],tt=f.morphAttributes.normal||[],O=f.morphAttributes.color||[];let X=0;S===!0&&(X=1),P===!0&&(X=2),G===!0&&(X=3);let lt=f.attributes.position.count*X,nt=1;lt>t.maxTextureSize&&(nt=Math.ceil(lt/t.maxTextureSize),lt=t.maxTextureSize);const At=new Float32Array(lt*nt*4*M),Pt=new Ua(At,lt,nt,M);Pt.type=dn,Pt.needsUpdate=!0;const Z=X*4;for(let ot=0;ot<M;ot++){const rt=J[ot],mt=tt[ot],et=O[ot],$=lt*nt*4*ot;for(let Tt=0;Tt<rt.count;Tt++){const pt=Tt*Z;S===!0&&(d.fromBufferAttribute(rt,Tt),rt.normalized===!0&&Ds(d,rt),At[$+pt+0]=d.x,At[$+pt+1]=d.y,At[$+pt+2]=d.z,At[$+pt+3]=0),P===!0&&(d.fromBufferAttribute(mt,Tt),mt.normalized===!0&&Ds(d,mt),At[$+pt+4]=d.x,At[$+pt+5]=d.y,At[$+pt+6]=d.z,At[$+pt+7]=0),G===!0&&(d.fromBufferAttribute(et,Tt),et.normalized===!0&&Ds(d,et),At[$+pt+8]=d.x,At[$+pt+9]=d.y,At[$+pt+10]=d.z,At[$+pt+11]=et.itemSize===4?d.w:1)}}b={count:M,texture:Pt,size:new le(lt,nt)},c.set(f,b),f.addEventListener("dispose",ct)}let D=0;for(let S=0;S<A.length;S++)D+=A[S];const U=f.morphTargetsRelative?1:1-D;x.getUniforms().setValue(h,"morphTargetBaseInfluence",U),x.getUniforms().setValue(h,"morphTargetInfluences",A),x.getUniforms().setValue(h,"morphTargetsTexture",b.texture,e),x.getUniforms().setValue(h,"morphTargetsTextureSize",b.size)}else{const L=A===void 0?0:A.length;let M=r[f.id];if(M===void 0||M.length!==L){M=[];for(let P=0;P<L;P++)M[P]=[P,0];r[f.id]=M}for(let P=0;P<L;P++){const G=M[P];G[0]=P,G[1]=A[P]}M.sort(Sm);for(let P=0;P<8;P++)P<L&&M[P][1]?(m[P][0]=M[P][0],m[P][1]=M[P][1]):(m[P][0]=Number.MAX_SAFE_INTEGER,m[P][1]=0);m.sort(wm);const b=f.morphAttributes.position,D=f.morphAttributes.normal;let U=0;for(let P=0;P<8;P++){const G=m[P],J=G[0],tt=G[1];J!==Number.MAX_SAFE_INTEGER&&tt?(b&&f.getAttribute("morphTarget"+P)!==b[J]&&f.setAttribute("morphTarget"+P,b[J]),D&&f.getAttribute("morphNormal"+P)!==D[J]&&f.setAttribute("morphNormal"+P,D[J]),o[P]=tt,U+=tt):(b&&f.hasAttribute("morphTarget"+P)===!0&&f.deleteAttribute("morphTarget"+P),D&&f.hasAttribute("morphNormal"+P)===!0&&f.deleteAttribute("morphNormal"+P),o[P]=0)}const S=f.morphTargetsRelative?1:1-U;x.getUniforms().setValue(h,"morphTargetBaseInfluence",S),x.getUniforms().setValue(h,"morphTargetInfluences",o)}}return{update:g}}function Tm(h,t,e,r){let o=new WeakMap;function c(g){const v=r.render.frame,f=g.geometry,s=t.get(g,f);return o.get(s)!==v&&(t.update(s),o.set(s,v)),g.isInstancedMesh&&(g.hasEventListener("dispose",m)===!1&&g.addEventListener("dispose",m),e.update(g.instanceMatrix,34962),g.instanceColor!==null&&e.update(g.instanceColor,34962)),s}function d(){o=new WeakMap}function m(g){const v=g.target;v.removeEventListener("dispose",m),e.remove(v.instanceMatrix),v.instanceColor!==null&&e.remove(v.instanceColor)}return{update:c,dispose:d}}const Ja=new ci,Za=new Ua,Ka=new vc,$a=new qa,sa=[],oa=[],aa=new Float32Array(16),la=new Float32Array(9),ca=new Float32Array(4);function nr(h,t,e){const r=h[0];if(r<=0||r>0)return h;const o=t*e;let c=sa[o];if(c===void 0&&(c=new Float32Array(o),sa[o]=c),t!==0){r.toArray(c,0);for(let d=1,m=0;d!==t;++d)m+=e,h[d].toArray(c,m)}return c}function je(h,t){if(h.length!==t.length)return!1;for(let e=0,r=h.length;e<r;e++)if(h[e]!==t[e])return!1;return!0}function Je(h,t){for(let e=0,r=t.length;e<r;e++)h[e]=t[e]}function Kr(h,t){let e=oa[t];e===void 0&&(e=new Int32Array(t),oa[t]=e);for(let r=0;r!==t;++r)e[r]=h.allocateTextureUnit();return e}function Bm(h,t){const e=this.cache;e[0]!==t&&(h.uniform1f(this.addr,t),e[0]=t)}function Em(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(h.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;h.uniform2fv(this.addr,t),Je(e,t)}}function Lm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(h.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(h.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;h.uniform3fv(this.addr,t),Je(e,t)}}function Pm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(h.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;h.uniform4fv(this.addr,t),Je(e,t)}}function Im(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(je(e,t))return;h.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(je(e,r))return;ca.set(r),h.uniformMatrix2fv(this.addr,!1,ca),Je(e,r)}}function Dm(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(je(e,t))return;h.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(je(e,r))return;la.set(r),h.uniformMatrix3fv(this.addr,!1,la),Je(e,r)}}function Vm(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(je(e,t))return;h.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(je(e,r))return;aa.set(r),h.uniformMatrix4fv(this.addr,!1,aa),Je(e,r)}}function Rm(h,t){const e=this.cache;e[0]!==t&&(h.uniform1i(this.addr,t),e[0]=t)}function Fm(h,t){const e=this.cache;je(e,t)||(h.uniform2iv(this.addr,t),Je(e,t))}function zm(h,t){const e=this.cache;je(e,t)||(h.uniform3iv(this.addr,t),Je(e,t))}function Nm(h,t){const e=this.cache;je(e,t)||(h.uniform4iv(this.addr,t),Je(e,t))}function Om(h,t){const e=this.cache;e[0]!==t&&(h.uniform1ui(this.addr,t),e[0]=t)}function Um(h,t){const e=this.cache;je(e,t)||(h.uniform2uiv(this.addr,t),Je(e,t))}function km(h,t){const e=this.cache;je(e,t)||(h.uniform3uiv(this.addr,t),Je(e,t))}function Gm(h,t){const e=this.cache;je(e,t)||(h.uniform4uiv(this.addr,t),Je(e,t))}function Hm(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture2D(t||Ja,o)}function Wm(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture3D(t||Ka,o)}function qm(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTextureCube(t||$a,o)}function Xm(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture2DArray(t||Za,o)}function Ym(h){switch(h){case 5126:return Bm;case 35664:return Em;case 35665:return Lm;case 35666:return Pm;case 35674:return Im;case 35675:return Dm;case 35676:return Vm;case 5124:case 35670:return Rm;case 35667:case 35671:return Fm;case 35668:case 35672:return zm;case 35669:case 35673:return Nm;case 5125:return Om;case 36294:return Um;case 36295:return km;case 36296:return Gm;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Wm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Xm}}function jm(h,t){h.uniform1fv(this.addr,t)}function Jm(h,t){const e=nr(t,this.size,2);h.uniform2fv(this.addr,e)}function Zm(h,t){const e=nr(t,this.size,3);h.uniform3fv(this.addr,e)}function Km(h,t){const e=nr(t,this.size,4);h.uniform4fv(this.addr,e)}function $m(h,t){const e=nr(t,this.size,4);h.uniformMatrix2fv(this.addr,!1,e)}function Qm(h,t){const e=nr(t,this.size,9);h.uniformMatrix3fv(this.addr,!1,e)}function td(h,t){const e=nr(t,this.size,16);h.uniformMatrix4fv(this.addr,!1,e)}function ed(h,t){h.uniform1iv(this.addr,t)}function id(h,t){h.uniform2iv(this.addr,t)}function nd(h,t){h.uniform3iv(this.addr,t)}function rd(h,t){h.uniform4iv(this.addr,t)}function sd(h,t){h.uniform1uiv(this.addr,t)}function od(h,t){h.uniform2uiv(this.addr,t)}function ad(h,t){h.uniform3uiv(this.addr,t)}function ld(h,t){h.uniform4uiv(this.addr,t)}function cd(h,t,e){const r=t.length,o=Kr(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Ja,o[c])}function hd(h,t,e){const r=t.length,o=Kr(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Ka,o[c])}function ud(h,t,e){const r=t.length,o=Kr(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTextureCube(t[c]||$a,o[c])}function md(h,t,e){const r=t.length,o=Kr(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Za,o[c])}function dd(h){switch(h){case 5126:return jm;case 35664:return Jm;case 35665:return Zm;case 35666:return Km;case 35674:return $m;case 35675:return Qm;case 35676:return td;case 5124:case 35670:return ed;case 35667:case 35671:return id;case 35668:case 35672:return nd;case 35669:case 35673:return rd;case 5125:return sd;case 36294:return od;case 36295:return ad;case 36296:return ld;case 35678:case 36198:case 36298:case 36306:case 35682:return cd;case 35679:case 36299:case 36307:return hd;case 35680:case 36300:case 36308:case 36293:return ud;case 36289:case 36303:case 36311:case 36292:return md}}class fd{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.setValue=Ym(e.type)}}class pd{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.size=e.size,this.setValue=dd(e.type)}}class _d{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const m=o[c];m.setValue(t,e[m.id],r)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function ha(h,t){h.seq.push(t),h.map[t.id]=t}function vd(h,t,e){const r=h.name,o=r.length;for(Vs.lastIndex=0;;){const c=Vs.exec(r),d=Vs.lastIndex;let m=c[1];const g=c[2]==="]",v=c[3];if(g&&(m=m|0),v===void 0||v==="["&&d+2===o){ha(e,v===void 0?new fd(m,h,t):new pd(m,h,t));break}else{let s=e.map[m];s===void 0&&(s=new _d(m),ha(e,s)),e=s}}}class qr{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,35718);for(let o=0;o<r;++o){const c=t.getActiveUniform(e,o),d=t.getUniformLocation(e,c.name);vd(c,d,this)}}setValue(t,e,r,o){const c=this.map[e];c!==void 0&&c.setValue(t,r,o)}setOptional(t,e,r){const o=e[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,e,r,o){for(let c=0,d=e.length;c!==d;++c){const m=e[c],g=r[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,o)}}static seqWithValue(t,e){const r=[];for(let o=0,c=t.length;o!==c;++o){const d=t[o];d.id in e&&r.push(d)}return r}}function ua(h,t,e){const r=h.createShader(t);return h.shaderSource(r,e),h.compileShader(r),r}let gd=0;function yd(h,t){const e=h.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let d=o;d<c;d++){const m=d+1;r.push(`${m===t?">":" "} ${m}: ${e[d]}`)}return r.join(`
`)}function xd(h){switch(h){case yn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",h),["Linear","( value )"]}}function ma(h,t,e){const r=h.getShaderParameter(t,35713),o=h.getShaderInfoLog(t).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+yd(h.getShaderSource(t),d)}else return o}function bd(h,t){const e=xd(t);return"vec4 "+h+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ad(h,t){let e;switch(t){case Wl:e="Linear";break;case ql:e="Reinhard";break;case Xl:e="OptimizedCineon";break;case Yl:e="ACESFilmic";break;case jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+h+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Md(h){return[h.extensionDerivatives||!!h.envMapCubeUVHeight||h.bumpMap||h.tangentSpaceNormalMap||h.clearcoatNormalMap||h.flatShading||h.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(h.extensionFragDepth||h.logarithmicDepthBuffer)&&h.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",h.extensionDrawBuffers&&h.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(h.extensionShaderTextureLOD||h.envMap||h.transmission)&&h.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function wd(h){const t=[];for(const e in h){const r=h[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function Sd(h,t){const e={},r=h.getProgramParameter(t,35721);for(let o=0;o<r;o++){const c=h.getActiveAttrib(t,o),d=c.name;let m=1;c.type===35674&&(m=2),c.type===35675&&(m=3),c.type===35676&&(m=4),e[d]={type:c.type,location:h.getAttribLocation(t,d),locationSize:m}}return e}function mr(h){return h!==""}function da(h,t){return h.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fa(h,t){return h.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cd=/^[ \t]*#include +<([\w\d./]+)>/gm;function qs(h){return h.replace(Cd,Td)}function Td(h,t){const e=ce[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return qs(e)}const Bd=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ed=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pa(h){return h.replace(Ed,Qa).replace(Bd,Ld)}function Ld(h,t,e,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Qa(h,t,e,r)}function Qa(h,t,e,r){let o="";for(let c=parseInt(t);c<parseInt(e);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function _a(h){let t="precision "+h.precision+` float;
precision `+h.precision+" int;";return h.precision==="highp"?t+=`
#define HIGH_PRECISION`:h.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:h.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pd(h){let t="SHADOWMAP_TYPE_BASIC";return h.shadowMapType===Ea?t="SHADOWMAP_TYPE_PCF":h.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":h.shadowMapType===ur&&(t="SHADOWMAP_TYPE_VSM"),t}function Id(h){let t="ENVMAP_TYPE_CUBE";if(h.envMap)switch(h.envMapMode){case $n:case Qn:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dd(h){let t="ENVMAP_MODE_REFLECTION";if(h.envMap)switch(h.envMapMode){case Qn:t="ENVMAP_MODE_REFRACTION";break}return t}function Vd(h){let t="ENVMAP_BLENDING_NONE";if(h.envMap)switch(h.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Gl:t="ENVMAP_BLENDING_MIX";break;case Hl:t="ENVMAP_BLENDING_ADD";break}return t}function Rd(h){const t=h.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function Fd(h,t,e,r){const o=h.getContext(),c=e.defines;let d=e.vertexShader,m=e.fragmentShader;const g=Pd(e),v=Id(e),f=Dd(e),s=Vd(e),x=Rd(e),A=e.isWebGL2?"":Md(e),L=wd(c),M=o.createProgram();let b,D,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(b=[L].filter(mr).join(`
`),b.length>0&&(b+=`
`),D=[A,L].filter(mr).join(`
`),D.length>0&&(D+=`
`)):(b=[_a(e),"#define SHADER_NAME "+e.shaderName,L,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),D=[A,_a(e),"#define SHADER_NAME "+e.shaderName,L,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+v:"",e.envMap?"#define "+f:"",e.envMap?"#define "+s:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+g:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gi?"#define TONE_MAPPING":"",e.toneMapping!==Gi?ce.tonemapping_pars_fragment:"",e.toneMapping!==Gi?Ad("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.encodings_pars_fragment,bd("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),d=qs(d),d=da(d,e),d=fa(d,e),m=qs(m),m=da(m,e),m=fa(m,e),d=pa(d),m=pa(m),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,b=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,D=["#define varying in",e.glslVersion===No?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===No?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const S=U+b+d,P=U+D+m,G=ua(o,35633,S),J=ua(o,35632,P);if(o.attachShader(M,G),o.attachShader(M,J),e.index0AttributeName!==void 0?o.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M),h.debug.checkShaderErrors){const X=o.getProgramInfoLog(M).trim(),lt=o.getShaderInfoLog(G).trim(),nt=o.getShaderInfoLog(J).trim();let At=!0,Pt=!0;if(o.getProgramParameter(M,35714)===!1){At=!1;const Z=ma(o,G,"vertex"),ct=ma(o,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,35715)+`

Program Info Log: `+X+`
`+Z+`
`+ct)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(lt===""||nt==="")&&(Pt=!1);Pt&&(this.diagnostics={runnable:At,programLog:X,vertexShader:{log:lt,prefix:b},fragmentShader:{log:nt,prefix:D}})}o.deleteShader(G),o.deleteShader(J);let tt;this.getUniforms=function(){return tt===void 0&&(tt=new qr(o,M)),tt};let O;return this.getAttributes=function(){return O===void 0&&(O=Sd(o,M)),O},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.name=e.shaderName,this.id=gd++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=J,this}let zd=0;class Nd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(e),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const r=new Od(t);e.set(t,r)}return e.get(t)}}class Od{constructor(t){this.id=zd++,this.code=t,this.usedTimes=0}}function Ud(h,t,e,r,o,c,d){const m=new Zs,g=new Nd,v=[],f=o.isWebGL2,s=o.logarithmicDepthBuffer,x=o.vertexTextures;let A=o.precision;const L={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(O,X,lt,nt,At){const Pt=nt.fog,Z=At.geometry,ct=O.isMeshStandardMaterial?nt.environment:null,ot=(O.isMeshStandardMaterial?e:t).get(O.envMap||ct),rt=!!ot&&ot.mapping===jr?ot.image.height:null,mt=L[O.type];O.precision!==null&&(A=o.getMaxPrecision(O.precision),A!==O.precision&&console.warn("THREE.WebGLProgram.getParameters:",O.precision,"not supported, using",A,"instead."));const et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,$=et!==void 0?et.length:0;let Tt=0;Z.morphAttributes.position!==void 0&&(Tt=1),Z.morphAttributes.normal!==void 0&&(Tt=2),Z.morphAttributes.color!==void 0&&(Tt=3);let pt,Dt,Ot,kt;if(mt){const ue=Ci[mt];pt=ue.vertexShader,Dt=ue.fragmentShader}else pt=O.vertexShader,Dt=O.fragmentShader,g.update(O),Ot=g.getVertexShaderID(O),kt=g.getFragmentShaderID(O);const dt=h.getRenderTarget(),Ce=O.alphaTest>0,ae=O.clearcoat>0,Zt=O.iridescence>0;return{isWebGL2:f,shaderID:mt,shaderName:O.type,vertexShader:pt,fragmentShader:Dt,defines:O.defines,customVertexShaderID:Ot,customFragmentShaderID:kt,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:A,instancing:At.isInstancedMesh===!0,instancingColor:At.isInstancedMesh===!0&&At.instanceColor!==null,supportsVertexTextures:x,outputEncoding:dt===null?h.outputEncoding:dt.isXRRenderTarget===!0?dt.texture.encoding:yn,map:!!O.map,matcap:!!O.matcap,envMap:!!ot,envMapMode:ot&&ot.mapping,envMapCubeUVHeight:rt,lightMap:!!O.lightMap,aoMap:!!O.aoMap,emissiveMap:!!O.emissiveMap,bumpMap:!!O.bumpMap,normalMap:!!O.normalMap,objectSpaceNormalMap:O.normalMapType===dc,tangentSpaceNormalMap:O.normalMapType===Ra,decodeVideoTexture:!!O.map&&O.map.isVideoTexture===!0&&O.map.encoding===Be,clearcoat:ae,clearcoatMap:ae&&!!O.clearcoatMap,clearcoatRoughnessMap:ae&&!!O.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!O.clearcoatNormalMap,iridescence:Zt,iridescenceMap:Zt&&!!O.iridescenceMap,iridescenceThicknessMap:Zt&&!!O.iridescenceThicknessMap,displacementMap:!!O.displacementMap,roughnessMap:!!O.roughnessMap,metalnessMap:!!O.metalnessMap,specularMap:!!O.specularMap,specularIntensityMap:!!O.specularIntensityMap,specularColorMap:!!O.specularColorMap,opaque:O.transparent===!1&&O.blending===jn,alphaMap:!!O.alphaMap,alphaTest:Ce,gradientMap:!!O.gradientMap,sheen:O.sheen>0,sheenColorMap:!!O.sheenColorMap,sheenRoughnessMap:!!O.sheenRoughnessMap,transmission:O.transmission>0,transmissionMap:!!O.transmissionMap,thicknessMap:!!O.thicknessMap,combine:O.combine,vertexTangents:!!O.normalMap&&!!Z.attributes.tangent,vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUvs:!!O.map||!!O.bumpMap||!!O.normalMap||!!O.specularMap||!!O.alphaMap||!!O.emissiveMap||!!O.roughnessMap||!!O.metalnessMap||!!O.clearcoatMap||!!O.clearcoatRoughnessMap||!!O.clearcoatNormalMap||!!O.iridescenceMap||!!O.iridescenceThicknessMap||!!O.displacementMap||!!O.transmissionMap||!!O.thicknessMap||!!O.specularIntensityMap||!!O.specularColorMap||!!O.sheenColorMap||!!O.sheenRoughnessMap,uvsVertexOnly:!(!!O.map||!!O.bumpMap||!!O.normalMap||!!O.specularMap||!!O.alphaMap||!!O.emissiveMap||!!O.roughnessMap||!!O.metalnessMap||!!O.clearcoatNormalMap||!!O.iridescenceMap||!!O.iridescenceThicknessMap||O.transmission>0||!!O.transmissionMap||!!O.thicknessMap||!!O.specularIntensityMap||!!O.specularColorMap||O.sheen>0||!!O.sheenColorMap||!!O.sheenRoughnessMap)&&!!O.displacementMap,fog:!!Pt,useFog:O.fog===!0,fogExp2:Pt&&Pt.isFogExp2,flatShading:!!O.flatShading,sizeAttenuation:O.sizeAttenuation,logarithmicDepthBuffer:s,skinning:At.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Tt,numDirLights:X.directional.length,numPointLights:X.point.length,numSpotLights:X.spot.length,numRectAreaLights:X.rectArea.length,numHemiLights:X.hemi.length,numDirLightShadows:X.directionalShadowMap.length,numPointLightShadows:X.pointShadowMap.length,numSpotLightShadows:X.spotShadowMap.length,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:O.dithering,shadowMapEnabled:h.shadowMap.enabled&&lt.length>0,shadowMapType:h.shadowMap.type,toneMapping:O.toneMapped?h.toneMapping:Gi,physicallyCorrectLights:h.physicallyCorrectLights,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===Kn,flipSided:O.side===xi,useDepthPacking:!!O.depthPacking,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionDerivatives:O.extensions&&O.extensions.derivatives,extensionFragDepth:O.extensions&&O.extensions.fragDepth,extensionDrawBuffers:O.extensions&&O.extensions.drawBuffers,extensionShaderTextureLOD:O.extensions&&O.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||r.has("EXT_shader_texture_lod"),customProgramCacheKey:O.customProgramCacheKey()}}function b(O){const X=[];if(O.shaderID?X.push(O.shaderID):(X.push(O.customVertexShaderID),X.push(O.customFragmentShaderID)),O.defines!==void 0)for(const lt in O.defines)X.push(lt),X.push(O.defines[lt]);return O.isRawShaderMaterial===!1&&(D(X,O),U(X,O),X.push(h.outputEncoding)),X.push(O.customProgramCacheKey),X.join()}function D(O,X){O.push(X.precision),O.push(X.outputEncoding),O.push(X.envMapMode),O.push(X.envMapCubeUVHeight),O.push(X.combine),O.push(X.vertexUvs),O.push(X.fogExp2),O.push(X.sizeAttenuation),O.push(X.morphTargetsCount),O.push(X.morphAttributeCount),O.push(X.numDirLights),O.push(X.numPointLights),O.push(X.numSpotLights),O.push(X.numHemiLights),O.push(X.numRectAreaLights),O.push(X.numDirLightShadows),O.push(X.numPointLightShadows),O.push(X.numSpotLightShadows),O.push(X.shadowMapType),O.push(X.toneMapping),O.push(X.numClippingPlanes),O.push(X.numClipIntersection),O.push(X.depthPacking)}function U(O,X){m.disableAll(),X.isWebGL2&&m.enable(0),X.supportsVertexTextures&&m.enable(1),X.instancing&&m.enable(2),X.instancingColor&&m.enable(3),X.map&&m.enable(4),X.matcap&&m.enable(5),X.envMap&&m.enable(6),X.lightMap&&m.enable(7),X.aoMap&&m.enable(8),X.emissiveMap&&m.enable(9),X.bumpMap&&m.enable(10),X.normalMap&&m.enable(11),X.objectSpaceNormalMap&&m.enable(12),X.tangentSpaceNormalMap&&m.enable(13),X.clearcoat&&m.enable(14),X.clearcoatMap&&m.enable(15),X.clearcoatRoughnessMap&&m.enable(16),X.clearcoatNormalMap&&m.enable(17),X.iridescence&&m.enable(18),X.iridescenceMap&&m.enable(19),X.iridescenceThicknessMap&&m.enable(20),X.displacementMap&&m.enable(21),X.specularMap&&m.enable(22),X.roughnessMap&&m.enable(23),X.metalnessMap&&m.enable(24),X.gradientMap&&m.enable(25),X.alphaMap&&m.enable(26),X.alphaTest&&m.enable(27),X.vertexColors&&m.enable(28),X.vertexAlphas&&m.enable(29),X.vertexUvs&&m.enable(30),X.vertexTangents&&m.enable(31),X.uvsVertexOnly&&m.enable(32),X.fog&&m.enable(33),O.push(m.mask),m.disableAll(),X.useFog&&m.enable(0),X.flatShading&&m.enable(1),X.logarithmicDepthBuffer&&m.enable(2),X.skinning&&m.enable(3),X.morphTargets&&m.enable(4),X.morphNormals&&m.enable(5),X.morphColors&&m.enable(6),X.premultipliedAlpha&&m.enable(7),X.shadowMapEnabled&&m.enable(8),X.physicallyCorrectLights&&m.enable(9),X.doubleSided&&m.enable(10),X.flipSided&&m.enable(11),X.useDepthPacking&&m.enable(12),X.dithering&&m.enable(13),X.specularIntensityMap&&m.enable(14),X.specularColorMap&&m.enable(15),X.transmission&&m.enable(16),X.transmissionMap&&m.enable(17),X.thicknessMap&&m.enable(18),X.sheen&&m.enable(19),X.sheenColorMap&&m.enable(20),X.sheenRoughnessMap&&m.enable(21),X.decodeVideoTexture&&m.enable(22),X.opaque&&m.enable(23),O.push(m.mask)}function S(O){const X=L[O.type];let lt;if(X){const nt=Ci[X];lt=Bc.clone(nt.uniforms)}else lt=O.uniforms;return lt}function P(O,X){let lt;for(let nt=0,At=v.length;nt<At;nt++){const Pt=v[nt];if(Pt.cacheKey===X){lt=Pt,++lt.usedTimes;break}}return lt===void 0&&(lt=new Fd(h,X,O,c),v.push(lt)),lt}function G(O){if(--O.usedTimes===0){const X=v.indexOf(O);v[X]=v[v.length-1],v.pop(),O.destroy()}}function J(O){g.remove(O)}function tt(){g.dispose()}return{getParameters:M,getProgramCacheKey:b,getUniforms:S,acquireProgram:P,releaseProgram:G,releaseShaderCache:J,programs:v,dispose:tt}}function kd(){let h=new WeakMap;function t(c){let d=h.get(c);return d===void 0&&(d={},h.set(c,d)),d}function e(c){h.delete(c)}function r(c,d,m){h.get(c)[d]=m}function o(){h=new WeakMap}return{get:t,remove:e,update:r,dispose:o}}function Gd(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.material.id!==t.material.id?h.material.id-t.material.id:h.z!==t.z?h.z-t.z:h.id-t.id}function va(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.z!==t.z?t.z-h.z:h.id-t.id}function ga(){const h=[];let t=0;const e=[],r=[],o=[];function c(){t=0,e.length=0,r.length=0,o.length=0}function d(s,x,A,L,M,b){let D=h[t];return D===void 0?(D={id:s.id,object:s,geometry:x,material:A,groupOrder:L,renderOrder:s.renderOrder,z:M,group:b},h[t]=D):(D.id=s.id,D.object=s,D.geometry=x,D.material=A,D.groupOrder=L,D.renderOrder=s.renderOrder,D.z=M,D.group=b),t++,D}function m(s,x,A,L,M,b){const D=d(s,x,A,L,M,b);A.transmission>0?r.push(D):A.transparent===!0?o.push(D):e.push(D)}function g(s,x,A,L,M,b){const D=d(s,x,A,L,M,b);A.transmission>0?r.unshift(D):A.transparent===!0?o.unshift(D):e.unshift(D)}function v(s,x){e.length>1&&e.sort(s||Gd),r.length>1&&r.sort(x||va),o.length>1&&o.sort(x||va)}function f(){for(let s=t,x=h.length;s<x;s++){const A=h[s];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:e,transmissive:r,transparent:o,init:c,push:m,unshift:g,finish:f,sort:v}}function Hd(){let h=new WeakMap;function t(r,o){let c;return h.has(r)===!1?(c=new ga,h.set(r,[c])):o>=h.get(r).length?(c=new ga,h.get(r).push(c)):c=h.get(r)[o],c}function e(){h=new WeakMap}return{get:t,dispose:e}}function Wd(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new xe};break;case"SpotLight":e={position:new K,direction:new K,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new K,halfWidth:new K,halfHeight:new K};break}return h[t.id]=e,e}}}function qd(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return h[t.id]=e,e}}}let Xd=0;function Yd(h,t){return(t.castShadow?1:0)-(h.castShadow?1:0)}function jd(h,t){const e=new Wd,r=qd(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)o.probe.push(new K);const c=new K,d=new Oe,m=new Oe;function g(f,s){let x=0,A=0,L=0;for(let X=0;X<9;X++)o.probe[X].set(0,0,0);let M=0,b=0,D=0,U=0,S=0,P=0,G=0,J=0;f.sort(Yd);const tt=s!==!0?Math.PI:1;for(let X=0,lt=f.length;X<lt;X++){const nt=f[X],At=nt.color,Pt=nt.intensity,Z=nt.distance,ct=nt.shadow&&nt.shadow.map?nt.shadow.map.texture:null;if(nt.isAmbientLight)x+=At.r*Pt*tt,A+=At.g*Pt*tt,L+=At.b*Pt*tt;else if(nt.isLightProbe)for(let ot=0;ot<9;ot++)o.probe[ot].addScaledVector(nt.sh.coefficients[ot],Pt);else if(nt.isDirectionalLight){const ot=e.get(nt);if(ot.color.copy(nt.color).multiplyScalar(nt.intensity*tt),nt.castShadow){const rt=nt.shadow,mt=r.get(nt);mt.shadowBias=rt.bias,mt.shadowNormalBias=rt.normalBias,mt.shadowRadius=rt.radius,mt.shadowMapSize=rt.mapSize,o.directionalShadow[M]=mt,o.directionalShadowMap[M]=ct,o.directionalShadowMatrix[M]=nt.shadow.matrix,P++}o.directional[M]=ot,M++}else if(nt.isSpotLight){const ot=e.get(nt);if(ot.position.setFromMatrixPosition(nt.matrixWorld),ot.color.copy(At).multiplyScalar(Pt*tt),ot.distance=Z,ot.coneCos=Math.cos(nt.angle),ot.penumbraCos=Math.cos(nt.angle*(1-nt.penumbra)),ot.decay=nt.decay,nt.castShadow){const rt=nt.shadow,mt=r.get(nt);mt.shadowBias=rt.bias,mt.shadowNormalBias=rt.normalBias,mt.shadowRadius=rt.radius,mt.shadowMapSize=rt.mapSize,o.spotShadow[D]=mt,o.spotShadowMap[D]=ct,o.spotShadowMatrix[D]=nt.shadow.matrix,J++}o.spot[D]=ot,D++}else if(nt.isRectAreaLight){const ot=e.get(nt);ot.color.copy(At).multiplyScalar(Pt),ot.halfWidth.set(nt.width*.5,0,0),ot.halfHeight.set(0,nt.height*.5,0),o.rectArea[U]=ot,U++}else if(nt.isPointLight){const ot=e.get(nt);if(ot.color.copy(nt.color).multiplyScalar(nt.intensity*tt),ot.distance=nt.distance,ot.decay=nt.decay,nt.castShadow){const rt=nt.shadow,mt=r.get(nt);mt.shadowBias=rt.bias,mt.shadowNormalBias=rt.normalBias,mt.shadowRadius=rt.radius,mt.shadowMapSize=rt.mapSize,mt.shadowCameraNear=rt.camera.near,mt.shadowCameraFar=rt.camera.far,o.pointShadow[b]=mt,o.pointShadowMap[b]=ct,o.pointShadowMatrix[b]=nt.shadow.matrix,G++}o.point[b]=ot,b++}else if(nt.isHemisphereLight){const ot=e.get(nt);ot.skyColor.copy(nt.color).multiplyScalar(Pt*tt),ot.groundColor.copy(nt.groundColor).multiplyScalar(Pt*tt),o.hemi[S]=ot,S++}}U>0&&(t.isWebGL2||h.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=Ft.LTC_FLOAT_1,o.rectAreaLTC2=Ft.LTC_FLOAT_2):h.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=Ft.LTC_HALF_1,o.rectAreaLTC2=Ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=x,o.ambient[1]=A,o.ambient[2]=L;const O=o.hash;(O.directionalLength!==M||O.pointLength!==b||O.spotLength!==D||O.rectAreaLength!==U||O.hemiLength!==S||O.numDirectionalShadows!==P||O.numPointShadows!==G||O.numSpotShadows!==J)&&(o.directional.length=M,o.spot.length=D,o.rectArea.length=U,o.point.length=b,o.hemi.length=S,o.directionalShadow.length=P,o.directionalShadowMap.length=P,o.pointShadow.length=G,o.pointShadowMap.length=G,o.spotShadow.length=J,o.spotShadowMap.length=J,o.directionalShadowMatrix.length=P,o.pointShadowMatrix.length=G,o.spotShadowMatrix.length=J,O.directionalLength=M,O.pointLength=b,O.spotLength=D,O.rectAreaLength=U,O.hemiLength=S,O.numDirectionalShadows=P,O.numPointShadows=G,O.numSpotShadows=J,o.version=Xd++)}function v(f,s){let x=0,A=0,L=0,M=0,b=0;const D=s.matrixWorldInverse;for(let U=0,S=f.length;U<S;U++){const P=f[U];if(P.isDirectionalLight){const G=o.directional[x];G.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),G.direction.sub(c),G.direction.transformDirection(D),x++}else if(P.isSpotLight){const G=o.spot[L];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(D),G.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),G.direction.sub(c),G.direction.transformDirection(D),L++}else if(P.isRectAreaLight){const G=o.rectArea[M];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(D),m.identity(),d.copy(P.matrixWorld),d.premultiply(D),m.extractRotation(d),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),G.halfWidth.applyMatrix4(m),G.halfHeight.applyMatrix4(m),M++}else if(P.isPointLight){const G=o.point[A];G.position.setFromMatrixPosition(P.matrixWorld),G.position.applyMatrix4(D),A++}else if(P.isHemisphereLight){const G=o.hemi[b];G.direction.setFromMatrixPosition(P.matrixWorld),G.direction.transformDirection(D),b++}}}return{setup:g,setupView:v,state:o}}function ya(h,t){const e=new jd(h,t),r=[],o=[];function c(){r.length=0,o.length=0}function d(s){r.push(s)}function m(s){o.push(s)}function g(s){e.setup(r,s)}function v(s){e.setupView(r,s)}return{init:c,state:{lightsArray:r,shadowsArray:o,lights:e},setupLights:g,setupLightsView:v,pushLight:d,pushShadow:m}}function Jd(h,t){let e=new WeakMap;function r(c,d=0){let m;return e.has(c)===!1?(m=new ya(h,t),e.set(c,[m])):d>=e.get(c).length?(m=new ya(h,t),e.get(c).push(m)):m=e.get(c)[d],m}function o(){e=new WeakMap}return{get:r,dispose:o}}class Zd extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kd extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tf(h,t,e){let r=new Xa;const o=new le,c=new le,d=new Fe,m=new Zd({depthPacking:mc}),g=new Kd,v={},f=e.maxTextureSize,s={0:xi,1:fr,2:Kn},x=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:$d,fragmentShader:Qd}),A=x.clone();A.defines.HORIZONTAL_PASS=1;const L=new wn;L.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ki(L,x),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea,this.render=function(P,G,J){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||P.length===0)return;const tt=h.getRenderTarget(),O=h.getActiveCubeFace(),X=h.getActiveMipmapLevel(),lt=h.state;lt.setBlending(en),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);for(let nt=0,At=P.length;nt<At;nt++){const Pt=P[nt],Z=Pt.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Pt,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const ct=Z.getFrameExtents();if(o.multiply(ct),c.copy(Z.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(c.x=Math.floor(f/ct.x),o.x=c.x*ct.x,Z.mapSize.x=c.x),o.y>f&&(c.y=Math.floor(f/ct.y),o.y=c.y*ct.y,Z.mapSize.y=c.y)),Z.map===null){const rt=this.type!==ur?{minFilter:He,magFilter:He}:{};Z.map=new xn(o.x,o.y,rt),Z.map.texture.name=Pt.name+".shadowMap",Z.camera.updateProjectionMatrix()}h.setRenderTarget(Z.map),h.clear();const ot=Z.getViewportCount();for(let rt=0;rt<ot;rt++){const mt=Z.getViewport(rt);d.set(c.x*mt.x,c.y*mt.y,c.x*mt.z,c.y*mt.w),lt.viewport(d),Z.updateMatrices(Pt,rt),r=Z.getFrustum(),S(G,J,Z.camera,Pt,this.type)}Z.isPointLightShadow!==!0&&this.type===ur&&D(Z,J),Z.needsUpdate=!1}b.needsUpdate=!1,h.setRenderTarget(tt,O,X)};function D(P,G){const J=t.update(M);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,A.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,A.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new xn(o.x,o.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,h.setRenderTarget(P.mapPass),h.clear(),h.renderBufferDirect(G,null,J,x,M,null),A.uniforms.shadow_pass.value=P.mapPass.texture,A.uniforms.resolution.value=P.mapSize,A.uniforms.radius.value=P.radius,h.setRenderTarget(P.map),h.clear(),h.renderBufferDirect(G,null,J,A,M,null)}function U(P,G,J,tt,O,X){let lt=null;const nt=J.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(nt!==void 0?lt=nt:lt=J.isPointLight===!0?g:m,h.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0){const At=lt.uuid,Pt=G.uuid;let Z=v[At];Z===void 0&&(Z={},v[At]=Z);let ct=Z[Pt];ct===void 0&&(ct=lt.clone(),Z[Pt]=ct),lt=ct}return lt.visible=G.visible,lt.wireframe=G.wireframe,X===ur?lt.side=G.shadowSide!==null?G.shadowSide:G.side:lt.side=G.shadowSide!==null?G.shadowSide:s[G.side],lt.alphaMap=G.alphaMap,lt.alphaTest=G.alphaTest,lt.clipShadows=G.clipShadows,lt.clippingPlanes=G.clippingPlanes,lt.clipIntersection=G.clipIntersection,lt.displacementMap=G.displacementMap,lt.displacementScale=G.displacementScale,lt.displacementBias=G.displacementBias,lt.wireframeLinewidth=G.wireframeLinewidth,lt.linewidth=G.linewidth,J.isPointLight===!0&&lt.isMeshDistanceMaterial===!0&&(lt.referencePosition.setFromMatrixPosition(J.matrixWorld),lt.nearDistance=tt,lt.farDistance=O),lt}function S(P,G,J,tt,O){if(P.visible===!1)return;if(P.layers.test(G.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===ur)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld);const nt=t.update(P),At=P.material;if(Array.isArray(At)){const Pt=nt.groups;for(let Z=0,ct=Pt.length;Z<ct;Z++){const ot=Pt[Z],rt=At[ot.materialIndex];if(rt&&rt.visible){const mt=U(P,rt,tt,J.near,J.far,O);h.renderBufferDirect(J,null,nt,mt,P,ot)}}}else if(At.visible){const Pt=U(P,At,tt,J.near,J.far,O);h.renderBufferDirect(J,null,nt,Pt,P,null)}}const lt=P.children;for(let nt=0,At=lt.length;nt<At;nt++)S(lt[nt],G,J,tt,O)}}function ef(h,t,e){const r=e.isWebGL2;function o(){let q=!1;const wt=new Fe;let Et=null;const Xt=new Fe(0,0,0,0);return{setMask:function(Vt){Et!==Vt&&!q&&(h.colorMask(Vt,Vt,Vt,Vt),Et=Vt)},setLocked:function(Vt){q=Vt},setClear:function(Vt,Gt,Lt,Qt,fe){fe===!0&&(Vt*=Qt,Gt*=Qt,Lt*=Qt),wt.set(Vt,Gt,Lt,Qt),Xt.equals(wt)===!1&&(h.clearColor(Vt,Gt,Lt,Qt),Xt.copy(wt))},reset:function(){q=!1,Et=null,Xt.set(-1,0,0,0)}}}function c(){let q=!1,wt=null,Et=null,Xt=null;return{setTest:function(Vt){Vt?kt(2929):dt(2929)},setMask:function(Vt){wt!==Vt&&!q&&(h.depthMask(Vt),wt=Vt)},setFunc:function(Vt){if(Et!==Vt){if(Vt)switch(Vt){case Rl:h.depthFunc(512);break;case Fl:h.depthFunc(519);break;case zl:h.depthFunc(513);break;case Ns:h.depthFunc(515);break;case Nl:h.depthFunc(514);break;case Ol:h.depthFunc(518);break;case Ul:h.depthFunc(516);break;case kl:h.depthFunc(517);break;default:h.depthFunc(515)}else h.depthFunc(515);Et=Vt}},setLocked:function(Vt){q=Vt},setClear:function(Vt){Xt!==Vt&&(h.clearDepth(Vt),Xt=Vt)},reset:function(){q=!1,wt=null,Et=null,Xt=null}}}function d(){let q=!1,wt=null,Et=null,Xt=null,Vt=null,Gt=null,Lt=null,Qt=null,fe=null;return{setTest:function(zt){q||(zt?kt(2960):dt(2960))},setMask:function(zt){wt!==zt&&!q&&(h.stencilMask(zt),wt=zt)},setFunc:function(zt,Me,Ue){(Et!==zt||Xt!==Me||Vt!==Ue)&&(h.stencilFunc(zt,Me,Ue),Et=zt,Xt=Me,Vt=Ue)},setOp:function(zt,Me,Ue){(Gt!==zt||Lt!==Me||Qt!==Ue)&&(h.stencilOp(zt,Me,Ue),Gt=zt,Lt=Me,Qt=Ue)},setLocked:function(zt){q=zt},setClear:function(zt){fe!==zt&&(h.clearStencil(zt),fe=zt)},reset:function(){q=!1,wt=null,Et=null,Xt=null,Vt=null,Gt=null,Lt=null,Qt=null,fe=null}}}const m=new o,g=new c,v=new d;let f={},s={},x=new WeakMap,A=[],L=null,M=!1,b=null,D=null,U=null,S=null,P=null,G=null,J=null,tt=!1,O=null,X=null,lt=null,nt=null,At=null;const Pt=h.getParameter(35661);let Z=!1,ct=0;const ot=h.getParameter(7938);ot.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(ot)[1]),Z=ct>=1):ot.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),Z=ct>=2);let rt=null,mt={};const et=h.getParameter(3088),$=h.getParameter(2978),Tt=new Fe().fromArray(et),pt=new Fe().fromArray($);function Dt(q,wt,Et){const Xt=new Uint8Array(4),Vt=h.createTexture();h.bindTexture(q,Vt),h.texParameteri(q,10241,9728),h.texParameteri(q,10240,9728);for(let Gt=0;Gt<Et;Gt++)h.texImage2D(wt+Gt,0,6408,1,1,0,6408,5121,Xt);return Vt}const Ot={};Ot[3553]=Dt(3553,3553,1),Ot[34067]=Dt(34067,34069,6),m.setClear(0,0,0,1),g.setClear(1),v.setClear(0),kt(2929),g.setFunc(Ns),ye(!1),Ae(ao),kt(2884),oe(en);function kt(q){f[q]!==!0&&(h.enable(q),f[q]=!0)}function dt(q){f[q]!==!1&&(h.disable(q),f[q]=!1)}function Ce(q,wt){return s[q]!==wt?(h.bindFramebuffer(q,wt),s[q]=wt,r&&(q===36009&&(s[36160]=wt),q===36160&&(s[36009]=wt)),!0):!1}function ae(q,wt){let Et=A,Xt=!1;if(q)if(Et=x.get(wt),Et===void 0&&(Et=[],x.set(wt,Et)),q.isWebGLMultipleRenderTargets){const Vt=q.texture;if(Et.length!==Vt.length||Et[0]!==36064){for(let Gt=0,Lt=Vt.length;Gt<Lt;Gt++)Et[Gt]=36064+Gt;Et.length=Vt.length,Xt=!0}}else Et[0]!==36064&&(Et[0]=36064,Xt=!0);else Et[0]!==1029&&(Et[0]=1029,Xt=!0);Xt&&(e.isWebGL2?h.drawBuffers(Et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Et))}function Zt(q){return L!==q?(h.useProgram(q),L=q,!0):!1}const xt={[Xn]:32774,[wl]:32778,[Sl]:32779};if(r)xt[uo]=32775,xt[mo]=32776;else{const q=t.get("EXT_blend_minmax");q!==null&&(xt[uo]=q.MIN_EXT,xt[mo]=q.MAX_EXT)}const ue={[Cl]:0,[Tl]:1,[Bl]:768,[La]:770,[Vl]:776,[Il]:774,[Ll]:772,[El]:769,[Pa]:771,[Dl]:775,[Pl]:773};function oe(q,wt,Et,Xt,Vt,Gt,Lt,Qt){if(q===en){M===!0&&(dt(3042),M=!1);return}if(M===!1&&(kt(3042),M=!0),q!==Ml){if(q!==b||Qt!==tt){if((D!==Xn||P!==Xn)&&(h.blendEquation(32774),D=Xn,P=Xn),Qt)switch(q){case jn:h.blendFuncSeparate(1,771,1,771);break;case lo:h.blendFunc(1,1);break;case co:h.blendFuncSeparate(0,769,0,1);break;case ho:h.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case jn:h.blendFuncSeparate(770,771,1,771);break;case lo:h.blendFunc(770,1);break;case co:h.blendFuncSeparate(0,769,0,1);break;case ho:h.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}U=null,S=null,G=null,J=null,b=q,tt=Qt}return}Vt=Vt||wt,Gt=Gt||Et,Lt=Lt||Xt,(wt!==D||Vt!==P)&&(h.blendEquationSeparate(xt[wt],xt[Vt]),D=wt,P=Vt),(Et!==U||Xt!==S||Gt!==G||Lt!==J)&&(h.blendFuncSeparate(ue[Et],ue[Xt],ue[Gt],ue[Lt]),U=Et,S=Xt,G=Gt,J=Lt),b=q,tt=null}function Yt(q,wt){q.side===Kn?dt(2884):kt(2884);let Et=q.side===xi;wt&&(Et=!Et),ye(Et),q.blending===jn&&q.transparent===!1?oe(en):oe(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),g.setFunc(q.depthFunc),g.setTest(q.depthTest),g.setMask(q.depthWrite),m.setMask(q.colorWrite);const Xt=q.stencilWrite;v.setTest(Xt),Xt&&(v.setMask(q.stencilWriteMask),v.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),v.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),We(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?kt(32926):dt(32926)}function ye(q){O!==q&&(q?h.frontFace(2304):h.frontFace(2305),O=q)}function Ae(q){q!==yl?(kt(2884),q!==X&&(q===ao?h.cullFace(1029):q===xl?h.cullFace(1028):h.cullFace(1032))):dt(2884),X=q}function Ee(q){q!==lt&&(Z&&h.lineWidth(q),lt=q)}function We(q,wt,Et){q?(kt(32823),(nt!==wt||At!==Et)&&(h.polygonOffset(wt,Et),nt=wt,At=Et)):dt(32823)}function Te(q){q?kt(3089):dt(3089)}function pe(q){q===void 0&&(q=33984+Pt-1),rt!==q&&(h.activeTexture(q),rt=q)}function qe(q,wt){rt===null&&pe();let Et=mt[rt];Et===void 0&&(Et={type:void 0,texture:void 0},mt[rt]=Et),(Et.type!==q||Et.texture!==wt)&&(h.bindTexture(q,wt||Ot[q]),Et.type=q,Et.texture=wt)}function Xe(){const q=mt[rt];q!==void 0&&q.type!==void 0&&(h.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function k(){try{h.compressedTexImage2D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function V(){try{h.texSubImage2D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function at(){try{h.texSubImage3D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Mt(){try{h.compressedTexSubImage2D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{h.texStorage2D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(){try{h.texStorage3D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Kt(){try{h.texImage2D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function z(){try{h.texImage3D.apply(h,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(q){Tt.equals(q)===!1&&(h.scissor(q.x,q.y,q.z,q.w),Tt.copy(q))}function St(q){pt.equals(q)===!1&&(h.viewport(q.x,q.y,q.z,q.w),pt.copy(q))}function Bt(){h.disable(3042),h.disable(2884),h.disable(2929),h.disable(32823),h.disable(3089),h.disable(2960),h.disable(32926),h.blendEquation(32774),h.blendFunc(1,0),h.blendFuncSeparate(1,0,1,0),h.colorMask(!0,!0,!0,!0),h.clearColor(0,0,0,0),h.depthMask(!0),h.depthFunc(513),h.clearDepth(1),h.stencilMask(4294967295),h.stencilFunc(519,0,4294967295),h.stencilOp(7680,7680,7680),h.clearStencil(0),h.cullFace(1029),h.frontFace(2305),h.polygonOffset(0,0),h.activeTexture(33984),h.bindFramebuffer(36160,null),r===!0&&(h.bindFramebuffer(36009,null),h.bindFramebuffer(36008,null)),h.useProgram(null),h.lineWidth(1),h.scissor(0,0,h.canvas.width,h.canvas.height),h.viewport(0,0,h.canvas.width,h.canvas.height),f={},rt=null,mt={},s={},x=new WeakMap,A=[],L=null,M=!1,b=null,D=null,U=null,S=null,P=null,G=null,J=null,tt=!1,O=null,X=null,lt=null,nt=null,At=null,Tt.set(0,0,h.canvas.width,h.canvas.height),pt.set(0,0,h.canvas.width,h.canvas.height),m.reset(),g.reset(),v.reset()}return{buffers:{color:m,depth:g,stencil:v},enable:kt,disable:dt,bindFramebuffer:Ce,drawBuffers:ae,useProgram:Zt,setBlending:oe,setMaterial:Yt,setFlipSided:ye,setCullFace:Ae,setLineWidth:Ee,setPolygonOffset:We,setScissorTest:Te,activeTexture:pe,bindTexture:qe,unbindTexture:Xe,compressedTexImage2D:k,texImage2D:Kt,texImage3D:z,texStorage2D:gt,texStorage3D:Nt,texSubImage2D:V,texSubImage3D:at,compressedTexSubImage2D:Mt,scissor:vt,viewport:St,reset:Bt}}function nf(h,t,e,r,o,c,d){const m=o.isWebGL2,g=o.maxTextures,v=o.maxCubemapSize,f=o.maxTextureSize,s=o.maxSamples,x=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,A=/OculusBrowser/g.test(navigator.userAgent),L=new WeakMap;let M;const b=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(k,V){return D?new OffscreenCanvas(k,V):Xr("canvas")}function S(k,V,at,Mt){let gt=1;if((k.width>Mt||k.height>Mt)&&(gt=Mt/Math.max(k.width,k.height)),gt<1||V===!0)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap){const Nt=V?Ws:Math.floor,Kt=Nt(gt*k.width),z=Nt(gt*k.height);M===void 0&&(M=U(Kt,z));const vt=at?U(Kt,z):M;return vt.width=Kt,vt.height=z,vt.getContext("2d").drawImage(k,0,0,Kt,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+Kt+"x"+z+")."),vt}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),k;return k}function P(k){return Uo(k.width)&&Uo(k.height)}function G(k){return m?!1:k.wrapS!==yi||k.wrapT!==yi||k.minFilter!==He&&k.minFilter!==ai}function J(k,V){return k.generateMipmaps&&V&&k.minFilter!==He&&k.minFilter!==ai}function tt(k){h.generateMipmap(k)}function O(k,V,at,Mt,gt=!1){if(m===!1)return V;if(k!==null){if(h[k]!==void 0)return h[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Nt=V;return V===6403&&(at===5126&&(Nt=33326),at===5131&&(Nt=33325),at===5121&&(Nt=33321)),V===33319&&(at===5126&&(Nt=33328),at===5131&&(Nt=33327),at===5121&&(Nt=33323)),V===6408&&(at===5126&&(Nt=34836),at===5131&&(Nt=34842),at===5121&&(Nt=Mt===Be&&gt===!1?35907:32856),at===32819&&(Nt=32854),at===32820&&(Nt=32855)),(Nt===33325||Nt===33326||Nt===33327||Nt===33328||Nt===34842||Nt===34836)&&t.get("EXT_color_buffer_float"),Nt}function X(k,V,at){return J(k,at)===!0||k.isFramebufferTexture&&k.minFilter!==He&&k.minFilter!==ai?Math.log2(Math.max(V.width,V.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?V.mipmaps.length:1}function lt(k){return k===He||k===fo||k===po?9728:9729}function nt(k){const V=k.target;V.removeEventListener("dispose",nt),Pt(V),V.isVideoTexture&&L.delete(V)}function At(k){const V=k.target;V.removeEventListener("dispose",At),ct(V)}function Pt(k){const V=r.get(k);if(V.__webglInit===void 0)return;const at=k.source,Mt=b.get(at);if(Mt){const gt=Mt[V.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&Z(k),Object.keys(Mt).length===0&&b.delete(at)}r.remove(k)}function Z(k){const V=r.get(k);h.deleteTexture(V.__webglTexture);const at=k.source,Mt=b.get(at);delete Mt[V.__cacheKey],d.memory.textures--}function ct(k){const V=k.texture,at=r.get(k),Mt=r.get(V);if(Mt.__webglTexture!==void 0&&(h.deleteTexture(Mt.__webglTexture),d.memory.textures--),k.depthTexture&&k.depthTexture.dispose(),k.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++)h.deleteFramebuffer(at.__webglFramebuffer[gt]),at.__webglDepthbuffer&&h.deleteRenderbuffer(at.__webglDepthbuffer[gt]);else{if(h.deleteFramebuffer(at.__webglFramebuffer),at.__webglDepthbuffer&&h.deleteRenderbuffer(at.__webglDepthbuffer),at.__webglMultisampledFramebuffer&&h.deleteFramebuffer(at.__webglMultisampledFramebuffer),at.__webglColorRenderbuffer)for(let gt=0;gt<at.__webglColorRenderbuffer.length;gt++)at.__webglColorRenderbuffer[gt]&&h.deleteRenderbuffer(at.__webglColorRenderbuffer[gt]);at.__webglDepthRenderbuffer&&h.deleteRenderbuffer(at.__webglDepthRenderbuffer)}if(k.isWebGLMultipleRenderTargets)for(let gt=0,Nt=V.length;gt<Nt;gt++){const Kt=r.get(V[gt]);Kt.__webglTexture&&(h.deleteTexture(Kt.__webglTexture),d.memory.textures--),r.remove(V[gt])}r.remove(V),r.remove(k)}let ot=0;function rt(){ot=0}function mt(){const k=ot;return k>=g&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+g),ot+=1,k}function et(k){const V=[];return V.push(k.wrapS),V.push(k.wrapT),V.push(k.magFilter),V.push(k.minFilter),V.push(k.anisotropy),V.push(k.internalFormat),V.push(k.format),V.push(k.type),V.push(k.generateMipmaps),V.push(k.premultiplyAlpha),V.push(k.flipY),V.push(k.unpackAlignment),V.push(k.encoding),V.join()}function $(k,V){const at=r.get(k);if(k.isVideoTexture&&qe(k),k.isRenderTargetTexture===!1&&k.version>0&&at.__version!==k.version){const Mt=k.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(at,k,V);return}}e.activeTexture(33984+V),e.bindTexture(3553,at.__webglTexture)}function Tt(k,V){const at=r.get(k);if(k.version>0&&at.__version!==k.version){ae(at,k,V);return}e.activeTexture(33984+V),e.bindTexture(35866,at.__webglTexture)}function pt(k,V){const at=r.get(k);if(k.version>0&&at.__version!==k.version){ae(at,k,V);return}e.activeTexture(33984+V),e.bindTexture(32879,at.__webglTexture)}function Dt(k,V){const at=r.get(k);if(k.version>0&&at.__version!==k.version){Zt(at,k,V);return}e.activeTexture(33984+V),e.bindTexture(34067,at.__webglTexture)}const Ot={[ks]:10497,[yi]:33071,[Gs]:33648},kt={[He]:9728,[fo]:9984,[po]:9986,[ai]:9729,[Jl]:9985,[Jr]:9987};function dt(k,V,at){if(at?(h.texParameteri(k,10242,Ot[V.wrapS]),h.texParameteri(k,10243,Ot[V.wrapT]),(k===32879||k===35866)&&h.texParameteri(k,32882,Ot[V.wrapR]),h.texParameteri(k,10240,kt[V.magFilter]),h.texParameteri(k,10241,kt[V.minFilter])):(h.texParameteri(k,10242,33071),h.texParameteri(k,10243,33071),(k===32879||k===35866)&&h.texParameteri(k,32882,33071),(V.wrapS!==yi||V.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),h.texParameteri(k,10240,lt(V.magFilter)),h.texParameteri(k,10241,lt(V.minFilter)),V.minFilter!==He&&V.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Mt=t.get("EXT_texture_filter_anisotropic");if(V.type===dn&&t.has("OES_texture_float_linear")===!1||m===!1&&V.type===pr&&t.has("OES_texture_half_float_linear")===!1)return;(V.anisotropy>1||r.get(V).__currentAnisotropy)&&(h.texParameterf(k,Mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,o.getMaxAnisotropy())),r.get(V).__currentAnisotropy=V.anisotropy)}}function Ce(k,V){let at=!1;k.__webglInit===void 0&&(k.__webglInit=!0,V.addEventListener("dispose",nt));const Mt=V.source;let gt=b.get(Mt);gt===void 0&&(gt={},b.set(Mt,gt));const Nt=et(V);if(Nt!==k.__cacheKey){gt[Nt]===void 0&&(gt[Nt]={texture:h.createTexture(),usedTimes:0},d.memory.textures++,at=!0),gt[Nt].usedTimes++;const Kt=gt[k.__cacheKey];Kt!==void 0&&(gt[k.__cacheKey].usedTimes--,Kt.usedTimes===0&&Z(V)),k.__cacheKey=Nt,k.__webglTexture=gt[Nt].texture}return at}function ae(k,V,at){let Mt=3553;V.isDataArrayTexture&&(Mt=35866),V.isData3DTexture&&(Mt=32879);const gt=Ce(k,V),Nt=V.source;if(e.activeTexture(33984+at),e.bindTexture(Mt,k.__webglTexture),Nt.version!==Nt.__currentVersion||gt===!0){h.pixelStorei(37440,V.flipY),h.pixelStorei(37441,V.premultiplyAlpha),h.pixelStorei(3317,V.unpackAlignment),h.pixelStorei(37443,0);const Kt=G(V)&&P(V.image)===!1;let z=S(V.image,Kt,!1,f);z=Xe(V,z);const vt=P(z)||m,St=c.convert(V.format,V.encoding);let Bt=c.convert(V.type),q=O(V.internalFormat,St,Bt,V.encoding,V.isVideoTexture);dt(Mt,V,vt);let wt;const Et=V.mipmaps,Xt=m&&V.isVideoTexture!==!0,Vt=Nt.__currentVersion===void 0||gt===!0,Gt=X(V,z,vt);if(V.isDepthTexture)q=6402,m?V.type===dn?q=36012:V.type===mn?q=33190:V.type===Jn?q=35056:q=33189:V.type===dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),V.format===pn&&q===6402&&V.type!==Va&&V.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),V.type=mn,Bt=c.convert(V.type)),V.format===tr&&q===6402&&(q=34041,V.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),V.type=Jn,Bt=c.convert(V.type))),Vt&&(Xt?e.texStorage2D(3553,1,q,z.width,z.height):e.texImage2D(3553,0,q,z.width,z.height,0,St,Bt,null));else if(V.isDataTexture)if(Et.length>0&&vt){Xt&&Vt&&e.texStorage2D(3553,Gt,q,Et[0].width,Et[0].height);for(let Lt=0,Qt=Et.length;Lt<Qt;Lt++)wt=Et[Lt],Xt?e.texSubImage2D(3553,Lt,0,0,wt.width,wt.height,St,Bt,wt.data):e.texImage2D(3553,Lt,q,wt.width,wt.height,0,St,Bt,wt.data);V.generateMipmaps=!1}else Xt?(Vt&&e.texStorage2D(3553,Gt,q,z.width,z.height),e.texSubImage2D(3553,0,0,0,z.width,z.height,St,Bt,z.data)):e.texImage2D(3553,0,q,z.width,z.height,0,St,Bt,z.data);else if(V.isCompressedTexture){Xt&&Vt&&e.texStorage2D(3553,Gt,q,Et[0].width,Et[0].height);for(let Lt=0,Qt=Et.length;Lt<Qt;Lt++)wt=Et[Lt],V.format!==Ti?St!==null?Xt?e.compressedTexSubImage2D(3553,Lt,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(3553,Lt,q,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(3553,Lt,0,0,wt.width,wt.height,St,Bt,wt.data):e.texImage2D(3553,Lt,q,wt.width,wt.height,0,St,Bt,wt.data)}else if(V.isDataArrayTexture)Xt?(Vt&&e.texStorage3D(35866,Gt,q,z.width,z.height,z.depth),e.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,St,Bt,z.data)):e.texImage3D(35866,0,q,z.width,z.height,z.depth,0,St,Bt,z.data);else if(V.isData3DTexture)Xt?(Vt&&e.texStorage3D(32879,Gt,q,z.width,z.height,z.depth),e.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,St,Bt,z.data)):e.texImage3D(32879,0,q,z.width,z.height,z.depth,0,St,Bt,z.data);else if(V.isFramebufferTexture){if(Vt)if(Xt)e.texStorage2D(3553,Gt,q,z.width,z.height);else{let Lt=z.width,Qt=z.height;for(let fe=0;fe<Gt;fe++)e.texImage2D(3553,fe,q,Lt,Qt,0,St,Bt,null),Lt>>=1,Qt>>=1}}else if(Et.length>0&&vt){Xt&&Vt&&e.texStorage2D(3553,Gt,q,Et[0].width,Et[0].height);for(let Lt=0,Qt=Et.length;Lt<Qt;Lt++)wt=Et[Lt],Xt?e.texSubImage2D(3553,Lt,0,0,St,Bt,wt):e.texImage2D(3553,Lt,q,St,Bt,wt);V.generateMipmaps=!1}else Xt?(Vt&&e.texStorage2D(3553,Gt,q,z.width,z.height),e.texSubImage2D(3553,0,0,0,St,Bt,z)):e.texImage2D(3553,0,q,St,Bt,z);J(V,vt)&&tt(Mt),Nt.__currentVersion=Nt.version,V.onUpdate&&V.onUpdate(V)}k.__version=V.version}function Zt(k,V,at){if(V.image.length!==6)return;const Mt=Ce(k,V),gt=V.source;if(e.activeTexture(33984+at),e.bindTexture(34067,k.__webglTexture),gt.version!==gt.__currentVersion||Mt===!0){h.pixelStorei(37440,V.flipY),h.pixelStorei(37441,V.premultiplyAlpha),h.pixelStorei(3317,V.unpackAlignment),h.pixelStorei(37443,0);const Nt=V.isCompressedTexture||V.image[0].isCompressedTexture,Kt=V.image[0]&&V.image[0].isDataTexture,z=[];for(let Lt=0;Lt<6;Lt++)!Nt&&!Kt?z[Lt]=S(V.image[Lt],!1,!0,v):z[Lt]=Kt?V.image[Lt].image:V.image[Lt],z[Lt]=Xe(V,z[Lt]);const vt=z[0],St=P(vt)||m,Bt=c.convert(V.format,V.encoding),q=c.convert(V.type),wt=O(V.internalFormat,Bt,q,V.encoding),Et=m&&V.isVideoTexture!==!0,Xt=gt.__currentVersion===void 0||Mt===!0;let Vt=X(V,vt,St);dt(34067,V,St);let Gt;if(Nt){Et&&Xt&&e.texStorage2D(34067,Vt,wt,vt.width,vt.height);for(let Lt=0;Lt<6;Lt++){Gt=z[Lt].mipmaps;for(let Qt=0;Qt<Gt.length;Qt++){const fe=Gt[Qt];V.format!==Ti?Bt!==null?Et?e.compressedTexSubImage2D(34069+Lt,Qt,0,0,fe.width,fe.height,Bt,fe.data):e.compressedTexImage2D(34069+Lt,Qt,wt,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?e.texSubImage2D(34069+Lt,Qt,0,0,fe.width,fe.height,Bt,q,fe.data):e.texImage2D(34069+Lt,Qt,wt,fe.width,fe.height,0,Bt,q,fe.data)}}}else{Gt=V.mipmaps,Et&&Xt&&(Gt.length>0&&Vt++,e.texStorage2D(34067,Vt,wt,z[0].width,z[0].height));for(let Lt=0;Lt<6;Lt++)if(Kt){Et?e.texSubImage2D(34069+Lt,0,0,0,z[Lt].width,z[Lt].height,Bt,q,z[Lt].data):e.texImage2D(34069+Lt,0,wt,z[Lt].width,z[Lt].height,0,Bt,q,z[Lt].data);for(let Qt=0;Qt<Gt.length;Qt++){const zt=Gt[Qt].image[Lt].image;Et?e.texSubImage2D(34069+Lt,Qt+1,0,0,zt.width,zt.height,Bt,q,zt.data):e.texImage2D(34069+Lt,Qt+1,wt,zt.width,zt.height,0,Bt,q,zt.data)}}else{Et?e.texSubImage2D(34069+Lt,0,0,0,Bt,q,z[Lt]):e.texImage2D(34069+Lt,0,wt,Bt,q,z[Lt]);for(let Qt=0;Qt<Gt.length;Qt++){const fe=Gt[Qt];Et?e.texSubImage2D(34069+Lt,Qt+1,0,0,Bt,q,fe.image[Lt]):e.texImage2D(34069+Lt,Qt+1,wt,Bt,q,fe.image[Lt])}}}J(V,St)&&tt(34067),gt.__currentVersion=gt.version,V.onUpdate&&V.onUpdate(V)}k.__version=V.version}function xt(k,V,at,Mt,gt){const Nt=c.convert(at.format,at.encoding),Kt=c.convert(at.type),z=O(at.internalFormat,Nt,Kt,at.encoding);r.get(V).__hasExternalTextures||(gt===32879||gt===35866?e.texImage3D(gt,0,z,V.width,V.height,V.depth,0,Nt,Kt,null):e.texImage2D(gt,0,z,V.width,V.height,0,Nt,Kt,null)),e.bindFramebuffer(36160,k),pe(V)?x.framebufferTexture2DMultisampleEXT(36160,Mt,gt,r.get(at).__webglTexture,0,Te(V)):h.framebufferTexture2D(36160,Mt,gt,r.get(at).__webglTexture,0),e.bindFramebuffer(36160,null)}function ue(k,V,at){if(h.bindRenderbuffer(36161,k),V.depthBuffer&&!V.stencilBuffer){let Mt=33189;if(at||pe(V)){const gt=V.depthTexture;gt&&gt.isDepthTexture&&(gt.type===dn?Mt=36012:gt.type===mn&&(Mt=33190));const Nt=Te(V);pe(V)?x.renderbufferStorageMultisampleEXT(36161,Nt,Mt,V.width,V.height):h.renderbufferStorageMultisample(36161,Nt,Mt,V.width,V.height)}else h.renderbufferStorage(36161,Mt,V.width,V.height);h.framebufferRenderbuffer(36160,36096,36161,k)}else if(V.depthBuffer&&V.stencilBuffer){const Mt=Te(V);at&&pe(V)===!1?h.renderbufferStorageMultisample(36161,Mt,35056,V.width,V.height):pe(V)?x.renderbufferStorageMultisampleEXT(36161,Mt,35056,V.width,V.height):h.renderbufferStorage(36161,34041,V.width,V.height),h.framebufferRenderbuffer(36160,33306,36161,k)}else{const Mt=V.isWebGLMultipleRenderTargets===!0?V.texture:[V.texture];for(let gt=0;gt<Mt.length;gt++){const Nt=Mt[gt],Kt=c.convert(Nt.format,Nt.encoding),z=c.convert(Nt.type),vt=O(Nt.internalFormat,Kt,z,Nt.encoding),St=Te(V);at&&pe(V)===!1?h.renderbufferStorageMultisample(36161,St,vt,V.width,V.height):pe(V)?x.renderbufferStorageMultisampleEXT(36161,St,vt,V.width,V.height):h.renderbufferStorage(36161,vt,V.width,V.height)}}h.bindRenderbuffer(36161,null)}function oe(k,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,k),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(V.depthTexture).__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)&&(V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0),$(V.depthTexture,0);const Mt=r.get(V.depthTexture).__webglTexture,gt=Te(V);if(V.depthTexture.format===pn)pe(V)?x.framebufferTexture2DMultisampleEXT(36160,36096,3553,Mt,0,gt):h.framebufferTexture2D(36160,36096,3553,Mt,0);else if(V.depthTexture.format===tr)pe(V)?x.framebufferTexture2DMultisampleEXT(36160,33306,3553,Mt,0,gt):h.framebufferTexture2D(36160,33306,3553,Mt,0);else throw new Error("Unknown depthTexture format")}function Yt(k){const V=r.get(k),at=k.isWebGLCubeRenderTarget===!0;if(k.depthTexture&&!V.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");oe(V.__webglFramebuffer,k)}else if(at){V.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)e.bindFramebuffer(36160,V.__webglFramebuffer[Mt]),V.__webglDepthbuffer[Mt]=h.createRenderbuffer(),ue(V.__webglDepthbuffer[Mt],k,!1)}else e.bindFramebuffer(36160,V.__webglFramebuffer),V.__webglDepthbuffer=h.createRenderbuffer(),ue(V.__webglDepthbuffer,k,!1);e.bindFramebuffer(36160,null)}function ye(k,V,at){const Mt=r.get(k);V!==void 0&&xt(Mt.__webglFramebuffer,k,k.texture,36064,3553),at!==void 0&&Yt(k)}function Ae(k){const V=k.texture,at=r.get(k),Mt=r.get(V);k.addEventListener("dispose",At),k.isWebGLMultipleRenderTargets!==!0&&(Mt.__webglTexture===void 0&&(Mt.__webglTexture=h.createTexture()),Mt.__version=V.version,d.memory.textures++);const gt=k.isWebGLCubeRenderTarget===!0,Nt=k.isWebGLMultipleRenderTargets===!0,Kt=P(k)||m;if(gt){at.__webglFramebuffer=[];for(let z=0;z<6;z++)at.__webglFramebuffer[z]=h.createFramebuffer()}else{if(at.__webglFramebuffer=h.createFramebuffer(),Nt)if(o.drawBuffers){const z=k.texture;for(let vt=0,St=z.length;vt<St;vt++){const Bt=r.get(z[vt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=h.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(m&&k.samples>0&&pe(k)===!1){const z=Nt?V:[V];at.__webglMultisampledFramebuffer=h.createFramebuffer(),at.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer);for(let vt=0;vt<z.length;vt++){const St=z[vt];at.__webglColorRenderbuffer[vt]=h.createRenderbuffer(),h.bindRenderbuffer(36161,at.__webglColorRenderbuffer[vt]);const Bt=c.convert(St.format,St.encoding),q=c.convert(St.type),wt=O(St.internalFormat,Bt,q,St.encoding),Et=Te(k);h.renderbufferStorageMultisample(36161,Et,wt,k.width,k.height),h.framebufferRenderbuffer(36160,36064+vt,36161,at.__webglColorRenderbuffer[vt])}h.bindRenderbuffer(36161,null),k.depthBuffer&&(at.__webglDepthRenderbuffer=h.createRenderbuffer(),ue(at.__webglDepthRenderbuffer,k,!0)),e.bindFramebuffer(36160,null)}}if(gt){e.bindTexture(34067,Mt.__webglTexture),dt(34067,V,Kt);for(let z=0;z<6;z++)xt(at.__webglFramebuffer[z],k,V,36064,34069+z);J(V,Kt)&&tt(34067),e.unbindTexture()}else if(Nt){const z=k.texture;for(let vt=0,St=z.length;vt<St;vt++){const Bt=z[vt],q=r.get(Bt);e.bindTexture(3553,q.__webglTexture),dt(3553,Bt,Kt),xt(at.__webglFramebuffer,k,Bt,36064+vt,3553),J(Bt,Kt)&&tt(3553)}e.unbindTexture()}else{let z=3553;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(m?z=k.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(z,Mt.__webglTexture),dt(z,V,Kt),xt(at.__webglFramebuffer,k,V,36064,z),J(V,Kt)&&tt(z),e.unbindTexture()}k.depthBuffer&&Yt(k)}function Ee(k){const V=P(k)||m,at=k.isWebGLMultipleRenderTargets===!0?k.texture:[k.texture];for(let Mt=0,gt=at.length;Mt<gt;Mt++){const Nt=at[Mt];if(J(Nt,V)){const Kt=k.isWebGLCubeRenderTarget?34067:3553,z=r.get(Nt).__webglTexture;e.bindTexture(Kt,z),tt(Kt),e.unbindTexture()}}}function We(k){if(m&&k.samples>0&&pe(k)===!1){const V=k.isWebGLMultipleRenderTargets?k.texture:[k.texture],at=k.width,Mt=k.height;let gt=16384;const Nt=[],Kt=k.stencilBuffer?33306:36096,z=r.get(k),vt=k.isWebGLMultipleRenderTargets===!0;if(vt)for(let St=0;St<V.length;St++)e.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+St,36161,null),e.bindFramebuffer(36160,z.__webglFramebuffer),h.framebufferTexture2D(36009,36064+St,3553,null,0);e.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,z.__webglFramebuffer);for(let St=0;St<V.length;St++){Nt.push(36064+St),k.depthBuffer&&Nt.push(Kt);const Bt=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(Bt===!1&&(k.depthBuffer&&(gt|=256),k.stencilBuffer&&(gt|=1024)),vt&&h.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[St]),Bt===!0&&(h.invalidateFramebuffer(36008,[Kt]),h.invalidateFramebuffer(36009,[Kt])),vt){const q=r.get(V[St]).__webglTexture;h.framebufferTexture2D(36009,36064,3553,q,0)}h.blitFramebuffer(0,0,at,Mt,0,0,at,Mt,gt,9728),A&&h.invalidateFramebuffer(36008,Nt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),vt)for(let St=0;St<V.length;St++){e.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+St,36161,z.__webglColorRenderbuffer[St]);const Bt=r.get(V[St]).__webglTexture;e.bindFramebuffer(36160,z.__webglFramebuffer),h.framebufferTexture2D(36009,36064+St,3553,Bt,0)}e.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function Te(k){return Math.min(s,k.samples)}function pe(k){const V=r.get(k);return m&&k.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function qe(k){const V=d.render.frame;L.get(k)!==V&&(L.set(k,V),k.update())}function Xe(k,V){const at=k.encoding,Mt=k.format,gt=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||k.format===Hs||at!==yn&&(at===Be?m===!1?t.has("EXT_sRGB")===!0&&Mt===Ti?(k.format=Hs,k.minFilter=ai,k.generateMipmaps=!1):V=Na.sRGBToLinear(V):(Mt!==Ti||gt!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",at)),V}this.allocateTextureUnit=mt,this.resetTextureUnits=rt,this.setTexture2D=$,this.setTexture2DArray=Tt,this.setTexture3D=pt,this.setTextureCube=Dt,this.rebindTextures=ye,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=pe}function rf(h,t,e){const r=e.isWebGL2;function o(c,d=null){let m;if(c===gn)return 5121;if(c===Ql)return 32819;if(c===tc)return 32820;if(c===Zl)return 5120;if(c===Kl)return 5122;if(c===Va)return 5123;if(c===$l)return 5124;if(c===mn)return 5125;if(c===dn)return 5126;if(c===pr)return r?5131:(m=t.get("OES_texture_half_float"),m!==null?m.HALF_FLOAT_OES:null);if(c===ec)return 6406;if(c===Ti)return 6408;if(c===nc)return 6409;if(c===rc)return 6410;if(c===pn)return 6402;if(c===tr)return 34041;if(c===sc)return 6403;if(c===ic)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(c===Hs)return m=t.get("EXT_sRGB"),m!==null?m.SRGB_ALPHA_EXT:null;if(c===oc)return 36244;if(c===ac)return 33319;if(c===lc)return 33320;if(c===cc)return 36249;if(c===ns||c===rs||c===ss||c===os)if(d===Be)if(m=t.get("WEBGL_compressed_texture_s3tc_srgb"),m!==null){if(c===ns)return m.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===rs)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===ss)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===os)return m.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(m=t.get("WEBGL_compressed_texture_s3tc"),m!==null){if(c===ns)return m.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===rs)return m.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===ss)return m.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===os)return m.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===_o||c===vo||c===go||c===yo)if(m=t.get("WEBGL_compressed_texture_pvrtc"),m!==null){if(c===_o)return m.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===vo)return m.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===go)return m.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===yo)return m.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===hc)return m=t.get("WEBGL_compressed_texture_etc1"),m!==null?m.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===xo||c===bo)if(m=t.get("WEBGL_compressed_texture_etc"),m!==null){if(c===xo)return d===Be?m.COMPRESSED_SRGB8_ETC2:m.COMPRESSED_RGB8_ETC2;if(c===bo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:m.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Ao||c===Mo||c===wo||c===So||c===Co||c===To||c===Bo||c===Eo||c===Lo||c===Po||c===Io||c===Do||c===Vo||c===Ro)if(m=t.get("WEBGL_compressed_texture_astc"),m!==null){if(c===Ao)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:m.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Mo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:m.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===wo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:m.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===So)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:m.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Co)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:m.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===To)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:m.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Bo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:m.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Eo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:m.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Lo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:m.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Po)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:m.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Io)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:m.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===Do)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:m.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Vo)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:m.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===Ro)return d===Be?m.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:m.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Fo)if(m=t.get("EXT_texture_compression_bptc"),m!==null){if(c===Fo)return d===Be?m.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:m.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return c===Jn?r?34042:(m=t.get("WEBGL_depth_texture"),m!==null?m.UNSIGNED_INT_24_8_WEBGL:null):h[c]!==void 0?h[c]:null}return{convert:o}}class sf extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dr extends hi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const of={type:"move"};class Rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let o=null,c=null,d=null;const m=this._targetRay,g=this._grip,v=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(v&&t.hand){d=!0;for(const M of t.hand.values()){const b=e.getJointPose(M,r);if(v.joints[M.jointName]===void 0){const U=new dr;U.matrixAutoUpdate=!1,U.visible=!1,v.joints[M.jointName]=U,v.add(U)}const D=v.joints[M.jointName];b!==null&&(D.matrix.fromArray(b.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.jointRadius=b.radius),D.visible=b!==null}const f=v.joints["index-finger-tip"],s=v.joints["thumb-tip"],x=f.position.distanceTo(s.position),A=.02,L=.005;v.inputState.pinching&&x>A+L?(v.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!v.inputState.pinching&&x<=A-L&&(v.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,r),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));m!==null&&(o=e.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(m.matrix.fromArray(o.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),o.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(o.linearVelocity)):m.hasLinearVelocity=!1,o.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(o.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(of)))}return m!==null&&(m.visible=o!==null),g!==null&&(g.visible=c!==null),v!==null&&(v.visible=d!==null),this}}class af extends ci{constructor(t,e,r,o,c,d,m,g,v,f){if(f=f!==void 0?f:pn,f!==pn&&f!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&f===pn&&(r=mn),r===void 0&&f===tr&&(r=Jn),super(null,o,c,d,m,g,f,r,v),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=m!==void 0?m:He,this.minFilter=g!==void 0?g:He,this.flipY=!1,this.generateMipmaps=!1}}class lf extends Mn{constructor(t,e){super();const r=this;let o=null,c=1,d=null,m="local-floor",g=null,v=null,f=null,s=null,x=null,A=null;const L=e.getContextAttributes();let M=null,b=null;const D=[],U=[],S=new gi;S.layers.enable(1),S.viewport=new Fe;const P=new gi;P.layers.enable(2),P.viewport=new Fe;const G=[S,P],J=new sf;J.layers.enable(1),J.layers.enable(2);let tt=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let $=D[et];return $===void 0&&($=new Rs,D[et]=$),$.getTargetRaySpace()},this.getControllerGrip=function(et){let $=D[et];return $===void 0&&($=new Rs,D[et]=$),$.getGripSpace()},this.getHand=function(et){let $=D[et];return $===void 0&&($=new Rs,D[et]=$),$.getHandSpace()};function X(et){const $=U.indexOf(et.inputSource);if($===-1)return;const Tt=D[$];Tt!==void 0&&Tt.dispatchEvent({type:et.type,data:et.inputSource})}function lt(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",lt),o.removeEventListener("inputsourceschange",nt);for(let et=0;et<D.length;et++){const $=U[et];$!==null&&(U[et]=null,D[et].disconnect($))}tt=null,O=null,t.setRenderTarget(M),x=null,s=null,f=null,o=null,b=null,mt.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){m=et,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||d},this.setReferenceSpace=function(et){g=et},this.getBaseLayer=function(){return s!==null?s:x},this.getBinding=function(){return f},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(et){if(o=et,o!==null){if(M=t.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",lt),o.addEventListener("inputsourceschange",nt),L.xrCompatible!==!0&&await e.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:o.renderState.layers===void 0?L.antialias:!0,alpha:L.alpha,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(o,e,$),o.updateRenderState({baseLayer:x}),b=new xn(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:gn,encoding:t.outputEncoding})}else{let $=null,Tt=null,pt=null;L.depth&&(pt=L.stencil?35056:33190,$=L.stencil?tr:pn,Tt=L.stencil?Jn:mn);const Dt={colorFormat:32856,depthFormat:pt,scaleFactor:c};f=new XRWebGLBinding(o,e),s=f.createProjectionLayer(Dt),o.updateRenderState({layers:[s]}),b=new xn(s.textureWidth,s.textureHeight,{format:Ti,type:gn,depthTexture:new af(s.textureWidth,s.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:L.stencil,encoding:t.outputEncoding,samples:L.antialias?4:0});const Ot=t.properties.get(b);Ot.__ignoreDepthValues=s.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(1),g=null,d=await o.requestReferenceSpace(m),mt.setContext(o),mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function nt(et){for(let $=0;$<et.removed.length;$++){const Tt=et.removed[$],pt=U.indexOf(Tt);pt>=0&&(U[pt]=null,D[pt].dispatchEvent({type:"disconnected",data:Tt}))}for(let $=0;$<et.added.length;$++){const Tt=et.added[$];let pt=U.indexOf(Tt);if(pt===-1){for(let Ot=0;Ot<D.length;Ot++)if(Ot>=U.length){U.push(Tt),pt=Ot;break}else if(U[Ot]===null){U[Ot]=Tt,pt=Ot;break}if(pt===-1)break}const Dt=D[pt];Dt&&Dt.dispatchEvent({type:"connected",data:Tt})}}const At=new K,Pt=new K;function Z(et,$,Tt){At.setFromMatrixPosition($.matrixWorld),Pt.setFromMatrixPosition(Tt.matrixWorld);const pt=At.distanceTo(Pt),Dt=$.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),dt=Dt[14]/(Dt[10]+1),Ce=(Dt[9]+1)/Dt[5],ae=(Dt[9]-1)/Dt[5],Zt=(Dt[8]-1)/Dt[0],xt=(Ot[8]+1)/Ot[0],ue=kt*Zt,oe=kt*xt,Yt=pt/(-Zt+xt),ye=Yt*-Zt;$.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ye),et.translateZ(Yt),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const Ae=kt+Yt,Ee=dt+Yt,We=ue-ye,Te=oe+(pt-ye),pe=Ce*dt/Ee*Ae,qe=ae*dt/Ee*Ae;et.projectionMatrix.makePerspective(We,Te,pe,qe,Ae,Ee)}function ct(et,$){$===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices($.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(o===null)return;J.near=P.near=S.near=et.near,J.far=P.far=S.far=et.far,(tt!==J.near||O!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),tt=J.near,O=J.far);const $=et.parent,Tt=J.cameras;ct(J,$);for(let Dt=0;Dt<Tt.length;Dt++)ct(Tt[Dt],$);J.matrixWorld.decompose(J.position,J.quaternion,J.scale),et.position.copy(J.position),et.quaternion.copy(J.quaternion),et.scale.copy(J.scale),et.matrix.copy(J.matrix),et.matrixWorld.copy(J.matrixWorld);const pt=et.children;for(let Dt=0,Ot=pt.length;Dt<Ot;Dt++)pt[Dt].updateMatrixWorld(!0);Tt.length===2?Z(J,S,P):J.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return J},this.getFoveation=function(){if(s!==null)return s.fixedFoveation;if(x!==null)return x.fixedFoveation},this.setFoveation=function(et){s!==null&&(s.fixedFoveation=et),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=et)};let ot=null;function rt(et,$){if(v=$.getViewerPose(g||d),A=$,v!==null){const Tt=v.views;x!==null&&(t.setRenderTargetFramebuffer(b,x.framebuffer),t.setRenderTarget(b));let pt=!1;Tt.length!==J.cameras.length&&(J.cameras.length=0,pt=!0);for(let Dt=0;Dt<Tt.length;Dt++){const Ot=Tt[Dt];let kt=null;if(x!==null)kt=x.getViewport(Ot);else{const Ce=f.getViewSubImage(s,Ot);kt=Ce.viewport,Dt===0&&(t.setRenderTargetTextures(b,Ce.colorTexture,s.ignoreDepthValues?void 0:Ce.depthStencilTexture),t.setRenderTarget(b))}let dt=G[Dt];dt===void 0&&(dt=new gi,dt.layers.enable(Dt),dt.viewport=new Fe,G[Dt]=dt),dt.matrix.fromArray(Ot.transform.matrix),dt.projectionMatrix.fromArray(Ot.projectionMatrix),dt.viewport.set(kt.x,kt.y,kt.width,kt.height),Dt===0&&J.matrix.copy(dt.matrix),pt===!0&&J.cameras.push(dt)}}for(let Tt=0;Tt<D.length;Tt++){const pt=U[Tt],Dt=D[Tt];pt!==null&&Dt!==void 0&&Dt.update(pt,$,g||d)}ot&&ot(et,$),A=null}const mt=new Ya;mt.setAnimationLoop(rt),this.setAnimationLoop=function(et){ot=et},this.dispose=function(){}}}function cf(h,t){function e(M,b){M.fogColor.value.copy(b.color),b.isFog?(M.fogNear.value=b.near,M.fogFar.value=b.far):b.isFogExp2&&(M.fogDensity.value=b.density)}function r(M,b,D,U,S){b.isMeshBasicMaterial||b.isMeshLambertMaterial?o(M,b):b.isMeshToonMaterial?(o(M,b),f(M,b)):b.isMeshPhongMaterial?(o(M,b),v(M,b)):b.isMeshStandardMaterial?(o(M,b),s(M,b),b.isMeshPhysicalMaterial&&x(M,b,S)):b.isMeshMatcapMaterial?(o(M,b),A(M,b)):b.isMeshDepthMaterial?o(M,b):b.isMeshDistanceMaterial?(o(M,b),L(M,b)):b.isMeshNormalMaterial?o(M,b):b.isLineBasicMaterial?(c(M,b),b.isLineDashedMaterial&&d(M,b)):b.isPointsMaterial?m(M,b,D,U):b.isSpriteMaterial?g(M,b):b.isShadowMaterial?(M.color.value.copy(b.color),M.opacity.value=b.opacity):b.isShaderMaterial&&(b.uniformsNeedUpdate=!1)}function o(M,b){M.opacity.value=b.opacity,b.color&&M.diffuse.value.copy(b.color),b.emissive&&M.emissive.value.copy(b.emissive).multiplyScalar(b.emissiveIntensity),b.map&&(M.map.value=b.map),b.alphaMap&&(M.alphaMap.value=b.alphaMap),b.bumpMap&&(M.bumpMap.value=b.bumpMap,M.bumpScale.value=b.bumpScale,b.side===xi&&(M.bumpScale.value*=-1)),b.displacementMap&&(M.displacementMap.value=b.displacementMap,M.displacementScale.value=b.displacementScale,M.displacementBias.value=b.displacementBias),b.emissiveMap&&(M.emissiveMap.value=b.emissiveMap),b.normalMap&&(M.normalMap.value=b.normalMap,M.normalScale.value.copy(b.normalScale),b.side===xi&&M.normalScale.value.negate()),b.specularMap&&(M.specularMap.value=b.specularMap),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);const D=t.get(b).envMap;if(D&&(M.envMap.value=D,M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=b.reflectivity,M.ior.value=b.ior,M.refractionRatio.value=b.refractionRatio),b.lightMap){M.lightMap.value=b.lightMap;const P=h.physicallyCorrectLights!==!0?Math.PI:1;M.lightMapIntensity.value=b.lightMapIntensity*P}b.aoMap&&(M.aoMap.value=b.aoMap,M.aoMapIntensity.value=b.aoMapIntensity);let U;b.map?U=b.map:b.specularMap?U=b.specularMap:b.displacementMap?U=b.displacementMap:b.normalMap?U=b.normalMap:b.bumpMap?U=b.bumpMap:b.roughnessMap?U=b.roughnessMap:b.metalnessMap?U=b.metalnessMap:b.alphaMap?U=b.alphaMap:b.emissiveMap?U=b.emissiveMap:b.clearcoatMap?U=b.clearcoatMap:b.clearcoatNormalMap?U=b.clearcoatNormalMap:b.clearcoatRoughnessMap?U=b.clearcoatRoughnessMap:b.iridescenceMap?U=b.iridescenceMap:b.iridescenceThicknessMap?U=b.iridescenceThicknessMap:b.specularIntensityMap?U=b.specularIntensityMap:b.specularColorMap?U=b.specularColorMap:b.transmissionMap?U=b.transmissionMap:b.thicknessMap?U=b.thicknessMap:b.sheenColorMap?U=b.sheenColorMap:b.sheenRoughnessMap&&(U=b.sheenRoughnessMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),M.uvTransform.value.copy(U.matrix));let S;b.aoMap?S=b.aoMap:b.lightMap&&(S=b.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),M.uv2Transform.value.copy(S.matrix))}function c(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity}function d(M,b){M.dashSize.value=b.dashSize,M.totalSize.value=b.dashSize+b.gapSize,M.scale.value=b.scale}function m(M,b,D,U){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.size.value=b.size*D,M.scale.value=U*.5,b.map&&(M.map.value=b.map),b.alphaMap&&(M.alphaMap.value=b.alphaMap),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);let S;b.map?S=b.map:b.alphaMap&&(S=b.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),M.uvTransform.value.copy(S.matrix))}function g(M,b){M.diffuse.value.copy(b.color),M.opacity.value=b.opacity,M.rotation.value=b.rotation,b.map&&(M.map.value=b.map),b.alphaMap&&(M.alphaMap.value=b.alphaMap),b.alphaTest>0&&(M.alphaTest.value=b.alphaTest);let D;b.map?D=b.map:b.alphaMap&&(D=b.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),M.uvTransform.value.copy(D.matrix))}function v(M,b){M.specular.value.copy(b.specular),M.shininess.value=Math.max(b.shininess,1e-4)}function f(M,b){b.gradientMap&&(M.gradientMap.value=b.gradientMap)}function s(M,b){M.roughness.value=b.roughness,M.metalness.value=b.metalness,b.roughnessMap&&(M.roughnessMap.value=b.roughnessMap),b.metalnessMap&&(M.metalnessMap.value=b.metalnessMap),t.get(b).envMap&&(M.envMapIntensity.value=b.envMapIntensity)}function x(M,b,D){M.ior.value=b.ior,b.sheen>0&&(M.sheenColor.value.copy(b.sheenColor).multiplyScalar(b.sheen),M.sheenRoughness.value=b.sheenRoughness,b.sheenColorMap&&(M.sheenColorMap.value=b.sheenColorMap),b.sheenRoughnessMap&&(M.sheenRoughnessMap.value=b.sheenRoughnessMap)),b.clearcoat>0&&(M.clearcoat.value=b.clearcoat,M.clearcoatRoughness.value=b.clearcoatRoughness,b.clearcoatMap&&(M.clearcoatMap.value=b.clearcoatMap),b.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=b.clearcoatRoughnessMap),b.clearcoatNormalMap&&(M.clearcoatNormalScale.value.copy(b.clearcoatNormalScale),M.clearcoatNormalMap.value=b.clearcoatNormalMap,b.side===xi&&M.clearcoatNormalScale.value.negate())),b.iridescence>0&&(M.iridescence.value=b.iridescence,M.iridescenceIOR.value=b.iridescenceIOR,M.iridescenceThicknessMinimum.value=b.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=b.iridescenceThicknessRange[1],b.iridescenceMap&&(M.iridescenceMap.value=b.iridescenceMap),b.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=b.iridescenceThicknessMap)),b.transmission>0&&(M.transmission.value=b.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),b.transmissionMap&&(M.transmissionMap.value=b.transmissionMap),M.thickness.value=b.thickness,b.thicknessMap&&(M.thicknessMap.value=b.thicknessMap),M.attenuationDistance.value=b.attenuationDistance,M.attenuationColor.value.copy(b.attenuationColor)),M.specularIntensity.value=b.specularIntensity,M.specularColor.value.copy(b.specularColor),b.specularIntensityMap&&(M.specularIntensityMap.value=b.specularIntensityMap),b.specularColorMap&&(M.specularColorMap.value=b.specularColorMap)}function A(M,b){b.matcap&&(M.matcap.value=b.matcap)}function L(M,b){M.referencePosition.value.copy(b.referencePosition),M.nearDistance.value=b.nearDistance,M.farDistance.value=b.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:r}}function hf(){const h=Xr("canvas");return h.style.display="block",h}function tl(h={}){this.isWebGLRenderer=!0;const t=h.canvas!==void 0?h.canvas:hf(),e=h.context!==void 0?h.context:null,r=h.depth!==void 0?h.depth:!0,o=h.stencil!==void 0?h.stencil:!0,c=h.antialias!==void 0?h.antialias:!1,d=h.premultipliedAlpha!==void 0?h.premultipliedAlpha:!0,m=h.preserveDrawingBuffer!==void 0?h.preserveDrawingBuffer:!1,g=h.powerPreference!==void 0?h.powerPreference:"default",v=h.failIfMajorPerformanceCaveat!==void 0?h.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=h.alpha!==void 0?h.alpha:!1;let s=null,x=null;const A=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yn,this.physicallyCorrectLights=!1,this.toneMapping=Gi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const M=this;let b=!1,D=0,U=0,S=null,P=-1,G=null;const J=new Fe,tt=new Fe;let O=null,X=t.width,lt=t.height,nt=1,At=null,Pt=null;const Z=new Fe(0,0,X,lt),ct=new Fe(0,0,X,lt);let ot=!1;const rt=new Xa;let mt=!1,et=!1,$=null;const Tt=new Oe,pt=new le,Dt=new K,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return S===null?nt:1}let dt=e;function Ce(F,Q){for(let st=0;st<F.length;st++){const it=F[st],_t=t.getContext(it,Q);if(_t!==null)return _t}return null}try{const F={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${js}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Et,!1),dt===null){const Q=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Q.shift(),dt=Ce(Q,F),dt===null)throw Ce(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}dt.getShaderPrecisionFormat===void 0&&(dt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(F){throw console.error("THREE.WebGLRenderer: "+F.message),F}let ae,Zt,xt,ue,oe,Yt,ye,Ae,Ee,We,Te,pe,qe,Xe,k,V,at,Mt,gt,Nt,Kt,z,vt;function St(){ae=new xm(dt),Zt=new fm(dt,ae,h),ae.init(Zt),z=new rf(dt,ae,Zt),xt=new ef(dt,ae,Zt),ue=new Mm,oe=new kd,Yt=new nf(dt,ae,xt,oe,Zt,z,ue),ye=new _m(M),Ae=new ym(M),Ee=new Rc(dt,Zt),vt=new mm(dt,ae,Ee,Zt),We=new bm(dt,Ee,ue,vt),Te=new Tm(dt,We,Ee,ue),gt=new Cm(dt,Zt,Yt),V=new pm(oe),pe=new Ud(M,ye,Ae,ae,Zt,vt,V),qe=new cf(M,oe),Xe=new Hd,k=new Jd(ae,Zt),Mt=new um(M,ye,xt,Te,f,d),at=new tf(M,Te,Zt),Nt=new dm(dt,ae,ue,Zt),Kt=new Am(dt,ae,ue,Zt),ue.programs=pe.programs,M.capabilities=Zt,M.extensions=ae,M.properties=oe,M.renderLists=Xe,M.shadowMap=at,M.state=xt,M.info=ue}St();const Bt=new lf(M,dt);this.xr=Bt,this.getContext=function(){return dt},this.getContextAttributes=function(){return dt.getContextAttributes()},this.forceContextLoss=function(){const F=ae.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=ae.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(F){F!==void 0&&(nt=F,this.setSize(X,lt,!1))},this.getSize=function(F){return F.set(X,lt)},this.setSize=function(F,Q,st){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=F,lt=Q,t.width=Math.floor(F*nt),t.height=Math.floor(Q*nt),st!==!1&&(t.style.width=F+"px",t.style.height=Q+"px"),this.setViewport(0,0,F,Q)},this.getDrawingBufferSize=function(F){return F.set(X*nt,lt*nt).floor()},this.setDrawingBufferSize=function(F,Q,st){X=F,lt=Q,nt=st,t.width=Math.floor(F*st),t.height=Math.floor(Q*st),this.setViewport(0,0,F,Q)},this.getCurrentViewport=function(F){return F.copy(J)},this.getViewport=function(F){return F.copy(Z)},this.setViewport=function(F,Q,st,it){F.isVector4?Z.set(F.x,F.y,F.z,F.w):Z.set(F,Q,st,it),xt.viewport(J.copy(Z).multiplyScalar(nt).floor())},this.getScissor=function(F){return F.copy(ct)},this.setScissor=function(F,Q,st,it){F.isVector4?ct.set(F.x,F.y,F.z,F.w):ct.set(F,Q,st,it),xt.scissor(tt.copy(ct).multiplyScalar(nt).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(F){xt.setScissorTest(ot=F)},this.setOpaqueSort=function(F){At=F},this.setTransparentSort=function(F){Pt=F},this.getClearColor=function(F){return F.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(F=!0,Q=!0,st=!0){let it=0;F&&(it|=16384),Q&&(it|=256),st&&(it|=1024),dt.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Xe.dispose(),k.dispose(),oe.dispose(),ye.dispose(),Ae.dispose(),Te.dispose(),vt.dispose(),pe.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",fe),Bt.removeEventListener("sessionend",zt),$&&($.dispose(),$=null),Me.stop()};function q(F){F.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const F=ue.autoReset,Q=at.enabled,st=at.autoUpdate,it=at.needsUpdate,_t=at.type;St(),ue.autoReset=F,at.enabled=Q,at.autoUpdate=st,at.needsUpdate=it,at.type=_t}function Et(F){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function Xt(F){const Q=F.target;Q.removeEventListener("dispose",Xt),Vt(Q)}function Vt(F){Gt(F),oe.remove(F)}function Gt(F){const Q=oe.get(F).programs;Q!==void 0&&(Q.forEach(function(st){pe.releaseProgram(st)}),F.isShaderMaterial&&pe.releaseShaderCache(F))}this.renderBufferDirect=function(F,Q,st,it,_t,Wt){Q===null&&(Q=Ot);const te=_t.isMesh&&_t.matrixWorld.determinant()<0,se=Qr(F,Q,st,it,_t);xt.setMaterial(it,te);let ne=st.index;const _e=st.attributes.position;if(ne===null){if(_e===void 0||_e.count===0)return}else if(ne.count===0)return;let me=1;it.wireframe===!0&&(ne=We.getWireframeAttribute(st),me=2),vt.setup(_t,it,se,st,ne);let he,we=Nt;ne!==null&&(he=Ee.get(ne),we=Kt,we.setIndex(he));const mi=ne!==null?ne.count:_e.count,Wi=st.drawRange.start*me,Mi=st.drawRange.count*me,ri=Wt!==null?Wt.start*me:0,de=Wt!==null?Wt.count*me:1/0,qi=Math.max(Wi,ri),Se=Math.min(mi,Wi+Mi,ri+de)-1,$e=Math.max(0,Se-qi+1);if($e!==0){if(_t.isMesh)it.wireframe===!0?(xt.setLineWidth(it.wireframeLinewidth*kt()),we.setMode(1)):we.setMode(4);else if(_t.isLine){let wi=it.linewidth;wi===void 0&&(wi=1),xt.setLineWidth(wi*kt()),_t.isLineSegments?we.setMode(1):_t.isLineLoop?we.setMode(2):we.setMode(3)}else _t.isPoints?we.setMode(0):_t.isSprite&&we.setMode(4);if(_t.isInstancedMesh)we.renderInstances(qi,$e,_t.count);else if(st.isInstancedBufferGeometry){const wi=Math.min(st.instanceCount,st._maxInstanceCount);we.renderInstances(qi,$e,wi)}else we.render(qi,$e)}},this.compile=function(F,Q){x=k.get(F),x.init(),L.push(x),F.traverseVisible(function(st){st.isLight&&st.layers.test(Q.layers)&&(x.pushLight(st),st.castShadow&&x.pushShadow(st))}),x.setupLights(M.physicallyCorrectLights),F.traverse(function(st){const it=st.material;if(it)if(Array.isArray(it))for(let _t=0;_t<it.length;_t++){const Wt=it[_t];rr(Wt,F,st)}else rr(it,F,st)}),L.pop(),x=null};let Lt=null;function Qt(F){Lt&&Lt(F)}function fe(){Me.stop()}function zt(){Me.start()}const Me=new Ya;Me.setAnimationLoop(Qt),typeof self<"u"&&Me.setContext(self),this.setAnimationLoop=function(F){Lt=F,Bt.setAnimationLoop(F),F===null?Me.stop():Me.start()},Bt.addEventListener("sessionstart",fe),Bt.addEventListener("sessionend",zt),this.render=function(F,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;F.autoUpdate===!0&&F.updateMatrixWorld(),Q.parent===null&&Q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(Q),Q=Bt.getCamera()),F.isScene===!0&&F.onBeforeRender(M,F,Q,S),x=k.get(F,L.length),x.init(),L.push(x),Tt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),rt.setFromProjectionMatrix(Tt),et=this.localClippingEnabled,mt=V.init(this.clippingPlanes,et,Q),s=Xe.get(F,A.length),s.init(),A.push(s),Ue(F,Q,0,M.sortObjects),s.finish(),M.sortObjects===!0&&s.sort(At,Pt),mt===!0&&V.beginShadows();const st=x.state.shadowsArray;if(at.render(st,F,Q),mt===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(s,F),x.setupLights(M.physicallyCorrectLights),Q.isArrayCamera){const it=Q.cameras;for(let _t=0,Wt=it.length;_t<Wt;_t++){const te=it[_t];ni(s,F,te,te.viewport)}}else ni(s,F,Q);S!==null&&(Yt.updateMultisampleRenderTarget(S),Yt.updateRenderTargetMipmap(S)),F.isScene===!0&&F.onAfterRender(M,F,Q),vt.resetDefaultState(),P=-1,G=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,A.pop(),A.length>0?s=A[A.length-1]:s=null};function Ue(F,Q,st,it){if(F.visible===!1)return;if(F.layers.test(Q.layers)){if(F.isGroup)st=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(Q);else if(F.isLight)x.pushLight(F),F.castShadow&&x.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||rt.intersectsSprite(F)){it&&Dt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Tt);const te=Te.update(F),se=F.material;se.visible&&s.push(F,te,se,st,Dt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(F.isSkinnedMesh&&F.skeleton.frame!==ue.render.frame&&(F.skeleton.update(),F.skeleton.frame=ue.render.frame),!F.frustumCulled||rt.intersectsObject(F))){it&&Dt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(Tt);const te=Te.update(F),se=F.material;if(Array.isArray(se)){const ne=te.groups;for(let _e=0,me=ne.length;_e<me;_e++){const he=ne[_e],we=se[he.materialIndex];we&&we.visible&&s.push(F,te,we,st,Dt.z,he)}}else se.visible&&s.push(F,te,se,st,Dt.z,null)}}const Wt=F.children;for(let te=0,se=Wt.length;te<se;te++)Ue(Wt[te],Q,st,it)}function ni(F,Q,st,it){const _t=F.opaque,Wt=F.transmissive,te=F.transparent;x.setupLightsView(st),Wt.length>0&&$r(_t,Q,st),it&&xt.viewport(J.copy(it)),_t.length>0&&Hi(_t,Q,st),Wt.length>0&&Hi(Wt,Q,st),te.length>0&&Hi(te,Q,st),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function $r(F,Q,st){const it=Zt.isWebGL2;$===null&&($=new xn(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")?pr:gn,minFilter:Jr,samples:it&&c===!0?4:0})),M.getDrawingBufferSize(pt),it?$.setSize(pt.x,pt.y):$.setSize(Ws(pt.x),Ws(pt.y));const _t=M.getRenderTarget();M.setRenderTarget($),M.clear();const Wt=M.toneMapping;M.toneMapping=Gi,Hi(F,Q,st),M.toneMapping=Wt,Yt.updateMultisampleRenderTarget($),Yt.updateRenderTargetMipmap($),M.setRenderTarget(_t)}function Hi(F,Q,st){const it=Q.isScene===!0?Q.overrideMaterial:null;for(let _t=0,Wt=F.length;_t<Wt;_t++){const te=F[_t],se=te.object,ne=te.geometry,_e=it===null?te.material:it,me=te.group;se.layers.test(st.layers)&&Ai(se,Q,st,ne,_e,me)}}function Ai(F,Q,st,it,_t,Wt){F.onBeforeRender(M,Q,st,it,_t,Wt),F.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),_t.onBeforeRender(M,Q,st,it,F,Wt),_t.transparent===!0&&_t.side===Kn?(_t.side=xi,_t.needsUpdate=!0,M.renderBufferDirect(st,Q,it,_t,F,Wt),_t.side=fr,_t.needsUpdate=!0,M.renderBufferDirect(st,Q,it,_t,F,Wt),_t.side=Kn):M.renderBufferDirect(st,Q,it,_t,F,Wt),F.onAfterRender(M,Q,st,it,_t,Wt)}function rr(F,Q,st){Q.isScene!==!0&&(Q=Ot);const it=oe.get(F),_t=x.state.lights,Wt=x.state.shadowsArray,te=_t.state.version,se=pe.getParameters(F,_t.state,Wt,Q,st),ne=pe.getProgramCacheKey(se);let _e=it.programs;it.environment=F.isMeshStandardMaterial?Q.environment:null,it.fog=Q.fog,it.envMap=(F.isMeshStandardMaterial?Ae:ye).get(F.envMap||it.environment),_e===void 0&&(F.addEventListener("dispose",Xt),_e=new Map,it.programs=_e);let me=_e.get(ne);if(me!==void 0){if(it.currentProgram===me&&it.lightsStateVersion===te)return Sn(F,se),me}else se.uniforms=pe.getUniforms(F),F.onBuild(st,se,M),F.onBeforeCompile(se,M),me=pe.acquireProgram(se,ne),_e.set(ne,me),it.uniforms=se.uniforms;const he=it.uniforms;(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(he.clippingPlanes=V.uniform),Sn(F,se),it.needsLights=ui(F),it.lightsStateVersion=te,it.needsLights&&(he.ambientLightColor.value=_t.state.ambient,he.lightProbe.value=_t.state.probe,he.directionalLights.value=_t.state.directional,he.directionalLightShadows.value=_t.state.directionalShadow,he.spotLights.value=_t.state.spot,he.spotLightShadows.value=_t.state.spotShadow,he.rectAreaLights.value=_t.state.rectArea,he.ltc_1.value=_t.state.rectAreaLTC1,he.ltc_2.value=_t.state.rectAreaLTC2,he.pointLights.value=_t.state.point,he.pointLightShadows.value=_t.state.pointShadow,he.hemisphereLights.value=_t.state.hemi,he.directionalShadowMap.value=_t.state.directionalShadowMap,he.directionalShadowMatrix.value=_t.state.directionalShadowMatrix,he.spotShadowMap.value=_t.state.spotShadowMap,he.spotShadowMatrix.value=_t.state.spotShadowMatrix,he.pointShadowMap.value=_t.state.pointShadowMap,he.pointShadowMatrix.value=_t.state.pointShadowMatrix);const we=me.getUniforms(),mi=qr.seqWithValue(we.seq,he);return it.currentProgram=me,it.uniformsList=mi,me}function Sn(F,Q){const st=oe.get(F);st.outputEncoding=Q.outputEncoding,st.instancing=Q.instancing,st.skinning=Q.skinning,st.morphTargets=Q.morphTargets,st.morphNormals=Q.morphNormals,st.morphColors=Q.morphColors,st.morphTargetsCount=Q.morphTargetsCount,st.numClippingPlanes=Q.numClippingPlanes,st.numIntersection=Q.numClipIntersection,st.vertexAlphas=Q.vertexAlphas,st.vertexTangents=Q.vertexTangents,st.toneMapping=Q.toneMapping}function Qr(F,Q,st,it,_t){Q.isScene!==!0&&(Q=Ot),Yt.resetTextureUnits();const Wt=Q.fog,te=it.isMeshStandardMaterial?Q.environment:null,se=S===null?M.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:yn,ne=(it.isMeshStandardMaterial?Ae:ye).get(it.envMap||te),_e=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,me=!!it.normalMap&&!!st.attributes.tangent,he=!!st.morphAttributes.position,we=!!st.morphAttributes.normal,mi=!!st.morphAttributes.color,Wi=it.toneMapped?M.toneMapping:Gi,Mi=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ri=Mi!==void 0?Mi.length:0,de=oe.get(it),qi=x.state.lights;if(mt===!0&&(et===!0||F!==G)){const Ze=F===G&&it.id===P;V.setState(it,F,Ze)}let Se=!1;it.version===de.__version?(de.needsLights&&de.lightsStateVersion!==qi.state.version||de.outputEncoding!==se||_t.isInstancedMesh&&de.instancing===!1||!_t.isInstancedMesh&&de.instancing===!0||_t.isSkinnedMesh&&de.skinning===!1||!_t.isSkinnedMesh&&de.skinning===!0||de.envMap!==ne||it.fog===!0&&de.fog!==Wt||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==V.numPlanes||de.numIntersection!==V.numIntersection)||de.vertexAlphas!==_e||de.vertexTangents!==me||de.morphTargets!==he||de.morphNormals!==we||de.morphColors!==mi||de.toneMapping!==Wi||Zt.isWebGL2===!0&&de.morphTargetsCount!==ri)&&(Se=!0):(Se=!0,de.__version=it.version);let $e=de.currentProgram;Se===!0&&($e=rr(it,Q,_t));let wi=!1,rn=!1,sn=!1;const ze=$e.getUniforms(),Li=de.uniforms;if(xt.useProgram($e.program)&&(wi=!0,rn=!0,sn=!0),it.id!==P&&(P=it.id,rn=!0),wi||G!==F){if(ze.setValue(dt,"projectionMatrix",F.projectionMatrix),Zt.logarithmicDepthBuffer&&ze.setValue(dt,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),G!==F&&(G=F,rn=!0,sn=!0),it.isShaderMaterial||it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshStandardMaterial||it.envMap){const Ze=ze.map.cameraPosition;Ze!==void 0&&Ze.setValue(dt,Dt.setFromMatrixPosition(F.matrixWorld))}(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(dt,"isOrthographic",F.isOrthographicCamera===!0),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial||it.isShadowMaterial||_t.isSkinnedMesh)&&ze.setValue(dt,"viewMatrix",F.matrixWorldInverse)}if(_t.isSkinnedMesh){ze.setOptional(dt,_t,"bindMatrix"),ze.setOptional(dt,_t,"bindMatrixInverse");const Ze=_t.skeleton;Ze&&(Zt.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),ze.setValue(dt,"boneTexture",Ze.boneTexture,Yt),ze.setValue(dt,"boneTextureSize",Ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const or=st.morphAttributes;return(or.position!==void 0||or.normal!==void 0||or.color!==void 0&&Zt.isWebGL2===!0)&&gt.update(_t,st,it,$e),(rn||de.receiveShadow!==_t.receiveShadow)&&(de.receiveShadow=_t.receiveShadow,ze.setValue(dt,"receiveShadow",_t.receiveShadow)),rn&&(ze.setValue(dt,"toneMappingExposure",M.toneMappingExposure),de.needsLights&&sr(Li,sn),Wt&&it.fog===!0&&qe.refreshFogUniforms(Li,Wt),qe.refreshMaterialUniforms(Li,it,nt,lt,$),qr.upload(dt,de.uniformsList,Li,Yt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(qr.upload(dt,de.uniformsList,Li,Yt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(dt,"center",_t.center),ze.setValue(dt,"modelViewMatrix",_t.modelViewMatrix),ze.setValue(dt,"normalMatrix",_t.normalMatrix),ze.setValue(dt,"modelMatrix",_t.matrixWorld),$e}function sr(F,Q){F.ambientLightColor.needsUpdate=Q,F.lightProbe.needsUpdate=Q,F.directionalLights.needsUpdate=Q,F.directionalLightShadows.needsUpdate=Q,F.pointLights.needsUpdate=Q,F.pointLightShadows.needsUpdate=Q,F.spotLights.needsUpdate=Q,F.spotLightShadows.needsUpdate=Q,F.rectAreaLights.needsUpdate=Q,F.hemisphereLights.needsUpdate=Q}function ui(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(F,Q,st){oe.get(F.texture).__webglTexture=Q,oe.get(F.depthTexture).__webglTexture=st;const it=oe.get(F);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=st===void 0,it.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(F,Q){const st=oe.get(F);st.__webglFramebuffer=Q,st.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(F,Q=0,st=0){S=F,D=Q,U=st;let it=!0;if(F){const ne=oe.get(F);ne.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(36160,null),it=!1):ne.__webglFramebuffer===void 0?Yt.setupRenderTarget(F):ne.__hasExternalTextures&&Yt.rebindTextures(F,oe.get(F.texture).__webglTexture,oe.get(F.depthTexture).__webglTexture)}let _t=null,Wt=!1,te=!1;if(F){const ne=F.texture;(ne.isData3DTexture||ne.isDataArrayTexture)&&(te=!0);const _e=oe.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(_t=_e[Q],Wt=!0):Zt.isWebGL2&&F.samples>0&&Yt.useMultisampledRTT(F)===!1?_t=oe.get(F).__webglMultisampledFramebuffer:_t=_e,J.copy(F.viewport),tt.copy(F.scissor),O=F.scissorTest}else J.copy(Z).multiplyScalar(nt).floor(),tt.copy(ct).multiplyScalar(nt).floor(),O=ot;if(xt.bindFramebuffer(36160,_t)&&Zt.drawBuffers&&it&&xt.drawBuffers(F,_t),xt.viewport(J),xt.scissor(tt),xt.setScissorTest(O),Wt){const ne=oe.get(F.texture);dt.framebufferTexture2D(36160,36064,34069+Q,ne.__webglTexture,st)}else if(te){const ne=oe.get(F.texture),_e=Q||0;dt.framebufferTextureLayer(36160,36064,ne.__webglTexture,st||0,_e)}P=-1},this.readRenderTargetPixels=function(F,Q,st,it,_t,Wt,te){if(!(F&&F.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=oe.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&te!==void 0&&(se=se[te]),se){xt.bindFramebuffer(36160,se);try{const ne=F.texture,_e=ne.format,me=ne.type;if(_e!==Ti&&z.convert(_e)!==dt.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const he=me===pr&&(ae.has("EXT_color_buffer_half_float")||Zt.isWebGL2&&ae.has("EXT_color_buffer_float"));if(me!==gn&&z.convert(me)!==dt.getParameter(35738)&&!(me===dn&&(Zt.isWebGL2||ae.has("OES_texture_float")||ae.has("WEBGL_color_buffer_float")))&&!he){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=F.width-it&&st>=0&&st<=F.height-_t&&dt.readPixels(Q,st,it,_t,z.convert(_e),z.convert(me),Wt)}finally{const ne=S!==null?oe.get(S).__webglFramebuffer:null;xt.bindFramebuffer(36160,ne)}}},this.copyFramebufferToTexture=function(F,Q,st=0){const it=Math.pow(2,-st),_t=Math.floor(Q.image.width*it),Wt=Math.floor(Q.image.height*it);Yt.setTexture2D(Q,0),dt.copyTexSubImage2D(3553,st,0,0,F.x,F.y,_t,Wt),xt.unbindTexture()},this.copyTextureToTexture=function(F,Q,st,it=0){const _t=Q.image.width,Wt=Q.image.height,te=z.convert(st.format),se=z.convert(st.type);Yt.setTexture2D(st,0),dt.pixelStorei(37440,st.flipY),dt.pixelStorei(37441,st.premultiplyAlpha),dt.pixelStorei(3317,st.unpackAlignment),Q.isDataTexture?dt.texSubImage2D(3553,it,F.x,F.y,_t,Wt,te,se,Q.image.data):Q.isCompressedTexture?dt.compressedTexSubImage2D(3553,it,F.x,F.y,Q.mipmaps[0].width,Q.mipmaps[0].height,te,Q.mipmaps[0].data):dt.texSubImage2D(3553,it,F.x,F.y,te,se,Q.image),it===0&&st.generateMipmaps&&dt.generateMipmap(3553),xt.unbindTexture()},this.copyTextureToTexture3D=function(F,Q,st,it,_t=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Wt=F.max.x-F.min.x+1,te=F.max.y-F.min.y+1,se=F.max.z-F.min.z+1,ne=z.convert(it.format),_e=z.convert(it.type);let me;if(it.isData3DTexture)Yt.setTexture3D(it,0),me=32879;else if(it.isDataArrayTexture)Yt.setTexture2DArray(it,0),me=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}dt.pixelStorei(37440,it.flipY),dt.pixelStorei(37441,it.premultiplyAlpha),dt.pixelStorei(3317,it.unpackAlignment);const he=dt.getParameter(3314),we=dt.getParameter(32878),mi=dt.getParameter(3316),Wi=dt.getParameter(3315),Mi=dt.getParameter(32877),ri=st.isCompressedTexture?st.mipmaps[0]:st.image;dt.pixelStorei(3314,ri.width),dt.pixelStorei(32878,ri.height),dt.pixelStorei(3316,F.min.x),dt.pixelStorei(3315,F.min.y),dt.pixelStorei(32877,F.min.z),st.isDataTexture||st.isData3DTexture?dt.texSubImage3D(me,_t,Q.x,Q.y,Q.z,Wt,te,se,ne,_e,ri.data):st.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),dt.compressedTexSubImage3D(me,_t,Q.x,Q.y,Q.z,Wt,te,se,ne,ri.data)):dt.texSubImage3D(me,_t,Q.x,Q.y,Q.z,Wt,te,se,ne,_e,ri),dt.pixelStorei(3314,he),dt.pixelStorei(32878,we),dt.pixelStorei(3316,mi),dt.pixelStorei(3315,Wi),dt.pixelStorei(32877,Mi),_t===0&&it.generateMipmaps&&dt.generateMipmap(me),xt.unbindTexture()},this.initTexture=function(F){F.isCubeTexture?Yt.setTextureCube(F,0):F.isData3DTexture?Yt.setTexture3D(F,0):F.isDataArrayTexture?Yt.setTexture2DArray(F,0):Yt.setTexture2D(F,0),xt.unbindTexture()},this.resetState=function(){D=0,U=0,S=null,xt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class uf extends tl{}uf.prototype.isWebGL1Renderer=!0;class el extends hi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class mf extends ci{constructor(t,e,r,o,c,d,m,g,v){super(t,e,r,o,c,d,m,g,v),this.isCanvasTexture=!0,this.needsUpdate=!0}}class df extends yr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ff extends hi{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class pf extends ff{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class _f{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xa(){return(typeof performance>"u"?Date:performance).now()}class vf{constructor(t,e,r=0,o=1/0){this.ray=new ka(t,e),this.near=r,this.far=o,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,r=[]){return Xs(t,this,r,e),r.sort(ba),r}intersectObjects(t,e=!0,r=[]){for(let o=0,c=t.length;o<c;o++)Xs(t[o],this,r,e);return r.sort(ba),r}}function ba(h,t){return h.distance-t.distance}function Xs(h,t,e,r){if(h.layers.test(t.layers)&&h.raycast(t,e),r===!0){const o=h.children;for(let c=0,d=o.length;c<d;c++)Xs(o[c],t,e,!0)}}class Aa{constructor(t=1,e=0,r=0){return this.radius=t,this.phi=e,this.theta=r,this}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);const Ma={type:"change"},Fs={type:"start"},wa={type:"end"};class gf extends Mn{constructor(t,e){super(),e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:Pn.ROTATE,TWO:Pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",Xe),this._domElementKeyEvents=z},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Ma),r.update(),c=o.NONE},this.update=function(){const z=new K,vt=new bn().setFromUnitVectors(t.up,new K(0,1,0)),St=vt.clone().invert(),Bt=new K,q=new bn,wt=2*Math.PI;return function(){const Xt=r.object.position;z.copy(Xt).sub(r.target),z.applyQuaternion(vt),m.setFromVector3(z),r.autoRotate&&c===o.NONE&&X(tt()),r.enableDamping?(m.theta+=g.theta*r.dampingFactor,m.phi+=g.phi*r.dampingFactor):(m.theta+=g.theta,m.phi+=g.phi);let Vt=r.minAzimuthAngle,Gt=r.maxAzimuthAngle;return isFinite(Vt)&&isFinite(Gt)&&(Vt<-Math.PI?Vt+=wt:Vt>Math.PI&&(Vt-=wt),Gt<-Math.PI?Gt+=wt:Gt>Math.PI&&(Gt-=wt),Vt<=Gt?m.theta=Math.max(Vt,Math.min(Gt,m.theta)):m.theta=m.theta>(Vt+Gt)/2?Math.max(Vt,m.theta):Math.min(Gt,m.theta)),m.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=v,m.radius=Math.max(r.minDistance,Math.min(r.maxDistance,m.radius)),r.enableDamping===!0?r.target.addScaledVector(f,r.dampingFactor):r.target.add(f),z.setFromSpherical(m),z.applyQuaternion(St),Xt.copy(r.target).add(z),r.object.lookAt(r.target),r.enableDamping===!0?(g.theta*=1-r.dampingFactor,g.phi*=1-r.dampingFactor,f.multiplyScalar(1-r.dampingFactor)):(g.set(0,0,0),f.set(0,0,0)),v=1,s||Bt.distanceToSquared(r.object.position)>d||8*(1-q.dot(r.object.quaternion))>d?(r.dispatchEvent(Ma),Bt.copy(r.object.position),q.copy(r.object.quaternion),s=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",at),r.domElement.removeEventListener("pointerdown",ye),r.domElement.removeEventListener("pointercancel",We),r.domElement.removeEventListener("wheel",qe),r.domElement.removeEventListener("pointermove",Ae),r.domElement.removeEventListener("pointerup",Ee),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",Xe)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const d=1e-6,m=new Aa,g=new Aa;let v=1;const f=new K;let s=!1;const x=new le,A=new le,L=new le,M=new le,b=new le,D=new le,U=new le,S=new le,P=new le,G=[],J={};function tt(){return 2*Math.PI/60/60*r.autoRotateSpeed}function O(){return Math.pow(.95,r.zoomSpeed)}function X(z){g.theta-=z}function lt(z){g.phi-=z}const nt=function(){const z=new K;return function(St,Bt){z.setFromMatrixColumn(Bt,0),z.multiplyScalar(-St),f.add(z)}}(),At=function(){const z=new K;return function(St,Bt){r.screenSpacePanning===!0?z.setFromMatrixColumn(Bt,1):(z.setFromMatrixColumn(Bt,0),z.crossVectors(r.object.up,z)),z.multiplyScalar(St),f.add(z)}}(),Pt=function(){const z=new K;return function(St,Bt){const q=r.domElement;if(r.object.isPerspectiveCamera){const wt=r.object.position;z.copy(wt).sub(r.target);let Et=z.length();Et*=Math.tan(r.object.fov/2*Math.PI/180),nt(2*St*Et/q.clientHeight,r.object.matrix),At(2*Bt*Et/q.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(nt(St*(r.object.right-r.object.left)/r.object.zoom/q.clientWidth,r.object.matrix),At(Bt*(r.object.top-r.object.bottom)/r.object.zoom/q.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function Z(z){r.object.isPerspectiveCamera?v/=z:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*z)),r.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ct(z){r.object.isPerspectiveCamera?v*=z:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/z)),r.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ot(z){x.set(z.clientX,z.clientY)}function rt(z){U.set(z.clientX,z.clientY)}function mt(z){M.set(z.clientX,z.clientY)}function et(z){A.set(z.clientX,z.clientY),L.subVectors(A,x).multiplyScalar(r.rotateSpeed);const vt=r.domElement;X(2*Math.PI*L.x/vt.clientHeight),lt(2*Math.PI*L.y/vt.clientHeight),x.copy(A),r.update()}function $(z){S.set(z.clientX,z.clientY),P.subVectors(S,U),P.y>0?Z(O()):P.y<0&&ct(O()),U.copy(S),r.update()}function Tt(z){b.set(z.clientX,z.clientY),D.subVectors(b,M).multiplyScalar(r.panSpeed),Pt(D.x,D.y),M.copy(b),r.update()}function pt(z){z.deltaY<0?ct(O()):z.deltaY>0&&Z(O()),r.update()}function Dt(z){let vt=!1;switch(z.code){case r.keys.UP:Pt(0,r.keyPanSpeed),vt=!0;break;case r.keys.BOTTOM:Pt(0,-r.keyPanSpeed),vt=!0;break;case r.keys.LEFT:Pt(r.keyPanSpeed,0),vt=!0;break;case r.keys.RIGHT:Pt(-r.keyPanSpeed,0),vt=!0;break}vt&&(z.preventDefault(),r.update())}function Ot(){if(G.length===1)x.set(G[0].pageX,G[0].pageY);else{const z=.5*(G[0].pageX+G[1].pageX),vt=.5*(G[0].pageY+G[1].pageY);x.set(z,vt)}}function kt(){if(G.length===1)M.set(G[0].pageX,G[0].pageY);else{const z=.5*(G[0].pageX+G[1].pageX),vt=.5*(G[0].pageY+G[1].pageY);M.set(z,vt)}}function dt(){const z=G[0].pageX-G[1].pageX,vt=G[0].pageY-G[1].pageY,St=Math.sqrt(z*z+vt*vt);U.set(0,St)}function Ce(){r.enableZoom&&dt(),r.enablePan&&kt()}function ae(){r.enableZoom&&dt(),r.enableRotate&&Ot()}function Zt(z){if(G.length==1)A.set(z.pageX,z.pageY);else{const St=Kt(z),Bt=.5*(z.pageX+St.x),q=.5*(z.pageY+St.y);A.set(Bt,q)}L.subVectors(A,x).multiplyScalar(r.rotateSpeed);const vt=r.domElement;X(2*Math.PI*L.x/vt.clientHeight),lt(2*Math.PI*L.y/vt.clientHeight),x.copy(A)}function xt(z){if(G.length===1)b.set(z.pageX,z.pageY);else{const vt=Kt(z),St=.5*(z.pageX+vt.x),Bt=.5*(z.pageY+vt.y);b.set(St,Bt)}D.subVectors(b,M).multiplyScalar(r.panSpeed),Pt(D.x,D.y),M.copy(b)}function ue(z){const vt=Kt(z),St=z.pageX-vt.x,Bt=z.pageY-vt.y,q=Math.sqrt(St*St+Bt*Bt);S.set(0,q),P.set(0,Math.pow(S.y/U.y,r.zoomSpeed)),Z(P.y),U.copy(S)}function oe(z){r.enableZoom&&ue(z),r.enablePan&&xt(z)}function Yt(z){r.enableZoom&&ue(z),r.enableRotate&&Zt(z)}function ye(z){r.enabled!==!1&&(G.length===0&&(r.domElement.setPointerCapture(z.pointerId),r.domElement.addEventListener("pointermove",Ae),r.domElement.addEventListener("pointerup",Ee)),Mt(z),z.pointerType==="touch"?k(z):Te(z))}function Ae(z){r.enabled!==!1&&(z.pointerType==="touch"?V(z):pe(z))}function Ee(z){gt(z),G.length===0&&(r.domElement.releasePointerCapture(z.pointerId),r.domElement.removeEventListener("pointermove",Ae),r.domElement.removeEventListener("pointerup",Ee)),r.dispatchEvent(wa),c=o.NONE}function We(z){gt(z)}function Te(z){let vt;switch(z.button){case 0:vt=r.mouseButtons.LEFT;break;case 1:vt=r.mouseButtons.MIDDLE;break;case 2:vt=r.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case Ln.DOLLY:if(r.enableZoom===!1)return;rt(z),c=o.DOLLY;break;case Ln.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enablePan===!1)return;mt(z),c=o.PAN}else{if(r.enableRotate===!1)return;ot(z),c=o.ROTATE}break;case Ln.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enableRotate===!1)return;ot(z),c=o.ROTATE}else{if(r.enablePan===!1)return;mt(z),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(Fs)}function pe(z){if(r.enabled!==!1)switch(c){case o.ROTATE:if(r.enableRotate===!1)return;et(z);break;case o.DOLLY:if(r.enableZoom===!1)return;$(z);break;case o.PAN:if(r.enablePan===!1)return;Tt(z);break}}function qe(z){r.enabled===!1||r.enableZoom===!1||c!==o.NONE||(z.preventDefault(),r.dispatchEvent(Fs),pt(z),r.dispatchEvent(wa))}function Xe(z){r.enabled===!1||r.enablePan===!1||Dt(z)}function k(z){switch(Nt(z),G.length){case 1:switch(r.touches.ONE){case Pn.ROTATE:if(r.enableRotate===!1)return;Ot(),c=o.TOUCH_ROTATE;break;case Pn.PAN:if(r.enablePan===!1)return;kt(),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(r.touches.TWO){case Pn.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Ce(),c=o.TOUCH_DOLLY_PAN;break;case Pn.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ae(),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(Fs)}function V(z){switch(Nt(z),c){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;Zt(z),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;xt(z),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;oe(z),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Yt(z),r.update();break;default:c=o.NONE}}function at(z){r.enabled!==!1&&z.preventDefault()}function Mt(z){G.push(z)}function gt(z){delete J[z.pointerId];for(let vt=0;vt<G.length;vt++)if(G[vt].pointerId==z.pointerId){G.splice(vt,1);return}}function Nt(z){let vt=J[z.pointerId];vt===void 0&&(vt=new le,J[z.pointerId]=vt),vt.set(z.pageX,z.pageY)}function Kt(z){const vt=z.pointerId===G[0].pointerId?G[1]:G[0];return J[vt.pointerId]}r.domElement.addEventListener("contextmenu",at),r.domElement.addEventListener("pointerdown",ye),r.domElement.addEventListener("pointercancel",We),r.domElement.addEventListener("wheel",qe,{passive:!1}),this.update()}}const il=(h=200)=>{const t=window.innerWidth/window.innerHeight,e=new ja(h*t/-2,h*t/2,h/2,h/-2,1,1e3);return window.addEventListener("resize",()=>{const r=window.innerWidth/window.innerHeight;e.left=-h*r/2,e.right=h*r/2,e.top=h/2,e.bottom=-h/2,e.updateProjectionMatrix()}),e};//! Camera
const Zn=il();Zn.position.set(0,0,200);//! Scene
const tn=new el;tn.background=new xe(0);//! Renderer
const Ei=new tl({alpha:!0});Ei.setPixelRatio(window.devicePixelRatio);Ei.setSize(window.innerWidth,window.innerHeight);Ei.autoClear=!1;document.body.appendChild(Ei.domElement);//! Resize
window.addEventListener("resize",()=>{Ei.setSize(window.innerWidth,window.innerHeight)});//! Controls
const yf=new gf(Zn,Ei.domElement);function nl(){requestAnimationFrame(nl),yf.update()}nl();//! World
const nn=new Ie.exports.World({gravity:Ie.exports.Vec2(0,0)}),xf=()=>Ei.render(tn,Zn);window.world=nn;const Ys=(h,t,e,r)=>(r=r??e,[h%t*e,Math.floor(h/t)*r]),Yr=h=>h.properties?.reduce((t,e)=>({...t,[e.name]:e.value}),{})??{},$s=h=>h.split(/[\/.]/).at(-2),hr=async(h,t=e=>e)=>(await Promise.all(Object.entries(h).map(async([e,r])=>[$s(e),await t(r)]))).reduce((e,[r,o])=>({...e,[r]:o}),{}),Sa=h=>new Promise((t,e)=>{const r=new Image;r.src=h,r.onload=()=>t(r),r.onerror=()=>t("")}),bi=await(async()=>{//! Source
const h={},t={},e={},r={},o={};//! Loaders
const c=async A=>({...A,img:await Sa(A.image.replace(/..\/..\/|..\//,"../Sprout/assets/")),tiles:A?.tiles?.map(L=>({...L,...Yr(L)}))}),d=A=>({...A.object,...Yr(A.object)}),m=A=>L=>({...L,tilesets:L.tilesets.map(M=>({...M,...A[$s(M.source)]}))});//! Transforms
const g=await hr(t,c),v=await hr(o,c),f=await hr(h,m(g)),s=await hr(e),x=await hr(r,d);return{levels:f,tilesets:g,items:v,images:s,templates:x,async load(A){return this.images[A]=await Sa(s[A].default),this.images[A]}}})(),Ar=(h,t)=>{const r=document.createElement("canvas").getContext("2d",{alpha:!0});return r.canvas.height=t,r.canvas.width=h??16/9*t,r.imageSmoothingEnabled=!1,r.canvas.style["image-rendering"]="pixelated",r},ir=(h,t,e)=>{const{buffer:r,texture:o,material:c=df}=h;let d=null;if(r){const f=new mf(r.canvas);f.minFilter=He,f.magFilter=He,d=f}else d=o;const m=new Zr(t??r.canvas.width,e??r.canvas.height),g=new c({map:d,transparent:!0});return new ki(m,g)},Qs=({repeat:h=!0,autoStart:t=!0,defaultAnimation:e,img:r,animations:o,tileSize:c,onAnimationFinished:d,animationsLength:m={},backwards:g=!1,speed:v=4,once:f=!1})=>{let s=e??o[0];const x=bi.images[r],A={vertical:x.height/c,horizontal:x.width/c},L=Ar(x.width,x.height);L.drawImage(x,0,0);const M=ir({buffer:L},c,c);let b=0,D=0,U=g,S=!f,P=t;const G=Z=>{const ct=m[Z]??A.horizontal;return{x:(U?ct-b-1:b)/A.horizontal,y:1-(o.findIndex(ot=>ot==Z)+1)/A.vertical}},{x:J,y:tt}=G(s);return M.material.map.repeat.set(1/A.horizontal,1/A.vertical),M.material.map.offset.set(J,tt),tn.add(M),{mesh:M,update:()=>{if((h||!S)&&P){const Z=m[s]??A.horizontal;D++,D>v&&(D=0,b=(b+1)%Z);const{x:ct,y:ot}=G(s);M.material.map.offset.set(ct,ot),b==Z-1&&(S=!0,d&&d())}},reverse:()=>{U=!U},start:()=>{P=!0},reset:()=>{S=!1},setState:Z=>{s=Z},setOnAnimationFinished:Z=>{d=Z}}};bi.load("door animation sprites");const bf=()=>{const h=Qs({img:"door animation sprites",tileSize:16,animations:["smallDoor"],animationsLength:{smallDoor:6},repeat:!1,backwards:!0,once:!0,autoStart:!1});return h.mesh.renderOrder=0,h};bi.load("Light cow animations");const Af=(h,t="Light")=>{const e=Qs({img:`${t} cow animations`,animations:["idle","run"],tileSize:32,animationsLength:{idle:3},speed:16});return e.mesh.position.x=h.x,e.mesh.position.y=h.y,e};//! Types
const Ca=h=>{const t=[],e=[],r=[],o=bi.levels[h],c=[],d=()=>Ar(o.width*o.tilewidth,o.height*o.tileheight),m=d(),g=d();o.layers.filter(U=>U.type=="tilelayer").forEach(U=>{const S=U.offsetx==0?g:m;U.chunks.forEach(P=>{P.data.forEach((G,J)=>{if(G==0)return;const tt=o.tilesets.find(ct=>ct.firstgid<=G&&G<=ct.firstgid+ct.tilecount-1);if(!tt)return;const[O,X]=Ys(G-tt.firstgid,tt.columns,tt.tilewidth,tt.tileheight),[lt,nt]=Ys(J,P.width,o.tilewidth,o.tileheight),At=lt+P.x*o.tilewidth,Pt=nt+P.y*o.tileheight;//! Collisions
const Z=tt.tiles?.find(ct=>ct.id==G-tt.firstgid)?.objectgroup?.objects;Z&&Z.forEach(ct=>{const ot={width:ct.width,height:ct.height,x:At+ct.x+ct.width/2-o.width*o.tilewidth/2,y:o.height*o.tileheight/2-Pt+ct.y+ct.height/2,properties:Yr(ct)};c.push(ot)}),S.drawImage(tt.img,O,X,o.tilewidth,o.tileheight,At,Pt,tt.tilewidth,tt.tileheight)})})});//! Objects
const v={};o.layers.filter(U=>U.type=="objectgroup").forEach(U=>{U.name in v||(v[U.name]=[]),U.objects.forEach(S=>{const P={};S.template&&Object.assign(P,bi.templates[$s(S.template)]),Object.assign(P,S),Object.assign(P,{x:S.x-o.width*o.tilewidth/2,y:o.height*o.tileheight/2-S.y}),Object.assign(P,Yr(S)),v[U.name].push(P)})});//! Meshes
const f=ir({buffer:g}),s=ir({buffer:m});f.renderOrder=10,s.renderOrder=0,e.push(f),e.push(s),tn.add(f),tn.add(s);//! Add collisions
const x=nn.createBody({type:"static",position:Ie.exports.Vec2(0,0)});t.push(x),c.forEach(({width:U,height:S,x:P,y:G})=>{x.createFixture({shape:Ie.exports.Box(U/2,S/2,Ie.exports.Vec2(P,G),0),density:0}).setUserData({collision:!0})});//! Add entities
"entities"in v&&v.entities.filter(U=>U.name=="spawn").forEach(U=>{const S=U.x+U.width/2,P=U.y-U.height/2,G=Af(Ie.exports.Vec2(S,P),"Light");r.push(G)});//! Add teleports
const A=[];v.teleports.forEach(U=>{const S=U.x+U.width/2,P=U.y-U.height/2,G=Ie.exports.Vec2(S,P),J=nn.createBody({type:"static",position:G});t.push(J);const tt=J.createFixture({shape:Ie.exports.Box(U.width/2,U.height/2,Ie.exports.Vec2(0,0),0),density:0,isSensor:!0}),O={...U,type:"teleport",position:G};if(U.door){const X=bf();X.mesh.position.x=S,X.mesh.position.y=P,e.push(X.mesh),Object.assign(O,{object:X})}tt.setUserData(O),A.push(tt)});let L=!0;return{meshTop:f,meshBottom:s,collisions:c,getTeleport:U=>A.find(S=>S.getUserData().name==U)?.getUserData(),unLoad:()=>{t.forEach(U=>nn.destroyBody(U)),e.forEach(U=>tn.remove(tn.getObjectById(U.id))),L=!1},loaded:L,update:()=>{A.forEach(U=>U.getUserData()?.object&&U.getUserData().object.update()),r.forEach(U=>U.update())}}},Ta=.5;for(const h of["","Am\xE9lie","Cl\xE9mentine","Hughie","Jack"])await bi.load(`${h?h+" - ":""}Premium Charakter Spritesheet`);const rl=({name:h,position:t=Ie.exports.Vec2(0,0),player:e=!0})=>{const r=Qs({img:`${h} - Premium Charakter Spritesheet`,tileSize:48,animations:["idle-down","idle-up","idle-left","idle-right","moving-down","moving-up","moving-right","moving-left"]});r.mesh.renderOrder=1;const o=.25,c=nn.createBody({type:"dynamic",fixedRotation:!0,bullet:!0,allowSleep:!0,position:t});c.createFixture({shape:Ie.exports.Box(8,8,Ie.exports.Vec2(0,0),0),density:0}).setUserData({type:e?"player":"NPC"});const m=Ie.exports.Vec2(0,0);let g="down";//! Items
const v=[{category:"seed",type:"maize"},{category:"tool",type:"hoe"}];//! Move
const f=U=>{switch(g=U,U){case"up":m.y+=o;break;case"down":m.y-=o;break;case"right":m.x+=o;break;case"left":m.x-=o;break}};let s=!0;const x=nn.createBody({type:"dynamic",fixedRotation:!0,bullet:!0,allowSleep:!0,position:t});x.createFixture({shape:Ie.exports.Box(8,8,Ie.exports.Vec2(0,0),0),density:0,isSensor:!0}).setUserData({type:(e?"player":"NPC")+"Sensor"});let L=!1;const M=()=>{if(r.update(),r.setState((Math.abs(m.x)>o||Math.abs(m.y)>o?"moving":"idle")+"-"+g),L)m.x=0,m.y=0;else{m.x*=Ta,m.y*=Ta,c.setLinearVelocity(m);const U=c.getPosition();r.mesh.position.x=U.x,r.mesh.position.y=U.y;const S=Ie.exports.Vec2({left:-16,right:16}[g]??0,{up:16,down:-16}[g]??0);x.setPosition(S.add(U))}},b=U=>{c.setPosition(U)},D=U=>{L=U};return{position:r.mesh.position,move:f,update:M,canTeleport:s,teleport:b,items:v,setStop:D}},Mf=h=>{const t=function(){return{active:!1,down:!1,get once(){return this.active?(this.active=!1,!0):!1},getInput(d){this.down!=d&&(this.active=d),this.down=d}}},e=h.actions.reduce((d,m)=>({...d,[m]:t()}),{}),r=(d,m)=>g=>{g.preventDefault();const v=g.type==d,f=m(g);f&&e[f].getInput(v)},o=r("keydown",d=>h.keyboard?.[d.code]),c=r("pointerdown",d=>h.mouse?.[d.button]);return document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("keydown",o),document.addEventListener("keyup",o),e},wf={actions:["up","down","left","right","interact"],keyboard:{KeyW:"up",KeyA:"left",KeyD:"right",KeyS:"down"},mouse:{0:"interact"}};bi.load("containers");const Sf=(h,t)=>h===0?0:h===t-1?32:16,Cf=(h,t)=>{const e=bi.images.containers,[r,o]=[h+2,t+2],c=Ar(r*16,o*16);for(let d=0;d<r;d++)for(let m=0;m<o;m++){const[g,v]=[[d,r],[m,o]].map(([f,s])=>Sf(f,s));c.drawImage(e,g,v,16,16,d*16,m*16,16,16)}return ir({buffer:c,material:xr},r*16,o*16)},Tf=function(){const h=bi.items.items1,t=h.tiles.map(r=>{const o=Ar(16,16),[c,d]=Ys(r.id,h.columns,h.tilewidth,h.tileheight);o.drawImage(h.img,c,d,16,16,0,0,16,16);const m=ir({buffer:o,material:xr});return m.renderOrder=1,{...r,mesh:m}});return{items:t,getItem:r=>t.find(o=>Object.entries(r).every(([c,d])=>o[c]==d))}}();bi.load("selectors");const zs=h=>(h-9)/2*16+8*(h+1),Bf=h=>{//! Frame
const t=Cf(9,1);t.renderOrder=1;//!Group
const e=new dr;e.add(t);//! Selector
let r=0;const o=Ar(32,32);o.drawImage(bi.images.selectors,0,0);const c=ir({buffer:o,material:xr});c.position.x=zs(r),c.renderOrder=2,e.add(c);//!Items
const d=[];for(let g=0;g<h.items.length;g++){const v=Tf.getItem(h.items[g]).mesh;v.position.x=zs(g);const f=v.clone();e.add(f),d.push(f)}//! Click
return{mesh:e,name:"inventory",position:"bottom",click:g=>{const v=d.findIndex(f=>g.some(s=>s.object.uuid==f.uuid));v!=-1&&(r=v,c.position.x=zs(v))}}},Ba=function(){//! Camera
const h=il(200);h.position.set(0,0,200);//! Scene
const t=new el,e=[],r=c=>{e.push(c),t.add(c.mesh);const[d,m]=["width","height"].map(g=>Math.max(...c.mesh.children.map(v=>v.geometry.parameters[g])));switch(c.position){case"bottom":c.mesh.position.y=h.bottom+m/2}};return window.addEventListener("pointerdown",c=>{const d=new vf;var m=new le;m.x=c.clientX/window.innerWidth*2-1,m.y=-(c.clientY/window.innerHeight)*2+1,d.setFromCamera(m,h);var g=d.intersectObjects(e.map(v=>v.mesh),!0);g.length>0&&e.forEach(v=>v.click(g))}),{addModule:r,render:()=>Ei.render(t,h)}}(),Ef=h=>({...rl({...h,player:!1})}),Lf=()=>{//! Lights
const h=new pf(16777215);tn.add(h),h.position.set(0,0,200);//! Objects
let t=Ca("map");const e=Ef({name:"Jack",position:Ie.exports.Vec2(-150,-50)}),r=rl({name:"Am\xE9lie",position:Ie.exports.Vec2(1300,-300)});//! UI
const o=Bf(r);Ba.addModule(o);const c=new _f,d=Mf(wf);let m=null;//! Contacts
const g=new Map;g.set(["player","teleport"],s=>{r.canTeleport&&(m=s.teleport)}),g.set(["playerSensor","NPC"],s=>{d.interact.active&&console.log("hello!")});const v=new Map;v.set(["teleport","player"],s=>{r.canTeleport=!0});const f=(s,x)=>{nn.on(s,A=>{x.forEach((L,M)=>{const b=["A","B"].map(D=>A["getFixture"+D]().getUserData());b.every(D=>M.includes(D.type))&&L(b.reduce((D,U)=>({...D,[U.type]:U}),{}))})})};return f("begin-contact",g),f("end-contact",v),{update(){if(nn.step(c.getDelta()*1e3*2),t.update(),m&&r.canTeleport){r.setStop(!0);const s=()=>{t.loaded&&t.unLoad();const x=m?.from?.split(".").at(-2);t=Ca(x);const A=t.getTeleport(m.name);r.move(A.direction),r.teleport(A.position),r.canTeleport=!1,m=null,r.setStop(!1)};m.object?(m.object.setOnAnimationFinished(s),m.object.start()):s()}Zn.position.x=r.position.x,Zn.position.y=r.position.y,Zn.lookAt(r.position),d.left.active&&r.move("left"),d.right.active&&r.move("right"),d.up.active&&r.move("up"),d.down.active&&r.move("down"),r.update(),e.update()},render(){xf(),Ei.autoClear=!1,Ba.render(),Ei.autoClear=!0},set(){}}},to=vl(),Pf=Lf();to.setStates({run:Pf});to.setState("run");to.start();
