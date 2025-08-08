import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import z from 'zod'
import { AuthformSchema } from '@/lib/utils'
import {
    FormField, FormLabel, FormControl, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = AuthformSchema("sign-up")

interface CustomInputProps {
    control: Control<z.infer<typeof formSchema>>,
    label: string,
    name: FieldPath<z.infer<typeof formSchema>>,
    placeholder: string
}
const CustomInput = ({control, label, name, placeholder}:CustomInputProps) => {
  return (
     <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className ="form-item">
                <FormLabel className ="form-label">{label}</FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input
                        placeholder ={placeholder}
                        className ="input-class"
                        {...field}
                        type = {name === 'password' ? 'password' : 'text'}
                        />
                    </FormControl>
                    <FormMessage className ="form-message mt-2" />
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput