import { useState } from 'react';
import {
  Calculator,
  IndianRupee,
  Coins,
  ShieldCheck,
  Wallet,
  ArrowRight,
  TrendingDown,
  Info
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    income: 0,
    regime: 'old',
    deductions: {
      section80C: 0,
      section80D: 0,
      hra: 0
    }
  });
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const InputGroup = ({ label, icon: Icon, value, onChange, hint, color, testId }: any) => (
    <div className="relative group">
      <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${color}`}>{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className={`h-5 w-5 transition-colors duration-300 ${value ? color : 'text-gray-400'}`} />
        </div>
        <input
          type="number"
          data-testid={testId}
          className="block w-full pl-10 pr-3 py-3 border-2 border-transparent bg-white/50 backdrop-blur-sm rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-4 focus:ring-purple-500/20 transition-all font-bold shadow-sm hover:shadow-md"
          value={value || ''}
          onChange={onChange}
          placeholder="0"
        />
      </div>
      {hint && <p className="mt-1 text-xs font-medium text-gray-500/80">{hint}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-indigo-200 font-sans selection:bg-fuchsia-300 selection:text-fuchsia-900">

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-white/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-fuchsia-600 to-purple-600 p-2.5 rounded-2xl text-white shadow-lg shadow-purple-500/30 transform rotate-3 hover:rotate-0 transition-transform">
              <Calculator size={24} strokeWidth={2.5} />
            </div>
            <span className="font-black text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600">
              Tax<span className="text-slate-800">Karma</span>
            </span>
          </div>
          <div className="text-xs font-bold text-white bg-gradient-to-r from-fuchsia-500 to-purple-600 px-4 py-1.5 rounded-full shadow-md shadow-purple-200 ring-2 ring-white">
            FY 2024-25
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Input Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-1">
              <div className="p-8">

                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                    <IndianRupee size={24} strokeWidth={3} />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-800">Income Details</h2>
                    <p className="text-sm font-medium text-slate-500">Let's start with your earnings</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <InputGroup
                    label="Annual Salary"
                    icon={Wallet}
                    value={formData.income}
                    color="text-orange-500"
                    testId="income-input"
                    onChange={(e: any) => setFormData({ ...formData, income: Number(e.target.value) })}
                  />

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Select Regime</label>
                    <div className="grid grid-cols-2 gap-3 bg-slate-100/50 p-1.5 rounded-2xl">
                      <button
                        data-testid="regime-old"
                        onClick={() => setFormData({ ...formData, regime: 'old' })}
                        className={`py-3 text-sm font-bold rounded-xl transition-all duration-300 ${formData.regime === 'old' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-gray-500 hover:bg-white/50'}`}
                      >
                        Old Regime
                      </button>
                      <button
                        data-testid="regime-new"
                        onClick={() => setFormData({ ...formData, regime: 'new' })}
                        className={`py-3 text-sm font-bold rounded-xl transition-all duration-300 ${formData.regime === 'new' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30' : 'text-gray-500 hover:bg-white/50'}`}
                      >
                        New Regime
                      </button>
                    </div>
                  </div>
                </div>

                {formData.regime === 'old' && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-4 pt-8 border-t border-dashed border-gray-200/50">
                      <div className="h-12 w-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 shadow-sm">
                        <ShieldCheck size={24} strokeWidth={3} />
                      </div>
                      <div>
                        <h2 className="text-xl font-black text-slate-800">Tax Savers</h2>
                        <p className="text-sm font-medium text-slate-500">Maximise your deductions</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 rounded-3xl border border-white shadow-inner">
                      <InputGroup
                        label="Section 80C"
                        icon={Coins}
                        value={formData.deductions.section80C}
                        color="text-rose-500"
                        testId="80c-input"
                        onChange={(e: any) => setFormData({ ...formData, deductions: { ...formData.deductions, section80C: Number(e.target.value) } })}
                        hint="Investments (PPF, LIC)"
                      />
                      <InputGroup
                        label="Medical (80D)"
                        icon={TrendingDown}
                        value={formData.deductions.section80D}
                        color="text-emerald-500"
                        testId="80d-input"
                        onChange={(e: any) => setFormData({ ...formData, deductions: { ...formData.deductions, section80D: Number(e.target.value) } })}
                        hint="Health Insurance"
                      />
                      <InputGroup
                        label="HRA Exemption"
                        icon={Wallet}
                        value={formData.deductions.hra}
                        color="text-blue-500"
                        testId="hra-input"
                        onChange={(e: any) => setFormData({ ...formData, deductions: { ...formData.deductions, hra: Number(e.target.value) } })}
                      />
                    </div>
                  </div>
                )}

                <div className="mt-10">
                  <button
                    data-testid="calculate-btn"
                    onClick={calculate}
                    disabled={loading}
                    className="group relative w-full overflow-hidden rounded-2xl bg-slate-900 py-5 transition-all active:scale-[0.99]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-90"></div>
                    <div className="relative flex items-center justify-center gap-2 text-white font-bold text-lg">
                      {loading ? (
                        <span className="animate-spin text-2xl">⚡</span>
                      ) : (
                        <>
                          <span>Calculate My Tax</span>
                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-5">
            {!result ? (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center justify-center min-h-[500px] border border-slate-700/50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-fuchsia-500 rounded-full blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative z-10 bg-white/10 p-6 rounded-full backdrop-blur-md mb-8 ring-1 ring-white/20 shadow-xl">
                  <Calculator size={48} className="text-fuchsia-300" />
                </div>
                <h3 className="relative z-10 text-3xl font-black mb-3">Ready to Crunch?</h3>
                <p className="relative z-10 text-slate-300 max-w-xs mx-auto leading-relaxed">
                  Enter your financial details to get a precise, pixel-perfect tax breakdown.
                </p>
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden relative animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* Result Header */}
                <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500 rounded-full blur-[80px] opacity-20"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[80px] opacity-20"></div>

                  <div className="relative z-10">
                    <p className="text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-2">Final Tax Liability</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black tracking-tighter" data-testid="total-tax">₹{result.totalTax.toLocaleString()}</span>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                        <p className="text-slate-300 text-xs font-medium mb-1">Total Savings</p>
                        <p className="font-bold text-lg text-emerald-300">₹{result.totalDeductions.toLocaleString()}</p>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                        <p className="text-slate-300 text-xs font-medium mb-1">Taxable Income</p>
                        <p className="font-bold text-lg" data-testid="taxable-income">₹{result.taxableIncome.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
                      <Info size={18} />
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg">Calculation Logic</h4>
                  </div>

                  <div className="space-y-3">
                    {result.breakdown.map((item: any, i: number) => (
                      <div key={i} className="flex justify-between items-center text-sm p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all group">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-700 group-hover:text-indigo-700 transition-colors">{item.range}</span>
                          <span className="text-xs text-slate-400 font-medium">Tax Rate: {item.rate}</span>
                        </div>
                        <span className="font-black text-slate-700 bg-slate-50 px-3 py-1 rounded-full">₹{item.amount.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-500">Effective Rate</span>
                    <span className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
                      {((result.totalTax / result.grossIncome) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}

export default App;
