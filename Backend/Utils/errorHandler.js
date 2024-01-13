class ErrorHandler extends Error {
    constructor(message,statusCode){
        super(statusCode)
        
        this.message = message
    }
    
    
  
}





export default ErrorHandler