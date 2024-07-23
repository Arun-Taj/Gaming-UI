import React from "react";

const RegisterPage = () => {
    // const inputs=[
    //     {   id:1,
    //         name:'NAME',
            
    //     },
    //     {   id:2,
    //         name:'EMAIL',
            
    //     },
    //     {   id:3,
    //         name:'USERNAME',
            
    //     }
    // ]
  return (
    <div className="flex flex-row space-x-6 mt-10 justify-center">
      <div className=" ">
        <img src="src/assets/clashOfClans.jpeg" className="min-h-full  rounded-lg " alt="" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl pb-4">CRATE AN ACCOUNT</h1>
        <div className="space-x-3 pb-4">
          <button className="bg-slate-950 text-white rounded-3xl  px-4 py-2">
            SIGN UP WITH GOOGLE{" "}
          </button>
          <button className="bg-gray-600 text-white rounded-3xl px-4 py-2">
            WITH FACEBOOK
          </button>
        </div>
        <div className="">
          <ul>
            {/* {inputs.map(({id,name})=>(<li key={id}>{name}</li>))} */}
            <li className="flex flex-col p-2">
                <label htmlFor="" className="">NAME</label>
                <input type="text" className="bg-slate-300 p-2 rounded-lg"/>
            </li>
            <li className="flex flex-col p-2">
                <label htmlFor="">EMAIL or PHONE</label>
                <input type="text" className="bg-slate-300 p-2 rounded-lg"/>
            </li>
            <li className="flex flex-col p-2">
                <label htmlFor="">USERNAME</label>
                <input type="text" className="bg-slate-300 p-2 rounded-lg"/>
            </li>
            <li className="flex flex-col p-2">
                <label htmlFor="">PASSWORD</label>
                <input type="text" className="bg-slate-300 p-2 rounded-lg"/>
            </li>
          </ul>
          <div className="flex items-center pt-8 space-x-2">
            <input type="checkbox" />
            <p>accept terms and conditions</p>
          </div>
          <div>
            <button className="bg-black text-white px-8 py-2 rounded-3xl">signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
