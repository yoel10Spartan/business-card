import axios from "axios"

class ServerConnection{
    constructor(){
        this.data = []
        this.url = process.env.REACT_APP_URL
        this.user = {}
        this.loc = {}
    }

    async getData(){
        try {
            const req = await axios.get(`${this.url}/users`)
            this.data = req.data
            return req.data || []          
        } catch (error) {
            console.log('Error', error);
            return []
        }
    }

    // {email: '', id: 34, }

    filterData(params){
        const keys = Object.keys(params)
        const user = this.data?.filter(item => {
            const val = keys.map((ky) => params[ky] === item[ky])
            const eql = val.every(elem => elem === true)
            return eql ? item : null
        })
        this.user = user[0]
        return user
    }

    async sendEmailData(data){
        try {
            const req = await axios.post(`${this.url}/email`, data)
            return req.data          
        } catch (error) {
            console.log('Error', error);
            return {ok: false}
        }
    }

    async getLocations(){
        try {
            const req = await axios.get(`${this.url}/locations`)
            this.loc = req.data
            return req.data          
        } catch (error) {
            console.log('Error', error);
            return {}
        }
    }
}

export default ServerConnection