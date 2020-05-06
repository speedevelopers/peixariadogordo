const connection = require('../database/connection')

module.exports = {

  async index(req, res){
    try {
      const clients = await connection('client').select('*')
      return res.json(clients)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },

  async findClientByName(req, res){
    try {
      const { name } = req.body
      const clients = await connection('client')
      .select('*')
      .where('name', 'like', '%'+name+'%')
      return res.json(clients)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },

  
  async create(req, res) {
    try {
      const { name,address,number,neighborhood,city,uf,email,whatsapp } = req.body
        
      const [id] = await connection('client').insert({
        name, address, number, neighborhood, city, uf, email, whatsapp
      })
      return res.json({ id })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { id, name, address, number, neighborhood, city, uf, email, whatsapp } = req.body
      await connection('client').where('id', id).update({
        name, address, number, neighborhood, city, uf, email, whatsapp
      })
      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('client').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }

    
}


