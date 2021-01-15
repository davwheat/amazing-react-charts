import { TDataTooltip, TDomainValues } from './types';
declare type TConnectedDataURL = {
    type?: string;
    backgroundColor?: string;
    connectedBackgroundColor?: string;
    excludeComponents?: string[];
};
export declare const takeLabelComplement: (item: number, complement: string) => boolean;
export declare const takeDonutComplement: (item: number, complement?: string) => string;
export declare const timeConvert: (value: number) => string;
export declare const formatValueAxis: (value: number, complement: string) => string;
export declare const takeComplement: (data: string | number, complement: string) => string;
export declare const getPercentage: (value: number, valueTotal: number) => string;
export declare const moneyPercent: (value: number, valueTotal: number, sumDataValues?: boolean) => string;
export declare const monuntTimeMessage: (item: TDataTooltip, stackedValues: number) => string;
export declare const mountMessage: (value: TDataTooltip, complement: string, axisType: string, stackedValues: number, sumDataValues: boolean) => string;
export declare const toDate: (text: string, format?: string) => Date;
export declare const formatTime: (text: string, dateFormat: string) => string;
export declare const formatTooltip: (text: string, dateFormat?: string) => string;
export declare const formatTooltipWithHours: (text: string) => string;
export declare const truncateLabel: (text: string, labelWordSize?: number) => string;
export declare const truncateSpecialLabel: (text: string, size: number) => string;
export declare const getDomain: (item: TDomainValues) => number;
export declare const fixedDomain: (item: TDomainValues) => number;
export declare const getSaveAsImage: (title: string) => {
    title: string;
    type: string;
    show: boolean;
    icon: string;
    iconStyle: {
        color: string;
        borderColor: string;
        borderWidth: number;
    };
    excludeComponents: string[];
};
export declare const getSaveAsImageWithTitle: (title: string, setTitle: (show: boolean) => void) => {
    title: string;
    show: boolean;
    icon: string;
    iconStyle: {
        color: string;
        borderColor: string;
        borderWidth: number;
    };
    onclick: (item: {
        option: {
            title: {
                text: string;
            }[];
        };
    }, chartInfo: {
        getConnectedDataURL: (opts: TConnectedDataURL) => string;
    }) => void;
};
export declare const getDataView: (title: string) => {
    title: string;
    show: boolean;
    icon: string;
    iconStyle: {
        color: string;
        borderColor: string;
        borderWidth: number;
    };
    buttonColor: string;
    lang: string[];
};
export declare const getInitialValues: (arrayLength: number, dateFormat?: string, scrollStart?: number) => number;
export declare const getEndForecast: (arrayLength: number, lineMarkValue: number) => number;
export declare const thousandSeparator: (values: string | number) => string;
export {};
