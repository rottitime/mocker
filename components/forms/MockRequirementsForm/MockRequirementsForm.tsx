import { useFieldArray, useForm } from 'react-hook-form'

type Fields = {
  field_name: string
  field_type: string
}

type FormValues = {
  fields: Fields[]
}

const MockRequirementsForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>()
  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: 'fields'
  })

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          // eslint-disable-next-line no-console
          console.log(data)
        })}
      >
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
                  <input type="text" {...register(`fields.${index}.field_name`)} />
                </td>

                <td>
                  <select {...register(`fields.${index}.field_type`)}>
                    <option>Select</option>
                    {options.map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
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
        <button>Submit</button>
      </form>
      <button
        onClick={(e) => {
          append({ field_name: '', field_type: '' })
        }}
      >
        Add another field
      </button>
    </>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
