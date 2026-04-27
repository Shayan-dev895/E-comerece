import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
  { icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: Lock, text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <div className='bg-gray-100 m-2 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        
        {/* GRID */}
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
          
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition'
              >
                {/* ICON */}
                <div className='flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full'>
                  <Icon className='h-6 w-6 text-gray-700' />
                </div>

                {/* TEXT */}
                <div>
                  <p className='text-base font-medium text-gray-900'>
                    {feature.text}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    {feature.subtext}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Features