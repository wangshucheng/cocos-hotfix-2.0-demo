window.__require = function e(t, n, i) {
function r(c, l) {
if (!n[c]) {
if (!t[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
}
var a = n[c] = {
exports: {}
};
t[c][0].call(a.exports, function(e) {
return r(t[c][1][e] || e);
}, a, a.exports, e, t, n, i);
}
return n[c].exports;
}
for (var o = "function" == typeof __require && __require, c = 0; c < i.length; c++) r(i[c]);
return r;
}({
ChildGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ffd97HCsMREqZMN2kQneFcg", "ChildGame");
cc.Class({
extends: cc.Component,
properties: {
retButton: {
default: null,
type: cc.Node
}
},
onLoad: function() {
var e = this;
cc.find("Canvas/label").getComponent(cc.Label).string = "子游戏  Hello World!!";
this.retButton.on("click", function() {
e.datingclicked();
}, this);
},
datingclicked: function() {
console.log("========点击了返回大厅===================");
cc.INGAME = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "ALLGame/subgame";
window.require(cc.INGAME + "/src/dating.js");
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "ChildGame" ]);