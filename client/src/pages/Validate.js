

export function validate({name,password,confirm}){
    if(confirm == password && name.length > 5 && password.length >7){
        return true
    }else{
        return false
    }
}