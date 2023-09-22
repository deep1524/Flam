import React, { useState, useRef, useEffect } from "react";
import "../Components/Bottom_Sheet.css";

const BottomSheet = () => {
  const [Dragging, setDragging] = useState(false);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(true);
  const sheetRef = useRef(null);
  const handleRef = useRef(null);
  const sheetHeight = 700;
  const topPosition = -650;
  const middlePosition = -sheetHeight / 2;
  const bottomPosition = 0;

  useEffect(() => {
    const sheet = sheetRef.current;
    const handle = handleRef.current;

    let startY;
    let initialSheetY;

    const handleMouseDown = (e) => {
      startY = e.clientY;
      initialSheetY = parseFloat(
        getComputedStyle(sheet).transform.split(",")[5]
      );
      setDragging(true);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      const currentY = e.clientY;
      const deltaY = currentY - startY;
      sheet.style.transform = `translateY(${initialSheetY + deltaY}px)`;
    };

    const handleMouseUp = () => {
      setDragging(false);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);

      const currentSheetY = parseFloat(
        getComputedStyle(sheet).transform.split(",")[5]
      );

      const distanceToTop = Math.abs(currentSheetY - topPosition);
      const distanceToMiddle = Math.abs(currentSheetY - middlePosition);
      const distanceToBottom = Math.abs(currentSheetY - bottomPosition);

      if (
        distanceToTop < distanceToMiddle &&
        distanceToTop < distanceToBottom
      ) {
        sheet.style.transform = `translateY(${topPosition}px)`;
      } else if (distanceToMiddle < distanceToBottom) {
        sheet.style.transform = `translateY(${middlePosition}px)`;
      } else {
        sheet.style.transform = `translateY(${bottomPosition}px)`;
        setBottomSheetOpen(true);
      }
    };

    handle.addEventListener("mousedown", handleMouseDown);

    return () => {
      handle.removeEventListener("mousedown", handleMouseDown);
    };
  }, [sheetHeight, topPosition, middlePosition, bottomPosition]);

  const handleCutSignClick = () => {
    const sheet = sheetRef.current;
    sheet.style.transform = `translateY(${bottomPosition}px)`;

    setBottomSheetOpen(false);
  };

  return (
    <div
      ref={sheetRef}
      className={`sheet ${Dragging ? "dragging" : ""} ${
        bottomSheetOpen ? "" : "closed"
      }`}
    >
      <div ref={handleRef} className="allthings"></div>
      <div className="crossbtn" onClick={handleCutSignClick}>
        X
      </div>
      <div className="content">
      <p className="data">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facere odit laboriosam excepturi unde suscipit harum eligendi fugit animi iure, nisi consequatur doloremque praesentium quibusdam voluptatem quis veniam quidem quam!

        </p>
      </div>
    </div>
  );
};

export default BottomSheet;
