export let color_adder = {
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

export let example_single = {
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

export let example_img_gen = {
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

export let example_discrete_json = {
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