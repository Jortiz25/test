import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/form'
import { Input } from '@/shared/components/ui/input'
import { type FormValues, formSchema, useDefaultValues } from './utils/otp'
import FormFooter from './footer'
import Loader from '@/shared/components/ui/loader/loader'
import OtpHeader from './header'

import useCountdown from '@/shared/hooks/useCountDown'
import CountDownLoader from '@/shared/components/ui/count-down-loader'

/**
 * Renders the OTP form.
 *
 * @return {JSX.Element} The JSX element for the OTP form
 */

function OtpForm(): JSX.Element {
  const { defaultValues, onSubmit, isLoading } = useDefaultValues()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'all',
  })

  const onComplete = () => {
    console.log('onComplete')
  }

  const count = useCountdown({ direction: 90, onComplete })

  const { formState } = form
  // const isFormValid = formState.isValid && formState.isDirty

  if (isLoading) return <Loader />

  return (
    <>
      <Form {...form}>
        <OtpHeader />
        <form
          autoComplete="off"
          autoCorrect="off"
          onSubmit={form.handleSubmit(onSubmit)}
          className="form-input__container"
        >
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoComplete="off"
                    autoCorrect="off"
                    type="number"
                    placeholder="Ingresa el código OTP"
                    label="otp"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CountDownLoader count={count} />
          <FormFooter isFormValid={true} isCountZero={count === 0} />
        </form>
      </Form>
    </>
  )
}

export default OtpForm
