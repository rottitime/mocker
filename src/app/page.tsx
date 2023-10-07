import Card from '@/components/Card'
import { MockRequirementsForm } from '@/components'
// import { BackgroundDots, BackgroundImage } from '@/components'

const Home = () => (
  <>
    <Card>
      <h2 className="mb-8 text-xl font-extrabold">
        Faking it till you make it, with our fake API app
      </h2>

      <MockRequirementsForm
        defaultValues={{
          fields: [
            { field_name: 'id', field_type: 'id' },
            { field_name: 'first_name', field_type: 'first_name' },
            { field_name: 'email', field_type: 'email' },
            { field_name: 'profile_picture', field_type: 'image' },
            { field_name: 'is_admin', field_type: 'boolean' },

          ],
          rows: 11
        }}
      />
    </Card>
    {/* <BackgroundDots /> */}
    {/* <BackgroundImage /> */}
  </>
)

export default Home
