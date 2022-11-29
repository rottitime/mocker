import { useId } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Props, FormValues } from './types'
import { Input } from '@/components'
import Button from '../Button'
import Select from '../Select'
import { Add, CrossCircle } from '../Icon'

const initialValues: FormValues = {
  fields: [{ field_name: '', field_type: '' }]
}

const MockRequirementsForm = ({
  onFormSubmit,
  defaultValues = initialValues,
  ...props
}: Props) => {
  const id = useId()
  const labels = {
    name: `name-label-${id}`,
    type: `type-label-${id}`,
    menu: `menu-label-${id}`
  }

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
    <form onSubmit={handleSubmit(onFormSubmit)} {...props}>
      {!!fields.length && (
        <table className="w-full">
          <thead>
            <tr>
              <th id={labels.name}>Name</th>
              <th id={labels.type}>Type</th>
              <th id={labels.menu}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field, index) => (
              <tr key={field.id}>
                <td>
                  <Input
                    aria-label="Name"
                    aria-labelledby={labels.name}
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
                  <Select
                    options={options}
                    error={
                      errors.fields?.[index]?.field_type && 'This is a required field'
                    }
                    {...register(`fields.${index}.field_type`, {
                      required: true,
                      maxLength: 30
                    })}
                  />
                </td>
                <td className="text-right">
                  <button
                    title="Remove"
                    onClick={() => {
                      remove(index)
                    }}
                  >
                    <CrossCircle className="text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-right">
        <Button
          title="Add another row"
          onClick={(e) => {
            append({ field_name: '', field_type: '' })
            e.preventDefault()
          }}
        >
          <Add className="text-3xl" /> Add
        </Button>
      </div>

      <br />
      <Button disabled={!fields.length}>Submit</Button>
    </form>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
