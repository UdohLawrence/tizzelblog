import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(4).maxLength(16),
    last_name: vine.string().minLength(4).maxLength(16).optional(),
    username: vine
      .string()
      .minLength(4)
      .maxLength(16)
      .unique(async (db, value) => {
        const result = await db.from('users').select('username').where('username', value).first()
        return result ? false : true
      }),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('users').select('email').where('email', value).first()
        return result ? false : true
      }),
    password: vine.string().minLength(6).maxLength(16).confirmed(),
  })
)

export const loginValidator = vine.compile(
  vine.object({
    email: vine.string().email().normalizeEmail(),
    password: vine.string(),
  })
)
