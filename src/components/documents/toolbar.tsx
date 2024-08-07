import { ZoomIn, ZoomOut } from "lucide-react";
import { useZoomLevel } from "@/app/providers";
import StyledTooltip from "@/components/shared/styled-tooltip";


export default function Toolbar() {

  const { zoomLevel, setZoomLevel } = useZoomLevel();

  function handleZoomIn() {
    setZoomLevel(Math.min(zoomLevel + 0.05, 2.5))
  }

  function handleZoomOut() {
    setZoomLevel(Math.max(zoomLevel - 0.05, 0.5))
  }

  return (
    <div className="fixed z-50 bottom-5 left-0 right-0 w-fit mx-auto flex items-center justify-center">
      <div className="flex bg-background border shadow-lg rounded-lg overflow-hidden">
        <StyledTooltip text="Zoom in">
          <button className="cursor-pointer p-4 bg-background hover:bg-accent border-r" onClick={handleZoomIn}>
            <ZoomIn size={20} />
          </button>
        </StyledTooltip>
        <StyledTooltip text="Zoom out">
          <button className="cursor-pointer p-4 bg-background hover:bg-accent" onClick={handleZoomOut}>
            <ZoomOut size={20} />
          </button>
        </StyledTooltip>
      </div>
    </div>
  );
}