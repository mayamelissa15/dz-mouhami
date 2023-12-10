import Navbar from "./Navbar";
import Footer from "./Footer";
import validation from "./Assets/person_check.png"
import { Link } from 'react-router-dom';
const LawyerForm = () => {
    return (  <div>
        <Navbar></Navbar>
        <div className="flex justify-center gap-2">
         
         <button className="w-32  py-3 text-[#094B72] text-normal font-medium  rounded-full border-2 border-[#094B72]  bg-[#FFC12CAD] hover:shadow-md border-[#FFC12CAD] hover:duration-500">
           <p className="font-medium text-xs">First step</p>
           <p className="font-normal text-sm">Fill information form</p>
          </button>
          <p className="font-medium text-2xl text-[#094B72] mx-2 my-8">►</p>
          <Link to="/LawyerRegistrationStep2">
          <button className="w-32 py-7 text-[#094B72] text-normal font-medium  rounded-full border-2 border-[#094B72] hover:bg-[#FFC12CAD] hover:border-[#FFC12CAD] duration-500">
           <p className="font-medium text-xs">Second step</p>
           <p className="font-normal text-sm">Upload files</p>
          </button>
          </Link>
        </div>
        <div className="mt-8  text-center ">
          <h1 className="text-[#0F3146] text-5xl font-semibold">
           Lawyer Registration
          </h1>
          <p className="p-4 text-[#496C80] text-md text-center ">
          Welcome, legal professional! We're excited to have you join our community. Please provide the following information to create your lawyer profile.
          </p>
        </div>
  
        <form>
          <div className="grid grid-cols-2 gap-6 my-8 mx-64">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Name
              </label>
              <input 
                type="text"
                id="name"
                name="name"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="John"
              />
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Surname
              </label>
              <input 
                type="text"
                id="surname"
                name="surname"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="Doe"
              />
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Email
              </label>
              <input 
                type="email"
                id="email"
                name="email"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 border border-gray-300 w-96"
                placeholder="Johndoe@gmail.com"
              />
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Contact Number
              </label>
              <input 
                type="tel"
                id="contact"
                name="contact"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="555-222-111"
              />
            </div>
         <div class="mb-4">
          <label for="Specification" class="block text-sm font-medium text-[#103F5BE5]">Legal Specification</label>
          <div class="">
            <select id="Specification" name="Specification" autocomplete="Specification-name" className="mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96  ring-inset ring-slate-50 focus:ring-0 focus:ring-inset focus:ring-slate-600">
              <option>Agression</option>
              <option>Crime</option>
              <option>Robbing</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
              <label
                htmlFor="Lawfirm"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Lawfirm
              </label>
              <input 
                type="text"
                id="Lawfirm"
                name="Lawfirm"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder=".."
              />
            </div>
            </div>
  
          <div className="flex justify-end m-4">
            <button className="mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
              <img src={validation} alt="Validation" />
              Continue 
            </button>
          </div>
        </form>
        
      
        <Footer></Footer>
      </div> );
}
 
export default LawyerForm;