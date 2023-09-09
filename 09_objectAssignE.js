// Create the SBI Bank object
let sbiBank = {
    bankName: 'SBI Bank',
    location: 'New York',
    accountNo: '12345678',
    ifsc: 'SBIN000123',
    interestRate: 3.5,
    
    // Member function to show details
    showDetails: function() {
      console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
  };
  
  // Create the Axis Bank object
  let axisBank = {
    bankName: 'Axis Bank',
    location: 'Los Angeles',
    accountNo: '98765432',
    ifsc: 'AXIS000789',
    interestRate: 4.0,
    
    // Member function to show details
    showDetails: function() {
      console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
  };
  
  // Create the HDFC Bank object
  let hdfcBank = {
    bankName: 'HDFC Bank',
    location: 'Chicago',
    accountNo: '56789012',
    ifsc: 'HDFC001234',
    interestRate: 3.75,
    
    // Member function to show details
    showDetails: function() {
      console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
  };
  
  // Create the Yes Bank object
  let yesBank = {
    bankName: 'Yes Bank',
    location: 'San Francisco',
    accountNo: '34567890',
    ifsc: 'YESB002345',
    interestRate: 4.25,
    
    // Member function to show details
    showDetails: function() {
      console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account No: ${this.accountNo}, IFSC: ${this.ifsc}, Interest Rate: ${this.interestRate}%`);
    }
  };
  
  // Invoke the showDetails() function on each bank object
  sbiBank.showDetails();
  axisBank.showDetails();
  hdfcBank.showDetails();
  yesBank.showDetails();
  