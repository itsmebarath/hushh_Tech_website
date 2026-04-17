import React from 'react';
import { Report } from '../services/reportService';
interface ReportDetailProps {
    report: Report | null;
    isLoading: boolean;
}
declare const ReportDetail: React.FC<ReportDetailProps>;
export default ReportDetail;
