export default function (req, res) {
    if (req.method === 'POST') {
      const update = req.body;
      console.log('Update para receber:', update);
  
      res.status(200).send('Update recebido');
    } else {
      res.status(405).send('Erro');
    }
  }
  