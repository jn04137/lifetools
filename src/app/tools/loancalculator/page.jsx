"use client"

import { useState, useEffect } from 'react'


function calculateMonthsLeft(loan, interest, payment) {
  let temp = Number(loan)
  let count = 0
  while(temp > 0) {
    temp = temp + (temp * (interest/100.0)/12) - payment
    count++

    if(count > 20000) break;
  }

  return count
}

export default function LoanCalculator() {
  const [ loan, setLoan ] = useState(Number(15000))
  const [ interest, setInterest ] = useState(Number(4))
  const [ payment, setPayment ] = useState(Number(500))
  const [ result, setResult ] = useState(calculateMonthsLeft(loan,interest,payment))

  function handleLoanSubmit(event) {
    event.preventDefault()

    setResult(calculateMonthsLeft(loan, interest, payment))
  }

  return(
    <div className="flex justify-center">
      <div>
        <form
          onSubmit={handleLoanSubmit}
          className="border px-8 py-3 rounded-xl w-[500px] space-y-4 shadow"
        >
          <h1 className="text-4xl">Calculate Time till Loan Payoff</h1>
          <div className="flex flex-col">
            <label>Loan Amount</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              placeholder="Enter value..."
              onChange={e => setLoan(parseFloat(e.target.value))}
              value={loan}
            />
          </div>
          <div className="flex flex-col">
            <label>Annual Interest Rate</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              placeholder="Enter value..."
              onChange={e => setInterest(parseFloat(e.target.value))}
              value={interest}
            />
          </div>
          <div className="flex flex-col">
            <label>Payment per Month</label>
            <input
              type="number"
              className="shadow border rounded-lg px-2 py-1.5"
              placeholder="Enter value..."
              onChange={e => setPayment(parseFloat(e.target.value))}
              value={payment}
            />
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-1.5 bg-indigo-600 rounded-lg text-white">Calculate</button>
          </div>
        </form>
        <div className="flex justify-center border shadow rounded-xl py-2 mt-4">
          <h1 className="text-2xl">
            Time in Months: <span className="font-bold">{result}</span><br/>
          </h1>
        </div>
        <div className="flex justify-center border shadow rounded-xl py-2 mt-4">
          <h1 className="text-2xl">
            Time in Years: <span className="font-bold">{(result/12).toFixed(2)}</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
