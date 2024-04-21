import Image from 'next/image'
import BadgeCollectionComponent, { BadgeProps } from './badge-collection'

const projectImageStyle = {
  
}

export default function ProjectItemComponent(props: ProjectItem) {
  return (
    <div className="mb-12 flex flex-col gap-8 sm:mb-16 sm:gap-0 items-center">
      <div className="text-content w-80 sm:mb-8">
        <div className="flex flex-row items-start">
          <p className="text-2xl text-slate-100">{props.projectName}</p>
        </div>
        <div className="project-dates flex flex-row gap-1">
          {
            props.isCompleted
              ? <p className="text-sm italic text-slate-400 mb-2">{props.startYear}, Finished</p>
              : <p className="text-sm italic text-slate-400 mb-2">{props.startYear} - Ongoing</p>
          }
        </div>
        <p className="mb-4 text-slate-400">{props.description}</p>
        <BadgeCollectionComponent badges={props.notableTechnologies} />
      </div>
      {
        props.projectImageType === 'mobile' && <div className="mockup-phone">
          <div className="camera"></div> 
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Image
                src={props.projectImageLink}
                alt={props.projectImageAlt}
                width="0"
                height="0"
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      }
      {
        props.projectImageType === 'desktop' && <div className="mockup-browser border mx-8 bg-base-300 w-80">
          <div className="mockup-browser-toolbar">
            <div className="input">{props.projectLink}</div>
          </div>
          <div className="flex justify-center bg-base-200">
            <Image
              src={props.projectImageLink}
              alt={props.projectImageAlt}
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      }
    </div>
  )
}

export type ProjectItem = {
  startYear: number
  finishedYear?: number
  isCompleted?: boolean
  projectName: string
  projectLink: string
  description: string
  notableTechnologies: BadgeProps[]
  projectImageLink: string
  projectImageAlt: string
  projectImageType: 'mobile' | 'desktop'
}
