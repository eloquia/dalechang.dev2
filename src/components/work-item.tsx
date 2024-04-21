import BadgeCollectionComponent, { BadgeProps } from "./badge-collection"
import ExternalLink from "./external-link"

export default function WorkItemComponent(props: WorkItem) {
  return (
      <div className="mb-12 w-80 sm:flex sm:flex-col sm:justify-self-center lg:w-96">
        <div className="lg:col-span-2">
          <div className="flex flex-row items-start">
            <p className="text-2xl text-slate-100">{props.jobTitle}</p>
            <span>&nbsp;-&nbsp;</span>
            <ExternalLink externalLink={props.companyLink} displayText={props.companyName} />
          </div>
          <p className="text-sm italic text-slate-400 mb-2">{props.startYear} - {props.endYear ? `${props.endYear}` : 'now'}</p>
          <p className="mb-4 text-slate-400">{props.description}</p>
        </div>
        <div className="lg:col-span-1">
          <BadgeCollectionComponent badges={props.notableTechnologies} />
        </div>
      </div>
  )
}

export type WorkItem = {
  startYear: number
  endYear?: number
  companyName: string
  companyLink: string
  jobTitle: string
  otherTitles?: string[]
  description: string
  notableTechnologies: BadgeProps[]
}
