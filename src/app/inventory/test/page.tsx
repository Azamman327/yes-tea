'use client'

import * as React from "react"
import { useForm } from "react-hook-form"

type FormData = {
  firstName: string
  lastName: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = handleSubmit((data) => console.log(data))
  // firstName and lastName will have correct type

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input {...register("firstName")} />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button type="submit">
        SetValue
      </button>
    </form>
  )
}