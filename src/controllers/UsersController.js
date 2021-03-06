import { loginSSO, registroSSO } from "../services/Apiroutes";

export const login = async (data)=>{
    const response = await loginSSO(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('BadLogin into UsersController');
        console.log('Codigo de respuesta en Login: ' + response.status);
        return response.status
    }
}

export const registro = async (data)=>{
    const response = await registroSSO(data);
    if(response.status === 201 || response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('BadRegister into UsersController');
        console.log('Codigo de respuesta en Registro: '+ response.status);
        return response.status;
    }
}