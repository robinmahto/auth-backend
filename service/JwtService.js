import jwt from "jsonwebtoken";
import {JWT_SECERET} from "../config";
class JwtService {
    static sign(payload, expiry="60s", secret = JWT_SECERET){
       return jwt.sign(payload, secret, {expiresIn: expiry})
    }
}


export default JwtService;