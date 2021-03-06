const { Plugin } = require('powercord/entities');

module.exports = class OwO extends Plugin {
  olog(text) {
    this.log(owoify(text));
  }

  startPlugin() {
    this.registerCommand('owo', [], 'owoify text', '{c} [text to owoify]', (args) => ({send: true, result: owoify(args.join(' '), "owo")}));
    this.registerCommand('uwu', [], 'uwuify text', '{c} [text to uwuify]', (args) => ({send: true, result: owoify(args.join(' '), "uwu")}));
    this.registerCommand('uvu', [], 'uvuify text', '{c} [text to uvuify]', (args) => ({send: true, result: owoify(args.join(' '), "uvu")}));
    this.olog("owoify has been successfully loaded!");
  }
};

// Credits to owoify-js for this code.
function searchValueContainsReplacedWords(searchValue, replaceValue, replacedWords) {
  return Array.from(replacedWords).some(function (word) {
    return word.replace(searchValue, replaceValue) !== word;
  });
}

var Word = function () {
  function Word(word) {
    this.word = word.trim();
    this.replacedWords = new Set();
  }

  var _proto = Word.prototype;

  _proto.replace = function replace(searchValue, replaceValue, replaceReplacedWords) {
    if (replaceReplacedWords === void 0) {
      replaceReplacedWords = false;
    }

    if (!replaceReplacedWords && searchValueContainsReplacedWords(searchValue, replaceValue, this.replacedWords)) return this;
    var replacingWord = this.word.replace(searchValue, replaceValue).trim();
    var matchArray = this.word.match(searchValue);
    var replacedWords = matchArray !== null ? Array.from(matchArray).map(function (x) {
      return x.replace(x, replaceValue);
    }) : [];

    if (replacingWord !== this.word) {
      for (var _iterator = replacedWords, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var word = _ref;
        this.replacedWords.add(word);
      }

      this.word = replacingWord;
    }

    return this;
  };

  _proto.toString = function toString() {
    return this.word;
  };

  return Word;
}();

function interleaveArrays(a, b) {
  var arr = [];
  var observed = a;
  var other = b;
  var temp = null;

  while (observed.length > 0) {
    arr.push(observed.shift());
    temp = observed;
    observed = other;
    other = temp;
  }

  if (other.length > 0) arr.push.apply(arr, other);
  return arr;
}

