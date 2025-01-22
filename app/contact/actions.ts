"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

const formSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください" }),
  phone: z.string().min(1, { message: "電話番号を入力してください" }),
  type: z.enum(["個人", "法人"]),
  message: z.string().min(1, { message: "お問い合わせ内容を入力してください" }),
})

// Nodemailer transporterを作成
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "noguatu@gmail.com",
    pass: "ejth yepw usst xtaj",
  },
})

export async function submitContact(
  prevState: { success: boolean; message?: string; errors?: Record<string, string[]> } | null,
  formData: FormData
) {
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

  const { name, email, phone, type, message } = validatedFields.data

  try {
    // メール送信
    await transporter.sendMail({
      from: `"エコリサイクル株式会社" <noguatu@gmail.com>`,
      to: "noguatu@gmail.com", // 実際には受信するメールアドレスを指定
      subject: `【お問い合わせ】${name}様より`,
      text: `
お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone}
お客様区分: ${type}
メッセージ:
${message}
      `,
      html: `
<h1>お問い合わせがありました</h1>
<p><strong>お名前:</strong> ${name}</p>
<p><strong>メールアドレス:</strong> ${email}</p>
<p><strong>電話番号:</strong> ${phone}</p>
<p><strong>お客様区分:</strong> ${type}</p>
<p><strong>メッセージ:</strong></p>
<p>${message}</p>
      `,
    })

    return {
      success: true,
      message: "お問い合わせを受け付けました。担当者より折り返しご連絡させていただきます。",
    }
  } catch (error) {
    console.error("メール送信エラー:", error)
    return {
      success: false,
      message: "メール送信中にエラーが発生しました。しばらくしてから再度お試しください。",
    }
  }
}
