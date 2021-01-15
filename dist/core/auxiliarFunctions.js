"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thousandSeparator = exports.getEndForecast = exports.getInitialValues = exports.getDataView = exports.getSaveAsImageWithTitle = exports.getSaveAsImage = exports.fixedDomain = exports.getDomain = exports.truncateSpecialLabel = exports.truncateLabel = exports.formatTooltipWithHours = exports.formatTooltip = exports.formatTime = exports.toDate = exports.mountMessage = exports.monuntTimeMessage = exports.moneyPercent = exports.getPercentage = exports.takeComplement = exports.formatValueAxis = exports.timeConvert = exports.takeDonutComplement = exports.takeLabelComplement = void 0;

var _format = _interopRequireDefault(require("date-fns/format"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _takeLast = _interopRequireDefault(require("ramda/es/takeLast"));

var _ptBR = _interopRequireDefault(require("date-fns/locale/pt-BR"));

var DOWNLOAD_ICON = 'path://M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 ' + '.67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z';
var iconStyle = {
  color: '#152849',
  borderColor: '#152849',
  borderWidth: 0.1
};

var takeLabelComplement = function takeLabelComplement(item, complement) {
  var getComplement = complement ? formatValueAxis(item, complement) : item;
  return complement === getComplement;
};

exports.takeLabelComplement = takeLabelComplement;

var takeDonutComplement = function takeDonutComplement(item, complement) {
  return item === 0 ? '' : item + (complement || '');
};

exports.takeDonutComplement = takeDonutComplement;

var timeConvert = function timeConvert(value) {
  var seconds = Math.round(value % 1 * 3600);
  var minutes = Math.trunc(seconds / 60);
  var formatedMinutes = (0, _takeLast.default)(2, '0' + minutes);
  return minutes > 0 ? Math.floor(value) + ':' + formatedMinutes : Math.floor(value) + ':00';
};

exports.timeConvert = timeConvert;

var formatValueAxis = function formatValueAxis(value, complement) {
  var getTime = complement === 'time' ? timeConvert(value) : value + complement;
  return complement === '%' || complement === 'percent' ? (value.toFixed(2) + '%').replace('.', ',') : getTime;
};

exports.formatValueAxis = formatValueAxis;

var takeComplement = function takeComplement(data, complement) {
  return ': ' + data + complement + '<br>';
};

exports.takeComplement = takeComplement;

var getPercentage = function getPercentage(value, valueTotal) {
  return value !== 0 ? (value * (100 / valueTotal)).toFixed(2) : '0';
};

exports.getPercentage = getPercentage;

var moneyPercent = function moneyPercent(value, valueTotal, sumDataValues) {
  var percent = getPercentage(value, valueTotal);
  return percent;
};

exports.moneyPercent = moneyPercent;

var monuntTimeMessage = function monuntTimeMessage(item, stackedValues) {
  var time = timeConvert(Number(item.value));
  var percent = item.value !== 0 ? getPercentage(Number(item.value), stackedValues) : '0';
  return item.seriesName + ': ' + time + ' (' + percent + '%) <br>';
};

exports.monuntTimeMessage = monuntTimeMessage;

var mountMessage = function mountMessage(value, complement, axisType, stackedValues, sumDataValues) {
  var seriesLabel = value.marker + value.seriesName;
  var moneyValue = moneyPercent(Number(value.data), stackedValues, sumDataValues);
  var isPercentage = axisType === 'percent' || complement === '%' ? seriesLabel + ': ' + (formatValueAxis(Number(value.data), '%') + '<br>') : seriesLabel + takeComplement(value.data, complement);
  return complement === 'money' && value.seriesType !== 'line' ? seriesLabel + ': ' + moneyValue : isPercentage;
};

exports.mountMessage = mountMessage;

var toDate = function toDate(text, format) {
  return (0, _parse.default)(text, format ? format : 'yyyy-MM-dd', new Date());
};

exports.toDate = toDate;

var formatTime = function formatTime(text, dateFormat) {
  return (0, _format.default)(new Date(text), dateFormat, {
    locale: _ptBR.default
  });
};

exports.formatTime = formatTime;

var formatTooltip = function formatTooltip(text, dateFormat) {
  return (0, _format.default)(new Date(text), dateFormat ? 'MMM/yy' : 'dd/MM/yyyy', {
    locale: _ptBR.default
  });
};

exports.formatTooltip = formatTooltip;

var formatTooltipWithHours = function formatTooltipWithHours(text) {
  return (0, _format.default)(new Date(text), 'dd/MM/yyyy HH:mm', {
    locale: _ptBR.default
  });
};

exports.formatTooltipWithHours = formatTooltipWithHours;

var truncateLabel = function truncateLabel(text, labelWordSize) {
  var numberOfLetters = labelWordSize ? labelWordSize : 12;
  var lettersToShow = labelWordSize ? 3 : 4;
  return text.length > numberOfLetters ? text.slice(0, numberOfLetters - lettersToShow) + '...' : text;
};

exports.truncateLabel = truncateLabel;

var truncateSpecialLabel = function truncateSpecialLabel(text, size) {
  return text.length > size ? text.slice(0, size - 3) + '...' : text;
};

exports.truncateSpecialLabel = truncateSpecialLabel;

var getDomain = function getDomain(item) {
  // TODO: improve this "pattern matching" xgh
  switch (true) {
    case item.max >= 2500:
      return item.max + item.max * 20 / 100;

    case item.max >= 2000:
      return item.max + (400 - item.max % 400);

    case item.max >= 1500:
      return item.max + (300 - item.max % 300);

    case item.max >= 1000:
      return item.max + (200 - item.max % 200);

    case item.max >= 400:
      return item.max + (100 - item.max % 100);

    case item.max >= 95:
      return item.max + (60 - item.max % 60);

    case item.max >= 60:
      return item.max + (50 - item.max % 50);

    case item.max >= 50:
      return item.max + (40 - item.max % 40);

    case item.max >= 40:
      return item.max + (30 - item.max % 30);

    case item.max >= 30:
      return item.max + (20 - item.max % 20);

    case item.max >= 20:
      return item.max + (10 - item.max % 10);

    case item.max >= 2:
      return item.max + (5 - item.max % 5);

    default:
      return item.max + (3 - item.max % 3);
  }
};

exports.getDomain = getDomain;

var fixedDomain = function fixedDomain(item) {
  return item.max >= 90 ? 100 : getDomain(item);
};

exports.fixedDomain = fixedDomain;

var getSaveAsImage = function getSaveAsImage(title) {
  return {
    title: title,
    type: 'jpeg',
    show: true,
    icon: DOWNLOAD_ICON,
    iconStyle: iconStyle,
    excludeComponents: ['toolbox', 'dataZoom']
  };
};

exports.getSaveAsImage = getSaveAsImage;

var getSaveAsImageWithTitle = function getSaveAsImageWithTitle(title, setTitle) {
  return {
    title: title,
    show: true,
    icon: DOWNLOAD_ICON,
    iconStyle: iconStyle,
    onclick: function onclick(item, chartInfo) {
      var title = item.option.title.length > 0 ? item.option.title[0].text : 'image';
      setTitle(true);
      var url = chartInfo.getConnectedDataURL({
        type: 'jpg',
        backgroundColor: '#fff',
        connectedBackgroundColor: '#fff',
        excludeComponents: ['toolbox', 'dataZoom']
      });
      var a = document.createElement('a');
      a.download = title + '.jpeg';
      a.target = '_blank';
      a.href = url;
      var event = new MouseEvent('click', {
        view: document.defaultView,
        bubbles: true,
        cancelable: false
      });
      a.dispatchEvent(event);
      setTitle(false);
    }
  };
};

exports.getSaveAsImageWithTitle = getSaveAsImageWithTitle;

var getDataView = function getDataView(title) {
  return {
    title: title,
    show: true,
    icon: 'path://M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 ' + '3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z',
    iconStyle: {
      color: '#152849',
      borderColor: '#152849',
      borderWidth: 0.1
    },
    buttonColor: '#152849',
    lang: [title, 'Voltar', 'Atualizar']
  };
};

exports.getDataView = getDataView;

var getInitialValues = function getInitialValues(arrayLength, dateFormat, scrollStart) {
  if (scrollStart) {
    return arrayLength > scrollStart ? 100 - scrollStart * 100 / arrayLength : 0;
  }

  var monthly = arrayLength > 30 ? 100 - 3000 / arrayLength : 0;
  var yearly = arrayLength > 12 ? 100 - 1200 / arrayLength : 0;
  return dateFormat !== 'yyyy-MM' ? monthly : yearly;
};

exports.getInitialValues = getInitialValues;

var getEndForecast = function getEndForecast(arrayLength, lineMarkValue) {
  return lineMarkValue * 250 / arrayLength;
}; // This function take a number and put on this the thousand separator ".", e.g.:
// 1000 => 1.000
// 1000000 => 1.000.000


exports.getEndForecast = getEndForecast;

var thousandSeparator = function thousandSeparator(values) {
  return values.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

exports.thousandSeparator = thousandSeparator;