const connection = require('../database/connection')

module.exports = {

  async index(req, res){
    try {
      const { sale_id } = req.params

      const saleItems = await connection('saleItem').select('*').where("sale_id", sale_id)//where("saleItem.sale_id", '=', sale_id)
      return res.json(saleItems)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },
  
  async create(req, res) {
    try {
      const { sale_id, description, quantity, price, discount, partial } = req.body
        
      const [id] = await connection('saleItem').insert({
        sale_id, description, quantity, price, discount, partial
      })
      return res.json({ id })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { id,  sale_id, description, quantity, price, discount, partial } = req.body
      await connection('saleItem').where('id', id).update({
        sale_id, description, quantity, price, discount, partial
      })
      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('saleItem').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }
}