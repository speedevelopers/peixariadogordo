const connection = require('../database/connection')

module.exports = {

  async index(req, res){
    try {
      const sales = await connection('sale').select('*')
      return res.json(sales)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },
  
  async create(req, res) {
    try {
      const { client_id, saleDay, discount, total } = req.body
        
      const [id] = await connection('sale').insert({
        client_id, saleDay, discount, total 
      })
      return res.json({ id })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { id,  client_id, saleDay, discount, total } = req.body
      await connection('sale').where('id', id).update({
        client_id, saleDay, discount, total 
      })
      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('sale').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }
}