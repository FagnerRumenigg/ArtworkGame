import React, { useRef, useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import "./styles.css";

function DroppableSlot({ index, timeline }) {
  const { setNodeRef, isOver } = useDroppable({ id: `slot-${index}` });
  const slotRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(isOver);
  }, [isOver]);

  return (
    <div
      ref={(node) => {
        setNodeRef(node);
        slotRef.current = node;
      }}
      id={`slot-${index}`}
      className={`timeline-slot ${isActive ? "active" : ""}`}
    >
      {timeline[index] && (
        <img src={timeline[index].image} alt="" className="timeline-artwork" />
      )}
    </div>
  );
}

export default DroppableSlot;
