const connection = require('../database/connection')

module.exports = {

  async index(req, res){
    try {
      const products = await connection('product').select('*')
      return res.json(products)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },
  
  async create(req, res) {
    try {
      const { description, buyPrice, salePrice, category_id } = req.body
        
      const [id] = await connection('product').insert({
        description, buyPrice, salePrice, category_id
      })
      return res.json({ id })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { id, description, buyPrice, salePrice, category_id} = req.body
      await connection('product').where('id', id).update({
        description, buyPrice, salePrice, category_id
      })
      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('product').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }
}