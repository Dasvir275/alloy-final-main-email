import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cog, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative hero-gradient text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" 
           style={{backgroundImage: 'url("https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900")'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-blue-400">Alloy Castech</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Leading manufacturer of precision aluminum die-cast components, CNC machined parts, and painted assemblies for automotive, agriculture, and engineering industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto">
                  <Cog className="mr-2 h-5 w-5" />
                  View Our Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-black border-white hover:bg-white hover:text-gray-900">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="CNC machining equipment" 
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
