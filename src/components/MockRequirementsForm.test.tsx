import MockRequirementsForm from './MockRequirementsForm'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen, waitFor } from '@/lib/test-utils'

const pushSpy = jest.fn()
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useRouter: jest.fn(() => ({
    locale: 'en',
    push: pushSpy
  })),
  useSearchParams: jest.fn(() => ({ get: jest.fn(() => null) }))
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

  // describe('Sucessful data', () => {
  //   beforeEach(() => {
  //     fetchMock.mockResponses(
  //       [JSON.stringify(mockMe), { status: 200 }],
  //       [JSON.stringify(mockSkills), { status: 200 }]
  //     )
  //   })
  //   it('renders', async () => {
  //     renderWithProviders(
  //       <MockRequirementsForm
  //         loading={false}
  //         onFormSubmit={jest.fn()}
  //         showAll
  //         suggestionProps={[{ data: mockSuggested }]}
  //       />
  //     )
  //     await waitFor(() => {
  //       expect(screen.getByText(mockLevels[0].name)).toBeInTheDocument()
  //     })
  //     expect(screen.getByText(mockLevels[1].name)).toBeInTheDocument()
  //     expect(screen.getByText(mockLevels[2].name)).toBeInTheDocument()
  //     expect(screen.getByText(mockLevels[3].name)).toBeInTheDocument()
  //     expect(screen.getByText(mockLevels[4].name)).toBeInTheDocument()
  //     expect(screen.getByText(mockSuggested[0])).toBeInTheDocument()
  //     expect(screen.getByText(mockSuggested[1])).toBeInTheDocument()
  //     expect(screen.getByText(mockSuggested[2])).toBeInTheDocument()
  //   })
  //   it('renders step by step', async () => {
  //     renderWithProviders(
  //       <MockRequirementsForm
  //         loading={false}
  //         onFormSubmit={jest.fn()}
  //         suggestionProps={[{ data: mockSuggested }]}
  //       />
  //     )
  //     await bugfixForTimeout()
  //     await waitFor(() => {
  //       expect(screen.getByText(mockSuggested[0])).toBeInTheDocument()
  //     })
  //     expect(screen.queryByText(mockLevels[0].name)).not.toBeInTheDocument()
  //     expect(screen.queryByTestId('input_skillname-0')).not.toBeInTheDocument()
  //     await userEvent.click(screen.getByText(mockSuggested[0]))
  //     expect(screen.getByTestId('input_skillname-0')).toBeInTheDocument()
  //   })
  //   it('Adding suggested skills to field', async () => {
  //     const value = mockSuggested[1]
  //     renderWithProviders(
  //       <MockRequirementsForm
  //         loading={false}
  //         onFormSubmit={jest.fn()}
  //         showAll
  //         suggestionProps={[{ data: mockSuggested }]}
  //       />
  //     )
  //     await waitFor(() => {
  //       expect(screen.getByText(mockLevels[0].name)).toBeInTheDocument()
  //     })
  //     const field = screen.getByTestId('input_skillname-0')
  //     expect(field).toBeInTheDocument()
  //     expect(field).toHaveValue('')
  //     await userEvent.click(screen.getByText(value))
  //     expect(field).toHaveValue(value)
  //   })
  //   it('Can delete fields', async () => {
  //     renderWithProviders(
  //       <MockRequirementsForm
  //         loading={false}
  //         onFormSubmit={jest.fn()}
  //         showAll
  //         suggestionProps={[{ data: mockSuggested }]}
  //       />
  //     )
  //     await waitFor(() => {
  //       expect(screen.getByText(mockLevels[0].name)).toBeInTheDocument()
  //     })
  //     await userEvent.click(screen.getByText(mockSuggested[0]))
  //     await userEvent.click(screen.getByText(mockSuggested[1]))
  //     await userEvent.click(screen.getByText(mockSuggested[2]))
  //     expect(screen.getByTestId('input_skillname-0')).toHaveValue(mockSuggested[0])
  //     expect(screen.getByTestId('input_skillname-1')).toHaveValue(mockSuggested[1])
  //     expect(screen.getByTestId('input_skillname-2')).toHaveValue(mockSuggested[2])
  //     await userEvent.click(screen.getByTestId('delete-1'))
  //     expect(screen.queryByTestId('input_skillname-2')).not.toBeInTheDocument()
  //     expect(screen.getByTestId('input_skillname-0')).toHaveValue(mockSuggested[0])
  //     expect(screen.getByTestId('input_skillname-1')).toHaveValue(mockSuggested[2])
  //   })
  //   it('first delete button is disabled', async () => {
  //     renderWithProviders(
  //       <MockRequirementsForm
  //         loading={false}
  //         onFormSubmit={jest.fn()}
  //         showAll
  //         suggestionProps={[{ data: [] }]}
  //       />
  //     )
  //     await waitFor(() => {
  //       expect(screen.getByText(mockLevels[0].name)).toBeInTheDocument()
  //     })
  //     //disabled by default
  //     expect(screen.getByTestId('delete-0')).toBeDisabled()
  //     await userEvent.click(screen.getByTestId('append'))
  //     //enabled
  //     expect(screen.getByTestId('delete-0')).toBeEnabled()
  //     expect(screen.getByTestId('delete-1')).toBeEnabled()
  //     await userEvent.click(screen.getByTestId('delete-1'))
  //     //back to disabled as only 1 row
  //     expect(screen.getByTestId('delete-0')).toBeDisabled()
  //   })
  // })
})
