/// <reference types="react" />
import { IDefaultChartProps, TEntryDataLine } from './types';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/dataZoom';
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
