/// <reference types="react" />
import { IDefaultChartProps, TEntryDataLine } from './types';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
interface IProps extends Omit<IDefaultChartProps, 'data'> {
    data: TEntryDataLine[];
    colors?: string[];
    showLabel?: boolean;
    smooth?: boolean;
    disableMarks?: boolean;
    noTooltip?: boolean;
    axisNames?: {
        x: string;
        y: string;
    };
}
declare const LineChart: (props: IProps) => JSX.Element;
export default LineChart;
