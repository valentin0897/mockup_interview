export class infoMessage{
    message: string
    isActive: boolean

    constructor(){
        this.message = "All is good"
        this.isActive = false
    }

    activateInfo(message: string){
        this.isActive = true
        this.message = message
    }

    deactivateInfo(){
        this.isActive = false
        this.message = ""
    }
}