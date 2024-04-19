// Importing the necessary modules and schema
import readline from 'readline';
import BRX, { BRK } from 'brx-node';
import { color_adder } from '../schemas/example_schemas.ts';
import dotenv from 'dotenv';

// Displaying the chat iterator schema
console.log(color_adder);

// Loading environment variables
dotenv.config({ path: './.env' });

// Added CLI reader

async function getUserInput(question: string) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise<string>(resolve =>
      rl.question(question, ans => {
        rl.close();
        resolve(ans);
      })
    );
  }
  

// Initialize options for the BRX AI instance
/*
 Options Explained:
    verbose - Enables detailed logging when set to true.
    force_client - If true, forces the package to run on the client based javascript websockets.
    silent - If set to true, it silences the console logs.
*/
let brx_options = { // Defaults
      verbose: false, 
      force_client: false, 
      silent: false 
}

// Initializing the BRX AI with the options defined above.
const brx = new BRX(process.env.BRXAI_API_KEY!, brx_options);

let brxObject = new BRK(color_adder);

console.log(brxObject)


// A function to update the inputs based on the brk instance.
// This version loops over the keys of the 'input' object in the brk instance.
// For each key, it retrieves user input and sets the value on the brk instance.
const updateBrkInputs = async (brk: BRK) => {
    for (let key in brk.input) {
      const value = await getUserInput(`Please enter the value for ${key}: `);
  
      // Update the value for the current key in the brk 'inputs'
      brk.input[key].value = value;
    }
  };
  
  await updateBrkInputs(brxObject);

/**
 * Executing the interaction.
 * For each event during the execution, it logs the event. 
 * Finally, it logs the final result of the execution.
 */

const result = await brx.execute(brxObject, (event: any) => {
    console.log("Callback Event...")
    console.log(event)
});

console.log("Final Result...")
console.log(result) 
