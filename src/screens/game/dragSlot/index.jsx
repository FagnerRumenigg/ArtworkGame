import React, { useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import ArtworkCard from "../card/index";
import "./styles.css";

function DraggableArtwork({ artwork }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: artwork.id.toString(),
  });

  useEffect(() => {
    let scrollInterval = null;

    const handleDragMove = (event) => {
      const threshold = 50; // Distância da borda para ativar o scroll
      const scrollSpeed = 10; // Velocidade do scroll
      const { clientX } = event.touches ? event.touches[0] : event;

      console.log("Posição do mouse/touch:", clientX);
      console.log("Largura da tela:", window.innerWidth);

      if (clientX < threshold) {
        console.log("⏪ Perto da borda esquerda, rolando para a esquerda...");
        clearInterval(scrollInterval);
        scrollInterval = setInterval(() => {
          window.scrollBy({ left: -scrollSpeed, behavior: "smooth" });
        }, 50);
      } 
      else if (clientX > window.innerWidth - threshold) {
        console.log("⏩ Perto da borda direita, rolando para a direita...");
        clearInterval(scrollInterval);
        scrollInterval = setInterval(() => {
          window.scrollBy({ left: scrollSpeed, behavior: "smooth" });
        }, 50);
      } 
      else {
        console.log("🔄 Fora das áreas de rolagem, parando scroll.");
        clearInterval(scrollInterval);
      }
    };

    const stopScrolling = () => {
      console.log("🛑 Soltou a obra, parando o scroll.");
      clearInterval(scrollInterval);
    };

    if (isDragging) {
      console.log("🎨 Arrastando a obra:", artwork.title);
      document.addEventListener("touchmove", handleDragMove);
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("touchend", stopScrolling);
      document.addEventListener("mouseup", stopScrolling);
    }

    return () => {
      console.log("♻️ Removendo listeners de eventos.");
      clearInterval(scrollInterval);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("touchend", stopScrolling);
      document.removeEventListener("mouseup", stopScrolling);
    };
  }, [isDragging, artwork.title]);

  console.log("🔍 Arte:", artwork.title, "Descrição:", artwork.description);
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <ArtworkCard artwork={artwork} />
    </div>
  );
}

export default DraggableArtwork;
