'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useId } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Input, Button, Select, Quantity } from '@/components'
import { CrossCircle, PlusSmall } from '@/components/Icon'
import { useUiContext } from '@/context/UiContext'
import { encodeObject } from '@/lib'
import { Fields } from '@/types'
import Row from './Row'

type FormValues = {
  fields: Fields[]
  rows: number
}

const initialValues: FormValues = {
  fields: [{ field_name: '', field_type: '' }],
  rows: 10
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
  }, [currentFields, reset])

  useEffect(() => {
    setTotalFields(fields.length)
  }, [fields.length, setTotalFields])

  return (
    <form
      onSubmit={handleSubmit(({ fields, rows }) =>
        router.push(
          `/preview?${new URLSearchParams({
            fields: JSON.stringify(fields),
            rows: rows.toString()
          }).toString()}`
        )
      )}
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
                    data-testid={`fields.${index}.field_name`}
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
                    data-testid={`fields.${index}.field_type`}
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
                <td className="text-right align-middle ">
                  <button
                    className="disabled:opacity-30"
                    disabled={fields.length < 2}
                    data-testid={`remove-button-${index}`}
                    title="Remove"
                    onClick={() => remove(index)}
                  >
                    <CrossCircle className="text-3xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Row className="text-right">
        <Button
          data-testid="add-button"
          title="Add another row"
          onClick={(e) => {
            e.preventDefault()
            append({ field_name: '', field_type: '' }, { shouldFocus: false })
          }}
        >
          <PlusSmall className="text-lg" /> Add
        </Button>
      </Row>

      <Row>
        <Controller
          control={control}
          name="rows"
          render={({ field: { onChange }, formState: { defaultValues } }) => (
            <Quantity defaultValue={defaultValues?.rows} onChange={onChange} />
          )}
        />
      </Row>
      <Button disabled={!fields.length} data-testid="submit-button">
        Submit
      </Button>
    </form>
  )
}

export default MockRequirementsForm

const options = ['email', 'id', 'first name']
