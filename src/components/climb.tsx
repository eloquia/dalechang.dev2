import Image from 'next/image'

type ClimbProps = {
  name: string
  description: string
}

const climbImageStyle = {
  
}

export default function ClimbComponent(props: ClimbProps) {
  return (
    <>
      <Image src="/images/climb.jpg" alt="Climb" width={300} height={300} style={climbImageStyle} />
      <h1 className='text-slate-400 prose'>{props.name}</h1>
      <p>{props.description}</p>
    </>
  )
}