const _0x436d = [
  "dark",
  "theme",
  "execCommand",
  "674604pcCyxV",
  "#answerbox",
  "537902DEahej",
  "copyText",
  "theme2",
  "copy",
  "522330NIoMzA",
  "answerbox",
  "slice",
  "classList",
  "86WVjwqh",
  "getElementById",
  "body",
  "onclick",
  "5773KdoYBr",
  "value",
  ".inner",
  "393812Oryyxq",
  "Error!\x20Please\x20review\x20your\x20input",
  "2iyHtYs",
  "getItem",
  "toggle",
  "297612fFwUiF",
  "addEventListener",
  "querySelector",
  "1143913YzQits",
];
const _0x1e6959 = _0x3617;
(function (_0x18e2bc, _0x21c35f) {
  const _0x103060 = _0x3617;
  while (!![]) {
    try {
      const _0x3e4842 =
        parseInt(_0x103060(0x125)) +
        -parseInt(_0x103060(0x11a)) +
        -parseInt(_0x103060(0x116)) * -parseInt(_0x103060(0x127)) +
        parseInt(_0x103060(0x12d)) +
        -parseInt(_0x103060(0x12a)) +
        -parseInt(_0x103060(0x114)) +
        parseInt(_0x103060(0x11e)) * -parseInt(_0x103060(0x122));
      if (_0x3e4842 === _0x21c35f) break;
      else _0x18e2bc["push"](_0x18e2bc["shift"]());
    } catch (_0x5131bd) {
      _0x18e2bc["push"](_0x18e2bc["shift"]());
    }
  }
})(_0x436d, 0x97fa9);
let input = "",
  output = document["querySelector"](_0x1e6959(0x115));
window["onload"] = () => {
  const _0x44bd9a = _0x1e6959;
  output[_0x44bd9a(0x123)] = "";
};
function _0x3617(_0x325543, _0x30869d) {
  _0x325543 = _0x325543 - 0x113;
  let _0x436dd6 = _0x436d[_0x325543];
  return _0x436dd6;
}
localStorage[_0x1e6959(0x128)](_0x1e6959(0x12f)) === _0x1e6959(0x12e) &&
  document[_0x1e6959(0x120)][_0x1e6959(0x11d)]["toggle"](
    localStorage["getItem"](_0x1e6959(0x12f))
  );
const color = () => {},
  inputreciever = (_0x21d71c) => {
    const _0x4e051a = _0x1e6959;
    (input = output["value"]),
      (input += _0x21d71c),
      (output[_0x4e051a(0x123)] = input);
  },
  findans = () => {
    const _0xa38d81 = _0x1e6959;
    input = output[_0xa38d81(0x123)];
    try {
      input = eval(input);
    } catch (_0x41f901) {
      _0x41f901 instanceof SyntaxError && alert(_0xa38d81(0x126));
    }
    (output[_0xa38d81(0x123)] = input), (input = "" + input);
  },
  reset = () => {
    const _0x5e0457 = _0x1e6959;
    (input = ""), (output[_0x5e0457(0x123)] = input);
  },
  deleteLast = () => {
    const _0x537676 = _0x1e6959;
    (input = output[_0x537676(0x123)]),
      (input = input[_0x537676(0x11c)](0x0, -0x1)),
      (output["value"] = input);
  };
var text = document[_0x1e6959(0x11f)](_0x1e6959(0x11b)),
  btn = document[_0x1e6959(0x11f)](_0x1e6959(0x117));
btn[_0x1e6959(0x121)] = function () {
  const _0x584793 = _0x1e6959;
  (text[_0x584793(0x123)] = input),
    text["select"](),
    document[_0x584793(0x113)](_0x584793(0x119));
};
const themeSwitch = document[_0x1e6959(0x12c)](_0x1e6959(0x124)),
  themeSwitcher = document[_0x1e6959(0x11f)](_0x1e6959(0x12f));
themeSwitcher[_0x1e6959(0x12b)]("click", function () {
  const _0x1aba55 = _0x1e6959;
  document[_0x1aba55(0x120)][_0x1aba55(0x11d)][_0x1aba55(0x129)](
    _0x1aba55(0x12e)
  ),
    themeSwitch[_0x1aba55(0x11d)][_0x1aba55(0x129)](_0x1aba55(0x118)),
    localStorage["setItem"](
      _0x1aba55(0x12f),
      document[_0x1aba55(0x120)][_0x1aba55(0x11d)]
    );
});
