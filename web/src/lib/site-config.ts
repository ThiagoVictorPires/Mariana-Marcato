const WHATSAPP_NUMBER = "5534984397438"
const WHATSAPP_PHONE_DISPLAY = "(34) 98439-7438"
const DEFAULT_MESSAGE = "Olá Mari, eu gostaria de agendar uma sessão."

function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`
}

export const siteConfig = {
  name: "Mariana Marcato",
  crp: "04/65485",
  email: "mariana.marcato@outlook.com",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappPhoneDisplay: WHATSAPP_PHONE_DISPLAY,
  whatsappUrl: whatsappLink(),
  whatsappLink,
  instagramUrl: "https://www.instagram.com/psi.marianamarcato",
  instagramHandle: "@psi.marianamarcato",
  city: "Araxá",
  state: "MG",
  siteUrl: "https://www.marianamarcato.com.br",
}
