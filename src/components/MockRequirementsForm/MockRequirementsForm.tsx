import { FC, useId } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Props, FormValues } from './types'
import { Input } from '@/components'
import Button from '../Button'

const MockRequirementsForm: FC<Props> = ({ onSubmit, defaultValues }) => {
  const id = useId()
  const labelId = `-label-${id}`

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ defaultValues })
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: 'fields'
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!!fields.length && (
        <table>
          <thead>
            <tr>
              <th id={`name${labelId}`}>Name</th>
              <th>Type</th>
              <th>Menu</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td>
                  <Input
                    aria-label="Name"
                    aria-labelledby={`name${labelId}`}
                    placeholder="e.g. first-name"
                    error={
                      errors.fields?.[index]?.field_name && 'This is a required field'
                    }
                    {...register(`fields.${index}.field_name`, {
                      required: true,
                      maxLength: 30
                    })}
                  />
                </td>

                <td>
                  <select
                    {...register(`fields.${index}.field_type`, {
                      required: true,
                      maxLength: 30
                    })}
                  >
                    <option>Select</option>
                    {options.map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                  {errors.fields?.[index]?.field_type && <p>This is a required field</p>}
                </td>
                <td>
                  <button
                    onClick={() => {
                      remove(index)
                    }}
                  >
                    remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Button
        onClick={(e) => {
          append({ field_name: '', field_type: '' })
          e.preventDefault()
        }}
      >
        Add another field
      </Button>

      <br />
      <Button disabled={!fields.length}>Submit</Button>
    </form>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
