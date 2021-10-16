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

    posMap.set(1,  {pos:{x:50, y:40}, name:'1 госпиталь'});
    posMap.set(2,  {pos:{x:7, y:8}, name:'2 госпиталь'});
    posMap.set(3,  {pos:{x:1, y:9}, name:'3 госпиталь'});
    posMap.set(4,  {pos:{x:49, y:31}, name:'4 госпиталь'});
    posMap.set(5,  {pos:{x:60, y:31}, name:'5 госпиталь'});
    posMap.set(6,  {pos:{x:39, y:81}, name:'6 госпиталь'});
    posMap.set(7,  {pos:{x:29, y:31}, name:'7 госпиталь'});
    posMap.set(8,  {pos:{x:39, y:31}, name:'8 госпиталь'});
    posMap.set(9,  {pos:{x:49, y:51}, name:'9 госпиталь'});
    posMap.set(10,  {pos:{x:89, y:69}, name:'10 госпиталь'});
    // PointsDateArray info
    let pointsDateMap = new Map()

    pointsDateMap.set(1, new Map([[700, 21],[1700,7],[2700,33]]));
    pointsDateMap.set(2, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(3, new Map([[700, 20],[2700, 15]]))
    pointsDateMap.set(4, new Map([[1700,7],[2700,18],[3700,11],[4000,30]]));
    pointsDateMap.set(5, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(6, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(7, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(8, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(9, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))
    pointsDateMap.set(10, new Map([[700, 30],[1700,15],[3700,21], [4000, 30]]))

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


