import { commaDetail } from "./projectDetailData/commaDetail";
import { meletiDetail } from "./projectDetailData/meletiDetail";
import { milliUlsanDetail } from "./projectDetailData/milliUlsanDetail";
import { millivieDetail } from "./projectDetailData/millivieDetail";
import { travelDamoaDetail } from "./projectDetailData/travelDamoaDetail";

import { DetailDataType } from "./projectDetailData/commaDetail";

export interface ProjectDetailDataType {
    [key: string]: DetailDataType;
}

const projectDetailData: ProjectDetailDataType = {
    comma: commaDetail,
    meleti: meletiDetail,
    milliulsan: milliUlsanDetail,
    millivie: millivieDetail,
    traveldamoa: travelDamoaDetail,
};

export default projectDetailData;
