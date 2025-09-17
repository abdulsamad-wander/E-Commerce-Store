import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
    {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
    {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
    {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
    {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
]
const Others = () => {

  return (
    <div className='bg-black/60  py-6 px-4 sm:px-6 md:px-16 '>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 '>
            {features.map((feature, index)=> {
               return <div key={index} className='flex items-center justify-center text-center sm:text-left bg-gray-800 rounded-2xl md:h-16 h-auto w-auto cursor-pointer hover:scale-105 duration-300'>
                    <feature.icon className='flex-shrink-0 h-8 w-8 text-gray-100' aria-hidden="true" />
                    <div className='ml-4'>
                        <p className='text-base font-medium text-white/90 '>{feature.text}</p>
                        <p className='mt-1 text-sm text-white/90 '>{feature.subtext}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default Others