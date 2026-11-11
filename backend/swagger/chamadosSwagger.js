/**
 * @swagger
 * tags:
 *   name: Chamados
 *   description: CRUD de chamados
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ChamadoEntrada:
 *       type: object
 *       required:
 *         - cha_titulo
 *         - cha_descricao
 *         - cha_solicitante
 *         - cha_setor
 *       properties:
 *         cha_titulo:
 *           type: string
 *           example: Impressora do laboratório 3 não imprime
 *         cha_descricao:
 *           type: string
 *           example: Os documentos ficam presos na fila de impressão
 *         cha_solicitante:
 *           type: string
 *           example: Maria Souza
 *         cha_setor:
 *           type: string
 *           example: Secretaria
 *         cha_prioridade:
 *           type: string
 *           enum: [Baixa, Média, Alta]
 *           example: Alta
 *         cha_status:
 *           type: string
 *           enum: [Aberto, Em andamento, Resolvido]
 *           example: Aberto
 */

/**
 * @swagger
 * /chamados:
 *   get:
 *     summary: Lista todos os chamados
 *     tags: [Chamados]
 *     responses:
 *       200:
 *         description: Lista de chamados
 *   post:
 *     summary: Cadastra um chamado
 *     tags: [Chamados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChamadoEntrada'
 *     responses:
 *       201:
 *         description: Chamado cadastrado
 */

/**
 * @swagger
 * /chamados/{id}:
 *   get:
 *     summary: Busca um chamado pelo id
 *     tags: [Chamados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chamado encontrado
 *       404:
 *         description: Chamado não encontrado
 *   put:
 *     summary: Altera um chamado
 *     tags: [Chamados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChamadoEntrada'
 *     responses:
 *       200:
 *         description: Chamado alterado
 *       404:
 *         description: Chamado não encontrado
 *   delete:
 *     summary: Exclui um chamado
 *     tags: [Chamados]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chamado excluído
 *       404:
 *         description: Chamado não encontrado
 */
