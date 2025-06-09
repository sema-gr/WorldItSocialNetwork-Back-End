import { Request, Response } from 'express'
import userService from './userService'

async function sendCode(req: Request, res: Response){
    const data = req.body
    const resultEmail = await userService.sendEmail(data.email);
    res.json(resultEmail)
}

async function loginUser(req: Request, res: Response){
    const data = req.body
    const result = await userService.login(data.email, data.password)
    res.json(result)
}

async function getUserById(req: Request, res: Response){
    let id = res.locals.userId
    const result = await userService.getUserById(+id);
    res.json(result)
}
async function getUserByReqId(req: Request, res: Response){
    let id = req.params.id
    const result = await userService.getUserById(+id);
    res.json(result)
}

async function registerUser(req: Request, res: Response){
    let {code, ...user} = req.body
    userService.saveCode(user.email, code)
    const result = await userService.verifyCode(user.email, code)

    if (result.success === false){
        console.log(result)
        res.json(result)
        return
    }
    const resultUser = await userService.registration(user)
    
    res.json(resultUser)
}

async function updateUserById(req: Request, res: Response){
    let id = +req.params.id
    let data = req.body
    const user = await userService.updateUserById(data, id);
    if(user.status == 'error'){
        res.send('error')
    }
    else{
        res.json(user.data)
    }
}

async function getUsers(req: Request, res: Response){
    const context = await userService.getUsers();
    if(context.status == 'error'){
        res.send('error')
    }
    else{
        res.json(context.data)
    }
}

const userController = {
    registerUser,
    loginUser,
    getUserById,
    sendCode,
    updateUserById,
    getUsers,
    getUserByReqId

}

export default userController