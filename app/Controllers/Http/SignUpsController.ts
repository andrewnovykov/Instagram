 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class SignUpsController {

  public async  index( {request}: HttpContextContract ) {

    const req = await request.validate({schema:

      schema.create({
          name: schema.string({},[
            rules.required()
          ]),

          email: schema.string({}, [
            rules.email(),
            rules.required()

          ] ),

          password: schema.string({}, [
            rules.confirmed(),
            rules.required()
          ] )
      }),

       messages: {
         'email.required':'field Email is required',
          'name.required':'field Name is required',
          'password.required':'field Passsword is required',
      }

    })



    return request.all()
  }
}
