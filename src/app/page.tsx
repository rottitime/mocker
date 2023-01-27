import Card from '@/components/Card'
import { MockRequirementsForm } from '@/components'
// import { BackgroundDots, BackgroundImage } from '@/components'

const Home = () => (
  <>
    <Card>
      <h2 className="mb-8 text-xl font-extrabold">
        Faking it till you make it, with our fake API app
      </h2>

      <MockRequirementsForm />
    </Card>
    {/* <BackgroundDots /> */}
    {/* <BackgroundImage /> */}
  </>
)

export default Home
