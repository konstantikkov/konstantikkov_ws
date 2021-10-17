import React from 'react'
import styles from './index.css'
import {TimelineProvider} from "./components/timelineContext/TimelineContext";
import {Timeline} from "./components/Timeline";
import {Description} from "./components/Description";
import {MapPlane} from "./components/MapPlane";

export const InteractiveMap = () => {

// Description info
    let descriptionMap = new Map();

    descriptionMap.set(700, {header: '1941 год', text: 'Текст о 1941 очень тяжелом году в нашей истории.'});
    descriptionMap.set(1700, {header: '1942 год', text: 'Текст о 1942 очень тяжелом году в нашей истории.'});
    descriptionMap.set(2700, {header: '1943 год', text: 'Текст о 1943 очень тяжелом году в нашей истории.'});
    descriptionMap.set(3700, {header: '1944 год', text: 'Текст о 1944 очень тяжелом году в нашей истории.'});
    descriptionMap.set(4000, {header: '1945 год', text: 'Текст о 1945 очень тяжелом году в нашей истории.'});

// MapDate info

    let posMap = new Map();

    posMap.set(1, {pos:{x:40.3, y:40.9}, name:'ЭГ 1170 ФЭП 50 ЛЕНФ'});
    posMap.set(2, {pos:{x:38, y:50}, name:'ЭГ 2222 ФЭП 50 ЛЕНФ'});
    posMap.set(3, {pos:{x:38.5, y:42}, name:'Б-ЦА ИМ. МЕЧНИКОВА 50 ЛЕНФ'});
    posMap.set(4, {pos:{x:41.9, y:48.6}, name:'ЭГ 1014 ФЭП 50 ЛЕНФ'});
    posMap.set(5, {pos:{x:80.3, y:30.3}, name:'ЭГ 1171 ФЭП 50 ЛЕНФ'});
    posMap.set(6, {pos:{x:90.35, y:43.5}, name:'Б-ЦА ИМ. КУЙБЫШЕВА 50 ЛЕНФ'});
    posMap.set(7, {pos:{x:75.7, y:38.6}, name:'ВМА ИМ. КИРОВА ФЭП 50 ЛЕНФ'});


// PointsDateArray info
    let pointsDateMap = new Map()

    pointsDateMap.set(1, new Map([[700, 21],[1700,7],[2700,33]]));
    pointsDateMap.set(2, new Map([[700, 31],[1700,23],[3700,11], [4000, 12]]));
    pointsDateMap.set(3, new Map([[700, 20],[2700, 15]]));
    pointsDateMap.set(4, new Map([[1700,7],[2700,18],[3700,11],[4000,30]]));
    pointsDateMap.set(5, new Map([[700, 31],[1700,23],[3700,11], [4000, 12]]));
    pointsDateMap.set(6, new Map([[700, 20],[2700, 15]]));
    pointsDateMap.set(7, new Map([[1700,7],[2700,18],[3700,11],[4000,30]]));


  return (
      <TimelineProvider>
          <div className="InteractiveBackground" >
              <div className="InteractiveMap">
                  <Timeline/>
                  <MapPlane posMap={posMap} pointsDateMap={pointsDateMap}/>
                  <Description descriptionMap={descriptionMap}/>
              </div>
          </div>
      </TimelineProvider>
  );
}


