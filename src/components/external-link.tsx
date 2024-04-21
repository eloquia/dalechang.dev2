export interface ExternalLinkProps {
  externalLink: string
  displayText: string
}

export default function ExternalLink(props: ExternalLinkProps) {
  return <a className="external-link inline-flex gap-1 items-center text-slate-100 hover:underline hover:text-slate-400" href={props.externalLink} target="_blank" rel="noopener noreferrer">
    {props.displayText}
  </a>
}
