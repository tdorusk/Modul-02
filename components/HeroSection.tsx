import React from 'react'
import { Badge } from './ui/badge'
import { ArrowUpDown, CircleArrowRight, WifiCogIcon, Wrench } from 'lucide-react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
            <Badge 
            variant={"secondary"} 
            className="mb-4 bg-brand-100 text-brand-600 border-brand-100">
                <WifiCogIcon className="w-3 h-3 mr-1" />
                High Speed Connection at Your Home
            </Badge>
            <h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r 
            from-brand-900 via-brand-600 to-brand-900 text-transparent 
            bg-clip-text leading-tight">
              Super Speed Internet for Everyone
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Experience the future of connectivity with our high-speed internet 
              solutions designed for homes and businesses. Enjoy seamless streaming, 
              gaming, and browsing with Netthink&apos;s reliable network.
            </p>
            <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button className="w-full sm:w-auto bg-brand-600 text-white hover:bg-brand-800">
                Get Started
                <CircleArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <ArrowUpDown className="w-6 h-6 text-brand-600 mr-2" />
                Low Latency
              </div>
               <div className="flex items-center">
                <Wrench className="w-6 h-6 text-brand-600 mr-2" />
                Free Installation
              </div>              
            </div>
        </div>
    </section>
  )
}
