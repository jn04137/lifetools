"use client"

import { useState } from 'react';

export default function CompoundInterest() {
  const [principle, setPrinciple] = useState(10000)
  const [interest, setInterest] = useState(5)
  const [frequency, setFrequency] = useState(12)
  const [years, setYears] = useState(5)
  const [contributions, setContributions] = useState(500)
  const [result, setResult] = useState(compoundInterest(principle, interest, frequency, years, contributions))

  function handleCompoundSubmit(event){
    event.preventDefault();

    setResult(compoundInterest(principle, interest, frequency, years, contributions))
  }

  function compoundInterest(principle, interest, freq, years, contributions) {
    // This is with the formula
    //return principle * Math.pow((1 + (interest*0.01)/freq), freq * years)

    let total = principle

    for(let i = 0; i < years; i++) {
      for(let j = 0; j < freq; j++) {
        total = total + (total * (interest/100.0)/freq) + parseFloat(contributions)  + (parseFloat(contributions) * (interest/100.0)/freq)
      }
    } 
    return total
  }

  return(
    <div className="flex justify-center">
      <div>
        <form
          onSubmit={handleCompoundSubmit}
          className="border px-8 py-3 rounded-xl w-[500px] space-y-4 shadow"
        >
          <h1 className="text-4xl">Calculate Compound Interest</h1>
          <div className="flex flex-col">
            <label>Principle</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              onChange={e => setPrinciple(parseFloat(e.target.value))}
              value={principle}
            />
          </div>
          <div className="flex flex-col">
            <label>Annual Interest Rate</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              onChange={e => setInterest(parseFloat(e.target.value))}
              value={interest}
            />
          </div>
          <div className="flex flex-col">
            <label>Contributions</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              onChange={e => setContributions(parseFloat(e.target.value))}
              value={contributions}
            />
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-col w-full">
              <label>Frequency</label>
              <input
                type="number"
                className="shadow border rounded-lg px-2 py-1.5"
                onChange={e => setFrequency(parseFloat(e.target.value))}
                value={frequency}
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Time (Years)</label>
              <input
                type="number"
                className="shadow border rounded-lg px-2 py-1.5"
                onChange={e => setYears(parseFloat(e.target.value))}
                value={years}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-1.5 bg-indigo-600 rounded-lg text-white">Calculate</button>
          </div>
        </form>
        <div className="flex justify-center border shadow rounded-xl py-2 mt-4">
          <h1 className="text-2xl">
            Result: <span className="font-bold">{result.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
