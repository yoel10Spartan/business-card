import { en } from "../const/en"
import { es } from "../const/es"

const getMessage = (lenguage, key) => {
    return lenguage === 'english' ? en[key] : es[key]
}

export default getMessage