var faces = ['(・\\`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^', '(\\* ^ ω ^)', '(⌒ω⌒)', 'ヽ(\\*・ω・)ﾉ', '(o´∀\\`o)', '(o･ω･o)', '＼(＾▽＾)／'];
var Map_O_To_OwO = function Map_O_To_OwO(input) {
  return input.replace(/o/g, function () {
    return Math.round(Math.random()) ? 'owo' : 'o';
  });
};
var Map_Ew_To_UwU = function Map_Ew_To_UwU(input) {
  return input.replace(/ew/g, 'uwu');
};
var Map_Hey_To_Hay = function Map_Hey_To_Hay(input) {
  return input.replace(/([Hh])ey/g, '$1ay');
};
var Map_Dead_To_Ded = function Map_Dead_To_Ded(input) {
  return input.replace(/Dead/g, 'Ded').replace(/dead/g, 'ded');
};
var Map_N_Vowel_T_To_Nd = function Map_N_Vowel_T_To_Nd(input) {
  return input.replace(/n[aeiou]*t/g, 'nd');
};
var Map_Brackets_To_StarTrails = function Map_Brackets_To_StarTrails(input) {
  return input.replace(/[({<]/g, '｡･:\*:･ﾟ★,｡･:\*:･ﾟ☆').replace(/[)}>]/g, '☆ﾟ･:\*:･｡,★ﾟ･:\*:･｡');
};
var Map_PeriodCommaExclamationSemicolon_To_Kaomojis = function Map_PeriodCommaExclamationSemicolon_To_Kaomojis(input) {
  return input.replace(/[.,](?![0-9])/g, function () {
    return ' ' + faces[Math.floor(Math.random() * faces.length)];
  }).replace(/[!;]+/g, function () {
    return ' ' + faces[Math.floor(Math.random() * faces.length)];
  });
};
var Map_That_To_Dat = function Map_That_To_Dat(input) {
  return input.replace(/that/g, 'dat').replace(/That/g, 'Dat');
};
var Map_Th_To_F = function Map_Th_To_F(input) {
  return input.replace(/[Tt]h(?![Ee])/g, 'f').replace(/TH(?!E)/g, 'F');
};
var Map_Le_To_Wal = function Map_Le_To_Wal(input) {
  return input.replace(/le$/g, 'wal');
};
var Map_Ve_To_We = function Map_Ve_To_We(input) {
  return input.replace(/ve/g, 'we').replace(/Ve/g, 'We');
};
var Map_Ry_To_Wwy = function Map_Ry_To_Wwy(input) {
  return input.replace(/ry/g, 'wwy');
};
var Map_ROrL_To_W = function Map_ROrL_To_W(input) {
  return input.replace(/(?:r|l)/g, 'w').replace(/(?:R|L)/g, 'W');
};
var Map_Ll_To_Ww = function Map_Ll_To_Ww(input) {
  return input.replace(/ll/g, 'ww');
};
var Map_VowelOrRExceptO_L_To_Wl = function Map_VowelOrRExceptO_L_To_Wl(input) {
  return input.replace(/[aeiur]l$/g, 'wl').replace(/[AEIUR]([lL])$/g, 'W$1');
};
var Map_Old_To_Owld = function Map_Old_To_Owld(input) {
  return input.replace(/([Oo])ld/g, '$1wld').replace(/OLD/g, 'OWLD');
};
var Map_Ol_To_Owl = function Map_Ol_To_Owl(input) {
  return input.replace(/([Oo])l/g, '$1wl').replace(/OL/g, 'OWL');
};
var Map_LOrR_O_To_Wo = function Map_LOrR_O_To_Wo(input) {
  return input.replace(/[lr]o/g, 'wo').replace(/[LR]([oO])/g, 'W$1');
};
var Map_SpecificConsonants_O_To_Letter_And_Wo = function Map_SpecificConsonants_O_To_Letter_And_Wo(input) {
  return input.replace(/([bcdfghjkmnpqstxyz])o/g, '$1wo').replace(/([BCDFGHJKMNPQSTXYZ])([oO])/g, function (_, m1, m2) {
    return m1 + (m2.toUpperCase() === m2 ? 'W' : 'w') + m2;
  });
};
var Map_VOrW_Le_To_Wal = function Map_VOrW_Le_To_Wal(input) {
  return input.replace(/[vw]le/g, 'wal');
};
var Map_Fi_To_Fwi = function Map_Fi_To_Fwi(input) {
  return input.replace(/([Ff])i/g, '$1wi').replace(/FI/g, 'FWI');
};
var Map_Ver_To_Wer = function Map_Ver_To_Wer(input) {
  return input.replace(/([Vv])er/g, 'wer');
};
var Map_Poi_To_Pwoi = function Map_Poi_To_Pwoi(input) {
  return input.replace(/([Pp])oi/g, '$1woi');
};
var Map_SpecificConsonants_Le_To_Letter_And_Wal = function Map_SpecificConsonants_Le_To_Letter_And_Wal(input) {
  return input.replace(/([DdFfGgHhJjPpQqRrSsTtXxYyZz])le/g, '$1wal');
};
var Map_Fuc_To_Fwuc = function Map_Fuc_To_Fwuc(input) {
  return input.replace(/([Ff])uc/g, '$1wuc');
};
var Map_Mom_To_Mwom = function Map_Mom_To_Mwom(input) {
  return input.replace(/([Mm])om/g, '$1wom');
};
var Map_Me_To_Mwe = function Map_Me_To_Mwe(input) {
  return input.replace(/([Mm])e/g, '$1we');
};
var Map_NVowel_To_Ny = function Map_NVowel_To_Ny(input) {
  return input.replace(/n([aeiou])/g, 'ny$1').replace(/N([aeiou])/g, 'Ny$1').replace(/N([AEIOU])/g, 'NY$1');
};
var Map_Ove_To_Uv = function Map_Ove_To_Uv(input) {
  return input.replace(/ove/g, 'uv').replace(/OVE/g, 'UV');
};
var Map_Haha_To_HehexD = function Map_Haha_To_HehexD(input) {
  return input.replace(/\b(ha|hah|heh|hehe)+\b/g, 'hehe xD');
};
var Map_The_To_Teh = function Map_The_To_Teh(input) {
  return input.replace(/\b([Tt])he\b/g, '$1eh');
};
var Map_R_To_W = function Map_R_To_W(input) {
  return input.replace(/[r]/g, 'w').replace(/[R]/g, 'W');
};
var Map_Dick_To_Dicc = function Map_Dick_To_Dicc(input) {
  return input.replace(/([D|d])ick/g, '$1icc');
};

var specificWordMappingArray = [Map_Fuc_To_Fwuc, Map_Mom_To_Mwom, Map_Me_To_Mwe, Map_NVowel_To_Ny, Map_Ove_To_Uv, Map_Haha_To_HehexD, Map_The_To_Teh];
var uvuMappingArray = [Map_O_To_OwO, Map_Ew_To_UwU, Map_Hey_To_Hay, Map_Dead_To_Ded, Map_N_Vowel_T_To_Nd];
var uwuMappingArray = [Map_Brackets_To_StarTrails, Map_PeriodCommaExclamationSemicolon_To_Kaomojis, Map_That_To_Dat, Map_Th_To_F, Map_Le_To_Wal, Map_Ve_To_We, Map_Ry_To_Wwy, Map_ROrL_To_W];
var owoMappingArray = [Map_Dick_To_Dicc, Map_R_To_W, Map_Ll_To_Ww, Map_VowelOrRExceptO_L_To_Wl, Map_Old_To_Owld, Map_Ol_To_Owl, Map_LOrR_O_To_Wo, Map_SpecificConsonants_O_To_Letter_And_Wo, Map_VOrW_Le_To_Wal, Map_Fi_To_Fwi, Map_Ver_To_Wer, Map_Poi_To_Pwoi, Map_SpecificConsonants_Le_To_Letter_And_Wal];

function owoify(v, level) {
  if (level === void 0) {
    level = 'owo';
  }

  var whitespace = v.split(/[^\s]+/g);
  var words = v.split(/\s+/g).map(function (x) {
    return new Word(x);
  });
  words = words.map(function (x) {
    x = specificWordMappingArray.reduce(function (word, f) {
      return f(word);
    }, x);

    switch (level) {
      case 'uvu':
        x = uvuMappingArray.reduce(function (word, f) {
          return f(word);
        }, x);

      case 'uwu':
        x = uwuMappingArray.reduce(function (word, f) {
          return f(word);
        }, x);

      case 'owo':
        x = owoMappingArray.reduce(function (word, f) {
          return f(word);
        }, x);

      default:
        break;
    }

    return x;
  });
  return interleaveArrays(whitespace, words).join('');
}

powercord.owoify = owoify;
