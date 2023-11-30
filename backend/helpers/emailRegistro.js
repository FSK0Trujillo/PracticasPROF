import nodemailer from "nodemailer"


const emailRegistro = async (datos)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });


      const {email, nombre, token} = datos
    // Enviar el Email

    const info = await transporter.sendMail({
        from: "Administrador de Vacantes CAT - AVC",
        to: email,
        subject: "Comprueba tu cuenta en AVC",
        text: "Comprueba tu cuenta en AVC",
        html: `
            <p>Hola: ${nombre}, comprueba tu cuenta en AVC.</p>
            <p>Tu cuenta ya está lista, solo debes comprobarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>

            <p>Si tú no creaste esta cuenta, puedes ignorar este mensaje</p>
        `
    })

}

export default emailRegistro;