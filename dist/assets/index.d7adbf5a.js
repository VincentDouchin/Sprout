const Tp=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const m of c.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}};Tp();const Ip=function(){let h,t=0,e=0,r=1e3/60,o,c;const m=A=>{h=window.requestAnimationFrame(m),t+=A-e,e=A;let _=!1;for(t>60&&(t=r);t>=r;)o.update(),_=!0,t-=r;_&&o.render()};return{setState:(A,_={})=>{if(!A)return;const p=c[A];p.set(_),o=p},setStates(A){c=A},start(){h=window.requestAnimationFrame(m)},stop(){window.cancelAnimationFrame(h)}}};var Pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dt={exports:{}};/**
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
 */(function(h,t){(function(e,r){r(t)})(Pp,function(e){/*! *****************************************************************************
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
    ***************************************************************************** */var r=function(a,i){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(n[u]=l[u])},r(a,i)};function o(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");r(a,i);function n(){this.constructor=a}a.prototype=i===null?Object.create(i):(n.prototype=i.prototype,new n)}var c=function(){return c=Object.assign||function(i){for(var n,l=1,u=arguments.length;l<u;l++){n=arguments[l];for(var g in n)Object.prototype.hasOwnProperty.call(n,g)&&(i[g]=n[g])}return i},c.apply(this,arguments)};function m(a,i){(a===null||typeof a>"u")&&(a={});var n=c({},a);for(var l in i)i.hasOwnProperty(l)&&typeof a[l]>"u"&&(n[l]=i[l]);if(typeof Object.getOwnPropertySymbols=="function")for(var u=Object.getOwnPropertySymbols(i),g=0;g<u.length;g++){var f=u[g];i.propertyIsEnumerable(f)&&typeof a[f]>"u"&&(n[f]=i[f])}return n}var d=function(){},A=function(a,i,n){},_={assert:A,debug:d},p=Object.create(Math);p.EPSILON=1e-9,p.isFinite=function(a){return typeof a=="number"&&isFinite(a)&&!isNaN(a)},p.assert=function(a){},p.invSqrt=function(a){return 1/Math.sqrt(a)},p.nextPowerOfTwo=function(a){return a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a+1},p.isPowerOfTwo=function(a){return a>0&&(a&a-1)===0},p.mod=function(a,i,n){return typeof i>"u"?(n=1,i=0):typeof n>"u"&&(n=i,i=0),n>i?(a=(a-i)%(n-i),a+(a<0?n:i)):(a=(a-n)%(i-n),a+(a<=0?i:n))},p.clamp=function(a,i,n){return a<i?i:a>n?n:a},p.random=function(a,i){return typeof a>"u"?(i=1,a=0):typeof i>"u"&&(i=a,a=0),a===i?a:Math.random()*(i-a)+a};var s=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);typeof i>"u"?(this.x=0,this.y=0):typeof i=="object"?(this.x=i.x,this.y=i.y):(this.x=i,this.y=n)}return a.prototype._serialize=function(){return{x:this.x,y:this.y}},a._deserialize=function(i){var n=Object.create(a.prototype);return n.x=i.x,n.y=i.y,n},a.zero=function(){var i=Object.create(a.prototype);return i.x=0,i.y=0,i},a.neo=function(i,n){var l=Object.create(a.prototype);return l.x=i,l.y=n,l},a.clone=function(i){return a.neo(i.x,i.y)},a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:p.isFinite(i.x)&&p.isFinite(i.y)},a.assert=function(i){},a.prototype.clone=function(){return a.clone(this)},a.prototype.setZero=function(){return this.x=0,this.y=0,this},a.prototype.set=function(i,n){return typeof i=="object"?(this.x=i.x,this.y=i.y):(this.x=i,this.y=n),this},a.prototype.setNum=function(i,n){return this.x=i,this.y=n,this},a.prototype.setVec2=function(i){return this.x=i.x,this.y=i.y,this},a.prototype.wSet=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.setCombine(i,n,l,u):this.setMul(i,n)},a.prototype.setCombine=function(i,n,l,u){var g=i*n.x+l*u.x,f=i*n.y+l*u.y;return this.x=g,this.y=f,this},a.prototype.setMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x=l,this.y=u,this},a.prototype.add=function(i){return this.x+=i.x,this.y+=i.y,this},a.prototype.wAdd=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.addCombine(i,n,l,u):this.addMul(i,n)},a.prototype.addCombine=function(i,n,l,u){var g=i*n.x+l*u.x,f=i*n.y+l*u.y;return this.x+=g,this.y+=f,this},a.prototype.addMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x+=l,this.y+=u,this},a.prototype.wSub=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?this.subCombine(i,n,l,u):this.subMul(i,n)},a.prototype.subCombine=function(i,n,l,u){var g=i*n.x+l*u.x,f=i*n.y+l*u.y;return this.x-=g,this.y-=f,this},a.prototype.subMul=function(i,n){var l=i*n.x,u=i*n.y;return this.x-=l,this.y-=u,this},a.prototype.sub=function(i){return this.x-=i.x,this.y-=i.y,this},a.prototype.mul=function(i){return this.x*=i,this.y*=i,this},a.prototype.length=function(){return a.lengthOf(this)},a.prototype.lengthSquared=function(){return a.lengthSquared(this)},a.prototype.normalize=function(){var i=this.length();if(i<p.EPSILON)return 0;var n=1/i;return this.x*=n,this.y*=n,i},a.lengthOf=function(i){return p.sqrt(i.x*i.x+i.y*i.y)},a.lengthSquared=function(i){return i.x*i.x+i.y*i.y},a.distance=function(i,n){var l=i.x-n.x,u=i.y-n.y;return p.sqrt(l*l+u*u)},a.distanceSquared=function(i,n){var l=i.x-n.x,u=i.y-n.y;return l*l+u*u},a.areEqual=function(i,n){return i===n||typeof n=="object"&&n!==null&&i.x===n.x&&i.y===n.y},a.skew=function(i){return a.neo(-i.y,i.x)},a.dot=function(i,n){return i.x*n.x+i.y*n.y},a.cross=function(i,n){return typeof n=="number"?a.neo(n*i.y,-n*i.x):typeof i=="number"?a.neo(-i*n.y,i*n.x):i.x*n.y-i.y*n.x},a.crossVec2Vec2=function(i,n){return i.x*n.y-i.y*n.x},a.crossVec2Num=function(i,n){return a.neo(n*i.y,-n*i.x)},a.crossNumVec2=function(i,n){return a.neo(-i*n.y,i*n.x)},a.addCross=function(i,n,l){if(typeof l=="number")return a.neo(l*n.y+i.x,-l*n.x+i.y);if(typeof n=="number")return a.neo(-n*l.y+i.x,n*l.x+i.y)},a.addCrossVec2Num=function(i,n,l){return a.neo(l*n.y+i.x,-l*n.x+i.y)},a.addCrossNumVec2=function(i,n,l){return a.neo(-n*l.y+i.x,n*l.x+i.y)},a.add=function(i,n){return a.neo(i.x+n.x,i.y+n.y)},a.wAdd=function(i,n,l,u){return typeof l<"u"||typeof u<"u"?a.combine(i,n,l,u):a.mulNumVec2(i,n)},a.combine=function(i,n,l,u){return a.zero().setCombine(i,n,l,u)},a.sub=function(i,n){return a.neo(i.x-n.x,i.y-n.y)},a.mul=function(i,n){if(typeof i=="object")return a.neo(i.x*n,i.y*n);if(typeof n=="object")return a.neo(i*n.x,i*n.y)},a.mulVec2Num=function(i,n){return a.neo(i.x*n,i.y*n)},a.mulNumVec2=function(i,n){return a.neo(i*n.x,i*n.y)},a.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this},a.neg=function(i){return a.neo(-i.x,-i.y)},a.abs=function(i){return a.neo(p.abs(i.x),p.abs(i.y))},a.mid=function(i,n){return a.neo((i.x+n.x)*.5,(i.y+n.y)*.5)},a.upper=function(i,n){return a.neo(p.max(i.x,n.x),p.max(i.y,n.y))},a.lower=function(i,n){return a.neo(p.min(i.x,n.x),p.min(i.y,n.y))},a.prototype.clamp=function(i){var n=this.x*this.x+this.y*this.y;if(n>i*i){var l=p.invSqrt(n);this.x*=l*i,this.y*=l*i}return this},a.clamp=function(i,n){return i=a.neo(i.x,i.y),i.clamp(n),i},a.scaleFn=function(i,n){return function(l){return a.neo(l.x*i,l.y*n)}},a.translateFn=function(i,n){return function(l){return a.neo(l.x+i,l.y+n)}},a}(),y=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);this.lowerBound=s.zero(),this.upperBound=s.zero(),typeof i=="object"&&this.lowerBound.setVec2(i),typeof n=="object"?this.upperBound.setVec2(n):typeof i=="object"&&this.upperBound.setVec2(i)}return a.prototype.isValid=function(){return a.isValid(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.lowerBound)&&s.isValid(i.upperBound)&&s.sub(i.upperBound,i.lowerBound).lengthSquared()>=0},a.assert=function(i){},a.prototype.getCenter=function(){return s.neo((this.lowerBound.x+this.upperBound.x)*.5,(this.lowerBound.y+this.upperBound.y)*.5)},a.prototype.getExtents=function(){return s.neo((this.upperBound.x-this.lowerBound.x)*.5,(this.upperBound.y-this.lowerBound.y)*.5)},a.prototype.getPerimeter=function(){return 2*(this.upperBound.x-this.lowerBound.x+this.upperBound.y-this.lowerBound.y)},a.prototype.combine=function(i,n){n=n||this;var l=i.lowerBound,u=i.upperBound,g=n.lowerBound,f=n.upperBound,v=p.min(l.x,g.x),S=p.min(l.y,g.y),D=p.max(f.x,u.x),E=p.max(f.y,u.y);this.lowerBound.setNum(v,S),this.upperBound.setNum(D,E)},a.prototype.combinePoints=function(i,n){this.lowerBound.setNum(p.min(i.x,n.x),p.min(i.y,n.y)),this.upperBound.setNum(p.max(i.x,n.x),p.max(i.y,n.y))},a.prototype.set=function(i){this.lowerBound.setNum(i.lowerBound.x,i.lowerBound.y),this.upperBound.setNum(i.upperBound.x,i.upperBound.y)},a.prototype.contains=function(i){var n=!0;return n=n&&this.lowerBound.x<=i.lowerBound.x,n=n&&this.lowerBound.y<=i.lowerBound.y,n=n&&i.upperBound.x<=this.upperBound.x,n=n&&i.upperBound.y<=this.upperBound.y,n},a.prototype.extend=function(i){return a.extend(this,i),this},a.extend=function(i,n){i.lowerBound.x-=n,i.lowerBound.y-=n,i.upperBound.x+=n,i.upperBound.y+=n},a.testOverlap=function(i,n){var l=n.lowerBound.x-i.upperBound.x,u=i.lowerBound.x-n.upperBound.x,g=n.lowerBound.y-i.upperBound.y,f=i.lowerBound.y-n.upperBound.y;return!(l>0||g>0||u>0||f>0)},a.areEqual=function(i,n){return s.areEqual(i.lowerBound,n.lowerBound)&&s.areEqual(i.upperBound,n.upperBound)},a.diff=function(i,n){var l=p.max(0,p.min(i.upperBound.x,n.upperBound.x)-p.max(n.lowerBound.x,i.lowerBound.x)),u=p.max(0,p.min(i.upperBound.y,n.upperBound.y)-p.max(n.lowerBound.y,i.lowerBound.y)),g=i.upperBound.x-i.lowerBound.x,f=i.upperBound.y-i.lowerBound.y,v=n.upperBound.x-n.lowerBound.x,S=n.upperBound.y-n.lowerBound.y;return g*f+v*S-l*u},a.prototype.rayCast=function(i,n){for(var l=-1/0,u=1/0,g=n.p1,f=s.sub(n.p2,n.p1),v=s.abs(f),S=s.zero(),D="x";D!==null;D=D==="x"?"y":null)if(v.x<p.EPSILON){if(g[D]<this.lowerBound[D]||this.upperBound[D]<g[D])return!1}else{var E=1/f[D],z=(this.lowerBound[D]-g[D])*E,T=(this.upperBound[D]-g[D])*E,B=-1;if(z>T){var C=z;z=T,T=C,B=1}if(z>l&&(S.setZero(),S[D]=B,l=z),u=p.min(u,T),l>u)return!1}return l<0||n.maxFraction<l?!1:(i.fraction=l,i.normal=S,!0)},a.prototype.toString=function(){return JSON.stringify(this)},a}(),b=function(){function a(){}return Object.defineProperty(a,"linearSlopSquared",{get:function(){return a.linearSlop*a.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(a,"polygonRadius",{get:function(){return 2*a.linearSlop},enumerable:!1,configurable:!0}),Object.defineProperty(a,"maxTranslationSquared",{get:function(){return a.maxTranslation*a.maxTranslation},enumerable:!1,configurable:!0}),Object.defineProperty(a,"maxRotationSquared",{get:function(){return a.maxRotation*a.maxRotation},enumerable:!1,configurable:!0}),Object.defineProperty(a,"linearSleepToleranceSqr",{get:function(){return Math.pow(a.linearSleepTolerance,2)},enumerable:!1,configurable:!0}),Object.defineProperty(a,"angularSleepToleranceSqr",{get:function(){return Math.pow(a.angularSleepTolerance,2)},enumerable:!1,configurable:!0}),a.maxManifoldPoints=2,a.maxPolygonVertices=12,a.aabbExtension=.1,a.aabbMultiplier=2,a.linearSlop=.005,a.angularSlop=2/180*Math.PI,a.maxSubSteps=8,a.maxTOIContacts=32,a.maxTOIIterations=20,a.maxDistnceIterations=20,a.velocityThreshold=1,a.maxLinearCorrection=.2,a.maxAngularCorrection=8/180*Math.PI,a.maxTranslation=2,a.maxRotation=.5*Math.PI,a.baumgarte=.2,a.toiBaugarte=.75,a.timeToSleep=.5,a.linearSleepTolerance=.01,a.angularSleepTolerance=2/180*Math.PI,a}(),I=function(){function a(i){this._list=[],this._max=1/0,this._createCount=0,this._outCount=0,this._inCount=0,this._discardCount=0,this._list=[],this._max=i.max||this._max,this._createFn=i.create,this._outFn=i.allocate,this._inFn=i.release,this._discardFn=i.discard}return a.prototype.max=function(i){return typeof i=="number"?(this._max=i,this):this._max},a.prototype.size=function(){return this._list.length},a.prototype.allocate=function(){var i;return this._list.length>0?i=this._list.shift():(this._createCount++,typeof this._createFn=="function"?i=this._createFn():i={}),this._outCount++,typeof this._outFn=="function"&&this._outFn(i),i},a.prototype.release=function(i){this._list.length<this._max?(this._inCount++,typeof this._inFn=="function"&&this._inFn(i),this._list.push(i)):(this._discardCount++,typeof this._discardFn=="function"&&(i=this._discardFn(i)))},a.prototype.toString=function(){return" +"+this._createCount+" >"+this._outCount+" <"+this._inCount+" -"+this._discardCount+" ="+this._list.length+"/"+this._max},a}(),w=function(){function a(i){this.aabb=new y,this.userData=null,this.parent=null,this.child1=null,this.child2=null,this.height=-1,this.id=i}return a.prototype.toString=function(){return this.id+": "+this.userData},a.prototype.isLeaf=function(){return this.child1==null},a}(),x=function(){function a(){this.inputPool=new I({create:function(){return{}},release:function(i){}}),this.stackPool=new I({create:function(){return[]},release:function(i){i.length=0}}),this.iteratorPool=new I({create:function(){return new L},release:function(i){i.close()}}),this.m_root=null,this.m_nodes={},this.m_lastProxyId=0,this.m_pool=new I({create:function(){return new w}})}return a.prototype.getUserData=function(i){var n=this.m_nodes[i];return n.userData},a.prototype.getFatAABB=function(i){var n=this.m_nodes[i];return n.aabb},a.prototype.allocateNode=function(){var i=this.m_pool.allocate();return i.id=++this.m_lastProxyId,i.userData=null,i.parent=null,i.child1=null,i.child2=null,i.height=-1,this.m_nodes[i.id]=i,i},a.prototype.freeNode=function(i){this.m_pool.release(i),i.height=-1,delete this.m_nodes[i.id]},a.prototype.createProxy=function(i,n){var l=this.allocateNode();return l.aabb.set(i),y.extend(l.aabb,b.aabbExtension),l.userData=n,l.height=0,this.insertLeaf(l),l.id},a.prototype.destroyProxy=function(i){var n=this.m_nodes[i];this.removeLeaf(n),this.freeNode(n)},a.prototype.moveProxy=function(i,n,l){var u=this.m_nodes[i];return u.aabb.contains(n)?!1:(this.removeLeaf(u),u.aabb.set(n),n=u.aabb,y.extend(n,b.aabbExtension),l.x<0?n.lowerBound.x+=l.x*b.aabbMultiplier:n.upperBound.x+=l.x*b.aabbMultiplier,l.y<0?n.lowerBound.y+=l.y*b.aabbMultiplier:n.upperBound.y+=l.y*b.aabbMultiplier,this.insertLeaf(u),!0)},a.prototype.insertLeaf=function(i){if(this.m_root==null){this.m_root=i,this.m_root.parent=null;return}for(var n=i.aabb,l=this.m_root;!l.isLeaf();){var u=l.child1,g=l.child2,f=l.aabb.getPerimeter(),v=new y;v.combine(l.aabb,n);var S=v.getPerimeter(),D=2*S,E=2*(S-f),z=void 0;if(u.isLeaf()){var T=new y;T.combine(n,u.aabb),z=T.getPerimeter()+E}else{var T=new y;T.combine(n,u.aabb);var B=u.aabb.getPerimeter(),C=T.getPerimeter();z=C-B+E}var F=void 0;if(g.isLeaf()){var T=new y;T.combine(n,g.aabb),F=T.getPerimeter()+E}else{var T=new y;T.combine(n,g.aabb);var B=g.aabb.getPerimeter(),C=T.getPerimeter();F=C-B+E}if(D<z&&D<F)break;z<F?l=u:l=g}var G=l,H=G.parent,X=this.allocateNode();for(X.parent=H,X.userData=null,X.aabb.combine(n,G.aabb),X.height=G.height+1,H!=null?(H.child1===G?H.child1=X:H.child2=X,X.child1=G,X.child2=i,G.parent=X,i.parent=X):(X.child1=G,X.child2=i,G.parent=X,i.parent=X,this.m_root=X),l=i.parent;l!=null;){l=this.balance(l);var u=l.child1,g=l.child2;l.height=1+p.max(u.height,g.height),l.aabb.combine(u.aabb,g.aabb),l=l.parent}},a.prototype.removeLeaf=function(i){if(i===this.m_root){this.m_root=null;return}var n=i.parent,l=n.parent,u;if(n.child1===i?u=n.child2:u=n.child1,l!=null){l.child1===n?l.child1=u:l.child2=u,u.parent=l,this.freeNode(n);for(var g=l;g!=null;){g=this.balance(g);var f=g.child1,v=g.child2;g.aabb.combine(f.aabb,v.aabb),g.height=1+p.max(f.height,v.height),g=g.parent}}else this.m_root=u,u.parent=null,this.freeNode(n)},a.prototype.balance=function(i){var n=i;if(n.isLeaf()||n.height<2)return i;var l=n.child1,u=n.child2,g=u.height-l.height;if(g>1){var f=u.child1,v=u.child2;return u.child1=n,u.parent=n.parent,n.parent=u,u.parent!=null?u.parent.child1===i?u.parent.child1=u:u.parent.child2=u:this.m_root=u,f.height>v.height?(u.child2=f,n.child2=v,v.parent=n,n.aabb.combine(l.aabb,v.aabb),u.aabb.combine(n.aabb,f.aabb),n.height=1+p.max(l.height,v.height),u.height=1+p.max(n.height,f.height)):(u.child2=v,n.child2=f,f.parent=n,n.aabb.combine(l.aabb,f.aabb),u.aabb.combine(n.aabb,v.aabb),n.height=1+p.max(l.height,f.height),u.height=1+p.max(n.height,v.height)),u}if(g<-1){var S=l.child1,D=l.child2;return l.child1=n,l.parent=n.parent,n.parent=l,l.parent!=null?l.parent.child1===n?l.parent.child1=l:l.parent.child2=l:this.m_root=l,S.height>D.height?(l.child2=S,n.child1=D,D.parent=n,n.aabb.combine(u.aabb,D.aabb),l.aabb.combine(n.aabb,S.aabb),n.height=1+p.max(u.height,D.height),l.height=1+p.max(n.height,S.height)):(l.child2=D,n.child1=S,S.parent=n,n.aabb.combine(u.aabb,S.aabb),l.aabb.combine(n.aabb,D.aabb),n.height=1+p.max(u.height,S.height),l.height=1+p.max(n.height,D.height)),l}return n},a.prototype.getHeight=function(){return this.m_root==null?0:this.m_root.height},a.prototype.getAreaRatio=function(){if(this.m_root==null)return 0;for(var i=this.m_root,n=i.aabb.getPerimeter(),l=0,u,g=this.iteratorPool.allocate().preorder(this.m_root);u=g.next();)u.height<0||(l+=u.aabb.getPerimeter());return this.iteratorPool.release(g),l/n},a.prototype.computeHeight=function(i){var n;if(typeof i<"u"?n=this.m_nodes[i]:n=this.m_root,n.isLeaf())return 0;var l=this.computeHeight(n.child1.id),u=this.computeHeight(n.child2.id);return 1+p.max(l,u)},a.prototype.validateStructure=function(i){if(i!=null){this.m_root;var n=i.child1,l=i.child2;i.isLeaf()||(this.validateStructure(n),this.validateStructure(l))}},a.prototype.validateMetrics=function(i){if(i!=null){var n=i.child1,l=i.child2;if(!i.isLeaf()){var u=n.height,g=l.height;1+p.max(u,g);var f=new y;f.combine(n.aabb,l.aabb),this.validateMetrics(n),this.validateMetrics(l)}}},a.prototype.validate=function(){this.validateStructure(this.m_root),this.validateMetrics(this.m_root)},a.prototype.getMaxBalance=function(){for(var i=0,n,l=this.iteratorPool.allocate().preorder(this.m_root);n=l.next();)if(!(n.height<=1)){var u=p.abs(n.child2.height-n.child1.height);i=p.max(i,u)}return this.iteratorPool.release(l),i},a.prototype.rebuildBottomUp=function(){for(var i=[],n=0,l,u=this.iteratorPool.allocate().preorder(this.m_root);l=u.next();)l.height<0||(l.isLeaf()?(l.parent=null,i[n]=l,++n):this.freeNode(l));for(this.iteratorPool.release(u);n>1;){for(var g=1/0,f=-1,v=-1,S=0;S<n;++S)for(var D=i[S].aabb,E=S+1;E<n;++E){var z=i[E].aabb,T=new y;T.combine(D,z);var B=T.getPerimeter();B<g&&(f=S,v=E,g=B)}var C=i[f],F=i[v],G=this.allocateNode();G.child1=C,G.child2=F,G.height=1+p.max(C.height,F.height),G.aabb.combine(C.aabb,F.aabb),G.parent=null,C.parent=G,F.parent=G,i[v]=i[n-1],i[f]=G,--n}this.m_root=i[0],this.validate()},a.prototype.shiftOrigin=function(i){for(var n,l=this.iteratorPool.allocate().preorder(this.m_root);n=l.next();){var u=n.aabb;u.lowerBound.x-=i.x,u.lowerBound.y-=i.y,u.upperBound.x-=i.x,u.upperBound.y-=i.y}this.iteratorPool.release(l)},a.prototype.query=function(i,n){var l=this.stackPool.allocate();for(l.push(this.m_root);l.length>0;){var u=l.pop();if(u!=null&&y.testOverlap(u.aabb,i))if(u.isLeaf()){var g=n(u.id);if(g===!1)return}else l.push(u.child1),l.push(u.child2)}this.stackPool.release(l)},a.prototype.rayCast=function(i,n){var l=i.p1,u=i.p2,g=s.sub(u,l);g.normalize();var f=s.crossNumVec2(1,g),v=s.abs(f),S=i.maxFraction,D=new y,E=s.combine(1-S,l,S,u);D.combinePoints(l,E);var z=this.stackPool.allocate(),T=this.inputPool.allocate();for(z.push(this.m_root);z.length>0;){var B=z.pop();if(B!=null&&y.testOverlap(B.aabb,D)!==!1){var C=B.aabb.getCenter(),F=B.aabb.getExtents(),G=p.abs(s.dot(f,s.sub(l,C)))-s.dot(v,F);if(!(G>0))if(B.isLeaf()){T.p1=s.clone(i.p1),T.p2=s.clone(i.p2),T.maxFraction=S;var H=n(T,B.id);if(H===0)return;H>0&&(S=H,E=s.combine(1-S,l,S,u),D.combinePoints(l,E))}else z.push(B.child1),z.push(B.child2)}}this.stackPool.release(z),this.inputPool.release(T)},a}(),L=function(){function a(){this.parents=[],this.states=[]}return a.prototype.preorder=function(i){return this.parents.length=0,this.parents.push(i),this.states.length=0,this.states.push(0),this},a.prototype.next=function(){for(;this.parents.length>0;){var i=this.parents.length-1,n=this.parents[i];if(this.states[i]===0)return this.states[i]=1,n;if(this.states[i]===1&&(this.states[i]=2,n.child1))return this.parents.push(n.child1),this.states.push(1),n.child1;if(this.states[i]===2&&(this.states[i]=3,n.child2))return this.parents.push(n.child2),this.states.push(1),n.child2;this.parents.pop(),this.states.pop()}},a.prototype.close=function(){this.parents.length=0},a}(),U=function(){function a(){var i=this;this.m_tree=new x,this.m_proxyCount=0,this.m_moveBuffer=[],this.query=function(n,l){i.m_tree.query(n,l)},this.queryCallback=function(n){if(n===i.m_queryProxyId)return!0;var l=p.min(n,i.m_queryProxyId),u=p.max(n,i.m_queryProxyId),g=i.m_tree.getUserData(l),f=i.m_tree.getUserData(u);return i.m_callback(g,f),!0}}return a.prototype.getUserData=function(i){return this.m_tree.getUserData(i)},a.prototype.testOverlap=function(i,n){var l=this.m_tree.getFatAABB(i),u=this.m_tree.getFatAABB(n);return y.testOverlap(l,u)},a.prototype.getFatAABB=function(i){return this.m_tree.getFatAABB(i)},a.prototype.getProxyCount=function(){return this.m_proxyCount},a.prototype.getTreeHeight=function(){return this.m_tree.getHeight()},a.prototype.getTreeBalance=function(){return this.m_tree.getMaxBalance()},a.prototype.getTreeQuality=function(){return this.m_tree.getAreaRatio()},a.prototype.rayCast=function(i,n){this.m_tree.rayCast(i,n)},a.prototype.shiftOrigin=function(i){this.m_tree.shiftOrigin(i)},a.prototype.createProxy=function(i,n){var l=this.m_tree.createProxy(i,n);return this.m_proxyCount++,this.bufferMove(l),l},a.prototype.destroyProxy=function(i){this.unbufferMove(i),this.m_proxyCount--,this.m_tree.destroyProxy(i)},a.prototype.moveProxy=function(i,n,l){var u=this.m_tree.moveProxy(i,n,l);u&&this.bufferMove(i)},a.prototype.touchProxy=function(i){this.bufferMove(i)},a.prototype.bufferMove=function(i){this.m_moveBuffer.push(i)},a.prototype.unbufferMove=function(i){for(var n=0;n<this.m_moveBuffer.length;++n)this.m_moveBuffer[n]===i&&(this.m_moveBuffer[n]=null)},a.prototype.updatePairs=function(i){for(this.m_callback=i;this.m_moveBuffer.length>0;)if(this.m_queryProxyId=this.m_moveBuffer.pop(),this.m_queryProxyId!==null){var n=this.m_tree.getFatAABB(this.m_queryProxyId);this.m_tree.query(n,this.queryCallback)}},a}(),M=function(){function a(i){if(!(this instanceof a))return new a(i);typeof i=="number"?this.setAngle(i):typeof i=="object"?this.setRot(i):this.setIdentity()}return a.neo=function(i){var n=Object.create(a.prototype);return n.setAngle(i),n},a.clone=function(i){var n=Object.create(a.prototype);return n.s=i.s,n.c=i.c,n},a.identity=function(){var i=Object.create(a.prototype);return i.s=0,i.c=1,i},a.isValid=function(i){return i===null||typeof i>"u"?!1:p.isFinite(i.s)&&p.isFinite(i.c)},a.assert=function(i){},a.prototype.setIdentity=function(){this.s=0,this.c=1},a.prototype.set=function(i){typeof i=="object"?(this.s=i.s,this.c=i.c):(this.s=p.sin(i),this.c=p.cos(i))},a.prototype.setRot=function(i){this.s=i.s,this.c=i.c},a.prototype.setAngle=function(i){this.s=p.sin(i),this.c=p.cos(i)},a.prototype.getAngle=function(){return p.atan2(this.s,this.c)},a.prototype.getXAxis=function(){return s.neo(this.c,this.s)},a.prototype.getYAxis=function(){return s.neo(-this.s,this.c)},a.mul=function(i,n){if("c"in n&&"s"in n){var l=a.identity();return l.s=i.s*n.c+i.c*n.s,l.c=i.c*n.c-i.s*n.s,l}else if("x"in n&&"y"in n)return s.neo(i.c*n.x-i.s*n.y,i.s*n.x+i.c*n.y)},a.mulRot=function(i,n){var l=a.identity();return l.s=i.s*n.c+i.c*n.s,l.c=i.c*n.c-i.s*n.s,l},a.mulVec2=function(i,n){return s.neo(i.c*n.x-i.s*n.y,i.s*n.x+i.c*n.y)},a.mulSub=function(i,n,l){var u=i.c*(n.x-l.x)-i.s*(n.y-l.y),g=i.s*(n.x-l.x)+i.c*(n.y-l.y);return s.neo(u,g)},a.mulT=function(i,n){if("c"in n&&"s"in n){var l=a.identity();return l.s=i.c*n.s-i.s*n.c,l.c=i.c*n.c+i.s*n.s,l}else if("x"in n&&"y"in n)return s.neo(i.c*n.x+i.s*n.y,-i.s*n.x+i.c*n.y)},a.mulTRot=function(i,n){var l=a.identity();return l.s=i.c*n.s-i.s*n.c,l.c=i.c*n.c+i.s*n.s,l},a.mulTVec2=function(i,n){return s.neo(i.c*n.x+i.s*n.y,-i.s*n.x+i.c*n.y)},a}(),P=function(){function a(i,n){if(!(this instanceof a))return new a(i,n);this.p=s.zero(),this.q=M.identity(),typeof i<"u"&&this.p.setVec2(i),typeof n<"u"&&this.q.setAngle(n)}return a.clone=function(i){var n=Object.create(a.prototype);return n.p=s.clone(i.p),n.q=M.clone(i.q),n},a.neo=function(i,n){var l=Object.create(a.prototype);return l.p=s.clone(i),l.q=M.clone(n),l},a.identity=function(){var i=Object.create(a.prototype);return i.p=s.zero(),i.q=M.identity(),i},a.prototype.setIdentity=function(){this.p.setZero(),this.q.setIdentity()},a.prototype.set=function(i,n){typeof n>"u"?(this.p.set(i.p),this.q.set(i.q)):(this.p.set(i),this.q.set(n))},a.prototype.setNum=function(i,n){this.p.setVec2(i),this.q.setAngle(n)},a.prototype.setTransform=function(i){this.p.setVec2(i.p),this.q.setRot(i.q)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.p)&&M.isValid(i.q)},a.assert=function(i){},a.mul=function(i,n){if(Array.isArray(n)){for(var l=[],u=0;u<n.length;u++)l[u]=a.mul(i,n[u]);return l}else{if("x"in n&&"y"in n)return a.mulVec2(i,n);if("p"in n&&"q"in n)return a.mulXf(i,n)}},a.mulAll=function(i,n){for(var l=[],u=0;u<n.length;u++)l[u]=a.mul(i,n[u]);return l},a.mulFn=function(i){return function(n){return a.mul(i,n)}},a.mulVec2=function(i,n){var l=i.q.c*n.x-i.q.s*n.y+i.p.x,u=i.q.s*n.x+i.q.c*n.y+i.p.y;return s.neo(l,u)},a.mulXf=function(i,n){var l=a.identity();return l.q=M.mulRot(i.q,n.q),l.p=s.add(M.mulVec2(i.q,n.p),i.p),l},a.mulT=function(i,n){if("x"in n&&"y"in n)return a.mulTVec2(i,n);if("p"in n&&"q"in n)return a.mulTXf(i,n)},a.mulTVec2=function(i,n){var l=n.x-i.p.x,u=n.y-i.p.y,g=i.q.c*l+i.q.s*u,f=-i.q.s*l+i.q.c*u;return s.neo(g,f)},a.mulTXf=function(i,n){var l=a.identity();return l.q.setRot(M.mulTRot(i.q,n.q)),l.p.setVec2(M.mulTVec2(i.q,s.sub(n.p,i.p))),l},a}(),k=function(){function a(i,n){this.localCenter=s.zero(),this.c=s.zero(),this.a=0,this.alpha0=0,this.c0=s.zero(),this.a0=0}return a.prototype.setTransform=function(i){var n=P.mulVec2(i,this.localCenter);this.c.setVec2(n),this.c0.setVec2(n),this.a=i.q.getAngle(),this.a0=i.q.getAngle()},a.prototype.setLocalCenter=function(i,n){this.localCenter.setVec2(i);var l=P.mulVec2(n,this.localCenter);this.c.setVec2(l),this.c0.setVec2(l)},a.prototype.getTransform=function(i,n){n===void 0&&(n=0),i.q.setAngle((1-n)*this.a0+n*this.a),i.p.setCombine(1-n,this.c0,n,this.c),i.p.sub(M.mulVec2(i.q,this.localCenter))},a.prototype.advance=function(i){var n=(i-this.alpha0)/(1-this.alpha0);this.c0.setCombine(n,this.c,1-n,this.c0),this.a0=n*this.a+(1-n)*this.a0,this.alpha0=i},a.prototype.forward=function(){this.a0=this.a,this.c0.setVec2(this.c)},a.prototype.normalize=function(){var i=p.mod(this.a0,-p.PI,+p.PI);this.a-=this.a0-i,this.a0=i},a.prototype.clone=function(){var i=new a;return i.localCenter.setVec2(this.localCenter),i.alpha0=this.alpha0,i.a0=this.a0,i.a=this.a,i.c0.setVec2(this.c0),i.c.setVec2(this.c),i},a.prototype.set=function(i){this.localCenter.setVec2(i.localCenter),this.alpha0=i.alpha0,this.a0=i.a0,this.a=i.a,this.c0.setVec2(i.c0),this.c.setVec2(i.c)},a}(),Y=function(){function a(){this.v=s.zero(),this.w=0}return a}(),t0=function(){function a(){this.c=s.zero(),this.a=0}return a.prototype.getTransform=function(i,n){return i.q.setAngle(this.a),i.p.setVec2(s.sub(this.c,M.mulVec2(i.q,n))),i},a}(),N=function(){function a(){}return a.prototype._reset=function(){},a.isValid=function(i){return i===null||typeof i>"u"?!1:typeof i.m_type=="string"&&typeof i.m_radius=="number"},a.prototype.getRadius=function(){return this.m_radius},a.prototype.getType=function(){return this.m_type},a}(),q={userData:null,friction:.2,restitution:0,density:0,isSensor:!1,filterGroupIndex:0,filterCategoryBits:1,filterMaskBits:65535},l0=function(){function a(i,n){this.aabb=new y,this.fixture=i,this.childIndex=n,this.proxyId}return a}(),n0=function(){function a(i,n,l){n.shape?(l=n,n=n.shape):typeof l=="number"&&(l={density:l}),l=m(l,q),this.m_body=i,this.m_friction=l.friction,this.m_restitution=l.restitution,this.m_density=l.density,this.m_isSensor=l.isSensor,this.m_filterGroupIndex=l.filterGroupIndex,this.m_filterCategoryBits=l.filterCategoryBits,this.m_filterMaskBits=l.filterMaskBits,this.m_shape=n,this.m_next=null,this.m_proxies=[],this.m_proxyCount=0;for(var u=this.m_shape.getChildCount(),g=0;g<u;++g)this.m_proxies[g]=new l0(this,g);this.m_userData=l.userData}return a.prototype._reset=function(){var i=this.getBody(),n=i.m_world.m_broadPhase;this.destroyProxies(n),this.m_shape._reset&&this.m_shape._reset();for(var l=this.m_shape.getChildCount(),u=0;u<l;++u)this.m_proxies[u]=new l0(this,u);this.createProxies(n,i.m_xf),i.resetMassData()},a.prototype._serialize=function(){return{friction:this.m_friction,restitution:this.m_restitution,density:this.m_density,isSensor:this.m_isSensor,filterGroupIndex:this.m_filterGroupIndex,filterCategoryBits:this.m_filterCategoryBits,filterMaskBits:this.m_filterMaskBits,shape:this.m_shape}},a._deserialize=function(i,n,l){var u=l(N,i.shape),g=u&&new a(n,u,i);return g},a.prototype.getType=function(){return this.m_shape.getType()},a.prototype.getShape=function(){return this.m_shape},a.prototype.isSensor=function(){return this.m_isSensor},a.prototype.setSensor=function(i){i!=this.m_isSensor&&(this.m_body.setAwake(!0),this.m_isSensor=i)},a.prototype.getUserData=function(){return this.m_userData},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getBody=function(){return this.m_body},a.prototype.getNext=function(){return this.m_next},a.prototype.getDensity=function(){return this.m_density},a.prototype.setDensity=function(i){this.m_density=i},a.prototype.getFriction=function(){return this.m_friction},a.prototype.setFriction=function(i){this.m_friction=i},a.prototype.getRestitution=function(){return this.m_restitution},a.prototype.setRestitution=function(i){this.m_restitution=i},a.prototype.testPoint=function(i){return this.m_shape.testPoint(this.m_body.getTransform(),i)},a.prototype.rayCast=function(i,n,l){return this.m_shape.rayCast(i,n,this.m_body.getTransform(),l)},a.prototype.getMassData=function(i){this.m_shape.computeMass(i,this.m_density)},a.prototype.getAABB=function(i){return this.m_proxies[i].aabb},a.prototype.createProxies=function(i,n){this.m_proxyCount=this.m_shape.getChildCount();for(var l=0;l<this.m_proxyCount;++l){var u=this.m_proxies[l];this.m_shape.computeAABB(u.aabb,n,l),u.proxyId=i.createProxy(u.aabb,u)}},a.prototype.destroyProxies=function(i){for(var n=0;n<this.m_proxyCount;++n){var l=this.m_proxies[n];i.destroyProxy(l.proxyId),l.proxyId=null}this.m_proxyCount=0},a.prototype.synchronize=function(i,n,l){for(var u=0;u<this.m_proxyCount;++u){var g=this.m_proxies[u],f=new y,v=new y;this.m_shape.computeAABB(f,n,g.childIndex),this.m_shape.computeAABB(v,l,g.childIndex),g.aabb.combine(f,v);var S=s.sub(l.p,n.p);i.moveProxy(g.proxyId,g.aabb,S)}},a.prototype.setFilterData=function(i){this.m_filterGroupIndex=i.groupIndex,this.m_filterCategoryBits=i.categoryBits,this.m_filterMaskBits=i.maskBits,this.refilter()},a.prototype.getFilterGroupIndex=function(){return this.m_filterGroupIndex},a.prototype.setFilterGroupIndex=function(i){this.m_filterGroupIndex=i},a.prototype.getFilterCategoryBits=function(){return this.m_filterCategoryBits},a.prototype.setFilterCategoryBits=function(i){this.m_filterCategoryBits=i},a.prototype.getFilterMaskBits=function(){return this.m_filterMaskBits},a.prototype.setFilterMaskBits=function(i){this.m_filterMaskBits=i},a.prototype.refilter=function(){if(this.m_body!=null){for(var i=this.m_body.getContactList();i;){var n=i.contact,l=n.getFixtureA(),u=n.getFixtureB();(l==this||u==this)&&n.flagForFiltering(),i=i.next}var g=this.m_body.getWorld();if(g!=null)for(var f=g.m_broadPhase,v=0;v<this.m_proxyCount;++v)f.touchProxy(this.m_proxies[v].proxyId)}},a.prototype.shouldCollide=function(i){if(i.m_filterGroupIndex===this.m_filterGroupIndex&&i.m_filterGroupIndex!==0)return i.m_filterGroupIndex>0;var n=(i.m_filterMaskBits&this.m_filterCategoryBits)!==0,l=(i.m_filterCategoryBits&this.m_filterMaskBits)!==0,u=n&&l;return u},a}(),b0="static",P0="kinematic",J="dynamic",c0={type:b0,position:s.zero(),angle:0,linearVelocity:s.zero(),angularVelocity:0,linearDamping:0,angularDamping:0,fixedRotation:!1,bullet:!1,gravityScale:1,allowSleep:!0,awake:!0,active:!0,userData:null},o0=function(){function a(){this.mass=0,this.center=s.zero(),this.I=0}return a}(),r0=function(){function a(i,n){n=m(n,c0),this.m_world=i,this.m_awakeFlag=n.awake,this.m_autoSleepFlag=n.allowSleep,this.m_bulletFlag=n.bullet,this.m_fixedRotationFlag=n.fixedRotation,this.m_activeFlag=n.active,this.m_islandFlag=!1,this.m_toiFlag=!1,this.m_userData=n.userData,this.m_type=n.type,this.m_type==J?(this.m_mass=1,this.m_invMass=1):(this.m_mass=0,this.m_invMass=0),this.m_I=0,this.m_invI=0,this.m_xf=P.identity(),this.m_xf.p=s.clone(n.position),this.m_xf.q.setAngle(n.angle),this.m_sweep=new k,this.m_sweep.setTransform(this.m_xf),this.c_velocity=new Y,this.c_position=new t0,this.m_force=s.zero(),this.m_torque=0,this.m_linearVelocity=s.clone(n.linearVelocity),this.m_angularVelocity=n.angularVelocity,this.m_linearDamping=n.linearDamping,this.m_angularDamping=n.angularDamping,this.m_gravityScale=n.gravityScale,this.m_sleepTime=0,this.m_jointList=null,this.m_contactList=null,this.m_fixtureList=null,this.m_prev=null,this.m_next=null,this.m_destroyed=!1}return a.prototype._serialize=function(){for(var i=[],n=this.m_fixtureList;n;n=n.m_next)i.push(n);return{type:this.m_type,bullet:this.m_bulletFlag,position:this.m_xf.p,angle:this.m_xf.q.getAngle(),linearVelocity:this.m_linearVelocity,angularVelocity:this.m_angularVelocity,fixtures:i}},a._deserialize=function(i,n,l){var u=new a(n,i);if(i.fixtures)for(var g=i.fixtures.length-1;g>=0;g--){var f=l(n0,i.fixtures[g],u);u._addFixture(f)}return u},a.prototype.isWorldLocked=function(){return!!(this.m_world&&this.m_world.isLocked())},a.prototype.getWorld=function(){return this.m_world},a.prototype.getNext=function(){return this.m_next},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getUserData=function(){return this.m_userData},a.prototype.getFixtureList=function(){return this.m_fixtureList},a.prototype.getJointList=function(){return this.m_jointList},a.prototype.getContactList=function(){return this.m_contactList},a.prototype.isStatic=function(){return this.m_type==b0},a.prototype.isDynamic=function(){return this.m_type==J},a.prototype.isKinematic=function(){return this.m_type==P0},a.prototype.setStatic=function(){return this.setType(b0),this},a.prototype.setDynamic=function(){return this.setType(J),this},a.prototype.setKinematic=function(){return this.setType(P0),this},a.prototype.getType=function(){return this.m_type},a.prototype.setType=function(i){if(this.isWorldLocked()!=!0&&this.m_type!=i){this.m_type=i,this.resetMassData(),this.m_type==b0&&(this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_sweep.forward(),this.synchronizeFixtures()),this.setAwake(!0),this.m_force.setZero(),this.m_torque=0;for(var n=this.m_contactList;n;){var l=n;n=n.next,this.m_world.destroyContact(l.contact)}this.m_contactList=null;for(var u=this.m_world.m_broadPhase,g=this.m_fixtureList;g;g=g.m_next)for(var f=g.m_proxyCount,v=0;v<f;++v)u.touchProxy(g.m_proxies[v].proxyId)}},a.prototype.isBullet=function(){return this.m_bulletFlag},a.prototype.setBullet=function(i){this.m_bulletFlag=!!i},a.prototype.isSleepingAllowed=function(){return this.m_autoSleepFlag},a.prototype.setSleepingAllowed=function(i){this.m_autoSleepFlag=!!i,this.m_autoSleepFlag==!1&&this.setAwake(!0)},a.prototype.isAwake=function(){return this.m_awakeFlag},a.prototype.setAwake=function(i){i?this.m_awakeFlag==!1&&(this.m_awakeFlag=!0,this.m_sleepTime=0):(this.m_awakeFlag=!1,this.m_sleepTime=0,this.m_linearVelocity.setZero(),this.m_angularVelocity=0,this.m_force.setZero(),this.m_torque=0)},a.prototype.isActive=function(){return this.m_activeFlag},a.prototype.setActive=function(i){if(i!=this.m_activeFlag)if(this.m_activeFlag=!!i,this.m_activeFlag)for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.createProxies(n,this.m_xf);else{for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.destroyProxies(n);for(var u=this.m_contactList;u;){var g=u;u=u.next,this.m_world.destroyContact(g.contact)}this.m_contactList=null}},a.prototype.isFixedRotation=function(){return this.m_fixedRotationFlag},a.prototype.setFixedRotation=function(i){this.m_fixedRotationFlag!=i&&(this.m_fixedRotationFlag=!!i,this.m_angularVelocity=0,this.resetMassData())},a.prototype.getTransform=function(){return this.m_xf},a.prototype.setTransform=function(i,n){if(this.isWorldLocked()!=!0){this.m_xf.setNum(i,n),this.m_sweep.setTransform(this.m_xf);for(var l=this.m_world.m_broadPhase,u=this.m_fixtureList;u;u=u.m_next)u.synchronize(l,this.m_xf,this.m_xf)}},a.prototype.synchronizeTransform=function(){this.m_sweep.getTransform(this.m_xf,1)},a.prototype.synchronizeFixtures=function(){var i=P.identity();this.m_sweep.getTransform(i,0);for(var n=this.m_world.m_broadPhase,l=this.m_fixtureList;l;l=l.m_next)l.synchronize(n,i,this.m_xf)},a.prototype.advance=function(i){this.m_sweep.advance(i),this.m_sweep.c.setVec2(this.m_sweep.c0),this.m_sweep.a=this.m_sweep.a0,this.m_sweep.getTransform(this.m_xf,1)},a.prototype.getPosition=function(){return this.m_xf.p},a.prototype.setPosition=function(i){this.setTransform(i,this.m_sweep.a)},a.prototype.getAngle=function(){return this.m_sweep.a},a.prototype.setAngle=function(i){this.setTransform(this.m_xf.p,i)},a.prototype.getWorldCenter=function(){return this.m_sweep.c},a.prototype.getLocalCenter=function(){return this.m_sweep.localCenter},a.prototype.getLinearVelocity=function(){return this.m_linearVelocity},a.prototype.getLinearVelocityFromWorldPoint=function(i){var n=s.sub(i,this.m_sweep.c);return s.add(this.m_linearVelocity,s.crossNumVec2(this.m_angularVelocity,n))},a.prototype.getLinearVelocityFromLocalPoint=function(i){return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(i))},a.prototype.setLinearVelocity=function(i){this.m_type!=b0&&(s.dot(i,i)>0&&this.setAwake(!0),this.m_linearVelocity.setVec2(i))},a.prototype.getAngularVelocity=function(){return this.m_angularVelocity},a.prototype.setAngularVelocity=function(i){this.m_type!=b0&&(i*i>0&&this.setAwake(!0),this.m_angularVelocity=i)},a.prototype.getLinearDamping=function(){return this.m_linearDamping},a.prototype.setLinearDamping=function(i){this.m_linearDamping=i},a.prototype.getAngularDamping=function(){return this.m_angularDamping},a.prototype.setAngularDamping=function(i){this.m_angularDamping=i},a.prototype.getGravityScale=function(){return this.m_gravityScale},a.prototype.setGravityScale=function(i){this.m_gravityScale=i},a.prototype.getMass=function(){return this.m_mass},a.prototype.getInertia=function(){return this.m_I+this.m_mass*s.dot(this.m_sweep.localCenter,this.m_sweep.localCenter)},a.prototype.getMassData=function(i){i.mass=this.m_mass,i.I=this.getInertia(),i.center.setVec2(this.m_sweep.localCenter)},a.prototype.resetMassData=function(){if(this.m_mass=0,this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_sweep.localCenter.setZero(),this.isStatic()||this.isKinematic()){this.m_sweep.c0.setVec2(this.m_xf.p),this.m_sweep.c.setVec2(this.m_xf.p),this.m_sweep.a0=this.m_sweep.a;return}for(var i=s.zero(),n=this.m_fixtureList;n;n=n.m_next)if(n.m_density!=0){var l=new o0;n.getMassData(l),this.m_mass+=l.mass,i.addMul(l.mass,l.center),this.m_I+=l.I}this.m_mass>0?(this.m_invMass=1/this.m_mass,i.mul(this.m_invMass)):(this.m_mass=1,this.m_invMass=1),this.m_I>0&&this.m_fixedRotationFlag==!1?(this.m_I-=this.m_mass*s.dot(i,i),this.m_invI=1/this.m_I):(this.m_I=0,this.m_invI=0);var u=s.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(i,this.m_xf),this.m_linearVelocity.add(s.crossNumVec2(this.m_angularVelocity,s.sub(this.m_sweep.c,u)))},a.prototype.setMassData=function(i){if(this.isWorldLocked()!=!0&&this.m_type==J){this.m_invMass=0,this.m_I=0,this.m_invI=0,this.m_mass=i.mass,this.m_mass<=0&&(this.m_mass=1),this.m_invMass=1/this.m_mass,i.I>0&&this.m_fixedRotationFlag==!1&&(this.m_I=i.I-this.m_mass*s.dot(i.center,i.center),this.m_invI=1/this.m_I);var n=s.clone(this.m_sweep.c);this.m_sweep.setLocalCenter(i.center,this.m_xf),this.m_linearVelocity.add(s.crossNumVec2(this.m_angularVelocity,s.sub(this.m_sweep.c,n)))}},a.prototype.applyForce=function(i,n,l){l===void 0&&(l=!0),this.m_type==J&&(l&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_force.add(i),this.m_torque+=s.crossVec2Vec2(s.sub(n,this.m_sweep.c),i)))},a.prototype.applyForceToCenter=function(i,n){n===void 0&&(n=!0),this.m_type==J&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&this.m_force.add(i))},a.prototype.applyTorque=function(i,n){n===void 0&&(n=!0),this.m_type==J&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_torque+=i))},a.prototype.applyLinearImpulse=function(i,n,l){l===void 0&&(l=!0),this.m_type==J&&(l&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_linearVelocity.addMul(this.m_invMass,i),this.m_angularVelocity+=this.m_invI*s.crossVec2Vec2(s.sub(n,this.m_sweep.c),i)))},a.prototype.applyAngularImpulse=function(i,n){n===void 0&&(n=!0),this.m_type==J&&(n&&this.m_awakeFlag==!1&&this.setAwake(!0),this.m_awakeFlag&&(this.m_angularVelocity+=this.m_invI*i))},a.prototype.shouldCollide=function(i){if(this.m_type!=J&&i.m_type!=J)return!1;for(var n=this.m_jointList;n;n=n.next)if(n.other==i&&n.joint.m_collideConnected==!1)return!1;return!0},a.prototype._addFixture=function(i){if(this.isWorldLocked()==!0)return null;if(this.m_activeFlag){var n=this.m_world.m_broadPhase;i.createProxies(n,this.m_xf)}return i.m_next=this.m_fixtureList,this.m_fixtureList=i,i.m_density>0&&this.resetMassData(),this.m_world.m_newFixture=!0,i},a.prototype.createFixture=function(i,n){if(this.isWorldLocked()==!0)return null;var l=new n0(this,i,n);return this._addFixture(l),l},a.prototype.destroyFixture=function(i){if(this.isWorldLocked()!=!0){if(this.m_fixtureList===i)this.m_fixtureList=i.m_next;else for(var n=this.m_fixtureList;n!=null;){if(n.m_next===i){n.m_next=i.m_next;break}n=n.m_next}for(var l=this.m_contactList;l;){var u=l.contact;l=l.next;var g=u.getFixtureA(),f=u.getFixtureB();(i==g||i==f)&&this.m_world.destroyContact(u)}if(this.m_activeFlag){var v=this.m_world.m_broadPhase;i.destroyProxies(v)}i.m_body=null,i.m_next=null,this.m_world.publish("remove-fixture",i),this.resetMassData()}},a.prototype.getWorldPoint=function(i){return P.mulVec2(this.m_xf,i)},a.prototype.getWorldVector=function(i){return M.mulVec2(this.m_xf.q,i)},a.prototype.getLocalPoint=function(i){return P.mulTVec2(this.m_xf,i)},a.prototype.getLocalVector=function(i){return M.mulTVec2(this.m_xf.q,i)},a.STATIC="static",a.KINEMATIC="kinematic",a.DYNAMIC="dynamic",a}(),d0=function(){function a(i,n,l,u){typeof i=="object"&&i!==null?(this.ex=s.clone(i),this.ey=s.clone(n)):typeof i=="number"?(this.ex=s.neo(i,l),this.ey=s.neo(n,u)):(this.ex=s.zero(),this.ey=s.zero())}return a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:s.isValid(i.ex)&&s.isValid(i.ey)},a.assert=function(i){},a.prototype.set=function(i,n,l,u){typeof i=="number"&&typeof n=="number"&&typeof l=="number"&&typeof u=="number"?(this.ex.setNum(i,l),this.ey.setNum(n,u)):typeof i=="object"&&typeof n=="object"?(this.ex.setVec2(i),this.ey.setVec2(n)):typeof i=="object"&&(this.ex.setVec2(i.ex),this.ey.setVec2(i.ey))},a.prototype.setIdentity=function(){this.ex.x=1,this.ey.x=0,this.ex.y=0,this.ey.y=1},a.prototype.setZero=function(){this.ex.x=0,this.ey.x=0,this.ex.y=0,this.ey.y=0},a.prototype.getInverse=function(){var i=this.ex.x,n=this.ey.x,l=this.ex.y,u=this.ey.y,g=i*u-n*l;g!==0&&(g=1/g);var f=new a;return f.ex.x=g*u,f.ey.x=-g*n,f.ex.y=-g*l,f.ey.y=g*i,f},a.prototype.solve=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,g=this.ey.y,f=n*g-l*u;f!==0&&(f=1/f);var v=s.zero();return v.x=f*(g*i.x-l*i.y),v.y=f*(n*i.y-u*i.x),v},a.mul=function(i,n){if(n&&"x"in n&&"y"in n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)}else if(n&&"ex"in n&&"ey"in n){var g=i.ex.x*n.ex.x+i.ey.x*n.ex.y,f=i.ex.x*n.ey.x+i.ey.x*n.ey.y,v=i.ex.y*n.ex.x+i.ey.y*n.ex.y,S=i.ex.y*n.ey.x+i.ey.y*n.ey.y;return new a(g,f,v,S)}},a.mulVec2=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)},a.mulMat22=function(i,n){var l=i.ex.x*n.ex.x+i.ey.x*n.ex.y,u=i.ex.x*n.ey.x+i.ey.x*n.ey.y,g=i.ex.y*n.ex.x+i.ey.y*n.ex.y,f=i.ex.y*n.ey.x+i.ey.y*n.ey.y;return new a(l,u,g,f)},a.mulT=function(i,n){if(n&&"x"in n&&"y"in n)return s.neo(s.dot(n,i.ex),s.dot(n,i.ey));if(n&&"ex"in n&&"ey"in n){var l=s.neo(s.dot(i.ex,n.ex),s.dot(i.ey,n.ex)),u=s.neo(s.dot(i.ex,n.ey),s.dot(i.ey,n.ey));return new a(l,u)}},a.mulTVec2=function(i,n){return s.neo(s.dot(n,i.ex),s.dot(n,i.ey))},a.mulTMat22=function(i,n){var l=s.neo(s.dot(i.ex,n.ex),s.dot(i.ey,n.ex)),u=s.neo(s.dot(i.ex,n.ey),s.dot(i.ey,n.ey));return new a(l,u)},a.abs=function(i){return new a(s.abs(i.ex),s.abs(i.ey))},a.add=function(i,n){return new a(s.add(i.ex,n.ex),s.add(i.ey,n.ey))},a}(),e0;(function(a){a[a.e_circles=0]="e_circles",a[a.e_faceA=1]="e_faceA",a[a.e_faceB=2]="e_faceB"})(e0||(e0={}));var Z;(function(a){a[a.e_vertex=0]="e_vertex",a[a.e_face=1]="e_face"})(Z||(Z={}));var C0;(function(a){a[a.nullState=0]="nullState",a[a.addState=1]="addState",a[a.persistState=2]="persistState",a[a.removeState=3]="removeState"})(C0||(C0={}));var f0=function(){function a(){this.v=s.zero(),this.id=new j0}return a.prototype.set=function(i){this.v.setVec2(i.v),this.id.set(i.id)},a}(),L0=function(){function a(){this.localNormal=s.zero(),this.localPoint=s.zero(),this.points=[new N0,new N0],this.pointCount=0}return a.prototype.getWorldManifold=function(i,n,l,u,g){if(this.pointCount!=0){i=i||new Bt;var f=i.normal,v=i.points,S=i.separations;switch(this.type){case e0.e_circles:{f=s.neo(1,0);var D=P.mulVec2(n,this.localPoint),E=P.mulVec2(u,this.points[0].localPoint),z=s.sub(E,D);s.lengthSquared(z)>p.EPSILON*p.EPSILON&&(f.setVec2(z),f.normalize());var T=D.clone().addMul(l,f),B=E.clone().addMul(-g,f);v[0]=s.mid(T,B),S[0]=s.dot(s.sub(B,T),f),v.length=1,S.length=1;break}case e0.e_faceA:{f=M.mulVec2(n.q,this.localNormal);for(var C=P.mulVec2(n,this.localPoint),F=0;F<this.pointCount;++F){var G=P.mulVec2(u,this.points[F].localPoint),T=s.clone(G).addMul(l-s.dot(s.sub(G,C),f),f),B=s.clone(G).subMul(g,f);v[F]=s.mid(T,B),S[F]=s.dot(s.sub(B,T),f)}v.length=this.pointCount,S.length=this.pointCount;break}case e0.e_faceB:{f=M.mulVec2(u.q,this.localNormal);for(var C=P.mulVec2(u,this.localPoint),F=0;F<this.pointCount;++F){var G=P.mulVec2(n,this.points[F].localPoint),B=s.combine(1,G,g-s.dot(s.sub(G,C),f),f),T=s.combine(1,G,-l,f);v[F]=s.mid(T,B),S[F]=s.dot(s.sub(T,B),f)}v.length=this.pointCount,S.length=this.pointCount,f.mul(-1);break}}return i.normal=f,i.points=v,i.separations=S,i}},a.clipSegmentToLine=J0,a.ClipVertex=f0,a.getPointStates=at,a.PointState=C0,a}(),N0=function(){function a(){this.localPoint=s.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.id=new j0}return a}(),j0=function(){function a(){this.cf=new m0}return Object.defineProperty(a.prototype,"key",{get:function(){return this.cf.indexA+this.cf.indexB*4+this.cf.typeA*16+this.cf.typeB*64},enumerable:!1,configurable:!0}),a.prototype.set=function(i){this.cf.set(i.cf)},a}(),m0=function(){function a(){}return a.prototype.set=function(i){this.indexA=i.indexA,this.indexB=i.indexB,this.typeA=i.typeA,this.typeB=i.typeB},a}(),Bt=function(){function a(){this.points=[],this.separations=[]}return a}();function at(a,i,n,l){for(var u=0;u<n.pointCount;++u){var g=n.points[u].id;a[u]=C0.removeState;for(var f=0;f<l.pointCount;++f)if(l.points[f].id.key==g.key){a[u]=C0.persistState;break}}for(var u=0;u<l.pointCount;++u){var g=l.points[u].id;i[u]=C0.addState;for(var f=0;f<n.pointCount;++f)if(n.points[f].id.key==g.key){i[u]=C0.persistState;break}}}function J0(a,i,n,l,u){var g=0,f=s.dot(n,i[0].v)-l,v=s.dot(n,i[1].v)-l;if(f<=0&&a[g++].set(i[0]),v<=0&&a[g++].set(i[1]),f*v<0){var S=f/(f-v);a[g].v.setCombine(1-S,i[0].v,S,i[1].v),a[g].id.cf.indexA=u,a[g].id.cf.indexB=i[0].id.cf.indexB,a[g].id.cf.typeA=Z.e_vertex,a[g].id.cf.typeB=Z.e_face,++g}return g}var y0={gjkCalls:0,gjkIters:0,gjkMaxIters:0,toiTime:0,toiMaxTime:0,toiCalls:0,toiIters:0,toiMaxIters:0,toiRootIters:0,toiMaxRootIters:0,toString:function(a){a=typeof a=="string"?a:`
`;var i="";for(var n in this)typeof this[n]!="function"&&typeof this[n]!="object"&&(i+=n+": "+this[n]+a);return i}};y0.gjkCalls=0,y0.gjkIters=0,y0.gjkMaxIters=0;var ut=function(){function a(){this.proxyA=new bt,this.proxyB=new bt,this.transformA=null,this.transformB=null,this.useRadii=!1}return a}(),ot=function(){function a(){this.pointA=s.zero(),this.pointB=s.zero()}return a}(),X0=function(){function a(){this.metric=0,this.indexA=[],this.indexB=[],this.count=0}return a}();function vt(a,i,n){++y0.gjkCalls;var l=n.proxyA,u=n.proxyB,g=n.transformA,f=n.transformB,v=new Ht;v.readCache(i,l,g,u,f);for(var S=v.m_v,D=b.maxDistnceIterations,E=[],z=[],T=0,B=0;B<D;){T=v.m_count;for(var C=0;C<T;++C)E[C]=S[C].indexA,z[C]=S[C].indexB;if(v.solve(),v.m_count===3)break;var F=v.getClosestPoint();F.lengthSquared();var G=v.getSearchDirection();if(G.lengthSquared()<p.EPSILON*p.EPSILON)break;var H=S[v.m_count];H.indexA=l.getSupport(M.mulTVec2(g.q,s.neg(G))),H.wA=P.mulVec2(g,l.getVertex(H.indexA)),H.indexB=u.getSupport(M.mulTVec2(f.q,G)),H.wB=P.mulVec2(f,u.getVertex(H.indexB)),H.w=s.sub(H.wB,H.wA),++B,++y0.gjkIters;for(var X=!1,C=0;C<T;++C)if(H.indexA===E[C]&&H.indexB===z[C]){X=!0;break}if(X)break;++v.m_count}if(y0.gjkMaxIters=p.max(y0.gjkMaxIters,B),v.getWitnessPoints(a.pointA,a.pointB),a.distance=s.distance(a.pointA,a.pointB),a.iterations=B,v.writeCache(i),n.useRadii){var Q=l.m_radius,h0=u.m_radius;if(a.distance>Q+h0&&a.distance>p.EPSILON){a.distance-=Q+h0;var u0=s.sub(a.pointB,a.pointA);u0.normalize(),a.pointA.addMul(Q,u0),a.pointB.subMul(h0,u0)}else{var F=s.mid(a.pointA,a.pointB);a.pointA.setVec2(F),a.pointB.setVec2(F),a.distance=0}}}var bt=function(){function a(){this.m_buffer=[],this.m_vertices=[],this.m_count=0,this.m_radius=0}return a.prototype.getVertexCount=function(){return this.m_count},a.prototype.getVertex=function(i){return this.m_vertices[i]},a.prototype.getSupport=function(i){for(var n=0,l=s.dot(this.m_vertices[0],i),u=0;u<this.m_count;++u){var g=s.dot(this.m_vertices[u],i);g>l&&(n=u,l=g)}return n},a.prototype.getSupportVertex=function(i){return this.m_vertices[this.getSupport(i)]},a.prototype.set=function(i,n){i.computeDistanceProxy(this,n)},a}(),Tt=function(){function a(){this.wA=s.zero(),this.wB=s.zero(),this.w=s.zero()}return a.prototype.set=function(i){this.indexA=i.indexA,this.indexB=i.indexB,this.wA=s.clone(i.wA),this.wB=s.clone(i.wB),this.w=s.clone(i.w),this.a=i.a},a}(),Ht=function(){function a(){this.m_v1=new Tt,this.m_v2=new Tt,this.m_v3=new Tt,this.m_v=[this.m_v1,this.m_v2,this.m_v3],this.m_count}return a.prototype.toString=function(){return this.m_count===3?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y,this.m_v3.a,this.m_v3.wA.x,this.m_v3.wA.y,this.m_v3.wB.x,this.m_v3.wB.y].toString():this.m_count===2?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y,this.m_v2.a,this.m_v2.wA.x,this.m_v2.wA.y,this.m_v2.wB.x,this.m_v2.wB.y].toString():this.m_count===1?["+"+this.m_count,this.m_v1.a,this.m_v1.wA.x,this.m_v1.wA.y,this.m_v1.wB.x,this.m_v1.wB.y].toString():"+"+this.m_count},a.prototype.readCache=function(i,n,l,u,g){this.m_count=i.count;for(var f=0;f<this.m_count;++f){var v=this.m_v[f];v.indexA=i.indexA[f],v.indexB=i.indexB[f];var S=n.getVertex(v.indexA),D=u.getVertex(v.indexB);v.wA=P.mulVec2(l,S),v.wB=P.mulVec2(g,D),v.w=s.sub(v.wB,v.wA),v.a=0}if(this.m_count>1){var E=i.metric,z=this.getMetric();(z<.5*E||2*E<z||z<p.EPSILON)&&(this.m_count=0)}if(this.m_count===0){var v=this.m_v[0];v.indexA=0,v.indexB=0;var S=n.getVertex(0),D=u.getVertex(0);v.wA=P.mulVec2(l,S),v.wB=P.mulVec2(g,D),v.w=s.sub(v.wB,v.wA),v.a=1,this.m_count=1}},a.prototype.writeCache=function(i){i.metric=this.getMetric(),i.count=this.m_count;for(var n=0;n<this.m_count;++n)i.indexA[n]=this.m_v[n].indexA,i.indexB[n]=this.m_v[n].indexB},a.prototype.getSearchDirection=function(){switch(this.m_count){case 1:return s.neg(this.m_v1.w);case 2:{var i=s.sub(this.m_v2.w,this.m_v1.w),n=s.crossVec2Vec2(i,s.neg(this.m_v1.w));return n>0?s.crossNumVec2(1,i):s.crossVec2Num(i,1)}default:return s.zero()}},a.prototype.getClosestPoint=function(){switch(this.m_count){case 0:return s.zero();case 1:return s.clone(this.m_v1.w);case 2:return s.combine(this.m_v1.a,this.m_v1.w,this.m_v2.a,this.m_v2.w);case 3:return s.zero();default:return s.zero()}},a.prototype.getWitnessPoints=function(i,n){switch(this.m_count){case 0:break;case 1:i.setVec2(this.m_v1.wA),n.setVec2(this.m_v1.wB);break;case 2:i.setCombine(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),n.setCombine(this.m_v1.a,this.m_v1.wB,this.m_v2.a,this.m_v2.wB);break;case 3:i.setCombine(this.m_v1.a,this.m_v1.wA,this.m_v2.a,this.m_v2.wA),i.addMul(this.m_v3.a,this.m_v3.wA),n.setVec2(i);break}},a.prototype.getMetric=function(){switch(this.m_count){case 0:return 0;case 1:return 0;case 2:return s.distance(this.m_v1.w,this.m_v2.w);case 3:return s.crossVec2Vec2(s.sub(this.m_v2.w,this.m_v1.w),s.sub(this.m_v3.w,this.m_v1.w));default:return 0}},a.prototype.solve=function(){switch(this.m_count){case 1:break;case 2:this.solve2();break;case 3:this.solve3();break}},a.prototype.solve2=function(){var i=this.m_v1.w,n=this.m_v2.w,l=s.sub(n,i),u=-s.dot(i,l);if(u<=0){this.m_v1.a=1,this.m_count=1;return}var g=s.dot(n,l);if(g<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}var f=1/(g+u);this.m_v1.a=g*f,this.m_v2.a=u*f,this.m_count=2},a.prototype.solve3=function(){var i=this.m_v1.w,n=this.m_v2.w,l=this.m_v3.w,u=s.sub(n,i),g=s.dot(i,u),f=s.dot(n,u),v=f,S=-g,D=s.sub(l,i),E=s.dot(i,D),z=s.dot(l,D),T=z,B=-E,C=s.sub(l,n),F=s.dot(n,C),G=s.dot(l,C),H=G,X=-F,Q=s.crossVec2Vec2(u,D),h0=Q*s.crossVec2Vec2(n,l),u0=Q*s.crossVec2Vec2(l,i),p0=Q*s.crossVec2Vec2(i,n);if(S<=0&&B<=0){this.m_v1.a=1,this.m_count=1;return}if(v>0&&S>0&&p0<=0){var v0=1/(v+S);this.m_v1.a=v*v0,this.m_v2.a=S*v0,this.m_count=2;return}if(T>0&&B>0&&u0<=0){var B0=1/(T+B);this.m_v1.a=T*B0,this.m_v3.a=B*B0,this.m_count=2,this.m_v2.set(this.m_v3);return}if(v<=0&&X<=0){this.m_v2.a=1,this.m_count=1,this.m_v1.set(this.m_v2);return}if(T<=0&&H<=0){this.m_v3.a=1,this.m_count=1,this.m_v1.set(this.m_v3);return}if(H>0&&X>0&&h0<=0){var z0=1/(H+X);this.m_v2.a=H*z0,this.m_v3.a=X*z0,this.m_count=2,this.m_v1.set(this.m_v3);return}var U0=1/(h0+u0+p0);this.m_v1.a=h0*U0,this.m_v2.a=u0*U0,this.m_v3.a=p0*U0,this.m_count=3},a}();function Ct(a,i,n,l,u,g){var f=new ut;f.proxyA.set(a,i),f.proxyB.set(n,l),f.transformA=u,f.transformB=g,f.useRadii=!0;var v=new X0,S=new ot;return vt(S,v,f),S.distance<10*p.EPSILON}var ft=function(){function a(i){this.contact=i}return a}();function Wt(a,i){return p.sqrt(a*i)}function qt(a,i){return a>i?a:i}var j=[],R=function(){function a(){this.rA=s.zero(),this.rB=s.zero(),this.normalImpulse=0,this.tangentImpulse=0,this.normalMass=0,this.tangentMass=0,this.velocityBias=0}return a}(),a0=function(){function a(i,n,l,u,g){this.m_manifold=new L0,this.m_prev=null,this.m_next=null,this.m_toi=1,this.m_toiCount=0,this.m_toiFlag=!1,this.m_tangentSpeed=0,this.m_enabledFlag=!0,this.m_islandFlag=!1,this.m_touchingFlag=!1,this.m_filterFlag=!1,this.m_bulletHitFlag=!1,this.m_impulse=new k0(this),this.v_points=[],this.v_normal=s.zero(),this.v_normalMass=new d0,this.v_K=new d0,this.p_localPoints=[],this.p_localNormal=s.zero(),this.p_localPoint=s.zero(),this.p_localCenterA=s.zero(),this.p_localCenterB=s.zero(),this.m_nodeA=new ft(this),this.m_nodeB=new ft(this),this.m_fixtureA=i,this.m_fixtureB=l,this.m_indexA=n,this.m_indexB=u,this.m_evaluateFcn=g,this.m_friction=Wt(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction),this.m_restitution=qt(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)}return a.prototype.initConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getShape(),g=l.getShape(),f=n.getBody(),v=l.getBody(),S=this.getManifold(),D=S.pointCount;this.v_invMassA=f.m_invMass,this.v_invMassB=v.m_invMass,this.v_invIA=f.m_invI,this.v_invIB=v.m_invI,this.v_friction=this.m_friction,this.v_restitution=this.m_restitution,this.v_tangentSpeed=this.m_tangentSpeed,this.v_pointCount=D,this.v_K.setZero(),this.v_normalMass.setZero(),this.p_invMassA=f.m_invMass,this.p_invMassB=v.m_invMass,this.p_invIA=f.m_invI,this.p_invIB=v.m_invI,this.p_localCenterA=s.clone(f.m_sweep.localCenter),this.p_localCenterB=s.clone(v.m_sweep.localCenter),this.p_radiusA=u.m_radius,this.p_radiusB=g.m_radius,this.p_type=S.type,this.p_localNormal=s.clone(S.localNormal),this.p_localPoint=s.clone(S.localPoint),this.p_pointCount=D;for(var E=0;E<D;++E){var z=S.points[E],T=this.v_points[E]=new R;i.warmStarting?(T.normalImpulse=i.dtRatio*z.normalImpulse,T.tangentImpulse=i.dtRatio*z.tangentImpulse):(T.normalImpulse=0,T.tangentImpulse=0),T.rA.setZero(),T.rB.setZero(),T.normalMass=0,T.tangentMass=0,T.velocityBias=0,this.p_localPoints[E]=s.clone(z.localPoint)}},a.prototype.getManifold=function(){return this.m_manifold},a.prototype.getWorldManifold=function(i){var n=this.m_fixtureA.getBody(),l=this.m_fixtureB.getBody(),u=this.m_fixtureA.getShape(),g=this.m_fixtureB.getShape();return this.m_manifold.getWorldManifold(i,n.getTransform(),u.m_radius,l.getTransform(),g.m_radius)},a.prototype.setEnabled=function(i){this.m_enabledFlag=!!i},a.prototype.isEnabled=function(){return this.m_enabledFlag},a.prototype.isTouching=function(){return this.m_touchingFlag},a.prototype.getNext=function(){return this.m_next},a.prototype.getFixtureA=function(){return this.m_fixtureA},a.prototype.getFixtureB=function(){return this.m_fixtureB},a.prototype.getChildIndexA=function(){return this.m_indexA},a.prototype.getChildIndexB=function(){return this.m_indexB},a.prototype.flagForFiltering=function(){this.m_filterFlag=!0},a.prototype.setFriction=function(i){this.m_friction=i},a.prototype.getFriction=function(){return this.m_friction},a.prototype.resetFriction=function(){this.m_friction=Wt(this.m_fixtureA.m_friction,this.m_fixtureB.m_friction)},a.prototype.setRestitution=function(i){this.m_restitution=i},a.prototype.getRestitution=function(){return this.m_restitution},a.prototype.resetRestitution=function(){this.m_restitution=qt(this.m_fixtureA.m_restitution,this.m_fixtureB.m_restitution)},a.prototype.setTangentSpeed=function(i){this.m_tangentSpeed=i},a.prototype.getTangentSpeed=function(){return this.m_tangentSpeed},a.prototype.evaluate=function(i,n,l){this.m_evaluateFcn(i,n,this.m_fixtureA,this.m_indexA,l,this.m_fixtureB,this.m_indexB)},a.prototype.update=function(i){this.m_enabledFlag=!0;var n=!1,l=this.m_touchingFlag,u=this.m_fixtureA.isSensor(),g=this.m_fixtureB.isSensor(),f=u||g,v=this.m_fixtureA.getBody(),S=this.m_fixtureB.getBody(),D=v.getTransform(),E=S.getTransform(),z;if(f){var T=this.m_fixtureA.getShape(),B=this.m_fixtureB.getShape();n=Ct(T,this.m_indexA,B,this.m_indexB,D,E),this.m_manifold.pointCount=0}else{z=this.m_manifold,this.m_manifold=new L0,this.evaluate(this.m_manifold,D,E),n=this.m_manifold.pointCount>0;for(var C=0;C<this.m_manifold.pointCount;++C){var F=this.m_manifold.points[C];F.normalImpulse=0,F.tangentImpulse=0;for(var G=0;G<z.pointCount;++G){var H=z.points[G];if(H.id.key==F.id.key){F.normalImpulse=H.normalImpulse,F.tangentImpulse=H.tangentImpulse;break}}}n!=l&&(v.setAwake(!0),S.setAwake(!0))}this.m_touchingFlag=n,!l&&n&&i&&i.beginContact(this),l&&!n&&i&&i.endContact(this),!f&&n&&i&&i.preSolve(this,z)},a.prototype.solvePositionConstraint=function(i){return this._solvePositionConstraint(i)},a.prototype.solvePositionConstraintTOI=function(i,n,l){return this._solvePositionConstraint(i,n,l)},a.prototype._solvePositionConstraint=function(i,n,l){var u=!!n&&!!l,g=this.m_fixtureA,f=this.m_fixtureB,v=g.getBody(),S=f.getBody();v.c_velocity,S.c_velocity;var D=v.c_position,E=S.c_position,z=s.clone(this.p_localCenterA),T=s.clone(this.p_localCenterB),B=0,C=0;(!u||v==n||v==l)&&(B=this.p_invMassA,C=this.p_invIA);var F=0,G=0;(!u||S==n||S==l)&&(F=this.p_invMassB,G=this.p_invIB);for(var H=s.clone(D.c),X=D.a,Q=s.clone(E.c),h0=E.a,u0=0,p0=0;p0<this.p_pointCount;++p0){var v0=P.identity(),B0=P.identity();v0.q.setAngle(X),B0.q.setAngle(h0),v0.p=s.sub(H,M.mulVec2(v0.q,z)),B0.p=s.sub(Q,M.mulVec2(B0.q,T));var z0=void 0,U0=void 0,D0=void 0;switch(this.p_type){case e0.e_circles:{var x0=P.mulVec2(v0,this.p_localPoint),Z0=P.mulVec2(B0,this.p_localPoints[0]);z0=s.sub(Z0,x0),z0.normalize(),U0=s.combine(.5,x0,.5,Z0),D0=s.dot(s.sub(Z0,x0),z0)-this.p_radiusA-this.p_radiusB;break}case e0.e_faceA:{z0=M.mulVec2(v0.q,this.p_localNormal);var Q0=P.mulVec2(v0,this.p_localPoint),it=P.mulVec2(B0,this.p_localPoints[p0]);D0=s.dot(s.sub(it,Q0),z0)-this.p_radiusA-this.p_radiusB,U0=it;break}case e0.e_faceB:{z0=M.mulVec2(B0.q,this.p_localNormal);var Q0=P.mulVec2(B0,this.p_localPoint),it=P.mulVec2(v0,this.p_localPoints[p0]);D0=s.dot(s.sub(it,Q0),z0)-this.p_radiusA-this.p_radiusB,U0=it,z0.mul(-1);break}}var At=s.sub(U0,H),xt=s.sub(U0,Q);u0=p.min(u0,D0);var _t=u?b.toiBaugarte:b.baumgarte,W0=b.linearSlop,Y0=b.maxLinearCorrection,et=p.clamp(_t*(D0+W0),-Y0,0),G0=s.crossVec2Vec2(At,z0),It=s.crossVec2Vec2(xt,z0),$t=B+F+C*G0*G0+G*It*It,me=$t>0?-et/$t:0,Ft=s.mulNumVec2(me,z0);H.subMul(B,Ft),X-=C*s.crossVec2Vec2(At,Ft),Q.addMul(F,Ft),h0+=G*s.crossVec2Vec2(xt,Ft)}return D.c.setVec2(H),D.a=X,E.c.setVec2(Q),E.a=h0,u0},a.prototype.initVelocityConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getBody(),g=l.getBody(),f=u.c_velocity,v=g.c_velocity,S=u.c_position,D=g.c_position,E=this.p_radiusA,z=this.p_radiusB,T=this.getManifold(),B=this.v_invMassA,C=this.v_invMassB,F=this.v_invIA,G=this.v_invIB,H=s.clone(this.p_localCenterA),X=s.clone(this.p_localCenterB),Q=s.clone(S.c),h0=S.a,u0=s.clone(f.v),p0=f.w,v0=s.clone(D.c),B0=D.a,z0=s.clone(v.v),U0=v.w,D0=P.identity(),x0=P.identity();D0.q.setAngle(h0),x0.q.setAngle(B0),D0.p.setCombine(1,Q,-1,M.mulVec2(D0.q,H)),x0.p.setCombine(1,v0,-1,M.mulVec2(x0.q,X));var Z0=T.getWorldManifold(null,D0,E,x0,z);this.v_normal.setVec2(Z0.normal);for(var Q0=0;Q0<this.v_pointCount;++Q0){var it=this.v_points[Q0];it.rA.setVec2(s.sub(Z0.points[Q0],Q)),it.rB.setVec2(s.sub(Z0.points[Q0],v0));var At=s.crossVec2Vec2(it.rA,this.v_normal),xt=s.crossVec2Vec2(it.rB,this.v_normal),_t=B+C+F*At*At+G*xt*xt;it.normalMass=_t>0?1/_t:0;var W0=s.crossVec2Num(this.v_normal,1),Y0=s.crossVec2Vec2(it.rA,W0),et=s.crossVec2Vec2(it.rB,W0),G0=B+C+F*Y0*Y0+G*et*et;it.tangentMass=G0>0?1/G0:0,it.velocityBias=0;var It=s.dot(this.v_normal,z0)+s.dot(this.v_normal,s.crossNumVec2(U0,it.rB))-s.dot(this.v_normal,u0)-s.dot(this.v_normal,s.crossNumVec2(p0,it.rA));It<-b.velocityThreshold&&(it.velocityBias=-this.v_restitution*It)}if(this.v_pointCount==2&&i.blockSolve){var $t=this.v_points[0],me=this.v_points[1],Ft=s.crossVec2Vec2($t.rA,this.v_normal),qe=s.crossVec2Vec2($t.rB,this.v_normal),Bi=s.crossVec2Vec2(me.rA,this.v_normal),te=s.crossVec2Vec2(me.rB,this.v_normal),De=B+C+F*Ft*Ft+G*qe*qe,Ci=B+C+F*Bi*Bi+G*te*te,Ei=B+C+F*Ft*Bi+G*qe*te,Le=1e3;De*De<Le*(De*Ci-Ei*Ei)?(this.v_K.ex.setNum(De,Ei),this.v_K.ey.setNum(Ei,Ci),this.v_normalMass.set(this.v_K.getInverse())):this.v_pointCount=1}S.c.setVec2(Q),S.a=h0,f.v.setVec2(u0),f.w=p0,D.c.setVec2(v0),D.a=B0,v.v.setVec2(z0),v.w=U0},a.prototype.warmStartConstraint=function(i){var n=this.m_fixtureA,l=this.m_fixtureB,u=n.getBody(),g=l.getBody(),f=u.c_velocity,v=g.c_velocity;u.c_position,g.c_position;for(var S=this.v_invMassA,D=this.v_invIA,E=this.v_invMassB,z=this.v_invIB,T=s.clone(f.v),B=f.w,C=s.clone(v.v),F=v.w,G=this.v_normal,H=s.crossVec2Num(G,1),X=0;X<this.v_pointCount;++X){var Q=this.v_points[X],h0=s.combine(Q.normalImpulse,G,Q.tangentImpulse,H);B-=D*s.crossVec2Vec2(Q.rA,h0),T.subMul(S,h0),F+=z*s.crossVec2Vec2(Q.rB,h0),C.addMul(E,h0)}f.v.setVec2(T),f.w=B,v.v.setVec2(C),v.w=F},a.prototype.storeConstraintImpulses=function(i){for(var n=this.m_manifold,l=0;l<this.v_pointCount;++l)n.points[l].normalImpulse=this.v_points[l].normalImpulse,n.points[l].tangentImpulse=this.v_points[l].tangentImpulse},a.prototype.solveVelocityConstraint=function(i){var n=this.m_fixtureA.m_body,l=this.m_fixtureB.m_body,u=n.c_velocity;n.c_position;var g=l.c_velocity;l.c_position;for(var f=this.v_invMassA,v=this.v_invIA,S=this.v_invMassB,D=this.v_invIB,E=s.clone(u.v),z=u.w,T=s.clone(g.v),B=g.w,C=this.v_normal,F=s.crossVec2Num(C,1),G=this.v_friction,H=0;H<this.v_pointCount;++H){var X=this.v_points[H],Q=s.zero();Q.addCombine(1,T,1,s.crossNumVec2(B,X.rB)),Q.subCombine(1,E,1,s.crossNumVec2(z,X.rA));var h0=s.dot(Q,F)-this.v_tangentSpeed,u0=X.tangentMass*-h0,p0=G*X.normalImpulse,v0=p.clamp(X.tangentImpulse+u0,-p0,p0);u0=v0-X.tangentImpulse,X.tangentImpulse=v0;var B0=s.mulNumVec2(u0,F);E.subMul(f,B0),z-=v*s.crossVec2Vec2(X.rA,B0),T.addMul(S,B0),B+=D*s.crossVec2Vec2(X.rB,B0)}if(this.v_pointCount==1||i.blockSolve==!1)for(var z0=0;z0<this.v_pointCount;++z0){var X=this.v_points[z0],Q=s.zero();Q.addCombine(1,T,1,s.crossNumVec2(B,X.rB)),Q.subCombine(1,E,1,s.crossNumVec2(z,X.rA));var U0=s.dot(Q,C),u0=-X.normalMass*(U0-X.velocityBias),v0=p.max(X.normalImpulse+u0,0);u0=v0-X.normalImpulse,X.normalImpulse=v0;var B0=s.mulNumVec2(u0,C);E.subMul(f,B0),z-=v*s.crossVec2Vec2(X.rA,B0),T.addMul(S,B0),B+=D*s.crossVec2Vec2(X.rB,B0)}else{var D0=this.v_points[0],x0=this.v_points[1],Z0=s.neo(D0.normalImpulse,x0.normalImpulse),Q0=s.zero().add(T).add(s.crossNumVec2(B,D0.rB)).sub(E).sub(s.crossNumVec2(z,D0.rA)),it=s.zero().add(T).add(s.crossNumVec2(B,x0.rB)).sub(E).sub(s.crossNumVec2(z,x0.rA)),At=s.dot(Q0,C),xt=s.dot(it,C),_t=s.neo(At-D0.velocityBias,xt-x0.velocityBias);for(_t.sub(d0.mulVec2(this.v_K,Z0));;){var W0=d0.mulVec2(this.v_normalMass,_t).neg();if(W0.x>=0&&W0.y>=0){var Y0=s.sub(W0,Z0),et=s.mulNumVec2(Y0.x,C),G0=s.mulNumVec2(Y0.y,C);E.subCombine(f,et,f,G0),z-=v*(s.crossVec2Vec2(D0.rA,et)+s.crossVec2Vec2(x0.rA,G0)),T.addCombine(S,et,S,G0),B+=D*(s.crossVec2Vec2(D0.rB,et)+s.crossVec2Vec2(x0.rB,G0)),D0.normalImpulse=W0.x,x0.normalImpulse=W0.y;break}if(W0.x=-D0.normalMass*_t.x,W0.y=0,At=0,xt=this.v_K.ex.y*W0.x+_t.y,W0.x>=0&&xt>=0){var Y0=s.sub(W0,Z0),et=s.mulNumVec2(Y0.x,C),G0=s.mulNumVec2(Y0.y,C);E.subCombine(f,et,f,G0),z-=v*(s.crossVec2Vec2(D0.rA,et)+s.crossVec2Vec2(x0.rA,G0)),T.addCombine(S,et,S,G0),B+=D*(s.crossVec2Vec2(D0.rB,et)+s.crossVec2Vec2(x0.rB,G0)),D0.normalImpulse=W0.x,x0.normalImpulse=W0.y;break}if(W0.x=0,W0.y=-x0.normalMass*_t.y,At=this.v_K.ey.x*W0.y+_t.x,xt=0,W0.y>=0&&At>=0){var Y0=s.sub(W0,Z0),et=s.mulNumVec2(Y0.x,C),G0=s.mulNumVec2(Y0.y,C);E.subCombine(f,et,f,G0),z-=v*(s.crossVec2Vec2(D0.rA,et)+s.crossVec2Vec2(x0.rA,G0)),T.addCombine(S,et,S,G0),B+=D*(s.crossVec2Vec2(D0.rB,et)+s.crossVec2Vec2(x0.rB,G0)),D0.normalImpulse=W0.x,x0.normalImpulse=W0.y;break}if(W0.x=0,W0.y=0,At=_t.x,xt=_t.y,At>=0&&xt>=0){var Y0=s.sub(W0,Z0),et=s.mulNumVec2(Y0.x,C),G0=s.mulNumVec2(Y0.y,C);E.subCombine(f,et,f,G0),z-=v*(s.crossVec2Vec2(D0.rA,et)+s.crossVec2Vec2(x0.rA,G0)),T.addCombine(S,et,S,G0),B+=D*(s.crossVec2Vec2(D0.rB,et)+s.crossVec2Vec2(x0.rB,G0)),D0.normalImpulse=W0.x,x0.normalImpulse=W0.y;break}break}}u.v.setVec2(E),u.w=z,g.v.setVec2(T),g.w=B},a.addType=function(i,n,l){j[i]=j[i]||{},j[i][n]=l},a.create=function(i,n,l,u){var g=i.getType(),f=l.getType(),v,S;if(S=j[g]&&j[g][f])v=new a(i,n,l,u,S);else if(S=j[f]&&j[f][g])v=new a(l,u,i,n,S);else return null;i=v.getFixtureA(),l=v.getFixtureB(),n=v.getChildIndexA(),u=v.getChildIndexB();var D=i.getBody(),E=l.getBody();return v.m_nodeA.contact=v,v.m_nodeA.other=E,v.m_nodeA.prev=null,v.m_nodeA.next=D.m_contactList,D.m_contactList!=null&&(D.m_contactList.prev=v.m_nodeA),D.m_contactList=v.m_nodeA,v.m_nodeB.contact=v,v.m_nodeB.other=D,v.m_nodeB.prev=null,v.m_nodeB.next=E.m_contactList,E.m_contactList!=null&&(E.m_contactList.prev=v.m_nodeB),E.m_contactList=v.m_nodeB,i.isSensor()==!1&&l.isSensor()==!1&&(D.setAwake(!0),E.setAwake(!0)),v},a.destroy=function(i,n){var l=i.m_fixtureA,u=i.m_fixtureB,g=l.getBody(),f=u.getBody();i.isTouching()&&n.endContact(i),i.m_nodeA.prev&&(i.m_nodeA.prev.next=i.m_nodeA.next),i.m_nodeA.next&&(i.m_nodeA.next.prev=i.m_nodeA.prev),i.m_nodeA==g.m_contactList&&(g.m_contactList=i.m_nodeA.next),i.m_nodeB.prev&&(i.m_nodeB.prev.next=i.m_nodeB.next),i.m_nodeB.next&&(i.m_nodeB.next.prev=i.m_nodeB.prev),i.m_nodeB==f.m_contactList&&(f.m_contactList=i.m_nodeB.next),i.m_manifold.pointCount>0&&l.isSensor()==!1&&u.isSensor()==!1&&(g.setAwake(!0),f.setAwake(!0)),l.getType(),u.getType()},a}(),w0=function(){function a(){this.other=null,this.joint=null,this.prev=null,this.next=null}return a}(),A0=function(){function a(i,n,l){this.m_type="unknown-joint",this.m_prev=null,this.m_next=null,this.m_edgeA=new w0,this.m_edgeB=new w0,this.m_islandFlag=!1,n="bodyA"in i?i.bodyA:n,l="bodyB"in i?i.bodyB:l,this.m_bodyA=n,this.m_bodyB=l,this.m_collideConnected=!!i.collideConnected,this.m_userData=i.userData}return a.prototype.isActive=function(){return this.m_bodyA.isActive()&&this.m_bodyB.isActive()},a.prototype.getType=function(){return this.m_type},a.prototype.getBodyA=function(){return this.m_bodyA},a.prototype.getBodyB=function(){return this.m_bodyB},a.prototype.getNext=function(){return this.m_next},a.prototype.getUserData=function(){return this.m_userData},a.prototype.setUserData=function(i){this.m_userData=i},a.prototype.getCollideConnected=function(){return this.m_collideConnected},a.prototype.shiftOrigin=function(i){},a}(),F0=function(){return Date.now()},K0=function(a){return Date.now()-a},V={now:F0,diff:K0},_0=function(){function a(){this.proxyA=new bt,this.proxyB=new bt,this.sweepA=new k,this.sweepB=new k}return a}(),M0;(function(a){a[a.e_unknown=0]="e_unknown",a[a.e_failed=1]="e_failed",a[a.e_overlapped=2]="e_overlapped",a[a.e_touching=3]="e_touching",a[a.e_separated=4]="e_separated"})(M0||(M0={}));var E0=function(){function a(){}return a}();y0.toiTime=0,y0.toiMaxTime=0,y0.toiCalls=0,y0.toiIters=0,y0.toiMaxIters=0,y0.toiRootIters=0,y0.toiMaxRootIters=0;function W(a,i){var n=V.now();++y0.toiCalls,a.state=M0.e_unknown,a.t=i.tMax;var l=i.proxyA,u=i.proxyB,g=i.sweepA,f=i.sweepB;g.normalize(),f.normalize();var v=i.tMax,S=l.m_radius+u.m_radius,D=p.max(b.linearSlop,S-3*b.linearSlop),E=.25*b.linearSlop,z=0,T=b.maxTOIIterations,B=0,C=new X0,F=new ut;for(F.proxyA=i.proxyA,F.proxyB=i.proxyB,F.useRadii=!1;;){var G=P.identity(),H=P.identity();g.getTransform(G,z),f.getTransform(H,z),F.transformA=G,F.transformB=H;var X=new ot;if(vt(X,C,F),X.distance<=0){a.state=M0.e_overlapped,a.t=0;break}if(X.distance<D+E){a.state=M0.e_touching,a.t=z;break}var Q=new T0;Q.initialize(C,l,g,u,f,z);for(var h0=!1,u0=v,p0=0;;){var v0=Q.findMinSeparation(u0);if(v0>D+E){a.state=M0.e_separated,a.t=v,h0=!0;break}if(v0>D-E){z=u0;break}var B0=Q.evaluate(z);if(B0<D-E){a.state=M0.e_failed,a.t=z,h0=!0;break}if(B0<=D+E){a.state=M0.e_touching,a.t=z,h0=!0;break}for(var z0=0,U0=z,D0=u0;;){var x0=void 0;z0&1?x0=U0+(D-B0)*(D0-U0)/(v0-B0):x0=.5*(U0+D0),++z0,++y0.toiRootIters;var Z0=Q.evaluate(x0);if(Q.indexA,Q.indexB,p.abs(Z0-D)<E){u0=x0;break}if(Z0>D?(U0=x0,B0=Z0):(D0=x0,v0=Z0),z0===50)break}if(y0.toiMaxRootIters=p.max(y0.toiMaxRootIters,z0),++p0,p0===b.maxPolygonVertices)break}if(++B,++y0.toiIters,h0)break;if(B===T){a.state=M0.e_failed,a.t=z;break}}y0.toiMaxIters=p.max(y0.toiMaxIters,B);var Q0=V.diff(n);y0.toiMaxTime=p.max(y0.toiMaxTime,Q0),y0.toiTime+=Q0}var S0;(function(a){a[a.e_points=1]="e_points",a[a.e_faceA=2]="e_faceA",a[a.e_faceB=3]="e_faceB"})(S0||(S0={}));var T0=function(){function a(){this.m_proxyA=new bt,this.m_proxyB=new bt,this.m_localPoint=s.zero(),this.m_axis=s.zero()}return a.prototype.initialize=function(i,n,l,u,g,f){this.m_proxyA=n,this.m_proxyB=u;var v=i.count;this.m_sweepA=l,this.m_sweepB=g;var S=P.identity(),D=P.identity();if(this.m_sweepA.getTransform(S,f),this.m_sweepB.getTransform(D,f),v===1){this.m_type=S0.e_points;var E=this.m_proxyA.getVertex(i.indexA[0]),z=this.m_proxyB.getVertex(i.indexB[0]),T=P.mulVec2(S,E),B=P.mulVec2(D,z);this.m_axis.setCombine(1,B,-1,T);var C=this.m_axis.normalize();return C}else if(i.indexA[0]===i.indexA[1]){this.m_type=S0.e_faceB;var F=u.getVertex(i.indexB[0]),G=u.getVertex(i.indexB[1]);this.m_axis=s.crossVec2Num(s.sub(G,F),1),this.m_axis.normalize();var H=M.mulVec2(D.q,this.m_axis);this.m_localPoint=s.mid(F,G);var B=P.mulVec2(D,this.m_localPoint),E=n.getVertex(i.indexA[0]),T=P.mulVec2(S,E),C=s.dot(T,H)-s.dot(B,H);return C<0&&(this.m_axis=s.neg(this.m_axis),C=-C),C}else{this.m_type=S0.e_faceA;var X=this.m_proxyA.getVertex(i.indexA[0]),Q=this.m_proxyA.getVertex(i.indexA[1]);this.m_axis=s.crossVec2Num(s.sub(Q,X),1),this.m_axis.normalize();var H=M.mulVec2(S.q,this.m_axis);this.m_localPoint=s.mid(X,Q);var T=P.mulVec2(S,this.m_localPoint),z=this.m_proxyB.getVertex(i.indexB[0]),B=P.mulVec2(D,z),C=s.dot(B,H)-s.dot(T,H);return C<0&&(this.m_axis=s.neg(this.m_axis),C=-C),C}},a.prototype.compute=function(i,n){var l=P.identity(),u=P.identity();switch(this.m_sweepA.getTransform(l,n),this.m_sweepB.getTransform(u,n),this.m_type){case S0.e_points:{if(i){var g=M.mulTVec2(l.q,this.m_axis),f=M.mulTVec2(u.q,s.neg(this.m_axis));this.indexA=this.m_proxyA.getSupport(g),this.indexB=this.m_proxyB.getSupport(f)}var v=this.m_proxyA.getVertex(this.indexA),S=this.m_proxyB.getVertex(this.indexB),D=P.mulVec2(l,v),E=P.mulVec2(u,S),z=s.dot(E,this.m_axis)-s.dot(D,this.m_axis);return z}case S0.e_faceA:{var T=M.mulVec2(l.q,this.m_axis),D=P.mulVec2(l,this.m_localPoint);if(i){var f=M.mulTVec2(u.q,s.neg(T));this.indexA=-1,this.indexB=this.m_proxyB.getSupport(f)}var S=this.m_proxyB.getVertex(this.indexB),E=P.mulVec2(u,S),z=s.dot(E,T)-s.dot(D,T);return z}case S0.e_faceB:{var T=M.mulVec2(u.q,this.m_axis),E=P.mulVec2(u,this.m_localPoint);if(i){var g=M.mulTVec2(l.q,s.neg(T));this.indexB=-1,this.indexA=this.m_proxyA.getSupport(g)}var v=this.m_proxyA.getVertex(this.indexA),D=P.mulVec2(l,v),z=s.dot(D,T)-s.dot(E,T);return z}default:return i&&(this.indexA=-1,this.indexB=-1),0}},a.prototype.findMinSeparation=function(i){return this.compute(!0,i)},a.prototype.evaluate=function(i){return this.compute(!1,i)},a}(),q0=function(){function a(){this.dt=0,this.inv_dt=0,this.velocityIterations=0,this.positionIterations=0,this.warmStarting=!1,this.blockSolve=!0,this.inv_dt0=0,this.dtRatio=1}return a.prototype.reset=function(i){this.dt>0&&(this.inv_dt0=this.inv_dt),this.dt=i,this.inv_dt=i==0?0:1/i,this.dtRatio=i*this.inv_dt0},a}(),R0=new q0,k0=function(){function a(i){this.contact=i,this.normals=[],this.tangents=[]}return Object.defineProperty(a.prototype,"normalImpulses",{get:function(){var i=this.contact,n=this.normals;n.length=0;for(var l=0;l<i.v_points.length;++l)n.push(i.v_points[l].normalImpulse);return n},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"tangentImpulses",{get:function(){var i=this.contact,n=this.tangents;n.length=0;for(var l=0;l<i.v_points.length;++l)n.push(i.v_points[l].tangentImpulse);return n},enumerable:!1,configurable:!0}),a}(),I0=function(){function a(i){this.m_world=i,this.m_stack=[],this.m_bodies=[],this.m_contacts=[],this.m_joints=[]}return a.prototype.clear=function(){this.m_stack.length=0,this.m_bodies.length=0,this.m_contacts.length=0,this.m_joints.length=0},a.prototype.addBody=function(i){this.m_bodies.push(i)},a.prototype.addContact=function(i){this.m_contacts.push(i)},a.prototype.addJoint=function(i){this.m_joints.push(i)},a.prototype.solveWorld=function(i){for(var n=this.m_world,l=n.m_bodyList;l;l=l.m_next)l.m_islandFlag=!1;for(var u=n.m_contactList;u;u=u.m_next)u.m_islandFlag=!1;for(var g=n.m_jointList;g;g=g.m_next)g.m_islandFlag=!1;for(var f=this.m_stack,v=n.m_bodyList;v;v=v.m_next)if(!v.m_islandFlag&&!(v.isAwake()==!1||v.isActive()==!1)&&!v.isStatic()){for(this.clear(),f.push(v),v.m_islandFlag=!0;f.length>0;){var l=f.pop();if(this.addBody(l),l.setAwake(!0),!l.isStatic()){for(var S=l.m_contactList;S;S=S.next){var D=S.contact;if(!D.m_islandFlag&&!(D.isEnabled()==!1||D.isTouching()==!1)){var E=D.m_fixtureA.m_isSensor,z=D.m_fixtureB.m_isSensor;if(!(E||z)){this.addContact(D),D.m_islandFlag=!0;var T=S.other;T.m_islandFlag||(f.push(T),T.m_islandFlag=!0)}}}for(var B=l.m_jointList;B;B=B.next)if(B.joint.m_islandFlag!=!0){var T=B.other;T.isActive()!=!1&&(this.addJoint(B.joint),B.joint.m_islandFlag=!0,!T.m_islandFlag&&(f.push(T),T.m_islandFlag=!0))}}}this.solveIsland(i);for(var C=0;C<this.m_bodies.length;++C){var l=this.m_bodies[C];l.isStatic()&&(l.m_islandFlag=!1)}}},a.prototype.solveIsland=function(i){for(var n=this.m_world,l=n.m_gravity,u=n.m_allowSleep,g=i.dt,f=0;f<this.m_bodies.length;++f){var v=this.m_bodies[f],S=s.clone(v.m_sweep.c),D=v.m_sweep.a,E=s.clone(v.m_linearVelocity),z=v.m_angularVelocity;v.m_sweep.c0.setVec2(v.m_sweep.c),v.m_sweep.a0=v.m_sweep.a,v.isDynamic()&&(E.addMul(g*v.m_gravityScale,l),E.addMul(g*v.m_invMass,v.m_force),z+=g*v.m_invI*v.m_torque,E.mul(1/(1+g*v.m_linearDamping)),z*=1/(1+g*v.m_angularDamping)),v.c_position.c=S,v.c_position.a=D,v.c_velocity.v=E,v.c_velocity.w=z}for(var f=0;f<this.m_contacts.length;++f){var T=this.m_contacts[f];T.initConstraint(i)}for(var f=0;f<this.m_contacts.length;++f){var T=this.m_contacts[f];T.initVelocityConstraint(i)}if(i.warmStarting)for(var f=0;f<this.m_contacts.length;++f){var T=this.m_contacts[f];T.warmStartConstraint(i)}for(var f=0;f<this.m_joints.length;++f){var B=this.m_joints[f];B.initVelocityConstraints(i)}for(var f=0;f<i.velocityIterations;++f){for(var C=0;C<this.m_joints.length;++C){var B=this.m_joints[C];B.solveVelocityConstraints(i)}for(var C=0;C<this.m_contacts.length;++C){var T=this.m_contacts[C];T.solveVelocityConstraint(i)}}for(var f=0;f<this.m_contacts.length;++f){var T=this.m_contacts[f];T.storeConstraintImpulses(i)}for(var f=0;f<this.m_bodies.length;++f){var v=this.m_bodies[f],S=s.clone(v.c_position.c),D=v.c_position.a,E=s.clone(v.c_velocity.v),z=v.c_velocity.w,F=s.mulNumVec2(g,E);if(s.lengthSquared(F)>b.maxTranslationSquared){var G=b.maxTranslation/F.length();E.mul(G)}var H=g*z;if(H*H>b.maxRotationSquared){var G=b.maxRotation/p.abs(H);z*=G}S.addMul(g,E),D+=g*z,v.c_position.c.setVec2(S),v.c_position.a=D,v.c_velocity.v.setVec2(E),v.c_velocity.w=z}for(var X=!1,f=0;f<i.positionIterations;++f){for(var Q=0,C=0;C<this.m_contacts.length;++C){var T=this.m_contacts[C],h0=T.solvePositionConstraint(i);Q=p.min(Q,h0)}for(var u0=Q>=-3*b.linearSlop,p0=!0,C=0;C<this.m_joints.length;++C){var B=this.m_joints[C],v0=B.solvePositionConstraints(i);p0=p0&&v0}if(u0&&p0){X=!0;break}}for(var f=0;f<this.m_bodies.length;++f){var v=this.m_bodies[f];v.m_sweep.c.setVec2(v.c_position.c),v.m_sweep.a=v.c_position.a,v.m_linearVelocity.setVec2(v.c_velocity.v),v.m_angularVelocity=v.c_velocity.w,v.synchronizeTransform()}if(this.postSolveIsland(),u){for(var B0=1/0,z0=b.linearSleepToleranceSqr,U0=b.angularSleepToleranceSqr,f=0;f<this.m_bodies.length;++f){var v=this.m_bodies[f];v.isStatic()||(v.m_autoSleepFlag==!1||v.m_angularVelocity*v.m_angularVelocity>U0||s.lengthSquared(v.m_linearVelocity)>z0?(v.m_sleepTime=0,B0=0):(v.m_sleepTime+=g,B0=p.min(B0,v.m_sleepTime)))}if(B0>=b.timeToSleep&&X)for(var f=0;f<this.m_bodies.length;++f){var v=this.m_bodies[f];v.setAwake(!1)}}},a.prototype.printBodies=function(i){for(var n=0;n<this.m_bodies.length;++n){var l=this.m_bodies[n];_.debug(i,l.c_position.a,l.c_position.c.x,l.c_position.c.y,l.c_velocity.w,l.c_velocity.v.x,l.c_velocity.v.y)}},a.prototype.solveWorldTOI=function(i){var n=this.m_world;if(n.m_stepComplete){for(var W0=n.m_bodyList;W0;W0=W0.m_next)W0.m_islandFlag=!1,W0.m_sweep.alpha0=0;for(var Y0=n.m_contactList;Y0;Y0=Y0.m_next)Y0.m_toiFlag=!1,Y0.m_islandFlag=!1,Y0.m_toiCount=0,Y0.m_toi=1}for(;;){for(var l=null,u=1,Y0=n.m_contactList;Y0;Y0=Y0.m_next)if(Y0.isEnabled()!=!1&&!(Y0.m_toiCount>b.maxSubSteps)){var g=1;if(Y0.m_toiFlag)g=Y0.m_toi;else{var f=Y0.getFixtureA(),v=Y0.getFixtureB();if(f.isSensor()||v.isSensor())continue;var S=f.getBody(),D=v.getBody(),E=S.isAwake()&&!S.isStatic(),z=D.isAwake()&&!D.isStatic();if(E==!1&&z==!1)continue;var T=S.isBullet()||!S.isDynamic(),B=D.isBullet()||!D.isDynamic();if(T==!1&&B==!1)continue;var C=S.m_sweep.alpha0;S.m_sweep.alpha0<D.m_sweep.alpha0?(C=D.m_sweep.alpha0,S.m_sweep.advance(C)):D.m_sweep.alpha0<S.m_sweep.alpha0&&(C=S.m_sweep.alpha0,D.m_sweep.advance(C));var F=Y0.getChildIndexA(),G=Y0.getChildIndexB();S.m_sweep,D.m_sweep;var H=new _0;H.proxyA.set(f.getShape(),F),H.proxyB.set(v.getShape(),G),H.sweepA.set(S.m_sweep),H.sweepB.set(D.m_sweep),H.tMax=1;var X=new E0;W(X,H);var Q=X.t;X.state==M0.e_touching?g=p.min(C+(1-C)*Q,1):g=1,Y0.m_toi=g,Y0.m_toiFlag=!0}g<u&&(l=Y0,u=g)}if(l==null||1-10*p.EPSILON<u){n.m_stepComplete=!0;break}var h0=l.getFixtureA(),u0=l.getFixtureB(),p0=h0.getBody(),v0=u0.getBody(),B0=p0.m_sweep.clone(),z0=v0.m_sweep.clone();if(p0.advance(u),v0.advance(u),l.update(n),l.m_toiFlag=!1,++l.m_toiCount,l.isEnabled()==!1||l.isTouching()==!1){l.setEnabled(!1),p0.m_sweep.set(B0),v0.m_sweep.set(z0),p0.synchronizeTransform(),v0.synchronizeTransform();continue}p0.setAwake(!0),v0.setAwake(!0),this.clear(),this.addBody(p0),this.addBody(v0),this.addContact(l),p0.m_islandFlag=!0,v0.m_islandFlag=!0,l.m_islandFlag=!0;for(var U0=[p0,v0],D0=0;D0<U0.length;++D0){var x0=U0[D0];if(x0.isDynamic())for(var Z0=x0.m_contactList;Z0;Z0=Z0.next){var Q0=Z0.contact;if(!Q0.m_islandFlag){var it=Z0.other;if(!(it.isDynamic()&&!x0.isBullet()&&!it.isBullet())){var At=Q0.m_fixtureA.m_isSensor,xt=Q0.m_fixtureB.m_isSensor;if(!(At||xt)){var _t=it.m_sweep.clone();if(it.m_islandFlag==!1&&it.advance(u),Q0.update(n),Q0.isEnabled()==!1||Q0.isTouching()==!1){it.m_sweep.set(_t),it.synchronizeTransform();continue}Q0.m_islandFlag=!0,this.addContact(Q0),!it.m_islandFlag&&(it.m_islandFlag=!0,it.isStatic()||it.setAwake(!0),this.addBody(it))}}}}}R0.reset((1-u)*i.dt),R0.dtRatio=1,R0.positionIterations=20,R0.velocityIterations=i.velocityIterations,R0.warmStarting=!1,this.solveIslandTOI(R0,p0,v0);for(var D0=0;D0<this.m_bodies.length;++D0){var x0=this.m_bodies[D0];if(x0.m_islandFlag=!1,!!x0.isDynamic()){x0.synchronizeFixtures();for(var Z0=x0.m_contactList;Z0;Z0=Z0.next)Z0.contact.m_toiFlag=!1,Z0.contact.m_islandFlag=!1}}if(n.findNewContacts(),n.m_subStepping){n.m_stepComplete=!1;break}}var W0,Y0},a.prototype.solveIslandTOI=function(i,n,l){this.m_world;for(var E=0;E<this.m_bodies.length;++E){var u=this.m_bodies[E];u.c_position.c.setVec2(u.m_sweep.c),u.c_position.a=u.m_sweep.a,u.c_velocity.v.setVec2(u.m_linearVelocity),u.c_velocity.w=u.m_angularVelocity}for(var E=0;E<this.m_contacts.length;++E){var g=this.m_contacts[E];g.initConstraint(i)}for(var E=0;E<i.positionIterations;++E){for(var f=0,v=0;v<this.m_contacts.length;++v){var g=this.m_contacts[v],S=g.solvePositionConstraintTOI(i,n,l);f=p.min(f,S)}var D=f>=-1.5*b.linearSlop;if(D)break}var E,z;n.m_sweep.c0.setVec2(n.c_position.c),n.m_sweep.a0=n.c_position.a,l.m_sweep.c0.setVec2(l.c_position.c),l.m_sweep.a0=l.c_position.a;for(var E=0;E<this.m_contacts.length;++E){var g=this.m_contacts[E];g.initVelocityConstraint(i)}for(var E=0;E<i.velocityIterations;++E)for(var v=0;v<this.m_contacts.length;++v){var g=this.m_contacts[v];g.solveVelocityConstraint(i)}for(var T=i.dt,E=0;E<this.m_bodies.length;++E){var u=this.m_bodies[E],z=s.clone(u.c_position.c),B=u.c_position.a,C=s.clone(u.c_velocity.v),F=u.c_velocity.w,G=s.mulNumVec2(T,C);if(s.dot(G,G)>b.maxTranslationSquared){var H=b.maxTranslation/G.length();C.mul(H)}var X=T*F;if(X*X>b.maxRotationSquared){var H=b.maxRotation/p.abs(X);F*=H}z.addMul(T,C),B+=T*F,u.c_position.c=z,u.c_position.a=B,u.c_velocity.v=C,u.c_velocity.w=F,u.m_sweep.c=z,u.m_sweep.a=B,u.m_linearVelocity=C,u.m_angularVelocity=F,u.synchronizeTransform()}this.postSolveIsland()},a.prototype.postSolveIsland=function(){for(var i=0;i<this.m_contacts.length;++i){var n=this.m_contacts[i];this.m_world.postSolve(n,n.m_impulse)}},a}(),$0={gravity:s.zero(),allowSleep:!0,warmStarting:!0,continuousPhysics:!0,subStepping:!1,blockSolve:!0,velocityIterations:8,positionIterations:3},pt=function(){function a(i){var n=this;if(this.s_step=new q0,this.createContact=function(l,u){var g=l.fixture,f=u.fixture,v=l.childIndex,S=u.childIndex,D=g.getBody(),E=f.getBody();if(D!=E){for(var z=E.getContactList();z;){if(z.other==D){var T=z.contact.getFixtureA(),B=z.contact.getFixtureB(),C=z.contact.getChildIndexA(),F=z.contact.getChildIndexB();if(T==g&&B==f&&C==v&&F==S||T==f&&B==g&&C==S&&F==v)return}z=z.next}if(E.shouldCollide(D)!=!1&&f.shouldCollide(g)!=!1){var G=a0.create(g,v,f,S);G!=null&&(G.m_prev=null,n.m_contactList!=null&&(G.m_next=n.m_contactList,n.m_contactList.m_prev=G),n.m_contactList=G,++n.m_contactCount)}}},!(this instanceof a))return new a(i);i&&s.isValid(i)&&(i={gravity:i}),i=m(i,$0),this.m_solver=new I0(this),this.m_broadPhase=new U,this.m_contactList=null,this.m_contactCount=0,this.m_bodyList=null,this.m_bodyCount=0,this.m_jointList=null,this.m_jointCount=0,this.m_stepComplete=!0,this.m_allowSleep=i.allowSleep,this.m_gravity=s.clone(i.gravity),this.m_clearForces=!0,this.m_newFixture=!1,this.m_locked=!1,this.m_warmStarting=i.warmStarting,this.m_continuousPhysics=i.continuousPhysics,this.m_subStepping=i.subStepping,this.m_blockSolve=i.blockSolve,this.m_velocityIterations=i.velocityIterations,this.m_positionIterations=i.positionIterations,this.m_t=0}return a.prototype._serialize=function(){for(var i=[],n=[],l=this.getBodyList();l;l=l.getNext())i.push(l);for(var u=this.getJointList();u;u=u.getNext())typeof u._serialize=="function"&&n.push(u);return{gravity:this.m_gravity,bodies:i,joints:n}},a._deserialize=function(i,n,l){if(!i)return new a;var u=new a(i.gravity);if(i.bodies)for(var g=i.bodies.length-1;g>=0;g-=1)u._addBody(l(r0,i.bodies[g],u));if(i.joints)for(var g=i.joints.length-1;g>=0;g--)u.createJoint(l(A0,i.joints[g],u));return u},a.prototype.getBodyList=function(){return this.m_bodyList},a.prototype.getJointList=function(){return this.m_jointList},a.prototype.getContactList=function(){return this.m_contactList},a.prototype.getBodyCount=function(){return this.m_bodyCount},a.prototype.getJointCount=function(){return this.m_jointCount},a.prototype.getContactCount=function(){return this.m_contactCount},a.prototype.setGravity=function(i){this.m_gravity=i},a.prototype.getGravity=function(){return this.m_gravity},a.prototype.isLocked=function(){return this.m_locked},a.prototype.setAllowSleeping=function(i){if(i!=this.m_allowSleep&&(this.m_allowSleep=i,this.m_allowSleep==!1))for(var n=this.m_bodyList;n;n=n.m_next)n.setAwake(!0)},a.prototype.getAllowSleeping=function(){return this.m_allowSleep},a.prototype.setWarmStarting=function(i){this.m_warmStarting=i},a.prototype.getWarmStarting=function(){return this.m_warmStarting},a.prototype.setContinuousPhysics=function(i){this.m_continuousPhysics=i},a.prototype.getContinuousPhysics=function(){return this.m_continuousPhysics},a.prototype.setSubStepping=function(i){this.m_subStepping=i},a.prototype.getSubStepping=function(){return this.m_subStepping},a.prototype.setAutoClearForces=function(i){this.m_clearForces=i},a.prototype.getAutoClearForces=function(){return this.m_clearForces},a.prototype.clearForces=function(){for(var i=this.m_bodyList;i;i=i.getNext())i.m_force.setZero(),i.m_torque=0},a.prototype.queryAABB=function(i,n){var l=this.m_broadPhase;this.m_broadPhase.query(i,function(u){var g=l.getUserData(u);return n(g.fixture)})},a.prototype.rayCast=function(i,n,l){var u=this.m_broadPhase;this.m_broadPhase.rayCast({maxFraction:1,p1:i,p2:n},function(g,f){var v=u.getUserData(f),S=v.fixture,D=v.childIndex,E={},z=S.rayCast(E,g,D);if(z){var T=E.fraction,B=s.add(s.mulNumVec2(1-T,g.p1),s.mulNumVec2(T,g.p2));return l(S,B,E.normal,T)}return g.maxFraction})},a.prototype.getProxyCount=function(){return this.m_broadPhase.getProxyCount()},a.prototype.getTreeHeight=function(){return this.m_broadPhase.getTreeHeight()},a.prototype.getTreeBalance=function(){return this.m_broadPhase.getTreeBalance()},a.prototype.getTreeQuality=function(){return this.m_broadPhase.getTreeQuality()},a.prototype.shiftOrigin=function(i){if(!this.m_locked){for(var n=this.m_bodyList;n;n=n.m_next)n.m_xf.p.sub(i),n.m_sweep.c0.sub(i),n.m_sweep.c.sub(i);for(var l=this.m_jointList;l;l=l.m_next)l.shiftOrigin(i);this.m_broadPhase.shiftOrigin(i)}},a.prototype._addBody=function(i){this.isLocked()||(i.m_prev=null,i.m_next=this.m_bodyList,this.m_bodyList&&(this.m_bodyList.m_prev=i),this.m_bodyList=i,++this.m_bodyCount)},a.prototype.createBody=function(i,n){if(this.isLocked())return null;var l={};i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i));var u=new r0(this,l);return this._addBody(u),u},a.prototype.createDynamicBody=function(i,n){var l={};return i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i)),l.type="dynamic",this.createBody(l)},a.prototype.createKinematicBody=function(i,n){var l={};return i&&(s.isValid(i)?l={position:i,angle:n}:typeof i=="object"&&(l=i)),l.type="kinematic",this.createBody(l)},a.prototype.destroyBody=function(i){if(!this.isLocked()){if(i.m_destroyed)return!1;for(var n=i.m_jointList;n;){var l=n;n=n.next,this.publish("remove-joint",l.joint),this.destroyJoint(l.joint),i.m_jointList=n}i.m_jointList=null;for(var u=i.m_contactList;u;){var g=u;u=u.next,this.destroyContact(g.contact),i.m_contactList=u}i.m_contactList=null;for(var f=i.m_fixtureList;f;){var v=f;f=f.m_next,this.publish("remove-fixture",v),v.destroyProxies(this.m_broadPhase),i.m_fixtureList=f}return i.m_fixtureList=null,i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_bodyList&&(this.m_bodyList=i.m_next),i.m_destroyed=!0,--this.m_bodyCount,this.publish("remove-body",i),!0}},a.prototype.createJoint=function(i){if(this.isLocked())return null;if(i.m_prev=null,i.m_next=this.m_jointList,this.m_jointList&&(this.m_jointList.m_prev=i),this.m_jointList=i,++this.m_jointCount,i.m_edgeA.joint=i,i.m_edgeA.other=i.m_bodyB,i.m_edgeA.prev=null,i.m_edgeA.next=i.m_bodyA.m_jointList,i.m_bodyA.m_jointList&&(i.m_bodyA.m_jointList.prev=i.m_edgeA),i.m_bodyA.m_jointList=i.m_edgeA,i.m_edgeB.joint=i,i.m_edgeB.other=i.m_bodyA,i.m_edgeB.prev=null,i.m_edgeB.next=i.m_bodyB.m_jointList,i.m_bodyB.m_jointList&&(i.m_bodyB.m_jointList.prev=i.m_edgeB),i.m_bodyB.m_jointList=i.m_edgeB,i.m_collideConnected==!1)for(var n=i.m_bodyB.getContactList();n;n=n.next)n.other==i.m_bodyA&&n.contact.flagForFiltering();return i},a.prototype.destroyJoint=function(i){if(!this.isLocked()){i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_jointList&&(this.m_jointList=i.m_next);var n=i.m_bodyA,l=i.m_bodyB;if(n.setAwake(!0),l.setAwake(!0),i.m_edgeA.prev&&(i.m_edgeA.prev.next=i.m_edgeA.next),i.m_edgeA.next&&(i.m_edgeA.next.prev=i.m_edgeA.prev),i.m_edgeA==n.m_jointList&&(n.m_jointList=i.m_edgeA.next),i.m_edgeA.prev=null,i.m_edgeA.next=null,i.m_edgeB.prev&&(i.m_edgeB.prev.next=i.m_edgeB.next),i.m_edgeB.next&&(i.m_edgeB.next.prev=i.m_edgeB.prev),i.m_edgeB==l.m_jointList&&(l.m_jointList=i.m_edgeB.next),i.m_edgeB.prev=null,i.m_edgeB.next=null,--this.m_jointCount,i.m_collideConnected==!1)for(var u=l.getContactList();u;)u.other==n&&u.contact.flagForFiltering(),u=u.next;this.publish("remove-joint",i)}},a.prototype.step=function(i,n,l){if(this.publish("pre-step",i),(n|0)!==n&&(n=0),n=n||this.m_velocityIterations,l=l||this.m_positionIterations,this.m_newFixture&&(this.findNewContacts(),this.m_newFixture=!1),this.m_locked=!0,this.s_step.reset(i),this.s_step.velocityIterations=n,this.s_step.positionIterations=l,this.s_step.warmStarting=this.m_warmStarting,this.s_step.blockSolve=this.m_blockSolve,this.updateContacts(),this.m_stepComplete&&i>0){this.m_solver.solveWorld(this.s_step);for(var u=this.m_bodyList;u;u=u.getNext())u.m_islandFlag!=!1&&(u.isStatic()||u.synchronizeFixtures());this.findNewContacts()}this.m_continuousPhysics&&i>0&&this.m_solver.solveWorldTOI(this.s_step),this.m_clearForces&&this.clearForces(),this.m_locked=!1,this.publish("post-step",i)},a.prototype.findNewContacts=function(){this.m_broadPhase.updatePairs(this.createContact)},a.prototype.updateContacts=function(){for(var i,n=this.m_contactList;i=n;){n=i.getNext();var l=i.getFixtureA(),u=i.getFixtureB(),g=i.getChildIndexA(),f=i.getChildIndexB(),v=l.getBody(),S=u.getBody();if(i.m_filterFlag){if(S.shouldCollide(v)==!1){this.destroyContact(i);continue}if(u.shouldCollide(l)==!1){this.destroyContact(i);continue}i.m_filterFlag=!1}var D=v.isAwake()&&!v.isStatic(),E=S.isAwake()&&!S.isStatic();if(!(D==!1&&E==!1)){var z=l.m_proxies[g].proxyId,T=u.m_proxies[f].proxyId,B=this.m_broadPhase.testOverlap(z,T);if(B==!1){this.destroyContact(i);continue}i.update(this)}}},a.prototype.destroyContact=function(i){a0.destroy(i,this),i.m_prev&&(i.m_prev.m_next=i.m_next),i.m_next&&(i.m_next.m_prev=i.m_prev),i==this.m_contactList&&(this.m_contactList=i.m_next),--this.m_contactCount},a.prototype.on=function(i,n){return typeof i!="string"||typeof n!="function"?this:(this._listeners||(this._listeners={}),this._listeners[i]||(this._listeners[i]=[]),this._listeners[i].push(n),this)},a.prototype.off=function(i,n){if(typeof i!="string"||typeof n!="function")return this;var l=this._listeners&&this._listeners[i];if(!l||!l.length)return this;var u=l.indexOf(n);return u>=0&&l.splice(u,1),this},a.prototype.publish=function(i,n,l,u){var g=this._listeners&&this._listeners[i];if(!g||!g.length)return 0;for(var f=0;f<g.length;f++)g[f].call(this,n,l,u);return g.length},a.prototype.beginContact=function(i){this.publish("begin-contact",i)},a.prototype.endContact=function(i){this.publish("end-contact",i)},a.prototype.preSolve=function(i,n){this.publish("pre-solve",i,n)},a.prototype.postSolve=function(i,n){this.publish("post-solve",i,n)},a}(),V0=function(){function a(i,n,l){if(!(this instanceof a))return new a(i,n,l);typeof i>"u"?(this.x=0,this.y=0,this.z=0):typeof i=="object"?(this.x=i.x,this.y=i.y,this.z=i.z):(this.x=i,this.y=n,this.z=l)}return a.prototype._serialize=function(){return{x:this.x,y:this.y,z:this.z}},a._deserialize=function(i){var n=Object.create(a.prototype);return n.x=i.x,n.y=i.y,n.z=i.z,n},a.neo=function(i,n,l){var u=Object.create(a.prototype);return u.x=i,u.y=n,u.z=l,u},a.zero=function(){var i=Object.create(a.prototype);return i.x=0,i.y=0,i.z=0,i},a.clone=function(i){return a.neo(i.x,i.y,i.z)},a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:p.isFinite(i.x)&&p.isFinite(i.y)&&p.isFinite(i.z)},a.assert=function(i){},a.prototype.setZero=function(){return this.x=0,this.y=0,this.z=0,this},a.prototype.set=function(i,n,l){return this.x=i,this.y=n,this.z=l,this},a.prototype.add=function(i){return this.x+=i.x,this.y+=i.y,this.z+=i.z,this},a.prototype.sub=function(i){return this.x-=i.x,this.y-=i.y,this.z-=i.z,this},a.prototype.mul=function(i){return this.x*=i,this.y*=i,this.z*=i,this},a.areEqual=function(i,n){return i===n||typeof i=="object"&&i!==null&&typeof n=="object"&&n!==null&&i.x===n.x&&i.y===n.y&&i.z===n.z},a.dot=function(i,n){return i.x*n.x+i.y*n.y+i.z*n.z},a.cross=function(i,n){return new a(i.y*n.z-i.z*n.y,i.z*n.x-i.x*n.z,i.x*n.y-i.y*n.x)},a.add=function(i,n){return new a(i.x+n.x,i.y+n.y,i.z+n.z)},a.sub=function(i,n){return new a(i.x-n.x,i.y-n.y,i.z-n.z)},a.mul=function(i,n){return new a(n*i.x,n*i.y,n*i.z)},a.prototype.neg=function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},a.neg=function(i){return new a(-i.x,-i.y,-i.z)},a}(),wt=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_radius=b.polygonRadius,u.m_vertex1=n?s.clone(n):s.zero(),u.m_vertex2=l?s.clone(l):s.zero(),u.m_vertex0=s.zero(),u.m_vertex3=s.zero(),u.m_hasVertex0=!1,u.m_hasVertex3=!1,u):new i(n,l)}return i.prototype._serialize=function(){return{type:this.m_type,vertex1:this.m_vertex1,vertex2:this.m_vertex2,vertex0:this.m_vertex0,vertex3:this.m_vertex3,hasVertex0:this.m_hasVertex0,hasVertex3:this.m_hasVertex3}},i._deserialize=function(n){var l=new i(n.vertex1,n.vertex2);return l.m_hasVertex0&&l.setPrevVertex(n.vertex0),l.m_hasVertex3&&l.setNextVertex(n.vertex3),l},i.prototype.setNext=function(n){return this.setNextVertex(n)},i.prototype.setNextVertex=function(n){return n?(this.m_vertex3.setVec2(n),this.m_hasVertex3=!0):(this.m_vertex3.setZero(),this.m_hasVertex3=!1),this},i.prototype.getNextVertex=function(){return this.m_vertex3},i.prototype.setPrev=function(n){return this.setPrevVertex(n)},i.prototype.setPrevVertex=function(n){return n?(this.m_vertex0.setVec2(n),this.m_hasVertex0=!0):(this.m_vertex0.setZero(),this.m_hasVertex0=!1),this},i.prototype.getPrevVertex=function(){return this.m_vertex0},i.prototype._set=function(n,l){return this.m_vertex1.setVec2(n),this.m_vertex2.setVec2(l),this.m_hasVertex0=!1,this.m_hasVertex3=!1,this},i.prototype._clone=function(){var n=new i;return n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_vertex1.setVec2(this.m_vertex1),n.m_vertex2.setVec2(this.m_vertex2),n.m_vertex0.setVec2(this.m_vertex0),n.m_vertex3.setVec2(this.m_vertex3),n.m_hasVertex0=this.m_hasVertex0,n.m_hasVertex3=this.m_hasVertex3,n},i.prototype.getChildCount=function(){return 1},i.prototype.testPoint=function(n,l){return!1},i.prototype.rayCast=function(n,l,u,g){var f=M.mulTVec2(u.q,s.sub(l.p1,u.p)),v=M.mulTVec2(u.q,s.sub(l.p2,u.p)),S=s.sub(v,f),D=this.m_vertex1,E=this.m_vertex2,z=s.sub(E,D),T=s.neo(z.y,-z.x);T.normalize();var B=s.dot(T,s.sub(D,f)),C=s.dot(T,S);if(C==0)return!1;var F=B/C;if(F<0||l.maxFraction<F)return!1;var G=s.add(f,s.mulNumVec2(F,S)),H=s.sub(E,D),X=s.dot(H,H);if(X==0)return!1;var Q=s.dot(s.sub(G,D),H)/X;return Q<0||1<Q?!1:(n.fraction=F,B>0?n.normal=M.mulVec2(u.q,T).neg():n.normal=M.mulVec2(u.q,T),!0)},i.prototype.computeAABB=function(n,l,u){var g=P.mulVec2(l,this.m_vertex1),f=P.mulVec2(l,this.m_vertex2);n.combinePoints(g,f),n.extend(this.m_radius)},i.prototype.computeMass=function(n,l){n.mass=0,n.center.setCombine(.5,this.m_vertex1,.5,this.m_vertex2),n.I=0},i.prototype.computeDistanceProxy=function(n){n.m_vertices.push(this.m_vertex1),n.m_vertices.push(this.m_vertex2),n.m_count=2,n.m_radius=this.m_radius},i.TYPE="edge",i}(N),Ut=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_radius=b.polygonRadius,u.m_vertices=[],u.m_count=0,u.m_prevVertex=null,u.m_nextVertex=null,u.m_hasPrevVertex=!1,u.m_hasNextVertex=!1,u.m_isLoop=!!l,n&&n.length&&(l?u._createLoop(n):u._createChain(n)),u):new i(n,l)}return i.prototype._serialize=function(){var n={type:this.m_type,vertices:this.m_vertices,isLoop:this.m_isLoop,hasPrevVertex:this.m_hasPrevVertex,hasNextVertex:this.m_hasNextVertex,prevVertex:null,nextVertex:null};return this.m_prevVertex&&(n.prevVertex=this.m_prevVertex),this.m_nextVertex&&(n.nextVertex=this.m_nextVertex),n},i._deserialize=function(n,l,u){var g=[];if(n.vertices)for(var f=0;f<n.vertices.length;f++)g.push(u(s,n.vertices[f]));var v=new i(g,n.isLoop);return n.prevVertex&&v.setPrevVertex(n.prevVertex),n.nextVertex&&v.setNextVertex(n.nextVertex),v},i.prototype._createLoop=function(n){for(var l=1;l<n.length;++l)n[l-1],n[l];this.m_vertices=[],this.m_count=n.length+1;for(var l=0;l<n.length;++l)this.m_vertices[l]=s.clone(n[l]);return this.m_vertices[n.length]=s.clone(n[0]),this.m_prevVertex=this.m_vertices[this.m_count-2],this.m_nextVertex=this.m_vertices[1],this.m_hasPrevVertex=!0,this.m_hasNextVertex=!0,this},i.prototype._createChain=function(n){for(var l=1;l<n.length;++l)n[l-1],n[l];this.m_count=n.length;for(var l=0;l<n.length;++l)this.m_vertices[l]=s.clone(n[l]);return this.m_hasPrevVertex=!1,this.m_hasNextVertex=!1,this.m_prevVertex=null,this.m_nextVertex=null,this},i.prototype._reset=function(){this.m_isLoop?this._createLoop(this.m_vertices):this._createChain(this.m_vertices)},i.prototype.setPrevVertex=function(n){this.m_prevVertex=n,this.m_hasPrevVertex=!0},i.prototype.getPrevVertex=function(){return this.m_prevVertex},i.prototype.setNextVertex=function(n){this.m_nextVertex=n,this.m_hasNextVertex=!0},i.prototype.getNextVertex=function(){return this.m_nextVertex},i.prototype._clone=function(){var n=new i;return n._createChain(this.m_vertices),n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_prevVertex=this.m_prevVertex,n.m_nextVertex=this.m_nextVertex,n.m_hasPrevVertex=this.m_hasPrevVertex,n.m_hasNextVertex=this.m_hasNextVertex,n},i.prototype.getChildCount=function(){return this.m_count-1},i.prototype.getChildEdge=function(n,l){n.m_type=wt.TYPE,n.m_radius=this.m_radius,n.m_vertex1=this.m_vertices[l],n.m_vertex2=this.m_vertices[l+1],l>0?(n.m_vertex0=this.m_vertices[l-1],n.m_hasVertex0=!0):(n.m_vertex0=this.m_prevVertex,n.m_hasVertex0=this.m_hasPrevVertex),l<this.m_count-2?(n.m_vertex3=this.m_vertices[l+2],n.m_hasVertex3=!0):(n.m_vertex3=this.m_nextVertex,n.m_hasVertex3=this.m_hasNextVertex)},i.prototype.getVertex=function(n){return n<this.m_count?this.m_vertices[n]:this.m_vertices[0]},i.prototype.isLoop=function(){return this.m_isLoop},i.prototype.testPoint=function(n,l){return!1},i.prototype.rayCast=function(n,l,u,g){var f=new wt(this.getVertex(g),this.getVertex(g+1));return f.rayCast(n,l,u,0)},i.prototype.computeAABB=function(n,l,u){var g=P.mulVec2(l,this.getVertex(u)),f=P.mulVec2(l,this.getVertex(u+1));n.combinePoints(g,f)},i.prototype.computeMass=function(n,l){n.mass=0,n.center=s.zero(),n.I=0},i.prototype.computeDistanceProxy=function(n,l){n.m_buffer[0]=this.getVertex(l),n.m_buffer[1]=this.getVertex(l+1),n.m_vertices=n.m_buffer,n.m_count=2,n.m_radius=this.m_radius},i.TYPE="chain",i}(N),ne=function(a){o(i,a);function i(n){var l=this;return l instanceof i?(l=a.call(this)||this,l.m_type=i.TYPE,l.m_radius=b.polygonRadius,l.m_centroid=s.zero(),l.m_vertices=[],l.m_normals=[],l.m_count=0,n&&n.length&&l._set(n),l):new i(n)}return i.prototype._serialize=function(){return{type:this.m_type,vertices:this.m_vertices}},i._deserialize=function(n,l,u){var g=[];if(n.vertices)for(var f=0;f<n.vertices.length;f++)g.push(u(s,n.vertices[f]));var v=new i(g);return v},i.prototype.getVertex=function(n){return this.m_vertices[n]},i.prototype._clone=function(){var n=new i;n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_count=this.m_count,n.m_centroid.setVec2(this.m_centroid);for(var l=0;l<this.m_count;l++)n.m_vertices.push(this.m_vertices[l].clone());for(var l=0;l<this.m_normals.length;l++)n.m_normals.push(this.m_normals[l].clone());return n},i.prototype.getChildCount=function(){return 1},i.prototype._reset=function(){this._set(this.m_vertices)},i.prototype._set=function(n){if(n.length<3){this._setAsBox(1,1);return}for(var l=p.min(n.length,b.maxPolygonVertices),u=[],g=0;g<l;++g){for(var f=n[g],v=!0,S=0;S<u.length;++S)if(s.distanceSquared(f,u[S])<.25*b.linearSlopSquared){v=!1;break}v&&u.push(f)}if(l=u.length,l<3){this._setAsBox(1,1);return}for(var D=0,E=u[0].x,g=1;g<l;++g){var z=u[g].x;(z>E||z===E&&u[g].y<u[D].y)&&(D=g,E=z)}for(var T=[],B=0,C=D;;){T[B]=C;for(var F=0,S=1;S<l;++S){if(F===C){F=S;continue}var G=s.sub(u[F],u[T[B]]),f=s.sub(u[S],u[T[B]]),H=s.crossVec2Vec2(G,f);H<0&&(F=S),H===0&&f.lengthSquared()>G.lengthSquared()&&(F=S)}if(++B,C=F,F===D)break}if(B<3){this._setAsBox(1,1);return}this.m_count=B,this.m_vertices=[];for(var g=0;g<B;++g)this.m_vertices[g]=u[T[g]];for(var g=0;g<B;++g){var X=g,Q=g+1<B?g+1:0,h0=s.sub(this.m_vertices[Q],this.m_vertices[X]);this.m_normals[g]=s.crossVec2Num(h0,1),this.m_normals[g].normalize()}this.m_centroid=tr(this.m_vertices,B)},i.prototype._setAsBox=function(n,l,u,g){if(this.m_vertices[0]=s.neo(n,-l),this.m_vertices[1]=s.neo(n,l),this.m_vertices[2]=s.neo(-n,l),this.m_vertices[3]=s.neo(-n,-l),this.m_normals[0]=s.neo(1,0),this.m_normals[1]=s.neo(0,1),this.m_normals[2]=s.neo(-1,0),this.m_normals[3]=s.neo(0,-1),this.m_count=4,s.isValid(u)){g=g||0,this.m_centroid.setVec2(u);var f=P.identity();f.p.setVec2(u),f.q.setAngle(g);for(var v=0;v<this.m_count;++v)this.m_vertices[v]=P.mulVec2(f,this.m_vertices[v]),this.m_normals[v]=M.mulVec2(f.q,this.m_normals[v])}},i.prototype.testPoint=function(n,l){for(var u=M.mulTVec2(n.q,s.sub(l,n.p)),g=0;g<this.m_count;++g){var f=s.dot(this.m_normals[g],s.sub(u,this.m_vertices[g]));if(f>0)return!1}return!0},i.prototype.rayCast=function(n,l,u,g){for(var f=M.mulTVec2(u.q,s.sub(l.p1,u.p)),v=M.mulTVec2(u.q,s.sub(l.p2,u.p)),S=s.sub(v,f),D=0,E=l.maxFraction,z=-1,T=0;T<this.m_count;++T){var B=s.dot(this.m_normals[T],s.sub(this.m_vertices[T],f)),C=s.dot(this.m_normals[T],S);if(C==0){if(B<0)return!1}else C<0&&B<D*C?(D=B/C,z=T):C>0&&B<E*C&&(E=B/C);if(E<D)return!1}return z>=0?(n.fraction=D,n.normal=M.mulVec2(u.q,this.m_normals[z]),!0):!1},i.prototype.computeAABB=function(n,l,u){for(var g=1/0,f=1/0,v=-1/0,S=-1/0,D=0;D<this.m_count;++D){var E=P.mulVec2(l,this.m_vertices[D]);g=p.min(g,E.x),v=p.max(v,E.x),f=p.min(f,E.y),S=p.max(S,E.y)}n.lowerBound.setNum(g,f),n.upperBound.setNum(v,S),n.extend(this.m_radius)},i.prototype.computeMass=function(n,l){for(var u=s.zero(),g=0,f=0,v=s.zero(),S=0;S<this.m_count;++S)v.add(this.m_vertices[S]);v.mul(1/this.m_count);for(var D=1/3,S=0;S<this.m_count;++S){var E=s.sub(this.m_vertices[S],v),z=S+1<this.m_count?s.sub(this.m_vertices[S+1],v):s.sub(this.m_vertices[0],v),T=s.crossVec2Vec2(E,z),B=.5*T;g+=B,u.addCombine(B*D,E,B*D,z);var C=E.x,F=E.y,G=z.x,H=z.y,X=C*C+G*C+G*G,Q=F*F+H*F+H*H;f+=.25*D*T*(X+Q)}n.mass=l*g,u.mul(1/g),n.center.setCombine(1,u,1,v),n.I=l*f,n.I+=n.mass*(s.dot(n.center,n.center)-s.dot(u,u))},i.prototype.validate=function(){for(var n=0;n<this.m_count;++n)for(var l=n,u=n<this.m_count-1?l+1:0,g=this.m_vertices[l],f=s.sub(this.m_vertices[u],g),v=0;v<this.m_count;++v)if(!(v==l||v==u)){var S=s.sub(this.m_vertices[v],g),D=s.crossVec2Vec2(f,S);if(D<0)return!1}return!0},i.prototype.computeDistanceProxy=function(n){n.m_vertices=this.m_vertices,n.m_count=this.m_count,n.m_radius=this.m_radius},i.TYPE="polygon",i}(N);function tr(a,i){for(var n=s.zero(),l=0,u=s.zero(),g,f=1/3,g=0;g<i;++g){var v=u,S=a[g],D=g+1<i?a[g+1]:a[0],E=s.sub(S,v),z=s.sub(D,v),T=s.crossVec2Vec2(E,z),B=.5*T;l+=B,n.addMul(B*f,v),n.addMul(B*f,S),n.addMul(B*f,D)}return n.mul(1/l),n}var Ge=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(f=a.call(this)||this,f._setAsBox(n,l,u,g),f):new i(n,l,u,g)}return i.TYPE="polygon",i}(ne),be=function(a){o(i,a);function i(n,l){var u=this;return u instanceof i?(u=a.call(this)||this,u.m_type=i.TYPE,u.m_p=s.zero(),u.m_radius=1,typeof n=="object"&&s.isValid(n)?(u.m_p.setVec2(n),typeof l=="number"&&(u.m_radius=l)):typeof n=="number"&&(u.m_radius=n),u):new i(n,l)}return i.prototype._serialize=function(){return{type:this.m_type,p:this.m_p,radius:this.m_radius}},i._deserialize=function(n){return new i(n.p,n.radius)},i.prototype.getRadius=function(){return this.m_radius},i.prototype.getCenter=function(){return this.m_p},i.prototype.getVertex=function(n){return this.m_p},i.prototype._clone=function(){var n=new i;return n.m_type=this.m_type,n.m_radius=this.m_radius,n.m_p=this.m_p.clone(),n},i.prototype.getChildCount=function(){return 1},i.prototype.testPoint=function(n,l){var u=s.add(n.p,M.mulVec2(n.q,this.m_p)),g=s.sub(l,u);return s.dot(g,g)<=this.m_radius*this.m_radius},i.prototype.rayCast=function(n,l,u,g){var f=s.add(u.p,M.mulVec2(u.q,this.m_p)),v=s.sub(l.p1,f),S=s.dot(v,v)-this.m_radius*this.m_radius,D=s.sub(l.p2,l.p1),E=s.dot(v,D),z=s.dot(D,D),T=E*E-z*S;if(T<0||z<p.EPSILON)return!1;var B=-(E+p.sqrt(T));return 0<=B&&B<=l.maxFraction*z?(B/=z,n.fraction=B,n.normal=s.add(v,s.mulNumVec2(B,D)),n.normal.normalize(),!0):!1},i.prototype.computeAABB=function(n,l,u){var g=s.add(l.p,M.mulVec2(l.q,this.m_p));n.lowerBound.setNum(g.x-this.m_radius,g.y-this.m_radius),n.upperBound.setNum(g.x+this.m_radius,g.y+this.m_radius)},i.prototype.computeMass=function(n,l){n.mass=l*p.PI*this.m_radius*this.m_radius,n.center=this.m_p,n.I=n.mass*(.5*this.m_radius*this.m_radius+s.dot(this.m_p,this.m_p))},i.prototype.computeDistanceProxy=function(n){n.m_vertices.push(this.m_p),n.m_count=1,n.m_radius=this.m_radius},i.TYPE="circle",i}(N),rn={frequencyHz:0,dampingRatio:0},Si=function(a){o(i,a);function i(n,l,u,g,f){var v=this;if(!(v instanceof i))return new i(n,l,u,g,f);if(u&&g&&"m_type"in g&&"x"in u&&"y"in u){var S=u;u=g,g=S}return n=m(n,rn),v=a.call(this,n,l,u)||this,l=v.m_bodyA,u=v.m_bodyB,v.m_type=i.TYPE,v.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),v.m_localAnchorB=s.clone(f?u.getLocalPoint(f):n.localAnchorB||s.zero()),v.m_length=p.isFinite(n.length)?n.length:s.distance(l.getWorldPoint(v.m_localAnchorA),u.getWorldPoint(v.m_localAnchorB)),v.m_frequencyHz=n.frequencyHz,v.m_dampingRatio=n.dampingRatio,v.m_impulse=0,v.m_gamma=0,v.m_bias=0,v}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,length:this.m_length,impulse:this.m_impulse,gamma:this.m_gamma,bias:this.m_bias}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.length>0?this.m_length=+n.length:n.length<0||(n.anchorA||n.anchorA||n.anchorA||n.anchorA)&&(this.m_length=s.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA),this.m_bodyB.getWorldPoint(this.m_localAnchorB)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setLength=function(n){this.m_length=n},i.prototype.getLength=function(){return this.m_length},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_u).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyA.c_velocity.v,f=this.m_bodyA.c_velocity.w,v=this.m_bodyB.c_position.c,S=this.m_bodyB.c_position.a,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w,z=M.neo(u),T=M.neo(S);this.m_rA=M.mulVec2(z,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=M.mulVec2(T,s.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_u=s.sub(s.add(v,this.m_rB),s.add(l,this.m_rA));var B=this.m_u.length();B>b.linearSlop?this.m_u.mul(1/B):this.m_u.setNum(0,0);var C=s.crossVec2Vec2(this.m_rA,this.m_u),F=s.crossVec2Vec2(this.m_rB,this.m_u),G=this.m_invMassA+this.m_invIA*C*C+this.m_invMassB+this.m_invIB*F*F;if(this.m_mass=G!=0?1/G:0,this.m_frequencyHz>0){var H=B-this.m_length,X=2*p.PI*this.m_frequencyHz,Q=2*this.m_mass*this.m_dampingRatio*X,h0=this.m_mass*X*X,u0=n.dt;this.m_gamma=u0*(Q+u0*h0),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=H*u0*h0*this.m_gamma,G+=this.m_gamma,this.m_mass=G!=0?1/G:0}else this.m_gamma=0,this.m_bias=0;if(n.warmStarting){this.m_impulse*=n.dtRatio;var p0=s.mulNumVec2(this.m_impulse,this.m_u);g.subMul(this.m_invMassA,p0),f-=this.m_invIA*s.crossVec2Vec2(this.m_rA,p0),D.addMul(this.m_invMassB,p0),E+=this.m_invIB*s.crossVec2Vec2(this.m_rB,p0)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(g),this.m_bodyA.c_velocity.w=f,this.m_bodyB.c_velocity.v.setVec2(D),this.m_bodyB.c_velocity.w=E},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=s.add(l,s.crossNumVec2(u,this.m_rA)),S=s.add(g,s.crossNumVec2(f,this.m_rB)),D=s.dot(this.m_u,S)-s.dot(this.m_u,v),E=-this.m_mass*(D+this.m_bias+this.m_gamma*this.m_impulse);this.m_impulse+=E;var z=s.mulNumVec2(E,this.m_u);l.subMul(this.m_invMassA,z),u-=this.m_invIA*s.crossVec2Vec2(this.m_rA,z),g.addMul(this.m_invMassB,z),f+=this.m_invIB*s.crossVec2Vec2(this.m_rB,z),this.m_bodyA.c_velocity.v.setVec2(l),this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v.setVec2(g),this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){if(this.m_frequencyHz>0)return!0;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=M.mulSub(v,this.m_localAnchorA,this.m_localCenterA),E=M.mulSub(S,this.m_localAnchorB,this.m_localCenterB),z=s.sub(s.add(g,E),s.add(l,D)),T=z.normalize(),B=T-this.m_length;B=p.clamp(B,-b.maxLinearCorrection,b.maxLinearCorrection);var C=-this.m_mass*B,F=s.mulNumVec2(C,z);return l.subMul(this.m_invMassA,F),u-=this.m_invIA*s.crossVec2Vec2(D,F),g.addMul(this.m_invMassB,F),f+=this.m_invIB*s.crossVec2Vec2(E,F),this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(g),this.m_bodyB.c_position.a=f,p.abs(B)<b.linearSlop},i.TYPE="distance-joint",i}(A0),er={maxForce:0,maxTorque:0},sn=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(n=m(n,er),f=a.call(this,n,l,u)||this,l=f.m_bodyA,u=f.m_bodyB,f.m_type=i.TYPE,f.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),f.m_localAnchorB=s.clone(g?u.getLocalPoint(g):n.localAnchorB||s.zero()),f.m_linearImpulse=s.zero(),f.m_angularImpulse=0,f.m_maxForce=n.maxForce,f.m_maxTorque=n.maxTorque,f):new i(n,l,u,g)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setMaxTorque=function(n){this.m_maxTorque=n},i.prototype.getMaxTorque=function(){return this.m_maxTorque},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_linearImpulse)},i.prototype.getReactionTorque=function(n){return n*this.m_angularImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,g=this.m_bodyA.c_velocity.w,f=this.m_bodyB.c_position.a,v=this.m_bodyB.c_velocity.v,S=this.m_bodyB.c_velocity.w,D=M.neo(l),E=M.neo(f);this.m_rA=M.mulVec2(D,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=M.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB));var z=this.m_invMassA,T=this.m_invMassB,B=this.m_invIA,C=this.m_invIB,F=new d0;if(F.ex.x=z+T+B*this.m_rA.y*this.m_rA.y+C*this.m_rB.y*this.m_rB.y,F.ex.y=-B*this.m_rA.x*this.m_rA.y-C*this.m_rB.x*this.m_rB.y,F.ey.x=F.ex.y,F.ey.y=z+T+B*this.m_rA.x*this.m_rA.x+C*this.m_rB.x*this.m_rB.x,this.m_linearMass=F.getInverse(),this.m_angularMass=B+C,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),n.warmStarting){this.m_linearImpulse.mul(n.dtRatio),this.m_angularImpulse*=n.dtRatio;var G=s.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);u.subMul(z,G),g-=B*(s.crossVec2Vec2(this.m_rA,G)+this.m_angularImpulse),v.addMul(T,G),S+=C*(s.crossVec2Vec2(this.m_rB,G)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=g,this.m_bodyB.c_velocity.v=v,this.m_bodyB.c_velocity.w=S},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_invMassA,S=this.m_invMassB,D=this.m_invIA,E=this.m_invIB,z=n.dt;{var T=f-u,B=-this.m_angularMass*T,C=this.m_angularImpulse,F=z*this.m_maxTorque;this.m_angularImpulse=p.clamp(this.m_angularImpulse+B,-F,F),B=this.m_angularImpulse-C,u-=D*B,f+=E*B}{var T=s.sub(s.add(g,s.crossNumVec2(f,this.m_rB)),s.add(l,s.crossNumVec2(u,this.m_rA))),B=s.neg(d0.mulVec2(this.m_linearMass,T)),C=this.m_linearImpulse;this.m_linearImpulse.add(B);var F=z*this.m_maxForce;this.m_linearImpulse.lengthSquared()>F*F&&(this.m_linearImpulse.normalize(),this.m_linearImpulse.mul(F)),B=s.sub(this.m_linearImpulse,C),l.subMul(v,B),u-=D*s.crossVec2Vec2(this.m_rA,B),g.addMul(S,B),f+=E*s.crossVec2Vec2(this.m_rB,B)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="friction-joint",i}(A0),ue=function(){function a(i,n,l){typeof i=="object"&&i!==null?(this.ex=V0.clone(i),this.ey=V0.clone(n),this.ez=V0.clone(l)):(this.ex=V0.zero(),this.ey=V0.zero(),this.ez=V0.zero())}return a.prototype.toString=function(){return JSON.stringify(this)},a.isValid=function(i){return i===null||typeof i>"u"?!1:V0.isValid(i.ex)&&V0.isValid(i.ey)&&V0.isValid(i.ez)},a.assert=function(i){},a.prototype.setZero=function(){return this.ex.setZero(),this.ey.setZero(),this.ez.setZero(),this},a.prototype.solve33=function(i){var n=V0.dot(this.ex,V0.cross(this.ey,this.ez));n!==0&&(n=1/n);var l=new V0;return l.x=n*V0.dot(i,V0.cross(this.ey,this.ez)),l.y=n*V0.dot(this.ex,V0.cross(i,this.ez)),l.z=n*V0.dot(this.ex,V0.cross(this.ey,i)),l},a.prototype.solve22=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,g=this.ey.y,f=n*g-l*u;f!==0&&(f=1/f);var v=s.zero();return v.x=f*(g*i.x-l*i.y),v.y=f*(n*i.y-u*i.x),v},a.prototype.getInverse22=function(i){var n=this.ex.x,l=this.ey.x,u=this.ex.y,g=this.ey.y,f=n*g-l*u;f!==0&&(f=1/f),i.ex.x=f*g,i.ey.x=-f*l,i.ex.z=0,i.ex.y=-f*u,i.ey.y=f*n,i.ey.z=0,i.ez.x=0,i.ez.y=0,i.ez.z=0},a.prototype.getSymInverse33=function(i){var n=V0.dot(this.ex,V0.cross(this.ey,this.ez));n!==0&&(n=1/n);var l=this.ex.x,u=this.ey.x,g=this.ez.x,f=this.ey.y,v=this.ez.y,S=this.ez.z;i.ex.x=n*(f*S-v*v),i.ex.y=n*(g*v-u*S),i.ex.z=n*(u*v-g*f),i.ey.x=i.ex.y,i.ey.y=n*(l*S-g*g),i.ey.z=n*(g*u-l*v),i.ez.x=i.ex.z,i.ez.y=i.ey.z,i.ez.z=n*(l*f-u*u)},a.mul=function(i,n){if(n&&"z"in n&&"y"in n&&"x"in n){var l=i.ex.x*n.x+i.ey.x*n.y+i.ez.x*n.z,u=i.ex.y*n.x+i.ey.y*n.y+i.ez.y*n.z,g=i.ex.z*n.x+i.ey.z*n.y+i.ez.z*n.z;return new V0(l,u,g)}else if(n&&"y"in n&&"x"in n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)}},a.mulVec3=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y+i.ez.x*n.z,u=i.ex.y*n.x+i.ey.y*n.y+i.ez.y*n.z,g=i.ex.z*n.x+i.ey.z*n.y+i.ez.z*n.z;return new V0(l,u,g)},a.mulVec2=function(i,n){var l=i.ex.x*n.x+i.ey.x*n.y,u=i.ex.y*n.x+i.ey.y*n.y;return s.neo(l,u)},a.add=function(i,n){return new a(V0.add(i.ex,n.ex),V0.add(i.ey,n.ey),V0.add(i.ez,n.ez))},a}(),O=0,$=1,s0=2,i0=3,g0={lowerAngle:0,upperAngle:0,maxMotorTorque:0,motorSpeed:0,enableLimit:!1,enableMotor:!1},H0=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(n=m(n,g0),f=a.call(this,n,l,u)||this,f.m_mass=new ue,f.m_limitState=O,l=f.m_bodyA,u=f.m_bodyB,f.m_type=i.TYPE,f.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),f.m_localAnchorB=s.clone(g?u.getLocalPoint(g):n.localAnchorB||s.zero()),f.m_referenceAngle=p.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),f.m_impulse=new V0,f.m_motorImpulse=0,f.m_lowerAngle=n.lowerAngle,f.m_upperAngle=n.upperAngle,f.m_maxMotorTorque=n.maxMotorTorque,f.m_motorSpeed=n.motorSpeed,f.m_enableLimit=n.enableLimit,f.m_enableMotor=n.enableMotor,f):new i(n,l,u,g)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerAngle:this.m_lowerAngle,upperAngle:this.m_upperAngle,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.getJointAngle=function(){var n=this.m_bodyA,l=this.m_bodyB;return l.m_sweep.a-n.m_sweep.a-this.m_referenceAngle},i.prototype.getJointSpeed=function(){var n=this.m_bodyA,l=this.m_bodyB;return l.m_angularVelocity-n.m_angularVelocity},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.getMotorTorque=function(n){return n*this.m_motorImpulse},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.setMaxMotorTorque=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=n},i.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},i.prototype.isLimitEnabled=function(){return this.m_enableLimit},i.prototype.enableLimit=function(n){n!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=n,this.m_impulse.z=0)},i.prototype.getLowerLimit=function(){return this.m_lowerAngle},i.prototype.getUpperLimit=function(){return this.m_upperAngle},i.prototype.setLimits=function(n,l){(n!=this.m_lowerAngle||l!=this.m_upperAngle)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_impulse.z=0,this.m_lowerAngle=n,this.m_upperAngle=l)},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.neo(this.m_impulse.x,this.m_impulse.y).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.z},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,g=this.m_bodyA.c_velocity.w,f=this.m_bodyB.c_position.a,v=this.m_bodyB.c_velocity.v,S=this.m_bodyB.c_velocity.w,D=M.neo(l),E=M.neo(f);this.m_rA=M.mulVec2(D,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=M.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB));var z=this.m_invMassA,T=this.m_invMassB,B=this.m_invIA,C=this.m_invIB,F=B+C===0;if(this.m_mass.ex.x=z+T+this.m_rA.y*this.m_rA.y*B+this.m_rB.y*this.m_rB.y*C,this.m_mass.ey.x=-this.m_rA.y*this.m_rA.x*B-this.m_rB.y*this.m_rB.x*C,this.m_mass.ez.x=-this.m_rA.y*B-this.m_rB.y*C,this.m_mass.ex.y=this.m_mass.ey.x,this.m_mass.ey.y=z+T+this.m_rA.x*this.m_rA.x*B+this.m_rB.x*this.m_rB.x*C,this.m_mass.ez.y=this.m_rA.x*B+this.m_rB.x*C,this.m_mass.ex.z=this.m_mass.ez.x,this.m_mass.ey.z=this.m_mass.ez.y,this.m_mass.ez.z=B+C,this.m_motorMass=B+C,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass),(this.m_enableMotor==!1||F)&&(this.m_motorImpulse=0),this.m_enableLimit&&F==!1){var G=f-l-this.m_referenceAngle;p.abs(this.m_upperAngle-this.m_lowerAngle)<2*b.angularSlop?this.m_limitState=i0:G<=this.m_lowerAngle?(this.m_limitState!=$&&(this.m_impulse.z=0),this.m_limitState=$):G>=this.m_upperAngle?(this.m_limitState!=s0&&(this.m_impulse.z=0),this.m_limitState=s0):(this.m_limitState=O,this.m_impulse.z=0)}else this.m_limitState=O;if(n.warmStarting){this.m_impulse.mul(n.dtRatio),this.m_motorImpulse*=n.dtRatio;var H=s.neo(this.m_impulse.x,this.m_impulse.y);u.subMul(z,H),g-=B*(s.crossVec2Vec2(this.m_rA,H)+this.m_motorImpulse+this.m_impulse.z),v.addMul(T,H),S+=C*(s.crossVec2Vec2(this.m_rB,H)+this.m_motorImpulse+this.m_impulse.z)}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=g,this.m_bodyB.c_velocity.v=v,this.m_bodyB.c_velocity.w=S},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_invMassA,S=this.m_invMassB,D=this.m_invIA,E=this.m_invIB,z=D+E===0;if(this.m_enableMotor&&this.m_limitState!=i0&&z==!1){var T=f-u-this.m_motorSpeed,B=-this.m_motorMass*T,C=this.m_motorImpulse,F=n.dt*this.m_maxMotorTorque;this.m_motorImpulse=p.clamp(this.m_motorImpulse+B,-F,F),B=this.m_motorImpulse-C,u-=D*B,f+=E*B}if(this.m_enableLimit&&this.m_limitState!=O&&z==!1){var G=s.zero();G.addCombine(1,g,1,s.crossNumVec2(f,this.m_rB)),G.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var H=f-u,T=new V0(G.x,G.y,H),B=V0.neg(this.m_mass.solve33(T));if(this.m_limitState==i0)this.m_impulse.add(B);else if(this.m_limitState==$){var X=this.m_impulse.z+B.z;if(X<0){var Q=s.combine(-1,G,this.m_impulse.z,s.neo(this.m_mass.ez.x,this.m_mass.ez.y)),h0=this.m_mass.solve22(Q);B.x=h0.x,B.y=h0.y,B.z=-this.m_impulse.z,this.m_impulse.x+=h0.x,this.m_impulse.y+=h0.y,this.m_impulse.z=0}else this.m_impulse.add(B)}else if(this.m_limitState==s0){var X=this.m_impulse.z+B.z;if(X>0){var Q=s.combine(-1,G,this.m_impulse.z,s.neo(this.m_mass.ez.x,this.m_mass.ez.y)),h0=this.m_mass.solve22(Q);B.x=h0.x,B.y=h0.y,B.z=-this.m_impulse.z,this.m_impulse.x+=h0.x,this.m_impulse.y+=h0.y,this.m_impulse.z=0}else this.m_impulse.add(B)}var u0=s.neo(B.x,B.y);l.subMul(v,u0),u-=D*(s.crossVec2Vec2(this.m_rA,u0)+B.z),g.addMul(S,u0),f+=E*(s.crossVec2Vec2(this.m_rB,u0)+B.z)}else{var T=s.zero();T.addCombine(1,g,1,s.crossNumVec2(f,this.m_rB)),T.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var B=this.m_mass.solve22(s.neg(T));this.m_impulse.x+=B.x,this.m_impulse.y+=B.y,l.subMul(v,B),u-=D*s.crossVec2Vec2(this.m_rA,B),g.addMul(S,B),f+=E*s.crossVec2Vec2(this.m_rB,B)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=0,E=0,z=this.m_invIA+this.m_invIB==0;if(this.m_enableLimit&&this.m_limitState!=O&&z==!1){var T=f-u-this.m_referenceAngle,B=0;if(this.m_limitState==i0){var C=p.clamp(T-this.m_lowerAngle,-b.maxAngularCorrection,b.maxAngularCorrection);B=-this.m_motorMass*C,D=p.abs(C)}else if(this.m_limitState==$){var C=T-this.m_lowerAngle;D=-C,C=p.clamp(C+b.angularSlop,-b.maxAngularCorrection,0),B=-this.m_motorMass*C}else if(this.m_limitState==s0){var C=T-this.m_upperAngle;D=C,C=p.clamp(C-b.angularSlop,0,b.maxAngularCorrection),B=-this.m_motorMass*C}u-=this.m_invIA*B,f+=this.m_invIB*B}{v.setAngle(u),S.setAngle(f);var F=M.mulVec2(v,s.sub(this.m_localAnchorA,this.m_localCenterA)),G=M.mulVec2(S,s.sub(this.m_localAnchorB,this.m_localCenterB)),C=s.zero();C.addCombine(1,g,1,G),C.subCombine(1,l,1,F),E=C.length();var H=this.m_invMassA,X=this.m_invMassB,Q=this.m_invIA,h0=this.m_invIB,u0=new d0;u0.ex.x=H+X+Q*F.y*F.y+h0*G.y*G.y,u0.ex.y=-Q*F.x*F.y-h0*G.x*G.y,u0.ey.x=u0.ex.y,u0.ey.y=H+X+Q*F.x*F.x+h0*G.x*G.x;var p0=s.neg(u0.solve(C));l.subMul(H,p0),u-=Q*s.crossVec2Vec2(F,p0),g.addMul(X,p0),f+=h0*s.crossVec2Vec2(G,p0)}return this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(g),this.m_bodyB.c_position.a=f,E<=b.linearSlop&&D<=b.angularSlop},i.TYPE="revolute-joint",i}(A0),tt=0,st=1,nt=2,gt=3,dt={enableLimit:!1,lowerTranslation:0,upperTranslation:0,enableMotor:!1,maxMotorForce:0,motorSpeed:0},ht=function(a){o(i,a);function i(n,l,u,g,f){var v=this;return v instanceof i?(n=m(n,dt),v=a.call(this,n,l,u)||this,l=v.m_bodyA,u=v.m_bodyB,v.m_type=i.TYPE,v.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),v.m_localAnchorB=s.clone(g?u.getLocalPoint(g):n.localAnchorB||s.zero()),v.m_localXAxisA=s.clone(f?l.getLocalVector(f):n.localAxisA||s.neo(1,0)),v.m_localXAxisA.normalize(),v.m_localYAxisA=s.crossNumVec2(1,v.m_localXAxisA),v.m_referenceAngle=p.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),v.m_impulse=new V0,v.m_motorMass=0,v.m_motorImpulse=0,v.m_lowerTranslation=n.lowerTranslation,v.m_upperTranslation=n.upperTranslation,v.m_maxMotorForce=n.maxMotorForce,v.m_motorSpeed=n.motorSpeed,v.m_enableLimit=n.enableLimit,v.m_enableMotor=n.enableMotor,v.m_limitState=tt,v.m_axis=s.zero(),v.m_perp=s.zero(),v.m_K=new ue,v):new i(n,l,u,g,f)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,lowerTranslation:this.m_lowerTranslation,upperTranslation:this.m_upperTranslation,maxMotorForce:this.m_maxMotorForce,motorSpeed:this.m_motorSpeed,enableLimit:this.m_enableLimit,enableMotor:this.m_enableMotor,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l),n.localAxisA=s.clone(n.localAxisA);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.localAxisA&&(this.m_localXAxisA.setVec2(n.localAxisA),this.m_localYAxisA.setVec2(s.crossNumVec2(1,n.localAxisA)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getLocalAxisA=function(){return this.m_localXAxisA},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.getJointTranslation=function(){var n=this.m_bodyA.getWorldPoint(this.m_localAnchorA),l=this.m_bodyB.getWorldPoint(this.m_localAnchorB),u=s.sub(l,n),g=this.m_bodyA.getWorldVector(this.m_localXAxisA),f=s.dot(u,g);return f},i.prototype.getJointSpeed=function(){var n=this.m_bodyA,l=this.m_bodyB,u=M.mulVec2(n.m_xf.q,s.sub(this.m_localAnchorA,n.m_sweep.localCenter)),g=M.mulVec2(l.m_xf.q,s.sub(this.m_localAnchorB,l.m_sweep.localCenter)),f=s.add(n.m_sweep.c,u),v=s.add(l.m_sweep.c,g),S=s.sub(v,f),D=M.mulVec2(n.m_xf.q,this.m_localXAxisA),E=n.m_linearVelocity,z=l.m_linearVelocity,T=n.m_angularVelocity,B=l.m_angularVelocity,C=s.dot(S,s.crossNumVec2(T,D))+s.dot(D,s.sub(s.addCrossNumVec2(z,B,g),s.addCrossNumVec2(E,T,u)));return C},i.prototype.isLimitEnabled=function(){return this.m_enableLimit},i.prototype.enableLimit=function(n){n!=this.m_enableLimit&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableLimit=n,this.m_impulse.z=0)},i.prototype.getLowerLimit=function(){return this.m_lowerTranslation},i.prototype.getUpperLimit=function(){return this.m_upperTranslation},i.prototype.setLimits=function(n,l){(n!=this.m_lowerTranslation||l!=this.m_upperTranslation)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_lowerTranslation=n,this.m_upperTranslation=l,this.m_impulse.z=0)},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.setMaxMotorForce=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorForce=n},i.prototype.getMaxMotorForce=function(){return this.m_maxMotorForce},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.getMotorForce=function(n){return n*this.m_motorImpulse},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.y},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyA.c_velocity.v,f=this.m_bodyA.c_velocity.w,v=this.m_bodyB.c_position.c,S=this.m_bodyB.c_position.a,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w,z=M.neo(u),T=M.neo(S),B=M.mulVec2(z,s.sub(this.m_localAnchorA,this.m_localCenterA)),C=M.mulVec2(T,s.sub(this.m_localAnchorB,this.m_localCenterB)),F=s.zero();F.addCombine(1,v,1,C),F.subCombine(1,l,1,B);var G=this.m_invMassA,H=this.m_invMassB,X=this.m_invIA,Q=this.m_invIB;this.m_axis=M.mulVec2(z,this.m_localXAxisA),this.m_a1=s.crossVec2Vec2(s.add(F,B),this.m_axis),this.m_a2=s.crossVec2Vec2(C,this.m_axis),this.m_motorMass=G+H+X*this.m_a1*this.m_a1+Q*this.m_a2*this.m_a2,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass);{this.m_perp=M.mulVec2(z,this.m_localYAxisA),this.m_s1=s.crossVec2Vec2(s.add(F,B),this.m_perp),this.m_s2=s.crossVec2Vec2(C,this.m_perp),s.crossVec2Vec2(B,this.m_perp);var h0=G+H+X*this.m_s1*this.m_s1+Q*this.m_s2*this.m_s2,u0=X*this.m_s1+Q*this.m_s2,p0=X*this.m_s1*this.m_a1+Q*this.m_s2*this.m_a2,v0=X+Q;v0==0&&(v0=1);var B0=X*this.m_a1+Q*this.m_a2,z0=G+H+X*this.m_a1*this.m_a1+Q*this.m_a2*this.m_a2;this.m_K.ex.set(h0,u0,p0),this.m_K.ey.set(u0,v0,B0),this.m_K.ez.set(p0,B0,z0)}if(this.m_enableLimit){var U0=s.dot(this.m_axis,F);p.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*b.linearSlop?this.m_limitState=gt:U0<=this.m_lowerTranslation?this.m_limitState!=st&&(this.m_limitState=st,this.m_impulse.z=0):U0>=this.m_upperTranslation?this.m_limitState!=nt&&(this.m_limitState=nt,this.m_impulse.z=0):(this.m_limitState=tt,this.m_impulse.z=0)}else this.m_limitState=tt,this.m_impulse.z=0;if(this.m_enableMotor==!1&&(this.m_motorImpulse=0),n.warmStarting){this.m_impulse.mul(n.dtRatio),this.m_motorImpulse*=n.dtRatio;var D0=s.combine(this.m_impulse.x,this.m_perp,this.m_motorImpulse+this.m_impulse.z,this.m_axis),x0=this.m_impulse.x*this.m_s1+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a1,Z0=this.m_impulse.x*this.m_s2+this.m_impulse.y+(this.m_motorImpulse+this.m_impulse.z)*this.m_a2;g.subMul(G,D0),f-=X*x0,D.addMul(H,D0),E+=Q*Z0}else this.m_impulse.setZero(),this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(g),this.m_bodyA.c_velocity.w=f,this.m_bodyB.c_velocity.v.setVec2(D),this.m_bodyB.c_velocity.w=E},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_invMassA,S=this.m_invMassB,D=this.m_invIA,E=this.m_invIB;if(this.m_enableMotor&&this.m_limitState!=gt){var z=s.dot(this.m_axis,s.sub(g,l))+this.m_a2*f-this.m_a1*u,T=this.m_motorMass*(this.m_motorSpeed-z),B=this.m_motorImpulse,C=n.dt*this.m_maxMotorForce;this.m_motorImpulse=p.clamp(this.m_motorImpulse+T,-C,C),T=this.m_motorImpulse-B;var F=s.mulNumVec2(T,this.m_axis),G=T*this.m_a1,H=T*this.m_a2;l.subMul(v,F),u-=D*G,g.addMul(S,F),f+=E*H}var X=s.zero();if(X.x+=s.dot(this.m_perp,g)+this.m_s2*f,X.x-=s.dot(this.m_perp,l)+this.m_s1*u,X.y=f-u,this.m_enableLimit&&this.m_limitState!=tt){var Q=0;Q+=s.dot(this.m_axis,g)+this.m_a2*f,Q-=s.dot(this.m_axis,l)+this.m_a1*u;var z=new V0(X.x,X.y,Q),h0=V0.clone(this.m_impulse),u0=this.m_K.solve33(V0.neg(z));this.m_impulse.add(u0),this.m_limitState==st?this.m_impulse.z=p.max(this.m_impulse.z,0):this.m_limitState==nt&&(this.m_impulse.z=p.min(this.m_impulse.z,0));var p0=s.combine(-1,X,-(this.m_impulse.z-h0.z),s.neo(this.m_K.ez.x,this.m_K.ez.y)),v0=s.add(this.m_K.solve22(p0),s.neo(h0.x,h0.y));this.m_impulse.x=v0.x,this.m_impulse.y=v0.y,u0=V0.sub(this.m_impulse,h0);var F=s.combine(u0.x,this.m_perp,u0.z,this.m_axis),G=u0.x*this.m_s1+u0.y+u0.z*this.m_a1,H=u0.x*this.m_s2+u0.y+u0.z*this.m_a2;l.subMul(v,F),u-=D*G,g.addMul(S,F),f+=E*H}else{var u0=this.m_K.solve22(s.neg(X));this.m_impulse.x+=u0.x,this.m_impulse.y+=u0.y;var F=s.mulNumVec2(u0.x,this.m_perp),G=u0.x*this.m_s1+u0.y,H=u0.x*this.m_s2+u0.y;l.subMul(v,F),u-=D*G,g.addMul(S,F),f+=E*H}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=this.m_invMassA,E=this.m_invMassB,z=this.m_invIA,T=this.m_invIB,B=M.mulVec2(v,s.sub(this.m_localAnchorA,this.m_localCenterA)),C=M.mulVec2(S,s.sub(this.m_localAnchorB,this.m_localCenterB)),F=s.sub(s.add(g,C),s.add(l,B)),G=M.mulVec2(v,this.m_localXAxisA),H=s.crossVec2Vec2(s.add(F,B),G),X=s.crossVec2Vec2(C,G),Q=M.mulVec2(v,this.m_localYAxisA),h0=s.crossVec2Vec2(s.add(F,B),Q),u0=s.crossVec2Vec2(C,Q),p0=new V0,v0=s.zero();v0.x=s.dot(Q,F),v0.y=f-u-this.m_referenceAngle;var B0=p.abs(v0.x),z0=p.abs(v0.y),U0=b.linearSlop,D0=b.maxLinearCorrection,x0=!1,Z0=0;if(this.m_enableLimit){var Q0=s.dot(G,F);p.abs(this.m_upperTranslation-this.m_lowerTranslation)<2*U0?(Z0=p.clamp(Q0,-D0,D0),B0=p.max(B0,p.abs(Q0)),x0=!0):Q0<=this.m_lowerTranslation?(Z0=p.clamp(Q0-this.m_lowerTranslation+U0,-D0,0),B0=p.max(B0,this.m_lowerTranslation-Q0),x0=!0):Q0>=this.m_upperTranslation&&(Z0=p.clamp(Q0-this.m_upperTranslation-U0,0,D0),B0=p.max(B0,Q0-this.m_upperTranslation),x0=!0)}if(x0){var it=D+E+z*h0*h0+T*u0*u0,At=z*h0+T*u0,xt=z*h0*H+T*u0*X,_t=z+T;_t==0&&(_t=1);var W0=z*H+T*X,Y0=D+E+z*H*H+T*X*X,et=new ue;et.ex.set(it,At,xt),et.ey.set(At,_t,W0),et.ez.set(xt,W0,Y0);var G0=new V0;G0.x=v0.x,G0.y=v0.y,G0.z=Z0,p0=et.solve33(V0.neg(G0))}else{var it=D+E+z*h0*h0+T*u0*u0,At=z*h0+T*u0,_t=z+T;_t==0&&(_t=1);var et=new d0;et.ex.setNum(it,At),et.ey.setNum(At,_t);var It=et.solve(s.neg(v0));p0.x=It.x,p0.y=It.y,p0.z=0}var $t=s.combine(p0.x,Q,p0.z,G),me=p0.x*h0+p0.y+p0.z*H,Ft=p0.x*u0+p0.y+p0.z*X;return l.subMul(D,$t),u-=z*me,g.addMul(E,$t),f+=T*Ft,this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=g,this.m_bodyB.c_position.a=f,B0<=b.linearSlop&&z0<=b.angularSlop},i.TYPE="prismatic-joint",i}(A0),St={ratio:1},de=function(a){o(i,a);function i(n,l,u,g,f,v){var S=this;if(!(S instanceof i))return new i(n,l,u,g,f,v);n=m(n,St),S=a.call(this,n,l,u)||this,l=S.m_bodyA,u=S.m_bodyB,S.m_type=i.TYPE,S.m_joint1=g||n.joint1,S.m_joint2=f||n.joint2,S.m_ratio=p.isFinite(v)?v:n.ratio,S.m_type1=S.m_joint1.getType(),S.m_type2=S.m_joint2.getType();var D,E;S.m_bodyC=S.m_joint1.getBodyA(),S.m_bodyA=S.m_joint1.getBodyB();var z=S.m_bodyA.m_xf,T=S.m_bodyA.m_sweep.a,B=S.m_bodyC.m_xf,C=S.m_bodyC.m_sweep.a;if(S.m_type1===H0.TYPE){var F=S.m_joint1;S.m_localAnchorC=F.m_localAnchorA,S.m_localAnchorA=F.m_localAnchorB,S.m_referenceAngleA=F.m_referenceAngle,S.m_localAxisC=s.zero(),D=T-C-S.m_referenceAngleA}else{var G=S.m_joint1;S.m_localAnchorC=G.m_localAnchorA,S.m_localAnchorA=G.m_localAnchorB,S.m_referenceAngleA=G.m_referenceAngle,S.m_localAxisC=G.m_localXAxisA;var H=S.m_localAnchorC,X=M.mulTVec2(B.q,s.add(M.mulVec2(z.q,S.m_localAnchorA),s.sub(z.p,B.p)));D=s.dot(X,S.m_localAxisC)-s.dot(H,S.m_localAxisC)}S.m_bodyD=S.m_joint2.getBodyA(),S.m_bodyB=S.m_joint2.getBodyB();var Q=S.m_bodyB.m_xf,h0=S.m_bodyB.m_sweep.a,u0=S.m_bodyD.m_xf,p0=S.m_bodyD.m_sweep.a;if(S.m_type2===H0.TYPE){var F=S.m_joint2;S.m_localAnchorD=F.m_localAnchorA,S.m_localAnchorB=F.m_localAnchorB,S.m_referenceAngleB=F.m_referenceAngle,S.m_localAxisD=s.zero(),E=h0-p0-S.m_referenceAngleB}else{var G=S.m_joint2;S.m_localAnchorD=G.m_localAnchorA,S.m_localAnchorB=G.m_localAnchorB,S.m_referenceAngleB=G.m_referenceAngle,S.m_localAxisD=G.m_localXAxisA;var v0=S.m_localAnchorD,B0=M.mulTVec2(u0.q,s.add(M.mulVec2(Q.q,S.m_localAnchorB),s.sub(Q.p,u0.p)));E=s.dot(B0,S.m_localAxisD)-s.dot(v0,S.m_localAxisD)}return S.m_constant=D+S.m_ratio*E,S.m_impulse=0,S}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,joint1:this.m_joint1,joint2:this.m_joint2,ratio:this.m_ratio}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l),n.joint1=u(A0,n.joint1,l),n.joint2=u(A0,n.joint2,l);var g=new i(n);return g},i.prototype.getJoint1=function(){return this.m_joint1},i.prototype.getJoint2=function(){return this.m_joint2},i.prototype.setRatio=function(n){this.m_ratio=n},i.prototype.getRatio=function(){return this.m_ratio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_JvAC).mul(n)},i.prototype.getReactionTorque=function(n){var l=this.m_impulse*this.m_JwA;return n*l},i.prototype.initVelocityConstraints=function(n){this.m_lcA=this.m_bodyA.m_sweep.localCenter,this.m_lcB=this.m_bodyB.m_sweep.localCenter,this.m_lcC=this.m_bodyC.m_sweep.localCenter,this.m_lcD=this.m_bodyD.m_sweep.localCenter,this.m_mA=this.m_bodyA.m_invMass,this.m_mB=this.m_bodyB.m_invMass,this.m_mC=this.m_bodyC.m_invMass,this.m_mD=this.m_bodyD.m_invMass,this.m_iA=this.m_bodyA.m_invI,this.m_iB=this.m_bodyB.m_invI,this.m_iC=this.m_bodyC.m_invI,this.m_iD=this.m_bodyD.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,g=this.m_bodyA.c_velocity.w,f=this.m_bodyB.c_position.a,v=this.m_bodyB.c_velocity.v,S=this.m_bodyB.c_velocity.w,D=this.m_bodyC.c_position.a,E=this.m_bodyC.c_velocity.v,z=this.m_bodyC.c_velocity.w,T=this.m_bodyD.c_position.a,B=this.m_bodyD.c_velocity.v,C=this.m_bodyD.c_velocity.w,F=M.neo(l),G=M.neo(f),H=M.neo(D),X=M.neo(T);if(this.m_mass=0,this.m_type1==H0.TYPE)this.m_JvAC=s.zero(),this.m_JwA=1,this.m_JwC=1,this.m_mass+=this.m_iA+this.m_iC;else{var Q=M.mulVec2(H,this.m_localAxisC),h0=M.mulSub(H,this.m_localAnchorC,this.m_lcC),u0=M.mulSub(F,this.m_localAnchorA,this.m_lcA);this.m_JvAC=Q,this.m_JwC=s.crossVec2Vec2(h0,Q),this.m_JwA=s.crossVec2Vec2(u0,Q),this.m_mass+=this.m_mC+this.m_mA+this.m_iC*this.m_JwC*this.m_JwC+this.m_iA*this.m_JwA*this.m_JwA}if(this.m_type2==H0.TYPE)this.m_JvBD=s.zero(),this.m_JwB=this.m_ratio,this.m_JwD=this.m_ratio,this.m_mass+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD);else{var Q=M.mulVec2(X,this.m_localAxisD),p0=M.mulSub(X,this.m_localAnchorD,this.m_lcD),v0=M.mulSub(G,this.m_localAnchorB,this.m_lcB);this.m_JvBD=s.mulNumVec2(this.m_ratio,Q),this.m_JwD=this.m_ratio*s.crossVec2Vec2(p0,Q),this.m_JwB=this.m_ratio*s.crossVec2Vec2(v0,Q),this.m_mass+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*this.m_JwD*this.m_JwD+this.m_iB*this.m_JwB*this.m_JwB}this.m_mass=this.m_mass>0?1/this.m_mass:0,n.warmStarting?(u.addMul(this.m_mA*this.m_impulse,this.m_JvAC),g+=this.m_iA*this.m_impulse*this.m_JwA,v.addMul(this.m_mB*this.m_impulse,this.m_JvBD),S+=this.m_iB*this.m_impulse*this.m_JwB,E.subMul(this.m_mC*this.m_impulse,this.m_JvAC),z-=this.m_iC*this.m_impulse*this.m_JwC,B.subMul(this.m_mD*this.m_impulse,this.m_JvBD),C-=this.m_iD*this.m_impulse*this.m_JwD):this.m_impulse=0,this.m_bodyA.c_velocity.v.setVec2(u),this.m_bodyA.c_velocity.w=g,this.m_bodyB.c_velocity.v.setVec2(v),this.m_bodyB.c_velocity.w=S,this.m_bodyC.c_velocity.v.setVec2(E),this.m_bodyC.c_velocity.w=z,this.m_bodyD.c_velocity.v.setVec2(B),this.m_bodyD.c_velocity.w=C},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_bodyC.c_velocity.v,S=this.m_bodyC.c_velocity.w,D=this.m_bodyD.c_velocity.v,E=this.m_bodyD.c_velocity.w,z=s.dot(this.m_JvAC,l)-s.dot(this.m_JvAC,v)+s.dot(this.m_JvBD,g)-s.dot(this.m_JvBD,D);z+=this.m_JwA*u-this.m_JwC*S+(this.m_JwB*f-this.m_JwD*E);var T=-this.m_mass*z;this.m_impulse+=T,l.addMul(this.m_mA*T,this.m_JvAC),u+=this.m_iA*T*this.m_JwA,g.addMul(this.m_mB*T,this.m_JvBD),f+=this.m_iB*T*this.m_JwB,v.subMul(this.m_mC*T,this.m_JvAC),S-=this.m_iC*T*this.m_JwC,D.subMul(this.m_mD*T,this.m_JvBD),E-=this.m_iD*T*this.m_JwD,this.m_bodyA.c_velocity.v.setVec2(l),this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v.setVec2(g),this.m_bodyB.c_velocity.w=f,this.m_bodyC.c_velocity.v.setVec2(v),this.m_bodyC.c_velocity.w=S,this.m_bodyD.c_velocity.v.setVec2(D),this.m_bodyD.c_velocity.w=E},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=this.m_bodyC.c_position.c,S=this.m_bodyC.c_position.a,D=this.m_bodyD.c_position.c,E=this.m_bodyD.c_position.a,z=M.neo(u),T=M.neo(f),B=M.neo(S),C=M.neo(E),F=0,G,H,X,Q,h0,u0,p0,v0,B0=0;if(this.m_type1==H0.TYPE)X=s.zero(),h0=1,p0=1,B0+=this.m_iA+this.m_iC,G=u-S-this.m_referenceAngleA;else{var z0=M.mulVec2(B,this.m_localAxisC),U0=M.mulSub(B,this.m_localAnchorC,this.m_lcC),D0=M.mulSub(z,this.m_localAnchorA,this.m_lcA);X=z0,p0=s.crossVec2Vec2(U0,z0),h0=s.crossVec2Vec2(D0,z0),B0+=this.m_mC+this.m_mA+this.m_iC*p0*p0+this.m_iA*h0*h0;var x0=s.sub(this.m_localAnchorC,this.m_lcC),Z0=M.mulTVec2(B,s.add(D0,s.sub(l,v)));G=s.dot(s.sub(Z0,x0),this.m_localAxisC)}if(this.m_type2==H0.TYPE)Q=s.zero(),u0=this.m_ratio,v0=this.m_ratio,B0+=this.m_ratio*this.m_ratio*(this.m_iB+this.m_iD),H=f-E-this.m_referenceAngleB;else{var z0=M.mulVec2(C,this.m_localAxisD),Q0=M.mulSub(C,this.m_localAnchorD,this.m_lcD),it=M.mulSub(T,this.m_localAnchorB,this.m_lcB);Q=s.mulNumVec2(this.m_ratio,z0),v0=this.m_ratio*s.crossVec2Vec2(Q0,z0),u0=this.m_ratio*s.crossVec2Vec2(it,z0),B0+=this.m_ratio*this.m_ratio*(this.m_mD+this.m_mB)+this.m_iD*v0*v0+this.m_iB*u0*u0;var At=s.sub(this.m_localAnchorD,this.m_lcD),xt=M.mulTVec2(C,s.add(it,s.sub(g,D)));H=s.dot(xt,this.m_localAxisD)-s.dot(At,this.m_localAxisD)}var _t=G+this.m_ratio*H-this.m_constant,W0=0;return B0>0&&(W0=-_t/B0),l.addMul(this.m_mA*W0,X),u+=this.m_iA*W0*h0,g.addMul(this.m_mB*W0,Q),f+=this.m_iB*W0*u0,v.subMul(this.m_mC*W0,X),S-=this.m_iC*W0*p0,D.subMul(this.m_mD*W0,Q),E-=this.m_iD*W0*v0,this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(g),this.m_bodyB.c_position.a=f,this.m_bodyC.c_position.c.setVec2(v),this.m_bodyC.c_position.a=S,this.m_bodyD.c_position.c.setVec2(D),this.m_bodyD.c_position.a=E,F<b.linearSlop},i.TYPE="gear-joint",i}(A0),He={maxForce:1,maxTorque:1,correctionFactor:.3},we=function(a){o(i,a);function i(n,l,u){var g=this;return g instanceof i?(n=m(n,He),g=a.call(this,n,l,u)||this,l=g.m_bodyA,u=g.m_bodyB,g.m_type=i.TYPE,g.m_linearOffset=p.isFinite(n.linearOffset)?n.linearOffset:l.getLocalPoint(u.getPosition()),g.m_angularOffset=p.isFinite(n.angularOffset)?n.angularOffset:u.getAngle()-l.getAngle(),g.m_linearImpulse=s.zero(),g.m_angularImpulse=0,g.m_maxForce=n.maxForce,g.m_maxTorque=n.maxTorque,g.m_correctionFactor=n.correctionFactor,g):new i(n,l,u)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,maxForce:this.m_maxForce,maxTorque:this.m_maxTorque,correctionFactor:this.m_correctionFactor,linearOffset:this.m_linearOffset,angularOffset:this.m_angularOffset}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setMaxTorque=function(n){this.m_maxTorque=n},i.prototype.getMaxTorque=function(){return this.m_maxTorque},i.prototype.setCorrectionFactor=function(n){this.m_correctionFactor=n},i.prototype.getCorrectionFactor=function(){return this.m_correctionFactor},i.prototype.setLinearOffset=function(n){(n.x!=this.m_linearOffset.x||n.y!=this.m_linearOffset.y)&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_linearOffset=n)},i.prototype.getLinearOffset=function(){return this.m_linearOffset},i.prototype.setAngularOffset=function(n){n!=this.m_angularOffset&&(this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_angularOffset=n)},i.prototype.getAngularOffset=function(){return this.m_angularOffset},i.prototype.getAnchorA=function(){return this.m_bodyA.getPosition()},i.prototype.getAnchorB=function(){return this.m_bodyB.getPosition()},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_linearImpulse)},i.prototype.getReactionTorque=function(n){return n*this.m_angularImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyA.c_velocity.v,f=this.m_bodyA.c_velocity.w,v=this.m_bodyB.c_position.c,S=this.m_bodyB.c_position.a,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w,z=M.neo(u),T=M.neo(S);this.m_rA=M.mulVec2(z,s.neg(this.m_localCenterA)),this.m_rB=M.mulVec2(T,s.neg(this.m_localCenterB));var B=this.m_invMassA,C=this.m_invMassB,F=this.m_invIA,G=this.m_invIB,H=new d0;if(H.ex.x=B+C+F*this.m_rA.y*this.m_rA.y+G*this.m_rB.y*this.m_rB.y,H.ex.y=-F*this.m_rA.x*this.m_rA.y-G*this.m_rB.x*this.m_rB.y,H.ey.x=H.ex.y,H.ey.y=B+C+F*this.m_rA.x*this.m_rA.x+G*this.m_rB.x*this.m_rB.x,this.m_linearMass=H.getInverse(),this.m_angularMass=F+G,this.m_angularMass>0&&(this.m_angularMass=1/this.m_angularMass),this.m_linearError=s.zero(),this.m_linearError.addCombine(1,v,1,this.m_rB),this.m_linearError.subCombine(1,l,1,this.m_rA),this.m_linearError.sub(M.mulVec2(z,this.m_linearOffset)),this.m_angularError=S-u-this.m_angularOffset,n.warmStarting){this.m_linearImpulse.mul(n.dtRatio),this.m_angularImpulse*=n.dtRatio;var X=s.neo(this.m_linearImpulse.x,this.m_linearImpulse.y);g.subMul(B,X),f-=F*(s.crossVec2Vec2(this.m_rA,X)+this.m_angularImpulse),D.addMul(C,X),E+=G*(s.crossVec2Vec2(this.m_rB,X)+this.m_angularImpulse)}else this.m_linearImpulse.setZero(),this.m_angularImpulse=0;this.m_bodyA.c_velocity.v=g,this.m_bodyA.c_velocity.w=f,this.m_bodyB.c_velocity.v=D,this.m_bodyB.c_velocity.w=E},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_invMassA,S=this.m_invMassB,D=this.m_invIA,E=this.m_invIB,z=n.dt,T=n.inv_dt;{var B=f-u+T*this.m_correctionFactor*this.m_angularError,C=-this.m_angularMass*B,F=this.m_angularImpulse,G=z*this.m_maxTorque;this.m_angularImpulse=p.clamp(this.m_angularImpulse+C,-G,G),C=this.m_angularImpulse-F,u-=D*C,f+=E*C}{var B=s.zero();B.addCombine(1,g,1,s.crossNumVec2(f,this.m_rB)),B.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA)),B.addMul(T*this.m_correctionFactor,this.m_linearError);var C=s.neg(d0.mulVec2(this.m_linearMass,B)),F=s.clone(this.m_linearImpulse);this.m_linearImpulse.add(C);var G=z*this.m_maxForce;this.m_linearImpulse.clamp(G),C=s.sub(this.m_linearImpulse,F),l.subMul(v,C),u-=D*s.crossVec2Vec2(this.m_rA,C),g.addMul(S,C),f+=E*s.crossVec2Vec2(this.m_rB,C)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="motor-joint",i}(A0),re={maxForce:0,frequencyHz:5,dampingRatio:.7},mt=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(n=m(n,re),f=a.call(this,n,l,u)||this,l=f.m_bodyA,u=f.m_bodyB,f.m_type=i.TYPE,f.m_targetA=g?s.clone(g):n.target||s.zero(),f.m_localAnchorB=P.mulTVec2(u.getTransform(),f.m_targetA),f.m_maxForce=n.maxForce,f.m_impulse=s.zero(),f.m_frequencyHz=n.frequencyHz,f.m_dampingRatio=n.dampingRatio,f.m_beta=0,f.m_gamma=0,f.m_rB=s.zero(),f.m_localCenterB=s.zero(),f.m_invMassB=0,f.m_invIB=0,f.m_mass=new d0,f.m_C=s.zero(),f):new i(n,l,u,g)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,target:this.m_targetA,maxForce:this.m_maxForce,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,_localAnchorB:this.m_localAnchorB}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l),n.target=s.clone(n.target);var g=new i(n);return n._localAnchorB&&(g.m_localAnchorB=n._localAnchorB),g},i.prototype.setTarget=function(n){this.m_bodyB.isAwake()==!1&&this.m_bodyB.setAwake(!0),this.m_targetA=s.clone(n)},i.prototype.getTarget=function(){return this.m_targetA},i.prototype.setMaxForce=function(n){this.m_maxForce=n},i.prototype.getMaxForce=function(){return this.m_maxForce},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return s.clone(this.m_targetA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(n,this.m_impulse)},i.prototype.getReactionTorque=function(n){return n*0},i.prototype.shiftOrigin=function(n){this.m_targetA.sub(n)},i.prototype.initVelocityConstraints=function(n){this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyB.c_position,u=this.m_bodyB.c_velocity,g=l.c,f=l.a,v=u.v,S=u.w,D=M.neo(f),E=this.m_bodyB.getMass(),z=2*p.PI*this.m_frequencyHz,T=2*E*this.m_dampingRatio*z,B=E*(z*z),C=n.dt;this.m_gamma=C*(T+C*B),this.m_gamma!=0&&(this.m_gamma=1/this.m_gamma),this.m_beta=C*B*this.m_gamma,this.m_rB=M.mulVec2(D,s.sub(this.m_localAnchorB,this.m_localCenterB));var F=new d0;F.ex.x=this.m_invMassB+this.m_invIB*this.m_rB.y*this.m_rB.y+this.m_gamma,F.ex.y=-this.m_invIB*this.m_rB.x*this.m_rB.y,F.ey.x=F.ex.y,F.ey.y=this.m_invMassB+this.m_invIB*this.m_rB.x*this.m_rB.x+this.m_gamma,this.m_mass=F.getInverse(),this.m_C.setVec2(g),this.m_C.addCombine(1,this.m_rB,-1,this.m_targetA),this.m_C.mul(this.m_beta),S*=.98,n.warmStarting?(this.m_impulse.mul(n.dtRatio),v.addMul(this.m_invMassB,this.m_impulse),S+=this.m_invIB*s.crossVec2Vec2(this.m_rB,this.m_impulse)):this.m_impulse.setZero(),u.v.setVec2(v),u.w=S},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyB.c_velocity,u=s.clone(l.v),g=l.w,f=s.crossNumVec2(g,this.m_rB);f.add(u),f.addCombine(1,this.m_C,this.m_gamma,this.m_impulse),f.neg();var v=d0.mulVec2(this.m_mass,f),S=s.clone(this.m_impulse);this.m_impulse.add(v);var D=n.dt*this.m_maxForce;this.m_impulse.clamp(D),v=s.sub(this.m_impulse,S),u.addMul(this.m_invMassB,v),g+=this.m_invIB*s.crossVec2Vec2(this.m_rB,v),l.v.setVec2(u),l.w=g},i.prototype.solvePositionConstraints=function(n){return!0},i.TYPE="mouse-joint",i}(A0),We={collideConnected:!0},Mt=function(a){o(i,a);function i(n,l,u,g,f,v,S,D){var E=this;return E instanceof i?(n=m(n,We),E=a.call(this,n,l,u)||this,l=E.m_bodyA,u=E.m_bodyB,E.m_type=i.TYPE,E.m_groundAnchorA=g||n.groundAnchorA||s.neo(-1,1),E.m_groundAnchorB=f||n.groundAnchorB||s.neo(1,1),E.m_localAnchorA=v?l.getLocalPoint(v):n.localAnchorA||s.neo(-1,0),E.m_localAnchorB=S?u.getLocalPoint(S):n.localAnchorB||s.neo(1,0),E.m_lengthA=p.isFinite(n.lengthA)?n.lengthA:s.distance(v,g),E.m_lengthB=p.isFinite(n.lengthB)?n.lengthB:s.distance(S,f),E.m_ratio=p.isFinite(D)?D:n.ratio,E.m_constant=E.m_lengthA+E.m_ratio*E.m_lengthB,E.m_impulse=0,E):new i(n,l,u,g,f,v,S,D)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,groundAnchorA:this.m_groundAnchorA,groundAnchorB:this.m_groundAnchorB,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,lengthA:this.m_lengthA,lengthB:this.m_lengthB,ratio:this.m_ratio}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype.getGroundAnchorA=function(){return this.m_groundAnchorA},i.prototype.getGroundAnchorB=function(){return this.m_groundAnchorB},i.prototype.getLengthA=function(){return this.m_lengthA},i.prototype.getLengthB=function(){return this.m_lengthB},i.prototype.getRatio=function(){return this.m_ratio},i.prototype.getCurrentLengthA=function(){var n=this.m_bodyA.getWorldPoint(this.m_localAnchorA),l=this.m_groundAnchorA;return s.distance(n,l)},i.prototype.getCurrentLengthB=function(){var n=this.m_bodyB.getWorldPoint(this.m_localAnchorB),l=this.m_groundAnchorB;return s.distance(n,l)},i.prototype.shiftOrigin=function(n){this.m_groundAnchorA.sub(n),this.m_groundAnchorB.sub(n)},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_uB).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyA.c_velocity.v,f=this.m_bodyA.c_velocity.w,v=this.m_bodyB.c_position.c,S=this.m_bodyB.c_position.a,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w,z=M.neo(u),T=M.neo(S);this.m_rA=M.mulVec2(z,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=M.mulVec2(T,s.sub(this.m_localAnchorB,this.m_localCenterB)),this.m_uA=s.sub(s.add(l,this.m_rA),this.m_groundAnchorA),this.m_uB=s.sub(s.add(v,this.m_rB),this.m_groundAnchorB);var B=this.m_uA.length(),C=this.m_uB.length();B>10*b.linearSlop?this.m_uA.mul(1/B):this.m_uA.setZero(),C>10*b.linearSlop?this.m_uB.mul(1/C):this.m_uB.setZero();var F=s.crossVec2Vec2(this.m_rA,this.m_uA),G=s.crossVec2Vec2(this.m_rB,this.m_uB),H=this.m_invMassA+this.m_invIA*F*F,X=this.m_invMassB+this.m_invIB*G*G;if(this.m_mass=H+this.m_ratio*this.m_ratio*X,this.m_mass>0&&(this.m_mass=1/this.m_mass),n.warmStarting){this.m_impulse*=n.dtRatio;var Q=s.mulNumVec2(-this.m_impulse,this.m_uA),h0=s.mulNumVec2(-this.m_ratio*this.m_impulse,this.m_uB);g.addMul(this.m_invMassA,Q),f+=this.m_invIA*s.crossVec2Vec2(this.m_rA,Q),D.addMul(this.m_invMassB,h0),E+=this.m_invIB*s.crossVec2Vec2(this.m_rB,h0)}else this.m_impulse=0;this.m_bodyA.c_velocity.v=g,this.m_bodyA.c_velocity.w=f,this.m_bodyB.c_velocity.v=D,this.m_bodyB.c_velocity.w=E},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=s.add(l,s.crossNumVec2(u,this.m_rA)),S=s.add(g,s.crossNumVec2(f,this.m_rB)),D=-s.dot(this.m_uA,v)-this.m_ratio*s.dot(this.m_uB,S),E=-this.m_mass*D;this.m_impulse+=E;var z=s.mulNumVec2(-E,this.m_uA),T=s.mulNumVec2(-this.m_ratio*E,this.m_uB);l.addMul(this.m_invMassA,z),u+=this.m_invIA*s.crossVec2Vec2(this.m_rA,z),g.addMul(this.m_invMassB,T),f+=this.m_invIB*s.crossVec2Vec2(this.m_rB,T),this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=M.mulVec2(v,s.sub(this.m_localAnchorA,this.m_localCenterA)),E=M.mulVec2(S,s.sub(this.m_localAnchorB,this.m_localCenterB)),z=s.sub(s.add(l,this.m_rA),this.m_groundAnchorA),T=s.sub(s.add(g,this.m_rB),this.m_groundAnchorB),B=z.length(),C=T.length();B>10*b.linearSlop?z.mul(1/B):z.setZero(),C>10*b.linearSlop?T.mul(1/C):T.setZero();var F=s.crossVec2Vec2(D,z),G=s.crossVec2Vec2(E,T),H=this.m_invMassA+this.m_invIA*F*F,X=this.m_invMassB+this.m_invIB*G*G,Q=H+this.m_ratio*this.m_ratio*X;Q>0&&(Q=1/Q);var h0=this.m_constant-B-this.m_ratio*C,u0=p.abs(h0),p0=-Q*h0,v0=s.mulNumVec2(-p0,z),B0=s.mulNumVec2(-this.m_ratio*p0,T);return l.addMul(this.m_invMassA,v0),u+=this.m_invIA*s.crossVec2Vec2(D,v0),g.addMul(this.m_invMassB,B0),f+=this.m_invIB*s.crossVec2Vec2(E,B0),this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=g,this.m_bodyB.c_position.a=f,u0<b.linearSlop},i.TYPE="pulley-joint",i}(A0),Zt=0,Se=2,ni={maxLength:0},ri=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(n=m(n,ni),f=a.call(this,n,l,u)||this,l=f.m_bodyA,u=f.m_bodyB,f.m_type=i.TYPE,f.m_localAnchorA=g?l.getLocalPoint(g):n.localAnchorA||s.neo(-1,0),f.m_localAnchorB=g?u.getLocalPoint(g):n.localAnchorB||s.neo(1,0),f.m_maxLength=n.maxLength,f.m_mass=0,f.m_impulse=0,f.m_length=0,f.m_state=Zt,f):new i(n,l,u,g)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,maxLength:this.m_maxLength}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.setMaxLength=function(n){this.m_maxLength=n},i.prototype.getMaxLength=function(){return this.m_maxLength},i.prototype.getLimitState=function(){return this.m_state},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.mulNumVec2(this.m_impulse,this.m_u).mul(n)},i.prototype.getReactionTorque=function(n){return 0},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyA.c_velocity.v,f=this.m_bodyA.c_velocity.w,v=this.m_bodyB.c_position.c,S=this.m_bodyB.c_position.a,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w,z=M.neo(u),T=M.neo(S);this.m_rA=M.mulSub(z,this.m_localAnchorA,this.m_localCenterA),this.m_rB=M.mulSub(T,this.m_localAnchorB,this.m_localCenterB),this.m_u=s.zero(),this.m_u.addCombine(1,v,1,this.m_rB),this.m_u.subCombine(1,l,1,this.m_rA),this.m_length=this.m_u.length();var B=this.m_length-this.m_maxLength;if(B>0?this.m_state=Se:this.m_state=Zt,this.m_length>b.linearSlop)this.m_u.mul(1/this.m_length);else{this.m_u.setZero(),this.m_mass=0,this.m_impulse=0;return}var C=s.crossVec2Vec2(this.m_rA,this.m_u),F=s.crossVec2Vec2(this.m_rB,this.m_u),G=this.m_invMassA+this.m_invIA*C*C+this.m_invMassB+this.m_invIB*F*F;if(this.m_mass=G!=0?1/G:0,n.warmStarting){this.m_impulse*=n.dtRatio;var H=s.mulNumVec2(this.m_impulse,this.m_u);g.subMul(this.m_invMassA,H),f-=this.m_invIA*s.crossVec2Vec2(this.m_rA,H),D.addMul(this.m_invMassB,H),E+=this.m_invIB*s.crossVec2Vec2(this.m_rB,H)}else this.m_impulse=0;this.m_bodyA.c_velocity.v.setVec2(g),this.m_bodyA.c_velocity.w=f,this.m_bodyB.c_velocity.v.setVec2(D),this.m_bodyB.c_velocity.w=E},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=s.addCrossNumVec2(l,u,this.m_rA),S=s.addCrossNumVec2(g,f,this.m_rB),D=this.m_length-this.m_maxLength,E=s.dot(this.m_u,s.sub(S,v));D<0&&(E+=n.inv_dt*D);var z=-this.m_mass*E,T=this.m_impulse;this.m_impulse=p.min(0,this.m_impulse+z),z=this.m_impulse-T;var B=s.mulNumVec2(z,this.m_u);l.subMul(this.m_invMassA,B),u-=this.m_invIA*s.crossVec2Vec2(this.m_rA,B),g.addMul(this.m_invMassB,B),f+=this.m_invIB*s.crossVec2Vec2(this.m_rB,B),this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=M.mulSub(v,this.m_localAnchorA,this.m_localCenterA),E=M.mulSub(S,this.m_localAnchorB,this.m_localCenterB),z=s.zero();z.addCombine(1,g,1,E),z.subCombine(1,l,1,D);var T=z.normalize(),B=T-this.m_maxLength;B=p.clamp(B,0,b.maxLinearCorrection);var C=-this.m_mass*B,F=s.mulNumVec2(C,z);return l.subMul(this.m_invMassA,F),u-=this.m_invIA*s.crossVec2Vec2(D,F),g.addMul(this.m_invMassB,F),f+=this.m_invIB*s.crossVec2Vec2(E,F),this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(g),this.m_bodyB.c_position.a=f,T-this.m_maxLength<b.linearSlop},i.TYPE="rope-joint",i}(A0),Vt={frequencyHz:0,dampingRatio:0},Ie=function(a){o(i,a);function i(n,l,u,g){var f=this;return f instanceof i?(n=m(n,Vt),f=a.call(this,n,l,u)||this,l=f.m_bodyA,u=f.m_bodyB,f.m_type=i.TYPE,f.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),f.m_localAnchorB=s.clone(g?u.getLocalPoint(g):n.localAnchorB||s.zero()),f.m_referenceAngle=p.isFinite(n.referenceAngle)?n.referenceAngle:u.getAngle()-l.getAngle(),f.m_frequencyHz=n.frequencyHz,f.m_dampingRatio=n.dampingRatio,f.m_impulse=new V0,f.m_bias=0,f.m_gamma=0,f.m_rA,f.m_rB,f.m_localCenterA,f.m_localCenterB,f.m_invMassA,f.m_invMassB,f.m_invIA,f.m_invIB,f.m_mass=new ue,f):new i(n,l,u,g)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,referenceAngle:this.m_referenceAngle}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB)},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getReferenceAngle=function(){return this.m_referenceAngle},i.prototype.setFrequency=function(n){this.m_frequencyHz=n},i.prototype.getFrequency=function(){return this.m_frequencyHz},i.prototype.setDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.neo(this.m_impulse.x,this.m_impulse.y).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_impulse.z},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_bodyA.c_position.a,u=this.m_bodyA.c_velocity.v,g=this.m_bodyA.c_velocity.w,f=this.m_bodyB.c_position.a,v=this.m_bodyB.c_velocity.v,S=this.m_bodyB.c_velocity.w,D=M.neo(l),E=M.neo(f);this.m_rA=M.mulVec2(D,s.sub(this.m_localAnchorA,this.m_localCenterA)),this.m_rB=M.mulVec2(E,s.sub(this.m_localAnchorB,this.m_localCenterB));var z=this.m_invMassA,T=this.m_invMassB,B=this.m_invIA,C=this.m_invIB,F=new ue;if(F.ex.x=z+T+this.m_rA.y*this.m_rA.y*B+this.m_rB.y*this.m_rB.y*C,F.ey.x=-this.m_rA.y*this.m_rA.x*B-this.m_rB.y*this.m_rB.x*C,F.ez.x=-this.m_rA.y*B-this.m_rB.y*C,F.ex.y=F.ey.x,F.ey.y=z+T+this.m_rA.x*this.m_rA.x*B+this.m_rB.x*this.m_rB.x*C,F.ez.y=this.m_rA.x*B+this.m_rB.x*C,F.ex.z=F.ez.x,F.ey.z=F.ez.y,F.ez.z=B+C,this.m_frequencyHz>0){F.getInverse22(this.m_mass);var G=B+C,H=G>0?1/G:0,X=f-l-this.m_referenceAngle,Q=2*p.PI*this.m_frequencyHz,h0=2*H*this.m_dampingRatio*Q,u0=H*Q*Q,p0=n.dt;this.m_gamma=p0*(h0+p0*u0),this.m_gamma=this.m_gamma!=0?1/this.m_gamma:0,this.m_bias=X*p0*u0*this.m_gamma,G+=this.m_gamma,this.m_mass.ez.z=G!=0?1/G:0}else F.ez.z==0?(F.getInverse22(this.m_mass),this.m_gamma=0,this.m_bias=0):(F.getSymInverse33(this.m_mass),this.m_gamma=0,this.m_bias=0);if(n.warmStarting){this.m_impulse.mul(n.dtRatio);var v0=s.neo(this.m_impulse.x,this.m_impulse.y);u.subMul(z,v0),g-=B*(s.crossVec2Vec2(this.m_rA,v0)+this.m_impulse.z),v.addMul(T,v0),S+=C*(s.crossVec2Vec2(this.m_rB,v0)+this.m_impulse.z)}else this.m_impulse.setZero();this.m_bodyA.c_velocity.v=u,this.m_bodyA.c_velocity.w=g,this.m_bodyB.c_velocity.v=v,this.m_bodyB.c_velocity.w=S},i.prototype.solveVelocityConstraints=function(n){var l=this.m_bodyA.c_velocity.v,u=this.m_bodyA.c_velocity.w,g=this.m_bodyB.c_velocity.v,f=this.m_bodyB.c_velocity.w,v=this.m_invMassA,S=this.m_invMassB,D=this.m_invIA,E=this.m_invIB;if(this.m_frequencyHz>0){var z=f-u,T=-this.m_mass.ez.z*(z+this.m_bias+this.m_gamma*this.m_impulse.z);this.m_impulse.z+=T,u-=D*T,f+=E*T;var B=s.zero();B.addCombine(1,g,1,s.crossNumVec2(f,this.m_rB)),B.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var C=s.neg(ue.mulVec2(this.m_mass,B));this.m_impulse.x+=C.x,this.m_impulse.y+=C.y;var F=s.clone(C);l.subMul(v,F),u-=D*s.crossVec2Vec2(this.m_rA,F),g.addMul(S,F),f+=E*s.crossVec2Vec2(this.m_rB,F)}else{var B=s.zero();B.addCombine(1,g,1,s.crossNumVec2(f,this.m_rB)),B.subCombine(1,l,1,s.crossNumVec2(u,this.m_rA));var z=f-u,G=new V0(B.x,B.y,z),H=V0.neg(ue.mulVec3(this.m_mass,G));this.m_impulse.add(H);var F=s.neo(H.x,H.y);l.subMul(v,F),u-=D*(s.crossVec2Vec2(this.m_rA,F)+H.z),g.addMul(S,F),f+=E*(s.crossVec2Vec2(this.m_rB,F)+H.z)}this.m_bodyA.c_velocity.v=l,this.m_bodyA.c_velocity.w=u,this.m_bodyB.c_velocity.v=g,this.m_bodyB.c_velocity.w=f},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=this.m_invMassA,E=this.m_invMassB,z=this.m_invIA,T=this.m_invIB,B=M.mulVec2(v,s.sub(this.m_localAnchorA,this.m_localCenterA)),C=M.mulVec2(S,s.sub(this.m_localAnchorB,this.m_localCenterB)),F,G,H=new ue;if(H.ex.x=D+E+B.y*B.y*z+C.y*C.y*T,H.ey.x=-B.y*B.x*z-C.y*C.x*T,H.ez.x=-B.y*z-C.y*T,H.ex.y=H.ey.x,H.ey.y=D+E+B.x*B.x*z+C.x*C.x*T,H.ez.y=B.x*z+C.x*T,H.ex.z=H.ez.x,H.ey.z=H.ez.y,H.ez.z=z+T,this.m_frequencyHz>0){var X=s.zero();X.addCombine(1,g,1,C),X.subCombine(1,l,1,B),F=X.length(),G=0;var Q=s.neg(H.solve22(X));l.subMul(D,Q),u-=z*s.crossVec2Vec2(B,Q),g.addMul(E,Q),f+=T*s.crossVec2Vec2(C,Q)}else{var X=s.zero();X.addCombine(1,g,1,C),X.subCombine(1,l,1,B);var h0=f-u-this.m_referenceAngle;F=X.length(),G=p.abs(h0);var u0=new V0(X.x,X.y,h0),p0=new V0;if(H.ez.z>0)p0=V0.neg(H.solve33(u0));else{var v0=s.neg(H.solve22(X));p0.set(v0.x,v0.y,0)}var Q=s.neo(p0.x,p0.y);l.subMul(D,Q),u-=z*(s.crossVec2Vec2(B,Q)+p0.z),g.addMul(E,Q),f+=T*(s.crossVec2Vec2(C,Q)+p0.z)}return this.m_bodyA.c_position.c=l,this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c=g,this.m_bodyB.c_position.a=f,F<=b.linearSlop&&G<=b.angularSlop},i.TYPE="weld-joint",i}(A0),on={enableMotor:!1,maxMotorTorque:0,motorSpeed:0,frequencyHz:2,dampingRatio:.7},Jt=function(a){o(i,a);function i(n,l,u,g,f){var v=this;return v instanceof i?(n=m(n,on),v=a.call(this,n,l,u)||this,v.m_ax=s.zero(),v.m_ay=s.zero(),l=v.m_bodyA,u=v.m_bodyB,v.m_type=i.TYPE,v.m_localAnchorA=s.clone(g?l.getLocalPoint(g):n.localAnchorA||s.zero()),v.m_localAnchorB=s.clone(g?u.getLocalPoint(g):n.localAnchorB||s.zero()),v.m_localXAxisA=s.clone(f?l.getLocalVector(f):n.localAxisA||n.localAxis||s.neo(1,0)),v.m_localYAxisA=s.crossNumVec2(1,v.m_localXAxisA),v.m_mass=0,v.m_impulse=0,v.m_motorMass=0,v.m_motorImpulse=0,v.m_springMass=0,v.m_springImpulse=0,v.m_maxMotorTorque=n.maxMotorTorque,v.m_motorSpeed=n.motorSpeed,v.m_enableMotor=n.enableMotor,v.m_frequencyHz=n.frequencyHz,v.m_dampingRatio=n.dampingRatio,v.m_bias=0,v.m_gamma=0,v):new i(n,l,u,g,f)}return i.prototype._serialize=function(){return{type:this.m_type,bodyA:this.m_bodyA,bodyB:this.m_bodyB,collideConnected:this.m_collideConnected,enableMotor:this.m_enableMotor,maxMotorTorque:this.m_maxMotorTorque,motorSpeed:this.m_motorSpeed,frequencyHz:this.m_frequencyHz,dampingRatio:this.m_dampingRatio,localAnchorA:this.m_localAnchorA,localAnchorB:this.m_localAnchorB,localAxisA:this.m_localXAxisA}},i._deserialize=function(n,l,u){n=c({},n),n.bodyA=u(r0,n.bodyA,l),n.bodyB=u(r0,n.bodyB,l);var g=new i(n);return g},i.prototype._setAnchors=function(n){n.anchorA?this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(n.anchorA)):n.localAnchorA&&this.m_localAnchorA.setVec2(n.localAnchorA),n.anchorB?this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(n.anchorB)):n.localAnchorB&&this.m_localAnchorB.setVec2(n.localAnchorB),n.localAxisA&&(this.m_localXAxisA.setVec2(n.localAxisA),this.m_localYAxisA.setVec2(s.crossNumVec2(1,n.localAxisA)))},i.prototype.getLocalAnchorA=function(){return this.m_localAnchorA},i.prototype.getLocalAnchorB=function(){return this.m_localAnchorB},i.prototype.getLocalAxisA=function(){return this.m_localXAxisA},i.prototype.getJointTranslation=function(){var n=this.m_bodyA,l=this.m_bodyB,u=n.getWorldPoint(this.m_localAnchorA),g=l.getWorldPoint(this.m_localAnchorB),f=s.sub(g,u),v=n.getWorldVector(this.m_localXAxisA),S=s.dot(f,v);return S},i.prototype.getJointSpeed=function(){var n=this.m_bodyA.m_angularVelocity,l=this.m_bodyB.m_angularVelocity;return l-n},i.prototype.isMotorEnabled=function(){return this.m_enableMotor},i.prototype.enableMotor=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_enableMotor=n},i.prototype.setMotorSpeed=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_motorSpeed=n},i.prototype.getMotorSpeed=function(){return this.m_motorSpeed},i.prototype.setMaxMotorTorque=function(n){this.m_bodyA.setAwake(!0),this.m_bodyB.setAwake(!0),this.m_maxMotorTorque=n},i.prototype.getMaxMotorTorque=function(){return this.m_maxMotorTorque},i.prototype.getMotorTorque=function(n){return n*this.m_motorImpulse},i.prototype.setSpringFrequencyHz=function(n){this.m_frequencyHz=n},i.prototype.getSpringFrequencyHz=function(){return this.m_frequencyHz},i.prototype.setSpringDampingRatio=function(n){this.m_dampingRatio=n},i.prototype.getSpringDampingRatio=function(){return this.m_dampingRatio},i.prototype.getAnchorA=function(){return this.m_bodyA.getWorldPoint(this.m_localAnchorA)},i.prototype.getAnchorB=function(){return this.m_bodyB.getWorldPoint(this.m_localAnchorB)},i.prototype.getReactionForce=function(n){return s.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax).mul(n)},i.prototype.getReactionTorque=function(n){return n*this.m_motorImpulse},i.prototype.initVelocityConstraints=function(n){this.m_localCenterA=this.m_bodyA.m_sweep.localCenter,this.m_localCenterB=this.m_bodyB.m_sweep.localCenter,this.m_invMassA=this.m_bodyA.m_invMass,this.m_invMassB=this.m_bodyB.m_invMass,this.m_invIA=this.m_bodyA.m_invI,this.m_invIB=this.m_bodyB.m_invI;var l=this.m_invMassA,u=this.m_invMassB,g=this.m_invIA,f=this.m_invIB,v=this.m_bodyA.c_position.c,S=this.m_bodyA.c_position.a,D=this.m_bodyA.c_velocity.v,E=this.m_bodyA.c_velocity.w,z=this.m_bodyB.c_position.c,T=this.m_bodyB.c_position.a,B=this.m_bodyB.c_velocity.v,C=this.m_bodyB.c_velocity.w,F=M.neo(S),G=M.neo(T),H=M.mulVec2(F,s.sub(this.m_localAnchorA,this.m_localCenterA)),X=M.mulVec2(G,s.sub(this.m_localAnchorB,this.m_localCenterB)),Q=s.zero();if(Q.addCombine(1,z,1,X),Q.subCombine(1,v,1,H),this.m_ay=M.mulVec2(F,this.m_localYAxisA),this.m_sAy=s.crossVec2Vec2(s.add(Q,H),this.m_ay),this.m_sBy=s.crossVec2Vec2(X,this.m_ay),this.m_mass=l+u+g*this.m_sAy*this.m_sAy+f*this.m_sBy*this.m_sBy,this.m_mass>0&&(this.m_mass=1/this.m_mass),this.m_springMass=0,this.m_bias=0,this.m_gamma=0,this.m_frequencyHz>0){this.m_ax=M.mulVec2(F,this.m_localXAxisA),this.m_sAx=s.crossVec2Vec2(s.add(Q,H),this.m_ax),this.m_sBx=s.crossVec2Vec2(X,this.m_ax);var h0=l+u+g*this.m_sAx*this.m_sAx+f*this.m_sBx*this.m_sBx;if(h0>0){this.m_springMass=1/h0;var u0=s.dot(Q,this.m_ax),p0=2*p.PI*this.m_frequencyHz,v0=2*this.m_springMass*this.m_dampingRatio*p0,B0=this.m_springMass*p0*p0,z0=n.dt;this.m_gamma=z0*(v0+z0*B0),this.m_gamma>0&&(this.m_gamma=1/this.m_gamma),this.m_bias=u0*z0*B0*this.m_gamma,this.m_springMass=h0+this.m_gamma,this.m_springMass>0&&(this.m_springMass=1/this.m_springMass)}}else this.m_springImpulse=0;if(this.m_enableMotor?(this.m_motorMass=g+f,this.m_motorMass>0&&(this.m_motorMass=1/this.m_motorMass)):(this.m_motorMass=0,this.m_motorImpulse=0),n.warmStarting){this.m_impulse*=n.dtRatio,this.m_springImpulse*=n.dtRatio,this.m_motorImpulse*=n.dtRatio;var U0=s.combine(this.m_impulse,this.m_ay,this.m_springImpulse,this.m_ax),D0=this.m_impulse*this.m_sAy+this.m_springImpulse*this.m_sAx+this.m_motorImpulse,x0=this.m_impulse*this.m_sBy+this.m_springImpulse*this.m_sBx+this.m_motorImpulse;D.subMul(this.m_invMassA,U0),E-=this.m_invIA*D0,B.addMul(this.m_invMassB,U0),C+=this.m_invIB*x0}else this.m_impulse=0,this.m_springImpulse=0,this.m_motorImpulse=0;this.m_bodyA.c_velocity.v.setVec2(D),this.m_bodyA.c_velocity.w=E,this.m_bodyB.c_velocity.v.setVec2(B),this.m_bodyB.c_velocity.w=C},i.prototype.solveVelocityConstraints=function(n){var l=this.m_invMassA,u=this.m_invMassB,g=this.m_invIA,f=this.m_invIB,v=this.m_bodyA.c_velocity.v,S=this.m_bodyA.c_velocity.w,D=this.m_bodyB.c_velocity.v,E=this.m_bodyB.c_velocity.w;{var z=s.dot(this.m_ax,D)-s.dot(this.m_ax,v)+this.m_sBx*E-this.m_sAx*S,T=-this.m_springMass*(z+this.m_bias+this.m_gamma*this.m_springImpulse);this.m_springImpulse+=T;var B=s.mulNumVec2(T,this.m_ax),C=T*this.m_sAx,F=T*this.m_sBx;v.subMul(l,B),S-=g*C,D.addMul(u,B),E+=f*F}{var z=E-S-this.m_motorSpeed,T=-this.m_motorMass*z,G=this.m_motorImpulse,H=n.dt*this.m_maxMotorTorque;this.m_motorImpulse=p.clamp(this.m_motorImpulse+T,-H,H),T=this.m_motorImpulse-G,S-=g*T,E+=f*T}{var z=s.dot(this.m_ay,D)-s.dot(this.m_ay,v)+this.m_sBy*E-this.m_sAy*S,T=-this.m_mass*z;this.m_impulse+=T;var B=s.mulNumVec2(T,this.m_ay),C=T*this.m_sAy,F=T*this.m_sBy;v.subMul(l,B),S-=g*C,D.addMul(u,B),E+=f*F}this.m_bodyA.c_velocity.v.setVec2(v),this.m_bodyA.c_velocity.w=S,this.m_bodyB.c_velocity.v.setVec2(D),this.m_bodyB.c_velocity.w=E},i.prototype.solvePositionConstraints=function(n){var l=this.m_bodyA.c_position.c,u=this.m_bodyA.c_position.a,g=this.m_bodyB.c_position.c,f=this.m_bodyB.c_position.a,v=M.neo(u),S=M.neo(f),D=M.mulVec2(v,s.sub(this.m_localAnchorA,this.m_localCenterA)),E=M.mulVec2(S,s.sub(this.m_localAnchorB,this.m_localCenterB)),z=s.zero();z.addCombine(1,g,1,E),z.subCombine(1,l,1,D);var T=M.mulVec2(v,this.m_localYAxisA),B=s.crossVec2Vec2(s.add(z,D),T),C=s.crossVec2Vec2(E,T),F=s.dot(z,T),G=this.m_invMassA+this.m_invMassB+this.m_invIA*this.m_sAy*this.m_sAy+this.m_invIB*this.m_sBy*this.m_sBy,H;G!=0?H=-F/G:H=0;var X=s.mulNumVec2(H,T),Q=H*B,h0=H*C;return l.subMul(this.m_invMassA,X),u-=this.m_invIA*Q,g.addMul(this.m_invMassB,X),f+=this.m_invIB*h0,this.m_bodyA.c_position.c.setVec2(l),this.m_bodyA.c_position.a=u,this.m_bodyB.c_position.c.setVec2(g),this.m_bodyB.c_position.a=f,p.abs(F)<=b.linearSlop},i.TYPE="wheel-joint",i}(A0),Ap=0;function Sn(a){var i;a=a||{};var n=a.rootClass||pt,l=a.preSerialize||function(E){return E},u=a.postSerialize||function(E,z){return E},g=a.preDeserialize||function(E){return E},f=a.postDeserialize||function(E,z){return E},v={World:pt,Body:r0,Joint:A0,Fixture:n0,Shape:N},S=c({Vec2:s,Vec3:V0},v),D=(i={},i[r0.STATIC]=r0,i[r0.DYNAMIC]=r0,i[r0.KINEMATIC]=r0,i[Ut.TYPE]=Ut,i[Ge.TYPE]=Ge,i[wt.TYPE]=wt,i[ne.TYPE]=ne,i[be.TYPE]=be,i[Si.TYPE]=Si,i[sn.TYPE]=sn,i[de.TYPE]=de,i[we.TYPE]=we,i[mt.TYPE]=mt,i[ht.TYPE]=ht,i[Mt.TYPE]=Mt,i[H0.TYPE]=H0,i[ri.TYPE]=ri,i[Ie.TYPE]=Ie,i[Jt.TYPE]=Jt,i);this.toJson=function(E){var z=[],T=[E],B={};function C(Q,h0){if(Q.__sid=Q.__sid||++Ap,!B[Q.__sid]){T.push(Q);var u0=z.length+T.length,p0={refIndex:u0,refType:h0};B[Q.__sid]=p0}return B[Q.__sid]}function F(Q){Q=l(Q);var h0=Q._serialize();return h0=u(h0,Q),h0}function G(Q,h0){if(typeof Q!="object"||Q===null)return Q;if(typeof Q._serialize=="function"){if(Q!==h0){for(var u0 in v)if(Q instanceof v[u0])return C(Q,u0)}Q=F(Q)}if(Array.isArray(Q)){for(var p0=[],v0=0;v0<Q.length;v0++)p0[v0]=G(Q[v0]);Q=p0}else{var p0={};for(var v0 in Q)Q.hasOwnProperty(v0)&&(p0[v0]=G(Q[v0]));Q=p0}return Q}for(;T.length;){var H=T.shift(),X=G(H,H);z.push(X)}return z},this.fromJson=function(E){var z={};function T(G,H){return(!H||!H._deserialize)&&(H=D[G.type]),H&&H._deserialize}function B(G,H,X){var Q=T(H,G);if(!!Q){H=g(H);var h0=Q(H,X,C);return h0=f(h0,H),h0}}function C(G,H,X){if(!H.refIndex)return G&&G._deserialize&&B(G,H,X);G=S[H.refType]||G;var Q=H.refIndex;if(!z[Q]){var h0=E[Q],u0=B(G,h0,X);z[Q]=u0}return z[Q]}var F=n._deserialize(E[0],null,C);return F}}var is=new Sn;Sn.toJson=is.toJson,Sn.fromJson=is.fromJson,a0.addType(be.TYPE,be.TYPE,vp);function vp(a,i,n,l,u,g,f){ns(a,n.getShape(),i,g.getShape(),u)}function ns(a,i,n,l,u){a.pointCount=0;var g=P.mulVec2(n,i.m_p),f=P.mulVec2(u,l.m_p),v=s.distanceSquared(f,g),S=i.m_radius,D=l.m_radius,E=S+D;v>E*E||(a.type=e0.e_circles,a.localPoint.setVec2(i.m_p),a.localNormal.setZero(),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex)}a0.addType(wt.TYPE,be.TYPE,yp),a0.addType(Ut.TYPE,be.TYPE,xp);function yp(a,i,n,l,u,g,f){var v=n.getShape(),S=g.getShape();ir(a,v,i,S,u)}function xp(a,i,n,l,u,g,f){var v=n.getShape(),S=new wt;v.getChildEdge(S,l);var D=S,E=g.getShape();ir(a,D,i,E,u)}function ir(a,i,n,l,u){a.pointCount=0;var g=P.mulTVec2(n,P.mulVec2(u,l.m_p)),f=i.m_vertex1,v=i.m_vertex2,S=s.sub(v,f),D=s.dot(S,s.sub(v,g)),E=s.dot(S,s.sub(g,f)),z=i.m_radius+l.m_radius;if(E<=0){var T=s.clone(f),B=s.sub(g,T),C=s.dot(B,B);if(C>z*z)return;if(i.m_hasVertex0){var F=i.m_vertex0,G=f,H=s.sub(G,F),X=s.dot(H,s.sub(G,g));if(X>0)return}a.type=e0.e_circles,a.localNormal.setZero(),a.localPoint.setVec2(T),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex;return}if(D<=0){var Q=s.clone(v),h0=s.sub(g,Q),u0=s.dot(h0,h0);if(u0>z*z)return;if(i.m_hasVertex3){var p0=i.m_vertex3,v0=v,B0=s.sub(p0,v0),z0=s.dot(B0,s.sub(g,v0));if(z0>0)return}a.type=e0.e_circles,a.localNormal.setZero(),a.localPoint.setVec2(Q),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=1,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex;return}var U0=s.dot(S,S),D0=s.combine(D/U0,f,E/U0,v),x0=s.sub(g,D0),Z0=s.dot(x0,x0);if(!(Z0>z*z)){var Q0=s.neo(-S.y,S.x);s.dot(Q0,s.sub(g,f))<0&&Q0.setNum(-Q0.x,-Q0.y),Q0.normalize(),a.type=e0.e_faceA,a.localNormal=Q0,a.localPoint.setVec2(f),a.pointCount=1,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_face,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex}}a0.addType(ne.TYPE,ne.TYPE,bp);function bp(a,i,n,l,u,g,f){nr(a,n.getShape(),i,g.getShape(),u)}function rs(a,i,n,l,u){for(var g=a.m_count,f=n.m_count,v=a.m_normals,S=a.m_vertices,D=n.m_vertices,E=P.mulTXf(l,i),z=0,T=-1/0,B=0;B<g;++B){for(var C=M.mulVec2(E.q,v[B]),F=P.mulVec2(E,S[B]),G=1/0,H=0;H<f;++H){var X=s.dot(C,D[H])-s.dot(C,F);X<G&&(G=X)}G>T&&(T=G,z=B)}u.maxSeparation=T,u.bestIndex=z}function wp(a,i,n,l,u,g){for(var f=i.m_normals,v=u.m_count,S=u.m_vertices,D=u.m_normals,E=M.mulTVec2(g.q,M.mulVec2(n.q,f[l])),z=0,T=1/0,B=0;B<v;++B){var C=s.dot(E,D[B]);C<T&&(T=C,z=B)}var F=z,G=F+1<v?F+1:0;a[0].v=P.mulVec2(g,S[F]),a[0].id.cf.indexA=l,a[0].id.cf.indexB=F,a[0].id.cf.typeA=Z.e_face,a[0].id.cf.typeB=Z.e_vertex,a[1].v=P.mulVec2(g,S[G]),a[1].id.cf.indexA=l,a[1].id.cf.indexB=G,a[1].id.cf.typeA=Z.e_face,a[1].id.cf.typeB=Z.e_vertex}var Mi={maxSeparation:0,bestIndex:0};function nr(a,i,n,l,u){a.pointCount=0;var g=i.m_radius+l.m_radius;rs(i,n,l,u,Mi);var f=Mi.bestIndex,v=Mi.maxSeparation;if(!(v>g)){rs(l,u,i,n,Mi);var S=Mi.bestIndex,D=Mi.maxSeparation;if(!(D>g)){var E,z,T,B,C,F,G=.1*b.linearSlop;D>v+G?(E=l,z=i,T=u,B=n,C=S,a.type=e0.e_faceB,F=1):(E=i,z=l,T=n,B=u,C=f,a.type=e0.e_faceA,F=0);var H=[new f0,new f0];wp(H,E,T,C,z,B);var X=E.m_count,Q=E.m_vertices,h0=C,u0=C+1<X?C+1:0,p0=Q[h0],v0=Q[u0],B0=s.sub(v0,p0);B0.normalize();var z0=s.crossVec2Num(B0,1),U0=s.combine(.5,p0,.5,v0),D0=M.mulVec2(T.q,B0),x0=s.crossVec2Num(D0,1);p0=P.mulVec2(T,p0),v0=P.mulVec2(T,v0);var Z0=s.dot(x0,p0),Q0=-s.dot(D0,p0)+g,it=s.dot(D0,v0)+g,At=[new f0,new f0],xt=[new f0,new f0],_t;if(_t=J0(At,H,s.neg(D0),Q0,h0),!(_t<2)&&(_t=J0(xt,At,D0,it,u0),!(_t<2))){a.localNormal=z0,a.localPoint=U0;for(var W0=0,Y0=0;Y0<xt.length;++Y0){var et=s.dot(x0,xt[Y0].v)-Z0;if(et<=g){var G0=a.points[W0];if(G0.localPoint.setVec2(P.mulTVec2(B,xt[Y0].v)),G0.id=xt[Y0].id,F){var It=G0.id.cf,$t=It.indexA,me=It.indexB,Ft=It.typeA,qe=It.typeB;It.indexA=me,It.indexB=$t,It.typeA=qe,It.typeB=Ft}++W0}}a.pointCount=W0}}}}a0.addType(ne.TYPE,be.TYPE,Sp);function Sp(a,i,n,l,u,g,f){ss(a,n.getShape(),i,g.getShape(),u)}function ss(a,i,n,l,u){a.pointCount=0;for(var g=P.mulVec2(u,l.m_p),f=P.mulTVec2(n,g),v=0,S=-1/0,D=i.m_radius+l.m_radius,E=i.m_count,z=i.m_vertices,T=i.m_normals,B=0;B<E;++B){var C=s.dot(T[B],s.sub(f,z[B]));if(C>D)return;C>S&&(S=C,v=B)}var F=v,G=F+1<E?F+1:0,H=z[F],X=z[G];if(S<p.EPSILON){a.pointCount=1,a.type=e0.e_faceA,a.localNormal.setVec2(T[v]),a.localPoint.setCombine(.5,H,.5,X),a.points[0].localPoint=l.m_p,a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex;return}var Q=s.dot(s.sub(f,H),s.sub(X,H)),h0=s.dot(s.sub(f,X),s.sub(H,X));if(Q<=0){if(s.distanceSquared(f,H)>D*D)return;a.pointCount=1,a.type=e0.e_faceA,a.localNormal.setCombine(1,f,-1,H),a.localNormal.normalize(),a.localPoint=H,a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex}else if(h0<=0){if(s.distanceSquared(f,X)>D*D)return;a.pointCount=1,a.type=e0.e_faceA,a.localNormal.setCombine(1,f,-1,X),a.localNormal.normalize(),a.localPoint.setVec2(X),a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex}else{var u0=s.mid(H,X),p0=s.dot(f,T[F])-s.dot(u0,T[F]);if(p0>D)return;a.pointCount=1,a.type=e0.e_faceA,a.localNormal.setVec2(T[F]),a.localPoint.setVec2(u0),a.points[0].localPoint.setVec2(l.m_p),a.points[0].id.cf.indexA=0,a.points[0].id.cf.typeA=Z.e_vertex,a.points[0].id.cf.indexB=0,a.points[0].id.cf.typeB=Z.e_vertex}}a0.addType(wt.TYPE,ne.TYPE,Mp),a0.addType(Ut.TYPE,ne.TYPE,Bp);function Mp(a,i,n,l,u,g,f){rr(a,n.getShape(),i,g.getShape(),u)}function Bp(a,i,n,l,u,g,f){var v=n.getShape(),S=new wt;v.getChildEdge(S,l),rr(a,S,i,g.getShape(),u)}var se;(function(a){a[a.e_unknown=-1]="e_unknown",a[a.e_edgeA=1]="e_edgeA",a[a.e_edgeB=2]="e_edgeB"})(se||(se={}));var os;(function(a){a[a.e_isolated=0]="e_isolated",a[a.e_concave=1]="e_concave",a[a.e_convex=2]="e_convex"})(os||(os={}));var as=function(){function a(){}return a}(),Cp=function(){function a(){this.vertices=[],this.normals=[],this.count=0}return a}(),Ep=function(){function a(){this.normal=s.zero(),this.sideNormal1=s.zero(),this.sideNormal2=s.zero()}return a}(),Me=new as,Xt=new as,Lt=new Cp,rt=new Ep;function rr(a,i,n,l,u){var g=P.mulTXf(n,u),f=P.mulVec2(g,l.m_centroid),v=i.m_vertex0,S=i.m_vertex1,D=i.m_vertex2,E=i.m_vertex3,z=i.m_hasVertex0,T=i.m_hasVertex3,B=s.sub(D,S);B.normalize();var C=s.neo(B.y,-B.x),F=s.dot(C,s.sub(f,S)),G=0,H=0,X=!1,Q=!1,h0,u0;if(z){var p0=s.sub(S,v);p0.normalize(),h0=s.neo(p0.y,-p0.x),X=s.crossVec2Vec2(p0,B)>=0,G=s.dot(h0,f)-s.dot(h0,v)}if(T){var v0=s.sub(E,D);v0.normalize(),u0=s.neo(v0.y,-v0.x),Q=s.crossVec2Vec2(B,v0)>0,H=s.dot(u0,f)-s.dot(u0,D)}var B0,z0=s.zero(),U0=s.zero(),D0=s.zero();z&&T?X&&Q?(B0=G>=0||F>=0||H>=0,B0?(z0.setVec2(C),U0.setVec2(h0),D0.setVec2(u0)):(z0.setMul(-1,C),U0.setMul(-1,C),D0.setMul(-1,C))):X?(B0=G>=0||F>=0&&H>=0,B0?(z0.setVec2(C),U0.setVec2(h0),D0.setVec2(C)):(z0.setMul(-1,C),U0.setMul(-1,u0),D0.setMul(-1,C))):Q?(B0=H>=0||G>=0&&F>=0,B0?(z0.setVec2(C),U0.setVec2(C),D0.setVec2(u0)):(z0.setMul(-1,C),U0.setMul(-1,C),D0.setMul(-1,h0))):(B0=G>=0&&F>=0&&H>=0,B0?(z0.setVec2(C),U0.setVec2(C),D0.setVec2(C)):(z0.setMul(-1,C),U0.setMul(-1,u0),D0.setMul(-1,h0))):z?X?(B0=G>=0||F>=0,B0?(z0.setVec2(C),U0.setVec2(h0),D0.setMul(-1,C)):(z0.setMul(-1,C),U0.setVec2(C),D0.setMul(-1,C))):(B0=G>=0&&F>=0,B0?(z0.setVec2(C),U0.setVec2(C),D0.setMul(-1,C)):(z0.setMul(-1,C),U0.setVec2(C),D0.setMul(-1,h0))):T?Q?(B0=F>=0||H>=0,B0?(z0.setVec2(C),U0.setMul(-1,C),D0.setVec2(u0)):(z0.setMul(-1,C),U0.setMul(-1,C),D0.setVec2(C))):(B0=F>=0&&H>=0,B0?(z0.setVec2(C),U0.setMul(-1,C),D0.setVec2(C)):(z0.setMul(-1,C),U0.setMul(-1,u0),D0.setVec2(C))):(B0=F>=0,B0?(z0.setVec2(C),U0.setMul(-1,C),D0.setMul(-1,C)):(z0.setMul(-1,C),U0.setVec2(C),D0.setVec2(C))),Lt.count=l.m_count;for(var x0=0;x0<l.m_count;++x0)Lt.vertices[x0]=P.mulVec2(g,l.m_vertices[x0]),Lt.normals[x0]=M.mulVec2(g.q,l.m_normals[x0]);var Z0=2*b.polygonRadius;a.pointCount=0;{Me.type=se.e_edgeA,Me.index=B0?0:1,Me.separation=1/0;for(var x0=0;x0<Lt.count;++x0){var Q0=s.dot(z0,s.sub(Lt.vertices[x0],S));Q0<Me.separation&&(Me.separation=Q0)}}if(Me.type!=se.e_unknown&&!(Me.separation>Z0)){{Xt.type=se.e_unknown,Xt.index=-1,Xt.separation=-1/0;for(var it=s.neo(-z0.y,z0.x),x0=0;x0<Lt.count;++x0){var At=s.neg(Lt.normals[x0]),xt=s.dot(At,s.sub(Lt.vertices[x0],S)),_t=s.dot(At,s.sub(Lt.vertices[x0],D)),Q0=p.min(xt,_t);if(Q0>Z0){Xt.type=se.e_edgeB,Xt.index=x0,Xt.separation=Q0;break}if(s.dot(At,it)>=0){if(s.dot(s.sub(At,D0),z0)<-b.angularSlop)continue}else if(s.dot(s.sub(At,U0),z0)<-b.angularSlop)continue;Q0>Xt.separation&&(Xt.type=se.e_edgeB,Xt.index=x0,Xt.separation=Q0)}}if(!(Xt.type!=se.e_unknown&&Xt.separation>Z0)){var W0=.98,Y0=.001,et;Xt.type==se.e_unknown?et=Me:Xt.separation>W0*Me.separation+Y0?et=Xt:et=Me;var G0=[new f0,new f0];if(et.type==se.e_edgeA){a.type=e0.e_faceA;for(var It=0,$t=s.dot(z0,Lt.normals[0]),x0=1;x0<Lt.count;++x0){var me=s.dot(z0,Lt.normals[x0]);me<$t&&($t=me,It=x0)}var Ft=It,qe=Ft+1<Lt.count?Ft+1:0;G0[0].v=Lt.vertices[Ft],G0[0].id.cf.indexA=0,G0[0].id.cf.indexB=Ft,G0[0].id.cf.typeA=Z.e_face,G0[0].id.cf.typeB=Z.e_vertex,G0[1].v=Lt.vertices[qe],G0[1].id.cf.indexA=0,G0[1].id.cf.indexB=qe,G0[1].id.cf.typeA=Z.e_face,G0[1].id.cf.typeB=Z.e_vertex,B0?(rt.i1=0,rt.i2=1,rt.v1=S,rt.v2=D,rt.normal.setVec2(C)):(rt.i1=1,rt.i2=0,rt.v1=D,rt.v2=S,rt.normal.setMul(-1,C))}else a.type=e0.e_faceB,G0[0].v=S,G0[0].id.cf.indexA=0,G0[0].id.cf.indexB=et.index,G0[0].id.cf.typeA=Z.e_vertex,G0[0].id.cf.typeB=Z.e_face,G0[1].v=D,G0[1].id.cf.indexA=0,G0[1].id.cf.indexB=et.index,G0[1].id.cf.typeA=Z.e_vertex,G0[1].id.cf.typeB=Z.e_face,rt.i1=et.index,rt.i2=rt.i1+1<Lt.count?rt.i1+1:0,rt.v1=Lt.vertices[rt.i1],rt.v2=Lt.vertices[rt.i2],rt.normal.setVec2(Lt.normals[rt.i1]);rt.sideNormal1.setNum(rt.normal.y,-rt.normal.x),rt.sideNormal2.setMul(-1,rt.sideNormal1),rt.sideOffset1=s.dot(rt.sideNormal1,rt.v1),rt.sideOffset2=s.dot(rt.sideNormal2,rt.v2);var Bi=[new f0,new f0],te=[new f0,new f0],De;if(De=J0(Bi,G0,rt.sideNormal1,rt.sideOffset1,rt.i1),!(De<b.maxManifoldPoints)&&(De=J0(te,Bi,rt.sideNormal2,rt.sideOffset2,rt.i2),!(De<b.maxManifoldPoints))){et.type==se.e_edgeA?(a.localNormal=s.clone(rt.normal),a.localPoint=s.clone(rt.v1)):(a.localNormal=s.clone(l.m_normals[rt.i1]),a.localPoint=s.clone(l.m_vertices[rt.i1]));for(var Ci=0,x0=0;x0<b.maxManifoldPoints;++x0){var Ei=s.dot(rt.normal,s.sub(te[x0].v,rt.v1));if(Ei<=Z0){var Le=a.points[Ci];et.type==se.e_edgeA?(Le.localPoint=P.mulTVec2(g,te[x0].v),Le.id=te[x0].id):(Le.localPoint=te[x0].v,Le.id.cf.typeA=te[x0].id.cf.typeB,Le.id.cf.typeB=te[x0].id.cf.typeA,Le.id.cf.indexA=te[x0].id.cf.indexB,Le.id.cf.indexB=te[x0].id.cf.indexA),++Ci}}a.pointCount=Ci}}}}var Pe={};Pe.CollidePolygons=nr,Pe.Settings=b,Pe.Sweep=k,Pe.Manifold=L0,Pe.Distance=vt,Pe.TimeOfImpact=W,Pe.DynamicTree=x,Pe.stats=y0,I0.TimeStep=q0,vt.testOverlap=Ct,vt.Input=ut,vt.Output=ot,vt.Proxy=bt,vt.Cache=X0,W.Input=_0,W.Output=E0,e.AABB=y,e.Body=r0,e.Box=Ge,e.Chain=Ut,e.Circle=be,e.CollideCircles=ns,e.CollideEdgeCircle=ir,e.CollideEdgePolygon=rr,e.CollidePolygonCircle=ss,e.CollidePolygons=nr,e.Contact=a0,e.Distance=vt,e.DistanceJoint=Si,e.DynamicTree=x,e.Edge=wt,e.Fixture=n0,e.FrictionJoint=sn,e.GearJoint=de,e.Joint=A0,e.Manifold=L0,e.Mat22=d0,e.Mat33=ue,e.Math=p,e.MotorJoint=we,e.MouseJoint=mt,e.Polygon=ne,e.PrismaticJoint=ht,e.PulleyJoint=Mt,e.RevoluteJoint=H0,e.RopeJoint=ri,e.Rot=M,e.Serializer=Sn,e.Settings=b,e.Shape=N,e.Sweep=k,e.TimeOfImpact=W,e.Transform=P,e.Vec2=s,e.Vec3=V0,e.WeldJoint=Ie,e.WheelJoint=Jt,e.World=pt,e.internal=Pe,Object.defineProperty(e,"__esModule",{value:!0})})})(Dt,Dt.exports);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jr="142",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dp=0,ls=1,Lp=2,Io=1,Rp=2,dn=3,fn=0,ye=1,Ji=2,zp=1,ei=0,Xi=1,cs=2,hs=3,us=4,Op=5,Wi=100,Vp=101,Fp=102,ds=103,ms=104,Np=200,Up=201,jp=202,kp=203,Po=204,Do=205,Gp=206,Hp=207,Wp=208,qp=209,Xp=210,Qp=0,Yp=1,Jp=2,Ur=3,Kp=4,Zp=5,$p=6,tf=7,Lo=0,ef=1,nf=2,ke=0,rf=1,sf=2,of=3,af=4,lf=5,Ro=300,Ki=301,Zi=302,jr=303,kr=304,Jn=306,Gr=1e3,ve=1001,Hr=1002,Gt=1003,ps=1004,fs=1005,ae=1006,cf=1007,Kn=1008,_i=1009,hf=1010,uf=1011,zo=1012,df=1013,ui=1014,di=1015,gn=1016,mf=1017,pf=1018,Qi=1020,ff=1021,gf=1022,Ce=1023,_f=1024,Af=1025,pi=1026,$i=1027,vf=1028,yf=1029,xf=1030,bf=1031,wf=1033,sr=33776,or=33777,ar=33778,lr=33779,gs=35840,_s=35841,As=35842,vs=35843,Sf=36196,ys=37492,xs=37496,bs=37808,ws=37809,Ss=37810,Ms=37811,Bs=37812,Cs=37813,Es=37814,Ts=37815,Is=37816,Ps=37817,Ds=37818,Ls=37819,Rs=37820,zs=37821,Os=36492,Ai=3e3,Et=3001,Mf=3200,Bf=3201,Oo=0,Cf=1,Ne="srgb",mi="srgb-linear",cr=7680,Ef=519,Vs=35044,Fs="300 es",Wr=1035;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const r=this._listeners;return r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const c=o.indexOf(e);c!==-1&&o.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const r=this._listeners[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let c=0,m=o.length;c<m;c++)o[c].call(this,t);t.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hr=Math.PI/180,Ns=180/Math.PI;function _n(){const h=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jt[h&255]+jt[h>>8&255]+jt[h>>16&255]+jt[h>>24&255]+"-"+jt[t&255]+jt[t>>8&255]+"-"+jt[t>>16&15|64]+jt[t>>24&255]+"-"+jt[e&63|128]+jt[e>>8&255]+"-"+jt[e>>16&255]+jt[e>>24&255]+jt[r&255]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]).toLowerCase()}function Kt(h,t,e){return Math.max(t,Math.min(e,h))}function Tf(h,t){return(h%t+t)%t}function ur(h,t,e){return(1-e)*h+e*t}function Us(h){return(h&h-1)===0&&h!==0}function qr(h){return Math.pow(2,Math.floor(Math.log(h)/Math.LN2))}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6],this.y=o[1]*e+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),o=Math.sin(e),c=this.x-t.x,m=this.y-t.y;return this.x=c*r-m*o+t.x,this.y=c*o+m*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,r,o,c,m,d,A,_){const p=this.elements;return p[0]=t,p[1]=o,p[2]=d,p[3]=e,p[4]=c,p[5]=A,p[6]=r,p[7]=m,p[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,c=this.elements,m=r[0],d=r[3],A=r[6],_=r[1],p=r[4],s=r[7],y=r[2],b=r[5],I=r[8],w=o[0],x=o[3],L=o[6],U=o[1],M=o[4],P=o[7],k=o[2],Y=o[5],t0=o[8];return c[0]=m*w+d*U+A*k,c[3]=m*x+d*M+A*Y,c[6]=m*L+d*P+A*t0,c[1]=_*w+p*U+s*k,c[4]=_*x+p*M+s*Y,c[7]=_*L+p*P+s*t0,c[2]=y*w+b*U+I*k,c[5]=y*x+b*M+I*Y,c[8]=y*L+b*P+I*t0,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],m=t[4],d=t[5],A=t[6],_=t[7],p=t[8];return e*m*p-e*d*_-r*c*p+r*d*A+o*c*_-o*m*A}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],m=t[4],d=t[5],A=t[6],_=t[7],p=t[8],s=p*m-d*_,y=d*A-p*c,b=_*c-m*A,I=e*s+r*y+o*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/I;return t[0]=s*w,t[1]=(o*_-p*r)*w,t[2]=(d*r-o*m)*w,t[3]=y*w,t[4]=(p*e-o*A)*w,t[5]=(o*c-d*e)*w,t[6]=b*w,t[7]=(r*A-_*e)*w,t[8]=(m*e-r*c)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,o,c,m,d){const A=Math.cos(c),_=Math.sin(c);return this.set(r*A,r*_,-r*(A*m+_*d)+m+t,-o*_,o*A,-o*(-_*m+A*d)+d+e,0,0,1),this}scale(t,e){const r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=e,r[4]*=e,r[7]*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),o=this.elements,c=o[0],m=o[3],d=o[6],A=o[1],_=o[4],p=o[7];return o[0]=e*c+r*A,o[3]=e*m+r*_,o[6]=e*d+r*p,o[1]=-r*c+e*A,o[4]=-r*m+e*_,o[7]=-r*d+e*p,this}translate(t,e){const r=this.elements;return r[0]+=t*r[2],r[3]+=t*r[5],r[6]+=t*r[8],r[1]+=e*r[2],r[4]+=e*r[5],r[7]+=e*r[8],this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<9;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Vo(h){for(let t=h.length-1;t>=0;--t)if(h[t]>65535)return!0;return!1}function Xn(h){return document.createElementNS("http://www.w3.org/1999/xhtml",h)}function fi(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function Wn(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}const dr={[Ne]:{[mi]:fi},[mi]:{[Ne]:Wn}},pe={legacyMode:!0,get workingColorSpace(){return mi},set workingColorSpace(h){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(h,t,e){if(this.legacyMode||t===e||!t||!e)return h;if(dr[t]&&dr[t][e]!==void 0){const r=dr[t][e];return h.r=r(h.r),h.g=r(h.g),h.b=r(h.b),h}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(h,t){return this.convert(h,this.workingColorSpace,t)},toWorkingColorSpace:function(h,t){return this.convert(h,t,this.workingColorSpace)}},Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rt={r:0,g:0,b:0},fe={h:0,s:0,l:0},Mn={h:0,s:0,l:0};function mr(h,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?h+(t-h)*6*e:e<1/2?t:e<2/3?h+(t-h)*6*(2/3-e):h}function Bn(h,t){return t.r=h.r,t.g=h.g,t.b=h.b,t}class yt{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&r===void 0?this.set(t):this.setRGB(t,e,r)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,r,o=mi){return this.r=t,this.g=e,this.b=r,pe.toWorkingColorSpace(this,o),this}setHSL(t,e,r,o=mi){if(t=Tf(t,1),e=Kt(e,0,1),r=Kt(r,0,1),e===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+e):r+e-r*e,m=2*r-c;this.r=mr(m,c,t+1/3),this.g=mr(m,c,t),this.b=mr(m,c,t-1/3)}return pe.toWorkingColorSpace(this,o),this}setStyle(t,e=Ne){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let c;const m=o[1],d=o[2];switch(m){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,pe.toWorkingColorSpace(this,e),r(c[4]),this;if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,pe.toWorkingColorSpace(this,e),r(c[4]),this;break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d)){const A=parseFloat(c[1])/360,_=parseInt(c[2],10)/100,p=parseInt(c[3],10)/100;return r(c[4]),this.setHSL(A,_,p,e)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],m=c.length;if(m===3)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,pe.toWorkingColorSpace(this,e),this;if(m===6)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,pe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Ne){const r=Fo[t.toLowerCase()];return r!==void 0?this.setHex(r,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return pe.fromWorkingColorSpace(Bn(this,Rt),t),Kt(Rt.r*255,0,255)<<16^Kt(Rt.g*255,0,255)<<8^Kt(Rt.b*255,0,255)<<0}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=mi){pe.fromWorkingColorSpace(Bn(this,Rt),e);const r=Rt.r,o=Rt.g,c=Rt.b,m=Math.max(r,o,c),d=Math.min(r,o,c);let A,_;const p=(d+m)/2;if(d===m)A=0,_=0;else{const s=m-d;switch(_=p<=.5?s/(m+d):s/(2-m-d),m){case r:A=(o-c)/s+(o<c?6:0);break;case o:A=(c-r)/s+2;break;case c:A=(r-o)/s+4;break}A/=6}return t.h=A,t.s=_,t.l=p,t}getRGB(t,e=mi){return pe.fromWorkingColorSpace(Bn(this,Rt),e),t.r=Rt.r,t.g=Rt.g,t.b=Rt.b,t}getStyle(t=Ne){return pe.fromWorkingColorSpace(Bn(this,Rt),t),t!==Ne?`color(${t} ${Rt.r} ${Rt.g} ${Rt.b})`:`rgb(${Rt.r*255|0},${Rt.g*255|0},${Rt.b*255|0})`}offsetHSL(t,e,r){return this.getHSL(fe),fe.h+=t,fe.s+=e,fe.l+=r,this.setHSL(fe.h,fe.s,fe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(fe),t.getHSL(Mn);const r=ur(fe.h,Mn.h,e),o=ur(fe.s,Mn.s,e),c=ur(fe.l,Mn.l,e);return this.setHSL(r,o,c),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}yt.NAMES=Fo;let Pi;class No{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Xn("canvas")),Pi.width=t.width,Pi.height=t.height;const r=Pi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xn("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),c=o.data;for(let m=0;m<c.length;m++)c[m]=fi(c[m]/255)*255;return r.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(fi(e[r]/255)*255):e[r]=fi(e[r]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Uo{constructor(t=null){this.isSource=!0,this.uuid=_n(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let m=0,d=o.length;m<d;m++)o[m].isDataTexture?c.push(pr(o[m].image)):c.push(pr(o[m]))}else c=pr(o);r.url=c}return e||(t.images[this.uuid]=r),r}}function pr(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap?No.getDataURL(h):h.data?{data:Array.from(h.data),width:h.width,height:h.height,type:h.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let If=0;class ce extends bi{constructor(t=ce.DEFAULT_IMAGE,e=ce.DEFAULT_MAPPING,r=ve,o=ve,c=ae,m=Kn,d=Ce,A=_i,_=1,p=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=_n(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=m,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=A,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ro)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case ve:t.x=t.x<0?0:1;break;case Hr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case ve:t.y=t.y<0?0:1;break;case Hr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}ce.DEFAULT_IMAGE=null;ce.DEFAULT_MAPPING=Ro;class Ot{constructor(t=0,e=0,r=0,o=1){Ot.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,o){return this.x=t,this.y=e,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,c=this.w,m=t.elements;return this.x=m[0]*e+m[4]*r+m[8]*o+m[12]*c,this.y=m[1]*e+m[5]*r+m[9]*o+m[13]*c,this.z=m[2]*e+m[6]*r+m[10]*o+m[14]*c,this.w=m[3]*e+m[7]*r+m[11]*o+m[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,o,c;const A=t.elements,_=A[0],p=A[4],s=A[8],y=A[1],b=A[5],I=A[9],w=A[2],x=A[6],L=A[10];if(Math.abs(p-y)<.01&&Math.abs(s-w)<.01&&Math.abs(I-x)<.01){if(Math.abs(p+y)<.1&&Math.abs(s+w)<.1&&Math.abs(I+x)<.1&&Math.abs(_+b+L-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(_+1)/2,P=(b+1)/2,k=(L+1)/2,Y=(p+y)/4,t0=(s+w)/4,N=(I+x)/4;return M>P&&M>k?M<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(M),o=Y/r,c=t0/r):P>k?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=Y/o,c=N/o):k<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(k),r=t0/c,o=N/c),this.set(r,o,c,e),this}let U=Math.sqrt((x-I)*(x-I)+(s-w)*(s-w)+(y-p)*(y-p));return Math.abs(U)<.001&&(U=1),this.x=(x-I)/U,this.y=(s-w)/U,this.z=(y-p)/U,this.w=Math.acos((_+b+L-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vi extends bi{constructor(t,e,r={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ot(0,0,t,e),this.scissorTest=!1,this.viewport=new Ot(0,0,t,e);const o={width:t,height:e,depth:1};this.texture=new ce(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:ae,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(t,e,r=1){(this.width!==t||this.height!==e||this.depth!==r)&&(this.width=t,this.height=e,this.depth=r,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Uo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jo extends ce{constructor(t=null,e=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pf extends ce{constructor(t=null,e=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=ve,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yi{constructor(t=0,e=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=o}static slerp(t,e,r,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(t,e,o)}static slerpFlat(t,e,r,o,c,m,d){let A=r[o+0],_=r[o+1],p=r[o+2],s=r[o+3];const y=c[m+0],b=c[m+1],I=c[m+2],w=c[m+3];if(d===0){t[e+0]=A,t[e+1]=_,t[e+2]=p,t[e+3]=s;return}if(d===1){t[e+0]=y,t[e+1]=b,t[e+2]=I,t[e+3]=w;return}if(s!==w||A!==y||_!==b||p!==I){let x=1-d;const L=A*y+_*b+p*I+s*w,U=L>=0?1:-1,M=1-L*L;if(M>Number.EPSILON){const k=Math.sqrt(M),Y=Math.atan2(k,L*U);x=Math.sin(x*Y)/k,d=Math.sin(d*Y)/k}const P=d*U;if(A=A*x+y*P,_=_*x+b*P,p=p*x+I*P,s=s*x+w*P,x===1-d){const k=1/Math.sqrt(A*A+_*_+p*p+s*s);A*=k,_*=k,p*=k,s*=k}}t[e]=A,t[e+1]=_,t[e+2]=p,t[e+3]=s}static multiplyQuaternionsFlat(t,e,r,o,c,m){const d=r[o],A=r[o+1],_=r[o+2],p=r[o+3],s=c[m],y=c[m+1],b=c[m+2],I=c[m+3];return t[e]=d*I+p*s+A*b-_*y,t[e+1]=A*I+p*y+_*s-d*b,t[e+2]=_*I+p*b+d*y-A*s,t[e+3]=p*I-d*s-A*y-_*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,o){return this._x=t,this._y=e,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=t._x,o=t._y,c=t._z,m=t._order,d=Math.cos,A=Math.sin,_=d(r/2),p=d(o/2),s=d(c/2),y=A(r/2),b=A(o/2),I=A(c/2);switch(m){case"XYZ":this._x=y*p*s+_*b*I,this._y=_*b*s-y*p*I,this._z=_*p*I+y*b*s,this._w=_*p*s-y*b*I;break;case"YXZ":this._x=y*p*s+_*b*I,this._y=_*b*s-y*p*I,this._z=_*p*I-y*b*s,this._w=_*p*s+y*b*I;break;case"ZXY":this._x=y*p*s-_*b*I,this._y=_*b*s+y*p*I,this._z=_*p*I+y*b*s,this._w=_*p*s-y*b*I;break;case"ZYX":this._x=y*p*s-_*b*I,this._y=_*b*s+y*p*I,this._z=_*p*I-y*b*s,this._w=_*p*s+y*b*I;break;case"YZX":this._x=y*p*s+_*b*I,this._y=_*b*s+y*p*I,this._z=_*p*I-y*b*s,this._w=_*p*s-y*b*I;break;case"XZY":this._x=y*p*s-_*b*I,this._y=_*b*s-y*p*I,this._z=_*p*I+y*b*s,this._w=_*p*s+y*b*I;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],o=e[4],c=e[8],m=e[1],d=e[5],A=e[9],_=e[2],p=e[6],s=e[10],y=r+d+s;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(p-A)*b,this._y=(c-_)*b,this._z=(m-o)*b}else if(r>d&&r>s){const b=2*Math.sqrt(1+r-d-s);this._w=(p-A)/b,this._x=.25*b,this._y=(o+m)/b,this._z=(c+_)/b}else if(d>s){const b=2*Math.sqrt(1+d-r-s);this._w=(c-_)/b,this._x=(o+m)/b,this._y=.25*b,this._z=(A+p)/b}else{const b=2*Math.sqrt(1+s-r-d);this._w=(m-o)/b,this._x=(c+_)/b,this._y=(A+p)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,e/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,o=t._y,c=t._z,m=t._w,d=e._x,A=e._y,_=e._z,p=e._w;return this._x=r*p+m*d+o*_-c*A,this._y=o*p+m*A+c*d-r*_,this._z=c*p+m*_+r*A-o*d,this._w=m*p-r*d-o*A-c*_,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const r=this._x,o=this._y,c=this._z,m=this._w;let d=m*t._w+r*t._x+o*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=m,this._x=r,this._y=o,this._z=c,this;const A=1-d*d;if(A<=Number.EPSILON){const b=1-e;return this._w=b*m+e*this._w,this._x=b*r+e*this._x,this._y=b*o+e*this._y,this._z=b*c+e*this._z,this.normalize(),this._onChangeCallback(),this}const _=Math.sqrt(A),p=Math.atan2(_,d),s=Math.sin((1-e)*p)/_,y=Math.sin(e*p)/_;return this._w=m*s+this._w*y,this._x=r*s+this._x*y,this._y=o*s+this._y*y,this._z=c*s+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=Math.random(),e=Math.sqrt(1-t),r=Math.sqrt(t),o=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(e*Math.cos(o),r*Math.sin(c),r*Math.cos(c),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,r=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(js.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(js.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[3]*r+c[6]*o,this.y=c[1]*e+c[4]*r+c[7]*o,this.z=c[2]*e+c[5]*r+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,c=t.elements,m=1/(c[3]*e+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*e+c[4]*r+c[8]*o+c[12])*m,this.y=(c[1]*e+c[5]*r+c[9]*o+c[13])*m,this.z=(c[2]*e+c[6]*r+c[10]*o+c[14])*m,this}applyQuaternion(t){const e=this.x,r=this.y,o=this.z,c=t.x,m=t.y,d=t.z,A=t.w,_=A*e+m*o-d*r,p=A*r+d*e-c*o,s=A*o+c*r-m*e,y=-c*e-m*r-d*o;return this.x=_*A+y*-c+p*-d-s*-m,this.y=p*A+y*-m+s*-c-_*-d,this.z=s*A+y*-d+_*-m-p*-c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,o=this.z,c=t.elements;return this.x=c[0]*e+c[4]*r+c[8]*o,this.y=c[1]*e+c[5]*r+c[9]*o,this.z=c[2]*e+c[6]*r+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,o=t.y,c=t.z,m=e.x,d=e.y,A=e.z;return this.x=o*A-c*d,this.y=c*m-r*A,this.z=r*d-o*m,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(Kt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return e*e+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const o=Math.sin(e)*t;return this.x=o*Math.sin(r),this.y=Math.cos(e)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,r=Math.sqrt(1-t**2);return this.x=r*Math.cos(e),this.y=r*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new K,js=new yi;class An{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,r=1/0,o=1/0,c=-1/0,m=-1/0,d=-1/0;for(let A=0,_=t.length;A<_;A+=3){const p=t[A],s=t[A+1],y=t[A+2];p<e&&(e=p),s<r&&(r=s),y<o&&(o=y),p>c&&(c=p),s>m&&(m=s),y>d&&(d=y)}return this.min.set(e,r,o),this.max.set(c,m,d),this}setFromBufferAttribute(t){let e=1/0,r=1/0,o=1/0,c=-1/0,m=-1/0,d=-1/0;for(let A=0,_=t.count;A<_;A++){const p=t.getX(A),s=t.getY(A),y=t.getZ(A);p<e&&(e=p),s<r&&(r=s),y<o&&(o=y),p>c&&(c=p),s>m&&(m=s),y>d&&(d=y)}return this.min.set(e,r,o),this.max.set(c,m,d),this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0)if(e&&r.attributes!=null&&r.attributes.position!==void 0){const c=r.attributes.position;for(let m=0,d=c.count;m<d;m++)si.fromBufferAttribute(c,m).applyMatrix4(t.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),gr.copy(r.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr);const o=t.children;for(let c=0,m=o.length;c<m;c++)this.expandByObject(o[c],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(an),Cn.subVectors(this.max,an),Di.subVectors(t.a,an),Li.subVectors(t.b,an),Ri.subVectors(t.c,an),Xe.subVectors(Li,Di),Qe.subVectors(Ri,Li),oi.subVectors(Di,Ri);let e=[0,-Xe.z,Xe.y,0,-Qe.z,Qe.y,0,-oi.z,oi.y,Xe.z,0,-Xe.x,Qe.z,0,-Qe.x,oi.z,0,-oi.x,-Xe.y,Xe.x,0,-Qe.y,Qe.x,0,-oi.y,oi.x,0];return!_r(e,Di,Li,Ri,Cn)||(e=[1,0,0,0,1,0,0,0,1],!_r(e,Di,Li,Ri,Cn))?!1:(En.crossVectors(Xe,Qe),e=[En.x,En.y,En.z],_r(e,Di,Li,Ri,Cn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return si.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(si).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Re[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Re[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Re[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Re[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Re[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Re[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Re[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Re[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Re),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Re=[new K,new K,new K,new K,new K,new K,new K,new K],si=new K,gr=new An,Di=new K,Li=new K,Ri=new K,Xe=new K,Qe=new K,oi=new K,an=new K,Cn=new K,En=new K,ai=new K;function _r(h,t,e,r,o){for(let c=0,m=h.length-3;c<=m;c+=3){ai.fromArray(h,c);const d=o.x*Math.abs(ai.x)+o.y*Math.abs(ai.y)+o.z*Math.abs(ai.z),A=t.dot(ai),_=e.dot(ai),p=r.dot(ai);if(Math.max(-Math.max(A,_,p),Math.min(A,_,p))>d)return!1}return!0}const Df=new An,ks=new K,Tn=new K,Ar=new K;class Kr{constructor(t=new K,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):Df.setFromPoints(t).getCenter(r);let o=0;for(let c=0,m=t.length;c<m;c++)o=Math.max(o,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Ar.subVectors(t,this.center);const e=Ar.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),o=(r-this.radius)*.5;this.center.add(Ar.multiplyScalar(o/r)),this.radius+=o}return this}union(t){return this.center.equals(t.center)===!0?Tn.set(0,0,1).multiplyScalar(t.radius):Tn.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(ks.copy(t.center).add(Tn)),this.expandByPoint(ks.copy(t.center).sub(Tn)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ze=new K,vr=new K,In=new K,Ye=new K,yr=new K,Pn=new K,xr=new K;class ko{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ze.copy(this.direction).multiplyScalar(e).add(this.origin),ze.distanceToSquared(t))}distanceSqToSegment(t,e,r,o){vr.copy(t).add(e).multiplyScalar(.5),In.copy(e).sub(t).normalize(),Ye.copy(this.origin).sub(vr);const c=t.distanceTo(e)*.5,m=-this.direction.dot(In),d=Ye.dot(this.direction),A=-Ye.dot(In),_=Ye.lengthSq(),p=Math.abs(1-m*m);let s,y,b,I;if(p>0)if(s=m*A-d,y=m*d-A,I=c*p,s>=0)if(y>=-I)if(y<=I){const w=1/p;s*=w,y*=w,b=s*(s+m*y+2*d)+y*(m*s+y+2*A)+_}else y=c,s=Math.max(0,-(m*y+d)),b=-s*s+y*(y+2*A)+_;else y=-c,s=Math.max(0,-(m*y+d)),b=-s*s+y*(y+2*A)+_;else y<=-I?(s=Math.max(0,-(-m*c+d)),y=s>0?-c:Math.min(Math.max(-c,-A),c),b=-s*s+y*(y+2*A)+_):y<=I?(s=0,y=Math.min(Math.max(-c,-A),c),b=y*(y+2*A)+_):(s=Math.max(0,-(m*c+d)),y=s>0?c:Math.min(Math.max(-c,-A),c),b=-s*s+y*(y+2*A)+_);else y=m>0?-c:c,s=Math.max(0,-(m*y+d)),b=-s*s+y*(y+2*A)+_;return r&&r.copy(this.direction).multiplyScalar(s).add(this.origin),o&&o.copy(In).multiplyScalar(y).add(vr),b}intersectSphere(t,e){ze.subVectors(t.center,this.origin);const r=ze.dot(this.direction),o=ze.dot(ze)-r*r,c=t.radius*t.radius;if(o>c)return null;const m=Math.sqrt(c-o),d=r-m,A=r+m;return d<0&&A<0?null:d<0?this.at(A,e):this.at(d,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,o,c,m,d,A;const _=1/this.direction.x,p=1/this.direction.y,s=1/this.direction.z,y=this.origin;return _>=0?(r=(t.min.x-y.x)*_,o=(t.max.x-y.x)*_):(r=(t.max.x-y.x)*_,o=(t.min.x-y.x)*_),p>=0?(c=(t.min.y-y.y)*p,m=(t.max.y-y.y)*p):(c=(t.max.y-y.y)*p,m=(t.min.y-y.y)*p),r>m||c>o||((c>r||r!==r)&&(r=c),(m<o||o!==o)&&(o=m),s>=0?(d=(t.min.z-y.z)*s,A=(t.max.z-y.z)*s):(d=(t.max.z-y.z)*s,A=(t.min.z-y.z)*s),r>A||d>o)||((d>r||r!==r)&&(r=d),(A<o||o!==o)&&(o=A),o<0)?null:this.at(r>=0?r:o,e)}intersectsBox(t){return this.intersectBox(t,ze)!==null}intersectTriangle(t,e,r,o,c){yr.subVectors(e,t),Pn.subVectors(r,t),xr.crossVectors(yr,Pn);let m=this.direction.dot(xr),d;if(m>0){if(o)return null;d=1}else if(m<0)d=-1,m=-m;else return null;Ye.subVectors(this.origin,t);const A=d*this.direction.dot(Pn.crossVectors(Ye,Pn));if(A<0)return null;const _=d*this.direction.dot(yr.cross(Ye));if(_<0||A+_>m)return null;const p=-d*Ye.dot(xr);return p<0?null:this.at(p/m,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,r,o,c,m,d,A,_,p,s,y,b,I,w,x){const L=this.elements;return L[0]=t,L[4]=e,L[8]=r,L[12]=o,L[1]=c,L[5]=m,L[9]=d,L[13]=A,L[2]=_,L[6]=p,L[10]=s,L[14]=y,L[3]=b,L[7]=I,L[11]=w,L[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,r=t.elements,o=1/zi.setFromMatrixColumn(t,0).length(),c=1/zi.setFromMatrixColumn(t,1).length(),m=1/zi.setFromMatrixColumn(t,2).length();return e[0]=r[0]*o,e[1]=r[1]*o,e[2]=r[2]*o,e[3]=0,e[4]=r[4]*c,e[5]=r[5]*c,e[6]=r[6]*c,e[7]=0,e[8]=r[8]*m,e[9]=r[9]*m,e[10]=r[10]*m,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,r=t.x,o=t.y,c=t.z,m=Math.cos(r),d=Math.sin(r),A=Math.cos(o),_=Math.sin(o),p=Math.cos(c),s=Math.sin(c);if(t.order==="XYZ"){const y=m*p,b=m*s,I=d*p,w=d*s;e[0]=A*p,e[4]=-A*s,e[8]=_,e[1]=b+I*_,e[5]=y-w*_,e[9]=-d*A,e[2]=w-y*_,e[6]=I+b*_,e[10]=m*A}else if(t.order==="YXZ"){const y=A*p,b=A*s,I=_*p,w=_*s;e[0]=y+w*d,e[4]=I*d-b,e[8]=m*_,e[1]=m*s,e[5]=m*p,e[9]=-d,e[2]=b*d-I,e[6]=w+y*d,e[10]=m*A}else if(t.order==="ZXY"){const y=A*p,b=A*s,I=_*p,w=_*s;e[0]=y-w*d,e[4]=-m*s,e[8]=I+b*d,e[1]=b+I*d,e[5]=m*p,e[9]=w-y*d,e[2]=-m*_,e[6]=d,e[10]=m*A}else if(t.order==="ZYX"){const y=m*p,b=m*s,I=d*p,w=d*s;e[0]=A*p,e[4]=I*_-b,e[8]=y*_+w,e[1]=A*s,e[5]=w*_+y,e[9]=b*_-I,e[2]=-_,e[6]=d*A,e[10]=m*A}else if(t.order==="YZX"){const y=m*A,b=m*_,I=d*A,w=d*_;e[0]=A*p,e[4]=w-y*s,e[8]=I*s+b,e[1]=s,e[5]=m*p,e[9]=-d*p,e[2]=-_*p,e[6]=b*s+I,e[10]=y-w*s}else if(t.order==="XZY"){const y=m*A,b=m*_,I=d*A,w=d*_;e[0]=A*p,e[4]=-s,e[8]=_*p,e[1]=y*s+w,e[5]=m*p,e[9]=b*s-I,e[2]=I*s-b,e[6]=d*p,e[10]=w*s+y}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lf,t,Rf)}lookAt(t,e,r){const o=this.elements;return ee.subVectors(t,e),ee.lengthSq()===0&&(ee.z=1),ee.normalize(),Je.crossVectors(r,ee),Je.lengthSq()===0&&(Math.abs(r.z)===1?ee.x+=1e-4:ee.z+=1e-4,ee.normalize(),Je.crossVectors(r,ee)),Je.normalize(),Dn.crossVectors(ee,Je),o[0]=Je.x,o[4]=Dn.x,o[8]=ee.x,o[1]=Je.y,o[5]=Dn.y,o[9]=ee.y,o[2]=Je.z,o[6]=Dn.z,o[10]=ee.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,c=this.elements,m=r[0],d=r[4],A=r[8],_=r[12],p=r[1],s=r[5],y=r[9],b=r[13],I=r[2],w=r[6],x=r[10],L=r[14],U=r[3],M=r[7],P=r[11],k=r[15],Y=o[0],t0=o[4],N=o[8],q=o[12],l0=o[1],n0=o[5],b0=o[9],P0=o[13],J=o[2],c0=o[6],o0=o[10],r0=o[14],d0=o[3],e0=o[7],Z=o[11],C0=o[15];return c[0]=m*Y+d*l0+A*J+_*d0,c[4]=m*t0+d*n0+A*c0+_*e0,c[8]=m*N+d*b0+A*o0+_*Z,c[12]=m*q+d*P0+A*r0+_*C0,c[1]=p*Y+s*l0+y*J+b*d0,c[5]=p*t0+s*n0+y*c0+b*e0,c[9]=p*N+s*b0+y*o0+b*Z,c[13]=p*q+s*P0+y*r0+b*C0,c[2]=I*Y+w*l0+x*J+L*d0,c[6]=I*t0+w*n0+x*c0+L*e0,c[10]=I*N+w*b0+x*o0+L*Z,c[14]=I*q+w*P0+x*r0+L*C0,c[3]=U*Y+M*l0+P*J+k*d0,c[7]=U*t0+M*n0+P*c0+k*e0,c[11]=U*N+M*b0+P*o0+k*Z,c[15]=U*q+M*P0+P*r0+k*C0,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],o=t[8],c=t[12],m=t[1],d=t[5],A=t[9],_=t[13],p=t[2],s=t[6],y=t[10],b=t[14],I=t[3],w=t[7],x=t[11],L=t[15];return I*(+c*A*s-o*_*s-c*d*y+r*_*y+o*d*b-r*A*b)+w*(+e*A*b-e*_*y+c*m*y-o*m*b+o*_*p-c*A*p)+x*(+e*_*s-e*d*b-c*m*s+r*m*b+c*d*p-r*_*p)+L*(-o*d*p-e*A*s+e*d*y+o*m*s-r*m*y+r*A*p)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],c=t[3],m=t[4],d=t[5],A=t[6],_=t[7],p=t[8],s=t[9],y=t[10],b=t[11],I=t[12],w=t[13],x=t[14],L=t[15],U=s*x*_-w*y*_+w*A*b-d*x*b-s*A*L+d*y*L,M=I*y*_-p*x*_-I*A*b+m*x*b+p*A*L-m*y*L,P=p*w*_-I*s*_+I*d*b-m*w*b-p*d*L+m*s*L,k=I*s*A-p*w*A-I*d*y+m*w*y+p*d*x-m*s*x,Y=e*U+r*M+o*P+c*k;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const t0=1/Y;return t[0]=U*t0,t[1]=(w*y*c-s*x*c-w*o*b+r*x*b+s*o*L-r*y*L)*t0,t[2]=(d*x*c-w*A*c+w*o*_-r*x*_-d*o*L+r*A*L)*t0,t[3]=(s*A*c-d*y*c-s*o*_+r*y*_+d*o*b-r*A*b)*t0,t[4]=M*t0,t[5]=(p*x*c-I*y*c+I*o*b-e*x*b-p*o*L+e*y*L)*t0,t[6]=(I*A*c-m*x*c-I*o*_+e*x*_+m*o*L-e*A*L)*t0,t[7]=(m*y*c-p*A*c+p*o*_-e*y*_-m*o*b+e*A*b)*t0,t[8]=P*t0,t[9]=(I*s*c-p*w*c-I*r*b+e*w*b+p*r*L-e*s*L)*t0,t[10]=(m*w*c-I*d*c+I*r*_-e*w*_-m*r*L+e*d*L)*t0,t[11]=(p*d*c-m*s*c-p*r*_+e*s*_+m*r*b-e*d*b)*t0,t[12]=k*t0,t[13]=(p*w*o-I*s*o+I*r*y-e*w*y-p*r*x+e*s*x)*t0,t[14]=(I*d*o-m*w*o-I*r*A+e*w*A+m*r*x-e*d*x)*t0,t[15]=(m*s*o-p*d*o+p*r*A-e*s*A-m*r*y+e*d*y)*t0,this}scale(t){const e=this.elements,r=t.x,o=t.y,c=t.z;return e[0]*=r,e[4]*=o,e[8]*=c,e[1]*=r,e[5]*=o,e[9]*=c,e[2]*=r,e[6]*=o,e[10]*=c,e[3]*=r,e[7]*=o,e[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,o))}makeTranslation(t,e,r){return this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),o=Math.sin(e),c=1-r,m=t.x,d=t.y,A=t.z,_=c*m,p=c*d;return this.set(_*m+r,_*d-o*A,_*A+o*d,0,_*d+o*A,p*d+r,p*A-o*m,0,_*A-o*d,p*A+o*m,c*A*A+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,o,c,m){return this.set(1,r,c,0,t,1,m,0,e,o,1,0,0,0,0,1),this}compose(t,e,r){const o=this.elements,c=e._x,m=e._y,d=e._z,A=e._w,_=c+c,p=m+m,s=d+d,y=c*_,b=c*p,I=c*s,w=m*p,x=m*s,L=d*s,U=A*_,M=A*p,P=A*s,k=r.x,Y=r.y,t0=r.z;return o[0]=(1-(w+L))*k,o[1]=(b+P)*k,o[2]=(I-M)*k,o[3]=0,o[4]=(b-P)*Y,o[5]=(1-(y+L))*Y,o[6]=(x+U)*Y,o[7]=0,o[8]=(I+M)*t0,o[9]=(x-U)*t0,o[10]=(1-(y+w))*t0,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,r){const o=this.elements;let c=zi.set(o[0],o[1],o[2]).length();const m=zi.set(o[4],o[5],o[6]).length(),d=zi.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],ge.copy(this);const _=1/c,p=1/m,s=1/d;return ge.elements[0]*=_,ge.elements[1]*=_,ge.elements[2]*=_,ge.elements[4]*=p,ge.elements[5]*=p,ge.elements[6]*=p,ge.elements[8]*=s,ge.elements[9]*=s,ge.elements[10]*=s,e.setFromRotationMatrix(ge),r.x=c,r.y=m,r.z=d,this}makePerspective(t,e,r,o,c,m){m===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const d=this.elements,A=2*c/(e-t),_=2*c/(r-o),p=(e+t)/(e-t),s=(r+o)/(r-o),y=-(m+c)/(m-c),b=-2*m*c/(m-c);return d[0]=A,d[4]=0,d[8]=p,d[12]=0,d[1]=0,d[5]=_,d[9]=s,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=b,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,r,o,c,m){const d=this.elements,A=1/(e-t),_=1/(r-o),p=1/(m-c),s=(e+t)*A,y=(r+o)*_,b=(m+c)*p;return d[0]=2*A,d[4]=0,d[8]=0,d[12]=-s,d[1]=0,d[5]=2*_,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=-2*p,d[14]=-b,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<16;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const zi=new K,ge=new Nt,Lf=new K(0,0,0),Rf=new K(1,1,1),Je=new K,Dn=new K,ee=new K,Gs=new Nt,Hs=new yi;class vn{constructor(t=0,e=0,r=0,o=vn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,o=this._order){return this._x=t,this._y=e,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const o=t.elements,c=o[0],m=o[4],d=o[8],A=o[1],_=o[5],p=o[9],s=o[2],y=o[6],b=o[10];switch(e){case"XYZ":this._y=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,b),this._z=Math.atan2(-m,c)):(this._x=Math.atan2(y,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(A,_)):(this._y=Math.atan2(-s,c),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-s,b),this._z=Math.atan2(-m,_)):(this._y=0,this._z=Math.atan2(A,c));break;case"ZYX":this._y=Math.asin(-Kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(A,c)):(this._x=0,this._z=Math.atan2(-m,_));break;case"YZX":this._z=Math.asin(Kt(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(-p,_),this._y=Math.atan2(-s,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Kt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(y,_),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-p,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return Gs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gs,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hs.setFromEuler(this),this.setFromQuaternion(Hs,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}vn.DefaultOrder="XYZ";vn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Zr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const Ws=new K,Oi=new yi,Oe=new Nt,Ln=new K,ln=new K,Of=new K,Vf=new yi,qs=new K(1,0,0),Xs=new K(0,1,0),Qs=new K(0,0,1),Ff={type:"added"},Ys={type:"removed"};class he extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=_n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DefaultUp.clone();const t=new K,e=new vn,r=new yi,o=new K(1,1,1);function c(){r.setFromEuler(e,!1)}function m(){e.setFromQuaternion(r,void 0,!1)}e._onChange(c),r._onChange(m),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Nt},normalMatrix:{value:new le}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=he.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(qs,t)}rotateY(t){return this.rotateOnAxis(Xs,t)}rotateZ(t){return this.rotateOnAxis(Qs,t)}translateOnAxis(t,e){return Ws.copy(t).applyQuaternion(this.quaternion),this.position.add(Ws.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qs,t)}translateY(t){return this.translateOnAxis(Xs,t)}translateZ(t){return this.translateOnAxis(Qs,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Oe.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?Ln.copy(t):Ln.set(t,e,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ln.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oe.lookAt(ln,Ln,this.up):Oe.lookAt(Ln,ln,this.up),this.quaternion.setFromRotationMatrix(Oe),o&&(Oe.extractRotation(o.matrixWorld),Oi.setFromRotationMatrix(Oe),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ys)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Ys)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Oe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oe),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,o=this.children.length;r<o;r++){const m=this.children[r].getObjectByProperty(t,e);if(m!==void 0)return m}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ln,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let c=0,m=o.length;c<m;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function c(d,A){return d[A.uuid]===void 0&&(d[A.uuid]=A.toJSON(t)),A.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const A=d.shapes;if(Array.isArray(A))for(let _=0,p=A.length;_<p;_++){const s=A[_];c(t.shapes,s)}else c(t.shapes,A)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let A=0,_=this.material.length;A<_;A++)d.push(c(t.materials,this.material[A]));o.material=d}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const A=this.animations[d];o.animations.push(c(t.animations,A))}}if(e){const d=m(t.geometries),A=m(t.materials),_=m(t.textures),p=m(t.images),s=m(t.shapes),y=m(t.skeletons),b=m(t.animations),I=m(t.nodes);d.length>0&&(r.geometries=d),A.length>0&&(r.materials=A),_.length>0&&(r.textures=_),p.length>0&&(r.images=p),s.length>0&&(r.shapes=s),y.length>0&&(r.skeletons=y),b.length>0&&(r.animations=b),I.length>0&&(r.nodes=I)}return r.object=o,r;function m(d){const A=[];for(const _ in d){const p=d[_];delete p.metadata,A.push(p)}return A}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}he.DefaultUp=new K(0,1,0);he.DefaultMatrixAutoUpdate=!0;const _e=new K,Ve=new K,br=new K,Fe=new K,Vi=new K,Fi=new K,Js=new K,wr=new K,Sr=new K,Mr=new K;class Ue{constructor(t=new K,e=new K,r=new K){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,o){o.subVectors(r,e),_e.subVectors(t,e),o.cross(_e);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,e,r,o,c){_e.subVectors(o,e),Ve.subVectors(r,e),br.subVectors(t,e);const m=_e.dot(_e),d=_e.dot(Ve),A=_e.dot(br),_=Ve.dot(Ve),p=Ve.dot(br),s=m*_-d*d;if(s===0)return c.set(-2,-1,-1);const y=1/s,b=(_*A-d*p)*y,I=(m*p-d*A)*y;return c.set(1-b-I,I,b)}static containsPoint(t,e,r,o){return this.getBarycoord(t,e,r,o,Fe),Fe.x>=0&&Fe.y>=0&&Fe.x+Fe.y<=1}static getUV(t,e,r,o,c,m,d,A){return this.getBarycoord(t,e,r,o,Fe),A.set(0,0),A.addScaledVector(c,Fe.x),A.addScaledVector(m,Fe.y),A.addScaledVector(d,Fe.z),A}static isFrontFacing(t,e,r,o){return _e.subVectors(r,e),Ve.subVectors(t,e),_e.cross(Ve).dot(o)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,o){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,r,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _e.subVectors(this.c,this.b),Ve.subVectors(this.a,this.b),_e.cross(Ve).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ue.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ue.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,r,o,c){return Ue.getUV(t,this.a,this.b,this.c,e,r,o,c)}containsPoint(t){return Ue.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ue.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,o=this.b,c=this.c;let m,d;Vi.subVectors(o,r),Fi.subVectors(c,r),wr.subVectors(t,r);const A=Vi.dot(wr),_=Fi.dot(wr);if(A<=0&&_<=0)return e.copy(r);Sr.subVectors(t,o);const p=Vi.dot(Sr),s=Fi.dot(Sr);if(p>=0&&s<=p)return e.copy(o);const y=A*s-p*_;if(y<=0&&A>=0&&p<=0)return m=A/(A-p),e.copy(r).addScaledVector(Vi,m);Mr.subVectors(t,c);const b=Vi.dot(Mr),I=Fi.dot(Mr);if(I>=0&&b<=I)return e.copy(c);const w=b*_-A*I;if(w<=0&&_>=0&&I<=0)return d=_/(_-I),e.copy(r).addScaledVector(Fi,d);const x=p*I-b*s;if(x<=0&&s-p>=0&&b-I>=0)return Js.subVectors(c,o),d=(s-p)/(s-p+(b-I)),e.copy(o).addScaledVector(Js,d);const L=1/(x+w+y);return m=w*L,d=y*L,e.copy(r).addScaledVector(Vi,m).addScaledVector(Fi,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Nf=0;class yn extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=_n(),this.name="",this.type="Material",this.blending=Xi,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Po,this.blendDst=Do,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===zp;continue}const o=this[e];if(o===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(r.blending=this.blending),this.side!==fn&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function o(c){const m=[];for(const d in c){const A=c[d];delete A.metadata,m.push(A)}return m}if(e){const c=o(t.textures),m=o(t.images);c.length>0&&(r.textures=c),m.length>0&&(r.images=m)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const o=e.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=e[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xn extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pt=new K,Rn=new lt;class Ee{constructor(t,e,r){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r===!0,this.usage=Vs,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=e.array[r+o];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let m=t[o];m===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),m=new yt),e[r++]=m.r,e[r++]=m.g,e[r++]=m.b}return this}copyVector2sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let m=t[o];m===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),m=new lt),e[r++]=m.x,e[r++]=m.y}return this}copyVector3sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let m=t[o];m===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),m=new K),e[r++]=m.x,e[r++]=m.y,e[r++]=m.z}return this}copyVector4sArray(t){const e=this.array;let r=0;for(let o=0,c=t.length;o<c;o++){let m=t[o];m===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),m=new Ot),e[r++]=m.x,e[r++]=m.y,e[r++]=m.z,e[r++]=m.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix3(t),this.setXY(e,Rn.x,Rn.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Pt.fromBufferAttribute(this,e),Pt.applyMatrix3(t),this.setXYZ(e,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Pt.fromBufferAttribute(this,e),Pt.applyMatrix4(t),this.setXYZ(e,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Pt.fromBufferAttribute(this,e),Pt.applyNormalMatrix(t),this.setXYZ(e,Pt.x,Pt.y,Pt.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Pt.fromBufferAttribute(this,e),Pt.transformDirection(t),this.setXYZ(e,Pt.x,Pt.y,Pt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,o){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,e,r,o,c){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vs&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Go extends Ee{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class Ho extends Ee{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class gi extends Ee{constructor(t,e,r){super(new Float32Array(t),e,r)}}let Uf=0;const oe=new Nt,Br=new he,Ni=new K,ie=new An,cn=new An,zt=new K;class wi extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=_n(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vo(t)?Ho:Go)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new le().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oe.makeRotationFromQuaternion(t),this.applyMatrix4(oe),this}rotateX(t){return oe.makeRotationX(t),this.applyMatrix4(oe),this}rotateY(t){return oe.makeRotationY(t),this.applyMatrix4(oe),this}rotateZ(t){return oe.makeRotationZ(t),this.applyMatrix4(oe),this}translate(t,e,r){return oe.makeTranslation(t,e,r),this.applyMatrix4(oe),this}scale(t,e,r){return oe.makeScale(t,e,r),this.applyMatrix4(oe),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let r=0,o=t.length;r<o;r++){const c=t[r];e.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new gi(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const c=e[r];ie.setFromBufferAttribute(c),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,ie.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,ie.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(ie.min),this.boundingBox.expandByPoint(ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(t){const r=this.boundingSphere.center;if(ie.setFromBufferAttribute(t),e)for(let c=0,m=e.length;c<m;c++){const d=e[c];cn.setFromBufferAttribute(d),this.morphTargetsRelative?(zt.addVectors(ie.min,cn.min),ie.expandByPoint(zt),zt.addVectors(ie.max,cn.max),ie.expandByPoint(zt)):(ie.expandByPoint(cn.min),ie.expandByPoint(cn.max))}ie.getCenter(r);let o=0;for(let c=0,m=t.count;c<m;c++)zt.fromBufferAttribute(t,c),o=Math.max(o,r.distanceToSquared(zt));if(e)for(let c=0,m=e.length;c<m;c++){const d=e[c],A=this.morphTargetsRelative;for(let _=0,p=d.count;_<p;_++)zt.fromBufferAttribute(d,_),A&&(Ni.fromBufferAttribute(t,_),zt.add(Ni)),o=Math.max(o,r.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.array,o=e.position.array,c=e.normal.array,m=e.uv.array,d=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*d),4));const A=this.getAttribute("tangent").array,_=[],p=[];for(let l0=0;l0<d;l0++)_[l0]=new K,p[l0]=new K;const s=new K,y=new K,b=new K,I=new lt,w=new lt,x=new lt,L=new K,U=new K;function M(l0,n0,b0){s.fromArray(o,l0*3),y.fromArray(o,n0*3),b.fromArray(o,b0*3),I.fromArray(m,l0*2),w.fromArray(m,n0*2),x.fromArray(m,b0*2),y.sub(s),b.sub(s),w.sub(I),x.sub(I);const P0=1/(w.x*x.y-x.x*w.y);!isFinite(P0)||(L.copy(y).multiplyScalar(x.y).addScaledVector(b,-w.y).multiplyScalar(P0),U.copy(b).multiplyScalar(w.x).addScaledVector(y,-x.x).multiplyScalar(P0),_[l0].add(L),_[n0].add(L),_[b0].add(L),p[l0].add(U),p[n0].add(U),p[b0].add(U))}let P=this.groups;P.length===0&&(P=[{start:0,count:r.length}]);for(let l0=0,n0=P.length;l0<n0;++l0){const b0=P[l0],P0=b0.start,J=b0.count;for(let c0=P0,o0=P0+J;c0<o0;c0+=3)M(r[c0+0],r[c0+1],r[c0+2])}const k=new K,Y=new K,t0=new K,N=new K;function q(l0){t0.fromArray(c,l0*3),N.copy(t0);const n0=_[l0];k.copy(n0),k.sub(t0.multiplyScalar(t0.dot(n0))).normalize(),Y.crossVectors(N,n0);const P0=Y.dot(p[l0])<0?-1:1;A[l0*4]=k.x,A[l0*4+1]=k.y,A[l0*4+2]=k.z,A[l0*4+3]=P0}for(let l0=0,n0=P.length;l0<n0;++l0){const b0=P[l0],P0=b0.start,J=b0.count;for(let c0=P0,o0=P0+J;c0<o0;c0+=3)q(r[c0+0]),q(r[c0+1]),q(r[c0+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let y=0,b=r.count;y<b;y++)r.setXYZ(y,0,0,0);const o=new K,c=new K,m=new K,d=new K,A=new K,_=new K,p=new K,s=new K;if(t)for(let y=0,b=t.count;y<b;y+=3){const I=t.getX(y+0),w=t.getX(y+1),x=t.getX(y+2);o.fromBufferAttribute(e,I),c.fromBufferAttribute(e,w),m.fromBufferAttribute(e,x),p.subVectors(m,c),s.subVectors(o,c),p.cross(s),d.fromBufferAttribute(r,I),A.fromBufferAttribute(r,w),_.fromBufferAttribute(r,x),d.add(p),A.add(p),_.add(p),r.setXYZ(I,d.x,d.y,d.z),r.setXYZ(w,A.x,A.y,A.z),r.setXYZ(x,_.x,_.y,_.z)}else for(let y=0,b=e.count;y<b;y+=3)o.fromBufferAttribute(e,y+0),c.fromBufferAttribute(e,y+1),m.fromBufferAttribute(e,y+2),p.subVectors(m,c),s.subVectors(o,c),p.cross(s),r.setXYZ(y+0,p.x,p.y,p.z),r.setXYZ(y+1,p.x,p.y,p.z),r.setXYZ(y+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const o in r){if(t.attributes[o]===void 0)continue;const m=r[o].array,d=t.attributes[o],A=d.array,_=d.itemSize*e,p=Math.min(A.length,m.length-_);for(let s=0,y=_;s<p;s++,y++)m[y]=A[s]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)zt.fromBufferAttribute(t,e),zt.normalize(),t.setXYZ(e,zt.x,zt.y,zt.z)}toNonIndexed(){function t(d,A){const _=d.array,p=d.itemSize,s=d.normalized,y=new _.constructor(A.length*p);let b=0,I=0;for(let w=0,x=A.length;w<x;w++){d.isInterleavedBufferAttribute?b=A[w]*d.data.stride+d.offset:b=A[w]*p;for(let L=0;L<p;L++)y[I++]=_[b++]}return new Ee(y,p,s)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new wi,r=this.index.array,o=this.attributes;for(const d in o){const A=o[d],_=t(A,r);e.setAttribute(d,_)}const c=this.morphAttributes;for(const d in c){const A=[],_=c[d];for(let p=0,s=_.length;p<s;p++){const y=_[p],b=t(y,r);A.push(b)}e.morphAttributes[d]=A}e.morphTargetsRelative=this.morphTargetsRelative;const m=this.groups;for(let d=0,A=m.length;d<A;d++){const _=m[d];e.addGroup(_.start,_.count,_.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const A=this.parameters;for(const _ in A)A[_]!==void 0&&(t[_]=A[_]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const A in r){const _=r[A];t.data.attributes[A]=_.toJSON(t.data)}const o={};let c=!1;for(const A in this.morphAttributes){const _=this.morphAttributes[A],p=[];for(let s=0,y=_.length;s<y;s++){const b=_[s];p.push(b.toJSON(t.data))}p.length>0&&(o[A]=p,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const m=this.groups;m.length>0&&(t.data.groups=JSON.parse(JSON.stringify(m)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(e));const o=t.attributes;for(const _ in o){const p=o[_];this.setAttribute(_,p.clone(e))}const c=t.morphAttributes;for(const _ in c){const p=[],s=c[_];for(let y=0,b=s.length;y<b;y++)p.push(s[y].clone(e));this.morphAttributes[_]=p}this.morphTargetsRelative=t.morphTargetsRelative;const m=t.groups;for(let _=0,p=m.length;_<p;_++){const s=m[_];this.addGroup(s.start,s.count,s.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const A=t.boundingSphere;return A!==null&&(this.boundingSphere=A.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ks=new Nt,Ui=new ko,Cr=new Kr,Ke=new K,Ze=new K,$e=new K,Er=new K,Tr=new K,Ir=new K,zn=new K,On=new K,Vn=new K,Fn=new lt,Nn=new lt,Un=new lt,Pr=new K,jn=new K;class je extends he{constructor(t=new wi,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const o=e[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,m=o.length;c<m;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}raycast(t,e){const r=this.geometry,o=this.material,c=this.matrixWorld;if(o===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Cr.copy(r.boundingSphere),Cr.applyMatrix4(c),t.ray.intersectsSphere(Cr)===!1)||(Ks.copy(c).invert(),Ui.copy(t.ray).applyMatrix4(Ks),r.boundingBox!==null&&Ui.intersectsBox(r.boundingBox)===!1))return;let m;const d=r.index,A=r.attributes.position,_=r.morphAttributes.position,p=r.morphTargetsRelative,s=r.attributes.uv,y=r.attributes.uv2,b=r.groups,I=r.drawRange;if(d!==null)if(Array.isArray(o))for(let w=0,x=b.length;w<x;w++){const L=b[w],U=o[L.materialIndex],M=Math.max(L.start,I.start),P=Math.min(d.count,Math.min(L.start+L.count,I.start+I.count));for(let k=M,Y=P;k<Y;k+=3){const t0=d.getX(k),N=d.getX(k+1),q=d.getX(k+2);m=kn(this,U,t,Ui,A,_,p,s,y,t0,N,q),m&&(m.faceIndex=Math.floor(k/3),m.face.materialIndex=L.materialIndex,e.push(m))}}else{const w=Math.max(0,I.start),x=Math.min(d.count,I.start+I.count);for(let L=w,U=x;L<U;L+=3){const M=d.getX(L),P=d.getX(L+1),k=d.getX(L+2);m=kn(this,o,t,Ui,A,_,p,s,y,M,P,k),m&&(m.faceIndex=Math.floor(L/3),e.push(m))}}else if(A!==void 0)if(Array.isArray(o))for(let w=0,x=b.length;w<x;w++){const L=b[w],U=o[L.materialIndex],M=Math.max(L.start,I.start),P=Math.min(A.count,Math.min(L.start+L.count,I.start+I.count));for(let k=M,Y=P;k<Y;k+=3){const t0=k,N=k+1,q=k+2;m=kn(this,U,t,Ui,A,_,p,s,y,t0,N,q),m&&(m.faceIndex=Math.floor(k/3),m.face.materialIndex=L.materialIndex,e.push(m))}}else{const w=Math.max(0,I.start),x=Math.min(A.count,I.start+I.count);for(let L=w,U=x;L<U;L+=3){const M=L,P=L+1,k=L+2;m=kn(this,o,t,Ui,A,_,p,s,y,M,P,k),m&&(m.faceIndex=Math.floor(L/3),e.push(m))}}}}function jf(h,t,e,r,o,c,m,d){let A;if(t.side===ye?A=r.intersectTriangle(m,c,o,!0,d):A=r.intersectTriangle(o,c,m,t.side!==Ji,d),A===null)return null;jn.copy(d),jn.applyMatrix4(h.matrixWorld);const _=e.ray.origin.distanceTo(jn);return _<e.near||_>e.far?null:{distance:_,point:jn.clone(),object:h}}function kn(h,t,e,r,o,c,m,d,A,_,p,s){Ke.fromBufferAttribute(o,_),Ze.fromBufferAttribute(o,p),$e.fromBufferAttribute(o,s);const y=h.morphTargetInfluences;if(c&&y){zn.set(0,0,0),On.set(0,0,0),Vn.set(0,0,0);for(let I=0,w=c.length;I<w;I++){const x=y[I],L=c[I];x!==0&&(Er.fromBufferAttribute(L,_),Tr.fromBufferAttribute(L,p),Ir.fromBufferAttribute(L,s),m?(zn.addScaledVector(Er,x),On.addScaledVector(Tr,x),Vn.addScaledVector(Ir,x)):(zn.addScaledVector(Er.sub(Ke),x),On.addScaledVector(Tr.sub(Ze),x),Vn.addScaledVector(Ir.sub($e),x)))}Ke.add(zn),Ze.add(On),$e.add(Vn)}h.isSkinnedMesh&&(h.boneTransform(_,Ke),h.boneTransform(p,Ze),h.boneTransform(s,$e));const b=jf(h,t,e,r,Ke,Ze,$e,Pr);if(b){d&&(Fn.fromBufferAttribute(d,_),Nn.fromBufferAttribute(d,p),Un.fromBufferAttribute(d,s),b.uv=Ue.getUV(Pr,Ke,Ze,$e,Fn,Nn,Un,new lt)),A&&(Fn.fromBufferAttribute(A,_),Nn.fromBufferAttribute(A,p),Un.fromBufferAttribute(A,s),b.uv2=Ue.getUV(Pr,Ke,Ze,$e,Fn,Nn,Un,new lt));const I={a:_,b:p,c:s,normal:new K,materialIndex:0};Ue.getNormal(Ke,Ze,$e,I.normal),b.face=I}return b}class bn extends wi{constructor(t=1,e=1,r=1,o=1,c=1,m=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:o,heightSegments:c,depthSegments:m};const d=this;o=Math.floor(o),c=Math.floor(c),m=Math.floor(m);const A=[],_=[],p=[],s=[];let y=0,b=0;I("z","y","x",-1,-1,r,e,t,m,c,0),I("z","y","x",1,-1,r,e,-t,m,c,1),I("x","z","y",1,1,t,r,e,o,m,2),I("x","z","y",1,-1,t,r,-e,o,m,3),I("x","y","z",1,-1,t,e,r,o,c,4),I("x","y","z",-1,-1,t,e,-r,o,c,5),this.setIndex(A),this.setAttribute("position",new gi(_,3)),this.setAttribute("normal",new gi(p,3)),this.setAttribute("uv",new gi(s,2));function I(w,x,L,U,M,P,k,Y,t0,N,q){const l0=P/t0,n0=k/N,b0=P/2,P0=k/2,J=Y/2,c0=t0+1,o0=N+1;let r0=0,d0=0;const e0=new K;for(let Z=0;Z<o0;Z++){const C0=Z*n0-P0;for(let f0=0;f0<c0;f0++){const L0=f0*l0-b0;e0[w]=L0*U,e0[x]=C0*M,e0[L]=J,_.push(e0.x,e0.y,e0.z),e0[w]=0,e0[x]=0,e0[L]=Y>0?1:-1,p.push(e0.x,e0.y,e0.z),s.push(f0/t0),s.push(1-Z/N),r0+=1}}for(let Z=0;Z<N;Z++)for(let C0=0;C0<t0;C0++){const f0=y+C0+c0*Z,L0=y+C0+c0*(Z+1),N0=y+(C0+1)+c0*(Z+1),j0=y+(C0+1)+c0*Z;A.push(f0,L0,j0),A.push(L0,N0,j0),d0+=6}d.addGroup(b,d0,q),b+=d0,y+=r0}}static fromJSON(t){return new bn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function tn(h){const t={};for(const e in h){t[e]={};for(const r in h[e]){const o=h[e][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[e][r]=o.clone():Array.isArray(o)?t[e][r]=o.slice():t[e][r]=o}}return t}function kt(h){const t={};for(let e=0;e<h.length;e++){const r=tn(h[e]);for(const o in r)t[o]=r[o]}return t}const kf={clone:tn,merge:kt};var Gf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Gf,this.fragmentShader=Hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tn(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const m=this.uniforms[o].value;m&&m.isTexture?e.uniforms[o]={type:"t",value:m.toJSON(t).uuid}:m&&m.isColor?e.uniforms[o]={type:"c",value:m.getHex()}:m&&m.isVector2?e.uniforms[o]={type:"v2",value:m.toArray()}:m&&m.isVector3?e.uniforms[o]={type:"v3",value:m.toArray()}:m&&m.isVector4?e.uniforms[o]={type:"v4",value:m.toArray()}:m&&m.isMatrix3?e.uniforms[o]={type:"m3",value:m.toArray()}:m&&m.isMatrix4?e.uniforms[o]={type:"m4",value:m.toArray()}:e.uniforms[o]={value:m}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class Wo extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ae extends Wo{constructor(t=50,e=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ns*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,r,o,c,m){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=m,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,r=2*e,o=this.aspect*r,c=-.5*o;const m=this.view;if(this.view!==null&&this.view.enabled){const A=m.fullWidth,_=m.fullHeight;c+=m.offsetX*o/A,e-=m.offsetY*r/_,o*=m.width/A,r*=m.height/_}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,e,e-r,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=90,ki=1;class Wf extends he{constructor(t,e,r){if(super(),this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const o=new Ae(ji,ki,t,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new K(1,0,0)),this.add(o);const c=new Ae(ji,ki,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new K(-1,0,0)),this.add(c);const m=new Ae(ji,ki,t,e);m.layers=this.layers,m.up.set(0,0,1),m.lookAt(new K(0,1,0)),this.add(m);const d=new Ae(ji,ki,t,e);d.layers=this.layers,d.up.set(0,0,-1),d.lookAt(new K(0,-1,0)),this.add(d);const A=new Ae(ji,ki,t,e);A.layers=this.layers,A.up.set(0,-1,0),A.lookAt(new K(0,0,1)),this.add(A);const _=new Ae(ji,ki,t,e);_.layers=this.layers,_.up.set(0,-1,0),_.lookAt(new K(0,0,-1)),this.add(_)}update(t,e){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[o,c,m,d,A,_]=this.children,p=t.getRenderTarget(),s=t.toneMapping,y=t.xr.enabled;t.toneMapping=ke,t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0),t.render(e,o),t.setRenderTarget(r,1),t.render(e,c),t.setRenderTarget(r,2),t.render(e,m),t.setRenderTarget(r,3),t.render(e,d),t.setRenderTarget(r,4),t.render(e,A),r.texture.generateMipmaps=b,t.setRenderTarget(r,5),t.render(e,_),t.setRenderTarget(p),t.toneMapping=s,t.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class qo extends ce{constructor(t,e,r,o,c,m,d,A,_,p){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,r,o,c,m,d,A,_,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends vi{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new qo(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ae}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bn(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:tn(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ye,blending:ei});c.uniforms.tEquirect.value=e;const m=new je(o,c),d=e.minFilter;return e.minFilter===Kn&&(e.minFilter=ae),new Wf(1,10,this).update(t,m),e.minFilter=d,m.geometry.dispose(),m.material.dispose(),this}clear(t,e,r,o){const c=t.getRenderTarget();for(let m=0;m<6;m++)t.setRenderTarget(this,m),t.clear(e,r,o);t.setRenderTarget(c)}}const Dr=new K,Xf=new K,Qf=new le;class li{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,o){return this.normal.set(t,e,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const o=Dr.subVectors(r,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const r=t.delta(Dr),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:e.copy(r).multiplyScalar(c).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||Qf.getNormalMatrix(t),o=this.coplanarPoint(Dr).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Kr,Gn=new K;class Xo{constructor(t=new li,e=new li,r=new li,o=new li,c=new li,m=new li){this.planes=[t,e,r,o,c,m]}set(t,e,r,o,c,m){const d=this.planes;return d[0].copy(t),d[1].copy(e),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(m),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t){const e=this.planes,r=t.elements,o=r[0],c=r[1],m=r[2],d=r[3],A=r[4],_=r[5],p=r[6],s=r[7],y=r[8],b=r[9],I=r[10],w=r[11],x=r[12],L=r[13],U=r[14],M=r[15];return e[0].setComponents(d-o,s-A,w-y,M-x).normalize(),e[1].setComponents(d+o,s+A,w+y,M+x).normalize(),e[2].setComponents(d+c,s+_,w+b,M+L).normalize(),e[3].setComponents(d-c,s-_,w-b,M-L).normalize(),e[4].setComponents(d-m,s-p,w-I,M-U).normalize(),e[5].setComponents(d+m,s+p,w+I,M+U).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,r=t.center,o=-t.radius;for(let c=0;c<6;c++)if(e[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const o=e[r];if(Gn.x=o.normal.x>0?t.max.x:t.min.x,Gn.y=o.normal.y>0?t.max.y:t.min.y,Gn.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Gn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Qo(){let h=null,t=!1,e=null,r=null;function o(c,m){e(c,m),r=h.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(r=h.requestAnimationFrame(o),t=!0)},stop:function(){h.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){e=c},setContext:function(c){h=c}}}function Yf(h,t){const e=t.isWebGL2,r=new WeakMap;function o(_,p){const s=_.array,y=_.usage,b=h.createBuffer();h.bindBuffer(p,b),h.bufferData(p,s,y),_.onUploadCallback();let I;if(s instanceof Float32Array)I=5126;else if(s instanceof Uint16Array)if(_.isFloat16BufferAttribute)if(e)I=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else I=5123;else if(s instanceof Int16Array)I=5122;else if(s instanceof Uint32Array)I=5125;else if(s instanceof Int32Array)I=5124;else if(s instanceof Int8Array)I=5120;else if(s instanceof Uint8Array)I=5121;else if(s instanceof Uint8ClampedArray)I=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:b,type:I,bytesPerElement:s.BYTES_PER_ELEMENT,version:_.version}}function c(_,p,s){const y=p.array,b=p.updateRange;h.bindBuffer(s,_),b.count===-1?h.bufferSubData(s,0,y):(e?h.bufferSubData(s,b.offset*y.BYTES_PER_ELEMENT,y,b.offset,b.count):h.bufferSubData(s,b.offset*y.BYTES_PER_ELEMENT,y.subarray(b.offset,b.offset+b.count)),b.count=-1)}function m(_){return _.isInterleavedBufferAttribute&&(_=_.data),r.get(_)}function d(_){_.isInterleavedBufferAttribute&&(_=_.data);const p=r.get(_);p&&(h.deleteBuffer(p.buffer),r.delete(_))}function A(_,p){if(_.isGLBufferAttribute){const y=r.get(_);(!y||y.version<_.version)&&r.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}_.isInterleavedBufferAttribute&&(_=_.data);const s=r.get(_);s===void 0?r.set(_,o(_,p)):s.version<_.version&&(c(s.buffer,_,p),s.version=_.version)}return{get:m,remove:d,update:A}}class Zn extends wi{constructor(t=1,e=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:o};const c=t/2,m=e/2,d=Math.floor(r),A=Math.floor(o),_=d+1,p=A+1,s=t/d,y=e/A,b=[],I=[],w=[],x=[];for(let L=0;L<p;L++){const U=L*y-m;for(let M=0;M<_;M++){const P=M*s-c;I.push(P,-U,0),w.push(0,0,1),x.push(M/d),x.push(1-L/A)}}for(let L=0;L<A;L++)for(let U=0;U<d;U++){const M=U+_*L,P=U+_*(L+1),k=U+1+_*(L+1),Y=U+1+_*L;b.push(M,P,Y),b.push(P,k,Y)}this.setIndex(b),this.setAttribute("position",new gi(I,3)),this.setAttribute("normal",new gi(w,3)),this.setAttribute("uv",new gi(x,2))}static fromJSON(t){return new Zn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig="vec3 transformed = vec3( position );",ng=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fg=`#define PI 3.141592653589793
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
}`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bg="gl_FragColor = linearToOutputTexel( gl_FragColor );",wg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lg=`#ifdef USE_GRADIENTMAP
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
}`,Rg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Og=`vec3 diffuse = vec3( 1.0 );
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
#endif`,Vg=`uniform bool receiveShadow;
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
#endif`,Fg=`#if defined( USE_ENVMAP )
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
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Gg=`PhysicalMaterial material;
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
#endif`,Hg=`struct PhysicalMaterial {
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
}`,Wg=`
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s_=`#ifdef USE_MORPHNORMALS
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
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,c_=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,h_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,p_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,f_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,g_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,__=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#ifdef USE_SHADOWMAP
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
#endif`,C_=`#ifdef USE_SHADOWMAP
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
#endif`,E_=`#ifdef USE_SHADOWMAP
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
#endif`,T_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P_=`#ifdef USE_SKINNING
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
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F_=`#ifdef USE_TRANSMISSION
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
#endif`,N_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,j_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,k_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,G_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,H_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,W_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#include <envmap_common_pars_fragment>
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
}`,K_=`#include <common>
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
}`,Z_=`#if DEPTH_PACKING == 3200
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
}`,$_=`#define DISTANCE
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
}`,tA=`#define DISTANCE
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nA=`uniform float scale;
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
}`,rA=`uniform vec3 diffuse;
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
}`,sA=`#include <common>
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
}`,oA=`uniform vec3 diffuse;
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
}`,aA=`#define LAMBERT
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
}`,lA=`uniform vec3 diffuse;
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
}`,cA=`#define MATCAP
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
}`,hA=`#define MATCAP
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
}`,uA=`#define NORMAL
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
}`,dA=`#define NORMAL
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
}`,mA=`#define PHONG
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
}`,pA=`#define PHONG
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
}`,fA=`#define STANDARD
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
}`,gA=`#define STANDARD
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
}`,_A=`#define TOON
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
}`,AA=`#define TOON
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
}`,vA=`uniform float size;
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
}`,yA=`uniform vec3 diffuse;
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
}`,xA=`#include <common>
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
}`,bA=`uniform vec3 color;
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
}`,wA=`uniform float rotation;
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
}`,SA=`uniform vec3 diffuse;
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
}`,ct={alphamap_fragment:Jf,alphamap_pars_fragment:Kf,alphatest_fragment:Zf,alphatest_pars_fragment:$f,aomap_fragment:tg,aomap_pars_fragment:eg,begin_vertex:ig,beginnormal_vertex:ng,bsdfs:rg,iridescence_fragment:sg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:mg,color_vertex:pg,common:fg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:Ag,displacementmap_vertex:vg,emissivemap_fragment:yg,emissivemap_pars_fragment:xg,encodings_fragment:bg,encodings_pars_fragment:wg,envmap_fragment:Sg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Bg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Fg,envmap_vertex:Eg,fog_vertex:Tg,fog_pars_vertex:Ig,fog_fragment:Pg,fog_pars_fragment:Dg,gradientmap_pars_fragment:Lg,lightmap_fragment:Rg,lightmap_pars_fragment:zg,lights_lambert_vertex:Og,lights_pars_begin:Vg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:jg,lights_phong_pars_fragment:kg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Hg,lights_fragment_begin:Wg,lights_fragment_maps:qg,lights_fragment_end:Xg,logdepthbuf_fragment:Qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Jg,logdepthbuf_vertex:Kg,map_fragment:Zg,map_pars_fragment:$g,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:n_,morphcolor_vertex:r_,morphnormal_vertex:s_,morphtarget_pars_vertex:o_,morphtarget_vertex:a_,normal_fragment_begin:l_,normal_fragment_maps:c_,normal_pars_fragment:h_,normal_pars_vertex:u_,normal_vertex:d_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:p_,clearcoat_normal_fragment_maps:f_,clearcoat_pars_fragment:g_,iridescence_pars_fragment:__,output_fragment:A_,packing:v_,premultiplied_alpha_fragment:y_,project_vertex:x_,dithering_fragment:b_,dithering_pars_fragment:w_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:M_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:C_,shadowmap_vertex:E_,shadowmask_pars_fragment:T_,skinbase_vertex:I_,skinning_pars_vertex:P_,skinning_vertex:D_,skinnormal_vertex:L_,specularmap_fragment:R_,specularmap_pars_fragment:z_,tonemapping_fragment:O_,tonemapping_pars_fragment:V_,transmission_fragment:F_,transmission_pars_fragment:N_,uv_pars_fragment:U_,uv_pars_vertex:j_,uv_vertex:k_,uv2_pars_fragment:G_,uv2_pars_vertex:H_,uv2_vertex:W_,worldpos_vertex:q_,background_vert:X_,background_frag:Q_,cube_vert:Y_,cube_frag:J_,depth_vert:K_,depth_frag:Z_,distanceRGBA_vert:$_,distanceRGBA_frag:tA,equirect_vert:eA,equirect_frag:iA,linedashed_vert:nA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:aA,meshlambert_frag:lA,meshmatcap_vert:cA,meshmatcap_frag:hA,meshnormal_vert:uA,meshnormal_frag:dA,meshphong_vert:mA,meshphong_frag:pA,meshphysical_vert:fA,meshphysical_frag:gA,meshtoon_vert:_A,meshtoon_frag:AA,points_vert:vA,points_frag:yA,shadow_vert:xA,shadow_frag:bA,sprite_vert:wA,sprite_frag:SA},O0={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new le},uv2Transform:{value:new le},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new le}}},Be={basic:{uniforms:kt([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:kt([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.fog,O0.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:kt([O0.common,O0.specularmap,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,O0.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:kt([O0.common,O0.envmap,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.roughnessmap,O0.metalnessmap,O0.fog,O0.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:kt([O0.common,O0.aomap,O0.lightmap,O0.emissivemap,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.gradientmap,O0.fog,O0.lights,{emissive:{value:new yt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:kt([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,O0.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:kt([O0.points,O0.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:kt([O0.common,O0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:kt([O0.common,O0.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:kt([O0.common,O0.bumpmap,O0.normalmap,O0.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:kt([O0.sprite,O0.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},cube:{uniforms:kt([O0.envmap,{opacity:{value:1}}]),vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:kt([O0.common,O0.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:kt([O0.lights,O0.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Be.physical={uniforms:kt([Be.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};function MA(h,t,e,r,o,c){const m=new yt(0);let d=o===!0?0:1,A,_,p=null,s=0,y=null;function b(w,x){let L=!1,U=x.isScene===!0?x.background:null;U&&U.isTexture&&(U=t.get(U));const M=h.xr,P=M.getSession&&M.getSession();P&&P.environmentBlendMode==="additive"&&(U=null),U===null?I(m,d):U&&U.isColor&&(I(U,1),L=!0),(h.autoClear||L)&&h.clear(h.autoClearColor,h.autoClearDepth,h.autoClearStencil),U&&(U.isCubeTexture||U.mapping===Jn)?(_===void 0&&(_=new je(new bn(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:tn(Be.cube.uniforms),vertexShader:Be.cube.vertexShader,fragmentShader:Be.cube.fragmentShader,side:ye,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(k,Y,t0){this.matrixWorld.copyPosition(t0.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),_.material.uniforms.envMap.value=U,_.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,(p!==U||s!==U.version||y!==h.toneMapping)&&(_.material.needsUpdate=!0,p=U,s=U.version,y=h.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):U&&U.isTexture&&(A===void 0&&(A=new je(new Zn(2,2),new xi({name:"BackgroundMaterial",uniforms:tn(Be.background.uniforms),vertexShader:Be.background.vertexShader,fragmentShader:Be.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),A.geometry.deleteAttribute("normal"),Object.defineProperty(A.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(A)),A.material.uniforms.t2D.value=U,U.matrixAutoUpdate===!0&&U.updateMatrix(),A.material.uniforms.uvTransform.value.copy(U.matrix),(p!==U||s!==U.version||y!==h.toneMapping)&&(A.material.needsUpdate=!0,p=U,s=U.version,y=h.toneMapping),A.layers.enableAll(),w.unshift(A,A.geometry,A.material,0,0,null))}function I(w,x){e.buffers.color.setClear(w.r,w.g,w.b,x,c)}return{getClearColor:function(){return m},setClearColor:function(w,x=1){m.set(w),d=x,I(m,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,I(m,d)},render:b}}function BA(h,t,e,r){const o=h.getParameter(34921),c=r.isWebGL2?null:t.get("OES_vertex_array_object"),m=r.isWebGL2||c!==null,d={},A=x(null);let _=A,p=!1;function s(J,c0,o0,r0,d0){let e0=!1;if(m){const Z=w(r0,o0,c0);_!==Z&&(_=Z,b(_.object)),e0=L(J,r0,o0,d0),e0&&U(J,r0,o0,d0)}else{const Z=c0.wireframe===!0;(_.geometry!==r0.id||_.program!==o0.id||_.wireframe!==Z)&&(_.geometry=r0.id,_.program=o0.id,_.wireframe=Z,e0=!0)}d0!==null&&e.update(d0,34963),(e0||p)&&(p=!1,N(J,c0,o0,r0),d0!==null&&h.bindBuffer(34963,e.get(d0).buffer))}function y(){return r.isWebGL2?h.createVertexArray():c.createVertexArrayOES()}function b(J){return r.isWebGL2?h.bindVertexArray(J):c.bindVertexArrayOES(J)}function I(J){return r.isWebGL2?h.deleteVertexArray(J):c.deleteVertexArrayOES(J)}function w(J,c0,o0){const r0=o0.wireframe===!0;let d0=d[J.id];d0===void 0&&(d0={},d[J.id]=d0);let e0=d0[c0.id];e0===void 0&&(e0={},d0[c0.id]=e0);let Z=e0[r0];return Z===void 0&&(Z=x(y()),e0[r0]=Z),Z}function x(J){const c0=[],o0=[],r0=[];for(let d0=0;d0<o;d0++)c0[d0]=0,o0[d0]=0,r0[d0]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:c0,enabledAttributes:o0,attributeDivisors:r0,object:J,attributes:{},index:null}}function L(J,c0,o0,r0){const d0=_.attributes,e0=c0.attributes;let Z=0;const C0=o0.getAttributes();for(const f0 in C0)if(C0[f0].location>=0){const N0=d0[f0];let j0=e0[f0];if(j0===void 0&&(f0==="instanceMatrix"&&J.instanceMatrix&&(j0=J.instanceMatrix),f0==="instanceColor"&&J.instanceColor&&(j0=J.instanceColor)),N0===void 0||N0.attribute!==j0||j0&&N0.data!==j0.data)return!0;Z++}return _.attributesNum!==Z||_.index!==r0}function U(J,c0,o0,r0){const d0={},e0=c0.attributes;let Z=0;const C0=o0.getAttributes();for(const f0 in C0)if(C0[f0].location>=0){let N0=e0[f0];N0===void 0&&(f0==="instanceMatrix"&&J.instanceMatrix&&(N0=J.instanceMatrix),f0==="instanceColor"&&J.instanceColor&&(N0=J.instanceColor));const j0={};j0.attribute=N0,N0&&N0.data&&(j0.data=N0.data),d0[f0]=j0,Z++}_.attributes=d0,_.attributesNum=Z,_.index=r0}function M(){const J=_.newAttributes;for(let c0=0,o0=J.length;c0<o0;c0++)J[c0]=0}function P(J){k(J,0)}function k(J,c0){const o0=_.newAttributes,r0=_.enabledAttributes,d0=_.attributeDivisors;o0[J]=1,r0[J]===0&&(h.enableVertexAttribArray(J),r0[J]=1),d0[J]!==c0&&((r.isWebGL2?h:t.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,c0),d0[J]=c0)}function Y(){const J=_.newAttributes,c0=_.enabledAttributes;for(let o0=0,r0=c0.length;o0<r0;o0++)c0[o0]!==J[o0]&&(h.disableVertexAttribArray(o0),c0[o0]=0)}function t0(J,c0,o0,r0,d0,e0){r.isWebGL2===!0&&(o0===5124||o0===5125)?h.vertexAttribIPointer(J,c0,o0,d0,e0):h.vertexAttribPointer(J,c0,o0,r0,d0,e0)}function N(J,c0,o0,r0){if(r.isWebGL2===!1&&(J.isInstancedMesh||r0.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const d0=r0.attributes,e0=o0.getAttributes(),Z=c0.defaultAttributeValues;for(const C0 in e0){const f0=e0[C0];if(f0.location>=0){let L0=d0[C0];if(L0===void 0&&(C0==="instanceMatrix"&&J.instanceMatrix&&(L0=J.instanceMatrix),C0==="instanceColor"&&J.instanceColor&&(L0=J.instanceColor)),L0!==void 0){const N0=L0.normalized,j0=L0.itemSize,m0=e.get(L0);if(m0===void 0)continue;const Bt=m0.buffer,at=m0.type,J0=m0.bytesPerElement;if(L0.isInterleavedBufferAttribute){const y0=L0.data,ut=y0.stride,ot=L0.offset;if(y0.isInstancedInterleavedBuffer){for(let X0=0;X0<f0.locationSize;X0++)k(f0.location+X0,y0.meshPerAttribute);J.isInstancedMesh!==!0&&r0._maxInstanceCount===void 0&&(r0._maxInstanceCount=y0.meshPerAttribute*y0.count)}else for(let X0=0;X0<f0.locationSize;X0++)P(f0.location+X0);h.bindBuffer(34962,Bt);for(let X0=0;X0<f0.locationSize;X0++)t0(f0.location+X0,j0/f0.locationSize,at,N0,ut*J0,(ot+j0/f0.locationSize*X0)*J0)}else{if(L0.isInstancedBufferAttribute){for(let y0=0;y0<f0.locationSize;y0++)k(f0.location+y0,L0.meshPerAttribute);J.isInstancedMesh!==!0&&r0._maxInstanceCount===void 0&&(r0._maxInstanceCount=L0.meshPerAttribute*L0.count)}else for(let y0=0;y0<f0.locationSize;y0++)P(f0.location+y0);h.bindBuffer(34962,Bt);for(let y0=0;y0<f0.locationSize;y0++)t0(f0.location+y0,j0/f0.locationSize,at,N0,j0*J0,j0/f0.locationSize*y0*J0)}}else if(Z!==void 0){const N0=Z[C0];if(N0!==void 0)switch(N0.length){case 2:h.vertexAttrib2fv(f0.location,N0);break;case 3:h.vertexAttrib3fv(f0.location,N0);break;case 4:h.vertexAttrib4fv(f0.location,N0);break;default:h.vertexAttrib1fv(f0.location,N0)}}}}Y()}function q(){b0();for(const J in d){const c0=d[J];for(const o0 in c0){const r0=c0[o0];for(const d0 in r0)I(r0[d0].object),delete r0[d0];delete c0[o0]}delete d[J]}}function l0(J){if(d[J.id]===void 0)return;const c0=d[J.id];for(const o0 in c0){const r0=c0[o0];for(const d0 in r0)I(r0[d0].object),delete r0[d0];delete c0[o0]}delete d[J.id]}function n0(J){for(const c0 in d){const o0=d[c0];if(o0[J.id]===void 0)continue;const r0=o0[J.id];for(const d0 in r0)I(r0[d0].object),delete r0[d0];delete o0[J.id]}}function b0(){P0(),p=!0,_!==A&&(_=A,b(_.object))}function P0(){A.geometry=null,A.program=null,A.wireframe=!1}return{setup:s,reset:b0,resetDefaultState:P0,dispose:q,releaseStatesOfGeometry:l0,releaseStatesOfProgram:n0,initAttributes:M,enableAttribute:P,disableUnusedAttributes:Y}}function CA(h,t,e,r){const o=r.isWebGL2;let c;function m(_){c=_}function d(_,p){h.drawArrays(c,_,p),e.update(p,c,1)}function A(_,p,s){if(s===0)return;let y,b;if(o)y=h,b="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[b](c,_,p,s),e.update(p,c,s)}this.setMode=m,this.render=d,this.renderInstances=A}function EA(h,t,e){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const t0=t.get("EXT_texture_filter_anisotropic");r=h.getParameter(t0.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(t0){if(t0==="highp"){if(h.getShaderPrecisionFormat(35633,36338).precision>0&&h.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";t0="mediump"}return t0==="mediump"&&h.getShaderPrecisionFormat(35633,36337).precision>0&&h.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const m=typeof WebGL2RenderingContext<"u"&&h instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&h instanceof WebGL2ComputeRenderingContext;let d=e.precision!==void 0?e.precision:"highp";const A=c(d);A!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",A,"instead."),d=A);const _=m||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,s=h.getParameter(34930),y=h.getParameter(35660),b=h.getParameter(3379),I=h.getParameter(34076),w=h.getParameter(34921),x=h.getParameter(36347),L=h.getParameter(36348),U=h.getParameter(36349),M=y>0,P=m||t.has("OES_texture_float"),k=M&&P,Y=m?h.getParameter(36183):0;return{isWebGL2:m,drawBuffers:_,getMaxAnisotropy:o,getMaxPrecision:c,precision:d,logarithmicDepthBuffer:p,maxTextures:s,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:I,maxAttributes:w,maxVertexUniforms:x,maxVaryings:L,maxFragmentUniforms:U,vertexTextures:M,floatFragmentTextures:P,floatVertexTextures:k,maxSamples:Y}}function TA(h){const t=this;let e=null,r=0,o=!1,c=!1;const m=new li,d=new le,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(s,y,b){const I=s.length!==0||y||r!==0||o;return o=y,e=p(s,b,0),r=s.length,I},this.beginShadows=function(){c=!0,p(null)},this.endShadows=function(){c=!1,_()},this.setState=function(s,y,b){const I=s.clippingPlanes,w=s.clipIntersection,x=s.clipShadows,L=h.get(s);if(!o||I===null||I.length===0||c&&!x)c?p(null):_();else{const U=c?0:r,M=U*4;let P=L.clippingState||null;A.value=P,P=p(I,y,M,b);for(let k=0;k!==M;++k)P[k]=e[k];L.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function _(){A.value!==e&&(A.value=e,A.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function p(s,y,b,I){const w=s!==null?s.length:0;let x=null;if(w!==0){if(x=A.value,I!==!0||x===null){const L=b+w*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(x===null||x.length<L)&&(x=new Float32Array(L));for(let M=0,P=b;M!==w;++M,P+=4)m.copy(s[M]).applyMatrix4(U,d),m.normal.toArray(x,P),x[P+3]=m.constant}A.value=x,A.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function IA(h){let t=new WeakMap;function e(m,d){return d===jr?m.mapping=Ki:d===kr&&(m.mapping=Zi),m}function r(m){if(m&&m.isTexture&&m.isRenderTargetTexture===!1){const d=m.mapping;if(d===jr||d===kr)if(t.has(m)){const A=t.get(m).texture;return e(A,m.mapping)}else{const A=m.image;if(A&&A.height>0){const _=new qf(A.height/2);return _.fromEquirectangularTexture(h,m),t.set(m,_),m.addEventListener("dispose",o),e(_.texture,m.mapping)}else return null}}return m}function o(m){const d=m.target;d.removeEventListener("dispose",o);const A=t.get(d);A!==void 0&&(t.delete(d),A.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}class Yo extends Wo{constructor(t=-1,e=1,r=1,o=-1,c=.1,m=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=o,this.near=c,this.far=m,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,o,c,m){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=m,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-t,m=r+t,d=o+e,A=o-e;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=_*this.view.offsetX,m=c+_*this.view.width,d-=p*this.view.offsetY,A=d-p*this.view.height}this.projectionMatrix.makeOrthographic(c,m,d,A,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,Zs=[.125,.215,.35,.446,.526,.582],hi=20,Lr=new Yo,$s=new yt;let Rr=null;const ci=(1+Math.sqrt(5))/2,Hi=1/ci,to=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ci,Hi),new K(0,ci,-Hi),new K(Hi,0,ci),new K(-Hi,0,ci),new K(ci,Hi,0),new K(-ci,Hi,0)];class eo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,r=.1,o=100){Rr=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,r,o,c),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rr),t.scissorTest=!1,Hn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rr=this._renderer.getRenderTarget();const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:ae,minFilter:ae,generateMipmaps:!1,type:gn,format:Ce,encoding:Ai,depthBuffer:!1},o=io(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=io(t,e,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PA(c)),this._blurMaterial=DA(c,t,e)}return o}_compileMaterial(t){const e=new je(this._lodPlanes[0],t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,r,o){const d=new Ae(90,1,e,r),A=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],p=this._renderer,s=p.autoClear,y=p.toneMapping;p.getClearColor($s),p.toneMapping=ke,p.autoClear=!1;const b=new xn({name:"PMREM.Background",side:ye,depthWrite:!1,depthTest:!1}),I=new je(new bn,b);let w=!1;const x=t.background;x?x.isColor&&(b.color.copy(x),t.background=null,w=!0):(b.color.copy($s),w=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(d.up.set(0,A[L],0),d.lookAt(_[L],0,0)):U===1?(d.up.set(0,0,A[L]),d.lookAt(0,_[L],0)):(d.up.set(0,A[L],0),d.lookAt(0,0,_[L]));const M=this._cubeSize;Hn(o,U*M,L>2?M:0,M,M),p.setRenderTarget(o),w&&p.render(I,d),p.render(t,d)}I.geometry.dispose(),I.material.dispose(),p.toneMapping=y,p.autoClear=s,t.background=x}_textureToCubeUV(t,e){const r=this._renderer,o=t.mapping===Ki||t.mapping===Zi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const c=o?this._cubemapMaterial:this._equirectMaterial,m=new je(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const A=this._cubeSize;Hn(e,0,0,3*A,2*A),r.setRenderTarget(e),r.render(m,Lr)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const c=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),m=to[(o-1)%to.length];this._blur(t,o-1,o,c,m)}e.autoClear=r}_blur(t,e,r,o,c){const m=this._pingPongRenderTarget;this._halfBlur(t,m,e,r,o,"latitudinal",c),this._halfBlur(m,t,r,r,o,"longitudinal",c)}_halfBlur(t,e,r,o,c,m,d){const A=this._renderer,_=this._blurMaterial;m!=="latitudinal"&&m!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,s=new je(this._lodPlanes[o],_),y=_.uniforms,b=this._sizeLods[r]-1,I=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*hi-1),w=c/I,x=isFinite(c)?1+Math.floor(p*w):hi;x>hi&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hi}`);const L=[];let U=0;for(let t0=0;t0<hi;++t0){const N=t0/w,q=Math.exp(-N*N/2);L.push(q),t0===0?U+=q:t0<x&&(U+=2*q)}for(let t0=0;t0<L.length;t0++)L[t0]=L[t0]/U;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=L,y.latitudinal.value=m==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:M}=this;y.dTheta.value=I,y.mipInt.value=M-r;const P=this._sizeLods[o],k=3*P*(o>M-qi?o-M+qi:0),Y=4*(this._cubeSize-P);Hn(e,k,Y,3*P,2*P),A.setRenderTarget(e),A.render(s,Lr)}}function PA(h){const t=[],e=[],r=[];let o=h;const c=h-qi+1+Zs.length;for(let m=0;m<c;m++){const d=Math.pow(2,o);e.push(d);let A=1/d;m>h-qi?A=Zs[m-h+qi-1]:m===0&&(A=0),r.push(A);const _=1/(d-2),p=-_,s=1+_,y=[p,p,s,p,s,s,p,p,s,s,p,s],b=6,I=6,w=3,x=2,L=1,U=new Float32Array(w*I*b),M=new Float32Array(x*I*b),P=new Float32Array(L*I*b);for(let Y=0;Y<b;Y++){const t0=Y%3*2/3-1,N=Y>2?0:-1,q=[t0,N,0,t0+2/3,N,0,t0+2/3,N+1,0,t0,N,0,t0+2/3,N+1,0,t0,N+1,0];U.set(q,w*I*Y),M.set(y,x*I*Y);const l0=[Y,Y,Y,Y,Y,Y];P.set(l0,L*I*Y)}const k=new wi;k.setAttribute("position",new Ee(U,w)),k.setAttribute("uv",new Ee(M,x)),k.setAttribute("faceIndex",new Ee(P,L)),t.push(k),o>qi&&o--}return{lodPlanes:t,sizeLods:e,sigmas:r}}function io(h,t,e){const r=new vi(h,t,e);return r.texture.mapping=Jn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hn(h,t,e,r,o){h.viewport.set(t,e,r,o),h.scissor.set(t,e,r,o)}function DA(h,t,e){const r=new Float32Array(hi),o=new K(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${h}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$r(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function no(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$r(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ro(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$r(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $r(){return`

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
	`}function LA(h){let t=new WeakMap,e=null;function r(d){if(d&&d.isTexture){const A=d.mapping,_=A===jr||A===kr,p=A===Ki||A===Zi;if(_||p)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let s=t.get(d);return e===null&&(e=new eo(h)),s=_?e.fromEquirectangular(d,s):e.fromCubemap(d,s),t.set(d,s),s.texture}else{if(t.has(d))return t.get(d).texture;{const s=d.image;if(_&&s&&s.height>0||p&&s&&o(s)){e===null&&(e=new eo(h));const y=_?e.fromEquirectangular(d):e.fromCubemap(d);return t.set(d,y),d.addEventListener("dispose",c),y.texture}else return null}}}return d}function o(d){let A=0;const _=6;for(let p=0;p<_;p++)d[p]!==void 0&&A++;return A===_}function c(d){const A=d.target;A.removeEventListener("dispose",c);const _=t.get(A);_!==void 0&&(t.delete(A),_.dispose())}function m(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:m}}function RA(h){const t={};function e(r){if(t[r]!==void 0)return t[r];let o;switch(r){case"WEBGL_depth_texture":o=h.getExtension("WEBGL_depth_texture")||h.getExtension("MOZ_WEBGL_depth_texture")||h.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=h.getExtension("WEBGL_compressed_texture_s3tc")||h.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=h.getExtension("WEBGL_compressed_texture_pvrtc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=h.getExtension(r)}return t[r]=o,o}return{has:function(r){return e(r)!==null},init:function(r){r.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(r){const o=e(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function zA(h,t,e,r){const o={},c=new WeakMap;function m(s){const y=s.target;y.index!==null&&t.remove(y.index);for(const I in y.attributes)t.remove(y.attributes[I]);y.removeEventListener("dispose",m),delete o[y.id];const b=c.get(y);b&&(t.remove(b),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,e.memory.geometries--}function d(s,y){return o[y.id]===!0||(y.addEventListener("dispose",m),o[y.id]=!0,e.memory.geometries++),y}function A(s){const y=s.attributes;for(const I in y)t.update(y[I],34962);const b=s.morphAttributes;for(const I in b){const w=b[I];for(let x=0,L=w.length;x<L;x++)t.update(w[x],34962)}}function _(s){const y=[],b=s.index,I=s.attributes.position;let w=0;if(b!==null){const U=b.array;w=b.version;for(let M=0,P=U.length;M<P;M+=3){const k=U[M+0],Y=U[M+1],t0=U[M+2];y.push(k,Y,Y,t0,t0,k)}}else{const U=I.array;w=I.version;for(let M=0,P=U.length/3-1;M<P;M+=3){const k=M+0,Y=M+1,t0=M+2;y.push(k,Y,Y,t0,t0,k)}}const x=new(Vo(y)?Ho:Go)(y,1);x.version=w;const L=c.get(s);L&&t.remove(L),c.set(s,x)}function p(s){const y=c.get(s);if(y){const b=s.index;b!==null&&y.version<b.version&&_(s)}else _(s);return c.get(s)}return{get:d,update:A,getWireframeAttribute:p}}function OA(h,t,e,r){const o=r.isWebGL2;let c;function m(y){c=y}let d,A;function _(y){d=y.type,A=y.bytesPerElement}function p(y,b){h.drawElements(c,b,d,y*A),e.update(b,c,1)}function s(y,b,I){if(I===0)return;let w,x;if(o)w=h,x="drawElementsInstanced";else if(w=t.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[x](c,b,d,y*A,I),e.update(b,c,I)}this.setMode=m,this.setIndex=_,this.render=p,this.renderInstances=s}function VA(h){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,m,d){switch(e.calls++,m){case 4:e.triangles+=d*(c/3);break;case 1:e.lines+=d*(c/2);break;case 3:e.lines+=d*(c-1);break;case 2:e.lines+=d*c;break;case 0:e.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",m);break}}function o(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:r}}function FA(h,t){return h[0]-t[0]}function NA(h,t){return Math.abs(t[1])-Math.abs(h[1])}function zr(h,t){let e=1;const r=t.isInterleavedBufferAttribute?t.data.array:t.array;r instanceof Int8Array?e=127:r instanceof Uint8Array?e=255:r instanceof Uint16Array?e=65535:r instanceof Int16Array?e=32767:r instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),h.divideScalar(e)}function UA(h,t,e){const r={},o=new Float32Array(8),c=new WeakMap,m=new Ot,d=[];for(let _=0;_<8;_++)d[_]=[_,0];function A(_,p,s,y){const b=_.morphTargetInfluences;if(t.isWebGL2===!0){const I=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,w=I!==void 0?I.length:0;let x=c.get(p);if(x===void 0||x.count!==w){let c0=function(){P0.dispose(),c.delete(p),p.removeEventListener("dispose",c0)};x!==void 0&&x.texture.dispose();const M=p.morphAttributes.position!==void 0,P=p.morphAttributes.normal!==void 0,k=p.morphAttributes.color!==void 0,Y=p.morphAttributes.position||[],t0=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let q=0;M===!0&&(q=1),P===!0&&(q=2),k===!0&&(q=3);let l0=p.attributes.position.count*q,n0=1;l0>t.maxTextureSize&&(n0=Math.ceil(l0/t.maxTextureSize),l0=t.maxTextureSize);const b0=new Float32Array(l0*n0*4*w),P0=new jo(b0,l0,n0,w);P0.type=di,P0.needsUpdate=!0;const J=q*4;for(let o0=0;o0<w;o0++){const r0=Y[o0],d0=t0[o0],e0=N[o0],Z=l0*n0*4*o0;for(let C0=0;C0<r0.count;C0++){const f0=C0*J;M===!0&&(m.fromBufferAttribute(r0,C0),r0.normalized===!0&&zr(m,r0),b0[Z+f0+0]=m.x,b0[Z+f0+1]=m.y,b0[Z+f0+2]=m.z,b0[Z+f0+3]=0),P===!0&&(m.fromBufferAttribute(d0,C0),d0.normalized===!0&&zr(m,d0),b0[Z+f0+4]=m.x,b0[Z+f0+5]=m.y,b0[Z+f0+6]=m.z,b0[Z+f0+7]=0),k===!0&&(m.fromBufferAttribute(e0,C0),e0.normalized===!0&&zr(m,e0),b0[Z+f0+8]=m.x,b0[Z+f0+9]=m.y,b0[Z+f0+10]=m.z,b0[Z+f0+11]=e0.itemSize===4?m.w:1)}}x={count:w,texture:P0,size:new lt(l0,n0)},c.set(p,x),p.addEventListener("dispose",c0)}let L=0;for(let M=0;M<b.length;M++)L+=b[M];const U=p.morphTargetsRelative?1:1-L;y.getUniforms().setValue(h,"morphTargetBaseInfluence",U),y.getUniforms().setValue(h,"morphTargetInfluences",b),y.getUniforms().setValue(h,"morphTargetsTexture",x.texture,e),y.getUniforms().setValue(h,"morphTargetsTextureSize",x.size)}else{const I=b===void 0?0:b.length;let w=r[p.id];if(w===void 0||w.length!==I){w=[];for(let P=0;P<I;P++)w[P]=[P,0];r[p.id]=w}for(let P=0;P<I;P++){const k=w[P];k[0]=P,k[1]=b[P]}w.sort(NA);for(let P=0;P<8;P++)P<I&&w[P][1]?(d[P][0]=w[P][0],d[P][1]=w[P][1]):(d[P][0]=Number.MAX_SAFE_INTEGER,d[P][1]=0);d.sort(FA);const x=p.morphAttributes.position,L=p.morphAttributes.normal;let U=0;for(let P=0;P<8;P++){const k=d[P],Y=k[0],t0=k[1];Y!==Number.MAX_SAFE_INTEGER&&t0?(x&&p.getAttribute("morphTarget"+P)!==x[Y]&&p.setAttribute("morphTarget"+P,x[Y]),L&&p.getAttribute("morphNormal"+P)!==L[Y]&&p.setAttribute("morphNormal"+P,L[Y]),o[P]=t0,U+=t0):(x&&p.hasAttribute("morphTarget"+P)===!0&&p.deleteAttribute("morphTarget"+P),L&&p.hasAttribute("morphNormal"+P)===!0&&p.deleteAttribute("morphNormal"+P),o[P]=0)}const M=p.morphTargetsRelative?1:1-U;y.getUniforms().setValue(h,"morphTargetBaseInfluence",M),y.getUniforms().setValue(h,"morphTargetInfluences",o)}}return{update:A}}function jA(h,t,e,r){let o=new WeakMap;function c(A){const _=r.render.frame,p=A.geometry,s=t.get(A,p);return o.get(s)!==_&&(t.update(s),o.set(s,_)),A.isInstancedMesh&&(A.hasEventListener("dispose",d)===!1&&A.addEventListener("dispose",d),e.update(A.instanceMatrix,34962),A.instanceColor!==null&&e.update(A.instanceColor,34962)),s}function m(){o=new WeakMap}function d(A){const _=A.target;_.removeEventListener("dispose",d),e.remove(_.instanceMatrix),_.instanceColor!==null&&e.remove(_.instanceColor)}return{update:c,dispose:m}}const Jo=new ce,Ko=new jo,Zo=new Pf,$o=new qo,so=[],oo=[],ao=new Float32Array(16),lo=new Float32Array(9),co=new Float32Array(4);function nn(h,t,e){const r=h[0];if(r<=0||r>0)return h;const o=t*e;let c=so[o];if(c===void 0&&(c=new Float32Array(o),so[o]=c),t!==0){r.toArray(c,0);for(let m=1,d=0;m!==t;++m)d+=e,h[m].toArray(c,d)}return c}function Qt(h,t){if(h.length!==t.length)return!1;for(let e=0,r=h.length;e<r;e++)if(h[e]!==t[e])return!1;return!0}function Yt(h,t){for(let e=0,r=t.length;e<r;e++)h[e]=t[e]}function $n(h,t){let e=oo[t];e===void 0&&(e=new Int32Array(t),oo[t]=e);for(let r=0;r!==t;++r)e[r]=h.allocateTextureUnit();return e}function kA(h,t){const e=this.cache;e[0]!==t&&(h.uniform1f(this.addr,t),e[0]=t)}function GA(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(h.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;h.uniform2fv(this.addr,t),Yt(e,t)}}function HA(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(h.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(h.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qt(e,t))return;h.uniform3fv(this.addr,t),Yt(e,t)}}function WA(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(h.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;h.uniform4fv(this.addr,t),Yt(e,t)}}function qA(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(Qt(e,t))return;h.uniformMatrix2fv(this.addr,!1,t),Yt(e,t)}else{if(Qt(e,r))return;co.set(r),h.uniformMatrix2fv(this.addr,!1,co),Yt(e,r)}}function XA(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(Qt(e,t))return;h.uniformMatrix3fv(this.addr,!1,t),Yt(e,t)}else{if(Qt(e,r))return;lo.set(r),h.uniformMatrix3fv(this.addr,!1,lo),Yt(e,r)}}function QA(h,t){const e=this.cache,r=t.elements;if(r===void 0){if(Qt(e,t))return;h.uniformMatrix4fv(this.addr,!1,t),Yt(e,t)}else{if(Qt(e,r))return;ao.set(r),h.uniformMatrix4fv(this.addr,!1,ao),Yt(e,r)}}function YA(h,t){const e=this.cache;e[0]!==t&&(h.uniform1i(this.addr,t),e[0]=t)}function JA(h,t){const e=this.cache;Qt(e,t)||(h.uniform2iv(this.addr,t),Yt(e,t))}function KA(h,t){const e=this.cache;Qt(e,t)||(h.uniform3iv(this.addr,t),Yt(e,t))}function ZA(h,t){const e=this.cache;Qt(e,t)||(h.uniform4iv(this.addr,t),Yt(e,t))}function $A(h,t){const e=this.cache;e[0]!==t&&(h.uniform1ui(this.addr,t),e[0]=t)}function tv(h,t){const e=this.cache;Qt(e,t)||(h.uniform2uiv(this.addr,t),Yt(e,t))}function ev(h,t){const e=this.cache;Qt(e,t)||(h.uniform3uiv(this.addr,t),Yt(e,t))}function iv(h,t){const e=this.cache;Qt(e,t)||(h.uniform4uiv(this.addr,t),Yt(e,t))}function nv(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture2D(t||Jo,o)}function rv(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture3D(t||Zo,o)}function sv(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTextureCube(t||$o,o)}function ov(h,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(h.uniform1i(this.addr,o),r[0]=o),e.setTexture2DArray(t||Ko,o)}function av(h){switch(h){case 5126:return kA;case 35664:return GA;case 35665:return HA;case 35666:return WA;case 35674:return qA;case 35675:return XA;case 35676:return QA;case 5124:case 35670:return YA;case 35667:case 35671:return JA;case 35668:case 35672:return KA;case 35669:case 35673:return ZA;case 5125:return $A;case 36294:return tv;case 36295:return ev;case 36296:return iv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return rv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return ov}}function lv(h,t){h.uniform1fv(this.addr,t)}function cv(h,t){const e=nn(t,this.size,2);h.uniform2fv(this.addr,e)}function hv(h,t){const e=nn(t,this.size,3);h.uniform3fv(this.addr,e)}function uv(h,t){const e=nn(t,this.size,4);h.uniform4fv(this.addr,e)}function dv(h,t){const e=nn(t,this.size,4);h.uniformMatrix2fv(this.addr,!1,e)}function mv(h,t){const e=nn(t,this.size,9);h.uniformMatrix3fv(this.addr,!1,e)}function pv(h,t){const e=nn(t,this.size,16);h.uniformMatrix4fv(this.addr,!1,e)}function fv(h,t){h.uniform1iv(this.addr,t)}function gv(h,t){h.uniform2iv(this.addr,t)}function _v(h,t){h.uniform3iv(this.addr,t)}function Av(h,t){h.uniform4iv(this.addr,t)}function vv(h,t){h.uniform1uiv(this.addr,t)}function yv(h,t){h.uniform2uiv(this.addr,t)}function xv(h,t){h.uniform3uiv(this.addr,t)}function bv(h,t){h.uniform4uiv(this.addr,t)}function wv(h,t,e){const r=t.length,o=$n(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture2D(t[c]||Jo,o[c])}function Sv(h,t,e){const r=t.length,o=$n(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Zo,o[c])}function Mv(h,t,e){const r=t.length,o=$n(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTextureCube(t[c]||$o,o[c])}function Bv(h,t,e){const r=t.length,o=$n(e,r);h.uniform1iv(this.addr,o);for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||Ko,o[c])}function Cv(h){switch(h){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return dv;case 35675:return mv;case 35676:return pv;case 5124:case 35670:return fv;case 35667:case 35671:return gv;case 35668:case 35672:return _v;case 35669:case 35673:return Av;case 5125:return vv;case 36294:return yv;case 36295:return xv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return wv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Bv}}class Ev{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.setValue=av(e.type)}}class Tv{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.size=e.size,this.setValue=Cv(e.type)}}class Iv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const o=this.seq;for(let c=0,m=o.length;c!==m;++c){const d=o[c];d.setValue(t,e[d.id],r)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function ho(h,t){h.seq.push(t),h.map[t.id]=t}function Pv(h,t,e){const r=h.name,o=r.length;for(Or.lastIndex=0;;){const c=Or.exec(r),m=Or.lastIndex;let d=c[1];const A=c[2]==="]",_=c[3];if(A&&(d=d|0),_===void 0||_==="["&&m+2===o){ho(e,_===void 0?new Ev(d,h,t):new Tv(d,h,t));break}else{let s=e.map[d];s===void 0&&(s=new Iv(d),ho(e,s)),e=s}}}class qn{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,35718);for(let o=0;o<r;++o){const c=t.getActiveUniform(e,o),m=t.getUniformLocation(e,c.name);Pv(c,m,this)}}setValue(t,e,r,o){const c=this.map[e];c!==void 0&&c.setValue(t,r,o)}setOptional(t,e,r){const o=e[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,e,r,o){for(let c=0,m=e.length;c!==m;++c){const d=e[c],A=r[d.id];A.needsUpdate!==!1&&d.setValue(t,A.value,o)}}static seqWithValue(t,e){const r=[];for(let o=0,c=t.length;o!==c;++o){const m=t[o];m.id in e&&r.push(m)}return r}}function uo(h,t,e){const r=h.createShader(t);return h.shaderSource(r,e),h.compileShader(r),r}let Dv=0;function Lv(h,t){const e=h.split(`
`),r=[],o=Math.max(t-6,0),c=Math.min(t+6,e.length);for(let m=o;m<c;m++){const d=m+1;r.push(`${d===t?">":" "} ${d}: ${e[m]}`)}return r.join(`
`)}function Rv(h){switch(h){case Ai:return["Linear","( value )"];case Et:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",h),["Linear","( value )"]}}function mo(h,t,e){const r=h.getShaderParameter(t,35713),o=h.getShaderInfoLog(t).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const m=parseInt(c[1]);return e.toUpperCase()+`

`+o+`

`+Lv(h.getShaderSource(t),m)}else return o}function zv(h,t){const e=Rv(t);return"vec4 "+h+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ov(h,t){let e;switch(t){case rf:e="Linear";break;case sf:e="Reinhard";break;case of:e="OptimizedCineon";break;case af:e="ACESFilmic";break;case lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+h+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vv(h){return[h.extensionDerivatives||!!h.envMapCubeUVHeight||h.bumpMap||h.tangentSpaceNormalMap||h.clearcoatNormalMap||h.flatShading||h.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(h.extensionFragDepth||h.logarithmicDepthBuffer)&&h.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",h.extensionDrawBuffers&&h.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(h.extensionShaderTextureLOD||h.envMap||h.transmission)&&h.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mn).join(`
`)}function Fv(h){const t=[];for(const e in h){const r=h[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function Nv(h,t){const e={},r=h.getProgramParameter(t,35721);for(let o=0;o<r;o++){const c=h.getActiveAttrib(t,o),m=c.name;let d=1;c.type===35674&&(d=2),c.type===35675&&(d=3),c.type===35676&&(d=4),e[m]={type:c.type,location:h.getAttribLocation(t,m),locationSize:d}}return e}function mn(h){return h!==""}function po(h,t){return h.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fo(h,t){return h.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(h){return h.replace(Uv,jv)}function jv(h,t){const e=ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Xr(e)}const kv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(h){return h.replace(Gv,ta).replace(kv,Hv)}function Hv(h,t,e,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),ta(h,t,e,r)}function ta(h,t,e,r){let o="";for(let c=parseInt(t);c<parseInt(e);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function _o(h){let t="precision "+h.precision+` float;
precision `+h.precision+" int;";return h.precision==="highp"?t+=`
#define HIGH_PRECISION`:h.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:h.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wv(h){let t="SHADOWMAP_TYPE_BASIC";return h.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":h.shadowMapType===Rp?t="SHADOWMAP_TYPE_PCF_SOFT":h.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function qv(h){let t="ENVMAP_TYPE_CUBE";if(h.envMap)switch(h.envMapMode){case Ki:case Zi:t="ENVMAP_TYPE_CUBE";break;case Jn:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xv(h){let t="ENVMAP_MODE_REFLECTION";if(h.envMap)switch(h.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function Qv(h){let t="ENVMAP_BLENDING_NONE";if(h.envMap)switch(h.combine){case Lo:t="ENVMAP_BLENDING_MULTIPLY";break;case ef:t="ENVMAP_BLENDING_MIX";break;case nf:t="ENVMAP_BLENDING_ADD";break}return t}function Yv(h){const t=h.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:r,maxMip:e}}function Jv(h,t,e,r){const o=h.getContext(),c=e.defines;let m=e.vertexShader,d=e.fragmentShader;const A=Wv(e),_=qv(e),p=Xv(e),s=Qv(e),y=Yv(e),b=e.isWebGL2?"":Vv(e),I=Fv(c),w=o.createProgram();let x,L,U=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=[I].filter(mn).join(`
`),x.length>0&&(x+=`
`),L=[b,I].filter(mn).join(`
`),L.length>0&&(L+=`
`)):(x=[_o(e),"#define SHADER_NAME "+e.shaderName,I,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mn).join(`
`),L=[b,_o(e),"#define SHADER_NAME "+e.shaderName,I,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+_:"",e.envMap?"#define "+p:"",e.envMap?"#define "+s:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+A:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ke?"#define TONE_MAPPING":"",e.toneMapping!==ke?ct.tonemapping_pars_fragment:"",e.toneMapping!==ke?Ov("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ct.encodings_pars_fragment,zv("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mn).join(`
`)),m=Xr(m),m=po(m,e),m=fo(m,e),d=Xr(d),d=po(d,e),d=fo(d,e),m=go(m),d=go(d),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,L=["#define varying in",e.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const M=U+x+m,P=U+L+d,k=uo(o,35633,M),Y=uo(o,35632,P);if(o.attachShader(w,k),o.attachShader(w,Y),e.index0AttributeName!==void 0?o.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w),h.debug.checkShaderErrors){const q=o.getProgramInfoLog(w).trim(),l0=o.getShaderInfoLog(k).trim(),n0=o.getShaderInfoLog(Y).trim();let b0=!0,P0=!0;if(o.getProgramParameter(w,35714)===!1){b0=!1;const J=mo(o,k,"vertex"),c0=mo(o,Y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,35715)+`

Program Info Log: `+q+`
`+J+`
`+c0)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(l0===""||n0==="")&&(P0=!1);P0&&(this.diagnostics={runnable:b0,programLog:q,vertexShader:{log:l0,prefix:x},fragmentShader:{log:n0,prefix:L}})}o.deleteShader(k),o.deleteShader(Y);let t0;this.getUniforms=function(){return t0===void 0&&(t0=new qn(o,w)),t0};let N;return this.getAttributes=function(){return N===void 0&&(N=Nv(o,w)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.name=e.shaderName,this.id=Dv++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=Y,this}let Kv=0;class Zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(e),c=this._getShaderStage(r),m=this._getShaderCacheForMaterial(t);return m.has(o)===!1&&(m.add(o),o.usedTimes++),m.has(c)===!1&&(m.add(c),c.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const r=new $v(t);e.set(t,r)}return e.get(t)}}class $v{constructor(t){this.id=Kv++,this.code=t,this.usedTimes=0}}function ty(h,t,e,r,o,c,m){const d=new Zr,A=new Zv,_=[],p=o.isWebGL2,s=o.logarithmicDepthBuffer,y=o.vertexTextures;let b=o.precision;const I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N,q,l0,n0,b0){const P0=n0.fog,J=b0.geometry,c0=N.isMeshStandardMaterial?n0.environment:null,o0=(N.isMeshStandardMaterial?e:t).get(N.envMap||c0),r0=!!o0&&o0.mapping===Jn?o0.image.height:null,d0=I[N.type];N.precision!==null&&(b=o.getMaxPrecision(N.precision),b!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",b,"instead."));const e0=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=e0!==void 0?e0.length:0;let C0=0;J.morphAttributes.position!==void 0&&(C0=1),J.morphAttributes.normal!==void 0&&(C0=2),J.morphAttributes.color!==void 0&&(C0=3);let f0,L0,N0,j0;if(d0){const ut=Be[d0];f0=ut.vertexShader,L0=ut.fragmentShader}else f0=N.vertexShader,L0=N.fragmentShader,A.update(N),N0=A.getVertexShaderID(N),j0=A.getFragmentShaderID(N);const m0=h.getRenderTarget(),Bt=N.alphaTest>0,at=N.clearcoat>0,J0=N.iridescence>0;return{isWebGL2:p,shaderID:d0,shaderName:N.type,vertexShader:f0,fragmentShader:L0,defines:N.defines,customVertexShaderID:N0,customFragmentShaderID:j0,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:b,instancing:b0.isInstancedMesh===!0,instancingColor:b0.isInstancedMesh===!0&&b0.instanceColor!==null,supportsVertexTextures:y,outputEncoding:m0===null?h.outputEncoding:m0.isXRRenderTarget===!0?m0.texture.encoding:Ai,map:!!N.map,matcap:!!N.matcap,envMap:!!o0,envMapMode:o0&&o0.mapping,envMapCubeUVHeight:r0,lightMap:!!N.lightMap,aoMap:!!N.aoMap,emissiveMap:!!N.emissiveMap,bumpMap:!!N.bumpMap,normalMap:!!N.normalMap,objectSpaceNormalMap:N.normalMapType===Cf,tangentSpaceNormalMap:N.normalMapType===Oo,decodeVideoTexture:!!N.map&&N.map.isVideoTexture===!0&&N.map.encoding===Et,clearcoat:at,clearcoatMap:at&&!!N.clearcoatMap,clearcoatRoughnessMap:at&&!!N.clearcoatRoughnessMap,clearcoatNormalMap:at&&!!N.clearcoatNormalMap,iridescence:J0,iridescenceMap:J0&&!!N.iridescenceMap,iridescenceThicknessMap:J0&&!!N.iridescenceThicknessMap,displacementMap:!!N.displacementMap,roughnessMap:!!N.roughnessMap,metalnessMap:!!N.metalnessMap,specularMap:!!N.specularMap,specularIntensityMap:!!N.specularIntensityMap,specularColorMap:!!N.specularColorMap,opaque:N.transparent===!1&&N.blending===Xi,alphaMap:!!N.alphaMap,alphaTest:Bt,gradientMap:!!N.gradientMap,sheen:N.sheen>0,sheenColorMap:!!N.sheenColorMap,sheenRoughnessMap:!!N.sheenRoughnessMap,transmission:N.transmission>0,transmissionMap:!!N.transmissionMap,thicknessMap:!!N.thicknessMap,combine:N.combine,vertexTangents:!!N.normalMap&&!!J.attributes.tangent,vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!N.map||!!N.bumpMap||!!N.normalMap||!!N.specularMap||!!N.alphaMap||!!N.emissiveMap||!!N.roughnessMap||!!N.metalnessMap||!!N.clearcoatMap||!!N.clearcoatRoughnessMap||!!N.clearcoatNormalMap||!!N.iridescenceMap||!!N.iridescenceThicknessMap||!!N.displacementMap||!!N.transmissionMap||!!N.thicknessMap||!!N.specularIntensityMap||!!N.specularColorMap||!!N.sheenColorMap||!!N.sheenRoughnessMap,uvsVertexOnly:!(!!N.map||!!N.bumpMap||!!N.normalMap||!!N.specularMap||!!N.alphaMap||!!N.emissiveMap||!!N.roughnessMap||!!N.metalnessMap||!!N.clearcoatNormalMap||!!N.iridescenceMap||!!N.iridescenceThicknessMap||N.transmission>0||!!N.transmissionMap||!!N.thicknessMap||!!N.specularIntensityMap||!!N.specularColorMap||N.sheen>0||!!N.sheenColorMap||!!N.sheenRoughnessMap)&&!!N.displacementMap,fog:!!P0,useFog:N.fog===!0,fogExp2:P0&&P0.isFogExp2,flatShading:!!N.flatShading,sizeAttenuation:N.sizeAttenuation,logarithmicDepthBuffer:s,skinning:b0.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:C0,numDirLights:q.directional.length,numPointLights:q.point.length,numSpotLights:q.spot.length,numRectAreaLights:q.rectArea.length,numHemiLights:q.hemi.length,numDirLightShadows:q.directionalShadowMap.length,numPointLightShadows:q.pointShadowMap.length,numSpotLightShadows:q.spotShadowMap.length,numClippingPlanes:m.numPlanes,numClipIntersection:m.numIntersection,dithering:N.dithering,shadowMapEnabled:h.shadowMap.enabled&&l0.length>0,shadowMapType:h.shadowMap.type,toneMapping:N.toneMapped?h.toneMapping:ke,physicallyCorrectLights:h.physicallyCorrectLights,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Ji,flipSided:N.side===ye,useDepthPacking:!!N.depthPacking,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionDerivatives:N.extensions&&N.extensions.derivatives,extensionFragDepth:N.extensions&&N.extensions.fragDepth,extensionDrawBuffers:N.extensions&&N.extensions.drawBuffers,extensionShaderTextureLOD:N.extensions&&N.extensions.shaderTextureLOD,rendererExtensionFragDepth:p||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||r.has("EXT_shader_texture_lod"),customProgramCacheKey:N.customProgramCacheKey()}}function x(N){const q=[];if(N.shaderID?q.push(N.shaderID):(q.push(N.customVertexShaderID),q.push(N.customFragmentShaderID)),N.defines!==void 0)for(const l0 in N.defines)q.push(l0),q.push(N.defines[l0]);return N.isRawShaderMaterial===!1&&(L(q,N),U(q,N),q.push(h.outputEncoding)),q.push(N.customProgramCacheKey),q.join()}function L(N,q){N.push(q.precision),N.push(q.outputEncoding),N.push(q.envMapMode),N.push(q.envMapCubeUVHeight),N.push(q.combine),N.push(q.vertexUvs),N.push(q.fogExp2),N.push(q.sizeAttenuation),N.push(q.morphTargetsCount),N.push(q.morphAttributeCount),N.push(q.numDirLights),N.push(q.numPointLights),N.push(q.numSpotLights),N.push(q.numHemiLights),N.push(q.numRectAreaLights),N.push(q.numDirLightShadows),N.push(q.numPointLightShadows),N.push(q.numSpotLightShadows),N.push(q.shadowMapType),N.push(q.toneMapping),N.push(q.numClippingPlanes),N.push(q.numClipIntersection),N.push(q.depthPacking)}function U(N,q){d.disableAll(),q.isWebGL2&&d.enable(0),q.supportsVertexTextures&&d.enable(1),q.instancing&&d.enable(2),q.instancingColor&&d.enable(3),q.map&&d.enable(4),q.matcap&&d.enable(5),q.envMap&&d.enable(6),q.lightMap&&d.enable(7),q.aoMap&&d.enable(8),q.emissiveMap&&d.enable(9),q.bumpMap&&d.enable(10),q.normalMap&&d.enable(11),q.objectSpaceNormalMap&&d.enable(12),q.tangentSpaceNormalMap&&d.enable(13),q.clearcoat&&d.enable(14),q.clearcoatMap&&d.enable(15),q.clearcoatRoughnessMap&&d.enable(16),q.clearcoatNormalMap&&d.enable(17),q.iridescence&&d.enable(18),q.iridescenceMap&&d.enable(19),q.iridescenceThicknessMap&&d.enable(20),q.displacementMap&&d.enable(21),q.specularMap&&d.enable(22),q.roughnessMap&&d.enable(23),q.metalnessMap&&d.enable(24),q.gradientMap&&d.enable(25),q.alphaMap&&d.enable(26),q.alphaTest&&d.enable(27),q.vertexColors&&d.enable(28),q.vertexAlphas&&d.enable(29),q.vertexUvs&&d.enable(30),q.vertexTangents&&d.enable(31),q.uvsVertexOnly&&d.enable(32),q.fog&&d.enable(33),N.push(d.mask),d.disableAll(),q.useFog&&d.enable(0),q.flatShading&&d.enable(1),q.logarithmicDepthBuffer&&d.enable(2),q.skinning&&d.enable(3),q.morphTargets&&d.enable(4),q.morphNormals&&d.enable(5),q.morphColors&&d.enable(6),q.premultipliedAlpha&&d.enable(7),q.shadowMapEnabled&&d.enable(8),q.physicallyCorrectLights&&d.enable(9),q.doubleSided&&d.enable(10),q.flipSided&&d.enable(11),q.useDepthPacking&&d.enable(12),q.dithering&&d.enable(13),q.specularIntensityMap&&d.enable(14),q.specularColorMap&&d.enable(15),q.transmission&&d.enable(16),q.transmissionMap&&d.enable(17),q.thicknessMap&&d.enable(18),q.sheen&&d.enable(19),q.sheenColorMap&&d.enable(20),q.sheenRoughnessMap&&d.enable(21),q.decodeVideoTexture&&d.enable(22),q.opaque&&d.enable(23),N.push(d.mask)}function M(N){const q=I[N.type];let l0;if(q){const n0=Be[q];l0=kf.clone(n0.uniforms)}else l0=N.uniforms;return l0}function P(N,q){let l0;for(let n0=0,b0=_.length;n0<b0;n0++){const P0=_[n0];if(P0.cacheKey===q){l0=P0,++l0.usedTimes;break}}return l0===void 0&&(l0=new Jv(h,q,N,c),_.push(l0)),l0}function k(N){if(--N.usedTimes===0){const q=_.indexOf(N);_[q]=_[_.length-1],_.pop(),N.destroy()}}function Y(N){A.remove(N)}function t0(){A.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:M,acquireProgram:P,releaseProgram:k,releaseShaderCache:Y,programs:_,dispose:t0}}function ey(){let h=new WeakMap;function t(c){let m=h.get(c);return m===void 0&&(m={},h.set(c,m)),m}function e(c){h.delete(c)}function r(c,m,d){h.get(c)[m]=d}function o(){h=new WeakMap}return{get:t,remove:e,update:r,dispose:o}}function iy(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.material.id!==t.material.id?h.material.id-t.material.id:h.z!==t.z?h.z-t.z:h.id-t.id}function Ao(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.z!==t.z?t.z-h.z:h.id-t.id}function vo(){const h=[];let t=0;const e=[],r=[],o=[];function c(){t=0,e.length=0,r.length=0,o.length=0}function m(s,y,b,I,w,x){let L=h[t];return L===void 0?(L={id:s.id,object:s,geometry:y,material:b,groupOrder:I,renderOrder:s.renderOrder,z:w,group:x},h[t]=L):(L.id=s.id,L.object=s,L.geometry=y,L.material=b,L.groupOrder=I,L.renderOrder=s.renderOrder,L.z=w,L.group=x),t++,L}function d(s,y,b,I,w,x){const L=m(s,y,b,I,w,x);b.transmission>0?r.push(L):b.transparent===!0?o.push(L):e.push(L)}function A(s,y,b,I,w,x){const L=m(s,y,b,I,w,x);b.transmission>0?r.unshift(L):b.transparent===!0?o.unshift(L):e.unshift(L)}function _(s,y){e.length>1&&e.sort(s||iy),r.length>1&&r.sort(y||Ao),o.length>1&&o.sort(y||Ao)}function p(){for(let s=t,y=h.length;s<y;s++){const b=h[s];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:r,transparent:o,init:c,push:d,unshift:A,finish:p,sort:_}}function ny(){let h=new WeakMap;function t(r,o){let c;return h.has(r)===!1?(c=new vo,h.set(r,[c])):o>=h.get(r).length?(c=new vo,h.get(r).push(c)):c=h.get(r)[o],c}function e(){h=new WeakMap}return{get:t,dispose:e}}function ry(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new yt};break;case"SpotLight":e={position:new K,direction:new K,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new K,halfWidth:new K,halfHeight:new K};break}return h[t.id]=e,e}}}function sy(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return h[t.id]=e,e}}}let oy=0;function ay(h,t){return(t.castShadow?1:0)-(h.castShadow?1:0)}function ly(h,t){const e=new ry,r=sy(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)o.probe.push(new K);const c=new K,m=new Nt,d=new Nt;function A(p,s){let y=0,b=0,I=0;for(let q=0;q<9;q++)o.probe[q].set(0,0,0);let w=0,x=0,L=0,U=0,M=0,P=0,k=0,Y=0;p.sort(ay);const t0=s!==!0?Math.PI:1;for(let q=0,l0=p.length;q<l0;q++){const n0=p[q],b0=n0.color,P0=n0.intensity,J=n0.distance,c0=n0.shadow&&n0.shadow.map?n0.shadow.map.texture:null;if(n0.isAmbientLight)y+=b0.r*P0*t0,b+=b0.g*P0*t0,I+=b0.b*P0*t0;else if(n0.isLightProbe)for(let o0=0;o0<9;o0++)o.probe[o0].addScaledVector(n0.sh.coefficients[o0],P0);else if(n0.isDirectionalLight){const o0=e.get(n0);if(o0.color.copy(n0.color).multiplyScalar(n0.intensity*t0),n0.castShadow){const r0=n0.shadow,d0=r.get(n0);d0.shadowBias=r0.bias,d0.shadowNormalBias=r0.normalBias,d0.shadowRadius=r0.radius,d0.shadowMapSize=r0.mapSize,o.directionalShadow[w]=d0,o.directionalShadowMap[w]=c0,o.directionalShadowMatrix[w]=n0.shadow.matrix,P++}o.directional[w]=o0,w++}else if(n0.isSpotLight){const o0=e.get(n0);if(o0.position.setFromMatrixPosition(n0.matrixWorld),o0.color.copy(b0).multiplyScalar(P0*t0),o0.distance=J,o0.coneCos=Math.cos(n0.angle),o0.penumbraCos=Math.cos(n0.angle*(1-n0.penumbra)),o0.decay=n0.decay,n0.castShadow){const r0=n0.shadow,d0=r.get(n0);d0.shadowBias=r0.bias,d0.shadowNormalBias=r0.normalBias,d0.shadowRadius=r0.radius,d0.shadowMapSize=r0.mapSize,o.spotShadow[L]=d0,o.spotShadowMap[L]=c0,o.spotShadowMatrix[L]=n0.shadow.matrix,Y++}o.spot[L]=o0,L++}else if(n0.isRectAreaLight){const o0=e.get(n0);o0.color.copy(b0).multiplyScalar(P0),o0.halfWidth.set(n0.width*.5,0,0),o0.halfHeight.set(0,n0.height*.5,0),o.rectArea[U]=o0,U++}else if(n0.isPointLight){const o0=e.get(n0);if(o0.color.copy(n0.color).multiplyScalar(n0.intensity*t0),o0.distance=n0.distance,o0.decay=n0.decay,n0.castShadow){const r0=n0.shadow,d0=r.get(n0);d0.shadowBias=r0.bias,d0.shadowNormalBias=r0.normalBias,d0.shadowRadius=r0.radius,d0.shadowMapSize=r0.mapSize,d0.shadowCameraNear=r0.camera.near,d0.shadowCameraFar=r0.camera.far,o.pointShadow[x]=d0,o.pointShadowMap[x]=c0,o.pointShadowMatrix[x]=n0.shadow.matrix,k++}o.point[x]=o0,x++}else if(n0.isHemisphereLight){const o0=e.get(n0);o0.skyColor.copy(n0.color).multiplyScalar(P0*t0),o0.groundColor.copy(n0.groundColor).multiplyScalar(P0*t0),o.hemi[M]=o0,M++}}U>0&&(t.isWebGL2||h.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=O0.LTC_FLOAT_1,o.rectAreaLTC2=O0.LTC_FLOAT_2):h.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=O0.LTC_HALF_1,o.rectAreaLTC2=O0.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=y,o.ambient[1]=b,o.ambient[2]=I;const N=o.hash;(N.directionalLength!==w||N.pointLength!==x||N.spotLength!==L||N.rectAreaLength!==U||N.hemiLength!==M||N.numDirectionalShadows!==P||N.numPointShadows!==k||N.numSpotShadows!==Y)&&(o.directional.length=w,o.spot.length=L,o.rectArea.length=U,o.point.length=x,o.hemi.length=M,o.directionalShadow.length=P,o.directionalShadowMap.length=P,o.pointShadow.length=k,o.pointShadowMap.length=k,o.spotShadow.length=Y,o.spotShadowMap.length=Y,o.directionalShadowMatrix.length=P,o.pointShadowMatrix.length=k,o.spotShadowMatrix.length=Y,N.directionalLength=w,N.pointLength=x,N.spotLength=L,N.rectAreaLength=U,N.hemiLength=M,N.numDirectionalShadows=P,N.numPointShadows=k,N.numSpotShadows=Y,o.version=oy++)}function _(p,s){let y=0,b=0,I=0,w=0,x=0;const L=s.matrixWorldInverse;for(let U=0,M=p.length;U<M;U++){const P=p[U];if(P.isDirectionalLight){const k=o.directional[y];k.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(L),y++}else if(P.isSpotLight){const k=o.spot[I];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(L),k.direction.setFromMatrixPosition(P.matrixWorld),c.setFromMatrixPosition(P.target.matrixWorld),k.direction.sub(c),k.direction.transformDirection(L),I++}else if(P.isRectAreaLight){const k=o.rectArea[w];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(L),d.identity(),m.copy(P.matrixWorld),m.premultiply(L),d.extractRotation(m),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),k.halfWidth.applyMatrix4(d),k.halfHeight.applyMatrix4(d),w++}else if(P.isPointLight){const k=o.point[b];k.position.setFromMatrixPosition(P.matrixWorld),k.position.applyMatrix4(L),b++}else if(P.isHemisphereLight){const k=o.hemi[x];k.direction.setFromMatrixPosition(P.matrixWorld),k.direction.transformDirection(L),x++}}}return{setup:A,setupView:_,state:o}}function yo(h,t){const e=new ly(h,t),r=[],o=[];function c(){r.length=0,o.length=0}function m(s){r.push(s)}function d(s){o.push(s)}function A(s){e.setup(r,s)}function _(s){e.setupView(r,s)}return{init:c,state:{lightsArray:r,shadowsArray:o,lights:e},setupLights:A,setupLightsView:_,pushLight:m,pushShadow:d}}function cy(h,t){let e=new WeakMap;function r(c,m=0){let d;return e.has(c)===!1?(d=new yo(h,t),e.set(c,[d])):m>=e.get(c).length?(d=new yo(h,t),e.get(c).push(d)):d=e.get(c)[m],d}function o(){e=new WeakMap}return{get:r,dispose:o}}class hy extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uy extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function py(h,t,e){let r=new Xo;const o=new lt,c=new lt,m=new Ot,d=new hy({depthPacking:Bf}),A=new uy,_={},p=e.maxTextureSize,s={0:ye,1:fn,2:Ji},y=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:dy,fragmentShader:my}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const I=new wi;I.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new je(I,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io,this.render=function(P,k,Y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;const t0=h.getRenderTarget(),N=h.getActiveCubeFace(),q=h.getActiveMipmapLevel(),l0=h.state;l0.setBlending(ei),l0.buffers.color.setClear(1,1,1,1),l0.buffers.depth.setTest(!0),l0.setScissorTest(!1);for(let n0=0,b0=P.length;n0<b0;n0++){const P0=P[n0],J=P0.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",P0,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;o.copy(J.mapSize);const c0=J.getFrameExtents();if(o.multiply(c0),c.copy(J.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(c.x=Math.floor(p/c0.x),o.x=c.x*c0.x,J.mapSize.x=c.x),o.y>p&&(c.y=Math.floor(p/c0.y),o.y=c.y*c0.y,J.mapSize.y=c.y)),J.map===null){const r0=this.type!==dn?{minFilter:Gt,magFilter:Gt}:{};J.map=new vi(o.x,o.y,r0),J.map.texture.name=P0.name+".shadowMap",J.camera.updateProjectionMatrix()}h.setRenderTarget(J.map),h.clear();const o0=J.getViewportCount();for(let r0=0;r0<o0;r0++){const d0=J.getViewport(r0);m.set(c.x*d0.x,c.y*d0.y,c.x*d0.z,c.y*d0.w),l0.viewport(m),J.updateMatrices(P0,r0),r=J.getFrustum(),M(k,Y,J.camera,P0,this.type)}J.isPointLightShadow!==!0&&this.type===dn&&L(J,Y),J.needsUpdate=!1}x.needsUpdate=!1,h.setRenderTarget(t0,N,q)};function L(P,k){const Y=t.update(w);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new vi(o.x,o.y)),y.uniforms.shadow_pass.value=P.map.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,h.setRenderTarget(P.mapPass),h.clear(),h.renderBufferDirect(k,null,Y,y,w,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value=P.mapSize,b.uniforms.radius.value=P.radius,h.setRenderTarget(P.map),h.clear(),h.renderBufferDirect(k,null,Y,b,w,null)}function U(P,k,Y,t0,N,q){let l0=null;const n0=Y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(n0!==void 0?l0=n0:l0=Y.isPointLight===!0?A:d,h.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0){const b0=l0.uuid,P0=k.uuid;let J=_[b0];J===void 0&&(J={},_[b0]=J);let c0=J[P0];c0===void 0&&(c0=l0.clone(),J[P0]=c0),l0=c0}return l0.visible=k.visible,l0.wireframe=k.wireframe,q===dn?l0.side=k.shadowSide!==null?k.shadowSide:k.side:l0.side=k.shadowSide!==null?k.shadowSide:s[k.side],l0.alphaMap=k.alphaMap,l0.alphaTest=k.alphaTest,l0.clipShadows=k.clipShadows,l0.clippingPlanes=k.clippingPlanes,l0.clipIntersection=k.clipIntersection,l0.displacementMap=k.displacementMap,l0.displacementScale=k.displacementScale,l0.displacementBias=k.displacementBias,l0.wireframeLinewidth=k.wireframeLinewidth,l0.linewidth=k.linewidth,Y.isPointLight===!0&&l0.isMeshDistanceMaterial===!0&&(l0.referencePosition.setFromMatrixPosition(Y.matrixWorld),l0.nearDistance=t0,l0.farDistance=N),l0}function M(P,k,Y,t0,N){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&N===dn)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld);const n0=t.update(P),b0=P.material;if(Array.isArray(b0)){const P0=n0.groups;for(let J=0,c0=P0.length;J<c0;J++){const o0=P0[J],r0=b0[o0.materialIndex];if(r0&&r0.visible){const d0=U(P,r0,t0,Y.near,Y.far,N);h.renderBufferDirect(Y,null,n0,d0,P,o0)}}}else if(b0.visible){const P0=U(P,b0,t0,Y.near,Y.far,N);h.renderBufferDirect(Y,null,n0,P0,P,null)}}const l0=P.children;for(let n0=0,b0=l0.length;n0<b0;n0++)M(l0[n0],k,Y,t0,N)}}function fy(h,t,e){const r=e.isWebGL2;function o(){let W=!1;const S0=new Ot;let T0=null;const q0=new Ot(0,0,0,0);return{setMask:function(R0){T0!==R0&&!W&&(h.colorMask(R0,R0,R0,R0),T0=R0)},setLocked:function(R0){W=R0},setClear:function(R0,k0,I0,$0,pt){pt===!0&&(R0*=$0,k0*=$0,I0*=$0),S0.set(R0,k0,I0,$0),q0.equals(S0)===!1&&(h.clearColor(R0,k0,I0,$0),q0.copy(S0))},reset:function(){W=!1,T0=null,q0.set(-1,0,0,0)}}}function c(){let W=!1,S0=null,T0=null,q0=null;return{setTest:function(R0){R0?j0(2929):m0(2929)},setMask:function(R0){S0!==R0&&!W&&(h.depthMask(R0),S0=R0)},setFunc:function(R0){if(T0!==R0){if(R0)switch(R0){case Qp:h.depthFunc(512);break;case Yp:h.depthFunc(519);break;case Jp:h.depthFunc(513);break;case Ur:h.depthFunc(515);break;case Kp:h.depthFunc(514);break;case Zp:h.depthFunc(518);break;case $p:h.depthFunc(516);break;case tf:h.depthFunc(517);break;default:h.depthFunc(515)}else h.depthFunc(515);T0=R0}},setLocked:function(R0){W=R0},setClear:function(R0){q0!==R0&&(h.clearDepth(R0),q0=R0)},reset:function(){W=!1,S0=null,T0=null,q0=null}}}function m(){let W=!1,S0=null,T0=null,q0=null,R0=null,k0=null,I0=null,$0=null,pt=null;return{setTest:function(V0){W||(V0?j0(2960):m0(2960))},setMask:function(V0){S0!==V0&&!W&&(h.stencilMask(V0),S0=V0)},setFunc:function(V0,wt,Ut){(T0!==V0||q0!==wt||R0!==Ut)&&(h.stencilFunc(V0,wt,Ut),T0=V0,q0=wt,R0=Ut)},setOp:function(V0,wt,Ut){(k0!==V0||I0!==wt||$0!==Ut)&&(h.stencilOp(V0,wt,Ut),k0=V0,I0=wt,$0=Ut)},setLocked:function(V0){W=V0},setClear:function(V0){pt!==V0&&(h.clearStencil(V0),pt=V0)},reset:function(){W=!1,S0=null,T0=null,q0=null,R0=null,k0=null,I0=null,$0=null,pt=null}}}const d=new o,A=new c,_=new m;let p={},s={},y=new WeakMap,b=[],I=null,w=!1,x=null,L=null,U=null,M=null,P=null,k=null,Y=null,t0=!1,N=null,q=null,l0=null,n0=null,b0=null;const P0=h.getParameter(35661);let J=!1,c0=0;const o0=h.getParameter(7938);o0.indexOf("WebGL")!==-1?(c0=parseFloat(/^WebGL (\d)/.exec(o0)[1]),J=c0>=1):o0.indexOf("OpenGL ES")!==-1&&(c0=parseFloat(/^OpenGL ES (\d)/.exec(o0)[1]),J=c0>=2);let r0=null,d0={};const e0=h.getParameter(3088),Z=h.getParameter(2978),C0=new Ot().fromArray(e0),f0=new Ot().fromArray(Z);function L0(W,S0,T0){const q0=new Uint8Array(4),R0=h.createTexture();h.bindTexture(W,R0),h.texParameteri(W,10241,9728),h.texParameteri(W,10240,9728);for(let k0=0;k0<T0;k0++)h.texImage2D(S0+k0,0,6408,1,1,0,6408,5121,q0);return R0}const N0={};N0[3553]=L0(3553,3553,1),N0[34067]=L0(34067,34069,6),d.setClear(0,0,0,1),A.setClear(1),_.setClear(0),j0(2929),A.setFunc(Ur),vt(!1),bt(ls),j0(2884),ot(ei);function j0(W){p[W]!==!0&&(h.enable(W),p[W]=!0)}function m0(W){p[W]!==!1&&(h.disable(W),p[W]=!1)}function Bt(W,S0){return s[W]!==S0?(h.bindFramebuffer(W,S0),s[W]=S0,r&&(W===36009&&(s[36160]=S0),W===36160&&(s[36009]=S0)),!0):!1}function at(W,S0){let T0=b,q0=!1;if(W)if(T0=y.get(S0),T0===void 0&&(T0=[],y.set(S0,T0)),W.isWebGLMultipleRenderTargets){const R0=W.texture;if(T0.length!==R0.length||T0[0]!==36064){for(let k0=0,I0=R0.length;k0<I0;k0++)T0[k0]=36064+k0;T0.length=R0.length,q0=!0}}else T0[0]!==36064&&(T0[0]=36064,q0=!0);else T0[0]!==1029&&(T0[0]=1029,q0=!0);q0&&(e.isWebGL2?h.drawBuffers(T0):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(T0))}function J0(W){return I!==W?(h.useProgram(W),I=W,!0):!1}const y0={[Wi]:32774,[Vp]:32778,[Fp]:32779};if(r)y0[ds]=32775,y0[ms]=32776;else{const W=t.get("EXT_blend_minmax");W!==null&&(y0[ds]=W.MIN_EXT,y0[ms]=W.MAX_EXT)}const ut={[Np]:0,[Up]:1,[jp]:768,[Po]:770,[Xp]:776,[Wp]:774,[Gp]:772,[kp]:769,[Do]:771,[qp]:775,[Hp]:773};function ot(W,S0,T0,q0,R0,k0,I0,$0){if(W===ei){w===!0&&(m0(3042),w=!1);return}if(w===!1&&(j0(3042),w=!0),W!==Op){if(W!==x||$0!==t0){if((L!==Wi||P!==Wi)&&(h.blendEquation(32774),L=Wi,P=Wi),$0)switch(W){case Xi:h.blendFuncSeparate(1,771,1,771);break;case cs:h.blendFunc(1,1);break;case hs:h.blendFuncSeparate(0,769,0,1);break;case us:h.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Xi:h.blendFuncSeparate(770,771,1,771);break;case cs:h.blendFunc(770,1);break;case hs:h.blendFuncSeparate(0,769,0,1);break;case us:h.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}U=null,M=null,k=null,Y=null,x=W,t0=$0}return}R0=R0||S0,k0=k0||T0,I0=I0||q0,(S0!==L||R0!==P)&&(h.blendEquationSeparate(y0[S0],y0[R0]),L=S0,P=R0),(T0!==U||q0!==M||k0!==k||I0!==Y)&&(h.blendFuncSeparate(ut[T0],ut[q0],ut[k0],ut[I0]),U=T0,M=q0,k=k0,Y=I0),x=W,t0=null}function X0(W,S0){W.side===Ji?m0(2884):j0(2884);let T0=W.side===ye;S0&&(T0=!T0),vt(T0),W.blending===Xi&&W.transparent===!1?ot(ei):ot(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),A.setFunc(W.depthFunc),A.setTest(W.depthTest),A.setMask(W.depthWrite),d.setMask(W.colorWrite);const q0=W.stencilWrite;_.setTest(q0),q0&&(_.setMask(W.stencilWriteMask),_.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),_.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ht(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j0(32926):m0(32926)}function vt(W){N!==W&&(W?h.frontFace(2304):h.frontFace(2305),N=W)}function bt(W){W!==Dp?(j0(2884),W!==q&&(W===ls?h.cullFace(1029):W===Lp?h.cullFace(1028):h.cullFace(1032))):m0(2884),q=W}function Tt(W){W!==l0&&(J&&h.lineWidth(W),l0=W)}function Ht(W,S0,T0){W?(j0(32823),(n0!==S0||b0!==T0)&&(h.polygonOffset(S0,T0),n0=S0,b0=T0)):m0(32823)}function Ct(W){W?j0(3089):m0(3089)}function ft(W){W===void 0&&(W=33984+P0-1),r0!==W&&(h.activeTexture(W),r0=W)}function Wt(W,S0){r0===null&&ft();let T0=d0[r0];T0===void 0&&(T0={type:void 0,texture:void 0},d0[r0]=T0),(T0.type!==W||T0.texture!==S0)&&(h.bindTexture(W,S0||N0[W]),T0.type=W,T0.texture=S0)}function qt(){const W=d0[r0];W!==void 0&&W.type!==void 0&&(h.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function j(){try{h.compressedTexImage2D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function R(){try{h.texSubImage2D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function a0(){try{h.texSubImage3D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function w0(){try{h.compressedTexSubImage2D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function A0(){try{h.texStorage2D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function F0(){try{h.texStorage3D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K0(){try{h.texImage2D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function V(){try{h.texImage3D.apply(h,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _0(W){C0.equals(W)===!1&&(h.scissor(W.x,W.y,W.z,W.w),C0.copy(W))}function M0(W){f0.equals(W)===!1&&(h.viewport(W.x,W.y,W.z,W.w),f0.copy(W))}function E0(){h.disable(3042),h.disable(2884),h.disable(2929),h.disable(32823),h.disable(3089),h.disable(2960),h.disable(32926),h.blendEquation(32774),h.blendFunc(1,0),h.blendFuncSeparate(1,0,1,0),h.colorMask(!0,!0,!0,!0),h.clearColor(0,0,0,0),h.depthMask(!0),h.depthFunc(513),h.clearDepth(1),h.stencilMask(4294967295),h.stencilFunc(519,0,4294967295),h.stencilOp(7680,7680,7680),h.clearStencil(0),h.cullFace(1029),h.frontFace(2305),h.polygonOffset(0,0),h.activeTexture(33984),h.bindFramebuffer(36160,null),r===!0&&(h.bindFramebuffer(36009,null),h.bindFramebuffer(36008,null)),h.useProgram(null),h.lineWidth(1),h.scissor(0,0,h.canvas.width,h.canvas.height),h.viewport(0,0,h.canvas.width,h.canvas.height),p={},r0=null,d0={},s={},y=new WeakMap,b=[],I=null,w=!1,x=null,L=null,U=null,M=null,P=null,k=null,Y=null,t0=!1,N=null,q=null,l0=null,n0=null,b0=null,C0.set(0,0,h.canvas.width,h.canvas.height),f0.set(0,0,h.canvas.width,h.canvas.height),d.reset(),A.reset(),_.reset()}return{buffers:{color:d,depth:A,stencil:_},enable:j0,disable:m0,bindFramebuffer:Bt,drawBuffers:at,useProgram:J0,setBlending:ot,setMaterial:X0,setFlipSided:vt,setCullFace:bt,setLineWidth:Tt,setPolygonOffset:Ht,setScissorTest:Ct,activeTexture:ft,bindTexture:Wt,unbindTexture:qt,compressedTexImage2D:j,texImage2D:K0,texImage3D:V,texStorage2D:A0,texStorage3D:F0,texSubImage2D:R,texSubImage3D:a0,compressedTexSubImage2D:w0,scissor:_0,viewport:M0,reset:E0}}function gy(h,t,e,r,o,c,m){const d=o.isWebGL2,A=o.maxTextures,_=o.maxCubemapSize,p=o.maxTextureSize,s=o.maxSamples,y=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,b=/OculusBrowser/g.test(navigator.userAgent),I=new WeakMap;let w;const x=new WeakMap;let L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(j,R){return L?new OffscreenCanvas(j,R):Xn("canvas")}function M(j,R,a0,w0){let A0=1;if((j.width>w0||j.height>w0)&&(A0=w0/Math.max(j.width,j.height)),A0<1||R===!0)if(typeof HTMLImageElement<"u"&&j instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&j instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&j instanceof ImageBitmap){const F0=R?qr:Math.floor,K0=F0(A0*j.width),V=F0(A0*j.height);w===void 0&&(w=U(K0,V));const _0=a0?U(K0,V):w;return _0.width=K0,_0.height=V,_0.getContext("2d").drawImage(j,0,0,K0,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K0+"x"+V+")."),_0}else return"data"in j&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),j;return j}function P(j){return Us(j.width)&&Us(j.height)}function k(j){return d?!1:j.wrapS!==ve||j.wrapT!==ve||j.minFilter!==Gt&&j.minFilter!==ae}function Y(j,R){return j.generateMipmaps&&R&&j.minFilter!==Gt&&j.minFilter!==ae}function t0(j){h.generateMipmap(j)}function N(j,R,a0,w0,A0=!1){if(d===!1)return R;if(j!==null){if(h[j]!==void 0)return h[j];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+j+"'")}let F0=R;return R===6403&&(a0===5126&&(F0=33326),a0===5131&&(F0=33325),a0===5121&&(F0=33321)),R===33319&&(a0===5126&&(F0=33328),a0===5131&&(F0=33327),a0===5121&&(F0=33323)),R===6408&&(a0===5126&&(F0=34836),a0===5131&&(F0=34842),a0===5121&&(F0=w0===Et&&A0===!1?35907:32856),a0===32819&&(F0=32854),a0===32820&&(F0=32855)),(F0===33325||F0===33326||F0===33327||F0===33328||F0===34842||F0===34836)&&t.get("EXT_color_buffer_float"),F0}function q(j,R,a0){return Y(j,a0)===!0||j.isFramebufferTexture&&j.minFilter!==Gt&&j.minFilter!==ae?Math.log2(Math.max(R.width,R.height))+1:j.mipmaps!==void 0&&j.mipmaps.length>0?j.mipmaps.length:j.isCompressedTexture&&Array.isArray(j.image)?R.mipmaps.length:1}function l0(j){return j===Gt||j===ps||j===fs?9728:9729}function n0(j){const R=j.target;R.removeEventListener("dispose",n0),P0(R),R.isVideoTexture&&I.delete(R)}function b0(j){const R=j.target;R.removeEventListener("dispose",b0),c0(R)}function P0(j){const R=r.get(j);if(R.__webglInit===void 0)return;const a0=j.source,w0=x.get(a0);if(w0){const A0=w0[R.__cacheKey];A0.usedTimes--,A0.usedTimes===0&&J(j),Object.keys(w0).length===0&&x.delete(a0)}r.remove(j)}function J(j){const R=r.get(j);h.deleteTexture(R.__webglTexture);const a0=j.source,w0=x.get(a0);delete w0[R.__cacheKey],m.memory.textures--}function c0(j){const R=j.texture,a0=r.get(j),w0=r.get(R);if(w0.__webglTexture!==void 0&&(h.deleteTexture(w0.__webglTexture),m.memory.textures--),j.depthTexture&&j.depthTexture.dispose(),j.isWebGLCubeRenderTarget)for(let A0=0;A0<6;A0++)h.deleteFramebuffer(a0.__webglFramebuffer[A0]),a0.__webglDepthbuffer&&h.deleteRenderbuffer(a0.__webglDepthbuffer[A0]);else{if(h.deleteFramebuffer(a0.__webglFramebuffer),a0.__webglDepthbuffer&&h.deleteRenderbuffer(a0.__webglDepthbuffer),a0.__webglMultisampledFramebuffer&&h.deleteFramebuffer(a0.__webglMultisampledFramebuffer),a0.__webglColorRenderbuffer)for(let A0=0;A0<a0.__webglColorRenderbuffer.length;A0++)a0.__webglColorRenderbuffer[A0]&&h.deleteRenderbuffer(a0.__webglColorRenderbuffer[A0]);a0.__webglDepthRenderbuffer&&h.deleteRenderbuffer(a0.__webglDepthRenderbuffer)}if(j.isWebGLMultipleRenderTargets)for(let A0=0,F0=R.length;A0<F0;A0++){const K0=r.get(R[A0]);K0.__webglTexture&&(h.deleteTexture(K0.__webglTexture),m.memory.textures--),r.remove(R[A0])}r.remove(R),r.remove(j)}let o0=0;function r0(){o0=0}function d0(){const j=o0;return j>=A&&console.warn("THREE.WebGLTextures: Trying to use "+j+" texture units while this GPU supports only "+A),o0+=1,j}function e0(j){const R=[];return R.push(j.wrapS),R.push(j.wrapT),R.push(j.magFilter),R.push(j.minFilter),R.push(j.anisotropy),R.push(j.internalFormat),R.push(j.format),R.push(j.type),R.push(j.generateMipmaps),R.push(j.premultiplyAlpha),R.push(j.flipY),R.push(j.unpackAlignment),R.push(j.encoding),R.join()}function Z(j,R){const a0=r.get(j);if(j.isVideoTexture&&Wt(j),j.isRenderTargetTexture===!1&&j.version>0&&a0.__version!==j.version){const w0=j.image;if(w0===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w0.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(a0,j,R);return}}e.activeTexture(33984+R),e.bindTexture(3553,a0.__webglTexture)}function C0(j,R){const a0=r.get(j);if(j.version>0&&a0.__version!==j.version){at(a0,j,R);return}e.activeTexture(33984+R),e.bindTexture(35866,a0.__webglTexture)}function f0(j,R){const a0=r.get(j);if(j.version>0&&a0.__version!==j.version){at(a0,j,R);return}e.activeTexture(33984+R),e.bindTexture(32879,a0.__webglTexture)}function L0(j,R){const a0=r.get(j);if(j.version>0&&a0.__version!==j.version){J0(a0,j,R);return}e.activeTexture(33984+R),e.bindTexture(34067,a0.__webglTexture)}const N0={[Gr]:10497,[ve]:33071,[Hr]:33648},j0={[Gt]:9728,[ps]:9984,[fs]:9986,[ae]:9729,[cf]:9985,[Kn]:9987};function m0(j,R,a0){if(a0?(h.texParameteri(j,10242,N0[R.wrapS]),h.texParameteri(j,10243,N0[R.wrapT]),(j===32879||j===35866)&&h.texParameteri(j,32882,N0[R.wrapR]),h.texParameteri(j,10240,j0[R.magFilter]),h.texParameteri(j,10241,j0[R.minFilter])):(h.texParameteri(j,10242,33071),h.texParameteri(j,10243,33071),(j===32879||j===35866)&&h.texParameteri(j,32882,33071),(R.wrapS!==ve||R.wrapT!==ve)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),h.texParameteri(j,10240,l0(R.magFilter)),h.texParameteri(j,10241,l0(R.minFilter)),R.minFilter!==Gt&&R.minFilter!==ae&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const w0=t.get("EXT_texture_filter_anisotropic");if(R.type===di&&t.has("OES_texture_float_linear")===!1||d===!1&&R.type===gn&&t.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(h.texParameterf(j,w0.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function Bt(j,R){let a0=!1;j.__webglInit===void 0&&(j.__webglInit=!0,R.addEventListener("dispose",n0));const w0=R.source;let A0=x.get(w0);A0===void 0&&(A0={},x.set(w0,A0));const F0=e0(R);if(F0!==j.__cacheKey){A0[F0]===void 0&&(A0[F0]={texture:h.createTexture(),usedTimes:0},m.memory.textures++,a0=!0),A0[F0].usedTimes++;const K0=A0[j.__cacheKey];K0!==void 0&&(A0[j.__cacheKey].usedTimes--,K0.usedTimes===0&&J(R)),j.__cacheKey=F0,j.__webglTexture=A0[F0].texture}return a0}function at(j,R,a0){let w0=3553;R.isDataArrayTexture&&(w0=35866),R.isData3DTexture&&(w0=32879);const A0=Bt(j,R),F0=R.source;if(e.activeTexture(33984+a0),e.bindTexture(w0,j.__webglTexture),F0.version!==F0.__currentVersion||A0===!0){h.pixelStorei(37440,R.flipY),h.pixelStorei(37441,R.premultiplyAlpha),h.pixelStorei(3317,R.unpackAlignment),h.pixelStorei(37443,0);const K0=k(R)&&P(R.image)===!1;let V=M(R.image,K0,!1,p);V=qt(R,V);const _0=P(V)||d,M0=c.convert(R.format,R.encoding);let E0=c.convert(R.type),W=N(R.internalFormat,M0,E0,R.encoding,R.isVideoTexture);m0(w0,R,_0);let S0;const T0=R.mipmaps,q0=d&&R.isVideoTexture!==!0,R0=F0.__currentVersion===void 0||A0===!0,k0=q(R,V,_0);if(R.isDepthTexture)W=6402,d?R.type===di?W=36012:R.type===ui?W=33190:R.type===Qi?W=35056:W=33189:R.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===pi&&W===6402&&R.type!==zo&&R.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=ui,E0=c.convert(R.type)),R.format===$i&&W===6402&&(W=34041,R.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Qi,E0=c.convert(R.type))),R0&&(q0?e.texStorage2D(3553,1,W,V.width,V.height):e.texImage2D(3553,0,W,V.width,V.height,0,M0,E0,null));else if(R.isDataTexture)if(T0.length>0&&_0){q0&&R0&&e.texStorage2D(3553,k0,W,T0[0].width,T0[0].height);for(let I0=0,$0=T0.length;I0<$0;I0++)S0=T0[I0],q0?e.texSubImage2D(3553,I0,0,0,S0.width,S0.height,M0,E0,S0.data):e.texImage2D(3553,I0,W,S0.width,S0.height,0,M0,E0,S0.data);R.generateMipmaps=!1}else q0?(R0&&e.texStorage2D(3553,k0,W,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,M0,E0,V.data)):e.texImage2D(3553,0,W,V.width,V.height,0,M0,E0,V.data);else if(R.isCompressedTexture){q0&&R0&&e.texStorage2D(3553,k0,W,T0[0].width,T0[0].height);for(let I0=0,$0=T0.length;I0<$0;I0++)S0=T0[I0],R.format!==Ce?M0!==null?q0?e.compressedTexSubImage2D(3553,I0,0,0,S0.width,S0.height,M0,S0.data):e.compressedTexImage2D(3553,I0,W,S0.width,S0.height,0,S0.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q0?e.texSubImage2D(3553,I0,0,0,S0.width,S0.height,M0,E0,S0.data):e.texImage2D(3553,I0,W,S0.width,S0.height,0,M0,E0,S0.data)}else if(R.isDataArrayTexture)q0?(R0&&e.texStorage3D(35866,k0,W,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,M0,E0,V.data)):e.texImage3D(35866,0,W,V.width,V.height,V.depth,0,M0,E0,V.data);else if(R.isData3DTexture)q0?(R0&&e.texStorage3D(32879,k0,W,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,M0,E0,V.data)):e.texImage3D(32879,0,W,V.width,V.height,V.depth,0,M0,E0,V.data);else if(R.isFramebufferTexture){if(R0)if(q0)e.texStorage2D(3553,k0,W,V.width,V.height);else{let I0=V.width,$0=V.height;for(let pt=0;pt<k0;pt++)e.texImage2D(3553,pt,W,I0,$0,0,M0,E0,null),I0>>=1,$0>>=1}}else if(T0.length>0&&_0){q0&&R0&&e.texStorage2D(3553,k0,W,T0[0].width,T0[0].height);for(let I0=0,$0=T0.length;I0<$0;I0++)S0=T0[I0],q0?e.texSubImage2D(3553,I0,0,0,M0,E0,S0):e.texImage2D(3553,I0,W,M0,E0,S0);R.generateMipmaps=!1}else q0?(R0&&e.texStorage2D(3553,k0,W,V.width,V.height),e.texSubImage2D(3553,0,0,0,M0,E0,V)):e.texImage2D(3553,0,W,M0,E0,V);Y(R,_0)&&t0(w0),F0.__currentVersion=F0.version,R.onUpdate&&R.onUpdate(R)}j.__version=R.version}function J0(j,R,a0){if(R.image.length!==6)return;const w0=Bt(j,R),A0=R.source;if(e.activeTexture(33984+a0),e.bindTexture(34067,j.__webglTexture),A0.version!==A0.__currentVersion||w0===!0){h.pixelStorei(37440,R.flipY),h.pixelStorei(37441,R.premultiplyAlpha),h.pixelStorei(3317,R.unpackAlignment),h.pixelStorei(37443,0);const F0=R.isCompressedTexture||R.image[0].isCompressedTexture,K0=R.image[0]&&R.image[0].isDataTexture,V=[];for(let I0=0;I0<6;I0++)!F0&&!K0?V[I0]=M(R.image[I0],!1,!0,_):V[I0]=K0?R.image[I0].image:R.image[I0],V[I0]=qt(R,V[I0]);const _0=V[0],M0=P(_0)||d,E0=c.convert(R.format,R.encoding),W=c.convert(R.type),S0=N(R.internalFormat,E0,W,R.encoding),T0=d&&R.isVideoTexture!==!0,q0=A0.__currentVersion===void 0||w0===!0;let R0=q(R,_0,M0);m0(34067,R,M0);let k0;if(F0){T0&&q0&&e.texStorage2D(34067,R0,S0,_0.width,_0.height);for(let I0=0;I0<6;I0++){k0=V[I0].mipmaps;for(let $0=0;$0<k0.length;$0++){const pt=k0[$0];R.format!==Ce?E0!==null?T0?e.compressedTexSubImage2D(34069+I0,$0,0,0,pt.width,pt.height,E0,pt.data):e.compressedTexImage2D(34069+I0,$0,S0,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T0?e.texSubImage2D(34069+I0,$0,0,0,pt.width,pt.height,E0,W,pt.data):e.texImage2D(34069+I0,$0,S0,pt.width,pt.height,0,E0,W,pt.data)}}}else{k0=R.mipmaps,T0&&q0&&(k0.length>0&&R0++,e.texStorage2D(34067,R0,S0,V[0].width,V[0].height));for(let I0=0;I0<6;I0++)if(K0){T0?e.texSubImage2D(34069+I0,0,0,0,V[I0].width,V[I0].height,E0,W,V[I0].data):e.texImage2D(34069+I0,0,S0,V[I0].width,V[I0].height,0,E0,W,V[I0].data);for(let $0=0;$0<k0.length;$0++){const V0=k0[$0].image[I0].image;T0?e.texSubImage2D(34069+I0,$0+1,0,0,V0.width,V0.height,E0,W,V0.data):e.texImage2D(34069+I0,$0+1,S0,V0.width,V0.height,0,E0,W,V0.data)}}else{T0?e.texSubImage2D(34069+I0,0,0,0,E0,W,V[I0]):e.texImage2D(34069+I0,0,S0,E0,W,V[I0]);for(let $0=0;$0<k0.length;$0++){const pt=k0[$0];T0?e.texSubImage2D(34069+I0,$0+1,0,0,E0,W,pt.image[I0]):e.texImage2D(34069+I0,$0+1,S0,E0,W,pt.image[I0])}}}Y(R,M0)&&t0(34067),A0.__currentVersion=A0.version,R.onUpdate&&R.onUpdate(R)}j.__version=R.version}function y0(j,R,a0,w0,A0){const F0=c.convert(a0.format,a0.encoding),K0=c.convert(a0.type),V=N(a0.internalFormat,F0,K0,a0.encoding);r.get(R).__hasExternalTextures||(A0===32879||A0===35866?e.texImage3D(A0,0,V,R.width,R.height,R.depth,0,F0,K0,null):e.texImage2D(A0,0,V,R.width,R.height,0,F0,K0,null)),e.bindFramebuffer(36160,j),ft(R)?y.framebufferTexture2DMultisampleEXT(36160,w0,A0,r.get(a0).__webglTexture,0,Ct(R)):h.framebufferTexture2D(36160,w0,A0,r.get(a0).__webglTexture,0),e.bindFramebuffer(36160,null)}function ut(j,R,a0){if(h.bindRenderbuffer(36161,j),R.depthBuffer&&!R.stencilBuffer){let w0=33189;if(a0||ft(R)){const A0=R.depthTexture;A0&&A0.isDepthTexture&&(A0.type===di?w0=36012:A0.type===ui&&(w0=33190));const F0=Ct(R);ft(R)?y.renderbufferStorageMultisampleEXT(36161,F0,w0,R.width,R.height):h.renderbufferStorageMultisample(36161,F0,w0,R.width,R.height)}else h.renderbufferStorage(36161,w0,R.width,R.height);h.framebufferRenderbuffer(36160,36096,36161,j)}else if(R.depthBuffer&&R.stencilBuffer){const w0=Ct(R);a0&&ft(R)===!1?h.renderbufferStorageMultisample(36161,w0,35056,R.width,R.height):ft(R)?y.renderbufferStorageMultisampleEXT(36161,w0,35056,R.width,R.height):h.renderbufferStorage(36161,34041,R.width,R.height),h.framebufferRenderbuffer(36160,33306,36161,j)}else{const w0=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let A0=0;A0<w0.length;A0++){const F0=w0[A0],K0=c.convert(F0.format,F0.encoding),V=c.convert(F0.type),_0=N(F0.internalFormat,K0,V,F0.encoding),M0=Ct(R);a0&&ft(R)===!1?h.renderbufferStorageMultisample(36161,M0,_0,R.width,R.height):ft(R)?y.renderbufferStorageMultisampleEXT(36161,M0,_0,R.width,R.height):h.renderbufferStorage(36161,_0,R.width,R.height)}}h.bindRenderbuffer(36161,null)}function ot(j,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,j),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Z(R.depthTexture,0);const w0=r.get(R.depthTexture).__webglTexture,A0=Ct(R);if(R.depthTexture.format===pi)ft(R)?y.framebufferTexture2DMultisampleEXT(36160,36096,3553,w0,0,A0):h.framebufferTexture2D(36160,36096,3553,w0,0);else if(R.depthTexture.format===$i)ft(R)?y.framebufferTexture2DMultisampleEXT(36160,33306,3553,w0,0,A0):h.framebufferTexture2D(36160,33306,3553,w0,0);else throw new Error("Unknown depthTexture format")}function X0(j){const R=r.get(j),a0=j.isWebGLCubeRenderTarget===!0;if(j.depthTexture&&!R.__autoAllocateDepthBuffer){if(a0)throw new Error("target.depthTexture not supported in Cube render targets");ot(R.__webglFramebuffer,j)}else if(a0){R.__webglDepthbuffer=[];for(let w0=0;w0<6;w0++)e.bindFramebuffer(36160,R.__webglFramebuffer[w0]),R.__webglDepthbuffer[w0]=h.createRenderbuffer(),ut(R.__webglDepthbuffer[w0],j,!1)}else e.bindFramebuffer(36160,R.__webglFramebuffer),R.__webglDepthbuffer=h.createRenderbuffer(),ut(R.__webglDepthbuffer,j,!1);e.bindFramebuffer(36160,null)}function vt(j,R,a0){const w0=r.get(j);R!==void 0&&y0(w0.__webglFramebuffer,j,j.texture,36064,3553),a0!==void 0&&X0(j)}function bt(j){const R=j.texture,a0=r.get(j),w0=r.get(R);j.addEventListener("dispose",b0),j.isWebGLMultipleRenderTargets!==!0&&(w0.__webglTexture===void 0&&(w0.__webglTexture=h.createTexture()),w0.__version=R.version,m.memory.textures++);const A0=j.isWebGLCubeRenderTarget===!0,F0=j.isWebGLMultipleRenderTargets===!0,K0=P(j)||d;if(A0){a0.__webglFramebuffer=[];for(let V=0;V<6;V++)a0.__webglFramebuffer[V]=h.createFramebuffer()}else{if(a0.__webglFramebuffer=h.createFramebuffer(),F0)if(o.drawBuffers){const V=j.texture;for(let _0=0,M0=V.length;_0<M0;_0++){const E0=r.get(V[_0]);E0.__webglTexture===void 0&&(E0.__webglTexture=h.createTexture(),m.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(d&&j.samples>0&&ft(j)===!1){const V=F0?R:[R];a0.__webglMultisampledFramebuffer=h.createFramebuffer(),a0.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,a0.__webglMultisampledFramebuffer);for(let _0=0;_0<V.length;_0++){const M0=V[_0];a0.__webglColorRenderbuffer[_0]=h.createRenderbuffer(),h.bindRenderbuffer(36161,a0.__webglColorRenderbuffer[_0]);const E0=c.convert(M0.format,M0.encoding),W=c.convert(M0.type),S0=N(M0.internalFormat,E0,W,M0.encoding),T0=Ct(j);h.renderbufferStorageMultisample(36161,T0,S0,j.width,j.height),h.framebufferRenderbuffer(36160,36064+_0,36161,a0.__webglColorRenderbuffer[_0])}h.bindRenderbuffer(36161,null),j.depthBuffer&&(a0.__webglDepthRenderbuffer=h.createRenderbuffer(),ut(a0.__webglDepthRenderbuffer,j,!0)),e.bindFramebuffer(36160,null)}}if(A0){e.bindTexture(34067,w0.__webglTexture),m0(34067,R,K0);for(let V=0;V<6;V++)y0(a0.__webglFramebuffer[V],j,R,36064,34069+V);Y(R,K0)&&t0(34067),e.unbindTexture()}else if(F0){const V=j.texture;for(let _0=0,M0=V.length;_0<M0;_0++){const E0=V[_0],W=r.get(E0);e.bindTexture(3553,W.__webglTexture),m0(3553,E0,K0),y0(a0.__webglFramebuffer,j,E0,36064+_0,3553),Y(E0,K0)&&t0(3553)}e.unbindTexture()}else{let V=3553;(j.isWebGL3DRenderTarget||j.isWebGLArrayRenderTarget)&&(d?V=j.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(V,w0.__webglTexture),m0(V,R,K0),y0(a0.__webglFramebuffer,j,R,36064,V),Y(R,K0)&&t0(V),e.unbindTexture()}j.depthBuffer&&X0(j)}function Tt(j){const R=P(j)||d,a0=j.isWebGLMultipleRenderTargets===!0?j.texture:[j.texture];for(let w0=0,A0=a0.length;w0<A0;w0++){const F0=a0[w0];if(Y(F0,R)){const K0=j.isWebGLCubeRenderTarget?34067:3553,V=r.get(F0).__webglTexture;e.bindTexture(K0,V),t0(K0),e.unbindTexture()}}}function Ht(j){if(d&&j.samples>0&&ft(j)===!1){const R=j.isWebGLMultipleRenderTargets?j.texture:[j.texture],a0=j.width,w0=j.height;let A0=16384;const F0=[],K0=j.stencilBuffer?33306:36096,V=r.get(j),_0=j.isWebGLMultipleRenderTargets===!0;if(_0)for(let M0=0;M0<R.length;M0++)e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+M0,36161,null),e.bindFramebuffer(36160,V.__webglFramebuffer),h.framebufferTexture2D(36009,36064+M0,3553,null,0);e.bindFramebuffer(36008,V.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,V.__webglFramebuffer);for(let M0=0;M0<R.length;M0++){F0.push(36064+M0),j.depthBuffer&&F0.push(K0);const E0=V.__ignoreDepthValues!==void 0?V.__ignoreDepthValues:!1;if(E0===!1&&(j.depthBuffer&&(A0|=256),j.stencilBuffer&&(A0|=1024)),_0&&h.framebufferRenderbuffer(36008,36064,36161,V.__webglColorRenderbuffer[M0]),E0===!0&&(h.invalidateFramebuffer(36008,[K0]),h.invalidateFramebuffer(36009,[K0])),_0){const W=r.get(R[M0]).__webglTexture;h.framebufferTexture2D(36009,36064,3553,W,0)}h.blitFramebuffer(0,0,a0,w0,0,0,a0,w0,A0,9728),b&&h.invalidateFramebuffer(36008,F0)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),_0)for(let M0=0;M0<R.length;M0++){e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),h.framebufferRenderbuffer(36160,36064+M0,36161,V.__webglColorRenderbuffer[M0]);const E0=r.get(R[M0]).__webglTexture;e.bindFramebuffer(36160,V.__webglFramebuffer),h.framebufferTexture2D(36009,36064+M0,3553,E0,0)}e.bindFramebuffer(36009,V.__webglMultisampledFramebuffer)}}function Ct(j){return Math.min(s,j.samples)}function ft(j){const R=r.get(j);return d&&j.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Wt(j){const R=m.render.frame;I.get(j)!==R&&(I.set(j,R),j.update())}function qt(j,R){const a0=j.encoding,w0=j.format,A0=j.type;return j.isCompressedTexture===!0||j.isVideoTexture===!0||j.format===Wr||a0!==Ai&&(a0===Et?d===!1?t.has("EXT_sRGB")===!0&&w0===Ce?(j.format=Wr,j.minFilter=ae,j.generateMipmaps=!1):R=No.sRGBToLinear(R):(w0!==Ce||A0!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",a0)),R}this.allocateTextureUnit=d0,this.resetTextureUnits=r0,this.setTexture2D=Z,this.setTexture2DArray=C0,this.setTexture3D=f0,this.setTextureCube=L0,this.rebindTextures=vt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=X0,this.setupFrameBufferTexture=y0,this.useMultisampledRTT=ft}function _y(h,t,e){const r=e.isWebGL2;function o(c,m=null){let d;if(c===_i)return 5121;if(c===mf)return 32819;if(c===pf)return 32820;if(c===hf)return 5120;if(c===uf)return 5122;if(c===zo)return 5123;if(c===df)return 5124;if(c===ui)return 5125;if(c===di)return 5126;if(c===gn)return r?5131:(d=t.get("OES_texture_half_float"),d!==null?d.HALF_FLOAT_OES:null);if(c===ff)return 6406;if(c===Ce)return 6408;if(c===_f)return 6409;if(c===Af)return 6410;if(c===pi)return 6402;if(c===$i)return 34041;if(c===vf)return 6403;if(c===gf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(c===Wr)return d=t.get("EXT_sRGB"),d!==null?d.SRGB_ALPHA_EXT:null;if(c===yf)return 36244;if(c===xf)return 33319;if(c===bf)return 33320;if(c===wf)return 36249;if(c===sr||c===or||c===ar||c===lr)if(m===Et)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(c===sr)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===or)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===ar)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===lr)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(c===sr)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===or)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===ar)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===lr)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===gs||c===_s||c===As||c===vs)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(c===gs)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===_s)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===As)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===vs)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===Sf)return d=t.get("WEBGL_compressed_texture_etc1"),d!==null?d.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===ys||c===xs)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(c===ys)return m===Et?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(c===xs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===bs||c===ws||c===Ss||c===Ms||c===Bs||c===Cs||c===Es||c===Ts||c===Is||c===Ps||c===Ds||c===Ls||c===Rs||c===zs)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(c===bs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===ws)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Ss)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===Ms)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===Bs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===Cs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Es)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Ts)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Is)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Ps)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===Ds)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===Ls)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===Rs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===zs)return m===Et?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Os)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(c===Os)return m===Et?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return c===Qi?r?34042:(d=t.get("WEBGL_depth_texture"),d!==null?d.UNSIGNED_INT_24_8_WEBGL:null):h[c]!==void 0?h[c]:null}return{convert:o}}class Ay extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pn extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let o=null,c=null,m=null;const d=this._targetRay,A=this._grip,_=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(_&&t.hand){m=!0;for(const w of t.hand.values()){const x=e.getJointPose(w,r);if(_.joints[w.jointName]===void 0){const U=new pn;U.matrixAutoUpdate=!1,U.visible=!1,_.joints[w.jointName]=U,_.add(U)}const L=_.joints[w.jointName];x!==null&&(L.matrix.fromArray(x.transform.matrix),L.matrix.decompose(L.position,L.rotation,L.scale),L.jointRadius=x.radius),L.visible=x!==null}const p=_.joints["index-finger-tip"],s=_.joints["thumb-tip"],y=p.position.distanceTo(s.position),b=.02,I=.005;_.inputState.pinching&&y>b+I?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!_.inputState.pinching&&y<=b-I&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else A!==null&&t.gripSpace&&(c=e.getPose(t.gripSpace,r),c!==null&&(A.matrix.fromArray(c.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),c.linearVelocity?(A.hasLinearVelocity=!0,A.linearVelocity.copy(c.linearVelocity)):A.hasLinearVelocity=!1,c.angularVelocity?(A.hasAngularVelocity=!0,A.angularVelocity.copy(c.angularVelocity)):A.hasAngularVelocity=!1));d!==null&&(o=e.getPose(t.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return d!==null&&(d.visible=o!==null),A!==null&&(A.visible=c!==null),_!==null&&(_.visible=m!==null),this}}class yy extends ce{constructor(t,e,r,o,c,m,d,A,_,p){if(p=p!==void 0?p:pi,p!==pi&&p!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&p===pi&&(r=ui),r===void 0&&p===$i&&(r=Qi),super(null,o,c,m,d,A,p,r,_),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=d!==void 0?d:Gt,this.minFilter=A!==void 0?A:Gt,this.flipY=!1,this.generateMipmaps=!1}}class xy extends bi{constructor(t,e){super();const r=this;let o=null,c=1,m=null,d="local-floor",A=null,_=null,p=null,s=null,y=null,b=null;const I=e.getContextAttributes();let w=null,x=null;const L=[],U=[],M=new Ae;M.layers.enable(1),M.viewport=new Ot;const P=new Ae;P.layers.enable(2),P.viewport=new Ot;const k=[M,P],Y=new Ay;Y.layers.enable(1),Y.layers.enable(2);let t0=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e0){let Z=L[e0];return Z===void 0&&(Z=new Vr,L[e0]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(e0){let Z=L[e0];return Z===void 0&&(Z=new Vr,L[e0]=Z),Z.getGripSpace()},this.getHand=function(e0){let Z=L[e0];return Z===void 0&&(Z=new Vr,L[e0]=Z),Z.getHandSpace()};function q(e0){const Z=U.indexOf(e0.inputSource);if(Z===-1)return;const C0=L[Z];C0!==void 0&&C0.dispatchEvent({type:e0.type,data:e0.inputSource})}function l0(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",l0),o.removeEventListener("inputsourceschange",n0);for(let e0=0;e0<L.length;e0++){const Z=U[e0];Z!==null&&(U[e0]=null,L[e0].disconnect(Z))}t0=null,N=null,t.setRenderTarget(w),y=null,s=null,p=null,o=null,x=null,d0.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e0){c=e0,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e0){d=e0,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return A||m},this.setReferenceSpace=function(e0){A=e0},this.getBaseLayer=function(){return s!==null?s:y},this.getBinding=function(){return p},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(e0){if(o=e0,o!==null){if(w=t.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",l0),o.addEventListener("inputsourceschange",n0),I.xrCompatible!==!0&&await e.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:o.renderState.layers===void 0?I.antialias:!0,alpha:I.alpha,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,e,Z),o.updateRenderState({baseLayer:y}),x=new vi(y.framebufferWidth,y.framebufferHeight,{format:Ce,type:_i,encoding:t.outputEncoding})}else{let Z=null,C0=null,f0=null;I.depth&&(f0=I.stencil?35056:33190,Z=I.stencil?$i:pi,C0=I.stencil?Qi:ui);const L0={colorFormat:32856,depthFormat:f0,scaleFactor:c};p=new XRWebGLBinding(o,e),s=p.createProjectionLayer(L0),o.updateRenderState({layers:[s]}),x=new vi(s.textureWidth,s.textureHeight,{format:Ce,type:_i,depthTexture:new yy(s.textureWidth,s.textureHeight,C0,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:I.stencil,encoding:t.outputEncoding,samples:I.antialias?4:0});const N0=t.properties.get(x);N0.__ignoreDepthValues=s.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(1),A=null,m=await o.requestReferenceSpace(d),d0.setContext(o),d0.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function n0(e0){for(let Z=0;Z<e0.removed.length;Z++){const C0=e0.removed[Z],f0=U.indexOf(C0);f0>=0&&(U[f0]=null,L[f0].dispatchEvent({type:"disconnected",data:C0}))}for(let Z=0;Z<e0.added.length;Z++){const C0=e0.added[Z];let f0=U.indexOf(C0);if(f0===-1){for(let N0=0;N0<L.length;N0++)if(N0>=U.length){U.push(C0),f0=N0;break}else if(U[N0]===null){U[N0]=C0,f0=N0;break}if(f0===-1)break}const L0=L[f0];L0&&L0.dispatchEvent({type:"connected",data:C0})}}const b0=new K,P0=new K;function J(e0,Z,C0){b0.setFromMatrixPosition(Z.matrixWorld),P0.setFromMatrixPosition(C0.matrixWorld);const f0=b0.distanceTo(P0),L0=Z.projectionMatrix.elements,N0=C0.projectionMatrix.elements,j0=L0[14]/(L0[10]-1),m0=L0[14]/(L0[10]+1),Bt=(L0[9]+1)/L0[5],at=(L0[9]-1)/L0[5],J0=(L0[8]-1)/L0[0],y0=(N0[8]+1)/N0[0],ut=j0*J0,ot=j0*y0,X0=f0/(-J0+y0),vt=X0*-J0;Z.matrixWorld.decompose(e0.position,e0.quaternion,e0.scale),e0.translateX(vt),e0.translateZ(X0),e0.matrixWorld.compose(e0.position,e0.quaternion,e0.scale),e0.matrixWorldInverse.copy(e0.matrixWorld).invert();const bt=j0+X0,Tt=m0+X0,Ht=ut-vt,Ct=ot+(f0-vt),ft=Bt*m0/Tt*bt,Wt=at*m0/Tt*bt;e0.projectionMatrix.makePerspective(Ht,Ct,ft,Wt,bt,Tt)}function c0(e0,Z){Z===null?e0.matrixWorld.copy(e0.matrix):e0.matrixWorld.multiplyMatrices(Z.matrixWorld,e0.matrix),e0.matrixWorldInverse.copy(e0.matrixWorld).invert()}this.updateCamera=function(e0){if(o===null)return;Y.near=P.near=M.near=e0.near,Y.far=P.far=M.far=e0.far,(t0!==Y.near||N!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),t0=Y.near,N=Y.far);const Z=e0.parent,C0=Y.cameras;c0(Y,Z);for(let L0=0;L0<C0.length;L0++)c0(C0[L0],Z);Y.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),e0.position.copy(Y.position),e0.quaternion.copy(Y.quaternion),e0.scale.copy(Y.scale),e0.matrix.copy(Y.matrix),e0.matrixWorld.copy(Y.matrixWorld);const f0=e0.children;for(let L0=0,N0=f0.length;L0<N0;L0++)f0[L0].updateMatrixWorld(!0);C0.length===2?J(Y,M,P):Y.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return Y},this.getFoveation=function(){if(s!==null)return s.fixedFoveation;if(y!==null)return y.fixedFoveation},this.setFoveation=function(e0){s!==null&&(s.fixedFoveation=e0),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=e0)};let o0=null;function r0(e0,Z){if(_=Z.getViewerPose(A||m),b=Z,_!==null){const C0=_.views;y!==null&&(t.setRenderTargetFramebuffer(x,y.framebuffer),t.setRenderTarget(x));let f0=!1;C0.length!==Y.cameras.length&&(Y.cameras.length=0,f0=!0);for(let L0=0;L0<C0.length;L0++){const N0=C0[L0];let j0=null;if(y!==null)j0=y.getViewport(N0);else{const Bt=p.getViewSubImage(s,N0);j0=Bt.viewport,L0===0&&(t.setRenderTargetTextures(x,Bt.colorTexture,s.ignoreDepthValues?void 0:Bt.depthStencilTexture),t.setRenderTarget(x))}let m0=k[L0];m0===void 0&&(m0=new Ae,m0.layers.enable(L0),m0.viewport=new Ot,k[L0]=m0),m0.matrix.fromArray(N0.transform.matrix),m0.projectionMatrix.fromArray(N0.projectionMatrix),m0.viewport.set(j0.x,j0.y,j0.width,j0.height),L0===0&&Y.matrix.copy(m0.matrix),f0===!0&&Y.cameras.push(m0)}}for(let C0=0;C0<L.length;C0++){const f0=U[C0],L0=L[C0];f0!==null&&L0!==void 0&&L0.update(f0,Z,A||m)}o0&&o0(e0,Z),b=null}const d0=new Qo;d0.setAnimationLoop(r0),this.setAnimationLoop=function(e0){o0=e0},this.dispose=function(){}}}function by(h,t){function e(w,x){w.fogColor.value.copy(x.color),x.isFog?(w.fogNear.value=x.near,w.fogFar.value=x.far):x.isFogExp2&&(w.fogDensity.value=x.density)}function r(w,x,L,U,M){x.isMeshBasicMaterial||x.isMeshLambertMaterial?o(w,x):x.isMeshToonMaterial?(o(w,x),p(w,x)):x.isMeshPhongMaterial?(o(w,x),_(w,x)):x.isMeshStandardMaterial?(o(w,x),s(w,x),x.isMeshPhysicalMaterial&&y(w,x,M)):x.isMeshMatcapMaterial?(o(w,x),b(w,x)):x.isMeshDepthMaterial?o(w,x):x.isMeshDistanceMaterial?(o(w,x),I(w,x)):x.isMeshNormalMaterial?o(w,x):x.isLineBasicMaterial?(c(w,x),x.isLineDashedMaterial&&m(w,x)):x.isPointsMaterial?d(w,x,L,U):x.isSpriteMaterial?A(w,x):x.isShadowMaterial?(w.color.value.copy(x.color),w.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function o(w,x){w.opacity.value=x.opacity,x.color&&w.diffuse.value.copy(x.color),x.emissive&&w.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(w.map.value=x.map),x.alphaMap&&(w.alphaMap.value=x.alphaMap),x.bumpMap&&(w.bumpMap.value=x.bumpMap,w.bumpScale.value=x.bumpScale,x.side===ye&&(w.bumpScale.value*=-1)),x.displacementMap&&(w.displacementMap.value=x.displacementMap,w.displacementScale.value=x.displacementScale,w.displacementBias.value=x.displacementBias),x.emissiveMap&&(w.emissiveMap.value=x.emissiveMap),x.normalMap&&(w.normalMap.value=x.normalMap,w.normalScale.value.copy(x.normalScale),x.side===ye&&w.normalScale.value.negate()),x.specularMap&&(w.specularMap.value=x.specularMap),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest);const L=t.get(x).envMap;if(L&&(w.envMap.value=L,w.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=x.reflectivity,w.ior.value=x.ior,w.refractionRatio.value=x.refractionRatio),x.lightMap){w.lightMap.value=x.lightMap;const P=h.physicallyCorrectLights!==!0?Math.PI:1;w.lightMapIntensity.value=x.lightMapIntensity*P}x.aoMap&&(w.aoMap.value=x.aoMap,w.aoMapIntensity.value=x.aoMapIntensity);let U;x.map?U=x.map:x.specularMap?U=x.specularMap:x.displacementMap?U=x.displacementMap:x.normalMap?U=x.normalMap:x.bumpMap?U=x.bumpMap:x.roughnessMap?U=x.roughnessMap:x.metalnessMap?U=x.metalnessMap:x.alphaMap?U=x.alphaMap:x.emissiveMap?U=x.emissiveMap:x.clearcoatMap?U=x.clearcoatMap:x.clearcoatNormalMap?U=x.clearcoatNormalMap:x.clearcoatRoughnessMap?U=x.clearcoatRoughnessMap:x.iridescenceMap?U=x.iridescenceMap:x.iridescenceThicknessMap?U=x.iridescenceThicknessMap:x.specularIntensityMap?U=x.specularIntensityMap:x.specularColorMap?U=x.specularColorMap:x.transmissionMap?U=x.transmissionMap:x.thicknessMap?U=x.thicknessMap:x.sheenColorMap?U=x.sheenColorMap:x.sheenRoughnessMap&&(U=x.sheenRoughnessMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),w.uvTransform.value.copy(U.matrix));let M;x.aoMap?M=x.aoMap:x.lightMap&&(M=x.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),w.uv2Transform.value.copy(M.matrix))}function c(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity}function m(w,x){w.dashSize.value=x.dashSize,w.totalSize.value=x.dashSize+x.gapSize,w.scale.value=x.scale}function d(w,x,L,U){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.size.value=x.size*L,w.scale.value=U*.5,x.map&&(w.map.value=x.map),x.alphaMap&&(w.alphaMap.value=x.alphaMap),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest);let M;x.map?M=x.map:x.alphaMap&&(M=x.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),w.uvTransform.value.copy(M.matrix))}function A(w,x){w.diffuse.value.copy(x.color),w.opacity.value=x.opacity,w.rotation.value=x.rotation,x.map&&(w.map.value=x.map),x.alphaMap&&(w.alphaMap.value=x.alphaMap),x.alphaTest>0&&(w.alphaTest.value=x.alphaTest);let L;x.map?L=x.map:x.alphaMap&&(L=x.alphaMap),L!==void 0&&(L.matrixAutoUpdate===!0&&L.updateMatrix(),w.uvTransform.value.copy(L.matrix))}function _(w,x){w.specular.value.copy(x.specular),w.shininess.value=Math.max(x.shininess,1e-4)}function p(w,x){x.gradientMap&&(w.gradientMap.value=x.gradientMap)}function s(w,x){w.roughness.value=x.roughness,w.metalness.value=x.metalness,x.roughnessMap&&(w.roughnessMap.value=x.roughnessMap),x.metalnessMap&&(w.metalnessMap.value=x.metalnessMap),t.get(x).envMap&&(w.envMapIntensity.value=x.envMapIntensity)}function y(w,x,L){w.ior.value=x.ior,x.sheen>0&&(w.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),w.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(w.sheenColorMap.value=x.sheenColorMap),x.sheenRoughnessMap&&(w.sheenRoughnessMap.value=x.sheenRoughnessMap)),x.clearcoat>0&&(w.clearcoat.value=x.clearcoat,w.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(w.clearcoatMap.value=x.clearcoatMap),x.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap),x.clearcoatNormalMap&&(w.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),w.clearcoatNormalMap.value=x.clearcoatNormalMap,x.side===ye&&w.clearcoatNormalScale.value.negate())),x.iridescence>0&&(w.iridescence.value=x.iridescence,w.iridescenceIOR.value=x.iridescenceIOR,w.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(w.iridescenceMap.value=x.iridescenceMap),x.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=x.iridescenceThicknessMap)),x.transmission>0&&(w.transmission.value=x.transmission,w.transmissionSamplerMap.value=L.texture,w.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(w.transmissionMap.value=x.transmissionMap),w.thickness.value=x.thickness,x.thicknessMap&&(w.thicknessMap.value=x.thicknessMap),w.attenuationDistance.value=x.attenuationDistance,w.attenuationColor.value.copy(x.attenuationColor)),w.specularIntensity.value=x.specularIntensity,w.specularColor.value.copy(x.specularColor),x.specularIntensityMap&&(w.specularIntensityMap.value=x.specularIntensityMap),x.specularColorMap&&(w.specularColorMap.value=x.specularColorMap)}function b(w,x){x.matcap&&(w.matcap.value=x.matcap)}function I(w,x){w.referencePosition.value.copy(x.referencePosition),w.nearDistance.value=x.nearDistance,w.farDistance.value=x.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:r}}function wy(){const h=Xn("canvas");return h.style.display="block",h}function ea(h={}){this.isWebGLRenderer=!0;const t=h.canvas!==void 0?h.canvas:wy(),e=h.context!==void 0?h.context:null,r=h.depth!==void 0?h.depth:!0,o=h.stencil!==void 0?h.stencil:!0,c=h.antialias!==void 0?h.antialias:!1,m=h.premultipliedAlpha!==void 0?h.premultipliedAlpha:!0,d=h.preserveDrawingBuffer!==void 0?h.preserveDrawingBuffer:!1,A=h.powerPreference!==void 0?h.powerPreference:"default",_=h.failIfMajorPerformanceCaveat!==void 0?h.failIfMajorPerformanceCaveat:!1;let p;e!==null?p=e.getContextAttributes().alpha:p=h.alpha!==void 0?h.alpha:!1;let s=null,y=null;const b=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ai,this.physicallyCorrectLights=!1,this.toneMapping=ke,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const w=this;let x=!1,L=0,U=0,M=null,P=-1,k=null;const Y=new Ot,t0=new Ot;let N=null,q=t.width,l0=t.height,n0=1,b0=null,P0=null;const J=new Ot(0,0,q,l0),c0=new Ot(0,0,q,l0);let o0=!1;const r0=new Xo;let d0=!1,e0=!1,Z=null;const C0=new Nt,f0=new lt,L0=new K,N0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function j0(){return M===null?n0:1}let m0=e;function Bt(O,$){for(let s0=0;s0<O.length;s0++){const i0=O[s0],g0=t.getContext(i0,$);if(g0!==null)return g0}return null}try{const O={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:A,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jr}`),t.addEventListener("webglcontextlost",W,!1),t.addEventListener("webglcontextrestored",S0,!1),t.addEventListener("webglcontextcreationerror",T0,!1),m0===null){const $=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&$.shift(),m0=Bt($,O),m0===null)throw Bt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}m0.getShaderPrecisionFormat===void 0&&(m0.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let at,J0,y0,ut,ot,X0,vt,bt,Tt,Ht,Ct,ft,Wt,qt,j,R,a0,w0,A0,F0,K0,V,_0;function M0(){at=new RA(m0),J0=new EA(m0,at,h),at.init(J0),V=new _y(m0,at,J0),y0=new fy(m0,at,J0),ut=new VA,ot=new ey,X0=new gy(m0,at,y0,ot,J0,V,ut),vt=new IA(w),bt=new LA(w),Tt=new Yf(m0,J0),_0=new BA(m0,at,Tt,J0),Ht=new zA(m0,Tt,ut,_0),Ct=new jA(m0,Ht,Tt,ut),A0=new UA(m0,J0,X0),R=new TA(ot),ft=new ty(w,vt,bt,at,J0,_0,R),Wt=new by(w,ot),qt=new ny,j=new cy(at,J0),w0=new MA(w,vt,y0,Ct,p,m),a0=new py(w,Ct,J0),F0=new CA(m0,at,ut,J0),K0=new OA(m0,at,ut,J0),ut.programs=ft.programs,w.capabilities=J0,w.extensions=at,w.properties=ot,w.renderLists=qt,w.shadowMap=a0,w.state=y0,w.info=ut}M0();const E0=new xy(w,m0);this.xr=E0,this.getContext=function(){return m0},this.getContextAttributes=function(){return m0.getContextAttributes()},this.forceContextLoss=function(){const O=at.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=at.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return n0},this.setPixelRatio=function(O){O!==void 0&&(n0=O,this.setSize(q,l0,!1))},this.getSize=function(O){return O.set(q,l0)},this.setSize=function(O,$,s0){if(E0.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=O,l0=$,t.width=Math.floor(O*n0),t.height=Math.floor($*n0),s0!==!1&&(t.style.width=O+"px",t.style.height=$+"px"),this.setViewport(0,0,O,$)},this.getDrawingBufferSize=function(O){return O.set(q*n0,l0*n0).floor()},this.setDrawingBufferSize=function(O,$,s0){q=O,l0=$,n0=s0,t.width=Math.floor(O*s0),t.height=Math.floor($*s0),this.setViewport(0,0,O,$)},this.getCurrentViewport=function(O){return O.copy(Y)},this.getViewport=function(O){return O.copy(J)},this.setViewport=function(O,$,s0,i0){O.isVector4?J.set(O.x,O.y,O.z,O.w):J.set(O,$,s0,i0),y0.viewport(Y.copy(J).multiplyScalar(n0).floor())},this.getScissor=function(O){return O.copy(c0)},this.setScissor=function(O,$,s0,i0){O.isVector4?c0.set(O.x,O.y,O.z,O.w):c0.set(O,$,s0,i0),y0.scissor(t0.copy(c0).multiplyScalar(n0).floor())},this.getScissorTest=function(){return o0},this.setScissorTest=function(O){y0.setScissorTest(o0=O)},this.setOpaqueSort=function(O){b0=O},this.setTransparentSort=function(O){P0=O},this.getClearColor=function(O){return O.copy(w0.getClearColor())},this.setClearColor=function(){w0.setClearColor.apply(w0,arguments)},this.getClearAlpha=function(){return w0.getClearAlpha()},this.setClearAlpha=function(){w0.setClearAlpha.apply(w0,arguments)},this.clear=function(O=!0,$=!0,s0=!0){let i0=0;O&&(i0|=16384),$&&(i0|=256),s0&&(i0|=1024),m0.clear(i0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",W,!1),t.removeEventListener("webglcontextrestored",S0,!1),t.removeEventListener("webglcontextcreationerror",T0,!1),qt.dispose(),j.dispose(),ot.dispose(),vt.dispose(),bt.dispose(),Ct.dispose(),_0.dispose(),ft.dispose(),E0.dispose(),E0.removeEventListener("sessionstart",pt),E0.removeEventListener("sessionend",V0),Z&&(Z.dispose(),Z=null),wt.stop()};function W(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function S0(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const O=ut.autoReset,$=a0.enabled,s0=a0.autoUpdate,i0=a0.needsUpdate,g0=a0.type;M0(),ut.autoReset=O,a0.enabled=$,a0.autoUpdate=s0,a0.needsUpdate=i0,a0.type=g0}function T0(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function q0(O){const $=O.target;$.removeEventListener("dispose",q0),R0($)}function R0(O){k0(O),ot.remove(O)}function k0(O){const $=ot.get(O).programs;$!==void 0&&($.forEach(function(s0){ft.releaseProgram(s0)}),O.isShaderMaterial&&ft.releaseShaderCache(O))}this.renderBufferDirect=function(O,$,s0,i0,g0,H0){$===null&&($=N0);const tt=g0.isMesh&&g0.matrixWorld.determinant()<0,st=er(O,$,s0,i0,g0);y0.setMaterial(i0,tt);let nt=s0.index;const gt=s0.attributes.position;if(nt===null){if(gt===void 0||gt.count===0)return}else if(nt.count===0)return;let dt=1;i0.wireframe===!0&&(nt=Ht.getWireframeAttribute(s0),dt=2),_0.setup(g0,i0,st,s0,nt);let ht,St=F0;nt!==null&&(ht=Tt.get(nt),St=K0,St.setIndex(ht));const de=nt!==null?nt.count:gt.count,He=s0.drawRange.start*dt,we=s0.drawRange.count*dt,re=H0!==null?H0.start*dt:0,mt=H0!==null?H0.count*dt:1/0,We=Math.max(He,re),Mt=Math.min(de,He+we,re+mt)-1,Zt=Math.max(0,Mt-We+1);if(Zt!==0){if(g0.isMesh)i0.wireframe===!0?(y0.setLineWidth(i0.wireframeLinewidth*j0()),St.setMode(1)):St.setMode(4);else if(g0.isLine){let Se=i0.linewidth;Se===void 0&&(Se=1),y0.setLineWidth(Se*j0()),g0.isLineSegments?St.setMode(1):g0.isLineLoop?St.setMode(2):St.setMode(3)}else g0.isPoints?St.setMode(0):g0.isSprite&&St.setMode(4);if(g0.isInstancedMesh)St.renderInstances(We,Zt,g0.count);else if(s0.isInstancedBufferGeometry){const Se=Math.min(s0.instanceCount,s0._maxInstanceCount);St.renderInstances(We,Zt,Se)}else St.render(We,Zt)}},this.compile=function(O,$){y=j.get(O),y.init(),I.push(y),O.traverseVisible(function(s0){s0.isLight&&s0.layers.test($.layers)&&(y.pushLight(s0),s0.castShadow&&y.pushShadow(s0))}),y.setupLights(w.physicallyCorrectLights),O.traverse(function(s0){const i0=s0.material;if(i0)if(Array.isArray(i0))for(let g0=0;g0<i0.length;g0++){const H0=i0[g0];rn(H0,O,s0)}else rn(i0,O,s0)}),I.pop(),y=null};let I0=null;function $0(O){I0&&I0(O)}function pt(){wt.stop()}function V0(){wt.start()}const wt=new Qo;wt.setAnimationLoop($0),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(O){I0=O,E0.setAnimationLoop(O),O===null?wt.stop():wt.start()},E0.addEventListener("sessionstart",pt),E0.addEventListener("sessionend",V0),this.render=function(O,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;O.autoUpdate===!0&&O.updateMatrixWorld(),$.parent===null&&$.updateMatrixWorld(),E0.enabled===!0&&E0.isPresenting===!0&&(E0.cameraAutoUpdate===!0&&E0.updateCamera($),$=E0.getCamera()),O.isScene===!0&&O.onBeforeRender(w,O,$,M),y=j.get(O,I.length),y.init(),I.push(y),C0.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),r0.setFromProjectionMatrix(C0),e0=this.localClippingEnabled,d0=R.init(this.clippingPlanes,e0,$),s=qt.get(O,b.length),s.init(),b.push(s),Ut(O,$,0,w.sortObjects),s.finish(),w.sortObjects===!0&&s.sort(b0,P0),d0===!0&&R.beginShadows();const s0=y.state.shadowsArray;if(a0.render(s0,O,$),d0===!0&&R.endShadows(),this.info.autoReset===!0&&this.info.reset(),w0.render(s,O),y.setupLights(w.physicallyCorrectLights),$.isArrayCamera){const i0=$.cameras;for(let g0=0,H0=i0.length;g0<H0;g0++){const tt=i0[g0];ne(s,O,tt,tt.viewport)}}else ne(s,O,$);M!==null&&(X0.updateMultisampleRenderTarget(M),X0.updateRenderTargetMipmap(M)),O.isScene===!0&&O.onAfterRender(w,O,$),_0.resetDefaultState(),P=-1,k=null,I.pop(),I.length>0?y=I[I.length-1]:y=null,b.pop(),b.length>0?s=b[b.length-1]:s=null};function Ut(O,$,s0,i0){if(O.visible===!1)return;if(O.layers.test($.layers)){if(O.isGroup)s0=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update($);else if(O.isLight)y.pushLight(O),O.castShadow&&y.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||r0.intersectsSprite(O)){i0&&L0.setFromMatrixPosition(O.matrixWorld).applyMatrix4(C0);const tt=Ct.update(O),st=O.material;st.visible&&s.push(O,tt,st,s0,L0.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(O.isSkinnedMesh&&O.skeleton.frame!==ut.render.frame&&(O.skeleton.update(),O.skeleton.frame=ut.render.frame),!O.frustumCulled||r0.intersectsObject(O))){i0&&L0.setFromMatrixPosition(O.matrixWorld).applyMatrix4(C0);const tt=Ct.update(O),st=O.material;if(Array.isArray(st)){const nt=tt.groups;for(let gt=0,dt=nt.length;gt<dt;gt++){const ht=nt[gt],St=st[ht.materialIndex];St&&St.visible&&s.push(O,tt,St,s0,L0.z,ht)}}else st.visible&&s.push(O,tt,st,s0,L0.z,null)}}const H0=O.children;for(let tt=0,st=H0.length;tt<st;tt++)Ut(H0[tt],$,s0,i0)}function ne(O,$,s0,i0){const g0=O.opaque,H0=O.transmissive,tt=O.transparent;y.setupLightsView(s0),H0.length>0&&tr(g0,$,s0),i0&&y0.viewport(Y.copy(i0)),g0.length>0&&Ge(g0,$,s0),H0.length>0&&Ge(H0,$,s0),tt.length>0&&Ge(tt,$,s0),y0.buffers.depth.setTest(!0),y0.buffers.depth.setMask(!0),y0.buffers.color.setMask(!0),y0.setPolygonOffset(!1)}function tr(O,$,s0){const i0=J0.isWebGL2;Z===null&&(Z=new vi(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?gn:_i,minFilter:Kn,samples:i0&&c===!0?4:0})),w.getDrawingBufferSize(f0),i0?Z.setSize(f0.x,f0.y):Z.setSize(qr(f0.x),qr(f0.y));const g0=w.getRenderTarget();w.setRenderTarget(Z),w.clear();const H0=w.toneMapping;w.toneMapping=ke,Ge(O,$,s0),w.toneMapping=H0,X0.updateMultisampleRenderTarget(Z),X0.updateRenderTargetMipmap(Z),w.setRenderTarget(g0)}function Ge(O,$,s0){const i0=$.isScene===!0?$.overrideMaterial:null;for(let g0=0,H0=O.length;g0<H0;g0++){const tt=O[g0],st=tt.object,nt=tt.geometry,gt=i0===null?tt.material:i0,dt=tt.group;st.layers.test(s0.layers)&&be(st,$,s0,nt,gt,dt)}}function be(O,$,s0,i0,g0,H0){O.onBeforeRender(w,$,s0,i0,g0,H0),O.modelViewMatrix.multiplyMatrices(s0.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),g0.onBeforeRender(w,$,s0,i0,O,H0),g0.transparent===!0&&g0.side===Ji?(g0.side=ye,g0.needsUpdate=!0,w.renderBufferDirect(s0,$,i0,g0,O,H0),g0.side=fn,g0.needsUpdate=!0,w.renderBufferDirect(s0,$,i0,g0,O,H0),g0.side=Ji):w.renderBufferDirect(s0,$,i0,g0,O,H0),O.onAfterRender(w,$,s0,i0,g0,H0)}function rn(O,$,s0){$.isScene!==!0&&($=N0);const i0=ot.get(O),g0=y.state.lights,H0=y.state.shadowsArray,tt=g0.state.version,st=ft.getParameters(O,g0.state,H0,$,s0),nt=ft.getProgramCacheKey(st);let gt=i0.programs;i0.environment=O.isMeshStandardMaterial?$.environment:null,i0.fog=$.fog,i0.envMap=(O.isMeshStandardMaterial?bt:vt).get(O.envMap||i0.environment),gt===void 0&&(O.addEventListener("dispose",q0),gt=new Map,i0.programs=gt);let dt=gt.get(nt);if(dt!==void 0){if(i0.currentProgram===dt&&i0.lightsStateVersion===tt)return Si(O,st),dt}else st.uniforms=ft.getUniforms(O),O.onBuild(s0,st,w),O.onBeforeCompile(st,w),dt=ft.acquireProgram(st,nt),gt.set(nt,dt),i0.uniforms=st.uniforms;const ht=i0.uniforms;(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ht.clippingPlanes=R.uniform),Si(O,st),i0.needsLights=ue(O),i0.lightsStateVersion=tt,i0.needsLights&&(ht.ambientLightColor.value=g0.state.ambient,ht.lightProbe.value=g0.state.probe,ht.directionalLights.value=g0.state.directional,ht.directionalLightShadows.value=g0.state.directionalShadow,ht.spotLights.value=g0.state.spot,ht.spotLightShadows.value=g0.state.spotShadow,ht.rectAreaLights.value=g0.state.rectArea,ht.ltc_1.value=g0.state.rectAreaLTC1,ht.ltc_2.value=g0.state.rectAreaLTC2,ht.pointLights.value=g0.state.point,ht.pointLightShadows.value=g0.state.pointShadow,ht.hemisphereLights.value=g0.state.hemi,ht.directionalShadowMap.value=g0.state.directionalShadowMap,ht.directionalShadowMatrix.value=g0.state.directionalShadowMatrix,ht.spotShadowMap.value=g0.state.spotShadowMap,ht.spotShadowMatrix.value=g0.state.spotShadowMatrix,ht.pointShadowMap.value=g0.state.pointShadowMap,ht.pointShadowMatrix.value=g0.state.pointShadowMatrix);const St=dt.getUniforms(),de=qn.seqWithValue(St.seq,ht);return i0.currentProgram=dt,i0.uniformsList=de,dt}function Si(O,$){const s0=ot.get(O);s0.outputEncoding=$.outputEncoding,s0.instancing=$.instancing,s0.skinning=$.skinning,s0.morphTargets=$.morphTargets,s0.morphNormals=$.morphNormals,s0.morphColors=$.morphColors,s0.morphTargetsCount=$.morphTargetsCount,s0.numClippingPlanes=$.numClippingPlanes,s0.numIntersection=$.numClipIntersection,s0.vertexAlphas=$.vertexAlphas,s0.vertexTangents=$.vertexTangents,s0.toneMapping=$.toneMapping}function er(O,$,s0,i0,g0){$.isScene!==!0&&($=N0),X0.resetTextureUnits();const H0=$.fog,tt=i0.isMeshStandardMaterial?$.environment:null,st=M===null?w.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:Ai,nt=(i0.isMeshStandardMaterial?bt:vt).get(i0.envMap||tt),gt=i0.vertexColors===!0&&!!s0.attributes.color&&s0.attributes.color.itemSize===4,dt=!!i0.normalMap&&!!s0.attributes.tangent,ht=!!s0.morphAttributes.position,St=!!s0.morphAttributes.normal,de=!!s0.morphAttributes.color,He=i0.toneMapped?w.toneMapping:ke,we=s0.morphAttributes.position||s0.morphAttributes.normal||s0.morphAttributes.color,re=we!==void 0?we.length:0,mt=ot.get(i0),We=y.state.lights;if(d0===!0&&(e0===!0||O!==k)){const Jt=O===k&&i0.id===P;R.setState(i0,O,Jt)}let Mt=!1;i0.version===mt.__version?(mt.needsLights&&mt.lightsStateVersion!==We.state.version||mt.outputEncoding!==st||g0.isInstancedMesh&&mt.instancing===!1||!g0.isInstancedMesh&&mt.instancing===!0||g0.isSkinnedMesh&&mt.skinning===!1||!g0.isSkinnedMesh&&mt.skinning===!0||mt.envMap!==nt||i0.fog===!0&&mt.fog!==H0||mt.numClippingPlanes!==void 0&&(mt.numClippingPlanes!==R.numPlanes||mt.numIntersection!==R.numIntersection)||mt.vertexAlphas!==gt||mt.vertexTangents!==dt||mt.morphTargets!==ht||mt.morphNormals!==St||mt.morphColors!==de||mt.toneMapping!==He||J0.isWebGL2===!0&&mt.morphTargetsCount!==re)&&(Mt=!0):(Mt=!0,mt.__version=i0.version);let Zt=mt.currentProgram;Mt===!0&&(Zt=rn(i0,$,g0));let Se=!1,ni=!1,ri=!1;const Vt=Zt.getUniforms(),Ie=mt.uniforms;if(y0.useProgram(Zt.program)&&(Se=!0,ni=!0,ri=!0),i0.id!==P&&(P=i0.id,ni=!0),Se||k!==O){if(Vt.setValue(m0,"projectionMatrix",O.projectionMatrix),J0.logarithmicDepthBuffer&&Vt.setValue(m0,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),k!==O&&(k=O,ni=!0,ri=!0),i0.isShaderMaterial||i0.isMeshPhongMaterial||i0.isMeshToonMaterial||i0.isMeshStandardMaterial||i0.envMap){const Jt=Vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(m0,L0.setFromMatrixPosition(O.matrixWorld))}(i0.isMeshPhongMaterial||i0.isMeshToonMaterial||i0.isMeshLambertMaterial||i0.isMeshBasicMaterial||i0.isMeshStandardMaterial||i0.isShaderMaterial)&&Vt.setValue(m0,"isOrthographic",O.isOrthographicCamera===!0),(i0.isMeshPhongMaterial||i0.isMeshToonMaterial||i0.isMeshLambertMaterial||i0.isMeshBasicMaterial||i0.isMeshStandardMaterial||i0.isShaderMaterial||i0.isShadowMaterial||g0.isSkinnedMesh)&&Vt.setValue(m0,"viewMatrix",O.matrixWorldInverse)}if(g0.isSkinnedMesh){Vt.setOptional(m0,g0,"bindMatrix"),Vt.setOptional(m0,g0,"bindMatrixInverse");const Jt=g0.skeleton;Jt&&(J0.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Vt.setValue(m0,"boneTexture",Jt.boneTexture,X0),Vt.setValue(m0,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const on=s0.morphAttributes;return(on.position!==void 0||on.normal!==void 0||on.color!==void 0&&J0.isWebGL2===!0)&&A0.update(g0,s0,i0,Zt),(ni||mt.receiveShadow!==g0.receiveShadow)&&(mt.receiveShadow=g0.receiveShadow,Vt.setValue(m0,"receiveShadow",g0.receiveShadow)),ni&&(Vt.setValue(m0,"toneMappingExposure",w.toneMappingExposure),mt.needsLights&&sn(Ie,ri),H0&&i0.fog===!0&&Wt.refreshFogUniforms(Ie,H0),Wt.refreshMaterialUniforms(Ie,i0,n0,l0,Z),qn.upload(m0,mt.uniformsList,Ie,X0)),i0.isShaderMaterial&&i0.uniformsNeedUpdate===!0&&(qn.upload(m0,mt.uniformsList,Ie,X0),i0.uniformsNeedUpdate=!1),i0.isSpriteMaterial&&Vt.setValue(m0,"center",g0.center),Vt.setValue(m0,"modelViewMatrix",g0.modelViewMatrix),Vt.setValue(m0,"normalMatrix",g0.normalMatrix),Vt.setValue(m0,"modelMatrix",g0.matrixWorld),Zt}function sn(O,$){O.ambientLightColor.needsUpdate=$,O.lightProbe.needsUpdate=$,O.directionalLights.needsUpdate=$,O.directionalLightShadows.needsUpdate=$,O.pointLights.needsUpdate=$,O.pointLightShadows.needsUpdate=$,O.spotLights.needsUpdate=$,O.spotLightShadows.needsUpdate=$,O.rectAreaLights.needsUpdate=$,O.hemisphereLights.needsUpdate=$}function ue(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(O,$,s0){ot.get(O.texture).__webglTexture=$,ot.get(O.depthTexture).__webglTexture=s0;const i0=ot.get(O);i0.__hasExternalTextures=!0,i0.__hasExternalTextures&&(i0.__autoAllocateDepthBuffer=s0===void 0,i0.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),i0.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,$){const s0=ot.get(O);s0.__webglFramebuffer=$,s0.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(O,$=0,s0=0){M=O,L=$,U=s0;let i0=!0;if(O){const nt=ot.get(O);nt.__useDefaultFramebuffer!==void 0?(y0.bindFramebuffer(36160,null),i0=!1):nt.__webglFramebuffer===void 0?X0.setupRenderTarget(O):nt.__hasExternalTextures&&X0.rebindTextures(O,ot.get(O.texture).__webglTexture,ot.get(O.depthTexture).__webglTexture)}let g0=null,H0=!1,tt=!1;if(O){const nt=O.texture;(nt.isData3DTexture||nt.isDataArrayTexture)&&(tt=!0);const gt=ot.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(g0=gt[$],H0=!0):J0.isWebGL2&&O.samples>0&&X0.useMultisampledRTT(O)===!1?g0=ot.get(O).__webglMultisampledFramebuffer:g0=gt,Y.copy(O.viewport),t0.copy(O.scissor),N=O.scissorTest}else Y.copy(J).multiplyScalar(n0).floor(),t0.copy(c0).multiplyScalar(n0).floor(),N=o0;if(y0.bindFramebuffer(36160,g0)&&J0.drawBuffers&&i0&&y0.drawBuffers(O,g0),y0.viewport(Y),y0.scissor(t0),y0.setScissorTest(N),H0){const nt=ot.get(O.texture);m0.framebufferTexture2D(36160,36064,34069+$,nt.__webglTexture,s0)}else if(tt){const nt=ot.get(O.texture),gt=$||0;m0.framebufferTextureLayer(36160,36064,nt.__webglTexture,s0||0,gt)}P=-1},this.readRenderTargetPixels=function(O,$,s0,i0,g0,H0,tt){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=ot.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&tt!==void 0&&(st=st[tt]),st){y0.bindFramebuffer(36160,st);try{const nt=O.texture,gt=nt.format,dt=nt.type;if(gt!==Ce&&V.convert(gt)!==m0.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=dt===gn&&(at.has("EXT_color_buffer_half_float")||J0.isWebGL2&&at.has("EXT_color_buffer_float"));if(dt!==_i&&V.convert(dt)!==m0.getParameter(35738)&&!(dt===di&&(J0.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=O.width-i0&&s0>=0&&s0<=O.height-g0&&m0.readPixels($,s0,i0,g0,V.convert(gt),V.convert(dt),H0)}finally{const nt=M!==null?ot.get(M).__webglFramebuffer:null;y0.bindFramebuffer(36160,nt)}}},this.copyFramebufferToTexture=function(O,$,s0=0){const i0=Math.pow(2,-s0),g0=Math.floor($.image.width*i0),H0=Math.floor($.image.height*i0);X0.setTexture2D($,0),m0.copyTexSubImage2D(3553,s0,0,0,O.x,O.y,g0,H0),y0.unbindTexture()},this.copyTextureToTexture=function(O,$,s0,i0=0){const g0=$.image.width,H0=$.image.height,tt=V.convert(s0.format),st=V.convert(s0.type);X0.setTexture2D(s0,0),m0.pixelStorei(37440,s0.flipY),m0.pixelStorei(37441,s0.premultiplyAlpha),m0.pixelStorei(3317,s0.unpackAlignment),$.isDataTexture?m0.texSubImage2D(3553,i0,O.x,O.y,g0,H0,tt,st,$.image.data):$.isCompressedTexture?m0.compressedTexSubImage2D(3553,i0,O.x,O.y,$.mipmaps[0].width,$.mipmaps[0].height,tt,$.mipmaps[0].data):m0.texSubImage2D(3553,i0,O.x,O.y,tt,st,$.image),i0===0&&s0.generateMipmaps&&m0.generateMipmap(3553),y0.unbindTexture()},this.copyTextureToTexture3D=function(O,$,s0,i0,g0=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const H0=O.max.x-O.min.x+1,tt=O.max.y-O.min.y+1,st=O.max.z-O.min.z+1,nt=V.convert(i0.format),gt=V.convert(i0.type);let dt;if(i0.isData3DTexture)X0.setTexture3D(i0,0),dt=32879;else if(i0.isDataArrayTexture)X0.setTexture2DArray(i0,0),dt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}m0.pixelStorei(37440,i0.flipY),m0.pixelStorei(37441,i0.premultiplyAlpha),m0.pixelStorei(3317,i0.unpackAlignment);const ht=m0.getParameter(3314),St=m0.getParameter(32878),de=m0.getParameter(3316),He=m0.getParameter(3315),we=m0.getParameter(32877),re=s0.isCompressedTexture?s0.mipmaps[0]:s0.image;m0.pixelStorei(3314,re.width),m0.pixelStorei(32878,re.height),m0.pixelStorei(3316,O.min.x),m0.pixelStorei(3315,O.min.y),m0.pixelStorei(32877,O.min.z),s0.isDataTexture||s0.isData3DTexture?m0.texSubImage3D(dt,g0,$.x,$.y,$.z,H0,tt,st,nt,gt,re.data):s0.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),m0.compressedTexSubImage3D(dt,g0,$.x,$.y,$.z,H0,tt,st,nt,re.data)):m0.texSubImage3D(dt,g0,$.x,$.y,$.z,H0,tt,st,nt,gt,re),m0.pixelStorei(3314,ht),m0.pixelStorei(32878,St),m0.pixelStorei(3316,de),m0.pixelStorei(3315,He),m0.pixelStorei(32877,we),g0===0&&i0.generateMipmaps&&m0.generateMipmap(dt),y0.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?X0.setTextureCube(O,0):O.isData3DTexture?X0.setTexture3D(O,0):O.isDataArrayTexture?X0.setTexture2DArray(O,0):X0.setTexture2D(O,0),y0.unbindTexture()},this.resetState=function(){L=0,U=0,M=null,y0.reset(),_0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Sy extends ea{}Sy.prototype.isWebGL1Renderer=!0;class ia extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class My extends ce{constructor(t,e,r,o,c,m,d,A,_){super(t,e,r,o,c,m,d,A,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class By extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cy extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ey extends Cy{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ty{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xo();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xo(){return(typeof performance>"u"?Date:performance).now()}class Iy{constructor(t,e,r=0,o=1/0){this.ray=new ko(t,e),this.near=r,this.far=o,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,r=[]){return Qr(t,this,r,e),r.sort(bo),r}intersectObjects(t,e=!0,r=[]){for(let o=0,c=t.length;o<c;o++)Qr(t[o],this,r,e);return r.sort(bo),r}}function bo(h,t){return h.distance-t.distance}function Qr(h,t,e,r){if(h.layers.test(t.layers)&&h.raycast(t,e),r===!0){const o=h.children;for(let c=0,m=o.length;c<m;c++)Qr(o[c],t,e,!0)}}class wo{constructor(t=1,e=0,r=0){return this.radius=t,this.phi=e,this.theta=r,this}set(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,r){return this.radius=Math.sqrt(t*t+e*e+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jr);const So={type:"change"},Fr={type:"start"},Mo={type:"end"};class Py extends bi{constructor(t,e){super(),e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ii.ROTATE,TWO:Ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(V){V.addEventListener("keydown",qt),this._domElementKeyEvents=V},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(So),r.update(),c=o.NONE},this.update=function(){const V=new K,_0=new yi().setFromUnitVectors(t.up,new K(0,1,0)),M0=_0.clone().invert(),E0=new K,W=new yi,S0=2*Math.PI;return function(){const q0=r.object.position;V.copy(q0).sub(r.target),V.applyQuaternion(_0),d.setFromVector3(V),r.autoRotate&&c===o.NONE&&q(t0()),r.enableDamping?(d.theta+=A.theta*r.dampingFactor,d.phi+=A.phi*r.dampingFactor):(d.theta+=A.theta,d.phi+=A.phi);let R0=r.minAzimuthAngle,k0=r.maxAzimuthAngle;return isFinite(R0)&&isFinite(k0)&&(R0<-Math.PI?R0+=S0:R0>Math.PI&&(R0-=S0),k0<-Math.PI?k0+=S0:k0>Math.PI&&(k0-=S0),R0<=k0?d.theta=Math.max(R0,Math.min(k0,d.theta)):d.theta=d.theta>(R0+k0)/2?Math.max(R0,d.theta):Math.min(k0,d.theta)),d.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=_,d.radius=Math.max(r.minDistance,Math.min(r.maxDistance,d.radius)),r.enableDamping===!0?r.target.addScaledVector(p,r.dampingFactor):r.target.add(p),V.setFromSpherical(d),V.applyQuaternion(M0),q0.copy(r.target).add(V),r.object.lookAt(r.target),r.enableDamping===!0?(A.theta*=1-r.dampingFactor,A.phi*=1-r.dampingFactor,p.multiplyScalar(1-r.dampingFactor)):(A.set(0,0,0),p.set(0,0,0)),_=1,s||E0.distanceToSquared(r.object.position)>m||8*(1-W.dot(r.object.quaternion))>m?(r.dispatchEvent(So),E0.copy(r.object.position),W.copy(r.object.quaternion),s=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",a0),r.domElement.removeEventListener("pointerdown",vt),r.domElement.removeEventListener("pointercancel",Ht),r.domElement.removeEventListener("wheel",Wt),r.domElement.removeEventListener("pointermove",bt),r.domElement.removeEventListener("pointerup",Tt),r._domElementKeyEvents!==null&&r._domElementKeyEvents.removeEventListener("keydown",qt)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=o.NONE;const m=1e-6,d=new wo,A=new wo;let _=1;const p=new K;let s=!1;const y=new lt,b=new lt,I=new lt,w=new lt,x=new lt,L=new lt,U=new lt,M=new lt,P=new lt,k=[],Y={};function t0(){return 2*Math.PI/60/60*r.autoRotateSpeed}function N(){return Math.pow(.95,r.zoomSpeed)}function q(V){A.theta-=V}function l0(V){A.phi-=V}const n0=function(){const V=new K;return function(M0,E0){V.setFromMatrixColumn(E0,0),V.multiplyScalar(-M0),p.add(V)}}(),b0=function(){const V=new K;return function(M0,E0){r.screenSpacePanning===!0?V.setFromMatrixColumn(E0,1):(V.setFromMatrixColumn(E0,0),V.crossVectors(r.object.up,V)),V.multiplyScalar(M0),p.add(V)}}(),P0=function(){const V=new K;return function(M0,E0){const W=r.domElement;if(r.object.isPerspectiveCamera){const S0=r.object.position;V.copy(S0).sub(r.target);let T0=V.length();T0*=Math.tan(r.object.fov/2*Math.PI/180),n0(2*M0*T0/W.clientHeight,r.object.matrix),b0(2*E0*T0/W.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(n0(M0*(r.object.right-r.object.left)/r.object.zoom/W.clientWidth,r.object.matrix),b0(E0*(r.object.top-r.object.bottom)/r.object.zoom/W.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function J(V){r.object.isPerspectiveCamera?_/=V:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*V)),r.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function c0(V){r.object.isPerspectiveCamera?_*=V:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/V)),r.object.updateProjectionMatrix(),s=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function o0(V){y.set(V.clientX,V.clientY)}function r0(V){U.set(V.clientX,V.clientY)}function d0(V){w.set(V.clientX,V.clientY)}function e0(V){b.set(V.clientX,V.clientY),I.subVectors(b,y).multiplyScalar(r.rotateSpeed);const _0=r.domElement;q(2*Math.PI*I.x/_0.clientHeight),l0(2*Math.PI*I.y/_0.clientHeight),y.copy(b),r.update()}function Z(V){M.set(V.clientX,V.clientY),P.subVectors(M,U),P.y>0?J(N()):P.y<0&&c0(N()),U.copy(M),r.update()}function C0(V){x.set(V.clientX,V.clientY),L.subVectors(x,w).multiplyScalar(r.panSpeed),P0(L.x,L.y),w.copy(x),r.update()}function f0(V){V.deltaY<0?c0(N()):V.deltaY>0&&J(N()),r.update()}function L0(V){let _0=!1;switch(V.code){case r.keys.UP:P0(0,r.keyPanSpeed),_0=!0;break;case r.keys.BOTTOM:P0(0,-r.keyPanSpeed),_0=!0;break;case r.keys.LEFT:P0(r.keyPanSpeed,0),_0=!0;break;case r.keys.RIGHT:P0(-r.keyPanSpeed,0),_0=!0;break}_0&&(V.preventDefault(),r.update())}function N0(){if(k.length===1)y.set(k[0].pageX,k[0].pageY);else{const V=.5*(k[0].pageX+k[1].pageX),_0=.5*(k[0].pageY+k[1].pageY);y.set(V,_0)}}function j0(){if(k.length===1)w.set(k[0].pageX,k[0].pageY);else{const V=.5*(k[0].pageX+k[1].pageX),_0=.5*(k[0].pageY+k[1].pageY);w.set(V,_0)}}function m0(){const V=k[0].pageX-k[1].pageX,_0=k[0].pageY-k[1].pageY,M0=Math.sqrt(V*V+_0*_0);U.set(0,M0)}function Bt(){r.enableZoom&&m0(),r.enablePan&&j0()}function at(){r.enableZoom&&m0(),r.enableRotate&&N0()}function J0(V){if(k.length==1)b.set(V.pageX,V.pageY);else{const M0=K0(V),E0=.5*(V.pageX+M0.x),W=.5*(V.pageY+M0.y);b.set(E0,W)}I.subVectors(b,y).multiplyScalar(r.rotateSpeed);const _0=r.domElement;q(2*Math.PI*I.x/_0.clientHeight),l0(2*Math.PI*I.y/_0.clientHeight),y.copy(b)}function y0(V){if(k.length===1)x.set(V.pageX,V.pageY);else{const _0=K0(V),M0=.5*(V.pageX+_0.x),E0=.5*(V.pageY+_0.y);x.set(M0,E0)}L.subVectors(x,w).multiplyScalar(r.panSpeed),P0(L.x,L.y),w.copy(x)}function ut(V){const _0=K0(V),M0=V.pageX-_0.x,E0=V.pageY-_0.y,W=Math.sqrt(M0*M0+E0*E0);M.set(0,W),P.set(0,Math.pow(M.y/U.y,r.zoomSpeed)),J(P.y),U.copy(M)}function ot(V){r.enableZoom&&ut(V),r.enablePan&&y0(V)}function X0(V){r.enableZoom&&ut(V),r.enableRotate&&J0(V)}function vt(V){r.enabled!==!1&&(k.length===0&&(r.domElement.setPointerCapture(V.pointerId),r.domElement.addEventListener("pointermove",bt),r.domElement.addEventListener("pointerup",Tt)),w0(V),V.pointerType==="touch"?j(V):Ct(V))}function bt(V){r.enabled!==!1&&(V.pointerType==="touch"?R(V):ft(V))}function Tt(V){A0(V),k.length===0&&(r.domElement.releasePointerCapture(V.pointerId),r.domElement.removeEventListener("pointermove",bt),r.domElement.removeEventListener("pointerup",Tt)),r.dispatchEvent(Mo),c=o.NONE}function Ht(V){A0(V)}function Ct(V){let _0;switch(V.button){case 0:_0=r.mouseButtons.LEFT;break;case 1:_0=r.mouseButtons.MIDDLE;break;case 2:_0=r.mouseButtons.RIGHT;break;default:_0=-1}switch(_0){case Ti.DOLLY:if(r.enableZoom===!1)return;r0(V),c=o.DOLLY;break;case Ti.ROTATE:if(V.ctrlKey||V.metaKey||V.shiftKey){if(r.enablePan===!1)return;d0(V),c=o.PAN}else{if(r.enableRotate===!1)return;o0(V),c=o.ROTATE}break;case Ti.PAN:if(V.ctrlKey||V.metaKey||V.shiftKey){if(r.enableRotate===!1)return;o0(V),c=o.ROTATE}else{if(r.enablePan===!1)return;d0(V),c=o.PAN}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(Fr)}function ft(V){if(r.enabled!==!1)switch(c){case o.ROTATE:if(r.enableRotate===!1)return;e0(V);break;case o.DOLLY:if(r.enableZoom===!1)return;Z(V);break;case o.PAN:if(r.enablePan===!1)return;C0(V);break}}function Wt(V){r.enabled===!1||r.enableZoom===!1||c!==o.NONE||(V.preventDefault(),r.dispatchEvent(Fr),f0(V),r.dispatchEvent(Mo))}function qt(V){r.enabled===!1||r.enablePan===!1||L0(V)}function j(V){switch(F0(V),k.length){case 1:switch(r.touches.ONE){case Ii.ROTATE:if(r.enableRotate===!1)return;N0(),c=o.TOUCH_ROTATE;break;case Ii.PAN:if(r.enablePan===!1)return;j0(),c=o.TOUCH_PAN;break;default:c=o.NONE}break;case 2:switch(r.touches.TWO){case Ii.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Bt(),c=o.TOUCH_DOLLY_PAN;break;case Ii.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;at(),c=o.TOUCH_DOLLY_ROTATE;break;default:c=o.NONE}break;default:c=o.NONE}c!==o.NONE&&r.dispatchEvent(Fr)}function R(V){switch(F0(V),c){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;J0(V),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;y0(V),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ot(V),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;X0(V),r.update();break;default:c=o.NONE}}function a0(V){r.enabled!==!1&&V.preventDefault()}function w0(V){k.push(V)}function A0(V){delete Y[V.pointerId];for(let _0=0;_0<k.length;_0++)if(k[_0].pointerId==V.pointerId){k.splice(_0,1);return}}function F0(V){let _0=Y[V.pointerId];_0===void 0&&(_0=new lt,Y[V.pointerId]=_0),_0.set(V.pageX,V.pageY)}function K0(V){const _0=V.pointerId===k[0].pointerId?k[1]:k[0];return Y[_0.pointerId]}r.domElement.addEventListener("contextmenu",a0),r.domElement.addEventListener("pointerdown",vt),r.domElement.addEventListener("pointercancel",Ht),r.domElement.addEventListener("wheel",Wt,{passive:!1}),this.update()}}const na=(h=200)=>{const t=window.innerWidth/window.innerHeight,e=new Yo(h*t/-2,h*t/2,h/2,h/-2,1,1e3);return window.addEventListener("resize",()=>{const r=window.innerWidth/window.innerHeight;e.left=-h*r/2,e.right=h*r/2,e.top=h/2,e.bottom=-h/2,e.updateProjectionMatrix()}),e};//! Camera
const Yi=na();Yi.position.set(0,0,200);//! Scene
const ti=new ia;ti.background=new yt(0);//! Renderer
const Te=new ea({alpha:!0});Te.setPixelRatio(window.devicePixelRatio);Te.setSize(window.innerWidth,window.innerHeight);Te.autoClear=!1;document.body.appendChild(Te.domElement);//! Resize
window.addEventListener("resize",()=>{Te.setSize(window.innerWidth,window.innerHeight)});//! Controls
const Dy=new Py(Yi,Te.domElement);function ra(){requestAnimationFrame(ra),Dy.update()}ra();//! World
const h={"../assets/levels/house1.json":jC,"../assets/levels/house2.json":GC,"../assets/levels/house3.json":WC,"../assets/levels/house4.json":XC,"../assets/levels/map.json":YC},t={"../assets/tilesets/barn.json":cB,"../assets/tilesets/basic interior.json":uB,"../assets/tilesets/boat.json":mB,"../assets/tilesets/dirt.json":fB,"../assets/tilesets/door.json":_B,"../assets/tilesets/farming plant.json":vB,"../assets/tilesets/fences.json":xB,"../assets/tilesets/flower.json":wB,"../assets/tilesets/grass.json":MB,"../assets/tilesets/hill.json":CB,"../assets/tilesets/house exterior.json":TB,"../assets/tilesets/house.json":PB,"../assets/tilesets/mailbox.json":LB,"../assets/tilesets/stone path.json":zB,"../assets/tilesets/trees.json":VB,"../assets/tilesets/water objects.json":NB,"../assets/tilesets/water tray.json":jB,"../assets/tilesets/water well.json":GB,"../assets/tilesets/water.json":WB,"../assets/tilesets/wood bridge.json":XB,"../assets/tilesets/wooden path.json":YB,"../assets/tilesets/Interior/basic furniture.json":KB,"../assets/tilesets/Interior/bathroom.json":$B,"../assets/tilesets/Interior/bed.json":eC,"../assets/tilesets/Interior/chair.json":nC,"../assets/tilesets/Interior/chest.json":sC,"../assets/tilesets/Interior/couch.json":aC,"../assets/tilesets/Interior/couchtable.json":cC,"../assets/tilesets/Interior/curtain.json":uC,"../assets/tilesets/Interior/decoration.json":mC,"../assets/tilesets/Interior/fence.json":fC,"../assets/tilesets/Interior/gif interior 2.json":_C,"../assets/tilesets/Interior/kidroom.json":vC,"../assets/tilesets/Interior/kitchen assembled.json":xC,"../assets/tilesets/Interior/kitchen tile.json":wC,"../assets/tilesets/Interior/modern interior.json":MC,"../assets/tilesets/Interior/rug.json":CC,"../assets/tilesets/Interior/rug1.json":TC,"../assets/tilesets/Interior/stairs.json":PC,"../assets/tilesets/Interior/storage.json":LC,"../assets/tilesets/Interior/table.json":zC,"../assets/tilesets/Interior/wallpapers.json":VC,"../assets/tilesets/Interior/wallshelves.json":NC},e={"../assets/images/characters/Am\xE9lie - Premium Charakter Spritesheet.png":Ny,"../assets/images/characters/Basic Charakter Actions.png":jy,"../assets/images/characters/Basic Charakter Spritesheet-normal.png":Gy,"../assets/images/characters/Basic Charakter Spritesheet.png":Wy,"../assets/images/characters/Cl\xE9mentine - Premium Charakter Spritesheet.png":Xy,"../assets/images/characters/Hughie - Premium Charakter Spritesheet.png":Yy,"../assets/images/characters/Jack - Premium Charakter Spritesheet.png":Ky,"../assets/images/characters/Premium Charakter Spritesheet.png":$y,"../assets/images/characters/Tools.png":ex,"../assets/images/characters/water from wateringcan frames.png":nx,"../assets/images/Cozy interior/global.png":sx,"../assets/images/nature free/global.png":ax,"../assets/images/objects/Barn structures.png":cx,"../assets/images/objects/Boats.png":ux,"../assets/images/objects/Farming Plants.png":mx,"../assets/images/objects/Mushrooms, Flowers, Stones.png":fx,"../assets/images/objects/Piknik basket.png":_x,"../assets/images/objects/Piknik blanket.png":vx,"../assets/images/objects/signs.png":xx,"../assets/images/objects/Trees, stumps and bushes.png":wx,"../assets/images/objects/Water Objects.png":Mx,"../assets/images/objects/Water well.png":Cx,"../assets/images/objects/work station.png":Tx,"../assets/images/Package/atlas_16x.png":Px,"../assets/images/Package/atlas_32x.png":Lx,"../assets/images/Package/atlas_48x.png":zx,"../assets/images/Pixel_Interiors/Interior 1.png":Vx,"../assets/images/Pixel_Interiors/Interior.png":Nx,"../assets/images/tilesets/Grass.png":jx,"../assets/images/tilesets/Hills.png":Gx,"../assets/images/tilesets/Tilled Dirt.png":Wx,"../assets/images/tilesets/Water.png":Xx,"../assets/images/UI Sprites/ALL UI ASSETS on one sheet.png":Yx,"../assets/images/UI Sprites/containers.png":Kx,"../assets/images/UI Sprites/selectors.png":$x,"../assets/images/Cozy interior/16x16/bathroom16x16.png":eb,"../assets/images/Cozy interior/16x16/bathroom16x16_shadow.png":nb,"../assets/images/Cozy interior/16x16/beds16x16.png":sb,"../assets/images/Cozy interior/16x16/beds16x16_shadow.png":ab,"../assets/images/Cozy interior/16x16/couches16x16.png":cb,"../assets/images/Cozy interior/16x16/couches16x16_shadow.png":ub,"../assets/images/Cozy interior/16x16/couchtables16x16.png":mb,"../assets/images/Cozy interior/16x16/couchtables16x16_shadow.png":fb,"../assets/images/Cozy interior/basics/curtains.png":_b,"../assets/images/Cozy interior/basics/doors.png":vb,"../assets/images/Cozy interior/basics/fireplaces.png":xb,"../assets/images/Cozy interior/basics/rugs.png":wb,"../assets/images/Cozy interior/basics/stairs.png":Mb,"../assets/images/Cozy interior/basics/wallpapers.png":Cb,"../assets/images/Cozy interior/furniture/bathroom.png":Tb,"../assets/images/Cozy interior/furniture/bathroom_shadow.png":Pb,"../assets/images/Cozy interior/furniture/beds.png":Lb,"../assets/images/Cozy interior/furniture/beds_shadow.png":zb,"../assets/images/Cozy interior/furniture/boxes.png":Vb,"../assets/images/Cozy interior/furniture/chairs.png":Nb,"../assets/images/Cozy interior/furniture/chairs_shadow.png":jb,"../assets/images/Cozy interior/furniture/couches.png":Gb,"../assets/images/Cozy interior/furniture/couches_shadow.png":Wb,"../assets/images/Cozy interior/furniture/couchtables.png":Xb,"../assets/images/Cozy interior/furniture/couchtables_shadow.png":Yb,"../assets/images/Cozy interior/furniture/decorations.png":Kb,"../assets/images/Cozy interior/furniture/kidsroom.png":$b,"../assets/images/Cozy interior/furniture/kidsroom_shadow.png":ew,"../assets/images/Cozy interior/furniture/kitchens_assembled.png":nw,"../assets/images/Cozy interior/furniture/kitchen_tiles.png":sw,"../assets/images/Cozy interior/furniture/storage.png":aw,"../assets/images/Cozy interior/furniture/tables.png":cw,"../assets/images/Cozy interior/furniture/tables_shadow.png":uw,"../assets/images/Cozy interior/furniture/wallshelves.png":mw,"../assets/images/Cozy interior/furniture/wallshelves_shadow.png":fw,"../assets/images/Cozy interior/pets/cat animation.png":_w,"../assets/images/Cozy interior/pets/pets.png":vw,"../assets/images/Cozy interior/pets/yorkie animation.png":xw,"../assets/images/Interior/furniture/Basic Furniture.png":ww,"../assets/images/Interior/furniture/bathroom.png":Mw,"../assets/images/Interior/furniture/beds16x16 2.png":Cw,"../assets/images/Interior/furniture/beds16x16.png":Tw,"../assets/images/Interior/furniture/boxes.png":Pw,"../assets/images/Interior/furniture/chairs.png":Lw,"../assets/images/Interior/furniture/Chest.png":zw,"../assets/images/Interior/furniture/couches.png":Vw,"../assets/images/Interior/furniture/couchtables.png":Nw,"../assets/images/Interior/furniture/curtains.png":jw,"../assets/images/Interior/furniture/decorations.png":Gw,"../assets/images/Interior/furniture/fireplaces.png":Ww,"../assets/images/Interior/furniture/gif interior 1.png":Xw,"../assets/images/Interior/furniture/gif interior 2.png":Yw,"../assets/images/Interior/furniture/interior free.png":Kw,"../assets/images/Interior/furniture/kidsroom.png":$w,"../assets/images/Interior/furniture/kitchens_assembled.png":e6,"../assets/images/Interior/furniture/kitchen_tiles.png":n6,"../assets/images/Interior/furniture/modern interior.png":s6,"../assets/images/Interior/furniture/pets.png":a6,"../assets/images/Interior/furniture/railing.png":c6,"../assets/images/Interior/furniture/rugs.png":u6,"../assets/images/Interior/furniture/rugs1.png":m6,"../assets/images/Interior/furniture/stairs.png":f6,"../assets/images/Interior/furniture/storage.png":_6,"../assets/images/Interior/furniture/tables.png":v6,"../assets/images/Interior/furniture/wallpapers.png":x6,"../assets/images/Interior/furniture/wallshelves.png":w6,"../assets/images/objects/Items/All items.png":M6,"../assets/images/objects/Items/Farming Plants items.png":C6,"../assets/images/objects/Items/fruit and berries items.png":T6,"../assets/images/objects/Items/item shadow.png":P6,"../assets/images/objects/Items/Milk and grass item Simple.png":L6,"../assets/images/objects/Items/Milk and grass item.png":z6,"../assets/images/objects/Items/tools and meterials.png":V6,"../assets/images/objects/Tree animations/tree apple sprites.png":N6,"../assets/images/objects/Tree animations/tree orange sprites.png":j6,"../assets/images/objects/Tree animations/tree peach sprites.png":G6,"../assets/images/objects/Tree animations/tree pear sprites.png":W6,"../assets/images/objects/Tree animations/tree sprites.png":X6,"../assets/images/Package/animation/chest_001.png":Y6,"../assets/images/Package/animation/chest_002.png":K6,"../assets/images/Package/animation/chest_003.png":$6,"../assets/images/Package/animation/chest_004.png":e5,"../assets/images/Package/animation/fire.png":n5,"../assets/images/Package/animation/fire2.png":s5,"../assets/images/Package/every_packs_screenshots/screenshot (1).png":a5,"../assets/images/Package/every_packs_screenshots/screenshot (10).png":c5,"../assets/images/Package/every_packs_screenshots/screenshot (11).png":u5,"../assets/images/Package/every_packs_screenshots/screenshot (2).png":m5,"../assets/images/Package/every_packs_screenshots/screenshot (3).png":f5,"../assets/images/Package/every_packs_screenshots/screenshot (4).png":_5,"../assets/images/Package/every_packs_screenshots/screenshot (5).png":v5,"../assets/images/Package/every_packs_screenshots/screenshot (6).png":x5,"../assets/images/Package/every_packs_screenshots/screenshot (7).png":w5,"../assets/images/Package/every_packs_screenshots/screenshot (8).png":M5,"../assets/images/Package/every_packs_screenshots/screenshot (9).png":C5,"../assets/images/Package/rpgmaker/tileset_B.png":T5,"../assets/images/Package/rpgmaker/tileset_C.png":P5,"../assets/images/Package/rpgmaker/tileset_D.png":L5,"../assets/images/tilesets/Building parts/Chest.png":z5,"../assets/images/tilesets/Building parts/door animation sprites.png":V5,"../assets/images/tilesets/Building parts/Fence gates animation sprites .png":N5,"../assets/images/tilesets/Building parts/Fences.png":j5,"../assets/images/tilesets/Building parts/Mailbox Animation Frames.png":G5,"../assets/images/tilesets/Building parts/Paths.png":W5,"../assets/images/tilesets/Building parts/STONE PATH.png":X5,"../assets/images/tilesets/Building parts/Water tray.png":Y5,"../assets/images/tilesets/Building parts/Wood Bridge.png":K5,"../assets/images/tilesets/Building parts/Wooden House.png":$5,"../assets/images/tilesets/water frames/Water_1.png":eS,"../assets/images/tilesets/water frames/Water_2.png":nS,"../assets/images/tilesets/water frames/Water_3.png":sS,"../assets/images/tilesets/water frames/Water_4.png":aS,"../assets/images/UI Sprites/Dialouge UI/dialog box big.png":cS,"../assets/images/UI Sprites/Dialouge UI/dialog box character finished talking click to continue indicator - spritesheet .png":uS,"../assets/images/UI Sprites/Dialouge UI/dialog box medium.png":mS,"../assets/images/UI Sprites/Dialouge UI/dialog box small.png":fS,"../assets/images/UI Sprites/Dialouge UI/dialog box.png":_S,"../assets/images/UI Sprites/Dialouge UI/Premade dialog box  big.png":vS,"../assets/images/UI Sprites/Dialouge UI/Premade dialog box medium.png":xS,"../assets/images/UI Sprites/Dialouge UI/Premade dialog box small.png":wS,"../assets/images/UI Sprites/Icons/All Icons.png":MS,"../assets/images/UI Sprites/Icons/white icons.png":CS,"../assets/images/UI Sprites/Mouse sprites/Arrow Mouse icon 1.png":TS,"../assets/images/UI Sprites/Mouse sprites/Arrow Mouse icon 2.png":PS,"../assets/images/UI Sprites/Mouse sprites/Arrow Mouse icon 3.png":LS,"../assets/images/UI Sprites/Mouse sprites/Catpaw holding Mouse icon.png":zS,"../assets/images/UI Sprites/Mouse sprites/Catpaw Mouse icon.png":VS,"../assets/images/UI Sprites/Mouse sprites/Catpaw pointing Mouse icon.png":NS,"../assets/images/UI Sprites/Mouse sprites/Triangle Mouse icon 1.png":jS,"../assets/images/UI Sprites/Mouse sprites/Triangle Mouse icon 2.png":GS,"../assets/images/UI Sprites/Mouse sprites/Triangle Mouse icon 3.png":WS,"../assets/images/UI Sprites/Mouse sprites/Triangle small Mouse icon 1.png":XS,"../assets/images/UI Sprites/Mouse sprites/Triangle small Mouse icon 2.png":YS,"../assets/images/UI Sprites/Mouse sprites/Triangle small Mouse icon 3.png":KS,"../assets/images/UI Sprites/Other UI sprites/Setting menu.png":$S,"../assets/images/UI Sprites/Other UI sprites/Stamina circle with black outline sprite sheet .png":eM,"../assets/images/UI Sprites/Other UI sprites/Stamina circle with white outline sprite sheet .png":nM,"../assets/images/UI Sprites/Other UI sprites/UI Big Play Button.png":sM,"../assets/images/UI Sprites/Other UI sprites/UI Settings Buttons.png":aM,"../assets/images/characters/Animal SpriteSheets/baby cow/baby brown cow animations sprites.png":cM,"../assets/images/characters/Animal SpriteSheets/baby cow/baby green cow animations sprites.png":uM,"../assets/images/characters/Animal SpriteSheets/baby cow/baby light cow animations sprites.png":mM,"../assets/images/characters/Animal SpriteSheets/baby cow/baby pink cow animations sprites.png":fM,"../assets/images/characters/Animal SpriteSheets/baby cow/baby purple cow animations sprites.png":_M,"../assets/images/characters/Animal SpriteSheets/cow/Brown cow animations.png":vM,"../assets/images/characters/Animal SpriteSheets/cow/Free Cow Sprites.png":xM,"../assets/images/characters/Animal SpriteSheets/cow/Green cow animation sprites.png":wM,"../assets/images/characters/Animal SpriteSheets/cow/Light cow animations.png":MM,"../assets/images/characters/Animal SpriteSheets/cow/Pink cow animation sprites.png":CM,"../assets/images/characters/Animal SpriteSheets/cow/Purple cow animation sprites.png":TM,"../assets/images/UI Sprites/buttons/Icon Buttons/Icon Buttons Spritesheet.png":PM,"../assets/images/UI Sprites/buttons/round/medium colored round buttons.png":LM,"../assets/images/UI Sprites/buttons/round/small colored round buttons.png":zM,"../assets/images/UI Sprites/buttons/square/Small Square Buttons.png":VM,"../assets/images/UI Sprites/buttons/square/Square Buttons 19x26.png":NM,"../assets/images/UI Sprites/buttons/square/Square Buttons 26x19.png":jM,"../assets/images/UI Sprites/buttons/square/Square Buttons 26x26.png":GM,"../assets/images/UI Sprites/Dialouge UI/Emotes/Teemo Basic emote animations sprite sheet.png":WM,"../assets/images/UI Sprites/Dialouge UI/Emotes/Teemo premium emote animations sprite sheet-export.png":XM,"../assets/images/UI Sprites/Icons/special icons/coins.png":YM,"../assets/images/UI Sprites/Icons/special icons/Hearts in wood.png":KM,"../assets/images/UI Sprites/Icons/special icons/Hearts.png":$M,"../assets/images/UI Sprites/Icons/special icons/Medium Happines-Sadness icons.png":eB,"../assets/images/UI Sprites/Icons/special icons/Small Happines-Sadness icons.png":nB,"../assets/images/UI Sprites/Icons/special icons/stars in wood.png":sB,"../assets/images/UI Sprites/Icons/special icons/stars.png":aB},r={"../assets/object templates/teleport.json":Vy},o={"../assets/items/items1.json":zy};//! Loaders
const c=b=>async I=>({...I,img:await Bo(b[Yn(I.image)].default),tiles:I?.tiles?.map(w=>({...w,...Qn(w)}))}),m=b=>({...b.object,...Qn(b.object)}),d=b=>I=>({...I,tilesets:I.tilesets.map(w=>({...w,...b[Yn(w.source)]}))});//! Transforms
const A=await hn(e),_=await hn(t,c(A)),p=await hn(o,c(A)),s=await hn(h,d(_)),y=await hn(r,m);return{levels:s,tilesets:_,items:p,images:A,templates:y,async load(b){return this.images[b]=await Bo(A[b].default),this.images[b]}}})(),wn=(h,t)=>{const r=document.createElement("canvas").getContext("2d",{alpha:!0});return r.canvas.height=t,r.canvas.width=h??16/9*t,r.imageSmoothingEnabled=!1,r.canvas.style["image-rendering"]="pixelated",r},en=(h,t,e)=>{const{buffer:r,texture:o,material:c=By}=h;let m=null;if(r){const p=new My(r.canvas);p.minFilter=Gt,p.magFilter=Gt,m=p}else m=o;const d=new Zn(t??r.canvas.width,e??r.canvas.height),A=new c({map:m,transparent:!0});return new je(d,A)},ts=({repeat:h=!0,autoStart:t=!0,defaultAnimation:e,img:r,animations:o,tileSize:c,onAnimationFinished:m,animationsLength:d={},backwards:A=!1,speed:_=4,once:p=!1})=>{let s=e??o[0];const y=xe.images[r],b={vertical:y.height/c,horizontal:y.width/c},I=wn(y.width,y.height);I.drawImage(y,0,0);const w=en({buffer:I},c,c);let x=0,L=0,U=A,M=!p,P=t;const k=J=>{const c0=d[J]??b.horizontal;return{x:(U?c0-x-1:x)/b.horizontal,y:1-(o.findIndex(o0=>o0==J)+1)/b.vertical}},{x:Y,y:t0}=k(s);return w.material.map.repeat.set(1/b.horizontal,1/b.vertical),w.material.map.offset.set(Y,t0),ti.add(w),{mesh:w,update:()=>{if((h||!M)&&P){const J=d[s]??b.horizontal;L++,L>_&&(L=0,x=(x+1)%J);const{x:c0,y:o0}=k(s);w.material.map.offset.set(c0,o0),x==J-1&&(M=!0,m&&m())}},reverse:()=>{U=!U},start:()=>{P=!0},reset:()=>{M=!1},setState:J=>{s=J},setOnAnimationFinished:J=>{m=J}}};xe.load("door animation sprites");const JC=()=>{const h=ts({img:"door animation sprites",tileSize:16,animations:["smallDoor"],animationsLength:{smallDoor:6},repeat:!1,backwards:!0,once:!0,autoStart:!1});return h.mesh.renderOrder=0,h};xe.load("Light cow animations");const KC=(h,t="Light")=>{const e=ts({img:`${t} cow animations`,animations:["idle","run"],tileSize:32,animationsLength:{idle:3},speed:16});return e.mesh.position.x=h.x,e.mesh.position.y=h.y,e};//! Types
const Co=h=>{const t=[],e=[],r=[],o=xe.levels[h],c=[],m=()=>wn(o.width*o.tilewidth,o.height*o.tileheight),d=m(),A=m();o.layers.filter(U=>U.type=="tilelayer").forEach(U=>{const M=U.properties?.some(P=>P.name=="top"&&P.value==!0)?A:d;U.chunks.forEach(P=>{P.data.forEach((k,Y)=>{if(k==0)return;const t0=o.tilesets.find(c0=>c0.firstgid<=k&&k<=c0.firstgid+c0.tilecount-1);if(!t0)return;const[N,q]=Yr(k-t0.firstgid,t0.columns,t0.tilewidth,t0.tileheight),[l0,n0]=Yr(Y,P.width,o.tilewidth,o.tileheight),b0=l0+P.x*o.tilewidth,P0=n0+P.y*o.tileheight;//! Collisions
const J=t0.tiles?.find(c0=>c0.id==k-t0.firstgid)?.objectgroup?.objects;J&&J.forEach(c0=>{const o0={width:c0.width,height:c0.height,x:b0+c0.x+c0.width/2-o.width*o.tilewidth/2,y:o.height*o.tileheight/2-P0+c0.y-c0.height/2,properties:Qn(c0)};c.push(o0)}),M.drawImage(t0.img,N,q,o.tilewidth,o.tileheight,b0,P0,t0.tilewidth,t0.tileheight)})})});//! Objects
const _={};o.layers.filter(U=>U.type=="objectgroup").forEach(U=>{U.name in _||(_[U.name]=[]),U.objects.forEach(M=>{const P={};M.template&&Object.assign(P,xe.templates[Yn(M.template)]),Object.assign(P,M),Object.assign(P,{x:M.x-o.width*o.tilewidth/2,y:o.height*o.tileheight/2-M.y}),Object.assign(P,Qn(M)),_[U.name].push(P)})});//! Meshes
const p=en({buffer:A}),s=en({buffer:d});p.renderOrder=10,s.renderOrder=0,e.push(p),e.push(s),ti.add(p),ti.add(s);//! Add collisions
const y=ii.createBody({type:"static",position:Dt.exports.Vec2(0,0)});t.push(y),c.forEach(({width:U,height:M,x:P,y:k})=>{y.createFixture({shape:Dt.exports.Box(U/2,M/2,Dt.exports.Vec2(P,k),0),density:0}).setUserData({collision:!0})});//! Add entities
"entities"in _&&_.entities.filter(U=>U.name=="spawn").forEach(U=>{const M=U.x+U.width/2,P=U.y-U.height/2,k=KC(Dt.exports.Vec2(M,P),"Light");r.push(k)});//! Add teleports
const b=[];_.teleports.forEach(U=>{const M=U.x+U.width/2,P=U.y-U.height/2,k=Dt.exports.Vec2(M,P),Y=ii.createBody({type:"static",position:k});t.push(Y);const t0=Y.createFixture({shape:Dt.exports.Box(U.width/2,U.height/2,Dt.exports.Vec2(0,0),0),density:0,isSensor:!0}),N={...U,type:"teleport",position:k};if(U.door){const q=JC();q.mesh.position.x=M,q.mesh.position.y=P,e.push(q.mesh),Object.assign(N,{object:q})}t0.setUserData(N),b.push(t0)});let I=!0;return{meshTop:p,meshBottom:s,collisions:c,getTeleport:U=>b.find(M=>M.getUserData().name==U)?.getUserData(),unLoad:()=>{t.forEach(U=>ii.destroyBody(U)),e.forEach(U=>ti.remove(ti.getObjectById(U.id))),I=!1},loaded:I,update:()=>{b.forEach(U=>U.getUserData()?.object&&U.getUserData().object.update()),r.forEach(U=>U.update())}}},Eo=.5;for(const h of["","Am\xE9lie","Cl\xE9mentine","Hughie","Jack"])await xe.load(`${h?h+" - ":""}Premium Charakter Spritesheet`);const _p=({name:h,position:t=Dt.exports.Vec2(0,0),player:e=!0})=>{const r=ts({img:`${h} - Premium Charakter Spritesheet`,tileSize:48,animations:["idle-down","idle-up","idle-left","idle-right","moving-down","moving-up","moving-right","moving-left"]});r.mesh.renderOrder=1;const o=.25,c=ii.createBody({type:"dynamic",fixedRotation:!0,bullet:!0,allowSleep:!0,position:t});c.createFixture({shape:Dt.exports.Box(8,8,Dt.exports.Vec2(0,0),0),density:0}).setUserData({type:e?"player":"NPC"});const d=Dt.exports.Vec2(0,0);let A="down";//! Items
const _=[{category:"seed",type:"maize"},{category:"tool",type:"hoe"}];//! Move
const p=U=>{switch(A=U,U){case"up":d.y+=o;break;case"down":d.y-=o;break;case"right":d.x+=o;break;case"left":d.x-=o;break}};let s=!0;const y=ii.createBody({type:"dynamic",fixedRotation:!0,bullet:!0,allowSleep:!0,position:t});y.createFixture({shape:Dt.exports.Box(8,8,Dt.exports.Vec2(0,0),0),density:0,isSensor:!0}).setUserData({type:(e?"player":"NPC")+"Sensor"});let I=!1;const w=()=>{if(r.update(),r.setState((Math.abs(d.x)>o||Math.abs(d.y)>o?"moving":"idle")+"-"+A),I)d.x=0,d.y=0;else{d.x*=Eo,d.y*=Eo,c.setLinearVelocity(d);const U=c.getPosition();r.mesh.position.x=U.x,r.mesh.position.y=U.y;const M=Dt.exports.Vec2({left:-16,right:16}[A]??0,{up:16,down:-16}[A]??0);y.setPosition(M.add(U))}},x=U=>{c.setPosition(U)},L=U=>{I=U};return{position:r.mesh.position,move:p,update:w,canTeleport:s,teleport:x,items:_,setStop:L}},ZC=h=>{const t=function(){return{active:!1,down:!1,get once(){return this.active?(this.active=!1,!0):!1},getInput(m){this.down!=m&&(this.active=m),this.down=m}}},e=h.actions.reduce((m,d)=>({...m,[d]:t()}),{}),r=(m,d)=>A=>{A.preventDefault();const _=A.type==m,p=d(A);p&&e[p].getInput(_)},o=r("keydown",m=>h.keyboard?.[m.code]),c=r("pointerdown",m=>h.mouse?.[m.button]);return document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("keydown",o),document.addEventListener("keyup",o),e},$C={actions:["up","down","left","right","interact"],keyboard:{KeyW:"up",KeyA:"left",KeyD:"right",KeyS:"down"},mouse:{0:"interact"}};xe.load("containers");const t9=(h,t)=>h===0?0:h===t-1?32:16,e9=(h,t)=>{const e=xe.images.containers,[r,o]=[h+2,t+2],c=wn(r*16,o*16);for(let m=0;m<r;m++)for(let d=0;d<o;d++){const[A,_]=[[m,r],[d,o]].map(([p,s])=>t9(p,s));c.drawImage(e,A,_,16,16,m*16,d*16,16,16)}return en({buffer:c,material:xn},r*16,o*16)},un=xe.items.items1,i9=function(){const h=un.tiles.map(e=>{const r=wn(16,16),[o,c]=Yr(e.id,un.columns,un.tilewidth,un.tileheight);r.drawImage(un.img,o,c,16,16,0,0,16,16);const m=en({buffer:r,material:xn});return m.renderOrder=1,{...e,mesh:m}});return{items:h,getItem:e=>h.find(r=>Object.entries(e).every(([o,c])=>r[o]==c))}}();await xe.load("selectors");const Nr=h=>(h-9)/2*16+8*(h+1),n9=h=>{//! Frame
const t=e9(9,1);t.renderOrder=1;//!Group
const e=new pn;e.add(t);//! Selector
let r=0;const o=wn(32,32);o.drawImage(xe.images.selectors,0,0);const c=en({buffer:o,material:xn});c.position.x=Nr(r),c.renderOrder=2,e.add(c);//!Items
const m=[];for(let A=0;A<h.items.length;A++){const _=i9.getItem(h.items[A]).mesh;_.position.x=Nr(A);const p=_.clone();e.add(p),m.push(p)}//! Click
return{mesh:e,name:"inventory",position:"bottom",click:A=>{const _=m.findIndex(p=>A.some(s=>s.object.uuid==p.uuid));_!=-1&&(r=_,c.position.x=Nr(_))}}},To=function(){//! Camera
const h=na(200);h.position.set(0,0,200);//! Scene
const t=new ia,e=[],r=c=>{e.push(c),t.add(c.mesh);const[m,d]=["width","height"].map(A=>Math.max(...c.mesh.children.map(_=>_.geometry.parameters[A])));switch(c.position){case"bottom":c.mesh.position.y=h.bottom+d/2}};return window.addEventListener("pointerdown",c=>{const m=new Iy;var d=new lt;d.x=c.clientX/window.innerWidth*2-1,d.y=-(c.clientY/window.innerHeight)*2+1,m.setFromCamera(d,h);var A=m.intersectObjects(e.map(_=>_.mesh),!0);A.length>0&&e.forEach(_=>_.click(A))}),{addModule:r,render:()=>Te.render(t,h)}}(),r9=h=>({..._p({...h,player:!1})}),s9=()=>{//! Lights
const h=new Ey(16777215);ti.add(h),h.position.set(0,0,200);//! Objects
let t=Co("map");const e=r9({name:"Jack",position:Dt.exports.Vec2(-150,-50)}),r=_p({name:"Am\xE9lie",position:Dt.exports.Vec2(1300,-300)});//! UI
const o=n9(r);To.addModule(o);const c=new Ty,m=ZC($C);let d=null;//! Contacts
const A=new Map;A.set(["player","teleport"],s=>{r.canTeleport&&(d=s.teleport)}),A.set(["playerSensor","NPC"],s=>{m.interact.active&&console.log("hello!")});const _=new Map;_.set(["teleport","player"],s=>{r.canTeleport=!0});const p=(s,y)=>{ii.on(s,b=>{y.forEach((I,w)=>{const x=["A","B"].map(L=>b["getFixture"+L]().getUserData());x.every(L=>w.includes(L.type))&&I(x.reduce((L,U)=>({...L,[U.type]:U}),{}))})})};return p("begin-contact",A),p("end-contact",_),{update(){if(ii.step(c.getDelta()*1e3*2),t.update(),d&&r.canTeleport){r.setStop(!0);const s=()=>{t.loaded&&t.unLoad();const y=d?.from?.split(".").at(-2);t=Co(y);const b=t.getTeleport(d.name);r.move(b.direction),r.teleport(b.position),r.canTeleport=!1,d=null,r.setStop(!1)};d.object?(d.object.setOnAnimationFinished(s),d.object.start()):s()}Yi.position.x=r.position.x,Yi.position.y=r.position.y,Yi.lookAt(r.position),m.left.active&&r.move("left"),m.right.active&&r.move("right"),m.up.active&&r.move("up"),m.down.active&&r.move("down"),r.update(),e.update()},render(){Ly(),Te.autoClear=!1,To.render(),Te.autoClear=!0},set(){}}},es=Ip(),o9=s9();es.setStates({run:o9});es.setState("run");es.start();