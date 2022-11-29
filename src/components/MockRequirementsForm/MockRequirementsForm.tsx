import { FC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Props, FormValues } from './types'
import { Input } from '@/components'

const MockRequirementsForm: FC<Props> = ({ onSubmit, defaultValues }) => {
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Menu</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td>
                <Input
                  label="Name"
                  {...register(`fields.${index}.field_name`, {
                    required: true,
                    maxLength: 30
                  })}
                />

                {/* <input
                  className="border-2 border-white/50 bg-transparent rounded px-3.5 text-3xl py-2	 text-white/50 bg-white/5"
                  type="text"
                  {...register(`fields.${index}.field_name`, {
                    required: true,
                    maxLength: 30
                  })}
                /> */}
                {errors.fields?.[index]?.field_name && <p>This is a required field</p>}
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

      <button
        onClick={(e) => {
          append({ field_name: '', field_type: '' })
          e.preventDefault()
        }}
      >
        Add another field
      </button>
      <br />

      <button disabled={!fields.length}>Submit</button>
    </form>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
