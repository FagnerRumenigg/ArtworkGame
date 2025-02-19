import React, { useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import ArtworkCard from "../card/index";
import "./styles.css";

function DraggableArtwork({ artwork }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: artwork.id.toString(),
  });

  useEffect(() => {
    let animationFrameId = null;
  
    const handleDragMove = (event) => {
      const threshold = 50; 
      const scrollSpeed = 10; 
      const { clientX } = event.touches ? event.touches[0] : event;
  
      if (clientX < threshold) {
        cancelAnimationFrame(animationFrameId);
        const scrollLeft = () => {
          document.scrollingElement.scrollBy({ left: -scrollSpeed, behavior: "smooth" });
          animationFrameId = requestAnimationFrame(scrollLeft);
        };
        scrollLeft();
      } 
      else if (clientX > window.innerWidth - threshold) {
        cancelAnimationFrame(animationFrameId);
        const scrollRight = () => {
          document.scrollingElement.scrollBy({ left: scrollSpeed, behavior: "smooth" });
          animationFrameId = requestAnimationFrame(scrollRight);
        };
        scrollRight();
      } 
      else {
        cancelAnimationFrame(animationFrameId);
      }
    };
  
    const stopScrolling = () => {
      cancelAnimationFrame(animationFrameId);
    };
  
    if (isDragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", stopScrolling);
      document.addEventListener("touchmove", handleDragMove);
      document.addEventListener("touchend", stopScrolling);
    }
  
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", stopScrolling);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", stopScrolling);
    };
  }, [isDragging]);
  

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <ArtworkCard artwork={artwork} />
    </div>
  );
}

export default DraggableArtwork;
