import Card from '@/components/Card'
import { MockRequirementsForm } from '@/components'
// import { BackgroundDots, BackgroundImage } from '@/components'

const Home = () => (
  <>
    <Card>
      <div className="mb-8">
        <h2 className="mb-3 text-xl font-extrabold">
          Faking it till you make it, with our fake API app
        </h2>

        <p className="mb-3 text-sm">
          Thank you for visiting. Due to personal commitments and a demanding full-time
          job, I can no longer dedicate time to improve APIMock.net. Your support has been
          incredible, and I'm reaching out to the community for assistance in keeping the
          site alive.
        </p>
        <p className="text-sm">
          If you're a developer, your contributions in code or bug fixes are immensely
          valuable. Visit{' '}
          <a
            href="https://github.com/rottitime/mocker"
            className="text-blue-700 decoration-wavy"
          >
            github.com/rottitime/mocker
          </a>{' '}
          and add requests, suggestions and code on how to get involved. Alternatively, if
          coding isn't your expertise, help us by spreading the word to those who might
          contribute. I'm grateful for your understanding and support. Let's work together
          to ensure that apimock.net continues to thrive and serve the community. Thank
          you for being part of this journey.
        </p>
      </div>

      <MockRequirementsForm
        defaultValues={{
          fields: [
            { field_name: 'id', field_type: 'id' },
            { field_name: 'first_name', field_type: 'first_name' },
            { field_name: 'email', field_type: 'email' },
            { field_name: 'profile_picture', field_type: 'image' },
            { field_name: 'is_admin', field_type: 'boolean' }
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
