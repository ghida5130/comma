import { commaDetail } from "./projectDetailData/commaDetail";
import { meletiDetail } from "./projectDetailData/meletiDetail";
import { milliUlsanDetail } from "./projectDetailData/milliUlsanDetail";
import { millivieDetail } from "./projectDetailData/millivieDetail";
import { travelDamoaDetail } from "./projectDetailData/travelDamoaDetail";
import { onmaumDetail } from "./projectDetailData/onmaumDetail";
import { bbangbeomdaeDetail } from "./projectDetailData/bbangbeomdaeDetail";
import { gordiDetail } from "./projectDetailData/gordiDetail";
import { elephantB2BDetail } from "./projectDetailData/elephantB2BDetail";
import { lumosDetail } from "./projectDetailData/lumosDetail";

import { DetailDataType } from "@/types/type";

export interface ProjectDetailDataType {
    [key: string]: DetailDataType;
}

const projectDetailData: ProjectDetailDataType = {
    onmaum: onmaumDetail,
    bbangbeomdae: bbangbeomdaeDetail,
    gordi: gordiDetail,
    elephantB2B: elephantB2BDetail,
    lumos: lumosDetail,
    comma: commaDetail,
    meleti: meletiDetail,
    milliulsan: milliUlsanDetail,
    millivie: millivieDetail,
    traveldamoa: travelDamoaDetail,
};

export default projectDetailData;
