import  { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import { doctors } from "../assets/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterdoc, setfilterdoc] = useState([]);
  const [showFilter, setshowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctors } = useContext(AppContext);

const applyFilter = () => {
  if (speciality) {
    const normalized = speciality.trim().toLowerCase();

    

    const filtered = doctors.filter((doc) =>
      doc.speciality.trim().toLowerCase() === normalized
    );


    setfilterdoc(filtered);
  } else {
    setfilterdoc(doctors);
  }
};


  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="to-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? "bg-[#5f6FFF] text-white" :""}`} onClick={()=>setshowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}>
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterologist</p>
        </div>
<div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 px-2">
          {filterdoc.map((itme, index) => (
            <div
             onClick={() => navigate(`/appointment/${itme._id}`)}

              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={itme.image} alt="" />
              <div className="p-4">
               <div className={`flex items-center gap-2 text-sm text-center ${itme.available ? 'text-green-500' : 'text-red-500'}`}>
                        <p className={`w-2 h-2 ${itme.available ? 'bg-green-500': 'bg-red-500'} rounded-full`}></p><p>{itme.available ? 'Available' : 'Not available'}</p>
                    </div>
                <p className="text-gray-900 text-lg font-medium">{itme.name}</p>
                <p className="text-gray-600 text-sm">{itme.speciality}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Doctors;
