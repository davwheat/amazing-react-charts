"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _core = _interopRequireDefault(require("echarts-for-react/lib/core"));

var _auxiliarFunctions = require("./auxiliarFunctions");

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/line");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/legend");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var WIDTH_STYLE = {
  width: '99.9%'
};

var takeYdata = function takeYdata(entryData) {
  return entryData.map(function (item) {
    return item.result;
  });
};

var LineChart = function LineChart(props) {
  var data = props.data,
      width = props.width,
      gridProps = props.grid,
      colors = props.colors,
      xType = props.xType,
      dateFormat = props.dateFormat,
      rotateLabel = props.rotateLabel,
      fontLabelSize = props.fontLabelSize,
      yType = props.yType,
      yComplement = props.yComplement,
      titleProps = props.title,
      toolboxTooltip = props.toolboxTooltip,
      showLabel = props.showLabel,
      smooth = props.smooth,
      disableMarks = props.disableMarks,
      noTooltip = props.noTooltip,
      scrollStart = props.scrollStart;
  var yData = data[0].values.map(function (item) {
    return item.result;
  });
  var xData = data[0].values.map(function (item) {
    return item.label;
  });
  var names = data.map(function (item) {
    return item.name;
  });
  var series = data.map(function (item) {
    return {
      name: item.name,
      type: 'line',
      data: takeYdata(item.values),
      showSymbol: !disableMarks,
      lineStyle: {
        width: 1.5,
        type: item.name === 'ref' ? 'dashed' : undefined
      },
      smooth: smooth,
      label: {
        show: showLabel,
        position: 'top',
        fontSize: yType === 'time' ? 10 : 11.5,
        color: 'black',
        distance: 1.1
      }
    };
  });
  var arrayInitialSize = scrollStart || (dateFormat === 'yyyy-MM' ? 12 : 30);
  var tooltipLabelFormat = dateFormat === 'yyyy-MM' ? 'MMM/yy' : 'dd/MM/yyyy';
  var scrollable = xData.length > arrayInitialSize ? [{
    type: 'inside',
    start: (0, _auxiliarFunctions.getInitialValues)(xData.length, dateFormat, scrollStart),
    end: 100,
    zoomLock: true,
    zoomOnMouseWheel: 'shift'
  }, {
    bottom: 0,
    show: true,
    type: 'slider',
    start: (0, _auxiliarFunctions.getInitialValues)(xData.length, dateFormat, scrollStart),
    end: 100,
    labelFormatter: function labelFormatter(_, item2) {
      return (0, _auxiliarFunctions.formatTime)(item2, tooltipLabelFormat);
    }
  }] : [];

  var formatTooltip = function formatTooltip(lines) {
    var takeComplement = function takeComplement(value) {
      return yType === 'time' ? (0, _auxiliarFunctions.timeConvert)(Number(value)) + 'h' : (0, _auxiliarFunctions.takeLabelComplement)(Number(value), yComplement);
    };

    var linesTooltips = lines.map(function (line) {
      return line.seriesName + ': ' + takeComplement(Number(line.value)) + '<br>';
    });
    var tooltipTitle = xType === 'time' ? (0, _auxiliarFunctions.formatTime)(dateFormat === 'yyyy-MM' ? lines[0].name + '-02' : lines[0].name, dateFormat === 'yyyy-MM' ? 'MMM/yy' : 'dd MMM') : lines[0].name;
    return "".concat(tooltipTitle, " <br> ").concat(linesTooltips.join(' '));
  };

  var toolbox = toolboxTooltip && {
    showTitle: false,
    right: '9.52%',
    feature: {
      saveAsImage: toolboxTooltip.saveAsImage && (0, _auxiliarFunctions.getSaveAsImage)(toolboxTooltip.saveAsImage),
      dataView: toolboxTooltip.dataView && (0, _auxiliarFunctions.getDataView)(toolboxTooltip.dataView)
    },
    tooltip: {
      show: true,
      backgroundColor: 'grey',
      textStyle: {
        fontSize: 12
      }
    }
  };
  var options = {
    color: colors,
    series: series,
    xAxis: {
      type: 'category',
      data: xData,
      boundaryGap: false,
      showGrid: true,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          opacity: 0.8
        }
      },
      axisLabel: {
        formatter: function formatter(item) {
          return xType === 'time' ? (0, _auxiliarFunctions.formatTime)(dateFormat === 'yyyy-MM' ? item + '-02' : item, dateFormat === 'yyyy-MM' ? 'MMM/yy' : 'dd MMM') : item;
        },
        rotate: rotateLabel || 0,
        textStyle: {
          fontSize: fontLabelSize || 11.5
        }
      }
    },
    yAxis: {
      type: 'value',
      data: yData,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          opacity: 0.8
        }
      },
      axisLabel: {
        margin: yType === 'time' ? 16 : 14,
        formatter: function formatter(item) {
          return yType === 'time' ? (0, _auxiliarFunctions.timeConvert)(item) + 'h' : item + (yComplement || '');
        },
        textStyle: {
          fontSize: fontLabelSize || 11.5
        }
      }
    },
    grid: _objectSpread(_objectSpread({}, gridProps || {
      bottom: 60
    }), {}, {
      show: true
    }),
    legend: {
      data: names,
      icon: 'line'
    },
    tooltip: !noTooltip && {
      formatter: formatTooltip,
      trigger: 'axis',
      textStyle: {
        fontSize: 11.5
      }
    },
    title: {
      left: '6.2%',
      show: titleProps !== undefined,
      text: titleProps,
      textAlign: 'left',
      textStyle: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
        fontSize: 16,
        fontWeight: 400
      }
    },
    dataZoom: scrollable,
    toolbox: toolbox
  };
  var widthOpts = {
    width: width || 'auto'
  };
  return /*#__PURE__*/React.createElement(_core.default, {
    echarts: _echarts.default,
    lazyUpdate: true,
    notMerge: true,
    style: WIDTH_STYLE,
    opts: widthOpts,
    option: options
  });
};

var _default = LineChart;
exports.default = _default;