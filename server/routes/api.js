const express = require('express');
const router = express.Router();

const clients = require('../controllers/clients');
const providers = require('../controllers/providers');

/**
 * @swagger
 * components:
 *  schemas:
 *      Client:
 *          type: object
 *          required:
 *            - name
 *            - phone
 *            - email
 *          properties:
 *            name:
 *              type: string
 *            phone:
 *              type: string
 *            email:
 *              type: string
 *            providers:
 *              type: array
 *              items:
 *                type: string 
 *  
 */

/**
 * @swagger
 * tags:
 *  name: Clients
 *  description: The Clients managing API
 *  
 */

/**
 * @swagger
 * /api/clients:
 *  get:
 *    summary: Returns list of all Clients
 *    tags: [Clients]
 *    responses:
 *      200:
 *        description: The list of clients
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Client'
 *   
 */

router.get('/clients', clients.getClients);

/**
 * @swagger
 * /api/clients/{clientId}:
 *  get:
 *    summary: Get the Client by clientId
 *    tags: [Clients]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: string
 *        required: true
 *        description: The Client clientId  
 *    responses:
 *      200:
 *        description: Get Client by clientId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Client'
 *                
 *   
 */
router.get('/clients/:clientId', clients.getClient);

/**
 * @swagger
 * /api/clients:
 *  post:
 *    summary: Add a new Client
 *    tags: [Clients]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Client'  
 *    responses:
 *      200:
 *        description: The Client was created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Client'
 *      500:
 *        description: Some server error
 */
router.post('/clients', clients.addClient)

/**
 * @swagger
 * /api/clients:
 *  put:
 *    summary: Update a Client
 *    tags: [Clients]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Client'  
 *    responses:
 *      200:
 *        description: The Client was updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Client'
 *      500:
 *        description: Some server error
 */
router.put('/clients', clients.editClient)

/**
 * @swagger
 * /api/clients/{clientId}:
 *  delete:
 *    summary: Delete the Client by clientId
 *    tags: [Clients]
 *    parameters:
 *      - in: path
 *        name: clientId
 *        schema:
 *          type: string
 *        required: true
 *        description: The Client clientId  
 *    responses:
 *      200:
 *        description: Delete Client by clientId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Client'
 *                
 *   
 */
router.delete('/clients/:clientId', clients.deleteClient);

/**
 * @swagger
 * components:
 *  schemas:
 *      Provider:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            id:
 *              type: string
 *            name:
 *              type: string
 *  
 */

/**
 * @swagger
 * tags:
 *  name: Providers
 *  description: The Providers managing API
 *  
 */

/**
 * @swagger
 * /api/providers:
 *  get:
 *    summary: Returns list of all Providers
 *    tags: [Providers]
 *    responses:
 *      200:
 *        description: The list of providers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                $ref: '#/components/schemas/Provider'
 *   
 */
router.get('/providers', providers.getProviders);

/**
 * @swagger
 * /api/providers/{providerId}:
 *  get:
 *    summary: Get the Provider by providerId
 *    tags: [Providers]
 *    parameters:
 *      - in: path
 *        name: providerId
 *        schema:
 *          type: string
 *        required: true
 *        description: The Provider providerId  
 *    responses:
 *      200:
 *        description: Get Provider by providerId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Provider'
 *                
 *   
 */
router.get('/providers/:providerId', providers.getProvider);

/**
 * @swagger
 * /api/providers:
 *  post:
 *    summary: Add a new Provider
 *    tags: [Providers]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              $ref: '#/components/schemas/Provider'  
 *    responses:
 *      200:
 *        description: The Provider was created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Provider'
 *      500:
 *        description: Some server error
 */
router.post('/providers', providers.addProvider)

/**
 * @swagger
 * /api/providers:
 *  put:
 *    summary: Edit a Provider
 *    tags: [Providers]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Provider'
 *    responses:
 *      200:
 *        description: The Provider was edited successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Provider'
 *      500:
 *        description: Some server error
 */
router.put('/providers', providers.editProvider)

/**
 * @swagger
 * /api/providers/{providerId}:
 *  delete:
 *    summary: Delete the Provider by providerId
 *    tags: [Providers]
 *    parameters:
 *      - in: path
 *        name: providerId
 *        schema:
 *          type: string
 *        required: true
 *        description: The Provider providerId  
 *    responses:
 *      200:
 *        description: Delete Provider by providerId
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Provider'
 *                
 *   
 */
router.delete('/providers/:providerId', providers.deleteProvider);

module.exports = router;