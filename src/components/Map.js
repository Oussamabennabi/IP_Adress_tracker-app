import React from 'react';
import {
	MapContainer,
	useMap,
	TileLayer,
	Marker,
	Popup,
} from 'react-leaflet';
import L from 'leaflet';
import PopupIcon from '../images/icon-location.svg';



const customIcon = L.icon({
	iconUrl: PopupIcon,
	iconSize: [46, 56],
	iconAnchor: [23, 56],
	popupAnchor: [0, -56],
});
function ChangeView({ center}) {
	const map = useMap();
	map.setView(center, 14);
	return null;
}

export default function Map({ location, ipAddress, country }) {
	return (
		<>
			<MapContainer center={location} zoom={13} scrollWheelZoom={true}>
				<ChangeView center={location} />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
					maxZoom= {18}
					id= 'mapbox/streets-v11'
					tileSize= {512}
					zoomOffset={-1}
				/>
				<Marker icon={customIcon} position={location}>
					<Popup>
						{ipAddress}
						<br />
						{country}
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}
