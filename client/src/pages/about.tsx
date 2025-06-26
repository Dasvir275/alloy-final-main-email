import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Alloy Castech</h1>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                <strong className="text-gray-900">Started in 2023</strong>, Alloy Castech began by casting front-fork outer tubes for two-wheelers in Ambala, Haryana. Today, we are a leading supplier of aluminum die-cast, CNC machined, and painted parts.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-white border-none">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary">450m²</div>
                    <div className="text-sm text-gray-500">Initial facility size</div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-primary">4,050m²</div>
                    <div className="text-sm text-gray-500">Current facility size</div>
                  </CardContent>
                </Card>
              </div>

              <p>
                We expanded within three years to our current facility of 4,050 m² at the government-approved Industrial Growth Center in Saha, Ambala. Our product range has grown from front-fork tubes to intake manifolds for automotive and agriculture industries.
              </p>

              <Card className="bg-white border-l-4 border-primary border-l-primary">
                <CardContent className="p-6">
                  <p className="font-medium text-gray-900">Our Mission</p>
                  <p className="mt-2">Driven by a culture of striving for excellence, customer satisfaction, and adherence to national and industrial quality standards.</p>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Company Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Expanded product range from front-fork tubes to intake manifolds for automotive and agriculture industries</li>
                  <li>• Turnover trebled, driven by a culture of striving for excellence and customer satisfaction</li>
                  <li>• Leading manufacturer of front-fork outer tubes for many two-wheelers in India</li>
                  <li>• Emphasis on continuous innovation and world-class management and manufacturing technologies</li>
                  <li>• Team comprises technical elites experienced in die casting and CNC machining</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Aluminum die casting production facility" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
