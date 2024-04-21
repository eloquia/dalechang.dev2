export default function BadgeCollectionComponent(props: BadgeCollectionProps) {
  return (
    <div className="badge-collection flex flex-row gap-2 flex-wrap">
      {
        props.badges.map(badge => badge.href
          ? <a href={badge.href} key={badge.displayText} target="_blank" rel="noopener noreferrer">
              <div className="badge badge-primary badge-outline" key={badge.displayText}>{badge.displayText}</div>
            </a>
          : <div className="badge badge-primary badge-outline" key={badge.displayText}>{badge.displayText}</div>
        )
      }
    </div>
  )
}

export type BadgeProps = {
  displayText: string
  href?: string
}

export type BadgeCollectionProps = {
  badges: BadgeProps[]
}