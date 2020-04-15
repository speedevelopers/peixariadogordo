const connection = require('../database/connection')
const generateTemporaryPassword = require('../utils/generateTemporaryPassword')
const sendEmail = require('../utils/sendEmail')

module.exports = {

  async index(req, res){
    try {
      const { login, password } = req.params
      const user = await connection('user')
        .where("login", '=', login)
        .where("password", '=', password)

      return res.json(user)
    } catch (error) {
      return res.send('Erro: '+error)
    }
  },
  
  async create(req, res) {
    try {
      const { login } = req.body

      const password = generateTemporaryPassword()
        
      await connection('user').insert({
        login, password
      })

      const data =  {
        to: login,
        html: `<h1>Obrigado por escolher a SpeeDevelopers</h1><br/><br/>
               <h3> Já pode logar no seu site assesando esse link: http://localhost:3333/user/${login}/${password}</h3>`,
      }
      sendEmail(data)

      return res.json({ password })
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async update(req, res) {
    try {
      const { login, password } = req.body
      await connection('user').where('login', login).update({
        login, password
      })
      return res.send({ login, password } )
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      await connection('user').where('id', id).del()

      return res.send()
    } catch (error) {
      return res.send('Erro: '+error)
    }  
  }
}