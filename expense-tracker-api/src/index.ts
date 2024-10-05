import { express, cors, morgan, dotenv } from './imports';
import authRoutes from './routes/routes';
import expenseRouter from './routes/expense'
dotenv.config()
const app = express()
app.use(cors());
app.use(morgan('dev')); // Logs requests to the console
app.use(express.json()); // For parsing JSON requests
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1', expenseRouter)

app.listen(3000, ()=>{
    console.log("listening")
})