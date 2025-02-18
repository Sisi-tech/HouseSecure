import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateQuote from "../policy/createQuote";
import BackToTop from "../shared/backToTop";
import Footer from "../shared/footer";

const Coverage = () => {
    const [coverageA, setCoverageA] = useState("");
    const [coverageB, setCoverageB] = useState("");
    const [coverageC, setCoverageC] = useState("");
    const [coverageD, setCoverageD] = useState("");
    const [coverageE, setCoverageE] = useState("");
    const [ded, setDed] = useState("");
    const [windDed, setWindDed] = useState("");
    const [catDed, setCatDed] = useState("");
    const [RCVonCoverageC, setRCVonCoverageC] = useState("");
    const [waterBackUp, setWaterBackUp] = useState("");
    const [equipment, setEquipment] = useState("");
    const [ordinance, setOrdinance] = useState("");
    const [inflationGuard, setInflationGuard] = useState("");
    const [burglarAlarm, setBurglarAlarm] = useState("");
    const [fireAlarm, setFireAlarm] = useState("");
    const [sprinkler, setSprinkler] = useState("");

    return (
        <div className="w-full h-auto flex flex-col relative">
            <CreateQuote />
            <BackToTop />
            <div className="w-full pb-8">
                <h3 className="text-md font-semibold text-center">Coverage</h3>
                <form className="w-full mx-auto max-w-screen-lg text-md space-y-5 p-4 text-black">
                    {/* first row */}
                    <div className="w-full mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
                        {/* coverages */}
                        <div className="flex flex-col bg-gray-100 gap-4 p-4">
                            <h3 className="text-md font-semibold">Coverages</h3>
                            <div className="flex flex-col p-4 gap-4">
                                <div className="flex justify-center items-center">
                                    <label htmlFor="coverageA" className="w-full">Coverage A - Dwelling:</label>
                                    <input
                                        id="coverageA"
                                        type="number"
                                        className="p-1 pl-2 border rounded-sm w-full"
                                        value={coverageA}
                                        onChange={(e) => setCoverageA(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="coverageB" className="w-full">Coverage B - Other structures:</label>
                                    <input
                                        id="coverageB"
                                        type="number"
                                        className="p-1 pl-2 border rounded-sm w-full"
                                        value={coverageB}
                                        onChange={(e) => setCoverageB(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="coverageC" className="w-full">Coverage C - Personal property:</label>
                                    <input
                                        id="coverageC"
                                        type="number"
                                        className="p-1 pl-2 border rounded-sm w-full"
                                        value={coverageC}
                                        onChange={(e) => setCoverageC(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="coverageD" className="w-full">Coverage D - Loss of use:</label>
                                    <input
                                        id="coverageD"
                                        type="number"
                                        className="p-1 pl-2 border rounded-sm w-full"
                                        value={coverageD}
                                        onChange={(e) => setCoverageD(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="coverageE" className="w-full">Coverage E - Personal liability:</label>
                                    <select
                                        id="coverageE"
                                        className="p-2 border rounded-sm w-full"
                                        value={coverageE}
                                        onChange={(e) => setCoverageE(e.target.value)}
                                    >
                                        <option value="" disabled>Required</option>
                                        <option value="1k">100,000</option>
                                        <option value="2k">200,000</option>
                                        <option value="3k">300,000</option>
                                        <option value="4k">400,000</option>
                                        <option value="5k">500,000</option>
                                        <option value="6k">600,000</option>
                                        <option value="7k">700,000</option>
                                        <option value="8k">800,000</option>
                                        <option value="9k">900,000</option>
                                        <option value="10k">1,000,000</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        {/* deductibles */}
                        <div className="flex flex-col bg-gray-100 gap-4 p-4">
                            <h3 className="text-md font-semibold">Deductible</h3>

                            <div className="w-full flex flex-col p-4 gap-4">
                                <div className="flex justify-center items-center">
                                    <label htmlFor="ded" className="w-full">AOP deductible:</label>
                                    <select
                                        id="ded"
                                        className="p-2 border rounded-sm w-full"
                                        value={ded}
                                        onChange={(e) => setDed(e.target.value)}
                                    >
                                        <option value="" disabled>Required</option>
                                        <option value="ded5">500</option>
                                        <option value="ded1k">1,000</option>
                                        <option value="ded2k">2,000</option>
                                        <option value="ded2.5">2,500</option>
                                        <option value="ded5k">5,000</option>
                                    </select>
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="windDed" className="w-full">Wind/Hall deductible:</label>
                                    <select
                                        id="windDed"
                                        className="p-2 border rounded-sm w-full"
                                        value={windDed}
                                        onChange={(e) => setWindDed(e.target.value)}
                                    >
                                        <option value="" disabled>Required</option>
                                        <option value="sameAsAOP">Same as All Perils</option>
                                        <option value="windDed2k">2,000</option>
                                        <option value="windDed5k">5,000</option>
                                    </select>
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="catDed" className="w-full">Catastrophe Windstorm deductible:</label>
                                    <select
                                        id="catDed"
                                        className="p-2 border rounded-sm w-full"
                                        value={catDed}
                                        onChange={(e) => setCatDed(e.target.value)}
                                    >
                                        <option value="" disabled>Required</option>
                                        <option value="1%">1%</option>
                                        <option value="2%">2%</option>
                                        <option value="3%">3%</option>
                                        <option value="5%">5%</option>
                                        <option value="10%">10%</option>
                                    </select>
                                </div>
                                <div className="flex justify-center items-center">
                                    <label htmlFor="catDed" className="w-full">Catastrophe Windstorm deductible:</label>
                                    <select
                                        id="catDed"
                                        className="p-2 border rounded-sm w-full"
                                        value={catDed}
                                        onChange={(e) => setCatDed(e.target.value)}
                                    >
                                        <option value="" disabled>Required</option>
                                        <option value="1%">1%</option>
                                        <option value="2%">2%</option>
                                        <option value="3%">3%</option>
                                        <option value="5%">5%</option>
                                        <option value="10%">10%</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* second row - optional coverages */}
                    <div className="w-full flex flex-col justify-center bg-gray-100 gap-4 p-4">
                        <h3 className="text-md font-semibold">Additional Coverages</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                            <div className="flex justify-center items-center">
                                <label htmlFor="inflationGuard" className="w-full">Inflation Guard:</label>
                                <select
                                    id="inflationGuard"
                                    className="p-2 border rounded-sm w-full"
                                    value={inflationGuard}
                                    onChange={(e) => setInflationGuard(e.target.value)}
                                >
                                    <option value="" disabled></option>
                                    <option value="inflation2%">2%</option>
                                    <option value="inflation4%">4%</option>
                                    <option value="inflation8%">8%</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="ordinance" className="w-full">Ordinance or Law:</label>
                                <select
                                    id="ordinance"
                                    className="p-2 border rounded-sm w-full"
                                    value={ordinance}
                                    onChange={(e) => setOrdinance(e.target.value)}
                                >
                                    <option value="" disabled></option>
                                    <option value="noOrdinance">No ordinance or law</option>
                                    <option value="4%ordinance">4%</option>
                                    <option value="8%ordinance">8%</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="RCVonCoverageC" className="w-full">RCV on Coverage C:</label>
                                <select
                                    id="RCVonCoverageC"
                                    className="p-2 border rounded-sm w-full"
                                    value={RCVonCoverageC}
                                    onChange={(e) => setRCVonCoverageC(e.target.value)}
                                >
                                    <option value="noRCVonCoverageC">No</option>
                                    <option value="RCVonCoverageC">Yes</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="waterBackUp" className="w-full">Water backup:</label>
                                <select
                                    id="waterBackUp"
                                    className="p-2 border rounded-sm w-full"
                                    value={waterBackUp}
                                    onChange={(e) => setWaterBackUp(e.target.value)}
                                >
                                    <option value="" disabled></option>
                                    <option value="5kWaterBackup">$5,000</option>
                                    <option value="10kWaterBackup">$10,000</option>
                                    <option value="15kWaterBackup">$15,000</option>
                                </select>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="equipment" className="w-full">Equipment breakdown:</label>
                                <select
                                    id="equipment"
                                    className="p-2 border rounded-sm w-full"
                                    value={equipment}
                                    onChange={(e) => setEquipment(e.target.value)}
                                >
                                    <option value="noEquipment">No</option>
                                    <option value="equipment">$5,000</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* alarms */}
                    <div className="w-full flex flex-col justify-center bg-gray-100 gap-4 p-4">
                        <h3 className="text-md font-semibold">Protection devices</h3>
                        <div className="w-full flex flex-col md:flex-row justify-between p-4 gap-4">
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="burglarAlarm" className="w-full">Burglar Alarm:</label>
                                <select
                                    id="burglarAlarm"
                                    className="p-2 border rounded-sm w-full"
                                    value={burglarAlarm}
                                    onChange={(e) => setBurglarAlarm(e.target.value)}
                                >
                                    <option value="noBurglar">No burglar alarm</option>
                                    <option value="localBurglar">Local burglar alarm</option>
                                    <option value="centralBurglar">Central burglar alarm</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="fireAlarm" className="w-full">Fire alarm:</label>
                                <select
                                    id="fireAlarm"
                                    className="p-2 border rounded-sm w-full"
                                    value={fireAlarm}
                                    onChange={(e) => setFireAlarm(e.target.value)}
                                >
                                    <option value="noFireAlarm">No fire alarm</option>
                                    <option value="localFireAlarm">Local fire alarm</option>
                                    <option value="centralFireAlarm">Central fire alarm</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-2">
                                <label htmlFor="sprinkler" className="w-full">Sprinkler system:</label>
                                <select
                                    id="sprinkler"
                                    className="p-2 border rounded-sm w-full"
                                    value={sprinkler}
                                    onChange={(e) => setSprinkler(e.target.value)}
                                >
                                    <option value="noSprinkler">no sprinkler system</option>
                                    <option value="sprinkler">With sprinkler system</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form >
                <div className="w-full flex justify-center gap-4 p-6  pt-16 text-white">
                    <Link to="/quote/history">
                        <button className="bg-sky-700 w-20 p-1 rounded-lg shadow-lg text-sm">
                            Previous
                        </button>
                    </Link>
                    <Link to="/quote/interest">
                        <button className="bg-sky-700 w-14 p-1 rounded-lg shadow-lg text-sm">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Coverage;