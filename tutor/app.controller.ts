// import { Controller, Get } from "@nestjs/common";
// import { AppService } from "./app.service";

// @Controller('/api') ///параметром этот декоратор принимает префикс,по к-му этот контроллер будет отрабатывать
// export class AppController{

//     constructor(private appService:AppService){}
//     @Get('/users')// помечаем декоратором гет чтобы эта ф-ция стала эндпоинтом и могли отпралять запросы
//     //в параметры путь до эндпойтна
//     getUsers(){
//         return this.appService.getUsers()
//     }
// }