import img1 from '../images/logo.jpg'

const Header = () => {
  return (
    <header>
        <div id="logoheader">
			<div className="logo">
				<img src={img1} alt="logo" />
			</div>
			<div className="headertext">
				<h1>paystack</h1>
			</div>
		</div>
    </header>
  )
}

export default Header