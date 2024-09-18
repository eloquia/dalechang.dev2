import Image from 'next/image'
import BadgeCollectionComponent, { BadgeProps } from './badge-collection'

import ios17WallpaperDark from '../images/iOS-17-wallpaper-dark.png'
import kofferAppPic from '../images/untitled-personal-finance-app-widget.png'

const projectImageStyle = {
  // width: 320,
  height: 'auto'
}

const notableTechnologies = [
  { displayText: 'Dart', href: 'https://dart.dev/' },
  { displayText: 'Swift', href: 'https://developer.apple.com/swift/' },
  { displayText: 'iOS', href: 'https://www.apple.com/ios/' },
  { displayText: 'Supabase', href: 'https://supabase.com/' },
  { displayText: 'Stripe', href: 'https://stripe.com/' },
]

export default function UntitledFinanceApp() {
  return (
    <div className="flex flex-col gap-8 sm:items-center">
      <div className="text-content px-8 w-80 sm:px-0">
        <div className="flex flex-row items-start">
          <p className="text-2xl text-slate-100">Untitled Personal Finance App</p>
        </div>
        <div className="project-dates flex flex-row gap-1">
          <p className="text-sm italic text-slate-700 dark:text-slate-400 mb-2">2024 - Ongoing</p>
        </div>
        <p className="mb-4 text-slate-700 dark:text-slate-400 prose">Developed a personal finance app that displays available spending from a budget.</p>
        <BadgeCollectionComponent badges={notableTechnologies} />
      </div>
      <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1 relative">
              <Image
                src={ios17WallpaperDark}
                alt="Image of Untitled Personal Finance App Home Screen Widget"
                // width="0"
                // height="0"
                sizes="100%"
                className="h-auto w-full"
              />
              <Image
                src={kofferAppPic}
                alt="Image of Untitled Personal Finance App Home Screen Widget"
                // width="0"
                // height="0"
                sizes="40vw"
                className="h-auto w-32 absolute top-10 left-5"
              />
          </div>
        </div>
      </div>
    </div>
  )
}
