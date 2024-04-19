// Importing the necessary modules and schema
import BRX, { BRK } from 'brx-node';
import { example_discrete_json } from '../schemas/example_schemas.ts';
import dotenv from 'dotenv';

// Displaying the chat iterator schema
console.log(example_discrete_json);

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

let brxObject = new BRK(example_discrete_json);

// These are the names of the input vars set
brxObject.input['user_input'].value = `Being a brick mason is a physically demanding yet immensely rewarding profession that combines strength, precision, and creativity. A typical day involves preparing mortar mix, measuring and cutting bricks, and meticulously placing each one in alignment to construct walls, buildings, and other structures. The work requires a keen eye for detail and steady hands, as the accuracy of each brick affects the integrity and appearance of the entire structure. Weather conditions can impact the day's labor, with hot summers and cold winters presenting unique challenges, such as mortar drying too quickly or freezing. Despite the physical exertion, there's a profound sense of accomplishment in seeing a tangible, enduring result from one's efforts.

Beyond the physical aspects, brick masonry demands problem-solving skills and an understanding of architectural blueprints. Brick masons often work on a variety of projects, from restoring historical buildings to constructing new, modern edifices, which requires adaptability and a continual learning mindset. Collaboration is also essential, as masons typically work as part of a larger construction team, coordinating with other tradespeople to ensure projects are completed efficiently and correctly. The profession offers a unique blend of tradition and innovation, where age-old techniques meet contemporary design, making each project a new opportunity for creative expression.`;

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
