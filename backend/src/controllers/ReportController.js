const connection = require('../database/connection')
module.exports = {

  async index(req, res){
    try {
      const { startDate, endDate } = req.body
      const sales = await connection('sale')
        .where('saleDay', '>', startDate)
        .where('saleDay', '<', endDate)
        .join('saleItem', 'saleItem.sale_id', '=', 'sale.id') // pega os itens da venda
        .join('client', 'client.id', '=', 'sale.client_id') // pega o cliente da venda        
      return res.json(sales)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  }
}