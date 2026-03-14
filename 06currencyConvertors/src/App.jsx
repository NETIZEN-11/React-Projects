import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";

function App() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const [currencyCodes, setCurrencyCodes] = useState([]);
  const [rate, setRate] = useState(0);
  const [converted, setConverted] = useState("0.00");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Load currency codes once
  useEffect(() => {
    const loadCurrencyCodes = async () => {
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await res.json();
        if (data.result !== "success") throw new Error("API Error");

        const codes = Object.keys(data.rates).sort();
        setCurrencyCodes(codes);
      } catch (err) {
        setError("Currency list load nahi ho rahi. Internet / API issue.");
      }
    };

    loadCurrencyCodes();
  }, []);

  // ✅ Convert currency codes to react-select options
  const options = useMemo(() => {
    return currencyCodes.map((code) => ({
      value: code,
      label: code,
    }));
  }, [currencyCodes]);

  // ✅ Fetch rate when from/to changes
  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await res.json();
        if (data.result !== "success") throw new Error("API Error");

        const newRate = data.rates[to];
        if (!newRate) throw new Error("Rate not found");

        setRate(newRate);
      } catch (err) {
        setRate(0);
        setError("Rate fetch nahi ho rahi. Internet / API issue.");
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [from, to]);

  // ✅ Convert ONLY on button click
  const convertNow = () => {
    const numAmount = Number(amount);

    if (isNaN(numAmount) || numAmount <= 0) {
      setError("Valid amount enter karo");
      setConverted("0.00");
      return;
    }

    if (!rate) {
      setError("Rate available nahi hai");
      setConverted("0.00");
      return;
    }

    setError("");
    setConverted((numAmount * rate).toFixed(2));
  };

  // ✅ swap
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConverted("0.00");
  };

  // ✅ react-select styling (dark + fixed height + menu scroll)
  const selectStyles = {
    control: (base) => ({
      ...base,
      background: "rgba(0,0,0,0.25)",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: "12px",
      padding: "6px",
      cursor: "pointer",
      color: "white",
      boxShadow: "none",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
      fontWeight: "600",
    }),
    menu: (base) => ({
      ...base,
      background: "#0f172a",
      borderRadius: "12px",
      overflow: "hidden",
      zIndex: 9999,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px", // ✅ scroll height fix
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      background: state.isFocused ? "#1e40af" : "#0f172a",
      color: "white",
      cursor: "pointer",
      padding: "12px",
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(255,255,255,0.6)",
    }),
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Currency Converter</h2>

        {/* FROM */}
        <div style={styles.row}>
          <div style={styles.box}>
            <label style={styles.label}>From</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.box}>
            <label style={styles.label}>Currency Type</label>

            <Select
              options={options}
              value={{ value: from, label: from }}
              onChange={(opt) => setFrom(opt.value)}
              styles={selectStyles}
              isSearchable={true}
              menuPlacement="auto" // ✅ screen ke according
            />
          </div>
        </div>

        {/* SWAP */}
        <div style={styles.swapContainer}>
          <button onClick={swap} style={styles.swapBtn}>
            ↕ Swap
          </button>
        </div>

        {/* TO */}
        <div style={styles.row}>
          <div style={styles.box}>
            <label style={styles.label}>To</label>
            <input type="text" value={converted} disabled style={styles.input} />
          </div>

          <div style={styles.box}>
            <label style={styles.label}>Currency Type</label>

            <Select
              options={options}
              value={{ value: to, label: to }}
              onChange={(opt) => setTo(opt.value)}
              styles={selectStyles}
              isSearchable={true}
              menuPlacement="auto"
            />
          </div>
        </div>

        {/* INFO */}
        <div style={styles.info}>
          {loading ? (
            <p style={styles.infoText}>Fetching rate...</p>
          ) : error ? (
            <p style={{ ...styles.infoText, color: "#ffb4b4" }}>{error}</p>
          ) : (
            <p style={styles.infoText}>
              Rate: 1 {from} = {rate ? rate.toFixed(4) : "0.0000"} {to}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button style={styles.convertBtn} onClick={convertNow} disabled={loading}>
          {loading ? "Loading..." : `Convert ${from} → ${to}`}
        </button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background:
      "radial-gradient(circle at top, #2a2a72 0%, #0f0c29 60%, #000 100%)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "700px",
    padding: "34px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    backdropFilter: "blur(14px)",
  },

  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "30px",
    letterSpacing: "0.4px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "18px",
    marginBottom: "18px",
  },

  box: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color: "white",
  },

  label: {
    fontSize: "14px",
    opacity: 0.9,
    letterSpacing: "0.3px",
  },

  input: {
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    outline: "none",
    fontSize: "16px",
    color: "white",
    background: "rgba(0,0,0,0.25)",
  },

  swapContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "12px 0 12px",
  },

  swapBtn: {
    padding: "10px 26px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(90deg,#3b82f6,#1d4ed8)",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 12px 25px rgba(0,0,0,0.35)",
  },

  info: {
    marginTop: "12px",
    textAlign: "center",
  },

  infoText: {
    color: "white",
    opacity: 0.9,
    fontSize: "14px",
  },

  convertBtn: {
    width: "100%",
    padding: "18px",
    fontSize: "20px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "14px",
    background: "linear-gradient(90deg,#2563eb,#1e40af)",
    color: "white",
    marginTop: "18px",
    cursor: "pointer",
    boxShadow: "0 16px 35px rgba(0,0,0,0.4)",
  },
};
