import MockRequirementsForm from './MockRequirementsForm'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen, render } from '@/lib/test-utils'
import { Add } from '@/components/Icon'

describe('MockRequirementsForm', () => {
  it('renders', async () => {
    const view = renderWithProviders(<MockRequirementsForm />)

    // const view = render(Add)

    ;(await view).debug()

    // expect(screen.getByTestId('fields.0.field_name')).toBeInTheDocument()

    // await waitFor(() => {
    //   expect(screen.getByText(mockLevels[0].name)).toBeInTheDocument()
    // })
    // expect(screen.getByText(mockLevels[1].name)).toBeInTheDocument()
    // expect(screen.getByText(mockLevels[2].name)).toBeInTheDocument()
    // expect(screen.getByText(mockLevels[3].name)).toBeInTheDocument()
    // expect(screen.getByText(mockLevels[4].name)).toBeInTheDocument()
    // expect(screen.getByText(mockSuggested[0])).toBeInTheDocument()
    // expect(screen.getByText(mockSuggested[1])).toBeInTheDocument()
    // expect(screen.getByText(mockSuggested[2])).toBeInTheDocument()
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
