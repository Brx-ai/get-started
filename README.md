<div align="center">

![brx-node-logo](https://github.com/Brx-ai/media/assets/134740746/63f3508c-f5d6-44b6-8152-e4eb9fcc78f1)  

</div>

# Getting Started with BRX-Node
  
This guide provides a simplified initiation to the BRX-node package.
  
### Installation Instructions:
  
```bash
git clone git@github.com:Brx-ai/get-started.git
```

The BRX-Node package contains several examples demonstrating its functionalities:

1. [Single BRK Run](./Examples.md#single-brk-run)
2. [BRK User Inputs](./Examples.md#brk-user-inputs) (CLI-only)
3. [Dependant Brk Run](./Examples.md#dependant-brk-run)
4. [BRK Pipeline Embedding](./Examples.md#brk-pipeline-embedding)
5. [BRK Pipeline Image Generation](./Examples.md#brk-pipeline-image-generation)
6. [Discrete Json Return](./Examples.md#discrete-json-return)

  
For more detailed information, please visit [our official documentation](https://docs.brx.ai).
  
## Global Set-Up
  
### Global Install Instructions
  
To install the required runtime dependencies, use the following commands:
  
```bash
npm install
```

```bash
pnpm install
```

### API Key Generation
  
Please visit [BRX API key generation page](https://brx.ai/key/generate) to generate your API key. Once the key is generated, remember to update your BRX API Key in the .env file:
  
```javascript
BRXAI_API_KEY=YOUR_API_KEY_HERE
```

## Running Node Examples
  
Use npm to run the examples.
  
### Run Default Example
  
```bash
npm run brx
```
  
```bash
pnpm run brx
```
  
### Run Examples 1-5
  
```bash
pnpm run example-1
```
  
```bash
pnpm run example-{x}
```
  
### BRX Schema Generation
  
BRX Schemas are static schemas for the runtime of the Top Level BRK. These allow you to gather input variables either before or during runtime to complete the entire event process for a BRK. In case of stops, we recommend using a Promise Await strategy to break a BRX pipeline, followed by a gather of more user input.
  
For BRX schema, navigate [brx.ai/brk/{{BRK_UUID}}](https://brx.ai/brk/{{BRK_UUID}})). You may copy the schema from this page and paste it to /schemas/example_schemas.ts file.

![alt text](/images/execute-run.png)  

[A complete list of examples with expected output can be found in the Examples Markdown.](./Examples.md)

Happy Coding!