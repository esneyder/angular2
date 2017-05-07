import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';
import {Course} from './common/course';
import {AppService} from './service/app.service';

@Component({
    selector:"detail",
    templateUrl: './view/detail.html',
    providers: [AppService]
})

export class Detail implements OnInit {
    course:Course;
    constructor(private route:ActivatedRoute, private location: Location,private appSerivice: AppService) {

    }
    ngOnInit(): void {
        this
        .route.params.forEach((params:Params)=>{
            let id = +params['id'];
            console.log(id);
            this.appSerivice.getCourse(id).then(r => this.course = r);
        })
    }

}



