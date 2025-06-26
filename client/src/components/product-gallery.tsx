import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const productPages = [
    [
      {
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Front-Fork Outer Tubes",
        description: "Precision-cast aluminum tubes for two-wheeler suspension systems"
      },
      {
        image: "https://images.unsplash.com/photo-1486095485077-96d1b9c928c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Intake Manifolds",
        description: "High-performance manifolds for automotive and agriculture engines"
      },
      {
        image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "CNC-Machined Flanges",
        description: "Precision-machined aluminum flanges for industrial applications"
      },
      {
        image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Aluminum Housings",
        description: "Custom aluminum housings for various mechanical assemblies"
      },
      {
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Custom Components",
        description: "Specialized aluminum parts for engineering applications"
      },
      {
        image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Painted Assemblies",
        description: "Complete painted components ready for assembly"
      }
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1565117329346-12ba4b5af068?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Engine Components",
        description: "High-precision engine parts for automotive applications"
      },
      {
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Transmission Parts",
        description: "Durable transmission components for heavy machinery"
      },
      {
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Agricultural Equipment",
        description: "Specialized parts for farming and agricultural machinery"
      },
      {
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Industrial Brackets",
        description: "Heavy-duty mounting brackets for industrial applications"
      },
      {
        image: "https://images.unsplash.com/photo-1581092335878-7762d4bbf26f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Heat Exchangers",
        description: "Efficient heat exchange components for various systems"
      },
      {
        image: "https://images.unsplash.com/photo-1581092446996-adc57ebe8b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Valve Bodies",
        description: "Precision valve housings for hydraulic systems"
      }
    ],
    [
      {
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Pump Components",
        description: "High-performance pump parts for industrial applications"
      },
      {
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Motor Housings",
        description: "Protective housings for electric motors"
      },
      {
        image: "https://images.unsplash.com/photo-1581092446996-adc57ebe8b79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Gear Components",
        description: "Precision gears and gear housings"
      },
      {
        image: "https://images.unsplash.com/photo-1581092335878-7762d4bbf26f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Control Arms",
        description: "Suspension control arms for automotive use"
      },
      {
        image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Bearing Housings",
        description: "Protective housings for industrial bearings"
      },
      {
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        title: "Custom Castings",
        description: "Specialized castings for unique applications"
      }
    ]
  ];

  const currentProducts = productPages[currentPage - 1] || [];

  return (
    <div className="mb-8">
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "bg-primary text-white" : "text-gray-600"}
            >
              Page {page}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
