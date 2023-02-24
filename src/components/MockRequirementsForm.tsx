'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useId } from 'react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { Input, Button, Select, Quantity } from '@/components'
import { CrossCircle, PlusSmall } from '@/components/Icon'
import { useUiContext } from '@/context/UiContext'
import { Fields, FieldType } from '@/types'
import Row from './Row'
import useDebounce from '@/hooks/useDebounce'
import { getParams } from '@/lib/url-utils'

type FormValues = {
  fields: Fields[]
  rows: number
}

type Props = {
  defaultValues?: FormValues
  live?: boolean
}

const initialValues: FormValues = {
  fields: [{ field_name: '' }],
  rows: 10
}

const MockRequirementsForm = ({ defaultValues, live }: Props) => {
  const router = useRouter()
  const {
    rows,
    // focusField,
    // setFocusField,
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
    watch,

    formState: { errors, isValid, isSubmitting }
  } = useForm<FormValues>({
    defaultValues: defaultValues || initialValues,
    mode: 'onChange'
  })

  const watchAllFields = watch()
  const debounceFields = useDebounce(live && JSON.stringify(watchAllFields), 500)

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

  useEffect(() => {
    if (live && isValid && debounceFields) {
      const data = JSON.parse(debounceFields) as FormValues
      router.push(`/preview?${getParams(data.fields, data?.rows)}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceFields, live, router])

  return (
    <form
      noValidate
      onSubmit={handleSubmit(({ fields, rows }) => {
        router.push(`/preview?${getParams(fields, rows)}`)
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
                    data-testid={`fields.${index}.field_name`}
                    aria-label="Name"
                    aria-labelledby={labels.name}
                    placeholder="e.g. first-name"
                    {...register(`fields.${index}.field_name`, {
                      required: true,
                      maxLength: 30
                    })}
                    onActive={(_isActive) => {
                      // if (isActive) {
                      //   setFocusField(index)
                      // } else if (focusField === index) setFocusField(undefined)
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
            append({ field_name: '' }, { shouldFocus: false })
          }}
        >
          <PlusSmall className="text-lg" /> Add
        </Button>
      </Row>

      <Row>
        <Controller
          control={control}
          name="rows"
          rules={{
            required: true,
            validate: (value) =>
              typeof value !== 'number' || isNaN(value) ? 'Enter a valid number' : true
          }}
          render={({
            field: { onChange },
            formState: { defaultValues },
            fieldState: { error }
          }) => (
            <Quantity
              defaultValue={rows || defaultValues?.rows}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />
      </Row>
      {!live && (
        <Row>
          <Button disabled={!isValid} data-testid="submit-button" loading={isSubmitting}>
            Create your API
          </Button>
        </Row>
      )}
    </form>
  )
}

export default MockRequirementsForm

const options: FieldType[] = ['email', 'id', 'first_name']
