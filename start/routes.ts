const RegisterController = () => import('#controllers/register_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])
