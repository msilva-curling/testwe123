import { InteractiveSquare } from '@/components/InteractiveSquare'

const Index = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-4 md:gap-12 lg:gap-16">
      <InteractiveSquare />
      <InteractiveSquare />
      <InteractiveSquare />
    </div>
  )
}

export default Index
