// Importing the necessary modules and schema
import BRX, { BRK } from 'brx-node';
import { color_adder } from '../schemas/example_schemas.ts';
import dotenv from 'dotenv';

// Displaying the chat iterator schema
console.log(color_adder);

// Loading environment variables
dotenv.config({ path: './.env' });

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

// These are the names of the input vars set
brxObject.input['colorAdd1'].value = "yellow";
brxObject.input['userInvertColor'].value = "red";

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
