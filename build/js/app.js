(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HungryBear = exports.HungryBear = function () {
  function HungryBear(name) {
    _classCallCheck(this, HungryBear);

    this.name = name;
    this.foodLevel = 10;
    this.life = true;
  }

  _createClass(HungryBear, [{
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      setInterval(function () {
        _this.foodLevel--;
      }, 1000);
      console.log(this.foodLevel);
    }
  }, {
    key: "didYouGetEaten",
    value: function didYouGetEaten() {
      this.life = false;

      if (this.foodLevel > 0) {
        this.life = true;
        console.log("life is true");
      }
      console.log(this.life);
    }
  }, {
    key: "feed",
    value: function feed() {
      this.foodLevel = 10;
    }
  }]);

  return HungryBear;
}();

},{}]},{},[1]);
