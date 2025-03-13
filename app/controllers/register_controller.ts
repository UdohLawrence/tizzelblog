import User from '#models/user'
import { registerValidator } from '#validators/register'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  async show({ view }: HttpContext) {
    return view.render('pages/auth/register')
  }
  async store({ auth, request, response, session }: HttpContext) {
    // const data = request.only(['first_name', 'last_name', 'username', 'email', 'password'])
    const payload = await request.validateUsing(registerValidator)

    const user = await User.create(payload)

    await auth.use('web').login(user)

    session.flash({
      notification: {
        type: 'success',
        message: 'Successfully registered!',
      },
    })

    return response.redirect('/')
  }
}
