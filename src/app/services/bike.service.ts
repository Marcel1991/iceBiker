// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BikeService {

//   constructor() { }
// }



 import { Inject, Injectable, Optional }                      from '@angular/core';
 import { HttpClient, HttpHeaders, HttpParams,
          HttpResponse, HttpEvent }                           from '@angular/common/http';
 import { CustomHttpUrlEncodingCodec }                        from '../encoder';
 
 import { Observable }                                        from 'rxjs';
 
//  import { Producto } from '../model/producto';
 import { Producto } from '../producto';
 
 import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
 import { Configuration }                                     from '../configuration';
 
 
 @Injectable()
 export class BikeService {
 
    //  protected basePath = '/';
     protected basePath = 'https://localhost:7067';
     public defaultHeaders = new HttpHeaders();
     public configuration = new Configuration();
 
     constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
         if (basePath) {
             this.basePath = basePath;
         }
         if (configuration) {
             this.configuration = configuration;
             this.basePath = basePath || configuration.basePath || this.basePath;
         }
     }
 
     /**
      * @param consumes string[] mime-types
      * @return true: consumes contains 'multipart/form-data', false: otherwise
      */
     private canConsumeForm(consumes: string[]): boolean {
         const form = 'multipart/form-data';
         for (const consume of consumes) {
             if (form === consume) {
                 return true;
             }
         }
         return false;
     }
 
     public getAllProducts(name?: number): Observable<Producto[]> {
        if (name) {
          const params = {name};
        //   return this.httpClient.get<Producto[]>(`${this.basePath}/api/producto`, {params});
        }
        console.log("df")
        // return this.httpClient.get<Producto[]>(`${this.basePath}/api/producto`);
        return this.httpClient.request<Producto[]>('get',`${this.basePath}/api/producto`);
      }
 
     /**
      * 
      * 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public apiProductoGet(observe?: 'body', reportProgress?: boolean): Observable<any>;
     public apiProductoGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public apiProductoGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public apiProductoGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<any>('get',`${this.basePath}/api/producto`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public apiProductoIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public apiProductoIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public apiProductoIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public apiProductoIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling apiProductoIdDelete.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<any>('delete',`${this.basePath}/api/producto/${encodeURIComponent(String(id))}`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public apiProductoIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public apiProductoIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public apiProductoIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public apiProductoIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling apiProductoIdGet.');
         }
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
         ];
 
         return this.httpClient.request<any>('get',`${this.basePath}/api/producto/${encodeURIComponent(String(id))}`,
             {
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param id 
      * @param body 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public apiProductoIdPut(id: number, body?: Producto, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public apiProductoIdPut(id: number, body?: Producto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public apiProductoIdPut(id: number, body?: Producto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public apiProductoIdPut(id: number, body?: Producto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
         if (id === null || id === undefined) {
             throw new Error('Required parameter id was null or undefined when calling apiProductoIdPut.');
         }
 
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json',
             'text/json',
             'application/_*+json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<any>('put',`${this.basePath}/api/producto/${encodeURIComponent(String(id))}`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
     /**
      * 
      * 
      * @param body 
      * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
      * @param reportProgress flag to report request and response progress.
      */
     public apiProductoPost(body?: Producto, observe?: 'body', reportProgress?: boolean): Observable<any>;
     public apiProductoPost(body?: Producto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
     public apiProductoPost(body?: Producto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
     public apiProductoPost(body?: Producto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
 
 
         let headers = this.defaultHeaders;
 
         // to determine the Accept header
         let httpHeaderAccepts: string[] = [
         ];
         const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
         if (httpHeaderAcceptSelected != undefined) {
             headers = headers.set('Accept', httpHeaderAcceptSelected);
         }
 
         // to determine the Content-Type header
         const consumes: string[] = [
             'application/json',
             'text/json',
             'application/_*+json'
         ];
         const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
         if (httpContentTypeSelected != undefined) {
             headers = headers.set('Content-Type', httpContentTypeSelected);
         }
 
         return this.httpClient.request<any>('post',`${this.basePath}/api/producto`,
             {
                 body: body,
                 withCredentials: this.configuration.withCredentials,
                 headers: headers,
                 observe: observe,
                 reportProgress: reportProgress
             }
         );
     }
 
 }
 