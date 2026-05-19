export const contactInfo = {
  email: "spp.kng1998@gmail.com",
  phoneDisplay: "+66 984630999",
  phoneTel: "+66984630999",
  whatsappNumber: "66984630999",
} as const;

export const contactLinks = {
  mail: `mailto:${contactInfo.email}`,
  phone: `tel:${contactInfo.phoneTel}`,
  whatsapp: `https://wa.me/${contactInfo.whatsappNumber}`,
} as const;

export const contactModalCopy = {
  badge: "Contact",
  title: "Let's Connect",
  description:
    "Open to full-time UX/UI roles, freelance work, and design projects. Choose a channel below — I'll get back to you soon.",
} as const;
