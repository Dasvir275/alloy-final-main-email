import Hero from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Settings, Handshake } from "lucide-react";
export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gray-50 border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Manufacturing Excellence</h3>
                <p className="text-gray-600">
                  Alloy Castech is engaged in manufacturing of Aluminum Casted and CNC machined Parts. We produce components of various standard and custom specific alloys.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Facilities</h3>
                <p className="text-gray-600">
                  Our facility is well equipped with an in-house tool room with CNC Machining, supported by the latest CAD/CAM software for 3-D parametric modeling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 border-none">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Trusted Partner</h3>
                <p className="text-gray-600">
                  We are preferred vendors and OEM suppliers of Aluminum casted and machined components to several Indian companies across multiple sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
