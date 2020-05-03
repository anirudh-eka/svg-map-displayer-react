import React, {useRef, useState} from "react"
import {ReactComponent as Districts} from './ny.svg';


function Map(props) {
  const refContainer = useRef({});
  const [zoomIn, setZoomIn] = useState(undefined);
  if(refContainer.current.getElementById) {
    refContainer.current.getElementById(props.selectedDistrict) && (refContainer.current.getElementById(props.selectedDistrict).classList = ["selected"])
  }

  const onDoubleClick = (e) => {
    var dim = e.currentTarget.getBoundingClientRect();
    console.log(e.deltaY * 0.01)
    var x = e.clientX - dim.left;
    var y = e.clientY - dim.top;

    const scale = 9
    const width = dim.width
    const height = dim.height

    const leftOffset = x - (x / scale)
    const topOffset = y - (y / scale)

    if(zoomIn) {
      setZoomIn(undefined)
    } else {
      setZoomIn(`${leftOffset} ${topOffset} ${width/scale} ${height/scale}`)
    }
  }

  return (
    <Districts viewBox={zoomIn} ref={refContainer} onWheel={onDoubleClick} onClick={(e) => {props.onClick(e.target.id)}} onDoubleClick={onDoubleClick} />
  )
}

export default Map
