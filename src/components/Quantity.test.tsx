import Quantity from './Quantity'
import userEvent from '@testing-library/user-event'
import { renderWithProviders, screen } from '@/lib/test-utils'

describe('Quantity', () => {
  it('renders', async () => {
    renderWithProviders(<Quantity defaultValue={8} onChange={jest.fn()} />)

    expect(screen.getByTestId('input-single')).toBeInTheDocument()
    expect(screen.getByTestId('input-quantity')).toBeInTheDocument()
    expect(screen.getByTestId('input-quantity')).toBeEnabled()
    expect(screen.getByTestId('input-quantity')).toHaveValue(8)
  })

  it('clicking checkbox', async () => {
    const mockChanged = jest.fn()
    renderWithProviders(<Quantity defaultValue={9} onChange={mockChanged} />)

    await userEvent.click(screen.getByTestId('input-single'))
    expect(screen.getByTestId('input-quantity')).toBeDisabled()
    expect(mockChanged).toHaveBeenLastCalledWith(0)
    await userEvent.click(screen.getByTestId('input-single'))
    expect(screen.getByTestId('input-quantity')).toBeEnabled()
    expect(mockChanged).toHaveBeenLastCalledWith(9)
  })

  it('quantity change', async () => {
    const mockChanged = jest.fn()
    renderWithProviders(<Quantity onChange={mockChanged} />)

    const fieldQuantity = screen.getByTestId('input-quantity')
    await userEvent.type(fieldQuantity, '2389')

    expect(mockChanged).toBeCalledTimes(4)
    expect(mockChanged).toHaveBeenLastCalledWith(2389)
  })
})
