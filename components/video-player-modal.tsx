"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize, X } from "lucide-react";

interface VideoPlayerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl: string;
  title?: string;
}

export function VideoPlayerModal({
  open,
  onOpenChange,
  videoUrl,
  title = "Video Player",
}: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isSeeking, setIsSeeking] = useState(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Reset video when modal closes
  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [open]);

  // Initialize progress bar background with dot at the end
  useEffect(() => {
    if (rangeRef.current) {
      const percent = (currentTime / duration) * 100;
      // Set CSS variable on parent container for dot positioning
      rangeRef.current.parentElement?.style.setProperty('--progress-percent', `${percent}%`);
    }
  }, [duration, currentTime]);

  // Smooth 60fps timeline updates using requestAnimationFrame with direct DOM updates
  useEffect(() => {
    let lastStateUpdate = 0;

    const updateTime = () => {
      if (videoRef.current && rangeRef.current && !isSeeking) {
        const time = videoRef.current.currentTime;
        const percent = (time / duration) * 100;

        // Update DOM directly for smooth visuals (60fps)
        rangeRef.current.value = time.toString();
        rangeRef.current.parentElement?.style.setProperty('--progress-percent', `${percent}%`);

        // Update React state less frequently for time display (4fps is enough)
        const now = Date.now();
        if (now - lastStateUpdate > 250) {
          setCurrentTime(time);
          lastStateUpdate = now;
        }
      }

      if (isPlaying && !isSeeking) {
        animationFrameRef.current = requestAnimationFrame(updateTime);
      }
    };

    if (isPlaying && !isSeeking) {
      animationFrameRef.current = requestAnimationFrame(updateTime);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isSeeking, duration]);

  // Auto-hide controls
  useEffect(() => {
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, showControls]);

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleTimeUpdate = () => {
    // Backup update mechanism (requestAnimationFrame is primary)
    if (videoRef.current && !isPlaying && !isSeeking) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekStart = () => {
    setIsSeeking(true);
  };

  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleSeekInput = (e: React.FormEvent<HTMLInputElement>) => {
    const time = parseFloat(e.currentTarget.value);
    setCurrentTime(time);

    // Update visual progress immediately
    if (rangeRef.current) {
      const percent = (time / duration) * 100;
      rangeRef.current.parentElement?.style.setProperty('--progress-percent', `${percent}%`);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl w-full p-0 bg-black border-0 overflow-hidden [&>button]:hidden">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div
          className="relative aspect-video w-full bg-black"
          onMouseMove={handleMouseMove}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-4 right-4 z-50 bg-black/50 hover:bg-white/30 text-white hover:text-white transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => onOpenChange(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className="bg-black/50 rounded-full p-6 backdrop-blur-sm hover:bg-black/70 transition-all">
                <Play className="h-16 w-16 text-white" fill="white" />
              </div>
            </div>
          )}

          {/* Video Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Progress Bar */}
            <div className="mb-3 relative flex items-center">
              <input
                ref={rangeRef}
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onMouseDown={handleSeekStart}
                onMouseUp={handleSeekEnd}
                onTouchStart={handleSeekStart}
                onTouchEnd={handleSeekEnd}
                onInput={handleSeekInput}
                onChange={handleSeek}
                className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer relative
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:bg-transparent
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:bg-transparent
                  [&::-moz-range-thumb]:border-0
                  [&::-moz-range-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, white 0%, white var(--progress-percent, 0%), rgb(75 85 99) var(--progress-percent, 0%), rgb(75 85 99) 100%)`
                }}
              />
              {/* Dot at the end of progress bar */}
              <div
                className="absolute w-3 h-3 bg-white rounded-full pointer-events-none"
                style={{
                  left: `var(--progress-percent, 0%)`,
                  transform: 'translateX(-50%)'
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={togglePlay}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </Button>

                {/* Mute/Unmute */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-white hover:bg-white/20"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>

                {/* Time Display */}
                <span className="text-white text-sm ml-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Fullscreen */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-white hover:bg-white/20"
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
