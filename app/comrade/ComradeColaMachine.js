"use client";
import React, { useState } from 'react';

const ComradeColaMachine = () => {
  const STATES = {
    EMPTY: 'EMPTY',
    NO_CREDIT: 'NO_CREDIT',
    HAS_CREDIT: 'HAS_CREDIT',
    SOLD: 'SOLD'
  };

  const [inventory, setInventory] = useState(5);
  const [state, setState] = useState(STATES.NO_CREDIT);
  const [messages, setMessages] = useState(['Comrade Cola Machine initialized with 5 colas!']);
  const [animating, setAnimating] = useState(false);

  const addMessage = (msg) => {
    setMessages(prev => [...prev, msg]);
  };

  const insertCredit = () => {
    switch (state) {
      case STATES.HAS_CREDIT:
        addMessage("❌ You can't insert any more credits at this time.");
        break;
      case STATES.NO_CREDIT:
        setState(STATES.HAS_CREDIT);
        addMessage("✅ Your credit has been accepted.");
        break;
      case STATES.EMPTY:
        addMessage("❌ You can't insert credits because this machine is out of Comrade Cola.");
        break;
      case STATES.SOLD:
        addMessage("⏳ Please wait. Your cold, refreshing Comrade Cola is being dispensed.");
        break;
      default:
        addMessage("⚠️ Whoa there comrade! We need to raise some sort of error.");
    }
  };

  const returnCredit = () => {
    switch (state) {
      case STATES.HAS_CREDIT:
        addMessage("💰 Your credit is being returned.");
        setState(STATES.NO_CREDIT);
        break;
      case STATES.NO_CREDIT:
        addMessage("❌ You haven't inserted any credits.");
        break;
      case STATES.EMPTY:
        addMessage("❌ There are no credits to return because sold out machines don't accept credits.");
        break;
      case STATES.SOLD:
        addMessage("❌ Sorry Comrade. You already bought a cold, refreshing Comrade Cola!");
        break;
      default:
        addMessage("⚠️ Whoa there comrade! We need to raise some sort of error.");
    }
  };

  const customerChoice = () => {
    switch (state) {
      case STATES.HAS_CREDIT:
        addMessage("🎯 You've made your choice...");
        setState(STATES.SOLD);
        dispense();
        break;
      case STATES.NO_CREDIT:
        addMessage("❌ You've made a choice, but haven't inserted any credits.");
        break;
      case STATES.EMPTY:
        addMessage("❌ You've made a choice, but we are sold out of Comrade Cola.");
        break;
      case STATES.SOLD:
        addMessage("❌ Sorry Comrade. You only get one cold, refreshing Comrade Cola per credit!");
        break;
      default:
        addMessage("⚠️ Whoa there comrade! We need to raise some sort of error.");
    }
  };

  const dispense = () => {
    setAnimating(true);
    setTimeout(() => {
      switch (state) {
        case STATES.SOLD:
          addMessage("🥤 Congrats Comrade! Enjoy your cold, refreshing Comrade Cola!");
          const newInventory = inventory - 1;
          setInventory(newInventory);
          
          if (newInventory === 0) {
            addMessage("🚫 The machine is out of Comrade Cola!");
            setState(STATES.EMPTY);
          } else {
            setState(STATES.NO_CREDIT);
          }
          break;
        default:
          // This shouldn't happen in normal flow
          break;
      }
      setAnimating(false);
    }, 1000);
  };

  const refill = () => {
    setInventory(5);
    setState(STATES.NO_CREDIT);
    addMessage("🔄 Machine has been refilled with 5 Comrade Colas!");
  };

  const clearLog = () => {
    setMessages([]);
  };

  const getStateDisplay = () => {
    switch (state) {
      case STATES.EMPTY:
        return "🚫 SOLD OUT";
      case STATES.NO_CREDIT:
        return "💵 WAITING FOR CREDIT";
      case STATES.HAS_CREDIT:
        return "✅ CREDIT ACCEPTED";
      case STATES.SOLD:
        return "⏳ DISPENSING...";
      default:
        return "❓ UNKNOWN";
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '2rem',
      fontFamily: 'monospace'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            background: 'linear-gradient(135deg, #ff0080, #7928ca)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Comrade Cola Machine
          </h1>
          <p style={{
            color: '#00fff9',
            fontSize: '1.2rem',
            fontStyle: 'italic'
          }}>
            Oppress Your Thirst! 🥤
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Machine Display */}
          <div style={{
            background: 'rgba(0, 255, 249, 0.05)',
            border: '2px solid #00fff9',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 0 20px rgba(0, 255, 249, 0.3)'
          }}>
            <h2 style={{
              color: '#00fff9',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              textAlign: 'center'
            }}>
              Machine Status
            </h2>
            
            <div style={{
              background: '#0a0e27',
              padding: '1.5rem',
              borderRadius: '8px',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                {Array.from({ length: inventory }).map((_, i) => (
                  <span key={i} style={{ 
                    display: 'inline-block',
                    animation: animating && i === inventory - 1 ? 'drop 1s ease-out' : 'none'
                  }}>🥤</span>
                ))}
                {inventory === 0 && <span>❌</span>}
              </div>
              <div style={{
                color: '#ff0080',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem'
              }}>
                Inventory: {inventory}
              </div>
              <div style={{
                color: '#00fff9',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}>
                {getStateDisplay()}
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div style={{
            background: 'rgba(255, 0, 128, 0.05)',
            border: '2px solid #ff0080',
            borderRadius: '10px',
            padding: '2rem',
            boxShadow: '0 0 20px rgba(255, 0, 128, 0.3)'
          }}>
            <h2 style={{
              color: '#ff0080',
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              textAlign: 'center'
            }}>
              Control Panel
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <button
                onClick={insertCredit}
                disabled={animating}
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: state === STATES.HAS_CREDIT ? '#444' : '#00fff9',
                  color: state === STATES.HAS_CREDIT ? '#888' : '#0a0e27',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: animating || state === STATES.HAS_CREDIT ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: animating ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (state !== STATES.HAS_CREDIT && !animating) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 0 20px rgba(0, 255, 249, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                💵 Insert Credit
              </button>

              <button
                onClick={customerChoice}
                disabled={animating}
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: '#ff0080',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: animating ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: animating ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!animating) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 0 20px rgba(255, 0, 128, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                🎯 Make Selection
              </button>

              <button
                onClick={returnCredit}
                disabled={animating}
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: 'transparent',
                  color: '#00fff9',
                  border: '2px solid #00fff9',
                  borderRadius: '8px',
                  cursor: animating ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: animating ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!animating) {
                    e.target.style.background = '#00fff9';
                    e.target.style.color = '#0a0e27';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#00fff9';
                }}
              >
                ↩️ Return Credit
              </button>

              <button
                onClick={refill}
                disabled={animating}
                style={{
                  padding: '1rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: 'transparent',
                  color: '#7928ca',
                  border: '2px solid #7928ca',
                  borderRadius: '8px',
                  cursor: animating ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: animating ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (!animating) {
                    e.target.style.background = '#7928ca';
                    e.target.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#7928ca';
                }}
              >
                🔄 Refill Machine
              </button>
            </div>
          </div>
        </div>

        {/* Message Log */}
        <div style={{
          background: 'rgba(10, 14, 39, 0.8)',
          border: '2px solid #00fff9',
          borderRadius: '10px',
          padding: '2rem',
          boxShadow: '0 0 20px rgba(0, 255, 249, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem'
          }}>
            <h2 style={{
              color: '#00fff9',
              fontSize: '1.5rem',
              margin: 0
            }}>
              Event Log
            </h2>
            <button
              onClick={clearLog}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                background: 'transparent',
                color: '#ff0080',
                border: '1px solid #ff0080',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#ff0080';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ff0080';
              }}
            >
              Clear Log
            </button>
          </div>
          <div style={{
            maxHeight: '300px',
            overflowY: 'auto',
            background: '#000',
            padding: '1rem',
            borderRadius: '5px',
            fontFamily: 'monospace',
            fontSize: '0.9rem'
          }}>
            {messages.length === 0 ? (
              <div style={{ color: '#666', textAlign: 'center' }}>
                No events yet...
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} style={{
                  color: '#0f0',
                  marginBottom: '0.5rem',
                  padding: '0.5rem',
                  background: 'rgba(0, 255, 0, 0.05)',
                  borderLeft: '3px solid #0f0',
                  animation: 'fadeIn 0.3s ease-in'
                }}>
                  <span style={{ color: '#666', marginRight: '0.5rem' }}>
                    [{new Date().toLocaleTimeString()}]
                  </span>
                  {msg}
                </div>
              ))
            )}
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes drop {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateY(100px);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ComradeColaMachine;