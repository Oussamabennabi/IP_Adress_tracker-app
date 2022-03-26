

import arrow from '../images/icon-arrow.svg';


export default function Input({ setValue }) {
	function handleSubmit(e) {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) {
      setValue(value);
    }
  }
	return (
		<div className="input-container">
			<form onSubmit={handleSubmit}>
        <input
          
					placeholder="Search for any IP address or domain"
					className="input"
					type="text"
				/>
				<button type="submit" className="arrow-logo">
					<img src={arrow} alt="arrow" />
				</button>
			</form>
		</div>
	);
}

