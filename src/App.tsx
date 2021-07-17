import React, {useState} from 'react';
import InputComp from './InputComp';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstNameInvalid, setFirstNameValidity] = useState(false);
  const [isLastNameInvalid, setLastNameValidity] = useState(false);
  const [isEmailInvalid, setEmailValidity] = useState(false);
  const [isPasswordInvalid, setPasswordValidity] = useState(false);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('CLAIM YOUR FREE TRIAL')

  const validateEmail = ()  => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    setEmailValidity(!emailRegex.test(email))
  }

  const handleSubmit = (event: React.FormEvent) => {
    setFirstNameValidity(false);
    setLastNameValidity(false);
    setEmailValidity(false);
    setPasswordValidity(false);

    setFirstNameValidity(!firstName);
    setLastNameValidity(!lastName);
    validateEmail();
    setPasswordValidity(!password);

    if(!isEmailInvalid && !isFirstNameInvalid && !isLastNameInvalid && !isPasswordInvalid){
      setSubmitButtonText('CLAIMING YOUR FREE TRIAL...');
      setSubmitButtonDisabled(true);
      setTimeout(() => {
        setSubmitButtonText('DONE');
        setTimeout(() => {
          setSubmitButtonDisabled(false);
          setSubmitButtonText('CLAIM YOUR FREE TRIAL');
        }, 1000)
      }, 2000)
    }

    event.preventDefault();
  }

  return (
    <div
      className="font-poppins min-h-screen pt-16 px-7 pb-5
       bg-intro-mobile bg-primary-red text-white
       md:p-0 md:flex md:flex-col md:content-center md:items-center
       md:bg-intro-desktop
       "
    >
      <div className="md:flex md:content-between md:items-center md:m-0 min-h-screen w-full md:w-2/3">
        <div className="md:w-1/2 mr-10">
          <h1 className="px-4 font-bold text-2xl md:text-5xl text-center md:text-left leading-7 py-5 md:px-0">
            Learn to code by watching others
          </h1>
          <p className="text-center md:text-left leading-6">
          See how experienced developers solve problems in real-time. 
          Watching scripted tutorials is great, but understanding how developers think is invaluable. 
          </p>
        </div>
        <div className="md:w-1/2">
          <a
            href="#!"
            className="bg-accent-blue w-full block
            rounded-lg text-center p-4 text-sm leading-6 mt-20 md:mt-0
            shadow-xl
            "
          >
            <span className="font-bold">Try it free 7 days &nbsp;</span> 
            then $20/mo. thereafter
          </a>
          <div className="w-full bg-white mt-5 py-4 pb-10 rounded-lg shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg flex flex-col items-center">
              <InputComp value={firstName} placeholder="First Name" handleChange={setFirstName}
              isInvalid={isFirstNameInvalid}
              errorMessage="First Name cannot be empty" />
              <InputComp value={lastName} placeholder="Last Name"
                isInvalid={isLastNameInvalid}
                errorMessage="Last Name cannot be empty"
               handleChange={setLastName}/>
              <InputComp value={email} type="email" placeholder="Email Address"
                isInvalid={isEmailInvalid}
                errorMessage="Looks like this is not an email"
                handleChange={setEmail} />
              <InputComp value={password} type="password" placeholder="Password" handleChange={setPassword}
              isInvalid={isPasswordInvalid} errorMessage="Password cannot be empty"
              />
              <button
                type="submit"
                disabled={isSubmitButtonDisabled}
                className="bg-primary-green w-4/5
                hover:bg-primary-light-green
                disabled:bg-primary-light-green
                mt-4 px-6 py-3 rounded-md font-semibold text-sm leading-6 tracking-tighter shadow-xl"
              >{submitButtonText}</button>
              <small
                className="text-neutral-grayish-blue text-center
                w-4/5 px-2 md:px-1 mt-3 block text-xs leading-5"
              >By clicking the button, you are agreeing to our 
                <a href="#!" className="font-bold text-primary-red">&nbsp;Terms and Services</a>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
