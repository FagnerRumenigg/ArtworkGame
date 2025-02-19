import React, { useRef, useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import "./styles.css";

function DroppableSlot({ index, timeline }) {
  const { setNodeRef, isOver } = useDroppable({ id: `slot-${index}` });
  const slotRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Atualiza o estado do isActive conforme a posição do item arrastado
  useEffect(() => {
    setIsActive(isOver);
  }, [isOver]);

  // Definir a área de acerto corretamente
  useEffect(() => {
    if (slotRef.current) {
      const rect = slotRef.current.getBoundingClientRect();
      console.log('Slot bounding rect', rect); // Para debug, veja as dimensões
    }
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
