import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Download } from "lucide-react";
import html2canvas from "html2canvas";

export default function ScreenshotCapture() {
  const [isCapturing, setIsCapturing] = useState(false);

  const captureScreenshot = async () => {
    setIsCapturing(true);
    
    try {
      // Find the main content element
      const element = document.querySelector('main') || document.body;
      
      // Capture screenshot
      const canvas = await html2canvas(element, {
        scale: 1,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 1200,
        height: Math.min(element.scrollHeight, 4000)
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `alloy-craft-${window.location.pathname.replace('/', '') || 'home'}-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
      }, 'image/png');

    } catch (error) {
      console.error("Error capturing screenshot:", error);
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-sm">
          <Camera className="h-4 w-4" />
          Page Screenshot
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={captureScreenshot} 
          disabled={isCapturing}
          variant="outline"
          size="sm"
          className="w-full"
        >
          {isCapturing ? (
            <>
              <Camera className="mr-2 h-4 w-4 animate-pulse" />
              Capturing...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Capture Screenshot
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}