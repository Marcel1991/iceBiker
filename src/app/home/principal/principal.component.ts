import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/producto';
import { BikeService } from 'src/app/services/bike.service';
// import * as internal from 'stream';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  productos$: Observable<Producto []>;
  isLoading = false;
  searchForm: FormGroup;
  showCreateUpdateForm: boolean = false;
  producto: Producto;

  constructor(
    private bikeService: BikeService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    // console.table(this.productos$)

    // this.bikeService.getAllProducts().subscribe(resp=>{
    //   console.log(resp);
    // })
    
    this.productos$ = this.bikeService.getAllProducts();
    this.searchForm = this.fb.group({
      name: [null]
    });
     this.name?.valueChanges
      // .pipe(
      //   debounceTime(500),
      // )
      .subscribe((value) => {
        this.search(value);
      });
  }

  getAllProducts(name: number) {
    this.productos$ = this.bikeService.getAllProducts(name);
  }

  get name() {
    return this.searchForm.get('name');
  }
  search(name: number) {
    this.getAllProducts(name);
  }

  apiProductoGet(name: number) {
    this.productos$ = this.bikeService.apiProductoIdGet(name);
  }

  addPokemon() {
    
  }
  editProducto(product: Producto) {
    
  }
  deleteProducto(id: number) {
    
  }

}
