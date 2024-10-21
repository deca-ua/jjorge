// server/api/webhook.ts

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    return { statusCode: 405, message: "Method Not Allowed" };
  }

  // Exemplo de resposta para um webhook recebido
  return { message: "Update received" };
});
