// Importing the necessary modules and schema
import BRX, { BRK } from 'brx-node';
import { v_chat_ittr1 } from './schemas/brx_schema.ts';
import dotenv from 'dotenv';

// Displaying the chat iterator schema
console.log(v_chat_ittr1);

// Loading environment variables
dotenv.config({ path: './.env' });

/**
 * Initializing the BRX AI with the API key,
 * and turning on verbose mode for detailed logging.
 */
const brx = new BRX(process.env.BRXAI_API_KEY!, { verbose: false });

let brxObject = new BRK(v_chat_ittr1);

// These are the names of the input vars set
brxObject.input['color1'].value = "yellow";
brxObject.input['color2'].value = "red";

/**
 * Executing the interaction.
 * For each event during the execution, it logs the event. 
 * Finally, it logs the final result of the execution.
 */
const result = await brx.execute(brxObject, (event: any) => {
    console.log("Inline Event...")
    console.log(event)
});
console.log("Final Result...")
console.log(result)
