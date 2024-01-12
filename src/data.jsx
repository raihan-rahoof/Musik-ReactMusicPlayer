import { v4 as uuidv4 } from "uuid";
import inception from './audios/inception.mp3'
import interstellar from './audios/interstellar.mp3'
import cigaretes from './audios/cigaretes.mp3'


function chillHop() {
	return [
		{
			name: "Time-Inception",
			cover:
				"https://th.bing.com/th/id/OIG.5MD7EdahWIbKyvBIq1vb?pid=ImgGn",
			artist: "Hanz zimmer",
			audio: inception,
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: true,
		},
		{
			name: "Confidental Chase",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Hanz Zimmer",
			audio: interstellar,
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Apocalypso",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Cigaretes after Sex",
			audio: cigaretes,
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Nightfall",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
			artist: "Aiguille",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
			color: ["#EF8EA9", "#ab417f"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Reflection",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
			artist: "Swørn",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
			color: ["#CD607D", "#c94043"],
			id: uuidv4(),
			active: false,
		},
		{
			name: "Under the City Stars",
			cover:
				"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
			artist: "Aso, Middle School, Aviino",
			audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
			color: ["#205950", "#2ab3bf"],
			id: uuidv4(),
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;