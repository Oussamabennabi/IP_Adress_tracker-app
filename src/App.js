import React from 'react';

// components
import  Map from './components/Map';
import  Info from './components/Info';
import Input from './components/Input';
// styles
import './global.css'

const URL = (address,domain='') => {
	return `https://geo.ipify.org/api/v2/country,city?apiKey=at_EN7k3p179W0qMbezVJuFB40KFWFDj&ipAddress=${address}&domain=${domain}`;
};
export default function App() {
  const [address,setAddress] = React.useState('')
  const [info, setInfo] = React.useState([]) 
  const [error, setError] = React.useState(false);
  // to get the location of the user
  React.useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
		.then((resp) => resp.json())
		.then((data) => {
		setAddress(data.ip);
		});
  }, [])
  
  React.useEffect(() => {
      const getLocation = async (address) => {
        fetch(URL(address))
					.then((resp) => {
						if (!resp.ok) {
							setError(true);
							setTimeout(() => {
								setError(false);
							}, 1500);
							throw new Error();
						}
						return resp.json();
					})
					.then((data) => setInfo(data));
          
      }
      getLocation(address)
  }, [address])


  function setValue(value) {
    setAddress(value);
  }
  const position = [info?.location?.lat, info?.location?.lng]
  return (
		<>
			<div className="header">
				<h1>IP Address Tracker</h1>
				{error && <h4>please enter a valide ip address</h4>}
				<Input setValue={setValue} />
				<Info {...info} />
			</div>
			{info.location && (
				<Map
					country={`${info.location.country},${info.location.region}`}
					ipAddress={info.ip}
					location={position[0] && position[1] ? position : [30, 45]}
				/>
			)}
		</>
	);
}


//lat:40.737, lng:-73.923