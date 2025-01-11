"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRakshakContext } from "@/contexts/RakshakContext";
import { IndianRupee, Settings } from 'lucide-react'
import Link from 'next/link'
import LiveTrackerCompoent from '@/components/liveTrackerCompoent'

const NavbarComponent = () => {
    const { connectWallet, account } = useRakshakContext();

    const formatAddress = (address) => {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <div className="w-full p-4 bg-secondary flex items-center justify-between">
            <div>Brand/Logo</div>

            <div className="flex items-center space-x-4">
                {/* <Button variant={'outline'} className="m-2 w-48 hover:w-1/3 transition-all duration-1000 "><IndianRupee />Account :<span className='text-ellipsis hover:w-full transition-all duration-1000 overflow-hidden hover:overflow-visible'>{account}</span></Button> */}
                <Link href={'/settings'} className='mr-4'>
                    <Button><Settings /> Settings</Button>
                </Link>
                <LiveTrackerCompoent />
                {account ? (
                    <span
                        className="text-sm bg-primary  text-white px-2 py-1 rounded-md max-w-[120px] truncate text-ellipsis"
                        title={account}
                    >
                        {formatAddress(account)}
                    </span>
                ) : (
                    <Button onClick={connectWallet}>Connect to Wallet</Button>
                )}
            </div>
        </div>
    );
};

export default NavbarComponent;
