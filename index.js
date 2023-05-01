const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  };
  
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  };
  
  /* Create a function that calculates the total cost of
  all refills for a customer object. */
  function calculateTotal(customer) {
    /* Multiply the price per refill by the number of refills
    to get the refill total */
    let refillTotal = customer.pricePerRefill * customer.refills;
   /* If customer has subscription, give 25% discount by multiplying
   total by 0.75 */
    if (customer.subscription) {
      refillTotal *= 0.75;
    }
    /* If customer has a coupon then subtract $10 from refillTotal */
    if (customer.coupon) {
      refillTotal -= 10;
    }
    // return string containing the total cost for refills.
    return `Your grand total is $${refillTotal}.`;
  }
  
  // call the function for each customer object and output the total.
  console.log(calculateTotal(timmy));
  console.log(calculateTotal(sarah));
  console.log(calculateTotal(rocky));
  