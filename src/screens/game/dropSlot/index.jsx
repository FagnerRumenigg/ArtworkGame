import React from "react";
import { useDroppable } from "@dnd-kit/core";
import "./styles.css"; // Certifique-se de que está apontando para o CSS correto

function DroppableSlot({ index, timeline }) {
  const { setNodeRef } = useDroppable({ id: `slot-${index}` });
  const slotArtwork = timeline[index];

  return (
    <div
      ref={setNodeRef}
      id={`slot-${index}`}
      className={`timeline-slot ${slotArtwork ? "correct" : ""}`}
    >
      {slotArtwork && (
        <img src={slotArtwork.image} alt="" className="timeline-artwork" />
      )}
    </div>
  );
}

export default DroppableSlot;
