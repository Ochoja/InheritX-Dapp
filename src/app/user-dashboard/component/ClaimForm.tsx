"use client";
import React from 'react'
import { useState } from 'react';

interface ClaimFormProps {
  onClaimSubmit: (claimCode: string) => void;
}



const ClaimForm: React.FC<ClaimFormProps> = ({ onClaimSubmit }) => {
  const [claimCode, setClaimCode] = useState("");

  const handleClaimSubmit = () => {
    if (claimCode.trim() === "") return;
    onClaimSubmit(claimCode); 
    setClaimCode("")
  };

  return (
  
    <div className= "text-white mt-14">
      <h2 className="text-2xl font-semibold pb-2">Claim Inheritance</h2>
      <p className="text-sm mb-7">
        Enter your claim code to securely access and transfer your inherited digital assets
      </p>
      <div className='w-10/12 md:w-4/12'>
      <p className='mb-2'>Claim Code</p>
      <input
        placeholder="Enter Claim Code"
        value={claimCode}
        onChange={(e) => setClaimCode(e.target.value)}
        className="mb-4 py-3 px-3 rounded-lg w-full bg-[#413F54] border border-white  text-white "
      />
      <button onClick={handleClaimSubmit} className="w-full bg-[#100030] hover:bg-[#413F54] py-3 rounded-3xl border border-white ">
        Claim Now
      </button>
      </div>

    </div>
 
  );
};

export default ClaimForm;


