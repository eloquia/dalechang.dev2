import Link from 'next/link'

export interface InternalLinkProps {
  route: string
  displayText: string
}

export default function InternalLink(props: InternalLinkProps) {
  return <Link className="internal-link text-slate-100 hover:underline hover:text-slate-400" href={props.route}>{props.displayText}</Link>
}
