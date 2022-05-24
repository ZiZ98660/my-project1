import {useState} from 'react'
const Section = () => {
	const[text, setText]=useState('')

	const onsbmit=(e)=>{
		e.preventDefault();
		if(text<1){
			alert('input email')
		}
		
	}

   return (
    <section>
		<div className="forms">
			<h2>login</h2>
				<form>
					<div>
                        <input className="email" type="email" name="email"  placeholder="Email address" value={text} onChange={(e)=>setText(e.target.value)}/>
					</div>
					<div>
						<input className="password" type="password" name="Password" maxLength="8" placeholder="Password" />
					</div>
					<div>
						<input className="button1" type="submit" value="Login to your account" onClick={onsbmit}/>
					</div>
				</form>
		</div>
		<div className="comments">
			<p className="grey">New to Paystack? <a href="#.com">Sign up</a ></p> 
			<p><a href="#.com">Forgot your password?</a></p>
		</div>
	</section>
  )
}

export default Section