import EquipmentGallery from "@/components/equipment-gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Cog, Factory, Ruler } from "lucide-react";

export default function Facilities() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Facilities</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing facility located in Government-approved Industrial Growth Centre in Ambala, Haryana.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Industrial facility exterior" 
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-6">Facility Overview</h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <Card className="text-center bg-gray-50 border-none">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-primary mb-2">44,000</div>
                    <div className="text-sm text-gray-600">Total Area (sq ft)</div>
                  </CardContent>
                </Card>
                <Card className="text-center bg-gray-50 border-none">
                  <CardContent className="p-4">
                    <div className="text-3xl font-bold text-primary mb-2">18,500</div>
                    <div className="text-sm text-gray-600">Covered Factory (sq ft)</div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-gray-600 mb-6">
                Our well-connected modern facility is strategically located in a Government-approved Industrial Growth Centre, providing excellent connectivity and infrastructure support.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Tool Room Machines</h3>
                <p className="text-sm text-gray-600">Advanced tool room equipped with precision machinery</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Cog className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Die-Casting Machines</h3>
                <p className="text-sm text-gray-600">Gravity die-casting machines for precision components</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Production Machines</h3>
                <p className="text-sm text-gray-600">Modern production equipment for efficient manufacturing</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-none">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Ruler className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Measuring Equipment</h3>
                <p className="text-sm text-gray-600">Precision measuring tools for quality assurance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <EquipmentGallery />
    </div>
  );
}
