function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();  // although executed 1st , the output came to th last
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
  
