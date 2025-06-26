import ProductGallery from "@/components/product-gallery";
import { Card, CardContent } from "@/components/ui/card";
import { Bike, Car, Tractor, Cog } from "lucide-react";

export default function Products() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Precision-engineered aluminum components for automotive, agriculture, and engineering applications
          </p>
        </div>

        <ProductGallery />

        {/* Industry Applications */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Industry Applications</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center bg-blue-50 border-none industry-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bike className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Two-Wheelers</h3>
                <p className="text-sm text-gray-600">Front-fork tubes and suspension components</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-green-50 border-none industry-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Automotive</h3>
                <p className="text-sm text-gray-600">Engine components and chassis parts</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-yellow-50 border-none industry-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tractor className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Agriculture</h3>
                <p className="text-sm text-gray-600">Equipment parts and machinery components</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-purple-50 border-none industry-card">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Engineering</h3>
                <p className="text-sm text-gray-600">Custom industrial components</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
