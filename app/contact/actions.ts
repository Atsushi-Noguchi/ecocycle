"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().min(1, { message: "電話番号を入力してください" }),
  type: z.enum(["個人", "法人"]),
  message: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
})

export async function submitContact(formData: FormData) {
  // バリデーション
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    type: formData.get("type"),
    message: formData.get("message"),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // 実際のプロジェクトでは、ここでメール送信やデータベースへの保存を行います
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    message: "お問い合わせを受け付けました。担当者より折り返しご連絡させていただきます。",
  }
}

