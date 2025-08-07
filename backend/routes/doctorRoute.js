import express from 'express'
import { doctorList , loginDoctor , appointmentDoctor , appointmentCancel , appointmentComplete , doctorDashboard , updateDoctorProfile ,doctorProfile} from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
// import { updateAllDoctorsPassword } from '../controllers/resetDoctorPasswords.js'
// import { updateDoctor } from '../controllers/resetDoctorPasswor/ds.js'


const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList )
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor, appointmentDoctor)
doctorRouter.post('/complete-appointment',authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor , doctorDashboard)
doctorRouter.get('/profile', authDoctor, doctorProfile)
doctorRouter.post('/update-profile' , authDoctor, updateDoctorProfile)

// doctorRouter.put('/update-doctor', updateAllDoctorsPassword)

export default doctorRouter