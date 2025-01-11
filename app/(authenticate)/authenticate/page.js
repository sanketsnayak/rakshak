"use client"
import GenerateIdentificationCard from '@/components/generateIdentificationCard'
import { MultiStepLoaderDemo } from '@/components/Loader'
import LoginComponent from '@/components/loginComponent'
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRakshakContext } from '@/contexts/RakshakContext'

const AuthenticatePage = () => {
  const { account } = useRakshakContext();
  const [rakshakToken, setRakshakToken] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      if (!account) {
        setError("Account is not connected. Please connect your wallet.");
        return;
      }
      setLoading(true);
      setError("");

      try {
        console.log("Account:", account);
        const response = await axios.post("/api/card-details", { account });
        if (response.status === 200) {
          console.log("Response:", response.data);
          setRakshakToken(response.data.data.rakshak_token);
          setId(response.data.data.id);
        } else {
          setError("Failed to fetch card details.");
        }
      } catch (error) {
        console.log("Error in fetching card details:", error);
        setError("An error occurred while fetching card details.");
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [account]);

  return (
    <div className="flex justify-center items-center bg-gray-100">
        <div>
          <h2 className="text-lg font-medium mb-4 bg-primary p-4 rounded-md text-secondary text-center">
            Login to Rakshak
          </h2>
          <div>
            <MultiStepLoaderDemo />
            <LoginComponent />
          </div>
        </div>
    </div>
  );
};

export default AuthenticatePage;
