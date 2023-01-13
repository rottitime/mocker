'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useId } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { Input, Button, Select } from '@/components'
import { CrossCircle, PlusSmall } from '../Icon'
import { useUiContext } from '@/context/UiContext'
import { encodeObject } from '@/lib'
import { Fields } from '@/types'

type FormValues = {
  fields: Fields[]
}

const initialValues: FormValues = {
  fields: [{ field_name: '', field_type: '' }]
}

const MockRequirementsForm = () => {
  const router = useRouter()

  const {
    focusField,
    setFocusField,
    setTotalFields,
    fields: currentFields
  } = useUiContext()

  const id = useId()
  const labels = {
    name: `name-label-${id}`,
    type: `type-label-${id}`,
    menu: `menu-label-${id}`
  }

  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ defaultValues: initialValues, mode: 'onChange' })

  const { fields, append, remove } = useFieldArray<FormValues>({
    control,
    name: 'fields'
  })

  useEffect(() => {
    if (currentFields?.length) reset({ fields: currentFields })
  }, [reset, currentFields])

  useEffect(() => {
    setTotalFields(fields.length)
  }, [fields.length, setTotalFields])

  return (
    <form
      onSubmit={handleSubmit(() => {
        router.push(`/preview?fields=${encodeObject(fields)}`)
      })}
    >
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
                    {...register(`fields.${index}.field_name`, {
                      required: true,
                      maxLength: 30
                    })}
                    onActive={(isActive) => {
                      if (isActive) {
                        setFocusField(index)
                      } else if (focusField === index) setFocusField(undefined)
                    }}
                    error={
                      errors.fields?.[index]?.field_name && 'This is a required field'
                    }
                  />
                </td>

                <td>
                  <Select
                    options={options}
                    placeholder="Please select"
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
            append({ field_name: '', field_type: '' }, { shouldFocus: false })
            e.preventDefault()
          }}
        >
          <PlusSmall className="text-lg" /> Add
        </Button>
      </div>

      <br />
      <Button disabled={!fields.length}>Submit</Button>
    </form>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
