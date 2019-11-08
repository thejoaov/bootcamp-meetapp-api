import app from './app';

console.log(`Servidor rodando na porta ${process.env.PORT}`);
app.server.listen(process.env.PORT);
