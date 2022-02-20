import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService} from '../rest.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public respuesta:any;
  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe ((paramMap:any)=> {
     const {params} = paramMap
     this.cargarData(params.variable);

  })
  }

  cargarData(id:string){
      this.RestService.get(`http://localhost:40029/contacto/1`)
      .subscribe(respuesta => {
        this.respuesta = respuesta;
        console.log(respuesta);
      })
  }

}
//````````````````````````````````````````````````````````````````````