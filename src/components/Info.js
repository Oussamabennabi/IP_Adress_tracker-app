



export default function Info(infos) {
    const {ip,isp,location: { country, region, timezone }={}} = infos 
    

  
  return (
		<div className="info-container">
			<div className="info">
				<h5>IP ADDRESS</h5>
				<h2>{ip}</h2>
			</div>
			<div className="info">
				<h5>LOCATION</h5>
				<h2>{`${region?region:''}${country?`,${country}`:''}`}</h2>
			</div>
			<div className="info">
				<h5>TIMEZONE</h5>
				<h2>{timezone?timezone:''}</h2>
			</div>
			<div className="info">
				<h5>ISP</h5>
				<h2>{isp}</h2>
			</div>
		</div>
	);
}