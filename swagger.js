module.exports = 
    {
        "swagger": "2.0",
        "info": {
            "description": "Documentação - App Lab API",
            "version": "1.0.0",
            "title": "App Lab API",
            "contact": {
                "email": "deco.oliveira@gmail.com"
            },
            "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
            }
        },
        "schemes": ["http"],
        "host": process.env.URL,
        "basePath": "/api/v1",
        "paths" : {
            "/laboratorios" : {
                "get" : {
                    "summary" : "Busca todos os laboratórios ativos",
                    "description": "Busca todos os laboratórios ativos",
                    "produces": ["application/json"],
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "post" : {
                    "summary" : "Cadastrar um laboratório",
                    "description": "Cadastrar um novo laboratório",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "laboratorio object",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Laboratorio"
                                
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
    
            },
            "/laboratorios/{id}" : {
                "patch" : {
                    "summary" : "Atualizar um laboratório",
                    "description": "Atualizar os dados de um laboratório",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Laboratório que será atualizado",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Laboratório",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Laboratorio"
                                   
                            }
                            
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete" : {
                    "summary" : "Remover logicamente um laboratório",
                    "description": "Remover logicamente um laboratório",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Id do Laboratório que será removido",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default":200
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
            "/lote/laboratorios" : {
                "post" : {
                    "summary" : "Cadastrar um lote de laboratórios",
                    "description": "Cadastrar um lote de laboratórios",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Laboratorio",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "patch": {
                    "summary" : "Atualizar um lote de laboratórios",
                    "description": "Atualizar um lote de laboratórios",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Laboratorio",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete": {
                    "summary" : "Remover um lote de laboratórios",
                    "description": "Remover logicamente um lote de laboratórios",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Laboratorio",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
    
            },
            "/laboratorios/{id}" : {
                "patch" : {
                    "summary" : "Atualizar um laboratório",
                    "description": "Atualizar os dados de um laboratório",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Laboratório que será atualizado",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Laboratório",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Laboratorio"
                                   
                            }
                            
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Laboratorio"
                                }
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete" : {
                    "summary" : "Remover logicamente um laboratório",
                    "description": "Remover logicamente um laboratório",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Id do Laboratório que será removido",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default":200
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
    
            "/exames" : {
                "get" : {
                    "summary" : "Busca todos os exames ativos",
                    "description": "Busca todos os exames ativos",
                    "produces": ["application/json"],
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "post" : {
                    "summary" : "Cadastrar um Exame",
                    "description": "Cadastrar um novo exame",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Exame",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Exame"
                                
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
    
            "/exames/{id}" : {
                "patch" : {
                    "summary" : "Atualizar um exame",
                    "description": "Atualizar os dados de um exame",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Exame que será atualizado",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Exame",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Exame"
                                   
                            }
                            
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete" : {
                    "summary" : "Remover logicamente um exame",
                    "description": "Remover um exame",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Id do exane que será removido logicamente",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default":200
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            
            }, 
            "/exames" : {
                "get" : {
                    "summary" : "Busca todos os exames ativos",
                    "description": "Busca todos os exames ativos",
                    "produces": ["application/json"],
                    "parameters": [],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "post" : {
                    "summary" : "Cadastrar um Exame",
                    "description": "Cadastrar um novo exame",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Exame",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Exame"
                                
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
    
            "/exames/{id}" : {
                "patch" : {
                    "summary" : "Atualizar um exame",
                    "description": "Atualizar os dados de um exame",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Exame que será atualizado",
                            "required": true,
                            "type": "string"
                        },
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto Exame",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Exame"
                                   
                            }
                            
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "object",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete" : {
                    "summary" : "Remover logicamente um exame",
                    "description": "Remover um exame",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "Id do exane que será removido logicamente",
                            "required": true,
                            "type": "string"
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default":200
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
            "/exames/{nome}" : {
                "get" : {
                    "summary" : "Busca exames por nome",
                    "description": "Busca todos os exames que tem o nome especificado e seus laboratórios associados",
                    "produces": ["application/json"],
                    "parameters": [
                        {
                            "name": "nome",
                            "in": "path",
                            "description": "Nome do exame que está sendo pesquisado (case sensitive)",
                            "required": true,
                            "type": "string"
                            
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "array",
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        },
                        "400": {
                            "description": "Falha na operação",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            },
            
            "/lote/exames" : {
                "post" : {
                    "summary" : "Cadastrar um lote de exames",
                    "description": "Cadastrar um lote de exames",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Exame",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "patch": {
                    "summary" : "Atualizar um lote de exames",
                    "description": "Atualizar um lote de exanes",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Laboratorio",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "$ref": "#/definitions/Exame"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete": {
                    "summary" : "Remover um lote de exames",
                    "description": "Remover logicamente um lote de exames",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Conjunto de objetos do tipo Exame",
                            "required": true,
                            "schema": {
                                "type": "array",
                                
                                "items": {
                                    "type": "string"
                                }
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
    
            },
            "/associacoes" : {
                "post" : {
                    "summary" : "Vínculo entre laboratório e exame",
                    "description": "Criar a associação entre um laboratório e um exame",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto do tipo Associação",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Associacao"
                                
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                },
                "delete" : {
                    "summary" : "Remover associação entre laboratório e exame",
                    "description": "Remove a associação entre um laboratório e um exame",
                    "produces": ["application/json"],
                    "consumes": ["application/json"],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Objeto do tipo Associação",
                            "required": true,
                            "schema": {
                                "type": "object",
                                "$ref": "#/definitions/Associacao"
                                
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "Operação bem sucedida",
                            "schema": {
                                "type": "number",
                                "default": 200
                                
                            }
                        },
                        "400": {
                            "description": "Invalid status value",
                            "schema": {
                                "$ref": "#/definitions/InvalidResponse"
                            }
                        }
                    }
                }
            }
        }, 
        "definitions": {
            "Laboratorio": {
                "type": "object",
                "properties": {
                    "nome": {
                        "type": "string"
                    },
                    "endereco": {
                        "type": "string"
                    }
                }
            },
            "Exame": {
                "type": "object",
                "properties": {
                    "nome": {
                        "type": "string"
                    },
                    "tipo": {
                        "type": "string"
                    }
                }
            },
            "Associacao":{
                "type": "object",
                "properties": {
                    "laboratorioId": {
                        "type": "string"
                    },
                    "exameId": {
                        "type": "string"
                    }
                }
            },
            "Tipo":{
                "IMAGEM":"Imagem",
                "ANALISE":"Análise Clínica"
            },
            "Status":{
                "ATIVO": "ativo",
                "INATIVO": "inativo"
            },
            "InvalidResponse": {
                "type": "object",
                "properties": {
                    "statusCode": {
                        "type": "number"
                    },
                    "message": {
                        "type": "string"
                    },
                    "reason": {
                        "type": "string"
                    }
                }
    
            }
        }
    }
