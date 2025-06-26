import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Camera } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function PDFGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState("");

  const pages = [
    { path: "/", name: "Home", selector: "main" },
    { path: "/about", name: "About Us", selector: "main" },
    { path: "/facilities", name: "Facilities", selector: "main" },
    { path: "/products", name: "Products", selector: "main" },
    { path: "/contact", name: "Contact", selector: "main" }
  ];

  const generatePDF = async () => {
    setIsGenerating(true);
    setProgress("Initializing PDF generation...");

    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);

      // Add title page
      pdf.setFontSize(28);
      pdf.setTextColor(37, 99, 235); // Blue color
      pdf.text("Alloy Craft", pageWidth / 2, 50, { align: "center" });
      
      pdf.setFontSize(16);
      pdf.setTextColor(102, 102, 102);
      pdf.text("Website Documentation & Screenshots", pageWidth / 2, 70, { align: "center" });
      
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      const currentDate = new Date().toLocaleDateString();
      pdf.text(`Generated on: ${currentDate}`, pageWidth / 2, 90, { align: "center" });

      // Add company info
      pdf.setFontSize(14);
      pdf.text("Company Information", margin, 120);
      pdf.setFontSize(10);
      const companyInfo = [
        "Location: Ambala, Haryana, India",
        "Specialization: Aluminum die casting, CNC machining, painted components",
        "Industries: Two-wheelers, automotive, agriculture, engineering",
        "Contact: Mr. Amrit Pal (+91-9896032299)",
        "Email: info@alloycraft.in",
        "Address: #404-01, IGC Saha, Ambala 133104 (Haryana)"
      ];
      
      companyInfo.forEach((info, index) => {
        pdf.text(info, margin, 135 + (index * 8));
      });

      // Add features section
      pdf.setFontSize(14);
      pdf.text("Website Features", margin, 200);
      pdf.setFontSize(10);
      const features = [
        "• Responsive design optimized for all devices",
        "• Modern UI with professional styling",
        "• Contact form with email functionality",
        "• Product gallery with pagination",
        "• Equipment showcase",
        "• Company information and facilities overview",
        "• SEO-optimized pages"
      ];
      
      features.forEach((feature, index) => {
        pdf.text(feature, margin, 215 + (index * 8));
      });

      // Capture screenshots for each page
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        setProgress(`Capturing ${page.name} page... (${i + 1}/${pages.length})`);

        // Navigate to the page
        window.history.pushState({}, "", page.path);
        
        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Find the main content element
        const element = document.querySelector(page.selector) || document.body;
        
        try {
          // Capture screenshot
          const canvas = await html2canvas(element, {
            scale: 1,
            useCORS: true,
            allowTaint: true,
            backgroundColor: "#ffffff",
            width: 1200,
            height: Math.min(element.scrollHeight, 3000) // Limit height
          });

          // Add new page
          pdf.addPage();
          
          // Add page title
          pdf.setFontSize(18);
          pdf.setTextColor(37, 99, 235);
          pdf.text(`${page.name} Page`, margin, 25);
          
          // Add page URL
          pdf.setFontSize(10);
          pdf.setTextColor(102, 102, 102);
          pdf.text(`URL: ${window.location.origin}${page.path}`, margin, 35);

          // Convert canvas to image and add to PDF
          const imgData = canvas.toDataURL("image/png");
          const imgWidth = contentWidth;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          
          // Check if image fits on page, if not scale it down
          const maxHeight = pageHeight - 60; // Leave space for header
          const finalHeight = Math.min(imgHeight, maxHeight);
          const finalWidth = (finalHeight * canvas.width) / canvas.height;
          
          pdf.addImage(imgData, "PNG", margin, 45, finalWidth, finalHeight);

          // Add page description
          const descriptions = getPageDescriptions();
          if (descriptions[page.name]) {
            const yPosition = Math.min(45 + finalHeight + 10, pageHeight - 30);
            pdf.setFontSize(10);
            pdf.setTextColor(0, 0, 0);
            
            const lines = pdf.splitTextToSize(descriptions[page.name], contentWidth);
            pdf.text(lines, margin, yPosition);
          }

        } catch (error) {
          console.error(`Error capturing ${page.name}:`, error);
          // Add error message to PDF
          pdf.setFontSize(12);
          pdf.setTextColor(255, 0, 0);
          pdf.text(`Error capturing ${page.name} page`, margin, 50);
        }
      }

      // Save the PDF
      setProgress("Saving PDF file...");
      pdf.save("alloy-craft-website-documentation.pdf");
      
      setProgress("PDF generated successfully!");
      
      // Navigate back to original page
      window.history.pushState({}, "", "/");
      
    } catch (error) {
      console.error("Error generating PDF:", error);
      setProgress("Error generating PDF. Please try again.");
    } finally {
      setTimeout(() => {
        setIsGenerating(false);
        setProgress("");
      }, 2000);
    }
  };

  const getPageDescriptions = () => {
    return {
      "Home": "The homepage introduces Alloy Craft as a leading manufacturer of precision aluminum components. Features include a compelling hero section, company overview cards highlighting manufacturing excellence, advanced facilities, and trusted partnerships.",
      "About Us": "The About Us page tells Alloy Craft's story from its founding in 2007 to becoming a leading supplier. It includes facility expansion details (from 450m² to 4,050m²), company mission, and key highlights.",
      "Facilities": "The Facilities page showcases Alloy Craft's 44,000 sq ft manufacturing facility in Ambala, Haryana. It features an equipment gallery and highlights key machinery including tool room machines and die-casting machines.",
      "Products": "The Products page displays a comprehensive gallery of aluminum components across multiple categories, including front-fork outer tubes, intake manifolds, CNC-machined flanges, and industry applications.",
      "Contact": "The Contact page provides complete contact information and features a comprehensive contact form with validation for inquiries, quotes, and technical support, plus business hours information."
    };
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Generate Website PDF
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">
          Generate a comprehensive PDF document with screenshots of all website pages.
        </p>
        
        {isGenerating && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-600">
              <Camera className="h-4 w-4 animate-pulse" />
              {progress}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
            </div>
          </div>
        )}
        
        <Button 
          onClick={generatePDF} 
          disabled={isGenerating}
          className="w-full"
        >
          <Download className="mr-2 h-4 w-4" />
          {isGenerating ? "Generating..." : "Generate PDF"}
        </Button>
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Includes all 5 pages with screenshots</p>
          <p>• Company information and features</p>
          <p>• Professional documentation format</p>
        </div>
      </CardContent>
    </Card>
  );
}