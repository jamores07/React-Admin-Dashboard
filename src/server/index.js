import { createServer } from "miragejs"
import { mockDataTeam } from "../data/mockData"

createServer({
    routes() {
        this.namespace = "api"
        
        this.get("/team", () => {
            return(mockDataTeam)
        })

    }
})