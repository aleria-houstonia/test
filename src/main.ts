import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger"
import { SwaggerModule } from "@nestjs/swagger/dist"
import { AppModule } from "./app.module"

async function start() {
    const PORT=process.env.PORT||5000;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder().setTitle('Test Nestjs')
                                        .setDescription('Docs Rest Api')
                                        .setVersion("1.0.0")
                                        .addTag("houstonia")
                                        .build();
    const doc= SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs',app,doc) ;

    await app.listen(PORT,()=>{console.log( `PORT is ${PORT}`)})
}
start()