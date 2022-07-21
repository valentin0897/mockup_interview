export class ErrorMessage{
    message: string
    isActive: boolean

    constructor(){
        this.message = "Something went wrong"
        this.isActive = false
    }

    activateError(message: string){
        this.isActive = true
        this.message = message
    }

    deactivateError(){
        this.isActive = false
        this.message = ""
    }
}