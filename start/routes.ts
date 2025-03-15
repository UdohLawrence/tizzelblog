const RegisterController = () => import('#controllers/register_controller')
const LoginController = () => import('#controllers/login_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/register', [RegisterController, 'show'])
router.post('/register', [RegisterController, 'store'])
router.get('/login', [LoginController, 'show'])
router.post('/login', [LoginController, 'store'])
