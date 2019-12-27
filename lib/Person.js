"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person =
/*#__PURE__*/
function () {
  function Person(name) {
    _classCallCheck(this, Person);

    console.log(name);
    this.names = name;
  }

  _createClass(Person, [{
    key: "greet",
    value: function greet() {
      this.names.forEach(function (name) {
        return console.log(name);
      });
    }
  }]);

  return Person;
}();

var names = function names(nm) {
  _classCallCheck(this, names);

  console.log(nm);
  this.name = nm;
};

new Person([new names('sam'), new names('adam'), new names('jeff')]).greet();