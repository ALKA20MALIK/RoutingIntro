import { 
    Resolve, 
    ActivatedRoute, 
    RouterStateSnapshot, 
    ActivatedRouteSnapshot, 
    Router 
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server{
    id:number;
    name:string;
    status:string;
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor( private serverService:ServersService,private route:ActivatedRoute,
        private router:Router){

        }
resolve(route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot):Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}