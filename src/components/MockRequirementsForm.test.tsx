import MockRequirementsForm from './MockRequirementsForm'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen, waitFor } from '@/lib/test-utils'
import { Fields } from '@/types'

const pushSpy = jest.fn()
const getSpy = jest.fn(() => null)
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(() => ({
    locale: 'en',
    push: pushSpy
  })),
  useSearchParams: jest.fn(() => ({ get: getSpy }))
}))

describe('MockRequirementsForm', () => {
  it('renders', async () => {
    renderWithProviders(<MockRequirementsForm />)

    expect(screen.getByTestId('fields.0.field_name')).toBeVisible()
    expect(screen.getByTestId('fields.0.field_type')).toBeVisible()
    expect(screen.getByTestId('remove-button')).toBeVisible()
    expect(screen.getByTestId('submit-button')).toBeVisible()
    expect(screen.getByTestId('add-button')).toBeVisible()

    expect(screen.getByTestId('fields.0.field_name')).toHaveValue('')
    expect(screen.getByTestId('fields.0.field_type')).toHaveValue('')

    expect(screen.queryByTestId('fields.1.field_name')).not.toBeInTheDocument()
    expect(screen.queryByTestId('fields.1.field_type')).not.toBeInTheDocument()
  })

  it('prepopulated by query params', async () => {
    const initialData = [
      { field_name: 'my_field1', field_type: 'id' },
      { field_name: 'my_field2', field_type: 'first name' }
    ]
    getSpy.mockImplementationOnce(() => JSON.stringify(initialData))
    renderWithProviders(<MockRequirementsForm />)

    expect(screen.getByTestId('fields.0.field_name')).toBeVisible()
    expect(screen.getByTestId('fields.0.field_type')).toBeVisible()
    expect(screen.getByTestId('fields.1.field_name')).toBeVisible()
    expect(screen.getByTestId('fields.1.field_type')).toBeVisible()

    expect(screen.getByTestId('fields.0.field_name')).toHaveValue(
      initialData[0].field_name
    )
    expect(screen.getByTestId('fields.0.field_type')).toHaveValue(
      initialData[0].field_type
    )

    expect(screen.getByTestId('fields.1.field_name')).toHaveValue(
      initialData[1].field_name
    )
    expect(screen.getByTestId('fields.1.field_type')).toHaveValue(
      initialData[1].field_type
    )
  })

  describe('Submits', () => {
    it('with added rows', async () => {
      renderWithProviders(<MockRequirementsForm />)

      await userEvent.type(screen.getByTestId('fields.0.field_name'), 'first_name')
      await userEvent.selectOptions(screen.getByTestId('fields.0.field_type'), 'email')

      await userEvent.click(screen.getByTestId('add-button'))

      expect(screen.getByTestId('fields.1.field_name')).toBeVisible()
      expect(screen.getByTestId('fields.1.field_type')).toBeVisible()

      await userEvent.type(screen.getByTestId('fields.1.field_name'), 'id_key')
      await userEvent.selectOptions(screen.getByTestId('fields.1.field_type'), 'id')

      await userEvent.click(screen.getByTestId('submit-button'))

      await waitFor(async () =>
        expect(pushSpy).toHaveBeenCalledWith(
          '/preview?fields=%5B%7B%22field_name%22%3A%22first_name%22%2C%22field_type%22%3A%22email%22%7D%2C%7B%22field_name%22%3A%22id_key%22%2C%22field_type%22%3A%22id%22%7D%5D'
        )
      )
    })
  })
})
