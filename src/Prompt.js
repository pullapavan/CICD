const { createElement, createContext, Component } = require('react');
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  
    return _setPrototypeOf(o, p);
  }
  
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
  
    _setPrototypeOf(subClass, superClass);
  }
  
var Lifecycle = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Lifecycle, _React$Component);
  
    function Lifecycle() {
      return _React$Component.apply(this, arguments) || this;
    }
  
    var _proto = Lifecycle.prototype;
  
    _proto.componentDidMount = function componentDidMount() {
      if (this.props.onMount) this.props.onMount.call(this, this);
    };
  
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
    };
  
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.onUnmount) this.props.onUnmount.call(this, this);
    };
  
    _proto.render = function render() {
      return null;
    };
  
    return Lifecycle;
  }(Component);
function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
var createNamedContext = function createNamedContext(name) {
    var context = createContext();
    context.displayName = name;
    return context;
  };
var invariant = _interopDefault(require('tiny-invariant'));
var context = /*#__PURE__*/createNamedContext("Router");


export function Prompt(_ref) {
    var message = _ref.message,
        _ref$when = _ref.when,
        when = _ref$when === void 0 ? true : _ref$when;
    return /*#__PURE__*/createElement(context.Consumer, null, function (context) {
      !context ?  invariant(false, "You should not use <Prompt> outside a <Router>")  : void 0;
      if (!when || context.staticContext) return null;
      var method = context.history.block;
      return /*#__PURE__*/createElement(Lifecycle, {
        onMount: function onMount(self) {
          self.release = method(message);
        },
        onUpdate: function onUpdate(self, prevProps) {
          if (prevProps.message !== message) {
            self.release();
            self.release = method(message);
          }
        },
        onUnmount: function onUnmount(self) {
          self.release();
        },
        message: message
      });
    });
  }