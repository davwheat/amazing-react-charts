import { CSSProperties } from 'react';
import { EChartOption } from 'echarts';
export interface IDefaultChartProps {
    data: TEntryData[];
    lineMarkValue?: number;
    lineMarkColor?: string;
    lineMakeName?: string;
    yComplement?: string | 'money';
    tooltipComplement?: string;
    tooltip?: TTooltipEntryProps;
    color?: string;
    forecastColor?: string;
    xType?: 'time' | 'category';
    yType?: 'time' | 'value';
    barWidth?: number;
    dateFormat?: string;
    grid?: TGridProps;
    width?: TWidthProps;
    rotateLabel?: number;
    fontLabelSize?: number;
    showBarLabel?: boolean;
    title?: string;
    toolboxTooltip?: TToolboxEntryProps;
    isMoreThanHundredPercent?: boolean;
    labelWordSize?: number;
    marginLeftTitle?: string;
    marginRightToolbox?: string;
    titleFontSize?: number;
    scrollStart?: number;
    onClickBar?(itemProps?: Record<string, unknown>, itemFunctions?: Record<string, unknown>): void;
}
export declare type TToolboxEntryProps = {
    saveAsImage?: string;
    dataView?: string;
    saveAsImageWithTitle?: string;
};
export declare type TCoordinates = {
    x: number;
    y: number;
};
export declare type TTuple = [number, number];
export declare type TWidthProps = number | null | undefined | 'auto';
export declare type TTooltipEntryProps = {
    label: string;
    result?: string;
    topResult?: string;
    bottomResult?: string;
    extraResult?: string;
    lineResult?: string;
    complement?: string;
    labelComplement?: string | number;
    resultComplement?: string | number;
};
export declare type TEntryDataLine = {
    name?: string;
    values: TEntryData[];
};
export declare type TEntryData = {
    label: string;
    result: number;
    itemId?: string;
    style?: TLabelProps;
};
export declare type TEntryWithStyleData = {
    value: number;
    label?: TLabelProps;
};
export declare type TPictorialEntryData = {
    value: number;
    symbol: string;
};
export declare type TEntryDataTuples = [TEntryData[], TEntryData[]] | [TEntryData[], TEntryData[], TEntryData[]] | [TEntryData[], TEntryData[], TEntryData[], TEntryData[]];
export declare type TSeries = {
    stillShowZeroSum?: boolean;
    name?: string;
    xAxisIndex?: number;
    yAxisIndex?: number;
    label?: TLabelProps;
    labelLine?: {
        show?: boolean;
        length?: number;
        length2?: number;
    };
    areaStyle?: React.CSSProperties;
    lineStyle?: React.CSSProperties & {
        type?: TLineStyleType;
    };
    barGap?: string;
    barCategoryGap?: string;
    animation?: boolean;
    itemStyle?: TLabelProps;
    markLine?: TMarkLineProps;
    markPoint?: TMarkPointProps;
    barWidth?: number | string;
    emphasis?: TNormalProps;
    stack?: string;
    silent?: boolean;
    showAllSymbol?: boolean | 'auto';
    symbolSize?: number;
    showSymbol?: boolean;
    hoverAnimation?: boolean;
    barMaxWidth?: number | string;
    type?: 'line' | 'bar' | 'pie' | 'pictorialBar' | 'scatter';
    symbolClip?: boolean;
    symbolBoundingData?: boolean | number;
    animationDuration?: number;
    radius?: string | [string, string];
    center?: [number, string] | [string, string] | string | number;
    smooth?: boolean;
    data?: number[] | string[] | Date[] | TPieChartData[] | TEntryWithStyleData[] | TPictorialEntryData[] | TCostumizedSymbolData[] | TTuple[];
};
export declare type TCostumizedSymbolData = {
    value?: string | number;
    symbol?: string;
    symbolSize?: number;
};
export declare type TDomainValues = {
    min: number;
    max: number;
};
export declare type TPieDataLabel = {
    data: TPieChartData;
};
declare type TFormatterReturn = string[] | string | number;
declare type TFormatterEntry = string | number | TDomainValues | TDataTooltip | TDataTooltip[] | TPieDataLabel;
export declare type TFormatterType = string | ((item: TFormatterEntry | TAudiometryDataTooltip[]) => TFormatterReturn);
export declare type TFormatterSliderType = string | ((yValue: string, xValue: string) => TFormatterReturn);
export declare type TPositionType = 'top' | 'bottom' | 'left' | 'right' | 'insideRight' | 'insideLeft' | 'insideTop' | 'insideBottom' | 'inside' | 'outside' | 'center' | [number, number];
export declare type TChartType = 'time' | 'category' | 'value' | 'log';
export declare type TLineStyleType = 'solid' | 'dashed' | 'dotted';
export declare type TLabelProps = {
    normal?: TNormalProps;
    opacity?: number;
    color?: string;
    formatter?: TFormatterType | undefined | string | number;
    show?: boolean;
    position?: TPositionType;
    fontSize?: number;
    fontWeight?: number;
    distance?: number;
    borderColor?: string;
    barBorderRadius?: number;
    itemStyle?: TLabelProps;
    margin?: string;
    distanceToLabelLine?: number;
    fontFamily?: string;
};
export declare type TDataMarkLine = {
    name?: string;
    xAxis?: string;
    yAxis?: string | number;
    type?: string;
};
export declare type TMarkLineProps = {
    silent?: boolean;
    symbol?: string;
    label?: TLabelProps;
    animation?: boolean;
    data: TDataMarkLine[];
    lineStyle: TLineStyle;
};
export declare type TMarkPointProps = {
    symbolSize?: number;
    hoverAnimation?: boolean;
    data: TDataMarkLine[];
};
export declare type TLineStyle = {
    width?: number;
    type?: string;
    color?: string;
    emphasis?: {
        lineStyle?: TLineStyle;
    };
};
export declare type TNormalProps = {
    formatter?: TFormatterType;
    show?: boolean;
    position?: TPositionType;
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    distance?: number;
    borderColor?: string;
    barBorderRadius?: number;
    opacity?: number;
    itemStyle?: TLabelProps;
};
export declare type TGridProps = {
    show?: boolean;
    right?: string | number;
    left?: string | number;
    top?: string | number;
    bottom?: string | number;
    height?: string | number;
    containLabel?: boolean;
};
export declare type TAxisLabelProps = {
    type?: TChartType;
    formatter?: TFormatterType;
    textStyle?: React.CSSProperties;
    interval?: number | string | 'auto';
    rotate?: number;
    show?: boolean;
    inside?: boolean;
    color?: string | string[];
    margin?: number;
    align?: 'left' | 'right' | 'center';
};
declare type TSplitLineProps = {
    show?: boolean;
    onZeroAxisIndex?: string;
    alignWithLabel?: boolean;
    lineStyle?: {
        color?: string | string[];
        width?: number;
        opacity?: number;
        type?: TLineStyleType;
    };
};
export declare type TPieChartData = {
    name: string;
    value: number;
    marker?: string;
};
export declare type TAxisProps = {
    name?: string;
    nameGap?: number;
    type?: TChartType;
    nameTextStyle?: {
        padding?: number[];
        verticalAlign?: string;
    };
    boundaryGap?: boolean;
    data?: number[] | string[] | Date[] | TPieChartData[] | TEntryWithStyleData[] | {
        name: string;
    }[];
    gridIndex?: number;
    showGrid?: boolean;
    splitLine?: TSplitLineProps;
    axisLabel?: TAxisLabelProps;
    axisTick?: TAxisTickProps;
    min?: number;
    max?: number | string | TFormatterType;
    position?: TPositionType;
    axisLine?: TSplitLineProps;
    interval?: number | string[];
    inverse?: boolean;
};
export declare type TAxisLineProps = {
    show?: boolean;
};
export declare type TAxisTickProps = {
    show?: boolean;
    alignWithLabel?: boolean;
    interval?: number;
};
export declare type TOptionsProps = EChartOption;
export declare type TZoomProps = {
    bottom?: number;
    show?: boolean;
    zoomLock?: boolean;
    start?: number;
    labelFormatter?: TFormatterSliderType;
    type: 'inside' | 'slider';
    end?: number;
    zoomOnMouseWheel?: 'ctrl' | 'shift' | boolean;
    startValue?: number;
    endValue?: number | Date | string;
};
export declare type TLegendProps = {
    x?: 'center' | 'bottom';
    y?: 'center' | 'bottom';
    icon?: 'line' | 'rect' | 'shape';
    top?: number;
    data: string[] | {
        name: string;
        icon?: string;
    }[];
    itemGap?: number;
    selectedMode?: boolean;
    color?: string[];
    type?: 'scroll' | 'plain';
    orient?: 'vertical' | 'horizontal';
    left?: number | string;
};
export declare type TTooltipProps = {
    formatter: TFormatterType;
    trigger?: 'axis' | 'item';
    textStyle?: React.CSSProperties;
    axisPointer?: TAxisPointerProps;
};
export declare type TAxisPointerProps = {
    type?: 'cross' | 'none' | 'shadow';
    label?: CSSProperties;
    shadowStyle?: CSSProperties;
};
export declare type TDataTooltip = {
    name?: string;
    marker?: string;
    seriesName?: string;
    data?: number | string;
    seriesType?: string;
    value?: string | number;
    axisValueLabel?: string;
    axisValue?: string;
    dataIndex?: number;
    seriesIndex?: number;
};
export declare type TParamsTooltip = {
    name: string;
    value: number;
    data?: number | string;
};
export declare type TAudiometryDataTooltip = {
    data?: {
        value: number | string;
        boneValue: number | string;
    };
    axisValue?: string;
};
export declare type TTitleProps = {
    id?: string;
    text?: string;
    show?: boolean;
    textAlign?: 'left' | 'right' | 'auto';
    textStyle?: CSSProperties;
    left?: number | string;
    top?: number | string;
};
export declare type TDataView = {
    buttonColor?: string;
    lang?: string[];
    title?: string;
    icon?: string;
    iconStyle?: CSSProperties;
};
export declare type TDataZoomEventProps = {
    start: number;
    end: number;
};
export declare type TDataZoomChartProps = {
    setOption(option: TOptionsProps): void;
};
export declare type TForecastAreaChartData = {
    current: TEntryData[];
    forecast: TEntryData[];
};
export declare type TAudiometryDataEntry = {
    result?: number;
    symbol?: string;
    boneResult?: number;
    boneSymbol?: string;
};
export {};
