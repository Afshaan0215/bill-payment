import React from "react";
import "./style.css";

function Bill() {

    return (
        <div className="bgLight">
            <div className=" border bill rounded d-flex justify-content-between py-3 w-100%">
                <h2 className="text-start ps-3">Bill Payments</h2>
                <button className="addbiller px-3 me-3">Add Biller</button>
            </div>
            <div className="text-start d-flex flex-wrap pt-4 border-bottom">
                <p className="pe-3 bank">Bank Contacts</p>
                <p>UPI Contacts</p>
            </div>
            <div className="pt-5 d-flex flex-wrap justify-content-around">
                <div className="card cards rounded pb-3">
                    <p className="icon p-3"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                    <h5 className="pb-2">dummy</h5>
                    <p>Bank : State Bank of India</p>
                    <p>A/C : 33333333232</p>
                    <p>Mobile Number : 9999222299</p>
                    <div className="button d-flex justify-content-evenly">
                        <div><button className="border border-1 btn px-3 transfer"><i class="fa fa-paper-plane pe-2" aria-hidden="true"></i>Transfer</button></div>
                        <div><button className="border border-1 btn px-3 details"><i class="fa fa-table pe-2" aria-hidden="true"></i>Details</button></div>
                    </div>    
                </div>
                <div className="card cards rounded  pb-3">
                    <p className="icon p-3"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                    <h5 className="pb-2">Mr KOMMANA BALA NA</h5>
                    <p>Bank : State Bank of India</p>
                    <p>A/C : 30406032712</p>
                    <p>Mobile Number : 9912531599</p>
                    <div className="button d-flex justify-content-evenly">
                        <div><button className="border border-1 btn px-3 transfer"><i class="fa fa-paper-plane pe-2" aria-hidden="true"></i>Transfer</button></div>
                        <div><button className="border border-1 btn px-3 details"><i class="fa fa-table pe-2" aria-hidden="true"></i>Details</button></div>
                    </div>
                </div>
                <div className="card cards rounded pb-3">
                    <p className="icon p-3"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></p>
                    <h5 className="pb-2">My sbi </h5>
                    <p>Bank : State Bank of India</p>
                    <p>A/C : 33037510255</p>
                    <p>Mobile Number : 9951037391</p>
                    <div className="button d-flex justify-content-evenly">
                        <div><button className="border border-1 btn px-3 transfer"><i class="fa fa-paper-plane pe-2" aria-hidden="true"></i>Transfer</button></div>
                        <div><button className="border border-1 btn px-3 details"><i class="fa fa-table pe-2" aria-hidden="true"></i>Details</button></div>
                    </div>
                </div>
            </div>
        </div>      
    )  
}

export default Bill;