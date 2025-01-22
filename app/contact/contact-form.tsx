"use client"

import { useState, useEffect } from "react"
import { useActionState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { submitContact } from "./actions"

const formSchema = z.object({
  type: z.enum(["個人", "法人"], {
    required_error: "お客様区分を選択してください",
  }),
  name: z.string()
    .min(1, { message: "名前を入力してください" })
    .max(50, { message: "名前は50文字以内で入力してください" }),
  email: z.string()
    .email({ message: "有効なメールアドレスを入力してください" })
    .max(100, { message: "メールアドレスは100文字以内で入力してください" }),
  phone: z.string()
    .min(1, { message: "電話番号を入力してください" })
    .regex(/^[0-9-]+$/, { message: "電話番号は数字とハイフンのみで入力してください" })
    .max(15, { message: "電話番号は15文字以内で入力してください" }),
  message: z.string()
    .min(1, { message: "お問い合わせ内容を入力してください" })
    .max(1000, { message: "お問い合わせ内容は1000文字以内で入力してください" }),
})

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()
  const [state, formAction] = useActionState<
    { success: boolean; message?: string; errors?: Record<string, string[]> } | null,
    FormData
  >(submitContact, null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "個人",
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  useEffect(() => {
    if (!state) return
    
    if (state.success) {
      toast({
        title: "送信完了",
        description: state.message,
      })
      form.reset()
    } else if (state.errors) {
      toast({
        title: "エラー",
        description: "入力内容をご確認ください。",
        variant: "destructive",
      })
    }
  }, [state, form, toast])

  return (
    <Form {...form}>
      <form
        action={async (formData) => {
          setIsPending(true)
          await formAction(formData)
          setIsPending(false)
        }}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>お客様区分</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="個人" />
                    </FormControl>
                    <FormLabel className="font-normal">個人のお客様</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="法人" />
                    </FormControl>
                    <FormLabel className="font-normal">法人のお客様</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お名前 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage>{state?.errors?.name?.[0]}</FormMessage>
            </FormItem>
          )}
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  メールアドレス <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="taro@example.com" {...field} />
                </FormControl>
                <FormMessage>{state?.errors?.email?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  電話番号 <span className="text-destructive">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="03-1234-5678" {...field} />
                </FormControl>
                <FormMessage>{state?.errors?.phone?.[0]}</FormMessage>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                お問い合わせ内容 <span className="text-destructive">*</span>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="お問い合わせ内容をご記入ください" className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage>{state?.errors?.message?.[0]}</FormMessage>
            </FormItem>
          )}
        />

        <div className="text-right">
          <Button type="submit" size="lg" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            送信する
          </Button>
        </div>
      </form>
    </Form>
  )
}
