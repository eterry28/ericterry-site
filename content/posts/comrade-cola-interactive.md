---
title: "Comrade Cola Machine: From PHP to Interactive JavaScript"
date: "2025-11-17"
excerpt: "Taking the classic Comrade Cola vending machine from PHP state machine to an interactive React experience. Oppress your thirst with code!"
category: ["Comrade Cola"]
tags: ["comrade-cola", "javascript", "react", "state-machine", "interactive"]
---

## Comrade Cola – Now Interactive!

Remember the [original Comrade Cola Machine](https://ericterry.us/the-comrade-cola-company/)? That PHP state machine we built to quench the thirst of the masses? Well, the Chairwoman has returned with a new directive: **make it interactive**.

She wants people to *experience* the oppressive refreshment firsthand. No more reading through code snippets. Time to build something people can actually play with.

## From PHP to JavaScript React

The beauty of the state machine pattern is that it translates beautifully across languages. The business logic stays the same—only the implementation changes. Let's see how we can take our PHP vending machine and turn it into an interactive React component.

## The Core State Machine

Just like our PHP version, we have four states:

```javascript
const STATES = {
  EMPTY: 'EMPTY',           // No more cola!
  NO_CREDIT: 'NO_CREDIT',   // Waiting for money
  HAS_CREDIT: 'HAS_CREDIT', // Customer has paid
  SOLD: 'SOLD'              // Fulfilling order
};
```

These constants drive all the decision-making in our machine, just like the PHP version.

## React State Management

Instead of PHP class properties, we use React hooks to manage our machine's state:

```javascript
const [inventory, setInventory] = useState(5);
const [state, setState] = useState(STATES.NO_CREDIT);
const [messages, setMessages] = useState([]);

useEffect(() => {
  if (state === STATES.SOLD) {
    dispense();
  }
}, [state]);
```

This gives us reactive updates—when state changes, the UI automatically updates. No need to manually refresh or echo output.

## The Same Business Rules, Different Syntax

Remember all those business rules we implemented? They're still here:

### Inserting Credits

```javascript
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
  }
};
```

Same logic as the PHP version, but now it updates a visual interface in real-time.

### Making a Selection

```javascript
const customerChoice = () => {
  switch (state) {
    case STATES.HAS_CREDIT:
      addMessage("🎯 You've made your choice...");
      setState(STATES.SOLD);
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
  }
};
```

The validation rules remain intact. You still can't buy without credits. You still can't buy when it's empty. The Chairwoman's rules are absolute.

## Adding Visual Feedback

This is where JavaScript shines. We can add animations and visual feedback:

```javascript
const dispense = () => {
  setAnimating(true);
  setTimeout(() => {
    addMessage("🥤 Congrats Comrade! Enjoy your cold, refreshing Comrade Cola!");
    const newInventory = inventory - 1;
    setInventory(newInventory);
    
    if (newInventory === 0) {
      addMessage("🚫 The machine is out of Comrade Cola!");
      setState(STATES.EMPTY);
    } else {
      setState(STATES.NO_CREDIT);
    }
    setAnimating(false);
  }, 1000);
};
```

Now when you dispense a cola, you see it drop with a smooth animation. The inventory updates visually. The state changes are immediate and satisfying.

## Implementing That TODO

Remember the `refill()` method we left as a TODO in the PHP version? Well, it's implemented now:

```javascript
const refill = () => {
  setInventory(5);
  setState(STATES.NO_CREDIT);
  addMessage("🔄 Machine has been refilled with 5 Comrade Colas!");
};
```

Simple, clean, and functional. The Chairwoman is pleased.

## Try It Yourself

[Comrade Cola Machine](/comrade)

Go ahead, play with it:

1. **Insert a credit** - Watch the machine accept your payment
2. **Make a selection** - See the cola drop with animation
3. **Try to break it** - Insert credits when you already have one. Try to buy without credits. The state machine protects against all invalid operations.
4. **Run it dry** - Buy all 5 colas and watch the machine go into EMPTY state
5. **Refill it** - Bring it back to life

## The Power of State Machines

Whether you're writing in PHP, JavaScript, Python, Java, or C#, the state machine pattern remains powerful:

- **Clear state transitions** - You always know what state you're in
- **Validated actions** - Invalid operations are caught by the switch statements
- **Maintainable code** - Adding new states or transitions is straightforward
- **Testable logic** - Each state transition can be unit tested

## What's Next?

The Chairwoman has more demands, of course. Some ideas for future iterations:

- **Multiple cola flavors** - Classic Cola, Diet Cola, Cherry Cola
- **Dynamic pricing** - Surge pricing during peak hours (very dystopian)
- **Loyalty program** - Track customer purchases
- **Network connectivity** - Report sales back to headquarters
- **Predictive maintenance** - Alert when inventory is low

But for now, the masses can enjoy their cold, refreshing Comrade Cola—interactively.

## The Takeaway

Same business logic. Different language. Better user experience.

The state machine pattern transcends languages. The business rules remain constant. But the delivery mechanism—that's where we can get creative and build something people want to interact with.

**Oppress your thirst, Comrades. The revolution will be caffeinated.**

---

*This is part of the Comrade Cola series, where we explore software development through the lens of a completely fictitious dystopian beverage company. Because the best code happens when you're having fun.*