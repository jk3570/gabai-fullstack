import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

import Popup from "reactjs-popup";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Signup = () => {

  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [sex, setSex] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [region, setRegion] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Perform password verification here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await signup(username,
      firstname,
      lastname,
      sex,
      birthdate,
      region,
      city,
      email,
      password)
  }

  return (
    <Popup
      trigger={
        <a href="#" className="text-azure">
          Sign up here
        </a>
      }
      modal
      nested
    >
      {(close) => (
        <form className="signup" onSubmit={handleSubmit}>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ">
            <div className="modal h-[35rem] w-[31.25rem] rounded-2xl bg-white flex flex-col mx-10 overflow-y-auto">
              {/* Close btn */}

              <div className="flex flex-row align-center justify-end p-1">
                <IoIosCloseCircleOutline
                  className="text-3xl cursor-pointer"
                  onClick={() => close()}
                />
              </div>

              {/* Sign up form 1*/}

              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl">
                  Sign Up to <span className="text-azure">GabAi</span>
                </h1>
                <p>Register now for a richer, more empowered journey!</p>
              </div>

              <div className="flex flex-col px-5 py-5">
                {/* Username*/}

                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  placeholder="juandelacruz123"
                  onChange={(e) => setUsername(e.target.value)} 
                  value={username} 
                  className="w-[auto] border-2 border-black rounded-xl p-2"
                />

                {/* Two-column */}

                <div className="grid grid-cols-2 items-center justify-between py-1">
                  {/* First Name */}

                  <div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      placeholder="Juan"
                      onChange={(e) => setFirstname(e.target.value)} 
                      value={firstname} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    />
                  </div>

                  {/* Last Name */}

                  <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      placeholder="Dela Cruz"
                      onChange={(e) => setLastname(e.target.value)} 
                      value={lastname} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    />
                  </div>

                  {/* Sex */}
                  <div className="flex flex-col">
                    <label htmlFor="sex">Sex</label>
                    <select
                      name="sex"
                      id="sex"
                      onChange={(e) => setSex(e.target.value)} 
                      value={sex} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    >
                      <option value=""> -Choose one- </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  {/* Birtdate */}

                  <div>
                    <label htmlFor="birthdate">Birthdate</label>
                    <input
                      type="date"
                      placeholder="mm/dd/yyyy"
                      onChange={(e) => setBirthdate(e.target.value)} 
                      value={birthdate} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    ></input>
                  </div>

                  {/* Province */}

                  <div>
                    <label htmlFor="region">Region</label>
                    <select
                      name="region"
                      id="region"
                      onChange={(e) => setRegion(e.target.value)} 
                      value={region} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    >
                      <option value=""> -Region- </option>
                      <option value="NCR">National Capital Region (NCR)</option>
                      <option value="CAR">
                        Cordillera Administrative Region (CAR)
                      </option>
                      <option value="Region 1">Ilocos Region (Region 1)</option>
                      <option value="Region 2">Cagayan Valley (Region 2)</option>
                      <option value="Region 3">Central Luzon (Region 3)</option>
                      <option value="Region 4A">CALABARZON (Region 4A)</option>
                      <option value="Region 4B">MIMAROPA (Region 4B)</option>
                      <option value="Region 5">Bicol Region (Region 5)</option>
                      <option value="Region 6">Western Visayas (Region 6)</option>
                      <option value="Region 7">Central Visayas (Region 7)</option>
                      <option value="Region 8">Eastern Visayas (Region 8)</option>
                      <option value="Region 9">
                        Zamboanga Peninsula (Region 9)
                      </option>
                      <option value="Region 10">
                        Northern Mindanao (Region 10)
                      </option>
                      <option value="Region 11">Davao Region (Region 11)</option>
                      <option value="Region 12">SOCCSKSARGEN (Region 12)</option>
                      <option value="CARAGA">Caraga (Region 13)</option>
                      <option value="BARMM">
                        Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)
                      </option>
                    </select>
                  </div>

                  {/* City */}

                  <div className="flex flex-col">
                    <label htmlFor="city">City</label>
                    <select
                      name="city"
                      id="city"
                      onChange={(e) => setCity(e.target.value)} 
                      value={city} 
                      className="w-[12rem] border-2 border-black rounded-xl p-2"
                    >
                      <option value=""> -Choose your city- </option>
                      <option value="Caloocan North City"> -Caloocan North City- </option>
                      <option value="Caloocan South Cit"> -Caloocan South City- </option>
                      <option value="Las Piñas City"> -Las Piñas City- </option>
                      <option value="Makati City"> -Makati City- </option>
                      <option value="Malabon City"> -Malabon City- </option>
                      <option value="Mandaluyong City"> -Mandaluyong City- </option>
                      <option value="Manila City"> -Manila City- </option>
                      <option value="Marikina City"> -Marikina City- </option>
                      <option value="Muntinlupa City"> -Muntinlupa City- </option>
                      <option value="Navotas City"> -Navotas City- </option>
                      <option value="Parañaque City"> -Parañaque City- </option>
                      <option value="Pasay City"> -Pasay City- </option>
                      <option value="Pasig City"> -Pasig City- </option>
                      <option value="Quezon City"> -Quezon City- </option>
                      <option value="San Juan City"> -San Juan City- </option>
                    </select>
                  </div>
                </div>

                {/* Back to one column  */}

                <span className="py-2"></span>

                {/* Mobile # */}

                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="juandelacruz@domain.com"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                    className="w-[full] border-2 border-black rounded-xl p-2"
                  />
                </div>

                {/* Password */}

                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    placeholder="●●●●●●●●"
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                    className="w-[full] border-2 border-black rounded-xl p-2"
                  />
                </div>
                {/* Confirm Password */}

                <div className="flex flex-col">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="●●●●●●●●"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    className="w-[full] border-2 border-black rounded-xl p-2"
                  />
                </div>

                {/* They accept the terms by clicking the checkbox */}
                <span className="py-2"></span>

                <div>
                  <center>
                    <input type="checkbox" id="terms" name="terms" />
                    <span className="ml-2">
                      I accept the <a href="#">terms and conditions</a>
                    </span>
                  </center>
                </div>

                {/* Sign Up now button */}

                <span className="py-2"></span>

                <div>
                  <button className="w-full bg-azure-500 text-white font-bold rounded-xl p-2" disabled={isLoading}>
                    Sign Up Now!
                  </button>
                  {error && <div className="error">{error}</div>}
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Popup>
  )
}
export default Signup