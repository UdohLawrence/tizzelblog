import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    first_name: vine.string().minLength(4).maxLength(32),
    last_name: vine.string().minLength(4).maxLength(32).nullable(),
    username: vine
      .string()
      .minLength(4)
      .maxLength(32)
      .unique(async (db, value) => {
        const result = await db.from('users').select('username').where('username', value).first()

        return result ? false : true
      }),
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const result = await db.from('users').select('email').where('email', value).first()

        return result ? false : true
      }),
    password: vine.string().minLength(8).maxLength(32).confirmed(),
  })
)
