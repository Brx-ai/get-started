<p align="center" width="100%"><img  src="https://github.com/Brx-ai/media/assets/134740746/63f3508c-f5d6-44b6-8152-e4eb9fcc78f1"></p> <!-- ![brx-node logo](https://github.com/Brx-ai/media/assets/134740746/63f3508c-f5d6-44b6-8152-e4eb9fcc78f1) --> 

# BRX-Node Get Started 
This is a simple quick start for the BRX-node package  

```bash
git clone git@github.com:Brx-ai/get-started.git
```

Included Example:  

1. [Single BRK Run](#single-brk-run)
2. [BRK User Inputs](#brk-user-inputs) (CLI-only)
3. [Dependant Brk Run](#dependant-brk-run)
4. [BRK Pipeline Embedding](#brk-pipeline-embedding)
5. [BRK Pipeline Image Generation](#brk-pipeline-image-generation)
6. [Discrete Json Return](#discrete-json-return)

For more information see https://docs.brx.ai  

# Global Setup  

### Global Install 
Install Required Runtime Dependancies
```bash 
npm install 
``` 
```bash 
pnpm install 
```  

### API key generation  

Navagate to https://brx.ai/key/generate  

![alt text](/images/api-button.png)  

Click "Gen Key" and then refresh if key is not directly updated to list on account!  

![alt text](/images/api-key.png)  

Update you BRX Api Key in the .env file  

```javascript 
BRXAI_API_KEY=YOUR_API_KEY_HERE 
```  

### Node Example Run 

Use npm to run the examples

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

BRX Schemas are static schemas for the runtime of the Top Level BRK. This allows you to gather input varibales before or at runtime to complete the entire event process for a BRK  

When Stops are needed its suggested to use a Promise Await strategy to break a BRX pipeline to the proceed with more user input!

To Locate the BRX Schema, Navagate to the execute page https://brx.ai/brk/{{BRK_UUID}}  

On this page click the run button. After a copy of the schema will appear which then can pasted into /schemas/example_schemas.ts file  

![alt text](/images/execute-run.png)  

# [Single BRK Run](#single-brk-run)
This is a single brk run with one input!
### Online Run
https://brx.ai/brk/run/794a15c0-88d4-4786-9e24-e042e3c3a0c5

### Local Run
```bash 
npm run example-1
``` 
```bash 
pnpm run example-1
``` 
### Schema
```javascript
{
  "description": "This is a single simple brk. It will take a user input and try to answer any question asked!",
  "brxName": "example_simple_brk",
  "brxId": "794a15c0-88d4-4786-9e24-e042e3c3a0c5",
  "dependantBrxIds": {},
  "processType": 7,
  "schemas": {
    "mainBrxId": "794a15c0-88d4-4786-9e24-e042e3c3a0c5",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "user-input",
                  {
                    "fieldValueDataType": "string",
                    "fieldValue": "testval"
                  }
                ]
              ]
            },
            "brxName": "example_simple_brk",
            "brxId": "794a15c0-88d4-4786-9e24-e042e3c3a0c5"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
[
  {
    brxId: '794a15c0-88d4-4786-9e24-e042e3c3a0c5',
    brxName: 'example_simple_brk',
    topLevelBrx: true,
    brxRes: {
      output: 'The sky is blue during a clear day due to a process called Rayleigh scattering. However, its color can change to various hues of red, orange, pink, and purple during sunrise or sunset. At night, the sky appears black with tiny white dots, which are stars.'
    }
  }
]
```

# [BRK User Inputs](#brk-user-inputs)
### (CLI-only)
This example uses CLI interrupt to take input from the user to the start the BRX pipeline!
### Online Run
https://brx.ai/brk/run/590ac222-f291-4da6-9123-a4822957d155
### Local Run
```bash 
npm run example-2
``` 
```bash 
pnpm run example-2
``` 
### Schema
```javascript
{
  "description": "This BRK adds input colors",
  "brxName": "Add Colors",
  "brxId": "590ac222-f291-4da6-9123-a4822957d155",
  "dependantBrxIds": {
    "invert_color_1": "01afd050-fe19-406b-9b83-891c48ec5198"
  },
  "processType": 0,
  "schemas": {
    "mainBrxId": "590ac222-f291-4da6-9123-a4822957d155",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "colorAdd1",
                  {
                    "fieldValueDataType": "string",
                    "description": "test123"
                  }
                ]
              ]
            },
            "brxName": "Invert Color",
            "brxId": "01afd050-fe19-406b-9b83-891c48ec5198"
          }
        ],
        [
          "invert_color_1",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "userInvertColor",
                  {
                    "fieldValueDataType": "string",
                    "description": "lol123"
                  }
                ]
              ]
            },
            "brxName": "Invert Color",
            "brxId": "01afd050-fe19-406b-9b83-891c48ec5198"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
[
  {
    brxId: '01afd050-fe19-406b-9b83-891c48ec5198',
    brxName: 'Invert Color',
    brxRes: { output: 'The inverted color of yellow is blue.' }
  },
  {
    brxId: '590ac222-f291-4da6-9123-a4822957d155',
    brxName: 'Add Colors',
    topLevelBrx: true,
    brxRes: {
      output: 'The combination of blue and red creates the color purple.'
    }
  }
]
```

# [Dependant Brk Run](#dependant-brk-run)
This is a very simple example that we at brx use to show chaining of instances and events! In the first brk we ask the AI to invert the color given by the user and in the second instance we ask the AI to combine the color that is inverted with the second color added by the user
### Online Run
https://brx.ai/brk/run/590ac222-f291-4da6-9123-a4822957d155
### Local Run
```bash 
npm run brx
``` 
```bash 
pnpm run brx
``` 
### Schema
```javascript
{
  "description": "This BRK adds input colors",
  "brxName": "Add Colors",
  "brxId": "590ac222-f291-4da6-9123-a4822957d155",
  "dependantBrxIds": {
    "invert_color_1": "01afd050-fe19-406b-9b83-891c48ec5198"
  },
  "processType": 0,
  "schemas": {
    "mainBrxId": "590ac222-f291-4da6-9123-a4822957d155",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "colorAdd1",
                  {
                    "fieldValueDataType": "string",
                    "description": "test123"
                  }
                ]
              ]
            },
            "brxName": "Invert Color",
            "brxId": "01afd050-fe19-406b-9b83-891c48ec5198"
          }
        ],
        [
          "invert_color_1",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "userInvertColor",
                  {
                    "fieldValueDataType": "string",
                    "description": "lol123"
                  }
                ]
              ]
            },
            "brxName": "Invert Color",
            "brxId": "01afd050-fe19-406b-9b83-891c48ec5198"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
[
  {
    brxId: '01afd050-fe19-406b-9b83-891c48ec5198',
    brxName: 'Invert Color',
    brxRes: { output: 'Cyan' }
  },
  {
    brxId: '590ac222-f291-4da6-9123-a4822957d155',
    brxName: 'Add Colors',
    topLevelBrx: true,
    brxRes: {
      output: 'The combination of cyan and yellow creates a green color.'
    }
  }
]
```

# [BRK Pipeline Embedding](#brk-pipeline-embedding)
This pipeline showcases the embedding end-effector that can be set on a brx pipeline. This is useful when building vector databases epscially for chunking or expanding data in a dynamic way for this storage method
### Online Run
https://brx.ai/brk/run/2edaf893-b773-4dea-8a42-43d855a39bd8
### Local Run
```bash 
npm run example-3
``` 
```bash 
pnpm run example-3
``` 
### Schema
```javascript
export let example_embedding = {
  "description": "This is a quick example of taking brk inputs and transforming them into embeddings",
  "brxName": "example_embedding",
  "brxId": "2edaf893-b773-4dea-8a42-43d855a39bd8",
  "dependantBrxIds": {},
  "processType": 20,
  "schemas": {
    "mainBrxId": "2edaf893-b773-4dea-8a42-43d855a39bd8",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "embedding_input",
                  {
                    "fieldValueDataType": "string",
                    "fieldValue": "testval"
                  }
                ]
              ]
            },
            "brxName": "example_embedding",
            "brxId": "2edaf893-b773-4dea-8a42-43d855a39bd8"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
{
  brxId: '2edaf893-b773-4dea-8a42-43d855a39bd8',
  brxName: 'example_embedding',
  topLevelBrx: true,
  brxRes: {
    output: [
       -0.036110982,   0.0024252858,   0.009729202,  0.0018711352,
       -0.007011058,   0.0131593235, -0.0021201523,  -0.011146144,
        -0.04259244,   -0.025995977,   0.017185684,   0.013496023,
       -0.008740148, -0.00016747274,   0.006327138,   0.013573184,
        0.022628987,    0.013243498,   0.028759716,   -0.03355768,
       -0.020426413,    0.009280269, -0.0014870878,  -0.021857385,
       -0.009708158,    0.015880976,    0.01007993,  -0.026164327,
       -0.028114377,   0.0002794866,   0.015305781,  0.0034476586,
       -0.038131174,   -0.011503886,   -0.03271593,    0.00733022,
        0.011468814,   -0.019261995,    0.02839496,  -0.010732285,
        0.018532481,    0.004569989, -0.0006431479,  -0.022474667,
      -0.0024919242,   -0.012450852,  -0.008171968, -0.0070917252,
       0.0037177193,  -0.0039667366,     0.0265852,   0.034287192,
       -0.020580733,   -0.014421945,  -0.006071106,    0.02194156,
       -0.015025198,    0.014127334, -0.0017974823,  -0.011819542,
         0.01410629,   0.0017606558, -0.0028461597,  -0.007673934,
       -0.021310247,   0.0034634415, -0.0053731566,   0.018981412,
        0.017887142, -0.00086849084,   0.021394422,   0.005324055,
        0.003861518,  -0.0035914574,    0.01466044,  -0.021478597,
       -0.003260019,     0.00681465,  0.0090558035,   0.014232553,
       0.0027654923,   -0.015600393,  -0.009827405,   0.016175587,
        0.008305245,      0.0208052,  -0.006895317,    0.04466875,
       -0.025252433,    0.004373581,   0.018125637,   0.021226075,
         0.01353811,   -0.005025936,  0.0065095164,   0.037177194,
       0.0011661714,    0.018532481,   0.005509941,  -0.006271021,
      ... 1436 more items
    ]
  }
}
```


# [BRK Pipeline Image Generation](#brk-pipeline-image-generation)
This pipeline showcases the image generation end-effector that can be set on a brx pipeline. This is useful when compressing data into a image generation prompt!

### Online Run
https://brx.ai/brk/run/a0083b8e-bc20-4ab3-a0da-a125d3f83bab
### Local Run
```bash 
npm run example-4
``` 
```bash 
pnpm run example-4
``` 
### Schema
```javascript
{
  "description": "This is an example image generation pipeline that runs one dependency that expands on a topic for image generation!",
  "brxName": "example_image_generation_pipeline",
  "brxId": "a0083b8e-bc20-4ab3-a0da-a125d3f83bab",
  "dependantBrxIds": {
    "dep_a95ed6ec-062c-4e1e-b89e-b69b076daf85": "a95ed6ec-062c-4e1e-b89e-b69b076daf85"
  },
  "processType": 16,
  "schemas": {
    "mainBrxId": "a0083b8e-bc20-4ab3-a0da-a125d3f83bab",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": []
            },
            "brxName": "example_image_generation_pipeline",
            "brxId": "a0083b8e-bc20-4ab3-a0da-a125d3f83bab"
          }
        ],
        [
          "dep_a95ed6ec-062c-4e1e-b89e-b69b076daf85",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "image-expand-idea",
                  {
                    "fieldValueDataType": "string",
                    "fieldValue": "testval"
                  }
                ]
              ]
            },
            "brxName": "expand_1_paragraph_on_idea_img_gen",
            "brxId": "a95ed6ec-062c-4e1e-b89e-b69b076daf85"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
[
  {
    brxId: 'a95ed6ec-062c-4e1e-b89e-b69b076daf85',
    brxName: 'expand_1_paragraph_on_idea_img_gen',
    brxRes: {
      output: "A skilled artisan, a builder, is meticulously laying bricks one by one. Each brick is carefully positioned and set into place using a thin layer of mortar. The builder's experienced hands are in motion to construct an awe-inspiring structure, which is rapidly taking shape under his careful guidance. This remarkable architectural marvel, tribute to the builder's craftsmanship, is growing mightier with every brick added. From what was once just a vision, an amazing tangible structure is slowly but beautifully emerging."
    }
  },
  {
    brxId: 'a0083b8e-bc20-4ab3-a0da-a125d3f83bab',
    brxName: 'example_image_generation_pipeline',
    topLevelBrx: true,
    brxRes: {
      output: '{"url":"https://firebasestorage.googleapis.com/v0/b/brx-frontend.appspot.com/o/imgGen%2FdalleGen%2Fa0083b8e-bc20-4ab3-a0da-a125d3f83bab%2F1a280899-b2cf-4ac0-9b97-a996a37babcf%2F0979ea00-1d07-457b-9a3a-b473b59d88d0?alt=media&token=95c003c5-493e-43e0-a3dc-41e3c79343e0","revised_prompt":"A proficient craftsman, who happens to be a Caucasian construction worker, is painstakingly placing bricks individually. Every brick is accurately situated and fixed with a small layer of cement. His experienced hands, covered in the dirt and dust of the worksite, are consistently engaged in crafting an jaw-dropping structure which is progressively taking form under his close supervision. This outstanding architectural monument, a testament to his skills and intrigues, is becoming larger and stronger with each brick laid and each scoop of mortar applied. From something that was merely an idea, an incredible tangible edifice is gradually and exquisitely arising."}'
    }
  }
]
```

# [Discrete Json Return](#discrete-json-return)
This pipeline showcases the discrete JSON end-effector that can be set on a brx pipeline! At BRX we provide a default format that we have found to be significantly less hallucinogenic! However direct JSON Schema reference objects can be directly set throught the BRK builder!
### Online Run
https://brx.ai/brk/run/f93dab40-56f7-44bc-a9e0-ff8c3b8f1780
### Local Run
```bash 
npm run example-5
``` 
```bash 
pnpm run example-5
``` 
### Schema
```javascript
{
  "description": "In this example a user will be asked for an input and then a short description will be returned in JSON",
  "brxName": "example_discrete_json",
  "brxId": "f93dab40-56f7-44bc-a9e0-ff8c3b8f1780",
  "dependantBrxIds": {},
  "processType": 8,
  "schemas": {
    "mainBrxId": "f93dab40-56f7-44bc-a9e0-ff8c3b8f1780",
    "schemas": {
      "_isMap": true,
      "data": [
        [
          "main_brx_entry_schema",
          {
            "schemaFields": {
              "_isMap": true,
              "data": [
                [
                  "user_input",
                  {
                    "fieldValueDataType": "string",
                    "fieldValue": "testval"
                  }
                ]
              ]
            },
            "brxName": "example_discrete_json",
            "brxId": "f93dab40-56f7-44bc-a9e0-ff8c3b8f1780"
          }
        ]
      ]
    }
  }
}
```

### Expected Output
```javascript
[
  {
    brxId: 'f93dab40-56f7-44bc-a9e0-ff8c3b8f1780',
    brxName: 'example_discrete_json',
    topLevelBrx: true,
    brxRes: {
      output: '{\n' +
        '  "data": [\n' +
        '    {\n' +
        '      "short_description": "Being a brick mason is a physically demanding profession that involves preparing mortar mix, measuring, cutting and placing bricks to construct various structures. The role requires strength, precision, and creativity, with each project presenting unique challenges and opportunities for learning. It also involves problem-solving, understanding architectural blueprints, and working as part of a construction team."\n' +
        '    }\n' +
        '  ]\n' +
        '}'
    }
  }
]
```
