import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from '../../services/peticion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detallado',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule],
  templateUrl: './detallado.component.html',
  styleUrl: './detallado.component.css'
})
export class DetalladoComponent implements OnInit {

  constructor(private actrouter:ActivatedRoute, public peticion:PeticionService){}

  // datos:any[] = []

  ngOnInit(): void {
    
    this.cargarId(this.actrouter.snapshot.params[("_id")])
  }
  

  datos:any = {}

  cargarId(_id:string){

    let data = {
      host:this.peticion.urlHost,
      path:"/productos/ListarId",
      payload:{
        _id:_id
      }
    }

    this.peticion.Post(data.host + data.path, data.payload).then((res:any) =>{
      this.datos = res.datos[0]
    })

  }

}
