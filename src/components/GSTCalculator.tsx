"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, IndianRupee } from "lucide-react";

export default function GSTCalculator() {
  const [amount, setAmount] = useState<number>(10000);
  const [rate, setRate] = useState<number>(18);
  const [action, setAction] = useState<"add" | "remove">("add");

  const gstAmount =
    action === "add"
      ? (amount * rate) / 100
      : amount - amount * (100 / (100 + rate));

  const netAmount = action === "add" ? amount : amount - gstAmount;
  const totalAmount = action === "add" ? amount + gstAmount : amount;

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10"></div>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-100 text-emerald-600 rounded-xl">
          <Calculator className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Quick GST Calculator
        </h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Base Amount
          </label>
          <div className="relative">
            <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="number"
              value={amount || ""}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              GST Rate
            </label>
            <select
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {[5, 12, 18, 28].map((r) => (
                <option key={r} value={r}>
                  {r}% GST
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Action
            </label>
            <select
              value={action}
              onChange={(e) => setAction(e.target.value as "add" | "remove")}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option value="add">Add GST (+)</option>
              <option value="remove">Remove GST (-)</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 space-y-3">
          <div className="flex justify-between text-slate-600">
            <span>Net Amount</span>
            <span className="font-medium">₹{netAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>GST Amount ({rate}%)</span>
            <span className="font-medium text-red-500">
              ₹{gstAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-100">
            <span>Total Amount</span>
            <span className="text-emerald-600">₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
