class APIResponse{
    constructor(status, message, success, data){
        this.status = status
        this.message = message
        this.success = success
        this.data = data
    }
}
export default APIResponse