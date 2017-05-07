import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Course} from '../common/course';

@Injectable()
export class AppService {
    constructor(private http: Http ){

    }
    getCourses() {
        let url = "/data/info.json";
        return this.http.get(url).toPromise().then((res)=>res.json()).catch(this.error);

    }
    getCourse(id:number){
       return this.getCourses().then(resp => resp.find((co:Course) => co.id == id));
    }
    error(error: any) {
        return Promise.reject(error.message || error);
    }
}

