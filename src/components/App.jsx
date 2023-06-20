import AddSchedule from "./AddSchedule"
import Auth from "./Auth"

function App() {
	const [slotSchedule, setSlotSchedule] = useState([])

	return <>
		{/* <Auth /> */}
		<AddSchedule setSlotSchedule={setSlotSchedule} />
	</>
}

export default App