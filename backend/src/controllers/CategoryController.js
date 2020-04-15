const connection = require('../database/connection')

module.exports = {

  async index(req, res){
    try {
      const categories = await connection('category').select('*')
      return res.json(categories)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },
  
  async create(req, res) {
    try {
      const { name } = req.body
      const [id] = await connection('category').insert({
        name,
      })
      return res.json({ id })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { id, name } = req.body
      await connection('category').where('id', id).update({
        name,
      })
      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('category').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }

    
}