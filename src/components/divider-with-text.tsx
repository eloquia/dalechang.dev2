export type DividerWithTextProps = {
  text: string
}

export default function DividerWithTextComponent(props: DividerWithTextProps) {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-slate-500"></div>
      </div>
      <div className="relative flex justify-start sm:justify-center">
        <span className="font-mono rounded-lg bg-slate-900 px-3 text-base font-semibold leading-6 text-gray-200">{props.text}</span>
      </div>
    </div>
  )
}